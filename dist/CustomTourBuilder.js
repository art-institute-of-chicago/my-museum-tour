import e, { useState as d, useEffect as g, createContext as I, useContext as f, useReducer as P, useRef as b } from "react";
import t from "prop-types";
const q = (s) => {
  const [r, n] = d(null), [c, a] = d(!1), [l, u] = d(null);
  return g(() => {
    const i = new URL("https://api.artic.edu/api/v1/artworks/search");
    i.searchParams.set("query[bool][must][][term][is_on_view]", "true"), i.searchParams.set(
      "query[bool][must][][exists][field]",
      "description"
    ), i.searchParams.set(
      "query[bool][should][][exists][field]",
      "description"
    ), i.searchParams.set(
      "query[bool][should][][exists][field]",
      "subject_id"
    ), i.searchParams.set("query[bool][should][][exists][field]", "style_id"), i.searchParams.set("query[bool][should][][term][is_boosted]", "true"), i.searchParams.set("query[bool][minimum_should_match]", "1"), i.searchParams.set("fields", "true"), i.searchParams.set("limit", "10"), i.searchParams.set("q", s);
    const o = new AbortController(), m = o.signal;
    if (s === "") {
      n(null), a(!1), u(null);
      return;
    }
    async function p() {
      try {
        const y = await (await fetch(i, { signal: m })).json();
        n(y), a(!1);
      } catch (h) {
        if (h.name === "AbortError")
          return;
        u("Error fetching results"), a(!1);
      }
    }
    return a(!0), p(), () => {
      o.abort();
    };
  }, [s]), { data: r, error: l, fetching: c };
}, _ = I();
function v(s) {
  const {
    children: r,
    searchResultItems: n,
    searchQuery: c,
    searchFetching: a,
    searchError: l
  } = s, [u, i] = d(
    n || null
  ), [o, m] = d(c || ""), [p, h] = d(
    a || !1
  ), [y, F] = d(l || !1);
  return /* @__PURE__ */ e.createElement(
    _.Provider,
    {
      value: {
        searchResultItems: u,
        setSearchResultItems: i,
        searchQuery: o,
        setSearchQuery: m,
        searchFetching: p,
        setSearchFetching: h,
        searchError: y,
        setSearchError: F
      }
    },
    r
  );
}
v.propTypes = {
  children: t.node.isRequired,
  searchResultItems: t.array,
  searchQuery: t.string,
  searchFetching: t.bool,
  searchError: t.oneOfType([t.string, t.bool])
};
_.Provider.propTypes = {
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
function x() {
  const {
    searchQuery: s,
    setSearchQuery: r,
    setSearchResultItems: n,
    setSearchError: c,
    setSearchFetching: a
  } = f(_), [l, u] = d(""), { data: i, error: o, fetching: m } = q(s), p = (h) => {
    r(l), h.preventDefault();
  };
  return g(() => {
    i && n(i.data);
  }, [i, n]), g(() => {
    c(o);
  }, [o, c]), g(() => {
    a(m);
  }, [m, a]), /* @__PURE__ */ e.createElement(
    "form",
    {
      id: "aic-ct-search",
      role: "search",
      "aria-label": "Objects for your tour",
      onSubmit: p
    },
    /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-search__input", className: "sr-only" }, "Search the collection"),
    /* @__PURE__ */ e.createElement("br", null),
    /* @__PURE__ */ e.createElement(
      "input",
      {
        id: "aic-ct-search__input",
        type: "search",
        placeholder: "Search",
        onChange: (h) => {
          h.target.value && h.target.setCustomValidity(""), u(h.target.value);
        },
        onInvalid: (h) => {
          h.target.setCustomValidity("You must enter a search term");
        },
        required: !0
      }
    ),
    /* @__PURE__ */ e.createElement("button", { id: "aic-ct-search__button", type: "submit" }, "Search")
  );
}
function R(s, r, n = "", c = "", a = "full", l = !0) {
  return `${s}/${r}/${a}/${l && "!"}${n},${c}/0/default.jpg`;
}
function T(s, r) {
  return r - s.length;
}
const M = (s, r) => {
  switch (r.type) {
    case "ADD_ITEM":
      return new Map([...s, [r.payload.id, r.payload]]);
    case "REMOVE_ITEM":
      return new Map([...s].filter(([n]) => n !== r.payload));
    default:
      return s;
  }
}, E = I();
function S(s) {
  const { children: r, tourItems: n } = s, [c, a] = d(""), [l, u] = d(""), [i, o] = P(
    M,
    new Map(
      n ? n.map((m) => [m.id, m]) : []
    )
  );
  return /* @__PURE__ */ e.createElement(
    E.Provider,
    {
      value: {
        iiifBaseUrl: "https://artic.edu/iiif/2",
        tourTitle: c,
        setTourTitle: a,
        tourDescription: l,
        setTourDescription: u,
        tourItems: i,
        tourItemsDispatch: o
      }
    },
    r
  );
}
S.propTypes = {
  children: t.node.isRequired,
  tourItems: t.instanceOf(Map)
};
E.Provider.propTypes = {
  value: t.shape({
    iiifBaseUrl: t.string,
    tourItems: t.instanceOf(Map),
    tourItemsDispatch: t.func
  })
};
function D(s) {
  const { iiifBaseUrl: r, tourItems: n, tourItemsDispatch: c } = f(E), { itemData: a } = s, [l, u] = d(n.get(a.id)), i = () => {
    c({
      type: l ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: l ? a.id : a
    });
  };
  return g(() => {
    u(n.get(a.id));
  }, [n, a.id]), /* @__PURE__ */ e.createElement("li", { id: `aic-ct-search__item-${a.id}` }, a.title && /* @__PURE__ */ e.createElement("h2", null, a.title), a.image_id && /* @__PURE__ */ e.createElement(
    "img",
    {
      src: R(r, a.image_id, "240", "240"),
      alt: a.thumbnail.alt_text
    }
  ), a.artist_title && /* @__PURE__ */ e.createElement("p", null, a.artist_title), a.description && /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: a.description } }), /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      onClick: i,
      "aria-pressed": l ? "true" : "false",
      "aria-label": "Add to tour"
    },
    l ? "Remove from tour" : "Add to tour"
  ));
}
D.propTypes = {
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
function w() {
  const { searchError: s, searchFetching: r, searchResultItems: n } = f(_);
  return r ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__loading" }, "Loading...") : s ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__error" }, s) : (n == null ? void 0 : n.length) === 0 ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__no-results" }, "Sorry, we couldn’t find any results matching your criteria") : (n == null ? void 0 : n.length) > 0 ? /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-search__results" }, n.map((c) => /* @__PURE__ */ e.createElement(D, { key: c.id, itemData: c }))) : null;
}
function V() {
  const { tourTitle: s, setTourTitle: r, tourDescription: n, setTourDescription: c } = f(E), a = 255, l = b(null), u = b(null), i = ({ setter: o, countRef: m, e: p }) => {
    m.current.ariaBusy = !0, o(p.target.value), m.current.ariaBusy = !1;
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__title" }, "Tour Title", " ", /* @__PURE__ */ e.createElement("span", { ref: l, "aria-live": "polite" }, "(", T(s, a), /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      onChange: (o) => i({
        setter: r,
        countRef: l,
        e: o
      }),
      value: s,
      id: "aic-ct-metadata__title",
      maxLength: a
    }
  )), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__description" }, "Tour Description", " ", /* @__PURE__ */ e.createElement("span", { ref: u, "aria-live": "polite" }, "(", T(n, a), /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "textarea",
    {
      id: "aic-ct-metadata__description",
      onChange: (o) => i({
        setter: c,
        countRef: u,
        e: o
      }),
      rows: "5",
      value: n,
      maxLength: a
    }
  )));
}
function C(s) {
  const { itemData: r } = s, { iiifBaseUrl: n } = f(E);
  return /* @__PURE__ */ e.createElement("li", { id: `aic-ct-tour__item-${r.id}` }, r.title && /* @__PURE__ */ e.createElement("h2", null, r.title), r.image_id && /* @__PURE__ */ e.createElement(
    "img",
    {
      src: R(n, r.image_id, "240", "240"),
      alt: r.thumbnail.alt_text
    }
  ), r.artist_title && /* @__PURE__ */ e.createElement("p", null, r.artist_title), r.description && /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: r.description } }));
}
C.propTypes = {
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
function A() {
  const { tourItems: s } = f(E);
  return window.tourItems = s, /* @__PURE__ */ e.createElement(e.Fragment, null, s.size > 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("h2", { id: "aic-ct-tour__heading" }, "Your tour"), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-tour__results" }, Array.from(s).map(([r, n]) => /* @__PURE__ */ e.createElement(C, { key: r, itemData: n })))));
}
const $ = () => /* @__PURE__ */ e.createElement(S, null, /* @__PURE__ */ e.createElement(V, null), /* @__PURE__ */ e.createElement(v, null, /* @__PURE__ */ e.createElement(x, null), /* @__PURE__ */ e.createElement(w, null)), /* @__PURE__ */ e.createElement(A, null));
export {
  $ as default
};
