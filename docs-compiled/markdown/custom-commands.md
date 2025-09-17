# custom-commands.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/knowledge-base/docker/custom-commands.md
**Generated**: 2025-09-17T04:05:07.840464
**File Size**: 846 bytes
**SHA**: `918cf4d07669b8d701a8543e7cfb89000e4be3a8`

---

---
title: "Custom Commands"
description: "A guide on how to use custom commands for your Docker deployments with Coolify."
---

# Custom Commands
For deploying your resources, you can add custom options to the final docker command, which is used to run your container.

::: warning Caution
  Some of the docker native options are not supported, because it could break the Coolify's functionality. If you need any of the unsupported options, please [contact us](/get-started/support)
:::

## Supported Options

- `--ip`
- `--ip6`
- `--shm-size`
- `--cap-add`
- `--cap-drop`
- `--security-opt`
- `--sysctl`
- `--device`
- `--ulimit`
- `--init`
- `--ulimit`
- `--privileged`
- `--gpus`

## Usage

You can simply add the options to the `Custom Docker Options` field on the `General` tab of your resource.

Example: `--cap-add SYS_ADMIN --privileged`
