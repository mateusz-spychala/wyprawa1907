# Jekyll-Related Files in wyprawa1907 Repository

This document lists all files related to Jekyll in the repository.

## Files Containing Jekyll References

### 1. `docker-compose.yml`
**Location:** `/docker-compose.yml`

**Description:** Docker Compose configuration that defines a Jekyll service for local development.

**Jekyll-related content:**
- Service name: `jekyll`
- Docker image: `jekyll/jekyll:pages`
- Command: Installs webrick gem and runs Jekyll server
- Serves content from `/dist` directory
- Exposes port 4000

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

### 2. `Readme.md`
**Location:** `/Readme.md`

**Description:** Repository documentation that references GitHub Pages (which uses Jekyll).

**Jekyll-related content:**
- References to GitHub Pages deployment at `https://mateusz-spychala.github.io/wyprawa1907/`
- Multiple URLs pointing to the GitHub Pages site

**Relevant lines:**
- Line 11: GitHub Pages URL
- Lines 23-24: Alternative URLs for accessing puzzle pages
- Line 36: Example GitHub Pages URL

## Related Files (GitHub Pages Deployment)

### 3. `.github/workflows/deploy.yml`
**Location:** `/.github/workflows/deploy.yml`

**Description:** GitHub Actions workflow for deploying to GitHub Pages. While this doesn't explicitly use Jekyll, it deploys to GitHub Pages which traditionally uses Jekyll (though this project uses Vite build).

**Content:**
- Deploys static content to GitHub Pages
- Builds using Bun and Vite (not Jekyll)
- Uploads to GitHub Pages artifact storage

### 4. `package.json`
**Location:** `/package.json`

**Description:** NPM package configuration.

**Jekyll-related content:**
- Homepage URL: `https://mateusz-spychala.github.io/wyprawa1907/` (GitHub Pages URL)

## Summary

**Direct Jekyll References:** 1 file (`docker-compose.yml`)

**Indirect References (GitHub Pages):** 3 files (`Readme.md`, `.github/workflows/deploy.yml`, `package.json`)

## Notes

1. The repository appears to use **Jekyll only for local development** via Docker Compose
2. **Production deployment** uses GitHub Actions with Vite build (not Jekyll)
3. The `dist` directory (which would be served by Jekyll locally) is built by Vite
4. No traditional Jekyll configuration files found:
   - No `_config.yml`
   - No `Gemfile` or `Gemfile.lock`
   - No `_site` or `.jekyll-cache` directories
   - No Jekyll-specific directories (`_posts`, `_layouts`, `_includes`, etc.)

## Conclusion

This is a **React + Vite** project that:
- Uses Jekyll Docker container for optional local preview of the built output
- Deploys to GitHub Pages using GitHub Actions (not Jekyll Pages)
- Does not use Jekyll for building or generating content
