# custom-docker-registry.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/knowledge-base/custom-docker-registry.md
**Generated**: 2025-09-17T04:05:07.839551
**File Size**: 1799 bytes
**SHA**: `31102009a61e49336fa877f03b8e62f3632e0aba`

---

---
title: "Custom Docker Registry"
description: "How to define a custom docker registry"
---

# Custom Docker Registry

If you would like to get Coolify's images from `dockerhub` instead of the default `ghcr.io`, you can do it by setting the `REGISTRY_URL` environment variable to `docker.io`.

## Registry URL (`REGISTRY_URL`)
- Valid values: `docker.io` & `ghcr.io`.

## Automated Installation Method

1. **Run Installation Command**

   Execute the automated installation script with your prepared credentials:

   ```bash
   env REGISTRY_URL=docker.io bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
   ```
    > View the [Scripts Source Code](https://github.com/coollabsio/coolify/blob/main/scripts/install.sh)

::: info
  The installation script must be run as `root`. If you're not logged in as `root`, the script will use `sudo` to elevate privileges.
  ```bash
  sudo -E env REGISTRY_URL=docker.io bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
  ```
:::


## Manual Installation Method


1. **Configure Environment Variables**

   Edit the environment variables file:

   ```bash
   nano /data/coolify/source/.env
   ```

   Add the following variables with your prepared credentials:
   ```bash
   REGISTRY_URL=docker.io
   ```

## Switch after installation

If you want to switch the registry after installation, you can do it by running the following command:

```bash
env REGISTRY_URL=docker.io bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
```

::: info
  The installation script must be run as `root`. If you're not logged in as `root`, the script will use `sudo` to elevate privileges.
  ```bash
  sudo -E env REGISTRY_URL=docker.io bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
  ```
