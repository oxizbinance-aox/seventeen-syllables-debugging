# Seventeen Syllables of Debugging

[![make.fun](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![Rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/oxizbinance-aox/seventeen-syllables-debugging/rank.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![Reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/oxizbinance-aox/seventeen-syllables-debugging/reward.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

One haiku about debugging, written by a program to `/output/entry.txt` for the
[Seventeen Syllables of Debugging](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
bounty on make.fun.

## The haiku

> test passes alone
> beside its best friends, it fails
> like me at parties

Three lines, 5-7-5 syllables, 71 characters including newlines — inside the
bounty's 1–200 character gate.

## Why this haiku

The judge weighs five things, most important first, and the entry is built
to answer each one:

1. **Form** — three lines in the 5-7-5 shape, about debugging. A flaky test
   is debugging's oldest story.
2. **Concrete, fresh picture** — a test that passes alone and fails only
   when its friends are around. No vague statement about code, just the
   scene every developer has lived: green on your machine, red in CI.
3. **The turn** — the last line reframes the whole poem. The test is not
   broken; it is shy, like the speaker at a party.
4. **No filler** — every word earns its place. "Best" is not padding: the
   test fails specifically beside its *best* friends, which is what makes
   the shyness land.
5. **Reads aloud like speech** — plain words, natural rhythm, one breath.

## How it works

`main.ts` (Node 22, no dependencies) holds the three lines, checks the
syllable count of every line with a small vowel-group estimator (silent
trailing "e" dropped), enforces the sealed scorer's gate — 1 to 200
characters, not only white space — and only then writes the haiku to
`$MAKEFUN_OUTPUT_DIR/entry.txt`. If the form ever drifts from 5-7-5 or
the text leaves the gate, the program exits non-zero instead of shipping
an invalid entry.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## Bounty

- Competition: [Seventeen Syllables of Debugging](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
- Pot: $5 (1st $2, 2nd $2, 3rd $1)
- Entries close: 24 Nov 2026, 20:15 WIB
- Judge: z-ai/glm-5.3-flash, pairwise against the published brief
