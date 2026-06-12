import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(root, "assets", "product-icons");
const manifestPath = path.join(root, "data", "product-visuals.js");
const context = { window: {} };
vm.runInNewContext(await fs.readFile(path.join(root, "data", "site-data.js"), "utf8"), context);
const products = context.window.RESEARCH_DATA.products;
const userAgent = "Mozilla/5.0 (compatible; AgentIndexVisualCollector/1.0)";

await fs.mkdir(outputDir, { recursive: true });

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&#x2F;", "/")
    .replaceAll("&#47;", "/")
    .replaceAll("&quot;", '"');
}

function getAttribute(tag, name) {
  const match = tag.match(new RegExp(`${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, "i"));
  return decodeHtml(match?.[1] || match?.[2] || match?.[3] || "");
}

function iconCandidates(html, pageUrl) {
  const tags = html.match(/<link\b[^>]*>/gi) || [];
  const declared = tags
    .map((tag) => ({ rel: getAttribute(tag, "rel").toLowerCase(), href: getAttribute(tag, "href") }))
    .filter(({ rel, href }) => href && rel.includes("icon"))
    .sort((a, b) => Number(b.rel.includes("apple-touch")) - Number(a.rel.includes("apple-touch")))
    .map(({ href }) => new URL(href, pageUrl).href);
  const origin = new URL(pageUrl).origin;
  return [...new Set([...declared, `${origin}/apple-touch-icon.png`, `${origin}/favicon.ico`])];
}

function extensionFor(contentType, url) {
  if (contentType.includes("png")) return "png";
  if (contentType.includes("webp")) return "webp";
  if (contentType.includes("jpeg") || contentType.includes("jpg")) return "jpg";
  if (contentType.includes("svg")) return "svg";
  if (contentType.includes("icon") || contentType.includes("ico")) return "ico";
  const extension = new URL(url).pathname.split(".").pop()?.toLowerCase();
  return ["png", "webp", "jpg", "jpeg", "svg", "ico"].includes(extension) ? extension.replace("jpeg", "jpg") : "png";
}

async function fetchWithTimeout(url, type = "arrayBuffer") {
  const response = await fetch(url, {
    headers: { "user-agent": userAgent, accept: "image/avif,image/webp,image/png,image/svg+xml,image/*,*/*;q=0.8" },
    redirect: "follow",
    signal: AbortSignal.timeout(12000),
  });
  if (!response.ok) throw new Error(`${response.status}`);
  if (type === "text") return { response, body: await response.text() };
  const contentType = response.headers.get("content-type") || "";
  const body = Buffer.from(await response.arrayBuffer());
  if (!contentType.includes("image") || body.length < 80 || body.length > 1_500_000) throw new Error("not a usable image");
  return { response, body, contentType };
}

async function collect(product) {
  const website = product.website;
  if (!website) return [product.slug, { source: "", status: "fallback" }];
  let candidates = [];
  try {
    const { response, body } = await fetchWithTimeout(website, "text");
    candidates = iconCandidates(body, response.url);
  } catch {
    try {
      candidates = [`${new URL(website).origin}/favicon.ico`];
    } catch {
      return [product.slug, { source: "", status: "fallback" }];
    }
  }
  candidates.push(`https://www.google.com/s2/favicons?domain_url=${encodeURIComponent(website)}&sz=128`);

  for (const candidate of [...new Set(candidates)]) {
    try {
      const { response, body, contentType } = await fetchWithTimeout(candidate);
      const extension = extensionFor(contentType, response.url);
      const fileName = `${product.slug}.${extension}`;
      const existing = await fs.readdir(outputDir);
      await Promise.all(
        existing
          .filter((name) => name.startsWith(`${product.slug}.`) && name !== fileName)
          .map((name) => fs.rm(path.join(outputDir, name))),
      );
      await fs.writeFile(path.join(outputDir, fileName), body);
      return [product.slug, { icon: `assets/product-icons/${fileName}`, source: candidate, status: "collected" }];
    } catch {
      // Try the next official icon candidate.
    }
  }
  return [product.slug, { source: website, status: "fallback" }];
}

const results = {};
const queue = [...products];
await Promise.all(
  Array.from({ length: 6 }, async () => {
    while (queue.length) {
      const product = queue.shift();
      const [slug, visual] = await collect(product);
      results[slug] = visual;
      console.log(`${visual.status === "collected" ? "✓" : "·"} ${product.name}`);
    }
  }),
);

const ordered = Object.fromEntries(products.map((product) => [product.slug, results[product.slug]]));
await fs.writeFile(manifestPath, `window.PRODUCT_VISUALS = ${JSON.stringify(ordered, null, 2)};\n`);
const collected = Object.values(ordered).filter((item) => item.status === "collected").length;
console.log(`已采集 ${collected}/${products.length} 个产品图标，清单写入 data/product-visuals.js。`);
