import e, { createContext as D, useState as g, useReducer as de, useRef as C, useMemo as O, useContext as N, useEffect as y, useCallback as he } from "react";
import t from "prop-types";
const pe = (r, a) => {
  switch (a.type) {
    case "ADD_ITEM":
      return a.payload.short_description && (a.payload.description = a.payload.short_description), delete a.payload.short_description, [...r, { ...a.payload, objectNote: "" }];
    case "UPDATE_NOTE":
      return r.map((n) => n.id === a.payload.id ? { ...n, objectNote: a.payload.objectNote } : n);
    case "REMOVE_ITEM":
      return r.filter(({ id: n }) => n !== a.payload);
    default:
      return r;
  }
}, S = D();
function V(r) {
  const {
    children: a,
    tourTitle: n,
    creatorEmail: l,
    creatorName: o,
    recipientName: c,
    tourDescription: i,
    marketingOptIn: m,
    tourItems: s,
    navPages: d,
    apiSaveEndpoint: h,
    iiifBaseUrl: u,
    unloadHandler: p
  } = r, [f, v] = g(n || ""), [E, b] = g(l || ""), [w, k] = g(!1), [_, x] = g(o || ""), [P, Q] = g(c || ""), [z, J] = g(
    m || !1
  ), [G, K] = g(
    i || ""
  ), [W, X] = g(d || []), [Z, ee] = g(0), [te, ae] = de(
    pe,
    s || []
  ), re = C(null), [ne, ie] = g([]), ce = h || "/api/v1/custom-tours", [se, le] = g(!1), [oe, me] = g(0), ue = O(
    () => ({
      objectNote: 255,
      title: 255,
      creatorName: 140,
      recipientName: 140,
      description: 255,
      items: {
        min: 1,
        max: 6
      }
    }),
    []
  );
  return /* @__PURE__ */ e.createElement(
    S.Provider,
    {
      value: {
        apiSaveEndpoint: ce,
        iiifBaseUrl: u,
        limits: ue,
        tourTitle: f,
        setTourTitle: v,
        creatorEmail: E,
        setCreatorEmail: b,
        validCreatorEmail: w,
        setValidCreatorEmail: k,
        creatorName: _,
        setCreatorName: x,
        recipientName: P,
        setRecipientName: Q,
        tourDescription: G,
        setTourDescription: K,
        marketingOptIn: z,
        setMarketingOptIn: J,
        tourItems: te,
        tourItemsDispatch: ae,
        navPages: W,
        setNavPages: X,
        activeNavPage: Z,
        setActiveNavPage: ee,
        headerNextButtonRef: re,
        validityIssues: ne,
        setValidityIssues: ie,
        isSaving: se,
        setIsSaving: le,
        scrollY: oe,
        setScrollY: me,
        unloadHandler: p
      }
    },
    a
  );
}
V.propTypes = {
  apiSaveEndpoint: t.string,
  iiifBaseUrl: t.string,
  children: t.node.isRequired,
  tourTitle: t.string,
  creatorEmail: t.string,
  creatorName: t.string,
  recipientName: t.string,
  marketingOptIn: t.bool,
  tourDescription: t.string,
  tourItems: t.instanceOf(Array),
  navPages: t.instanceOf(Array),
  unloadHandler: t.func
};
S.Provider.propTypes = {
  value: t.shape({
    apiSaveEndpoint: t.string,
    iiifBaseUrl: t.string,
    limits: t.shape({
      note: t.number,
      title: t.number,
      creatorName: t.number,
      recipientName: t.number,
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
    creatorEmail: t.string,
    setCreatorEmail: t.func,
    validCreatorEmail: t.bool,
    setValidCreatorEmail: t.func,
    creatorName: t.string,
    setCreatorName: t.func,
    recipientName: t.string,
    setRecipientName: t.func,
    tourDescription: t.string,
    setTourDescription: t.func,
    marketingOptIn: t.bool,
    setMarketingOptIn: t.func,
    navPages: t.instanceOf(Array),
    setNavPages: t.func,
    activeNavPage: t.number,
    setActiveNavPage: t.func,
    headerNextButtonRef: t.shape({
      current: t.instanceOf(Element)
    }),
    validityIssues: t.arrayOf(t.string),
    setValidityIssues: t.func,
    isSaving: t.bool,
    setIsSaving: t.func,
    scrollY: t.number,
    setScrollY: t.func
  })
};
function fe(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var L = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(r) {
  (function() {
    var a = {}.hasOwnProperty;
    function n() {
      for (var l = [], o = 0; o < arguments.length; o++) {
        var c = arguments[o];
        if (c) {
          var i = typeof c;
          if (i === "string" || i === "number")
            l.push(c);
          else if (Array.isArray(c)) {
            if (c.length) {
              var m = n.apply(null, c);
              m && l.push(m);
            }
          } else if (i === "object") {
            if (c.toString !== Object.prototype.toString && !c.toString.toString().includes("[native code]")) {
              l.push(c.toString());
              continue;
            }
            for (var s in c)
              a.call(c, s) && c[s] && l.push(s);
          }
        }
      }
      return l.join(" ");
    }
    r.exports ? (n.default = n, r.exports = n) : window.classNames = n;
  })();
})(L);
var be = L.exports;
const R = /* @__PURE__ */ fe(be);
function I(r, a, n = "", l = "", o = "full", c = !0) {
  return `${r}/${a}/${o}/${c ? "!" : ""}${n},${l}/0/default.jpg`;
}
function j(r) {
  const a = new URL("https://api.artic.edu/api/v1/artworks/search");
  return a.searchParams.set("query[bool][must][][term][is_on_view]", "true"), a.searchParams.set("query[bool][must][][exists][field]", "description"), a.searchParams.set("query[bool][should][][exists][field]", "description"), a.searchParams.set("query[bool][should][][exists][field]", "subject_id"), a.searchParams.set("query[bool][should][][exists][field]", "style_id"), a.searchParams.set("query[bool][should][][term][is_boosted]", "true"), a.searchParams.set("query[bool][minimum_should_match]", "1"), a.searchParams.set(
    "fields",
    "artist_title,short_description,description,id,image_id,thumbnail,title,date_display,gallery_title,gallery_id"
  ), a.searchParams.set("limit", "60"), typeof r.keywords < "u" && a.searchParams.set("q", r.keywords), r.subjectIds && a.searchParams.set(
    "query[bool][must][][terms][subject_ids][]",
    r.subjectIds
  ), r.categoryIds && a.searchParams.set(
    "query[bool][must][][term][category_ids][value]",
    r.categoryIds
  ), a;
}
const $ = {
  assign: (r) => window.location.assign(r)
};
function ge() {
  const { activeNavPage: r, setActiveNavPage: a, tourItems: n, headerNextButtonRef: l } = N(S), o = n.length, c = R(
    "aic-ct-header__button aic-ct-header__button--back btn btn--transparent btn--w-icon f-buttons",
    {
      "aic-ct-header__button--exit": r === 0
    }
  );
  return /* @__PURE__ */ e.createElement(
    "header",
    {
      id: "aic-ct-header",
      className: "aic-ct-header f-body",
      "aria-label": "Custom tour builder"
    },
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-item-info", "aria-live": "polite" }, /* @__PURE__ */ e.createElement("span", { id: "aic-ct-item-count", className: "aic-ct-item-count f-body" }, o), " ", /* @__PURE__ */ e.createElement("span", null, "artworks ", /* @__PURE__ */ e.createElement("em", null, "(of max 6)"))),
    /* @__PURE__ */ e.createElement(
      "button",
      {
        ref: l,
        id: "aic-ct-header__back-button",
        className: c,
        type: "button",
        onClick: () => {
          r === 0 ? $.assign("/custom-tours") : a(r === 1 ? 0 : 1);
        }
      },
      /* @__PURE__ */ e.createElement("svg", { className: "icon--arrow", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--arrow" })),
      r === 0 && "Exit",
      r === 1 && "Search",
      r === 2 && "Preview"
    ),
    /* @__PURE__ */ e.createElement(
      "button",
      {
        ref: l,
        id: "aic-ct-header__next-button",
        className: "aic-ct-header__button aic-ct-header__button--next btn btn--transparent btn--w-icon f-buttons",
        type: "button",
        onClick: () => {
          a(r === 0 ? 1 : 2);
        }
      },
      r === 0 && "Preview",
      r > 0 && "Finish",
      /* @__PURE__ */ e.createElement("svg", { className: "icon--arrow", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--arrow" }))
    )
  );
}
function ve() {
  const { navPages: r, activeNavPage: a, setActiveNavPage: n, isSaving: l } = N(S), o = (c) => R("aic-ct-nav__button btn f-buttons btn--transparent", {
    "aic-ct-nav__button--active": a === c,
    "aic-ct-nav__button--done": a > c
  });
  return /* @__PURE__ */ e.createElement("footer", { className: "aic-ct-footer", "aria-label": "Custom tour builder footer" }, /* @__PURE__ */ e.createElement(
    "nav",
    {
      id: "aic-ct-navigation",
      className: "aic-ct-nav",
      "aria-label": "Custom tour builder navigation"
    },
    r.map((c, i) => /* @__PURE__ */ e.createElement(
      "button",
      {
        key: c.id,
        id: `aic-ct-nav-button-${c.id}`,
        "aria-controls": `aic-ct-nav-page-${c.id}`,
        "aria-pressed": c.id === a,
        type: "button",
        onClick: () => n(i),
        disabled: l,
        className: o(c.id)
      },
      /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__button-wrapper" }, /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__number" }, c.id + 1), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__title" }, c.title), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__tagline" }, c.tagline))
    ))
  ));
}
function q({ children: r }) {
  const { activeNavPage: a, setNavPages: n } = N(S);
  return y(() => {
    n(
      r ? r.map((l, o) => ({
        id: o,
        title: l.props.title,
        tagline: l.props.tagline
      })) : []
    );
  }, [r, n]), y(() => {
    var l;
    (l = document.querySelector("#custom-tours-builder")) == null || l.scrollIntoView();
  }, [a]), /* @__PURE__ */ e.createElement("div", { id: "aic-ct-nav-pages" }, r);
}
q.propTypes = {
  children: t.node.isRequired
};
function A(r) {
  const { id: a, children: n } = r, { activeNavPage: l } = N(S);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      tabIndex: "0",
      id: `aic-ct-nav-page-${a}`,
      "aria-labelledby": `aic-ct-nav-button-${a}`,
      "aria-hidden": l !== a,
      style: l !== a ? { display: "none" } : {}
    },
    n
  );
}
A.propTypes = {
  id: t.number.isRequired,
  title: t.string.isRequired,
  tagline: t.string.isRequired,
  children: t.oneOfType([
    t.arrayOf(t.element),
    t.object
  ]).isRequired
};
const T = D();
function B(r) {
  const {
    children: a,
    searchResultItems: n,
    searchQuery: l,
    searchFetching: o,
    searchError: c,
    searchPreviewId: i
  } = r, [m, s] = g(
    n || null
  ), [d, h] = g(l || ""), [u, p] = g(
    o || !1
  ), [f, v] = g(c || !1), [E, b] = g(null), [w, k] = g(
    i || null
  ), _ = C();
  return /* @__PURE__ */ e.createElement(
    T.Provider,
    {
      value: {
        searchResultItems: m,
        setSearchResultItems: s,
        searchQuery: d,
        setSearchQuery: h,
        searchFetching: u,
        setSearchFetching: p,
        searchError: f,
        setSearchError: v,
        activeTheme: E,
        setActiveTheme: b,
        searchPreviewId: w,
        setSearchPreviewId: k,
        searchPreviewRef: _
      }
    },
    a
  );
}
B.propTypes = {
  children: t.node.isRequired,
  searchResultItems: t.array,
  searchQuery: t.string,
  searchFetching: t.bool,
  searchError: t.oneOfType([t.string, t.bool]),
  searchPreviewId: t.number
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
    setSearchError: t.func,
    activeTheme: t.string,
    setActiveTheme: t.func,
    searchPreviewId: t.number,
    setSearchPreviewId: t.func,
    searchPreviewRef: t.object
  }),
  children: t.node.isRequired
};
const M = (r) => {
  const [a, n] = g(null), [l, o] = g(!1), [c, i] = g(null), [m, s] = g(null), { dataSubSelector: d, dataSetter: h, fetchingSetter: u, errorSetter: p } = r || {}, f = () => {
    n(null), o(!1), i(null), s(null);
  }, v = async (E) => {
    o(!0);
    const b = new AbortController();
    s(b);
    try {
      const k = await (await fetch(E, { signal: b.signal })).json();
      n(d ? k[d] : k), i(null), o(!1);
    } catch (w) {
      if (w.name === "AbortError") {
        f();
        return;
      }
      i("Error fetching results"), o(!1);
    }
  };
  return y(() => {
    const E = m;
    return () => {
      E && E.abort();
    };
  }, [m]), y(() => {
    h && h(a);
  }, [a, h]), y(() => {
    p && p(c);
  }, [c, p]), y(() => {
    u && u(l);
  }, [l, u]), { data: a, fetching: l, error: c, fetchData: v, resetState: f };
};
function Ee() {
  const {
    searchQuery: r,
    setSearchQuery: a,
    setSearchResultItems: n,
    setSearchFetching: l,
    setSearchError: o,
    setActiveTheme: c
  } = N(T), { fetchData: i } = M({
    dataSubSelector: "data",
    dataSetter: n,
    fetchingSetter: l,
    errorSetter: o
  }), m = (h) => {
    i(j({ keywords: r })), c(null), h.preventDefault();
  }, s = C(null), d = R("m-search-bar aic-ct-search", {
    "s-autocomplete-active": r
  });
  return y(() => {
    i(j({ keywords: "" }));
  }, []), /* @__PURE__ */ e.createElement(
    "form",
    {
      id: "aic-ct-search",
      role: "search",
      "aria-label": "Objects for your tour",
      onSubmit: m,
      className: d
    },
    /* @__PURE__ */ e.createElement("div", { className: "m-search-bar__inner" }, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-search__input", className: "sr-only" }, "Search the collection"), /* @__PURE__ */ e.createElement(
      "input",
      {
        id: "aic-ct-search__input",
        className: "f-secondary",
        type: "text",
        placeholder: "Search by keyword, artist, or reference",
        value: r,
        autoComplete: "off",
        onChange: (h) => {
          a(h.target.value);
        }
      }
    ), /* @__PURE__ */ e.createElement(
      "button",
      {
        id: "aic-ct-search__button",
        className: "m-search-bar__submit",
        type: "submit",
        "aria-label": "Search",
        "aria-expanded": "false",
        ref: s
      },
      /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--search--24" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--search--24" }))
    ), /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "m-search-bar__clear",
        "aria-label": "Clear search",
        type: "reset",
        onClick: () => {
          a(""), n(null), c(null), s.current.focus();
        }
      },
      /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--close" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close" }))
    ))
  );
}
function H(r) {
  const { id: a, label: n, subjectIds: l, categoryIds: o, thumbnailId: c } = r, { iiifBaseUrl: i } = N(S), {
    setSearchResultItems: m,
    setSearchFetching: s,
    setSearchError: d,
    setSearchQuery: h,
    activeTheme: u,
    setActiveTheme: p
  } = N(T), { fetchData: f, resetState: v } = M({
    dataSubSelector: "data",
    dataSetter: m,
    fetchingSetter: s,
    errorSetter: d
  }), E = () => {
    u === n ? (p(null), v()) : (f(j({ subjectIds: l, categoryIds: o })), p(n), h(""));
  }, b = R(
    "aic-ct-theme-toggle tag tag--senary tag--w-image",
    {
      "f-tag": u !== n,
      "f-tag-2": u === n,
      "aic-ct-theme-toggle--active": u === n
    }
  );
  return /* @__PURE__ */ e.createElement(e.Fragment, null, (u === null || u === n) && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: b,
      id: `aic-ct-theme-toggle-${a}`,
      onClick: E,
      "aria-pressed": u === n ? "true" : "false"
    },
    /* @__PURE__ */ e.createElement("span", { className: "aic-ct-theme-toggle__wrapper" }, /* @__PURE__ */ e.createElement(
      "img",
      {
        src: I(i, c, "40", "40", "square"),
        alt: ""
      }
    ), n, u === n && /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--close" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close" })))
  )));
}
H.propTypes = {
  id: t.number.isRequired,
  label: t.string.isRequired,
  subjectIds: t.arrayOf(t.string),
  categoryIds: t.arrayOf(t.string),
  thumbnailId: t.string.isRequired
};
function _e() {
  const r = [
    {
      label: "Landscapes",
      subjectIds: ["TM-8657"],
      thumbnailId: "2d484387-2509-5e8e-2c43-22f9981972eb"
    },
    {
      label: "Fashion",
      subjectIds: ["TM-8663"],
      thumbnailId: "b272df73-a965-ac37-4172-be4e99483637"
    },
    {
      label: "Mythology",
      subjectIds: ["TM-8766"],
      thumbnailId: "3e41420d-2bae-5863-1980-fd39a78e1ffe"
    },
    {
      label: "Animals",
      subjectIds: ["TM-12218"],
      thumbnailId: "9ae64560-a416-ec19-851a-c76c5ca3c64f"
    },
    {
      label: "Chicago artists",
      categoryIds: ["PC-154"],
      thumbnailId: "f7f9615d-2c2b-6b23-47b2-cd6cdc846504"
    },
    {
      label: "Essentials",
      categoryIds: ["PC-831"],
      thumbnailId: "25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e"
    }
  ];
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("header", { className: "aic-ct-section-header" }, /* @__PURE__ */ e.createElement("h2", { className: "f-module-title-2" }, "Browse by theme")), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-themes", className: "aic-ct-themes" }, r.map((a, n) => /* @__PURE__ */ e.createElement(
    H,
    {
      key: a.label,
      id: n,
      label: a.label,
      subjectIds: a.subjectIds,
      categoryIds: a.categoryIds,
      thumbnailId: a.thumbnailId
    }
  ))));
}
function Y(r) {
  const { setSearchPreviewId: a, searchPreviewRef: n } = N(T), { iiifBaseUrl: l, setScrollY: o, tourItems: c } = N(S), { itemData: i } = r, m = c.some((p) => p.id === i.id), s = C(null), d = C(), h = () => {
    const p = document.documentElement.scrollTop;
    a(i.id), o(p), n.current.showModal(), setTimeout(() => {
      document.documentElement.classList.add("s-body-locked"), document.body.scrollTop = p;
    }, 0);
  }, u = R(
    "aic-ct-result o-pinboard__item m-listing m-listing--variable-height",
    {
      "aic-ct-result--selected": m
    }
  );
  return y(() => {
    var p;
    (p = d == null ? void 0 : d.current) != null && p.includes("s-positioned") && s.current.classList.add("s-positioned"), d.current = s.current.className;
  }), /* @__PURE__ */ e.createElement(
    "li",
    {
      ref: s,
      id: `aic-ct-search-item-${i.id}`,
      className: u
    },
    i.image_id && /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "aic-ct-result__button",
        type: "button",
        onClick: h,
        "aria-describedby": m ? "aic-ct-search__in-your-tour" : void 0
      },
      /* @__PURE__ */ e.createElement("span", { className: "m-listing__link" }, /* @__PURE__ */ e.createElement("span", { className: "m-listing__img m-listing__img--no-bg" }, m && /* @__PURE__ */ e.createElement("span", { className: "aic-ct-selected-marker" }, /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--check" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--check" }))), /* @__PURE__ */ e.createElement(
        "img",
        {
          src: i.thumbnail.lqip,
          alt: "",
          height: i.thumbnail.height,
          width: i.thumbnail.width,
          "data-iiif-id": `${l}/${i.image_id}`,
          "data-pin-media": I(
            l,
            i.image_id,
            "600",
            void 0,
            void 0,
            !1
          ),
          sizes: "(min-width: 1640px) 336px, (min-width: 1200px) 20.31vw, (min-width: 900px) 28.13vw, (min-width: 600px) 43.75vw,  43.75vw",
          "data-srcset": `${I(
            l,
            i.image_id,
            "200",
            void 0,
            void 0,
            !1
          )} 200w, ${I(
            l,
            i.image_id,
            "400",
            void 0,
            void 0,
            !1
          )} 400w, ${I(
            l,
            i.image_id,
            "843",
            void 0,
            void 0,
            !1
          )} 843w, ${I(
            l,
            i.image_id,
            "1686",
            void 0,
            void 0,
            !1
          )} 1686w`
        }
      )), /* @__PURE__ */ e.createElement(
        "span",
        {
          id: `aic-ct-result__meta-${i.id}`,
          className: "m-listing__meta"
        },
        i.title && /* @__PURE__ */ e.createElement("span", { className: "title f-list-7" }, i.title),
        i.artist_title && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement("span", { className: "subtitle f-tertiary" }, i.artist_title))
      ))
    )
  );
}
Y.propTypes = {
  itemData: t.shape({
    id: t.number.isRequired,
    title: t.string.isRequired,
    image_id: t.string,
    thumbnail: t.shape({
      alt_text: t.string,
      width: t.number,
      height: t.number,
      lqip: t.string
    }),
    artist_title: t.string,
    description: t.string
  })
};
function ye() {
  const { searchPreviewId: r, searchResultItems: a, searchPreviewRef: n } = N(T), { iiifBaseUrl: l, tourItems: o, tourItemsDispatch: c } = N(S), [i, m] = g(!1), [s, d] = g(null), h = R({
    "aic-ct-preview__content": !0,
    "aic-ct-preview--loading": !s
  });
  y(() => {
    d(
      a.find((f) => f.id === r)
    );
  }, [r, a]);
  const u = () => {
    var f;
    c({
      type: i ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: i ? s.id : s
    }), (f = n == null ? void 0 : n.current) == null || f.close();
  }, p = () => {
    var f;
    (f = n == null ? void 0 : n.current) == null || f.close();
  };
  return y(() => {
    s && m(o.find((f) => f.id === s.id));
  }, [o, s]), /* @__PURE__ */ e.createElement("div", { className: h, id: "aic-ct-preview__content" }, s ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__header aic-ct-preview__core" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-preview__close",
      className: "btn btn--icon btn--transparent aic-ct-preview__close",
      type: "button",
      "aria-label": "Close",
      onClick: p
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" }))
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__image" }, /* @__PURE__ */ e.createElement(
    "img",
    {
      src: I(l, s.image_id, 680, 680),
      width: s.thumbnail.width,
      height: s.thumbnail.height,
      alt: s.thumbnail.alt_text || ""
    }
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__core" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__details" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__title f-headline-editorial" }, s.title, s.date_display && /* @__PURE__ */ e.createElement(e.Fragment, null, ",", " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-preview__date f-list-4" }, s.date_display))), s.artist_title && /* @__PURE__ */ e.createElement("p", { className: "aic-ct-preview__artist f-subheading-1" }, s.artist_title)), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__links" }, (o.length < 6 || i) && /* @__PURE__ */ e.createElement(
    "button",
    {
      id: `aic-ct-preview__action-button-${s.id}`,
      className: "btn f-buttons aic-ct-preview__action-button",
      type: "button",
      onClick: u,
      "aria-pressed": i ? "true" : "false",
      "aria-label": "Toggle from your tour"
    },
    i ? "Remove from your tour" : "Add to your tour"
  )), (s.short_description || s.description) && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__description" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__description-title f-module-title-2" }, "Artwork description"), s.short_description ? /* @__PURE__ */ e.createElement("p", { className: "f-body" }, s.short_description) : /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "f-body",
      dangerouslySetInnerHTML: {
        __html: s.description
      }
    }
  ), /* @__PURE__ */ e.createElement(
    "a",
    {
      className: "aic-ct-preview__learn-more f-link",
      target: "_blank",
      rel: "noopener noreferrer",
      href: `https://www.artic.edu/artworks/${s.id}`
    },
    "Learn more ",
    /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--new-window" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--new-window" }))
  )), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn--transparent btn--w-icon f-buttons aic-ct-preview__close-trans",
      type: "button",
      onClick: p
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" })),
    "Close and go back to results"
  ))) : /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__core aic-ct-loader f-body" }, /* @__PURE__ */ e.createElement("p", null, "Loading..."), /* @__PURE__ */ e.createElement("div", { className: "loader" })));
}
function Ne() {
  const {
    searchError: r,
    searchFetching: a,
    searchResultItems: n,
    searchPreviewRef: l,
    setSearchPreviewId: o
  } = N(T), { scrollY: c } = N(S), i = he(() => {
    o(null), document.documentElement.scrollTop = c, document.documentElement.classList.remove("s-body-locked");
  }, [o, c]);
  return y(() => {
    const m = l.current;
    return m && m.addEventListener("close", i), () => {
      m && m.removeEventListener("close", i);
    };
  }, [l, i]), y(() => {
    const m = new Event("page:updated", { bubbles: !0 });
    setTimeout(() => {
      document.dispatchEvent(m);
    }, 0);
  }, [n]), !n && !a && !r ? null : /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-search-results" }, a && // Render only the loading message while fetching
  /* @__PURE__ */ e.createElement(
    "div",
    {
      id: "aic-ct-search-results__loading",
      className: "aic-ct-search-results__message aic-ct-loader f-body"
    },
    /* @__PURE__ */ e.createElement("p", null, "Loading..."),
    /* @__PURE__ */ e.createElement("div", { className: "loader" })
  ), r && // Render only the error message if there is an error
  /* @__PURE__ */ e.createElement(
    "div",
    {
      id: "aic-ct-search-results__error",
      className: "aic-ct-search-results__message f-body"
    },
    /* @__PURE__ */ e.createElement("p", null, r)
  ), (n == null ? void 0 : n.length) === 0 && !a && !r && // Render only a no results message if there are no results
  /* @__PURE__ */ e.createElement(
    "div",
    {
      id: "aic-ct-search-results__no-results",
      className: "aic-ct-search-results__message f-body"
    },
    /* @__PURE__ */ e.createElement("p", null, "Sorry, we couldn’t find any artworks matching your search. ")
  ), (n == null ? void 0 : n.length) > 0 && !a && !r && // Render the results if there are results
  /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("header", { className: "aic-ct-section-header f-body" }, /* @__PURE__ */ e.createElement("h2", { className: "f-module-title-2" }, "Browse Artworks"), /* @__PURE__ */ e.createElement(
    "span",
    {
      id: "aic-ct-search-result-count",
      className: "aic-ct-item-count aic-ct-item-count--body"
    },
    n.length
  )), /* @__PURE__ */ e.createElement("p", { className: "aic-ct-pre-result-text f-body" }, "These artworks are currently on view and available for your tour."), /* @__PURE__ */ e.createElement(
    "ul",
    {
      id: "aic-ct-search-results__items",
      className: "o-pinboard o-pinboard--2-col@xsmall o-pinboard--2-col@small o-pinboard--3-col@medium o-pinboard--4-col@large o-pinboard--4-col@xlarge",
      "data-pinboard-option-layout": "o-pinboard--2-col@xsmall o-pinboard--2-col@small o-pinboard--2-col@medium o-pinboard--3-col@large o-pinboard--3-col@xlarge",
      "data-pinboard-maintain-order": "false",
      "data-behavior": "pinboard"
    },
    n.map((m) => /* @__PURE__ */ e.createElement(Y, { key: m.id, itemData: m }))
  ), /* @__PURE__ */ e.createElement(
    "dialog",
    {
      ref: l,
      id: "aic-ct-search-preview",
      onClose: i
    },
    /* @__PURE__ */ e.createElement(ye, null)
  ))), /* @__PURE__ */ e.createElement("p", { className: "u-hide", id: "aic-ct-search__in-your-tour" }, "This object is in your tour", " "));
}
function F(r = {}) {
  const { initialValue: a, maxLength: n, valueSetter: l } = r, [o, c] = g(a || ""), i = C(null), m = n - o.length;
  return {
    value: o,
    onChange: (d) => {
      const { value: h } = d.target;
      i.current.ariaBusy = !0, c(h), l && l(h), i.current.ariaBusy = !1;
    },
    countRef: i,
    charsRemaining: m,
    maxLength: n,
    counterEl: /* @__PURE__ */ e.createElement("output", { ref: i }, "(", m, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")
  };
}
function U(r) {
  var f;
  const { itemData: a, itemIndex: n, setShouldAssignFocus: l, setRemoveButtons: o } = r, { iiifBaseUrl: c, tourItems: i, tourItemsDispatch: m, limits: s } = N(S), d = C(null), h = F({
    initialValue: (f = i[n]) == null ? void 0 : f.objectNote,
    maxLength: s.objectNote
  }), u = O(
    () => ({
      id: a.id,
      objectNote: h.value
    }),
    [a.id, h.value]
  ), p = () => {
    m({
      type: "REMOVE_ITEM",
      payload: a.id
    });
  };
  return y(() => {
    m({
      type: "UPDATE_NOTE",
      payload: u
    });
  }, [u, m]), y(() => {
    const v = d.current;
    return () => {
      document.activeElement === v && (i.length > 1 ? i.find((E, b) => {
        E.id === a.id && l({
          flag: !0,
          id: i[b !== i.length - 1 ? b + 1 : b - 1].id
        });
      }) : l({
        flag: !0,
        id: null
      }));
    };
  }, [i, a.id, l]), y(() => (o((v) => [...v, { id: a.id, ref: d }]), () => {
    o(
      (v) => v.filter((E) => E.id !== a.id)
    );
  }), [o, i, a.id]), /* @__PURE__ */ e.createElement(
    "li",
    {
      className: "aic-ct-tour-item aic-ct__core",
      id: `aic-ct-tour-item-${a.id}`
    },
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour-item__lockup" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour-item__info" }, a.title && /* @__PURE__ */ e.createElement("h2", { className: "aic-ct-tour-item__title f-deck" }, a.title, a.date_display && /* @__PURE__ */ e.createElement(e.Fragment, null, ", ", a.date_display)), a.artist_title && /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-tour-item__artist f-body" }, a.artist_title), a.gallery_title && /* @__PURE__ */ e.createElement("p", { className: "aic-ct-tour-item__gallery f-secondary" }, /* @__PURE__ */ e.createElement("svg", { className: "icon--location", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--location" })), a.gallery_title)), a.image_id && /* @__PURE__ */ e.createElement(
      "img",
      {
        className: "aic-ct-tour-item-image",
        src: I(
          c,
          a.image_id,
          "96",
          "128",
          "full",
          !0
        ),
        alt: a.thumbnail.alt_text
      }
    )),
    a.description && /* @__PURE__ */ e.createElement(
      "div",
      {
        className: "aic-ct-tour-item__description f-body ",
        dangerouslySetInnerHTML: { __html: a.description }
      }
    ),
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour-item__note" }, /* @__PURE__ */ e.createElement(
      "label",
      {
        htmlFor: `aic-ct-note-${a.id}`,
        className: "label f-secondary"
      },
      "Your notes on this artwork ",
      /* @__PURE__ */ e.createElement("em", null, "(optional)")
    ), /* @__PURE__ */ e.createElement("span", { className: "textarea" }, /* @__PURE__ */ e.createElement("span", { className: "input__io-container" }, /* @__PURE__ */ e.createElement(
      "textarea",
      {
        className: "f-secondary",
        id: `aic-ct-note-${a.id}`,
        onChange: h.onChange,
        rows: "5",
        placeholder: "e.g. I love the colors in this one.",
        value: h.value,
        maxLength: h.maxLength
      }
    ), h.counterEl))),
    /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "btn btn--transparent f-secondary aic-ct-tour-item__remove",
        ref: d,
        type: "button",
        onClick: () => {
          p(a.id);
        }
      },
      /* @__PURE__ */ e.createElement("svg", { className: "icon--delete", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--delete" })),
      "Remove from tour"
    )
  );
}
U.propTypes = {
  itemData: t.shape({
    id: t.number.isRequired,
    title: t.string.isRequired,
    image_id: t.string,
    thumbnail: t.shape({
      alt_text: t.string
    }),
    artist_title: t.string,
    description: t.string,
    date_display: t.string,
    gallery_title: t.string
  }),
  itemIndex: t.number.isRequired,
  setRemoveButtons: t.func,
  setShouldAssignFocus: t.func
};
function we() {
  const { tourItems: r, headerNextButtonRef: a, setActiveNavPage: n, limits: l } = N(S), [o, c] = g({
    flag: !1,
    id: null
  }), [i, m] = g([]), s = C(null), d = () => {
    n(0), a.current.focus();
  }, h = () => {
    n(2), a.current.focus();
  };
  return y(() => {
    o.flag && (!r.length && (s != null && s.current) ? s.current.focus() : i.find((u) => u.id === o.id).ref.current.focus(), c(!1));
  }, [r, o, i, s]), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour" }, r.length > 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement("header", { className: "aic-ct-section-header f-body" }, /* @__PURE__ */ e.createElement("h2", { id: "aic-ct-tour__heading", className: "f-module-title-2" }, "Artworks in your tour")), /* @__PURE__ */ e.createElement("div", { className: "f-body aic-ct-tour__intro" }, /* @__PURE__ */ e.createElement("p", null, "To optimize your visit, we automatically arrange the order of your tour based on the location of the artwork in the museum."), r.length === 6 && /* @__PURE__ */ e.createElement("p", null, "You've added 6 artworks, the maximum number allowed. Please remove one if you would like to include more artwork."))), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-tour__results" }, r.map((u, p) => /* @__PURE__ */ e.createElement(
    U,
    {
      key: u.id,
      setRemoveButtons: m,
      itemData: u,
      itemIndex: p,
      shouldAssignFocus: o,
      setShouldAssignFocus: c
    }
  )))), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta" }, r.length > 0 && r.length < 6 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You've added ", r.length, " of the maximum", " ", l.items.max, " artworks."), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: s,
      id: "aic-ct-tour__cta-browse",
      type: "button",
      className: "f-buttons btn btn--secondary",
      onClick: d
    },
    "Browse for more artworks"
  ), /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "f-buttons btn btn--primary",
      onClick: h
    },
    "Finish creating tour"
  ))), r.length === 6 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You've added ", r.length, " artworks, the maximum number allowed. Please remove one if you would like to include more artwork"), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "f-buttons btn btn--primary",
      onClick: h
    },
    "Finish creating tour"
  ))), r.length === 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You haven't added any artworks to your tour yet"), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: s,
      id: "aic-ct-tour__cta-browse",
      type: "button",
      className: "f-buttons btn btn--secondary",
      onClick: d
    },
    "Browse for more artworks"
  )))));
}
function ke() {
  const {
    tourTitle: r,
    setTourTitle: a,
    creatorEmail: n,
    setCreatorEmail: l,
    setValidCreatorEmail: o,
    creatorName: c,
    setCreatorName: i,
    recipientName: m,
    setRecipientName: s,
    marketingOptIn: d,
    setMarketingOptIn: h,
    tourDescription: u,
    setTourDescription: p,
    limits: f
  } = N(S), v = F({
    initialValue: r,
    maxLength: f.title,
    valueSetter: a
  }), E = F({
    initialValue: c,
    maxLength: f.creatorName,
    valueSetter: i
  }), b = F({
    initialValue: m,
    maxLength: f.recipientName,
    valueSetter: s
  }), w = F({
    initialValue: u,
    maxLength: f.description,
    valueSetter: p
  });
  return /* @__PURE__ */ e.createElement("fieldset", { className: "m-fieldset aic-ct-fieldset" }, /* @__PURE__ */ e.createElement("ol", { className: "m-fieldset__fieldset" }, /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__title", className: "label f-secondary" }, "Tour Title *"), /* @__PURE__ */ e.createElement("span", { className: "input" }, /* @__PURE__ */ e.createElement("span", { className: "input__io-container" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      className: "f-secondary",
      type: "text",
      onChange: v.onChange,
      value: v.value,
      id: "aic-ct-metadata__title",
      maxLength: v.maxLength,
      "aria-required": "true",
      required: !0
    }
  ), v.counterEl))), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement(
    "label",
    {
      htmlFor: "aic-ct-metadata__creator-name",
      className: "label f-secondary"
    },
    "Your name ",
    /* @__PURE__ */ e.createElement("em", null, "(optional)")
  ), /* @__PURE__ */ e.createElement("span", { className: "input" }, /* @__PURE__ */ e.createElement("span", { className: "input__io-container" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      className: "f-secondary",
      type: "text",
      value: E.value,
      onChange: E.onChange,
      id: "aic-ct-metadata__creator-name",
      maxLength: E.maxLength
    }
  ), E.counterEl))), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement(
    "label",
    {
      htmlFor: "aic-ct-metadata__creator-email",
      className: "label f-secondary"
    },
    "Your email *"
  ), /* @__PURE__ */ e.createElement("span", { className: "input" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      className: "f-secondary",
      type: "email",
      value: n.value,
      onChange: (k) => {
        l(k.target.value), o(k.target.validity.valid);
      },
      id: "aic-ct-metadata__creator-email",
      "aria-required": "true",
      required: !0
    }
  ))), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement(
    "label",
    {
      htmlFor: "aic-ct-metadata__recipient-name",
      className: "label f-secondary"
    },
    "Who is this tour for? ",
    /* @__PURE__ */ e.createElement("em", null, "(optional)")
  ), /* @__PURE__ */ e.createElement("span", { className: "input" }, /* @__PURE__ */ e.createElement("span", { className: "input__io-container" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      className: "f-secondary",
      type: "text",
      value: b.value,
      onChange: b.onChange,
      id: "aic-ct-metadata__recipient-name",
      maxLength: b.maxLength
    }
  ), b.counterEl))), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement(
    "label",
    {
      htmlFor: "aic-ct-metadata__description",
      className: "label f-secondary"
    },
    "Tour Description ",
    /* @__PURE__ */ e.createElement("em", null, "(optional)")
  ), /* @__PURE__ */ e.createElement("span", { className: "textarea" }, /* @__PURE__ */ e.createElement("span", { className: "input__io-container" }, /* @__PURE__ */ e.createElement(
    "textarea",
    {
      className: "f-secondary",
      id: "aic-ct-metadata__description",
      onChange: w.onChange,
      rows: "5",
      value: w.value,
      maxLength: w.maxLength
    }
  ), w.counterEl))), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement("span", { className: "checkbox f-secondary" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      id: "aic-ct-metadata__opt-in",
      value: d,
      name: "aic-ct-metadata__opt-in",
      checked: d,
      onChange: (k) => {
        h(k.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "f-body" }, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__opt-in", className: "label" }, "Keep me in the loop. Please send me emails about museum exhibitions and events."))), /* @__PURE__ */ e.createElement(
    "a",
    {
      href: "/terms#privacy-policy",
      target: "_blank",
      className: "external-link f-link"
    },
    "Read our privacy policy",
    /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--new-window" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--new-window" }))
  ))));
}
function Ie() {
  const {
    apiSaveEndpoint: r,
    tourTitle: a,
    creatorName: n,
    creatorEmail: l,
    recipientName: o,
    marketingOptIn: c,
    validCreatorEmail: i,
    tourItems: m,
    tourDescription: s,
    validityIssues: d,
    setValidityIssues: h,
    limits: u,
    isSaving: p,
    setIsSaving: f,
    setActiveNavPage: v,
    unloadHandler: E
  } = N(S), [b, w] = g(null), k = async () => {
    f(!0);
    try {
      const _ = await fetch(`${r}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          creatorEmail: l,
          marketingOptIn: c,
          tourJson: {
            title: a,
            creatorName: n,
            recipientName: o,
            description: s,
            // "artworks" is essentially everything from the GET response with added "objectNote"
            // The API expects these fields named in this way
            artworks: m
          }
        })
      });
      if (!_.ok)
        throw new Error(
          "There was a problem saving your tour, please try again. If the problem persists, please contact us and let us know."
        );
      const { message: x, custom_tour: P } = await _.json();
      w({
        type: "success",
        message: x,
        id: P.id
      });
    } catch (_) {
      w({
        type: "error",
        message: _.message
      });
    }
    f(!1);
  };
  return y(() => {
    const _ = [];
    a.length || _.push("A tour title"), a.length > u.title && _.push("Tour title must not exceed the character limit"), i || _.push("A valid email address"), s.length > u.description && _.push(
      "Tour description must not exceed the character limit"
    ), m.length < u.items.min && _.push("At least one artwork is required for your tour"), m.length > u.items.max && _.push("Tours must not contain more than 6 artworks"), m.some((x) => {
      var P;
      return ((P = x.objectNote) == null ? void 0 : P.length) > u.objectNote ? (_.push("Notes must not exceed the character limit"), !0) : !1;
    }), h(_);
  }, [
    a,
    s,
    m,
    h,
    u,
    i
  ]), y(() => {
    b != null && b.id && (window.removeEventListener("beforeunload", E), $.assign(
      `/custom-tours/${b.id}?tourCreationComplete=true`
    ));
  }, [b, E]), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation" }, d.length ? /* @__PURE__ */ e.createElement(
    "div",
    {
      id: "aic-ct-validation__error",
      className: "aic-ct-validation__error aic-ct-validation__content"
    },
    /* @__PURE__ */ e.createElement("h1", { className: "f-headline" }, "Finish your tour?"),
    /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "Your tour is missing important details:"),
    /* @__PURE__ */ e.createElement(
      "div",
      {
        id: "aic-ct-validation__errors",
        className: "aic-ct-validation__errors aic-ct-validation__content o-blocks"
      },
      /* @__PURE__ */ e.createElement("ul", null, d.map((_, x) => /* @__PURE__ */ e.createElement("li", { className: "f-body", key: x }, _)))
    ),
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation__actions" }, /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "btn btn--secondary f-buttons",
        type: "button",
        onClick: () => {
          m.length ? v(1) : v(0);
        }
      },
      "Go back"
    ))
  ) : /* @__PURE__ */ e.createElement(
    "div",
    {
      id: "aic-ct-validation__saving",
      className: "aic-ct-validation__content aic-ct-validation__saving",
      tabIndex: "-1",
      "aria-live": "polite"
    },
    p && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-loader f-body" }, /* @__PURE__ */ e.createElement("p", null, "Saving..."), /* @__PURE__ */ e.createElement("div", { className: "loader" })),
    !p && !b && /* @__PURE__ */ e.createElement(
      "div",
      {
        id: "aic-ct-validation__save",
        className: "aic-ct-validation__save aic-ct-validation__content"
      },
      /* @__PURE__ */ e.createElement("h1", { className: "f-headline" }, "Are you sure you want to submit your tour?"),
      /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You won't be able to edit it once this has been done.", /* @__PURE__ */ e.createElement("br", null), "Your tour will be automatically emailed to you when finished."),
      /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation__actions" }, /* @__PURE__ */ e.createElement(
        "button",
        {
          id: "aic-ct-save-button",
          className: "btn btn--primary f-buttons",
          type: "button",
          onClick: k,
          disabled: p
        },
        "Yes, Save my tour"
      ), /* @__PURE__ */ e.createElement(
        "button",
        {
          className: "btn btn--secondary f-buttons",
          type: "button",
          onClick: () => {
            v(1);
          }
        },
        "No, go back and edit"
      ))
    ),
    b && (b.type === "success" && /* @__PURE__ */ e.createElement(
      "div",
      {
        id: "aic-ct-validation__success",
        className: "aic-ct-validation__content"
      },
      /* @__PURE__ */ e.createElement("h1", { className: "f-headline" }, "Saved successfully!", /* @__PURE__ */ e.createElement("br", null), " Redirecting to your tour")
    ) || b.type === "error" && /* @__PURE__ */ e.createElement(
      "div",
      {
        id: "aic-ct-save-error",
        className: "aic-ct-validation__content"
      },
      /* @__PURE__ */ e.createElement("h1", { className: "f-headline" }, "Looks like there was a problem"),
      /* @__PURE__ */ e.createElement("p", { className: "f-body" }, b.message),
      /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation__actions" }, /* @__PURE__ */ e.createElement(
        "button",
        {
          id: "aic-ct-save-button",
          className: "btn btn--primary f-buttons",
          type: "button",
          onClick: k,
          disabled: p
        },
        "Try again"
      ))
    ))
  ));
}
const Se = (r) => {
  const {
    apiSaveEndpoint: a,
    tourTitle: n,
    tourDescription: l,
    tourItems: o,
    heroImageId: c
  } = r, i = "https://artic.edu/iiif/2", m = (d) => {
    d.preventDefault(), d.returnValue = "";
  }, s = {
    apiSaveEndpoint: a,
    tourTitle: n,
    tourDescription: l,
    tourItems: o,
    heroImageId: c,
    iiifBaseUrl: i,
    unloadHandler: m
  };
  return y(() => {
    window.addEventListener("beforeunload", m), document.body.style.overflow = "unset";
  }, []), /* @__PURE__ */ e.createElement("div", { id: "custom-tours-builder", className: "custom-tours" }, /* @__PURE__ */ e.createElement(V, { ...s }, /* @__PURE__ */ e.createElement(ge, null), /* @__PURE__ */ e.createElement(q, null, /* @__PURE__ */ e.createElement(
    A,
    {
      id: 0,
      title: "Browse",
      tagline: "for artworks to add to your tour"
    },
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-intro aic-ct-intro--keyline aic-ct__core" }, /* @__PURE__ */ e.createElement("h1", { className: "f-display-2" }, "Create your own tour"), /* @__PURE__ */ e.createElement("p", { className: "f-deck" }, "Choose up to 6 artworks for your tour by searching for a particular work or artist, browsing themes or selecting from the list of artworks below.")),
    /* @__PURE__ */ e.createElement(B, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement(Ee, null), /* @__PURE__ */ e.createElement(_e, null), /* @__PURE__ */ e.createElement(Ne, null)))
  ), /* @__PURE__ */ e.createElement(
    A,
    {
      id: 1,
      title: "Personalize",
      tagline: "your tour by adding notes to artworks"
    },
    c && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-hero" }, /* @__PURE__ */ e.createElement(
      "img",
      {
        src: I(i, c, 20, 20, "full"),
        srcSet: `${I(
          i,
          c,
          480,
          480,
          "full"
        )} 320w, ${I(
          i,
          c,
          640,
          640,
          "full"
        )} 480w, ${I(
          i,
          c,
          960,
          960,
          "full"
        )} 640w, ${I(
          i,
          c,
          1280,
          1280,
          "full"
        )} 960w, ${I(
          i,
          c,
          1920,
          1920,
          "full"
        )} 1280w`,
        alt: ""
      }
    )),
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-intro aic-ct__core" }, /* @__PURE__ */ e.createElement("h1", { className: "f-display-2" }, "Personalize your tour")),
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement(ke, null)),
    /* @__PURE__ */ e.createElement(we, null)
  ), /* @__PURE__ */ e.createElement(A, { id: 2, title: "Complete", tagline: "and share with friends" }, /* @__PURE__ */ e.createElement(Ie, null))), /* @__PURE__ */ e.createElement(ve, null)));
};
Se.propTypes = {
  apiSaveEndpoint: t.string,
  tourTitle: t.string,
  tourDescription: t.string,
  tourItems: t.array,
  searchPreviewId: t.number,
  heroImageId: t.string
};
export {
  Se as default
};
