<!-- sdlc:auto:start adr -->
# ADR-0002: Use FastAPI 0.115 for Backend

Status: Accepted  
Date: 2026-11-23

## Context and Problem Statement

Which Backend technology does the project use? Decided in architecture v1.

## Considered Options

- FastAPI 0.115
- Flask
- Node/Express

## Decision Outcome

Chosen option: FastAPI 0.115, because Named in the approved stack. In this design it does little more than serve the calculator page and a health check; all calculation is client-side so there is no real server work.

## Consequences

A backend is not functionally required for this product, but FastAPI is the lightest, fastest of the options to stand up and stays out of the way, matching the lightweight scope.
<!-- sdlc:auto:end adr -->