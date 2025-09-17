# github-actions.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/knowledge-base/git/github/github-actions.md
**Generated**: 2025-09-17T04:05:07.841309
**File Size**: 1558 bytes
**SHA**: `50744a60576f7ab48ba7b5b8ab96815f7762b584`

---

---
title: "GitHub Actions"
---

# GitHub Actions
You can use GitHub Actions to build your image and deploy it to Coolify.

Here is an [example repository](https://github.com/andrasbacsai/github-actions-with-coolify) and a [workflow file](https://github.com/andrasbacsai/github-actions-with-coolify/blob/main/.github/workflows/build.yaml) that you can check how it works.

## Process Overview

1. You need to create a [GitHub Action workflow](https://github.com/andrasbacsai/github-actions-with-coolify/blob/main/.github/workflows/build.yaml) file in your repository.

2. You need to build your image and push it to a Docker registry. In the example, I use ghcr.io, but you can use any other registry.

3. You need to create a [Coolify API Token](/api-reference/authorization) and add it to your GitHub repository secrets.
   - `COOLIFY_TOKEN` in the example.

4. In Coolify, you need to setup your deployment type. It could be a simple Dockerfile, Docker Compose or Docker Image based deployment.

5. Get the proper webhook endpoint from Coolify (Your resource / `Webhook` menu) and add it to your GitHub repository secrets.
   - `COOLIFY_WEBHOOK` in the example.

6. Need to send a GET request to that webhook endpoint (authenticated with the token) to trigger the deployment
   ```bash
   curl --request GET "${% raw %}{{ secrets.COOLIFY_WEBHOOK }}{% endraw %}" --header "Authorization: Bearer ${% raw %}{{ secrets.COOLIFY_TOKEN }}{% endraw %}"
   ```

7. That's it! Now you can push to your repository and the deployment will be triggered automatically.

