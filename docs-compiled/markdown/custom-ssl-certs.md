# custom-ssl-certs.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/knowledge-base/proxy/traefik/custom-ssl-certs.md
**Generated**: 2025-09-17T04:05:07.843305
**File Size**: 2104 bytes
**SHA**: `692356a513d6386327a8aa12a808cdf8638ca77f`

---

---
title: "Custom SSL Certificates"
---

# Custom SSL Certificates
If you want to use custom SSL certificates with Traefik, you can easily do so by following the steps below.

On each server, `/data/coolify/proxy` is mounted into the Coolify Proxy (Traefik) container.

You can add your custom SSL certificates in the `/data/coolify/proxy/certs` directory.

1. Generate or request an SSL certificate
    Generate or request an SSL certificate for your domain. It can be a
    self-signed certificate, a certificate from a public CA, or a certificate
    from Let's Encrypt.

    Read more [here](https://certbot.eff.org/instructions) about certbot and Let's Encrypt.

2. Copy the key and cert files to the server
    Copy the key and cert files to the server where your resource that will use the certificate is running.
    Use `scp` or any other method to copy the files.
    
    It should be placed under `/data/coolify/proxy` directory, for example:
    
    ```bash
    scp /path/to/your/domain.cert root@your-server-ip:/data/coolify/proxy/certs/domain.cert
    scp /path/to/your/domain.key root@your-server-ip:/data/coolify/proxy/certs/domain.key
    ```

    ::: tip Tip
    Make sure the directory `/data/coolify/proxy/certs` exists on the server.
    :::

3. Configure Traefik
    You can configure Traefik to use the custom SSL certificates by adding a dynamic configuration file through Coolify's UI or directly adding it to `/data/coolify/proxy/dynamic`:

    ```yaml
    tls:
      certificates:
        - certFile: /traefik/certs/domain.cert
          keyFile: /traefik/certs/domain.key
        - certFile: /traefik/certs/domain2.cert
          keyFile: /traefik/certs/domain2.key
    ```

    ::: tip Tip
      `/traefik` is the directory inside `coolify-proxy` container where
      `/data/coolify/proxy` is mounted.
    ::: 

    Traefik will automatically use this certificate if it matches the domain of the incoming request and the certificate in any of the provided files.


For more information check Traefik's [official documentation](https://doc.traefik.io/traefik/https/tls/).

