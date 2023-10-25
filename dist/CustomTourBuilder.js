import e, { createContext as S, useState as m, useReducer as F, useRef as I, useContext as f, useEffect as _, useMemo as V } from "react";
import r from "prop-types";
const O = (i, t) => {
  switch (t.type) {
    case "ADD_ITEM":
      return [...i, { ...t.payload, note: "" }];
    case "UPDATE_NOTE":
      return i.map((n) => n.id === t.payload.id ? { ...n, note: t.payload.note } : n);
    case "REMOVE_ITEM":
      return i.filter(({ id: n }) => n !== t.payload);
    default:
      return i;
  }
}, g = S();
function C(i) {
  const {
    children: t,
    tourItems: n,
    navPages: s
  } = i, [a, c] = m(""), [l, d] = m(""), [h, o] = m(s || []), [u, E] = m(0), [v, p] = F(
    O,
    n || []
  ), y = I(null);
  return /* @__PURE__ */ e.createElement(
    g.Provider,
    {
      value: {
        iiifBaseUrl: "https://artic.edu/iiif/2",
        tourTitle: a,
        setTourTitle: c,
        tourDescription: l,
        setTourDescription: d,
        tourItems: v,
        tourItemsDispatch: p,
        navPages: h,
        setNavPages: o,
        activeNavPage: u,
        setActiveNavPage: E,
        navSearchButtonRef: y
      }
    },
    t
  );
}
C.propTypes = {
  children: r.node.isRequired,
  tourItems: r.instanceOf(Array),
  navPages: r.instanceOf(Array)
};
g.Provider.propTypes = {
  value: r.shape({
    iiifBaseUrl: r.string,
    tourItems: r.instanceOf(Array),
    tourItemsDispatch: r.func,
    tourTitle: r.string,
    setTourTitle: r.func,
    tourDescription: r.string,
    setTourDescription: r.func,
    navPages: r.instanceOf(Array),
    setNavPages: r.func,
    activeNavPage: r.number,
    setActiveNavPage: r.func
  })
};
function $() {
  const { navPages: i, activeNavPage: t, setActiveNavPage: n, navSearchButtonRef: s } = f(g);
  return /* @__PURE__ */ e.createElement("nav", { id: "aic-ct-navigation", "aria-label": "Custom tour navigation" }, i.map((a, c) => /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: a.id === 0 ? s : null,
      key: a.id,
      id: `aic-ct-nav-button-${a.id}`,
      "aria-controls": `aic-ct-nav-page-${a.id}`,
      "aria-pressed": a.id === t,
      type: "button",
      onClick: () => n(c)
    },
    a.title
  )));
}
function x({ children: i }) {
  const { setNavPages: t } = f(g);
  return _(() => {
    t(
      i ? i.map((n, s) => ({
        id: s,
        title: n.props.title
      })) : []
    );
  }, [i, t]), /* @__PURE__ */ e.createElement("div", { id: "aic-ct-nav-pages" }, i);
}
x.propTypes = {
  children: r.node.isRequired
};
function R(i) {
  const { id: t, children: n } = i, { activeNavPage: s } = f(g);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      tabIndex: "0",
      id: `aic-ct-nav-page-${t}`,
      "aria-labelledby": `aic-ct-nav-button-${t}`,
      "aria-hidden": s !== t,
      style: s !== t ? { display: "none" } : {}
    },
    n
  );
}
R.propTypes = {
  id: r.number.isRequired,
  title: r.string.isRequired,
  children: r.oneOfType([
    r.arrayOf(r.element),
    r.object
  ]).isRequired
};
const T = S();
function D(i) {
  const {
    children: t,
    searchResultItems: n,
    searchQuery: s,
    searchFetching: a,
    searchError: c
  } = i, [l, d] = m(
    n || null
  ), [h, o] = m(s || ""), [u, E] = m(
    a || !1
  ), [v, p] = m(c || !1);
  return /* @__PURE__ */ e.createElement(
    T.Provider,
    {
      value: {
        searchResultItems: l,
        setSearchResultItems: d,
        searchQuery: h,
        setSearchQuery: o,
        searchFetching: u,
        setSearchFetching: E,
        searchError: v,
        setSearchError: p
      }
    },
    t
  );
}
D.propTypes = {
  children: r.node.isRequired,
  searchResultItems: r.array,
  searchQuery: r.string,
  searchFetching: r.bool,
  searchError: r.oneOfType([r.string, r.bool])
};
T.Provider.propTypes = {
  value: r.shape({
    searchResultItems: r.array,
    setSearchResultItems: r.func,
    searchQuery: r.string,
    setSearchQuery: r.func,
    searchFetching: r.bool,
    setSearchFetching: r.func,
    searchError: r.oneOfType([r.string, r.bool]),
    setSearchError: r.func
  }),
  children: r.node.isRequired
};
function B() {
  const {
    searchQuery: i,
    setSearchQuery: t,
    setSearchResultItems: n,
    setSearchError: s,
    setSearchFetching: a
  } = f(T), [c, l] = m(i), d = (o) => {
    const u = new URL("https://api.artic.edu/api/v1/artworks/search");
    u.searchParams.set("query[bool][must][][term][is_on_view]", "true"), u.searchParams.set(
      "query[bool][must][][exists][field]",
      "description"
    ), u.searchParams.set(
      "query[bool][should][][exists][field]",
      "description"
    ), u.searchParams.set(
      "query[bool][should][][exists][field]",
      "subject_id"
    ), u.searchParams.set("query[bool][should][][exists][field]", "style_id"), u.searchParams.set("query[bool][should][][term][is_boosted]", "true"), u.searchParams.set("query[bool][minimum_should_match]", "1"), u.searchParams.set("fields", "true"), u.searchParams.set("limit", "10"), u.searchParams.set("q", o);
    const E = new AbortController(), v = E.signal;
    if (o === "") {
      n(null), a(!1), s(null);
      return;
    }
    async function p() {
      try {
        const b = await (await fetch(u, { signal: v })).json();
        n(b.data), a(!1);
      } catch (y) {
        if (y.name === "AbortError")
          return;
        s("Error fetching results"), a(!1);
      }
    }
    return a(!0), p(), () => {
      E.abort();
    };
  }, h = (o) => {
    t(c), d(c), o.preventDefault();
  };
  return /* @__PURE__ */ e.createElement(
    "form",
    {
      id: "aic-ct-search",
      role: "search",
      "aria-label": "Objects for your tour",
      onSubmit: h
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
        onChange: (o) => {
          o.target.value && o.target.setCustomValidity(""), l(o.target.value);
        },
        onInvalid: (o) => {
          o.target.setCustomValidity("You must enter a search term");
        },
        required: !0
      }
    ),
    /* @__PURE__ */ e.createElement("button", { id: "aic-ct-search__button", type: "submit" }, "Search")
  );
}
function q(i, t, n = "", s = "", a = "full", c = !0) {
  return `${i}/${t}/${a}/${c && "!"}${n},${s}/0/default.jpg`;
}
function A(i) {
  const { iiifBaseUrl: t, tourItems: n, tourItemsDispatch: s } = f(g), { itemData: a } = i, [c, l] = m(!1), d = () => {
    s({
      type: c ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: c ? a.id : a
    });
  };
  return _(() => {
    l(n.find((h) => h.id === a.id));
  }, [n, a.id]), /* @__PURE__ */ e.createElement("li", { id: `aic-ct-search__item-${a.id}` }, a.title && /* @__PURE__ */ e.createElement("h2", null, a.title), a.image_id && /* @__PURE__ */ e.createElement(
    "img",
    {
      src: q(t, a.image_id, "240", "240"),
      alt: a.thumbnail.alt_text
    }
  ), a.artist_title && /* @__PURE__ */ e.createElement("p", null, a.artist_title), a.description && /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: a.description } }), /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      onClick: d,
      "aria-pressed": c ? "true" : "false",
      "aria-label": "Add to tour"
    },
    c ? "Remove from tour" : "Add to tour"
  ));
}
A.propTypes = {
  itemData: r.shape({
    id: r.number.isRequired,
    title: r.string.isRequired,
    image_id: r.string,
    thumbnail: r.shape({
      alt_text: r.string
    }),
    artist_title: r.string,
    description: r.string
  })
};
function M() {
  const { searchError: i, searchFetching: t, searchResultItems: n } = f(T);
  return t ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__loading" }, "Loading...") : i ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__error" }, i) : (n == null ? void 0 : n.length) === 0 ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__no-results" }, "Sorry, we couldn’t find any results matching your criteria") : (n == null ? void 0 : n.length) > 0 ? /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-search__results" }, n.map((s) => /* @__PURE__ */ e.createElement(A, { key: s.id, itemData: s }))) : null;
}
function P(i, t) {
  const [n, s] = m(i || ""), a = I(null);
  return {
    value: n,
    onChange: (l) => {
      const { value: d } = l.target;
      a.current.ariaBusy = !0, s(d), a.current.ariaBusy = !1;
    },
    countRef: a,
    charsRemaining: t - n.length,
    maxLength: t
  };
}
function N(i) {
  var v;
  const { itemData: t, itemIndex: n, setShouldAssignFocus: s, setRemoveButtons: a } = i, { iiifBaseUrl: c, tourItems: l, tourItemsDispatch: d } = f(g), h = I(null), o = P((v = l[n]) == null ? void 0 : v.note, 255), u = V(
    () => ({
      id: t.id,
      note: o.value
    }),
    [t.id, o.value]
  ), E = () => {
    d({
      type: "REMOVE_ITEM",
      payload: t.id
    });
  };
  return _(() => {
    d({
      type: "UPDATE_NOTE",
      payload: u
    });
  }, [u, d]), _(() => {
    const p = h.current;
    return () => {
      document.activeElement === p && (l.length > 1 ? l.find((y, b) => {
        y.id === t.id && s({
          flag: !0,
          id: l[b !== l.length - 1 ? b + 1 : b - 1].id
        });
      }) : s({
        flag: !0,
        id: null
      }));
    };
  }, [l, t.id, s]), _(() => (a((p) => [...p, { id: t.id, ref: h }]), () => {
    a(
      (p) => p.filter((y) => y.id !== t.id)
    );
  }), [a, l, t.id]), /* @__PURE__ */ e.createElement("li", { id: `aic-ct-tour__item-${t.id}` }, t.title && /* @__PURE__ */ e.createElement("h2", null, t.title), t.image_id && /* @__PURE__ */ e.createElement(
    "img",
    {
      src: q(c, t.image_id, "240", "240"),
      alt: t.thumbnail.alt_text
    }
  ), t.artist_title && /* @__PURE__ */ e.createElement("p", null, t.artist_title), t.description && /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: t.description } }), /* @__PURE__ */ e.createElement("label", { htmlFor: `aic-ct-note-${t.id}` }, "Personal note", " ", /* @__PURE__ */ e.createElement("span", { ref: o.countRef, "aria-live": "polite" }, "(", o.charsRemaining, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "textarea",
    {
      id: `aic-ct-note-${t.id}`,
      onChange: o.onChange,
      rows: "5",
      value: o.value,
      maxLength: o.maxLength
    }
  ), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: h,
      type: "button",
      onClick: () => {
        E(t.id);
      }
    },
    "Remove from tour"
  ));
}
N.propTypes = {
  itemData: r.shape({
    id: r.number.isRequired,
    title: r.string.isRequired,
    image_id: r.string,
    thumbnail: r.shape({
      alt_text: r.string
    }),
    artist_title: r.string,
    description: r.string
  }),
  itemIndex: r.number.isRequired,
  setRemoveButtons: r.func,
  setShouldAssignFocus: r.func
};
function w() {
  const { tourItems: i, navSearchButtonRef: t } = f(g), [n, s] = m({
    flag: !1,
    id: null
  }), [a, c] = m([]);
  return _(() => {
    n.flag && (!i.length && (t != null && t.current) ? t.current.focus() : a.find((l) => l.id === n.id).ref.current.focus(), s(!1));
  }, [i, n, a, t]), /* @__PURE__ */ e.createElement(e.Fragment, null, i.length > 0 ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("h2", { id: "aic-ct-tour__heading" }, "Your tour"), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-tour__results" }, i.map((l, d) => /* @__PURE__ */ e.createElement(
    N,
    {
      key: l.id,
      setRemoveButtons: c,
      itemData: l,
      itemIndex: d,
      shouldAssignFocus: n,
      setShouldAssignFocus: s
    }
  )))) : /* @__PURE__ */ e.createElement("div", { id: "aic-ct-tour__no-items" }, "You haven’t added any artworks to your tour yet"));
}
function k() {
  const { tourTitle: i, setTourTitle: t, tourDescription: n, setTourDescription: s } = f(g), a = P(i, 255), c = P(n, 255);
  return _(() => {
    t(a.value);
  }, [a, t]), _(() => {
    s(c.value);
  }, [c, s]), /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__title" }, "Tour Title", " ", /* @__PURE__ */ e.createElement("span", { ref: a.countRef, "aria-live": "polite" }, "(", a.charsRemaining, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      onChange: a.onChange,
      value: a.value,
      id: "aic-ct-metadata__title",
      maxLength: a.maxLength
    }
  )), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__description" }, "Tour Description", " ", /* @__PURE__ */ e.createElement("span", { ref: c.countRef, "aria-live": "polite" }, "(", c.charsRemaining, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "textarea",
    {
      id: "aic-ct-metadata__description",
      onChange: c.onChange,
      rows: "5",
      value: c.value,
      maxLength: c.maxLength
    }
  )));
}
const U = () => /* @__PURE__ */ e.createElement(C, null, /* @__PURE__ */ e.createElement($, null), /* @__PURE__ */ e.createElement(x, null, /* @__PURE__ */ e.createElement(R, { id: 0, title: "Search" }, /* @__PURE__ */ e.createElement(D, null, /* @__PURE__ */ e.createElement(B, null), /* @__PURE__ */ e.createElement(M, null))), /* @__PURE__ */ e.createElement(R, { id: 1, title: "Your tour" }, /* @__PURE__ */ e.createElement(k, null), /* @__PURE__ */ e.createElement(w, null))));
export {
  U as default
};
