# wordpress-multisite.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/knowledge-base/how-to/wordpress-multisite.md
**Generated**: 2025-09-17T04:05:07.842296
**File Size**: 1494 bytes
**SHA**: `50a399e9d7bf5ab3bc40945068b3151379e9fde3`

---

---
title: "Using WordPress Multisite with Coolify"
description: "Here you can find the documentation for configuring WordPress Multisite with Coolify."
---


# Using WordPress Multisite with Coolify

1. Add WordPress with one-click installation
  Add a WordPress service with the one-click installation feature in Coolify.

2. Persist WordPress files on the host machine
  Change the following lines in your `docker-compose.yml` file from the UI to persist the WordPress files on the host machine:
    ```yaml
    volumes:
      - "wordpress-files:/var/www/html"
    ```
    to:
    ```yaml
    volumes:
      - "./wordpress:/var/www/html"
    ```
    This will mount the `wordpress` directory in the default configuration directory (`/data/coolify/services/<serviceUuid>/`) to the `/var/www/html` directory in the container. This way, you can edit the files on your host machine and see the changes reflected in the container.

3. Configure WordPress
    Start the Wordpress service and configure it as you wish.

4. Disable all plugins
    -  Go to your WordPress admin panel.
    -  Go to `Plugins` -> `Installed Plugins`.
    -  Select all plugins and choose `Deactivate` from the dropdown menu.

5. Enable Multisite
    Open your `wp-config.php` file on the server and add the following lines:
    ```php
      define( 'WP_ALLOW_MULTISITE', true );
    ```
    Refresh your WordPress panel in your browser. You should now see a new menu item called `Network Setup` under the `Tools` menu.
