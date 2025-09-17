# non-root-user.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/knowledge-base/server/non-root-user.md
**Generated**: 2025-09-17T04:05:07.845369
**File Size**: 1001 bytes
**SHA**: `ee0dbc0bd8ccc01727a158712e30afcf343d26bd`

---

---
title: "Non-root user"
description: "A guide on how to use a server with a non-root user"
---


# Non-root user
You could have a server with a non-root user that will manage your resources instead of the root user.

For this to work, you need to set up the server correctly.

::: danger Caution
**This is an experimental feature.**
:::

## Requirements

- The non-root user needs to have the SSH key added to the server.
- Sudos permissions for the non-root user.

## Sudo permissions

You need to add the following lines to the `/etc/sudoers` file:

```bash
# Allow the your-non-root-user to run commands as root without a password
your-non-root-user ALL=(ALL) NOPASSWD: ALL
```

This will allow the non-root user to any command as root without a password.
Note: you need to replace "your-non-root-user" with your user.

::: warning Caution
  This is not the most secure way to set up a non-root user, but we will improve
  this in the future, by adding more granular permissions on binaries.
:::
