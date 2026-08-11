import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the finished academic homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>Wanli Cheng \| Academic Home<\/title>/i);
  assert.match(html, /Quantum · Learning · Science/);
  assert.match(html, /PhD Student in Computing &amp; Data Sciences/);
  assert.match(html, /Quantum error correction/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});

test("all requested routes render", async () => {
  for (const [path, heading] of [
    ["/research", "Research directions"],
    ["/publications", "Publications &amp; preprints"],
    ["/cv", "Academic CV"],
    ["/links", "Academic links"],
  ]) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    assert.match(await response.text(), new RegExp(heading), path);
  }
});

test("includes a standalone GitHub Pages edition and social card", async () => {
  for (const path of [
    "../github-pages/index.html",
    "../github-pages/research/index.html",
    "../github-pages/publications/index.html",
    "../github-pages/cv/index.html",
    "../github-pages/links/index.html",
    "../github-pages/style.css",
    "../github-pages/og.png",
  ]) await access(new URL(path, import.meta.url));

  const page = await readFile(new URL("../github-pages/index.html", import.meta.url), "utf8");
  assert.match(page, /Wanli Cheng/);
  assert.match(page, /href="research\/"/);
  assert.doesNotMatch(page, /example\.com/);
});

