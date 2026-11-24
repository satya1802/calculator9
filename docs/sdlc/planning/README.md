# Planning

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
### EPIC-001 · approved · source: planning:EPIC-001

Covers the four basic arithmetic operations (add, subtract, multiply, divide) plus percent, performed entirely client-side with nothing sent to or stored on a server.

Goal: deliver client-side basic arithmetic (addition, subtraction, multiplication, division) and percent calculation. Scientific functions (powers, roots, trigonometry, logarithms, parentheses) are explicitly out of scope for this version. Stories: US-001 (critical), US-002 (high), US-003 (high).

**Related:** US-001, US-002, US-003

### EPIC-002 · approved · source: planning:EPIC-002

Covers user input via on-screen buttons and physical keyboard, a live updating display, and a clear/reset control.

Goal: let users enter numbers and operators via on-screen buttons or keyboard, see live entry and result on the display, and clear/reset to start a new calculation. Stories: US-004 (critical), US-005 (high), US-006 (high), US-007 (high).

**Related:** US-004, US-005, US-006, US-007

### EPIC-003 · approved · source: planning:EPIC-003

Covers friendly, non-crashing handling of invalid situations such as division by zero or malformed input.

Goal: respond to invalid situations (e.g. division by zero, malformed input) with a friendly, readable error message rather than crashing or freezing. Stories: US-008 (high), US-009 (medium).

**Related:** US-008, US-009

### EPIC-004 · approved · source: planning:EPIC-004

Covers delivery as a responsive web app usable across desktop and mobile browsers, anonymously and free of charge.

Goal: deliver the calculator as a responsive web application that adapts across desktop and mobile browsers, available to anyone anonymously and free of charge, with no sign-in or payment barriers. Stories: US-010 (high), US-011 (high).

**Related:** US-010, US-011

### SPRINT-1 · approved · source: planning:SPRINT-1

First sprint of the approved v1 plan, capacity 20 points, focused on the core arithmetic engine, percent, on-screen input, live display, clear/reset, and client-only behaviour.

Goal (as stated): 'Core arithmetic engine, percent, on-screen input, live display, clear/reset, and client-only behaviour'. Capacity: 20 points. Story-to-sprint mapping is inferred from this goal text (not explicitly tabulated in the plan input): core arithmetic engine -> US-001 (5 pts, frontend-agent); percent -> US-002 (3 pts, frontend-agent); client-only behaviour -> US-003 (2 pts, frontend-agent); on-screen input -> US-004 (5 pts, frontend-agent); live display -> US-006 (3 pts, frontend-agent); clear/reset -> US-007 (2 pts, frontend-agent). Plan also lists EPIC-001 and EPIC-002 as unassigned-role, points=None backlog items (epic containers, not sprint-scheduled work).

**Related:** US-001, US-002, US-003, US-004, US-006, US-007

### SPRINT-2 · approved · source: planning:SPRINT-2

Second sprint of the approved v1 plan, capacity 20 points, focused on keyboard entry, friendly error handling, responsive layout, and anonymous/free access.

Goal (as stated): 'Keyboard entry, friendly error handling, responsive layout, and anonymous/free access'. Capacity: 20 points. Story-to-sprint mapping is inferred from this goal text (not explicitly tabulated in the plan input): keyboard entry -> US-005 (3 pts, frontend-agent); friendly error handling -> US-008 (3 pts, frontend-agent) and US-009 (3 pts, frontend-agent); responsive layout -> US-010 (3 pts, frontend-agent); anonymous/free access -> US-011 (1 pt, frontend-agent). Plan also lists EPIC-003 and EPIC-004 as unassigned-role, points=None backlog items (epic containers, not sprint-scheduled work).

**Related:** US-005, US-008, US-009, US-010, US-011
<!-- sdlc:auto:end narrative -->
