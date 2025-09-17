# raspberry-pi-os.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/knowledge-base/how-to/raspberry-pi-os.md
**Generated**: 2025-09-17T04:05:07.842232
**File Size**: 1979 bytes
**SHA**: `0c0aab0af911d0998dbe5b87b0eaf21bb67fd1aa`

---

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

