# Sprint Plan

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start sprints -->
## Sprint 1: Sprint 1

Core arithmetic engine, percent, on-screen input, live display, clear/reset, and confirmation that nothing is ever stored

Capacity: 20 points · Committed: 20

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-001 | Story | Add, subtract, multiply and divide numbers | 5 | frontend-agent | — |
| US-002 | Story | Calculate a percentage | 3 | frontend-agent | US-001 |
| US-003 | Story | All calculation happens in the browser with nothing stored | 2 | frontend-agent | US-001 |
| US-004 | Story | Enter values with on-screen buttons | 5 | frontend-agent | US-001 |
| US-006 | Story | See the live result | 3 | frontend-agent | US-001, US-004 |
| US-007 | Story | Clear and reset the calculator | 2 | frontend-agent | US-001, US-004 |

## Sprint 2: Sprint 2

Keyboard entry, friendly error handling, responsive layout, and anonymous/free access confirmation

Capacity: 20 points · Committed: 13

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-005 | Story | Enter values with a physical keyboard | 3 | frontend-agent | US-001, US-004 |
| US-008 | Story | Friendly message for division by zero | 3 | frontend-agent | US-001, US-007 |
| US-009 | Story | Friendly message for invalid input | 3 | frontend-agent | US-001, US-007 |
| US-010 | Story | Use the calculator on desktop and mobile | 3 | frontend-agent | US-004 |
| US-011 | Story | Use the calculator anonymously and free | 1 | frontend-agent | — |

## Unscheduled

_Nothing unscheduled._
<!-- sdlc:auto:end sprints -->
