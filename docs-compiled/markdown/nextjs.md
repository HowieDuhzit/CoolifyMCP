# nextjs.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/applications/nextjs.md
**Generated**: 2025-09-17T04:05:07.834226
**File Size**: 918 bytes
**SHA**: `271701689487ec13d709bbcc66ca2ae910989335`

---

---
title: NextJS
---

# NextJS

NextJS is a React framework that enables functionality such as server-side rendering and generating static websites.

[Example repository.](https://github.com/coollabsio/coolify-examples/tree/main/nextjs)

## Deploy with Nixpacks

### Server build (NodeJS)

- Set `Build Pack` to `nixpacks`.

### Static build (SPA)

- Set `Build Pack` to `nixpacks`.
- Enable `Is it a static site?`.
- Set `Output Directory` to `out`.

## Deploy with Dockerfile

If you are having problems with Nixpacks or want more control over the building stage, you can use a Dockerfile to deploy your NextJS application.

### Prerequisites

1. Set `Ports Exposes` field to `3000`.
2. Create a `Dockerfile` in the root of your project and copy the content from the official [NextJS Repository](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile).
3. Set the Build Pack to `Dockerfile`.

