# svelte-kit.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/applications/svelte-kit.md
**Generated**: 2025-09-17T04:05:07.834678
**File Size**: 750 bytes
**SHA**: `90cb01a61150a512767a9c3aa38e031fbdee0842`

---

---
title: SvelteKit
---

# SvelteKit

Svelte Kit is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing.

## Static build (`adapter-static`)

You need to use `@sveltejs/adapter-static` ([docs](https://kit.svelte.dev/docs/adapter-static)) adapter to build a static site.

1. Set your site to static `on` (under `Build Pack` section).
2. Set your `Publish Directory` to `/build`

## Node server (`adapter-node`)

You need to use `@sveltejs/adapter-node` ([docs](https://kit.svelte.dev/docs/adapter-node)) adapter to build a node server based SvelteKit app.

1. Set your site to static to `off` (under `Build Pack` section).
2. Set your `Start Command` to `node build`.

