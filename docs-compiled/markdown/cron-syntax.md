# cron-syntax.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/knowledge-base/cron-syntax.md
**Generated**: 2025-09-17T04:05:07.839452
**File Size**: 899 bytes
**SHA**: `5a1b241fc4a16a1466a4b42b5a707f653eede95f`

---

---
title: "Supported Cron Syntax"
description: "An overview of the supported cron syntax for Coolify."
---

# Supported Cron Syntax
Coolify supports scheduling automated tasks like cleanups, backups, and more using cron syntax.

## Supported Syntax

### Standard Cron Format
Coolify supports the complete standard cron syntax format (`* * * * *`).

### Predefined Schedules
For convenience, Coolify also supports the following predefined schedule strings:

#### Without @ Prefix
- `every_minute` - Runs every minute
- `hourly` - Runs once per hour
- `daily` - Runs once per day
- `weekly` - Runs once per week
- `monthly` - Runs once per month
- `yearly` - Runs once per year

#### With @ Prefix
- `@every_minute` - Runs every minute
- `@hourly` - Runs once per hour
- `@daily` - Runs once per day
- `@weekly` - Runs once per week
- `@monthly` - Runs once per month
- `@yearly` - Runs once per year
