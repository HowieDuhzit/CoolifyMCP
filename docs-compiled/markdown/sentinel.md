# sentinel.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/knowledge-base/server/sentinel.md
**Generated**: 2025-09-17T04:05:07.845900
**File Size**: 1437 bytes
**SHA**: `ab2ff5cd7ca29e2c063f39bbaf1fffbd9ad8ae32`

---

---
title: "Sentinel and Metrics"
description: "Learn how to set up and use Sentinel as a Linux API and metrics collection tool for server and container metrics in Coolify"
---

# Sentinel and Metrics

::: danger CAUTION
**This is an experimental feature.**
:::

# Sentinel Overview

[Sentinel](https://github.com/coollabsio/sentinel) is an open-source lightweight container that provides:
- Linux system API
- Server resource monitoring (CPU, RAM usage for now)
- Container resource monitoring (CPU, RAM usage for now)

## Screenshot

<ZoomableImage src="/docs/images/screenshots/sentinel.webp" />

## Configuration

### Enable Sentinel

1. Navigate to `Servers` > `<YOUR_SERVER>` > `Configurations` > `General`
2. Find the `Sentinel` section
3. Toggle `Enable Sentinel`
4. Wait a few moments for the container to be downloaded and start.

### Enable Metrics (Optional)

In the same section, you can enable metrics. Once enabled, you will be able to view the following metrics:
- CPU usage
- Memory consumption (RAM Usage)

::: info Note
Metrics collection is currently NOT available for Docker Compose and Service Template based deployments.
:::

## Viewing Metrics

### Server Metrics
Access server-wide metrics at:

`Servers` > `<YOUR_SERVER>` > `Configurations` > `Metrics`

### Container Metrics
View individual container metrics:
1. Navigate to the specific resource
2. Go to the `Configurations` tab
3. Select the `Metrics` tab


