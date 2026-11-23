<!-- sdlc:auto:start adr -->
# ADR-0004: Use AWS for Cloud

Status: Accepted  
Date: 2026-11-23

## Context and Problem Statement

Which Cloud technology does the project use? Decided in architecture v1.

## Considered Options

- AWS
- Cloudflare Pages
- Netlify
- Azure

## Decision Outcome

Chosen option: AWS, because Hosting here means putting one responsive page on the internet reliably and cheaply. AWS (S3 for the static SPA, a small instance for the API) does this at essentially no cost for this traffic and scales without attention if the page is shared widely.

## Consequences

AWS offers far more than this product uses, but the relevant static-hosting services are inexpensive and operationally simple at this scale.
<!-- sdlc:auto:end adr -->