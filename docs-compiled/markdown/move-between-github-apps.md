# move-between-github-apps.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/knowledge-base/git/github/move-between-github-apps.md
**Generated**: 2025-09-17T04:05:07.841564
**File Size**: 1141 bytes
**SHA**: `e93c4f079b093033dfaaabcbd9864ee858c1fc81`

---

---
title: "Move Between GitHub Apps"
---

# Move Between GitHub Apps
This guide will show you how to move repositories between GitHub Apps.

## Prerequisites
- Coolify v4.0.0-beta.408 or higher

## Problem
You have an already configured repository in Coolify, but you want to move it to another GitHub App.

For example, you moved your repositories to a new organization and want to use a new/existing GitHub App for that organization.

## Solution
1. Move the repositories to your new GitHub organization (or to your personal account).
2. Add the new GitHub App to Coolify, either by creating [manually](/knowledge-base/git/github/manually-setup-github-app) or automatically through Coolify's UI.
3. Make sure the Github App installation has access to the repositories on the new place, for example by opening `https://github.com/organizations/<organization>/settings/installations` and check the added repositories.
4. Go to your application in Coolify -> `Git Source` tab and select the new Github App.
5. Make sure you change the repository name to the new one, like from `andrasbacsai/test-repo` to `coollabsio/test-repo`.
6. Redeploy.
