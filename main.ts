import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Worst Fix Ever: Funniest Commit Message — one commit subject line.
// The irony is specific to a repair that broke more than it mended:
// the bug is gone, and so is the app it lived in. Short, plain, and
// typed the way a tired engineer would type it at the end of a bad day.
// No revert, no testing-in-production, no "broke everything" — the joke
// is the contrast between the two halves of one short sentence.
// Note: the two halves do all the work — "the bug is fixed" sets the
// win, "the app is not" takes it away.
// Length check: 37 of 100 characters — the shortest line that still
// reads like a real commit.
const entryText = "fix: the bug is fixed, the app is not";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entryText, "utf8");
