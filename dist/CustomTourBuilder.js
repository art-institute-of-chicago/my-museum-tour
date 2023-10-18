import e, { useState as h, useEffect as E, createContext as S, useContext as f, useRef as b } from "react";
import r from "prop-types";
const F = (s) => {
  const [i, c] = h(null), [t, a] = h(!1), [u, m] = h(null);
  return E(() => {
    const n = new URL("https://api.artic.edu/api/v1/artworks/search");
    n.searchParams.set("query[bool][must][][term][is_on_view]", "true"), n.searchParams.set(
      "query[bool][must][][exists][field]",
      "description"
    ), n.searchParams.set(
      "query[bool][should][][exists][field]",
      "description"
    ), n.searchParams.set(
      "query[bool][should][][exists][field]",
      "subject_id"
    ), n.searchParams.set("query[bool][should][][exists][field]", "style_id"), n.searchParams.set("query[bool][should][][term][is_boosted]", "true"), n.searchParams.set("query[bool][minimum_should_match]", "1"), n.searchParams.set("fields", "true"), n.searchParams.set("limit", "10"), n.searchParams.set("q", s);
    const l = new AbortController(), d = l.signal;
    if (s === "") {
      c(null), a(!1), m(null);
      return;
    }
    async function p() {
      try {
        const _ = await (await fetch(n, { signal: d })).json();
        c(_), a(!1);
      } catch (o) {
        if (o.name === "AbortError")
          return;
        m("Error fetching results"), a(!1);
      }
    }
    return a(!0), p(), () => {
      l.abort();
    };
  }, [s]), { data: i, error: u, fetching: t };
}, y = S();
function T(s) {
  const {
    children: i,
    searchResultItems: c,
    searchQuery: t,
    searchFetching: a,
    searchError: u
  } = s, [m, n] = h(
    c || null
  ), [l, d] = h(t || ""), [p, o] = h(
    a || !1
  ), [_, C] = h(u || !1);
  return /* @__PURE__ */ e.createElement(
    y.Provider,
    {
      value: {
        searchResultItems: m,
        setSearchResultItems: n,
        searchQuery: l,
        setSearchQuery: d,
        searchFetching: p,
        setSearchFetching: o,
        searchError: _,
        setSearchError: C
      }
    },
    i
  );
}
T.propTypes = {
  children: r.node.isRequired,
  searchResultItems: r.array,
  searchQuery: r.string,
  searchFetching: r.bool,
  searchError: r.oneOfType([r.string, r.bool])
};
y.Provider.propTypes = {
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
function q() {
  const {
    searchQuery: s,
    setSearchQuery: i,
    setSearchResultItems: c,
    setSearchError: t,
    setSearchFetching: a
  } = f(y), [u, m] = h(""), { data: n, error: l, fetching: d } = F(s), p = (o) => {
    i(u), o.preventDefault();
  };
  return E(() => {
    n && c(n.data);
  }, [n, c]), E(() => {
    t(l);
  }, [l, t]), E(() => {
    a(d);
  }, [d, a]), /* @__PURE__ */ e.createElement(
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
        onChange: (o) => {
          o.target.value && o.target.setCustomValidity(""), m(o.target.value);
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
function x(s, i, c = "", t = "", a = "full", u = !0) {
  return `${s}/${i}/${a}/${u && "!"}${c},${t}/0/default.jpg`;
}
function v(s, i) {
  return i - s.length;
}
const g = S();
function R({ children: s }) {
  const [i, c] = h(""), [t, a] = h("");
  return /* @__PURE__ */ e.createElement(
    g.Provider,
    {
      value: {
        iiifBaseUrl: "https://artic.edu/iiif/2",
        tourTitle: i,
        setTourTitle: c,
        tourDescription: t,
        setTourDescription: a
      }
    },
    s
  );
}
R.propTypes = {
  children: r.node.isRequired
};
g.Provider.propTypes = {
  value: r.shape({
    iiifBaseUrl: r.string
  })
};
function P(s) {
  const { iiifBaseUrl: i } = f(g), { id: c, item: t } = s;
  return /* @__PURE__ */ e.createElement("li", { id: `aic-ct-search__item-${c}` }, t.title && /* @__PURE__ */ e.createElement("h2", null, t.title), t.image_id && /* @__PURE__ */ e.createElement(
    "img",
    {
      src: x(i, t.image_id, "240", "240"),
      alt: t.thumbnail.alt_text
    }
  ), t.artist_title && /* @__PURE__ */ e.createElement("p", null, t.artist_title), t.description && /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: t.description } }));
}
P.propTypes = {
  id: r.string.isRequired,
  item: r.shape({
    title: r.string.isRequired,
    image_id: r.string,
    thumbnail: r.shape({
      alt_text: r.string
    }),
    artist_title: r.string,
    description: r.string
  })
};
function I() {
  const { iiifBaseUrl: s } = f(g), { searchError: i, searchFetching: c, searchResultItems: t } = f(y);
  return c ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__loading" }, "Loading...") : i ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__error" }, i) : (t == null ? void 0 : t.length) === 0 ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__no-results" }, "Sorry, we couldn’t find any results matching your criteria") : (t == null ? void 0 : t.length) > 0 ? /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-search__results" }, t.map((a) => /* @__PURE__ */ e.createElement(
    P,
    {
      key: a.id,
      item: a,
      iiifBaseUrl: s
    }
  ))) : null;
}
function Q() {
  const { tourTitle: s, setTourTitle: i, tourDescription: c, setTourDescription: t } = f(g), a = 255, u = b(null), m = b(null), n = ({ setter: l, countRef: d, e: p }) => {
    d.current.ariaBusy = !0, l(p.target.value), d.current.ariaBusy = !1;
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__title" }, "Tour Title", " ", /* @__PURE__ */ e.createElement("span", { ref: u, "aria-live": "polite" }, "(", v(s, a), /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      onChange: (l) => n({
        setter: i,
        countRef: u,
        e: l
      }),
      value: s,
      id: "aic-ct-metadata__title",
      maxLength: a
    }
  )), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__description" }, "Tour Description", " ", /* @__PURE__ */ e.createElement("span", { ref: m, "aria-live": "polite" }, "(", v(c, a), /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "textarea",
    {
      id: "aic-ct-metadata__description",
      onChange: (l) => n({
        setter: t,
        countRef: m,
        e: l
      }),
      rows: "5",
      value: c,
      maxLength: a
    }
  )));
}
const V = () => /* @__PURE__ */ e.createElement(R, null, /* @__PURE__ */ e.createElement(Q, null), /* @__PURE__ */ e.createElement(T, null, /* @__PURE__ */ e.createElement(q, null), /* @__PURE__ */ e.createElement(I, null)));
export {
  V as default
};
