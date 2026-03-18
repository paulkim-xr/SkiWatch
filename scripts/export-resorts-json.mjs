import { build } from "esbuild";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";

const outputPath = path.resolve(process.argv[2] ?? "resorts.json");
const tempDir = await mkdtemp(path.join(os.tmpdir(), "skiwatch-resorts-"));
const bundlePath = path.join(tempDir, "export-resorts.mjs");

try {
  await build({
    stdin: {
      contents: `
        import resorts from "./src/data/data";
        import { serializeResorts } from "./src/data/resortJson";
        export default serializeResorts(resorts);
      `,
      resolveDir: process.cwd(),
      sourcefile: "export-resorts-entry.ts",
      loader: "ts",
    },
    bundle: true,
    format: "esm",
    platform: "node",
    outfile: bundlePath,
    tsconfig: path.resolve("tsconfig.json"),
    logLevel: "silent",
  });

  const module = await import(pathToFileURL(bundlePath).href);
  const resorts = module.default;
  await writeFile(outputPath, `${JSON.stringify(resorts, null, 2)}\n`, "utf8");
  console.log(`Wrote ${outputPath}`);
} finally {
  await rm(tempDir, { recursive: true, force: true });
}
