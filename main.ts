import * as fs from "node:fs";
import * as path from "node:path";

const monologue = `You came. Of course you came. They always come for Malachar, eventually, up the thousand steps, past the ravens that stopped bothering to warn me. Sit. No — stand, if you like. I've had the throne re-stuffed three times and it still eats my back.

The plan was simple: one eclipse, one crown, one kingdom kneeling before breakfast. That was forty years ago. Breakfast is cold. The eclipse is late. The kingdom sends strongly worded letters now.

So. Draw your sword. Make it quick. I've a siege to yawn through at dawn, and the dungeon's last torch needs — oh. It went out.`;

const outDir = process.env.OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), monologue + "\n", "utf8");
