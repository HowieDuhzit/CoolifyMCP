# terminal-access.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/knowledge-base/server/terminal-access.md
**Generated**: 2025-09-17T04:05:07.846014
**File Size**: 1111 bytes
**SHA**: `f7d417defc37b549351c704e2672cfc2e21c6035`

---

---
title: "Terminal Access"
description: "A guide to using Coolify's Terminal Access feature"
---

# Terminal Access <Badge type="warning" text="^v4.0.0-beta.419" />
The **Terminal Access** feature allows you to enable or disable terminal access for your server and all containers running on it — directly from the Coolify dashboard.


## How to Use Terminal Access
1. Go to the **Servers** section in the sidebar.
2. Select your server.
3. Go to the **Configuration** tab.
4. Open the **Advanced** section.
5. Use the toggle button to enable or disable terminal access for the server.

<ZoomableImage src="/docs/images/knowledge-base/servers/terminal-access/1.webp" />

::: warning Note:
Disabling Terminal Access affects **all terminals** on the server, including access to all containers running on that server.
:::


## Terminal Access Control
As of **v4.0.0-beta.419**, only the **root user** and **admin users** have permission to use the Terminal Access feature.

When terminal access is disabled, no one can access the terminal including root and admin users for the server or any of its containers.

