<!-- sdlc:auto:start adr -->
# ADR-0003: Use PostgreSQL 16 for Database

Status: Accepted  
Date: 2026-11-24

## Context and Problem Statement

Which Database technology does the project use? Decided in architecture v2.

## Considered Options

- PostgreSQL 16
- SQLite
- No database

## Decision Outcome

Chosen option: PostgreSQL 16, because Named in the approved stack for completeness. The product stores nothing between sessions and has no accounts, so no schema is defined and no queries are issued.

## Consequences

It is provisioned but unused, so it adds cost and a node for no functional gain; it can be dropped for a truly minimal dev environment since nothing reads or writes to it.
<!-- sdlc:auto:end adr -->