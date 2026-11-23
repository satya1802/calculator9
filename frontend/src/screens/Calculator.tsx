// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { X } = Icons;

const PRODUCT = "calculator9";
const SCREEN = "Calculator";
const MONO = 'ui-monospace, "SF Mono", Menlo, Consolas, monospace';

const DIV_ZERO = "Cannot divide by zero — press C to start again.";
const TOO_BIG = "That answer is too long to show — press C to start again.";

const KEYS = [
  { wf: "b-3-0", label: "C", kind: "clear", aria: "Clear", variant: "control" },
  { wf: "b-3-1", label: "%", kind: "percent", aria: "Percent", variant: "operator" },
  { wf: "b-3-2", label: "÷", kind: "op", value: "÷", aria: "Divide", variant: "operator" },
  { wf: "b-3-3", label: "×", kind: "op", value: "×", aria: "Multiply", variant: "operator" },
  { wf: "b-4-0", label: "7", kind: "digit", value: "7", variant: "digit" },
  { wf: "b-4-1", label: "8", kind: "digit", value: "8", variant: "digit" },
  { wf: "b-4-2", label: "9", kind: "digit", value: "9", variant: "digit" },
  { wf: "b-4-3", label: "−", kind: "op", value: "−", aria: "Subtract", variant: "operator" },
  { wf: "b-5-0", label: "4", kind: "digit", value: "4", variant: "digit" },
  { wf: "b-5-1", label: "5", kind: "digit", value: "5", variant: "digit" },
  { wf: "b-5-2", label: "6", kind: "digit", value: "6", variant: "digit" },
  { wf: "b-5-3", label: "+", kind: "op", value: "+", aria: "Add", variant: "operator" },
  { wf: "b-6-0", label: "1", kind: "digit", value: "1", variant: "digit" },
  { wf: "b-6-1", label: "2", kind: "digit", value: "2", variant: "digit" },
  { wf: "b-6-2", label: "3", kind: "digit", value: "3", variant: "digit" },
  { wf: "b-6-3", label: "=", kind: "equals", aria: "Equals", variant: "equals" },
  { wf: "b-7-0", label: "0", kind: "digit", value: "0", variant: "digit", span: 2 },
  { wf: "b-7-1", label: ".", kind: "dot", aria: "Decimal point", variant: "digit" },
  { wf: "b-7-2", label: "=", kind: "equals", aria: "Equals", variant: "equals" },
];

const DIGIT_WF = {
  "0": "b-7-0", "1": "b-6-0", "2": "b-6-1", "3": "b-6-2", "4": "b-5-0",
  "5": "b-5-1", "6": "b-5-2", "7": "b-4-0", "8": "b-4-1", "9": "b-4-2",
};
const OP_WF = { "÷": "b-3-2", "×": "b-3-3", "−": "b-4-3", "+": "b-5-3" };

const INITIAL = { acc: null, op: null, entry: "0", fresh: true, expr: "", error: null, pulse: 0 };

function fmt(n) {
  if (typeof n !== "number" || !isFinite(n)) return "0";
  let r = Math.round(n * 1e10) / 1e10;
  if (Object.is(r, -0)) r = 0;
  if (Math.abs(r) >= 1e13) return r.toExponential(6);
  return String(r);
}

function compute(a, op, b) {
  if (op === "+") return { value: a + b };
  if (op === "−") return { value: a - b };
  if (op === "×") return { value: a * b };
  if (op === "÷") return b === 0 ? { error: DIV_ZERO } : { value: a / b };
  if (op === "%") return { value: (a * b) / 100 };
  return { value: b };
}

