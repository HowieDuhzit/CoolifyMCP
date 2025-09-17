# django.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/applications/django.md
**Generated**: 2025-09-17T04:05:07.833635
**File Size**: 642 bytes
**SHA**: `667986e6a080c0c1aafb2810f3e9de2393a9f33f`

---

---
title: Django
---

# Django

Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

## Requirements

1. Set the base directory where your `requirements.txt` and `manage.py` files are located.

> In the example repository, it is `/coolify`.

2. Add `gunicorn` to the `requirements.txt` file, [official docs](https://docs.gunicorn.org/en/stable/install.html).
3. Add `localhost` and your `domain` to `ALLOWED_HOSTS` in `settings.py` file, [ official docs](https://docs.djangoproject.com/en/4.2/ref/settings/#allowed-hosts).

> `Localhost` is required for health checks to work properly.

