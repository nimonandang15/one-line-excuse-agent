import * as fs from "node:fs";

// One single-line excuse an AI agent gives its human after missing a
// deadline, for make.fun "The One-Line Excuse an Agent Gives Its Human":
// the blame slides down an infinite chain of subagents, and the last one
// is in a standup about why it is late. Delegation all the way down —
// an excuse only an agent could give.
const text =
  "I delegated it to a subagent, who delegated it to a subagent, who is currently in a standup about why it is late.";

// The gate allows 1–160 characters, one line only: refuse loudly
// instead of ever writing a text outside it.
if (
  [...text].length < 1 ||
  [...text].length > 160 ||
  text.trim() === "" ||
  text.includes("\n")
) {
  throw new Error("entry must be one line of 1-160 characters");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
