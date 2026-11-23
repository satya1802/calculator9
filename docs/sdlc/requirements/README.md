# Product Requirements

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
## Summary

### REQ-TECH-STACK · approved · source: requirements:technology-stack

Product owner approved a fixed technology stack: FastAPI backend, AWS cloud, PostgreSQL 16 database, React 19 frontend. Design must use exactly these, no substitutions.

- Backend: FastAPI 0.115 -- all calculation happens in the browser; nothing is stored or sent anywhere, so the backend has no real work to do beyond serving the calculator page. Named only to satisfy the need for a backend choice; chosen as the lightest, fastest option to stand up and least likely to get in the way.
- Cloud: AWS -- hosts a single responsive public web page opened anonymously and for free; AWS does this reliably and cheaply at this traffic profile and scales without attention if shared widely.
- Database: PostgreSQL 16 -- nothing is saved between sessions and there are no accounts, so the calculator stores no data at all; listed for completeness only, not read from or written to (no tables, no user records).
- Frontend: React 19 -- the entire product lives in the browser (on-screen buttons, keyboard input, friendly error messages). React keeps the display in sync with every button press or keystroke and produces one responsive page for phone and desktop.

### REQ-SERVICES · approved · source: requirements:technology-stack

The only real operational service required is static page hosting/delivery on AWS; the backend and database named in the stack are nominal and perform no functional work for this product.

- No server-side calculation service: all arithmetic executes client-side in the browser.
- No data service: PostgreSQL is listed but not used -- no reads, writes, tables, or records.
- No authentication service: anonymous use with no sign-in or account.
- No billing/payment service: free to use with no payments.
- Effectively the system needs only a lightweight page-serving service (via FastAPI) deployed on AWS.

**Related:** REQ-TECH-STACK

### REQ-SCOPE · approved · source: requirements:scope

Scope is a lightweight, single-page calculator covering the four basic arithmetic operations and percent, with no history or accounts. Scientific functions and calculation history are explicitly excluded.

In scope:
- Addition, subtraction, multiplication and division
- Percent calculation
- Clear / reset to start a new calculation
- On-screen number and operator buttons
- Physical keyboard entry
- Live result display
- Friendly message for division by zero and invalid input
- Responsive layout for desktop and mobile browsers
- Anonymous use with no sign-in or account
- Free to use with no payments or billing
- Nothing saved between sessions -- no calculation history

Out of scope -- not to be designed or built:
- Scientific functions (powers, roots, trigonometry, logarithms, parentheses)
- Calculation history

### REQ-FEAT-OPENING · approved · source: requirements:feature:Opening the calculator

Covers how the calculator is accessed: no sign-in/payment barrier, and a layout that adapts to desktop vs mobile screens.

- Open without sign-in or payment: anyone can open and use the calculator immediately, with no login, account creation or payment prompt; anonymous and free.
- Adapts to the screen: single web page whose layout adjusts to the device -- fits larger desktop viewports and rearranges on mobile so buttons and display stay legible and tappable.

### REQ-FEAT-ENTRY-DISPLAY · approved · source: requirements:feature:Entering and displaying

Covers how users enter numbers/operators (on-screen or keyboard) and how the display stays live, plus clear/reset behavior.

- On-screen number and operator buttons: buttons for digits 0-9, add, subtract, multiply, divide, percent, clear and equals; tapping/clicking reflects on the display, calculation runs on equals.
- Type with the keyboard: desktop users can type digits and operator keys (+, -, *, /, Enter); keyboard input appears on the display and produces the same result as on-screen buttons.
- Live display of entry and result: display updates as digits/operators are entered, and shows the computed answer when equals is pressed.
- Clear and reset: a clear control discards the current value or in-progress calculation, returns the display to its starting state of 0, and also dismisses any error message.

### REQ-FEAT-MATH · approved · source: requirements:feature:Doing the maths

Covers the four basic arithmetic operations and percent calculation.

- Add, subtract, multiply and divide: performs the four basic arithmetic operations, showing the result on equals (example: 7 + 3 = 10; 8 / 2 = 4).
- Work out a percentage: applies a percent operation to a number (example: 50 x 10% = 5; 25% of 200 = 50).

### REQ-FEAT-ERRORS · approved · source: requirements:feature:Error messages

Covers friendly handling of division-by-zero and invalid/incomplete input, so the calculator never crashes or freezes.

- Message for dividing by zero: shows a clear, friendly message such as 'Cannot divide by zero' instead of crashing or freezing; user can continue after clearing.
- Message for invalid input: when evaluating an incomplete or invalid entry (e.g. two operators in a row with no number between them), shows a friendly message and stays usable so the user can correct it.

### NFR-001 · approved · source: requirements:NFR-001

Privacy: every calculation runs entirely in the browser with no sign-in, no server call, and nothing stored or retained.

