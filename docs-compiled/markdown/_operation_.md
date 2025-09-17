# [operation].md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/api-reference/api/operations/[operation].md
**Generated**: 2025-09-17T04:05:07.833423
**File Size**: 1561 bytes
**SHA**: `c88951398185ef013d28669e3c430803e8e16913`

---

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

