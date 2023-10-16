import t, { useState as c, useEffect as g } from "react";
const b = (s) => {
  const [e, l] = c(null), [r, n] = c(!1), [i, o] = c(null);
  return g(() => {
    const a = new URL("https://api.artic.edu/api/v1/artworks/search");
    a.searchParams.set("query[bool][must][][term][is_on_view]", "true"), a.searchParams.set(
      "query[bool][must][][exists][field]",
      "description"
    ), a.searchParams.set(
      "query[bool][should][][exists][field]",
      "description"
    ), a.searchParams.set(
      "query[bool][should][][exists][field]",
      "subject_id"
    ), a.searchParams.set("query[bool][should][][exists][field]", "style_id"), a.searchParams.set("query[bool][should][][term][is_boosted]", "true"), a.searchParams.set("query[bool][minimum_should_match]", "1"), a.searchParams.set("fields", "true"), a.searchParams.set("limit", "10"), a.searchParams.set("q", s);
    const h = new AbortController(), u = h.signal;
    if (s === "") {
      l(null), n(!1), o(null);
      return;
    }
    async function d() {
      try {
        const E = await (await fetch(a, { signal: u })).json();
        l(E), n(!1);
      } catch (f) {
        if (f.name === "AbortError")
          return;
        o(f.message), n(!1);
      }
    }
    return n(!0), d(), () => {
      h.abort();
    };
  }, [s]), { data: e, error: i, fetching: r };
};
function p(s) {
  const {
    searchQuery: e,
    setSearchQuery: l,
    setSearchResultItems: r,
    setSearchError: n,
    setSearchFetching: i,
    setIiifBaseUrl: o
  } = s, [a, h] = c(""), { data: u, error: d, fetching: f } = b(e), E = (m) => {
    l(a), m.preventDefault();
  };
  return g(() => {
    u && (r(u.data), o(u.config.iiif_url));
  }, [u, r, o]), g(() => {
    n(d);
  }, [d, n]), g(() => {
    i(f);
  }, [f, i]), /* @__PURE__ */ t.createElement(
    "form",
    {
      role: "search",
      "aria-label": "Objects for your tour",
      onSubmit: E
    },
    /* @__PURE__ */ t.createElement(
      "input",
      {
        type: "search",
        placeholder: "Search",
        onChange: (m) => {
          m.target.value && m.target.setCustomValidity(""), h(m.target.value);
        },
        onInvalid: (m) => {
          m.target.setCustomValidity("You must enter a search term");
        },
        required: !0
      }
    ),
    /* @__PURE__ */ t.createElement("button", { type: "submit" }, "Search")
  );
}
function y(s, e, l = "", r = "", n = "full", i = !0) {
  return `${s}/${e}/${n}/${i && "!"}${l},${r}/0/default.jpg`;
}
function S(s) {
  const { item: e, iiifBaseUrl: l } = s;
  return /* @__PURE__ */ t.createElement("li", null, e.title && /* @__PURE__ */ t.createElement("h2", null, e.title), e.image_id && /* @__PURE__ */ t.createElement(
    "img",
    {
      src: y(l, e.image_id, "240", "240"),
      alt: e.thumbnail.alt_text
    }
  ), e.artist_title && /* @__PURE__ */ t.createElement("p", null, e.artist_title), e.description && /* @__PURE__ */ t.createElement("div", { dangerouslySetInnerHTML: { __html: e.description } }));
}
function _(s) {
  const { searchError: e, searchFetching: l, searchResultItems: r, iiifBaseUrl: n } = s;
  return l ? /* @__PURE__ */ t.createElement("div", null, "Loading...") : e ? /* @__PURE__ */ t.createElement("div", null, e) : (r == null ? void 0 : r.length) === 0 ? /* @__PURE__ */ t.createElement("div", null, "No results found") : (r == null ? void 0 : r.length) > 0 ? /* @__PURE__ */ t.createElement("ul", null, r.map((i) => /* @__PURE__ */ t.createElement(
    S,
    {
      key: i.id,
      item: i,
      iiifBaseUrl: n
    }
  ))) : null;
}
const P = () => {
  const [s, e] = c(null), [l, r] = c(""), [n, i] = c(!1), [o, a] = c(null), [h, u] = c("");
  return /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement(
    p,
    {
      searchQuery: l,
      setSearchQuery: r,
      setSearchFetching: i,
      setSearchError: a,
      setSearchResultItems: e,
      setIiifBaseUrl: u
    }
  ), /* @__PURE__ */ t.createElement(
    _,
    {
      searchError: o,
      searchFetching: n,
      searchResultItems: s,
      iiifBaseUrl: h
    }
  ));
};
export {
  P as default
};