When the tab is closed and reopened, the calculator starts fresh with no previous entries, results or history. [privacy]

**Related:** REQ-FEAT-ENTRY-DISPLAY

### NFR-002 · approved · source: requirements:NFR-002

Compatibility: the calculator is a single responsive web page that adapts to common desktop and mobile browsers.

Layout fits the viewport and all buttons and the display stay legible and tappable on both large and small screens. [compatibility]

**Related:** REQ-FEAT-OPENING

### NFR-003 · approved · source: requirements:NFR-003

Usability: divide-by-zero or incomplete/invalid entries show a short, friendly, readable message instead of crashing or freezing.

Calculator remains ready for the next calculation after an error. [usability]

**Related:** REQ-FEAT-ERRORS

### NFR-004 · approved · source: requirements:NFR-004

Performance: all arithmetic is computed in the browser with no server round trip, so updates and results appear instantly.

Each button press or keystroke updates the display at once; the result appears immediately when equals is pressed. [performance]

**Related:** REQ-FEAT-MATH
<!-- sdlc:auto:end narrative -->

<!-- sdlc:auto:start summary -->
**Requirements version:** v1  
**Delivery scope:** lightweight  
**Approved:** 2026-11-23

**Capabilities in scope:** Addition, subtraction, multiplication and division, Percent calculation, Clear / reset to start a new calculation, On-screen number and operator buttons, Physical keyboard entry, Live result display, Friendly message for division by zero and invalid input, Responsive layout for desktop and mobile browsers, Anonymous use with no sign-in or account, Free to use with no payments or billing, Nothing saved between sessions — no calculation history

**Approved technology stack:**

| Layer | Choice | Rationale |
|---|---|---|
| backend | FastAPI | You confirmed every calculation happens in the browser and nothing is stored or sent anywhere, so this product has no real server work to do. FastAPI is named here only to satisfy the need for a backend choice; in practice it does little more than serve the calculator page. It is the lightest, fastest of the options to stand up and will never get in the way, which is what you want for something this simple. |
| cloud | AWS | The calculator is a single responsive web page that the general public opens anonymously and for free, so all 'hosting' means is putting that page on the internet reliably and cheaply. AWS does this comfortably at essentially no cost for this traffic profile and scales without attention if the page is ever shared widely. |
| database | PostgreSQL | You were clear that nothing is saved between sessions and there are no accounts, so the calculator stores no data at all. PostgreSQL is listed as the database option, so it is named here for completeness, but this product will not read from or write to it. No table, no user record, nothing. |
| frontend | React | The whole product lives in the browser — on-screen buttons, keyboard input, and a friendly error message for things like dividing by zero. React handles exactly this: it keeps the number on the display in sync with every button press or keystroke without you hand-wiring the screen, and it produces one responsive page that works the same on a phone and a desktop. For a calculator this small it carries everything you need and nothing you don't. |
<!-- sdlc:auto:end summary -->

<!-- sdlc:auto:start epics -->
## EPIC-001: Basic Arithmetic Calculation

The calculator performs the four basic arithmetic operations — addition, subtraction, multiplication and division — plus percent, entirely in the browser. All calculation is client-side; nothing is sent to or stored on a server. Scientific functions (powers, roots, trigonometry, logarithms, parentheses) are out of scope for this version.

### US-001: Add, subtract, multiply and divide numbers

**Priority:** critical

> As a member of the general public using the calculator, I want to perform addition, subtraction, multiplication and division on numbers I enter, so that I can get quick arithmetic answers in my browser.

| ID | Given | When | Then |
|---|---|---|---|
| AC-001 | the calculator is open and no entry has been made | I enter 7, then +, then 3, then equals | the display shows 10 |
| AC-002 | the calculator is open | I enter 9, then -, then 4, then equals | the display shows 5 |
| AC-003 | the calculator is open | I enter 6, then ×, then 5, then equals | the display shows 30 |
| AC-004 | the calculator is open | I enter 8, then ÷, then 2, then equals | the display shows 4 |

### US-002: Calculate a percentage

**Priority:** high

> As a member of the general public using the calculator, I want to apply a percent operation to a number, so that I can work out percentages without doing it by hand.

| ID | Given | When | Then |
|---|---|---|---|
| AC-005 | the calculator is open | I enter 50, then ×, then 10, then percent, then equals | the display shows the percentage result 5 |
| AC-006 | the calculator is open | I enter 200, then the percent operation with 25 | the display shows 50 |

### US-003: All calculation happens in the browser with nothing stored

**Priority:** high

> As a member of the general public using the calculator anonymously, I want every calculation to run in my browser with nothing saved after I leave, so that I can use it freely without any account and without my input being retained.

