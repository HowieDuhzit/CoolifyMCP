# nuxt.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/applications/nuxt.md
**Generated**: 2025-09-17T04:05:07.834329
**File Size**: 1045 bytes
**SHA**: `b4c56b9a5f2f63062661be9fb55a3f0b020f60b9`

---

---
title: Nuxt
---

# Nuxt

Nuxt is an open source framework that makes web development intuitive and powerful.
Create performant and production-grade full-stack web apps and websites with confidence.

[Example repository.](https://github.com/coollabsio/coolify-examples/tree/main/nuxt)

## Server build (Nuxt, using `nuxt build`)

- Set `Build Pack` to `nixpacks`.
- Set Start Command to `node .output/server/index.mjs`

Alternatively, you can set the `start` script inside package.json to `node .output/server/index.mjs`. Then Nixpacks will automatically use it as the start command.

## Static build (Nuxt, using `nuxt generate`)

- Set `Build Pack` to `nixpacks`.
- Enable `Is it a static site?`.
- Set `Output Directory` to `dist`.

## Nitro server build (Nitro, using `nitro build`)

- Set `Build Pack` to `nixpacks`.
- Set Start Command to `node .output/server/index.mjs`

Alternatively, you can set the `start` script inside package.json to `node .output/server/index.mjs`. Then Nixpacks will automatically use it as the start command.

