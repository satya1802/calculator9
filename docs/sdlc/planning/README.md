# Planning

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
### EPIC-001 · approved · source: planning:EPIC-001

Performs the four basic arithmetic operations plus percent entirely client-side in the browser, with nothing sent to or stored on a server. Scientific functions (powers, roots, trig, logs, parentheses) are explicitly out of scope for this version.

Goal: client-side basic arithmetic calculation engine (add, subtract, multiply, divide, percent). Out of scope: scientific functions. Stories under this epic: US-001, US-002, US-003.

**Related:** US-001, US-002, US-003

### EPIC-002 · approved · source: planning:EPIC-002

Covers entering numbers and operators via on-screen buttons or a physical keyboard, seeing a live display of entry and result, and clearing/resetting to start a new calculation.

Goal: input and display handling for the calculator. Stories under this epic: US-004, US-005, US-006, US-007.

**Related:** US-004, US-005, US-006, US-007

### EPIC-003 · approved · source: planning:EPIC-003

Handles invalid situations, such as division by zero or malformed input, with a friendly readable message instead of crashing or freezing.

Goal: graceful error handling for the calculator. Stories under this epic: US-008, US-009.

**Related:** US-008, US-009

### EPIC-004 · approved · source: planning:EPIC-004

Delivers the calculator as a responsive web application usable across desktop and mobile browsers, available to anyone anonymously and free of charge.

Goal: responsive, anonymous, free web access. Stories under this epic: US-010, US-011.

**Related:** US-010, US-011

### SPRINT-1 · approved · source: plan:Sprint 1

Sprint 1 builds the core client-side arithmetic engine along with on-screen input, live display, and clear/reset, ensuring nothing is persisted or sent to a server.

Goal: 'Core client-side arithmetic engine with on-screen input, live display, and clear/reset -- nothing persisted or sent to a server'. Capacity: 20 points. Related items inferred from goal description: EPIC-001 (arithmetic, nothing persisted), US-004 (on-screen input), US-006 (live display), US-007 (clear/reset). Keyboard entry (US-005) is covered in Sprint 2 per its goal.

**Related:** EPIC-001, EPIC-002, US-001, US-002, US-003, US-004, US-006, US-007

### SPRINT-2 · approved · source: plan:Sprint 2

Sprint 2 adds keyboard entry, friendly error handling for divide-by-zero and invalid input, and responsive/anonymous access across devices.

Goal: 'Keyboard entry, friendly error handling for divide-by-zero and invalid input, and responsive/anonymous access across devices'. Capacity: 20 points. Related items inferred from goal description: US-005 (keyboard entry), EPIC-003 (error handling: US-008, US-009), EPIC-004 (responsive/anonymous access: US-010, US-011).

**Related:** US-005, EPIC-003, EPIC-004, US-008, US-009, US-010, US-011
<!-- sdlc:auto:end narrative -->
