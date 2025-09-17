# phoenix.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/applications/phoenix.md
**Generated**: 2025-09-17T04:05:07.834454
**File Size**: 609 bytes
**SHA**: `2b09ab6092f2a5657682985cfd24d8f0b943d422`

---

---
title: Phoenix
---

# Phoenix

Phoenix is a productive web framework that does not compromise speed and maintainability written in Elixir/Erlang.

## Requirements

- Set `Build Pack` to `nixpacks`
- Set `MIX_ENV` to `prod`
  - It should be a `Build time` environment variable
- Set `SECRET_KEY_BASE` to a random string (https://hexdocs.pm/phoenix/deployment.html#handling-of-your-application-secrets)
  - It should be a `Build time` environment variable
- Set `DATABASE_URL` to your database connection string
  - It should be a `Build time` environment variable
- Set `Ports Exposes` to `4000` (default) 
