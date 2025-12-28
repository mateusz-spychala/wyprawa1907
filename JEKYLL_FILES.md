# Jekyll-Related Files in wyprawa1907 Repository

This document lists all files in the repository that are related to Jekyll.

## Files Found

### 1. docker-compose.yml
**Location:** `/docker-compose.yml`  
**Description:** Contains Jekyll Docker service configuration for serving the built application.

**Jekyll-related content:**
- Defines a `jekyll` service using the `jekyll/jekyll:pages` Docker image
- Installs webrick gem and runs Jekyll server
- Serves content from the `./dist` directory (which is mounted to `/usr/src/app/wyprawa1907/`)
- Exposes port 4000 for local development

**Lines 3-9:**
```yaml
jekyll:
    image: jekyll/jekyll:pages
    command: sh -c "gem install webrick && jekyll serve --source /usr/src/app/"
    ports:
        - '4000:4000'
    volumes:
        - ./dist:/usr/src/app/wyprawa1907/
```

**Note:** There's a discrepancy between the `--source` path (`/usr/src/app/`) and the volume mount point (`/usr/src/app/wyprawa1907/`). The Jekyll server may serve from the parent directory instead of the exact mount point.

### 2. .gitignore
**Location:** `/.gitignore`  
**Description:** Git ignore configuration that includes Jekyll build output directory.

**Jekyll-related content:**
- Contains `_site` entry - This is the default output directory where Jekyll builds static site files

## Summary

Total Jekyll-related files found: **2**

### Usage Context
While this project is primarily a React/Vite application (as evidenced by `package.json`, `vite.config.ts`, etc.), it includes Docker Compose configuration to serve the built static files using Jekyll. This suggests the built `dist` folder can be served locally using Jekyll for testing purposes, likely to simulate the GitHub Pages environment.

### Note
- The repository does not contain traditional Jekyll source files like `_config.yml`, `Gemfile`, `_posts/`, `_layouts/`, etc.
- Jekyll is only used as a simple static file server via Docker, not as a site generator
- The actual site is built using Vite and React, then served by Jekyll in the Docker container
