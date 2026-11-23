<!-- sdlc:auto:start adr -->
# ADR-0003: Use PostgreSQL 16 for Database

Status: Accepted  
Date: 2026-11-23

## Context and Problem Statement

Which Database technology does the project use? Decided in architecture v1.

## Considered Options

- PostgreSQL 16
- None (no persistence needed)

## Decision Outcome

Chosen option: PostgreSQL 16, because Named in the approved stack for completeness. The calculator stores nothing between sessions and has no accounts, so no schema exists and the database is never read or written.

## Consequences

Provisioning an unused database adds a small cost and footprint; it is kept only to honour the approved stack and remains empty.
<!-- sdlc:auto:end adr -->