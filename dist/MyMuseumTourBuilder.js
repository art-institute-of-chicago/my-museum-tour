import e, { createContext as O, useState as _, useReducer as he, useRef as C, useMemo as $, useContext as N, useEffect as E, useCallback as q } from "react";
import t from "prop-types";
const pe = (i, a) => {
  switch (a.type) {
    case "ADD_ITEM":
      return a.payload.short_description && (a.payload.description = a.payload.short_description), delete a.payload.short_description, [...i, { ...a.payload, objectNote: "" }];
    case "UPDATE_NOTE":
      return i.map((r) => r.id === a.payload.id ? { ...r, objectNote: a.payload.objectNote } : r);
    case "REMOVE_ITEM":
      return i.filter(({ id: r }) => r !== a.payload);
    default:
      return i;
  }
}, k = O();
function D(i) {
  const {
    children: a,
    tourTitle: r,
    creatorEmail: c,
    creatorName: d,
    recipientName: s,
    tourDescription: n,
    marketingOptIn: l,
    tourItems: m,
    navPages: o,
    apiSaveEndpoint: u,
    iiifBaseUrl: h
  } = i, [p, g] = _(r || ""), [f, b] = _(c || ""), [y, S] = _(!1), [v, I] = _(d || ""), [T, Q] = _(s || ""), [z, J] = _(
    l || !1
  ), [G, K] = _(
    n || ""
  ), [W, X] = _(o || []), [Z, ee] = _(0), [te, ae] = he(
    pe,
    m || []
  ), re = C(null), ie = C(null), [ne, se] = _([]), ce = u || "/api/v1/my-museum-tour", [le, oe] = _(!1), [me, ue] = _(0), de = $(
    () => ({
      objectNote: 255,
      title: 100,
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
    k.Provider,
    {
      value: {
        apiSaveEndpoint: ce,
        iiifBaseUrl: h,
        limits: de,
        tourTitle: p,
        setTourTitle: g,
        creatorEmail: f,
        setCreatorEmail: b,
        validCreatorEmail: y,
        setValidCreatorEmail: S,
        creatorName: v,
        setCreatorName: I,
        recipientName: T,
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
        headerPrevButtonRef: re,
        headerNextButtonRef: ie,
        validityIssues: ne,
        setValidityIssues: se,
        isSaving: le,
        setIsSaving: oe,
        scrollY: me,
        setScrollY: ue
      }
    },
    a
  );
}
D.propTypes = {
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
  navPages: t.instanceOf(Array)
};
k.Provider.propTypes = {
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
    headerPrevButtonRef: t.shape({
      current: t.instanceOf(Element)
    }),
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
function fe(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var L = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(i) {
  (function() {
    var a = {}.hasOwnProperty;
    function r() {
      for (var c = [], d = 0; d < arguments.length; d++) {
        var s = arguments[d];
        if (s) {
          var n = typeof s;
          if (n === "string" || n === "number")
            c.push(s);
          else if (Array.isArray(s)) {
            if (s.length) {
              var l = r.apply(null, s);
              l && c.push(l);
            }
          } else if (n === "object") {
            if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]")) {
              c.push(s.toString());
              continue;
            }
            for (var m in s)
              a.call(s, m) && s[m] && c.push(m);
          }
        }
      }
      return c.join(" ");
    }
    i.exports ? (r.default = r, i.exports = r) : window.classNames = r;
  })();
})(L);
var be = L.exports;
const x = /* @__PURE__ */ fe(be);
function w(i, a, r = "", c = "", d = "full", s = !0) {
  return `${i}/${a}/${d}/${s ? "!" : ""}${r},${c}/0/default.jpg`;
}
function A(i) {
  const a = new URL("https://api.artic.edu/api/v1/artworks/search");
  a.searchParams.set("query[bool][should][0][bool][must][][exists][field]", "short_description"), a.searchParams.set("query[bool][should][0][bool][must][][term][is_on_view][value]", "true"), a.searchParams.set("query[bool][should][1][bool][must][][term][is_on_view]", "true"), a.searchParams.set("query[bool][should][1][bool][must][][exists][field]", "description"), a.searchParams.set("query[bool][should][1][bool][should][][exists][field]", "description"), a.searchParams.set("query[bool][should][1][bool][should][][exists][field]", "subject_id"), a.searchParams.set("query[bool][should][1][bool][should][][exists][field]", "style_id"), a.searchParams.set("query[bool][should][1][bool][should][][term][is_boosted]", "true"), a.searchParams.set("query[bool][minimum_should_match]", "1"), a.searchParams.set(
    "fields",
    "artist_title,short_description,description,id,image_id,thumbnail,title,date_display,gallery_title,gallery_id"
  ), a.searchParams.set("limit", "60"), typeof i.keywords < "u" && a.searchParams.set("q", i.keywords);
  for (const [r, c] of Object.entries(i))
    r.includes("_ids") && a.searchParams.set(`query[bool][must][][terms][${r}][]`, c);
  return a;
}
const V = {
  assign: (i) => window.location.assign(i)
};
function _e() {
  const {
    tourItems: i,
    limits: a,
    iiifBaseUrl: r,
    setActiveNavPage: c,
    activeNavPage: d,
    headerPrevButtonRef: s
  } = N(k), n = () => {
    var l;
    (l = s == null ? void 0 : s.current) == null || l.focus(), c(1);
  };
  return /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-header__slots", className: "aic-ct-header__slots" }, Array.from({ length: a.items.max }).map((l, m) => /* @__PURE__ */ e.createElement(
    "li",
    {
      className: x("aic-ct-header__slot", {
        "aic-ct-header__slot--active": i[m],
        "aic-ct-header__slot--inactive": !i[m]
      }),
      key: m
    },
    /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "btn btn--transparent f-buttons",
        type: "button",
        disabled: !i[m] || d === 1,
        onClick: n,
        "aria-label": `Artwork ${m + 1}, edit on customize page`
      },
      i[m] ? /* @__PURE__ */ e.createElement(
        "img",
        {
          src: w(
            r,
            i[m].image_id,
            "40",
            "40",
            "square"
          ),
          width: "40",
          height: "40",
          alt: "",
          className: "aic-ct-header__slot"
        }
      ) : /* @__PURE__ */ e.createElement("span", null, m + 1)
    )
  )));
}
function ve() {
  const {
    limits: i,
    activeNavPage: a,
    setActiveNavPage: r,
    tourItems: c,
    headerPrevButtonRef: d,
    headerNextButtonRef: s
  } = N(k), n = c.length, l = x(
    "aic-ct-header__button aic-ct-header__button--back btn btn--transparent btn--w-icon f-buttons",
    {
      "aic-ct-header__button--exit": a === 0
    }
  );
  return /* @__PURE__ */ e.createElement(
    "header",
    {
      id: "aic-ct-header",
      className: "aic-ct-header f-body",
      "aria-label": "Custom tour builder"
    },
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-header__wrapper aic-ct-full-bleed__core" }, /* @__PURE__ */ e.createElement(
      "button",
      {
        ref: d,
        id: "aic-ct-header__back-button",
        className: l,
        type: "button",
        onClick: () => {
          a === 0 ? V.assign("/my-museum-tour") : r(a === 1 ? 0 : 1);
        }
      },
      /* @__PURE__ */ e.createElement("svg", { className: "icon--arrow", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--arrow" })),
      "Back"
    ), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-item-info" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-item-info__count", "aria-live": "polite" }, /* @__PURE__ */ e.createElement(
      "span",
      {
        id: "aic-ct-item-count",
        className: "aic-ct-item-info__count-num f-body"
      },
      n
    ), " ", /* @__PURE__ */ e.createElement("span", null, "artworks of ", i.items.max, " ")), /* @__PURE__ */ e.createElement(_e, null)), /* @__PURE__ */ e.createElement(
      "button",
      {
        ref: s,
        id: "aic-ct-header__next-button",
        className: "aic-ct-header__button aic-ct-header__button--next btn btn--transparent btn--w-icon f-buttons",
        type: "button",
        onClick: () => {
          r(a === 0 ? 1 : 2);
        }
      },
      a === 0 && "Next",
      a > 0 && "Finish",
      /* @__PURE__ */ e.createElement("svg", { className: "icon--arrow", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--arrow" }))
    ))
  );
}
function ge() {
  const { navPages: i, activeNavPage: a, setActiveNavPage: r, isSaving: c } = N(k), d = (s) => x("aic-ct-nav__button btn f-buttons btn--transparent", {
    "aic-ct-nav__button--active": a === s,
    "aic-ct-nav__button--done": a > s
  });
  return /* @__PURE__ */ e.createElement(
    "footer",
    {
      className: "aic-ct-footer aic-ct-full-bleed",
      "aria-label": "Custom tour builder footer"
    },
    /* @__PURE__ */ e.createElement(
      "nav",
      {
        id: "aic-ct-navigation",
        className: "aic-ct-nav",
        "aria-label": "Custom tour builder navigation"
      },
      i.map((s, n) => /* @__PURE__ */ e.createElement(
        "button",
        {
          key: s.id,
          id: `aic-ct-nav-button-${s.id}`,
          "aria-controls": `aic-ct-nav-page-${s.id}`,
          "aria-pressed": s.id === a,
          type: "button",
          onClick: () => r(n),
          disabled: c,
          className: d(s.id)
        },
        /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__button-wrapper" }, /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__number" }, s.id + 1), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__title" }, s.title), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__tagline" }, s.tagline))
      ))
    )
  );
}
function B({ children: i }) {
  var d, s, n;
  const { activeNavPage: a, navPages: r, setNavPages: c } = N(k);
  return E(() => {
    c(
      i ? i.map((l, m) => ({
        id: m,
        title: l.props.title,
        tagline: l.props.tagline
      })) : []
    );
  }, [i, c]), E(() => {
    var l;
    (l = document.querySelector("#my-museum-tour-builder")) == null || l.scrollIntoView();
  }, [a]), /* @__PURE__ */ e.createElement("div", { id: "aic-ct-nav-pages" }, /* @__PURE__ */ e.createElement("div", { className: "sr-only", "aria-live": "polite" }, "Step ", ((d = r[a]) == null ? void 0 : d.id) + 1, " ", (s = r[a]) == null ? void 0 : s.title, " ", (n = r[a]) == null ? void 0 : n.tagline), i);
}
B.propTypes = {
  children: t.node.isRequired
};
function F(i) {
  const { id: a, children: r } = i, { activeNavPage: c } = N(k);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      tabIndex: "0",
      id: `aic-ct-nav-page-${a}`,
      "aria-labelledby": `aic-ct-nav-button-${a}`,
      "aria-hidden": c !== a,
      style: c !== a ? { display: "none" } : {}
    },
    r
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
const P = O();
function j(i) {
  const {
    children: a,
    searchResultItems: r,
    searchQuery: c,
    searchFetching: d,
    searchError: s,
    searchPreviewId: n
  } = i, [l, m] = _(
    r || null
  ), [o, u] = _(c || ""), [h, p] = _(
    d || !1
  ), [g, f] = _(s || !1), [b, y] = _(null), [S, v] = _(
    n || null
  ), I = C();
  return /* @__PURE__ */ e.createElement(
    P.Provider,
    {
      value: {
        searchResultItems: l,
        setSearchResultItems: m,
        searchQuery: o,
        setSearchQuery: u,
        searchFetching: h,
        setSearchFetching: p,
        searchError: g,
        setSearchError: f,
        activeTheme: b,
        setActiveTheme: y,
        searchPreviewId: S,
        setSearchPreviewId: v,
        searchPreviewRef: I
      }
    },
    a
  );
}
j.propTypes = {
  children: t.node.isRequired,
  searchResultItems: t.array,
  searchQuery: t.string,
  searchFetching: t.bool,
  searchError: t.oneOfType([t.string, t.bool]),
  searchPreviewId: t.number
};
P.Provider.propTypes = {
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
const M = (i) => {
  const [a, r] = _(null), [c, d] = _(!1), [s, n] = _(null), [l, m] = _(null), { dataSubSelector: o, dataSetter: u, fetchingSetter: h, errorSetter: p } = i || {}, g = () => {
    r(null), d(!1), n(null), m(null);
  }, f = async (b) => {
    d(!0);
    const y = new AbortController();
    m(y);
    try {
      const v = await (await fetch(b, { signal: y.signal })).json();
      r(o ? v[o] : v), n(null), d(!1);
    } catch (S) {
      if (S.name === "AbortError") {
        g();
        return;
      }
      n("Error fetching results"), d(!1);
    }
  };
  return E(() => {
    const b = l;
    return () => {
      b && b.abort();
    };
  }, [l]), E(() => {
    u && u(a);
  }, [a, u]), E(() => {
    p && p(s);
  }, [s, p]), E(() => {
    h && h(c);
  }, [c, h]), { data: a, fetching: c, error: s, fetchData: f, resetState: g };
};
function Ee() {
  const {
    searchQuery: i,
    setSearchQuery: a,
    setSearchResultItems: r,
    setSearchFetching: c,
    setSearchError: d,
    setActiveTheme: s
  } = N(P), [n, l] = _(!0), { fetchData: m } = M({
    dataSubSelector: "data",
    dataSetter: r,
    fetchingSetter: c,
    errorSetter: d
  }), o = (p) => {
    m(A({ keywords: i })), s(null), p.preventDefault();
  }, u = C(null), h = x("m-search-bar aic-ct-search", {
    "s-autocomplete-active": i
  });
  return E(() => {
    n && (l(!1), m(A({ keywords: "" })));
  }, [m, n, l]), /* @__PURE__ */ e.createElement(
    "form",
    {
      id: "aic-ct-search",
      role: "search",
      "aria-label": "Objects for your tour",
      onSubmit: o,
      className: h
    },
    /* @__PURE__ */ e.createElement("div", { className: "m-search-bar__inner" }, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-search__input", className: "sr-only" }, "Search the collection"), /* @__PURE__ */ e.createElement(
      "input",
      {
        id: "aic-ct-search__input",
        className: "f-secondary",
        type: "text",
        placeholder: "Search by keyword, artist, or reference",
        value: i,
        autoComplete: "off",
        onChange: (p) => {
          a(p.target.value);
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
          a(""), r(null), s(null), m(A({ keywords: "" })), u.current.focus();
        }
      },
      /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--close" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close" }))
    ))
  );
}
function Y(i) {
  const { id: a, label: r, thumbnailId: c, searchParams: d } = i, { iiifBaseUrl: s } = N(k), {
    setSearchResultItems: n,
    setSearchFetching: l,
    setSearchError: m,
    setSearchQuery: o,
    activeTheme: u,
    setActiveTheme: h
  } = N(P), { fetchData: p } = M({
    dataSubSelector: "data",
    dataSetter: n,
    fetchingSetter: l,
    errorSetter: m
  }), g = () => {
    u === r ? (h(null), p(A({ keywords: "" }))) : (p(A(d)), h(r), o(""));
  }, f = x(
    "aic-ct-theme-toggle tag tag--senary tag--w-image",
    {
      "f-tag": u !== r,
      "f-tag-2": u === r,
      "aic-ct-theme-toggle--active": u === r
    }
  );
  return /* @__PURE__ */ e.createElement(e.Fragment, null, (u === null || u === r) && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: f,
      id: `aic-ct-theme-toggle-${a}`,
      onClick: g,
      "aria-pressed": u === r ? "true" : "false"
    },
    /* @__PURE__ */ e.createElement("span", { className: "aic-ct-theme-toggle__wrapper" }, /* @__PURE__ */ e.createElement(
      "img",
      {
        src: w(s, c, "40", "40", "square"),
        alt: ""
      }
    ), r, u === r && /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--close" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close" })))
  )));
}
Y.propTypes = {
  id: t.number.isRequired,
  label: t.string.isRequired,
  thumbnailId: t.string.isRequired,
  searchParams: t.object.isRequired
};
function ye() {
  const i = [
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
        category_ids: ["PC-831"]
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
  return /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-themes", className: "aic-ct-themes" }, i.map((a, r) => /* @__PURE__ */ e.createElement(
    Y,
    {
      key: a.label,
      id: r,
      label: a.label,
      thumbnailId: a.thumbnailId,
      searchParams: a.searchParams
    }
  )));
}
function U(i) {
  const { setSearchPreviewId: a, searchPreviewRef: r } = N(P), { iiifBaseUrl: c, setScrollY: d, tourItems: s } = N(k), { itemData: n } = i, l = s.some((p) => p.id === n.id), m = C(null), o = C(), u = () => {
    const p = document.documentElement.scrollTop;
    a(n.id), d(p), r.current.showModal(), setTimeout(() => {
      document.documentElement.classList.add(
        "s-body-locked",
        "s-body-locked--ct"
      ), document.body.scrollTop = p;
    }, 0);
  }, h = x(
    "aic-ct-result o-pinboard__item m-listing m-listing--variable-height",
    {
      "aic-ct-result--selected": l
    }
  );
  return E(() => {
    var p;
    (p = o == null ? void 0 : o.current) != null && p.includes("s-positioned") && m.current.classList.add("s-positioned"), o.current = m.current.className;
  }), /* @__PURE__ */ e.createElement(
    "li",
    {
      ref: m,
      id: `aic-ct-search-item-${n.id}`,
      className: h
    },
    n.image_id && /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "aic-ct-result__button",
        type: "button",
        onClick: u,
        "aria-describedby": l ? "aic-ct-search__in-your-tour" : void 0
      },
      /* @__PURE__ */ e.createElement("span", { className: "m-listing__link" }, /* @__PURE__ */ e.createElement("span", { className: "m-listing__img m-listing__img--no-bg" }, l && /* @__PURE__ */ e.createElement("span", { className: "aic-ct-selected-marker" }, /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--check" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--check" }))), /* @__PURE__ */ e.createElement(
        "img",
        {
          src: n.thumbnail.lqip,
          alt: "",
          height: n.thumbnail.height,
          width: n.thumbnail.width,
          "data-iiif-id": `${c}/${n.image_id}`,
          "data-pin-media": w(
            c,
            n.image_id,
            "600",
            void 0,
            void 0,
            !1
          ),
          sizes: "(min-width: 1640px) 336px, (min-width: 1200px) 20.31vw, (min-width: 900px) 28.13vw, (min-width: 600px) 43.75vw,  43.75vw",
          "data-srcset": `${w(
            c,
            n.image_id,
            "200",
            void 0,
            void 0,
            !1
          )} 200w, ${w(
            c,
            n.image_id,
            "400",
            void 0,
            void 0,
            !1
          )} 400w, ${w(
            c,
            n.image_id,
            "843",
            void 0,
            void 0,
            !1
          )} 843w, ${w(
            c,
            n.image_id,
            "1686",
            void 0,
            void 0,
            !1
          )} 1686w`
        }
      )), /* @__PURE__ */ e.createElement(
        "span",
        {
          id: `aic-ct-result__meta-${n.id}`,
          className: "m-listing__meta"
        },
        n.title && /* @__PURE__ */ e.createElement("span", { className: "title f-list-7" }, n.title),
        n.artist_title && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement("span", { className: "subtitle f-tertiary" }, n.artist_title))
      ))
    )
  );
}
U.propTypes = {
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
function Ne() {
  const { searchPreviewId: i, searchResultItems: a, searchPreviewRef: r } = N(P), { iiifBaseUrl: c, tourItems: d, tourItemsDispatch: s, limits: n } = N(k), [l, m] = _(!1), [o, u] = _(null), h = x({
    "aic-ct-preview__content": !0,
    "aic-ct-preview--loading": !o
  });
  E(() => {
    u(
      a.find((f) => f.id === i)
    );
  }, [i, a]);
  const p = () => {
    var f;
    s({
      type: l ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: l ? o.id : o
    }), (f = r == null ? void 0 : r.current) == null || f.close();
  }, g = () => {
    var f;
    (f = r == null ? void 0 : r.current) == null || f.close();
  };
  return E(() => {
    o && m(d.find((f) => f.id === o.id));
  }, [d, o]), /* @__PURE__ */ e.createElement("div", { className: h, id: "aic-ct-preview__content" }, o ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__header aic-ct-preview__core" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-preview__close",
      className: "btn btn--icon btn--transparent aic-ct-preview__close",
      type: "button",
      "aria-label": "Close",
      onClick: g
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" }))
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__image" }, /* @__PURE__ */ e.createElement(
    "img",
    {
      src: w(c, o.image_id, 680, 680),
      width: o.thumbnail.width,
      height: o.thumbnail.height,
      alt: o.thumbnail.alt_text || ""
    }
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__core" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__details" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__title f-headline-editorial" }, o.title, o.date_display && /* @__PURE__ */ e.createElement(e.Fragment, null, ",", " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-preview__date f-list-4" }, o.date_display))), o.artist_title && /* @__PURE__ */ e.createElement("p", { className: "aic-ct-preview__artist f-subheading-1" }, o.artist_title)), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__links" }, d.length < 6 || l ? /* @__PURE__ */ e.createElement(
    "button",
    {
      id: `aic-ct-preview__action-button-${o.id}`,
      className: "btn f-buttons aic-ct-preview__action-button",
      type: "button",
      onClick: p,
      "aria-pressed": l ? "true" : "false",
      "aria-label": "Toggle from your tour"
    },
    l ? "Remove from your tour" : "Add to your tour"
  ) : /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You have already added ", n.items.max, " artworks, the maximum number allowed. Please remove one if you would like to include this artwork.")), (o.short_description || o.description) && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__description" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__description-title f-module-title-2" }, "Artwork description"), /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "f-body",
      dangerouslySetInnerHTML: {
        __html: o.short_description ? o.short_description : o.description
      }
    }
  ), /* @__PURE__ */ e.createElement(
    "a",
    {
      className: "aic-ct-preview__learn-more f-link",
      target: "_blank",
      rel: "noopener noreferrer",
      href: `https://www.artic.edu/artworks/${o.id}`
    },
    "Learn more ",
    /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--new-window" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--new-window" }))
  )), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn--transparent btn--w-icon f-buttons aic-ct-preview__close-trans",
      type: "button",
      onClick: g
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" })),
    "Close and go back to results"
  ))) : /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__core aic-ct-loader f-body" }, /* @__PURE__ */ e.createElement("p", null, "Loading..."), /* @__PURE__ */ e.createElement("div", { className: "loader" })));
}
function we() {
  const {
    searchError: i,
    searchFetching: a,
    searchResultItems: r,
    searchPreviewRef: c,
    setSearchPreviewId: d,
    activeTheme: s,
    searchQuery: n
  } = N(P), { scrollY: l } = N(k), m = q(
    (u) => {
      var h;
      (u.type === "close" || (h = c == null ? void 0 : c.current) != null && h.open && u.target === (c == null ? void 0 : c.current)) && (c.current.close(), d(null), document.documentElement.scrollTop = l, document.documentElement.classList.remove(
        "s-body-locked",
        "s-body-locked--ct"
      ));
    },
    [d, l, c]
  ), o = q(() => {
    const u = new Event("page:updated", { bubbles: !0 });
    setTimeout(() => {
      document.dispatchEvent(u);
    }, 0);
  }, []);
  return E(() => {
    const u = c.current;
    return u && (u.addEventListener("close", m), u.addEventListener("click", m)), () => {
      u && (u.removeEventListener("close", m), u.removeEventListener("click", m));
    };
  }, [c, m]), E(() => {
    o();
  }, [r, o]), E(() => (window.addEventListener("load", o), () => {
    window.removeEventListener("load", o);
  }), [o]), !r && !a && !i ? null : /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-search-results" }, a && // Render only the loading message while fetching
  /* @__PURE__ */ e.createElement(
    "div",
    {
      id: "aic-ct-search-results__loading",
      className: "aic-ct-search-results__message aic-ct-loader f-body"
    },
    /* @__PURE__ */ e.createElement("p", null, "Loading..."),
    /* @__PURE__ */ e.createElement("div", { className: "loader" })
  ), i && // Render only the error message if there is an error
  /* @__PURE__ */ e.createElement(
    "div",
    {
      id: "aic-ct-search-results__error",
      className: "aic-ct-search-results__message f-body"
    },
    /* @__PURE__ */ e.createElement("p", null, i)
  ), (r == null ? void 0 : r.length) === 0 && !a && !i && // Render only a no results message if there are no results
  /* @__PURE__ */ e.createElement(
    "div",
    {
      id: "aic-ct-search-results__no-results",
      className: "aic-ct-search-results__message f-body"
    },
    /* @__PURE__ */ e.createElement("p", null, "Sorry, we couldn’t find any artworks matching your search. ")
  ), (r == null ? void 0 : r.length) > 0 && !a && !i && // Render the results if there are results
  /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "aic-ct-pre-result-text f-body" }, "These artworks are currently on view and available for your tour."), /* @__PURE__ */ e.createElement(
    "ul",
    {
      id: "aic-ct-search-results__items",
      className: "o-pinboard o-pinboard--2-col@xsmall o-pinboard--2-col@small o-pinboard--3-col@medium o-pinboard--4-col@large o-pinboard--4-col@xlarge",
      "data-pinboard-option-layout": "o-pinboard--2-col@xsmall o-pinboard--2-col@small o-pinboard--2-col@medium o-pinboard--3-col@large o-pinboard--3-col@xlarge",
      "data-pinboard-maintain-order": "false",
      "data-behavior": "pinboard"
    },
    r.map((u) => /* @__PURE__ */ e.createElement(U, { key: u.id, itemData: u }))
  ), /* @__PURE__ */ e.createElement(
    "dialog",
    {
      ref: c,
      id: "aic-ct-search-preview",
      onClose: m
    },
    /* @__PURE__ */ e.createElement(Ne, null)
  ))), /* @__PURE__ */ e.createElement("p", { className: "u-hide", id: "aic-ct-search__in-your-tour" }, "This object is in your tour", " "), /* @__PURE__ */ e.createElement("p", { className: "sr-only", "aria-live": "polite" }, a ? "Loading" : s ? `Showing results for ${s}` : n ? `Showing results for ${n}` : "Showing default results"));
}
function R(i = {}) {
  const { initialValue: a, maxLength: r, valueSetter: c } = i, [d, s] = _(a || ""), n = C(null), l = r - d.length;
  return {
    value: d,
    onChange: (o) => {
      const { value: u } = o.target;
      n.current.ariaBusy = !0, s(u), c && c(u), n.current.ariaBusy = !1;
    },
    countRef: n,
    charsRemaining: l,
    maxLength: r,
    counterEl: /* @__PURE__ */ e.createElement("output", { ref: n }, "(", l, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")
  };
}
function H(i) {
  var g;
  const { itemData: a, itemIndex: r, setShouldAssignFocus: c, setRemoveButtons: d } = i, { iiifBaseUrl: s, tourItems: n, tourItemsDispatch: l, limits: m } = N(k), o = C(null), u = R({
    initialValue: (g = n[r]) == null ? void 0 : g.objectNote,
    maxLength: m.objectNote
  }), h = $(
    () => ({
      id: a.id,
      objectNote: u.value
    }),
    [a.id, u.value]
  ), p = () => {
    l({
      type: "REMOVE_ITEM",
      payload: a.id
    });
  };
  return E(() => {
    l({
      type: "UPDATE_NOTE",
      payload: h
    });
  }, [h, l]), E(() => {
    const f = o.current;
    return () => {
      document.activeElement === f && (n.length > 1 ? n.find((b, y) => {
        b.id === a.id && c({
          flag: !0,
          id: n[y !== n.length - 1 ? y + 1 : y - 1].id
        });
      }) : c({
        flag: !0,
        id: null
      }));
    };
  }, [n, a.id, c]), E(() => (d((f) => [...f, { id: a.id, ref: o }]), () => {
    d(
      (f) => f.filter((b) => b.id !== a.id)
    );
  }), [d, n, a.id]), /* @__PURE__ */ e.createElement(
    "li",
    {
      className: "aic-ct-tour-item aic-ct__core",
      id: `aic-ct-tour-item-${a.id}`
    },
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour-item__lockup" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour-item__info" }, a.title && /* @__PURE__ */ e.createElement("h2", { className: "aic-ct-tour-item__title f-deck" }, a.title, a.date_display && /* @__PURE__ */ e.createElement(e.Fragment, null, ", ", a.date_display)), a.artist_title && /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-tour-item__artist f-body" }, a.artist_title), a.gallery_title && /* @__PURE__ */ e.createElement("p", { className: "aic-ct-tour-item__gallery f-secondary" }, a.gallery_title)), a.image_id && /* @__PURE__ */ e.createElement(
      "img",
      {
        className: "aic-ct-tour-item__image",
        src: w(
          s,
          a.image_id,
          "128",
          "128",
          "square",
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
      "Add a note about why you chose this artwork ",
      /* @__PURE__ */ e.createElement("em", null, "(optional)")
    ), /* @__PURE__ */ e.createElement("span", { className: "textarea" }, /* @__PURE__ */ e.createElement("span", { className: "input__io-container" }, /* @__PURE__ */ e.createElement(
      "textarea",
      {
        className: "f-secondary",
        id: `aic-ct-note-${a.id}`,
        onChange: u.onChange,
        rows: "5",
        placeholder: "e.g. This reminds me of our our vacation last year.",
        value: u.value,
        maxLength: u.maxLength
      }
    ), u.counterEl))),
    /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "btn btn--transparent f-secondary aic-ct-tour-item__remove",
        ref: o,
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
H.propTypes = {
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
function ke() {
  const { tourItems: i, headerNextButtonRef: a, setActiveNavPage: r, limits: c } = N(k), [d, s] = _({
    flag: !1,
    id: null
  }), [n, l] = _([]), m = C(null), o = () => {
    r(0), a.current.focus();
  }, u = () => {
    r(2), a.current.focus();
  };
  return E(() => {
    d.flag && (!i.length && (m != null && m.current) ? m.current.focus() : n.find((h) => h.id === d.id).ref.current.focus(), s(!1));
  }, [i, d, n, m]), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour" }, i.length > 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement("header", { className: "aic-ct-section-header f-body" }, /* @__PURE__ */ e.createElement("h2", { id: "aic-ct-tour__heading", className: "f-module-title-2" }, "Artworks in your tour")), /* @__PURE__ */ e.createElement("div", { className: "f-body aic-ct-tour__intro" }, /* @__PURE__ */ e.createElement("p", null, "To optimize your visit, we automatically arrange the order of your tour based on the location of the artwork in the museum. You'll see the new order when you finish building your tour."), i.length === 6 && /* @__PURE__ */ e.createElement("p", null, "You've added 6 artworks, the maximum number allowed. You may remove one if you would like to choose a different work."))), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-tour__results" }, i.map((h, p) => /* @__PURE__ */ e.createElement(
    H,
    {
      key: h.id,
      setRemoveButtons: l,
      itemData: h,
      itemIndex: p,
      shouldAssignFocus: d,
      setShouldAssignFocus: s
    }
  )))), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta aic-ct-full-bleed" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-wrapper aic-ct-full-bleed__core" }, i.length > 0 && i.length < 6 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You've added ", i.length, " of the maximum", " ", c.items.max, " artworks."), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: m,
      id: "aic-ct-tour__cta-browse",
      type: "button",
      className: "f-buttons btn btn--secondary",
      onClick: o
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
  ))), i.length === 6 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You've added ", i.length, " artworks, the maximum number allowed. Please remove one if you would like to include more artwork"), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "f-buttons btn btn--primary",
      onClick: u
    },
    "Finish creating tour"
  ))), i.length === 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You haven't added any artworks to your tour yet"), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: m,
      id: "aic-ct-tour__cta-browse",
      type: "button",
      className: "f-buttons btn btn--secondary",
      onClick: o
    },
    "Browse for more artworks"
  ))))));
}
function Se() {
  const {
    tourTitle: i,
    setTourTitle: a,
    creatorEmail: r,
    setCreatorEmail: c,
    validCreatorEmail: d,
    setValidCreatorEmail: s,
    creatorName: n,
    setCreatorName: l,
    recipientName: m,
    setRecipientName: o,
    marketingOptIn: u,
    setMarketingOptIn: h,
    tourDescription: p,
    setTourDescription: g,
    limits: f
  } = N(k), b = R({
    initialValue: i,
    maxLength: f.title,
    valueSetter: a
  }), y = R({
    initialValue: n,
    maxLength: f.creatorName,
    valueSetter: l
  }), S = R({
    initialValue: m,
    maxLength: f.recipientName,
    valueSetter: o
  }), v = R({
    initialValue: p,
    maxLength: f.description,
    valueSetter: g
  });
  return /* @__PURE__ */ e.createElement("fieldset", { className: "m-fieldset aic-ct-fieldset" }, /* @__PURE__ */ e.createElement("ol", { className: "m-fieldset__fieldset" }, /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__title", className: "label f-secondary" }, "Tour Title ", /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true" }, " *")), /* @__PURE__ */ e.createElement("span", { className: "input" }, /* @__PURE__ */ e.createElement("span", { className: "input__io-container" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      className: "f-secondary",
      type: "text",
      onChange: b.onChange,
      value: b.value,
      id: "aic-ct-metadata__title",
      maxLength: b.maxLength,
      "aria-required": "true",
      "aria-invalid": b.value ? "false" : "true",
      "aria-describedby": b.value ? null : "aic-ct-metadata__invalid-title",
      required: !0
    }
  ), b.counterEl), !b.value && /* @__PURE__ */ e.createElement(
    "span",
    {
      id: "aic-ct-metadata__invalid-title",
      className: "error-msg f-secondary"
    },
    "Please enter a title for your tour"
  ))), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement(
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
      value: y.value,
      onChange: y.onChange,
      id: "aic-ct-metadata__creator-name",
      maxLength: y.maxLength
    }
  ), y.counterEl))), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement(
    "label",
    {
      htmlFor: "aic-ct-metadata__creator-email",
      className: "label f-secondary"
    },
    "Your email ",
    /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true" }, " *")
  ), /* @__PURE__ */ e.createElement("span", { className: "input" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      className: "f-secondary",
      type: "email",
      value: r.value,
      onChange: (I) => {
        c(I.target.value), s(I.target.validity.valid);
      },
      id: "aic-ct-metadata__creator-email",
      "aria-required": "true",
      "aria-invalid": r.value ? "false" : "true",
      "aria-describedby": r.isValid ? null : "aic-ct-metadata__invalid-email",
      required: !0
    }
  ), !d && /* @__PURE__ */ e.createElement(
    "span",
    {
      id: "aic-ct-metadata__invalid-email",
      className: "error-msg f-secondary"
    },
    "Please enter a valid email address"
  ))), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement(
    "label",
    {
      htmlFor: "aic-ct-metadata__recipient-name",
      className: "label f-secondary"
    },
    "If you are making this tour for someone else, add their name below ",
    /* @__PURE__ */ e.createElement("em", null, "(optional)")
  ), /* @__PURE__ */ e.createElement("span", { className: "input" }, /* @__PURE__ */ e.createElement("span", { className: "input__io-container" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      className: "f-secondary",
      type: "text",
      value: S.value,
      onChange: S.onChange,
      id: "aic-ct-metadata__recipient-name",
      maxLength: S.maxLength
    }
  ), S.counterEl))), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement(
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
      onChange: v.onChange,
      rows: "5",
      value: v.value,
      maxLength: v.maxLength
    }
  ), v.counterEl))), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement("span", { className: "checkbox f-secondary" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      id: "aic-ct-metadata__opt-in",
      value: u,
      name: "aic-ct-metadata__opt-in",
      checked: u,
      onChange: (I) => {
        h(I.target.checked);
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
    apiSaveEndpoint: i,
    tourTitle: a,
    creatorName: r,
    creatorEmail: c,
    recipientName: d,
    marketingOptIn: s,
    validCreatorEmail: n,
    tourItems: l,
    tourDescription: m,
    validityIssues: o,
    setValidityIssues: u,
    limits: h,
    isSaving: p,
    setIsSaving: g,
    setActiveNavPage: f
  } = N(k), [b, y] = _(null), S = async () => {
    g(!0);
    try {
      const v = await fetch(`${i}`, {
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
            creatorName: r,
            recipientName: d,
            description: m,
            // "artworks" is essentially everything from the GET response with added "objectNote"
            // The API expects these fields named in this way
            artworks: l
          }
        })
      });
      if (!v.ok)
        throw new Error(
          "There was a problem saving your tour, please try again. If the problem persists, please contact us and let us know."
        );
      const { message: I, my_museum_tour: T } = await v.json();
      y({
        type: "success",
        message: I,
        id: T.id
      });
    } catch (v) {
      y({
        type: "error",
        message: v.message
      });
    }
    g(!1);
  };
  return E(() => {
    const v = [];
    a.length || v.push("A tour title"), a.length > h.title && v.push("Tour title must not exceed the character limit"), n || v.push("A valid email address"), m.length > h.description && v.push(
      "Tour description must not exceed the character limit"
    ), l.length < h.items.min && v.push("At least one artwork is required for your tour"), l.length > h.items.max && v.push("Tour must not contain more than 6 artworks"), l.some((I) => {
      var T;
      return ((T = I.objectNote) == null ? void 0 : T.length) > h.objectNote ? (v.push("Notes must not exceed the character limit"), !0) : !1;
    }), u(v);
  }, [
    a,
    m,
    l,
    u,
    h,
    n
  ]), E(() => {
    b != null && b.id && V.assign(
      `/my-museum-tour/${b.id}?tourCreationComplete=true`
    );
  }, [b]), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation" }, o.length ? /* @__PURE__ */ e.createElement(
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
      /* @__PURE__ */ e.createElement("ul", null, o.map((v, I) => /* @__PURE__ */ e.createElement("li", { className: "f-body", key: I }, v)))
    ),
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation__actions" }, /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "btn btn--secondary f-buttons",
        type: "button",
        onClick: () => {
          l.length ? f(1) : f(0);
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
      /* @__PURE__ */ e.createElement("h1", { className: "f-headline" }, "Are you ready to finish your tour?"),
      /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You won't be able to edit it once you save.", /* @__PURE__ */ e.createElement("br", null), "Your tour will be automatically emailed to you when finished."),
      /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation__actions" }, /* @__PURE__ */ e.createElement(
        "button",
        {
          id: "aic-ct-save-button",
          className: "btn btn--primary f-buttons",
          type: "button",
          onClick: S,
          disabled: p
        },
        "Yes, save my tour"
      ), /* @__PURE__ */ e.createElement(
        "button",
        {
          className: "btn btn--secondary f-buttons",
          type: "button",
          onClick: () => {
            f(1);
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
          onClick: S,
          disabled: p
        },
        "Try again"
      ))
    ))
  ));
}
const Ce = (i) => {
  const {
    apiSaveEndpoint: a,
    tourTitle: r,
    tourDescription: c,
    tourItems: d,
    heroImageId: s
  } = i, n = "https://artic.edu/iiif/2", l = {
    apiSaveEndpoint: a,
    tourTitle: r,
    tourDescription: c,
    tourItems: d,
    heroImageId: s,
    iiifBaseUrl: n
  };
  return /* @__PURE__ */ e.createElement("div", { id: "my-museum-tour-builder", className: "my-museum-tour" }, /* @__PURE__ */ e.createElement(D, { ...l }, /* @__PURE__ */ e.createElement(ve, null), /* @__PURE__ */ e.createElement(B, null, /* @__PURE__ */ e.createElement(
    F,
    {
      id: 0,
      title: "Browse",
      tagline: "for artworks to add to your tour"
    },
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-intro aic-ct-intro--keyline aic-ct__core" }, /* @__PURE__ */ e.createElement("h1", { className: "f-display-2" }, "Create your own tour"), /* @__PURE__ */ e.createElement("p", { className: "f-deck" }, "Choose up to 6 artworks for your tour by searching for a particular work or artist, browsing themes or selecting from the list of artworks below.")),
    /* @__PURE__ */ e.createElement(j, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement(Ee, null), /* @__PURE__ */ e.createElement(ye, null), /* @__PURE__ */ e.createElement(we, null)))
  ), /* @__PURE__ */ e.createElement(
    F,
    {
      id: 1,
      title: "Personalize",
      tagline: "your tour by adding notes to artworks"
    },
    s && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-hero aic-ct-full-bleed" }, /* @__PURE__ */ e.createElement(
      "img",
      {
        src: w(n, s, 20, 20, "full"),
        srcSet: `${w(
          n,
          s,
          480,
          480,
          "full"
        )} 320w, ${w(
          n,
          s,
          640,
          640,
          "full"
        )} 480w, ${w(
          n,
          s,
          960,
          960,
          "full"
        )} 640w, ${w(
          n,
          s,
          1280,
          1280,
          "full"
        )} 960w, ${w(
          n,
          s,
          1920,
          1920,
          "full"
        )} 1280w`,
        alt: ""
      }
    )),
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-intro aic-ct__core" }, /* @__PURE__ */ e.createElement("h1", { className: "f-display-2" }, "Personalize your tour")),
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement(Se, null)),
    /* @__PURE__ */ e.createElement(ke, null)
  ), /* @__PURE__ */ e.createElement(F, { id: 2, title: "Complete", tagline: "and share with friends" }, /* @__PURE__ */ e.createElement(Ie, null))), /* @__PURE__ */ e.createElement(ge, null)));
};
Ce.propTypes = {
  apiSaveEndpoint: t.string,
  tourTitle: t.string,
  tourDescription: t.string,
  tourItems: t.array,
  searchPreviewId: t.number,
  heroImageId: t.string
};
export {
  Ce as default
};
