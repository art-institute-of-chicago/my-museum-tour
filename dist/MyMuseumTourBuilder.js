import e, { createContext as D, useState as _, useReducer as he, useRef as C, useMemo as $, useContext as N, useEffect as y, useCallback as q } from "react";
import a from "prop-types";
const pe = (i, t) => {
  switch (t.type) {
    case "ADD_ITEM":
      return t.payload.short_description && (t.payload.description = t.payload.short_description), delete t.payload.short_description, [...i, { ...t.payload, objectNote: "" }];
    case "UPDATE_NOTE":
      return i.map((r) => r.id === t.payload.id ? { ...r, objectNote: t.payload.objectNote } : r);
    case "REMOVE_ITEM":
      return i.filter(({ id: r }) => r !== t.payload);
    default:
      return i;
  }
}, k = D();
function O(i) {
  const {
    children: t,
    tourTitle: r,
    creatorEmail: c,
    creatorName: m,
    recipientName: s,
    tourDescription: n,
    marketingOptIn: l,
    tourItems: u,
    navPages: o,
    apiSaveEndpoint: h,
    iiifBaseUrl: d
  } = i, [p, g] = _(r || ""), [b, f] = _(c || ""), [E, S] = _(!1), [v, I] = _(m || ""), [T, Q] = _(s || ""), [z, J] = _(
    l || !1
  ), [W, G] = _(
    n || ""
  ), [K, X] = _(o || []), [Z, ee] = _(0), [te, ae] = he(
    pe,
    u || []
  ), re = C(null), ie = C(null), [ne, se] = _([]), ce = h || "/api/v1/my-museum-tour", [le, oe] = _(!1), [me, ue] = _(0), de = $(
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
        iiifBaseUrl: d,
        limits: de,
        tourTitle: p,
        setTourTitle: g,
        creatorEmail: b,
        setCreatorEmail: f,
        validCreatorEmail: E,
        setValidCreatorEmail: S,
        creatorName: v,
        setCreatorName: I,
        recipientName: T,
        setRecipientName: Q,
        tourDescription: W,
        setTourDescription: G,
        marketingOptIn: z,
        setMarketingOptIn: J,
        tourItems: te,
        tourItemsDispatch: ae,
        navPages: K,
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
    t
  );
}
O.propTypes = {
  apiSaveEndpoint: a.string,
  iiifBaseUrl: a.string,
  children: a.node.isRequired,
  tourTitle: a.string,
  creatorEmail: a.string,
  creatorName: a.string,
  recipientName: a.string,
  marketingOptIn: a.bool,
  tourDescription: a.string,
  tourItems: a.instanceOf(Array),
  navPages: a.instanceOf(Array)
};
k.Provider.propTypes = {
  value: a.shape({
    apiSaveEndpoint: a.string,
    iiifBaseUrl: a.string,
    limits: a.shape({
      note: a.number,
      title: a.number,
      creatorName: a.number,
      recipientName: a.number,
      description: a.number,
      items: a.shape({
        min: a.number,
        max: a.number
      })
    }),
    tourItems: a.instanceOf(Array),
    tourItemsDispatch: a.func,
    tourTitle: a.string,
    setTourTitle: a.func,
    creatorEmail: a.string,
    setCreatorEmail: a.func,
    validCreatorEmail: a.bool,
    setValidCreatorEmail: a.func,
    creatorName: a.string,
    setCreatorName: a.func,
    recipientName: a.string,
    setRecipientName: a.func,
    tourDescription: a.string,
    setTourDescription: a.func,
    marketingOptIn: a.bool,
    setMarketingOptIn: a.func,
    navPages: a.instanceOf(Array),
    setNavPages: a.func,
    activeNavPage: a.number,
    setActiveNavPage: a.func,
    headerPrevButtonRef: a.shape({
      current: a.instanceOf(Element)
    }),
    headerNextButtonRef: a.shape({
      current: a.instanceOf(Element)
    }),
    validityIssues: a.arrayOf(a.string),
    setValidityIssues: a.func,
    isSaving: a.bool,
    setIsSaving: a.func,
    scrollY: a.number,
    setScrollY: a.func
  })
};
function be(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var V = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(i) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var c = [], m = 0; m < arguments.length; m++) {
        var s = arguments[m];
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
            for (var u in s)
              t.call(s, u) && s[u] && c.push(u);
          }
        }
      }
      return c.join(" ");
    }
    i.exports ? (r.default = r, i.exports = r) : window.classNames = r;
  })();
})(V);
var fe = V.exports;
const P = /* @__PURE__ */ be(fe);
function w(i, t, r = "", c = "", m = "full", s = !0) {
  return `${i}/${t}/${m}/${s ? "!" : ""}${r},${c}/0/default.jpg`;
}
function R(i) {
  const t = new URL("https://api.artic.edu/api/v1/artworks/search");
  t.searchParams.set(
    "query[bool][should][0][bool][must][][exists][field]",
    "short_description"
  ), t.searchParams.set(
    "query[bool][should][0][bool][must][][term][is_on_view][value]",
    "true"
  ), t.searchParams.set(
    "query[bool][should][1][bool][must][][term][is_on_view]",
    "true"
  ), t.searchParams.set(
    "query[bool][should][1][bool][must][][exists][field]",
    "description"
  ), t.searchParams.set(
    "query[bool][should][1][bool][should][][exists][field]",
    "description"
  ), t.searchParams.set(
    "query[bool][should][1][bool][should][][exists][field]",
    "subject_id"
  ), t.searchParams.set(
    "query[bool][should][1][bool][should][][exists][field]",
    "style_id"
  ), t.searchParams.set(
    "query[bool][should][1][bool][should][][term][is_boosted]",
    "true"
  ), t.searchParams.set("query[bool][minimum_should_match]", "1"), t.searchParams.set(
    "fields",
    "artist_title,short_description,description,id,image_id,thumbnail,title,date_display,gallery_title,gallery_id"
  ), t.searchParams.set("limit", "60"), typeof i.keywords < "u" && t.searchParams.set("q", i.keywords);
  for (const [r, c] of Object.entries(i))
    r.includes("_ids") ? t.searchParams.set(`query[bool][must][][terms][${r}][]`, c) : r.includes("_titles") && t.searchParams.set(
      `query[bool][must][][terms][${r}.keyword][]`,
      c
    );
  return t;
}
const L = {
  assign: (i) => window.location.assign(i)
};
function _e() {
  const {
    tourItems: i,
    limits: t,
    iiifBaseUrl: r,
    setActiveNavPage: c,
    activeNavPage: m,
    headerPrevButtonRef: s
  } = N(k), n = () => {
    var l;
    (l = s == null ? void 0 : s.current) == null || l.focus(), c(1);
  };
  return /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-header__slots", className: "aic-ct-header__slots" }, Array.from({ length: t.items.max }).map((l, u) => /* @__PURE__ */ e.createElement(
    "li",
    {
      className: P("aic-ct-header__slot", {
        "aic-ct-header__slot--active": i[u],
        "aic-ct-header__slot--inactive": !i[u]
      }),
      key: u
    },
    /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "btn btn--transparent f-buttons",
        type: "button",
        disabled: !i[u] || m === 1,
        onClick: n,
        "aria-label": `Artwork ${u + 1}, edit on customize page`
      },
      i[u] ? /* @__PURE__ */ e.createElement(
        "img",
        {
          src: w(
            r,
            i[u].image_id,
            "40",
            "40",
            "square"
          ),
          width: "40",
          height: "40",
          alt: "",
          className: "aic-ct-header__slot"
        }
      ) : /* @__PURE__ */ e.createElement("span", null, u + 1)
    )
  )));
}
function ve() {
  const {
    limits: i,
    activeNavPage: t,
    setActiveNavPage: r,
    tourItems: c,
    headerPrevButtonRef: m,
    headerNextButtonRef: s
  } = N(k), n = c.length, l = P(
    "aic-ct-header__button aic-ct-header__button--back btn btn--transparent btn--w-icon f-buttons",
    {
      "aic-ct-header__button--exit": t === 0
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
        ref: m,
        id: "aic-ct-header__back-button",
        className: l,
        type: "button",
        onClick: () => {
          t === 0 ? L.assign("/my-museum-tour") : r(t === 1 ? 0 : 1);
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
          r(t === 0 ? 1 : 2);
        }
      },
      t === 0 && "Next",
      t > 0 && "Finish",
      /* @__PURE__ */ e.createElement("svg", { className: "icon--arrow", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--arrow" }))
    ))
  );
}
function ge() {
  const { navPages: i, activeNavPage: t, setActiveNavPage: r, isSaving: c } = N(k), m = (s) => P("aic-ct-nav__button btn f-buttons btn--transparent", {
    "aic-ct-nav__button--active": t === s,
    "aic-ct-nav__button--done": t > s
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
          "aria-pressed": s.id === t,
          type: "button",
          onClick: () => r(n),
          disabled: c,
          className: m(s.id)
        },
        /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__button-wrapper" }, /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__number" }, s.id + 1), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__title" }, s.title), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__tagline" }, s.tagline))
      ))
    )
  );
}
function B({ children: i }) {
  var m, s, n;
  const { activeNavPage: t, navPages: r, setNavPages: c } = N(k);
  return y(() => {
    c(
      i ? i.map((l, u) => ({
        id: u,
        title: l.props.title,
        tagline: l.props.tagline
      })) : []
    );
  }, [i, c]), y(() => {
    var l;
    (l = document.querySelector("#my-museum-tour-builder")) == null || l.scrollIntoView();
  }, [t]), /* @__PURE__ */ e.createElement("div", { id: "aic-ct-nav-pages" }, /* @__PURE__ */ e.createElement("div", { className: "sr-only", "aria-live": "polite" }, "Step ", ((m = r[t]) == null ? void 0 : m.id) + 1, " ", (s = r[t]) == null ? void 0 : s.title, " ", (n = r[t]) == null ? void 0 : n.tagline), i);
}
B.propTypes = {
  children: a.node.isRequired
};
function F(i) {
  const { id: t, children: r } = i, { activeNavPage: c } = N(k);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      tabIndex: "0",
      id: `aic-ct-nav-page-${t}`,
      "aria-labelledby": `aic-ct-nav-button-${t}`,
      "aria-hidden": c !== t,
      style: c !== t ? { display: "none" } : {}
    },
    r
  );
}
F.propTypes = {
  id: a.number.isRequired,
  title: a.string.isRequired,
  tagline: a.string.isRequired,
  children: a.oneOfType([
    a.arrayOf(a.element),
    a.object
  ]).isRequired
};
const x = D();
function M(i) {
  const {
    children: t,
    searchResultItems: r,
    searchQuery: c,
    searchFetching: m,
    searchError: s,
    searchPreviewId: n
  } = i, [l, u] = _(
    r || null
  ), [o, h] = _(c || ""), [d, p] = _(
    m || !1
  ), [g, b] = _(s || !1), [f, E] = _(null), [S, v] = _(
    n || null
  ), I = C();
  return /* @__PURE__ */ e.createElement(
    x.Provider,
    {
      value: {
        searchResultItems: l,
        setSearchResultItems: u,
        searchQuery: o,
        setSearchQuery: h,
        searchFetching: d,
        setSearchFetching: p,
        searchError: g,
        setSearchError: b,
        activeTheme: f,
        setActiveTheme: E,
        searchPreviewId: S,
        setSearchPreviewId: v,
        searchPreviewRef: I
      }
    },
    t
  );
}
M.propTypes = {
  children: a.node.isRequired,
  searchResultItems: a.array,
  searchQuery: a.string,
  searchFetching: a.bool,
  searchError: a.oneOfType([a.string, a.bool]),
  searchPreviewId: a.number
};
x.Provider.propTypes = {
  value: a.shape({
    searchResultItems: a.array,
    setSearchResultItems: a.func,
    searchQuery: a.string,
    setSearchQuery: a.func,
    searchFetching: a.bool,
    setSearchFetching: a.func,
    searchError: a.oneOfType([a.string, a.bool]),
    setSearchError: a.func,
    activeTheme: a.string,
    setActiveTheme: a.func,
    searchPreviewId: a.number,
    setSearchPreviewId: a.func,
    searchPreviewRef: a.object
  }),
  children: a.node.isRequired
};
const j = (i) => {
  const [t, r] = _(null), [c, m] = _(!1), [s, n] = _(null), [l, u] = _(null), { dataSubSelector: o, dataSetter: h, fetchingSetter: d, errorSetter: p } = i || {}, g = () => {
    r(null), m(!1), n(null), u(null);
  }, b = async (f) => {
    m(!0);
    const E = new AbortController();
    u(E);
    try {
      const v = await (await fetch(f, { signal: E.signal })).json();
      r(o ? v[o] : v), n(null), m(!1);
    } catch (S) {
      if (S.name === "AbortError") {
        g();
        return;
      }
      n("Error fetching results"), m(!1);
    }
  };
  return y(() => {
    const f = l;
    return () => {
      f && f.abort();
    };
  }, [l]), y(() => {
    h && h(t);
  }, [t, h]), y(() => {
    p && p(s);
  }, [s, p]), y(() => {
    d && d(c);
  }, [c, d]), { data: t, fetching: c, error: s, fetchData: b, resetState: g };
};
function Ee() {
  const {
    searchQuery: i,
    setSearchQuery: t,
    setSearchResultItems: r,
    setSearchFetching: c,
    setSearchError: m,
    setActiveTheme: s
  } = N(x), [n, l] = _(!0), { fetchData: u } = j({
    dataSubSelector: "data",
    dataSetter: r,
    fetchingSetter: c,
    errorSetter: m
  }), o = (p) => {
    u(R({ keywords: i })), s(null), p.preventDefault();
  }, h = C(null), d = P("m-search-bar aic-ct-search", {
    "s-autocomplete-active": i
  });
  return y(() => {
    n && (l(!1), u(R({ keywords: "" })));
  }, [u, n, l]), /* @__PURE__ */ e.createElement(
    "form",
    {
      id: "aic-ct-search",
      role: "search",
      "aria-label": "Objects for your tour",
      onSubmit: o,
      className: d
    },
    /* @__PURE__ */ e.createElement("div", { className: "m-search-bar__inner" }, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-search__input", className: "sr-only" }, "Search the collection"), /* @__PURE__ */ e.createElement(
      "input",
      {
        id: "aic-ct-search__input",
        className: "f-secondary",
        type: "text",
        placeholder: "Search by keyword, artist, or title",
        value: i,
        autoComplete: "off",
        onChange: (p) => {
          t(p.target.value);
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
        ref: h
      },
      /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--search--24" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--search--24" }))
    ), /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "m-search-bar__clear",
        "aria-label": "Clear search",
        type: "reset",
        onClick: () => {
          t(""), r(null), s(null), u(R({ keywords: "" })), h.current.focus();
        }
      },
      /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--close" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close" }))
    ))
  );
}
function Y(i) {
  const { id: t, label: r, thumbnailId: c, searchParams: m } = i, { iiifBaseUrl: s } = N(k), {
    setSearchResultItems: n,
    setSearchFetching: l,
    setSearchError: u,
    setSearchQuery: o,
    activeTheme: h,
    setActiveTheme: d
  } = N(x), { fetchData: p } = j({
    dataSubSelector: "data",
    dataSetter: n,
    fetchingSetter: l,
    errorSetter: u
  }), g = () => {
    h === r ? (d(null), p(R({ keywords: "" }))) : (p(R(m)), d(r), o(""));
  }, b = P(
    "aic-ct-theme-toggle tag tag--senary tag--w-image",
    {
      "f-tag": h !== r,
      "f-tag-2": h === r,
      "aic-ct-theme-toggle--active": h === r
    }
  );
  return /* @__PURE__ */ e.createElement(e.Fragment, null, (h === null || h === r) && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: b,
      id: `aic-ct-theme-toggle-${t}`,
      onClick: g,
      "aria-pressed": h === r ? "true" : "false"
    },
    /* @__PURE__ */ e.createElement("span", { className: "aic-ct-theme-toggle__wrapper" }, /* @__PURE__ */ e.createElement(
      "img",
      {
        src: w(s, c, "40", "40", "square"),
        alt: ""
      }
    ), r, h === r && /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--close" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close" })))
  )));
}
Y.propTypes = {
  id: a.number.isRequired,
  label: a.string.isRequired,
  thumbnailId: a.string.isRequired,
  searchParams: a.object.isRequired
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
    },
    {
      label: "Drinking and Dining",
      thumbnailId: "a2f4085a-6715-212a-c5fa-aa88a4692df0",
      searchParams: {
        theme_titles: ["Drinking and Dining"]
      }
    },
    {
      label: "Chicago Artists",
      thumbnailId: "62f2ca7a-8c22-bb7e-9e3d-7453652a3350",
      searchParams: {
        theme_titles: ["Chicago Artists"]
      }
    },
    {
      label: "Ancient",
      thumbnailId: "677cb9ce-8e4c-119a-711e-9b5a98c834d9",
      searchParams: {
        style_ids: ["TM-8542"]
      }
    },
    {
      label: "Women Artists",
      thumbnailId: "f7f9615d-2c2b-6b23-47b2-cd6cdc846504",
      searchParams: {
        theme_titles: ["Women artists"]
      }
    }
  ];
  return /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-themes", className: "aic-ct-themes" }, i.map((t, r) => /* @__PURE__ */ e.createElement(
    Y,
    {
      key: t.label,
      id: r,
      label: t.label,
      thumbnailId: t.thumbnailId,
      searchParams: t.searchParams
    }
  )));
}
function H(i) {
  const { setSearchPreviewId: t, searchPreviewRef: r } = N(x), { iiifBaseUrl: c, setScrollY: m, tourItems: s } = N(k), { itemData: n } = i, l = s.some((p) => p.id === n.id), u = C(null), o = C(), h = () => {
    const p = document.documentElement.scrollTop;
    t(n.id), m(p), r.current.showModal(), setTimeout(() => {
      document.documentElement.classList.add(
        "s-body-locked",
        "s-body-locked--ct"
      ), document.body.scrollTop = p;
    }, 0);
  }, d = P(
    "aic-ct-result o-pinboard__item m-listing m-listing--variable-height",
    {
      "aic-ct-result--selected": l
    }
  );
  return y(() => {
    var p;
    (p = o == null ? void 0 : o.current) != null && p.includes("s-positioned") && u.current.classList.add("s-positioned"), o.current = u.current.className;
  }), /* @__PURE__ */ e.createElement(
    "li",
    {
      ref: u,
      id: `aic-ct-search-item-${n.id}`,
      className: d
    },
    n.image_id && /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "aic-ct-result__button",
        type: "button",
        onClick: h,
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
H.propTypes = {
  itemData: a.shape({
    id: a.number.isRequired,
    title: a.string.isRequired,
    image_id: a.string,
    thumbnail: a.shape({
      alt_text: a.string,
      width: a.number,
      height: a.number,
      lqip: a.string
    }),
    artist_title: a.string,
    description: a.string
  })
};
function Ne() {
  const { searchPreviewId: i, searchResultItems: t, searchPreviewRef: r } = N(x), { iiifBaseUrl: c, tourItems: m, tourItemsDispatch: s, limits: n } = N(k), [l, u] = _(!1), [o, h] = _(null), d = P({
    "aic-ct-preview__content": !0,
    "aic-ct-preview--loading": !o
  });
  y(() => {
    h(
      t.find((b) => b.id === i)
    );
  }, [i, t]);
  const p = () => {
    var b;
    s({
      type: l ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: l ? o.id : o
    }), (b = r == null ? void 0 : r.current) == null || b.close();
  }, g = () => {
    var b;
    (b = r == null ? void 0 : r.current) == null || b.close();
  };
  return y(() => {
    o && u(m.find((b) => b.id === o.id));
  }, [m, o]), m.length < 6 || l ? /* @__PURE__ */ e.createElement("div", { className: d, id: "aic-ct-preview__content" }, o ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__header aic-ct-preview__core" }, /* @__PURE__ */ e.createElement(
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
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__core" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__details" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__title f-headline-editorial" }, o.title, o.date_display && /* @__PURE__ */ e.createElement(e.Fragment, null, ",", " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-preview__date f-list-4" }, o.date_display))), o.artist_title && /* @__PURE__ */ e.createElement("p", { className: "aic-ct-preview__artist f-subheading-1" }, o.artist_title)), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__links" }, m.length < 6 || l ? /* @__PURE__ */ e.createElement(
    "button",
    {
      id: `aic-ct-preview__action-button-${o.id}`,
      className: "btn btn--my-museum-tour f-buttons aic-ct-preview__action-button",
      type: "button",
      onClick: p,
      "aria-pressed": l ? "true" : "false",
      "aria-label": "Toggle from your tour"
    },
    l ? "Remove from Your Tour" : "Add to Your Tour"
  ) : /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You have already added ", n.items.max, " artworks, the maximum number allowed. Please remove one if you would like to choose a different work.")), (o.short_description || o.description) && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__description" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__description-title f-module-title-2" }, "Artwork description"), /* @__PURE__ */ e.createElement(
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
  ))) : /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__core aic-ct-loader f-body" }, /* @__PURE__ */ e.createElement("p", null, "Loading..."), /* @__PURE__ */ e.createElement("div", { className: "loader" }))) : /* @__PURE__ */ e.createElement("div", { className: d, id: "aic-ct-preview__content" }, /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__header aic-ct-preview__core" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-preview__close",
      className: "btn btn--icon btn--transparent aic-ct-preview__close",
      type: "button",
      "aria-label": "Close",
      onClick: g
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" }))
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__core" }, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You have already added ", n.items.max, " artworks, the maximum number allowed. Please remove one if you would like to choose a different work.")), /* @__PURE__ */ e.createElement("br", null)));
}
function we() {
  const {
    searchError: i,
    searchFetching: t,
    searchResultItems: r,
    searchPreviewRef: c,
    setSearchPreviewId: m,
    activeTheme: s,
    searchQuery: n
  } = N(x), { scrollY: l } = N(k), u = C(null), o = q(
    (d) => {
      var p;
      (d.type === "close" || (p = c == null ? void 0 : c.current) != null && p.open && d.target === (c == null ? void 0 : c.current)) && (c.current.close(), m(null), document.documentElement.scrollTop = l, document.documentElement.classList.remove(
        "s-body-locked",
        "s-body-locked--ct"
      ));
    },
    [m, l, c]
  ), h = q(() => {
    const d = new Event("page:updated", { bubbles: !0 });
    setTimeout(() => {
      document.dispatchEvent(d);
    }, 0);
  }, []);
  return y(() => {
    u.current && (r == null ? void 0 : r.length) > 0 && !t && !i && h();
  }, [
    u,
    r,
    t,
    i,
    h
  ]), y(() => {
    const d = c.current;
    return d && (d.addEventListener("close", o), d.addEventListener("click", o)), () => {
      d && (d.removeEventListener("close", o), d.removeEventListener("click", o));
    };
  }, [c, o]), !r && !t && !i ? null : /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-search-results" }, t && // Render only the loading message while fetching
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
  ), (r == null ? void 0 : r.length) === 0 && !t && !i && // Render only a no results message if there are no results
  /* @__PURE__ */ e.createElement(
    "div",
    {
      id: "aic-ct-search-results__no-results",
      className: "aic-ct-search-results__message f-body"
    },
    /* @__PURE__ */ e.createElement("p", null, "Sorry, we couldn’t find any artworks matching your search. ")
  ), (r == null ? void 0 : r.length) > 0 && !t && !i && // Render the results if there are results
  /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "aic-ct-pre-result-text f-body" }, "The artworks below are currently on view and available to choose for your tour."), /* @__PURE__ */ e.createElement(
    "ul",
    {
      ref: u,
      id: "aic-ct-search-results__items",
      className: "o-pinboard o-pinboard--2-col@xsmall o-pinboard--2-col@small o-pinboard--3-col@medium o-pinboard--4-col@large o-pinboard--4-col@xlarge",
      "data-pinboard-option-layout": "o-pinboard--2-col@xsmall o-pinboard--2-col@small o-pinboard--2-col@medium o-pinboard--3-col@large o-pinboard--3-col@xlarge",
      "data-pinboard-maintain-order": "false",
      "data-behavior": "pinboard"
    },
    r.map((d) => /* @__PURE__ */ e.createElement(H, { key: d.id, itemData: d }))
  ), /* @__PURE__ */ e.createElement(
    "dialog",
    {
      ref: c,
      id: "aic-ct-search-preview",
      onClose: o
    },
    /* @__PURE__ */ e.createElement(Ne, null)
  ))), /* @__PURE__ */ e.createElement("p", { className: "u-hide", id: "aic-ct-search__in-your-tour" }, "This object is in your tour", " "), /* @__PURE__ */ e.createElement("p", { className: "sr-only", "aria-live": "polite" }, t ? "Loading" : s ? `Showing results for ${s}` : n ? `Showing results for ${n}` : "Showing default results"));
}
function A(i = {}) {
  const { initialValue: t, maxLength: r, valueSetter: c } = i, [m, s] = _(t || ""), n = C(null), l = r - m.length;
  return {
    value: m,
    onChange: (o) => {
      const { value: h } = o.target;
      n.current.ariaBusy = !0, s(h), c && c(h), n.current.ariaBusy = !1;
    },
    countRef: n,
    charsRemaining: l,
    maxLength: r,
    counterEl: /* @__PURE__ */ e.createElement("output", { ref: n }, "(", l, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")
  };
}
function U(i) {
  var g;
  const { itemData: t, itemIndex: r, setShouldAssignFocus: c, setRemoveButtons: m } = i, { iiifBaseUrl: s, tourItems: n, tourItemsDispatch: l, limits: u } = N(k), o = C(null), h = A({
    initialValue: (g = n[r]) == null ? void 0 : g.objectNote,
    maxLength: u.objectNote
  }), d = $(
    () => ({
      id: t.id,
      objectNote: h.value
    }),
    [t.id, h.value]
  ), p = () => {
    l({
      type: "REMOVE_ITEM",
      payload: t.id
    });
  };
  return y(() => {
    l({
      type: "UPDATE_NOTE",
      payload: d
    });
  }, [d, l]), y(() => {
    const b = o.current;
    return () => {
      document.activeElement === b && (n.length > 1 ? n.find((f, E) => {
        f.id === t.id && c({
          flag: !0,
          id: n[E !== n.length - 1 ? E + 1 : E - 1].id
        });
      }) : c({
        flag: !0,
        id: null
      }));
    };
  }, [n, t.id, c]), y(() => (m((b) => [...b, { id: t.id, ref: o }]), () => {
    m(
      (b) => b.filter((f) => f.id !== t.id)
    );
  }), [m, n, t.id]), /* @__PURE__ */ e.createElement(
    "li",
    {
      className: "aic-ct-tour-item aic-ct__core",
      id: `aic-ct-tour-item-${t.id}`
    },
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour-item__lockup" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour-item__info" }, t.title && /* @__PURE__ */ e.createElement("h2", { className: "aic-ct-tour-item__title f-deck" }, t.title, t.date_display && /* @__PURE__ */ e.createElement(e.Fragment, null, ", ", t.date_display)), t.artist_title && /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-tour-item__artist f-body" }, t.artist_title), t.gallery_title && /* @__PURE__ */ e.createElement("p", { className: "aic-ct-tour-item__gallery f-secondary" }, t.gallery_title)), t.image_id && /* @__PURE__ */ e.createElement(
      "img",
      {
        className: "aic-ct-tour-item__image",
        src: w(
          s,
          t.image_id,
          "128",
          "128",
          "square",
          !0
        ),
        alt: t.thumbnail.alt_text
      }
    )),
    t.description && /* @__PURE__ */ e.createElement(
      "div",
      {
        className: "aic-ct-tour-item__description f-body ",
        dangerouslySetInnerHTML: { __html: t.description }
      }
    ),
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour-item__note" }, /* @__PURE__ */ e.createElement(
      "label",
      {
        htmlFor: `aic-ct-note-${t.id}`,
        className: "label f-secondary"
      },
      "Add a note about why you chose this artwork ",
      /* @__PURE__ */ e.createElement("em", null, "(optional)")
    ), /* @__PURE__ */ e.createElement("span", { className: "textarea" }, /* @__PURE__ */ e.createElement("span", { className: "input__io-container" }, /* @__PURE__ */ e.createElement(
      "textarea",
      {
        className: "f-secondary",
        id: `aic-ct-note-${t.id}`,
        onChange: h.onChange,
        rows: "5",
        placeholder: "e.g. This reminds me of our our vacation last year.",
        value: h.value,
        maxLength: h.maxLength
      }
    ), h.counterEl))),
    /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "btn btn--transparent f-secondary aic-ct-tour-item__remove",
        ref: o,
        type: "button",
        onClick: () => {
          p(t.id);
        }
      },
      /* @__PURE__ */ e.createElement("svg", { className: "icon--delete", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--delete" })),
      "Remove from tour"
    )
  );
}
U.propTypes = {
  itemData: a.shape({
    id: a.number.isRequired,
    title: a.string.isRequired,
    image_id: a.string,
    thumbnail: a.shape({
      alt_text: a.string
    }),
    artist_title: a.string,
    description: a.string,
    date_display: a.string,
    gallery_title: a.string
  }),
  itemIndex: a.number.isRequired,
  setRemoveButtons: a.func,
  setShouldAssignFocus: a.func
};
function ke() {
  const { tourItems: i, headerNextButtonRef: t, setActiveNavPage: r, limits: c } = N(k), [m, s] = _({
    flag: !1,
    id: null
  }), [n, l] = _([]), u = C(null), o = () => {
    r(0), t.current.focus();
  }, h = () => {
    r(2), t.current.focus();
  };
  return y(() => {
    m.flag && (!i.length && (u != null && u.current) ? u.current.focus() : n.find((d) => d.id === m.id).ref.current.focus(), s(!1));
  }, [i, m, n, u]), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour" }, i.length > 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement("header", { className: "aic-ct-section-header f-body" }, /* @__PURE__ */ e.createElement("h2", { id: "aic-ct-tour__heading", className: "f-module-title-2" }, "Artworks in your tour")), /* @__PURE__ */ e.createElement("div", { className: "f-body aic-ct-tour__intro" }, /* @__PURE__ */ e.createElement("p", null, "Your artworks are listed below in the order that you selected them. Your final tour will have them ordered based on their location in the galleries to give you the easiest tour path."), i.length === 6 && /* @__PURE__ */ e.createElement("p", null, /* @__PURE__ */ e.createElement("br", null), "You've added 6 artworks, the maximum number allowed. You may remove one if you would like to choose a different work."))), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-tour__results" }, i.map((d, p) => /* @__PURE__ */ e.createElement(
    U,
    {
      key: d.id,
      setRemoveButtons: l,
      itemData: d,
      itemIndex: p,
      shouldAssignFocus: m,
      setShouldAssignFocus: s
    }
  )))), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta aic-ct-full-bleed" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-wrapper aic-ct-full-bleed__core" }, i.length > 0 && i.length < 6 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You've added ", i.length, " of the maximum", " ", c.items.max, " artworks."), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: u,
      id: "aic-ct-tour__cta-browse",
      type: "button",
      className: "f-buttons btn btn--secondary",
      onClick: o
    },
    "Browse for More Artworks"
  ), /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "f-buttons btn btn--my-museum-tour",
      onClick: h
    },
    "Finish My Tour"
  ))), i.length === 6 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You've added ", i.length, " artworks, the maximum number allowed. Please remove one if you would like to choose a different work."), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "f-buttons btn btn--primary",
      onClick: h
    },
    "Finish My Tour"
  ))), i.length === 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You haven't added any artworks to your tour yet"), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: u,
      id: "aic-ct-tour__cta-browse",
      type: "button",
      className: "f-buttons btn btn--secondary",
      onClick: o
    },
    "Browse for More Artworks"
  ))))));
}
function Se() {
  const {
    tourTitle: i,
    setTourTitle: t,
    creatorEmail: r,
    setCreatorEmail: c,
    validCreatorEmail: m,
    setValidCreatorEmail: s,
    creatorName: n,
    setCreatorName: l,
    recipientName: u,
    setRecipientName: o,
    marketingOptIn: h,
    setMarketingOptIn: d,
    tourDescription: p,
    setTourDescription: g,
    limits: b
  } = N(k), f = A({
    initialValue: i,
    maxLength: b.title,
    valueSetter: t
  }), E = A({
    initialValue: n,
    maxLength: b.creatorName,
    valueSetter: l
  }), S = A({
    initialValue: u,
    maxLength: b.recipientName,
    valueSetter: o
  }), v = A({
    initialValue: p,
    maxLength: b.description,
    valueSetter: g
  });
  return /* @__PURE__ */ e.createElement("fieldset", { className: "m-fieldset aic-ct-fieldset" }, /* @__PURE__ */ e.createElement("ol", { className: "m-fieldset__fieldset" }, /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__title", className: "label f-secondary" }, "Tour Title ", /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true" }, " *")), /* @__PURE__ */ e.createElement("span", { className: "input" }, /* @__PURE__ */ e.createElement("span", { className: "input__io-container" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      className: "f-secondary",
      type: "text",
      onChange: f.onChange,
      value: f.value,
      id: "aic-ct-metadata__title",
      maxLength: f.maxLength,
      "aria-required": "true",
      "aria-invalid": f.value ? "false" : "true",
      "aria-describedby": f.value ? null : "aic-ct-metadata__invalid-title",
      required: !0
    }
  ), f.counterEl), !f.value && /* @__PURE__ */ e.createElement(
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
  ), !m && /* @__PURE__ */ e.createElement(
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
      value: h,
      name: "aic-ct-metadata__opt-in",
      checked: h,
      onChange: (I) => {
        d(I.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "f-body" }, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__opt-in", className: "label" }, "Keep me in the loop. Please send me emails about exhibitions and events at the Art Institute of Chicago."))), /* @__PURE__ */ e.createElement(
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
    tourTitle: t,
    creatorName: r,
    creatorEmail: c,
    recipientName: m,
    marketingOptIn: s,
    validCreatorEmail: n,
    tourItems: l,
    tourDescription: u,
    validityIssues: o,
    setValidityIssues: h,
    limits: d,
    isSaving: p,
    setIsSaving: g,
    setActiveNavPage: b
  } = N(k), [f, E] = _(null), S = async () => {
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
            title: t,
            creatorName: r,
            recipientName: m,
            description: u,
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
      E({
        type: "success",
        message: I,
        id: T.id
      });
    } catch (v) {
      E({
        type: "error",
        message: v.message
      });
    }
    g(!1);
  };
  return y(() => {
    const v = [];
    t.length || v.push("A tour title"), t.length > d.title && v.push("Tour title must not exceed the character limit"), n || v.push("A valid email address"), u.length > d.description && v.push(
      "Tour description must not exceed the character limit"
    ), l.length < d.items.min && v.push("At least one artwork is required for your tour"), l.length > d.items.max && v.push("Tour must not contain more than 6 artworks"), l.some((I) => {
      var T;
      return ((T = I.objectNote) == null ? void 0 : T.length) > d.objectNote ? (v.push("Notes must not exceed the character limit"), !0) : !1;
    }), h(v);
  }, [
    t,
    u,
    l,
    h,
    d,
    n
  ]), y(() => {
    f != null && f.id && L.assign(
      `/my-museum-tour/${f.id}?tourCreationComplete=true`
    );
  }, [f]), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation" }, o.length ? /* @__PURE__ */ e.createElement(
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
          l.length ? b(1) : b(0);
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
    !p && !f && /* @__PURE__ */ e.createElement(
      "div",
      {
        id: "aic-ct-validation__save",
        className: "aic-ct-validation__save aic-ct-validation__content"
      },
      /* @__PURE__ */ e.createElement("h1", { className: "f-headline" }, "Are you ready to finish your tour?"),
      /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You won't be able to edit it once you save, and your tour will be immediately emailed to the provided address."),
      /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation__actions" }, /* @__PURE__ */ e.createElement(
        "button",
        {
          id: "aic-ct-save-button",
          className: "btn btn--my-museum-tour f-buttons",
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
            b(1);
          }
        },
        "No, go back and edit"
      ))
    ),
    f && (f.type === "success" && /* @__PURE__ */ e.createElement(
      "div",
      {
        id: "aic-ct-validation__success",
        className: "aic-ct-validation__content"
      },
      /* @__PURE__ */ e.createElement("h1", { className: "f-headline" }, "Saved successfully!", /* @__PURE__ */ e.createElement("br", null), " Redirecting to your tour")
    ) || f.type === "error" && /* @__PURE__ */ e.createElement(
      "div",
      {
        id: "aic-ct-save-error",
        className: "aic-ct-validation__content"
      },
      /* @__PURE__ */ e.createElement("h1", { className: "f-headline" }, "Looks like there was a problem"),
      /* @__PURE__ */ e.createElement("p", { className: "f-body" }, f.message),
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
    apiSaveEndpoint: t,
    tourTitle: r,
    tourDescription: c,
    tourItems: m,
    heroImageId: s
  } = i, n = "https://artic.edu/iiif/2", l = {
    apiSaveEndpoint: t,
    tourTitle: r,
    tourDescription: c,
    tourItems: m,
    heroImageId: s,
    iiifBaseUrl: n
  };
  return /* @__PURE__ */ e.createElement("div", { id: "my-museum-tour-builder", className: "my-museum-tour" }, /* @__PURE__ */ e.createElement(O, { ...l }, /* @__PURE__ */ e.createElement(ve, null), /* @__PURE__ */ e.createElement(B, null, /* @__PURE__ */ e.createElement(
    F,
    {
      id: 0,
      title: "Browse",
      tagline: "for artworks to add to your tour"
    },
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-intro aic-ct-intro--keyline aic-ct__core" }, /* @__PURE__ */ e.createElement("h1", { className: "f-display-2" }, "Create your own tour"), /* @__PURE__ */ e.createElement("p", { className: "f-deck" }, "Choose up to 6 artworks for your tour by searching for a particular work or artist, browsing themes, or selecting from the list of artworks below.")),
    /* @__PURE__ */ e.createElement(M, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement(Ee, null), /* @__PURE__ */ e.createElement(ye, null), /* @__PURE__ */ e.createElement(we, null)))
  ), /* @__PURE__ */ e.createElement(
    F,
    {
      id: 1,
      title: "Personalize",
      tagline: "your tour by adding a title and notes"
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
  apiSaveEndpoint: a.string,
  tourTitle: a.string,
  tourDescription: a.string,
  tourItems: a.array,
  searchPreviewId: a.number,
  heroImageId: a.string
};
export {
  Ce as default
};
