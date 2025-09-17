# jekyll.md

**Source**: https://github.com/coollabsio/coolify-docs/blob/v4.x/applications/jekyll.md
**Generated**: 2025-09-17T04:05:07.833915
**File Size**: 1081 bytes
**SHA**: `af4c6a6261cbe9b992a6a6c66e3938dcf2e4cb1d`

---

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

