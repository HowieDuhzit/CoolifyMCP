# proxies.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/knowledge-base/server/proxies.md
**Generated**: 2025-09-17T04:05:07.845800
**File Size**: 952 bytes
**SHA**: `bdef1d63314d688521cb2f3992df9ed5e067c8ff`

---

---
title: "Supported Proxy"
description: "A guide for Coolify supported proxies."
---

# Supported Proxy
Coolify supports `Traefik` (default) and `Caddy` (experimental) proxies.

## Switch between proxies

Since `beta.237`, we have added support for Caddy and Traefik as proxies. You can switch between them at any time.

Before you switch proxies and if you have an application that was created before `beta.237`, you need to make sure of the following:

1.  You must have `caddy_*` or `traefik_*` labels on your resources.

::: success Tip
  If you don't have `caddy_*` or `traefik_*` labels: 
  
  1. Automatically: A restart of your resource will add the missing labels. 
  2. Manually: 
      - `For Applications`: click on the `Reset to Coolify Default Labels` button. 

      - `For Services`: simply save the service - it will automatically add required labels.
:::

2. You need to restart your service so that the new labels will be applied.