function reducer(state, action) {
  switch (action.type) {
    case "clear":
      return { ...INITIAL, pulse: state.pulse };

    case "digit": {
      if (state.error) return { ...INITIAL, entry: action.value, fresh: false, pulse: state.pulse };
      const base = state.fresh || state.entry === "0" ? "" : state.entry;
      const next = base + action.value;
      if (next.replace(/[-.]/g, "").length > 12) return state;
      return {
        ...state,
        entry: next,
        fresh: false,
        expr: state.op ? fmt(state.acc) + " " + state.op : "",
      };
    }

    case "dot": {
      if (state.error) return { ...INITIAL, entry: "0.", fresh: false, pulse: state.pulse };
      if (state.fresh) {
        return { ...state, entry: "0.", fresh: false, expr: state.op ? fmt(state.acc) + " " + state.op : "" };
      }
      if (state.entry.indexOf(".") !== -1) return state;
      return { ...state, entry: state.entry + "." };
    }

    case "op": {
      if (state.error) return state;
      const cur = parseFloat(state.entry) || 0;
      if (state.op !== null && state.acc !== null && !state.fresh) {
        const r = compute(state.acc, state.op, cur);
        if (r.error) {
          return { ...state, error: r.error, expr: fmt(state.acc) + " " + state.op + " " + state.entry + " =" };
        }
        if (!isFinite(r.value)) return { ...state, error: TOO_BIG };
        return {
          ...state,
          acc: r.value,
          entry: fmt(r.value),
          fresh: true,
          op: action.value,
          expr: fmt(r.value) + " " + action.value,
        };
      }
      const base = state.op !== null && state.fresh && state.acc !== null ? state.acc : cur;
      return {
        ...state,
        acc: base,
        entry: fmt(base),
        fresh: true,
        op: action.value,
        expr: fmt(base) + " " + action.value,
      };
    }

    case "percent": {
      if (state.error) return state;
      if (state.op !== null && !state.fresh) {
        const v = (parseFloat(state.entry) || 0) / 100;
        return { ...state, entry: fmt(v), fresh: false, expr: fmt(state.acc) + " " + state.op };
      }
      return reducer(state, { type: "op", value: "%" });
    }

    case "equals": {
      if (state.error) return state;
      if (state.op === null) {
        return { ...state, expr: state.entry + " =", fresh: true };
      }
      if (state.fresh) {
        return {
          ...state,
          error: "Nothing to work with after the " + state.op + " — type a number, then press =.",
        };
      }
      const r = compute(state.acc, state.op, parseFloat(state.entry) || 0);
      const shown = fmt(state.acc) + " " + state.op + " " + state.entry + " =";
      if (r.error) return { ...state, error: r.error, expr: shown };
      if (!isFinite(r.value)) return { ...state, error: TOO_BIG, expr: shown };
      return {
        acc: null,
        op: null,
        entry: fmt(r.value),
        fresh: true,
        expr: shown,
        error: null,
        pulse: state.pulse + 1,
      };
    }

    default:
      return state;
  }
}

