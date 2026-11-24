<!-- sdlc:auto:start adr -->
# ADR-0004: Use AWS for Cloud

Status: Accepted  
Date: 2026-11-24

## Context and Problem Statement

Which Cloud technology does the project use? Decided in architecture v2.

## Considered Options

- AWS
- Cloudflare Pages
- Netlify
- Vercel

## Decision Outcome

Chosen option: AWS, because Hosting here means putting one responsive page on the internet reliably and cheaply. AWS (S3 + CloudFront for the SPA, a small compute host for the API) does this at essentially no cost for this traffic profile and scales without attention if the page is shared widely.

## Consequences

AWS has more moving parts than a single static-site host, but it is the approved cloud and the S3/CloudFront path keeps the static page simple and cheap.
<!-- sdlc:auto:end adr -->