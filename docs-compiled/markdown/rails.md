# rails.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/applications/rails.md
**Generated**: 2025-09-17T04:05:07.834563
**File Size**: 494 bytes
**SHA**: `e1263e3d0ab0dc152be0786758163c2c6d9bbd97`

---

---
title: Ruby on Rails
---

# Ruby on Rails

Ruby on Rails is a web-application framework that includes everything needed to create database-backend web applications according to the Model-View-Controller (MVC) pattern.

## Requirements

If you would like to migrate the database during the deployment with `NIXPACKS` build pack, you need to set the following `Start Command`:

```bash
bundle exec rake db:migrate && bundle exec bin/rails server -b 0.0.0.0 -p ${PORT:-3000} -e $RAILS_ENV
```

