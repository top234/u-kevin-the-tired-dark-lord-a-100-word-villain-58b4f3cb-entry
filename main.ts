import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

const monologue = `Sit in the right chair, the other one bites. Sword up. Chin up. Now say the prophecy louder. A prophecy only counts if the whole hall hears it, and the hall is full tonight.

Thirty years on this throne. Six heroes before you, all of them mumbling. The trapdoor under your feet, the choir in the walls, I built them all, and none of it works when you rush. I staged every part of this night.

Breathe. Once more, from the top. And when the floor gives way, try to look surprised. The crowd loves a good fall, and so do I.`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), monologue + "\n");
