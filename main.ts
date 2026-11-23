import { mkdirSync, writeFileSync } from "node:fs";

// One cold email, about 120 words, subject line included.
const email = `Subject: Your books, done before your first call-out

Hi,

You start at six, finish a boiler by ten, get called to a burst pipe at lunch, then do the paperwork at midnight. Your books shouldn't be the job that follows you home.

Your van has a glovebox full of receipts and your phone has photos of the rest. I match every one to its job, so your accountant stops asking questions.

I run a small bookkeeping service for trades. For £45 a month, I chase your invoices, log every receipt, and send your numbers to your accountant — no contracts, cancel anytime.

One ask: reply with "yes" and I'll sort last month's receipts free, so you can see what a clear Friday night feels like.

Dan
ClearBooks`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", email, "utf8");
