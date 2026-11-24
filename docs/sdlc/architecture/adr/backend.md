<!-- sdlc:auto:start adr -->
# ADR-0002: Use FastAPI 0.115 for Backend

Status: Accepted  
Date: 2026-11-24

## Context and Problem Statement

Which Backend technology does the project use? Decided in architecture v2.

## Considered Options

- FastAPI 0.115
- Flask
- Node/Express
- Static-only hosting

## Decision Outcome

Chosen option: FastAPI 0.115, because All calculation is client-side, so the backend does little more than serve the page and a health check. FastAPI 0.115 is the lightest, fastest option to stand up and never gets in the way for a product this simple.

## Consequences

Carrying a backend at all is more than the product strictly needs, but it satisfies the approved stack and leaves room for a health endpoint without adding complexity.
<!-- sdlc:auto:end adr -->