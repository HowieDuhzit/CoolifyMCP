# commands.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/knowledge-base/commands.md
**Generated**: 2025-09-17T04:05:07.839248
**File Size**: 797 bytes
**SHA**: `fabd796e514c2bb03a44f8f19639356fb5aea037`

---

---
title: Commands
---

# Commands
## Root password reset without SMTP
You can use the following method to reset the root user's password, in case you forgot and do not have an SMTP server set, so you cannot request a forgot password.

Login to your server through SSH and execute the following command:

```bash
docker exec -ti coolify sh -c "php artisan root:reset-password"
```

## Root email change
You can change root user's email.

Login to your server through SSH and execute the following command:

```bash
docker exec -ti coolify sh -c "php artisan root:change-email"
```

## Delete a stuck service
 You can easily delete a stucked service.
 
  Login to your server through SSH and execute the following command:

```bash
docker exec -ti coolify sh -c "php artisan services:delete"
```


