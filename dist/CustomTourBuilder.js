import e, { createContext as O, useState as b, useReducer as de, useRef as x, useMemo as V, useContext as N, useEffect as y, useCallback as he } from "react";
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
}, I = O();
function q(r) {
  const {
    children: a,
    tourTitle: n,
    creatorEmail: c,
    creatorName: o,
    recipientName: s,
    tourDescription: i,
    marketingOptIn: m,
    tourItems: l,
    navPages: d,
    apiSaveEndpoint: u,
    iiifBaseUrl: p,
    unloadHandler: h
  } = r, [f, v] = b(n || ""), [E, _] = b(c || ""), [w, k] = b(!1), [g, C] = b(o || ""), [P, Q] = b(s || ""), [z, J] = b(
    m || !1
  ), [G, K] = b(
    i || ""
  ), [W, X] = b(d || []), [Z, ee] = b(0), [te, ae] = de(
    pe,
    l || []
  ), re = x(null), [ne, ie] = b([]), se = u || "/api/v1/custom-tours", [ce, le] = b(!1), [oe, me] = b(0), ue = V(
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
    I.Provider,
    {
      value: {
        apiSaveEndpoint: se,
        iiifBaseUrl: p,
        limits: ue,
        tourTitle: f,
        setTourTitle: v,
        creatorEmail: E,
        setCreatorEmail: _,
        validCreatorEmail: w,
        setValidCreatorEmail: k,
        creatorName: g,
        setCreatorName: C,
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
        isSaving: ce,
        setIsSaving: le,
        scrollY: oe,
        setScrollY: me,
        unloadHandler: h
      }
    },
    a
  );
}
q.propTypes = {
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
I.Provider.propTypes = {
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
var $ = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(r) {
  (function() {
    var a = {}.hasOwnProperty;
    function n() {
      for (var c = [], o = 0; o < arguments.length; o++) {
        var s = arguments[o];
        if (s) {
          var i = typeof s;
          if (i === "string" || i === "number")
            c.push(s);
          else if (Array.isArray(s)) {
            if (s.length) {
              var m = n.apply(null, s);
              m && c.push(m);
            }
          } else if (i === "object") {
            if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]")) {
              c.push(s.toString());
              continue;
            }
            for (var l in s)
              a.call(s, l) && s[l] && c.push(l);
          }
        }
      }
      return c.join(" ");
    }
    r.exports ? (n.default = n, r.exports = n) : window.classNames = n;
  })();
})($);
var be = $.exports;
const R = /* @__PURE__ */ fe(be);
function S(r, a, n = "", c = "", o = "full", s = !0) {
  return `${r}/${a}/${o}/${s ? "!" : ""}${n},${c}/0/default.jpg`;
}
function D(r) {
  const a = new URL("https://api.artic.edu/api/v1/artworks/search");
  a.searchParams.set("query[bool][must][][term][is_on_view]", "true"), a.searchParams.set("query[bool][must][][exists][field]", "description"), a.searchParams.set("query[bool][should][][exists][field]", "description"), a.searchParams.set("query[bool][should][][exists][field]", "subject_id"), a.searchParams.set("query[bool][should][][exists][field]", "style_id"), a.searchParams.set("query[bool][should][][term][is_boosted]", "true"), a.searchParams.set("query[bool][minimum_should_match]", "1"), a.searchParams.set(
    "fields",
    "artist_title,short_description,description,id,image_id,thumbnail,title,date_display,gallery_title,gallery_id"
  ), a.searchParams.set("limit", "60"), typeof r.keywords < "u" && a.searchParams.set("q", r.keywords);
  for (const [n, c] of Object.entries(r))
    n.includes("_ids") && a.searchParams.set(`query[bool][must][][terms][${n}][]`, c);
  return r.themeTitle && a.searchParams.set(
    "query[bool][must][][term][theme_titles.keyword]",
    r.themeTitle
  ), a;
}
const L = {
  assign: (r) => window.location.assign(r)
};
function _e() {
  const { activeNavPage: r, setActiveNavPage: a, tourItems: n, headerNextButtonRef: c } = N(I), o = n.length, s = R(
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
        ref: c,
        id: "aic-ct-header__back-button",
        className: s,
        type: "button",
        onClick: () => {
          r === 0 ? L.assign("/custom-tours") : a(r === 1 ? 0 : 1);
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
        ref: c,
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
  const { navPages: r, activeNavPage: a, setActiveNavPage: n, isSaving: c } = N(I), o = (s) => R("aic-ct-nav__button btn f-buttons btn--transparent", {
    "aic-ct-nav__button--active": a === s,
    "aic-ct-nav__button--done": a > s
  });
  return /* @__PURE__ */ e.createElement("footer", { className: "aic-ct-footer", "aria-label": "Custom tour builder footer" }, /* @__PURE__ */ e.createElement(
    "nav",
    {
      id: "aic-ct-navigation",
      className: "aic-ct-nav",
      "aria-label": "Custom tour builder navigation"
    },
    r.map((s, i) => /* @__PURE__ */ e.createElement(
      "button",
      {
        key: s.id,
        id: `aic-ct-nav-button-${s.id}`,
        "aria-controls": `aic-ct-nav-page-${s.id}`,
        "aria-pressed": s.id === a,
        type: "button",
        onClick: () => n(i),
        disabled: c,
        className: o(s.id)
      },
      /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__button-wrapper" }, /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__number" }, s.id + 1), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__title" }, s.title), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__tagline" }, s.tagline))
    ))
  ));
}
function j({ children: r }) {
  const { activeNavPage: a, setNavPages: n } = N(I);
  return y(() => {
    n(
      r ? r.map((c, o) => ({
        id: o,
        title: c.props.title,
        tagline: c.props.tagline
      })) : []
    );
  }, [r, n]), y(() => {
    var c;
    (c = document.querySelector("#custom-tours-builder")) == null || c.scrollIntoView();
  }, [a]), /* @__PURE__ */ e.createElement("div", { id: "aic-ct-nav-pages" }, r);
}
j.propTypes = {
  children: t.node.isRequired
};
function F(r) {
  const { id: a, children: n } = r, { activeNavPage: c } = N(I);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      tabIndex: "0",
      id: `aic-ct-nav-page-${a}`,
      "aria-labelledby": `aic-ct-nav-button-${a}`,
      "aria-hidden": c !== a,
      style: c !== a ? { display: "none" } : {}
    },
    n
  );
}
F.propTypes = {
  id: t.number.isRequired,
  title: t.string.isRequired,
  tagline: t.string.isRequired,
  children: t.oneOfType([
    t.arrayOf(t.element),
    t.object
  ]).isRequired
};
const T = O();
function B(r) {
  const {
    children: a,
    searchResultItems: n,
    searchQuery: c,
    searchFetching: o,
    searchError: s,
    searchPreviewId: i
  } = r, [m, l] = b(
    n || null
  ), [d, u] = b(c || ""), [p, h] = b(
    o || !1
  ), [f, v] = b(s || !1), [E, _] = b(null), [w, k] = b(
    i || null
  ), g = x();
  return /* @__PURE__ */ e.createElement(
    T.Provider,
    {
      value: {
        searchResultItems: m,
        setSearchResultItems: l,
        searchQuery: d,
        setSearchQuery: u,
        searchFetching: p,
        setSearchFetching: h,
        searchError: f,
        setSearchError: v,
        activeTheme: E,
        setActiveTheme: _,
        searchPreviewId: w,
        setSearchPreviewId: k,
        searchPreviewRef: g
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
  const [a, n] = b(null), [c, o] = b(!1), [s, i] = b(null), [m, l] = b(null), { dataSubSelector: d, dataSetter: u, fetchingSetter: p, errorSetter: h } = r || {}, f = () => {
    n(null), o(!1), i(null), l(null);
  }, v = async (E) => {
    o(!0);
    const _ = new AbortController();
    l(_);
    try {
      const k = await (await fetch(E, { signal: _.signal })).json();
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
    u && u(a);
  }, [a, u]), y(() => {
    h && h(s);
  }, [s, h]), y(() => {
    p && p(c);
  }, [c, p]), { data: a, fetching: c, error: s, fetchData: v, resetState: f };
};
function Ee() {
  const {
    searchQuery: r,
    setSearchQuery: a,
    setSearchResultItems: n,
    setSearchFetching: c,
    setSearchError: o,
    setActiveTheme: s
  } = N(T), [i, m] = b(!0), { fetchData: l } = M({
    dataSubSelector: "data",
    dataSetter: n,
    fetchingSetter: c,
    errorSetter: o
  }), d = (h) => {
    l(D({ keywords: r })), s(null), h.preventDefault();
  }, u = x(null), p = R("m-search-bar aic-ct-search", {
    "s-autocomplete-active": r
  });
  return y(() => {
    i && (m(!1), l(D({ keywords: "" })));
  }, [l, i, m]), /* @__PURE__ */ e.createElement(
    "form",
    {
      id: "aic-ct-search",
      role: "search",
      "aria-label": "Objects for your tour",
      onSubmit: d,
      className: p
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
        ref: u
      },
      /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--search--24" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--search--24" }))
    ), /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "m-search-bar__clear",
        "aria-label": "Clear search",
        type: "reset",
        onClick: () => {
          a(""), n(null), s(null), u.current.focus();
        }
      },
      /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--close" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close" }))
    ))
  );
}
function H(r) {
  const { id: a, label: n, thumbnailId: c, searchParams: o } = r, { iiifBaseUrl: s } = N(I), {
    setSearchResultItems: i,
    setSearchFetching: m,
    setSearchError: l,
    setSearchQuery: d,
    activeTheme: u,
    setActiveTheme: p
  } = N(T), { fetchData: h, resetState: f } = M({
    dataSubSelector: "data",
    dataSetter: i,
    fetchingSetter: m,
    errorSetter: l
  }), v = () => {
    u === n ? (p(null), f()) : (h(D(o)), p(n), d(""));
  }, E = R(
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
      className: E,
      id: `aic-ct-theme-toggle-${a}`,
      onClick: v,
      "aria-pressed": u === n ? "true" : "false"
    },
    /* @__PURE__ */ e.createElement("span", { className: "aic-ct-theme-toggle__wrapper" }, /* @__PURE__ */ e.createElement(
      "img",
      {
        src: S(s, c, "40", "40", "square"),
        alt: ""
      }
    ), n, u === n && /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--close" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close" })))
  )));
}
H.propTypes = {
  id: t.number.isRequired,
  label: t.string.isRequired,
  thumbnailId: t.string.isRequired,
  searchParams: t.object.isRequired
};
function ge() {
  const r = [
    {
      label: "Impressionism",
      thumbnailId: "a38e2828-ec6f-ece1-a30f-70243449197b",
      searchParams: {
        style_ids: ["TM-7543"]
      }
    },
    {
      label: "Essentials",
      thumbnailId: "b272df73-a965-ac37-4172-be4e99483637",
      searchParams: {
        theme_title: "Essentials"
      }
    },
    {
      label: "Portraits",
      thumbnailId: "83375479-f7a9-bac3-44a8-e705ab6e423c",
      searchParams: {
        subject_ids: ["TM-8658"]
      }
    },
    {
      label: "Modernism",
      thumbnailId: "3ee54063-9d78-ee86-0103-b477d988a93f",
      searchParams: {
        style_ids: ["TM-5981"]
      }
    },
    {
      label: "Animals",
      thumbnailId: "e54a695c-16df-cf45-9dd4-b517e8c32cc3",
      searchParams: {
        subject_ids: ["TM-12218"]
      }
    }
  ];
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("header", { className: "aic-ct-section-header" }, /* @__PURE__ */ e.createElement("h2", { className: "f-module-title-2" }, "Browse by theme")), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-themes", className: "aic-ct-themes" }, r.map((a, n) => /* @__PURE__ */ e.createElement(
    H,
    {
      key: a.label,
      id: n,
      label: a.label,
      thumbnailId: a.thumbnailId,
      searchParams: a.searchParams
    }
  ))));
}
function Y(r) {
  const { setSearchPreviewId: a, searchPreviewRef: n } = N(T), { iiifBaseUrl: c, setScrollY: o, tourItems: s } = N(I), { itemData: i } = r, m = s.some((h) => h.id === i.id), l = x(null), d = x(), u = () => {
    const h = document.documentElement.scrollTop;
    a(i.id), o(h), n.current.showModal(), setTimeout(() => {
      document.documentElement.classList.add("s-body-locked"), document.body.scrollTop = h;
    }, 0);
  }, p = R(
    "aic-ct-result o-pinboard__item m-listing m-listing--variable-height",
    {
      "aic-ct-result--selected": m
    }
  );
  return y(() => {
    var h;
    (h = d == null ? void 0 : d.current) != null && h.includes("s-positioned") && l.current.classList.add("s-positioned"), d.current = l.current.className;
  }), /* @__PURE__ */ e.createElement(
    "li",
    {
      ref: l,
      id: `aic-ct-search-item-${i.id}`,
      className: p
    },
    i.image_id && /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "aic-ct-result__button",
        type: "button",
        onClick: u,
        "aria-describedby": m ? "aic-ct-search__in-your-tour" : void 0
      },
      /* @__PURE__ */ e.createElement("span", { className: "m-listing__link" }, /* @__PURE__ */ e.createElement("span", { className: "m-listing__img m-listing__img--no-bg" }, m && /* @__PURE__ */ e.createElement("span", { className: "aic-ct-selected-marker" }, /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--check" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--check" }))), /* @__PURE__ */ e.createElement(
        "img",
        {
          src: i.thumbnail.lqip,
          alt: "",
          height: i.thumbnail.height,
          width: i.thumbnail.width,
          "data-iiif-id": `${c}/${i.image_id}`,
          "data-pin-media": S(
            c,
            i.image_id,
            "600",
            void 0,
            void 0,
            !1
          ),
          sizes: "(min-width: 1640px) 336px, (min-width: 1200px) 20.31vw, (min-width: 900px) 28.13vw, (min-width: 600px) 43.75vw,  43.75vw",
          "data-srcset": `${S(
            c,
            i.image_id,
            "200",
            void 0,
            void 0,
            !1
          )} 200w, ${S(
            c,
            i.image_id,
            "400",
            void 0,
            void 0,
            !1
          )} 400w, ${S(
            c,
            i.image_id,
            "843",
            void 0,
            void 0,
            !1
          )} 843w, ${S(
            c,
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
  const { searchPreviewId: r, searchResultItems: a, searchPreviewRef: n } = N(T), { iiifBaseUrl: c, tourItems: o, tourItemsDispatch: s } = N(I), [i, m] = b(!1), [l, d] = b(null), u = R({
    "aic-ct-preview__content": !0,
    "aic-ct-preview--loading": !l
  });
  y(() => {
    d(
      a.find((f) => f.id === r)
    );
  }, [r, a]);
  const p = () => {
    var f;
    s({
      type: i ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: i ? l.id : l
    }), (f = n == null ? void 0 : n.current) == null || f.close();
  }, h = () => {
    var f;
    (f = n == null ? void 0 : n.current) == null || f.close();
  };
  return y(() => {
    l && m(o.find((f) => f.id === l.id));
  }, [o, l]), /* @__PURE__ */ e.createElement("div", { className: u, id: "aic-ct-preview__content" }, l ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__header aic-ct-preview__core" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-preview__close",
      className: "btn btn--icon btn--transparent aic-ct-preview__close",
      type: "button",
      "aria-label": "Close",
      onClick: h
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" }))
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__image" }, /* @__PURE__ */ e.createElement(
    "img",
    {
      src: S(c, l.image_id, 680, 680),
      width: l.thumbnail.width,
      height: l.thumbnail.height,
      alt: l.thumbnail.alt_text || ""
    }
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__core" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__details" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__title f-headline-editorial" }, l.title, l.date_display && /* @__PURE__ */ e.createElement(e.Fragment, null, ",", " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-preview__date f-list-4" }, l.date_display))), l.artist_title && /* @__PURE__ */ e.createElement("p", { className: "aic-ct-preview__artist f-subheading-1" }, l.artist_title)), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__links" }, (o.length < 6 || i) && /* @__PURE__ */ e.createElement(
    "button",
    {
      id: `aic-ct-preview__action-button-${l.id}`,
      className: "btn f-buttons aic-ct-preview__action-button",
      type: "button",
      onClick: p,
      "aria-pressed": i ? "true" : "false",
      "aria-label": "Toggle from your tour"
    },
    i ? "Remove from your tour" : "Add to your tour"
  )), (l.short_description || l.description) && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__description" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__description-title f-module-title-2" }, "Artwork description"), l.short_description ? /* @__PURE__ */ e.createElement("p", { className: "f-body" }, l.short_description) : /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "f-body",
      dangerouslySetInnerHTML: {
        __html: l.description
      }
    }
  ), /* @__PURE__ */ e.createElement(
    "a",
    {
      className: "aic-ct-preview__learn-more f-link",
      target: "_blank",
      rel: "noopener noreferrer",
      href: `https://www.artic.edu/artworks/${l.id}`
    },
    "Learn more ",
    /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--new-window" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--new-window" }))
  )), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn--transparent btn--w-icon f-buttons aic-ct-preview__close-trans",
      type: "button",
      onClick: h
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
    searchPreviewRef: c,
    setSearchPreviewId: o
  } = N(T), { scrollY: s } = N(I), i = he(() => {
    o(null), document.documentElement.scrollTop = s, document.documentElement.classList.remove("s-body-locked");
  }, [o, s]);
  return y(() => {
    const m = c.current;
    return m && m.addEventListener("close", i), () => {
      m && m.removeEventListener("close", i);
    };
  }, [c, i]), y(() => {
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
      ref: c,
      id: "aic-ct-search-preview",
      onClose: i
    },
    /* @__PURE__ */ e.createElement(ye, null)
  ))), /* @__PURE__ */ e.createElement("p", { className: "u-hide", id: "aic-ct-search__in-your-tour" }, "This object is in your tour", " "));
}
function A(r = {}) {
  const { initialValue: a, maxLength: n, valueSetter: c } = r, [o, s] = b(a || ""), i = x(null), m = n - o.length;
  return {
    value: o,
    onChange: (d) => {
      const { value: u } = d.target;
      i.current.ariaBusy = !0, s(u), c && c(u), i.current.ariaBusy = !1;
    },
    countRef: i,
    charsRemaining: m,
    maxLength: n,
    counterEl: /* @__PURE__ */ e.createElement("output", { ref: i }, "(", m, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")
  };
}
function U(r) {
  var f;
  const { itemData: a, itemIndex: n, setShouldAssignFocus: c, setRemoveButtons: o } = r, { iiifBaseUrl: s, tourItems: i, tourItemsDispatch: m, limits: l } = N(I), d = x(null), u = A({
    initialValue: (f = i[n]) == null ? void 0 : f.objectNote,
    maxLength: l.objectNote
  }), p = V(
    () => ({
      id: a.id,
      objectNote: u.value
    }),
    [a.id, u.value]
  ), h = () => {
    m({
      type: "REMOVE_ITEM",
      payload: a.id
    });
  };
  return y(() => {
    m({
      type: "UPDATE_NOTE",
      payload: p
    });
  }, [p, m]), y(() => {
    const v = d.current;
    return () => {
      document.activeElement === v && (i.length > 1 ? i.find((E, _) => {
        E.id === a.id && c({
          flag: !0,
          id: i[_ !== i.length - 1 ? _ + 1 : _ - 1].id
        });
      }) : c({
        flag: !0,
        id: null
      }));
    };
  }, [i, a.id, c]), y(() => (o((v) => [...v, { id: a.id, ref: d }]), () => {
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
        src: S(
          s,
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
        onChange: u.onChange,
        rows: "5",
        placeholder: "e.g. I love the colors in this one.",
        value: u.value,
        maxLength: u.maxLength
      }
    ), u.counterEl))),
    /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "btn btn--transparent f-secondary aic-ct-tour-item__remove",
        ref: d,
        type: "button",
        onClick: () => {
          h(a.id);
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
  const { tourItems: r, headerNextButtonRef: a, setActiveNavPage: n, limits: c } = N(I), [o, s] = b({
    flag: !1,
    id: null
  }), [i, m] = b([]), l = x(null), d = () => {
    n(0), a.current.focus();
  }, u = () => {
    n(2), a.current.focus();
  };
  return y(() => {
    o.flag && (!r.length && (l != null && l.current) ? l.current.focus() : i.find((p) => p.id === o.id).ref.current.focus(), s(!1));
  }, [r, o, i, l]), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour" }, r.length > 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement("header", { className: "aic-ct-section-header f-body" }, /* @__PURE__ */ e.createElement("h2", { id: "aic-ct-tour__heading", className: "f-module-title-2" }, "Artworks in your tour")), /* @__PURE__ */ e.createElement("div", { className: "f-body aic-ct-tour__intro" }, /* @__PURE__ */ e.createElement("p", null, "To optimize your visit, we automatically arrange the order of your tour based on the location of the artwork in the museum."), r.length === 6 && /* @__PURE__ */ e.createElement("p", null, "You've added 6 artworks, the maximum number allowed. Please remove one if you would like to include more artwork."))), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-tour__results" }, r.map((p, h) => /* @__PURE__ */ e.createElement(
    U,
    {
      key: p.id,
      setRemoveButtons: m,
      itemData: p,
      itemIndex: h,
      shouldAssignFocus: o,
      setShouldAssignFocus: s
    }
  )))), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta" }, r.length > 0 && r.length < 6 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You've added ", r.length, " of the maximum", " ", c.items.max, " artworks."), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: l,
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
      onClick: u
    },
    "Finish creating tour"
  ))), r.length === 6 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You've added ", r.length, " artworks, the maximum number allowed. Please remove one if you would like to include more artwork"), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "f-buttons btn btn--primary",
      onClick: u
    },
    "Finish creating tour"
  ))), r.length === 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You haven't added any artworks to your tour yet"), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: l,
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
    setCreatorEmail: c,
    setValidCreatorEmail: o,
    creatorName: s,
    setCreatorName: i,
    recipientName: m,
    setRecipientName: l,
    marketingOptIn: d,
    setMarketingOptIn: u,
    tourDescription: p,
    setTourDescription: h,
    limits: f
  } = N(I), v = A({
    initialValue: r,
    maxLength: f.title,
    valueSetter: a
  }), E = A({
    initialValue: s,
    maxLength: f.creatorName,
    valueSetter: i
  }), _ = A({
    initialValue: m,
    maxLength: f.recipientName,
    valueSetter: l
  }), w = A({
    initialValue: p,
    maxLength: f.description,
    valueSetter: h
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
        c(k.target.value), o(k.target.validity.valid);
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
      value: _.value,
      onChange: _.onChange,
      id: "aic-ct-metadata__recipient-name",
      maxLength: _.maxLength
    }
  ), _.counterEl))), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement(
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
        u(k.target.checked);
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
function Se() {
  const {
    apiSaveEndpoint: r,
    tourTitle: a,
    creatorName: n,
    creatorEmail: c,
    recipientName: o,
    marketingOptIn: s,
    validCreatorEmail: i,
    tourItems: m,
    tourDescription: l,
    validityIssues: d,
    setValidityIssues: u,
    limits: p,
    isSaving: h,
    setIsSaving: f,
    setActiveNavPage: v,
    unloadHandler: E
  } = N(I), [_, w] = b(null), k = async () => {
    f(!0);
    try {
      const g = await fetch(`${r}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          creatorEmail: c,
          marketingOptIn: s,
          tourJson: {
            title: a,
            creatorName: n,
            recipientName: o,
            description: l,
            // "artworks" is essentially everything from the GET response with added "objectNote"
            // The API expects these fields named in this way
            artworks: m
          }
        })
      });
      if (!g.ok)
        throw new Error(
          "There was a problem saving your tour, please try again. If the problem persists, please contact us and let us know."
        );
      const { message: C, custom_tour: P } = await g.json();
      w({
        type: "success",
        message: C,
        id: P.id
      });
    } catch (g) {
      w({
        type: "error",
        message: g.message
      });
    }
    f(!1);
  };
  return y(() => {
    const g = [];
    a.length || g.push("A tour title"), a.length > p.title && g.push("Tour title must not exceed the character limit"), i || g.push("A valid email address"), l.length > p.description && g.push(
      "Tour description must not exceed the character limit"
    ), m.length < p.items.min && g.push("At least one artwork is required for your tour"), m.length > p.items.max && g.push("Tours must not contain more than 6 artworks"), m.some((C) => {
      var P;
      return ((P = C.objectNote) == null ? void 0 : P.length) > p.objectNote ? (g.push("Notes must not exceed the character limit"), !0) : !1;
    }), u(g);
  }, [
    a,
    l,
    m,
    u,
    p,
    i
  ]), y(() => {
    _ != null && _.id && (window.removeEventListener("beforeunload", E), L.assign(
      `/custom-tours/${_.id}?tourCreationComplete=true`
    ));
  }, [_, E]), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation" }, d.length ? /* @__PURE__ */ e.createElement(
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
      /* @__PURE__ */ e.createElement("ul", null, d.map((g, C) => /* @__PURE__ */ e.createElement("li", { className: "f-body", key: C }, g)))
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
    h && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-loader f-body" }, /* @__PURE__ */ e.createElement("p", null, "Saving..."), /* @__PURE__ */ e.createElement("div", { className: "loader" })),
    !h && !_ && /* @__PURE__ */ e.createElement(
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
          disabled: h
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
    _ && (_.type === "success" && /* @__PURE__ */ e.createElement(
      "div",
      {
        id: "aic-ct-validation__success",
        className: "aic-ct-validation__content"
      },
      /* @__PURE__ */ e.createElement("h1", { className: "f-headline" }, "Saved successfully!", /* @__PURE__ */ e.createElement("br", null), " Redirecting to your tour")
    ) || _.type === "error" && /* @__PURE__ */ e.createElement(
      "div",
      {
        id: "aic-ct-save-error",
        className: "aic-ct-validation__content"
      },
      /* @__PURE__ */ e.createElement("h1", { className: "f-headline" }, "Looks like there was a problem"),
      /* @__PURE__ */ e.createElement("p", { className: "f-body" }, _.message),
      /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation__actions" }, /* @__PURE__ */ e.createElement(
        "button",
        {
          id: "aic-ct-save-button",
          className: "btn btn--primary f-buttons",
          type: "button",
          onClick: k,
          disabled: h
        },
        "Try again"
      ))
    ))
  ));
}
const Ie = (r) => {
  const {
    apiSaveEndpoint: a,
    tourTitle: n,
    tourDescription: c,
    tourItems: o,
    heroImageId: s
  } = r, i = "https://artic.edu/iiif/2", m = (d) => {
    d.preventDefault(), d.returnValue = "";
  }, l = {
    apiSaveEndpoint: a,
    tourTitle: n,
    tourDescription: c,
    tourItems: o,
    heroImageId: s,
    iiifBaseUrl: i,
    unloadHandler: m
  };
  return y(() => {
    window.addEventListener("beforeunload", m), document.body.style.overflow = "unset";
  }, []), /* @__PURE__ */ e.createElement("div", { id: "custom-tours-builder", className: "custom-tours" }, /* @__PURE__ */ e.createElement(q, { ...l }, /* @__PURE__ */ e.createElement(_e, null), /* @__PURE__ */ e.createElement(j, null, /* @__PURE__ */ e.createElement(
    F,
    {
      id: 0,
      title: "Browse",
      tagline: "for artworks to add to your tour"
    },
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-intro aic-ct-intro--keyline aic-ct__core" }, /* @__PURE__ */ e.createElement("h1", { className: "f-display-2" }, "Create your own tour"), /* @__PURE__ */ e.createElement("p", { className: "f-deck" }, "Choose up to 6 artworks for your tour by searching for a particular work or artist, browsing themes or selecting from the list of artworks below.")),
    /* @__PURE__ */ e.createElement(B, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement(Ee, null), /* @__PURE__ */ e.createElement(ge, null), /* @__PURE__ */ e.createElement(Ne, null)))
  ), /* @__PURE__ */ e.createElement(
    F,
    {
      id: 1,
      title: "Personalize",
      tagline: "your tour by adding notes to artworks"
    },
    s && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-hero" }, /* @__PURE__ */ e.createElement(
      "img",
      {
        src: S(i, s, 20, 20, "full"),
        srcSet: `${S(
          i,
          s,
          480,
          480,
          "full"
        )} 320w, ${S(
          i,
          s,
          640,
          640,
          "full"
        )} 480w, ${S(
          i,
          s,
          960,
          960,
          "full"
        )} 640w, ${S(
          i,
          s,
          1280,
          1280,
          "full"
        )} 960w, ${S(
          i,
          s,
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
  ), /* @__PURE__ */ e.createElement(F, { id: 2, title: "Complete", tagline: "and share with friends" }, /* @__PURE__ */ e.createElement(Se, null))), /* @__PURE__ */ e.createElement(ve, null)));
};
Ie.propTypes = {
  apiSaveEndpoint: t.string,
  tourTitle: t.string,
  tourDescription: t.string,
  tourItems: t.array,
  searchPreviewId: t.number,
  heroImageId: t.string
};
export {
  Ie as default
};
