import e, { createContext as D, useState as _, useReducer as be, useRef as I, useMemo as $, useContext as N, useEffect as y, useCallback as q } from "react";
import t from "prop-types";
const fe = (i, a) => {
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
}, k = D();
function O(i) {
  const {
    children: a,
    tourTitle: r,
    creatorEmail: s,
    creatorName: m,
    recipientName: c,
    tourDescription: n,
    marketingOptIn: l,
    tourItems: u,
    navPages: o,
    apiSaveEndpoint: h,
    iiifBaseUrl: d
  } = i, [p, g] = _(r || ""), [b, f] = _(s || ""), [E, S] = _(!1), [v, T] = _(m || ""), [x, J] = _(c || ""), [W, G] = _(
    l || !1
  ), [K, X] = _(
    n || ""
  ), [Z, ee] = _(o || []), [te, ae] = _(0), [re, ie] = be(
    fe,
    u || []
  ), se = I(null), ne = I(null), [ce, le] = _([]), oe = h || "/api/v1/my-museum-tour", [me, ue] = _(!1), [de, he] = _(0), pe = $(
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
        apiSaveEndpoint: oe,
        iiifBaseUrl: d,
        limits: pe,
        tourTitle: p,
        setTourTitle: g,
        creatorEmail: b,
        setCreatorEmail: f,
        validCreatorEmail: E,
        setValidCreatorEmail: S,
        creatorName: v,
        setCreatorName: T,
        recipientName: x,
        setRecipientName: J,
        tourDescription: K,
        setTourDescription: X,
        marketingOptIn: W,
        setMarketingOptIn: G,
        tourItems: re,
        tourItemsDispatch: ie,
        navPages: Z,
        setNavPages: ee,
        activeNavPage: te,
        setActiveNavPage: ae,
        headerPrevButtonRef: se,
        headerNextButtonRef: ne,
        validityIssues: ce,
        setValidityIssues: le,
        isSaving: me,
        setIsSaving: ue,
        scrollY: de,
        setScrollY: he
      }
    },
    a
  );
}
O.propTypes = {
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
function _e(i) {
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
    var a = {}.hasOwnProperty;
    function r() {
      for (var s = [], m = 0; m < arguments.length; m++) {
        var c = arguments[m];
        if (c) {
          var n = typeof c;
          if (n === "string" || n === "number")
            s.push(c);
          else if (Array.isArray(c)) {
            if (c.length) {
              var l = r.apply(null, c);
              l && s.push(l);
            }
          } else if (n === "object") {
            if (c.toString !== Object.prototype.toString && !c.toString.toString().includes("[native code]")) {
              s.push(c.toString());
              continue;
            }
            for (var u in c)
              a.call(c, u) && c[u] && s.push(u);
          }
        }
      }
      return s.join(" ");
    }
    i.exports ? (r.default = r, i.exports = r) : window.classNames = r;
  })();
})(V);
var ve = V.exports;
const C = /* @__PURE__ */ _e(ve);
function w(i, a, r = "", s = "", m = "full", c = !0) {
  return `${i}/${a}/${m}/${c ? "!" : ""}${r},${s}/0/default.jpg`;
}
function R(i, a) {
  const r = new URL("https://api.artic.edu/api/v1/artworks/search");
  if (r.searchParams.set(
    "query[bool][should][0][bool][must][][exists][field]",
    "short_description"
  ), r.searchParams.set(
    "query[bool][should][0][bool][must][][term][is_on_view][value]",
    "true"
  ), r.searchParams.set(
    "query[bool][should][1][bool][must][][term][is_on_view]",
    "true"
  ), r.searchParams.set(
    "query[bool][should][1][bool][must][][exists][field]",
    "description"
  ), r.searchParams.set(
    "query[bool][should][1][bool][should][][exists][field]",
    "description"
  ), r.searchParams.set(
    "query[bool][should][1][bool][should][][exists][field]",
    "subject_id"
  ), r.searchParams.set(
    "query[bool][should][1][bool][should][][exists][field]",
    "style_id"
  ), r.searchParams.set(
    "query[bool][should][1][bool][should][][term][is_boosted]",
    "true"
  ), r.searchParams.set("query[bool][minimum_should_match]", "1"), r.searchParams.set(
    "fields",
    "artist_title,short_description,description,id,image_id,thumbnail,title,date_display,gallery_title,gallery_id"
  ), r.searchParams.set("limit", "60"), typeof i.keywords < "u" && r.searchParams.set("q", i.keywords), a)
    for (const s of Object.values(a))
      r.searchParams.set(
        `query[bool][must_not][][term][id][value]=${s}`,
        s
      );
  for (const [s, m] of Object.entries(i))
    s.includes("_ids") ? r.searchParams.set(`query[bool][must][][terms][${s}][]`, m) : s.includes("_titles") && r.searchParams.set(
      `query[bool][must][][terms][${s}.keyword][]`,
      m
    );
  return r;
}
const L = {
  assign: (i) => window.location.assign(i)
};
function ge() {
  const {
    tourItems: i,
    limits: a,
    iiifBaseUrl: r,
    setActiveNavPage: s,
    activeNavPage: m,
    headerPrevButtonRef: c
  } = N(k), n = () => {
    var l;
    (l = c == null ? void 0 : c.current) == null || l.focus(), s(1);
  };
  return /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-header__slots", className: "aic-ct-header__slots" }, Array.from({ length: a.items.max }).map((l, u) => /* @__PURE__ */ e.createElement(
    "li",
    {
      className: C("aic-ct-header__slot", {
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
function Ee() {
  const {
    limits: i,
    activeNavPage: a,
    setActiveNavPage: r,
    tourItems: s,
    headerPrevButtonRef: m,
    headerNextButtonRef: c
  } = N(k), n = s.length, l = C(
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
        ref: m,
        id: "aic-ct-header__back-button",
        className: l,
        type: "button",
        onClick: () => {
          a === 0 ? L.assign("/my-museum-tour") : r(a === 1 ? 0 : 1);
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
    ), " ", /* @__PURE__ */ e.createElement("span", null, "artworks of ", i.items.max, " ")), /* @__PURE__ */ e.createElement(ge, null)), /* @__PURE__ */ e.createElement(
      "button",
      {
        ref: c,
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
function ye() {
  const { navPages: i, activeNavPage: a, setActiveNavPage: r, isSaving: s } = N(k), m = (c) => C("aic-ct-nav__button btn f-buttons btn--transparent", {
    "aic-ct-nav__button--active": a === c,
    "aic-ct-nav__button--done": a > c
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
      i.map((c, n) => /* @__PURE__ */ e.createElement(
        "button",
        {
          key: c.id,
          id: `aic-ct-nav-button-${c.id}`,
          "aria-controls": `aic-ct-nav-page-${c.id}`,
          "aria-pressed": c.id === a,
          type: "button",
          onClick: () => r(n),
          disabled: s,
          className: m(c.id)
        },
        /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__button-wrapper" }, /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__number" }, c.id + 1), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__title" }, c.title), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__tagline" }, c.tagline))
      ))
    )
  );
}
function j({ children: i }) {
  var m, c, n;
  const { activeNavPage: a, navPages: r, setNavPages: s } = N(k);
  return y(() => {
    s(
      i ? i.map((l, u) => ({
        id: u,
        title: l.props.title,
        tagline: l.props.tagline
      })) : []
    );
  }, [i, s]), y(() => {
    var l;
    (l = document.querySelector("#my-museum-tour-builder")) == null || l.scrollIntoView();
  }, [a]), /* @__PURE__ */ e.createElement("div", { id: "aic-ct-nav-pages" }, /* @__PURE__ */ e.createElement("div", { className: "sr-only", "aria-live": "polite" }, "Step ", ((m = r[a]) == null ? void 0 : m.id) + 1, " ", (c = r[a]) == null ? void 0 : c.title, " ", (n = r[a]) == null ? void 0 : n.tagline), i);
}
j.propTypes = {
  children: t.node.isRequired
};
function F(i) {
  const { id: a, children: r } = i, { activeNavPage: s } = N(k);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      tabIndex: "0",
      id: `aic-ct-nav-page-${a}`,
      "aria-labelledby": `aic-ct-nav-button-${a}`,
      "aria-hidden": s !== a,
      style: s !== a ? { display: "none" } : {}
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
const P = D();
function B(i) {
  const {
    children: a,
    searchResultItems: r,
    searchQuery: s,
    searchFetching: m,
    searchError: c,
    searchPreviewId: n
  } = i, [l, u] = _(
    r || null
  ), [o, h] = _(s || ""), [d, p] = _(
    m || !1
  ), [g, b] = _(c || !1), [f, E] = _(null), [S, v] = _(
    n || null
  ), T = I();
  return /* @__PURE__ */ e.createElement(
    P.Provider,
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
        searchPreviewRef: T
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
  const [a, r] = _(null), [s, m] = _(!1), [c, n] = _(null), [l, u] = _(null), { dataSubSelector: o, dataSetter: h, fetchingSetter: d, errorSetter: p } = i || {}, g = () => {
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
    h && h(a);
  }, [a, h]), y(() => {
    p && p(c);
  }, [c, p]), y(() => {
    d && d(s);
  }, [s, d]), { data: a, fetching: s, error: c, fetchData: b, resetState: g };
};
function Y(i) {
  const {
    searchQuery: a,
    setSearchQuery: r,
    setSearchResultItems: s,
    setSearchFetching: m,
    setSearchError: c,
    setActiveTheme: n
  } = N(P), [l, u] = _(!0), { fetchData: o } = M({
    dataSubSelector: "data",
    dataSetter: s,
    fetchingSetter: m,
    errorSetter: c
  }), { hideFromTours: h } = i, d = (b) => {
    o(R({ keywords: a }, h)), n(null), b.preventDefault();
  }, p = I(null), g = C("m-search-bar aic-ct-search", {
    "s-autocomplete-active": a
  });
  return y(() => {
    l && (u(!1), o(R({ keywords: "" }, h)));
  }, [o, l, u]), /* @__PURE__ */ e.createElement(
    "form",
    {
      id: "aic-ct-search",
      role: "search",
      "aria-label": "Objects for your tour",
      onSubmit: d,
      className: g
    },
    /* @__PURE__ */ e.createElement("div", { className: "m-search-bar__inner" }, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-search__input", className: "sr-only" }, "Search the collection"), /* @__PURE__ */ e.createElement(
      "input",
      {
        id: "aic-ct-search__input",
        className: "f-secondary",
        type: "text",
        placeholder: "Search by keyword, artist, or title",
        value: a,
        autoComplete: "off",
        onChange: (b) => {
          r(b.target.value);
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
        ref: p
      },
      /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--search--24" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--search--24" }))
    ), /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "m-search-bar__clear",
        "aria-label": "Clear search",
        type: "reset",
        onClick: () => {
          r(""), s(null), n(null), o(R({ keywords: "" }, h)), p.current.focus();
        }
      },
      /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--close" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close" }))
    ))
  );
}
Y.propTypes = {
  hideFromTours: t.array
};
function H(i) {
  const { id: a, label: r, thumbnailId: s, searchParams: m, hideFromTours: c } = i, { iiifBaseUrl: n } = N(k), {
    setSearchResultItems: l,
    setSearchFetching: u,
    setSearchError: o,
    setSearchQuery: h,
    activeTheme: d,
    setActiveTheme: p
  } = N(P), { fetchData: g } = M({
    dataSubSelector: "data",
    dataSetter: l,
    fetchingSetter: u,
    errorSetter: o
  }), b = () => {
    d === r ? (p(null), g(R({ keywords: "" }, c))) : (g(R(m, c)), p(r), h(""));
  }, f = C(
    "aic-ct-theme-toggle tag tag--senary tag--w-image",
    {
      "f-tag": d !== r,
      "f-tag-2": d === r,
      "aic-ct-theme-toggle--active": d === r
    }
  );
  return /* @__PURE__ */ e.createElement(e.Fragment, null, (d === null || d === r) && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: f,
      id: `aic-ct-theme-toggle-${a}`,
      onClick: b,
      "aria-pressed": d === r ? "true" : "false"
    },
    /* @__PURE__ */ e.createElement("span", { className: "aic-ct-theme-toggle__wrapper" }, /* @__PURE__ */ e.createElement(
      "img",
      {
        src: w(n, s, "40", "40", "square"),
        alt: ""
      }
    ), r, d === r && /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--close" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close" })))
  )));
}
H.propTypes = {
  id: t.number.isRequired,
  label: t.string.isRequired,
  thumbnailId: t.string.isRequired,
  searchParams: t.object.isRequired,
  hideFromTours: t.array
};
function U(i) {
  const { hideFromTours: a } = i, r = [
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
  return /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-themes", className: "aic-ct-themes" }, r.map((s, m) => /* @__PURE__ */ e.createElement(
    H,
    {
      key: s.label,
      id: m,
      label: s.label,
      thumbnailId: s.thumbnailId,
      searchParams: s.searchParams,
      hideFromTours: a
    }
  )));
}
U.propTypes = {
  hideFromTours: t.array
};
function Q(i) {
  const { setSearchPreviewId: a, searchPreviewRef: r } = N(P), { iiifBaseUrl: s, setScrollY: m, tourItems: c } = N(k), { itemData: n } = i, l = c.some((p) => p.id === n.id), u = I(null), o = I(), h = () => {
    const p = document.documentElement.scrollTop;
    a(n.id), m(p), r.current.showModal(), setTimeout(() => {
      document.documentElement.classList.add(
        "s-body-locked",
        "s-body-locked--ct"
      ), document.body.scrollTop = p;
    }, 0);
  }, d = C(
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
          "data-iiif-id": `${s}/${n.image_id}`,
          "data-pin-media": w(
            s,
            n.image_id,
            "600",
            void 0,
            void 0,
            !1
          ),
          sizes: "(min-width: 1640px) 336px, (min-width: 1200px) 20.31vw, (min-width: 900px) 28.13vw, (min-width: 600px) 43.75vw,  43.75vw",
          "data-srcset": `${w(
            s,
            n.image_id,
            "200",
            void 0,
            void 0,
            !1
          )} 200w, ${w(
            s,
            n.image_id,
            "400",
            void 0,
            void 0,
            !1
          )} 400w, ${w(
            s,
            n.image_id,
            "843",
            void 0,
            void 0,
            !1
          )} 843w, ${w(
            s,
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
Q.propTypes = {
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
  const { searchPreviewId: i, searchResultItems: a, searchPreviewRef: r } = N(P), { iiifBaseUrl: s, tourItems: m, tourItemsDispatch: c, limits: n } = N(k), [l, u] = _(!1), [o, h] = _(null), d = C({
    "aic-ct-preview__content": !0,
    "aic-ct-preview--loading": !o
  });
  y(() => {
    h(
      a.find((b) => b.id === i)
    );
  }, [i, a]);
  const p = () => {
    var b;
    c({
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
      src: w(s, o.image_id, 680, 680),
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
    searchFetching: a,
    searchResultItems: r,
    searchPreviewRef: s,
    setSearchPreviewId: m,
    activeTheme: c,
    searchQuery: n
  } = N(P), { scrollY: l } = N(k), u = I(null), o = q(
    (d) => {
      var p;
      (d.type === "close" || (p = s == null ? void 0 : s.current) != null && p.open && d.target === (s == null ? void 0 : s.current)) && (s.current.close(), m(null), document.documentElement.scrollTop = l, document.documentElement.classList.remove(
        "s-body-locked",
        "s-body-locked--ct"
      ));
    },
    [m, l, s]
  ), h = q(() => {
    const d = new Event("page:updated", { bubbles: !0 });
    setTimeout(() => {
      document.dispatchEvent(d);
    }, 0);
  }, []);
  return y(() => {
    u.current && (r == null ? void 0 : r.length) > 0 && !a && !i && h();
  }, [
    u,
    r,
    a,
    i,
    h
  ]), y(() => {
    const d = s.current;
    return d && (d.addEventListener("close", o), d.addEventListener("click", o)), () => {
      d && (d.removeEventListener("close", o), d.removeEventListener("click", o));
    };
  }, [s, o]), !r && !a && !i ? null : /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-search-results" }, a && // Render only the loading message while fetching
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
    r.map((d) => /* @__PURE__ */ e.createElement(Q, { key: d.id, itemData: d }))
  ), /* @__PURE__ */ e.createElement(
    "dialog",
    {
      ref: s,
      id: "aic-ct-search-preview",
      onClose: o
    },
    /* @__PURE__ */ e.createElement(Ne, null)
  ))), /* @__PURE__ */ e.createElement("p", { className: "u-hide", id: "aic-ct-search__in-your-tour" }, "This object is in your tour", " "), /* @__PURE__ */ e.createElement("p", { className: "sr-only", "aria-live": "polite" }, a ? "Loading" : c ? `Showing results for ${c}` : n ? `Showing results for ${n}` : "Showing default results"));
}
function A(i = {}) {
  const { initialValue: a, maxLength: r, valueSetter: s } = i, [m, c] = _(a || ""), n = I(null), l = r - m.length;
  return {
    value: m,
    onChange: (o) => {
      const { value: h } = o.target;
      n.current.ariaBusy = !0, c(h), s && s(h), n.current.ariaBusy = !1;
    },
    countRef: n,
    charsRemaining: l,
    maxLength: r,
    counterEl: /* @__PURE__ */ e.createElement("output", { ref: n }, "(", l, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")
  };
}
function z(i) {
  var g;
  const { itemData: a, itemIndex: r, setShouldAssignFocus: s, setRemoveButtons: m } = i, { iiifBaseUrl: c, tourItems: n, tourItemsDispatch: l, limits: u } = N(k), o = I(null), h = A({
    initialValue: (g = n[r]) == null ? void 0 : g.objectNote,
    maxLength: u.objectNote
  }), d = $(
    () => ({
      id: a.id,
      objectNote: h.value
    }),
    [a.id, h.value]
  ), p = () => {
    l({
      type: "REMOVE_ITEM",
      payload: a.id
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
        f.id === a.id && s({
          flag: !0,
          id: n[E !== n.length - 1 ? E + 1 : E - 1].id
        });
      }) : s({
        flag: !0,
        id: null
      }));
    };
  }, [n, a.id, s]), y(() => (m((b) => [...b, { id: a.id, ref: o }]), () => {
    m(
      (b) => b.filter((f) => f.id !== a.id)
    );
  }), [m, n, a.id]), /* @__PURE__ */ e.createElement(
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
          c,
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
          p(a.id);
        }
      },
      /* @__PURE__ */ e.createElement("svg", { className: "icon--delete", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--delete" })),
      "Remove from tour"
    )
  );
}
z.propTypes = {
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
  const { tourItems: i, headerNextButtonRef: a, setActiveNavPage: r, limits: s } = N(k), [m, c] = _({
    flag: !1,
    id: null
  }), [n, l] = _([]), u = I(null), o = () => {
    r(0), a.current.focus();
  }, h = () => {
    r(2), a.current.focus();
  };
  return y(() => {
    m.flag && (!i.length && (u != null && u.current) ? u.current.focus() : n.find((d) => d.id === m.id).ref.current.focus(), c(!1));
  }, [i, m, n, u]), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour" }, i.length > 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement("header", { className: "aic-ct-section-header f-body" }, /* @__PURE__ */ e.createElement("h2", { id: "aic-ct-tour__heading", className: "f-module-title-2" }, "Artworks in your tour")), /* @__PURE__ */ e.createElement("div", { className: "f-body aic-ct-tour__intro" }, /* @__PURE__ */ e.createElement("p", null, "Your artworks are listed below in the order that you selected them. Your final tour will have them ordered based on their location in the galleries to give you the easiest tour path."), i.length === 6 && /* @__PURE__ */ e.createElement("p", null, /* @__PURE__ */ e.createElement("br", null), "You've added 6 artworks, the maximum number allowed. You may remove one if you would like to choose a different work."))), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-tour__results" }, i.map((d, p) => /* @__PURE__ */ e.createElement(
    z,
    {
      key: d.id,
      setRemoveButtons: l,
      itemData: d,
      itemIndex: p,
      shouldAssignFocus: m,
      setShouldAssignFocus: c
    }
  )))), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta aic-ct-full-bleed" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-wrapper aic-ct-full-bleed__core" }, i.length > 0 && i.length < 6 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You've added ", i.length, " of the maximum", " ", s.items.max, " artworks."), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
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
    setTourTitle: a,
    creatorEmail: r,
    setCreatorEmail: s,
    validCreatorEmail: m,
    setValidCreatorEmail: c,
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
    valueSetter: a
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
      onChange: (T) => {
        s(T.target.value), c(T.target.validity.valid);
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
      onChange: (T) => {
        d(T.target.checked);
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
function Te() {
  const {
    apiSaveEndpoint: i,
    tourTitle: a,
    creatorName: r,
    creatorEmail: s,
    recipientName: m,
    marketingOptIn: c,
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
          creatorEmail: s,
          marketingOptIn: c,
          tourJson: {
            title: a,
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
      const { message: T, my_museum_tour: x } = await v.json();
      E({
        type: "success",
        message: T,
        id: x.id
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
    a.length || v.push("A tour title"), a.length > d.title && v.push("Tour title must not exceed the character limit"), n || v.push("A valid email address"), u.length > d.description && v.push(
      "Tour description must not exceed the character limit"
    ), l.length < d.items.min && v.push("At least one artwork is required for your tour"), l.length > d.items.max && v.push("Tour must not contain more than 6 artworks"), l.some((T) => {
      var x;
      return ((x = T.objectNote) == null ? void 0 : x.length) > d.objectNote ? (v.push("Notes must not exceed the character limit"), !0) : !1;
    }), h(v);
  }, [
    a,
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
      /* @__PURE__ */ e.createElement("ul", null, o.map((v, T) => /* @__PURE__ */ e.createElement("li", { className: "f-body", key: T }, v)))
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
const Ie = (i) => {
  const {
    apiSaveEndpoint: a,
    hideFromTours: r,
    tourTitle: s,
    tourDescription: m,
    tourItems: c,
    heroImageId: n
  } = i, l = "https://artic.edu/iiif/2", u = {
    apiSaveEndpoint: a,
    tourTitle: s,
    tourDescription: m,
    tourItems: c,
    heroImageId: n,
    iiifBaseUrl: l
  }, o = {
    hideFromTours: r
  };
  return /* @__PURE__ */ e.createElement("div", { id: "my-museum-tour-builder", className: "my-museum-tour" }, /* @__PURE__ */ e.createElement(O, { ...u }, /* @__PURE__ */ e.createElement(Ee, null), /* @__PURE__ */ e.createElement(j, null, /* @__PURE__ */ e.createElement(
    F,
    {
      id: 0,
      title: "Browse",
      tagline: "for artworks to add to your tour"
    },
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-intro aic-ct-intro--keyline aic-ct__core" }, /* @__PURE__ */ e.createElement("h1", { className: "f-display-2" }, "Create your own tour"), /* @__PURE__ */ e.createElement("p", { className: "f-deck" }, "Choose up to 6 artworks for your tour by searching for a particular work or artist, browsing themes, or selecting from the list of artworks below.")),
    /* @__PURE__ */ e.createElement(B, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement(Y, { ...o }), /* @__PURE__ */ e.createElement(U, { ...o }), /* @__PURE__ */ e.createElement(we, null)))
  ), /* @__PURE__ */ e.createElement(
    F,
    {
      id: 1,
      title: "Personalize",
      tagline: "your tour by adding a title and notes"
    },
    n && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-hero aic-ct-full-bleed" }, /* @__PURE__ */ e.createElement(
      "img",
      {
        src: w(l, n, 20, 20, "full"),
        srcSet: `${w(
          l,
          n,
          480,
          480,
          "full"
        )} 320w, ${w(
          l,
          n,
          640,
          640,
          "full"
        )} 480w, ${w(
          l,
          n,
          960,
          960,
          "full"
        )} 640w, ${w(
          l,
          n,
          1280,
          1280,
          "full"
        )} 960w, ${w(
          l,
          n,
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
  ), /* @__PURE__ */ e.createElement(F, { id: 2, title: "Complete", tagline: "and share with friends" }, /* @__PURE__ */ e.createElement(Te, null))), /* @__PURE__ */ e.createElement(ye, null)));
};
Ie.propTypes = {
  apiSaveEndpoint: t.string,
  hideFromTours: t.array,
  tourTitle: t.string,
  tourDescription: t.string,
  tourItems: t.array,
  searchPreviewId: t.number,
  heroImageId: t.string
};
export {
  Ie as default
};
