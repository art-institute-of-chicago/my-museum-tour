import e, { createContext as I, useState as h, useReducer as x, useRef as b, useContext as p, useEffect as y } from "react";
import t from "prop-types";
const B = (i, r) => {
  switch (r.type) {
    case "ADD_ITEM":
      return [...i, r.payload];
    case "REMOVE_ITEM":
      return [...i].filter(({ id: n }) => n !== r.payload);
    default:
      return i;
  }
}, g = I();
function S(i) {
  const {
    children: r,
    tourItems: n,
    navPages: s
  } = i, [a, c] = h(""), [u, m] = h(""), [d, l] = h(s || []), [o, f] = h(0), [E, v] = x(
    B,
    n || []
  ), _ = b(null);
  return /* @__PURE__ */ e.createElement(
    g.Provider,
    {
      value: {
        iiifBaseUrl: "https://artic.edu/iiif/2",
        tourTitle: a,
        setTourTitle: c,
        tourDescription: u,
        setTourDescription: m,
        tourItems: E,
        tourItemsDispatch: v,
        navPages: d,
        setNavPages: l,
        activeNavPage: o,
        setActiveNavPage: f,
        navSearchButtonRef: _
      }
    },
    r
  );
}
S.propTypes = {
  children: t.node.isRequired,
  tourItems: t.instanceOf(Array),
  navPages: t.instanceOf(Array)
};
g.Provider.propTypes = {
  value: t.shape({
    iiifBaseUrl: t.string,
    tourItems: t.instanceOf(Array),
    tourItemsDispatch: t.func,
    tourTitle: t.string,
    setTourTitle: t.func,
    tourDescription: t.string,
    setTourDescription: t.func,
    navPages: t.instanceOf(Array),
    setNavPages: t.func,
    activeNavPage: t.number,
    setActiveNavPage: t.func
  })
};
function V() {
  const { navPages: i, activeNavPage: r, setActiveNavPage: n, navSearchButtonRef: s } = p(g);
  return /* @__PURE__ */ e.createElement("nav", { id: "aic-ct-navigation", "aria-label": "Custom tour navigation" }, i.map((a, c) => /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: a.id === 0 ? s : null,
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
function C({ children: i }) {
  const { setNavPages: r } = p(g);
  return y(() => {
    r(
      i ? i.map((n, s) => ({
        id: s,
        title: n.props.title
      })) : []
    );
  }, [i, r]), /* @__PURE__ */ e.createElement("div", { id: "aic-ct-nav-pages" }, i);
}
C.propTypes = {
  children: t.node.isRequired
};
function R(i) {
  const { id: r, children: n } = i, { activeNavPage: s } = p(g);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      tabIndex: "0",
      id: `aic-ct-nav-page-${r}`,
      "aria-labelledby": `aic-ct-nav-button-${r}`,
      "aria-hidden": s !== r,
      style: s !== r ? { display: "none" } : {}
    },
    n
  );
}
R.propTypes = {
  id: t.number.isRequired,
  title: t.string.isRequired,
  children: t.oneOfType([
    t.arrayOf(t.element),
    t.object
  ]).isRequired
};
const T = I();
function q(i) {
  const {
    children: r,
    searchResultItems: n,
    searchQuery: s,
    searchFetching: a,
    searchError: c
  } = i, [u, m] = h(
    n || null
  ), [d, l] = h(s || ""), [o, f] = h(
    a || !1
  ), [E, v] = h(c || !1);
  return /* @__PURE__ */ e.createElement(
    T.Provider,
    {
      value: {
        searchResultItems: u,
        setSearchResultItems: m,
        searchQuery: d,
        setSearchQuery: l,
        searchFetching: o,
        setSearchFetching: f,
        searchError: E,
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
T.Provider.propTypes = {
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
function O() {
  const {
    searchQuery: i,
    setSearchQuery: r,
    setSearchResultItems: n,
    setSearchError: s,
    setSearchFetching: a
  } = p(T), [c, u] = h(i), m = (l) => {
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
    ), o.searchParams.set("query[bool][should][][exists][field]", "style_id"), o.searchParams.set("query[bool][should][][term][is_boosted]", "true"), o.searchParams.set("query[bool][minimum_should_match]", "1"), o.searchParams.set("fields", "true"), o.searchParams.set("limit", "10"), o.searchParams.set("q", l);
    const f = new AbortController(), E = f.signal;
    if (l === "") {
      n(null), a(!1), s(null);
      return;
    }
    async function v() {
      try {
        const N = await (await fetch(o, { signal: E })).json();
        n(N.data), a(!1);
      } catch (_) {
        if (_.name === "AbortError")
          return;
        s("Error fetching results"), a(!1);
      }
    }
    return a(!0), v(), () => {
      f.abort();
    };
  }, d = (l) => {
    r(c), m(c), l.preventDefault();
  };
  return /* @__PURE__ */ e.createElement(
    "form",
    {
      id: "aic-ct-search",
      role: "search",
      "aria-label": "Objects for your tour",
      onSubmit: d
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
        onChange: (l) => {
          l.target.value && l.target.setCustomValidity(""), u(l.target.value);
        },
        onInvalid: (l) => {
          l.target.setCustomValidity("You must enter a search term");
        },
        required: !0
      }
    ),
    /* @__PURE__ */ e.createElement("button", { id: "aic-ct-search__button", type: "submit" }, "Search")
  );
}
function A(i, r, n = "", s = "", a = "full", c = !0) {
  return `${i}/${r}/${a}/${c && "!"}${n},${s}/0/default.jpg`;
}
function P(i, r) {
  return r - i.length;
}
function D(i) {
  const { iiifBaseUrl: r, tourItems: n, tourItemsDispatch: s } = p(g), { itemData: a } = i, [c, u] = h(!1), m = () => {
    s({
      type: c ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: c ? a.id : a
    });
  };
  return y(() => {
    u(n.find((d) => d.id === a.id));
  }, [n, a.id]), /* @__PURE__ */ e.createElement("li", { id: `aic-ct-search__item-${a.id}` }, a.title && /* @__PURE__ */ e.createElement("h2", null, a.title), a.image_id && /* @__PURE__ */ e.createElement(
    "img",
    {
      src: A(r, a.image_id, "240", "240"),
      alt: a.thumbnail.alt_text
    }
  ), a.artist_title && /* @__PURE__ */ e.createElement("p", null, a.artist_title), a.description && /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: a.description } }), /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      onClick: m,
      "aria-pressed": c ? "true" : "false",
      "aria-label": "Add to tour"
    },
    c ? "Remove from tour" : "Add to tour"
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
function $() {
  const { searchError: i, searchFetching: r, searchResultItems: n } = p(T);
  return r ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__loading" }, "Loading...") : i ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__error" }, i) : (n == null ? void 0 : n.length) === 0 ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__no-results" }, "Sorry, we couldn’t find any results matching your criteria") : (n == null ? void 0 : n.length) > 0 ? /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-search__results" }, n.map((s) => /* @__PURE__ */ e.createElement(D, { key: s.id, itemData: s }))) : null;
}
function M() {
  const { tourTitle: i, setTourTitle: r, tourDescription: n, setTourDescription: s } = p(g), a = 255, c = b(null), u = b(null), m = ({ setter: d, countRef: l, e: o }) => {
    l.current.ariaBusy = !0, d(o.target.value), l.current.ariaBusy = !1;
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__title" }, "Tour Title", " ", /* @__PURE__ */ e.createElement("span", { ref: c, "aria-live": "polite" }, "(", P(i, a), /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      onChange: (d) => m({
        setter: r,
        countRef: c,
        e: d
      }),
      value: i,
      id: "aic-ct-metadata__title",
      maxLength: a
    }
  )), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__description" }, "Tour Description", " ", /* @__PURE__ */ e.createElement("span", { ref: u, "aria-live": "polite" }, "(", P(n, a), /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "textarea",
    {
      id: "aic-ct-metadata__description",
      onChange: (d) => m({
        setter: s,
        countRef: u,
        e: d
      }),
      rows: "5",
      value: n,
      maxLength: a
    }
  )));
}
function F(i) {
  const { itemData: r, setShouldAssignFocus: n, setRemoveButtons: s } = i, { iiifBaseUrl: a, tourItems: c, tourItemsDispatch: u } = p(g), m = b(null), d = () => {
    u({
      type: "REMOVE_ITEM",
      payload: r.id
    });
  };
  return y(() => {
    const l = m.current;
    return () => {
      document.activeElement === l && (c.length > 1 ? c.find((o, f) => {
        o.id === r.id && n({
          flag: !0,
          id: c[f !== c.length - 1 ? f + 1 : f - 1].id
        });
      }) : n({
        flag: !0,
        id: null
      }));
    };
  }, [c, r.id, n]), y(() => (s((l) => [...l, { id: r.id, ref: m }]), () => {
    s(
      (l) => l.filter((o) => o.id !== r.id)
    );
  }), [s, c, r.id]), /* @__PURE__ */ e.createElement("li", { id: `aic-ct-tour__item-${r.id}` }, r.title && /* @__PURE__ */ e.createElement("h2", null, r.title), r.image_id && /* @__PURE__ */ e.createElement(
    "img",
    {
      src: A(a, r.image_id, "240", "240"),
      alt: r.thumbnail.alt_text
    }
  ), r.artist_title && /* @__PURE__ */ e.createElement("p", null, r.artist_title), r.description && /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: r.description } }), /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: m,
      type: "button",
      onClick: () => {
        d(r.id);
      }
    },
    "Remove from tour"
  ));
}
F.propTypes = {
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
  setRemoveButtons: t.func,
  setShouldAssignFocus: t.func
};
function Q() {
  const { tourItems: i, navSearchButtonRef: r } = p(g), [n, s] = h({
    flag: !1,
    id: null
  }), [a, c] = h([]);
  return y(() => {
    n.flag && (!i.length && (r != null && r.current) ? r.current.focus() : a.find((u) => u.id === n.id).ref.current.focus(), s(!1));
  }, [i, n, a, r]), /* @__PURE__ */ e.createElement(e.Fragment, null, i.length > 0 ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("h2", { id: "aic-ct-tour__heading" }, "Your tour"), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-tour__results" }, i.map((u) => /* @__PURE__ */ e.createElement(
    F,
    {
      key: u.id,
      setRemoveButtons: c,
      itemData: u,
      shouldAssignFocus: n,
      setShouldAssignFocus: s
    }
  )))) : /* @__PURE__ */ e.createElement("div", { id: "aic-ct-tour__no-items" }, "You haven’t added any items to your tour yet"));
}
const U = () => /* @__PURE__ */ e.createElement(S, null, /* @__PURE__ */ e.createElement(V, null), /* @__PURE__ */ e.createElement(C, null, /* @__PURE__ */ e.createElement(R, { id: 0, title: "Search" }, /* @__PURE__ */ e.createElement(q, null, /* @__PURE__ */ e.createElement(O, null), /* @__PURE__ */ e.createElement($, null))), /* @__PURE__ */ e.createElement(R, { id: 1, title: "Your tour" }, /* @__PURE__ */ e.createElement(M, null), /* @__PURE__ */ e.createElement(Q, null))));
export {
  U as default
};
