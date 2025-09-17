# protect-services-with-authentik.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/knowledge-base/proxy/traefik/protect-services-with-authentik.md
**Generated**: 2025-09-17T04:05:07.843873
**File Size**: 2198 bytes
**SHA**: `e47291b6377fdd9459571904557d23d6a42b912f`

---

---
title: "Authentik Forward Authentication Middleware"
description: "A guide to configure Authentik forward authentication with Traefik in Coolify"
---


# Authentik Forward Authentication Middleware
Traefik enables you to secure your applications with authentication by using a [Proxy Provider](https://docs.goauthentik.io/docs/add-secure-apps/providers/proxy/).
This allows you to protect your services with Single Sign-On (SSO).

## Configure an Authentik Application and Proxy Provider

The first step is to deploy the [Authentik service](/services/authentik) and then configure the required components:

- Create a Proxy Provider with forward authentication.
- Create an application and assign the Proxy Provider you created.
- In the "Cookie Domain" field, add the domain of the services.

## Create the Traefik Configuration

The next step is to add the Traefik middleware configuration to your instance's dynamic configuration.

Replace `AUTHENTIK_SERVER_HOST` with your instance name, e.g., `authentik-server-ncoc0ooog0ckwc0gwgoocgs8`.

```yaml
http:
  middlewares:
    authentik-auth:
      forwardAuth:
        address: 'http://AUTHENTIK_SERVER_HOST:9000/outpost.goauthentik.io/auth/traefik'
        trustForwardHeader: true
        authResponseHeaders:
          - X-authentik-username
          - X-authentik-groups
          - X-authentik-entitlements
          - X-authentik-email
          - X-authentik-name
          - X-authentik-uid
          - X-authentik-jwt
          - X-authentik-meta-jwks
          - X-authentik-meta-outpost
          - X-authentik-meta-provider
          - X-authentik-meta-app
          - X-authentik-meta-version
```

## Protecting Services

To protect a service, the Traefik middleware label must be added to the container's Docker Compose configuration:

```yaml
services:
  privatebin:
    image: privatebin/nginx-fpm-alpine
    environment:
      - SERVICE_FQDN_PRIVATEBIN_8080
    volumes:
      - 'privatebin_data:/srv/data'
    healthcheck:
      test:
        - CMD-SHELL
        - 'wget -qO- http://127.0.0.1:8080/'
      interval: 5s
      timeout: 20s
      retries: 10
    labels:
      - traefik.http.middlewares.authentik-auth@file
```
