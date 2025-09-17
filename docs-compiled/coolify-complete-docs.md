# Coolify Documentation - Complete Reference

This document contains the complete Coolify documentation compiled from the official repository.

**Source**: https://github.com/coollabsio/coolify-docs
**Branch**: v4.x
**Generated**: 2025-09-17T04:05:07.830376
**Total Files**: 127

## Table of Contents


### Installation
- [installation.md](#get-started-installation-md)
- [uninstallation.md](#get-started-uninstallation-md)
- [manually-setup-github-app.md](#knowledge-base-git-github-manually-setup-github-app-md)

### Configuration
- [create-root-user-with-env.md](#knowledge-base-create-root-user-with-env-md)
- [define-custom-docker-network-with-env.md](#knowledge-base-define-custom-docker-network-with-env-md)
- [dns-configuration.md](#knowledge-base-dns-configuration-md)
- [environment-variables.md](#knowledge-base-environment-variables-md)
- [dynamic-config.md](#knowledge-base-proxy-traefik-dynamic-config-md)

### Deployment
- [docker-compose.md](#builds-packs-docker-compose-md)
- [dockerfile.md](#builds-packs-dockerfile-md)
- [custom-docker-registry.md](#knowledge-base-custom-docker-registry-md)
- [compose.md](#knowledge-base-docker-compose-md)

### Advanced
- [custom-commands.md](#knowledge-base-docker-custom-commands-md)
- [custom-ssl-certs.md](#knowledge-base-proxy-traefik-custom-ssl-certs-md)

### Other
- [index.md](#api-reference-api-index-md)
- [[operation].md](#api-reference-api-operations--operation--md)
- [authorization.md](#api-reference-authorization-md)
- [django.md](#applications-django-md)
- [index.md](#applications-index-md)
- [jekyll.md](#applications-jekyll-md)
- [laravel.md](#applications-laravel-md)
- [nextjs.md](#applications-nextjs-md)
- [nuxt.md](#applications-nuxt-md)
- [phoenix.md](#applications-phoenix-md)
- [rails.md](#applications-rails-md)
- [svelte-kit.md](#applications-svelte-kit-md)
- [symfony.md](#applications-symfony-md)
- [vite.md](#applications-vite-md)
- [vitepress.md](#applications-vitepress-md)
- [vuejs.md](#applications-vuejs-md)
- [introduction.md](#builds-introduction-md)
- [nixpacks.md](#builds-packs-nixpacks-md)
- [overview.md](#builds-packs-overview-md)
- [static.md](#builds-packs-static-md)
- [servers.md](#builds-servers-md)
- [backups.md](#databases-backups-md)
- [clickhouse.md](#databases-clickhouse-md)
- [dragonfly.md](#databases-dragonfly-md)
- [index.md](#databases-index-md)
- [keydb.md](#databases-keydb-md)
- [mariadb.md](#databases-mariadb-md)
- [mongodb.md](#databases-mongodb-md)
- [mysql.md](#databases-mysql-md)
- [postgresql.md](#databases-postgresql-md)
- [redis.md](#databases-redis-md)
- [ssl.md](#databases-ssl-md)
- [cloud.md](#get-started-cloud-md)
- [concepts.md](#get-started-concepts-md)
- [coolify.md](#get-started-contribute-coolify-md)
- [documentation.md](#get-started-contribute-documentation-md)
- [service.md](#get-started-contribute-service-md)
- [downgrade.md](#get-started-downgrade-md)
- [introduction.md](#get-started-introduction-md)
- [screenshots.md](#get-started-screenshots-md)
- [sponsors.md](#get-started-sponsors-md)
- [support.md](#get-started-support-md)
- [team.md](#get-started-team-md)
- [upgrade.md](#get-started-upgrade-md)
- [usage.md](#get-started-usage-md)
- [videos.md](#get-started-videos-md)
- [index.md](#index-md)
- [webstudio.md](#integrations-webstudio-md)
- [change-localhost-key.md](#knowledge-base-change-localhost-key-md)
- [origin-cert.md](#knowledge-base-cloudflare-origin-cert-md)
- [all-resource.md](#knowledge-base-cloudflare-tunnels-all-resource-md)
- [full-tls.md](#knowledge-base-cloudflare-tunnels-full-tls-md)
- [overview.md](#knowledge-base-cloudflare-tunnels-overview-md)
- [server-ssh.md](#knowledge-base-cloudflare-tunnels-server-ssh-md)
- [single-resource.md](#knowledge-base-cloudflare-tunnels-single-resource-md)
- [commands.md](#knowledge-base-commands-md)
- [cron-syntax.md](#knowledge-base-cron-syntax-md)
- [delete-user.md](#knowledge-base-delete-user-md)
- [create.md](#knowledge-base-destinations-create-md)
- [index.md](#knowledge-base-destinations-index-md)
- [manage.md](#knowledge-base-destinations-manage-md)
- [registry.md](#knowledge-base-docker-registry-md)
- [swarm.md](#knowledge-base-docker-swarm-md)
- [domains.md](#knowledge-base-domains-md)
- [drain-logs.md](#knowledge-base-drain-logs-md)
- [faq.md](#knowledge-base-faq-md)
- [integration.md](#knowledge-base-git-bitbucket-integration-md)
- [integration.md](#knowledge-base-git-gitea-integration-md)
- [github-actions.md](#knowledge-base-git-github-github-actions-md)
- [integration.md](#knowledge-base-git-github-integration-md)
- [move-between-github-apps.md](#knowledge-base-git-github-move-between-github-apps-md)
- [integration.md](#knowledge-base-git-gitlab-integration-md)
- [health-checks.md](#knowledge-base-health-checks-md)
- [backup-restore-coolify.md](#knowledge-base-how-to-backup-restore-coolify-md)
- [hetzner-loadbalancing.md](#knowledge-base-how-to-hetzner-loadbalancing-md)
- [migrate-apps-different-host.md](#knowledge-base-how-to-migrate-apps-different-host-md)
- [ollama-with-gpu.md](#knowledge-base-how-to-ollama-with-gpu-md)
- [private-npm-registry.md](#knowledge-base-how-to-private-npm-registry-md)
- [raspberry-pi-os.md](#knowledge-base-how-to-raspberry-pi-os-md)
- [wordpress-multisite.md](#knowledge-base-how-to-wordpress-multisite-md)
- [scalability.md](#knowledge-base-internal-scalability-md)
- [terminal.md](#knowledge-base-internal-terminal-md)
- [monitoring.md](#knowledge-base-monitoring-md)
- [notifications.md](#knowledge-base-notifications-md)
- [oauth.md](#knowledge-base-oauth-md)
- [overview.md](#knowledge-base-overview-md)
- [persistent-storage.md](#knowledge-base-persistent-storage-md)
- [basic-auth.md](#knowledge-base-proxy-caddy-basic-auth-md)
- [overview.md](#knowledge-base-proxy-caddy-overview-md)
- [basic-auth.md](#knowledge-base-proxy-traefik-basic-auth-md)
- [dashboard.md](#knowledge-base-proxy-traefik-dashboard-md)
- [load-balancing.md](#knowledge-base-proxy-traefik-load-balancing-md)
- [overview.md](#knowledge-base-proxy-traefik-overview-md)
- [protect-services-with-authentik.md](#knowledge-base-proxy-traefik-protect-services-with-authentik-md)
- [redirects.md](#knowledge-base-proxy-traefik-redirects-md)
- [wildcard-certs.md](#knowledge-base-proxy-traefik-wildcard-certs-md)
- [rolling-updates.md](#knowledge-base-rolling-updates-md)
- [aws.md](#knowledge-base-s3-aws-md)
- [introduction.md](#knowledge-base-s3-introduction-md)
- [r2.md](#knowledge-base-s3-r2-md)
- [self-update.md](#knowledge-base-self-update-md)
- [automated-cleanup.md](#knowledge-base-server-automated-cleanup-md)
- [build-server.md](#knowledge-base-server-build-server-md)
- [firewall.md](#knowledge-base-server-firewall-md)
- [introduction.md](#knowledge-base-server-introduction-md)
- [multiple-servers.md](#knowledge-base-server-multiple-servers-md)
- [non-root-user.md](#knowledge-base-server-non-root-user-md)
- [openssh.md](#knowledge-base-server-openssh-md)
- [oracle-cloud.md](#knowledge-base-server-oracle-cloud-md)
- [patching.md](#knowledge-base-server-patching-md)
- [proxies.md](#knowledge-base-server-proxies-md)
- [sentinel.md](#knowledge-base-server-sentinel-md)
- [terminal-access.md](#knowledge-base-server-terminal-access-md)

---

## Documentation Content


## Installation

### installation.md {#get-started-installation-md}

**File Path**: `get-started/installation.md`
**Size**: 10748 bytes
**SHA**: `d2491094b545c11eed334588044e2bdfcd86561c`

```markdown
---
title: Installation
outline: 2
---

<ZoomableImage src="/docs/images/get-started/installation-banner.webp" />

<br />

If you decide to go with **Coolify Cloud**, there's no installation required. Simply visit [Coolify Cloud Registration ↗](https://app.coolify.io/register) to create an account and start using Coolify within minutes!

Below, you'll find instructions for installing Coolify if you prefer to **self-host** it.

## Self-hosted Installation

If you like taking control and managing everything yourself, self-hosting Coolify is the way to go. 

It's completely free (apart from your server costs) and gives you full control over your setup.

::: success ⚡️ Quick Installation (recommended):
```sh
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | sudo bash
```
Run this script in your terminal, and Coolify will be installed automatically. For more details, including firewall configuration and prerequisites, check out the guide below.
:::

## Before You Begin

Before installing Coolify, make sure your server meets the necessary requirements.

### 1. Server Requirements
You need a server with SSH access. This could be:
- A VPS (Virtual Private Server)
- A Dedicated Server
- A Virtual Machine (VM)
- A Raspberry Pi (see our [Raspberry Pi OS Setup Guide ↗](/knowledge-base/how-to/raspberry-pi-os#prerequisites))
- Or any other server with SSH access

:::warning Note:
It’s best to use a fresh server for Coolify to avoid any conflicts with existing applications.
:::

:::info Tip:
If you haven't picked a server provider yet, consider using [Hetzner ↗](https://coolify.io/hetzner). You can even use our [referral link ↗](https://coolify.io/hetzner) to support the project.
:::

### 2. Supported Operating Systems
Coolify supports several Linux distributions:
- Debian-based (e.g., Debian, Ubuntu)
- Redhat-based (e.g., CentOS, Fedora, Redhat, AlmaLinux, Rocky, Asahi)
- SUSE-based (e.g., SLES, SUSE, openSUSE)
- Arch Linux (Note: Not all Arch derivatives are supported)
- Alpine Linux
- Raspberry Pi OS 64-bit (Raspbian)

::: info Note
For some distros (like AlmaLinux), Docker must be pre-installed. If the install script fails, manually install Docker and re-run the script. 

Other Linux distributions may work with Coolify, but have not been officially tested.
:::

### 3. Supported Architectures
Coolify runs on 64-bit systems:
- AMD64
- ARM64

::: warning ⚠️ Note for Raspberry Pi users:
Be sure to use the 64-bit version of Raspberry Pi OS (Raspbian). For details, check our [Raspberry Pi OS Setup Guide ↗](/knowledge-base/how-to/raspberry-pi-os#prerequisites).
:::

### 4. Minimum Hardware Requirements
Your server should have at least:
- **CPU**: 2 cores
- **Memory (RAM)**: 2 GB
- **Storage**: 30 GB of free space

Coolify may function properly on servers with lower specs than those mentioned above, but we recommend slightly higher minimum requirements. 

This ensures that users have sufficient resources to deploy multiple applications without performance issues.

::: warning Heads up!
If you’re running both builds and Coolify on the same server, monitor your resource usage. High resource usage could make your server unresponsive. 

Consider enabling swap space or upgrading your server if needed.
:::

### 5. Server Resources for Your Projects
The resources you need depend on your projects. For example, if you're hosting multiple services or larger applications, choose a server with higher CPU, memory, and storage.

::: success ⚙️ Example Setup:
Andras runs his production apps on a server with:
- **Memory**: 8GB (average usage: 3.5GB)
- **CPU**: 4 cores (average usage: 20–30%)
- **Storage**: 150GB (average usage: 40GB)

This setup comfortably supports:
- 3 NodeJS apps
- 4 Static sites
- Plausible Analytics
- Fider (feedback tool)
- UptimeKuma (uptime monitoring)
- Ghost (newsletters)
- 3 Redis databases
- 2 PostgreSQL databases
:::

## Installation Methods

There are two ways to install Coolify:
- [Quick Installation ↗](#quick-installation-recommended) (Recommended)
- [Manual Installation ↗](#manual-installation)

We highly recommend the **Quick Installation** method as it automates the process and reduces the chance of errors.

---

### Quick Installation (Recommended)

This is the simplest and fastest way to get Coolify up and running.

#### 1. Prepare Your Server
- Log in as the root user (non-root users are not fully supported yet).
- Configure SSH by following the [SSH Settings Guide ↗](/knowledge-base/server/openssh#ssh-settings-configuration).
- Set up your firewall with the help of the [Firewall Guide ↗](/knowledge-base/server/firewall).
- Ensure that [curl ↗](https://curl.se/) is installed (it usually comes pre-installed).

#### 2. Run the Installation Script
Once your server is ready, run:
```sh
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

View the [Script's Source Code ↗](https://github.com/coollabsio/coolify/blob/main/scripts/install.sh)

::: info Tip: 
  If you're not logged in as the root user, run the script with sudo:

  ```sh
  curl -fsSL https://cdn.coollabs.io/coolify/install.sh | sudo bash
  ```
  You can also set up the first admin account directly during the installation. For details, see: [Create Root User with Environment Variables ↗](/knowledge-base/create-root-user-with-env)
:::

There are several environment variables that you can set to customize your Coolify installation.

For example, you can setup a default root user or define the default docker network pool.

See the [Define Custom Docker Network with ENV ↗](/knowledge-base/define-custom-docker-network-with-env) or the [Create Root User with ENV ↗](/knowledge-base/create-root-user-with-env) for more details.

#### 3. Access Coolify
After installation, the script will display your Coolify URL (e.g., `http://203.0.113.1:8000`). Visit this URL, and you'll be redirected to a registration page to create your first admin account.

::: danger ⚠️ CAUTION:
**Immediately create your admin account after installation. If someone else accesses the registration page before you, they might gain full control of your server.**
:::

::: info Note:
If you installed Coolify on a Raspberry Pi within your home network, use your private IP address to access it, as the public IP may not work.
:::

#### What the Installer Does:
- Installs essential tools (curl, wget, git, jq, openssl)
- Installs Docker Engine (version 24+)
- Configures Docker settings (logging, daemon)
- Sets up directories at `/data/coolify`
- Configures SSH keys for server management
- Installs and starts Coolify

::: warning ⚠️ Caution:
Docker installed via snap is not supported!
:::

**The quick installation guide ends here. If you’ve followed the steps above, you can start using Coolify now. The guide below is for those who want to manually install and set up Coolify.**

---


### Manual Installation
For those who prefer more control, you can install Coolify manually. This method requires a few extra steps.

#### Prerequisites
- **SSH**: Ensure SSH is enabled and set up correctly (see [SSH Configuration Guide ↗](/knowledge-base/server/openssh)).
- **curl**: Confirm that [curl ↗](https://curl.se/) is installed.
- **Docker Engine**: Install Docker by following the official [Docker Engine Installation guide](https://docs.docker.com/engine/install/#server) (version 24+).

::: warning ⚠️ Caution:
Docker installed via snap is not supported!
:::

---

Follow these steps for a manual setup:

#### 1. Create Directories
Create the base directories for Coolify under `/data/coolify`:
```sh
mkdir -p /data/coolify/{source,ssh,applications,databases,backups,services,proxy,webhooks-during-maintenance}
mkdir -p /data/coolify/ssh/{keys,mux}
mkdir -p /data/coolify/proxy/dynamic
```

#### 2. Generate & Add SSH Key
Generate an SSH key for Coolify to manage your server:
```sh
ssh-keygen -f /data/coolify/ssh/keys/id.root@host.docker.internal -t ed25519 -N '' -C root@coolify
```
Then, add the public key to your `~/.ssh/authorized_keys`:
```sh
cat /data/coolify/ssh/keys/id.root@host.docker.internal.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

::: info Tip!
If you already have an SSH key, you can skip generating a new one, but remember to add it to your Coolify instance after installation.
:::

#### 3. Setup Configuration Files
Download the necessary files from Coolify’s CDN to `/data/coolify/source`:
```sh
curl -fsSL https://cdn.coollabs.io/coolify/docker-compose.yml -o /data/coolify/source/docker-compose.yml
curl -fsSL https://cdn.coollabs.io/coolify/docker-compose.prod.yml -o /data/coolify/source/docker-compose.prod.yml
curl -fsSL https://cdn.coollabs.io/coolify/.env.production -o /data/coolify/source/.env
curl -fsSL https://cdn.coollabs.io/coolify/upgrade.sh -o /data/coolify/source/upgrade.sh
```

#### 4. Set Permissions
Set the correct permissions for the Coolify files and directories:
```sh
chown -R 9999:root /data/coolify
chmod -R 700 /data/coolify
```

#### 5. Generate Values
Update the `.env` file with secure random values:
```sh
sed -i "s|APP_ID=.*|APP_ID=$(openssl rand -hex 16)|g" /data/coolify/source/.env
sed -i "s|APP_KEY=.*|APP_KEY=base64:$(openssl rand -base64 32)|g" /data/coolify/source/.env
sed -i "s|DB_PASSWORD=.*|DB_PASSWORD=$(openssl rand -base64 32)|g" /data/coolify/source/.env
sed -i "s|REDIS_PASSWORD=.*|REDIS_PASSWORD=$(openssl rand -base64 32)|g" /data/coolify/source/.env
sed -i "s|PUSHER_APP_ID=.*|PUSHER_APP_ID=$(openssl rand -hex 32)|g" /data/coolify/source/.env
sed -i "s|PUSHER_APP_KEY=.*|PUSHER_APP_KEY=$(openssl rand -hex 32)|g" /data/coolify/source/.env
sed -i "s|PUSHER_APP_SECRET=.*|PUSHER_APP_SECRET=$(openssl rand -hex 32)|g" /data/coolify/source/.env
```

::: warning ⚠️ Important:
Run these commands only the first time you install Coolify. Changing these values later can break your installation. Keep them safe!
:::

#### 6. Create Docker Network
Ensure the Docker network is created:
```sh
docker network create --attachable coolify
```

#### 7. Start Coolify
Launch Coolify using Docker Compose:
```sh
docker compose --env-file /data/coolify/source/.env -f /data/coolify/source/docker-compose.yml -f /data/coolify/source/docker-compose.prod.yml up -d --pull always --remove-orphans --force-recreate
```

::: warning ⚠️ Important:
You might have to do `docker login` at this point if you have any issues above.
:::

#### 8. Access Coolify
You can now access Coolify by visiting `http://203.0.113.1:8000` (replace the `203.0.113.1` with the IP address of your server).

If you get stuck at any step, feel free to join our [Discord community ↗](https://coolify.io/discord) and create a post in the support forum channel.

```

---


### uninstallation.md {#get-started-uninstallation-md}

**File Path**: `get-started/uninstallation.md`
**Size**: 2898 bytes
**SHA**: `a4d763dbedd47a89b4e768a1120b5815d9687c72`

```markdown
---
title: Uninstalling Coolify
---

<ZoomableImage src="/docs/images/get-started/uninstallation-banner.webp" />

<br />

If you're using [Coolify Cloud ↗](https://coolify.io/pricing/), you don't need to uninstall Coolify since the Coolify Team manages everything on their servers. 

To stop using Coolify Cloud, simply visit the [Billing page ↗](https://app.coolify.io/subscription/) and cancel your subscription.

For those who **self-host** Coolify and wish to remove it from your server, follow the steps below to uninstall it safely:
- [Stop and Remove Containers](#_1-stop-and-remove-containers)
- [Remove Docker Volumes](#_2-remove-docker-volumes)
- [Remove Docker Network](#_3-remove-docker-network)
- [Delete Coolify Data Directory](#_4-delete-coolify-data-directory)
- [Remove Docker Images](#_5-remove-docker-images)


## 1. Stop and Remove Containers
Stop all Coolify-related Docker containers and remove them to free up system resources.

Run the following commands in your terminal:
```sh
sudo docker stop -t 0 coolify coolify-realtime coolify-db coolify-redis coolify-proxy
sudo docker rm coolify coolify-realtime coolify-db coolify-redis coolify-proxy
```
The `-t 0` flag ensures that the containers stop immediately without waiting for a timeout.


## 2. Remove Docker Volumes
To remove the persistent data stored in Docker volumes for Coolify, run:
```sh
sudo docker volume rm coolify-db coolify-redis
```
::: danger CAUTION!!
  Removing volumes will delete all data stored in them permanently. Ensure you have backups if needed.
:::


## 3. Remove Docker Network
Coolify uses a custom Docker network named coolify. Remove it with the following command:
```sh
sudo docker network rm coolify
```
::: info Info
  If you encounter an error indicating the network is in use, ensure that no containers are using the network before retrying.
:::


## 4. Delete Coolify Data Directory
Remove the directory where Coolify stores its data on your server:
```sh
  sudo rm -rf /data/coolify
```
::: danger CAUTION!
  This will permanently delete all Coolify-related data. Double-check the directory path before executing this command.
:::


## 5. Remove Docker Images
To free up disk space, remove all Docker images used by Coolify by running the following commands:
```sh
sudo docker rmi ghcr.io/coollabsio/coolify:latest
sudo docker rmi ghcr.io/coollabsio/coolify-helper:latest
sudo docker rmi quay.io/soketi/soketi:1.6-16-alpine
sudo docker rmi postgres:15-alpine
sudo docker rmi redis:alpine
```

If you were using the default proxy, also remove its image:
```sh
sudo docker rmi traefik:v3.1
```

If you switched to the Caddy proxy, remove its image instead:
```sh
sudo docker rmi lucaslorentz/caddy-docker-proxy:2.8-alpine
```

---

### Coolify Successfully Uninstalled
After completing these steps, Coolify and all its related resources will be completely removed from your server.

```

---


### manually-setup-github-app.md {#knowledge-base-git-github-manually-setup-github-app-md}

**File Path**: `knowledge-base/git/github/manually-setup-github-app.md`
**Size**: 1992 bytes
**SHA**: `70dbcdedd479e32e4337eb1a71f6b660bf61d9b6`

```markdown
---
title: "Manually Setup GitHub App"
---

# Manually Setup GitHub App
This guide will show you how to manually setup an existing Github App or how to change a currently configured one.

Since `4.0.0-beta.399` you are able to change all the Github App details inside Coolify.


## On Github
1. You will need the `App ID`, `Client ID`, a `Client Secret (generated)`, `Github App Name`, `Webhook Secret`. You can find these on your Github App configuration page.
2. Generate a Private Key on your Github App configuration page (if you already have one, ignore this).


3. Set the `Homepage URL` to `https://app.coolify.io`.
4. Set the `Setup URL` to the following: `https://app.coolify.io/webhooks/source/github/install?source=<source_uuid>` where `source_uuid` will be the newly created source in Coolify.
5. Activate `Webhook` and set the `Webhook URL` to `https://app.coolify.io/webhooks/source/github/events`
6. Set the `Webhook Secret`.
7. In the `Install App` section, Install the app to the organization you want to use.
8. Copy the `Installation ID` from the URL of the page after you installed the Github App.
9. In the `Permissions & Events` section, set the following permissions:
   Repository permissions:
    - Contents: read
    - Metadata: read
    - Email: read
    - Pull Request: read & write (optional, if you want to use the pull request feature)


## On Coolify
0. Add the `Private Key` generated in the previous step as a new `Private Key` in the `Keys & Tokens` section.
1. Go to the `Sources` page and click on the `+` button or edit the existing one.
2. Fill the name and the organization name (optional). Press `Continue`.
3. Click on the `Continue` button on the `Manual Installation` section.
4. Enter the `Github App Name`, `App ID`, `Installation ID`, `Client ID`, `Client Secret` , `Webhook Secret`, select the `Private Key` you added in step 0 and `Save`.
5. If you filled everything correctly, click on the `Sync Name` button. If no errors, then you are done.
```

---


## Configuration

### create-root-user-with-env.md {#knowledge-base-create-root-user-with-env-md}

**File Path**: `knowledge-base/create-root-user-with-env.md`
**Size**: 3005 bytes
**SHA**: `95a900564e2df7044380339dd258e20856a6f12e`

```markdown
---
title: "Create Root User with Environment Variables"
description: "How to create a root user during installation using environment variables"
---

# Create Root User with Environment Variables

Creating the root user during installation is optional but recommended as it prevents the registration page from ever being exposed.

## Validation Requirements

The following requirements must be met for the root user credentials in a production environment.

### Email
- Must be a valid email address
- Must have a valid DNS record
- Maximum length: 255 characters

### Username
- Minimum length: 3 characters
- Maximum length: 255 characters
- Can only contain letters, numbers, spaces, underscores, and hyphens

### Password
- Minimum length: 8 characters
- Must contain both uppercase and lowercase letters
- Must contain at least one number
- Must contain at least one special symbol
- Must not be a commonly used or compromised password

## Automated Installation Method


1. **Prepare Your Credentials**

   Create your root user credentials according to the validation requirements above.

2. **Run Installation Command**

   Execute the automated installation script with your prepared credentials:

   ```bash
   env ROOT_USERNAME=RootUser ROOT_USER_EMAIL=example@example.com ROOT_USER_PASSWORD=Password bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
   ```
    > View the [Scripts Source Code](https://github.com/coollabsio/coolify/blob/main/scripts/install.sh)

::: info
  The installation script must be run as `root`. If you're not logged in as `root`, the script will use `sudo` to elevate privileges.
  ```bash
  sudo -E env ROOT_USERNAME=RootUser ROOT_USER_EMAIL=example@example.com ROOT_USER_PASSWORD=Password bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
  ```
:::

::: warning
  If any of the environment variables values contain a space, wrap the values in double quotes, for example `ROOT_USERNAME="Root User"`.
:::

3. **Complete Setup**
   After configuring the root user credentials, continue with the [installation steps](/get-started/installation#quick-installation-recommended) to complete your Coolify setup.



## Manual Installation Method


1. **Prepare Your Credentials**

   Create your root user credentials according to the validation requirements above.

2. **Configure Environment Variables**

   Edit the environment variables file:

   ```bash
   nano /data/coolify/source/.env
   ```

   Add the following variables with your prepared credentials:
   ```bash
   ROOT_USERNAME=RootUser
   ROOT_USER_EMAIL=example@example.com
   ROOT_USER_PASSWORD=Password
   ```

::: warning
  If any of the environment variables values contain a space, wrap the values in double quotes, for example `ROOT_USERNAME="Root User"`
:::

3. **Complete Setup**
   After configuring the root user credentials, continue with the [installation steps](/get-started/installation#quick-installation-recommended) to complete your Coolify setup.


```

---


### define-custom-docker-network-with-env.md {#knowledge-base-define-custom-docker-network-with-env-md}

**File Path**: `knowledge-base/define-custom-docker-network-with-env.md`
**Size**: 2385 bytes
**SHA**: `bf9924c61fdbdc3946e15b173eaba98f885dc542`

```markdown
---
title: "Define Custom Docker Network with Environment Variables"
description: "How to define a custom docker network with environment variables"
---

# Define Custom Docker Network with Environment Variables

## Validation Requirements

The following requirements must be met for the custom docker network in a production environment.

### Network Name (`DOCKER_ADDRESS_POOL_BASE`)
- Must be a valid CIDR block, like `10.0.0.0/8`.

### Address Pool Size (`DOCKER_ADDRESS_POOL_SIZE`)
- Must be a valid number, like `10`.

### Force Override (`DOCKER_POOL_FORCE_OVERRIDE`)
- This only needed if you already have a docker address pool on the host and you want to override it.

## Automated Installation Method

1. **Prepare Your Credentials**

   Create your root user credentials according to the validation requirements above.

2. **Run Installation Command**

   Execute the automated installation script with your prepared credentials:

   ```bash
   env DOCKER_ADDRESS_POOL_BASE=10.0.0.0/8 DOCKER_ADDRESS_POOL_SIZE=10 bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
   ```
    > View the [Scripts Source Code](https://github.com/coollabsio/coolify/blob/main/scripts/install.sh)

::: info
  The installation script must be run as `root`. If you're not logged in as `root`, the script will use `sudo` to elevate privileges.
  ```bash
  sudo -E env DOCKER_ADDRESS_POOL_BASE=10.0.0.0/8 DOCKER_ADDRESS_POOL_SIZE=10 bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
  ```
:::


3. **Complete Setup**
   After configuring the root user credentials, continue with the [installation steps](/get-started/installation#quick-installation-recommended) to complete your Coolify setup.


## Manual Installation Method


1. **Prepare Your Credentials**

   Create your root user credentials according to the validation requirements above.

2. **Configure Environment Variables**

   Edit the environment variables file:

   ```bash
   nano /data/coolify/source/.env
   ```

   Add the following variables with your prepared credentials:
   ```bash
   DOCKER_ADDRESS_POOL_BASE=10.0.0.0/8
   DOCKER_ADDRESS_POOL_SIZE=10
   DOCKER_POOL_FORCE_OVERRIDE=false
   ```

3. **Complete Setup**
   After configuring the root user credentials, continue with the [installation steps](/get-started/installation#manual-installation) to complete your Coolify setup.


```

---


### dns-configuration.md {#knowledge-base-dns-configuration-md}

**File Path**: `knowledge-base/dns-configuration.md`
**Size**: 2009 bytes
**SHA**: `1062353263d66fae65a389588dd63e966277505f`

```markdown
---
title: "DNS Configuration"
---


# DNS Configuration
In general you need an `A` record for all the domains or subdomains you want to use, pointing to the IP address of your server where you would like to deploy your application.

Note that you can use the same IP address for multiple domains and subdomains.

**In the examples, `1.1.1.1` is your server's IP address.**

## Single Domain

Let's say you want deploy your resource to `example.com` with the IP address `1.1.1.1`.

- You need to set an `A` record for `example.com` pointing to `1.1.1.1`.

::: success Tip
  You can also add `www.example.com` as an `A` record and redirect it inside Coolify with the chosen reverse proxy.
:::

Then you can use `https://example.com` as a FQDN (Fully Qualified Domain Name) for any of your resources, even for your Coolify instance.

## Wildcard Domains

Let's say you want deploy your resource to `*.example.com` with the IP address `1.1.1.1`.

- You need to set an `A` record for `*.example.com` pointing to `1.1.1.1`.

This allows you to use any subdomain of `example.com` as a FQDN (Fully Qualified Domain Name) for any of your resources, even for your Coolify instance.

For example, you can use `https://app.example.com` or `https://api.example.com` as a FQDN.

## Autogenerated Domains

If you set a wildcard domain in your DNS settings, you can also use Coolify to autogenerate domains for your resources.
You just need to go to the `Server` settings and set the `Wildcard Domain` field to your domain, for example `https://example.com`.

Then if you create a new resource:

- You will get a random subdomain for your application, for example `https://random.example.com`.
- Also for your Preview Deployments, for example `https://<PRId>.random.example.com`.

::: success Tip
  The Preview URL template could be modified in the application's page /  `Preview Deployments` tab.
:::

## Instance Domain

If you self-host Coolify, you can set your Coolify instance a custom domain in the `/settings` page.

```

---


### environment-variables.md {#knowledge-base-environment-variables-md}

**File Path**: `knowledge-base/environment-variables.md`
**Size**: 3115 bytes
**SHA**: `35b177bbf751c3ec08dcfc03044f09a5e740938e`

```markdown
---
title: "Environment Variables"
description: "A guide how to use environment variables in Coolify."
---

# Environment Variables

You can define environment variables for your resources, and they will be available in your application.

> Preview Deployments could have different environment variables, so you can test your application as a staging environment for example.

## Build Time Variables

If you would like to set environment variables for the build process, you can do it by setting the checkbox `Build Variable` in the normal view on the UI.

## Shared Variables

You could have 3 types of shared variables:

1. Team Based
2. Project Based
3. Environment Based (production, staging, etc.)

You can set shared variables on their respective pages.

Then you can use these variables anywhere. For example: You defined `NODE_ENV` to `production`.

### Team Based

You can set them on the `Team` page and use it with <code v-pre>{{team.NODE_ENV}}</code>. Do not replace "team" with your actual team name.

### Project Based

You can set them on the `Projects` page, under the gear icon and use it with <code v-pre>{{project.NODE_ENV}}</code>. Do not replace "project" with your actual project name.

### Environment Based

You can set them on the `Environments` page (select a `Project`), under the gear icon and use it with <code v-pre>{{environment.NODE_ENV}}</code> Do not replace "environment" with your actual environment name.

#### Using Shared Variables in Compose File

If you want to use the environment variables in your compose file, you can do so by using the following syntax:

```bash
environment:
  - NODE_ENV=${NODE_ENV}
```

And then in the UI set `NODE_ENV` to your desired shared variable. For example if you want to use a team based variable (make sure you have the `NODE_ENV` variable set in the Team Variables):

```bash
NODE_ENV={{team.NODE_ENV}}
```

## Predefined Variables

Coolify predefines some variables for you, so you can use them in your application or service. All you need to do is to add an environment variable like this to your application or service.

```bash
# For example, you can use this variable in your application
MY_VARIABLE=$SOURCE_COMMIT
# You will have the commit hash of the source code in your application as an environment variable in MY_VARIABLE
```

### Application Variables

#### `COOLIFY_FQDN`

Fully qualified domain name(s) of the application.

#### `COOLIFY_URL`

URL(s) of the application.

#### `COOLIFY_BRANCH`

Branch name of the source code.

#### `COOLIFY_RESOURCE_UUID`

Unique resource identifier generated by Coolify.

#### `COOLIFY_CONTAINER_NAME`

Name of the container generated by Coolify.

#### `SOURCE_COMMIT`

Commit hash of the source code.

#### `PORT`

If not set: it is set to the `Port Exposes`'s first port.

#### `HOST`

If not set: it is set to `0.0.0.0`

### Service Stack Variables

#### `SERVICE_NAME_<SERVICE>`

The service name of a given service in the stack. For example, if you have a service named `web`, you can access it with `SERVICE_NAME_WEB`. Useful for preview deployments where service names will vary.

```

---


### dynamic-config.md {#knowledge-base-proxy-traefik-dynamic-config-md}

**File Path**: `knowledge-base/proxy/traefik/dynamic-config.md`
**Size**: 374 bytes
**SHA**: `0b97ad0b702bf8e4f67ea7b6679c9fa7bf95cbda`

```markdown
---
title: "Dynamic Configurations"
---

# Dynamic Configurations
Dynamic configurations are used to configure Traefik on the fly, without restarting it.

You can add them by going to the `Server/Proxy` view, and select `Dynamic Configurations` from the sidebar.

::: tip Tip
  Some of the dynamic configurations cannot be deleted, as they required for
  Coolify itself.
:::
```

---


## Deployment

### docker-compose.md {#builds-packs-docker-compose-md}

**File Path**: `builds/packs/docker-compose.md`
**Size**: 9302 bytes
**SHA**: `1e5e25a91dd2081289edd5e1161b2256c724ddba`

```markdown
---
title: Docker Compose Build Packs
---

<ZoomableImage src="/docs/images/builds/packs/compose/banner.webp" />
<br />

Docker Compose lets you deploy multiple Docker containers and configure them easily.

With the Docker Compose build pack, you can use your own Docker Compose file (i.e. `docker-compose.y[a]ml`) as the single source of truth, giving you full control over how your application is built and deployed on Coolify.

## How to use Docker Compose?

### 1. Create a New Resource in Coolify

On the Coolify dashboard, open your project and click the **Create New Resource** button.

<ZoomableImage src="/docs/images/builds/packs/compose/1.webp" />

### 2. Choose Your Deployment Option

<ZoomableImage src="/docs/images/builds/packs/compose/2.webp" />

**A.** If your Git repository is public, choose the **Public Repository** option.

**B.** If your repository is private, you can select **Github App** or **Deploy Key**. (These methods require extra configuration. You can check the guides on setting up a [Github App ↗](/knowledge-base/git/github/integration#with-github-app-recommended) or [Deploy Key ↗](/knowledge-base/git/github/integration#with-deploy-keys) if needed.)

### 3. Select Your Git Repository

If you are using a public repository, paste the URL of your GitHub repository when prompted. The steps are very similar for all other options.

<ZoomableImage src="/docs/images/builds/packs/compose/3.webp" />

### 4. Choose the Build Pack

Coolify defaults to using Nixpacks. Click the Nixpacks option and select **Docker Compose** as your build pack from the dropdown menu.

<ZoomableImage src="/docs/images/builds/packs/compose/4.webp" />

### 5. Configure the Build Pack

<ZoomableImage src="/docs/images/builds/packs/compose/5.webp" />

- **Branch:** Coolify will automatically detect the branch in your repository.
- **Base Directory:** Enter the directory that Coolify should use as the root. Use `/` if your files are at the root or specify a subfolder (like `/backend` for a monorepo).
- **Docker Compose Location:** Enter the path to your Docker Compose file, this path is combined with the Base Directory. Make sure the file extension matches exactly, if it doesn’t then Coolify won’t be able to load it.

Click on **Continue** button once you have set all the above settings to correct details.

## Advanced Configuration

### Defining Environment Variables

Coolify automatically detects environment variables mentioned in your compose file and displays them in the UI. For example:

```yaml
services:
  myservice:
    environment:
      - SOME_HARDCODED_VALUE=hello # Passed to the container, but not visible in Coolify's UI.
      - SOME_VARIABLE=${SOME_VARIABLE_IN_COOLIFY_UI} # Creates an editable, uninitialized variable in the UI.
      - SOME_DEFAULT_VARIABLE=${OTHER_NAME_IN_COOLIFY:-hello} # Sets a default value "hello" that can be edited.
```

<ZoomableImage src="/docs/images/builds/packs/compose/6.webp" />

### Required Environment Variables

You can mark environment variables as required using the `:?` syntax. Required variables must be set before deployment and will be highlighted in Coolify's UI with a red border if empty.

```yaml
services:
  myapp:
    environment:
      # Required variables - deployment will fail if not set
      - DATABASE_URL=${DATABASE_URL:?}
      - API_KEY=${API_KEY:?}

      # Required variables with default values - prefilled in UI but can be changed
      - PORT=${PORT:?3000}
      - LOG_LEVEL=${LOG_LEVEL:?info}

      # Optional variables - standard behavior
      - DEBUG=${DEBUG:-false}
      - CACHE_TTL=${CACHE_TTL:-3600}
```

**Key behaviors:**

- **Required variables** (`${VAR:?}`) appear first in the environment variables list and show a red border when empty
- **Required with defaults** (`${VAR:?default}`) are prefilled with the default value but remain editable
- **Optional variables** (`${VAR:-default}`) use standard Docker Compose behavior

If a required variable is not set during deployment:

- Coolify will highlight the missing variable in the UI
- The deployment will be prevented until all required variables are provided
- Clear error messages guide users to fix the configuration

This validation happens before container creation, preventing partial deployments and runtime failures.

### Coolify's Magic Environment Variables

Coolify can generate dynamic environment variables for you using the following syntax: `SERVICE_<TYPE>_<IDENTIFIER>`.

::: warning HEADS UP!
Support for Magic Environment Variables in Compose files based on Git sources has been added in Coolify v4.0.0-beta.411
:::

The types include:

- **FQDN:** Generates a fully qualified domain name for the service.
- **URL:** Generates a URL based on the defined FQDN.
- **USER:** Creates a random username.
- **PASSWORD:** Creates a password (use `PASSWORD_64` for a 64-bit long password).
- **BASE64:** Generates a random string (use `BASE64_64` or `BASE64_128` for longer strings).
- **REALBASE64:** Generates a base64-encoded random string (use `REALBASE64_64` or `REALBASE64_128` for longer strings).

Every generated variable is consistent across all services in your stack and appears in Coolify's UI (except FQDN and URL, which are fixed).

For example, if your application UUID is `vgsco4o` and you deploy Appwrite on the wildcard domain `http://example.com`, you might include:

```yaml
services:
  appwrite:
    environment:
      # Generates FQDN: http://appwrite-vgsco4o.example.com/v1/realtime
      - SERVICE_FQDN_APPWRITE=/v1/realtime

      # Uses the FQDN for _APP_URL.
      - _APP_URL=$SERVICE_FQDN_APPWRITE

      # Proxies to port 3000.
      - SERVICE_FQDN_APPWRITE_3000

      # Proxies API requests to port 2000.
      - SERVICE_FQDN_API_2000=/api

      # Generates and injects a password.
      - SERVICE_SPECIFIC_PASSWORD=${SERVICE_PASSWORD_APPWRITE}
  not-appwrite:
    environment:
      # Reuses the password from the Appwrite service.
      - APPWRITE_PASSWORD=${SERVICE_PASSWORD_APPWRITE}
      # Generates a new FQDN for this service.
      - SERVICE_FQDN_API=/api
```

### Storage

You can set up storage in your compose file, with some extra options for Coolify.

#### Create an Empty Directory

Define directories with host binding and inform Coolify to create them:

```yaml
services:
  filebrowser:
    image: filebrowser/filebrowser:latest
    volumes:
      - type: bind
        source: ./srv
        target: /srv
        is_directory: true # Instructs Coolify to create the directory.
```

#### Create a File with Content

Specify a file with predefined content and even include a dynamic value from an environment variable:

```yaml
services:
  filebrowser:
    image: filebrowser/filebrowser:latest
    environment:
      - POSTGRES_PASSWORD=password
    volumes:
      - type: bind
        source: ./srv/99-roles.sql
        target: /docker-entrypoint-initdb.d/init-scripts/99-roles.sql
        content: |
          -- NOTE: Change these passwords for production!
           \set pgpass `echo "$POSTGRES_PASSWORD"`

           ALTER USER authenticator WITH PASSWORD :'pgpass';
           ALTER USER pgbouncer WITH PASSWORD :'pgpass';
```

### Exclude from Healthchecks

If a service should not be part of the overall healthchecks (for example, a one-time migration service), set the `exclude_from_hc` option to `true`:

```yaml
services:
  some-service:
    exclude_from_hc: true
    ...
```

### Connect to Predefined Networks

By default, each compose stack is deployed to a separate network named after your resource UUID. This setup allows each service in the stack to communicate with one another.

If you want to connect services across different stacks (for example, linking an application to a separate database), enable the **Connect to Predefined Network** option on your Service Stack page.

<ZoomableImage src="/docs/images/builds/packs/compose/7.webp" />

Note that you must use the full name (like `postgres-<uuid>`) when referencing a service in another stack.

### Raw Docker Compose Deployment

For advanced users, Coolify offers a "Raw Compose Deployment" mode. This option lets you deploy your Docker Compose file directly without many of Coolify's additional configurations.

<ZoomableImage src="/docs/images/builds/packs/compose/8.webp" />

::: danger CAUTION
This mode is intended for advanced users familiar with Docker Compose.
:::

### Labels

Coolify automatically adds these labels to your application (if not already set):

```yaml
labels:
  - coolify.managed=true
  - coolify.applicationId=5
  - coolify.type=application
```

To enable Coolify's Proxy (Traefik), also include these labels:

```yaml
labels:
  - traefik.enable=true
  - "traefik.http.routers.<unique_router_name>.rule=Host(`shadowarcanist.com`) && PathPrefix(`/`)"
  - traefik.http.routers.<unique_router_name>.entryPoints=http
```

## Known Issues and Solutions

::: details 1. Visiting the Application Domain Shows "No Available Server"
If you see a "No Available Server" error when visiting your website, it is likely due to the health check for your container.

Run `docker ps` on your server terminal to check if your container is unhealthy or still starting.

To resolve this, fix the issue causing the container to be unhealthy or remove the health checks.
:::

```

---


### dockerfile.md {#builds-packs-dockerfile-md}

**File Path**: `builds/packs/dockerfile.md`
**Size**: 4279 bytes
**SHA**: `a1c6a7401b4d9cdb3350fe7fa5cee3da507f8503`

```markdown
---
title: Dockerfile Build Pack
---

<ZoomableImage src="/docs/images/builds/packs/dockerfile/banner.webp" />

<br />

Dockerfile includes step-by-step instructions to build a Docker image that Coolify uses to deploy your application or website. 

The Dockerfile build pack allows you to use your own Dockerfile to deploy your application, you have complete control over how your application is built and deployed on Coolify.


## How to use Dockerfile?
### 1. Create a New Resource in Coolify
On the Coolify dashboard, open your project and click the **Create New Resource** button.

<ZoomableImage src="/docs/images/builds/packs/dockerfile/1.webp" />


### 2. Choose Your Deployment Option

<ZoomableImage src="/docs/images/builds/packs/dockerfile/2.webp" />

**A.** If your Git repository is public, choose the **Public Repository** option.

**B.** If your repository is private, you can select **Github App** or **Deploy Key**. (These methods require extra configuration. You can check the guides on setting up a [Github App ↗](/knowledge-base/git/github/integration#with-github-app-recommended) or [Deploy Key ↗](/knowledge-base/git/github/integration#with-deploy-keys) if needed.)


### 3. Select Your Git Repository
If you are using a public repository, paste the URL of your GitHub repository when prompted. The steps are very similar for all other options.

<ZoomableImage src="/docs/images/builds/packs/dockerfile/3.webp" />


### 4. Choose the Build Pack
Coolify defaults to using Nixpacks. Click the Nixpacks option and select **Dockerfile** as your build pack from the dropdown menu.

<ZoomableImage src="/docs/images/builds/packs/dockerfile/4.webp" />


### 5. Configure the Build Pack
<ZoomableImage src="/docs/images/builds/packs/dockerfile/5.webp" />

- **Branch:** Coolify will automatically detect the branch in your repository.
- **Base Directory:** Enter the directory that Coolify should use as the root. Use `/` if your files are at the root or specify a subfolder (like `/backend` for a monorepo).

Click on **Continue** button once you have set all the above settings to correct details.


### 6. Configure Network Settings
After clicking **Continue**, update settings like your domain and environment variables (if needed). 

The important option is the port where your application runs.
Coolify sets the default port to 3000, so if your application listens on a different port, update the port number on the network section.

<ZoomableImage src="/docs/images/builds/packs/dockerfile/6.webp" />


## Advanced Configuration
### Environment Variables
You can manage your environment variables from the Coolify UI. 

Click on the **Environment Variables** tab to add or update them.

<ZoomableImage src="/docs/images/builds/packs/dockerfile/7.webp" />

### Pre/Post Deployment Commands
<ZoomableImage src="/docs/images/builds/packs/dockerfile/8.webp" />
- **Pre-deployment:** Optionally, specify a script or command to execute in the existing container before deployment begins. This command is run with `sh -c`, so you do not need to add it manually.
- **Post-deployment:** Optionally, specify a script or command to execute in the newly built container after deployment completes. This command is also executed with `sh -c`.


## Known Issues and Solutions
::: details 1. Visiting the Application Domain Shows "No Available Server"
If you see a "No Available Server" error when visiting your website, it is likely due to the health check for your container. 

Run `docker ps` on your server terminal to check if your container is unhealthy or still starting.  

To resolve this, fix the issue causing the container to be unhealthy or remove the health checks.
:::

::: details 2. App only works inside the Container
If your app works when you check it with a `curl localhost` inside the container but you receive a 404 or "No Available Server" error when accessing your domain, verify the port settings.  

Make sure that the port in the network settings matches the port where your application is listening. Also, check the startup log to ensure the application is not only listening on localhost. 

<ZoomableImage src="/docs/images/builds/packs/dockerfile/9.webp" />

If needed, change it to listen on all interfaces (for example, `0.0.0.0`).
:::

```

---


### custom-docker-registry.md {#knowledge-base-custom-docker-registry-md}

**File Path**: `knowledge-base/custom-docker-registry.md`
**Size**: 1799 bytes
**SHA**: `31102009a61e49336fa877f03b8e62f3632e0aba`

```markdown
---
title: "Custom Docker Registry"
description: "How to define a custom docker registry"
---

# Custom Docker Registry

If you would like to get Coolify's images from `dockerhub` instead of the default `ghcr.io`, you can do it by setting the `REGISTRY_URL` environment variable to `docker.io`.

## Registry URL (`REGISTRY_URL`)
- Valid values: `docker.io` & `ghcr.io`.

## Automated Installation Method

1. **Run Installation Command**

   Execute the automated installation script with your prepared credentials:

   ```bash
   env REGISTRY_URL=docker.io bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
   ```
    > View the [Scripts Source Code](https://github.com/coollabsio/coolify/blob/main/scripts/install.sh)

::: info
  The installation script must be run as `root`. If you're not logged in as `root`, the script will use `sudo` to elevate privileges.
  ```bash
  sudo -E env REGISTRY_URL=docker.io bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
  ```
:::


## Manual Installation Method


1. **Configure Environment Variables**

   Edit the environment variables file:

   ```bash
   nano /data/coolify/source/.env
   ```

   Add the following variables with your prepared credentials:
   ```bash
   REGISTRY_URL=docker.io
   ```

## Switch after installation

If you want to switch the registry after installation, you can do it by running the following command:

```bash
env REGISTRY_URL=docker.io bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
```

::: info
  The installation script must be run as `root`. If you're not logged in as `root`, the script will use `sudo` to elevate privileges.
  ```bash
  sudo -E env REGISTRY_URL=docker.io bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
  ```
```

---


### compose.md {#knowledge-base-docker-compose-md}

**File Path**: `knowledge-base/docker/compose.md`
**Size**: 8257 bytes
**SHA**: `ee3e8fafc11415d302b5a8c17063f2cfe8d6d9f6`

```markdown
---
title: "Docker Compose"
description: "A guide on how to use Docker Compose deployments with Coolify."
---

# Docker Compose

If you are using `Docker Compose` based deployments, you need to understand how Docker Compose works with Coolify.

In all cases the Docker Compose (`docker-compose.y[a]ml`) file is the single source of truth.

## Defining environment variables

Coolify will notice the environment variables you mention in your compose file and will display it in its UI.

```yaml
services:
  myservice:
    environment:
      - SOME_HARDCODED_VALUE=hello # Gets passed to the container but will not be visible in Coolify's UI
      - SOME_VARIABLE=${SOME_VARIABLE_IN_COOLIFY_UI} # Creates an uninitialized environment variable editable in Coolify's UI
      - SOME_DEFAULT_VARIABLE=${OTHER_NAME_IN_COOLIFY:-hello} # Creates an environment variable of value "hello" editable in Coolify's UI
```

<ZoomableImage src="/docs/images/screenshots/Docker-compose-environment-variables-UI.webp" />

## Required environment variables

Coolify supports marking environment variables as required using Docker Compose's built-in syntax. This feature improves the deployment experience by validating critical configuration before starting services.

### Syntax

Use the `:?` syntax to mark variables as required:

```yaml
services:
  webapp:
    environment:
      # Required variable - must be set, no default
      - DATABASE_URL=${DATABASE_URL:?}

      # Required variable with default value - prefilled but editable
      - PORT=${PORT:?3000}

      # Optional variable with default - standard Docker Compose behavior
      - DEBUG=${DEBUG:-false}
```

**Key behaviors:**

- **Required variables** (`${VAR:?}`) appear first in the environment variables list and show a red border when empty
- **Required with defaults** (`${VAR:?default}`) are prefilled with the default value but remain editable
- **Optional variables** (`${VAR:-default}`) use standard Docker Compose behavior

If a required variable is not set during deployment:

- Coolify will highlight the missing variable in the UI
- The deployment will be prevented until all required variables are provided
- Clear error messages guide users to fix the configuration

This validation happens before container creation, preventing partial deployments and runtime failures.

## Coolify's magic environment variables

Additionally, Coolify can generate some dynamic environment variables for you.
The syntax is `SERVICE_<TYPE>_<IDENTIFIER>`.
Type may be one of:

- **FQDN**: This will [generate](/knowledge-base/server/introduction#wildcard-domain) an FQDN for the service. The example below shows how you can add paths and ports.
- **URL**: Generates an URL based on the FQDN you have defined.
- **USER**: Generates a random string using `Str::random(16)`. You might want to use it as a username in your service.
- **PASSWORD**: Generates a password using `Str::password(symbols: false)`. Use `PASSWORD_64` to generate a 64 bit long password with `Str::password(length: 64, symbols: false)`.
- **BASE64**: Generates a random string using `Str::random(32)`. For longer strings, use `BASE64_64` or `BASE64_128`.
- **REALBASE64**: Encodes a randomly generated string using `base64_encode(Str::random(32))`. For longer strings, use `REALBASE64_64` or `REALBASE64_128`.

Every generated variable can be reused and will always have the same value for every service.
All generated variables are displayed in Coolify's UI for environment variables and can be edited there (except FQDN and URl).

As an example, imagine an application with UUID `vgsco4o` (generated by Coolify on creation).
It uses a compose file deploying Appwrite on the [wildcard](/knowledge-base/server/introduction#wildcard-domain) domain `http://example.com` .

```yaml
services:
  appwrite:
    environment:
      # http://appwrite-vgsco4o.example.com/v1/realtime
      - SERVICE_FQDN_APPWRITE=/v1/realtime
      # _APP_URL will have the FQDN because SERVICE_FQDN_APPWRITE is just a simple environment variable
      - _APP_URL=$SERVICE_FQDN_APPWRITE
      # http://appwrite-vgsco4o.example.com/ will be proxied to port 3000
      - SERVICE_FQDN_APPWRITE_3000
      # http://api-vgsco4o.example.com/api will be proxied to port 2000
      - SERVICE_FQDN_API_2000=/api
      # Coolify generates password and injects it as SERVICE_SPECIFIC_PASSWORD into the container
      - SERVICE_SPECIFIC_PASSWORD=${SERVICE_PASSWORD_APPWRITE}
  not-appwrite:
    environment:
      # Same value as in Appwrite service
      - APPWRITE_PASSWORD=${SERVICE_PASSWORD_APPWRITE}
      # As SERVICE_FQDN_API is not the same as SERVICE_FQDN_APPWRITE
      # Coolify will generate a new FQDN
      # http://not-appwrite-vgsco4o.example.com/api
      - SERVICE_FQDN_API=/api
```

---

## Storage

You can predefine storage normally in your compose file, but there are a few extra options that you can set to tell Coolify what to do with the storage.

### Create an empty directory

```yaml
# Predefine directories with host binding
services:
  filebrowser:
    image: filebrowser/filebrowser:latest
    volumes:
      - type: bind
        source: ./srv
        target: /srv
        is_directory: true # This will tell Coolify to create the directory (this is not available in a normal docker-compose)
```

### Create a file with content

Here you can see how to add a file with content and a dynamic value that is coming from an environment variable.

```yaml
services:
  filebrowser:
    image: filebrowser/filebrowser:latest
    environment:
      - POSTGRES_PASSWORD=password
    volumes:
      - type: bind
        source: ./srv/99-roles.sql
        target: /docker-entrypoint-initdb.d/init-scripts/99-roles.sql
        content: |
          -- NOTE: change to your own passwords for production environments
           \set pgpass `echo "$POSTGRES_PASSWORD"`

           ALTER USER authenticator WITH PASSWORD :'pgpass';
           ALTER USER pgbouncer WITH PASSWORD :'pgpass';
```

## Exclude from healthchecks

If you have a service that you do not want to be part of your overall healthchecks, you can exclude it from the healthchecks by setting the `exclude_from_hc` option to `true`.

::: success Tip
This is useful for example if you have a migration service that runs only once and then the container stops.
:::

```yaml
services:
  some-service:
    exclude_from_hc: true
    ...
```

## Connect to Predefined Networks

By default, each compose stack is deployed to a separate network, with the name of your resource uuid. This will allow to each service in your stack to communicate with each other.

But in some cases, you would like to communicate with other resources in your account. For example, you would like to connect your application to a database, which is deployed in another stack.

To do this you need to enable `Connect to Predefined Network` option on your `Service Stack` page, but this will make the internal Docker DNS not work as expected.

Here is an example. You have a stack with a `postgres` database and a `laravel` application. Coolify will rename your `postgres` stack to `postgres-<uuid>` and your `laravel` stack to `laravel-<uuid>` to prevent name collisions.

If you set `Connect to Predefined Network` option on your `laravel` stack, your `laravel` application will be able to connect to your `postgres` database, but you need to use the `postgres-<uuid>` as your database host.

## Raw Docker Compose Deployment

You can set up your project to use docker compose build pack to deploy your compose file directly without most of Coolify's magic. It is called `Raw Compose Deployment`.

::: warning Caution
This is for advanced users. If you are not familiar with Docker Compose, we do not recommend this method.
:::

### Labels

Coolify will still add the following labels (if they are not set) to your application:

```yaml
labels:
  - coolify.managed=true
  - coolify.applicationId=5
  - coolify.type=application
```

To use Coolify's Proxy (Traefik), you need to set the following labels to your application:

```yaml
labels:
  - traefik.enable=true
  - "traefik.http.routers.<unique_router_name>.rule=Host(`coolify.io`) && PathPrefix(`/`)"
  - traefik.http.routers.<unique_router_name>.entryPoints=http
```

```

---


## Advanced

### custom-commands.md {#knowledge-base-docker-custom-commands-md}

**File Path**: `knowledge-base/docker/custom-commands.md`
**Size**: 846 bytes
**SHA**: `918cf4d07669b8d701a8543e7cfb89000e4be3a8`

```markdown
---
title: "Custom Commands"
description: "A guide on how to use custom commands for your Docker deployments with Coolify."
---

# Custom Commands
For deploying your resources, you can add custom options to the final docker command, which is used to run your container.

::: warning Caution
  Some of the docker native options are not supported, because it could break the Coolify's functionality. If you need any of the unsupported options, please [contact us](/get-started/support)
:::

## Supported Options

- `--ip`
- `--ip6`
- `--shm-size`
- `--cap-add`
- `--cap-drop`
- `--security-opt`
- `--sysctl`
- `--device`
- `--ulimit`
- `--init`
- `--ulimit`
- `--privileged`
- `--gpus`

## Usage

You can simply add the options to the `Custom Docker Options` field on the `General` tab of your resource.

Example: `--cap-add SYS_ADMIN --privileged`
```

---


### custom-ssl-certs.md {#knowledge-base-proxy-traefik-custom-ssl-certs-md}

**File Path**: `knowledge-base/proxy/traefik/custom-ssl-certs.md`
**Size**: 2104 bytes
**SHA**: `692356a513d6386327a8aa12a808cdf8638ca77f`

```markdown
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

```

---


## Other

### index.md {#api-reference-api-index-md}

**File Path**: `api-reference/api/index.md`
**Size**: 204 bytes
**SHA**: `28573831e9845ebd739d2e4fd2ff6ad0324941df`

```markdown
---
aside: false
outline: false
layout: doc
title: API Reference
toc: false
---

# API

## Need help?

If you need help with the API please get in touch with us on [Discord](https://coollabs.io/discord).

```

---


### [operation].md {#api-reference-api-operations--operation--md}

**File Path**: `api-reference/api/operations/[operation].md`
**Size**: 1561 bytes
**SHA**: `c88951398185ef013d28669e3c430803e8e16913`

```markdown
---
aside: false
outline: false
title: API
toc: false
---

<script setup lang="ts">
import { useData } from 'vitepress'
import { useTheme, generateCodeSample } from 'vitepress-openapi/client'

const { params } = useData()
const operation = params.value.operation

const themeConfig = {
    codeSamples: {
        langs: [
            'bruno',
            ...useTheme().getCodeSamplesLangs(),
        ],
        availableLanguages: [
            {
                lang: 'bruno',
                label: 'Bruno',
                highlighter: 'plaintext',
                icon: 'bruno',
            },
            ...useTheme().getCodeSamplesAvailableLanguages(),
        ],
        defaultLang: 'bruno',
        generator: async (lang, request) => {
            if (lang === 'bruno') {
                return generateBrunoRequest(request) || ''
            }
            return generateCodeSample(lang, request) || ''
        },
    }
}

function generateBrunoRequest(request) {
    if (!request) return ''
    const { method, url, headers, body } = request
    let brunoScript = `${method} ${url}\n`
    
    if (headers && Object.keys(headers).length) {
        brunoScript += '\nHeaders\n'
        for (const [key, value] of Object.entries(headers)) {
            brunoScript += `${key}: ${value}\n`
        }
    }

    if (body) {
        brunoScript += '\nBody\n'
        brunoScript += typeof body === 'string' ? body : JSON.stringify(body, null, 2)
    }

    return brunoScript
}

useTheme(themeConfig)
</script>

<OAOperation :operationId="operation" />

```

---


### authorization.md {#api-reference-authorization-md}

**File Path**: `api-reference/authorization.md`
**Size**: 1662 bytes
**SHA**: `b7f145b01d4267e9af1d189341ed09cc2076e954`

```markdown
---
title: Authorization
layout: doc
description: "Learn how to authorize your API requests."
---

# Authorization
API request requires a `Bearer` token in `Authorization` header, which could be generated from the UI.

## Access

The API can be accesed through `http://<ip>:8000/api`.

With the exception of `/health` and `/feedback`, all routes are additionally prefixed with `/v1` resulting in the base rouce `http://<ip>:8000/api/v1`.

## Generate

1. Go to `Keys & Tokens` / `API tokens`.
2. Define a name for your token and click `Create New Token`.

::: success Tip
  You will see the token once, so make sure to copy it and store it in a safe place.
:::

## Scope

The token will only be able to access resources that are owned by the team that the token is scoped to.

```php
# Sample token
3|WaobqX9tJQshKPuQFHsyApxuOOggg4wOfvGc9xa233c376d7
```

## Permissions

::: warning HEADS UP!
Some API data won't get returned if the API token doesn't have correct permissions
:::

Currently there are three types of permissions:

- read-only `(default)`
- read:sensitive
- view:sensitive
- `*` (all permissions)

### `read-only`

With this permission, you can only read data from the API, but you can't create, update, or delete any resources. Also you can't see sensitive data.

### `read:sensitive`

With this permission, you can only read data from the API and see sensitive information that is normally redacted. You cannot create, update, or delete any resources.

### `view:sensitive`

Without this permission, passwords, api keys, and other sensitive data will be redacted from the API response.

### `*`

Full access to all resources and sensitive data.

```

---


### django.md {#applications-django-md}

**File Path**: `applications/django.md`
**Size**: 642 bytes
**SHA**: `667986e6a080c0c1aafb2810f3e9de2393a9f33f`

```markdown
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

```

---


### index.md {#applications-index-md}

**File Path**: `applications/index.md`
**Size**: 6861 bytes
**SHA**: `1a91df64870a026d0059fed699d9084d04f0687e`

```markdown
---
title: Applications
---

# Applications

Application could be any type of web application. It could be a static site, a NodeJS application, a PHP application, etc.

For complex applications, you can use Docker Compose based deployments or the one-click services.

## Examples
::: info
  The list is not complete.

  You can host almost any application that you want, not just the ones listed here.
:::

- [Vite](/applications/vite)
- [Django](/applications/django)
- [Jekyll](/applications/jekyll)
- [Vue.js](/applications/vuejs)
- [Next.js](/applications/nextjs)
- [Nuxt](/applications/nuxt)
- [Laravel](/applications/laravel)
- [Symfony](/applications/symfony)
- [Ruby on Rails](/applications/rails)
- [SvelteKit](/applications/svelte-kit)


## General Configuration

### Commands

You can overwrite the default commands by setting a custom value on the UI.

- Build
- Install
- Start

::: info
  If you leave it empty, Nixpacks will detect which commands to run. For
  example, in Nodejs, it will check the lock files and run `npm ci` or `yarn
  install` or `pnpm install` accordingly.
:::

### Base Directory

It is useful for monorepos. You can set the base directory for all the commands that will be executed by Coolify.

### Public Directory

If you are building a static site, it is important to set the public directory, so the builder will know which directory to serve.

### Port Exposes

Port exposes are required for Docker Engine to know which ports to expose. The first port will be the default port for health checks.

Examples:

If you have a NodeJS application that listens on port 3000, you can set it like this: `3000`.
If you have a PHP-FPM application that listens on port 9000, you can set it like this: `9000`.
If you have a Nginx server that listens on port 80, you can set it like this: `80`.

### Port Mappings

::: warning
  You will lose some functionality if you map a port to the host system, like
  `Rolling Updates`.
:::

If you would like to map a port to the host system (server), you can do it here like this: `8080:80`.

This will map the port 8080 on the host system to the port 80 inside the container.

::: info
  If you would like to get performance boost and you do not need any domain
  (websocket server with VERY high traffic), you can map its port to the host,
  so the request will not go through the proxy.
:::

## Advanced

### Static Site (Is it a static site?)

> This feature is only available for Nixpacks buildpacks.

If you need to serve a static site (SPA, HTML, etc), you can set this to `true`. It will be served by Nginx. `Disabled by default`.

### Force HTTPS

If you would like to force HTTPS, so no HTTP connections allowed, you can set this to `true`. `Enabled by default`.

### Auto Deploy

> This feature is only available for GitHub App based repositories.

If you would like to deploy automatically when a new commit is pushed to the repository, you can set this to `true`. `Enabled by default`.

### Preview Deployments

Preview deployments are a great way to test your application before merging it into the main branch. Imagine it like a staging environment.

#### URL Template

You can setup your preview URL with a custom template. Default is <span v-pre>`{{pr_id}}.{{domain}}`</span>.

This means that if you open a Pull Request with the ID `123`, and you resource domain is `example.com` the preview URL will be `123.example.com`.

:::success TIP
  If you have several domains for your resource, the first will be used as the{" "}
  <span v-pre>`{{ domain }}`</span> part.
:::

#### Automated Preview Deployments

> This feature is only available for GitHub App based repositories.

If you would like to deploy a preview version of your application (based on a Pull Requests), you can set this to `true`. `Disabled by default`.

If set to `true`, all PR's that are opened against the resource's configured branch, will be deployed to a unique URL.

#### Manually Triggered Preview Deployments

You can manually deploy a Pull Request to a unique URL by clicking on the `Deploy` button on the Pull Request page.

### Git Submodules

If you are using git submodules, you can set this to `true`. `Enabled by default`.

### Git LFS

If you are using git lfs, you can set this to `true`. `Enabled by default`.

### Environment Variables

[Read here](/knowledge-base/environment-variables)

### Persistent Storage

[Read here](/knowledge-base/persistent-storage)

### Health Checks

By default, all containers are checked for liveness.

:::warning
  Traefik Proxy won't work if the container has health check defined, but it is
  `unhealthy`. If you do not know how to set up health checks, turn it off.
:::

### Rollbacks

You can rollback to a previous version of your resource. At the moment, only local images are supported, so you can only rollback to a locally available docker image.

### Resource Limits

By default, the container won't have any resource limits. You can set the limits here. For more details, read the [Docker documentation](https://docs.docker.com/reference/compose-file/services).

## Deployment Types

There are several types of application deployments available.

- Public Git Repository
- Private Git Repository ([GitHub App](https://docs.github.com/en/apps/using-github-apps/about-using-github-apps))
- Private Git Repository ([Deploy Key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys))
- Based on a Dockerfile
- Based on a Docker Compose
- Based on a Docker Image

## Build Packs

These are the supported build packs:

- Nixpacks
- Dockerfile
- Docker Image
- Docker Compose

### Nixpacks

Coolify uses [Nixpacks](https://nixpacks.com) as build pack by default. Nixpacks detect what kind of application are you trying to deploy and builds it accordingly.

But if needed, you can customize it by adding a `nixpacks.toml` file to your repository or setting the right environment variables.

For example, if you are using a NodeJS application, you can set the `NIXPACKS_NODE_VERSION` to control the NodeJS version.

:::success TIP
  Worth reading their [documentation](https://nixpacks.com/docs) to understand
  how it works.
:::

### Dockerfile

Dockerfile based build packs are useful if you have a custom dockerfile inside your Git repository.

#### Custom Dockerfile Location

You can always set your custom dockerfile location. By default, it is set to `/Dockerfile`.

### Docker Image

You can deploy any docker images from any Docker compatible repository. For example, you can deploy images from Docker Hub, GitHub Container Registry, etc.

### Docker Compose

Docker Compose based deployments are useful for complex applications. You can define multiple services in a single `docker-compose.yml` file and deploy them together.

- [Languages/Frameworks](/applications/)
- [Services](/services/overview)

```

---


### jekyll.md {#applications-jekyll-md}

**File Path**: `applications/jekyll.md`
**Size**: 1081 bytes
**SHA**: `af4c6a6261cbe9b992a6a6c66e3938dcf2e4cb1d`

```markdown
---
title: Jekyll
---

# Jekyll

Jekyll is a simple, blog-aware, static site generator for personal, project, or organization sites.

## Deploy with Nixpacks

Nixpacks needs a few prerequisites in your source code to deploy your Jekyll application. More info [here](https://nixpacks.com/docs/providers/ruby).

## Deploy with Dockerfile

If you want simplicity, you can use a Dockerfile to deploy your Jekyll application.

### Prerequisites

1. Set `Ports Exposes` field to `80`.
2. Create a `Dockerfile` in the root of your project with the following content:

```Dockerfile
FROM ruby:3.1.1 AS builder
RUN apt-get update -qq && apt-get install -y build-essential nodejs
WORKDIR /srv/jekyll
COPY Gemfile Gemfile.lock ./
RUN bundle install
COPY . .
RUN chown 1000:1000 -R /srv/jekyll
RUN bundle exec jekyll build -d /srv/jekyll/_site

FROM nginx:alpine
COPY --from=builder /srv/jekyll/_site /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

3. Make sure you have a `Gemfile` and `Gemfile.lock` in the root of your project.
4. Set the buildpack to `Dockerfile`.

```

---


### laravel.md {#applications-laravel-md}

**File Path**: `applications/laravel.md`
**Size**: 12259 bytes
**SHA**: `af5198425558f27b4f2ee64b583d6b0e88078401`

```markdown
---
title: Laravel
---

# Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling.

Example repository [here](https://github.com/coollabsio/coolify-examples/tree/main/laravel).

## Deploy with Nixpacks

### Requirements

- Set `Build Pack` to `nixpacks`
- Set the required [environment variables](#environment-variables)
- Add `nixpacks.toml` with the following [configuration](#all-in-one-container)
- Set `Ports Exposes` to `80`

### Environment Variables

If your application needs a database or Redis, you can simply create them beforehand in the Coolify dashboard.

You will receive the connection strings which you can use in your application and set them as environment variables:

```bash
DB_CONNECTION=mysql
DB_HOST=<DB_HOST>
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=

REDIS_HOST=<REDIS_HOST>
REDIS_PASSWORD=null
REDIS_PORT=6379
```


### All-in-one container

If you would like to start queue worker, scheduler, etc within one container (recommended), then you can place a `nixpacks.toml` inside your repository with the following value.


```toml
[phases.setup]
nixPkgs = ["...", "python311Packages.supervisor"]

[phases.build]
cmds = [
    "mkdir -p /etc/supervisor/conf.d/",
    "cp /assets/worker-*.conf /etc/supervisor/conf.d/",
    "cp /assets/supervisord.conf /etc/supervisord.conf",
    "chmod +x /assets/start.sh",
    "..."
]

[start]
cmd = '/assets/start.sh'

[staticAssets]
"start.sh" = '''
#!/bin/bash

# Transform the nginx configuration
node /assets/scripts/prestart.mjs /assets/nginx.template.conf /etc/nginx.conf

# Start supervisor
supervisord -c /etc/supervisord.conf -n
'''

"supervisord.conf" = '''
[unix_http_server]
file=/assets/supervisor.sock

[supervisord]
logfile=/var/log/supervisord.log
logfile_maxbytes=50MB
logfile_backups=10
loglevel=info
pidfile=/assets/supervisord.pid
nodaemon=false
silent=false
minfds=1024
minprocs=200

[rpcinterface:supervisor]
supervisor.rpcinterface_factory = supervisor.rpcinterface:make_main_rpcinterface

[supervisorctl]
serverurl=unix:///assets/supervisor.sock

[include]
files = /etc/supervisor/conf.d/*.conf
'''

"worker-nginx.conf" = '''
[program:worker-nginx]
process_name=%(program_name)s_%(process_num)02d
command=nginx -c /etc/nginx.conf
autostart=true
autorestart=true
stdout_logfile=/var/log/worker-nginx.log
stderr_logfile=/var/log/worker-nginx.log
'''

"worker-phpfpm.conf" = '''
[program:worker-phpfpm]
process_name=%(program_name)s_%(process_num)02d
command=php-fpm -y /assets/php-fpm.conf -F
autostart=true
autorestart=true
stdout_logfile=/var/log/worker-phpfpm.log
stderr_logfile=/var/log/worker-phpfpm.log
'''

"worker-laravel.conf" = '''
[program:worker-laravel]
process_name=%(program_name)s_%(process_num)02d
command=bash -c 'exec php /app/artisan queue:work --sleep=3 --tries=3 --max-time=3600'
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
numprocs=12 # To reduce memory/CPU usage, change to 2.
startsecs=0
stopwaitsecs=3600
stdout_logfile=/var/log/worker-laravel.log
stderr_logfile=/var/log/worker-laravel.log
'''

"php-fpm.conf" = '''
[www]
listen = 127.0.0.1:9000
user = www-data
group = www-data
listen.owner = www-data
listen.group = www-data
pm = dynamic
pm.max_children = 50
pm.min_spare_servers = 4
pm.max_spare_servers = 32
pm.start_servers = 18
clear_env = no
php_admin_value[post_max_size] = 35M
php_admin_value[upload_max_filesize] = 30M
'''

"nginx.template.conf" = '''
user www-data www-data;
worker_processes 5;
daemon off;

worker_rlimit_nofile 8192;

events {
  worker_connections  4096;  # Default: 1024
}

http {
    include    $!{nginx}/conf/mime.types;
    index    index.html index.htm index.php;

    default_type application/octet-stream;
    log_format   main '$remote_addr - $remote_user [$time_local]  $status '
        '"$request" $body_bytes_sent "$http_referer" '
        '"$http_user_agent" "$http_x_forwarded_for"';
    access_log /var/log/nginx-access.log;
    error_log /var/log/nginx-error.log;
    sendfile     on;
    tcp_nopush   on;
    server_names_hash_bucket_size 128; # this seems to be required for some vhosts

    server {
        listen ${PORT};
        listen [::]:${PORT};
        server_name localhost;

        $if(NIXPACKS_PHP_ROOT_DIR) (
            root ${NIXPACKS_PHP_ROOT_DIR};
        ) else (
            root /app;
        )

        add_header X-Content-Type-Options "nosniff";

        client_max_body_size 35M;
     
        index index.php;
     
        charset utf-8;
     

        $if(NIXPACKS_PHP_FALLBACK_PATH) (
            location / {
                try_files $uri $uri/ ${NIXPACKS_PHP_FALLBACK_PATH}?$query_string;
            }
        ) else (
          location / {
                try_files $uri $uri/ /index.php?$query_string;
           }
        )
     
        location = /favicon.ico { access_log off; log_not_found off; }
        location = /robots.txt  { access_log off; log_not_found off; }
     
        $if(IS_LARAVEL) (
            error_page 404 /index.php;
        ) else ()
     
        location ~ \.php$ {
            fastcgi_pass 127.0.0.1:9000;
            fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
            include $!{nginx}/conf/fastcgi_params;
            include $!{nginx}/conf/fastcgi.conf;
        }
     
        location ~ /\.(?!well-known).* {
            deny all;
        }
    }
}
'''
```

### With Inertia.js

When using Laravel with [Inertia.js](https://inertiajs.com/), you may need to specify some additional configuration in your `nixpacks.toml` file.


#### Increasing the NGINX buffer size for Inertia requests

Because of a [known issue](https://github.com/inertiajs/inertia-laravel/issues/529) with Inertia.js and default NGINX configuration, you may need to increase the buffer size for NGINX to handle Inertia requests.


```diff toml
"nginx.template.conf" = '''
# ...
http {
    # ...
    server {
        # ...
        location ~ \.php$ {
+            fastcgi_buffer_size 8k;
            fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
            include $!{nginx}/conf/fastcgi_params;
            include $!{nginx}/conf/fastcgi.conf;

            # ...
        }
    }
}
```

#### Inertia SSR

If you are using Inertia.js with [server-side rendering](https://inertiajs.com/server-side-rendering), you should add another worker in your `nixpacks.toml` file to automatically start your SSR server.


```toml
"worker-inertia-ssr.conf" = '''
[program:inertia-ssr]
process_name=%(program_name)s_%(process_num)02d
command=bash -c 'exec php /app/artisan inertia:start-ssr'
autostart=true
autorestart=true
stderr_logfile=/var/log/worker-inertia-ssr.log
stdout_logfile=/var/log/worker-inertia-ssr.log
'''
```

> [!NOTE]
> Per default, Nixpacks runs the command `npm run build` to build your application during the deployment. Ensure that your `build` script in `package.json` contains the necessary build commands for server-side rendering. If you use one of the official starter kits including Inertia.js, change your scripts like this:
> ```diff
> "scripts": {
>-     "build": "vite build",
>+     "build": "vite build && vite build --ssr",
>     "build:ssr": "vite build && vite build --ssr",
> }
> ```
> Alternatively, if you don't want to adapt your default `build` script in `package.json`, you can add the correct build command for server-side rendering directly in your `nixpacks.toml` configuration file.
>```diff
>[phases.build]
>cmds = [
>+    "npm run build:ssr",
>    "mkdir -p /etc/supervisor/conf.d/",
>    "cp /assets/worker-*.conf /etc/supervisor/conf.d/",
>    "cp /assets/supervisord.conf /etc/supervisord.conf",
>    "chmod +x /assets/start.sh",
>    "..."
> ]
>```

### Persistent php.ini customizations

If you want to customize settings from your php.ini file, you can easily do so by using the `php_admin_value` directive and appending them to your `php-fpm.conf` file like this:

```toml
"php-fpm.conf" = '''
[www]
listen = 127.0.0.1:9000
user = www-data
group = www-data
listen.owner = www-data
listen.group = www-data
pm = dynamic
pm.max_children = 50
pm.min_spare_servers = 4
pm.max_spare_servers = 32
pm.start_servers = 18
clear_env = no

php_admin_value[memory_limit] = 512M
php_admin_value[max_execution_time] = 60
php_admin_value[max_input_time] = 60
php_admin_value[post_max_size] = 256M
'''
```

## Deploy with Dockerfile and Nginx Unit

### Prerequisites

1. Create a new resource from a private or public repository.
2. Set the `Ports Exposes` field to `8000`, for example.
3. Set default environment variables using `Developer view` in `Environment Variables`:

```sh
APP_DEBUG=false
APP_ENV=staging
APP_KEY= #YourAppKey
APP_MAINTENANCE_DRIVER=file
APP_NAME=Laravel
CACHE_STORE=file
DB_CONNECTION= #YourDbConnection
DB_DATABASE= #YourDb
DB_HOST= #YourDbHost
DB_PASSWORD= #YourDbPassword
DB_PORT= #YourDbPort
DB_USERNAME= #YourDbUsername
FILESYSTEM_DISK=public
MAIL_MAILER=log
SESSION_DRIVER=file
```

4. Create a `Dockerfile` in the root of your project with the following content:

```Dockerfile
FROM unit:1.34.1-php8.3

RUN apt update && apt install -y \
    curl unzip git libicu-dev libzip-dev libpng-dev libjpeg-dev libfreetype6-dev libssl-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) pcntl opcache pdo pdo_mysql intl zip gd exif ftp bcmath \
    && pecl install redis \
    && docker-php-ext-enable redis

RUN echo "opcache.enable=1" > /usr/local/etc/php/conf.d/custom.ini \
    && echo "opcache.jit=tracing" >> /usr/local/etc/php/conf.d/custom.ini \
    && echo "opcache.jit_buffer_size=256M" >> /usr/local/etc/php/conf.d/custom.ini \
    && echo "memory_limit=512M" > /usr/local/etc/php/conf.d/custom.ini \        
    && echo "upload_max_filesize=64M" >> /usr/local/etc/php/conf.d/custom.ini \
    && echo "post_max_size=64M" >> /usr/local/etc/php/conf.d/custom.ini

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

WORKDIR /var/www/html

RUN mkdir -p /var/www/html/storage /var/www/html/bootstrap/cache

RUN chown -R unit:unit /var/www/html/storage bootstrap/cache && chmod -R 775 /var/www/html/storage

COPY . .

RUN chown -R unit:unit storage bootstrap/cache && chmod -R 775 storage bootstrap/cache

RUN composer install --prefer-dist --optimize-autoloader --no-interaction

COPY unit.json /docker-entrypoint.d/unit.json

EXPOSE 8000

CMD ["unitd", "--no-daemon"]
```

3. Create a `unit.json` file (lowercase) at the root of your project with the following content.

```json
{
    "listeners": {
        "*:8000": {
            "pass": "routes",
            "forwarded": {
                "protocol": "X-Forwarded-Proto",
                "source": ["<Load balancer IP, Subnet etc.>"]
            }
        }
    },

    "routes": [
        {
            "match": {
                "uri": "!/index.php"
            },
            "action": {
                "share": "/var/www/html/public$uri",
                "fallback": {
                    "pass": "applications/laravel"
                }
            }
        }
    ],

    "applications": {
        "laravel": {
            "type": "php",
            "root": "/var/www/html/public/",
            "script": "index.php"
        }
    }
}
```
> [!NOTE]
> When using docker-compose for deployment, then there might be an issue with `Mixed content error` when some of the assets are requested via `http://` instead of `https://`. To avoid that, find your load balancer/proxy subnet or IP address and add it to the unit.config to explicitly tell unit to forward the correct headers to Laravel. Laravel also has to be configured trust proxies. More on that [here](https://laravel.com/docs/12.x/requests#configuring-trusted-proxies).
> ```json
> "listeners": {
>        "*:8000": {
>            "pass": "routes",
>            "forwarded": {
>                "protocol": "X-Forwarded-Proto",
>                "source": ["<Load balancer IP, Subnet etc.>"]
>            }
>        }
>    },
>```

4. Set Post-deployment to: 

```sh
php artisan optimize:clear && php artisan config:clear && php artisan route:clear && php artisan view:clear && php artisan optimize
```

```

---


### nextjs.md {#applications-nextjs-md}

**File Path**: `applications/nextjs.md`
**Size**: 918 bytes
**SHA**: `271701689487ec13d709bbcc66ca2ae910989335`

```markdown
---
title: NextJS
---

# NextJS

NextJS is a React framework that enables functionality such as server-side rendering and generating static websites.

[Example repository.](https://github.com/coollabsio/coolify-examples/tree/main/nextjs)

## Deploy with Nixpacks

### Server build (NodeJS)

- Set `Build Pack` to `nixpacks`.

### Static build (SPA)

- Set `Build Pack` to `nixpacks`.
- Enable `Is it a static site?`.
- Set `Output Directory` to `out`.

## Deploy with Dockerfile

If you are having problems with Nixpacks or want more control over the building stage, you can use a Dockerfile to deploy your NextJS application.

### Prerequisites

1. Set `Ports Exposes` field to `3000`.
2. Create a `Dockerfile` in the root of your project and copy the content from the official [NextJS Repository](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile).
3. Set the Build Pack to `Dockerfile`.

```

---


### nuxt.md {#applications-nuxt-md}

**File Path**: `applications/nuxt.md`
**Size**: 1045 bytes
**SHA**: `b4c56b9a5f2f63062661be9fb55a3f0b020f60b9`

```markdown
---
title: Nuxt
---

# Nuxt

Nuxt is an open source framework that makes web development intuitive and powerful.
Create performant and production-grade full-stack web apps and websites with confidence.

[Example repository.](https://github.com/coollabsio/coolify-examples/tree/main/nuxt)

## Server build (Nuxt, using `nuxt build`)

- Set `Build Pack` to `nixpacks`.
- Set Start Command to `node .output/server/index.mjs`

Alternatively, you can set the `start` script inside package.json to `node .output/server/index.mjs`. Then Nixpacks will automatically use it as the start command.

## Static build (Nuxt, using `nuxt generate`)

- Set `Build Pack` to `nixpacks`.
- Enable `Is it a static site?`.
- Set `Output Directory` to `dist`.

## Nitro server build (Nitro, using `nitro build`)

- Set `Build Pack` to `nixpacks`.
- Set Start Command to `node .output/server/index.mjs`

Alternatively, you can set the `start` script inside package.json to `node .output/server/index.mjs`. Then Nixpacks will automatically use it as the start command.

```

---


### phoenix.md {#applications-phoenix-md}

**File Path**: `applications/phoenix.md`
**Size**: 609 bytes
**SHA**: `2b09ab6092f2a5657682985cfd24d8f0b943d422`

```markdown
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
```

---


### rails.md {#applications-rails-md}

**File Path**: `applications/rails.md`
**Size**: 494 bytes
**SHA**: `e1263e3d0ab0dc152be0786758163c2c6d9bbd97`

```markdown
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

```

---


### svelte-kit.md {#applications-svelte-kit-md}

**File Path**: `applications/svelte-kit.md`
**Size**: 750 bytes
**SHA**: `90cb01a61150a512767a9c3aa38e031fbdee0842`

```markdown
---
title: SvelteKit
---

# SvelteKit

Svelte Kit is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing.

## Static build (`adapter-static`)

You need to use `@sveltejs/adapter-static` ([docs](https://kit.svelte.dev/docs/adapter-static)) adapter to build a static site.

1. Set your site to static `on` (under `Build Pack` section).
2. Set your `Publish Directory` to `/build`

## Node server (`adapter-node`)

You need to use `@sveltejs/adapter-node` ([docs](https://kit.svelte.dev/docs/adapter-node)) adapter to build a node server based SvelteKit app.

1. Set your site to static to `off` (under `Build Pack` section).
2. Set your `Start Command` to `node build`.

```

---


### symfony.md {#applications-symfony-md}

**File Path**: `applications/symfony.md`
**Size**: 2084 bytes
**SHA**: `18c10ddfdd064eb2899de4e0fa10cd6299d6c45d`

```markdown
---
title: Symfony
---

# Symfony

Symfony is the leading PHP framework to create websites and web applications. Built on top of the Symfony Components. 

## Requirements

- Set `Build Pack` to `nixpacks`
- Set `APP_ENV`
- Set `APP_SECRET`
- Set `NIXPACKS_PHP_FALLBACK_PATH` to `/index.php`
- Set `NIXPACKS_PHP_ROOT_DIR` to `/app/public`
- Set `Ports Exposes` to `80`

### Database migrations

If you use Doctrine, you can add the following `Post-deployment script` :

`php bin/console doctrine:migrations:migrate --all-or-nothing --no-interaction`

### Other components

If your application needs a database or Redis, you can simply create them beforehand in the Coolify dashboard.

You will receive the connection strings which you can use in your application and set them as environment variables:

```bash
DATABASE_URL=postgresql://app:!ChangeMe!@127.0.0.1:5432/app?serverVersion=16&charset=utf8

REDIS_HOST=<REDIS_HOST>
REDIS_PASSWORD=null
REDIS_PORT=6379
```

### Trusted proxy

You might need to configure the [trusted proxy](https://symfony.com/doc/current/deployment/proxies.html) :

- Set the environment variable `TRUSTED_PROXIES` with the IP of your server
- Add the following Symfony configuration :

```yaml
# config/packages/framework.yaml

framework:
    trusted_proxies: "%env(TRUSTED_PROXIES)%"
    trusted_headers: ['x-forwarded-for', 'x-forwarded-host', 'x-forwarded-proto', 'x-forwarded-port', 'x-forwarded-prefix']
```

### Persistent php.ini customizations

If you want to customize settings from your php.ini file, you can easily do so by using the `php_admin_value` directive and appending them to your `php-fpm.conf` file like this:

```toml
"php-fpm.conf" = '''
[www]
listen = 127.0.0.1:9000
user = www-data
group = www-data
listen.owner = www-data
listen.group = www-data
pm = dynamic
pm.max_children = 50
pm.min_spare_servers = 4
pm.max_spare_servers = 32
pm.start_servers = 18
clear_env = no

php_admin_value[memory_limit] = 512M
php_admin_value[max_execution_time] = 60
php_admin_value[max_input_time] = 60
php_admin_value[post_max_size] = 256M
'''
```

```

---


### vite.md {#applications-vite-md}

**File Path**: `applications/vite.md`
**Size**: 510 bytes
**SHA**: `8c97a490a3602962e2c76ccf5baec170f9b1ca59`

```markdown
---
title: Vite
---

# Vite

Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.

[Example repository.](https://github.com/coollabsio/coolify-examples/tree/main/vite)

## Vanilla TypeScript build (Static)

- Set `Build Pack` to `nixpacks`.
- Enable `Is it a static site?`.
- Set `Output Directory` to `dist`.


## Vanilla JavaScript build (Static)

- Set `Build Pack` to `nixpacks`.
- Enable `Is it a static site?`.
- Set `Output Directory` to `dist`.

```

---


### vitepress.md {#applications-vitepress-md}

**File Path**: `applications/vitepress.md`
**Size**: 379 bytes
**SHA**: `9255f1d4461e0150e94b6996da722b3713d5a445`

```markdown
---
title: VitePress
---

# VitePress

Vite & Vue Powered Static Site Generator Markdown to Beautiful Docs in Minutes.

[Example repository.](https://github.com/coollabsio/coolify-examples/tree/main/vitepress)

## Build (Static)

- Use `Nixpacks`.
- Turn on `Is it a static site?`.
- Set `Base Directory` to `/.vitepress/static`.
- Set `Publish Directory` to `/.vitepress/dist`.

```

---


### vuejs.md {#applications-vuejs-md}

**File Path**: `applications/vuejs.md`
**Size**: 585 bytes
**SHA**: `642c74dbcf025ede160390246ce5ccad94f8f7ea`

```markdown
---
title: Vue
---

# Vue

Vue.js is an approachable, performant and versatile framework for building web user interfaces.

[Example repository.](https://github.com/coollabsio/coolify-examples/tree/main/vue)

## Server build (NodeJS|Express)

- Set `Build Pack` to `nixpacks`.
- Set 'Start Command` to `node server.js`.

## Static build (SPA)

- Set `Build Pack` to `nixpacks`.
- Enable `Is it a static site?`.
- Set `Output Directory` to `dist`.

## Static build with Router (SPA)

- Set `Build Pack` to `nixpacks`.
- Enable `Is it a static site?`.
- Set `Output Directory` to `dist`.
```

---


### introduction.md {#builds-introduction-md}

**File Path**: `builds/introduction.md`
**Size**: 2481 bytes
**SHA**: `61b25b85d3ef729ffdb5115265266c967a56f75b`

```markdown
---
title: Introduction to Builds
---

<ZoomableImage src="/docs/images/builds/introduction/builds-banner.webp" />

<br />

Coolify deploys all applications as Docker containers. This means your app, database, or website runs inside a container. 

No matter what you deploy or which build pack you use, it is always run as a Docker container.


## How Docker Containers Work
- **Docker Image:** To run a container, you need a Docker image.  
- **Dockerfile:** The image is built using a Dockerfile, just a file with step-by-step instructions to build the docker image.
- **Build Process:**  If you're building your own application, you'll need to create your docker image using a Dockerfile. 
    - Coolify helps with this build process by letting you use different build packs. A commonly used build pack is [Nixpacks ↗](https://nixpacks.com?utm_source=coolify.io), which automatically prepares a Dockerfile and builds the docker image for you.


## Build Packs in Coolify
Coolify offers build packs like [Nixpack ↗](https://nixpacks.com?utm_source=coolify.io) and **Static Build Pack** that automatically create your Docker image. 

If you need more control over the process, you can write your own Dockerfile and Docker Compose file. In that case, Coolify will use your file to build the image on the server and deploy it as a container.


## Using Pre-built Images
If you already have a Docker image stored in a registry (for example, [Docker Hub ↗](https://hub.docker.com/?utm_source=coolify.io) or [GitHub Container Registry ↗](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry?utm_source=coolify.io)), you can use that image directly in Coolify. This means you do not have to rebuild the image on your server.


## Managing Build Resources  
Building Docker images can consume a lot of resources on your server, potentially causing it to crash. 

To reduce the load on your main server, Coolify allows you to connect additional servers to manage the build process.  

You can set up a separate [build server ↗](/builds/servers) to handle the builds, or use external tools like [GitHub Actions ↗](https://github.com/features/actions?utm_source=coolify.io) to build your images and push them to any container registry. 

Once the images are pushed, you can easily use them on Coolify.


## What's Next?
Check the pages in the sidebar to learn more about build packs, build commands, and build servers.

```

---


### nixpacks.md {#builds-packs-nixpacks-md}

**File Path**: `builds/packs/nixpacks.md`
**Size**: 7694 bytes
**SHA**: `8f050bac6c5f979ad6934cf52e1d8f42913f0fe6`

```markdown
---
title: Nixpacks Build Pack
---

<ZoomableImage src="/docs/images/builds/packs/nixpacks/banner.webp" />

<br />

Nixpacks is a open source build pack created by [Railway](https://railway.com?utm_source=coolify.io) and the source is available on [Github](https://github.com/railwayapp/nixpacks?utm_source=coolify.io). Coolify uses Nixpacks as one of the build pack.

Nixpacks checks your git repository (also called as "**source directory**" in nixpacks) and generates a Dockerfile, then it will build a docker image based on the Dockerfile it generated.

Nixpacks can deploy both fully static websites and non-static applications. Once your repository is set up, you can use Coolify to deploy your project with ease.

## How to use Nixpacks?
On Coolify you can only use Nixpacks on git-based deployments.

### 1. Create a New Resource in Coolify
On Coolify dashboard open your project and click the **Create New Resource** button.

<ZoomableImage src="/docs/images/builds/packs/nixpacks/1.webp" />


### 2. Choose Your Deployment Option

<ZoomableImage src="/docs/images/builds/packs/nixpacks/2.webp" />

**A.** If your Git repository is public, choose the **Public Repository** option.

**B.** If your repository is private, you can select **Github App** or **Deploy Key**. (These methods require extra configuration. You can check the guides on setting up a [Github App ↗](/knowledge-base/git/github/integration#with-github-app-recommended) or [Deploy Key ↗](/knowledge-base/git/github/integration#with-deploy-keys) if needed.)


### 3. Select Your Git Repository
If you are using a public repository, paste the URL of your GitHub repository when prompted. The steps are very similar for all other options.

<ZoomableImage src="/docs/images/builds/packs/nixpacks/3.webp" />


### 4. Choose the Build Pack
Coolify will default to using Nixpacks. If it doesn’t, click to select Nixpacks as your build pack.

<ZoomableImage src="/docs/images/builds/packs/nixpacks/4.webp" />

### 5. Configure Build Pack
We have different options like Base Directory, Publish Directory, and Ports that slightly change based on the application you deploy (static websites/applications). So, below we have two sections for the deployments possible with Nixpacks.
- [How to deploy Fully Static Websites](#how-to-deploy-fully-static-website)
- [How to deploy Non-Static Website/Applications](#how-to-deploy-non-static-website-applications)

## How to deploy Fully Static Website?
First, follow the previous section in this documentation: [How to use Nixpacks](#how-to-use-nixpacks). After that, proceed with the steps below.

<ZoomableImage src="/docs/images/builds/packs/nixpacks/5.webp" />

1. **Branch:** Coolify will automatically detect the branch from your Repostiory.

2. **Base Directory:** Enter the directory Nixpacks should use as the root (for example, `/` if your files are at the root, or a subfolder if applicable).
   - If you have a monorepo then you can enter the path of the directory you want to use as base directory (`/backend` for example)

3. **Is it a static Site?:** Click on this option to enable static mode.

4. **Port:** Once you enabled `Is it a static Site` the port will be automatically set to `80` and cannot be changed. (This is intentional)

5. **Publish Directory:** Once you enabled `Is it a static Site` this publish directory option will visible on the UI. You have to enter the output directory where your static files are generated (commonly `/dist`).

6. Click on **Continue** button once you have set all the above settings to correct details.

7. Choose a web server for your static website

<ZoomableImage src="/docs/images/builds/packs/nixpacks/6.webp" />

- As of Coolify **v4.0.0-beta.404**, the only web server option available is [Nginx ↗](https://nginx.org/en/?utm_source=coolify.io). So **Nginx** will be selected by default.

8. Click the **Deploy** button. The deployment process is usually quick (often less than a minute, depending on your server).


9. Customize Your Web Server Configuration <Badge type="warning" text="Optional" />

<ZoomableImage src="/docs/images/builds/packs/nixpacks/7.webp" />

- Coolify provides a default web server configuration that works for most cases. 

- If you want to change it then click the **Generate** button to load the default settings and make any changes you need.


::: warning HEADS UP!
You have to click on the **Restart** button for the new configuration to take effect.
:::


### How this works?
Nixpacks will build the website using your codebase and create a Docker image with a web server to serve them. This means your final Docker image has a web server ready to serve your HTML, CSS, and JavaScript files.



## How to deploy Non-Static Website/Applications?
First, follow the previous section in this documentation: [How to use Nixpacks](#how-to-use-nixpacks). After that, proceed with the steps below.

<ZoomableImage src="/docs/images/builds/packs/nixpacks/8.webp" />

1. **Branch:** Coolify will automatically detect the branch from your Repostiory.

2. **Base Directory:** Enter the directory Nixpacks should use as the root (for example, `/` if your files are at the root, or a subfolder if applicable).
   - If you have a monorepo then you can enter the path of the directory you want to use as base directory (`/backend` for example)

3. **Port:** Enter the port where your application listens for incoming requests.

4. **Is it a static Site?:** Leave this unchecked since you’re deploying a non-static application.

5. Click on **Continue** button once you have configured all the above options.

6. After clicking the **Continue** button, you can adjust settings like your domain and environment variables, then click the **Deploy** button to launch your application.


### How this works?
Nixpacks analyzes your codebase, builds a Docker image, and then starts a container using that image.


## Advanced Configuration
### Environment Variables
You can customize Nixpacks' behavior using environment variables. There are many variables available for different application frameworks, and you can find detailed information in their documentation: [Nixpacks Environment Variables](https://nixpacks.com/docs/configuration/environment?utm_source=coolify.io).  

To add or modify environment variables in Coolify, simply click on the **Environment Variables** tab, where you can manage them easily.

<ZoomableImage src="/docs/images/builds/packs/nixpacks/9.webp" />

---

### Commands
If needed, you can override the default install, build, and start commands. Simply scroll down to the build section on Coolify and input your custom commands.

<ZoomableImage src="/docs/images/builds/packs/nixpacks/10.webp" />

::: warning Note:
You may need to include a `nixpacks.toml` file in your repository for these changes to take effect.
:::

---

### Configuration file
Nixpacks supports specifying build configurations in a nixpacks.toml or nixpacks.json file. If one of these files is present in the root of your repository, it will be automatically used. For more details, refer to the [Nixpacks documentation](https://nixpacks.com/docs/configuration/file?utm_source=coolify.io).


## Known issues and solutions
::: details 1. Outdated Packages/Dependencies
Sometimes, Nixpacks may use older package versions. If you encounter this issue, update the `nixpkgs` archive version in your `nixpacks.toml` file. You can learn more about this in the Nixpacks docs on [nixpkgs archive](https://nixpacks.com/docs/configuration/file#nixpkgs-archive?utm_source=coolify.io)

This is a Nixpacks-related issue, not a Coolify issue. For further assistance, please contact the Nixpacks support team.
:::
```

---


### overview.md {#builds-packs-overview-md}

**File Path**: `builds/packs/overview.md`
**Size**: 2364 bytes
**SHA**: `f6262e148df18ff87996caffbcb4a3aec0563108`

```markdown
---
title: Build Packs
---

<ZoomableImage src="/docs/images/builds/packs/packs-banner.webp" />

<br />

Coolify deploys every application as a Docker container. This means your application runs in its own isolated container. 

To run a container, you need a Docker image built from your source code. 

Build packs helps to create this Docker image and manage the build and deployment process.


## Why Use Build Packs?
- **Simplifies the Build Process:** Some Build packs automatically create the Docker image needed for deployment, so you don’t have to spend time on learning how to write Dockerfiles on your own.

- **Flexibility for Different Projects:** Since every application is different, you can choose a build pack that suits your specific needs, whether you prefer an automated solution or a custom configuration.


## How Build Packs Work
Each build pack offers a different approach to building your Docker image:

- **Automated Dockerfile Creation:** Build packs like Nixpacks & Static Build Pack automatically generate a Dockerfile based on your codebase and builds the docker image. 
  - This allows you to deploy your application quickly without having to write the Dockerfile yourself.

- **Custom Dockerfile or Docker Compose:** Build packs like Dockerfile & Docker Compose let you use a Dockerfile or Docker Compose file that you have already have on your codebase. 
  - This gives you full control over how your Docker image is built and how multiple services work together.


## Choose the Right Build Pack
Coolify have four build packs to meet different requirements:
- **Nixpacks:** Good for quick and automated Docker image creation with minimal configuration.

- **Static Build Pack:** Perfect for static sites and simple applications that don’t need server-side processing.

- **Dockerfile:** Use your own Dockerfile, if you want full control over the docker image build process.

- **Docker Compose:** Perfect to Deploy complex, multi-service applications using your custom Docker Compose file.


## How to use a Build Pack
Each build pack has its own step-by-step guide to help you use them in Coolify. Click the links below to learn more about each build pack.

- [Static Build Pack](/builds/packs/static)
- [Nixpack](/builds/packs/nixpacks)
- [Dockerfile](/builds/packs/dockerfile)
- [Docker Compose](/builds/packs/docker-compose)
```

---


### static.md {#builds-packs-static-md}

**File Path**: `builds/packs/static.md`
**Size**: 4083 bytes
**SHA**: `d85437b6d59a17504f079ecb34900f434e125a6f`

```markdown
---
title: Static Build Packs
---

<ZoomableImage src="/docs/images/builds/packs/static/banner.webp" />

<br />

Static Build Packs take the files from your project and create a Docker image with a web server to serve them. This means your final Docker image has a web server ready to display your HTML, CSS, and JavaScript files.

Static Build Packs only work if your project is already built (for example, with a static site generator like [Astro ↗](https://astro.build/?utm_source=coolify.io) or [Webstudio ↗](https://webstudio.is/?utm_source=coolify.io)). Once you have the built files, you can upload them to a Git repository and use Coolify to deploy your site.


## How to Use Static Build Pack

### 1. Prepare Your Static Files
First, build your site with your favorite static site generator. This process creates a folder with all the files your site needs (HTML, CSS, JavaScript, etc.).  

Next, upload these static files to a Git repository. You can use [GitHub ↗](https://github.com/?utm_source=coolify.io), [GitLab ↗](https://about.gitlab.com/?utm_source=coolify.io), or any other Git service. For this guide, we will use [GitHub ↗](https://github.com/?utm_source=coolify.io) as an example.


### 2. Create a New Resource in Coolify
On Coolify dashboard open your project and click the **Create New Resource** button.

<ZoomableImage src="/docs/images/builds/packs/static/1.webp" />


### 3. Choose Your Deployment Option

<ZoomableImage src="/docs/images/builds/packs/static/2.webp" />

**A.** If your Git repository is public, choose the **Public Repository** option.

**B.** If your repository is private, you can select **Github App** or **Deploy Key**. (These methods require extra configuration. You can check the guides on setting up a [Github App ↗](/knowledge-base/git/github/integration#with-github-app-recommended) or [Deploy Key ↗](/knowledge-base/git/github/integration#with-deploy-keys) if needed.)


### 4. Select Your Git Repository
If you are using a public repository, paste the URL of your GitHub repository when prompted. The steps are very similar for all options.

<ZoomableImage src="/docs/images/builds/packs/static/3.webp" />


### 5. Choose the Build Pack
Coolify will default to using Nixpacks. Click on the Nixpack option, and then select **Static** from the dropdown menu.  

<ZoomableImage src="/docs/images/builds/packs/static/4.webp" />

This tells Coolify to build your image with a static web server.


### 6. Set the Base Directory
Enter the path where your static files are located:

<ZoomableImage src="/docs/images/builds/packs/static/5.webp" />

- If your files are in the root of your repository, just type `/`.
- If they are in a subfolder, type the path to that folder (for example, `/out`).


After setting the base directory, click the **Continue** button.


### 7. Choose a Web Server
As of Coolify **v4.0.0-beta.402**, the only web server option available is [Nginx ↗](https://nginx.org/en/?utm_source=coolify.io). So **Nginx** will be selected by default.

<ZoomableImage src="/docs/images/builds/packs/static/6.webp" />


### 8. Enter Your Domain
Type the domain name where you want your site to be available.  

<ZoomableImage src="/docs/images/builds/packs/static/7.webp" />

If you have multiple domains, separate them with commas.


### 9. Deploy Your Site
Click the **Deploy** button. The deployment process is usually quick (often less than a minute, depending on your server).

<ZoomableImage src="/docs/images/builds/packs/static/8.webp" />

Once the deployment is finished, visit your domain in a browser to see your live site.


### 10. Customize Your Web Server Configuration <Badge type="warning" text="Optional" />
Coolify provides a default web server configuration that works for most cases. 

If you want to change it then click the **Generate** button to load the default settings and make any changes you need.

<ZoomableImage src="/docs/images/builds/packs/static/9.webp" />

::: warning HEADS UP!
You have to click on the **Restart** button for the new configuration to take effect.
:::
```

---


### servers.md {#builds-servers-md}

**File Path**: `builds/servers.md`
**Size**: 2708 bytes
**SHA**: `05a7dc96da642c65e59cac8420ffc09693cf98c6`

```markdown
---
title: Build Server
description: Learn how to use a build server with Coolify to separate your build process from your deployment environment.
---

<ZoomableImage src="/docs/images/builds/servers/banner.webp" />

<br />

A build server allows you to compile your projects separately from the server that hosts your live application. 

This helps to keep the load on your hosting server low and ensures that your application's performance remains unaffected by the build process.


## Requirements
Before you set up a build server, make sure that:

- The final images are pushed to a container registry.
- The build server is authenticated with the container registry. See [this guide](/knowledge-base/docker/registry) for more details.
- The build server has access to your source code.
- Docker Engine is installed on the build server.
- The build server’s architecture matches that of your deployment servers.

::: success Tip:
If you have multiple build servers, Coolify will select one at random.
:::


## How to Use a Build Server
To start using a build server with Coolify, follow these steps:

1. **Add a New Server to Coolify:**  
   In your Coolify dashboard, go to the servers page and click the **+ Add** button.

   <ZoomableImage src="/docs/images/builds/servers/1.webp" />

   - If you have already connected a server to Coolify, you can skip this step and go to the next one.

2. **Enable the Build Server Feature:**  
   In the popup modal, enable the **Build Server** feature.
   <ZoomableImage src="/docs/images/builds/servers/2.webp" />

   - If you have already connected your server, enable the Build Server feature as shown in the image below.
   <ZoomableImage src="/docs/images/builds/servers/3.webp" />

::: warning HEADS UP!
As of **Coolify v4.0.0-beta.408** you cannot deploy any application to a server that is marked as a build server. 

If you want to deploy apps, uncheck the build server option on your server from the servers page in the Coolify dashboard.

   <ZoomableImage src="/docs/images/builds/servers/3.webp" />
:::


## Configuring a Resource to Use a Build Server
To assign a build server to an existing resource, follow these steps:

1. **Go to Your Resource:**  
   In your Coolify dashboard, navigate to the general settings of the application you want to use the build server for.

2. **Activate the Build Server Option:**  
   Under the **Build** section, enable the `Use a Build Server ?` option.

   <ZoomableImage src="/docs/images/builds/servers/4.webp" />

3. **Set Up Your Container Registry:**  
   Make sure that your build server is authenticated with the container registry. See [this guide](/knowledge-base/docker/registry) for more details.


```

---


### backups.md {#databases-backups-md}

**File Path**: `databases/backups.md`
**Size**: 1660 bytes
**SHA**: `831b3733fedc165bb38c6144da5cf849826cb3a3`

```markdown
---
title: "Backups"
---

# Backups

Scheduled database backups could be configured for PostgreSQL and for Coolify itself.

This schedules are based on cron expressions, so you can configure them to run as often as you want.

You can also use simple cron expressions like:

```js
const VALID_CRON_STRINGS = [
    'every_minute' => '* * * * *',
    'hourly' => '0 * * * *',
    'daily' => '0 0 * * *',
    'weekly' => '0 0 * * 0',
    'monthly' => '0 0 1 * *',
    'yearly' => '0 0 1 1 *',
];
```

## PostgreSQL

Coolify creates a full backup of your PostgreSQL databases. You can specify which database to backup, with a comma separated list.

::: info Tip
Coolify own database is also backed up using this method.
:::

### Backup command

```bash
pg_dump --format=custom --no-acl --no-owner --username <username> <databaseName>
```

### Restore command

The backup has custom format, so you can restore it using the following command (or with any equivalent tool):

```bash
pg_restore --verbose --clean -h localhost -U postgres -d postgres pg-dump-postgres-1697207547.dmp
```

## MySQL

```bash
mysqldump -u root -p <password> <datatabaseName>
```

## MariaDB

```bash
mariadb-dump -u root -p <password> <datatabaseName>
```

## MongoDB

```bash
mongodump --authenticationDatabase=admin --uri=<uri> --gzip --archive=<archive>
```

Or if you exclude some collections:

```bash
mongodump --authenticationDatabase=admin --uri=<uri> --gzip --archive=<archive> --excludeCollection=<collectionName> --excludeCollection=<collectionName>
```

## S3 Backups

You can also define your own [S3 compatible](/knowledge-base/s3/introduction) storage to store your backups.

```

---


### clickhouse.md {#databases-clickhouse-md}

**File Path**: `databases/clickhouse.md`
**Size**: 2943 bytes
**SHA**: `838d8ed7bcbd30ebfb94a9f6e94cb5189fe5478c`

```markdown
---
title: ClickHouse
---


# Clickhouse

 <ZoomableImage src="/docs/images/database-logos/clickhouse.webp" />


## What is ClickHouse
ClickHouse is an open-source column-oriented database management system designed for online analytical processing (OLAP). 

It's known for its exceptional query performance on large datasets, making it ideal for real-time analytics and data warehousing applications.

ClickHouse uses a column-oriented storage format and employs various optimizations like vectorized query execution to achieve high performance. 

It supports SQL with extensions and can handle both batch and stream data ingestion, making it versatile for various analytical workloads.


## Backup and Restore Guide
Currently, Coolify does not support modifying ClickHouse configurations, which means certain native backup options (e.g., backing up to a local Disk or using `ALTER TABLE ... FREEZE PARTITION ...`) are not possible. Instead, the recommended approach is to use S3 for backups.


### How to Backup ClickHouse
To backup a table or an entire database, use the following SQL command:

- **Backup a Table:**
```sql
BACKUP TABLE <table_name> TO S3('<your_s3_endpoint_com>/<unique_folder_for_table_backup>', '<s3_access_key>', '<s3_secret_key>')
```

- **Backup a Database:**
Replace `TABLE` with `DATABASE` to backup the whole database:

```sql
BACKUP DATABASE <database_name> TO S3('<your_s3_endpoint_com>/<unique_folder_for_database_backup>', '<s3_access_key>', '<s3_secret_key>')
```


### How to Restore ClickHouse
To restore a table or database from an S3 backup, use the corresponding RESTORE command:

- **Restore a Table:**
```sql
RESTORE TABLE <table_name> FROM S3('<your_s3_endpoint_com>/<unique_folder_from_table_backup>', '<s3_access_key>', '<s3_secret_key>')
```

- **Restore a Database:**
Replace `TABLE` with `DATABASE` to restore the whole database:

```sql
RESTORE DATABASE <database_name> FROM S3('<your_s3_endpoint_com>/<unique_folder_from_database_backup>', '<s3_access_key>', '<s3_secret_key>')
```


### What Doesn't Work
- **Disk Backups:**

```sql
BACKUP TABLE test.table TO Disk('backups', '1.zip')
```
Does not work due to Coolify not allowing modifications to ClickHouse configurations.

- **Native Partition Freezes:** 

```sql
ALTER TABLE ... FREEZE PARTITION ...
```
May not work because of limitations in the Docker/Coolify file structure.

- **clickhouse-backup Tool:**
External tools like [clickhouse-backup](https://github.com/Altinity/clickhouse-backup?utm_source=coolify.io) might not function properly within the Docker/Coolify setup due to similar configuration restrictions.


### Performance Notes
A community member shared that backing up a 145GB database took around 12 minutes, while restoring it took roughly 17 minutes.


## Links

- [The official website ›](https://clickhouse.com/?utm_source=coolify.io)
- [GitHub ›](https://github.com/ClickHouse/ClickHouse?utm_source=coolify.io)

```

---


### dragonfly.md {#databases-dragonfly-md}

**File Path**: `databases/dragonfly.md`
**Size**: 1242 bytes
**SHA**: `f89af853ee9443f7e326a6c41d0bb696f7145997`

```markdown
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
```

---


### index.md {#databases-index-md}

**File Path**: `databases/index.md`
**Size**: 2161 bytes
**SHA**: `098360f6a30744fd2e3f627730176eb4223ca45e`

```markdown
---
title: Introduction
---

# Databases you can host with Coolify

Coolify supports a variety of databases to suit different application needs. Even if you don't see your favorite database here, you can still host it with Coolify, using Docker.

Coolify offers one-click setup for the following databases:

- [PostgreSQL](/databases/postgresql)
- [Redis](/databases/redis)
- [DragonFly](/databases/dragonfly)
- [KeyDB](/databases/keydb)
- [Clickhouse](/databases/clickhouse)
- [MongoDB](/databases/mongodb)
- [MySQL](/databases/mysql)
- [MariaDB](/databases/mariadb)

Each database has its own strengths and use cases. Click on a database to learn more about it.

# Deploy a database

When selecting a New Resource, you can select a database from the list.

![New Resource](/images/screenshots/How-to-add-a-database.webp)

You can configure a database with a simple click. Coolify supports the following databases:

- PostgreSQL
- MySQL
- MariaDB
- MongoDB
- Redis
- DragonFly
- KeyDB
- Clickhouse

## Ports Mapping vs Public Port

### Ports Mapping

Ports mapping is using the Docker [port mapping](https:/.docker.com/network/#published-ports) feature. It is used to map the container port to the host port. For example, if you set the port mapping to `8080:80`, the container port `80` will be mapped to the host port `8080`.

### Public Port

Public port is used to expose the container port to the internet, by starting an Nginx TCP proxy.

### Which one should I use?

- Port mappings makes the connection/port permanent (you need to restart your database to change it).
- The public port makes the connection/port dynamic (you can change it without restarting the database, Coolify will restart the Nginx TCP proxy for you).

## Access database during builds

If you are using `Nixpacks` build pack, you have two ways to access your database during builds:

1. Database & your application are `in the same network`: You can reach it using the `internal URL` provided by Coolify.
2. Database & your application `are not in the same network`: You need to set your database to be `Accessible over the internet` and use the `public URL` provided by Coolify.

```

---


### keydb.md {#databases-keydb-md}

**File Path**: `databases/keydb.md`
**Size**: 885 bytes
**SHA**: `486781374ddb4b904e26f471914a510f6aa8d553`

```markdown
---
title: KeyDB
---

# KeyDB
<!-- Commentented out the image because it is taking up the whole screen, will be fixed later -->
<!-- ![KeyDB](/images/database-logos/keydb.webp) -->

## What is KeyDB

KeyDB is a high-performance fork of Redis, focusing on multithreading, memory efficiency, and high availability. It maintains API compatibility with Redis while offering improved performance, especially on multi-core systems. KeyDB introduces features like active replication, FLASH storage support, and subkey expires to enhance the capabilities of the traditional Redis model.

Designed to be a drop-in replacement for Redis, KeyDB aims to provide better resource utilization and scalability for applications requiring high-throughput in-memory data storage and processing.

## Links

- [The official website ›](https://keydb.dev/)
- [GitHub ›](https://github.com/EQ-Alpha/KeyDB)
```

---


### mariadb.md {#databases-mariadb-md}

**File Path**: `databases/mariadb.md`
**Size**: 755 bytes
**SHA**: `d8dc78051a2d8e6da99b0044c9698a3f0f6bae01`

```markdown
---
title: MariaDB
---

# MariaDB

<!-- Commentented out the image because it is taking up the whole screen, will be fixed later -->
<!-- ![Mariadb](/images/database-logos/mariadb.svg) -->

## What is MariaDB

MariaDB is an open-source fork of MySQL, designed to remain free and open-source. It aims to be a drop-in replacement for MySQL with enhanced features and performance. MariaDB maintains high compatibility with MySQL while offering additional storage engines, performance improvements, and features.

Started by core members of MySQL, MariaDB provides a robust and scalable database solution suitable for a wide range of applications.

## Links

- [The official website ›](https://mariadb.org/)
- [GitHub ›](https://github.com/MariaDB/server)
```

---


### mongodb.md {#databases-mongodb-md}

**File Path**: `databases/mongodb.md`
**Size**: 772 bytes
**SHA**: `0f6222c164fd357acf3bdbb8a6bec6ebff2eee9b`

```markdown
---
title: MongoDB
---

# MongoDB

![MongoDB](/images/database-logos/mongodb.webp)

## What is MongoDB

MongoDB is a popular, open-source document-oriented NoSQL database designed for scalability and flexibility. It stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time.

MongoDB is known for its horizontal scalability, powerful query language, and ability to handle large volumes of unstructured or semi-structured data. It's widely used in modern web applications, content management systems, and other scenarios where flexible data models and scalability are crucial.

## Links

- [The official website ›](https://www.mongodb.com/)
- [GitHub ›](https://github.com/mongodb/mongo)
```

---


### mysql.md {#databases-mysql-md}

**File Path**: `databases/mysql.md`
**Size**: 745 bytes
**SHA**: `099a278adc6356e7020bb8541db5b3cd420272a4`

```markdown
---
title: MySQL
---

# MySQL

![MySQL](/images/database-logos/mysql.webp)

## What is MySQL

MySQL is a widely-used, open-source relational database management system (RDBMS) known for its reliability, ease of use, and performance. It's an essential component of the popular LAMP (Linux, Apache, MySQL, PHP/Python/Perl) stack used for web development.

MySQL provides a robust, ACID-compliant database solution suitable for a wide range of applications, from small websites to large-scale enterprise systems. It offers features like replication, partitioning, and full-text indexing, making it versatile for various use cases.

## Links

- [The official website ›](https://www.mysql.com/)
- [GitHub ›](https://github.com/mysql/mysql-server)
```

---


### postgresql.md {#databases-postgresql-md}

**File Path**: `databases/postgresql.md`
**Size**: 1841 bytes
**SHA**: `b171ab4bd2943336a2fdfa38ec2ece17c3e65dd0`

```markdown
---
title: PostgreSQL
---

# PostgreSQL

![PostgreSQL](/images/database-logos/postgresql.webp)

## What is PostgreSQL

PostgreSQL is an advanced, open-source object-relational database system known for its reliability, feature robustness, and performance. It has more than 30 years of development and is widely used in the industry.

PostgreSQL, often simply "Postgres", uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads.

## Links

- [The official website ›](https://www.postgresql.org/)
- [GitHub ›](https://github.com/postgres/postgres)

## Import Backups

Coolify can import a database dump into a running PostgreSQL instance using the
**Import Backups** section of the Configuration for the instance.

The database dump can either be a file uploaded to the server, or dragged and
dropped into the Configuration screen directly.

The import command can be customized, but by default it expects a database dump
created using the `pg_dump` command with the `-Fc` flag passed in (custom
format).

For example, the following command connects to a PostgreSQL database running in
a local Docker container named `pg-db` as the database user `postgres` and
writes a dump of the `postgres` database to the file `example-database.sql.gz`:

```bash
docker exec pg-db pg_dump -U postgres -d postgres -Fc >example-database.sql.gz
```

### Note on upgrading PostgreSQL

The __custom__ dump format is sensitive to version differences between the dump and
restore commands.

Use the plain (default) or __tar__ dump formats to migrate from an older version
of PostgreSQL to a newer version. When using plain format dumps, use `psql` as
the custom import command instead of `pg_restore`.

See the PostgreSQL documentation for `pg_dump` and `pg_restore` for more information.

```

---


### redis.md {#databases-redis-md}

**File Path**: `databases/redis.md`
**Size**: 575 bytes
**SHA**: `2db01dcbdcb3013cc9ceff002644f37339e69a98`

```markdown
---
title: Redis
---

# Redis

![Redis](/images/database-logos/redis.svg)

## What is Redis

Redis is an in-memory data store used by millions of developers as a cache, vector database, document database, streaming engine, and message broker. Redis has built-in replication and different levels of on-disk persistence. It supports complex data types (for example, strings, hashes, lists, sets, sorted sets, and JSON), with atomic operations defined on those data types.

## Links

- [The official website ›](https://redis.io/)
- [GitHub ›](https://github.com/redis/redis)
```

---


### ssl.md {#databases-ssl-md}

**File Path**: `databases/ssl.md`
**Size**: 5806 bytes
**SHA**: `9f485f60932be1883b0464aeaf3865ef4aeaadb5`

```markdown
---
title: Database SSL
---

# Database SSL  <Badge type="warning" text="^v4.0.0-beta.399" />
Database SSL in Coolify encrypts the communication between your applications and databases, ensuring that data remains secure. 

With automatic certificate binding and generation, this feature simplifies secure setup. It was first introduced in Coolify version **v4.0.0-beta.399**.


## Introduction
Database SSL adds an extra layer of security by encrypting data exchanged with your database. This guide covers:
- Enabling SSL mode for your database connections.
- Selecting the appropriate SSL mode based on your security needs.
- Managing the CA certificate that verifies database connections.


## 1. How to Enable Database SSL
To secure your database connection with SSL:

1. **Access Database Settings**  
   In your Coolify dashboard, access the general settings of the database you want to secure.
   <ZoomableImage src="/docs/images/database/ssl/1.webp" />

2. **Enable SSL Mode**  
   Check the **Enable SSL** option to activate SSL for the database connection.
   <ZoomableImage src="/docs/images/database/ssl/2.webp" />

3. **Select the SSL Mode**  
   Choose the SSL mode from the dropdown menu. For example, select **verify-full** for maximum security.  
   <ZoomableImage src="/docs/images/database/ssl/3.webp" />

::: warning **Note:**  
To make use of SSL after enabling it, you need to use the new connection URL for your app, which includes the SSL configuration. 

If you are not using the new URL, the database connection will not use SSL (in most cases).
:::

Coolify automatically binds the generated certificates and keys to the required locations, so manual changes are only needed if you wish to use custom certificates.

## 2. SSL Modes Explained
Coolify supports several SSL modes, each providing a different level of security:
<ZoomableImage src="/docs/images/database/ssl/4.webp" />

### PostgreSQL
- **allow (insecure)**  
  This mode permits both encrypted and unencrypted connections. It does not enforce SSL, so if SSL fails, the connection will fall back to an unencrypted state. 
  
  This option is considered insecure because it allows unencrypted traffic.

- **prefer (secure)**  
  With this mode, Coolify will attempt to use SSL first. If an SSL connection is available, it will be used, otherwise, it will fall back to an unencrypted connection. 
  
  While this option prefers encryption, it doesn’t guarantee that every connection will be secured.

- **require (secure)**  
  This mode mandates that the connection must be encrypted. However, it does not perform any checks on the server certificate. 
  
  This means the connection is encrypted, but the identity of the server is not verified.

- **verify-ca (secure)**  
  This option goes a step further by encrypting the connection and verifying that the server's certificate is signed by a trusted Certificate Authority (CA). It does not check if the hostname matches the certificate. 
  
  This mode offers a balance between security and ease of setup.

- **verify-full (secure)**  
  This is the most secure mode. It not only encrypts the connection and verifies the certificate authority but also confirms that the server’s hostname matches the certificate. 
  
  This provides full assurance that you are connecting to the correct server, similar to the security level provided by Cloudflare Origin Certificate setups.

### Other Databases
- **MySQL & MongoDB:**  
  Only the following modes are available: **prefer, require, verify ca, verify full**.
- **MariaDB, Redis, KeyDB, DragonFly DB:**  
  No SSL modes are visible in the UI.
- **Clickhouse DB:**  
  SSL is not supported, there is no checkbox to enable SSL nor dropdown options.

::: warning Developer Note
Modes lower than **require** are not 100% secure as they only encrypt the connection without full verification of the server’s identity. 

For modes higher than **require** (i.e., **verify-ca** and **verify-full**), you must mount the Coolify CA certificate into the container that connects to the database for additional security. 

Note that in most cases (for example, PostgreSQL), merely enabling SSL does nothing unless you use the new connection URL that enforces SSL. 

However, for some databases, like the redis-based ones, enabling SSL in the UI does enforce the mode.
:::

::: success Tip
For maximum security, **verify-full** is recommended (when available).
:::


## 3. CA SSL Certificate Management
Coolify manages the CA certificate automatically, ensuring that secure database connections are validated. 

In the dashboard, under **Servers > YOUR_SERVER_NAME > Proxy > Advanced**, you can see the following options:
<ZoomableImage src="/docs/images/database/ssl/5.webp" />

- **CA SSL Certificate**: Displays the current CA certificate used.
- **Save Certificate**: Allows you to save a local copy of the certificate.
- **Regenerate Certificate**: Lets you generate a new CA certificate if needed.


### Recommended Configuration
For secure connections, mount the Coolify CA certificate into all containers that need to connect to your databases. 

The recommended bind mount is:

```sh
/data/coolify/ssl/coolify-ca.crt:/etc/ssl/certs/coolify-ca.crt:ro
```


## 4. Using a Custom CA Certificate
If you wish to use your own CA certificate instead of the one generated by Coolify:

1. **Prepare Your CA Certificate**  
   Make sure your certificate is in PEM format.

2. **Upload Your Certificate**  
   Upload your custom CA certificate in the following location:
   ```sh
   /data/coolify/ssl/coolify-ca.crt
   ```

3. **Mount the Certificate**  
   Make sure that the container that requires database access mounts the certificate at:
   ```sh
   /data/coolify/ssl/coolify-ca.crt:/etc/ssl/certs/coolify-ca.crt:ro
   ```
```

---


### cloud.md {#get-started-cloud-md}

**File Path**: `get-started/cloud.md`
**Size**: 10241 bytes
**SHA**: `8ba2a44cb5eb4b7b5ccb6f50aabbebc2d209be2e`

```markdown
---
title: Coolify Cloud
description: Coolify Cloud is a fully managed service provided by the Coolify team.
---

<ZoomableImage src="/docs/images/get-started/cloud-banner.webp" />

<br />


[Coolify Cloud](https://coolify.io/pricing/) is our managed, paid service (maintained by [Andras](https://x.com/heyandras), Coolify’s Founder) that runs the Coolify on our infrastructure, so you don’t need to allocate CPU, RAM, or disk for Coolify itself. 

You still bring your own servers (VPS, Raspberry Pi, EC2, etc.) and connect them via SSH, then deploy apps, databases, and services exactly as you would with a self-hosted instance. 

Coolify Cloud uses the same open-source codebase, so there are no locked-behind-paywall features.


## Benefits of Coolify Cloud
| Features                    | Explanation                                                                                                          |
| :-------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| **Zero Maintenance Coolify**   | No need to upgrade, or monitor Coolify, our team does it for you.                     |
| **Daily Backups**           | The Coolify Cloud database is backed up every 24 hours. |
| **Preconfigured Email**     | Receive build, deployment, and server status notifications via email without any setup on your end.                              |
| **Automatic Scaling**       | As you connect more servers, our infrastructure scales CPU, RAM, and disk usage for Coolify.                         |
| **Staged Updates**          | New updates are first rolled out to self-hosted users. Once stability is confirmed, they’re rolled out to Cloud.             |
| **Founder-Tested Releases** | Andras personally tests every update before it’s deployed to the Cloud, ensuring maximum stability and reliability.                         |


## Getting Started with Coolify Cloud
1. **Create Your Account:**    
   * Visit the [Coolify Cloud Registration ↗](https://app.coolify.io/register) page and sign up.

2. **Choose Your Plan:**
   * Base fee: **$5/month** (includes up to two connected servers).
   * **$3/month** per additional server.

3. **Complete Payment**
   * Use any major credit/debit card to finish the subscription process.

4. **Connect Your Servers**
   * ::: details Detailed Server Connection Guide
      1. **Add Private Key:** Login to your Coolify account (or create one if you’re new) and Add a new private key
          <ZoomableImage src="/docs/images/resources/integrations/6.webp" />
          <br />
          <ZoomableImage src="/docs/images/resources/integrations/7.webp" />
      ---
      2. **Add a Server:** Navigate to the **Servers** tab and add a new server by entering your Hetzner server’s IPv4 address.
          <ZoomableImage src="/docs/images/resources/integrations/8.webp" />
          <br />
          <ZoomableImage src="/docs/images/resources/integrations/9.webp" />
      ---
      3. **Validate Server:** Click **Validate Server & Install Docker Engine**. Coolify will automatically install all necessary components on your server.
          <ZoomableImage src="/docs/images/resources/integrations/10.webp" />
      ---
      4. **Check Status:** Once finished, you should see a green **Proxy Running** status indicating everything is set up.
          <ZoomableImage src="/docs/images/resources/integrations/11.webp" />
      :::

5. **Deploy Your Applications**


## How Coolify Cloud Pricing works?
We charge a base fee of **\$5/month**, which covers up to **two servers**. Each additional server you connect is an **add-on of \$3/month**. 

Charging per server allows us to scale our infrastructure responsibly, since each connected server increases resource usage (CPU, RAM, storage) on our end.

If you only need one server, you still pay the $5 base fee (with capacity for a second server if you add it later). 

If you plan to connect more than two, simply multiply $3 by the extra servers.


## Why Coolify Cloud Exists
You might wonder why Coolify Cloud is a paid service when there are no exclusive, locked-down features. 

The idea came to Andras (Coolify's Founder) as a way to offer a “**paid option without paywall**” — a model where the open-source project stays completely free, but those who prefer a managed experience can contribute financially.

- **Experiment Turned Success:**
   * Initially launched as an experiment, Coolify Cloud quickly attracted over 2,100 active users.

* **Sustainable Funding:**
   * While the revenue from Cloud is modest, it provides a steady income stream that helps keep Coolify free and under active development for everyone.

* **Community-First Approach**
   * By not restricting any features, we maintain transparency and trust. 
   * Cloud subscribers simply pay for convenience and reliability, not to unlock core functionality.

## Frequently Asked Questions
::: details 1. Do I get any Cloud-only features?
  No. Coolify Cloud and self-hosted Coolify share the same feature set. 
  
  Cloud’s value lies in automatic backups, email notifications, scaling, and update testing handled for you.
:::
::: details 2. Does Coolify Cloud back up my application data?
  No, Coolify Cloud only backs up the Coolify database (e.g., dashboard settings). 

  You are responsible for backing up any databases or storage volumes on your servers.
:::
::: details 3. Can I import my self-hosted Coolify configurations to Coolify Cloud?
  No. 
  
  To transfer configurations, you'll need to back up the database from your self-hosted instance and restore it to a new Coolify instance. 
  
  However, since you don’t have access to the database in Coolify Cloud, it’s not possible to migrate data or settings directly to the cloud version.
:::
::: details 4. How often Coolify Cloud is backed up?
  Every 24 hours
:::
::: details 5. Is Coolify Cloud really based on the open-source version of Coolify?
  Yes, Coolify Cloud uses the same open-source codebase as the self-hosted version. There are no paywall features, and the Cloud service is simply a managed experience for convenience.
:::
::: details 6. What happens if I cancel my Coolify Cloud subscription?
  If you cancel your subscription, you will stop being billed, and your access to Coolify Cloud will be suspended at the end of your current billing cycle.
  
  However, your servers will remain unaffected, and all of your applications will continue running as normal. 
  
  Since your server will still be hosting your applications with a reverse proxy handling incoming requests, there will be no interruptions.
:::
::: details 7. What happens if I forget to pay an invoice?
  If a payment fails or an invoice is missed, your subscription and access to Coolify Cloud will be temporarily paused until the payment is successfully processed. 
  
  You will receive an email notification about the failed payment. 
  
  Once the payment is made, your Coolify Cloud access will be restored, and all your settings will remain intact—there’s no data loss. 
  
  Your servers will also stay up and running, and your applications will continue to function normally, as everything is still hosted on your own server with a reverse proxy.
:::

::: details 8. Are there any IP addresses I need to whitelist for Coolify Cloud?
  Yes, Coolify Cloud uses specific IP addresses. 
  
  You can find the list of IPs [here](https://coolify.io/docs/knowledge-base/faq#coolify-cloud-public-ips). 
  
  The main requirement is that Coolify Cloud needs to access your server's SSH port.
:::
::: details 9. Do I need to bring my own servers to Coolify Cloud?
  Yes, when using Coolify Cloud, you must provide your own servers (e.g., VPS, Raspberry Pi, EC2, etc.). 
  
  Coolify Cloud manages Coolify on our infrastructure, but we don’t provide the servers themselves. 
  
  This approach allows you to choose the hardware that best fits your needs.
:::
::: details 10. Why do I have to pay for Coolify Cloud if I’m bringing my own servers?
  While you bring your own servers, the subscription fee for Coolify Cloud covers the managed service aspect. 
  
  This includes infrastructure management, maintenance, support, updates, and scaling, so you don’t have to worry about technical aspects like monitoring, patching, or backups for Coolify. 
  
  We take care of the heavy lifting to ensure everything runs smoothly.
:::
::: details 11. What happens if I exceed the number of connected servers?
  You won’t be able to add extra servers to Coolify cloud unless your subscription is upgraded.
:::
::: details 12. Is there a trial period for Coolify Cloud?
  Currently, Coolify Cloud doesn’t offer a free trial. However, the subscription is affordable—just **$5 per month** for up to two connected servers. 
  
  If you want to explore all the features, you can run Coolify on a small Linux server or a VM on your PC by following the [self-hosted installation guide](https://coolify.io/docs/get-started/installation). 
  
  Since both cloud and self-hosted versions use the same codebase, you’ll be able to test all the features without any limitations.
:::
::: details 13. Can I get any discounts?
  The current **$5/month** subscription rate is already quite affordable, so discounts are not available at the moment.
:::
::: details 14. I have to pay to use Coolify Cloud, so doesn't that mean I'm locked into a vendor?
  **Not really.**
  
  You're paying for the managed Coolify instance, but stopping the use of Coolify Cloud won't affect your applications. 
  
  You can connect your own server, so you retain full control. Everything runs as a Docker container, and Coolify will install a reverse proxy on your server to ensure everything works smoothly without needing Coolify Cloud. 
  
  In a true vendor lock-in, your apps would stop if you stop paying, but that’s not the case with Coolify Cloud.
:::
::: details 15. Can I access the Coolify Cloud dashboard on my own domain?
  No. 
  
  The Coolify Cloud dashboard is only available at https://app.coolify.io. 
  
  If you’d like to access the dashboard on your own domain, you’ll need to self-host Coolify.
:::
```

---


### concepts.md {#get-started-concepts-md}

**File Path**: `get-started/concepts.md`
**Size**: 3682 bytes
**SHA**: `e66e9088b5de3fb10b2a0567d0606e8e53689461`

```markdown
---
title: Coolify Concepts
---

<ZoomableImage src="/docs/images/get-started/concepts-banner.webp" />

<br />

Many people start their self-hosting journey after discovering Coolify. If you’re one of them, here’s a list of a few concepts that could make your experience smoother.


## Servers
A server is a computer designed to run applications or services, providing the necessary computing power for your projects. 

It can be either physical such as a machine you have at home, like a Raspberry Pi, or one rented from a hosting provider like Hetzner.


## Resources 
In Coolify, a resource refers to an application or service you set up on your server—like a website, database, or API. 

Each resource comes with its own configuration, like domains, backups, health checks, and so on. 

Coolify offers a handy list of pre-set resources, called one-click services, that you can deploy instantly. But if you prefer, you can also deploy your own application easily.


## Environments
In Coolify, a  environment is a tailored setup on your server that determines how your resources operate. 

For instance, you could have a development environment for testing and debugging your code, alongside a production environment where your finished application goes live. 

With Coolify, you can set up multiple environments on a single server, letting you switch between them effortlessly.


## Projects
A project in Coolify is a group of environments and resources you’ve deployed on your server. 

It serves as the highest-level structure in Coolify, organizing your deployment setup. 

You can manage multiple projects on the same server, each with its own unique set of environments and resources. 

For example, you might create one project for all your hobby-related resources and another for work-related ones.


## Containers
In Coolify, everything you deploy runs as a Docker container, making it easy to manage and isolate your application. 

You can use pre-built Docker images from public registries like Docker Hub or GitHub Container Registry to deploy without building them yourself. 

To deploy, you need a Docker image, either one you’ve built or one from someone else. 

If you’re coding your own app, Coolify can auto-build the image from a Dockerfile or Docker Compose file, though this resource-heavy process requires a capable server. 

Alternatively, you can build the image elsewhere, push it to a registry, and let Coolify deploy it as a container.


## Reverse Proxy
A reverse proxy is a server or app that sits between your application and users, forwarding requests to the right place. 

Coolify includes two proxy options, Caddy and Traefik, which handle requests to your website by directing them to the container running your app. 

This setup lets you run multiple applications on one server without tweaking configs or ports. 

Plus, Coolify supports unlimited domains, so you could deploy 20 different apps, each with its own unique domain.


## Security
Coolify doesn’t manage your server’s security or updates, that’s your responsibility to keep everything secure and up to date. 

It’s built to simplify deployment management for you. While the Coolify core team plans to introduce more security features eventually, for now, securing your server is entirely up to you.

## Teams
Coolify supports multiple users and teams, allowing each team to have its own projects and environments. 

You can assign roles like admin to users, simplifying project management and collaboration on a single server. 

Currently, the teams feature isn’t fully polished for production use, but the Coolify core team plans to enhance it down the line.

```

---


### coolify.md {#get-started-contribute-coolify-md}

**File Path**: `get-started/contribute/coolify.md`
**Size**: 10366 bytes
**SHA**: `69f1c6fa9c389b6c9cc2ba2db71f37eb1e354f2c`

```markdown
---
title: Contributing to Core Coolify
---

# Contributing to Coolify
> "First, thanks for considering contributing to my project. It really means a lot!" - [@andrasbacsai](https://github.com/andrasbacsai)

You can ask for guidance anytime on our [Discord Community Server](https://coollabs.io/discord) in the `#contribute` channel.

To understand the tech stack, please refer to the [Tech Stack](https://github.com/coollabsio/coolify/blob/main/TECH_STACK.md) document.


## Table of Contents
1. [Setup Development Environment](#_1-setup-development-environment)
2. [Verify Installation](#_2-verify-installation-optional)
3. [Fork and Setup Local Repository](#_3-fork-and-setup-local-repository)
4. [Set up Environment Variables](#_4-set-up-environment-variables)
5. [Start Coolify](#_5-start-coolify)
6. [Start Development](#_6-start-development)
7. [Create a Pull Request](#_7-create-a-pull-request)
8. [Development Notes](#development-notes)
9. [Resetting Development Environment](#resetting-development-environment)
10. [Additional Contribution Guidelines](#additional-contribution-guidelines)


## 1. Setup Development Environment
Follow the steps below for your operating system:

<details>
<summary><strong>Windows</strong></summary>

1. Install `docker-ce`, Docker Desktop (or similar):
   - Docker CE (recommended):
     - Install Windows Subsystem for Linux v2 (WSL2) by following this guide: [Install WSL](https://learn.microsoft.com/en-us/windows/wsl/install?ref=coolify)
     - After installing WSL2, install Docker CE for your Linux distribution by following this guide: [Install Docker Engine](https://docs.docker.com/engine/install/?ref=coolify)
     - Make sure to choose the appropriate Linux distribution (e.g., Ubuntu) when following the Docker installation guide
   - Install Docker Desktop (easier):
     - Download and install [Docker Desktop for Windows](https://docs.docker.com/desktop/install/windows-install/?ref=coolify)
     - Ensure WSL2 backend is enabled in Docker Desktop settings

2. Install Spin:
   - Follow the instructions to install Spin on Windows from the [Spin documentation](https://serversideup.net/open-source/spin/docs/installation/install-windows#download-and-install-spin-into-wsl2?ref=coolify)

</details>

<details>
<summary><strong>MacOS</strong></summary>

1. Install Orbstack, Docker Desktop (or similar):
   - Orbstack (recommended, as it is a faster and lighter alternative to Docker Desktop):
     - Download and install [Orbstack](https://docs.orbstack.dev/quick-start#installation?ref=coolify)
   - Docker Desktop:
     - Download and install [Docker Desktop for Mac](https://docs.docker.com/desktop/install/mac-install/?ref=coolify)

2. Install Spin:
   - Follow the instructions to install Spin on MacOS from the [Spin documentation](https://serversideup.net/open-source/spin/docs/installation/install-macos/#download-and-install-spin?ref=coolify)

</details>

<details>
<summary><strong>Linux</strong></summary>

1. Install Docker Engine, Docker Desktop (or similar):
   - Docker Engine (recommended, as there is no VM overhead):
     - Follow the official [Docker Engine installation guide](https://docs.docker.com/engine/install/?ref=coolify) for your Linux distribution
   - Docker Desktop:
     - If you want a GUI, you can use [Docker Desktop for Linux](https://docs.docker.com/desktop/install/linux-install/?ref=coolify)

2. Install Spin:
   - Follow the instructions to install Spin on Linux from the [Spin documentation](https://serversideup.net/open-source/spin/docs/installation/install-linux#configure-docker-permissions?ref=coolify)

</details>


## 2. Verify Installation (Optional)
After installing Docker (or Orbstack) and Spin, verify the installation:

1. Open a terminal or command prompt
2. Run the following commands:
   ```bash
   docker --version
   spin --version
   ```
   You should see version information for both Docker and Spin.


## 3. Fork and Setup Local Repository
1. Fork the [Coolify](https://github.com/coollabsio/coolify) repository to your GitHub account.

2. Install a code editor on your machine (choose one):

   | Editor | Platform | Download Link |
   |--------|----------|---------------|
   | Visual Studio Code (recommended free) | Windows/macOS/Linux | [Download](https://code.visualstudio.com/download?ref=coolify) |
   | Cursor (recommended but paid) | Windows/macOS/Linux | [Download](https://www.cursor.com/?ref=coolify) |
   | Zed (very fast) | macOS/Linux | [Download](https://zed.dev/download?ref=coolify) |

3. Clone the Coolify Repository from your fork to your local machine
   - Use `git clone` in the command line, or
   - Use GitHub Desktop (recommended):
     - Download and install from [https://desktop.github.com/](https://desktop.github.com/?ref=coolify)
     - Open GitHub Desktop and login with your GitHub account
     - Click on `File` -> `Clone Repository` select `github.com` as the repository location, then select your forked Coolify repository, choose the local path and then click `Clone`

4. Open the cloned Coolify Repository in your chosen code editor.


## 4. Set up Environment Variables
1. In the Code Editor, locate the `.env.development.example` file in the root directory of your local Coolify repository.
2. Duplicate the `.env.development.example` file and rename the copy to `.env`.
3. Open the new `.env` file and review its contents. Adjust any environment variables as needed for your development setup.
4. If you encounter errors during database migrations, update the database connection settings in your `.env` file. Use the IP address or hostname of your PostgreSQL database container. You can find this information by running `docker ps` after executing `spin up`.
5. Save the changes to your `.env` file.


## 5. Start Coolify
1. Open a terminal in the local Coolify directory.
2. Run the following command in the terminal (leave that terminal open):
   ```bash
   spin up
   ```

::: warning Note: 
You may see some errors, but don't worry this is expected.
:::

3. If you encounter permission errors, especially on macOS, use:
   ```bash
   sudo spin up
   ```

::: warning Note:
If you change environment variables afterwards or anything seems broken, press Ctrl + C to stop the process and run `spin up` again.
:::


## 6. Start Development
1. Access your Coolify instance:
   - URL: `http://localhost:8000`
   - Login: `test@example.com`
   - Password: `password`

2. Additional development tools:

| Tool | URL | Note |
|------|-----|------|
| Laravel Horizon (scheduler) | `http://localhost:8000/horizon` | Only accessible when logged in as root user |
| Mailpit (email catcher) | `http://localhost:8025` | |
| Telescope (debugging tool) | `http://localhost:8000/telescope` | Disabled by default |

::: info Tip:
To enable Telescope, add the following to your `.env` file:
```yaml
TELESCOPE_ENABLED=true
```
:::


## 7. Create a Pull Request
1. After making changes or adding a new service:
   - Commit your changes to your forked repository.
   - Push the changes to your GitHub account.

2. Creating the Pull Request (PR):
   - Navigate to the main Coolify repository on GitHub.
   - Click the "Pull requests" tab.
   - Click the green "New pull request" button.
   - Choose your fork and branch as the compare branch.
   - Click "Create pull request".

3. Filling out the PR details:
   - Give your PR a descriptive title.
   - Use the Pull Request Template provided and fill in the details.

::: danger IMPORTANT
Always set the base branch for your PR to the `next` branch of the Coolify repository, not the `main` branch.
:::

4. Submit your PR:
   - Review your changes one last time.
   - Click "Create pull request" to submit.

::: warning Note:
Make sure your PR is out of draft mode as soon as it's ready for review. PRs that are in draft mode for a long time may be closed by maintainers.
:::

After submission, maintainers will review your PR and may request changes or provide feedback.


## Development Notes
When working on Coolify, keep the following in mind:

1. **Database Migrations**: After switching branches or making changes to the database structure, always run migrations:
```bash
docker exec -it coolify php artisan migrate
```

2. **Resetting Development Setup**: To reset your development setup to a clean database with default values:
```bash
docker exec -it coolify php artisan migrate:fresh --seed
```

3. **Troubleshooting**: If you encounter unexpected behavior, ensure your database is up-to-date with the latest migrations and if possible reset the development setup to eliminate any environment-specific issues.

::: danger IMPORTANT:
Forgetting to migrate the database can cause problems, so make it a habit to run migrations after pulling changes or switching branches.
:::


## Resetting Development Environment
If you encounter issues or break your database or something else, follow these steps to start from a clean slate (works since `v4.0.0-beta.342`):

1. Stop all running containers `ctrl + c`.

2. Remove all Coolify containers:
```bash
docker rm coolify coolify-db coolify-redis coolify-realtime coolify-testing-host coolify-minio coolify-vite-1 coolify-mail
```

3. Remove Coolify volumes (it is possible that the volumes have no `coolify` prefix on your machine, in that case remove the prefix from the command):
```bash
docker volume rm coolify_dev_backups_data coolify_dev_postgres_data coolify_dev_redis_data coolify_dev_coolify_data coolify_dev_minio_data
```

4. Remove unused images:
```bash
docker image prune -a
```

5. Start Coolify again:
```bash
spin up
```

6. Run database migrations and seeders:
```bash
docker exec -it coolify php artisan migrate:fresh --seed
```

After completing these steps, you'll have a fresh development setup.

::: danger IMPORTANT
Always run database migrations and seeders after switching branches or pulling updates to ensure your local database structure matches the current codebase and includes necessary seed data.
:::


## Additional Contribution Guidelines
### Contributing a New Service
To add a new service to Coolify, please refer to our documentation: [Adding a New Service](/get-started/contribute/service)

### Contributing to Documentation

To contribute to the Coolify documentation, please refer to this guide: [Contributing to the Coolify Documentation](/get-started/contribute/documentation)

```

---


### documentation.md {#get-started-contribute-documentation-md}

**File Path**: `get-started/contribute/documentation.md`
**Size**: 3580 bytes
**SHA**: `7e1a26ba9a9046748222aa26b483fa32e97c8cde`

```markdown
---
title: "Contributing to Coolify Documentation"
---

# Coolify Docs Contribution Guide

This guide outlines the process for contributing updates and fixes to our docs. Please follow the steps below to ensure a smooth and efficient workflow.


## 1. Repository Workflow
- **Release Process:**  
  We follow a weekly production release cycle. The **main** branch represents production, while the **next** branch is used as our development branch.

- **Branching Guidelines:**  
  - **Do not create pull requests (PRs) to the main branch.**  
  - All contributions should be made to the **next** branch.
  - **Clone the repository from the next branch** to your GitHub account, then start working on your changes.


## 2. Getting Started

### Step 1: Fork and Clone the Repository
- First fork the docs repository to your github account, then clone your fork to your local system using:
  ```sh
  git clone https://github.com/your-username/your-repo-name.git
  ```
- Navigate to the cloned repository:
  ```sh
  cd your-repo-name
  ```

### Step 2: Install Dependencies and Run the Dev Server
We use [bun](https://bun.sh/) as our preferred package manager for local development. If you choose to use a different package manager, please **do not include its configuration files** in your commit.

To set up your environment, run:
```bash
bun install && bun run dev
```

The development server will start on `localhost` at port `5173`. You can view the documentation by navigating to:
```bash
http://localhost:5173/docs/
```


## 3. Image Guidelines
- **Format:**  
  All images used in the documentation must be in `.webp` format.
  
- **Location:**  
  Place all image files in the `/docs/public` directory.

- **Usage:**  
  Use the Zoomable image component on the docs to attach your images
  ```vue
  <ZoomableImage src="path-to-the-image.webp" />
  ```


## 4. Writing and Structuring Content

### Best Practices for Documentation:
- **Clear and Simple Language:**  
  Use plain and easily understandable English. Remember that not all readers are native English speakers.
  
- **Beginner-Friendly Guides:**  
  Break down instructions into small, easy-to-follow steps. Include screenshots wherever possible to help visualize the process, especially for users new to self-hosting or Coolify.

- **Content Organization:**  
  Structure your content with clear headings, bullet points, and numbered steps where applicable. This makes it easier for readers to follow along.


## 5. Submitting Your Contribution
1. **Commit your changes to your repository**  

2. **Create a Pull Request:**  
   - Open a pull request (PR) to merge your changes into the **next** branch on the docs repository. 
   - Provide a detailed description of your updates to help maintainers review your contribution effectively.


## 6. Questions and Support
If you have any questions or run into issues while contributing:
  - **Create an Issue:** Open an issue on the repository detailing your issue.
  - **Discord:** Reach out to us on contribute channel on the [Coolify Discord community](https://coolify.io/discord).


## 7. Important Notes
- **Documentation Updates:**  
  The current docs are bit outdated and missing some information. The docs maintainers are actively rewriting parts of the documentation to improve structure and clarity before new content is added.

- **PR Approval:**  
  Merging of your PR is subject to review by the maintainers. Please be patient as they work through the process.


We appreciate your contribution and effort in making the Coolify docs better for everyone.
```

---


### service.md {#get-started-contribute-service-md}

**File Path**: `get-started/contribute/service.md`
**Size**: 3804 bytes
**SHA**: `7793b995dddf9ef5c42a397c5d2a7080bbec09e6`

```markdown
---
title: "Add a new service template to Coolify"
---

# Adding a new service template to Coolify

Services in Coolify are templates made from normal [docker-compose](https://docs.docker.com/reference/compose-file/) files with some added Coolify magic.

::: info
See [Coolify's docker-compose specs](/knowledge-base/docker/compose#coolify-s-magic-environment-variables) to learn more about Coolify's magic and how to benefit from generated variables and storage handling. Please use this magic when submitting your PR to make the merging process smoother.
:::

1. Add metadata

   At the top of your `docker-compose` file, add the following metadata:

   ```yaml
   # documentation: https://docs.example.com/
   # slogan: A brief description of your service.
   # tags: tag1,tag2,tag3
   # logo: svgs/your-service.svg
   # port: 1234
   ```

   - `documentation`: Link to the service's official documentation
   - `slogan`: A short description of the service
   - `tags`: Comma-separated list for better searchability
   - `logo`: Path to the service's logo (see step 3)
   - `port`: The main entrypoint port of the service

::: warning Caution
Always specify a port, as Caddy Proxy cannot automatically determine the service's port.
:::

2. Create the docker-compose file

   Below the metadata, add your docker-compose configuration. Use Coolify's environment variable magic [here](/knowledge-base/docker/compose#coolifys-magic-environment-variables).

   Example:

   ```yaml
   services:
     app:
       image: your-service-image:tag
       environment:
         - DATABASE_URL=${COOLIFY_DATABASE_URL}
       volumes:
         - ${COOLIFY_VOLUME_APP}:/data
   ```

   **Using Required Environment Variables:**
   When creating service templates, mark critical configuration as required to improve user experience:

   ```yaml
   services:
     app:
       image: your-service:latest
       environment:
         # Required - critical configuration that must be set by the user
         - DATABASE_URL=${DATABASE_URL:?}
         - API_KEY=${API_KEY:?}

         # Required with sensible defaults - improves usability
         - PORT=${PORT:?8080}
         - LOG_LEVEL=${LOG_LEVEL:?info}

         # Optional - features that can be left empty
         - DEBUG=${DEBUG:-false}
         - CACHE_TTL=${CACHE_TTL:-3600}
   ```

   This helps users understand which configuration is essential and prevents deployment failures.

3. Add a logo

   - Create or obtain an SVG logo for your service (strongly preferred format)
   - If SVG is unavailable, use a high-quality.webp or JPG as a last resort
   - Add the logo file to the `svgs` folder in the Coolify repository
   - The logo filename should match the docker-compose service name exactly
     - For example, if your service name is `wordpress`, your logo should be `wordpress.svg` and the final path then is `svgs/wordpress.svg` use this path in the `logo` metadata.

4. Test your template

   Use the `Docker Compose` deployment option in Coolify to test your template. This process mimics the one-click service deployment.

5. Submit a Pull Request

   Once your template works correctly:

   - Open a [PR](https://github.com/coollabsio/coolify/compare)
   - Add your new `<service>.yaml` compose file under `/templates/compose`
   - Include the logo file in the `svgs` folder

::: info
Coolify uses a [parsed version](https://github.com/coollabsio/coolify/blob/main/templates/service-templates.json) of the templates for deployment.
:::

## Request a new service

If there's a service template you'd like to see in Coolify:

1. Search [GitHub discussions](https://github.com/coollabsio/coolify/discussions/categories/service-template-requests) for existing requests.
2. If the service has been requested, upvote it. If not, create a new request.

```

---


### downgrade.md {#get-started-downgrade-md}

**File Path**: `get-started/downgrade.md`
**Size**: 2937 bytes
**SHA**: `0b56807475d42ee6a53307a808c29d67a35b42eb`

```markdown
---
title: Downgrading Coolify
---

<ZoomableImage src="/docs/images/get-started/downgrade-banner.webp" />

<br />

If you're using [Coolify Cloud ↗](https://coolify.io/pricing/), the Coolify team handles all updates so you  **cannot** downgrade the version of Coolify. If you are facing any issues, please contact [support ↗](/get-started/support). 


For those who **self-host** Coolify, you can easily downgrade to the previous version. Follow the steps below to perform a downgrade on to a previous version.

:::danger **Backup First!**  
  > **Always back up your Coolify data before performing an downgrade.**
  > **Downgrading can introduce issues that can be difficult to fix.**
:::



The Downgrade process involves the following three steps:
- [Disable Auto Update](#_1-disable-auto-update)
- [Login to Your Server via SSH](#_2-login-to-your-server-via-ssh)
- [Execute the Downgrade Command](#_3-execute-the-downgrade-command)


## 1. Disable Auto Update
Before downgrading, it's important to disable the Auto Update feature to prevent Coolify from automatically upgrading again after you perform the downgrade.

1. Log in as the root user (or any user who has access to the root or initial team).

2. Navigate to the Settings menu in your Coolify dashboard.

3. In the Settings menu, disable the **Auto Update** feature.

<ZoomableImage src="/docs/images/get-started/upgrade/disable-auto-update.webp" />

::: warning Important!
  Disabling auto-update is essential, as it ensures that Coolify doesn’t override your downgrade with a newer version.
:::


## 2.Login to Your Server via SSH
Next, you need to SSH into your server to execute the downgrade command.


## 3. Execute the Downgrade Command
To downgrade Coolify to the desired version, run the following command in your terminal:
```sh
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash -s 4.0.0-beta.369
```
Replace `4.0.0-beta.369` with the version number you want to downgrade to. 

For example, you can downgrade to `4.0.0-beta.333` or any previous version.

::: warning Note
  Double-check the version number you are specifying to ensure you are downgrading to the correct version. You can check the Coolify [release notes ↗](https://github.com/coollabsio/coolify/releases) for version details.
:::


## Potential Issues with Downgrading
While downgrading is possible, be aware of the following risks:
- [Database Schema Compatibility](#database-schema-compatibility)
- [Feature Incompatibility](#feature-incompatibility)

---

#### Database Schema Compatibility: 
Downgrading can cause issues since the database schema may not be backward compatible. Some features may not work as expected due to changes in the database structure between versions.

#### Feature Incompatibility: 
Some features might not function properly after downgrading, as certain features in the newer version may rely on changes that are not present in the older version.
```

---


### introduction.md {#get-started-introduction-md}

**File Path**: `get-started/introduction.md`
**Size**: 7592 bytes
**SHA**: `05b209a39607408f67a359714c21eb3a97c6a7aa`

```markdown
---
title: Introduction to Coolify
outline: [2, 4]
lastUpdated: true
editLink: true
---

<ZoomableImage src="/docs/images/get-started/introduction-banner.webp" />

<br />

## What is Coolify?

Coolify is a software that makes self-hosting simple and powerful. It lets you run your applications, databases, and services on your own server, whether that’s an old laptop, a Raspberry Pi, or a rented server from a provider like [Hetzner ↗](https://coolify.io/hetzner). 

With Coolify, you get full control over your projects, your data, and your costs. It’s completely free to use, open-source, and has no features locked behind a paywall. 

Think of Coolify as your personal alternative to cloud platforms like [Vercel ↗](https://vercel.com?utm_source=coolify.io), [Railway ↗](https://railway.com/?utm_source=coolify.io), or [Heroku ↗](https://www.heroku.com/?utm_source=coolify.io), but without the huge bills or privacy trade-offs.

### What Coolify Is Not

Coolify isn’t a cloud service that hosts everything for you, you need your own server. That could be your old laptop, a Raspberry Pi, or a rented server from a hosting provider like [Hetzner ↗](https://coolify.io/hetzner), and you’ll need SSH access to use it. 

It’s not a zero-effort solution either, if you choose to self-host, you’ll need to set up your server and install Coolify. But once it’s running, managing your projects becomes very easy.

## Features of Coolify

Coolify is loaded with tools to make self-hosting smooth and powerful. Here’s a detailed look at what it offers:

| Features                  | Explanation                                                                                              |
|:--------------------------|:---------------------------------------------------------------------------------------------------------|
| **Any Language**          | Deploy static sites, APIs, backends, databases, and more with support for all major frameworks.          |
| **Any Server**            | Deploy to any server - VPS, Raspberry Pi, EC2, your laptop via SSH.                                      |
| **Any Use-Case**          | Supports single servers, multi-server setups, and Docker Swarm clusters (Kubernetes support coming soon).|
| **Any Service**           | Deploy any Docker-compatible service, plus a wide range of one-click options.                            |
| **Push to Deploy**        | Git integration with GitHub, GitLab, Bitbucket, Gitea, and other platforms.                              |
| **Free SSL Certificates**  | Automatically sets up and renews Let's Encrypt SSL certificates for custom domains.                       |
| **No Vendor Lock-In**     | Your data and settings stay on your servers for full control and easy portability.                       |
| **Automatic Backups**     | Back up data to S3-compatible storage and restore it with one click if needed.                           |
| **Webhooks**              | Integrate with CI/CD tools like GitHub Actions, GitLab CI, or Bitbucket Pipelines.                       |
| **Powerful API**          | Automate deployments, manage resources, and integrate with your existing tools easily.                   | 
| **Real-Time Terminal**    | Run server commands directly from your browser in real-time.                                             |
| **Collaborative**         | Share projects with your team, control roles, and manage permissions.                                    |
| **PR Deployments**        | Deploy commits and pull requests separately for quick reviews and faster teamwork.                       |
| **Server Automations**    | Handles server setup tasks automatically after connection, saving you time.                              |
| **Monitoring**            | Monitor deployments, servers, disk usage, and receive alerts for issues.                                 |

## Benefits of Using Coolify
Coolify delivers unbeatable advantages for developers who want to self-host. Here’s why it stands out:

| Benefits                     | Explanation                                                                                                    |
|:--------------------------- |:-------------------------------------------------------------------------------------------------------------- |
| **Cost Savings**            | Avoid skyrocketing cloud costs. Use your own server for a steady, predictable price.                           |
| **No Hidden Costs**         | Transparent pricing with no unexpected charges.                                                                |
| **Highly Cost-Efficient**    | Save thousands monthly compared to traditional cloud platforms. Real examples can be found [here ↗](https://twitter.com/heyandras/status/1742078215986860460), [here ↗](https://twitter.com/heyandras/status/1752209429276086688), and [here ↗](https://twitter.com/heyandras/status/1724510876256944244)           |
| **Complete Data Privacy**   | Your data stays on your server, ensuring total control and security.                                           |
| **No Feature Restrictions** | All features are included in the open-source version—nothing locked behind a paywall.                          |
| **Unlimited Usage**         | Deploy unlimited websites and applications across any number of servers.                                       |
| **Quick Setup**             | Start hosting in minutes with minimal maintenance required.                                                    |
| **User-Friendly Interface** | Manage your infrastructure through a clean, simple dashboard designed for developers.                          |
| **100% Open Source**        | Review the code, contribute to development, and help shape the platform’s future.                              |
| **Active Community**        | Join over 16,000 people on Discord and 204,000+ servers running Coolify worldwide.                             |


## Getting Started with Coolify
Before you jump into using Coolify, it’s worth understanding a few key concepts to make your journey smoother. 

Learn about servers, SSH access, and how Coolify manages your projects by checking out our [concepts guide ↗](/get-started/concepts).

You have two ways to use Coolify:
- [Self-Host Coolify](#self-host-coolify)
- [Use Coolify Cloud](#use-coolify-cloud)

---

### Self-Host Coolify
  - Install Coolify on your own server. This requires setting up the server, installing Coolify, and handling updates yourself. 
  - You’ll also need to allocate some server resources to run Coolify. 
  - It’s completely free (except your server bills) and gives you full control over your infrastructure.


### Use Coolify Cloud
  - Let the Coolify team manage Coolify for you. 
  - With Coolify Cloud, you don’t need to install or update Coolify yourself, and no server resources are required for Coolify itself, it runs on the Coolify team’s managed servers. 
  - Simply create an account from [here ↗](https://app.coolify.io/register), connect your servers via SSH keys, and start deploying. 
  This is a paid service (starting at $5/mo), as it costs the team to host and maintain the infrastructure. 
  - Updates on Coolify Cloud are thoroughly tested by the core team, so they might be slightly delayed for added stability.


## Join Our Community
Got questions or need support? Our [discord community](https://coollabs.io/discord) is here to help. 
Connect with other Coolify users on our community server to get assistance and share your experiences.

```

---


### screenshots.md {#get-started-screenshots-md}

**File Path**: `get-started/screenshots.md`
**Size**: 1510 bytes
**SHA**: `99d1846c7caa063b9261cf65785b88e6ecd73d60`

```markdown
---
title: Coolify UI Screenshots
---


# Coolify UI Screenshots
The Coolify team is currently developing a brand new UI design. Below are the images showing the current UI.

<ZoomableImage src="/docs/images/resources/screenshots/1.webp" />
<br />

<ZoomableImage src="/docs/images/resources/screenshots/2.webp" />
<br />

<ZoomableImage src="/docs/images/resources/screenshots/3.webp" />
<br />

<ZoomableImage src="/docs/images/resources/screenshots/4.webp" />
<br />

<ZoomableImage src="/docs/images/resources/screenshots/5.webp" />
<br />

<ZoomableImage src="/docs/images/resources/screenshots/6.webp" />
<br />

<ZoomableImage src="/docs/images/resources/screenshots/7.webp" />
<br />

<ZoomableImage src="/docs/images/resources/screenshots/8.webp" />
<br />

<ZoomableImage src="/docs/images/resources/screenshots/9.webp" />
<br />

<ZoomableImage src="/docs/images/resources/screenshots/10.webp" />
<br />

<ZoomableImage src="/docs/images/resources/screenshots/11.webp" />
<br />

<ZoomableImage src="/docs/images/resources/screenshots/12.webp" />
<br />

<ZoomableImage src="/docs/images/resources/screenshots/13.webp" />
<br />

<ZoomableImage src="/docs/images/resources/screenshots/14.webp" />
<br />

<ZoomableImage src="/docs/images/resources/screenshots/15.webp" />
<br />

<ZoomableImage src="/docs/images/resources/screenshots/16.webp" />
<br />

<ZoomableImage src="/docs/images/resources/screenshots/17.webp" />
<br />

<ZoomableImage src="/docs/images/resources/screenshots/18.webp" />

 
```

---


### sponsors.md {#get-started-sponsors-md}

**File Path**: `get-started/sponsors.md`
**Size**: 8615 bytes
**SHA**: `29ee230304b2152ffc31df90f0e35bf144f5a69e`

```markdown
---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'


const sponsors = [
  {
    avatar: '../images/sponsors/hetzner.webp',
    name: 'Hetzner',
    title: 'Server, cloud, hosting, and data center solutions',
    links: [
      { icon: 'expedia', link: 'http://htznr.li/CoolifyXHetzner' }
    ]
  },
  {
    avatar: '../images/sponsors/logto.webp',
    name: 'Logto',
    title: 'The better identity infrastructure for developers',
    links: [
      { icon: 'expedia', link: 'https://logto.io/?ref=coolify' }
    ]
  },
  {
    avatar: '../images/sponsors/tolgee.webp',
    name: 'Tolgee',
    title: 'The open source localization platform',
    links: [
      { icon: 'expedia', link: 'https://tolgee.io/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/bc.webp',
    name: 'Best Consultant',
    title: 'Your trusted technology consulting partner',
    links: [
      { icon: 'expedia', link: 'https://bc.direct/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/quant.webp',
    name: 'QuantCDN',
    title: 'Enterprise-grade content delivery network',
    links: [
      { icon: 'expedia', link: 'https://www.quantcdn.io/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/arcjet.webp',
    name: 'Arcjet',
    title: 'Advanced web security and performance solutions',
    links: [
      { icon: 'expedia', link: 'https://arcjet.com/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/supaguide.webp',
    name: 'SupaGuide',
    title: 'Your comprehensive guide to Supabase',
    links: [
      { icon: 'expedia', link: 'https://supa.guide/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/coderabbit.webp',
    name: 'CodeRabbit',
    title: 'Cut Code Review Time & Bugs in Half',
    links: [
      { icon: 'expedia', link: 'https://coderabbit.ai/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/convex.webp',
    name: 'Convex',
    title: 'Open-source reactive database for web app developers',
    links: [
      { icon: 'expedia', link: 'https://convex.link/coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/goldenvm.webp',
    name: 'GoldenVM',
    title: 'Premium virtual machine hosting solutions',
    links: [
      { icon: 'expedia', link: 'https://billing.goldenvm.com/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/tigris.webp',
    name: 'Tigris',
    title: 'Modern developer data platform',
    links: [
      { icon: 'expedia', link: 'https://www.tigrisdata.com/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/cloudify.webp',
    name: 'Cloudify',
    title: 'Cloud hosting solutions',
    links: [
      { icon: 'expedia', link: 'https://cloudify.ro/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/trieve.webp',
    name: 'Trieve',
    title: 'AI-powered search and analytics',
    links: [
      { icon: 'expedia', link: 'https://trieve.ai/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/blacksmith.webp',
    name: 'Blacksmith',
    title: 'Infrastructure automation platform',
    links: [
      { icon: 'expedia', link: 'https://blacksmith.sh/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/comit.webp',
    name: 'Comit International',
    title: 'New York Times award–winning contractor!',
    links: [
      { icon: 'expedia', link: 'https://comit.international/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/branddev.webp',
    name: 'Brand.dev',
    title: 'The #1 Brand API for B2B software startups',
    links: [
      { icon: 'expedia', link: 'https://brand.dev/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/syntax.webp',
    name: 'Syntax.fm',
    title: 'Podcast for web developers',
    links: [
      { icon: 'expedia', link: 'https://syntax.fm?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/jobscollider.webp',
    name: 'Jobs Collider',
    title: '30,000+ remote jobs for developers',
    links: [
      { icon: 'expedia', link: 'https://jobscollider.com/remote-jobs?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/hostinger.webp',
    name: 'Hostinger',
    title: 'Web hosting and VPS solutions',
    links: [
      { icon: 'expedia', link: 'https://www.hostinger.com/vps/coolify-hosting?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/glueops.webp',
    name: 'GlueOps',
    title: 'DevOps automation and infrastructure management',
    links: [
      { icon: 'expedia', link: 'https://www.glueops.dev/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/ubicloud.webp',
    name: 'Ubicloud',
    title: 'Open source cloud infrastructure platform',
    links: [
      { icon: 'expedia', link: 'https://www.ubicloud.com/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/pfglabs.webp',
    name: 'Pfglabs',
    title: 'Build Real Projects with Golang',
    links: [
      { icon: 'expedia', link: 'https://pfglabs.com/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/juxtdigital.webp',
    name: 'JuxtDigital',
    title: 'Digital transformation and web solutions',
    links: [
      { icon: 'expedia', link: 'https://juxtdigital.com/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/saasykit.webp',
    name: 'SaasyKit',
    title: 'Complete SaaS starter kit for developers',
    links: [
      { icon: 'expedia', link: 'https://saasykit.com/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/massivegrid.webp',
    name: 'MassiveGrid',
    title: 'Enterprise cloud hosting solutions',
    links: [
      { icon: 'expedia', link: 'https://massivegrid.com/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/americancloud.webp',
    name: 'American Cloud',
    title: 'US-based cloud infrastructure services',
    links: [
      { icon: 'expedia', link: 'https://americancloud.com/?utm_source=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/algora.webp',
    name: 'Algora',
    title: 'Open source contribution platform',
    links: [
      { icon: 'expedia', link: 'https://algora.io/?utm_source=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/liquidweb.webp',
    name: 'LiquidWeb',
    title: 'Premium managed hosting solutions',
    links: [
      { icon: 'expedia', link: 'https://liquidweb.com/?utm_source=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/yaak.webp',
    name: 'Yaak',
    title: 'The API client for modern developers',
    links: [
      { icon: 'expedia', link: 'https://yaak.app/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/comp.webp',
    name: 'Comp AI',
    title: 'The open-source platform that automates compliance',
    links: [
      { icon: 'expedia', link: 'https://www.trycomp.ai/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/darweb.webp',
    name: 'Darweb',
    title: 'Design. Develop. Deliver. Specialized in 3D CPQ Solutions for eCommerce',
    links: [
      { icon: 'expedia', link: 'https://darweb.nl/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/wzit.webp',
    name: 'WZ-IT',
    title: 'German agency for customized cloud solutions, migration, managed services and open source hosting',
    links: [
      { icon: 'expedia', link: 'https://wz-it.com/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/supadata.webp',
    name: 'Supadata',
    title: 'Scrape YouTube, web, and files. Get AI-ready, clean data for your next project',
    links: [
      { icon: 'expedia', link: 'https://supadata.ai/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/gozunga.webp',
    name: 'Gozunga',
    title: 'Seriously Simple Cloud Infrastructure',
    links: [
      { icon: 'expedia', link: 'https://gozunga.com/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/sponsors/macarne.webp',
    name: 'Macarne',
    title: 'Best IP Transit & Carrier Ethernet Solutions for Simplified Network Connectivity',
    links: [
      { icon: 'expedia', link: 'https://macarne.com/?ref=coolify.io' }
    ]
  },
  {
    avatar: '../images/team/coollabs-logo-smaller.webp',
    name: 'Your Company?',
    title: 'Will Your Company Be Next?'
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Coolify Sponsors
    </template>
    <template #lead>
      We have amazing sponsors who support the development of Coolify.
    </template>
  </VPTeamPageTitle>
<VPTeamMembers size="small" :members="sponsors" />
</VPTeamPage>

```

---


### support.md {#get-started-support-md}

**File Path**: `get-started/support.md`
**Size**: 1339 bytes
**SHA**: `021ae465cddd67cf8ca802001bd70451f725b4be`

```markdown
---
title: Support
---

<ZoomableImage src="/docs/images/get-started/support-banner.webp" />

<br />

## Community Support  
Join our [Discord community ↗](https://coollabs.io/discord) with over **13K members**, where you can create a post in the **support forum channel** for assistance. 

While the community does provide some help, the [Core team ↗](/get-started/team) is actively involved in the forum to ensure questions are addressed.  

## Direct Support from Core Developers
If you are a **Coolify Cloud user**, you can reach out via email at **hi@coollabs.io** for direct support from [Andras (Coolify’s founder)](https://x.com/heyandras). Since he personally handles emails, response times may be delayed. 

We highly recommend posting in the **Discord support forum** first, as core team members can escalate issues to the developers ([Andras](https://x.com/heyandras) & [Peak](https://x.com/peaklabs_dev)) if necessary.  

## Important Notes  
- We are a **small team** (fewer than **6 people**) supporting **140K+ users**, making it challenging to offer direct assistance to everyone. However, we do our best to help as much as possible.  
- We are planning a **paid support option** for **self-hosted users**. If you need dedicated support for your **self-hosted instance**, email **hi@coollabs.io** to discuss options.
```

---


### team.md {#get-started-team-md}

**File Path**: `get-started/team.md`
**Size**: 2629 bytes
**SHA**: `bae93111650fb8cffa587a7eba1664791ad079c4`

```markdown
---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'


const coreMembers = [
  {
    avatar: '../images/team/andras.webp',
    name: 'Andras Bacsai',
    title: 'Founder, Lead Developer',
    links: [
      { icon: 'github', link: 'https://github.com/andrasbacsai' },
      { icon: 'expedia', link: 'https://heyandras.dev' },
      { icon: 'x', link: 'https://x.com/heyandras' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/heyandras.dev' }
    ]
  },
  {
    avatar: '../images/team/peak.webp',
    name: 'Peaklabs Dev',
    title: 'Core Developer',
    links: [
      { icon: 'github', link: 'https://github.com/peaklabs-dev' },
      { icon: 'x', link: 'https://x.com/peaklabs_dev' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/peaklabs.dev' },
      { icon: 'mastodon', link: 'https://fosstodon.org/@peaklabs_dev' }
    ]
  },
  {
    avatar: '../images/team/shadowarcanist.webp',
    name: 'ShadowArcanist',
    title: 'Community Lead, Docs Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/shadowarcanist' },
      { icon: 'expedia', link: 'https://shadowarcanist.com' },
      { icon: 'x', link: 'https://x.com/shadowarcanist' }
    ]
  },
  {
    avatar: '../images/team/serdar.webp',
    name: 'Serdar Yerdelen',
    title: 'Community Moderator, Docs Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/justserdar' },
      { icon: 'expedia', link: 'https://justserdar.dev' },
      { icon: 'x', link: 'https://x.com/darwebdb' }
    ]
  },
  {
    avatar: '../images/team/aditya.webp',
    name: 'Aditya Tripathi',
    title: 'Developer, Community Moderator',
    links: [
      { icon: 'github', link: 'https://github.com/adiologydev' },
      { icon: 'expedia', link: 'https://adiology.dev' },
      { icon: 'x', link: 'https://x.com/AdityaTripathiD' }
    ]
  },
  {
    avatar: '../images/team/oren.webp',
    name: 'Oren Aksakal',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/orenaksakal' },
      { icon: 'x', link: 'https://x.com/orenaksakal' }
    ]
  },
  {
    avatar: '../images/team/coollabs.webp',
    name: 'You?',
    title: 'Will You Be Next?'
  }
]

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      coolLabs Team
    </template>
    <template #lead>
      The development of Coolify is guided by an international team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="coreMembers" />
</VPTeamPage>

```

---


### upgrade.md {#get-started-upgrade-md}

**File Path**: `get-started/upgrade.md`
**Size**: 3433 bytes
**SHA**: `02d4a7770b0cc12579da4ad5a1313a7ef4286b3f`

```markdown
---
title: Upgrading Coolify 
---

<ZoomableImage src="/docs/images/get-started/upgrade/banner.webp" />

<br />

If you're using [Coolify Cloud ↗](https://coolify.io/pricing/), the Coolify team handles all updates so you don’t need to worry about them. 

For those who **self-host** Coolify, there are three ways to upgrade your instance:

- [Automatic Upgrade:](#_1-automatic-upgrade) For users who want easy, hands-off updates.
- [Semi-Automatic Upgrade:](#_2-semi-automatic-upgrade) For users who want control over when to apply updates.
- [Manual Upgrade:](#_3-manual-upgrade) For advanced users who prefer to manage the upgrade process themselves.

:::danger **Backup First!**  
  > **Always back up your Coolify data before starting an upgrade.**
:::


## 1. Automatic Upgrade
Coolify can update itself automatically. This option keeps your instance always up-to-date without any extra effort.

### How it works?
Coolify periodically checks the [CDN ↗](https://cdn.coollabs.io/coolify/versions.json) for updates. When a new version is available, it automatically fetches the latest release from the [official repository ↗](https://github.com/orgs/coollabsio/packages?repo_name=coolify) and starts the upgrade process on its own.

### Customize Automatic Updates  
If you’d rather manage updates yourself, you can disable auto-updates in your Coolify dashboard’s Settings.

<ZoomableImage src="/docs/images/get-started/upgrade/disable-auto-update.webp" />

::: info Tip
Turning off automatic updates lets you test a new version on a staging setup before updating your live environment.
:::


## 2. Semi-Automatic Upgrade
This option gives you a bit more control. Coolify notifies you when an update is available, and you decide when to apply it.

### How it works?
Coolify periodically checks the [CDN ↗](https://cdn.coollabs.io/coolify/versions.json) for updates. When a new version is available, you will see an "**Upgrade**" button in the sidebar of your Coolify dashboard.

<ZoomableImage src="/docs/images/get-started/upgrade/upgrade-button-ui.webp" />

Click the upgrade button to start the update process.

### Set Update Frequency
You can also choose how often Coolify checks for updates by adjusting the settings (daily, weekly, etc.).

<ZoomableImage src="/docs/images/get-started/upgrade/change-frequency.webp" />

::: info Tip:
This method is perfect if you want to review update details or test the upgrade before applying it.
:::


## 3. Manual Upgrade
For those who prefer full control, you can upgrade Coolify manually.

### How to do this?
Open your server's terminal and run the command below:

```sh
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

To upgrade to a specific version, run the following command in your terminal:
```sh
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash -s 4.0.0-beta.400
```
Replace `4.0.0-beta.400` with the version number you want to upgrade to. 


### How it works?
This command runs the official [Coolify installation script ↗](https://github.com/coollabsio/coolify/blob/main/scripts/install.sh). The script checks the [CDN ↗](https://cdn.coollabs.io/coolify/versions.json) for the latest version and updates your Coolify Instance.


::: success Tip
In the Automatic and Semi-Automatic methods, Coolify runs the installation script automatically in the background. 

In the Manual upgrade method, you run the script yourself.
:::
```

---


### usage.md {#get-started-usage-md}

**File Path**: `get-started/usage.md`
**Size**: 3489 bytes
**SHA**: `6cae581b2515343a4fc636484d492f012e053211`

```markdown
---
title: Usage
---

<ZoomableImage src="/docs/images/get-started/usage-banner.webp" />

<br />

So, you’ve decided to use Coolify, awesome choice! 

Now, you might be wondering whether to go with **Coolify Cloud** or set it up yourself through **self-hosting**. Let’s break it down so you can pick the best option for you.


## Coolify Cloud
Coolify Cloud is the easy way to get started. It’s a paid service (starting at just **$5 a month**) where you bring your own servers and connect them to a Coolify instance that’s fully managed by our team. 

::: warning **Note** 
  **We host and update the Coolify instance for you, so you don't have to allocate any of your server resources to Coolify, but you’re still responsible for your own servers and any other services running on them**
:::


## Coolify Self-Hosted 
If you’re more of a hands-on person, self-hosting Coolify might be your thing. 

It’s completely free (except for your server costs, of course), and you get to control everything. 

You’ll install Coolify on your own server, keep it updated, and manage all the related services yourself. 


## How Do They Compare?
*All of the features below refer only to the Coolify instance, not your entire server or other services.*

| Feature                  | Coolify Cloud                                                                 | Self-Hosted Coolify                                  |
|------------------------- |------------------------------------------------------------------------------ |----------------------------------------------------- |
| **Maintenance**          | We take care of hosting and updating the Coolify instance for you             | You’re in charge of keeping the instance running smoothly |
| **Support**              | Help from Coolify experts and our core team                                   | Chat with the community on Discord                   |
| **Email Notifications**   | Pre-configured and ready to use for free                                       | You’ll need to set this up yourself                   |
| **Backups**              | We handle automatic backups for your Coolify instance                         | Set up your own backup system for the Coolify instance        |
| **High Availability**    | We’ve got you covered with reliable uptime for the Coolify instance           | Depends on how you set things up                      |
| **Stability**            | We test updates thoroughly before rolling them out                            | Test updates yourself before upgrading                |
| **Cost**                 | Starts at **$5/month**                                                        | Free forever (just pay for your server)               |

And just so you know, we don’t play the “**feature lock**” game. Whether you choose Coolify Cloud or self-host, you get all the same powerful features. 

We’re all about giving you the full Coolify experience, no matter which path you take.


## Which One is Right for You?
If you want a quick, easy setup and don’t mind paying a small fee for convenience, **Coolify Cloud** is perfect. 

But if you love getting hands-on, want to save every penny, and enjoy being in full control, **Self-Hosting** is the way to go.

If you're still not sure which path to take, join our [Discord community ↗](https://coolify.io/discord) and ask any questions you might have! We're here to help you decide what's best for your needs.
```

---


### videos.md {#get-started-videos-md}

**File Path**: `get-started/videos.md`
**Size**: 2615 bytes
**SHA**: `5b53ca30b4fa463e192d27946cafcf8df33cf2bf`

```markdown
---
title: Coolify Tutorial videos
---


#  Video Tutorials created by the community
Only few of the videos are listed here

### Syntax: 1.5 hours long complete walkthrough
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/taJlPG82Ucw?si=O4Gu8_Dxcb68agfu"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

### WebdevCody: 6 minutes quick overview
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/44uWIkGZ4W8"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

### Developedbyed: 20 minutes overview
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/ZZ1lnw8D3Qo?si=U5jfyp-wykHd1OTL"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

### Fireship video
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/SCIfWhAheVw"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

### MelkeyDev video
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/SANSysQlS18"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

### Brendan O'Connell
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/8pLDDcEZlbo?si=L-QXX-3hHbbqd7kN"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

### Awesome Open Source
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/cg28Ztt4-os?si=u6asFexlFpe8FmK7"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>


### Airoflare Coolify beginner playlist
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/videoseries?list=PLoVHNPkf8ZxrVW0vclP5ngQQcTz6-VzL-"
  title="YouTube playlist"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>


```

---


### index.md {#index-md}

**File Path**: `index.md`
**Size**: 8419 bytes
**SHA**: `bc6f38b1a89d058d91d4826f1c69fcea6e62f538`

```markdown
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Coolify"
  text: "Open Source PaaS"
  tagline: Self-host your own databases, services (like WordPress, Plausible Analytics, Ghost) and applications (like Next.js, Nuxt.js, Remix, SvelteKit) with ease.
  actions:
    - theme: brand
      text: Get Started
      color: '#6b16ed'
      link: /get-started/introduction
    - theme: alt
      text: View Source Code
      link: https://github.com/coollabsio/coolify
referral:
  title: "Get €20 Free Credit"
  url: "https://coolify.io/hetzner"
  text: "Don't have a server yet? Get started with Hetzner Cloud."
  description: "Use our referral link to get €20 in free credits at Hetzner!"

# Icons used below on features are from https://lucide.dev/icons/ feel free to change them or change their colors if needed
features:
  - title: Any Language
    details: Deploy static sites, APIs, backends, databases, and more with support for all major frameworks.
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d1ce" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
  - title: Any Server
    details: Deploy to any server — VPS, Raspberry Pi, EC2, your Laptop, and more via SSH.
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dbb700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>
  - title: Any Use-Case
    details: Supports single servers, multi-server setups, and Docker Swarm clusters (K8s coming soon).
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b899ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-mouse-pointer"><path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"/><path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"/></svg>
  - title: Any Service
    details: Deploy any Docker-compatible service, plus a wide range of one-click options.
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d64b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
  - title: Push to Deploy
    details: Git integration with GitHub, GitLab, Bitbucket, Gitea, and other platforms.
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#99bbff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-git-merge"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>
  - title: Free SSL certificates
    details: Automatically sets up and renews Let's Encrypt SSL certificates for custom domains.
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff9999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-key"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><circle cx="10" cy="16" r="2"/><path d="m16 10-4.5 4.5"/><path d="m15 11 1 1"/></svg>
  - title: No Vendor Lock-In
    details: Your data and settings stay on your servers for full control and easy portability.
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffc800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-keyhole-open"><circle cx="12" cy="16" r="1"/><rect width="18" height="12" x="3" y="10" rx="2"/><path d="M7 10V7a5 5 0 0 1 9.33-2.5"/></svg>
  - title: Automatic DB Backups
    details: Back up data to S3-compatible storage and restore it with one click if needed.
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a6da95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database-zap"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 15 21.84"/><path d="M21 5V8"/><path d="M21 12L18 17H22L19 22"/><path d="M3 12A9 3 0 0 0 14.59 14.87"/></svg>
  - title: Webhooks
    details: Integrate with CI/CD tools like GitHub Actions, GitLab CI, or Bitbucket Pipelines.
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-webhook"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"/><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"/><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"/></svg>
  - title: Powerful API
    details: Automate deployments, manage resources, and integrate with your existing tools easily.
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffb899" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cog"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m17 20.66-1-1.73"/><path d="M11 10.27 7 3.34"/><path d="m20.66 17-1.73-1"/><path d="m3.34 7 1.73 1"/><path d="M14 12h8"/><path d="M2 12h2"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m17 3.34-1 1.73"/><path d="m11 13.73-4 6.93"/></svg>
  - title: Real-Time Terminal
    details: Run server commands directly from your browser in real-time.
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#99a5ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-terminal"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>
  - title: Collaborative
    details: Share projects with your team, control roles, and manage permissions.
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff799" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-round"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg>
  - title: Pull Request Deployments
    details: Deploy commits and pull requests separately for quick reviews and faster teamwork.
    icon: <svg width="32" height="32" viewBox="0 0 16 16"><path fill="none" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round" d="M5.5 12.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m9 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-4.5-9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-6.5 7l3-5.5m3 0l3 5.5"/></svg>
  - title: Server Automations
    details: Handles server setup tasks automatically after connection, saving you time.
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#99ffd3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-ccw-dot"><path d="M3 2v6h6"/><path d="M21 12A9 9 0 0 0 6 5.3L3 8"/><path d="M21 22v-6h-6"/><path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"/><circle cx="12" cy="12" r="1"/></svg>
  - title: Monitoring
    details: Monitor deployments, servers, disk usage, and receive alerts for issues.
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff9999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>
---



```

---


### webstudio.md {#integrations-webstudio-md}

**File Path**: `integrations/webstudio.md`
**Size**: 6665 bytes
**SHA**: `9d2a4d5f231ce06a95e57ffe45ecd362f2af71a4`

```markdown
---
title: Deploy Webstudio Projects to Hetzner with Coolify
---

# Deploy Webstudio Projects using Coolify
Coolify makes deploying your Webstudio projects to Hetzner as simple as it is powerful. 

In this guide, you’ll learn how to set up your project, deploy it on a Hetzner server, and keep your infrastructure fully under your control, all with a few straightforward steps.

::: warning HEADS UP!
  In this guide, we are using servers from Hetzner. 
  
  However, if you're using a different hosting provider, you can still follow this guide with their servers as well.

  If you prefer watching a video instead of reading, you can check out the [tutorial video ↗](https://youtu.be/OnHLO2Plt2E?si=yDM77oK7Xd5UsRSP)
:::

## What You’ll Need
Before you start, make sure you have:

- A [GitHub account ↗](https://github.com?utm_source=coolify.io) to host your code.
- A [Hetzner account ↗](https://coolify.io/hetzner) to provision your server (or an account with any other hosting provider).
- The [Webstudio CLI ↗](https://docs.webstudio.is/university/self-hosting/cli?utm_source=coolify.io) installed locally to manage your project exports.


## 1. Create Your GitHub Repository
Start by [creating a new repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository) on GitHub where you’ll store your Webstudio project code. 

Once the repository is created, [clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) to your local machine to start developing locally.


## 2. Export Your Webstudio Project
Using the Webstudio [CLI ↗](https://docs.webstudio.is/university/self-hosting/cli), export your project and select the "**Docker**" option. 

This prepares your project for deployment via Coolify without the need for additional dependency installations.


## 3. Push Your Code to GitHub
With your project exported locally, [push your code](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository) to the GitHub repository you created. This makes your project accessible for deployment.


## 4. Set Up Your Hetzner Server
::: warning HEADS UP!
If you already have a server, you don't need to purchase a new one. 

**Webstudio recommends** that your server should have at least **1 CPU and 2GB of RAM** for smooth operation.
  
Skip to [Step 6 ↗](#_6-configure-your-project-on-coolify) if your server is already connected to Coolify.
:::
Follow these steps to prepare your Hetzner server:

1. **Create a New Server:** Log into [Hetzner Cloud Dashboard ↗](https://console.hetzner.cloud/) and create a new server.
  <ZoomableImage src="/docs/images/resources/integrations/1.webp" />

1. **Choose Your Region:** Select the region that best suits your needs.
  <ZoomableImage src="/docs/images/resources/integrations/2.webp" />

1. **Select Ubuntu:** Pick an Ubuntu image (make sure it’s a Docker-supported version, check the [Docker Ubuntu requirements](https://docs.docker.com/engine/install/ubuntu/#os-requirements)).
  <ZoomableImage src="/docs/images/resources/integrations/3.webp" />

1. **Configure Resources:** A shared CPU with at least 2 GB RAM is recommended.
  <ZoomableImage src="/docs/images/resources/integrations/4.webp" />

1. **Allocate an IPv4 Address:** Make sure your server has a dedicated IPv4 address.
  <ZoomableImage src="/docs/images/resources/integrations/5.webp" />

1. **Finalize Setup:** Click **Create and Buy Now** and wait until your server is provisioned.

2. **Save the IP:** Copy your server’s IPv4 address, it will be needed shortly.


## 5. Connect Coolify to Your Server

::: warning HEADS UP!
If your server is already connected to Coolify, skip to the [next step ↗](#_6-configure-your-project-on-coolify).
:::

1. **Add Private Key:** Login to your Coolify account (or create one if you’re new) and Add a new private key
  <ZoomableImage src="/docs/images/resources/integrations/6.webp" />
  <br />
  <ZoomableImage src="/docs/images/resources/integrations/7.webp" />

2. **Add a Server:** Navigate to the **Servers** tab and add a new server by entering your Hetzner server’s IPv4 address.
  <ZoomableImage src="/docs/images/resources/integrations/8.webp" />
  <br />
  <ZoomableImage src="/docs/images/resources/integrations/9.webp" />

3. **Validate Server:** Click **Validate Server & Install Docker Engine**. Coolify will automatically install all necessary components on your server.
  <ZoomableImage src="/docs/images/resources/integrations/10.webp" />

4. **Check Status:** Once finished, you should see a green **Proxy Running** status indicating everything is set up.
  <ZoomableImage src="/docs/images/resources/integrations/11.webp" />


## 6. Configure Your Project on Coolify
1. **Create a New Project:** Head to the **Projects** section and create a new project.

2. **Add a Resource:** Add a new resource, selecting your GitHub repository as the source.

3. **Connect Your Repository:** Use the GitHub app integration to grant access to your repository.
  <ZoomableImage src="/docs/images/resources/integrations/12.webp" />

4. **Select Build Pack:** Change the Build Pack to **Dockerfile** and click on continue button.
  <ZoomableImage src="/docs/images/resources/integrations/13.webp" />

5. **Configure Domains & Deploy:** Enter your domain in the domains field and Click **Deploy** and wait as Coolify builds and deploys your project. 
  <ZoomableImage src="/docs/images/resources/integrations/14.webp" />

6. **Successful Deployment:** When deployment is complete, you’ll see a “Deployment is Finished” message.

7. **Access Your Site:** Use the **links** button at the top of the project dashboard to visit your live site.
  <ZoomableImage src="/docs/images/resources/integrations/15.webp" />

8. **Optional – Third-Party Domains:** If your project loads images from external sources, add those domains as a comma-separated list under the environment variable `DOMAINS`. (make sure to restart the application after adding the variable)
  <ZoomableImage src="/docs/images/resources/integrations/16.webp" />


## 7. Update Your Webstudio Site
To publish updates and keep your site up to date, follow these steps:

1. **Publish Changes:** In the Webstudio builder, click **Publish** to generate the latest build data.
2. **Sync and Build:** Run the following commands in your terminal:
   ```bash
   webstudio sync
   webstudio build --template docker
   ```
3. **Push Updates:** Commit and push your changes to GitHub. Coolify will detect the update and automatically trigger a new deployment.

Now you’re all set!
```

---


### change-localhost-key.md {#knowledge-base-change-localhost-key-md}

**File Path**: `knowledge-base/change-localhost-key.md`
**Size**: 2069 bytes
**SHA**: `29c024ca04e723fbb944cc52b0149498824a0f0c`

```markdown
---
title: "Change Localhost Key"
description: "How to replace the localhost key for Coolify."
---

# Change Localhost Key
This guide will show you how to replace the stored localhost private key for Coolify.

::: warning Caution
  Take a backup of the stored private key in the database before starting this operation.
:::

## Key deletion from database
In the Postgres database in which the data for Coolify is stored, there is a private_keys table.
This table contains the private keys for all servers connected to the Coolify instance.
Be careful to not accidentally delete the wrong keys, as there usually is no way to undo.


1. Navigate to the private_keys table in the Postgres database for Coolify
   - Said table is located under the public schema in the database.

2. Select the row that is marked with:
   - Row index and ID of 0, as well as the name of "localhost's key"

3. Delete the selected row from the database
   - If completed successfully, proceed to the next section.


::: success Tip
  It helps to do this with a graphical interface for managing the database.
:::

## Installing new keys in the host machine

After the key has been deleted from the database, you need to add the new keys into the correct place in the Coolify data folders.

1. Stop your Coolify instance completely.

2. Find the /ssh/keys directory for your Coolify installation.
   - Usually located in /data/ssh/keys if you followed the quick install.

3. Write the public and private keys to the correct files
   - Your ED25519 public key shall be stored in id.root@host.docker.internal.pub
   - Your ED25519 private key shall be stored in id.root@host.docker.internal

4. Start your Coolify instance
   - Coolify will now proceed to seed your keys to the Postgres database.
   - Make sure the Database\Seeders\PopulateSshKeysDirectorySeeder does not error.

::: info Note
  If you recieve an output of "SSH key found for the Coolify host machine (localhost)", the operation completed successfully and unless you get any other output, your new key shall now be working.
:::

```

---


### origin-cert.md {#knowledge-base-cloudflare-origin-cert-md}

**File Path**: `knowledge-base/cloudflare/origin-cert.md`
**Size**: 11532 bytes
**SHA**: `cefdb5277713b8f23d1688789dce860561255e61`

```markdown
---
title: Cloudflare Origin Certificate
description: Coolify is a deployment tool designed to simplify the process of deploying and managing applications.
---

# Cloudflare Origin Certificate
<br />
<ZoomableImage src="/docs/images/knowledge-base/cf-origin-cert/header.webp" />

The Cloudflare Origin Certificate ensures secure communication between your server and Cloudflare when using Cloudflare’s Proxy, CDN, and security features. 

It encrypts the data exchanged between your server and Cloudflare, keeping it safe.

### Why Use Cloudflare Origin Certificate with Coolify?
1. No need for HTTP or DNS challenges to create certificates.
2. Keep port 80 closed — everything happens securely over TLS.
3. Longer certificate validity (15 years) — once set up, you don’t need to worry about renewing every few months.

### When to Avoid Using Cloudflare Origin Certificate
1. If you need a free certificate for subdomains with multiple levels (e.g., app.sub.domain.com).
2. The certificate is only trusted by Cloudflare, meaning if Cloudflare is down, nobody can access your apps and websites (via your domain).

---

::: info Example Data
  The following data is used as an example in this guide. Please replace it with your actual data when following the steps:
  
  - **IPv4 Address of Origin Server:** 203.0.113.1
  - **Domain Name:** shadowarcanist.com
  - **Username:** shadowarcanist
:::


## 1. Create the Origin Certificate
To create your Cloudflare Origin Certificate, follow these steps:

<ZoomableImage src="/docs/images/knowledge-base/cf-origin-cert/1.webp" />

1. In your Cloudflare dashboard, go to **SSL/TLS**.
2. Select **Origin Server**.
3. Click the **Create Certificate** button.

You’ll be asked to choose a private key type, hostnames, and certificate validity.

<ZoomableImage src="/docs/images/knowledge-base/cf-origin-cert/2.webp" />

1. Choose **RSA (2048)** for the key type.
2. Add the hostnames you want the certificate to cover.

::: warning HEADS UP!
  - **`shadowarcanist.com`** will cover only the main domain.
  - **`*.shadowarcanist.com`** will cover all subdomains.
  
  On Cloudflare’s free plan, wildcard certificates cover just one level of subdomains
  
  For example, it works for **`coolify.shadowarcanist.com`** but not **`www.coolify.shadowarcanist.com`**. 
  
  To cover multiple levels, you'll need to purchase the [Advanced Certificate Manager ↗](https://www.cloudflare.com/application-services/products/advanced-certificate-manager/)
:::

3. Set the certificate validity to **15 years**.

Your certificate will now be generated.

<ZoomableImage src="/docs/images/knowledge-base/cf-origin-cert/3.webp" />

1. Choose **PEM** as the key format.
2. Copy your **Certificate**.
3. Copy your **Private Key**.

Next, you'll add these to your server running Coolify and configure Coolify to use this certificate.


## 2. Add Certificate to Your Server
SSH into your server or use Coolify's terminal feature. For this guide, I’m using SSH:
```sh
ssh shadowarcanist@203.0.113.1
```

Once logged in, navigate to the Coolify proxy directory:
```sh
$ cd /data/coolify/proxy
```

Check if you have a **certs** folder:
```sh
$ ls
> acme.json  docker-compose.yml  dynamic
```

If there’s no **certs** folder, create it:
```sh
$ mkdir certs
```

Verify it was created:
```sh
$ ls
> acme.json  certs docker-compose.yml  dynamic
```

Now, navigate into the **certs** directory:
```sh
$ cd certs
```

Create two new files for the certificate and private key:
```sh
$ touch shadowarcanist.cert shadowarcanist.key
```

Verify the files were created:
```sh
$ ls
> shadowarcanist.cert shadowarcanist.key
```

Open the **shadowarcanist.cert** file and paste the certificate from the Cloudflare dashboard:
```sh
$ nano shadowarcanist.cert 
```
Save and exit after pasting the certificate.

Do the same for the **shadowarcanist.key** file and paste the private key:
```sh
$ nano shadowarcanist.key 
```
Save and exit.

Now the origin certificate is installed on your server.


## 3. Set Up DNS Records and TLS Encryption
To make the origin certificate work, configure your DNS records, enable TLS, and set up HTTP to HTTPS redirects in Cloudflare:

<ZoomableImage src="/docs/images/knowledge-base/cf-origin-cert/4.webp" />

1. In Cloudflare, go to **DNS**.
2. Select **Records**.
3. Add 2 A records:
4. Enter name as **`shadowarcanist.com`** and `*`
5. Use the **IP address** of your server as the content for both records.
6. Set the proxy status to **Proxied** for better security.

Next, set up TLS encryption:

<ZoomableImage src="/docs/images/knowledge-base/cf-origin-cert/5.webp" />

1. Go to **SSL/TLS** in Cloudflare.
2. Select **Overview**.
3. Click **Configure** button

Choose **Full (Strict)** as the encryption mode.

<ZoomableImage src="/docs/images/knowledge-base/cf-origin-cert/6.webp" />

Finally, enable HTTP to HTTPS redirects:

<ZoomableImage src="/docs/images/knowledge-base/cf-origin-cert/7.webp" />

1. In Cloudflare, go to **SSL/TLS** 
2. Select **Edge Certificates**.
3. Enable **Always Use HTTPS**.


## 4. Configure Coolify to Use the Origin Certificate
Now, in your Coolify dashboard:

<ZoomableImage src="/docs/images/knowledge-base/cf-origin-cert/8.webp" />

1. Go to the **Server** section in the sidebar.
2. Select **Proxy**.
3. Open the **Dynamic Configuration** page
4. Click **Add** button

You will now be prompted to enter the Dynamic Configuration.

<ZoomableImage src="/docs/images/knowledge-base/cf-origin-cert/9.webp" />

1. Choose a name for your configuration.
2. Enter the following details in the configuration field:
```sh
tls:
  certificates:
    -
      certFile: /traefik/certs/shadowarcanist.cert
      keyFile: /traefik/certs/shadowarcanist.key
```

Adding Multiple Certificates (click to view)
 
```sh
tls:
  certificates:
    -
      certFile: /traefik/certs/shadowarcanist.cert
      keyFile: /traefik/certs/shadowarcanist.key
    -
      certFile: /traefik/certs/name2.cert
      keyFile: /traefik/certs/name2.key
    -
      certFile: /traefik/certs/name3.cert
      keyFile: /traefik/certs/name3.key
```
 

3. Save the configuration

From now on, Coolify will use the origin certificate for requests matching the hostname.

::: danger HEADS UP!
  **All the steps below are optional. Coolify should already be using the origin certificate. Follow these steps only if you know what you're doing and want to simplify the configuration**
:::



## 5. Optional: Configure Traefik
This step is optional but recommended for cleaning up unnecessary settings while self-hosting. 

Since you’re using an Origin Certificate, you no longer need HTTP challenges or port 80 open.

<ZoomableImage src="/docs/images/knowledge-base/cf-origin-cert/10.webp" />

1. Go **Server** in the Coolify dashboard.
2. Select **Proxy**.
3. Open **Configuration**.
4. Replace the configuration with this:

```sh
# Define external networks
networks:
  coolify:
    external: true  # External network.

services:
  # Traefik reverse proxy
  traefik:
    container_name: coolify-proxy  # Container name.
    image: 'traefik:v3.1'  # Traefik image version.
    restart: unless-stopped  # Auto-restart policy.
    extra_hosts:
      - 'host.docker.internal:host-gateway'  # Host communication.
    networks:
      - coolify  # Network connection.
    ports:
      - '443:443'  # Expose HTTPS port.
    healthcheck:  # Health check configuration.
      test: 'wget -qO- http://localhost:80/ping || exit 1'  # Ping endpoint for health check.
      interval: 4s  # Health check interval.
      timeout: 2s  # Health check timeout.
      retries: 5  # Retry attempts.
    volumes:
      - '/var/run/docker.sock:/var/run/docker.sock:ro'  # Docker socket access.
      - '/data/coolify/proxy:/traefik'  # Traefik config volume.
    command:
      # Traefik configuration options
      - '--ping=true'  # Enable ping for health check.
      - '--ping.entrypoint=http'  # Use HTTP entrypoint for ping.
      - '--entrypoints.http.address=:80'  # HTTP entry point for health checks.
      - '--entrypoints.https.address=:443'  # HTTPS entry point.
      - '--entrypoints.http.http.encodequerysemicolons=true'  # Enable query semicolon encoding.
      - '--entryPoints.http.http2.maxConcurrentStreams=50'  # HTTP/2 max streams.
      - '--entrypoints.https.http.encodequerysemicolons=true'  # Enable HTTPS query encoding.
      - '--entryPoints.https.http2.maxConcurrentStreams=50'  # HTTPS/2 max streams.
      - '--entrypoints.https.http3'  # Enable HTTP/3.
      - '--providers.docker.exposedbydefault=false'  # Disable default exposure.
      - '--providers.file.directory=/traefik/dynamic/'  # Dynamic config directory.
      - '--certificatesresolvers.letsencrypt.acme.httpchallenge=false'  # Disable HTTP challenge for Let's Encrypt.
      - '--providers.file.watch=true'  # Enable config file watching.
      - '--providers.docker=true'  # Enable Docker provider.
    labels:
      - coolify.managed=true  # Managed by Coolify.
      - coolify.proxy=true  # Proxy service.
```

::: info Note
  The comments in this configuration explain each line. You can remove the comments when copying it into your configuration.
:::

Next, you'll need to remove a few labels from your Dockerfile-based deployments. Below is an **example** of how I set this up for my website.

<ZoomableImage src="/docs/images/knowledge-base/cf-origin-cert/11.webp" />

1. Go to **Projects** and select your project.
2. Open **Configuration**
3. Go to **General**
4. Check **Readonly labels** option
5. Replace the labels with the following:

```sh
# Enable Traefik for this configuration
traefik.enable=true

# Define the entry point for the router (HTTPS)
traefik.http.routers.shadowarcanist.entryPoints=https

# Set the routing rule for this router to match the domain "shadowarcanist.com" and any path starting with "/"
traefik.http.routers.shadowarcanist.rule=Host(`shadowarcanist.com`) && PathPrefix(`/`)

# Assign the service 'shadowarcanist' to this router
traefik.http.routers.shadowarcanist.service=shadowarcanist

# Enable TLS (HTTPS) for this router
traefik.http.routers.shadowarcanist.tls=true

# Specify the backend service and its port (port 80)
traefik.http.services.shadowarcanist.loadbalancer.server.port=80
```

Now you’re done! Your server is set up to use the Cloudflare Origin Certificate, and all traffic is secured via TLS.

---

::: warning Note
  Keep in mind that the above labels are provided as an example. These may or may not work for your specific use case, so use them as a reference.
:::


## Credits
The header image is designed using icons from [Flaticon ↗](https://www.flaticon.com/). 
Links to each icon can be found below:
- [Medal icon ↗](https://www.flaticon.com/free-icon/medal_14468558) by [Vlad Szirka ↗](https://www.flaticon.com/authors/vlad-szirka)
- [Award icon ↗](https://www.flaticon.com/free-icon/award_15218157) by [explanaicon ↗](https://www.flaticon.com/authors/explanaicon)
- [Worldwide icon ↗](https://www.flaticon.com/free-icon/worldwide_870169) by [Freepik ↗](https://www.flaticon.com/authors/freepik)
- [Lock icon ↗](https://www.flaticon.com/free-icon/lock_2089784) by [Those Icons ↗](https://www.flaticon.com/authors/those-icons)
- [Browser icon ↗](https://www.flaticon.com/free-icon/browser_331190) by [Alfredo Hernandez ↗](https://www.flaticon.com/authors/alfredo-hernandez)
- [Database icon ↗](https://www.flaticon.com/free-icon/database_8028666) by [Tanah Basah ↗](https://www.flaticon.com/authors/tanah-basah)
```

---


### all-resource.md {#knowledge-base-cloudflare-tunnels-all-resource-md}

**File Path**: `knowledge-base/cloudflare/tunnels/all-resource.md`
**Size**: 7874 bytes
**SHA**: `38d7da5cbd81c675c7d2b60eba4b5ec46d14c4d1`

```markdown
---
title: "Access All Resource via Cloudflare Tunnels"
---

# Access All Resource via Cloudflare Tunnels
Accessing All Resource deployed on Coolify using a Cloudflare Tunnel allows you to securely reach your app without exposing your server’s IP address or without having a Public IP address for the server. 


## Who this is for?
This setup is ideal for people who:

- Don't have a public IP for their server (could be a laptop, rasberry pi etc..).
- Are unable to port forward (e.g., using home internet or on a private network).
- Want to keep their server’s IP address private and avoid exposing it to the public internet.
- Have an resource already deployed on Coolify and need an external method to access it securely.


## Setup Requirements
To follow this guide, you'll need:

- A free [Cloudflare ↗](https://cloudflare.com) account.
- You need a domain that has it's **DNS managed by Cloudflare**.


## Before We Start
- We assume you have Coolify running on your server.
- If your app requires HTTPS for functionality like cookies or login, then you need to follow the [Full TLS HTTPS guide ↗](/knowledge-base/cloudflare/tunnels/full-tls) after following this guide. This is because in this guide, Cloudflare will manage HTTPS externally, while your app will run over HTTP within Coolify.


## How It Works?
A simple high-level overview diagram to give you a visual idea of how this works:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/all-resource/high-level-diagram.webp" />

---

### Quick Links to Important Sections:
- [Create a Cloudflare Tunnel](#_1-create-a-cloudflare-tunnel)
- [Setup Encryption mode on Cloudflare](#_2-setup-encryption-mode-on-cloudflare)
- [Setup Cloudflare Tunnel on Coolify](#_3-setup-cloudflare-tunnel-on-coolify)
- [Start Coolify Proxy](#_4-start-coolify-proxy)
- [Configure Your Resource to Use the Tunnel Domain](#_5-configure-your-resource-to-use-the-tunnel-domain)
- [How to use Mutiple Different Domains](#how-to-use-mutiple-different-domains)
- [Known issues and Solutions](#known-issues-and-solutions)

---

::: warning Example Data
  The following data is used as an example in this guide. Please replace it with your actual data when following the steps:
  
  - **Domain Name:** shadowarcanist.com
:::

---


## 1. Create a Cloudflare Tunnel
To create a Cloudflare Tunnel, first log in to your Cloudflare account and go to the [Zero Trust ↗](https://one.dash.cloudflare.com/) page.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/all-resource/1.webp" />

1. On the Zero Trust page, go to **Networks** in the sidebar.
2. Click on **Tunnels**
3. Click on **Add a tunnel** button

You will be prompted to choose a tunnel type. Click the **Select Cloudflared** button.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/all-resource/2.webp" />

You will be prompted to enter a tunnel name. Choose a name that you prefer.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/all-resource/3.webp" />

Next you will see the configuration page with multiple options to install cloudflared.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/all-resource/4.webp" />

Copy the install command, which contains the token for your tunnel (token starts with "eyJ"). Make sure to save only the token, removing the command part before it, and store it in a safe place, as we need it later.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/all-resource/5.webp" />

Scroll down until you see the **Next** button, then click it.

Then, you will be prompted to add a hostname.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/all-resource/6.webp" />

1. **Subdomain** - (Optional) You can make your all of your resource accessible on any subdomain/domain. For this guide, we are using a wildcard subdomain.
2. **Domain** - Choose the domain you want to use for the tunnel.
3. **Path** - Leave this field empty.
4. **Type** - Choose **HTTP** (this is very important).
5. **URL** - Enter **localhost:80** (this is very important).
6. After filling in the details, click the **Save Tunnel** button.


## 2. Setup Encryption mode on Cloudflare
To set up encryption on Cloudflare, follow these steps:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/all-resource/15.webp" />

1. Go to **SSL/TLS** in Cloudflare.
2. Select **Overview**.
3. Click **Configure** button

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/all-resource/16.webp" />

Choose **Full** as the encryption mode.


## 3. Setup Cloudflare Tunnel on Coolify
To set up the tunnel on Coolify, follow these steps:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/all-resource/7.webp" />

Go to your project on Coolify dashboard and click the **+ New** button to create a new resource.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/all-resource/8.webp" />

You will see many options to deploy a new app. Search for Cloudflared and click on it.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/all-resource/9.webp" />

Go to the **Environment Variables** page, enter your tunnel token, and deploy the Cloudflared app. This token was copied in [Step 1](#_1-create-a-cloudflare-tunnel)


## 4. Start Coolify Proxy
To start the Coolify proxy, follow these steps:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/all-resource/10.webp" />

1. In the Coolify dashboard, go to the **Servers** page from the sidebar.  
2. Select the server where coolify is running, then Click on the **Proxy** tab.  
3. Open the **General** tab.  
4. Click the **Start Proxy** button.  

::: success Tip  
  The Coolify proxy is used to route traffic to apps running on your server. This eliminates the need to create new hostnames on the Cloudflare tunnel every time you deploy a new app.  
:::

## 5. Configure Your Resource to Use the Tunnel Domain
Enter the domain you want to use for your resource/app and deploy your resource.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/all-resource/11.webp" />

::: warning HEADS UP!  
  You should enter the domain as **HTTP** because Cloudflare handles **HTTPS** and TLS terminations. If you use **HTTPS** for your resource, you may encounter a **TOO_MANY_REDIRECTS** error.  

  If your app requires **HTTPS** for features like cookies or login, follow the [Full TLS HTTPS Guide ↗](/knowledge-base/cloudflare/tunnels/full-tls) after completing this guide.  
:::

**Congratulations**! You've successfully set up a resource that can be accessed by anyone on the internet your domain.


## How to use Mutiple Different Domains?
You don't need to create new tunnels for each domain, just create a new hostname with the new domain and point it to the `localhost:80`.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/all-resource/12.webp" />


## Known issues and Solutions
When you create a new public hostname in [Step 1](#_1-create-a-cloudflare-tunnel), Cloudflare will create a DNS record for the hostname. 

However, if a DNS record for the hostname already exists, Cloudflare won’t create a new one. 

In this case, your app won’t work. To fix this issue, follow the steps below:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/all-resource/13.webp" />

First, copy your tunnel ID from the Tunnels page on the Cloudflare dashboard.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/all-resource/14.webp" />

Create a new DNS record with the following details:

1. In the Cloudflare dashboard, go to **DNS**.
2. Select **Records**.
3. Add a **CNAME** record.
4. Enter the name as `*` or the name of your subdomain (this should match the hostname you have for your app on the tunnel).
5. For the **Target**, enter the tunnel ID followed by `.cfargotunnel.com`
6. Set the proxy status to **Proxied**.

Now, visit the domain of your application, and it should be accessible there.
```

---


### full-tls.md {#knowledge-base-cloudflare-tunnels-full-tls-md}

**File Path**: `knowledge-base/cloudflare/tunnels/full-tls.md`
**Size**: 8244 bytes
**SHA**: `3d0a5cb9aef29266d3f6732bd51c358cf1c472da`

```markdown
---
title: "Full HTTPS/TLS Setup for All Resources"
---

# Full HTTPS/TLS Setup for All Resources
When tunneling resources with Coolify through Cloudflare, Cloudflare typically handles HTTPS and TLS termination, while Coolify runs your resources over HTTP. 

This setup works for most users, but some may face issues with URL mismatches, especially for apps that require HTTPS on Coolify to issue JWT tokens or handle callback URLs. 

This guide solves that issue by configuring your resources to run fully on HTTPS, bypassing Cloudflare's HTTPS handling and ensuring your app functions correctly with secure connections.


## Who this is for?
This guide is ideal for users who:

- Have followed our [Tunnel All Resources Using Cloudflare Tunnel](/knowledge-base/cloudflare/tunnels/all-resource) or [Tunnel Specific Resources Using Cloudflare Tunnel](/knowledge-base/cloudflare/tunnels/single-resource) guide.
- Need their resources deployed with Coolify to run on HTTPS for applications requiring HTTPS for JWT issuance, callback functions, or similar features.


## Setup Requirements
To follow this guide, you'll need:

- A working Cloudflare tunnel setup as described in the previous guides.
- A domain configured in Cloudflare to handle HTTP traffic and redirect to HTTPS.


## Before We Start
- If your Coolify instance is on the same tunnel as the domain you want to configure, make sure you can access the Coolify Dashboard using the server IP and port (e.g., **203.0.113.1:8000**) before starting these steps. 
- The default port is **8000**, but if you’ve changed or disabled it, ensure you can access the Coolify Dashboard through the new port or that port **8000** is re-enabled on the server.


---

### Quick Links to Important Sections:
- [Create a Cloudflare Origin Certificate](#_1-create-a-cloudflare-origin-certificate)
- [Add Origin Certificate to Your Server](#_2-add-origin-certificate-to-your-server)
- [Configure Coolify to Use the Origin Certificate](#_3-configure-coolify-to-use-the-origin-certificate)
- [Setup Encryption mode on Cloudflare](#_4-setup-encryption-mode-on-cloudflare)
- [Configure Tunnel to Use HTTPS](#_5-configure-tunnel-to-use-https)
- [Configure Cloudflare to Always Use HTTPS](#_6-configure-cloudflare-to-always-use-https)
- [Update URLs from HTTP to HTTPS](#_7-update-urls-from-http-to-https)

---

::: warning Example Data
  The following data is used as an example in this guide. Please replace it with your actual data when following the steps:
  
  - **IPv4 Address of Origin Server:** 203.0.113.1
  - **Domain Name:** shadowarcanist.com
  - **Username:** shadowarcanist
:::


## 1. Create a Cloudflare Origin Certificate
To create your Cloudflare Origin Certificate, follow these steps:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/full-tls/1.webp" />

1. In your Cloudflare dashboard, go to **SSL/TLS**.
2. Select **Origin Server**.
3. Click the **Create Certificate** button.

You’ll be asked to choose a private key type, hostnames, and certificate validity.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/full-tls/2.webp" />

1. Choose **RSA (2048)** for the key type.
2. Add the hostnames you want the certificate to cover.

::: warning HEADS UP!
  - **`shadowarcanist.com`** will cover only the main domain.
  - **`*.shadowarcanist.com`** will cover all subdomains.
  
  On Cloudflare’s free plan, wildcard certificates cover just one level of subdomains
  
  For example, it works for **`coolify.shadowarcanist.com`** but not **`www.coolify.shadowarcanist.com`**. 
  
  To cover multiple levels, you'll need to purchase the [Advanced Certificate Manager ↗](https://www.cloudflare.com/application-services/products/advanced-certificate-manager/)
:::

3. Set the certificate validity to **15 years**.

Your certificate will now be generated.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/full-tls/3.webp" />

1. Choose **PEM** as the key format.
2. Copy your **Certificate**.
3. Copy your **Private Key**.

Next, you'll add these to your server running Coolify and configure Coolify to use this certificate.


## 2. Add Origin Certificate to Your Server
SSH into your server or use Coolify's terminal feature. For this guide, I’m using SSH:
```sh
ssh shadowarcanist@203.0.113.1
```

Once logged in, navigate to the Coolify proxy directory:
```sh
cd /data/coolify/proxy
```

Check if you have a **certs** folder:
```sh
ls
> acme.json  docker-compose.yml  dynamic
```

If there’s no **certs** folder, create it:
```sh
mkdir certs
```

Verify it was created:
```sh
ls
> acme.json  certs docker-compose.yml  dynamic
```

Now, navigate into the **certs** directory:
```sh
cd certs
```

Create two new files for the certificate and private key:
```sh
touch shadowarcanist.cert shadowarcanist.key
```

Verify the files were created:
```sh
ls
> shadowarcanist.cert shadowarcanist.key
```

Open the **shadowarcanist.cert** file and paste the certificate from the Cloudflare dashboard:
```sh
nano shadowarcanist.cert 
```
Save and exit after pasting the certificate.

Do the same for the **shadowarcanist.key** file and paste the private key:
```sh
nano shadowarcanist.key 
```
Save and exit.

Now the origin certificate is installed on your server.

## 3. Configure Coolify to Use the Origin Certificate
Now, in your Coolify dashboard:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/full-tls/12.webp" />

1. Go to the **Server** section in the sidebar.
2. Select **Proxy**.
3. Open the **Dynamic Configuration** page
4. Click **Add** button

You will now be prompted to enter the Dynamic Configuration.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/full-tls/13.webp" />

1. Choose a name for your configuration.
2. Enter the following details in the configuration field:
```yaml
tls:
  certificates:
    -
      certFile: /traefik/certs/shadowarcanist.cert
      keyFile: /traefik/certs/shadowarcanist.key
```

::: details Adding Multiple Certificates (click to view)
 
```yaml
tls:
  certificates:
    -
      certFile: /traefik/certs/shadowarcanist.cert
      keyFile: /traefik/certs/shadowarcanist.key
    -
      certFile: /traefik/certs/name2.cert
      keyFile: /traefik/certs/name2.key
    -
      certFile: /traefik/certs/name3.cert
      keyFile: /traefik/certs/name3.key
```
:::

3. Save the configuration

From now on, Coolify will use the origin certificate for requests matching the hostname.


## 4. Setup Encryption mode on Cloudflare
To set up encryption on Cloudflare, follow these steps:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/full-tls/4.webp" />

1. Go to **SSL/TLS** in Cloudflare.
2. Select **Overview**.
3. Click **Configure** button

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/full-tls/5.webp" />

Choose **Full (Strict)** as the encryption mode.


## 5. Configure Tunnel to Use HTTPS
To configure the tunnel for HTTPS, follow these steps:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/full-tls/6.webp" />

1. Click the three dots icon to open the settings menu.
2. Select **Edit** to allow hostname modifications.

Next, update the hostnames as follows:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/full-tls/7.webp" />

1. Change the type from **HTTP** to **HTTPS**.
2. Change the port from **80** to **443**.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/full-tls/8.webp" />

3. Click on **Additional Application Settings**.
4. Select **TLS**.
5. Enter your root domain in the **Origin Server Name** field.
6. Scroll down and click the **Save Hostname** button.


## 6. Configure Cloudflare to Always Use HTTPS

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/full-tls/9.webp" />

1. In the Cloudflare dashboard, go to **SSL/TLS**.
2. Select **Edge Certificates**.
3. Enable **Always Use HTTPS**.


## 7. Update URLs from HTTP to HTTPS
Now, update all URLs from **HTTP** to **HTTPS** in Coolify, including resources and the instance domain on the settings page.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/full-tls/10.webp" />

<br />

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/full-tls/11.webp" />

**Congratulations!** All your resources are now running on HTTPS at all times.
```

---


### overview.md {#knowledge-base-cloudflare-tunnels-overview-md}

**File Path**: `knowledge-base/cloudflare/tunnels/overview.md`
**Size**: 2402 bytes
**SHA**: `ca867775b9198a083cfb76f5ab585597eecf42f6`

```markdown
---
title: "Cloudflare Tunnels"
---

# Cloudflare Tunnels
[Cloudflare Tunnels ↗](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/) allow you to securely expose your local server or applications to the internet without opening ports on your router. 

This makes them a great option for hosting projects on devices like old laptops or Raspberry Pis.  


## Why Use Cloudflare Tunnels?
- No need to open or forward ports on your device to the public internet.  
- Simplifies routing and DNS configuration.  
- Supports exposing a single application or multiple services.  
- Hides your server's IP address by routing traffic through a Cloudflare Tunnel, showing only your domain.  
- Works even if you have a dynamic IP (or) no public IP at all.  
- Eliminates the hassle of managing and setting up SSL certificates.  


## When Not to Use Cloudflare Tunnels?
- If you prefer direct access to your server without a proxy layer.  
- If you're concerned about routing traffic through Cloudflare's servers.  
- If you rely on additional firewall tools, as Cloudflare Tunnels bypass all firewall rules.  
- If you need SSL certificates trusted by entities other than Cloudflare.  


## Ways to Use Cloudflare Tunnels with Coolify
You can set up Cloudflare Tunnels with Coolify in several ways, depending on your needs. Below are the available options, each linked to a detailed guide for easy setup:

1. [All Resources](/knowledge-base/cloudflare/tunnels/all-resource) -> Use a tunnel for all resources deployed through Coolify. This is the **easiest** and **most recommended** way for beginners.

2. [Single Resource](/knowledge-base/cloudflare/tunnels/single-resource) -> Use a tunnel for a single resource deployed through Coolify.

3. [Server SSH Access](/knowledge-base/cloudflare/tunnels/server-ssh) -> Securely connect your server to Coolify using a domain through Cloudflare Tunnel.

4. [Full HTTPS/TLS](/knowledge-base/cloudflare/tunnels/full-tls) -> Setup always-on **HTTPS** for all domains and subdomains. Normally, Coolify uses **HTTP** while Cloudflare manages **HTTPS**. If certain apps require **HTTPS** directly on Coolify.


::: success Tip:
  It’s highly recommended to go with the first option [All Resources](/knowledge-base/cloudflare/tunnels/all-resource) if you're new to Coolify and Cloudflare Tunnels, as it’s much easier to set up and manage.
:::
```

---


### server-ssh.md {#knowledge-base-cloudflare-tunnels-server-ssh-md}

**File Path**: `knowledge-base/cloudflare/tunnels/server-ssh.md`
**Size**: 15199 bytes
**SHA**: `e0437f4186934570c0e0bbe1bb6569be2c7be562`

```markdown
---
title: "Server SSH Access via Cloudflare Tunnels"
---

# Server SSH Access via Cloudflare Tunnels
Accessing your server using SSH over a Cloudflare Tunnel is a secure and easy way to connect to a remote server while keeping its IP address hidden. 

This guide explains how to set it up using Coolify's automated cloudflare tunnel installation.


## Who this is for?
This setup is ideal for people who:

- Want to keep their server's IP address private.
- Want to close all SSH ports on their server.
- Don’t want to rely on static public IPs for accessing their remote server.
- Don't have a static public IP for the server (only applies if you're doing the [manual setup](#manual-setup)).


## Before We Start
- We assume you already have a server running Coolify and you are looking to set up a tunnel to connect a different server to Coolify.
- If you are trying to set up a tunnel on the server where Coolify is running and you don’t have any other servers to connect, you don’t need a SSH tunnel. Coolify already has full root access to the server it’s running on, so there’s no need for an SSH tunnel in this case.


## How It Works?
A simple high-level overview diagram to give you a visual idea of how this works:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/high-level-diagram.webp" />

---

# Setup Methods
There are two ways to set this up: automated and manual. 

The main difference is that in the manual setup, you install cloudflared yourself, while in the automated setup, Coolify does it for you. 

Choose one of the links below for the setup guide:

- [Automated](#automated-setup)
- [Manual Setup](#manual-setup)


## Automated Setup
To use Coolify's automated setup for a Cloudflare Tunnel:

- Your remote server must have a **public IP address** and an **active SSH port** during the initial setup for Coolify to configure the tunnel. After setup, you can close all ports on the server.
- If your server doesn’t have a public IP address, then this automated setup is **not for you**. Please follow the [Manual setup guide ↗](#manual-setup) instead.
- You need a domain that has it's **DNS managed by Cloudflare**.


### Quick Links to Important Sections:
- [Create a Private SSH Key](#_1-create-a-private-ssh-key)
- [Add Public Key to Your Server](#_2-add-public-key-to-your-server)
- [Add your Server to Coolify](#_3-add-your-server-to-coolify)
- [Validate your Server on Coolify](#_4-validate-your-server-on-coolify)
- [Create a Cloudflare Tunnel](#_5-create-a-cloudflare-tunnel)
- [Setup Cloudflare Tunnel on Coolify](#_6-setup-cloudflare-tunnel-on-coolify)

---

::: warning Example Data
  The following data is used as an example in this guide. Please replace it with your actual data when following the steps:
  
  - **IPv4 Address of Remote Server:** 203.0.113.1
  - **Domain Name:** shadowarcanist.com
  - **Username:** root
  - **SSH Port:** 22
:::

---

## 1. Create a Private SSH Key
To create a Private SSH Key, follow these steps:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/automated-1.webp" />

1. In your Coolify Dashboard, go to **Keys & Tokens**
2. Click the **+ Add** button

You will be prompted to choose a key type, along with providing a name and description for the key.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/automated-2.webp" />

1. Click on Generate new **ED25519** or **RSA** button to generate a new SSH key. 
2. Copy the public key and save it somewhere safe (you'll need it in the next step). Then, click Continue.


## 2. Add Public Key to Your Server
SSH into the server you want to connect to Coolify:
```sh
  ssh root@203.0.113.1
```

Once logged in, add your public key to the authorized keys file:
```sh
  $ echo "<PASTE YOUR PUBLIC KEY INSIDE OF THESE QUOTES>" >> ~/.ssh/authorized_keys
```


## 3. Add your Server to Coolify
To add your server to Coolify, follow these steps:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/automated-3.webp" />

1. In your Coolify Dashboard, go to **Servers**
2. Click the **+ Add** button

You will be prompted to enter details about your server. Make sure the information you provide is accurate, as Coolify will use these details to access your server.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/automated-4.webp" />

1. **Name** - Choose a name to easily identify your server in the dashboard.
2. **Description** - (Optional) Provide a description for your server.
3. **IP Address/Domain** - Enter the public IP address of your server.
4. **Port** - Enter the port number your server uses for SSH connections.
5. **User** - Enter the username Coolify will use (it should have root privileges on the server).
6. **Private key** - Select the private key you created in [Step 1](#_1-create-a-private-ssh-key)
7. After filling in the details, click the **Continue** button.


## 4. Validate your Server on Coolify
To validate your server, simply click the **Validate Server & Install Docker Engine** button.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/automated-5.webp" />

During this process, Coolify will log in to your server and set up everything needed for Coolify to use the server.

Once the validation is completed, your server page will look like this:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/automated-6.webp" />


## 5. Create a Cloudflare Tunnel
To create a Cloudflare Tunnel, first log in to your Cloudflare account and go to the [Zero Trust ↗](https://one.dash.cloudflare.com/) page.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/automated-7.webp" />

1. On the Zero Trust page, go to **Networks** in the sidebar.
2. Click on **Tunnels**
3. Click on **Add a tunnel** button

You will be prompted to choose a tunnel type. Click the **Select Cloudflared** button.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/automated-8.webp" />

You will be prompted to enter a tunnel name. Choose a name that you prefer.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/automated-9.webp" />

Next you will see the configuration page with multiple options to install cloudflared.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/automated-10.webp" />

Copy the install command, which contains the token for your tunnel (token starts with "eyJ"). Make sure to save only the token, removing the command part before it, and store it in a safe place, as we need it later.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/automated-11.webp" />

Scroll down until you see the **Next** button, then click it.

Then, you will be prompted to add a hostname. This is where we expose our SSH tunnel.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/automated-12.webp" />

1. **Subdomain** - (Optional) You can make SSH accessible on any subdomain. For this guide, we are using the subdomain **ssh**.
2. **Domain** - Choose the domain you want to use for the tunnel.
3. **Path** - Leave this field empty.
4. **Type** - Choose **SSH** (this is very important).
5. **URL** - Enter **localhost:22** If your SSH port is different from 22, use that port instead.
6. After filling in the details, click the **Save Tunnel** button.


## 6. Setup Cloudflare Tunnel on Coolify
To set up the tunnel on Coolify, follow these steps:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/automated-13.webp" />

Go to the **Servers** page and select the server you want to connect. This is the server you added in [Step 3](#_3-add-your-server-to-coolify)

1. Click on **Cloudflare Tunnels**
2. Click on **Automated** button

You will be prompted to enter the Tunnel Token and SSH domain.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/automated-14.webp" />

1. Enter your **Tunnel Token** (this is the token we copied in [Step 5](#_5-create-a-cloudflare-tunnel))
2. Enter your **SSH Domain** (this is the subdomain we set up in [Step 5](#_5-create-a-cloudflare-tunnel))
3. Click on **Continue** button.

Coolify will now install **cloudflared** on the server and set everything up automatically. This process will take about 30 seconds to 1 minute.

Once completed, you will see that the Cloudflare tunnel is enabled on the Cloudflare Tunnels page, like this:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/automated-15.webp" />

At this point, your server's IP address will be automatically updated to the SSH domain by Coolify.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/automated-16.webp" />

You can now block your SSH port on the server if you wish.

**Congratulations**! You've successfully set up a server that can be accessed by Coolify over SSH using Cloudflare tunnels via your domain.

::: danger HEADS UP!
  **The steps above show how to do the automated setup. Below are the steps for the manual setup.**
:::


## Manual Setup
To manually setup Cloudflare Tunnel:

- You need access to your remote server to install cloudflared (a public IP for your server is not required).
- You need a domain that has it's **DNS managed by Cloudflare**.


### Quick Links to Important Sections:
- [Create a Private SSH Key](#_1-create-a-private-ssh-key-1)
- [Add Public Key to Your Server](#_2-add-public-key-to-your-server-1)
- [Create a Cloudflare Tunnel](#_3-create-a-cloudflare-tunnel)
- [Add your Server to Coolify](#_4-add-your-server-to-coolify)
- [Validate your Server on Coolify](#_5-validate-your-server-on-coolify)
- [Setup Cloudflare Tunnel on Coolify](#_6-setup-cloudflare-tunnel-on-coolify-1)

---

::: warning Example Data
  The following data is used as an example in this guide. Please replace it with your actual data when following the steps:
  
  - **IPv4 Address of Remote Server:** 203.0.113.1
  - **Domain Name:** shadowarcanist.com
  - **Username:** root
  - **SSH Port:** 22
:::

---

## 1. Create a Private SSH Key
To create a Private SSH Key, follow these steps:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/manual-1.webp" />

1. In your Coolify Dashboard, go to **Keys & Tokens**
2. Click the **+ Add** button

You will be prompted to choose a key type, along with providing a name and description for the key.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/manual-2.webp" />

1. Click on Generate new **ED25519** or **RSA** button to generate a new SSH key. 
2. Copy the public key and save it somewhere safe (you'll need it in the next step). Then, click Continue.


## 2. Add Public Key to Your Server
SSH into the server you want to connect to Coolify:
```sh
  ssh root@203.0.113.1
```
This server can be on your local network without a public IP address. All you need is SSH access to the terminal to run commands.

Once logged in, add your public key to the authorized keys file:
```sh
  $ echo "<PASTE YOUR PUBLIC KEY INSIDE OF THESE QUOTES>" >> ~/.ssh/authorized_keys
```


## 3. Create a Cloudflare Tunnel
To create a Cloudflare Tunnel, first log in to your Cloudflare account and go to the [Zero Trust ↗](https://one.dash.cloudflare.com/) page.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/manual-3.webp" />

1. On the Zero Trust page, go to **Networks** in the sidebar.
2. Click on **Tunnels**
3. Click on **Add a tunnel** button

You will be prompted to choose a tunnel type. Click the **Select Cloudflared** button.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/manual-4.webp" />

You will be prompted to enter a tunnel name. Choose a name that you prefer.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/manual-5.webp" />

Next you will see the configuration page with multiple options to install cloudflared.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/manual-6.webp" />

Select your preferred option and follow the installation instructions provided by Cloudflare on the page.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/manual-7.webp" />

Scroll down a bit and wait for your server (connector) to appear in the list. Once it appears, click the **Next** button.

Then, you will be prompted to add a hostname. This is where we expose our SSH tunnel.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/manual-8.webp" />

1. **Subdomain** - (Optional) You can make SSH accessible on any subdomain. For this guide, we are using the subdomain **ssh**.
2. **Domain** - Choose the domain you want to use for the tunnel.
3. **Path** - Leave this field empty.
4. **Type** - Choose **SSH** (this is very important).
5. **URL** - Enter **localhost:22** If your SSH port is different from 22, use that port instead.
6. After filling in the details, click the **Save Tunnel** button.


## 4. Add your Server to Coolify
To add your server to Coolify, follow these steps:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/manual-9.webp" />

1. In your Coolify Dashboard, go to **Servers**
2. Click the **+ Add** button

You will be prompted to enter details about your server. Make sure the information you provide is accurate, as Coolify will use these details to access your server.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/manual-10.webp" />

1. **Name** - Choose a name to easily identify your server in the dashboard.
2. **Description** - (Optional) Provide a description for your server.
3. **IP Address/Domain** - Enter the SSH domain of your server (which we set up in the previous step).
4. **Port** - Enter the port number your server uses for SSH connections.
5. **User** - Enter the username Coolify will use (it should have root privileges on the server).
6. **Private key** - Select the private key you created in [Step 1](#_1-create-a-private-ssh-key-1)
7. After filling in the details, click the **Continue** button.


## 5. Validate your Server on Coolify
To validate your server, simply click the **Validate Server & Install Docker Engine** button.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/manual-11.webp" />

During this process, Coolify will log in to your server and set up everything needed for Coolify to use the server.

Once the validation is completed, your server page will look like this:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/manual-12.webp" />


## 6. Setup Cloudflare Tunnel on Coolify
To set up the tunnel on Coolify, follow these steps:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/manual-13.webp" />

Go to the **Servers** page and select the server (which we added in the previous step) you want to connect.

1. Click on **Cloudflare Tunnels**
2. Click on **Manual** button

Once completed, you will see that the Cloudflare tunnel is enabled on the Cloudflare Tunnels page, like this:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/server-ssh/manual-14.webp" />

**Congratulations**! You've successfully set up a server that can be accessed by Coolify over SSH using Cloudflare tunnels via your domain.
```

---


### single-resource.md {#knowledge-base-cloudflare-tunnels-single-resource-md}

**File Path**: `knowledge-base/cloudflare/tunnels/single-resource.md`
**Size**: 10057 bytes
**SHA**: `f9e611e8a6c81a5b4477b7ed4cbf368a025e15b4`

```markdown
---
title: "Access Single Resource via Cloudflare Tunnels"
---

# Access Single Resource via Cloudflare Tunnels

Accessing an Resource deployed on Coolify using a Cloudflare Tunnel allows you to securely reach your app without exposing your server’s IP address or without having a Public IP address for the server.

## Who this is for?

This setup is ideal for people who:

- Don't have a public IP for their server (could be a laptop, rasberry pi etc..).
- Are unable to port forward (e.g., using home internet or on a private network).
- Want to keep their server’s IP address private and avoid exposing it to the public internet.
- Have an app already deployed on Coolify and need an external method to access it securely.

## Setup Requirements

To follow this guide, you'll need:

- A free [Cloudflare ↗](https://cloudflare.com) account.
- You need a domain that has it's **DNS managed by Cloudflare**.
- Your Resource has to be deployed and managed with Coolify.

## Before We Start

- We assume you have Coolify running and an app already deployed.
- If your app requires HTTPS for functionality like cookies or login, then you need to follow the [Full TLS HTTPS guide ↗](/knowledge-base/cloudflare/tunnels/full-tls) after following this guide. This is because in this guide, Cloudflare will manage HTTPS externally, while your app will run over HTTP within Coolify.

## How It Works?

A simple high-level overview diagram to give you a visual idea of how this works:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/high-level-diagram.webp" />

---

### Quick Links to Important Sections:

- [Setup your app for tunneling](#_1-setup-your-app-for-tunneling)
- [Create a Cloudflare Tunnel](#_2-create-a-cloudflare-tunnel)
- [Setup Cloudflare Tunnel on Coolify](#_3-setup-cloudflare-tunnel-on-coolify)
- [Expose Mutiple Resource on Different Domains](#expose-mutiple-resource-on-different-domains)
- [Known issues and Solutions](#known-issues-and-solutions)

---

::: warning Example Data
The following data is used as an example in this guide. Please replace it with your actual data when following the steps:

- **Domain Name:** shadowarcanist.com
- **Ports Exposes:** 80
- **Ports Mapping:** 4477:80
  :::

---

## 1. Setup your app for tunneling

To setup your app for tunneling, follow these steps:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/1.webp" />

1. Remove all domains from the **Domains** field.
2. Set the correct port in **Ports Exposed** (the port your app uses).
3. Set the correct ports in **Port Mappings** (left is the host port, right is the app port).
4. Deploy your app by clicking the **Deploy** button.

## 2. Create a Cloudflare Tunnel

To create a Cloudflare Tunnel, first log in to your Cloudflare account and go to the [Zero Trust ↗](https://one.dash.cloudflare.com/) page.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/2.webp" />

1. On the Zero Trust page, go to **Networks** in the sidebar.
2. Click on **Tunnels**
3. Click on **Add a tunnel** button

You will be prompted to choose a tunnel type. Click the **Select Cloudflared** button.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/3.webp" />

You will be prompted to enter a tunnel name. Choose a name that you prefer.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/4.webp" />

Next you will see the configuration page with multiple options to install cloudflared.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/5.webp" />

Copy the install command, which contains the token for your tunnel (token starts with "eyJ"). Make sure to save only the token, removing the command part before it, and store it in a safe place, as we need it later.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/6.webp" />

Scroll down until you see the **Next** button, then click it.

Then, you will be prompted to add a hostname.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/7.webp" />

1. **Subdomain** - (Optional) You can make your app/resource accessible on any subdomain/domain. For this guide, we are not using a subdomain.
2. **Domain** - Choose the domain you want to use for the tunnel.
3. **Path** - Leave this field empty.
4. **Type** - Choose **HTTP** (this is very important).
5. **URL** - Enter **localhost:4477** The port 4477 is the one we mapped to the host system in [Step 1](#_1-setup-your-app-for-tunneling). Replace 4477 with your own port.
6. After filling in the details, click the **Save Tunnel** button.

## 3. Setup Cloudflare Tunnel on Coolify

To set up the tunnel on Coolify, follow these steps:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/8.webp" />

Go to your project on Coolify dashboard and click the **+ New** button to create a new resource.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/9.webp" />

You will see many options to deploy a new app. Search for Cloudflared and click on it.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/10.webp" />

Go to the **Environment Variables** page, enter your tunnel token, and deploy the Cloudflared app. This token was copied in [Step 2](#_2-create-a-cloudflare-tunnel)

**Congratulations**! You've successfully set up a resource that can be accessed by anyone on the internet your domain.

:::danger HEADS UP!
**The steps above show how to tunnel a single resource. Below are the steps for tunneling multiple resources**
:::

## Tunnel Multiple Resources

The easiest way to tunnel multiple resources is by following our [Tunnel All Resources](/knowledge-base/cloudflare/tunnels/all-resource) guide, which uses Coolify's built-in proxy. However, if you prefer not to use the proxy, there are two alternative methods:

- [Tunnel Multiple Single Resources](#tunnel-multiple-single-resources)
- [Tunnel Coolify](#tunnel-coolify)

Tunneling multiple single resources is straightforward, but tunneling Coolify itself requires additional manual setup.

## Tunnel Multiple Single Resources

If you want to expose different apps individually, you can follow our [Tunnel All Resources](/knowledge-base/cloudflare/tunnels/all-resource), or take an alternate approach:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/11.webp" />

1. Follow [Step 1](#_1-setup-your-app-for-tunneling) for your new resource.
2. Create a new public hostname on Cloudflare Tunnel as described in [Step 2](#_2-create-a-cloudflare-tunnel).

There’s no need to create a separate tunnel for each resources, simply create a new hostname and point it to the port your app is listening on.

## Tunnel Coolify

Tunneling Coolify itself to make it accessible over a domain requires a bit more manual configuration. Here's how you can set it up:

### 1. Create Public Hostnames in Cloudflare Tunnel

Follow [Step 2](#_2-create-a-cloudflare-tunnel) from the main guide to create public hostnames for each service Coolify exposes. Use the following mapping:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/14.webp" />

- **Hostnames**:

  1. `app.shadowarcanist.com/terminal/ws` → `localhost:6002` (WebSocket terminal)
  2. `realtime.shadowarcanist.com` → `localhost:6001` (Realtime server)
  3. `app.shadowarcanist.com` → `localhost:8000` (Coolify dashboard)

- **Type**: HTTP (Ensure you select HTTP for each hostname.)

::: warning HEADS UP!
The order of the hostnames matters! Be sure to match it exactly as shown above.
:::

---

### 2. Update Coolify’s `.env` File

After creating public hostnames, update the `.env` file in your Coolify instance located at `/data/coolify/source` to enable connections to the realtime server. Add the following lines:

```bash
APP_ID=<random string>
APP_KEY=<random string>
APP_NAME=Coolify
DB_PASSWORD=<random string>
PUSHER_APP_ID=<random string>
PUSHER_APP_KEY=<random string>
PUSHER_APP_SECRET=<random string>
REDIS_PASSWORD=<random string>

###########
# Add these lines
PUSHER_HOST=realtime.shadowarcanist.com
PUSHER_PORT=443
###########
```

This ensures that Coolify uses the Cloudflare Tunnel for its realtime server.

### 3. Restart Coolify

Run the following command to restart Coolify and apply the changes:

```bash
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

### 4. Verify the Setup

1. Access your Coolify dashboard at `https://app.shadowarcanist.com`.
2. Test the realtime functionality by visiting `https://app.shadowarcanist.com/realtime` in another browser tab. You should see a notification about a test event.
3. If you know what are you doing, you can check the network tab as well. Search for a websocket connection.

::: warning HEADS UP!
If you use a firewall, ensure that the required ports (e.g., `8000`, `6001`, `6002`) are open for internal communication but not exposed to the public internet.  
:::

## Known issues and Solutions

When you create a new public hostname in [Step 2](#_2-create-a-cloudflare-tunnel), Cloudflare will create a DNS record for the hostname.

However, if a DNS record for the hostname already exists, Cloudflare won’t create a new one.

In this case, your app won’t work. To fix this issue, follow the steps below:

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/12.webp" />

First, copy your tunnel ID from the Tunnels page on the Cloudflare dashboard.

<ZoomableImage src="/docs/images/knowledge-base/cf-tunnel/single-resource/13.webp" />

Create a new DNS record with the following details:

1. In the Cloudflare dashboard, go to **DNS**.
2. Select **Records**.
3. Add a **CNAME** record.
4. Enter the name as `*` or the name of your subdomain (this should match the hostname you have for your app on the tunnel).
5. For the **Target**, enter the tunnel ID followed by `.cfargotunnel.com`
6. Set the proxy status to **Proxied**.

Now, visit the domain of your application, and it should be accessible there.

```

---


### commands.md {#knowledge-base-commands-md}

**File Path**: `knowledge-base/commands.md`
**Size**: 797 bytes
**SHA**: `fabd796e514c2bb03a44f8f19639356fb5aea037`

```markdown
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


```

---


### cron-syntax.md {#knowledge-base-cron-syntax-md}

**File Path**: `knowledge-base/cron-syntax.md`
**Size**: 899 bytes
**SHA**: `5a1b241fc4a16a1466a4b42b5a707f653eede95f`

```markdown
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
```

---


### delete-user.md {#knowledge-base-delete-user-md}

**File Path**: `knowledge-base/delete-user.md`
**Size**: 1467 bytes
**SHA**: `501fab18b727cfe33af448135ab2c9fba271ab52`

```markdown
---
title: Delete User
---

# Delete User
This guide will show you how to delete a user from the self-hosted Coolify instance.

::: warning Caution
  If you delete a user, and Coolify still has connection to the servers, it will
  delete all the resources on the servers as well, not just from Coolify's
  database.
:::

Only users who are in the `root` team can delete users from the UI.

- Go to the `Team` page.
- Switch to `Admin View` tab.

Here you can see all the users registered in Coolify. Click on the `Delete` button next to the user you want to delete.

## Deletion process

::: info Tip
The root team or root user cannot be deleted.
:::

Coolify iterate over all the teams of a user and decide of the followings:

### The user is alone in the team

The team and all resources from the server and from Coolify's database are deleted.

### The user is not alone in the team

1. The user is the owner/admin of the team and no other owners/admins found, but the team **has members**:
   - The ownership is transferred to the first user in the team who is not the owner/admin.
   - The user is removed from the team. No resources are deleted.

2. The user is the owner/admin of the team and no other owners/admins found, but the team has **no members**:
   - The team and all resources from the server and from Coolify's database are deleted.

3. The user is not the owner/admin of the team:
   - The user is removed from the team. No resources are deleted.

```

---


### create.md {#knowledge-base-destinations-create-md}

**File Path**: `knowledge-base/destinations/create.md`
**Size**: 3523 bytes
**SHA**: `620ba9481ba0ea0508903fb4b87130de3169bcaa`

```markdown
# Creating Destinations

This guide shows you how to create new destinations in Coolify for deploying your applications and databases.

## Prerequisites

Before creating a destination, ensure you have:

- At least one server connected to Coolify
- Appropriate permissions to manage destinations
- Basic understanding of [Docker networks](https://docs.docker.com/engine/network/)

## Creating a New Destination

### Method 1: From Destinations Page

<ZoomableImage src="/docs/images/destinations/create-destination.webp" />

1. Navigate to **Destinations** in the main navigation
2. Click on **+ Add**
3. Fill in the destination details.

### Method 2: From Server Management

<ZoomableImage src="/docs/images/destinations/server-create-destination.webp" />

1. Go to **Servers** and select your server
2. Navigate to the **Destinations** tab
3. Click **+ Add**
4. Fill in the destination details.

## Configuration Options

<ZoomableImage src="/docs/images/destinations/create-destination-modal.webp" />

### Destination Name

- Auto-generated based on server name and network ID
- Can be customized to be more descriptive

### Network Name

- Must be unique per server
- Auto-generated unique identifier (CUID2 format)
- Can be customized to be more descriptive
- Cannot be changed after creation
- Used as the actual Docker network name

### Server Selection

- Choose from available servers in your team
- Server must be online and accessible
- Can not be a [build server](/builds/servers)
- Determines where the Docker network will be created

### Destination Type

The destination type is **automatically determined** based on your selected server's configuration:

#### Standalone Docker

- **Automatically selected** when the server is configured as a standalone Docker host
- Creates a standard Docker network
- Suitable for single-server deployments
- Supports bridge and custom networks

#### Docker Swarm

- **Automatically selected** when the server is configured as a Docker Swarm manager or worker
- Creates overlay networks for multi-node communication
- Server must have Docker Swarm mode enabled during server setup
- Advanced feature for clustered deployments

::: tip Server Configuration Determines Type
You cannot manually choose between Standalone Docker and Docker Swarm when creating a destination. The type is determined by how your server was configured when it was added to Coolify.
:::

## Automatic Network Creation

When you create a destination, Coolify automatically:

1. **Creates the Docker network** on the target server
2. **Connects the proxy** (Traefik/Caddy) to the network
3. **Configures network settings** for proper isolation
4. **Enables inter-container communication** within the network

## Network Scanning

You can also scan existing Docker networks on a server and add them as destinations:

<ZoomableImage src="/docs/images/destinations/scan-networks.webp" />

1. Go to **Server** and select your server
2. Navigate to **Destinations**
3. Click **Scan for Destinations**
4. Select existing networks to import and Coolify will create destination entries for them

## Validation and Errors

Common errors when creating destinations:

- **Network already added to this server**: The network name conflicts with an existing one

## After Creation

Once created, your destination will:

- Appear in the destinations list
- Be available for deploying applications and databases
- Have network connectivity configured automatically
- Be ready to host your containerized resources

```

---


### index.md {#knowledge-base-destinations-index-md}

**File Path**: `knowledge-base/destinations/index.md`
**Size**: 2450 bytes
**SHA**: `30fbeef2f0897ae42c101fe862d9e4c972bea9b3`

```markdown
# Destinations

Destinations in Coolify are **Docker network endpoints** where your applications, databases, and services are deployed. They represent isolated network environments on your servers that provide containerized isolation and networking for your resources.

## What are Destinations?

A destination is essentially a [Docker network](https://docs.docker.com/engine/network/) that acts as a deployment target for your resources. When you deploy an application or database, it gets deployed to a specific destination (Docker network) on a server, providing network isolation and organization for your containerized workloads.

## Types of Destinations

Coolify differentiates destinations between two types based on the server configuration:

### 1. Standalone Docker

- **Purpose**: For single-server deployments
- **Use Case**: Most common setup for individual servers
- **Network Type**: [Docker bridge](https://docs.docker.com/engine/network/drivers/bridge/) or custom networks

### 2. Docker Swarm

- **Purpose**: For [Docker Swarm](https://docs.docker.com/engine/swarm/) cluster deployments
- **Use Case**: Multi-node cluster environments
- **Network Type**: [Docker overlay networks](https://docs.docker.com/engine/network/drivers/overlay/)

## Key Concepts

### Network Isolation

Each destination provides network isolation between different deployments. Applications deployed to different destinations cannot communicate with each other unless explicitly configured.

### Server Relationship

- Each destination belongs to exactly one server
- A server can have multiple destinations
- Destinations are tied to the server's Docker daemon

### Resource Assignment

Destinations can host multiple types of resources:

- **Applications** (web apps, APIs, microservices)
- **Databases** (PostgreSQL, MySQL, Redis, MongoDB, etc.)
- **Services** (one-click deployments like WordPress, Ghost, etc.)

## Benefits

1. **Isolation**: Network-level separation between different projects or environments
2. **Organization**: Logical grouping of related applications and databases
3. **Security**: Prevents unauthorized network access between different deployments
4. **Flexibility**: Ability to deploy the same application to multiple destinations/servers
5. **Scalability**: Support for multi-server deployments through additional destinations

## Related Topics

- [Creating Destinations](./create.md)
- [Managing Destinations](./manage.md)

```

---


### manage.md {#knowledge-base-destinations-manage-md}

**File Path**: `knowledge-base/destinations/manage.md`
**Size**: 3791 bytes
**SHA**: `e74f7dab72cc36ff108a7c648d5bf5a7381e4f6a`

```markdown
# Managing Destinations

Learn how to manage your existing destinations in Coolify, and how to assign resources to them.

## Viewing Destinations

### Destinations Overview

Navigate to **Destinations** to see all your destinations across all servers.
<ZoomableImage src="/docs/images/destinations/destinations-overview.webp" />

### Server-Specific Destinations

Navigate to **Servers** → **[Server Name]** → **Destinations** to view destinations specific to that server.
<ZoomableImage src="/docs/images/destinations/destinations-server-overview.webp" />

## Editing & Deleting Destinations

Click on a destination to access its management page where you can either edit or delete it.

<ZoomableImage src="/docs/images/destinations/destinations-settings.webp" />

### Basic Information

- **Name**: Update the destination display name
- **Server IP**: View the server IP address where the destination is hosted (read-only)
- **Docker Network**: View the Docker network name (read-only)

### Before You Delete

#### Check for Active Resources

Coolify won't allow you to delete a destination that has active resources. Therefore, before deleting a destination, ensure it's not being used:

1. **Applications**: No applications deployed to this destination
2. **Databases**: No databases running in this destination
3. **Services**: No services configured for this destination

#### Resource Dependencies

Verify that no other resources depend on this destination, to avoid issues after deletion:

- **Environment Variables**: Check for hardcoded references
- **Network Dependencies**: Ensure no cross-destination communication
- **Proxies & Load Balancers**: Update load balancer and proxy configuration

## Assign Resources to a Destination

When you have more then one destination on a server, you will get prompted to select a destination when creating a new resource.

<ZoomableImage src="/docs/images/destinations/destinations-selection.webp" />

If your resource is already created, you can make a **Clone** of it to another destination:

<ZoomableImage src="/docs/images/destinations/destinations-clone.webp" />

1. Navigate to the resource's management page over the **Projects** tab.
2. Go to **Resource Operations**
3. Select the destination

::: warning
Cloning a resource to another destination will create a new instance of that resource. This will not move the resource or it's data but create a duplicate.
:::

### Service Stacks

Unlike applications or databases, service stacks are not by default connected to the assigned destination. This also includes applications using the [Docker Compose Build Pack](/builds/packs/docker-compose). Coolify creates an isolated network for each service stack, allowing you to run multiple instances of the same service on the same server without conflicts.

If you want to connect a service stack to a destination, enable [Connect to Predefined Networks](/knowledge-base/docker/compose#connect-to-predefined-networks) in it's settings. This allows the service stack to communicate with other resources on the same destination.

::: danger WARNING
Avoid defining network configurations directly in your service stack's `docker-compose.y[a]ml` and instead use Coolify's Destination settings to manage network connections. This could otherwise lead to undesired behavior, such as [Gateway Timeout](/troubleshoot/applications/gateway-timeout) errors.
:::

## Best Practices

1. **Naming Convention**: Use descriptive names for destinations
2. **Resource Organization**: Group related applications in the same destination
3. **Monitoring**: Regularly check destination health and resource usage
4. **Documentation**: Document purpose and configuration of each destination
5. **Cleanup**: Remove unused destinations to reduce server load

```

---


### registry.md {#knowledge-base-docker-registry-md}

**File Path**: `knowledge-base/docker/registry.md`
**Size**: 2418 bytes
**SHA**: `b080cd9736cb07f437e203e1f15ae2469621ddea`

```markdown
---
title: "Docker Registry"
description: "A guide on how to configure a Docker Registry with Coolify."
---


# Docker Registry

You can easily push your built docker images to any docker registries with Coolify.

You just need to fill the `Docker Registry` fields in your service `General` configurations.

## Configuration

### Docker Image

If this field is set, Coolify will automatically push your built docker image to the specified docker registry.

> If the image is empty, Coolify won't push your built image.

### Docker Image Tag

If this field is set, Coolify will automatically push your built docker image with the specified tag to the specified docker registry + the git commit sha tag.

> If the tag is empty, Coolify only push your built image with the git commit sha tag.

## Docker Credentials

Docker credentials (from v4.0.0-beta.88) are used to authenticate with Docker registries to pull/push images.

If you want to authenticate Coolify with a Docker Registry:


1. Login to your server
    Login on the server through SSH with the same user that configured for your server.

2. Authenticate to Docker Registry
    Login to the Docker Registry, normally execute `docker login` command.
    
    > You will be prompted to enter your Docker registry username and password/token - this can be varied depending on the Docker registry you are using.

Once you logged in, Coolify will automatically detect your credentials and use them.

## Swarm Mode

If you are deploying to a Swarm cluster, you need to make sure that your Docker Registry is accessible from all nodes in the cluster, workers and managers.

## Host your own registry

You can easily host your own registry, however, it will consume a lot of storages as by default it stores images locally on the server.

More info on how to set other storage drivers can be found in the [official documentation](https://distribution.github.io/distribution/storage-drivers/).

You can find the one-click service in Coolify.

### Setup

You need to generate an user / password for the registry.

You can generate one with the [htpasswd](https://httpd.apache.org/docs/current/programs/htpasswd.html) command:

```bash
htpasswd -nbB test test
```

Then go to `Storages` menu, and in the `/auth/registry.password` file, simply add the generated user / password. One line per user.

::: warning Caution
Do not forget to restart the registry service.
:::
```

---


### swarm.md {#knowledge-base-docker-swarm-md}

**File Path**: `knowledge-base/docker/swarm.md`
**Size**: 3866 bytes
**SHA**: `609ca469993cd986981c1e25caa8e494604ed380`

```markdown
---
title: "Docker Swarm"
description: "A guide on how to use Docker Swarm with Coolify."
---

# Docker Swarm

::: danger Caution
***This is an experimental feature.***
:::

## Setup in Coolify

If you would like to use a Swarm to deploy your resources, you need to add the `Swarm Manager` to Coolify.

Optionally, you can add the `Swarm Workers` to Coolify. This will allow Coolify to do cleanups and other stuff on the `Swarm Workers`.

### Docker Registry

You need to have an external Docker Registry available to use a Swarm, as all workers need to be able to pull the images you built with Coolify.

- The Swarm Manager needs to push the image to the Docker Registry.
- The Swarm Workers need to pull the image from the Docker Registry.

So set your docker login credentials accordingly. More information [here](/knowledge-base/docker/registry).

## Install Swarm Cluster

> WIP
> This is just a brief guide to install a simple Docker Swarm cluster. For more information, please refer to the [official documentation](https://docs.docker.com/engine/swarm/).

### Prerequisites

- I will use [Hetzner](https://coolify.io/hetzner) (referral link) for this guide. You can use any other provider.
- You need at least 3 servers to create a Docker Swarm cluster with the same architecture (ARM or AMD64).
- 1 server for the manager node.
- 2 servers for the worker nodes (you can add more worker nodes if you want).
- Add private networking to all servers if possible.

### Install Docker

Install Docker on all servers. You can follow the [official documentation](https://docs.docker.com/engine/install/) or:

1. Install with Rancher script

```bash
curl https://releases.rancher.com/install-docker/24.0.sh | sh
```

2. Install with Docker script

```bash
curl https://get.docker.com | sh -s -- --version 24.0
```

> You only need to use one of the above commands.

### Configure Docker

On `all servers`, run the following command to start Docker.

```bash
systemctl start docker
systemctl enable docker
```

::: warning Caution
Hetzner specific configuration. Hetnzer servers use a MTU of 1450. You need to configure Docker to use the same MTU.

On the `manager`, run the following command to configure Docker.

```bash
mkdir -p /etc/docker
cat <<EOF > /etc/docker/daemon.json
{
  "default-network-opts": {
    "overlay": {
      "com.docker.network.driver.mtu": "1450"
    }
  }
}
EOF
systemctl restart docker
```
:::


### Create a Swarm cluster

`On the manager node`, run the following command to create a new cluster.

```bash
# MANAGER_IP = IP of the manager node. If you have private networking, use the private IP, like 10.0.0.x.
docker swarm init --advertise-addr <MANAGER_IP>

```

This command will output a command to join the cluster on the `worker nodes`.

It should look like something like this:

```bash
# DO NOT RUN THIS COMMAND, IT IS JUST AN EXAMPLE, HELLO!
docker swarm join --token SWMTKN-1-24zvxeydjarchy7z68mdawichvf684qvf8zalx3rmwfgi6pzm3-4ftqn9n8v98kx3phfqjimtkzx 10.0.0.2:2377
```

### Verify the cluster

Run the following command on the manager node to verify the cluster.

```bash
docker node ls
```

You should see something like this:

```bash
ID                            HOSTNAME        STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
ua38ijktbid70em257ymxufif *   swarm-manager   Ready     Active         Leader           24.0.2
7rss9rvaqpe9fddt5ol1xucmu     swarm-worker    Ready     Active                          24.0.2
12239rvaqp43gddtgfsdxucm2     swarm-worker    Ready     Active                          24.0.2

```

## Deploy with persistent storage

To be able to deploy a service with persistent storage, you need to have a shared volume on the `swarm-workers`. So the Swarm service could move the resources between the `swarm-workers`.

You can always use services like AWS EFS, NFS, GlusterFS, etc.

> WIP

```

---


### domains.md {#knowledge-base-domains-md}

**File Path**: `knowledge-base/domains.md`
**Size**: 1068 bytes
**SHA**: `407b158cdf84d4bc98501f3c4edf655d19f08ccd`

```markdown
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

```

---


### drain-logs.md {#knowledge-base-drain-logs-md}

**File Path**: `knowledge-base/drain-logs.md`
**Size**: 1199 bytes
**SHA**: `6904ee37bdfac3bd300b1166acf9f37933da1aca`

```markdown
---
title: Drain Logs
---

# Drain Logs
You can drain logs of your deployed services to a third-party applications like [Axiom](https://axiom.co/) or [New Relic](https://newrelic.com).

> We will support more services in the future, like Signoz, HyperDX, etc.

## How to enable?

1. Enable on your Server. 
   - First, you need to enable it on your `Server` settings. 
   - Go to your `Server` where you want to enable the `Drain Logs` and click on the `Log Drains` tab.

2. Enable on your Resource. 
   - Go to your resource, `Advanced` tab and enable the `Drain Logs` for the resource.

::: warning Caution
  Once you enabled at least one of the `Drain Logs`, you need to `Restart` your
  service to apply the changes.
:::

## How to configure?
### Axiom

You need to have a `Dataset` and an `API key` from Axiom. 

More information [here](https://axiom.co/docs).

## New Relic

You need to have an `License key` from New Relic. 

More information [here](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/#ingest-license-key).

## Custom FluentBit configuration

If you know how to configure FluentBit, you can use the `Custom FluentBit configuration` to configure the drain logs.

```

---


### faq.md {#knowledge-base-faq-md}

**File Path**: `knowledge-base/faq.md`
**Size**: 1889 bytes
**SHA**: `a9856720f79c00566cef4e43d1cd4fda5d60650c`

```markdown
---
title: FAQ
---

# Frequently Asked Questions (FAQ)

## Server

### Permission denied (publickey).
::: tip Error
Error: `Server is not reachable. Reason: root@host.docker.internal: Permission denied (publickey).`

:::

Your Coolify instance cannot reach the server it is running on. During installation, a public key is generated to `/data/coolify/ssh/keys/id.root@host.docker.internal.pub` and automatically added to `~/.ssh/authorized_keys`.

If it is not added, you can add it manually by running the following command on your server:

```bash
  cat /data/coolify/ssh/keys/id.root@host.docker.internal.pub >> ~/.ssh/authorized_keys
```

### Custom SSH Port
  If you would like to use a custom SSH port, you can set it in the `Server` tab of your server.

If you are self-hosting Coolify, you can simply set it after you installed Coolify on the `localhost` server.

### Increase Concurrent Builds
If you would like to increase the number of concurrent builds, you can set it in the `Server` tab of your server.

### Coolify Cloud Public IPs
If you need the public facing IPs to allow inbound connections to your servers, here is an up-to-date list of IPs that you can use to whitelist:

- https://coolify.io/ipv4.txt
- https://coolify.io/ipv6.txt

## Cloudflare

### Configured but application is not reachable.
You need to set your SSL/TLS configuration to at least `Full` in your Cloudflare dashboard.

Documentation: https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/

### Too many redirections.
You need to set your SSL/TLS configuration to at least `Full` in your Cloudflare dashboard.

Documentation: https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/


## Applications

### How to map a port the server?
If you want to map a port the host system (server), you need to use [Ports Mappings](/applications/#port-mappings) feature.

```

---


### integration.md {#knowledge-base-git-bitbucket-integration-md}

**File Path**: `knowledge-base/git/bitbucket/integration.md`
**Size**: 2837 bytes
**SHA**: `a0dd08d058e2e66ff3026692cf1f2ea5bce2b792`

```markdown
---
title: "Integration"
description: "A guide on how to use Bitbucket based repositories with Coolify."
---

# Bitbucket Integration
This guide will show you how to use Bitbucket based repositories with Coolify.

## Public Repositories

You can use public repositories without any additional setup.

1. Select the `Public repository` option in the Coolify when you create a new resource.
2. Add your repository URL to the input field, for example: `https://bitbucket.com/coolify-test2/coolify-examples`

::: warning Caution
You can only use the https URL.
:::

1. That's it! Coolify will automatically pull the latest version of your repository and deploy it.

## Private Repositories

Private repositories require a few more steps to setup.

1. Add a private key (aka `Deploy Keys`) to Coolify and to your Bitbucket repository in the `Repository Settings` / `Access Keys` menu.

::: warning Caution
  - You can generate a new key pair with the following command: 
  
  ```bash
  ssh-keygen -t rsa -b 4096 -C "deploy_key" 
  ```

  - Or you can also use Coolify to generate a new key for you in the `Keys & Tokens` menu.
:::

2. Create a new resource and select the `Private Repository (with deploy key)`
3. Add your repository URL to the input field, for example: `git@bitbucket.org:coolify-test2/coolify-examples.git`

::: warning Caution
You need to use the SSH URL, so the one that starts with `git@`.
:::

4. That's it! Coolify will automatically pull the latest version of your repository and deploy it.

## Automatic commit deployments with webhooks (Optional)

You can add a custom webhook URL to your Bitbucket repository to trigger a new deployment when you push to your repository.

::: warning Caution
This can be set on either public or private repositories.
:::

In your resource, there is a `Webhooks` menu. In the `Manual Git Webhooks` section, you can find the URL what you need to set in your Bitbucket repository.

1. Set a secret key in the `Bitbucket Webhook Secret` input field.
2. Go to your repository in Bitbucket and open the `Repository Settings` / `Webhooks` menu as `Repository hooks`.
3. Add the URL from Coolify to the `URL` input field and the secret token.
4. Select the `Push` option.
5. That's it! Now when you push to your repository, Bitbucket will send a webhook request to Coolify and it will trigger a new deployment.

## Merge request deployments with webhooks (Optional)

You can add a custom webhook URL to your Bitbucket repository to trigger a new deployment when you create a new merge request.

::: warning Caution
This can be set on either public or private repositories.
:::

The process is the same as the previous one. In the `Repository Settings` / `Webhooks` menu, you need to select the following events in the `Pull Request` option:

- `Created`
- `Updated`
- `Merged`
- `Declined`
```

---


### integration.md {#knowledge-base-git-gitea-integration-md}

**File Path**: `knowledge-base/git/gitea/integration.md`
**Size**: 2782 bytes
**SHA**: `e9924b91059489f05038c54232d4017752e26ce0`

```markdown
---
title: "Integration"
description: "A guide on how to use Gitea based repositories with Coolify."
---

# Gitea Integration

This guide will show you how to use Gitea based repositories with Coolify.

## Public Repositories

You can use public repositories without any additional setup.

1. Select the `Public repository` option in the Coolify when you create a new resource.
2. Add your repository URL to the input field, for example: `https://gitea.com/heyandras/coolify-examples`

::: warning Caution
You can only use the https URL.
:::

1. That's it! Coolify will automatically pull the latest version of your repository and deploy it.

## Private Repositories

Private repositories require a few more steps to setup.

1. Add a private key (aka `Deploy Keys`) to Coolify and to your Gitea repository in the `Repository Settings` / `Access Keys` menu.

::: warning Caution
  - You can generate a new key pair with the following command: 
  
  ```bash
  ssh-keygen -t rsa -b 4096 -C "deploy_key" 
  ```

  - Or you can also use Coolify to generate a new key for you in the `Keys & Tokens` menu.
:::

2. Create a new resource and select the `Private Repository (with deploy key)`
3. Add your repository URL to the input field, for example: `git@gitea.com:heyandras/coolify-examples.git`

::: warning Caution
You need to use the SSH URL, so the one that starts with `git@`.
:::

4. That's it! Coolify will automatically pull the latest version of your repository and deploy it.

## Automatic commit deployments with webhooks (Optional)

You can add a custom webhook URL to your Gitea repository to trigger a new deployment when you push to your repository.

::: warning Caution
This can be set on either public or private repositories.
:::

In your resource, there is a `Webhooks` menu. In the `Manual Git Webhooks` section, you can find the URL what you need to set in your Gitea repository.

1. Set a secret key in the `Gitea Webhook Secret` input field.
2. Go to your repository in Gitea and open the `Repository Settings` / `Webhooks` menu as `Repository hooks`.
3. Add the URL from Coolify to the `URL` input field and the secret token.
4. Select the `Push` option.
5. That's it! Now when you push to your repository, Gitea will send a webhook request to Coolify and it will trigger a new deployment.

## Merge request deployments with webhooks (Optional)

You can add a custom webhook URL to your Gitea repository to trigger a new deployment when you create a new merge request.

::: warning Caution
This can be set on either public or private repositories.
:::

The process is the same as the previous one. In the `Repository Settings` / `Webhooks` menu, you need to select the following events in the `Pull Request` option:

- `Created`
- `Updated`
- `Merged`
- `Declined`
```

---


### github-actions.md {#knowledge-base-git-github-github-actions-md}

**File Path**: `knowledge-base/git/github/github-actions.md`
**Size**: 1558 bytes
**SHA**: `50744a60576f7ab48ba7b5b8ab96815f7762b584`

```markdown
---
title: "GitHub Actions"
---

# GitHub Actions
You can use GitHub Actions to build your image and deploy it to Coolify.

Here is an [example repository](https://github.com/andrasbacsai/github-actions-with-coolify) and a [workflow file](https://github.com/andrasbacsai/github-actions-with-coolify/blob/main/.github/workflows/build.yaml) that you can check how it works.

## Process Overview

1. You need to create a [GitHub Action workflow](https://github.com/andrasbacsai/github-actions-with-coolify/blob/main/.github/workflows/build.yaml) file in your repository.

2. You need to build your image and push it to a Docker registry. In the example, I use ghcr.io, but you can use any other registry.

3. You need to create a [Coolify API Token](/api-reference/authorization) and add it to your GitHub repository secrets.
   - `COOLIFY_TOKEN` in the example.

4. In Coolify, you need to setup your deployment type. It could be a simple Dockerfile, Docker Compose or Docker Image based deployment.

5. Get the proper webhook endpoint from Coolify (Your resource / `Webhook` menu) and add it to your GitHub repository secrets.
   - `COOLIFY_WEBHOOK` in the example.

6. Need to send a GET request to that webhook endpoint (authenticated with the token) to trigger the deployment
   ```bash
   curl --request GET "${% raw %}{{ secrets.COOLIFY_WEBHOOK }}{% endraw %}" --header "Authorization: Bearer ${% raw %}{{ secrets.COOLIFY_TOKEN }}{% endraw %}"
   ```

7. That's it! Now you can push to your repository and the deployment will be triggered automatically.

```

---


### integration.md {#knowledge-base-git-github-integration-md}

**File Path**: `knowledge-base/git/github/integration.md`
**Size**: 3409 bytes
**SHA**: `ab28164a6a58642ae8b67d3f8f768ae94b047f13`

```markdown
---
title: "Integration"
description: "A guide on how to use GitHub based repositories with Coolify."
---

# Github Integration
This guide will show you how to use GitHub based repositories with Coolify.

## Public Repositories

You can use public repositories without any additional setup.

1. Select the `Public repository` option in the Coolify when you create a new resource.
2. Add your repository URL to the input field, for example: `https://github.com/coollabsio/coolify-examples`

::: warning Caution
You can only use the https URL.
:::

3. That's it! Coolify will automatically pull the latest version of your repository and deploy it.

## Private Repositories

### With GitHub App (Recommended)

You can use private repositories with the GitHub App integration. You will get full integration with GitHub, like automatic commit deployments and pull request deployments.

1. Create a new GitHub App in the `Sources` view.
2. Create a new resource and select the `Private Repository (with GitHub App)`.
3. Choose your repository from the list.
4. That's it!

### With Deploy Keys

1. Add a private key (aka `Deploy Keys`) to Coolify and to your GitHub repository in the `Settings` / `Deploy Keys` menu.

::: warning Caution
  - You can generate a new key pair with the following command: 
  
  ```bash
  ssh-keygen -t rsa -b 4096 -C "deploy_key" 
  ```

  - Or you can also use Coolify to generate a new key for you in the `Keys & Tokens` menu.
:::

2. Create a new resource and select the `Private Repository (with deploy key)`
3. Add your repository URL to the input field, for example: `git@github.com:coollabsio/coolify-examples.git`

::: warning Caution
You need to use the SSH URL, so the one that starts with `git@`.
:::

4. That's it!

## Automatic commit deployments with webhooks (Optional)

You can add a custom webhook URL to your GitHub repository to trigger a new deployment when you push to your repository.

::: warning Caution
This can be set on either public or private repositories.

Not required if you use GitHub App integration.
:::

In your resource, there is a `Webhooks` menu. In the `Manual Git Webhooks` section, you can find the URL what you need to set in your GitHub repository.
<ZoomableImage src="/docs/images/knowledge-base/git/github/manual-git-webhooks.webp" />


1. Set a secret key in the `GitHub Webhook Secret` input field.
<ZoomableImage src="/docs/images/knowledge-base/git/github/github-webhook-secret.webp" />

2. Go to your repository on GitHub and open the `Settings` / `Webhooks` menu.
<ZoomableImage src="/docs/images/knowledge-base/git/github/github-settings-webhook.webp" />

3. Add the URL from Coolify to the `URL` input field and the secret token.
4. Select the `Push events` option.
<ZoomableImage src="/docs/images/knowledge-base/git/github/event-push.webp" />

5. That's it! Now when you push to your repository, GitHub will send a webhook request to Coolify and it will trigger a new deployment.

## Pull request deployments with webhooks (Optional)

You can add a custom webhook URL to your GitHub repository to trigger a new deployment when you create a new merge request.

::: warning Caution
This can be set on either public or private repositories.

Not required if you use GitHub App integration.
:::

The process is the same as the previous one, but you need to select the `Pull Request` events option in the `Settings` / `Webhooks` menu.
```

---


### move-between-github-apps.md {#knowledge-base-git-github-move-between-github-apps-md}

**File Path**: `knowledge-base/git/github/move-between-github-apps.md`
**Size**: 1141 bytes
**SHA**: `e93c4f079b093033dfaaabcbd9864ee858c1fc81`

```markdown
---
title: "Move Between GitHub Apps"
---

# Move Between GitHub Apps
This guide will show you how to move repositories between GitHub Apps.

## Prerequisites
- Coolify v4.0.0-beta.408 or higher

## Problem
You have an already configured repository in Coolify, but you want to move it to another GitHub App.

For example, you moved your repositories to a new organization and want to use a new/existing GitHub App for that organization.

## Solution
1. Move the repositories to your new GitHub organization (or to your personal account).
2. Add the new GitHub App to Coolify, either by creating [manually](/knowledge-base/git/github/manually-setup-github-app) or automatically through Coolify's UI.
3. Make sure the Github App installation has access to the repositories on the new place, for example by opening `https://github.com/organizations/<organization>/settings/installations` and check the added repositories.
4. Go to your application in Coolify -> `Git Source` tab and select the new Github App.
5. Make sure you change the repository name to the new one, like from `andrasbacsai/test-repo` to `coollabsio/test-repo`.
6. Redeploy.
```

---


### integration.md {#knowledge-base-git-gitlab-integration-md}

**File Path**: `knowledge-base/git/gitlab/integration.md`
**Size**: 2636 bytes
**SHA**: `b7005844080c4b88f270f401c9a9ff9646e8000c`

```markdown
---
title: "Integration"
description: "A guide on how to use GitLab based repositories with Coolify."
---

# GitLab Integration
## Public Repositories

You can use public repositories without any additional setup.

1. Select the `Public repository` option in the Coolify when you create a new resource.
2. Add your repository URL to the input field, for example: `https://gitlab.com/andrasbacsai/coolify-examples`

   ::: warning Caution
   You can only use the https URL.
   :::

3. That's it! Coolify will automatically pull the latest version of your repository and deploy it.

## Private Repositories

Private repositories require a few more steps to setup.

1. Add a private key (aka `Deploy Keys`) to Coolify and to your GitLab repository in the `Settings` / `Repository` / `Deploy Keys` menu.

::: warning Caution
  - You can generate a new key pair with the following command: 
  
  ```bash
  ssh-keygen -t rsa -b 4096 -C "deploy_key" 
  ```

  - Or you can also use Coolify to generate a new key for you in the `Keys & Tokens` menu.
:::

2. Create a new resource and select the `Private Repository (with deploy key)`
3. Add your repository URL to the input field, for example: `git@gitlab.com:andrasbacsai/coolify-examples.git`

::: warning Caution
You need to use the SSH URL, so the one that starts with `git@`.
:::

4. That's it! Coolify will automatically pull the latest version of your repository and deploy it.

## Automatic commit deployments with webhooks (Optional)

You can add a custom webhook URL to your GitLab repository to trigger a new deployment when you push to your repository.

::: warning Caution
This can be set on either public or private repositories.
:::

In your resource, there is a `Webhooks` menu. In the `Manual Git Webhooks` section, you can find the URL what you need to set in your GitLab repository.

1. Set a secret key in the `GitLab Webhook Secret` input field.
2. Go to your repository in GitLab and open the `Settings` / `Webhooks` menu.
3. Add the URL from Coolify to the `URL` input field and the secret token.
4. Select the `Push events` option.
5. That's it! Now when you push to your repository, GitLab will send a webhook request to Coolify and it will trigger a new deployment.

## Merge request deployments with webhooks (Optional)

You can add a custom webhook URL to your GitLab repository to trigger a new deployment when you create a new merge request.

::: warning Caution
This can be set on either public or private repositories.
:::

The process is the same as the previous one, but you need to select the `Merge request events` option in the `Settings` / `Webhooks` menu.
```

---


### health-checks.md {#knowledge-base-health-checks-md}

**File Path**: `knowledge-base/health-checks.md`
**Size**: 2718 bytes
**SHA**: `b9930ac058e7765671771000593185f52e0053ff`

```markdown
---
title: Health checks
description: Learn how to manage health checks in Coolify for your applications and services.
keywords: ["Healthchecks", "Not Found", "No available server", "404", "503"]
---

# Health checks

Health checks are a way to ensure that your applications and services are running correctly. They allow Coolify to monitor the health of your resources and ensure that traffic is only routed to healthy instances. This for example important for [Rolling Updates](/knowledge-base/rolling-updates) to work correctly.

## Traefik

When using Traefik as the reverse proxy, health checks are an integral part of how it routes traffic to your resources.

### Enabled

If your resource has health checks _enabled_, Traefik will only route traffic to it if the health check passes. If the health check fails, Traefik will not route traffic to the resource.

**It will cause the resource to return a `404 Not Found` or `No available server` error.**

### Disabled

If your resource has health checks _disabled_, Traefik will route traffic to it regardless of the health check status.

## Configure Health checks

### Applications

There are two ways to configure health checks for your applications:

<ZoomableImage src="/docs/images/knowledge-base/resources/healthcheck.webp" />

1. **Using the UI**: You can set up health checks directly in the Coolify UI when creating or editing an application. You can specify the path to check, the expected response code, and the interval for checking. It will be required that the container has either `curl` or `wget` installed to perform the health checks.

2. **Using the Dockerfile**: You can also define health checks in your Dockerfile using the [HEALTHCHECK](https://docs.docker.com/reference/dockerfile/#healthcheck) instruction. This allows you to specify how the health check should be performed, including the command to run and the expected response.

If there are healthchecks both in the UI and in the Dockerfile defined and enabled, the Dockerfile will take precedence.

### Service Stacks

Services or Applications that use the [Docker Compose Build Pack](/builds/packs/docker-compose) require their health checks to be defined in the `Dockerfile` of each service, or in their `docker-compose.y[a]ml` file using the [healthcheck](https://docs.docker.com/reference/compose-file/services/#healthcheck) attribute.

::: tip When to use health checks?
It is recommended to enable health checks for all your resources. This way, you can ensure that only healthy resources are receiving traffic.

But if you cannot set up health checks for some reason, you can disable them.

Just be aware that if the resource is unhealthy, it will still receive traffic.
:::

```

---


### backup-restore-coolify.md {#knowledge-base-how-to-backup-restore-coolify-md}

**File Path**: `knowledge-base/how-to/backup-restore-coolify.md`
**Size**: 7997 bytes
**SHA**: `0eee8b191849fd6fa682f67e267667b2522f87ca`

```markdown
---
title: Backup and Restore Coolify
---


# Backup and Restore Your Coolify Instance
This guide will show you how to back up your Coolify instance and restore it on a new server. 

There are two methods to create backups:
- **S3 Backup:** Use S3-compatible storage to automatically save backups.
- **Manual Backup:** Trigger a backup manually from the Coolify dashboard.

If you use S3-compatible storage, simply download the backup file from your S3 provider and transfer it to your new server. 

The rest of this guide will focus on the manual backup method, which is ideal for most users.

::: warning NOTE:
This only backs up and restores the Coolify instance itself — not your application data. 

All settings from your Coolify dashboard will be restored, but application data (such as volume mounts) must be backed up and restored manually. 

For details, refer to the [Application Migration Guide](https://coolify.io/docs/knowledge-base/how-to/migrate-apps-different-host).
:::


## 1. Create a Manual Backup
1. **Go to Backup Page on Dashboard:**  
   In your Coolify dashboard, click on **Settings** and select the **Backup** tab to view your database and backup settings.
   <ZoomableImage src="/docs/images/knowledge-base/how-tos/backup-restore-coolify/1.webp" />

2. **Trigger a Backup:**  
   Click on the **Backup Now** button. This will start the backup process in the background.
   <ZoomableImage src="/docs/images/knowledge-base/how-tos/backup-restore-coolify/2.webp" />

3. **Download or Copy Backup Location:**  
   Once the backup is complete, you will see a **Download** button and a location path in the UI.  
   <ZoomableImage src="/docs/images/knowledge-base/how-tos/backup-restore-coolify/3.webp" />
   - **Download:** Saves the backup file to your local computer.
   - **Copy Path:** You can use this path with a tool like SCP to transfer the backup file directly to your new server.

::: info **Note:** 
If you are using S3-compatible storage for backups, download the backup file from your S3 provider instead
:::


## 2. Retrieve Your `APP_KEY`
Before you restore the backup, you need to obtain the `APP_KEY` from your current Coolify instance. This key is used to decrypt your data during restoration.

1. **Open the Terminal in Coolify:**  
   Access the **Terminal** tab in the dashboard and connect to the server where Coolify is running. This server is named as `localhost` by default.

2. **View the Environment File**  
   Run the following command to display the contents of the `.env` file:
   ```sh
   cat /data/coolify/source/.env
   ```
   Copy the value of `APP_KEY` and save it securely. This key is important for the restoration process.

::: danger **IMPORTANT** 
Save this `APP_KEY` safely. Without it, you cannot restore your backup.
:::


## 3. Back Up Your Coolify SSH Private and Public Key
Coolify generates one (or more) SSH key files under `/data/coolify/ssh/keys`. If you restore Coolify onto a new machine, you must bring those key files along so your managed servers remain reachable.

1. **Locate the SSH Key on the Old Host:** 
   ```sh
   ls -l /data/coolify/ssh/keys
   ```
   
   You should see one or more files named like:
   ```sh
   ssh_key@<random_id1>
   ssh_key@<random_id2>
   ssh_key@<random_id3>
   ```
   
   Each `ssh_key@…` entry represents an ED25519 key that Coolify uses to SSH into your servers.
   
2. **Copy all these SSH key files to your new host server and store them in a secure location (we will need this later on this guide).**  

3. **Retrieve public keys:**

    Retrieve the public keys from your old server's `~/.ssh/authorized_keys` file and append them to the new server's `~/.ssh/authorized_keys` file (do not replace existing entries). 


## 4. Prepare Your New Server
Set up your new server where you will restore your Coolify instance.

1. **Install a Fresh Coolify Instance:**  
    Follow the [installation instructions](/get-started/installation) to install Coolify on your new server. 
    
    Be sure to include the correct version number (example: `-s 4.0.0-beta.400`) at the end of the installation script to ensure you're installing the same Coolify version as before.
    
    For example, to install version `4.0.0-beta.400`, use this command:
    ```sh
    curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash -s 4.0.0-beta.400
    ```
    Remember to replace `4.0.0-beta.400` with the desired version number.


2. **Verify the Installation:**  
   Access your new Coolify instance on your browser. A fresh installation will show the registration page, indicating that no data exists yet.


## 5. Transfer and Restore the Backup
1. **Transfer the Backup File:**  
   Copy the backup file and SSH keys to the new server. You can do this via SCP, FTP, or any other secure file transfer method.
   
2. **Stop Coolify:**  
   ```sh
   docker stop coolify coolify-redis coolify-realtime coolify-proxy
   ```

3. **Run the Restore Command:**  
   Use the PostgreSQL restore tool to import your backup into the database container.
   ```sh
   cat /path/to/your_backup_file \
     | docker exec -i coolify-db \
       pg_restore --verbose --clean --no-acl --no-owner -U coolify -d coolify
   ```
   You have to replace `/path/to/your_backup_file` with the path of your backup file on the server.

   ::: warning Note:
   Some warnings about existing foreign keys or sequences might appear, these can usually be ignored if the base structure remains intact.
   :::

## 6. Replace the Auto-Generated SSH Key
   Replace the key files under `/data/coolify/ssh/keys`.

1. **Remove any auto-generated keys:**  
  ```sh
  rm -f /data/coolify/ssh/keys/*
  ```

2. **Move your old key files into** `/data/coolify/ssh/keys/`
  
    These are the files you copied to the new host server on [step 3](#_3-back-up-your-coolify-ssh-private-and-public-key)


## 7. Update Environment Settings for Restoration
After restoring the backup, update your environment configuration to allow the new instance to use the old data.

1. **Edit the Environment File:**  
   Open the `.env` file with your preferred text editor:
   ```sh
   nano /data/coolify/source/.env
   ```

2. **Add the Previous APP Key:**  
   Add a new environment variable called `APP_PREVIOUS_KEYS` and paste the value of `APP_KEY` you saved earlier:
   ```yaml
   APP_PREVIOUS_KEYS=your_previous_app_key_here
   ```
   Save and exit the editor.


## 8. Restart Coolify
To apply the restored backup and updated environment settings, restart your Coolify instance using the install script.

1. **Run the Installation Script:**  
   Re-run the Coolify installation command:
    ```sh
    curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash -s 4.0.0-beta.400
    ```
    Remember to replace `4.0.0-beta.400` with the desired version number.

2. **Verify the Restoration:**  
   Visit your Coolify dashboard URL and log in with the same credentials from your previous instance. Your projects, deployments, and settings should now be restored.


## Troubleshooting
- **500 Error on Login or Project Access:**  
  Double-check that the `APP_PREVIOUS_KEYS` variable is correctly set in your `.env` file.

- **Permission Denied Errors:**  
  If you encounter permission issues while accessing directories, change the ownership of the `/data/coolify` directory. Since Coolify uses the root user account, ensure that the ownership is set to **root**:
  ```sh
  sudo chown -R root:root /data/coolify
  ```
  
- **Server is not reachable (Permission denied):** 
  If Coolify cannot SSH into your servers because it doesn’t have the same key files. 
  
  Make sure you copied all of `/data/coolify/ssh/keys/` from the old host, and then placed them under `/data/coolify/ssh/keys/` on the new host. If those files do not exactly match what was on the old server, you will see this error.
  
  Also, ensure that the corresponding public key from the old host's `authorized_keys` file is added to the new host's `~/.ssh/authorized_keys`.

```

---


### hetzner-loadbalancing.md {#knowledge-base-how-to-hetzner-loadbalancing-md}

**File Path**: `knowledge-base/how-to/hetzner-loadbalancing.md`
**Size**: 7747 bytes
**SHA**: `f0aa0ddcbe6ec6922c40899ae1ea2afd1813fff4`

```markdown
---
title: "Load Balancing on Hetzner"
description: "Here you can find the documentation for deploying a loadbalanced application with Coolify on Hetzner."
---

# Load Balancing on Hetzner
Hetzner Cloud is a cloud hosting provider that offers a wide range of services. In this guide, we will show you how to deploy a load-balanced application with Coolify on Hetzner Cloud.

## Introduction

Your application is growing, and you need to scale it. One of the most common ways to scale an application is to use a load balancer. A load balancer distributes incoming traffic across multiple servers, ensuring that no single server is overwhelmed. This can help improve the performance and reliability of your application.

In this guide, we will show you how to deploy a load-balanced application with Coolify on Hetzner Cloud. We will use two (or more) servers to host our application and a load balancer to distribute incoming traffic. We will also show you how to set up a database server if you need one.

::: success Tip
The whole infrastructure costs around ~15€ per month.
:::

## Requirements

- A domain name managed by Hetzner Cloud
- 2 (or more) servers on Hetzner Cloud
- A load balancer on Hetzner Cloud
- Firewall rules to restrict access to your servers
- Optional: A database server on Hetzner Cloud


## Steps

1. ### Buy Servers

    First, you need to buy two (or more) servers on Hetzner Cloud. You can choose the server type and location based on your requirements. Make sure to choose servers with enough resources to run your application.

    ::: warning Caution
    Make sure you create and attach a private network to your servers. This will allow your servers to communicate with each other using a private network.
    :::

    If you don't have an account on Hetzner Cloud, you can sign up with this [referral link](https://coolify.io/hetzner).

2. ### Add & validate them in Coolify

    Once you have bought the servers, you need to add them to Coolify. You can do this by clicking on the `Add Server` button in the Coolify dashboard and following the instructions.

    Coolify will automatically install the necessary software on your servers.

3. ### Optional: Deploy your database

    It is preferable to have a separate database server for your application. Not just for performance reasons, but also for security reasons. Also in this way you can connect your applications to a centralized database server.

    Skip this step if you don't need a database server or if you already have one hosted elsewhere.

    Once you have bought the database server, and added it to Coolify, deploy your preferable database type (MySQL, PostgreSQL, etc.) on it.

    ::: warning Caution
    We won't use a reverse proxy in this guide. We will bind the database to the public IP address of the server. We will use a firewall to restrict access to the database server.

    You can stop them on the `Server` tab and switch to a `None` proxy type.
    :::

    Make sure you set the `Ports Mappings` correctly to allow your application servers to connect to the database server.

    - PostgreSQL: `5432:5432`
    - MySQL: `3306:3306`
    - MariaDB: `3306:3306`
    - MongoDB: `27017:27017`

4. ### Deploy your applications

    Now it's time to deploy your application on the app servers. Details of deploying your application will depend on the type of application you are deploying.

    With Coolify, you can attach more than one server to the same application. This will allow you to deploy your application on multiple servers.

    ::: warning Caution
    We won't use a reverse proxy in this guide. We will bind the application to the public IP address of the server, as the load balancer will handle the routing.

    You can stop them on the `Server` tab and switch to a `None` proxy type.
    :::

    Make sure you set the `Ports Mappings` correctly to forward your application ports to the public IP address of the server.

    If your application uses a database, make sure you update the database connection string to point to the database server.
    ::: success Tip
     Hetzner Cloud has a private network feature that allows you to connect your servers using a private network. This can help improve the security and performance of your application. 
     
     Make sure you enable the private network feature on your servers and use it in the database connection string.
    :::

    Test if your application is working correctly by accessing the public IP address and port of the server in your browser.

5. ### Add & configure the loadbalancer

    Now it's time to add a load balancer to distribute incoming traffic across your servers.

    This loadbalancer will do the following:
    - Distribute incoming traffic across your servers
    - Terminates TLS connections (makes your application secure with HTTPS and forwards the traffic to your servers over HTTP)
    - Health checks your servers and routes traffic to healthy servers

    Your application is running on `port 8000` on both servers and you have a domain name `example.com`.

    1. Go to the Hetzner Cloud Console and click on `Load Balancers` in the left sidebar.
    2. Click on the `Create Load Balancer` button.
    3. Select a region where your servers are located.
    4. Select the private network that you have created for your servers.
    5. Select all servers in the targets section. **Important: `(use the private network)`.**
    6. In the services, delete the default service and add a `TLS Termination` predefined service.
    7. As `Destination Port` enter `8000` (source port should be `443`).
    8. Add a certificate for your domain name. It will generate a certificate for your domain name using Let's Encrypt.
    9. In the `health check` section, configure the health check endpoint to your application health check endpoint. (just an endpoint that returns `200 OK`).
    10. Optional: Sticky sessions can be enabled, which will make sure that a user is always routed to the same server for a time period, otherwise, the load balancer will distribute the traffic randomly across your servers.
    11. Choose an algorithm.
    12. And finally name your load balancer and click on `Create & Buy now`.

    Wait for the load balancer to be created and healthy. Once it's healthy, you can check if your application is accessible via the loadbalancer's IP address.

6. ### Setup DNS

    Now it's time to point your domain name to the `load balancer's IP address`. You can do this by adding an `A` record to your domain name provider's DNS settings.

    1. Go to your DNS settings.
    2. Add an `A` record with the domain name and the value of the load balancer's IP address.
    3. Save the changes and wait for the DNS changes to propagate.

    Once the DNS changes have propagated, you should be able to access your application using your domain name.

7. ### Setup Firewall

    Hetzner Cloud offers a firewall feature that allows you to restrict access to your servers. We will use this feature to restrict access to your servers.

    As the load balancer communicates with your servers over the private network, we only need to add rules for the public IP addresses.

    The `Inbound` rules includes everything that is allowed. Everyting else is blocked by default.

    1. Go to the Hetzner Cloud Console and click on `Firewalls` in the left sidebar.
    2. Click on the `Create Firewall` button.
    3. Add SSH access rule for your IP address to the `Inbound` rules.
    4. Add your servers to the `Apply rule` section.
    5. Name your firewall and click on `Create Firewall`.

    ::: success Tip
    Optional: You can add more rules to allow access to specific ports or IP addresses if needed.
    :::

```

---


### migrate-apps-different-host.md {#knowledge-base-how-to-migrate-apps-different-host-md}

**File Path**: `knowledge-base/how-to/migrate-apps-different-host.md`
**Size**: 18201 bytes
**SHA**: `ef0b93d828c0decac526270bc5ef3de7e8e7193a`

```markdown
---
title: Migrate Applications
description: Guide to migrate applications deployed on Coolify to another server
---

# Migrate Applications to Another Coolify Host

Coolify does not have a built-in option to migrate applications from one server to another. 

You have to manually deploy your app on the new server and copy over your databases and volumes. This guide walks you through that process step by step.

::: info Note
  We assume you already have Coolify installed on your destination server and are ready to migrate your app.
::: 


## 1. Understand Data Persistence
When using Coolify, application data lives in one of two places:

<ZoomableImage src="/docs/images/knowledge-base/how-tos/migrate-apps-different-host/1.webp" />

### Bind mounts
  - When using bind mounts, a host directory or file is mapped into the container. 
  - Any changes made to the directory or file on the host will immediately reflect inside the container.
  - To back up data, simply copy the host directory or file to the new server and update the bind-mount path in your application’s configuration.

### Volume mounts
  - With volume mounts, a Docker volume is created (Coolify usually creates the volume, but you can also set it up yourself.) and used to store application data. 
  - The volume is stored in Docker’s volume directory, typically under `/var/lib/docker/volumes/<VOLUME_NAME>`
  - You can’t just copy that directory directly, instead Docker provides a safe backup-and-restore method using a temporary container. 

::: info Note
  Since bind mounts are simple to migrate by copying files directly, this guide will focus primarily on volume backups.
:::


## 2. Backup and Restore Overview
The [Docker-recommended process](https://docs.docker.com/engine/storage/volumes/#back-up-restore-or-migrate-data-volumes) for volume migration looks like this:

<ZoomableImage src="/docs/images/knowledge-base/how-tos/migrate-apps-different-host/2.webp" />

1. **Mount** your volume into a temporary container.
2. **Archive** the volume’s contents into a tarball.
3. **Copy** the tarball from the container to your host and then delete the temporary container.
4. **Transfer** the tarball to the new server.
5. **Create** a fresh volume on the destination.
6. **Mount** the transferred tarball into a temporary container.
7. **Extract** the archive into the new volume.

This series of steps ensures a consistent, safe backup and restore. Below, we’ll provide ready-to-use scripts and detailed instructions.

---

::: info Note
  The steps below include scripts to help you back up, transfer, and restore volumes easily and interactively. 
  
  They also include checks to ensure volumes and backups exist, to prevent mistakes like restoring to the wrong volume.
:::

## 3. Backup the Volume

1. **SSH into your server** where you have the Docker volume.
2. **Create a script** named `backup.sh`:
    ```sh
    touch backup.sh && chmod +x backup.sh
    ```
3. **Open** `backup.sh` in your editor and paste the following:

    ```sh title="backup.sh"
    #!/bin/bash
    
    # === INPUT PROMPTS ===
    # Prompt for the Docker volume name and set the variable
    read -p "[ Backup Agent ] [ INPUT ] Please enter the Docker volume name to back up: " VOLUME_NAME
    
    # Inform the user of the set volume name
    echo "[ Backup Agent ] [ INFO ] Backup Volume is set to $VOLUME_NAME"
    
    # Check if the entered volume exists
    if ! docker volume ls --quiet | grep -q "^$VOLUME_NAME$"; then
        echo "[ Backup Agent ] [ ERROR ] Volume '$VOLUME_NAME' doesn't exist, aborting backup."
        echo "[ Backup Agent ] [ ERROR ] Backup Failed!"
        exit 1  # Exit if volume doesn't exist
    else
        echo "[ Backup Agent ] [ INFO ] Volume '$VOLUME_NAME' exists, continuing backup..."
    fi
    
    # Prompt for the directory to save the backup
    read -p "[ Backup Agent ] [ INPUT ] Please enter the directory to save the backup (Optional: press enter to use ./volume-backup): " BACKUP_DIR
    # If no directory is entered, default to './volume-backup'
    BACKUP_DIR=${BACKUP_DIR:-./volume-backup}
    
    # Inform the user of the backup location
    echo "[ Backup Agent ] [ INFO ] Backup location is set to $BACKUP_DIR"
    
    # Set the backup file name based on the volume name
    BACKUP_FILE="${VOLUME_NAME}-backup.tar.gz"
    
    # Inform the user of the backup file name
    echo "[ Backup Agent ] [ INFO ] Backup file name is set to $BACKUP_FILE"
    
    # === SCRIPT START ===
    # Check if the backup directory exists
    if [ -d "$BACKUP_DIR" ]; then
        echo "[ Backup Agent ] [ INFO ] Directory '$BACKUP_DIR' already exists, skipping directory creation."
    else
        echo "[ Backup Agent ] [ INFO ] Directory '$BACKUP_DIR' does not exist, creating directory."
        # Create the backup directory, exit if creation fails
        mkdir -p "$BACKUP_DIR" || { 
            echo "[ Backup Agent ] [ ERROR ] Failed to create directory '$BACKUP_DIR', aborting backup."
            echo "[ Backup Agent ] [ ERROR ] Backup Failed!"
            exit 1
        }
    fi
    
    # Perform the backup operation
    echo "[ Backup Agent ] [ INFO ] Backing up volume: $VOLUME_NAME to $BACKUP_DIR/$BACKUP_FILE"
    
    # Run the Docker container to create the backup
    docker run --rm \
      -v "$VOLUME_NAME":/volume \
      -v "$(pwd)/$BACKUP_DIR":/backup \
      busybox \
      tar czf /backup/"$BACKUP_FILE" -C /volume . || { 
        # If the backup fails, print an error message and exit
        echo "[ Backup Agent ] [ ERROR ] Backup process failed, aborting."
        echo "[ Backup Agent ] [ ERROR ] Backup Failed!"
        exit 1
    }
    
    # If everything succeeds, notify the user
    echo "[ Backup Agent ] [ SUCCESS ] Backup completed!"
    ```

4. **Find the volume name** by running:

   ```sh
   docker volume ls
   ```

   Or from Coolify’s **Persistent Storage** page (see below).
   
   <ZoomableImage src="/docs/images/knowledge-base/how-tos/migrate-apps-different-host/3.webp" />
5. **Stop your application** to perform a clean backup.
6. **Run** the script:

   ```sh
   ./backup.sh
   ```

   * When prompted, paste the volume name.
   * Press **Enter** to accept the default backup directory (`./volume-backup`), or type a custom path.
7. **Verify** that you now have a directory (e.g., `volume-backup`) containing `<VOLUME_NAME>-backup.tar.gz`.

---

## 4. Transfer the Backup to the New Server
::: success Tip
  If you already know how to manually transfer the backup file, feel free to move on to the next step.
:::

1. **Create** a second script named `transfer.sh`:
   ```sh
   touch transfer.sh && chmod +x transfer.sh
   ```
   
2. **Open** `transfer.sh` in your editor and paste the following:

    ```sh title="transfer.sh"
    #!/bin/bash
    
    # =============== CONFIG VARIABLES ===============
    SSH_PORT=22
    SSH_USER="root"
    SSH_IP="192.168.1.222"
    SSH_KEY="$HOME/.ssh/local-vm"
    SOURCE_PATH="./volume-backup"
    DESTINATION_PATH="/root/backups/volume-backup"
    MAX_RETRIES=3  # Max number of password attempts
    
    echo "[ Transfer Agent ] [ INFO ] Starting transfer..."
    echo "[ Transfer Agent ] [ INFO ] Trying SSH key: $SSH_KEY"
    echo "[ Transfer Agent ] [ INFO ] Transfer from: $SOURCE_PATH"
    echo "[ Transfer Agent ] [ INFO ] Transfer to: $SSH_USER@$SSH_IP:$DESTINATION_PATH"
    
    # If SSH key file doesn’t exist, fall back to password mode
    if [ ! -f "$SSH_KEY" ]; then
      echo "[ Transfer Agent ] [ WARN ] SSH key '$SSH_KEY' not found. Falling back to password authentication."
      SSH_KEY=""
    fi
    
    # If we need password-based auth, ensure Expect is installed
    if [ -z "$SSH_KEY" ] && ! command -v expect >/dev/null 2>&1; then
      echo "[ Transfer Agent ] [ ERROR ] The package expect is required for password authentication but not installed (Install it manually using sudo apt install expect and try again). Aborting."
      exit 1
    fi
    
    # ---------------------------------------------
    # Helper: test whether $1 (the password) is valid by doing “ssh … exit”
    # Returns 0 if OK, 1 if “Permission denied” (or any other failure)
    test_password_with_expect() {
      local PW="$1"
    
      expect -c "
        log_user 0
        set timeout 15
        spawn ssh -o StrictHostKeyChecking=no -p $SSH_PORT $SSH_USER@$SSH_IP exit
        expect {
          \"*?assword:\" {
            send -- \"$PW\r\"
            expect {
              \"Permission denied\" { exit 1 }
              eof { exit [lindex [wait] 3] }
            }
          }
          eof {
            exit [lindex [wait] 3]
          }
        }
      " >/dev/null 2>&1
    
      return $?
    }
    
    # Prompt up to $MAX_RETRIES times for a correct password
    get_password() {
      local retries=0
      while [ $retries -lt $MAX_RETRIES ]; do
        read -s -p "[ Transfer Agent ] [ INPUT ] Please enter the SSH password for $SSH_USER@$SSH_IP: " SSHPASS
        echo ""
        test_password_with_expect "$SSHPASS"
        if [ $? -eq 0 ]; then
          # Password is correct
          return 0
        else
          echo "[ Transfer Agent ] [ ERROR ] Invalid password. Please try again."
          retries=$((retries + 1))
        fi
      done
    
      echo "[ Transfer Agent ] [ ERROR ] Maximum retries reached. Aborting."
      exit 1
    }
    
    # ---------------------------------------------
    # STEP 0: Attempt SSH-key authentication (if a key is set)
    if [ -n "$SSH_KEY" ]; then
      # Use BatchMode to prevent falling back to password prompt
      ssh -i "$SSH_KEY" -o BatchMode=yes -o StrictHostKeyChecking=no -p "$SSH_PORT" \
        "$SSH_USER@$SSH_IP" exit >/dev/null 2>&1
      RC=$?
      if [ $RC -eq 0 ]; then
        echo "[ Transfer Agent ] [ INFO ] SSH key is valid!"
        USING_KEY=true
      else
        echo "[ Transfer Agent ] [ WARN ] SSH key authentication failed. Falling back to password authentication."
        SSH_KEY=""
        USING_KEY=false
      fi
    else
      USING_KEY=false
    fi
    
    # If key auth failed (or no key), prompt for password
    if [ "$USING_KEY" = false ]; then
      get_password
      echo "[ Transfer Agent ] [ INFO ] Password is valid!"
    fi
    
    # ---------------------------------------------
    # STEP 1: Ensure the full DESTINATION_PATH exists on the remote side.
    echo "[ Transfer Agent ] [ INFO ] Ensuring remote directory '$DESTINATION_PATH' exists..."
    if [ -n "$SSH_KEY" ]; then
      ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no -p "$SSH_PORT" \
        "$SSH_USER@$SSH_IP" "mkdir -p $DESTINATION_PATH" >/dev/null 2>&1
      MKRC=$?
    else
      expect -c "
        log_user 0
        set timeout 5
        spawn ssh -o StrictHostKeyChecking=no -p $SSH_PORT $SSH_USER@$SSH_IP mkdir -p $DESTINATION_PATH
        expect {
          \"*?assword:\" {
            send -- \"$SSHPASS\r\"
            exp_continue
          }
          eof {
            exit [lindex [wait] 3]
          }
        }
      " >/dev/null 2>&1
      MKRC=$?
    fi
    
    if [ $MKRC -ne 0 ]; then
      echo "[ Transfer Agent ] [ ERROR ] Failed to create remote directory. Aborting."
      exit 1
    fi
    
    # ---------------------------------------------
    # STEP 2: Copy only the contents of local “volume-backup” into that folder.
    echo "[ Transfer Agent ] [ INFO ] Initiating file transfer..."
    
    # Capture any SCP stderr in a temp file so we can surface it if something goes wrong
    SCP_LOG="$(mktemp)"
    if [ -n "$SSH_KEY" ]; then
      # Suppress stdout, capture only stderr
      scp -i "$SSH_KEY" -o StrictHostKeyChecking=no -P "$SSH_PORT" -r \
          "$SOURCE_PATH"/. "$SSH_USER@$SSH_IP:$DESTINATION_PATH" > /dev/null 2> "$SCP_LOG"
      SCP_RC=$?
    else
      expect -c "
        log_user 0
        set timeout -1
        spawn scp -o StrictHostKeyChecking=no -P $SSH_PORT -r $SOURCE_PATH/. $SSH_USER@$SSH_IP:$DESTINATION_PATH
        expect {
          \"*?assword:\" {
            send -- \"$SSHPASS\r\"
            exp_continue
          }
          eof {
            exit [lindex [wait] 3]
          }
        }
      " 2> "$SCP_LOG"
      SCP_RC=$?
    fi
    
    if [ $SCP_RC -eq 0 ]; then
      echo "[ Transfer Agent ] [ SUCCESS ] Transfer completed."
      rm -f "$SCP_LOG"
      exit 0
    else
      echo "[ Transfer Agent ] [ ERROR ] Transfer failed."
      while IFS= read -r line; do
        echo "[ Transfer Agent ]    $line"
      done < "$SCP_LOG"
      rm -f "$SCP_LOG"
      exit 1
    fi
    ```
    
3. **Adjust** the variables at the top (`SSH_IP`, `SSH_USER`, `SSH_KEY`, `DESTINATION_PATH`) to match your new server.
4. **Run** the transfer:

   ```sh
   ./transfer.sh
   ```

   * If key-based authentication succeeds, the backup folder copies over via SCP.
   * Otherwise, you’ll be prompted for the SSH password.

---

## 5. Restore the Backup on the New Server

::: info Note
  In this example, we’ll use [Umami Analytics](https://umami.is/?utm_source=coolify.io) (PostgreSQL) to show how you restore a database-backed app. Adjust paths and volume names for your own database.
:::

1. **Deploy your application** on the new server with Coolify, then **stop it** so volumes will be created but won't be in use.
2. **SSH into** the new server and **create** a script called `restore.sh`:

   ```sh
   touch restore.sh && chmod +x restore.sh
   ```
3. **Paste** the following into `restore.sh`:
    ```sh title="restore.sh"
    #!/bin/bash
    
    # === VOLUME NAME INPUT ===
    # Prompt for the target Docker volume name to restore into
    read -p "[ Restore Agent ] [ INPUT ] Enter the target Docker volume name to restore into: " TARGET_VOLUME
    
    # === VOLUME CHECK ===
    # Check if the target volume exists
    if ! docker volume ls --quiet | grep -q "^$TARGET_VOLUME$"; then
      echo "[ Restore Agent ] [ ERROR ] Volume '$TARGET_VOLUME' doesn't exist."
    
      # Ask if the user wants to create the volume
      read -p "[ Restore Agent ] [ INPUT ] Do you want to create a new volume with the name '$TARGET_VOLUME'? (y/N): " create_volume
      if [[ "$create_volume" == "y" ]]; then
        echo "[ Restore Agent ] [ INFO ] Creating volume '$TARGET_VOLUME'..."
        docker volume create "$TARGET_VOLUME" || { 
          echo "[ Restore Agent ] [ ERROR ] Failed to create volume '$TARGET_VOLUME', aborting restore."
          echo "[ Restore Agent ] [ ERROR ] Restore Failed!"
          exit 1
        }
        echo "[ Restore Agent ] [ INFO ] Volume '$TARGET_VOLUME' created successfully."
      else
        echo "[ Restore Agent ] [ INFO ] Volume '$TARGET_VOLUME' doesn't exist and user opted not to create it. Aborting restore."
        echo "[ Restore Agent ] [ ERROR ] Restore Failed!"
        exit 1
      fi
    else
      echo "[ Restore Agent ] [ INFO ] Volume '$TARGET_VOLUME' exists, continuing..."
    fi
    
    # === BACKUP DIRECTORY INPUT ===
    # Prompt for the backup directory (default: ./volume-backup)
    read -p "[ Restore Agent ] [ INPUT ] Enter the backup directory (default: ./volume-backup): " BACKUP_DIR
    BACKUP_DIR=${BACKUP_DIR:-./volume-backup}
    
    # === BACKUP DIRECTORY CHECK ===
    # Check if the backup directory exists
    if [[ ! -d "$BACKUP_DIR" ]]; then
      echo "[ Restore Agent ] [ ERROR ] Backup directory not found: $BACKUP_DIR"
      echo "[ Restore Agent ] [ ERROR ] Restore Failed!"
      exit 1
    fi
    echo "[ Restore Agent ] [ INFO ] Backup directory '$BACKUP_DIR' found, continuing..."
    
    # === BACKUP FILE INPUT ===
    # Prompt for the backup file name
    read -p "[ Restore Agent ] [ INPUT ] Enter the backup file name (e.g., abc123_postgresql.tar.gz): " BACKUP_FILE
    
    # === BACKUP FILE CHECK ===
    # Check if the backup file exists
    if [[ ! -f "$BACKUP_DIR/$BACKUP_FILE" ]]; then
      echo "[ Restore Agent ] [ ERROR ] Backup file not found: $BACKUP_DIR/$BACKUP_FILE"
      echo "[ Restore Agent ] [ ERROR ] Restore Failed!"
      exit 1
    fi
    echo "[ Restore Agent ] [ INFO ] Backup file '$BACKUP_FILE' found, continuing..."
    
    # === SAFETY CONFIRMATION ===
    echo "[ Restore Agent ] [ INFO ] Make sure containers using '$TARGET_VOLUME' are stopped!"
    read -p "[ Restore Agent ] [ INPUT ] Proceed with restore? (y/N): " confirm
    if [[ "$confirm" != "y" ]]; then
      echo "[ Restore Agent ] [ ERROR ] Restore Failed: cancelled by user."
      exit 1
    fi
    
    # === RESTORE START ===
    # Inform the user that restore is starting
    echo "[ Restore Agent ] [ INFO ] Restoring $BACKUP_FILE into volume: $TARGET_VOLUME"
    
    # Run the Docker container to restore the backup
    docker run --rm \
      -v "$TARGET_VOLUME":/volume \
      -v "$(pwd)/$BACKUP_DIR":/backup \
      busybox \
      sh -c "cd /volume && tar xzf /backup/$BACKUP_FILE" || { 
        # If the restore process fails, print an error message and exit
        echo "[ Restore Agent ] [ ERROR ] Docker restore process failed, aborting."
        echo "[ Restore Agent ] [ ERROR ] Restore Failed!"
        exit 1
    }
    
    # If everything succeeds, notify the user
    echo "[ Restore Agent ] [ SUCCESS ] Restore completed!"
    ```

4. **Run** the script:

   ```sh
   ./restore.sh
   ```

   * Enter the **volume name** (from `docker volume ls` command or Coolify's Persistent Storage page).
   * Press **Enter** to accept `./volume-backup`, or type a custom backup path.
   * Enter the backup filename (e.g., `umami_postgresql-backup.tar.gz`).
   * Confirm you want to proceed by typing `y`.
   
---

## 6. Start Your Application
Once the restore finishes, go to Coolify’s dashboard and click **Deploy**. 

Your application should now use the migrated data. If it does not, or if logs show errors then repeat the restore step to ensure all files copied correctly.

::: warning Note
  If the database credentials (username, database name or password) are different on the new server, update them in Coolify’s dashboard to match those from the old server.
  
  <ZoomableImage src="/docs/images/knowledge-base/how-tos/migrate-apps-different-host/4.webp" />
:::

```

---


### ollama-with-gpu.md {#knowledge-base-how-to-ollama-with-gpu-md}

**File Path**: `knowledge-base/how-to/ollama-with-gpu.md`
**Size**: 1117 bytes
**SHA**: `207d557ae5ba2478880f4aaccd1976d032136947`

```markdown
---
title: "Ollama with GPU"
description: "A guide to setup Ollama with GPU with Coolify."
---

# Ollama with GPU
Based on the detailed guide from [geek.sg](https://geek.sg/blog/how-i-self-hosted-llama-32-with-coolify-on-my-home-server-a-step-by-step-guide?ref=coolify.io):

1. **Hardware Requirements**
   - A server with NVIDIA GPU (tested with RTX 3060 12GB)
   - Minimum 32GB RAM recommended
   - Sufficient storage space for models

2. **Software Setup**
   - Install NVIDIA drivers
   - Install NVIDIA Container Toolkit
   - Configure Docker to use NVIDIA runtime

3. **Coolify Configuration**
   - Deploy Ollama through Coolify's one-click installer
   - Modify the Docker compose configuration to include GPU support
   - Add required environment variables for GPU acceleration

4. **Model Management**
   - Pull and manage your preferred LLM models
   - Monitor GPU usage and performance
   - Adjust model parameters as needed

For the complete detailed guide, visit the [original article](https://geek.sg/blog/how-i-self-hosted-llama-32-with-coolify-on-my-home-server-a-step-by-step-guide?ref=coolify.io).


```

---


### private-npm-registry.md {#knowledge-base-how-to-private-npm-registry-md}

**File Path**: `knowledge-base/how-to/private-npm-registry.md`
**Size**: 516 bytes
**SHA**: `913fefe8eb7de7a541d9fe65c1623a868e1867f9`

```markdown
---
title: "Private NPM Registry"
description: "A guide to setup private NPM registry with Coolify."
---

# Private NPM Registry
If you would like to use a private NPM registry with Coolify, you can do so by following the steps below.


1. Add `.npmrc` file to your project root with the following content:

```bash
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
```

2. Add the following environment variables to your project as a `build` variable:

```bash
NPM_TOKEN=your_npm_token
```

3. Deploy your application.

```

---


### raspberry-pi-os.md {#knowledge-base-how-to-raspberry-pi-os-md}

**File Path**: `knowledge-base/how-to/raspberry-pi-os.md`
**Size**: 1979 bytes
**SHA**: `0c0aab0af911d0998dbe5b87b0eaf21bb67fd1aa`

```markdown
---
title: "Raspberry Pi OS Setup Guide"
description: "A guide to install the 64-bit Raspberry Pi OS version to set up Coolify on a Raspberry Pi."
---

# Raspberry Pi OS Setup Guide
## Prerequisites

To run Coolify on a Raspberry Pi, you will need one of the following Raspberry Pi models:
  - Raspberry Pi Zero 2 W
  - Raspberry Pi 400
  - Raspberry Pi 3 (all models)
  - Raspberry Pi 4 (all models)
  - Raspberry Pi 5 (all models)

## Installation

1. Download and install the [Raspberry Pi Imager](https://www.raspberrypi.com/software/) on your computer.

2. Insert your microSD card into your computer's card reader.

3. Open Raspberry Pi Imager and select your device:
   - Click `Choose Device`
   - Select your Raspberry Pi model

4. Select the Operating System:
   - Click `Choose OS`
   - Navigate to `Raspberry Pi OS (other)`
   - Select `Raspberry Pi OS Lite (64-bit)`

   ::: warning Caution
   You must select one of the 64-bit OS versions as Coolify is not compatible with 32-bit versions.
   :::

   ::: info Note
   While you can use the full desktop version `Raspberry Pi OS (64-bit)`/`Raspberry Pi OS Full (64-bit)` or even `Ubuntu`, we recommend the `Raspberry Pi OS Lite` version as it uses fewer resources.
   :::

5. Choose your Storage:
   - Click `Choose Storage`
   - Select your microSD card
   - Double-check you've selected the correct drive to avoid data loss

6. Click `Next` and select `Edit settings` for OS Customization.
   - Navigate to `Services` and enable SSH with a public key.

   ::: warning Caution
   The SSH key must not have a passphrase or 2FA enabled, otherwise you will not be able to complete the onboarding process.
   :::

   - Configure other options as needed

7. Finish the installation onto the SD card.

8. Once complete, insert the microSD card into your Raspberry Pi and power it on.

9. After your Raspberry Pi boots up, proceed with the [Coolify installation](/get-started/installation#quick-installation-recommended).

```

---


### wordpress-multisite.md {#knowledge-base-how-to-wordpress-multisite-md}

**File Path**: `knowledge-base/how-to/wordpress-multisite.md`
**Size**: 1494 bytes
**SHA**: `50a399e9d7bf5ab3bc40945068b3151379e9fde3`

```markdown
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
```

---


### scalability.md {#knowledge-base-internal-scalability-md}

**File Path**: `knowledge-base/internal/scalability.md`
**Size**: 3079 bytes
**SHA**: `1c56d4bd2d752ccc27fcef8093a278c942d60332`

```markdown
---
title: "Scalability"
---

# Scalability

If your application needs load balancing or high availability here are the options you have in Coolify:

- [Traditional Horizontal Scaling](#traditional-horizontal-scaling)
- [Docker Swarm](#docker-swarm)

::: info Pro Tip 
 You don’t need to scale your app if you have 0 users. Start simple and scale as your user base grows!
:::

## Traditional Horizontal Scaling

With traditional horizontal scaling, you can deploy your applications on multiple servers, and then use a load balancer to distribute the traffic across them.

This is the most common type of scaling, and it is easy to understand and implement.

### Coolify requirements
1. **Add servers**
     - You need to add and validate the servers in Coolify.
2. **Set a Docker Registry** for your application
    - **Why?** As several servers will need to access the same built image, it needs to be stored in a shared location.

### Infrastructure requirements
1. **Load balancer**
2. **Firewall** - optional, but recommended

### Examples

Which one is the best?

It depends on your needs, but we recommend the `one domain across multiple servers`.

::: info Tip
We also recommend to use [Hetzner](https://coolify.io/hetzner) (referral link) for the servers.

**(The cloud version of Coolify - and all of our other services - is also using Hetzner)**
:::

#### One domain across multiple servers (Recommended)

![load-balance-one-domain](/images/loadbalancer/one-domain.webp)

- **Pros**:
    - Easy to understand and implement.
    - Easy to manage.
    - Easy to scale.
    - No proxy required on the servers.
    - Healthcheck are available for the application, not for the server - see the other option's cons.
- **Cons**:
    - You need a firewall on each server to prevent the servers from being accessed directly - most VPS providers has software firewalls.

#### Multiple domains across multiple servers (Recommended, but more complex)

![load-balance-multiple-domains](/images/loadbalancer/multiple-domains.webp)

- **Pros**:
    - Easy to understand and implement.
    - Easy to manage.
    - Easy to scale.
    - Requires a proxy on the servers - Coolify automatically configures the proxy for you, but it is +1 component that can fail.
    - "Less expensive" (as one server can host multiple applications).
- **Cons**:
    - As a plus proxy is added, there is a small performance hit as the proxy needs to be initialized on each server - not noticable for most use cases.
    - You need bigger servers to host more applications, as more applications will be running on the same server.
    - Healthcheck are not available for each application, only for the server.



## Docker Swarm

Coolify supports Docker Swarm (experimental). You can read more about it [here](/knowledge-base/docker/swarm).


## Kubernetes (planned)

It is just planned, but not in the roadmap yet, so no ETA.
Coolify will eventually support Kubernetes. This will allow you to use the full power of Kubernetes, with the added benefit of having a web interface to manage your applications.
```

---


### terminal.md {#knowledge-base-internal-terminal-md}

**File Path**: `knowledge-base/internal/terminal.md`
**Size**: 1931 bytes
**SHA**: `db43c90ffec26262e429ffe680b6899089990614`

```markdown
---
title: "Terminal"
---

# Terminal

**Coolify** provides a powerful **built-in web terminal** that offers seamless access to all your resources directly from your browser. This feature enhances your ability to manage and interact with your infrastructure efficiently.

Key features:

1. **Universal Access**: Available for all resources **managed by Coolify**. Any containers or servers.
2. **Supports colors, text editing, and more**: Uses [xterm.js](https://xtermjs.org/) under the hood, so you get a fully featured terminal experience.
3. **Eliminates the need for external SSH clients**: This integrated terminal eliminates the need for external SSH clients or complex connection setups, streamlining your workflow and improving productivity.

#### Is it secure?

Yes, it is. The terminal commands are executed within the Coolify environment and through a secure SSH connection, so you can be sure that your commands are executed securely.

#### How to access?

You can access the terminal from the sidebar.

#### How does it works **exactly**?

The terminal is a web-based interface that allows you to interact with your resources using a terminal emulator and the web-to-terminal communication is passed through a Websocket connection.

After that, it creates a new process on the Terminal server (inside Coolify's realtime container) and connects to your main Coolify instance container, via SSH. 

But the connection is not direct, it goes first through a Websocket connection, requiring an authentication to do so, after that, the connection is established inside Coolify's main Instance (host server), to make sure that we have the permissions to access the resources.

And then, the process inside the Coolify's main Instance container, establishes a new SSH connection to the target resource (container or server). Lets see a diagram explaining it better:

![terminal-diagram](/images/terminal/terminal-diagram.webp)
```

---


### monitoring.md {#knowledge-base-monitoring-md}

**File Path**: `knowledge-base/monitoring.md`
**Size**: 412 bytes
**SHA**: `201f85f7a08ab93def37f686ea24bd46e60677c6`

```markdown
---
title: Monitoring
---

# Monitoring
Coolify has a built-in monitoring system, which can be used to monitor your resources and send notifications to your team if something goes wrong.

Currently Coolify monitors the following resources:

- Disk usage - If your disk usage is above the configured threshold, it does an automatic cleanup.
- If any of your containers are stopped or restarted.
- Backup status.


```

---


### notifications.md {#knowledge-base-notifications-md}

**File Path**: `knowledge-base/notifications.md`
**Size**: 7796 bytes
**SHA**: `9d8f927b02400a0234498061d59ea4ef4615f0d1`

```markdown
---
title: "Notifications"
description: "A comprehensive guide on setting up and using notifications in Coolify"
---

# Notifications

Coolify provides a robust notification system that supports multiple channels. You can configure notifications in the **Notifications** tab of your Coolify dashboard.

## Notification Providers

Below are guides for setting up supported notification providers in Coolify.

### Email

::: info
Email notifications can be configured using either SMTP or Resend.
:::


1. Navigate to **Notifications** → **Email**

2. Choose your email provider:
   - Use system wide (transactional) email settings (if you self-host Coolify, you can set this up in the Instance Settings - If you use Coolify Cloud, this is set up for you).
   - SMTP Server
   - Resend

3. Configure your chosen provider:

#### System-Wide Email Settings
   - Enable the `Use system wide (transactional) email settings` checkbox
   - If you're setting this up yourself, please refer to the [SMTP Server Configuration](#smtp-server-configuration) section below for detailed settings.

#### SMTP Server Configuration
- Fill in the following fields:
  - `From Name` - Display name for the sender
  - `From Address` - Email address notifications will come from
  - `Host` - SMTP server hostname (e.g., smtp.mail.com)
  - `Port` - SMTP port:
    - Port 587 - StartTLS port (most widely supported)
    - Port 465 - TLS/SSL port (recommended for highest security)
  - `Username` - SMTP authentication username
  - `Password` - SMTP authentication password
  - `Encryption` - Choose your encryption method:
    - StartTLS - Starts unencrypted then upgrades to TLS via StartTLS (typically used with port 587)
    - TLS/SSL - Uses TLS encryption from the start (typically used with port 465 - automatically puts `ssl://` in front of the host)
    - None - No encryption (NOT recommended as it is highly insecure)
  - `Timeout` - Connection timeout in seconds
- Enable the SMTP Server via the `Enabled` checkbox

::: success Tip
   We recommend using TLS/SSL encryption with port 465 for the most secure connection. This provides encryption from the start of the connection.
:::

::: info
   Some hosting providers have specific port restrictions. For example, Hetzner blocks port 465 by default. Check with your hosting provider about port availability and any required configuration changes.
::: 

#### Resend Configuration
   - Enter your `Resend API Key`
   - Enable the `Resend` checkbox

4. Click `Send Test Email` to verify your setup


### Telegram


1. Initial Setup (Setup only possible on phone)
   - Create a Telegram account using your phone number
   - Open the Telegram app on your phone
   - Go to **Settings** → **Profile**
   - Set up a username (recommended)

2. Create Your Bot
   - Message [@BotFather](https://t.me/botfather)
   - Send the `/newbot` command
   - Follow BotFather's instructions to create your bot
   - Copy the `Bot Token` when displayed

::: info
  After copying your bot token, delete the message containing it from Telegram. Store the token securely as anyone with access to it can control your bot.
:::

3. Create and add your bot to a group
   - Create a new group in Telegram
   - Add your bot to the group (you can add it by using the bot name chosen while creating the bot)

4. Make the bot an admin of the group
   - Click on the group name
   - Locate the members list
   - Click on the bot name
   - Click on **Add to group or channel**
   - Choose the group
   - Enable the `admin` toggle
   - Click on **Add bot as admin**

5. Enable Topics (Optional, Setup only possible on phone)
   - Open the group on your phone
   - Tap the group name
   - Tap the pencil icon (edit)
   - Find and enable **Topics** (this enables threads for the group)
   - You can now create topics using the 3-dot menu in the group (also works on desktop)

6. Get Required IDs
   - Visit: `https://api.telegram.org/bot{YOUR_BOT_TOKEN}/getUpdates` (Replace `{YOUR_BOT_TOKEN}` with your actual bot token)
   - Send a test message in your group or thread/topic
   - Find these values in the response:
     - `Chat ID`: Look for `"chat": {"id": -100XXXXXXXXX,` (for groups/channels, the chat ID usually starts with `-100`)
     - `Thread/Topic ID` (if using threads): Look for `"message_thread_id":XXXXX,`

7. Configure Coolify
   - Go to **Notifications** → **Telegram**
   - Enter your `bot token` (from step 2)
   - Enter the `chat ID` (include the `-` minus sign if present)
   - Enter the `thread/topic ID` (only if you are using threads)
   - Save settings
   - Enable the Telegram channel
   - Send a `Test notification`


::: info
  Common issues:
  - Make sure the bot is an admin in the group/channel
  - Include the minus sign (-) in the chat ID if present
  - If `getUpdates` returns an empty response, send another message and try again
  - if you can not acces `getUpdates` make sure you have the correct bot token and you have replace the `{YOUR_BOT_TOKEN}` with your actual bot token (replace everything including the quotes)
:::

### Discord


1. Create a Discord Server and Channel
   - Create a new server or use an existing one
   - Create a new text channel for Coolify notifications

2. Create a webhook
   - Open Discord server settings
   - Go to **Integrations** → **Webhooks**
   - Click **New Webhook**
   - Choose the channel you created for Coolify notifications
   - Copy the `webhook URL`

3. Configure in Coolify:
   - Go to **Notifications** → **Discord**
   - Paste the `webhook URL` in the Webhook URL field
   - Save the settings
   - Enable the Discord channel
   - Send a `Test notification`


::: info
  See [Discord's Webhook Guide](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) for more detailed setup instructions.
:::

### Slack


1. Create a Slack App
   - Visit [Slack API](https://api.slack.com/apps)
   - Click **Create New App** → **From scratch**
   - Choose your workspace

2. Enable webhooks:
   - Go to **Incoming Webhooks**
   - Toggle **Activate Incoming Webhooks**
   - Click **Add New Webhook to Workspace**
   - Choose a channel for Coolify notifications
   - Copy the `webhook URL`

3. Configure in Coolify:
   - Go to **Notifications** → **Slack**
   - Paste the `webhook URL` in the Webhook URL field
   - Save the settings
   - Enable the Slack channel
   - Send a `Test notification`


### Pushover (Push Notifications)


1. Get User Key
   - Log in or sign up at [Pushover](https://pushover.net)
   - Copy your `User Key` from the top right of the page

2. Create an Application
   - Visit [Create Application](https://pushover.net/apps/build)
   - Fill in application details
   - Create the application
   - Copy the `API Token/Key` from the top left of the page

3. Configure in Coolify:
   - Go to **Notifications** → **Pushover**
   - Enter your `User Key` (from step 1)
   - Enter the `API Key` from your created application (from step 2)
   - Save the settings
   - Enable the Pushover channel
   - Send a `Test notification`


::: info
  Pushover allows you to receive notifications on multiple devices including iOS, Android, and desktop.
:::

## Notification Events

You can configure which events trigger notifications in your notification settings:

### Deployments
  - Deployment Success
  - Deployment Failure
  - Container Status changes

### Backups
  - Backup Success
  - Backup Failure

### Scheduled Tasks
  - Task Success
  - Task Failure

### Server Events
  - Docker Cleanup Success
  - Docker Cleanup Failure
  - High Disk Usage Alerts
  - Server Status Updates

::: success Multiple Channels
  You can configure different events for each notification channel. For example, you can send deployment failure notifications to Email and successes to Slack.
:::
```

---


### oauth.md {#knowledge-base-oauth-md}

**File Path**: `knowledge-base/oauth.md`
**Size**: 1796 bytes
**SHA**: `b665c7a0d723164036eef29c1f0d54340f83320c`

```markdown
---
title: "OAuth"
description: "A guide on how to setutp OAuth login to Coolify"
---

# OAuth
You can login to coolify with email/password, or with OAuth.
Using OAuth, you can delegate authorization to get a user's email address to an external IDP provider. This lets coolify know that the user owns a specific email address associated with an existing coolify user. This is an alternative to forcing the user to provide a password to coolify to prove they own that same email address. Authorization servers supported by coolify include Azure, BitBucket, Github, Gitlab, and Google.

## Setup OAuth

To setup OAuth for a given IDP, you need to get a client id and a client secret from the authorization server to put into **YOUR_COOLIFY_DASHBOARD**/settings/oauth.
You'll also need to set a Redirect URI for the authorization server to send the user's data back to once they have authorized coolify to access their email address.
The Redirect URI to provide to the IDP should be in the format of **YOUR_COOLIFY_DASHBOARD**/auth/*PROVIDER*/callback for example.com : https://coolify.example.com/auth/google/callback

- [Google OAuth](https://support.google.com/cloud/answer/6158849?hl=en)
  - Authorized JavaScript origins should be **YOUR_COOLIFY_DASHBOARD**
  - Authorized redirect URIs should be the redirect uri you set in **YOUR_COOLIFY_DASHBOARD**/settings/oauth for google. for example.com :   https://coolify.example.com/auth/google/callback
- [Github OAuth](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app)
  - Homepage URL should be **YOUR_COOLIFY_DASHBOARD**
  - Authorization callback URL should be the redirect uri you set in **YOUR_COOLIFY_DASHBOARD**/settings/oauth for github. for example.com : https://coolify.example.com/auth/github/callback
```

---


### overview.md {#knowledge-base-overview-md}

**File Path**: `knowledge-base/overview.md`
**Size**: 284 bytes
**SHA**: `e9330091effc8866c1509bbd1c969640c91f166e`

```markdown
---
title: Overview
---

# Overview


::: danger Note:
  **This Knowledge Base sections is in active development, some contents may not be up to date. They will be updated soon.**

  **Browse through the pages on the sidebar on this knowledge base section for more information.**
:::

```

---


### persistent-storage.md {#knowledge-base-persistent-storage-md}

**File Path**: `knowledge-base/persistent-storage.md`
**Size**: 1633 bytes
**SHA**: `b782b58e1e1de5fb5af3b323827fae519f0cb460`

```markdown
---
title: "Persistent Storage"
---

# Persistent Storage
You could add persistent storage to your resources, so you can preserve your data between deployments.

This persistent storage could be different in different types of Destinations.

## Docker Engine

If you are using Docker Engine, persistent storage could be a `volume` or a `bind mount` (a file/directory from the host system - your server).

### Volume

To create a volume, you need to define:

- `Name` of the volume.
- `Destination Path` where the volume will be mounted inside the container.

::: warning Caution
  The base directory inside the container is `/app`. So if you need to store
  your files under `storage` directory, you need to define `/app/storage` as the
  destination path.
:::

::: success Tip
  To prevent storage overlapping between resources, Coolify automatically adds
  the resource's UUID to the volume name.
:::

### Bind Mount

To create a bind mount, you need to define:

- `Name` of the volume, which will be used as a reference.
- `Source Path` from the host system. **No docker volume created in this case.**
- `Destination Path` where the volume will be mounted inside the container.

::: warning Caution
  The base directory inside the container is `/app`. So if you need to store
  your files under `storage` directory, you need to define `/app/storage` as the
  destination path.
:::

::: warning Caution
  Share file between more than one container? **NOT RECOMMENDED.**

  If you mount the same file to more than one container, you will need to make sure that the proper file locking mechanism is implemented in your resources.
:::
```

---


### basic-auth.md {#knowledge-base-proxy-caddy-basic-auth-md}

**File Path**: `knowledge-base/proxy/caddy/basic-auth.md`
**Size**: 2253 bytes
**SHA**: `a067966c0ee7f145bdb3f98dbfbedd282556e4bf`

```markdown
---
title: Caddy Basic Auth
---

# Caddy Basic Auth

Basic authentication provides an extra layer of security for your applications by requiring a username and password to access protected resources. 

With Coolify, you can easily integrate basic auth into your Caddy web server configuration.

## Why Use Basic Auth with Caddy?
1. **Enhanced Security:** Adds an extra barrier to prevent unauthorized access.
2. **Simplicity:** Straightforward configuration that integrates directly into your Caddy setup.
3. **Flexibility:** Configure different credentials for different services as needed.


## 1. Generate a Hashed Password
For Caddy to validate credentials securely, your password must be hashed using Caddy's built-in tool. The basic auth credential is set as:

```sh
caddy_0.basicauth.<username>="<hashed_password>"
```

The `<hashed_password>` **must be generated with the Caddy CLI** using the `caddy hash-password` command.


### How to Generate a Hashed Password
1. Open your terminal.
2. Run the following command:
   ```sh
   caddy hash-password --plaintext "your_plaintext_password"
   ```
   Replace `"your_plaintext_password"` with your actual password.

3. The output will be a hashed password that you can use directly in your Caddy configuration.

For more details and advanced options (like choosing a different algorithm), refer to the [Caddy CLI documentation ↗](https://caddyserver.com/docs/command-line#caddy-hash-password?utm_source=coolify.io).


## 2. Configure Basic Auth in Coolify
Once you have your hashed password, integrate it into your Coolify configuration.

1. **Add the Basic Auth Entry:**
   - Add the following line to the Caddyfile of the application where you want to enable basic authentication:
     ```sh
     caddy_0.basicauth.<username>="<hashed_password>"
     ```
     - Replace `<username>` with your desired username and `<hashed_password>` with the output from the `caddy hash-password` command:

2. **Apply the Configuration:**
   - Save your configuration changes.
   - Restart your application to apply the new settings.


::: warning Note
Make sure that your hashed password is generated **only** using the Caddy CLI. 

Using an unrecognized hash method may result in authentication failures.
:::

```

---


### overview.md {#knowledge-base-proxy-caddy-overview-md}

**File Path**: `knowledge-base/proxy/caddy/overview.md`
**Size**: 1910 bytes
**SHA**: `73b4be24dd33a877450173b881a0451f043b2713`

```markdown
---
title: "Caddy Overview"
---

# Caddy Proxy
[Caddy ↗](https://caddyserver.com/) is an easy-to-use, open-source web server and reverse proxy that automatically manages SSL/TLS certificates. It's known for its simplicity and automation, especially when it comes to securing your websites.  

While [Traefik ↗](https://traefik.io/) is the default reverse proxy used in Coolify, Caddy is another option you can explore if you prefer its simplicity or unique features.


## Why Use Caddy?  
- Caddy automatically generates and renews SSL certificates for your sites, making it extremely easy to secure your applications.  
- Caddy uses a simple, declarative configuration file (Caddyfile), making it beginner-friendly.  
- Caddy comes with features like reverse proxying, load balancing, HTTP/2, and more out of the box without needing extra plugins.  
- If you’re looking for a proxy that “just works” with minimal configuration, Caddy can be a great choice.  


## When Not to Use Caddy?  
- If you need advanced proxying features like dynamic routing, middleware, or complex load balancing, Traefik might be a better choice.  
- Since Coolify primarily uses Traefik, certain configurations in Caddy might require additional manual setup.  


## A Note from the Coolify Team  
While Caddy is a fantastic tool for certain use cases, **we highly recommend** using **Traefik** over Caddy for most Coolify setups. 

The [Core team](/get-started/team) primarily uses Traefik, and it is the default reverse proxy configured within Coolify.  

Only consider using Caddy if you're familiar with it or need specific features that Traefik cannot provide.  

At the moment, we do not have detailed guides for Caddy because it is not our primary reverse proxy, and using it may require more manual configuration.  

If you choose to use Caddy, please make sure you are comfortable with configuring it yourself.


```

---


### basic-auth.md {#knowledge-base-proxy-traefik-basic-auth-md}

**File Path**: `knowledge-base/proxy/traefik/basic-auth.md`
**Size**: 5976 bytes
**SHA**: `ba6d3f08d5ab56dec78f8e45ffcc791918cc9c1d`

```markdown
---
title: "Basic Auth Middleware"
---

# Basic Auth Middleware
The configuration is slightly different for [`Standard Applications`](#standard-applications) and [`Docker Compose based applications/one-click services`](#docker-compose-and-services).

## Standard Applications

```bash
traefik.http.middlewares.<random_unique_name>.basicauth.users=test:$2y$12$ci.4U63YX83CwkyUrjqxAucnmi2xXOIlEF6T/KdP9824f1Rf1iyNG
traefik.http.routers.<unique_router_name>.middlewares=<random_unique_name>
```

In the example above, we are using `test` as username and `test` as password.

::: info
You most likely have a `traefik.http.middlewares` label already set. In that case, you must append the `random_unique_name` middleware to the existing value.
For example:

  ```bash
  traefik.http.routers.<unique_router_name>.middlewares=gzip,<random_unique_name>
  ```
:::

Note: The `<random_unique_name>` and `<unique_router_name>` are placeholders. You need to replace them when you add them to your own labels section.
The `<random_unique_name>` is a unique name for the middleware and you need to make that up yourself. The `<unique_router_name>`
is the unique name for the router that Coolify has already generated for you.

### An ngnix Simple Web Container Example

Let's say you have an ngnix simple web container that was generated by Coolify with the following Dockerfile:
```Dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
```

The  `Container Labels` generated by Coolify would look like this:

```bash
traefik.enable=true
traefik.http.middlewares.gzip.compress=true
traefik.http.middlewares.redirect-to-https.redirectscheme.scheme=https
traefik.http.routers.http-0-wc04wo4ow4scokgsw8wow4s8.entryPoints=http
traefik.http.routers.http-0-wc04wo4ow4scokgsw8wow4s8.middlewares=redirect-to-https
traefik.http.routers.http-0-wc04wo4ow4scokgsw8wow4s8.rule=Host(`ngnixsite.mysite.com`) && PathPrefix(`/`)
traefik.http.routers.http-0-wc04wo4ow4scokgsw8wow4s8.service=http-0-wc04wo4ow4scokgsw8wow4s8
traefik.http.routers.https-0-wc04wo4ow4scokgsw8wow4s8.entryPoints=https
traefik.http.routers.https-0-wc04wo4ow4scokgsw8wow4s8.middlewares=gzip
traefik.http.routers.https-0-wc04wo4ow4scokgsw8wow4s8.rule=Host(`ngnixsite.mysite.com`) && PathPrefix(`/`)
traefik.http.routers.https-0-wc04wo4ow4scokgsw8wow4s8.service=https-0-wc04wo4ow4scokgsw8wow4s8
traefik.http.routers.https-0-wc04wo4ow4scokgsw8wow4s8.tls.certresolver=letsencrypt
traefik.http.routers.https-0-wc04wo4ow4scokgsw8wow4s8.tls=true
traefik.http.services.http-0-wc04wo4ow4scokgsw8wow4s8.loadbalancer.server.port=80
traefik.http.services.https-0-wc04wo4ow4scokgsw8wow4s8.loadbalancer.server.port=80
caddy_0.encode=zstd gzip
caddy_0.handle_path.0_reverse_proxy={{upstreams 80}}
caddy_0.handle_path=/*
caddy_0.header=-Server
caddy_0.try_files={path} /index.html /index.php
caddy_0=https://ngnixsite.73rdst.com
caddy_ingress_network=coolify
```

If you want to add basic authentication to this service, assuming you want to name your auth middleware `mybasicauth`, you could add the following label below the
first line `traefik.enable=true`:

`traefik.http.middlewares.mybasicauth.basicauth.users=test:$2y$12$ci.4U63YX83CwkyUrjqxAucnmi2xXOIlEF6T/KdP9824f1Rf1iyNG`

Notice that `mybasicauth` has replaced the `<random_unique_name>` placeholder. In other words, you have named your own auth middleware `mybasicauth`.

Then you need to add the middleware to the router label, and since one or more middlewares are already set, you need to append the new middleware to the existing value.

For example you would update the current line

`traefik.http.routers.https-0-wc04wo4ow4scokgsw8wow4s8.middlewares=gzip`

to:

`traefik.http.routers.https-0-wc04wo4ow4scokgsw8wow4s8.middlewares=gzip,mybasicauth`

Notice that in this case `<unique_router_name>` has been replaced with `https-0-wc04wo4ow4scokgsw8wow4s8` which is the unique name for the router that Coolify has already generated for you.

Your `ngnix` simple web container is protected by basic authentication.

## Docker Compose And Services

To add `basicauth` middleware to your service, you need to add the following labels to your `docker-compose.yml` file.:

```yaml
services:
  ngnix-simple-web-container::
    image: 'nginx:alpine'
    ports:
      - '8080:80'
    labels:
      - 'traefik.http.middlewares.<random_unique_name>.basicauth.users=test:$2y$12$ci.4U63YX83CwkyUrjqxAucnmi2xXOIlEF6T/KdP9824f1Rf1iyNG'
```

You should replace the placeholders `<random_unique_name>` with a unique name for the middleware. For example, you might name it `mybasicauth`, and then
replace the placeholder with `mybasicauth`. That label would then look like this:

```yaml
labels:
  - 'traefik.http.middlewares.mybasicauth.basicauth.users=test:$2y$12$ci.4U63YX83CwkyUrjqxAucnmi2xXOIlEF6T/KdP9824f1Rf1iyNG'
```

We have now added `basicauth` middleware to the `nginx-simple-web-container` service.

Your `ngnix` simple web container is protected by basic authentication with a username of test and password of test.

Note: When applying basic authentication labels, special characters like $, @, and , must be escaped to avoid parsing errors.
That is for example, enclose the label values in quotes and use a backslash (\) before special characters if you're using double quotes.

## How to generate user/password?

You need to set your username and password in the `basicauth.users` label.

You can generate one with the [htpasswd](https://httpd.apache.org/docs/current/programs/htpasswd.html) command:

```bash
htpasswd -nbB test test
```

This will generate a password hash for the user `test` with the password `test`.
You can then replace `test` with the desired username and password. Then substitute the generated hash in the `basicauth.users` label above.

Note: the `htpasswd` command is available on most Linux distributions. It is part of the `apache2-utils` package on Debian/Ubuntu and
can be found [here](https://httpd.apache.org/docs/current/programs/htpasswd.html).

```

---


### dashboard.md {#knowledge-base-proxy-traefik-dashboard-md}

**File Path**: `knowledge-base/proxy/traefik/dashboard.md`
**Size**: 1967 bytes
**SHA**: `e069b89a39def8bdc5776448983f0aa6ac4ececb`

```markdown
---
title: "Enable Dashboard"
---

# Traefik Dashboard
By default, the Traefik dashboard is enabled in secure mode, but not configured to be accessible from the internet.

To enable access from the internet, you need to add a dynamic configuration and secure it with a username and password.


## Secure mode (with Dynamic Configuration)

::: info Tip
  How to configure Traefik's dynamic configuration? [Read more](/knowledge-base/proxy/traefik/dynamic-config)
:::

You can enable Traefik's dashboard by adding the following dynamic configuration:

```yaml
http:
  middlewares:
    auth:
      basicAuth:
        users:
          - "<GENERATED_USERNAME>:<GENERATED_PASSWORD>"
    redirect-to-https:
      redirectScheme:
        scheme: https

  routers:
    dashboard-http:
      rule: Host(`<DOMAIN_FOR_TRAEFIK>`) && (PathPrefix(`/dashboard`) || PathPrefix(`/api`))
      entryPoints:
        - http
      service: api@internal
      middlewares:
        - redirect-to-https

    dashboard-https:
      rule: Host(`<DOMAIN_FOR_TRAEFIK>`) && (PathPrefix(`/dashboard`) || PathPrefix(`/api`))
      entryPoints:
        - https
      service: api@internal
      tls:
        certResolver: letsencrypt
      middlewares:
        - auth
```

Replace `<DOMAIN_FOR_TRAEFIK>`, `<GENERATED_USERNAME>`, and `<GENERATED_PASSWORD>` with your own values.

You can reach the dashboard by visiting `https://<DOMAIN_FOR_TRAEFIK>/dashboard/#/`.


### How to generate user/password?
You can generate one with the [htpasswd](https://httpd.apache.org/docs/current/programs/htpasswd.html) command:

```bash
htpasswd -nbB test test
```

Example output:

```bash
test:$apr1$H6uskkkW$IgXLP6ewTrSuBkTrqE8wj/
```


## Insecure Mode (Not Recommended)
If you want to enable the dashboard in insecure mode (without a password), all you need to do is go to the proxy configurations view and change the `insecure` setting to `true`, then restart the proxy..

```yaml
- '--api.insecure=true'
```

```

---


### load-balancing.md {#knowledge-base-proxy-traefik-load-balancing-md}

**File Path**: `knowledge-base/proxy/traefik/load-balancing.md`
**Size**: 5556 bytes
**SHA**: `c568d0e8e0ac6dabf4f943921504791f7ddb4377`

```markdown
---
title: "Load-balancing"
---

# Load-balancing
You can easily use Traefik to loadbalance an application between:

- 2+ servers
- 2+ containers in one server

## 2+ servers

### Prerequisites

1. Make sure you set the right DNS record for your domain. Your loadbalanced domain should point to the server's IP address where you are setting up the loadbalancer.
2. You must deploy your application to more than one servers: read more [here](/knowledge-base/server/multiple-servers).
3. Make sure Traefik is running on all servers.
4. Set your `fqdn` to the fqdn you would like to use to reach your application.
5. After your application are deployed on all servers, you need to make a dynamic configuration for Traefik to loadbalance between your servers in the `/data/coolify/proxy/dynamic` directory.

### Dynamic Configuration

On your Coolify's UI, you can go the your Server settings / Proxy tab where you can add the dynamic configuration.

The following configuration is valid if you would like to use https.

```yaml {16,26,32,33}
http:
  middlewares:
    redirect-to-https:
      redirectscheme:
        scheme: https
    gzip:
      compress: true
  routers:
    lb-http:
      middlewares:
        - redirect-to-https
      entryPoints:
        - http
      service: noop
      # Change <CHANGE_THIS_TO_YOUR_DOMAIN> to your domain, like `example.com` without `https://`
      rule: Host(`<CHANGE_THIS_TO_YOUR_DOMAIN>`)
    lb-https:
      middlewares:
        - gzip
      entryPoints:
        - https
      service: lb-https
      tls:
        certResolver: letsencrypt
      # Change <CHANGE_THIS_TO_YOUR_DOMAIN> to your domain, like `example.com` without `https://`
      rule: Host(`<CHANGE_THIS_TO_YOUR_DOMAIN>`)
  services:
    lb-https:
      loadBalancer:
        servers:
          # Change <CHANGE_THIS_TO_YOUR_IP_ADDRESS> to your servers IP addresses
          - url: 'http://<CHANGE_THIS_TO_YOUR_IP_ADDRESS>'
          - url: 'http://<CHANGE_THIS_TO_YOUR_IP_ADDRESS>'
          # Add any number of servers you want to loadbalance between
    noop:
      loadBalancer:
        servers:
          - url: ''
```

The following configuration is valid if you would like to use http.

```yaml {13,19,20}
http:
  middlewares:
    gzip:
      compress: true
  routers:
    lb-http:
      middlewares:
        - gzip
      entryPoints:
        - http
      service: lb-http
      # Change <CHANGE_THIS_TO_YOUR_DOMAIN> to your domain, like `example.com` without `http://`
      rule: Host(`<CHANGE_THIS_TO_YOUR_DOMAIN>`)
  services:
    lb-http:
      loadBalancer:
        servers:
          # Change <CHANGE_THIS_TO_YOUR_IP_ADDRESS> to your servers IP addresses
          - url: 'http://<CHANGE_THIS_TO_YOUR_IP_ADDRESS>'
          - url: 'http://<CHANGE_THIS_TO_YOUR_IP_ADDRESS>'
          # Add any number of servers you want to loadbalance between
```

## 2+ containers in one server

### Prerequisites

1. Make sure you set the right DNS record for your domain. Your loadbalanced domain should point to the server's IP address where you are setting up the loadbalancer.
2. You must deploy your application to more than one containers in one server.
3. Make sure Traefik is running on the server.

### Dynamic Configuration

The following configuration is valid if you would like to use https.

```yaml {18,26,34,35}
http:
  middlewares:
    redirect-to-https:
      redirectscheme:
        scheme: https
    gzip:
      compress: true
  routers:
    lb-https:
      tls:
        certResolver: letsencrypt
      middlewares:
        - gzip
      entryPoints:
        - https
      service: lb-https
      # Change <CHANGE_THIS_TO_YOUR_DOMAIN> to your domain, like `example.com` without `http://`
      rule: Host(`<CHANGE_THIS_TO_YOUR_DOMAIN>`)
    lb-http:
      middlewares:
        - redirect-to-https
      entryPoints:
        - http
      service: noop
      # Change <CHANGE_THIS_TO_YOUR_DOMAIN> to your domain, like `example.com` without `http://`
      rule: Host(`<CHANGE_THIS_TO_YOUR_DOMAIN>`)
  services:
    lb-https:
      loadBalancer:
        servers:
          # Change <UUID_OR_HOST.DOCKER.INTERNAL>:<PORT> to your containers UUID or host.docker.internal and port
          # UUID is when you mapped a port to the host system
          # host.docker.internal is when you are not exposed any port to the host system
          - url: 'http://<UUID_OR_HOST.DOCKER.INTERNAL>:<PORT>'
          - url: 'http://<UUID_OR_HOST.DOCKER.INTERNAL>:<PORT>'
          # Add any number of containers you want to loadbalance between
    noop:
      loadBalancer:
        servers:
          - url: ''
```

The following configuration is valid if you would like to use http.

```yaml {13,21,22}
http:
  middlewares:
    gzip:
      compress: true
  routers:
    lb-http:
      middlewares:
        - gzip
      entryPoints:
        - http
      service: lb-http
      # Change <CHANGE_THIS_TO_YOUR_DOMAIN> to your domain, like `example.com` without `http://`
      rule: Host(`<CHANGE_THIS_TO_YOUR_DOMAIN>`)
  services:
    lb-http:
      loadBalancer:
        servers:
          # Change <UUID_OR_HOST.DOCKER.INTERNAL>:<PORT> to your containers UUID or host.docker.internal and port
          # UUID is when you mapped a port to the host system
          # host.docker.internal is when you are not exposed any port to the host system
          - url: 'http://<UUID_OR_HOST.DOCKER.INTERNAL>:<PORT>'
          - url: 'http://<UUID_OR_HOST.DOCKER.INTERNAL>:<PORT>'
          # Add any number of containers you want to loadbalance between
```

```

---


### overview.md {#knowledge-base-proxy-traefik-overview-md}

**File Path**: `knowledge-base/proxy/traefik/overview.md`
**Size**: 2885 bytes
**SHA**: `5d074e277e1f82d8ee39256eadabf454f3aff234`

```markdown
---
title: "Traefik Overview"
---

# Traefik Proxy

[Traefik ↗](https://traefik.io/) is a modern, open-source reverse proxy and load balancer designed to handle incoming requests and route them to the appropriate services. It’s widely used in the container ecosystem, making it a perfect fit for projects running on Coolify.

By default, Coolify uses Traefik as its proxy, enabling easy management of routing, SSL certificates, and more, without requiring deep technical expertise.

## Why Use Traefik?

- Dynamically manages routing between your apps and the internet.
- Integrates seamlessly with container orchestrators like Docker or Kubernetes.
- Simplifies SSL/TLS certificate management, including support for [Let's Encrypt ↗](https://letsencrypt.org/).
- Offers advanced features like load balancing and middleware for fine-grained control.
- Comes with a built-in dashboard for monitoring routes and configurations.

## When Not to Use Traefik?

- If you need complete control over every aspect of your reverse proxy.
- If you prefer using another reverse proxy solution like [NGINX ↗](https://nginx.org/en/).
- If you have highly customized or complex routing rules that Traefik might not fully support.

## Ways to Use Traefik with Coolify

Coolify automatically configures Traefik as your proxy. However, you can customize and extend Traefik's functionality based on your needs.

Below are some of the key features and ways you can use Traefik with Coolify:

1. [Basic Authentication](/knowledge-base/proxy/traefik/basic-auth) -> Add username and password protection to your applications.

2. [Custom SSL Certificates](/knowledge-base/proxy/traefik/custom-ssl-certs) -> Use your own SSL certificates instead of automatically generated ones.

3. [Dashboard](/knowledge-base/proxy/traefik/dashboard) -> Enable Traefik’s built-in dashboard for real-time monitoring and insights.

4. [Dynamic Configuration](/knowledge-base/proxy/traefik/dynamic-config) -> Manage dynamic configuration changes like routing rules or middlewares.

5. [Health Checks](/knowledge-base/health-checks) -> Configure health checks to ensure your applications are running smoothly.

6. [Load Balancing](/knowledge-base/proxy/traefik/load-balancing) -> Distribute traffic across multiple app instances for better performance.

7. [Redirects](/knowledge-base/proxy/traefik/redirects) -> Set up HTTP-to-HTTPS redirection or create specific URL redirects.

8. [Wildcard Certificates](/knowledge-base/proxy/traefik/wildcard-certs) -> Secure multiple subdomains with a single SSL certificate.

---

::: danger CAUTION!  
 **Do not make changes to Traefik's configuration unless you are sure of what you are doing. Incorrect settings can make your entire application inaccessible..**

**We highly recommend testing any changes in a development environment before applying them to production.**
:::

```

---


### protect-services-with-authentik.md {#knowledge-base-proxy-traefik-protect-services-with-authentik-md}

**File Path**: `knowledge-base/proxy/traefik/protect-services-with-authentik.md`
**Size**: 2198 bytes
**SHA**: `e47291b6377fdd9459571904557d23d6a42b912f`

```markdown
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
```

---


### redirects.md {#knowledge-base-proxy-traefik-redirects-md}

**File Path**: `knowledge-base/proxy/traefik/redirects.md`
**Size**: 3720 bytes
**SHA**: `0bef33e07310f0ca58c7a5b03c135522073699d4`

```markdown
---
title: "Redirects"
---

# Redirects with Traefik

This guide will help you to configure redirects in Coolify with Traefik.

The configuration is slightly different for `Standard Applications` and `Docker Compose` based applications/one-click services.

## Standard Applications

- You need to set both FQDNs for your resource, so for example: `coolify.io,www.coolify.io`
- Add a unique middleware to your resource.

### www -> non-www

```bash
# A similar line is already defined.
traefik.http.routers.<unique_router_name>.rule=Host(`www.coolify.io`) && PathPrefix(`/`)

# You need to add the middleware to the router.
traefik.http.routers.<unique_router_name>.middlewares=example-middleware

# If you have multiple middlewares, you need to add them comma separated.
# traefik.http.routers.<unique_router_name>.middlewares=gzip,example-middleware
#
traefik.http.middlewares.example-middleware.redirectregex.regex=^(http|https)://www\.(.+)
traefik.http.middlewares.example-middleware.redirectregex.replacement=${1}://${2}
traefik.http.middlewares.example-middleware.redirectregex.permanent=true
```

### non-www -> www

```bash
# A similar line is already defined.
traefik.http.routers.<unique_router_name>.rule=Host(`coolify.io`) && PathPrefix(`/`)

# You need to add the middleware to the router.
traefik.http.routers.<unique_router_name>.middlewares=example-middleware

# If you have multiple middlewares, you need to add them comma separated.
# traefik.http.routers.<unique_router_name>.middlewares=gzip,example-middleware
#
traefik.http.middlewares.example-middleware.redirectregex.regex=^(http|https)://(?:www\.)?(.+)
traefik.http.middlewares.example-middleware.redirectregex.replacement=${1}://www.${2}
traefik.http.middlewares.example-middleware.redirectregex.permanent=true
```

### domain -> other domain

```bash
traefik.http.middlewares.redirect-otherdomain.redirectregex.regex=^(https?://)?source-domain\.com(.*)
traefik.http.middlewares.redirect-otherdomain.redirectregex.replacement=https://target-domain.com${2}
traefik.http.middlewares.redirect-otherdomain.redirectregex.permanent=true
```

If you also need to generate a ssl cert for the target-domain, additionally add a routers entry

```bash
traefik.http.routers.redirect-otherdomain.middlewares=redirect-to-https,redirect-otherdomain
traefik.http.routers.redirect-otherdomain.rule=Host(`target-domain.com`) && PathPrefix(`/`)
traefik.http.routers.redirect-otherdomain.entryPoints=https
traefik.http.routers.redirect-otherdomain.tls.certresolver=letsencrypt
traefik.http.routers.redirect-otherdomain.tls=true
```

## Docker Compose based Applications & one-click Services

- You need to set both FQDNs for your resource, so for example: `coolify.io,www.coolify.io`
- You only need add the middleware to the router.

### www -> non-www

```bash
traefik.http.middlewares.example-middleware.redirectregex.regex=^(http|https)://www\.(.+)
traefik.http.middlewares.example-middleware.redirectregex.replacement=${1}://${2}
traefik.http.middlewares.example-middleware.redirectregex.permanent=true
```

### non-www -> www

```bash
traefik.http.middlewares.example-middleware.redirectregex.regex=^(http|https)://(?:www\.)?(.+)
traefik.http.middlewares.example-middleware.redirectregex.replacement=${1}://www.${2}
traefik.http.middlewares.example-middleware.redirectregex.permanent=true
```

## Debugging

You can check, if the traefik settings have been correctly applied, when inspecting your docker target container.

Find your docker container id
```bash
docker ps
```

Inspect the containers labels

```bash
docker inspect <container-id>
```

You can additionally check the traefik container logs, by running

```bash
docker logs -f coolify-proxy
```


```

---


### wildcard-certs.md {#knowledge-base-proxy-traefik-wildcard-certs-md}

**File Path**: `knowledge-base/proxy/traefik/wildcard-certs.md`
**Size**: 7289 bytes
**SHA**: `108f515846ef13a7b47f31c543fc4f5b422003b2`

```markdown
---
title: "Wildcard SSL Certificates"
description: "A guide to configure wildcard subdomain redirects (with Traefik wildcard certificates) in Coolify."
---

# Setup Wildcard SSL Certificates with Traefik

## Prerequisites

- You need to have a domain name and a DNS provider that supports wildcard subdomains.
- You need to use [dnsChallenge](https://doc.traefik.io/traefik/https/acme/#dnschallenge) in Traefik to get wildcard certificates from Let's Encrypt.
- You need to use one of the supported DNS [providers](https://doc.traefik.io/traefik/https/acme/#providers).

::: tip Tip
Each provider needs environment variables to be set in the Traefik configuration. You can find the required variables in the [official documentation](https://doc.traefik.io/traefik/https/acme/#providers).

If you need fine-grained token, like with [Cloudflare](https://go-acme.github.io/lego/dns/cloudflare/), check the provider configurations.
:::

## Configuration

1. Setup your wildcard subdomain DNS records, `*.coolify.io`.
2. Go to your Proxy settings (Servers / Proxy menu) and add the following configuration based on your [providers](https://doc.traefik.io/traefik/https/acme/#providers). The example will use `Hetzner` as a provider.

```bash
version: '3.8'
networks:
  coolify:
    external: true
services:
  traefik:
    container_name: coolify-proxy
    image: 'traefik:v2.10'
    restart: unless-stopped
    environment:
      - HETZNER_API_KEY=<API Key>
    extra_hosts:
      - 'host.docker.internal:host-gateway'
    networks:
      - coolify
    ports:
      - '80:80'
      - '443:443'
      - '8080:8080'
    healthcheck:
      test: 'wget -qO- http://localhost:80/ping || exit 1'
      interval: 4s
      timeout: 2s
      retries: 5
    volumes:
      - '/var/run/docker.sock:/var/run/docker.sock:ro'
      - '/data/coolify/proxy:/traefik'
    command:
      - '--ping=true'
      - '--ping.entrypoint=http'
      - '--api.dashboard=true'
      - '--api.insecure=false'
      - '--entrypoints.http.address=:80'
      - '--entrypoints.https.address=:443'
      - '--entrypoints.http.http.encodequerysemicolons=true'
      - '--entrypoints.https.http.encodequerysemicolons=true'
      - '--providers.docker.exposedbydefault=false'
      - '--providers.file.directory=/traefik/dynamic/'
      - '--providers.file.watch=true'
      # use dnschallenge instead of httpchallenge
      # - '--certificatesresolvers.letsencrypt.acme.httpchallenge=true'
      # - '--certificatesresolvers.letsencrypt.acme.httpchallenge.entrypoint=http'
      - '--certificatesresolvers.letsencrypt.acme.dnschallenge.provider=hetzner'
      - '--certificatesresolvers.letsencrypt.acme.dnschallenge.delaybeforecheck=0'
      - '--certificatesresolvers.letsencrypt.acme.storage=/traefik/acme.json'
      - '--providers.docker=true'
    labels:
      - traefik.enable=true
      - traefik.http.routers.traefik.entrypoints=http
      - traefik.http.routers.traefik.middlewares=traefik-basic-auth@file
      - traefik.http.routers.traefik.service=api@internal
      - traefik.http.routers.traefik.tls.certresolver=letsencrypt
      - traefik.http.routers.traefik.tls.domains[0].main=coolify.io
      - traefik.http.routers.traefik.tls.domains[0].sans=*.coolify.io
      - traefik.http.services.traefik.loadbalancer.server.port=8080
      - traefik.http.middlewares.redirect-to-https.redirectscheme.scheme=https
      - traefik.http.middlewares.gzip.compress=true
```

> You can also set `env_file` instead of `environment` in the example above, but then you need to create a `.env` file with the `HETZNER_API_KEY` variable on the server.

> Change `--certificatesresolvers.letsencrypt.acme.dnschallenge.provider=hetzner` to your provider.

Now you have two options to configure your wildcard subdomain for your resources.

### Normal

If you would like to use one (wildcard) certificate for all of your resources, you can use this option.

It is useful, because Traefik do not need to generate a new certificate for every resource, so new deployments will be available immediately without waiting for the certificate generation.

- In your application, set your FQDN to a subdomain you would like to use: `https://example.coolify.io`.

```bash
traefik.enable=true
traefik.http.routers.<unique_router_name_https>.rule=Host(`example.coolify.io`) && PathPrefix(`/`)
traefik.http.routers.<unique_router_name_https>.entryPoints=https
traefik.http.routers.<unique_router_name_https>.middlewares=gzip
traefik.http.routers.<unique_router_name_https>.service=<unique_service_name>
traefik.http.routers.<unique_router_name_https>.tls=true
traefik.http.services.<unique_service_name>.loadbalancer.server.port=80
traefik.http.routers.<unique_router_name_https>.tls.certresolver=letsencrypt

traefik.http.routers.<unique_router_name_http>.rule=Host(`example.coolify.io`) && PathPrefix(`/`)
traefik.http.routers.<unique_router_name_http>.entryPoints=http
traefik.http.routers.<unique_router_name_http>.middlewares=redirect-to-https
```

### SaaS

Redirect all subdomains to one application. You can use this option if you want to use Coolify as a SaaS provider.

- In your application, leave the FQDN configuration `empty`.
- Add the following custom label configuration:

:::tabs key:saas
== Traefik v3

```bash
traefik.enable=true
traefik.http.routers.<unique_router_name_https>.rule=HostRegexp(`^.+\.coolify\.io$`)
traefik.http.routers.<unique_router_name_https>.entryPoints=https
traefik.http.routers.<unique_router_name_https>.middlewares=gzip
traefik.http.routers.<unique_router_name_https>.service=<unique_service_name>
traefik.http.routers.<unique_router_name_https>.tls.certresolver=letsencrypt
traefik.http.services.<unique_service_name>.loadbalancer.server.port=80
traefik.http.routers.<unique_router_name_https>.tls=true

traefik.http.routers.<unique_router_name_http>.rule=HostRegexp(`^.+\.coolify\.io$`)
traefik.http.routers.<unique_router_name_http>.entryPoints=http
traefik.http.routers.<unique_router_name_http>.middlewares=redirect-to-https
```

== Traefik v2

```bash
traefik.enable=true
traefik.http.routers.<unique_router_name_https>.rule=HostRegexp(`{subdomain:[a-zA-Z0-9-]+}.coolify.io`)
traefik.http.routers.<unique_router_name_https>.entryPoints=https
traefik.http.routers.<unique_router_name_https>.middlewares=gzip
traefik.http.routers.<unique_router_name_https>.service=<unique_service_name>
traefik.http.routers.<unique_router_name_https>.tls.certresolver=letsencrypt
traefik.http.services.<unique_service_name>.loadbalancer.server.port=80
traefik.http.routers.<unique_router_name_https>.tls=true

traefik.http.routers.<unique_router_name_http>.rule=HostRegexp(`{subdomain:[a-zA-Z0-9-]+}.coolify.io`)
traefik.http.routers.<unique_router_name_http>.entryPoints=http
traefik.http.routers.<unique_router_name_http>.middlewares=redirect-to-https
```

:::

> `traefik.http.routers.<unique_router_name_https>.tls.certresolver` should be the same as your `certresolver` name in Traefik proxy configuration, by default `letsencrypt`.

> `traefik.http.services.<unique_service_name>.loadbalancer.server.port` should be the same as your application listens on. Port 80 if you use a static deployment.

::: warning Caution
You cannot use both configurations (Normal & SaaS) at the same time on one
server.
:::

```

---


### rolling-updates.md {#knowledge-base-rolling-updates-md}

**File Path**: `knowledge-base/rolling-updates.md`
**Size**: 3179 bytes
**SHA**: `07af69ee5e93f2333d9240cf93af781e5f97a29e`

```markdown
---
title: Rolling updates
---

# Coolify Rolling Updates
Rolling updates enable Coolify to seamlessly update your application by starting a new container and gracefully stopping the currently running container. 

This approach minimizes downtime and ensures that your service remains available during updates.


## How Rolling Updates Work
When a new update is initiated, Coolify launches a new container instance while the existing container continues running. 

Once the new container is confirmed healthy, the old container is stopped. This process is referred to as a *rolling update* and helps reduce service interruptions.


## Conditions for Rolling Updates
For rolling updates to function properly, the following conditions must be met:

- **Health Check Configuration:** A valid health check must be configured and passing. 
    - The health check ensures that the new container is fully ready to handle traffic before the old container is terminated. 
    - Without a proper health check, the rolling update process cannot verify the container’s readiness, leading to potential failures.

- **Default Container Naming:** Rolling updates require the use of the default container naming convention. 
    - If you set a custom container name, the update process may not be able to correctly manage container instances, which can prevent the rolling update from executing as expected.

- **Shouldn’t be Docker Compose:** Rolling updates are not supported on Docker Compose-based deployments.
    - Docker Compose deployments uses static container names, the update process may not be able to correctly manage container instances, which can prevent the rolling update from executing as expected.

- **Port Mapping:** If a port is mapped to the host machine, the new container cannot bind to the same port during the update process.
    - This can cause conflicts when trying to route traffic to the new container while the old one is still running, preventing the rolling update from being completed successfully.


## Configuring Health Checks
To ensure successful rolling updates, please verify that your application includes a health check endpoint. 

This endpoint should return a successful response (e.g., HTTP 200) when the container is operating normally. For more details on configuring health checks for your application, please refer to our [Health Check Guide](/knowledge-base/health-checks).


## Troubleshooting Rolling Updates
If you encounter issues with rolling updates, consider the following steps:

1. **Verify Health Check Configuration:** Make sure that your health check endpoint is correctly implemented and returns a valid response. A failing or misconfigured health check will halt the update process.

2. **Review Container Naming:** Confirm that you are using the default container naming convention. If a custom container name is set, rolling updates will not function as intended.

3. **Check Logs:** Review `coolify-proxy` container or your application container logs for any error messages related to the update process. This may provide additional insights into what might be preventing the rolling update from completing successfully.

```

---


### aws.md {#knowledge-base-s3-aws-md}

**File Path**: `knowledge-base/s3/aws.md`
**Size**: 7911 bytes
**SHA**: `a17cb2de300d4e4879bfb211b368bbae0f114d45`

```markdown
---
title: Aws S3 Backup Setup
description: Guide to setup automated coolify backups using aws S3
---


<ZoomableImage src="/docs/images/aws-s3/header.webp" />

Coolify offers automated backups of your instance to an AWS S3 bucket, giving you a hands‑off, reliable way to safeguard your configuration and data.

### Why use AWS S3 with Coolify?  
1. **Enterprise‑grade durability & availability:** S3 is designed for 99.999999999% durability and automatic replication across multiple facilities, so your backups are always safe and accessible.  

2. **Cost‑effective, pay as you go pricing:** Only pay for the storage and requests you actually use, with built‑in lifecycle rules (e.g., transition to Glacier) to optimize long‑term costs.  

3. **Seamless integration** – Coolify’s backup scheduler hooks directly into S3’s API, eliminating the need for custom scripts or third‑party tools and ensuring backups run on a schedule.  


### When to avoid using AWS S3 with Coolify?  
1. **Strict data residency or on‑prem requirements:** If your regulations mandate keeping backups entirely within a private data center, S3’s public cloud model may not comply.  

2. **No external network access:** In environments where outbound internet is blocked, Coolify cannot push snapshots to an S3 endpoint.  

---


::: warning Example Data
The following data is used as an example in this guide. Please replace it with your actual data when following the steps:
  - **S3 Bucket Name:** envix-coolify-backups-s3
  - **IAM Policy Name:** EnvixCoolifyBackupS3Access
  - **IAM Username:** EnvixCoolifyBackupS3User
  - **Endpoint:** https://s3.ap-northeast-2.amazonaws.com
:::

---

::: details TLDR (click to view)
1. Create a bucket in AWS Console
2. Create a custom policy in AWS Console with the following permissions:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:GetObjectAcl",
        "s3:PutObjectAcl",
        "s3:PutObject"
      ],
      "Resource": [
        // rewrite your-bucket-name with your bucket name
        "arn:aws:s3:::your-bucket-name",
        "arn:aws:s3:::your-bucket-name/*"
      ]
    }
  ]
}
```

3. Create an IAM user in AWS Console & attach the policy from the previous step.
4. Go to User settings & create an `Access Key` in AWS Console.
5. Add the `Access Key` and `Secret Key` in Coolify when you create a new S3 source.
   ::: success Tip
     You need to use the S3 HTTP endpoint without the bucket name, for example,`https://s3.eu-central-1.amazonaws.com`.
:::


## 1. Create a S3 Bucket
To create your S3 Bucket, follow these steps:

Visit https://console.aws.amazon.com/s3 and Click on **Create Bucket** button

<ZoomableImage src="/docs/images/aws-s3/1.webp" />

You’ll be asked to choose a name, object ownership, and so on.

<ZoomableImage src="/docs/images/aws-s3/2.webp" />

::: info Note
Leave everything else to default values, only change things if you know what you are doing.
:::

<ZoomableImage src="/docs/images/aws-s3/3.webp" />
<br />
<ZoomableImage src="/docs/images/aws-s3/4.webp" />
<br />
<ZoomableImage src="/docs/images/aws-s3/5.webp" />

Click on **Create Bucket** button

Once the bucket is created you will be redirected to this page:
<ZoomableImage src="/docs/images/aws-s3/6.webp" />


## 2. Create IAM Policy
To create your IAM Policy, follow these steps:

Visit https://console.aws.amazon.com/iam/home#/policies and Click on **Create Policy** button
<ZoomableImage src="/docs/images/aws-s3/7.webp" />
<br />
<ZoomableImage src="/docs/images/aws-s3/8.webp" />

  - Click on **JSON** option and copy paste the following code on the policy editor 
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:GetObjectAcl",
        "s3:PutObjectAcl",
        "s3:PutObject"
      ],
      "Resource": [
        // replace envix-coolify-backups-s3 with your bucket name on below two lines
        "arn:aws:s3:::envix-coolify-backups-s3",
        "arn:aws:s3:::envix-coolify-backups-s3/*"
      ]
    }
  ]
}
```

Scroll down till the bottom of the page and click on the **Continue** button.

Then you’ll be asked to choose a name for the policy:
<ZoomableImage src="/docs/images/aws-s3/9.webp" />

Once you have entered the name, scroll down till the bottom of the page and click on the **Continue** button.

Once the Policy is created you will be redirected to this page:
<ZoomableImage src="/docs/images/aws-s3/10.webp" />
::: success Tip
You won't see the policy you just created, you have to search for it's name on the search box.
:::


## 3. Create a IAM User
To create your IAM User, follow these steps:

Visit https://console.aws.amazon.com/iam/home#/users and Click on **Create user** button
<ZoomableImage src="/docs/images/aws-s3/11.webp" />

You’ll be asked to choose a name for the user:
<ZoomableImage src="/docs/images/aws-s3/12.webp" />
  - Click on **Next** button after you have entered a name for the user.

<ZoomableImage src="/docs/images/aws-s3/13.webp" />
1. Select Attach policies directly option
2. Select the policy we created on the previous step
3. Click on **Next** button

<ZoomableImage src="/docs/images/aws-s3/14.webp" />
  - Click on **Create user** button (you don't have to change anything on this page />

Once the Policy is created you will be redirected to this page:
<ZoomableImage src="/docs/images/aws-s3/15.webp" />
  - Click on the username to create an access key.


## 4. Create an Access Key
After you have clicked on the username on previous step, you will be redirect to this page:
<ZoomableImage src="/docs/images/aws-s3/16.webp" />
  - Click on **Create access key** option to setup a new access key.

<ZoomableImage src="/docs/images/aws-s3/17.webp" />
  - Choose the **Other** option and click on **Continue** button

<ZoomableImage src="/docs/images/aws-s3/18.webp" />
  - Click on **Create access key** button.

<ZoomableImage src="/docs/images/aws-s3/19.webp" />
  - Save the Access Key and Secrete Access Key somewhere safe and click on **Done** button
  ::: warning Note
  You won't able able to see the access key after you click the **Done** button, so make sure to save the keys somewhere safe.
  :::


## 5. Setup S3 in Coolify
To create your setup S3 in Coolify, follow these steps:

In your Coolify dashboard:
<ZoomableImage src="/docs/images/aws-s3/20.webp" />

1. Go to the **Storage** section in the sidebar.
2. Click **Add** button

<ZoomableImage src="/docs/images/aws-s3/21.webp" />

1. Give a name for the S3 storage (this can be any name)
2. Give a short description for the storage (optional)
3. Enter the endpoint without your bucket name: `https://s3.YOUR_REGION_NAME.amazonaws.com`
4. Enter the name of the S3 bucket you created.
5. Enter your S3 bucket's region
6. Enter your Access Key
7. Enter your Secret Access Key
8. Click on **Validate Connection & Continue** button

Once the Bucket is validated you will be redirected to this page:
<ZoomableImage src="/docs/images/aws-s3/22.webp" />

Then go to **settings** page and click on **Backup**
<ZoomableImage src="/docs/images/aws-s3/23.webp" />
<br />
<ZoomableImage src="/docs/images/aws-s3/24.webp" />

1. Enable S3
2. Select your S3 storage
3. Select the frequency of the backup (you can use this [website](https://www.convertloom.com/tools/cron-job-generator) if you are new to cron)
4. Setup Backup Retentions
5. Click on **Backup Now** button (just to check if everything works)

You can see the backups stored on your S3 from the execution logs:
<ZoomableImage src="/docs/images/aws-s3/25.webp" />

Now you’re done! Your Coolify instance is set up to automatically backup and store them on your Aws S3 bucket safely.

```

---


### introduction.md {#knowledge-base-s3-introduction-md}

**File Path**: `knowledge-base/s3/introduction.md`
**Size**: 886 bytes
**SHA**: `cc847e1d641be37aa6bbe520a1fe0d78ea8e7c48`

```markdown
---
title: "Introduction"
description: "A guide how to configure S3 compatible storage for Coolify."
---

# S3 Introduction
Currently supported S3 compatible storages are:

- AWS (see [the AWS guide](/knowledge-base/s3/aws) for a detailed walkthrough)
- DigitalOcean Spaces
- MinIO
- Cloudflare's R2
- Backblaze B2
- Scaleway Object Storage
- Hetzner S3 Storage (beta)
- Wasabi hot cloud storage
- Vultr

Other's could work, but not tested yet. If you test it, please let us know.

## S3 Client

Coolify uses MinIO's client, called [`mc`](https://min.io/docs/minio/linux/reference/minio-mc.html), to copy the backup files to your S3 compatible storage.

## Verification

To be able to use your S3 compatible storage, you need to verify it first. Verification done with `ListObjectsV2` request to your specified bucket.

So you need to create a bucket first, and then you can verify it.

```

---


### r2.md {#knowledge-base-s3-r2-md}

**File Path**: `knowledge-base/s3/r2.md`
**Size**: 685 bytes
**SHA**: `36c50123cd1d7c9ebac90b913e6a877f5e8dbedd`

```markdown
---
title: "Cloudflare R2"
description: "Here you can find the documentation for configuring Cloudflare R2 bucket in Coolify."
---

# Cloudflare R2
Cloudflare R2 is an S3 compatible storage. You can use it with Coolify to store your backups.

# Configuration

1. You need to create a bucket first in the Cloudflare R2 dashboard.
2. Then you need to create a R2 API token with `Object Read & Write` permission.
3. You can find the S3 client credentials when the token is created.
   ::: success Tip
     You will need the `Access Key ID`, `Secret Access Key` and the `S3 endpoint` from this view. Save them.
   :::
4. You can use the details from the previous step to configure Coolify.
```

---


### self-update.md {#knowledge-base-self-update-md}

**File Path**: `knowledge-base/self-update.md`
**Size**: 1486 bytes
**SHA**: `e749ad50cc227ce01929f58b3cc9dc990c597ae7`

```markdown
---
title: "Coolify Instance Updates - Self-hosted"
---

# Coolify Instance Updates - Self-hosted

## Update Settings

You can configure your Coolify instance's update settings on the `Settings` page under the `Update` section.

There are two main update configurations:

1. **Update Check Frequency**
   - Controls how often Coolify checks for:
     - New Coolify versions
     - New Service Templates from CDN
   - Default: Every hour
   - Uses cron syntax

2. **Auto Update Frequency**
   - Controls when Coolify automatically installs updates
   - Default: Daily at midnight (00:00)
   - Uses cron syntax

## Auto Update Toggle

- By default, `Auto Update Enabled` is turned on for self-hosted instances
- You can disable automatic updates which is recommended for production instances. Please note that disabling `Auto Update Enabled` will not disable the update check frequency as updates should be checked periodically.
- If you disable `Auto Update Enabled`, you can still manually update Coolify by clicking the `Update` button once a new version is available.

## Configuring Update Schedules

Both update frequencies use cron syntax for scheduling. For detailed information about the supported cron syntax, please see our [cron syntax guide](/knowledge-base/cron-syntax).

## Version Availability

For details about the availability and versioning scheme of new versions please read the [RELEASE.md](https://github.com/coollabsio/coolify/blob/main/RELEASE.md) file on GitHub:
```

---


### automated-cleanup.md {#knowledge-base-server-automated-cleanup-md}

**File Path**: `knowledge-base/server/automated-cleanup.md`
**Size**: 1807 bytes
**SHA**: `34a49b877cdad335954f2fb424ad3274251882b4`

```markdown
---
title: "Automated Docker Cleanup"
description: "A guide on how to configure the automated Docker cleanup feature in Coolify and what it does."
---

# Automated Docker Cleanup
Coolify includes an automated Docker cleanup feature to prevent servers from running out of disk space. This guide explains how to configure it and what it does.

## Configuration

You can configure the automated cleanup under:
`Servers` > `YOUR_SERVER` > `Configuration` > `Advanced`

### Available Settings

1. **Docker Cleanup Threshold**
   - Sets the disk percentage threshold that triggers the cleanup.
   - Example: If set to 80%, cleanup will be triggered when disk usage exceeds 80%.

2. **Docker Cleanup Frequency**
   - Schedule cleanups using [cron expressions](/knowledge-base/cron-syntax) when `Force Docker Cleanup` is enabled.

::: success Tip
- We recommend enabling `Force Docker Cleanup` and scheduling cleanups using cron syntax.
- This provides more reliable cleanup behavior compared to relying on a disk threshold.
:::

3. **Optional Cleanups**
   - Enable unused volumes cleanup (note: this can lead to data loss).
   - Enable unused networks cleanup.

## How It Works

### Safety Measures
- If there is an ongoing deployment, the cleanup will not be triggered to prevent any issues, like deleting the image that is currently being used.
- Only Coolify-managed resources are affected.

### Cleanup Process
When triggered (either by schedule or disk threshold), the system performs the following actions:

- Removes stopped containers managed by Coolify (no data loss as containers are non-persistent).
- Deletes unused Docker images.
- Clears Docker build cache.
- Removes old versions of Coolify helper images.
- Removes unused Docker volumes (if enabled).
- Removes unused Docker networks (if enabled).
```

---


### build-server.md {#knowledge-base-server-build-server-md}

**File Path**: `knowledge-base/server/build-server.md`
**Size**: 1283 bytes
**SHA**: `7cef956162b2aa05690993f491213d67a51086c0`

```markdown
---
title: "Build Server"
description: "A guide on how to use a build server with Coolify"
---

# Build Server
You could have a build server to build your projects on instead of building them on the server where you host your resources.

This keeps the load separated, so it does not affect your application's performance.

## Requirements

- The built images needs to be pushed to a container registry.
- The server needs to be authenticated to the container registry. See [this](/knowledge-base/docker/registry) for more information.
- The server needs to have access to the source code.
- The server needs Docker Engine installed.
- The server should be the same architecture as the deployment servers.

If you have more than one build server, the used server will be chosen randomly.

## How to use

1. Add a new server to Coolify.
2. Enable the `Build Server` feature while creating a new resource.

After this, Coolify will use this server to build your resources, in case you enabled the `Build Server` feature for them.

## How to set a build server for a resource

1. Create or go to a resource that you want to use a build server for.
2. Enable the `Build Server` feature on the `General` tab, `Build` section.
3. Make sure you set up a container registry for the resource.
```

---


### firewall.md {#knowledge-base-server-firewall-md}

**File Path**: `knowledge-base/server/firewall.md`
**Size**: 4024 bytes
**SHA**: `d13e287b78ac9063cad3de6dbb04334793cbda3c`

```markdown
---
title: "Firewall"
description: "Learn which network ports need to be open for Coolify to work properly in self-hosted or cloud environments, including firewall setup tips and GitHub integration requirements."
---

# Firewall
Coolify requires specific network ports to be open in order to function properly across various environments. These ports enable web access, SSH connections, terminal sessions, and real-time communication. 

The required ports may vary slightly depending on whether you're using a self-hosted setup or the managed version ([Coolify Cloud](https://coolify.io/pricing/)).


## Coolify Self-hosted
To ensure proper functionality when self-hosting Coolify, the following ports should be opened:

* **8000** – HTTP access to the Coolify dashboard
* **6001** – Real-time communications
* **6002** – Terminal access (Required for Coolify version 4.0.0-beta.336 and above)
* **22** – SSH access (or your custom SSH port)
* **80** – SSL certificate generation via reverse proxy (Traefik or Caddy)
* **443** – HTTPS traffic

These ports are required if you're accessing Coolify directly using your server’s IP address (e.g., `http://<SERVER_IP>:8000`).

::: success Tip
If you're using a custom domain with Coolify’s integrated reverse proxy (Traefik or Caddy), you can safely close ports **8000**, **6001**, and **6002** after accesing the dashboard from your custom domain.
:::

::: warning Caution
  If you are using `Oracle Cloud Free ARM Server`, you need to allow these ports
  inside Oracle's Dashboard, otherwise you cannot reach your instance from the
  internet after installation.
:::


## Coolify Cloud
For Servers connected to Coolify Cloud, the following ports must be open:

* **22** – SSH access (or your custom SSH port)
* **80** – SSL certificate generation via reverse proxy (Traefik or Caddy)
* **443** – HTTPS traffic

These are the only required ports, as all other services are managed for you by Coolify Cloud.



## Closing Ports Using a Firewall
Coolify runs on Docker, which uses NAT-based iptables rules that can bypass traditional Linux firewalls like UFW. As a result, blocking ports using UFW alone will not be effective.

### Recommended Approach
Most cloud providers offer integrated firewalls through their dashboards. If your provider supports this, **it is highly recommended to use their firewall settings** to manage open ports instead of relying on local tools like UFW.

If your provider does not offer firewall functionality, you can use one of the following advanced methods:

### Coolify Self-hosted
::: danger CAUTION!!
  Modifying firewall settings incorrectly may lead to access issues that are difficult to recover from. 
  
  Proceed with the following steps **only if necessary**, and if you fully understand the implications.
:::


#### Use `ufw-docker`
[ufw-docker](https://github.com/chaifeng/ufw-docker) is a community-maintained tool that helps bridge UFW and Docker by allowing you to block specific ports effectively. Refer to the [GitHub repository](https://github.com/chaifeng/ufw-docker) for complete setup instructions

---

### Coolify Cloud
For servers connected to Coolify Cloud, only the SSH port (typically **22**) needs to be open for remote management.

If you wish to restrict access based on IP address, we have a list of public IPs used by Coolify Cloud:

* [IPv4 addresses](https://coolify.io/ipv4.txt)
* [IPv6 addresses](https://coolify.io/ipv6.txt)

Coolify Cloud’s IPs rarely change, but users will be notified by email if updates occur.


### GitHub Integration
GitHub uses webhooks to communicate with Coolify. For this to work correctly:
* Ensure **TCP ports 80 and 443** are open.
* (Optional) To restrict webhook access by IP, you can get the current list of GitHub’s outbound IPs from: https://api.github.com/meta (Check the `hooks` section)

For more details, refer to their [documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses)

```

---


### introduction.md {#knowledge-base-server-introduction-md}

**File Path**: `knowledge-base/server/introduction.md`
**Size**: 4564 bytes
**SHA**: `1ee6f0bfa7dfebed0081636eb0ee6c737b6ce85c`

```markdown
---
title: "Introduction"
description: "A guide to help you understand what kind of servers you can connect to Coolify."
---
# Introduction
No matter what type of server you have (localhost or remote), you need the following requirements.
- Connectivity
  - SSH connectivity between Coolify and the server with SSH key authentication.
     ::: success Tip
     Your public key should be added to **root** user's `~/.ssh/authorized_keys`.
     If you do not have an SSH Key, you can generate one through Coolify with a simple button or you can generate one manually.
     :::
- Docker Engine (24+)
## Types
- **Localhost**: the server where Coolify is installed.
- **Remote Server**: could be any remote linux server.
## Localhost
To be able to manage the server where Coolify is running on, the docker container of Coolify should reach the host server through SSH.
You can use localhost as a server where all your resources are running, but it is not recommended as high server usage could prevent to use Coolify.
::: success Tip
  You can use our [Cloud](https://app.coolify.io) version, so you only need a server for your resources. 
  
  You will get a few other things included with the cloud version, like free email notifications, s3 storage, etc based on your subscription plan.
:::
## Remote Server
You can connect any type of servers to Coolify. It could be a VPS, a Raspberry PI or a laptop running Linux.
::: success Tip
If you don't have a server or server provider yet, we prefer to use Hetzner.
You can use our [referral link](https://coolify.io/hetzner). It will help us to keep the project alive.
:::
### Cloudflare Tunnels
You can also set to use Cloudflare Tunnels for your servers.
::: success Tip
Coolify does not install cloudflared on your server, it needs to be done prior.
All it does is to add the right ProxyCommand (`ProxyCommand <ip / hostname> access ssh --hostname %h`) to all ssh connections.
:::

## Multiple Server Configuration
When setting up multiple servers in Coolify, it's important to understand how traffic routing works:

- **Independent Proxy Handling**: Each server runs its own proxy that handles incoming requests for applications deployed on that server.
- **Direct Traffic Flow**: Traffic for applications deployed on secondary servers goes directly to those servers, not through the main Coolify server.
- **DNS Configuration**: You must point your domain DNS to the IP address of the server where the application is deployed, not to the main Coolify server.

### Role of the Main Server
The main Coolify server:
- Provides the management UI to control applications on all connected servers
- Performs SSH connections to secondary servers for deployment and management
- Conducts health checks and monitoring
- Does NOT route or proxy traffic to applications on secondary servers

This architecture reduces latency and improves application performance by eliminating additional network hops.

## Features
### Disk Cleanup threshold
You can read more about Automated Cleanup and the disk cleanup threshold in the [Automated Cleanup](/knowledge-base/server/automated-cleanup) section.
### Wildcard Domain
You can set a wildcard domain (`example: http://example.com`) to your server, so you can easily assign generated domains to all the resources connected to this server.
Example: Your application UUID is `vgsco4o`.
If you have the example set, you will get the following FQDN: `http://vgsco4o.example.com`
If you do not have any wildcard domain set, Coolify will generate a [sslip.io](https://sslip.io) domain, which is free & magical domain that you can use anywhere.
In this case, it will be: `http://vgsco4o.127.0.0.1.sslip.io`, where `127.0.0.1` is your server's IP.

::: success Tip
When using multiple servers, remember that each application's domain must point to the specific server where that application is deployed.
:::

## Proxy
- **Traefik**: Automatically configure Traefik(v2) based on your deployed resources.
- **Custom/None**: You will configure a proxy manually (only for advanced users).
::: success Tip
  Soon we will support Nginx & Caddy with fully automated configuration.
:::
### Traefik
Coolify uses Traefik proxy by default to create a reverse proxy for your resources.
::: success Tip
  Traefik only starts when you did not select any proxy for your server and you
  have a domain configured for a resource or your Coolify instance itself.
:::
#### Dynamic Configuration
You can always add your own configuration to the proxy settings from Coolify's UI (`/server/<server_uuid>/proxy`).

```

---


### multiple-servers.md {#knowledge-base-server-multiple-servers-md}

**File Path**: `knowledge-base/server/multiple-servers.md`
**Size**: 2428 bytes
**SHA**: `b511790844062101626289c980cfc224cd9948a8`

```markdown
---
title: "Multiple Servers"
description: "A guide on how to deploy a resource to multiple servers with Coolify"
---

# Multiple Servers
With this feature, You could deploy the same application to multiple servers, add a load balancer in front of them and you will get a highly available application.

::: danger CAUTION
**This is an experimental feature.**
:::


## Requirements

- Each server should be added to Coolify, validated and reachable.
- Each server (and the optional build server) should be the same architecture (AMD64, ARM).
- You must push the built image to a Docker Registry. Coolify automates the process, you just need to [login to the registry](/knowledge-base/docker/registry#docker-credentials) on the server.

## How to use?

When you configure (or already configured) an application, you selected a server / network where it deploys. This will be your main server.

Any additional servers must be set in the `Servers` menu, simply by clicking on it.

Now everytime you redeploy, restart or stop the application, the action will be done on all servers.

If the deploy needs a build process, it will be executed on the main server (or on the build server if you have one). The deploy process will upload the built image to the Docker Registry and only after all other servers will be notified to pull and deploy this image.

## How to configure a loadbalancer?

At the moment, it is not automated. So you have to manually setup a loadbalancer. There are two ways to use.

### Port mapping to host

If you set `Ports Mappings` for your application, so one port from the docker container will mapped to a port on the host server, all you need to do is to:

1. Set all the `IP:PORT` as a destination in your loadbalancer.
2. Remove any domains from the `Domains` field in Coolify.

In this case, Coolify Proxy is not used as you can reach the application with IP:PORT

::: success Tip
  This is super simple and effective. But keep in mind, that you need to only allow incoming connections to the selected `PORT` from the loadbalancer, otherwise everyone can reach your application directly, without the loadbalancer.
:::

### Using a domain

In this case, you need to set the **loadbalancer domain with HTTP, (not HTTPS)** in the `Domains` field, and then set the proper configuration for your loadbalancer, with SSL termination.

With this configuration, you can use several domains with one loadbalancer.
```

---


### non-root-user.md {#knowledge-base-server-non-root-user-md}

**File Path**: `knowledge-base/server/non-root-user.md`
**Size**: 1001 bytes
**SHA**: `ee0dbc0bd8ccc01727a158712e30afcf343d26bd`

```markdown
---
title: "Non-root user"
description: "A guide on how to use a server with a non-root user"
---


# Non-root user
You could have a server with a non-root user that will manage your resources instead of the root user.

For this to work, you need to set up the server correctly.

::: danger Caution
**This is an experimental feature.**
:::

## Requirements

- The non-root user needs to have the SSH key added to the server.
- Sudos permissions for the non-root user.

## Sudo permissions

You need to add the following lines to the `/etc/sudoers` file:

```bash
# Allow the your-non-root-user to run commands as root without a password
your-non-root-user ALL=(ALL) NOPASSWD: ALL
```

This will allow the non-root user to any command as root without a password.
Note: you need to replace "your-non-root-user" with your user.

::: warning Caution
  This is not the most secure way to set up a non-root user, but we will improve
  this in the future, by adding more granular permissions on binaries.
:::
```

---


### openssh.md {#knowledge-base-server-openssh-md}

**File Path**: `knowledge-base/server/openssh.md`
**Size**: 3135 bytes
**SHA**: `0517f4e8d2e4c4e8e59e00395cb62f6e9a925e8b`

```markdown
---
title: "OpenSSH"
description: "A guide to configure OpenSSH for Coolify."
---

# OpenSSH
Coolify uses SSH to connect to your server and deploy your applications. This is true even when using the `localhost` server where Coolify is running.

::: warning Caution
  The SSH key must not have a passphrase or 2FA enabled for the user used to run the Coolify installation script or the connection will fail.
:::

## SSH Settings Configuration

These settings need to be configured manually before running the Coolify installation script:


1. Edit SSH Configuration
   ```bash
   nano /etc/ssh/sshd_config
   ```
   Ensure these settings are present:
   ```ssh
   PermitRootLogin prohibit-password
   PubkeyAuthentication yes
   ```
   ::: info Note
      The `PermitRootLogin` option can be set to `yes`, `without-password`, or `prohibit-password`. For enhanced security, we recommend using `prohibit-password`.
   :::

   ::: warning Caution!
     Make sure to add your SSH keys to the `~/.ssh/authorized_keys` file before setting `PermitRootLogin` to `prohibit-password`, otherwise you may lock yourself out of the server.
   :::

1. Restart SSH Service

SystemD:
  ```bash
  # Debian/Ubuntu-based (systemd)
  systemctl restart ssh  # Or `systemctl restart sshd` if needed
  
  # CentOS/RHEL 7+ (systemd)
  systemctl restart sshd
  ```

OpenRC:
  ```bash
  # Alpine/Gentoo (OpenRC)
  rc-service sshd restart
  
  # Older Ubuntu (Upstart)
  service sshd restart
  
  # Legacy Linux (SysVinit)
  # /etc/init.d/sshd restart
  ```


## Manual Configuration

::: info Note
The following steps are handled automatically by the Coolify installation script. Manual configuration is only needed if the automatic setup fails.
:::


1. Install OpenSSH Server

   **Ubuntu/Debian/PopOS**
   ```bash
   apt update && apt install -y openssh-server
   systemctl enable --now sshd
   ```

   **CentOS/RHEL/Fedora/Rocky**
   ```bash
   dnf install -y openssh-server
   systemctl enable --now sshd
   ```

   **SLES/openSUSE**
   ```bash
   zypper install -y openssh
   systemctl enable --now sshd
   ```

   **Arch Linux**
   ```bash
   pacman -Sy --noconfirm openssh
   systemctl enable --now sshd
   ```

   **Alpine Linux**
   ```bash
   apk add openssh
   rc-update add sshd
   rc-service sshd start
   ```

2. Configure SSH Settings
   Follow the [SSH Settings Configuration](#ssh-settings-configuration) section above.

3. Generate and Configure SSH Keys
   ```bash
   # Generate SSH key pair
   ssh-keygen -t ed25519 -a 100 \
       -f /data/coolify/ssh/keys/id.root@host.docker.internal \
       -q -N "" -C root@coolify

   # Set correct ownership
   chown 9999 /data/coolify/ssh/keys/id.root@host.docker.internal

   # Add public key to authorized_keys
   mkdir -p ~/.ssh
   cat /data/coolify/ssh/keys/id.root@host.docker.internal.pub >> ~/.ssh/authorized_keys

   # Set proper permissions
   chmod 600 ~/.ssh/authorized_keys
   chmod 700 ~/.ssh
   ```

4. Configure in Coolify UI
   1. Navigate to `Keys & Tokens` menu
   2. Go to `Private Keys` section
   3. Add the private key
   4. Configure the key in your localhost server settings


```

---


### oracle-cloud.md {#knowledge-base-server-oracle-cloud-md}

**File Path**: `knowledge-base/server/oracle-cloud.md`
**Size**: 1162 bytes
**SHA**: `7f66c80e50bcaa891c535fe70ded8b94bf07bcba`

```markdown
---
title: "Oracle Cloud"
description: "A guide to use Oracle Cloud servers in Coolify"
---

# Oracle Cloud
If you are using `Oracle Cloud free ARM server`, you need to do a few extra steps to use it in Coolify, as a `Coolify instance` or just a `remote server`.

## Normal user
Non-root user is in `experimental` mode and works with `sudo`.
- Make sure the ssh key is added to the user's `~/.ssh/authorized_keys` file.
- All configuration is set for sudo. Details [here](/knowledge-base/server/non-root-user).

## Setup Root User

By default, you can't login as root user. You need to do the following steps to enable root user.

1. Switch to root user `sudo su -`
2. Edit `/etc/ssh/sshd_config` and change `PermitRootLogin` to `without-password`.
3. Restart ssh service `service sshd restart`
4. Add a public key to `/root/.ssh/authorized_keys` file which is also defined in your Coolify instance.

## Firewall Rules

This is only required if you self-host Coolify on Oracle ARM server.

By default, Oracle ARM server has a firewall enabled and you need to allow some ports to use Coolify.

For more details, check [this](/knowledge-base/server/firewall) page.
```

---


### patching.md {#knowledge-base-server-patching-md}

**File Path**: `knowledge-base/server/patching.md`
**Size**: 2524 bytes
**SHA**: `63af9616ca0248eab2ba69db321abf1741594a57`

```markdown
---
title: "Server Patching"
description: "A guide to use Coolify Server Patching feature"
---


# Server Patching <Badge type="warning" text="^v4.0.0-beta.419" />
The **Server Patching** feature lets you update all packages on your server directly from the Coolify dashboard.

## How to Use Server Patching
1. Go to the **Servers** section in the sidebar.
2. Select your server.
3. Click on the **Security** tab.
4. Open the **Server Patching** section.

<ZoomableImage src="/docs/images/knowledge-base/servers/patching/1.webp" />

On this page, you'll see a list of all available package updates.

You can either:
  - Update packages **individually** by clicking the **Update** button next to each one.
  - Or, click **Update All Packages** to apply all updates at once.

::: warning Note
  Coolify **does not** automatically install updates. It only checks for available updates and displays them in the dashboard.
  
  Updates are applied only when you manually click the **Update** or **Update All Packages** button.
:::


## Server Patching Notifications
Coolify checks for updates weekly and sends notifications if any are available.

  - Notifications are **enabled by default**.
  - You can manage this setting in your **Notification Settings**.

<ZoomableImage src="/docs/images/knowledge-base/servers/patching/2.webp" />


## Supported Package Managers
As of **v4.0.0-beta.419**, server patching is supported for the following package managers:

* **APT**
* **DNF**
* **Zypper**

Support for additional package managers will be added in future updates.

If you'd like to prioritize support for a specific package manager, feel free to start a discussion here: [Coolify Discussions on GitHub](https://github.com/coollabsio/coolify/discussions)

## FAQ

::: details 1. Can I change how frequently Coolify checks for updates?
No, the update check interval is currently fixed.

However, you can manually trigger a check by clicking the **Check now** button on the Server Patching page.

This feature was introduced in **v4.0.0-beta.419**, and we’re focusing on improving it based on user feedback. If you'd like to request customizable check intervals, feel free to start a discussion here: [Coolify Discussions on GitHub](https://github.com/coollabsio/coolify/discussions)
:::

::: details 2. Does Coolify install updates automatically?
**No**, Coolify does not install updates automatically.

Updates are only applied when you manually click the **Update** or **Update all packages** button on the dashboard.
:::

```

---


### proxies.md {#knowledge-base-server-proxies-md}

**File Path**: `knowledge-base/server/proxies.md`
**Size**: 952 bytes
**SHA**: `bdef1d63314d688521cb2f3992df9ed5e067c8ff`

```markdown
---
title: "Supported Proxy"
description: "A guide for Coolify supported proxies."
---

# Supported Proxy
Coolify supports `Traefik` (default) and `Caddy` (experimental) proxies.

## Switch between proxies

Since `beta.237`, we have added support for Caddy and Traefik as proxies. You can switch between them at any time.

Before you switch proxies and if you have an application that was created before `beta.237`, you need to make sure of the following:

1.  You must have `caddy_*` or `traefik_*` labels on your resources.

::: success Tip
  If you don't have `caddy_*` or `traefik_*` labels: 
  
  1. Automatically: A restart of your resource will add the missing labels. 
  2. Manually: 
      - `For Applications`: click on the `Reset to Coolify Default Labels` button. 

      - `For Services`: simply save the service - it will automatically add required labels.
:::

2. You need to restart your service so that the new labels will be applied.

```

---


### sentinel.md {#knowledge-base-server-sentinel-md}

**File Path**: `knowledge-base/server/sentinel.md`
**Size**: 1437 bytes
**SHA**: `ab2ff5cd7ca29e2c063f39bbaf1fffbd9ad8ae32`

```markdown
---
title: "Sentinel and Metrics"
description: "Learn how to set up and use Sentinel as a Linux API and metrics collection tool for server and container metrics in Coolify"
---

# Sentinel and Metrics

::: danger CAUTION
**This is an experimental feature.**
:::

# Sentinel Overview

[Sentinel](https://github.com/coollabsio/sentinel) is an open-source lightweight container that provides:
- Linux system API
- Server resource monitoring (CPU, RAM usage for now)
- Container resource monitoring (CPU, RAM usage for now)

## Screenshot

<ZoomableImage src="/docs/images/screenshots/sentinel.webp" />

## Configuration

### Enable Sentinel

1. Navigate to `Servers` > `<YOUR_SERVER>` > `Configurations` > `General`
2. Find the `Sentinel` section
3. Toggle `Enable Sentinel`
4. Wait a few moments for the container to be downloaded and start.

### Enable Metrics (Optional)

In the same section, you can enable metrics. Once enabled, you will be able to view the following metrics:
- CPU usage
- Memory consumption (RAM Usage)

::: info Note
Metrics collection is currently NOT available for Docker Compose and Service Template based deployments.
:::

## Viewing Metrics

### Server Metrics
Access server-wide metrics at:

`Servers` > `<YOUR_SERVER>` > `Configurations` > `Metrics`

### Container Metrics
View individual container metrics:
1. Navigate to the specific resource
2. Go to the `Configurations` tab
3. Select the `Metrics` tab


```

---


### terminal-access.md {#knowledge-base-server-terminal-access-md}

**File Path**: `knowledge-base/server/terminal-access.md`
**Size**: 1111 bytes
**SHA**: `f7d417defc37b549351c704e2672cfc2e21c6035`

```markdown
---
title: "Terminal Access"
description: "A guide to using Coolify's Terminal Access feature"
---

# Terminal Access <Badge type="warning" text="^v4.0.0-beta.419" />
The **Terminal Access** feature allows you to enable or disable terminal access for your server and all containers running on it — directly from the Coolify dashboard.


## How to Use Terminal Access
1. Go to the **Servers** section in the sidebar.
2. Select your server.
3. Go to the **Configuration** tab.
4. Open the **Advanced** section.
5. Use the toggle button to enable or disable terminal access for the server.

<ZoomableImage src="/docs/images/knowledge-base/servers/terminal-access/1.webp" />

::: warning Note:
Disabling Terminal Access affects **all terminals** on the server, including access to all containers running on that server.
:::


## Terminal Access Control
As of **v4.0.0-beta.419**, only the **root user** and **admin users** have permission to use the Terminal Access feature.

When terminal access is disabled, no one can access the terminal including root and admin users for the server or any of its containers.

```

---