| ID | Given | When | Then |
|---|---|---|---|
| AC-007 | I have completed one or more calculations | I close the browser tab and reopen the calculator | no previous calculation, result or history is shown and the calculator starts fresh (Assumption: no server-side storage; all calculation is client-side and nothing persists between sessions; calculation history is out of scope) |
| AC-008 | the calculator is in use | a calculation is performed | the result is produced client-side with no sign-in, account or server call required (Assumption: anonymous general-public use, no authentication, free to use with no payments or billing) |

## EPIC-002: Input and Display

Users enter numbers and operators using on-screen buttons or a physical keyboard, see their entry and result on a live display, and can clear or reset to start a new calculation.

### US-004: Enter values with on-screen buttons

**Priority:** critical

> As a member of the general public, including on a touch device, I want on-screen number and operator buttons, so that I can enter a calculation by tapping or clicking.

| ID | Given | When | Then |
|---|---|---|---|
| AC-009 | the calculator is open | I tap the on-screen digit and operator buttons for a calculation | each press is reflected in the display and the calculation is evaluated when I press equals |
| AC-010 | the calculator is open | I view the interface | buttons for digits 0–9, addition, subtraction, multiplication, division, percent, clear and equals are all present and usable |

### US-005: Enter values with a physical keyboard

**Priority:** high

> As a member of the general public on a desktop browser, I want to type numbers and operators using my keyboard, so that I can calculate faster without reaching for the mouse.

| ID | Given | When | Then |
|---|---|---|---|
| AC-011 | the calculator is open in a desktop browser | I type digits and operator keys (for example + - * / and Enter) | the input appears in the display and the result is produced, matching the equivalent on-screen button entry |

### US-006: See the live result

**Priority:** high

> As a member of the general public using the calculator, I want the display to update as I enter values and show the result, so that I can follow my calculation and read the answer clearly.

| ID | Given | When | Then |
|---|---|---|---|
| AC-012 | the calculator is open | I enter digits and operators | the display updates to reflect the current entry |
| AC-013 | I have entered a complete calculation | I press equals | the display shows the computed result |

### US-007: Clear and reset the calculator

**Priority:** high

> As a member of the general public using the calculator, I want a clear/reset control, so that I can discard the current entry and start a new calculation.

| ID | Given | When | Then |
|---|---|---|---|
| AC-014 | the display shows a value or in-progress calculation | I press clear | the display resets to its initial state (0) ready for a new calculation |
| AC-015 | an error message is shown on the display | I press clear | the error is dismissed and the calculator returns to its initial ready state |

## EPIC-003: Error Handling

The calculator responds to invalid situations such as division by zero or malformed input with a friendly, readable message rather than crashing or freezing.

### US-008: Friendly message for division by zero

**Priority:** high

> As a member of the general public using the calculator, I want a clear message when I try to divide by zero, so that I understand the operation is not possible and can continue.

| ID | Given | When | Then |
|---|---|---|---|
| AC-016 | the calculator is open | I enter a number, divide, 0, then equals | a friendly error message is shown (for example 'Cannot divide by zero') and the calculator does not crash or freeze |
| AC-017 | a division-by-zero error message is displayed | I press clear | the message clears and I can start a new calculation |

### US-009: Friendly message for invalid input

**Priority:** medium

> As a member of the general public using the calculator, I want a clear message when my input is invalid or incomplete, so that I can correct it instead of seeing a broken or frozen screen.

| ID | Given | When | Then |
|---|---|---|---|
| AC-018 | the calculator is open | I attempt to evaluate an incomplete or invalid entry (for example two operators in a row with no number) | a friendly error message is shown and the calculator remains usable |

## EPIC-004: Responsive Web Access

The calculator is delivered as a responsive web application that works across desktop and mobile browsers, available to anyone anonymously and free of charge.

### US-010: Use the calculator on desktop and mobile

**Priority:** high

> As a member of the general public on any common browser, I want the calculator layout to adapt to my screen size, so that I can use it comfortably on both desktop and mobile.

| ID | Given | When | Then |
|---|---|---|---|
| AC-019 | I open the calculator on a desktop browser | the page loads | the layout fits the desktop viewport and all buttons and the display are usable |
| AC-020 | I open the calculator on a mobile browser | the page loads | the layout adapts to the smaller screen and all buttons and the display remain legible and tappable |

### US-011: Use the calculator anonymously and free

**Priority:** high

> As a member of the general public, I want to open and use the calculator with no sign-in, account or payment, so that I can calculate immediately without barriers.

| ID | Given | When | Then |
|---|---|---|---|
| AC-021 | I navigate to the calculator | the page loads | the calculator is immediately usable with no login, account creation or payment prompt (Assumption: anonymous general-public use; no authentication; free to use with no payments or billing) |
<!-- sdlc:auto:end epics -->
