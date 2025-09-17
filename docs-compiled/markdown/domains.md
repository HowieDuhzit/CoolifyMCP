# domains.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/knowledge-base/domains.md
**Generated**: 2025-09-17T04:05:07.840761
**File Size**: 1068 bytes
**SHA**: `407b158cdf84d4bc98501f3c4edf655d19f08ccd`

---

---
title: Domains
---

# Domains
You can easily add your own domains to Coolify or your resources.

All domain fields are capable to generate your proxy configurations based on the following rules:

1. You need to use FQDN (Fully Qualified Domain Name) format: `https://coolify.io`
2. You can give multiple domains, separated by comma: `https://coolify.io,https://www.coolify.io`
3. You can also add a port to the domain, so the proxy will know which port you would like to map to the domain: `https://coolify.io:8080,http://api.coolify.io:3000`

## Wildcard Domain

You can set a wildcard domain (`example: http://example.com`) to your server, so you can easily assign generated domains to all the resources connected to this server. [More details](/knowledge-base/server/introduction#wildcard-domain)

## DNS Validation

Since version `beta.191`, Coolify will validates DNS records for your domains with `1.1.1.1` Cloudflare DNS server.

If you want to use different DNS server, go to your `Settings` page and change the `DNS Servers` field (comma separated list).

