import e, { createContext as x, useState as d, useReducer as k, useRef as S, useMemo as D, useContext as p, useEffect as y } from "react";
import t from "prop-types";
const M = (i, r) => {
  switch (r.type) {
    case "ADD_ITEM":
      return [...i, { ...r.payload, note: "" }];
    case "UPDATE_NOTE":
      return i.map((n) => n.id === r.payload.id ? { ...n, note: r.payload.note } : n);
    case "REMOVE_ITEM":
      return i.filter(({ id: n }) => n !== r.payload);
    default:
      return i;
  }
}, g = x();
function C(i) {
  const {
    children: r,
    tourTitle: n,
    tourDescription: l,
    tourItems: a,
    navPages: c
  } = i, [s, u] = d(n || ""), [f, m] = d(
    l || ""
  ), [o, E] = d(c || []), [b, v] = d(0), [h, _] = k(
    M,
    a || []
  ), T = S(null), [O, w] = d([]), B = "https://artic.edu/iiif/2", $ = D(
    () => ({
      note: 255,
      title: 255,
      description: 255,
      items: {
        min: 1,
        max: 6
      }
    }),
    []
  );
  return /* @__PURE__ */ e.createElement(
    g.Provider,
    {
      value: {
        iiifBaseUrl: B,
        limits: $,
        tourTitle: s,
        setTourTitle: u,
        tourDescription: f,
        setTourDescription: m,
        tourItems: h,
        tourItemsDispatch: _,
        navPages: o,
        setNavPages: E,
        activeNavPage: b,
        setActiveNavPage: v,
        navSearchButtonRef: T,
        validityIssues: O,
        setValidityIssues: w
      }
    },
    r
  );
}
C.propTypes = {
  children: t.node.isRequired,
  tourTitle: t.string,
  tourDescription: t.string,
  tourItems: t.instanceOf(Array),
  navPages: t.instanceOf(Array)
};
g.Provider.propTypes = {
  value: t.shape({
    iiifBaseUrl: t.string,
    limits: t.shape({
      note: t.number,
      title: t.number,
      description: t.number,
      items: t.shape({
        min: t.number,
        max: t.number
      })
    }),
    tourItems: t.instanceOf(Array),
    tourItemsDispatch: t.func,
    tourTitle: t.string,
    setTourTitle: t.func,
    tourDescription: t.string,
    setTourDescription: t.func,
    navPages: t.instanceOf(Array),
    setNavPages: t.func,
    activeNavPage: t.number,
    setActiveNavPage: t.func,
    navSearchButtonRef: t.shape({
      current: t.instanceOf(Element)
    }),
    validityIssues: t.arrayOf(t.string),
    setValidityIssues: t.func
  })
};
function L() {
  const { navPages: i, activeNavPage: r, setActiveNavPage: n, navSearchButtonRef: l } = p(g);
  return /* @__PURE__ */ e.createElement("nav", { id: "aic-ct-navigation", "aria-label": "Custom tour navigation" }, i.map((a, c) => /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: a.id === 0 ? l : null,
      key: a.id,
      id: `aic-ct-nav-button-${a.id}`,
      "aria-controls": `aic-ct-nav-page-${a.id}`,
      "aria-pressed": a.id === r,
      type: "button",
      onClick: () => n(c)
    },
    a.title
  )));
}
function A({ children: i }) {
  const { setNavPages: r } = p(g);
  return y(() => {
    r(
      i ? i.map((n, l) => ({
        id: l,
        title: n.props.title
      })) : []
    );
  }, [i, r]), /* @__PURE__ */ e.createElement("div", { id: "aic-ct-nav-pages" }, i);
}
A.propTypes = {
  children: t.node.isRequired
};
function I(i) {
  const { id: r, children: n } = i, { activeNavPage: l } = p(g);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      tabIndex: "0",
      id: `aic-ct-nav-page-${r}`,
      "aria-labelledby": `aic-ct-nav-button-${r}`,
      "aria-hidden": l !== r,
      style: l !== r ? { display: "none" } : {}
    },
    n
  );
}
I.propTypes = {
  id: t.number.isRequired,
  title: t.string.isRequired,
  children: t.oneOfType([
    t.arrayOf(t.element),
    t.object
  ]).isRequired
};
const R = x();
function q(i) {
  const {
    children: r,
    searchResultItems: n,
    searchQuery: l,
    searchFetching: a,
    searchError: c
  } = i, [s, u] = d(
    n || null
  ), [f, m] = d(l || ""), [o, E] = d(
    a || !1
  ), [b, v] = d(c || !1);
  return /* @__PURE__ */ e.createElement(
    R.Provider,
    {
      value: {
        searchResultItems: s,
        setSearchResultItems: u,
        searchQuery: f,
        setSearchQuery: m,
        searchFetching: o,
        setSearchFetching: E,
        searchError: b,
        setSearchError: v
      }
    },
    r
  );
}
q.propTypes = {
  children: t.node.isRequired,
  searchResultItems: t.array,
  searchQuery: t.string,
  searchFetching: t.bool,
  searchError: t.oneOfType([t.string, t.bool])
};
R.Provider.propTypes = {
  value: t.shape({
    searchResultItems: t.array,
    setSearchResultItems: t.func,
    searchQuery: t.string,
    setSearchQuery: t.func,
    searchFetching: t.bool,
    setSearchFetching: t.func,
    searchError: t.oneOfType([t.string, t.bool]),
    setSearchError: t.func
  }),
  children: t.node.isRequired
};
function Q() {
  const {
    searchQuery: i,
    setSearchQuery: r,
    setSearchResultItems: n,
    setSearchError: l,
    setSearchFetching: a
  } = p(R), [c, s] = d(i), u = (m) => {
    const o = new URL("https://api.artic.edu/api/v1/artworks/search");
    o.searchParams.set("query[bool][must][][term][is_on_view]", "true"), o.searchParams.set(
      "query[bool][must][][exists][field]",
      "description"
    ), o.searchParams.set(
      "query[bool][should][][exists][field]",
      "description"
    ), o.searchParams.set(
      "query[bool][should][][exists][field]",
      "subject_id"
    ), o.searchParams.set("query[bool][should][][exists][field]", "style_id"), o.searchParams.set("query[bool][should][][term][is_boosted]", "true"), o.searchParams.set("query[bool][minimum_should_match]", "1"), o.searchParams.set("fields", "true"), o.searchParams.set("limit", "10"), o.searchParams.set("q", m);
    const E = new AbortController(), b = E.signal;
    if (m === "") {
      n(null), a(!1), l(null);
      return;
    }
    async function v() {
      try {
        const _ = await (await fetch(o, { signal: b })).json();
        n(_.data), a(!1);
      } catch (h) {
        if (h.name === "AbortError")
          return;
        l("Error fetching results"), a(!1);
      }
    }
    return a(!0), v(), () => {
      E.abort();
    };
  }, f = (m) => {
    r(c), u(c), m.preventDefault();
  };
  return /* @__PURE__ */ e.createElement(
    "form",
    {
      id: "aic-ct-search",
      role: "search",
      "aria-label": "Objects for your tour",
      onSubmit: f
    },
    /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-search__input", className: "sr-only" }, "Search the collection"),
    /* @__PURE__ */ e.createElement("br", null),
    /* @__PURE__ */ e.createElement(
      "input",
      {
        id: "aic-ct-search__input",
        type: "search",
        placeholder: "Search",
        value: c,
        onChange: (m) => {
          m.target.value && m.target.setCustomValidity(""), s(m.target.value);
        },
        onInvalid: (m) => {
          m.target.setCustomValidity("You must enter a search term");
        },
        required: !0
      }
    ),
    /* @__PURE__ */ e.createElement("button", { id: "aic-ct-search__button", type: "submit" }, "Search")
  );
}
function F(i, r, n = "", l = "", a = "full", c = !0) {
  return `${i}/${r}/${a}/${c && "!"}${n},${l}/0/default.jpg`;
}
function N(i) {
  const { iiifBaseUrl: r, tourItems: n, tourItemsDispatch: l } = p(g), { itemData: a } = i, [c, s] = d(!1), u = () => {
    l({
      type: c ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: c ? a.id : a
    });
  };
  return y(() => {
    s(n.find((f) => f.id === a.id));
  }, [n, a.id]), /* @__PURE__ */ e.createElement("li", { id: `aic-ct-search__item-${a.id}` }, a.title && /* @__PURE__ */ e.createElement("h2", null, a.title), a.image_id && /* @__PURE__ */ e.createElement(
    "img",
    {
      src: F(r, a.image_id, "240", "240"),
      alt: a.thumbnail.alt_text
    }
  ), a.artist_title && /* @__PURE__ */ e.createElement("p", null, a.artist_title), a.description && /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: a.description } }), (n.length < 6 || c) && /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      onClick: u,
      "aria-pressed": c ? "true" : "false",
      "aria-label": c ? "Remove from tour" : "Add to tour"
    },
    c ? "Remove from tour" : "Add to tour"
  ));
}
N.propTypes = {
  itemData: t.shape({
    id: t.number.isRequired,
    title: t.string.isRequired,
    image_id: t.string,
    thumbnail: t.shape({
      alt_text: t.string
    }),
    artist_title: t.string,
    description: t.string
  })
};
function U() {
  const { searchError: i, searchFetching: r, searchResultItems: n } = p(R);
  return r ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__loading" }, "Loading...") : i ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__error" }, i) : (n == null ? void 0 : n.length) === 0 ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__no-results" }, "Sorry, we couldn’t find any results matching your criteria") : (n == null ? void 0 : n.length) > 0 ? /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-search__results" }, n.map((l) => /* @__PURE__ */ e.createElement(N, { key: l.id, itemData: l }))) : null;
}
function P(i, r) {
  const [n, l] = d(i || ""), a = S(null);
  return {
    value: n,
    onChange: (s) => {
      const { value: u } = s.target;
      a.current.ariaBusy = !0, l(u), a.current.ariaBusy = !1;
    },
    countRef: a,
    charsRemaining: r - n.length,
    maxLength: r
  };
}
function V(i) {
  var v;
  const { itemData: r, itemIndex: n, setShouldAssignFocus: l, setRemoveButtons: a } = i, { iiifBaseUrl: c, tourItems: s, tourItemsDispatch: u, limits: f } = p(g), m = S(null), o = P((v = s[n]) == null ? void 0 : v.note, f.note), E = D(
    () => ({
      id: r.id,
      note: o.value
    }),
    [r.id, o.value]
  ), b = () => {
    u({
      type: "REMOVE_ITEM",
      payload: r.id
    });
  };
  return y(() => {
    u({
      type: "UPDATE_NOTE",
      payload: E
    });
  }, [E, u]), y(() => {
    const h = m.current;
    return () => {
      document.activeElement === h && (s.length > 1 ? s.find((_, T) => {
        _.id === r.id && l({
          flag: !0,
          id: s[T !== s.length - 1 ? T + 1 : T - 1].id
        });
      }) : l({
        flag: !0,
        id: null
      }));
    };
  }, [s, r.id, l]), y(() => (a((h) => [...h, { id: r.id, ref: m }]), () => {
    a(
      (h) => h.filter((_) => _.id !== r.id)
    );
  }), [a, s, r.id]), /* @__PURE__ */ e.createElement("li", { id: `aic-ct-tour__item-${r.id}` }, r.title && /* @__PURE__ */ e.createElement("h2", null, r.title), r.image_id && /* @__PURE__ */ e.createElement(
    "img",
    {
      src: F(c, r.image_id, "240", "240"),
      alt: r.thumbnail.alt_text
    }
  ), r.artist_title && /* @__PURE__ */ e.createElement("p", null, r.artist_title), r.description && /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: r.description } }), /* @__PURE__ */ e.createElement("label", { htmlFor: `aic-ct-note-${r.id}` }, "Personal note", " ", /* @__PURE__ */ e.createElement("span", { ref: o.countRef, "aria-live": "polite" }, "(", o.charsRemaining, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "textarea",
    {
      id: `aic-ct-note-${r.id}`,
      onChange: o.onChange,
      rows: "5",
      value: o.value,
      maxLength: o.maxLength
    }
  ), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: m,
      type: "button",
      onClick: () => {
        b(r.id);
      }
    },
    "Remove from tour"
  ));
}
V.propTypes = {
  itemData: t.shape({
    id: t.number.isRequired,
    title: t.string.isRequired,
    image_id: t.string,
    thumbnail: t.shape({
      alt_text: t.string
    }),
    artist_title: t.string,
    description: t.string
  }),
  itemIndex: t.number.isRequired,
  setRemoveButtons: t.func,
  setShouldAssignFocus: t.func
};
function j() {
  const { tourItems: i, navSearchButtonRef: r } = p(g), [n, l] = d({
    flag: !1,
    id: null
  }), [a, c] = d([]);
  return y(() => {
    n.flag && (!i.length && (r != null && r.current) ? r.current.focus() : a.find((s) => s.id === n.id).ref.current.focus(), l(!1));
  }, [i, n, a, r]), /* @__PURE__ */ e.createElement(e.Fragment, null, i.length > 0 ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("h2", { id: "aic-ct-tour__heading" }, "Your tour"), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-tour__results" }, i.map((s, u) => /* @__PURE__ */ e.createElement(
    V,
    {
      key: s.id,
      setRemoveButtons: c,
      itemData: s,
      itemIndex: u,
      shouldAssignFocus: n,
      setShouldAssignFocus: l
    }
  )))) : /* @__PURE__ */ e.createElement("div", { id: "aic-ct-tour__no-items" }, "You haven’t added any artworks to your tour yet"));
}
function Y() {
  const {
    tourTitle: i,
    setTourTitle: r,
    tourDescription: n,
    setTourDescription: l,
    limits: a
  } = p(g), c = P(i, a.title), s = P(n, a.description);
  return y(() => {
    r(c.value);
  }, [c, r]), y(() => {
    l(s.value);
  }, [s, l]), /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__title" }, "Tour Title", " ", /* @__PURE__ */ e.createElement("span", { ref: c.countRef, "aria-live": "polite" }, "(", c.charsRemaining, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      onChange: c.onChange,
      value: c.value,
      id: "aic-ct-metadata__title",
      maxLength: c.maxLength,
      required: !0
    }
  )), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__description" }, "Tour Description", " ", /* @__PURE__ */ e.createElement("span", { ref: s.countRef, "aria-live": "polite" }, "(", s.charsRemaining, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "textarea",
    {
      id: "aic-ct-metadata__description",
      onChange: s.onChange,
      rows: "5",
      value: s.value,
      maxLength: s.maxLength
    }
  )));
}
function H() {
  const {
    tourTitle: i,
    tourItems: r,
    tourDescription: n,
    validityIssues: l,
    setValidityIssues: a,
    limits: c
  } = p(g);
  return y(() => {
    const s = [];
    i.length || s.push("A title is required"), r.length < c.items.min && s.push("At least one item is required"), r.some((u) => u.note.length > c.note ? (s.push("Notes must not exceed the character limit"), !0) : !1), i.length > c.title && s.push("Tour title must not exceed the character limit"), n.length > c.description && s.push(
      "Tour description must not exceed the character limit"
    ), r.length > c.items.max && s.push("Tours must not contain more than 6 artworks"), a(s);
  }, [i, n, r, a, c]), /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("h2", null, "Submit your tour"), l.length ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", null, "Fix these issue before submitting your tour:"), l.length && /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-validation-errors" }, l.map((s, u) => /* @__PURE__ */ e.createElement("li", { key: u }, s)))) : /* @__PURE__ */ e.createElement("div", { id: "aic-ct-validation-success" }, /* @__PURE__ */ e.createElement("p", null, "Are you sure you want to submit your tour? You won't be able to make any more changes after this stage")));
}
const z = (i) => {
  const { tourTitle: r, tourDescription: n, tourItems: l } = i, a = { tourTitle: r, tourDescription: n, tourItems: l };
  return /* @__PURE__ */ e.createElement(C, { ...a }, /* @__PURE__ */ e.createElement(L, null), /* @__PURE__ */ e.createElement(A, null, /* @__PURE__ */ e.createElement(I, { id: 0, title: "Search" }, /* @__PURE__ */ e.createElement(q, null, /* @__PURE__ */ e.createElement(Q, null), /* @__PURE__ */ e.createElement(U, null))), /* @__PURE__ */ e.createElement(I, { id: 1, title: "Your tour" }, /* @__PURE__ */ e.createElement(Y, null), /* @__PURE__ */ e.createElement(j, null)), /* @__PURE__ */ e.createElement(I, { id: 2, title: "Save your tour" }, /* @__PURE__ */ e.createElement(H, null))));
};
z.propTypes = {
  tourTitle: t.string,
  tourDescription: t.string,
  tourItems: t.array
};
export {
  z as default
};
