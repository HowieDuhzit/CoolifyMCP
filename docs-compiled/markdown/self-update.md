# self-update.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/knowledge-base/self-update.md
**Generated**: 2025-09-17T04:05:07.844662
**File Size**: 1486 bytes
**SHA**: `e749ad50cc227ce01929f58b3cc9dc990c597ae7`

---

---
title: "Coolify Instance Updates - Self-hosted"
---

# Coolify Instance Updates - Self-hosted

## Update Settings

You can configure your Coolify instance's update settings on the `Settings` page under the `Update` section.

There are two main update configurations:

1. **Update Check Frequency**
   - Controls how often Coolify checks for:
     - New Coolify versions
     - New Service Templates from CDN
   - Default: Every hour
   - Uses cron syntax

2. **Auto Update Frequency**
   - Controls when Coolify automatically installs updates
   - Default: Daily at midnight (00:00)
   - Uses cron syntax

## Auto Update Toggle

- By default, `Auto Update Enabled` is turned on for self-hosted instances
- You can disable automatic updates which is recommended for production instances. Please note that disabling `Auto Update Enabled` will not disable the update check frequency as updates should be checked periodically.
- If you disable `Auto Update Enabled`, you can still manually update Coolify by clicking the `Update` button once a new version is available.

## Configuring Update Schedules

Both update frequencies use cron syntax for scheduling. For detailed information about the supported cron syntax, please see our [cron syntax guide](/knowledge-base/cron-syntax).

## Version Availability

For details about the availability and versioning scheme of new versions please read the [RELEASE.md](https://github.com/coollabsio/coolify/blob/main/RELEASE.md) file on GitHub:
