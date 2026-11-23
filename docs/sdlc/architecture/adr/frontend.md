<!-- sdlc:auto:start adr -->
# ADR-0001: Use React 19 for Frontend

Status: Accepted  
Date: 2026-11-23

## Context and Problem Statement

Which Frontend technology does the project use? Decided in architecture v1.

## Considered Options

- React 19
- Vanilla JS
- Vue
- Svelte

## Decision Outcome

Chosen option: React 19, because React 19 drives the whole product: it keeps the on-screen number in sync with every button press and keystroke via component state, and produces one responsive page that works the same on phone and desktop. Built as a Vite SPA reading VITE_API_BASE_URL.

## Consequences

React is more than a trivial calculator strictly needs, but the approved stack names it and it carries keyboard handling, live display and responsive layout cleanly with nothing extra to wire by hand.
<!-- sdlc:auto:end adr -->