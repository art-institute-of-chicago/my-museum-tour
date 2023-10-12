import e, { useState as l } from "react";
const o = (a) => {
  const { initMessage: s } = a, [t, n] = l(s);
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("h1", { className: "f-headline", style: { marginBottom: "20px" } }, t), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: t,
      onChange: (r) => n(r.target.value)
    }
  ));
};
export {
  o as default
};
