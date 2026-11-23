# Planning

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
### EPIC-001 · approved · source: planning:EPIC-001

Deliver client-side basic arithmetic: addition, subtraction, multiplication, division and percent, with no server-side storage or calculation.

Goal: the calculator performs the four basic arithmetic operations plus percent entirely in the browser; all calculation is client-side and nothing is sent to or stored on a server. Scientific functions (powers, roots, trigonometry, logarithms, parentheses) are explicitly out of scope for this version. Stories: US-001, US-002, US-003.

**Related:** US-001, US-002, US-003

### EPIC-002 · approved · source: planning:EPIC-002

Let users enter numbers and operators via on-screen buttons or keyboard, see a live display, and clear/reset the calculation.

Goal: users enter numbers and operators using on-screen buttons or a physical keyboard, see their entry and result on a live display, and can clear or reset to start a new calculation. Stories: US-004, US-005, US-006, US-007.

**Related:** US-004, US-005, US-006, US-007

### EPIC-003 · approved · source: planning:EPIC-003

Handle invalid situations (division by zero, malformed input) with friendly messages instead of crashing.

Goal: the calculator responds to invalid situations such as division by zero or malformed input with a friendly, readable message rather than crashing or freezing. Stories: US-008, US-009.

**Related:** US-008, US-009

### EPIC-004 · approved · source: planning:EPIC-004

Deliver the calculator as a responsive web app usable anonymously and free on desktop and mobile.

Goal: the calculator is delivered as a responsive web application that works across desktop and mobile browsers, available to anyone anonymously and free of charge. Stories: US-010, US-011.

**Related:** US-010, US-011

### SPRINT-1 · approved · source: plan:Sprint 1

Sprint 1 builds the core arithmetic engine, percent, on-screen input, live display, clear/reset, and confirms nothing is ever stored.

Plan v1, approved. Capacity: 20 points. Goal: Core arithmetic engine, percent, on-screen input, live display, clear/reset, and confirmation that nothing is ever stored. Items assigned (matched to this goal, as the plan input did not label individual items with a sprint): US-001 Add, subtract, multiply and divide numbers (5 pts, frontend-agent); US-002 Calculate a percentage (3 pts, frontend-agent); US-003 All calculation happens in the browser with nothing stored (2 pts, frontend-agent); US-004 Enter values with on-screen buttons (5 pts, frontend-agent); US-006 See the live result (3 pts, frontend-agent); US-007 Clear and reset the calculator (2 pts, frontend-agent). Sum of story points = 20, matching stated capacity. Epics EPIC-001 and EPIC-002 are also listed as plan items with no points/role assigned.

**Related:** EPIC-001, EPIC-002, US-001, US-002, US-003, US-004, US-006, US-007

### SPRINT-2 · approved · source: plan:Sprint 2

Sprint 2 adds keyboard entry, friendly error handling, responsive layout, and confirms anonymous/free access.

Plan v1, approved. Capacity: 20 points. Goal: Keyboard entry, friendly error handling, responsive layout, and anonymous/free access confirmation. Items assigned (matched to this goal, as the plan input did not label individual items with a sprint): US-005 Enter values with a physical keyboard (3 pts, frontend-agent); US-008 Friendly message for division by zero (3 pts, frontend-agent); US-009 Friendly message for invalid input (3 pts, frontend-agent); US-010 Use the calculator on desktop and mobile (3 pts, frontend-agent); US-011 Use the calculator anonymously and free (1 pt, frontend-agent). Sum of story points = 13 against a 20-point capacity (unused capacity noted, not explained by input). Epics EPIC-003 and EPIC-004 are also listed as plan items with no points/role assigned.

**Related:** EPIC-003, EPIC-004, US-005, US-008, US-009, US-010, US-011
<!-- sdlc:auto:end narrative -->
