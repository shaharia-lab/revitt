# Repository Setup Guide

## Branch Protection Rules

To enable proper CI/CD workflow, configure these branch protection rules:

### Main Branch Protection
1. Go to **Settings** → **Branches** → **Add rule**
2. Branch name pattern: `main`
3. Enable:
   - ✅ Require a pull request before merging
   - ✅ Require approvals (1)
   - ✅ Dismiss stale PR approvals when new commits are pushed
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Required status checks: `Validate PR`
   - ✅ Restrict pushes that create files over 100MB
   - ✅ Do not allow bypassing the above settings

### Dev Branch Protection
1. Branch name pattern: `dev`
2. Enable:
   - ✅ Require status checks to pass before merging
   - ✅ Required status checks: `Validate PR`

## Required Secrets

### NPM_TOKEN
1. Go to [npmjs.com](https://www.npmjs.com/settings/tokens)
2. Create a new **Automation** token
3. Copy the token
4. Go to **Settings** → **Secrets and variables** → **Actions**
5. Add repository secret:
   - Name: `NPM_TOKEN`
   - Value: Your npm token

## Workflow Overview

### Development Workflow
1. Create feature branches from `dev`
2. Open PR to `dev` → triggers validation
3. Merge to `dev` after approval
4. Open PR from `dev` to `main` → triggers validation
5. Merge to `main` after approval

### Release Workflow
1. Create a GitHub release with version tag (e.g., `v1.0.1`)
2. Release triggers automatic npm publishing
3. Package version is updated automatically from release tag

## Release Process

1. **Create Release:**
   ```bash
   # Tag format: v1.0.1
   git tag v1.0.1
   git push origin v1.0.1
   ```

2. **Or use GitHub UI:**
   - Go to **Releases** → **Create a new release**
   - Tag: `v1.0.1`
   - Title: `Release 1.0.1`
   - Description: Release notes
   - Click **Publish release**

3. **Automatic Publishing:**
   - GitHub Action runs tests
   - Updates package.json version
   - Publishes to npm registry

## Testing Locally

```bash
# Link for local testing
npm link
create-revitt-app my-test-app
cd my-test-app
npm run dev
```