# oracle-cloud.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/knowledge-base/server/oracle-cloud.md
**Generated**: 2025-09-17T04:05:07.845586
**File Size**: 1162 bytes
**SHA**: `7f66c80e50bcaa891c535fe70ded8b94bf07bcba`

---

---
title: "Oracle Cloud"
description: "A guide to use Oracle Cloud servers in Coolify"
---

# Oracle Cloud
If you are using `Oracle Cloud free ARM server`, you need to do a few extra steps to use it in Coolify, as a `Coolify instance` or just a `remote server`.

## Normal user
Non-root user is in `experimental` mode and works with `sudo`.
- Make sure the ssh key is added to the user's `~/.ssh/authorized_keys` file.
- All configuration is set for sudo. Details [here](/knowledge-base/server/non-root-user).

## Setup Root User

By default, you can't login as root user. You need to do the following steps to enable root user.

1. Switch to root user `sudo su -`
2. Edit `/etc/ssh/sshd_config` and change `PermitRootLogin` to `without-password`.
3. Restart ssh service `service sshd restart`
4. Add a public key to `/root/.ssh/authorized_keys` file which is also defined in your Coolify instance.

## Firewall Rules

This is only required if you self-host Coolify on Oracle ARM server.

By default, Oracle ARM server has a firewall enabled and you need to allow some ports to use Coolify.

For more details, check [this](/knowledge-base/server/firewall) page.
