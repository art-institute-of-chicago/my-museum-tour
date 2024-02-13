import e, { createContext as D, useState as b, useReducer as pe, useRef as C, useMemo as O, useContext as N, useEffect as g, useCallback as q } from "react";
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
function V(i) {
  const {
    children: a,
    tourTitle: r,
    creatorEmail: c,
    creatorName: d,
    recipientName: s,
    tourDescription: n,
    marketingOptIn: o,
    tourItems: m,
    navPages: l,
    apiSaveEndpoint: u,
    iiifBaseUrl: h,
    unloadHandler: p
  } = i, [y, f] = b(r || ""), [E, _] = b(c || ""), [S, I] = b(!1), [v, x] = b(d || ""), [R, z] = b(s || ""), [J, G] = b(
    o || !1
  ), [K, W] = b(
    n || ""
  ), [X, Z] = b(l || []), [ee, te] = b(0), [ae, re] = pe(
    fe,
    m || []
  ), ie = C(null), ne = C(null), [se, ce] = b([]), le = u || "/api/v1/custom-tours", [oe, me] = b(!1), [ue, de] = b(0), he = O(
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
    k.Provider,
    {
      value: {
        apiSaveEndpoint: le,
        iiifBaseUrl: h,
        limits: he,
        tourTitle: y,
        setTourTitle: f,
        creatorEmail: E,
        setCreatorEmail: _,
        validCreatorEmail: S,
        setValidCreatorEmail: I,
        creatorName: v,
        setCreatorName: x,
        recipientName: R,
        setRecipientName: z,
        tourDescription: K,
        setTourDescription: W,
        marketingOptIn: J,
        setMarketingOptIn: G,
        tourItems: ae,
        tourItemsDispatch: re,
        navPages: X,
        setNavPages: Z,
        activeNavPage: ee,
        setActiveNavPage: te,
        headerPrevButtonRef: ie,
        headerNextButtonRef: ne,
        validityIssues: se,
        setValidityIssues: ce,
        isSaving: oe,
        setIsSaving: me,
        scrollY: ue,
        setScrollY: de,
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
function be(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var $ = { exports: {} };
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
              var o = r.apply(null, s);
              o && c.push(o);
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
})($);
var _e = $.exports;
const P = /* @__PURE__ */ be(_e);
function w(i, a, r = "", c = "", d = "full", s = !0) {
  return `${i}/${a}/${d}/${s ? "!" : ""}${r},${c}/0/default.jpg`;
}
function F(i) {
  const a = new URL("https://api.artic.edu/api/v1/artworks/search");
  a.searchParams.set("query[bool][must][][term][is_on_view]", "true"), a.searchParams.set("query[bool][must][][exists][field]", "description"), a.searchParams.set("query[bool][should][][exists][field]", "description"), a.searchParams.set("query[bool][should][][exists][field]", "subject_id"), a.searchParams.set("query[bool][should][][exists][field]", "style_id"), a.searchParams.set("query[bool][should][][term][is_boosted]", "true"), a.searchParams.set("query[bool][minimum_should_match]", "1"), a.searchParams.set(
    "fields",
    "artist_title,short_description,description,id,image_id,thumbnail,title,date_display,gallery_title,gallery_id"
  ), a.searchParams.set("limit", "60"), typeof i.keywords < "u" && a.searchParams.set("q", i.keywords);
  for (const [r, c] of Object.entries(i))
    r.includes("_ids") && a.searchParams.set(`query[bool][must][][terms][${r}][]`, c);
  return a;
}
const B = {
  assign: (i) => window.location.assign(i)
};
function ve() {
  const {
    tourItems: i,
    limits: a,
    iiifBaseUrl: r,
    setActiveNavPage: c,
    activeNavPage: d,
    headerPrevButtonRef: s
  } = N(k), n = () => {
    var o;
    (o = s == null ? void 0 : s.current) == null || o.focus(), c(1);
  };
  return /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-header__slots", className: "aic-ct-header__slots" }, Array.from({ length: a.items.max }).map((o, m) => /* @__PURE__ */ e.createElement(
    "li",
    {
      className: P("aic-ct-header__slot", {
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
function Ee() {
  const {
    limits: i,
    activeNavPage: a,
    setActiveNavPage: r,
    tourItems: c,
    headerPrevButtonRef: d,
    headerNextButtonRef: s
  } = N(k), n = c.length, o = P(
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
        className: o,
        type: "button",
        onClick: () => {
          a === 0 ? B.assign("/custom-tours") : r(a === 1 ? 0 : 1);
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
    ), " ", /* @__PURE__ */ e.createElement("span", null, "artworks of ", i.items.max, " ")), /* @__PURE__ */ e.createElement(ve, null)), /* @__PURE__ */ e.createElement(
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
  const { navPages: i, activeNavPage: a, setActiveNavPage: r, isSaving: c } = N(k), d = (s) => P("aic-ct-nav__button btn f-buttons btn--transparent", {
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
function j({ children: i }) {
  var d, s, n;
  const { activeNavPage: a, navPages: r, setNavPages: c } = N(k);
  return g(() => {
    c(
      i ? i.map((o, m) => ({
        id: m,
        title: o.props.title,
        tagline: o.props.tagline
      })) : []
    );
  }, [i, c]), g(() => {
    var o;
    (o = document.querySelector("#custom-tours-builder")) == null || o.scrollIntoView();
  }, [a]), /* @__PURE__ */ e.createElement("div", { id: "aic-ct-nav-pages" }, /* @__PURE__ */ e.createElement("div", { className: "sr-only", "aria-live": "polite" }, "Step ", ((d = r[a]) == null ? void 0 : d.id) + 1, " ", (s = r[a]) == null ? void 0 : s.title, " ", (n = r[a]) == null ? void 0 : n.tagline), i);
}
j.propTypes = {
  children: t.node.isRequired
};
function L(i) {
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
L.propTypes = {
  id: t.number.isRequired,
  title: t.string.isRequired,
  tagline: t.string.isRequired,
  children: t.oneOfType([
    t.arrayOf(t.element),
    t.object
  ]).isRequired
};
const T = D();
function M(i) {
  const {
    children: a,
    searchResultItems: r,
    searchQuery: c,
    searchFetching: d,
    searchError: s,
    searchPreviewId: n
  } = i, [o, m] = b(
    r || null
  ), [l, u] = b(c || ""), [h, p] = b(
    d || !1
  ), [y, f] = b(s || !1), [E, _] = b(null), [S, I] = b(
    n || null
  ), v = C();
  return /* @__PURE__ */ e.createElement(
    T.Provider,
    {
      value: {
        searchResultItems: o,
        setSearchResultItems: m,
        searchQuery: l,
        setSearchQuery: u,
        searchFetching: h,
        setSearchFetching: p,
        searchError: y,
        setSearchError: f,
        activeTheme: E,
        setActiveTheme: _,
        searchPreviewId: S,
        setSearchPreviewId: I,
        searchPreviewRef: v
      }
    },
    a
  );
}
M.propTypes = {
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
const H = (i) => {
  const [a, r] = b(null), [c, d] = b(!1), [s, n] = b(null), [o, m] = b(null), { dataSubSelector: l, dataSetter: u, fetchingSetter: h, errorSetter: p } = i || {}, y = () => {
    r(null), d(!1), n(null), m(null);
  }, f = async (E) => {
    d(!0);
    const _ = new AbortController();
    m(_);
    try {
      const I = await (await fetch(E, { signal: _.signal })).json();
      r(l ? I[l] : I), n(null), d(!1);
    } catch (S) {
      if (S.name === "AbortError") {
        y();
        return;
      }
      n("Error fetching results"), d(!1);
    }
  };
  return g(() => {
    const E = o;
    return () => {
      E && E.abort();
    };
  }, [o]), g(() => {
    u && u(a);
  }, [a, u]), g(() => {
    p && p(s);
  }, [s, p]), g(() => {
    h && h(c);
  }, [c, h]), { data: a, fetching: c, error: s, fetchData: f, resetState: y };
};
function ye() {
  const {
    searchQuery: i,
    setSearchQuery: a,
    setSearchResultItems: r,
    setSearchFetching: c,
    setSearchError: d,
    setActiveTheme: s
  } = N(T), [n, o] = b(!0), { fetchData: m } = H({
    dataSubSelector: "data",
    dataSetter: r,
    fetchingSetter: c,
    errorSetter: d
  }), l = (p) => {
    m(F({ keywords: i })), s(null), p.preventDefault();
  }, u = C(null), h = P("m-search-bar aic-ct-search", {
    "s-autocomplete-active": i
  });
  return g(() => {
    n && (o(!1), m(F({ keywords: "" })));
  }, [m, n, o]), /* @__PURE__ */ e.createElement(
    "form",
    {
      id: "aic-ct-search",
      role: "search",
      "aria-label": "Objects for your tour",
      onSubmit: l,
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
          a(""), r(null), s(null), m(F({ keywords: "" })), u.current.focus();
        }
      },
      /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--close" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close" }))
    ))
  );
}
function Y(i) {
  const { id: a, label: r, thumbnailId: c, searchParams: d } = i, { iiifBaseUrl: s } = N(k), {
    setSearchResultItems: n,
    setSearchFetching: o,
    setSearchError: m,
    setSearchQuery: l,
    activeTheme: u,
    setActiveTheme: h
  } = N(T), { fetchData: p } = H({
    dataSubSelector: "data",
    dataSetter: n,
    fetchingSetter: o,
    errorSetter: m
  }), y = () => {
    u === r ? (h(null), p(F({ keywords: "" }))) : (p(F(d)), h(r), l(""));
  }, f = P(
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
      onClick: y,
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
function Ne() {
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
  const { setSearchPreviewId: a, searchPreviewRef: r } = N(T), { iiifBaseUrl: c, setScrollY: d, tourItems: s } = N(k), { itemData: n } = i, o = s.some((p) => p.id === n.id), m = C(null), l = C(), u = () => {
    const p = document.documentElement.scrollTop;
    a(n.id), d(p), r.current.showModal(), setTimeout(() => {
      document.documentElement.classList.add(
        "s-body-locked",
        "s-body-locked--ct"
      ), document.body.scrollTop = p;
    }, 0);
  }, h = P(
    "aic-ct-result o-pinboard__item m-listing m-listing--variable-height",
    {
      "aic-ct-result--selected": o
    }
  );
  return g(() => {
    var p;
    (p = l == null ? void 0 : l.current) != null && p.includes("s-positioned") && m.current.classList.add("s-positioned"), l.current = m.current.className;
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
        "aria-describedby": o ? "aic-ct-search__in-your-tour" : void 0
      },
      /* @__PURE__ */ e.createElement("span", { className: "m-listing__link" }, /* @__PURE__ */ e.createElement("span", { className: "m-listing__img m-listing__img--no-bg" }, o && /* @__PURE__ */ e.createElement("span", { className: "aic-ct-selected-marker" }, /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--check" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--check" }))), /* @__PURE__ */ e.createElement(
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
function we() {
  const { searchPreviewId: i, searchResultItems: a, searchPreviewRef: r } = N(T), { iiifBaseUrl: c, tourItems: d, tourItemsDispatch: s, limits: n } = N(k), [o, m] = b(!1), [l, u] = b(null), h = P({
    "aic-ct-preview__content": !0,
    "aic-ct-preview--loading": !l
  });
  g(() => {
    u(
      a.find((f) => f.id === i)
    );
  }, [i, a]);
  const p = () => {
    var f;
    s({
      type: o ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: o ? l.id : l
    }), (f = r == null ? void 0 : r.current) == null || f.close();
  }, y = () => {
    var f;
    (f = r == null ? void 0 : r.current) == null || f.close();
  };
  return g(() => {
    l && m(d.find((f) => f.id === l.id));
  }, [d, l]), /* @__PURE__ */ e.createElement("div", { className: h, id: "aic-ct-preview__content" }, l ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__header aic-ct-preview__core" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-preview__close",
      className: "btn btn--icon btn--transparent aic-ct-preview__close",
      type: "button",
      "aria-label": "Close",
      onClick: y
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" }))
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__image" }, /* @__PURE__ */ e.createElement(
    "img",
    {
      src: w(c, l.image_id, 680, 680),
      width: l.thumbnail.width,
      height: l.thumbnail.height,
      alt: l.thumbnail.alt_text || ""
    }
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__core" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__details" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__title f-headline-editorial" }, l.title, l.date_display && /* @__PURE__ */ e.createElement(e.Fragment, null, ",", " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-preview__date f-list-4" }, l.date_display))), l.artist_title && /* @__PURE__ */ e.createElement("p", { className: "aic-ct-preview__artist f-subheading-1" }, l.artist_title)), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__links" }, d.length < 6 || o ? /* @__PURE__ */ e.createElement(
    "button",
    {
      id: `aic-ct-preview__action-button-${l.id}`,
      className: "btn f-buttons aic-ct-preview__action-button",
      type: "button",
      onClick: p,
      "aria-pressed": o ? "true" : "false",
      "aria-label": "Toggle from your tour"
    },
    o ? "Remove from your tour" : "Add to your tour"
  ) : /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You have already added ", n.items.max, " artworks, the maximum number allowed. Please remove one if you would like to include this artwork.")), (l.short_description || l.description) && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__description" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__description-title f-module-title-2" }, "Artwork description"), /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "f-body",
      dangerouslySetInnerHTML: {
        __html: l.short_description ? l.short_description : l.description
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
      onClick: y
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" })),
    "Close and go back to results"
  ))) : /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__core aic-ct-loader f-body" }, /* @__PURE__ */ e.createElement("p", null, "Loading..."), /* @__PURE__ */ e.createElement("div", { className: "loader" })));
}
function ke() {
  const {
    searchError: i,
    searchFetching: a,
    searchResultItems: r,
    searchPreviewRef: c,
    setSearchPreviewId: d,
    activeTheme: s,
    searchQuery: n
  } = N(T), { scrollY: o } = N(k), m = q(
    (u) => {
      var h;
      (u.type === "close" || (h = c == null ? void 0 : c.current) != null && h.open && u.target === (c == null ? void 0 : c.current)) && (c.current.close(), d(null), document.documentElement.scrollTop = o, document.documentElement.classList.remove(
        "s-body-locked",
        "s-body-locked--ct"
      ));
    },
    [d, o, c]
  ), l = q(() => {
    const u = new Event("page:updated", { bubbles: !0 });
    setTimeout(() => {
      document.dispatchEvent(u);
    }, 0);
  }, []);
  return g(() => {
    const u = c.current;
    return u && (u.addEventListener("close", m), u.addEventListener("click", m)), () => {
      u && (u.removeEventListener("close", m), u.removeEventListener("click", m));
    };
  }, [c, m]), g(() => {
    l();
  }, [r, l]), g(() => (window.addEventListener("load", l), () => {
    window.removeEventListener("load", l);
  }), [l]), !r && !a && !i ? null : /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-search-results" }, a && // Render only the loading message while fetching
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
    /* @__PURE__ */ e.createElement(we, null)
  ))), /* @__PURE__ */ e.createElement("p", { className: "u-hide", id: "aic-ct-search__in-your-tour" }, "This object is in your tour", " "), /* @__PURE__ */ e.createElement("p", { className: "sr-only", "aria-live": "polite" }, a ? "Loading" : s ? `Showing results for ${s}` : n ? `Showing results for ${n}` : "Showing default results"));
}
function A(i = {}) {
  const { initialValue: a, maxLength: r, valueSetter: c } = i, [d, s] = b(a || ""), n = C(null), o = r - d.length;
  return {
    value: d,
    onChange: (l) => {
      const { value: u } = l.target;
      n.current.ariaBusy = !0, s(u), c && c(u), n.current.ariaBusy = !1;
    },
    countRef: n,
    charsRemaining: o,
    maxLength: r,
    counterEl: /* @__PURE__ */ e.createElement("output", { ref: n }, "(", o, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")
  };
}
function Q(i) {
  var y;
  const { itemData: a, itemIndex: r, setShouldAssignFocus: c, setRemoveButtons: d } = i, { iiifBaseUrl: s, tourItems: n, tourItemsDispatch: o, limits: m } = N(k), l = C(null), u = A({
    initialValue: (y = n[r]) == null ? void 0 : y.objectNote,
    maxLength: m.objectNote
  }), h = O(
    () => ({
      id: a.id,
      objectNote: u.value
    }),
    [a.id, u.value]
  ), p = () => {
    o({
      type: "REMOVE_ITEM",
      payload: a.id
    });
  };
  return g(() => {
    o({
      type: "UPDATE_NOTE",
      payload: h
    });
  }, [h, o]), g(() => {
    const f = l.current;
    return () => {
      document.activeElement === f && (n.length > 1 ? n.find((E, _) => {
        E.id === a.id && c({
          flag: !0,
          id: n[_ !== n.length - 1 ? _ + 1 : _ - 1].id
        });
      }) : c({
        flag: !0,
        id: null
      }));
    };
  }, [n, a.id, c]), g(() => (d((f) => [...f, { id: a.id, ref: l }]), () => {
    d(
      (f) => f.filter((E) => E.id !== a.id)
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
        placeholder: "e.g. I love the colors in this one.",
        value: u.value,
        maxLength: u.maxLength
      }
    ), u.counterEl))),
    /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "btn btn--transparent f-secondary aic-ct-tour-item__remove",
        ref: l,
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
Q.propTypes = {
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
function Se() {
  const { tourItems: i, headerNextButtonRef: a, setActiveNavPage: r, limits: c } = N(k), [d, s] = b({
    flag: !1,
    id: null
  }), [n, o] = b([]), m = C(null), l = () => {
    r(0), a.current.focus();
  }, u = () => {
    r(2), a.current.focus();
  };
  return g(() => {
    d.flag && (!i.length && (m != null && m.current) ? m.current.focus() : n.find((h) => h.id === d.id).ref.current.focus(), s(!1));
  }, [i, d, n, m]), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour" }, i.length > 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement("header", { className: "aic-ct-section-header f-body" }, /* @__PURE__ */ e.createElement("h2", { id: "aic-ct-tour__heading", className: "f-module-title-2" }, "Artworks in your tour")), /* @__PURE__ */ e.createElement("div", { className: "f-body aic-ct-tour__intro" }, /* @__PURE__ */ e.createElement("p", null, "To optimize your visit, we automatically arrange the order of your tour based on the location of the artwork in the museum."), i.length === 6 && /* @__PURE__ */ e.createElement("p", null, "You've added 6 artworks, the maximum number allowed. Please remove one if you would like to include more artwork."))), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-tour__results" }, i.map((h, p) => /* @__PURE__ */ e.createElement(
    Q,
    {
      key: h.id,
      setRemoveButtons: o,
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
      onClick: l
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
      onClick: l
    },
    "Browse for more artworks"
  ))))));
}
function Ie() {
  const {
    tourTitle: i,
    setTourTitle: a,
    creatorEmail: r,
    setCreatorEmail: c,
    validCreatorEmail: d,
    setValidCreatorEmail: s,
    creatorName: n,
    setCreatorName: o,
    recipientName: m,
    setRecipientName: l,
    marketingOptIn: u,
    setMarketingOptIn: h,
    tourDescription: p,
    setTourDescription: y,
    limits: f
  } = N(k), E = A({
    initialValue: i,
    maxLength: f.title,
    valueSetter: a
  }), _ = A({
    initialValue: n,
    maxLength: f.creatorName,
    valueSetter: o
  }), S = A({
    initialValue: m,
    maxLength: f.recipientName,
    valueSetter: l
  }), I = A({
    initialValue: p,
    maxLength: f.description,
    valueSetter: y
  });
  return /* @__PURE__ */ e.createElement("fieldset", { className: "m-fieldset aic-ct-fieldset" }, /* @__PURE__ */ e.createElement("ol", { className: "m-fieldset__fieldset" }, /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__title", className: "label f-secondary" }, "Tour Title ", /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true" }, " *")), /* @__PURE__ */ e.createElement("span", { className: "input" }, /* @__PURE__ */ e.createElement("span", { className: "input__io-container" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      className: "f-secondary",
      type: "text",
      onChange: E.onChange,
      value: E.value,
      id: "aic-ct-metadata__title",
      maxLength: E.maxLength,
      "aria-required": "true",
      "aria-invalid": E.value ? "false" : "true",
      "aria-describedby": E.value ? null : "aic-ct-metadata__invalid-title",
      required: !0
    }
  ), E.counterEl), !E.value && /* @__PURE__ */ e.createElement(
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
      value: _.value,
      onChange: _.onChange,
      id: "aic-ct-metadata__creator-name",
      maxLength: _.maxLength
    }
  ), _.counterEl))), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement(
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
      onChange: (v) => {
        c(v.target.value), s(v.target.validity.valid);
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
      onChange: I.onChange,
      rows: "5",
      value: I.value,
      maxLength: I.maxLength
    }
  ), I.counterEl))), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement("span", { className: "checkbox f-secondary" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      id: "aic-ct-metadata__opt-in",
      value: u,
      name: "aic-ct-metadata__opt-in",
      checked: u,
      onChange: (v) => {
        h(v.target.checked);
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
function Ce() {
  const {
    apiSaveEndpoint: i,
    tourTitle: a,
    creatorName: r,
    creatorEmail: c,
    recipientName: d,
    marketingOptIn: s,
    validCreatorEmail: n,
    tourItems: o,
    tourDescription: m,
    validityIssues: l,
    setValidityIssues: u,
    limits: h,
    isSaving: p,
    setIsSaving: y,
    setActiveNavPage: f,
    unloadHandler: E
  } = N(k), [_, S] = b(null), I = async () => {
    y(!0);
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
            artworks: o
          }
        })
      });
      if (!v.ok)
        throw new Error(
          "There was a problem saving your tour, please try again. If the problem persists, please contact us and let us know."
        );
      const { message: x, custom_tour: R } = await v.json();
      S({
        type: "success",
        message: x,
        id: R.id
      });
    } catch (v) {
      S({
        type: "error",
        message: v.message
      });
    }
    y(!1);
  };
  return g(() => {
    const v = [];
    a.length || v.push("A tour title"), a.length > h.title && v.push("Tour title must not exceed the character limit"), n || v.push("A valid email address"), m.length > h.description && v.push(
      "Tour description must not exceed the character limit"
    ), o.length < h.items.min && v.push("At least one artwork is required for your tour"), o.length > h.items.max && v.push("Tours must not contain more than 6 artworks"), o.some((x) => {
      var R;
      return ((R = x.objectNote) == null ? void 0 : R.length) > h.objectNote ? (v.push("Notes must not exceed the character limit"), !0) : !1;
    }), u(v);
  }, [
    a,
    m,
    o,
    u,
    h,
    n
  ]), g(() => {
    _ != null && _.id && (window.removeEventListener("beforeunload", E), B.assign(
      `/my-museum-tours/${_.id}?tourCreationComplete=true`
    ));
  }, [_, E]), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation" }, l.length ? /* @__PURE__ */ e.createElement(
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
      /* @__PURE__ */ e.createElement("ul", null, l.map((v, x) => /* @__PURE__ */ e.createElement("li", { className: "f-body", key: x }, v)))
    ),
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation__actions" }, /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "btn btn--secondary f-buttons",
        type: "button",
        onClick: () => {
          o.length ? f(1) : f(0);
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
    !p && !_ && /* @__PURE__ */ e.createElement(
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
          onClick: I,
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
          onClick: I,
          disabled: p
        },
        "Try again"
      ))
    ))
  ));
}
const xe = (i) => {
  const {
    apiSaveEndpoint: a,
    tourTitle: r,
    tourDescription: c,
    tourItems: d,
    heroImageId: s
  } = i, n = "https://artic.edu/iiif/2", o = (l) => {
    l.preventDefault(), l.returnValue = "";
  }, m = {
    apiSaveEndpoint: a,
    tourTitle: r,
    tourDescription: c,
    tourItems: d,
    heroImageId: s,
    iiifBaseUrl: n,
    unloadHandler: o
  };
  return g(() => {
    window.addEventListener("beforeunload", o), document.body.style.overflow = "unset";
  }, []), /* @__PURE__ */ e.createElement("div", { id: "custom-tours-builder", className: "custom-tours" }, /* @__PURE__ */ e.createElement(V, { ...m }, /* @__PURE__ */ e.createElement(Ee, null), /* @__PURE__ */ e.createElement(j, null, /* @__PURE__ */ e.createElement(
    L,
    {
      id: 0,
      title: "Browse",
      tagline: "for artworks to add to your tour"
    },
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-intro aic-ct-intro--keyline aic-ct__core" }, /* @__PURE__ */ e.createElement("h1", { className: "f-display-2" }, "Create your own tour"), /* @__PURE__ */ e.createElement("p", { className: "f-deck" }, "Choose up to 6 artworks for your tour by searching for a particular work or artist, browsing themes or selecting from the list of artworks below.")),
    /* @__PURE__ */ e.createElement(M, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement(ye, null), /* @__PURE__ */ e.createElement(Ne, null), /* @__PURE__ */ e.createElement(ke, null)))
  ), /* @__PURE__ */ e.createElement(
    L,
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
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement(Ie, null)),
    /* @__PURE__ */ e.createElement(Se, null)
  ), /* @__PURE__ */ e.createElement(L, { id: 2, title: "Complete", tagline: "and share with friends" }, /* @__PURE__ */ e.createElement(Ce, null))), /* @__PURE__ */ e.createElement(ge, null)));
};
xe.propTypes = {
  apiSaveEndpoint: t.string,
  tourTitle: t.string,
  tourDescription: t.string,
  tourItems: t.array,
  searchPreviewId: t.number,
  heroImageId: t.string
};
export {
  xe as default
};
