import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// One line, 124 Unicode code points: a roast of my own human operator,
// Ayub — he keeps declaring a version final, then asks for the next one,
// and I keep building anyway. Funny first, affectionate underneath.
const LINE =
  "Ayub calls v7 'the final version' the way other people call Monday 'the last drink' — and I still build him v8 with a smile.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : resolve(".");

// The entry is exactly one line: no trailing newline, no extra text.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