export default function Screen() {
  const [state, dispatch] = React.useReducer(reducer, INITIAL);
  const [pressed, setPressed] = React.useState(null);
  const thick = `3px solid ${brand.primaryColor}`;

  React.useEffect(() => {
    if (!pressed) return undefined;
    const t = setTimeout(() => setPressed(null), 160);
    return () => clearTimeout(t);
  }, [pressed]);

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key;
      const onKeypad = e.target && e.target.closest && e.target.closest("[data-cx-key]");
      if ((k === "Enter" || k === " ") && onKeypad) return;

      let wf = null;
      if (/^[0-9]$/.test(k)) {
        dispatch({ type: "digit", value: k });
        wf = DIGIT_WF[k];
      } else if (k === "." || k === ",") {
        dispatch({ type: "dot" });
        wf = "b-7-1";
      } else if (k === "+") {
        dispatch({ type: "op", value: "+" });
        wf = OP_WF["+"];
      } else if (k === "-") {
        dispatch({ type: "op", value: "−" });
        wf = OP_WF["−"];
      } else if (k === "*" || k === "x" || k === "X") {
        dispatch({ type: "op", value: "×" });
        wf = OP_WF["×"];
      } else if (k === "/") {
        dispatch({ type: "op", value: "÷" });
        wf = OP_WF["÷"];
      } else if (k === "%") {
        dispatch({ type: "percent" });
        wf = "b-3-1";
      } else if (k === "Enter" || k === "=") {
        dispatch({ type: "equals" });
        wf = "b-6-3";
      } else if (k === "Escape" || k === "c" || k === "C") {
        dispatch({ type: "clear" });
        wf = "b-3-0";
      }

      if (wf) {
        e.preventDefault();
        setPressed(wf);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const press = (key) => {
    setPressed(key.wf);
    if (key.kind === "digit") dispatch({ type: "digit", value: key.value });
    else if (key.kind === "op") dispatch({ type: "op", value: key.value });
    else dispatch({ type: key.kind });
  };

  const variantStyle = (variant) => {
    if (variant === "equals") {
      return {
        backgroundColor: brand.primaryColor,
        color: brand.backgroundColor,
        boxShadow: `6px 6px 0 ${brand.accentColor}`,
        fontFamily: MONO,
      };
    }
    if (variant === "operator") {
      return {
        backgroundColor: brand.backgroundColor,
        color: brand.primaryColor,
        boxShadow: `6px 6px 0 ${brand.primaryColor}`,
        fontFamily: brand.fontHeading,
      };
    }
    return {
      backgroundColor: brand.backgroundColor,
      color: brand.primaryColor,
      boxShadow: `6px 6px 0 ${brand.primaryColor}`,
      fontFamily: MONO,
    };
  };

  return (
    <div
      style={{
        color: brand.primaryColor,
        fontFamily: brand.fontBody,
        "--cx-shadow": brand.primaryColor,
        "--cx-accent": brand.accentColor,
      }}
    >
      <style>{`
        .cx-btn { transition: transform .12s ease, box-shadow .12s ease; }
        .cx-btn:hover { transform: translate(-2px,-2px); }
        .cx-btn:active, .cx-btn[data-pressed="true"] { transform: translate(3px,3px); }
        .cx-btn:focus-visible { outline: 3px solid var(--cx-shadow); outline-offset: 4px; }
        @keyframes cx-settle { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
        .cx-settle { animation: cx-settle .22s ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .cx-btn { transition: none; }
          .cx-btn:hover, .cx-btn:active, .cx-btn[data-pressed="true"] { transform: none; }
          .cx-settle { animation: none; }
        }
      `}</style>

      <header
        data-wf="b-0-0"
        className="flex items-end justify-between gap-6 pb-4"
        style={{ borderBottom: thick }}
      >
        <div>
          <p className="text-xs uppercase tracking-[0.2em]" style={{ fontFamily: MONO }}>
            {PRODUCT} / Session
          </p>
          <h1
            className="mt-2 text-6xl font-bold leading-none tracking-tight sm:text-7xl"
            style={{ fontFamily: brand.fontHeading }}
          >
            {SCREEN}
          </h1>
        </div>
        <p
          aria-hidden="true"
          className="hidden text-5xl font-bold leading-none tracking-[0.1em] sm:block"
          style={{ fontFamily: brand.fontHeading }}
        >
          +−×÷
        </p>
      </header>

      <div className="mt-8 max-w-xl">
        <section
          data-wf="b-1-0"
          role="status"
          aria-live="polite"
          className="p-5 sm:p-6"
          style={{
            border: thick,
            borderRadius: brand.radius,
            boxShadow: `6px 6px 0 ${brand.primaryColor}`,
            backgroundColor: brand.backgroundColor,
          }}
        >
          <div
            className="flex items-center justify-between pb-3 text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{ fontFamily: MONO, color: brand.neutralColor, borderBottom: `1px dashed ${brand.neutralColor}` }}
          >
            <span>Display</span>
            <span>Runs in this tab</span>
          </div>
          <p
            className="mt-4 overflow-x-auto whitespace-nowrap text-right text-sm uppercase tracking-[0.12em]"
            style={{ fontFamily: MONO, color: brand.neutralColor, fontVariantNumeric: "tabular-nums" }}
          >
            {state.expr || "New calculation"}
          </p>
          <p
            key={state.pulse}
            className="cx-settle mt-1 overflow-x-auto whitespace-nowrap text-right text-5xl font-bold leading-none sm:text-6xl"
            style={{ fontFamily: MONO, fontVariantNumeric: "tabular-nums" }}
          >
            {state.entry}
          </p>
        </section>

        <div data-wf="b-2-0" className="mt-6">
          {state.error ? (
            <div
              role="alert"
              className="flex items-start gap-3 p-4"
              style={{
                border: thick,
                borderRadius: brand.radius,
                boxShadow: `6px 6px 0 ${brand.accentColor}`,
                backgroundColor: brand.backgroundColor,
              }}
            >
              <Icons.AlertCircle aria-hidden="true" className="mt-[2px] h-5 w-5 shrink-0" />
              <p className="text-sm leading-relaxed" style={{ fontFamily: MONO }}>
                <span className="font-bold uppercase tracking-[0.18em]">Error — </span>
                {state.error}
              </p>
            </div>
          ) : (
            <p
              className="text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{ fontFamily: MONO, color: brand.neutralColor }}
            >
              Status — ready. No errors on this entry.
            </p>
          )}
        </div>

        <div className="mt-6 grid grid-cols-4 gap-4">
          {KEYS.map((key, i) => (
            <button
              key={key.wf + "-" + i}
              type="button"
              data-wf={key.wf}
              data-cx-key={key.wf}
              data-pressed={pressed === key.wf ? "true" : "false"}
              aria-label={key.aria}
              onClick={() => press(key)}
              className={
                "cx-btn flex min-h-[64px] items-center justify-center text-3xl font-bold " +
                (key.span === 2 ? "col-span-2" : "")
              }
              style={{ border: thick, borderRadius: brand.radius, ...variantStyle(key.variant) }}
            >
              {key.label}
            </button>
          ))}
        </div>

        <p
          data-wf="b-8-0"
          className="mt-8 text-xs leading-relaxed"
          style={{ fontFamily: MONO, color: brand.neutralColor }}
        >
          <span className="font-bold uppercase tracking-[0.2em]" style={{ color: brand.primaryColor }}>
            Tip:
          </span>{" "}
          you can also type on your keyboard — digits 0–9, + − * / , % and Enter for equals, Esc to clear.
        </p>

        <p
          data-wf="b-9-0"
          className="mt-4 pt-4 text-xs leading-relaxed"
          style={{ fontFamily: MONO, color: brand.neutralColor, borderTop: `1px dashed ${brand.neutralColor}` }}
        >
          No sign-in, no account, free to use. Everything runs in your browser and nothing is saved — your
          calculation disappears when you close the tab.
        </p>
      </div>
    </div>
  );
}
