# dragonfly.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/databases/dragonfly.md
**Generated**: 2025-09-17T04:05:07.835987
**File Size**: 1242 bytes
**SHA**: `f89af853ee9443f7e326a6c41d0bb696f7145997`

---

---
title: DragonFly
---

# DragonFly

![dragonfly](/images/database-logos/dragonfly-dark.svg)

## What is DragonFly

DragonFly is a modern in-memory datastore, designed as a Redis alternative with better scalability and resource efficiency. It offers a Redis-compatible API while providing improved performance on multi-core systems. DragonFly is built to handle high-throughput scenarios and large datasets more efficiently than traditional in-memory datastores.

With its multi-threaded architecture and advanced data structures, DragonFly aims to provide enhanced scalability and performance for applications that require Redis-like functionality on modern hardware.

## Data Persistence
By default, Dragonfly DB does not save data to disk. To enable persistence, set up snapshots manually. 

For example, configure the service with:

 ```yaml
services:
  dragonfly:
    command: 'dragonfly --requirepass XXXXXXXX --dir /data --dbfilename dragonfly-snapshot-{timestamp} --snapshot_cron "*/5 * * * *"'
 ```

You can also trigger manual saves using the SDK's `SAVE` command.

## Links

- [The official website ›](https://dragonflydb.io/?utm_source=coolify.io)
- [GitHub ›](https://github.com/dragonflydb/dragonfly?utm_source=coolify.io)
