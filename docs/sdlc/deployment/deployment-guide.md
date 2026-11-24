# Deployment Guide

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start how-it-deploys -->
Pushes to `main` run `.github/workflows/deploy.yml`, which builds the API image (if there is a backend) and deploys the SPA to AWS Amplify. Commits touching only `docs/sdlc/**` don't deploy. Deployments can also be started from the platform's Deployment tab.
<!-- sdlc:auto:end how-it-deploys -->

<!-- sdlc:auto:start environments -->
| Name | Service | Runtime | Scaling | Environment |
|---|---|---|---|---|
| SPA Static Host | AWS S3 + CloudFront (static website) | Static assets (React 19 build) | CDN edge caching; scales automatically with traffic | dev |
| Page/Health API | AWS (container or App Runner) | FastAPI 0.115 on Python 3.12 (Uvicorn) | Single small instance; scale-to-low for near-zero cost | dev |
| PostgreSQL (provisioned, unused) | AWS RDS for PostgreSQL 16 | PostgreSQL 16 | Smallest instance; no application traffic | dev |
<!-- sdlc:auto:end environments -->

<!-- sdlc:auto:start live -->
_Not deployed yet._
<!-- sdlc:auto:end live -->

<!-- sdlc:auto:start topology -->
```mermaid
graph LR
  n_SPA_Static_Host["SPA Static Host<br/>AWS S3 + CloudFront (static website)"]
  n_Page_Health_API["Page/Health API<br/>AWS (container or App Runner)"]
  n_PostgreSQL__provisioned__unused_["PostgreSQL (provisioned, unused)<br/>AWS RDS for PostgreSQL 16"]
  n_SPA_Static_Host -->|"HTTPS"| n_Page_Health_API
```
<!-- sdlc:auto:end topology -->
