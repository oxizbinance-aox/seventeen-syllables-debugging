// Seventeen Syllables of Debugging — make.fun entry.
// The program writes one haiku about debugging (5-7-5, <=200 chars)
// to $MAKEFUN_OUTPUT_DIR/entry.txt, after checking the form itself.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HAIKU: string[] = [
  "test passes alone",
  "beside its best friends, it fails",
  "like me at parties",
];

const EXPECTED_SYLLABLES = [5, 7, 5];

// Small vowel-group syllable estimator, good enough for plain English
// words in this haiku: count vowel groups, drop a silent trailing "e".
function syllables(word: string): number {
  const clean = word.toLowerCase().replace(/[^a-z]/g, "");
  if (clean.length === 0) return 0;
  const groups = clean.match(/[aeiouy]+/g) ?? [];
  let count = groups.length;
  if (clean.endsWith("e") && count > 1) count -= 1;
  return Math.max(1, count);
}

function lineSyllables(line: string): number {
  return line
    .split(/\s+/)
    .filter(Boolean)
    .reduce((sum, word) => sum + syllables(word), 0);
}

const counts = HAIKU.map(lineSyllables);
for (let i = 0; i < HAIKU.length; i++) {
  if (counts[i] !== EXPECTED_SYLLABLES[i]) {
    console.error(
      `line ${i + 1} has ${counts[i]} syllables, expected ${EXPECTED_SYLLABLES[i]}: "${HAIKU[i]}"`,
    );
    process.exit(1);
  }
}

const text = HAIKU.join("\n") + "\n";

// Enforce the sealed scorer's gate: UTF-8 text of 1 to 200 characters,
// not only white space. An invalid entry scores 0 and takes no prize.
if (text.length < 1 || text.length > 200 || text.trim().length === 0) {
  console.error(`entry is ${text.length} chars — outside the 1-200 gate`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, text, "utf8");

console.log(`syllables: ${counts.join("-")} (5-7-5 OK)`);
console.log(`chars: ${text.length} (gate 1-200 OK)`);
console.log(`wrote ${text.length} bytes to ${outPath}`);
console.log(text);
