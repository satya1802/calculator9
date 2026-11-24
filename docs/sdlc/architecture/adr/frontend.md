<!-- sdlc:auto:start adr -->
# ADR-0001: Use React 19 for Frontend

Status: Accepted  
Date: 2026-11-24

## Context and Problem Statement

Which Frontend technology does the project use? Decided in architecture v2.

## Considered Options

- React 19
- Vue
- Svelte
- Vanilla JS

## Decision Outcome

Chosen option: React 19, because The entire product is a single in-browser page. React 19 keeps the display in sync with every button press and keystroke via component state, and builds one responsive page that works on phone and desktop, exactly matching the input/display/error capabilities in scope.

## Consequences

React is heavier than vanilla JS for something this small, but the approved stack standardises on it and the extra weight is negligible for a static CDN-served page.
<!-- sdlc:auto:end adr -->