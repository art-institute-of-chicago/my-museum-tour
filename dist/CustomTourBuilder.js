import r, { useState as o, useEffect as p, createContext as b, useContext as g } from "react";
import e from "prop-types";
const R = (a) => {
  const [n, c] = o(null), [t, i] = o(!1), [u, m] = o(null);
  return p(() => {
    const s = new URL("https://api.artic.edu/api/v1/artworks/search");
    s.searchParams.set("query[bool][must][][term][is_on_view]", "true"), s.searchParams.set(
      "query[bool][must][][exists][field]",
      "description"
    ), s.searchParams.set(
      "query[bool][should][][exists][field]",
      "description"
    ), s.searchParams.set(
      "query[bool][should][][exists][field]",
      "subject_id"
    ), s.searchParams.set("query[bool][should][][exists][field]", "style_id"), s.searchParams.set("query[bool][should][][term][is_boosted]", "true"), s.searchParams.set("query[bool][minimum_should_match]", "1"), s.searchParams.set("fields", "true"), s.searchParams.set("limit", "10"), s.searchParams.set("q", a);
    const h = new AbortController(), d = h.signal;
    if (a === "") {
      c(null), i(!1), m(null);
      return;
    }
    async function f() {
      try {
        const _ = await (await fetch(s, { signal: d })).json();
        c(_), i(!1);
      } catch (l) {
        if (l.name === "AbortError")
          return;
        m("Error fetching results"), i(!1);
      }
    }
    return i(!0), f(), () => {
      h.abort();
    };
  }, [a]), { data: n, error: u, fetching: t };
}, y = b();
function S(a) {
  const {
    children: n,
    searchResultItems: c,
    searchQuery: t,
    searchFetching: i,
    searchError: u
  } = a, [m, s] = o(
    c || null
  ), [h, d] = o(t || ""), [f, l] = o(
    i || !1
  ), [_, q] = o(u || !1);
  return /* @__PURE__ */ r.createElement(
    y.Provider,
    {
      value: {
        searchResultItems: m,
        setSearchResultItems: s,
        searchQuery: h,
        setSearchQuery: d,
        searchFetching: f,
        setSearchFetching: l,
        searchError: _,
        setSearchError: q
      }
    },
    n
  );
}
S.propTypes = {
  children: e.node.isRequired,
  searchResultItems: e.array,
  searchQuery: e.string,
  searchFetching: e.bool,
  searchError: e.oneOfType([e.string, e.bool])
};
y.Provider.propTypes = {
  value: e.shape({
    searchResultItems: e.array,
    setSearchResultItems: e.func,
    searchQuery: e.string,
    setSearchQuery: e.func,
    searchFetching: e.bool,
    setSearchFetching: e.func,
    searchError: e.oneOfType([e.string, e.bool]),
    setSearchError: e.func
  }),
  children: e.node.isRequired
};
function F() {
  const {
    searchQuery: a,
    setSearchQuery: n,
    setSearchResultItems: c,
    setSearchError: t,
    setSearchFetching: i
  } = g(y), [u, m] = o(""), { data: s, error: h, fetching: d } = R(a), f = (l) => {
    n(u), l.preventDefault();
  };
  return p(() => {
    s && c(s.data);
  }, [s, c]), p(() => {
    t(h);
  }, [h, t]), p(() => {
    i(d);
  }, [d, i]), /* @__PURE__ */ r.createElement(
    "form",
    {
      id: "aic-ct-search",
      role: "search",
      "aria-label": "Objects for your tour",
      onSubmit: f
    },
    /* @__PURE__ */ r.createElement("label", { htmlFor: "aic-ct-search__input", className: "sr-only" }, "Search the collection"),
    /* @__PURE__ */ r.createElement(
      "input",
      {
        id: "aic-ct-search__input",
        type: "search",
        placeholder: "Search",
        onChange: (l) => {
          l.target.value && l.target.setCustomValidity(""), m(l.target.value);
        },
        onInvalid: (l) => {
          l.target.setCustomValidity("You must enter a search term");
        },
        required: !0
      }
    ),
    /* @__PURE__ */ r.createElement("button", { id: "aic-ct-search__button", type: "submit" }, "Search")
  );
}
function x(a, n, c = "", t = "", i = "full", u = !0) {
  return `${a}/${n}/${i}/${u && "!"}${c},${t}/0/default.jpg`;
}
const E = b();
function v({ children: a }) {
  return /* @__PURE__ */ r.createElement(
    E.Provider,
    {
      value: {
        iiifBaseUrl: "https://artic.edu/iiif/2"
      }
    },
    a
  );
}
v.propTypes = {
  children: e.node.isRequired
};
E.Provider.propTypes = {
  value: e.shape({
    iiifBaseUrl: e.string
  })
};
function P(a) {
  const { iiifBaseUrl: n } = g(E), { id: c, item: t } = a;
  return /* @__PURE__ */ r.createElement("li", { id: `aic-ct-search__item-${c}` }, t.title && /* @__PURE__ */ r.createElement("h2", null, t.title), t.image_id && /* @__PURE__ */ r.createElement(
    "img",
    {
      src: x(n, t.image_id, "240", "240"),
      alt: t.thumbnail.alt_text
    }
  ), t.artist_title && /* @__PURE__ */ r.createElement("p", null, t.artist_title), t.description && /* @__PURE__ */ r.createElement("div", { dangerouslySetInnerHTML: { __html: t.description } }));
}
P.propTypes = {
  id: e.string.isRequired,
  item: e.shape({
    title: e.string.isRequired,
    image_id: e.string,
    thumbnail: e.shape({
      alt_text: e.string
    }),
    artist_title: e.string,
    description: e.string
  })
};
function C() {
  const { iiifBaseUrl: a } = g(E), { searchError: n, searchFetching: c, searchResultItems: t } = g(y);
  return c ? /* @__PURE__ */ r.createElement("div", { id: "aic-ct-search__loading" }, "Loading...") : n ? /* @__PURE__ */ r.createElement("div", { id: "aic-ct-search__error" }, n) : (t == null ? void 0 : t.length) === 0 ? /* @__PURE__ */ r.createElement("div", { id: "aic-ct-search__no-results" }, "Sorry, we couldn’t find any results matching your criteria") : (t == null ? void 0 : t.length) > 0 ? /* @__PURE__ */ r.createElement("ul", { id: "aic-ct-search__results" }, t.map((i) => /* @__PURE__ */ r.createElement(
    P,
    {
      key: i.id,
      item: i,
      iiifBaseUrl: a
    }
  ))) : null;
}
const Q = () => /* @__PURE__ */ r.createElement(v, null, /* @__PURE__ */ r.createElement(S, null, /* @__PURE__ */ r.createElement(F, null), /* @__PURE__ */ r.createElement(C, null)));
export {
  Q as default
};
