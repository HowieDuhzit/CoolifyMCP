# drain-logs.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/knowledge-base/drain-logs.md
**Generated**: 2025-09-17T04:05:07.840845
**File Size**: 1199 bytes
**SHA**: `6904ee37bdfac3bd300b1166acf9f37933da1aca`

---

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

