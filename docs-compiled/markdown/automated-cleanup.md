# automated-cleanup.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/knowledge-base/server/automated-cleanup.md
**Generated**: 2025-09-17T04:05:07.844764
**File Size**: 1807 bytes
**SHA**: `34a49b877cdad335954f2fb424ad3274251882b4`

---

---
title: "Automated Docker Cleanup"
description: "A guide on how to configure the automated Docker cleanup feature in Coolify and what it does."
---

# Automated Docker Cleanup
Coolify includes an automated Docker cleanup feature to prevent servers from running out of disk space. This guide explains how to configure it and what it does.

## Configuration

You can configure the automated cleanup under:
`Servers` > `YOUR_SERVER` > `Configuration` > `Advanced`

### Available Settings

1. **Docker Cleanup Threshold**
   - Sets the disk percentage threshold that triggers the cleanup.
   - Example: If set to 80%, cleanup will be triggered when disk usage exceeds 80%.

2. **Docker Cleanup Frequency**
   - Schedule cleanups using [cron expressions](/knowledge-base/cron-syntax) when `Force Docker Cleanup` is enabled.

::: success Tip
- We recommend enabling `Force Docker Cleanup` and scheduling cleanups using cron syntax.
- This provides more reliable cleanup behavior compared to relying on a disk threshold.
:::

3. **Optional Cleanups**
   - Enable unused volumes cleanup (note: this can lead to data loss).
   - Enable unused networks cleanup.

## How It Works

### Safety Measures
- If there is an ongoing deployment, the cleanup will not be triggered to prevent any issues, like deleting the image that is currently being used.
- Only Coolify-managed resources are affected.

### Cleanup Process
When triggered (either by schedule or disk threshold), the system performs the following actions:

- Removes stopped containers managed by Coolify (no data loss as containers are non-persistent).
- Deletes unused Docker images.
- Clears Docker build cache.
- Removes old versions of Coolify helper images.
- Removes unused Docker volumes (if enabled).
- Removes unused Docker networks (if enabled).
