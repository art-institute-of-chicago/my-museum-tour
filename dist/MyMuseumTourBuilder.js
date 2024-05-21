import e, { createContext as H, useState as E, useReducer as ve, useRef as C, useMemo as j, useContext as S, useEffect as w, useCallback as B } from "react";
import t from "prop-types";
var F = function(s, a, r) {
  var n = document.createEvent("HTMLEvents");
  n.initEvent(a, !0, !0), n.data = r || {}, n.eventName = a, s.dispatchEvent(n);
}, _e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ge(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var Ee = { exports: {} };
(function(s, a) {
  (function(r, n) {
    s.exports = n();
  })(_e, function() {
    var r = "AxmTYklsjo190QW", n = "sans-serif", d = "serif", l = {
      tolerance: 2,
      // px
      delay: 100,
      glyphs: "",
      success: function() {
      },
      error: function() {
      },
      timeout: 5e3,
      weight: "400",
      // normal
      style: "normal",
      window
    }, c = [
      "display:block",
      "position:absolute",
      "top:-999px",
      "left:-999px",
      "font-size:48px",
      "width:auto",
      "height:auto",
      "line-height:normal",
      "margin:0",
      "padding:0",
      "font-variant:normal",
      "white-space:nowrap"
    ], u = '<div style="%s" aria-hidden="true">' + r + "</div>", m = function() {
      this.fontFamily = "", this.appended = !1, this.serif = void 0, this.sansSerif = void 0, this.parent = void 0, this.options = {};
    };
    m.prototype.getMeasurements = function() {
      return {
        sansSerif: {
          width: this.sansSerif.offsetWidth,
          height: this.sansSerif.offsetHeight
        },
        serif: {
          width: this.serif.offsetWidth,
          height: this.serif.offsetHeight
        }
      };
    }, m.prototype.load = function() {
      var p = /* @__PURE__ */ new Date(), i = this, h = i.serif, g = i.sansSerif, f = i.parent, b = i.appended, y, v = i.options, _ = v.reference;
      function k(x) {
        return c.concat(["font-weight:" + v.weight, "font-style:" + v.style]).concat("font-family:" + x).join(";");
      }
      var A = u.replace(/\%s/, k(n)), I = u.replace(/\%s/, k(d));
      f || (f = i.parent = v.window.document.createElement("div")), f.innerHTML = A + I, g = i.sansSerif = f.firstChild, h = i.serif = g.nextSibling, v.glyphs && (g.innerHTML += v.glyphs, h.innerHTML += v.glyphs);
      function R(x, N, $) {
        return Math.abs(x.width - N.offsetWidth) > $ || Math.abs(x.height - N.offsetHeight) > $;
      }
      function D() {
        return (/* @__PURE__ */ new Date()).getTime() - p.getTime() > v.timeout;
      }
      (function x() {
        _ || (_ = v.window.document.body), !b && _ && (_.appendChild(f), b = i.appended = !0, y = i.getMeasurements(), g.style.fontFamily = i.fontFamily + ", " + n, h.style.fontFamily = i.fontFamily + ", " + d), b && y && (R(y.sansSerif, g, v.tolerance) || R(y.serif, h, v.tolerance)) ? v.success() : D() ? v.error() : !b && "requestAnimationFrame" in v.window ? v.window.requestAnimationFrame(x) : v.window.setTimeout(x, v.delay);
      })();
    }, m.prototype.cleanFamilyName = function(p) {
      return p.replace(/[\'\"]/g, "").toLowerCase();
    }, m.prototype.cleanWeight = function(p) {
      var i = {
        normal: "400",
        bold: "700"
      };
      return "" + (i[p] || p);
    }, m.prototype.checkFontFaces = function(p) {
      var i = this;
      i.options.window.document.fonts.forEach(function(h) {
        i.cleanFamilyName(h.family) === i.cleanFamilyName(i.fontFamily) && i.cleanWeight(h.weight) === i.cleanWeight(i.options.weight) && h.style === i.options.style && h.load().then(function() {
          i.options.success(h), i.options.window.clearTimeout(p);
        });
      });
    }, m.prototype.init = function(p, i) {
      var h;
      for (var g in l)
        i.hasOwnProperty(g) || (i[g] = l[g]);
      this.options = i, this.fontFamily = p, !i.glyphs && "fonts" in i.window.document ? (i.timeout && (h = i.window.setTimeout(function() {
        i.error();
      }, i.timeout)), this.checkFontFaces(h)) : this.load();
    };
    var o = function(p, i) {
      var h = new m();
      return h.init(p, i), h;
    };
    return o;
  });
})(Ee);
const ye = (s, a) => {
  switch (a.type) {
    case "ADD_ITEM":
      return F(document, "gtm:push", {
        event: "mmt_add_artwork",
        artworkTitle: a.payload.title
      }), a.payload.short_description && (a.payload.description = a.payload.short_description), delete a.payload.short_description, [...s, { ...a.payload, objectNote: "" }];
    case "UPDATE_NOTE":
      return s.map((r) => r.id === a.payload.id ? { ...r, objectNote: a.payload.objectNote } : r);
    case "REMOVE_ITEM":
      return F(document, "gtm:push", {
        event: "mmt_remove_artwork",
        artworkTitle: a.payload.title
      }), s.filter(({ id: r }) => r !== a.payload.id);
    default:
      return s;
  }
}, P = H();
function Y(s) {
  const {
    children: a,
    tourTitle: r,
    creatorEmail: n,
    creatorName: d,
    recipientName: l,
    tourDescription: c,
    marketingOptIn: u,
    tourItems: m,
    navPages: o,
    apiSaveEndpoint: p,
    iiifBaseUrl: i
  } = s, [h, g] = E(r || ""), [f, b] = E(n || ""), [y, v] = E(!1), [_, k] = E(d || ""), [A, I] = E(l || ""), [R, D] = E(
    u || !1
  ), [x, N] = E(
    c || ""
  ), [$, te] = E(o || []), [ae, re] = E(0), [ie, ne] = ve(
    ye,
    m || []
  ), se = C(null), ce = C(null), [le, oe] = E([]), me = p || "/api/v1/my-museum-tour", [ue, de] = E(!1), [he, pe] = E(0), fe = j(
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
  ), be = j(
    () => [
      "mmt_builder_pageview",
      "mmt_personalize_pageview",
      "mmt_ready_to_save_pageview"
    ],
    []
  );
  return /* @__PURE__ */ e.createElement(
    P.Provider,
    {
      value: {
        apiSaveEndpoint: me,
        iiifBaseUrl: i,
        limits: fe,
        tourTitle: h,
        setTourTitle: g,
        creatorEmail: f,
        setCreatorEmail: b,
        validCreatorEmail: y,
        setValidCreatorEmail: v,
        creatorName: _,
        setCreatorName: k,
        recipientName: A,
        setRecipientName: I,
        tourDescription: x,
        setTourDescription: N,
        marketingOptIn: R,
        setMarketingOptIn: D,
        tourItems: ie,
        tourItemsDispatch: ne,
        navPages: $,
        setNavPages: te,
        activeNavPage: ae,
        setActiveNavPage: re,
        navPageEvents: be,
        headerPrevButtonRef: se,
        headerNextButtonRef: ce,
        validityIssues: le,
        setValidityIssues: oe,
        isSaving: ue,
        setIsSaving: de,
        scrollY: he,
        setScrollY: pe
      }
    },
    a
  );
}
Y.propTypes = {
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
P.Provider.propTypes = {
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
    navPageEvents: t.instanceOf(Array),
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
var U = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(s) {
  (function() {
    var a = {}.hasOwnProperty;
    function r() {
      for (var n = [], d = 0; d < arguments.length; d++) {
        var l = arguments[d];
        if (l) {
          var c = typeof l;
          if (c === "string" || c === "number")
            n.push(l);
          else if (Array.isArray(l)) {
            if (l.length) {
              var u = r.apply(null, l);
              u && n.push(u);
            }
          } else if (c === "object") {
            if (l.toString !== Object.prototype.toString && !l.toString.toString().includes("[native code]")) {
              n.push(l.toString());
              continue;
            }
            for (var m in l)
              a.call(l, m) && l[m] && n.push(m);
          }
        }
      }
      return n.join(" ");
    }
    s.exports ? (r.default = r, s.exports = r) : window.classNames = r;
  })();
})(U);
var Ne = U.exports;
const O = /* @__PURE__ */ ge(Ne);
function T(s, a, r = "", n = "", d = "full", l = !0) {
  return `${s}/${a}/${d}/${l ? "!" : ""}${r},${n}/0/default.jpg`;
}
function L(s, a) {
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
  ), r.searchParams.set("limit", "60"), typeof s.keywords < "u" && r.searchParams.set("q", s.keywords), a)
    for (const n of Object.values(a))
      r.searchParams.set(
        `query[bool][must_not][][term][id][value]=${n}`,
        n
      );
  for (const [n, d] of Object.entries(s))
    n.includes("_ids") ? r.searchParams.set(`query[bool][must][][terms][${n}][]`, d) : n.includes("_titles") && r.searchParams.set(
      `query[bool][must][][terms][${n}.keyword][]`,
      d
    );
  return r;
}
const Q = {
  assign: (s) => window.location.assign(s)
};
function we() {
  const {
    tourItems: s,
    limits: a,
    iiifBaseUrl: r,
    setActiveNavPage: n,
    activeNavPage: d,
    headerPrevButtonRef: l
  } = S(P), c = () => {
    var u;
    (u = l == null ? void 0 : l.current) == null || u.focus(), n(1);
  };
  return /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-header__slots", className: "aic-ct-header__slots" }, Array.from({ length: a.items.max }).map((u, m) => /* @__PURE__ */ e.createElement(
    "li",
    {
      className: O("aic-ct-header__slot", {
        "aic-ct-header__slot--active": s[m],
        "aic-ct-header__slot--inactive": !s[m]
      }),
      key: m
    },
    /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "btn btn--transparent f-buttons",
        type: "button",
        disabled: !s[m] || d === 1,
        onClick: c,
        "aria-label": `Artwork ${m + 1}, edit on customize page`
      },
      s[m] ? /* @__PURE__ */ e.createElement(
        "img",
        {
          src: T(
            r,
            s[m].image_id,
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
function ke() {
  const {
    limits: s,
    activeNavPage: a,
    setActiveNavPage: r,
    tourItems: n,
    headerPrevButtonRef: d,
    headerNextButtonRef: l
  } = S(P), c = n.length, u = O(
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
        className: u,
        type: "button",
        onClick: () => {
          a === 0 ? Q.assign("/my-museum-tour") : r(a === 1 ? 0 : 1);
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
      c
    ), " ", /* @__PURE__ */ e.createElement("span", null, "artworks of ", s.items.max, " ")), /* @__PURE__ */ e.createElement(we, null)), /* @__PURE__ */ e.createElement(
      "button",
      {
        ref: l,
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
function Se() {
  const { navPages: s, activeNavPage: a, setActiveNavPage: r, isSaving: n } = S(P), d = (l) => O("aic-ct-nav__button btn f-buttons btn--transparent", {
    "aic-ct-nav__button--active": a === l,
    "aic-ct-nav__button--done": a > l
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
      s.map((l, c) => /* @__PURE__ */ e.createElement(
        "button",
        {
          key: l.id,
          id: `aic-ct-nav-button-${l.id}`,
          "aria-controls": `aic-ct-nav-page-${l.id}`,
          "aria-pressed": l.id === a,
          type: "button",
          onClick: () => r(c),
          disabled: n,
          className: d(l.id)
        },
        /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__button-wrapper" }, /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__number" }, l.id + 1), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__title" }, l.title), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__tagline" }, l.tagline))
      ))
    )
  );
}
function z({ children: s }) {
  var l, c, u;
  const { activeNavPage: a, navPages: r, setNavPages: n, navPageEvents: d } = S(P);
  return w(() => {
    F(document, "gtm:push", {
      event: d[a],
      count: 1
    }), n(
      s ? s.map((m, o) => ({
        id: o,
        title: m.props.title,
        tagline: m.props.tagline
      })) : []
    );
  }, [s, n, a, d]), w(() => {
    var m;
    (m = document.querySelector("#my-museum-tour-builder")) == null || m.scrollIntoView();
  }, [a]), /* @__PURE__ */ e.createElement("div", { id: "aic-ct-nav-pages" }, /* @__PURE__ */ e.createElement("div", { className: "sr-only", "aria-live": "polite" }, "Step ", ((l = r[a]) == null ? void 0 : l.id) + 1, " ", (c = r[a]) == null ? void 0 : c.title, " ", (u = r[a]) == null ? void 0 : u.tagline), s);
}
z.propTypes = {
  children: t.node.isRequired
};
function V(s) {
  const { id: a, children: r } = s, { activeNavPage: n } = S(P);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      tabIndex: "0",
      id: `aic-ct-nav-page-${a}`,
      "aria-labelledby": `aic-ct-nav-button-${a}`,
      "aria-hidden": n !== a,
      style: n !== a ? { display: "none" } : {}
    },
    r
  );
}
V.propTypes = {
  id: t.number.isRequired,
  title: t.string.isRequired,
  tagline: t.string,
  children: t.oneOfType([
    t.arrayOf(t.element),
    t.object
  ]).isRequired
};
const M = H();
function W(s) {
  const {
    children: a,
    searchResultItems: r,
    searchQuery: n,
    searchFetching: d,
    searchError: l,
    searchPreviewId: c
  } = s, [u, m] = E(
    r || null
  ), [o, p] = E(n || ""), [i, h] = E(
    d || !1
  ), [g, f] = E(l || !1), [b, y] = E(null), [v, _] = E(
    c || null
  ), k = C();
  return /* @__PURE__ */ e.createElement(
    M.Provider,
    {
      value: {
        searchResultItems: u,
        setSearchResultItems: m,
        searchQuery: o,
        setSearchQuery: p,
        searchFetching: i,
        setSearchFetching: h,
        searchError: g,
        setSearchError: f,
        activeTheme: b,
        setActiveTheme: y,
        searchPreviewId: v,
        setSearchPreviewId: _,
        searchPreviewRef: k
      }
    },
    a
  );
}
W.propTypes = {
  children: t.node.isRequired,
  searchResultItems: t.array,
  searchQuery: t.string,
  searchFetching: t.bool,
  searchError: t.oneOfType([t.string, t.bool]),
  searchPreviewId: t.number
};
M.Provider.propTypes = {
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
const G = (s) => {
  const [a, r] = E(null), [n, d] = E(!1), [l, c] = E(null), [u, m] = E(null), { dataSubSelector: o, dataSetter: p, fetchingSetter: i, errorSetter: h } = s || {}, g = () => {
    r(null), d(!1), c(null), m(null);
  }, f = async (b) => {
    d(!0);
    const y = new AbortController();
    m(y);
    try {
      const _ = await (await fetch(b, { signal: y.signal })).json();
      r(o ? _[o] : _), c(null), d(!1);
    } catch (v) {
      if (v.name === "AbortError") {
        g();
        return;
      }
      c("Error fetching results"), d(!1);
    }
  };
  return w(() => {
    const b = u;
    return () => {
      b && b.abort();
    };
  }, [u]), w(() => {
    p && p(a);
  }, [a, p]), w(() => {
    h && h(l);
  }, [l, h]), w(() => {
    i && i(n);
  }, [n, i]), { data: a, fetching: n, error: l, fetchData: f, resetState: g };
};
function J(s) {
  const {
    searchQuery: a,
    setSearchQuery: r,
    setSearchResultItems: n,
    setSearchFetching: d,
    setSearchError: l,
    setActiveTheme: c
  } = S(M), [u, m] = E(!0), { fetchData: o } = G({
    dataSubSelector: "data",
    dataSetter: n,
    fetchingSetter: d,
    errorSetter: l
  }), { hideFromTours: p } = s, i = (f) => {
    F(document, "gtm:push", {
      event: "mmt_keyword_search",
      keyword: a
    }), o(L({ keywords: a }, p)), c(null), f.preventDefault();
  }, h = C(null), g = O("m-search-bar aic-ct-search", {
    "s-autocomplete-active": a
  });
  return w(() => {
    u && (m(!1), o(L({ keywords: "" }, p)));
  }, [o, u, m, p]), /* @__PURE__ */ e.createElement(
    "form",
    {
      id: "aic-ct-search",
      role: "search",
      "aria-label": "Objects for your tour",
      onSubmit: i,
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
        onChange: (f) => {
          r(f.target.value);
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
          r(""), n(null), c(null), o(L({ keywords: "" }, p)), h.current.focus();
        }
      },
      /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--close" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close" }))
    ))
  );
}
J.propTypes = {
  hideFromTours: t.array
};
function K(s) {
  const { id: a, label: r, thumbnailId: n, searchParams: d, hideFromTours: l } = s, { iiifBaseUrl: c } = S(P), {
    setSearchResultItems: u,
    setSearchFetching: m,
    setSearchError: o,
    setSearchQuery: p,
    activeTheme: i,
    setActiveTheme: h
  } = S(M), { fetchData: g } = G({
    dataSubSelector: "data",
    dataSetter: u,
    fetchingSetter: m,
    errorSetter: o
  }), f = () => {
    i === r ? (h(null), g(L({ keywords: "" }, l))) : (F(document, "gtm:push", {
      event: "mmt_quickfilter",
      mmt_filterTitle: r
    }), g(L(d, l)), h(r), p(""));
  }, b = O(
    "aic-ct-theme-toggle tag tag--senary tag--w-image",
    {
      "f-tag": i !== r,
      "f-tag-2": i === r,
      "aic-ct-theme-toggle--active": i === r
    }
  );
  return /* @__PURE__ */ e.createElement(e.Fragment, null, (i === null || i === r) && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: b,
      id: `aic-ct-theme-toggle-${a}`,
      onClick: f,
      "aria-pressed": i === r ? "true" : "false"
    },
    /* @__PURE__ */ e.createElement("span", { className: "aic-ct-theme-toggle__wrapper" }, /* @__PURE__ */ e.createElement(
      "img",
      {
        src: T(c, n, "40", "40", "square"),
        alt: ""
      }
    ), r, i === r && /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--close" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close" })))
  )));
}
K.propTypes = {
  id: t.number.isRequired,
  label: t.string.isRequired,
  thumbnailId: t.string.isRequired,
  searchParams: t.object.isRequired,
  hideFromTours: t.array
};
function X(s) {
  const { hideFromTours: a } = s, r = [
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
      thumbnailId: "cd6c543d-a649-8f25-d224-6d22e7f86dcd",
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
  return /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-themes", className: "aic-ct-themes" }, r.map((n, d) => /* @__PURE__ */ e.createElement(
    K,
    {
      key: n.label,
      id: d,
      label: n.label,
      thumbnailId: n.thumbnailId,
      searchParams: n.searchParams,
      hideFromTours: a
    }
  )));
}
X.propTypes = {
  hideFromTours: t.array
};
function Z(s) {
  const { setSearchPreviewId: a, searchPreviewRef: r } = S(M), { iiifBaseUrl: n, setScrollY: d, tourItems: l } = S(P), { itemData: c } = s, u = l.some((h) => h.id === c.id), m = C(null), o = C(), p = () => {
    const h = document.documentElement.scrollTop;
    F(document, "gtm:push", {
      event: "mmt_artwork_modal",
      artworkTitle: c.title
    }), a(c.id), d(h), r.current.showModal(), setTimeout(() => {
      document.documentElement.classList.add(
        "s-body-locked",
        "s-body-locked--ct"
      ), document.body.scrollTop = h;
    }, 0);
  }, i = O(
    "aic-ct-result o-pinboard__item m-listing m-listing--variable-height",
    {
      "aic-ct-result--selected": u
    }
  );
  return w(() => {
    var h;
    (h = o == null ? void 0 : o.current) != null && h.includes("s-positioned") && m.current.classList.add("s-positioned"), o.current = m.current.className;
  }), /* @__PURE__ */ e.createElement(
    "li",
    {
      ref: m,
      id: `aic-ct-search-item-${c.id}`,
      className: i
    },
    c.image_id && /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "aic-ct-result__button",
        type: "button",
        onClick: p,
        "aria-describedby": u ? "aic-ct-search__in-your-tour" : void 0
      },
      /* @__PURE__ */ e.createElement("span", { className: "m-listing__link" }, /* @__PURE__ */ e.createElement("span", { className: "m-listing__img m-listing__img--no-bg" }, u && /* @__PURE__ */ e.createElement("span", { className: "aic-ct-selected-marker" }, /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--check" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--check" }))), /* @__PURE__ */ e.createElement(
        "img",
        {
          src: c.thumbnail.lqip,
          alt: "",
          height: c.thumbnail.height,
          width: c.thumbnail.width,
          "data-iiif-id": `${n}/${c.image_id}`,
          "data-pin-media": T(
            n,
            c.image_id,
            "600",
            void 0,
            void 0,
            !1
          ),
          sizes: "(min-width: 1640px) 336px, (min-width: 1200px) 20.31vw, (min-width: 900px) 28.13vw, (min-width: 600px) 43.75vw,  43.75vw",
          "data-srcset": `${T(
            n,
            c.image_id,
            Math.min(c.thumbnail.width, 200),
            void 0,
            void 0,
            !1
          )} 200w, ${T(
            n,
            c.image_id,
            Math.min(c.thumbnail.width, 400),
            void 0,
            void 0,
            !1
          )} 400w, ${T(
            n,
            c.image_id,
            Math.min(c.thumbnail.width, 843),
            void 0,
            void 0,
            !1
          )} 843w, ${T(
            n,
            c.image_id,
            Math.min(c.thumbnail.width, 1686),
            void 0,
            void 0,
            !1
          )} 1686w`
        }
      )), /* @__PURE__ */ e.createElement(
        "span",
        {
          id: `aic-ct-result__meta-${c.id}`,
          className: "m-listing__meta"
        },
        c.title && /* @__PURE__ */ e.createElement("span", { className: "title f-list-7" }, c.title),
        c.artist_title && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement("span", { className: "subtitle f-tertiary" }, c.artist_title))
      ))
    )
  );
}
Z.propTypes = {
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
function Te() {
  const { searchPreviewId: s, searchResultItems: a, searchPreviewRef: r } = S(M), { iiifBaseUrl: n, tourItems: d, tourItemsDispatch: l, limits: c } = S(P), [u, m] = E(!1), [o, p] = E(null), i = O({
    "aic-ct-preview__content": !0,
    "aic-ct-preview--loading": !o,
    "aic-ct-preview__content-warning": d.length >= 6
  });
  w(() => {
    p(
      a.find((f) => f.id === s)
    );
  }, [s, a]);
  const h = () => {
    var f;
    l({
      type: u ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: o
    }), (f = r == null ? void 0 : r.current) == null || f.close();
  }, g = () => {
    var f;
    (f = r == null ? void 0 : r.current) == null || f.close();
  };
  return w(() => {
    o && m(d.find((f) => f.id === o.id));
  }, [d, o]), d.length < 6 || u ? /* @__PURE__ */ e.createElement("div", { className: i, id: "aic-ct-preview__content" }, o ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__header aic-ct-preview__core" }, /* @__PURE__ */ e.createElement(
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
      src: T(n, o.image_id, 680, 680),
      width: o.thumbnail.width,
      height: o.thumbnail.height,
      alt: o.thumbnail.alt_text || ""
    }
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__core" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__details" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__title f-headline-editorial" }, o.title, o.date_display && /* @__PURE__ */ e.createElement(e.Fragment, null, ",", " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-preview__date f-list-4" }, o.date_display))), o.artist_title && /* @__PURE__ */ e.createElement("p", { className: "aic-ct-preview__artist f-subheading-1" }, o.artist_title)), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__links" }, d.length < 6 || u ? /* @__PURE__ */ e.createElement(
    "button",
    {
      id: `aic-ct-preview__action-button-${o.id}`,
      className: "btn btn--my-museum-tour f-buttons aic-ct-preview__action-button",
      type: "button",
      onClick: h,
      "aria-pressed": u ? "true" : "false",
      "aria-label": "Toggle from your tour"
    },
    u ? "Remove from Your Tour" : "Add to Your Tour"
  ) : /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You have already added ", c.items.max, " artworks, the maximum number allowed. Please remove one if you would like to choose a different work.")), (o.short_description || o.description) && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__description" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__description-title f-module-title-2" }, "Artwork description"), /* @__PURE__ */ e.createElement(
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
  ))) : /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__core aic-ct-loader f-body" }, /* @__PURE__ */ e.createElement("p", null, "Loading..."), /* @__PURE__ */ e.createElement("div", { className: "loader" }))) : /* @__PURE__ */ e.createElement("div", { className: i, id: "aic-ct-preview__content" }, /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__header aic-ct-preview__core" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-preview__close",
      className: "btn btn--icon btn--transparent aic-ct-preview__close",
      type: "button",
      "aria-label": "Close",
      onClick: g
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" }))
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__body aic-ct-preview__core" }, /* @__PURE__ */ e.createElement("svg", { className: "icon--max-artworks" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--max-artworks" })), /* @__PURE__ */ e.createElement("p", { className: "f-list-6" }, "You have already added ", c.items.max, " artworks, the maximum number allowed."), /* @__PURE__ */ e.createElement("p", { className: "f-list-6" }, "Please remove one if you would like to choose a different work.")), /* @__PURE__ */ e.createElement("br", null)));
}
function Pe() {
  const {
    searchError: s,
    searchFetching: a,
    searchResultItems: r,
    searchPreviewRef: n,
    setSearchPreviewId: d,
    activeTheme: l,
    searchQuery: c
  } = S(M), { scrollY: u } = S(P), m = C(null), o = B(
    (i) => {
      var h;
      (i.type === "close" || (h = n == null ? void 0 : n.current) != null && h.open && i.target === (n == null ? void 0 : n.current)) && (n.current.close(), d(null), document.documentElement.scrollTop = u, document.documentElement.classList.remove(
        "s-body-locked",
        "s-body-locked--ct"
      ));
    },
    [d, u, n]
  ), p = B(() => {
    const i = new Event("page:updated", { bubbles: !0 });
    setTimeout(() => {
      document.dispatchEvent(i);
    }, 0);
  }, []);
  return w(() => {
    m.current && (r == null ? void 0 : r.length) > 0 && !a && !s && p();
  }, [
    m,
    r,
    a,
    s,
    p
  ]), w(() => {
    const i = n.current;
    return i && (i.addEventListener("close", o), i.addEventListener("click", o)), () => {
      i && (i.removeEventListener("close", o), i.removeEventListener("click", o));
    };
  }, [n, o]), !r && !a && !s ? null : /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-search-results" }, a && // Render only the loading message while fetching
  /* @__PURE__ */ e.createElement(
    "div",
    {
      id: "aic-ct-search-results__loading",
      className: "aic-ct-search-results__message aic-ct-loader f-body"
    },
    /* @__PURE__ */ e.createElement("p", null, "Loading..."),
    /* @__PURE__ */ e.createElement("div", { className: "loader" })
  ), s && // Render only the error message if there is an error
  /* @__PURE__ */ e.createElement(
    "div",
    {
      id: "aic-ct-search-results__error",
      className: "aic-ct-search-results__message f-body"
    },
    /* @__PURE__ */ e.createElement("p", null, s)
  ), (r == null ? void 0 : r.length) === 0 && !a && !s && // Render only a no results message if there are no results
  /* @__PURE__ */ e.createElement(
    "div",
    {
      id: "aic-ct-search-results__no-results",
      className: "aic-ct-search-results__message f-body"
    },
    /* @__PURE__ */ e.createElement("p", null, "Sorry, we couldn’t find any artworks matching your search. ")
  ), (r == null ? void 0 : r.length) > 0 && !a && !s && // Render the results if there are results
  /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "aic-ct-pre-result-text f-body" }, "The artworks below are currently on view and available to choose for your tour."), /* @__PURE__ */ e.createElement(
    "ul",
    {
      ref: m,
      id: "aic-ct-search-results__items",
      className: "o-pinboard o-pinboard--2-col@xsmall o-pinboard--2-col@small o-pinboard--3-col@medium o-pinboard--4-col@large o-pinboard--4-col@xlarge",
      "data-pinboard-option-layout": "o-pinboard--2-col@xsmall o-pinboard--2-col@small o-pinboard--2-col@medium o-pinboard--3-col@large o-pinboard--3-col@xlarge",
      "data-pinboard-maintain-order": "false",
      "data-behavior": "pinboard"
    },
    r.map((i) => /* @__PURE__ */ e.createElement(Z, { key: i.id, itemData: i }))
  ), /* @__PURE__ */ e.createElement("p", { className: "aic-ct-post-result-text f-body" }, "Looking for more artworks? Use the search field at the top of the page to see more."), /* @__PURE__ */ e.createElement(
    "dialog",
    {
      ref: n,
      id: "aic-ct-search-preview",
      onClose: o
    },
    /* @__PURE__ */ e.createElement(Te, null)
  ))), /* @__PURE__ */ e.createElement("p", { className: "u-hide", id: "aic-ct-search__in-your-tour" }, "This object is in your tour", " "), /* @__PURE__ */ e.createElement("p", { className: "sr-only", "aria-live": "polite" }, a ? "Loading" : l ? `Showing results for ${l}` : c ? `Showing results for ${c}` : "Showing default results"));
}
function q(s = {}) {
  const { initialValue: a, maxLength: r, valueSetter: n } = s, [d, l] = E(a || ""), c = C(null), u = r - d.length;
  return {
    value: d,
    onChange: (o) => {
      const { value: p } = o.target;
      c.current.ariaBusy = !0, l(p), n && n(p), c.current.ariaBusy = !1;
    },
    countRef: c,
    charsRemaining: u,
    maxLength: r,
    counterEl: /* @__PURE__ */ e.createElement("output", { ref: c }, "(", u, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")
  };
}
function ee(s) {
  var b;
  const { itemData: a, itemIndex: r, setShouldAssignFocus: n, setRemoveButtons: d } = s, { iiifBaseUrl: l, tourItems: c, tourItemsDispatch: u, limits: m } = S(P), o = C(null);
  let p = C(!1);
  const i = (y) => {
    let v = c.reduce((_, k) => (k == null ? void 0 : k.objectNote.length) > 0 || _, !1);
    p.current == (y === "") && !v && (p.current = !p.current, F(document, "gtm:push", {
      event: "mmt_artwork_note",
      fieldPopulated: p.current
    }));
  }, h = q({
    initialValue: (b = c[r]) == null ? void 0 : b.objectNote,
    maxLength: m.objectNote,
    valueSetter: i
  }), g = j(
    () => ({
      id: a.id,
      objectNote: h.value
    }),
    [a.id, h.value]
  ), f = () => {
    u({
      type: "REMOVE_ITEM",
      payload: a
    });
  };
  return w(() => {
    u({
      type: "UPDATE_NOTE",
      payload: g
    });
  }, [g, u]), w(() => {
    const y = o.current;
    return () => {
      document.activeElement === y && (c.length > 1 ? c.find((v, _) => {
        v.id === a.id && n({
          flag: !0,
          id: c[_ !== c.length - 1 ? _ + 1 : _ - 1].id
        });
      }) : n({
        flag: !0,
        id: null
      }));
    };
  }, [c, a.id, n]), w(() => (d((y) => [...y, { id: a.id, ref: o }]), () => {
    d(
      (y) => y.filter((v) => v.id !== a.id)
    );
  }), [d, c, a.id]), /* @__PURE__ */ e.createElement(
    "li",
    {
      className: "aic-ct-tour-item aic-ct__core",
      id: `aic-ct-tour-item-${a.id}`
    },
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour-item__lockup" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour-item__info" }, a.title && /* @__PURE__ */ e.createElement("h2", { className: "aic-ct-tour-item__title f-deck" }, a.title, a.date_display && /* @__PURE__ */ e.createElement(e.Fragment, null, ", ", a.date_display)), a.artist_title && /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-tour-item__artist f-body" }, a.artist_title), a.gallery_title && /* @__PURE__ */ e.createElement("p", { className: "aic-ct-tour-item__gallery f-secondary" }, a.gallery_title)), a.image_id && /* @__PURE__ */ e.createElement(
      "img",
      {
        className: "aic-ct-tour-item__image",
        src: T(
          l,
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
        placeholder: "e.g. This reminds me of our vacation last year.",
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
          f(a.id);
        }
      },
      /* @__PURE__ */ e.createElement("svg", { className: "icon--delete", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--delete" })),
      "Remove from tour"
    )
  );
}
ee.propTypes = {
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
function xe() {
  const { tourItems: s, headerNextButtonRef: a, setActiveNavPage: r, limits: n } = S(P), [d, l] = E({
    flag: !1,
    id: null
  }), [c, u] = E([]), m = C(null), o = () => {
    r(0), a.current.focus();
  }, p = () => {
    r(2), a.current.focus();
  };
  return w(() => {
    d.flag && (!s.length && (m != null && m.current) ? m.current.focus() : c.find((i) => i.id === d.id).ref.current.focus(), l(!1));
  }, [s, d, c, m]), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour" }, s.length > 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement("header", { className: "aic-ct-section-header f-body" }, /* @__PURE__ */ e.createElement("h2", { id: "aic-ct-tour__heading", className: "f-module-title-2" }, "Artworks in your tour")), /* @__PURE__ */ e.createElement("div", { className: "f-body aic-ct-tour__intro" }, /* @__PURE__ */ e.createElement("p", null, "Your artworks are listed below in the order that you selected them. Your final tour will have them ordered based on their location in the galleries to give you the easiest tour path."), s.length === 6 && /* @__PURE__ */ e.createElement("p", null, /* @__PURE__ */ e.createElement("br", null), "You've added 6 artworks, the maximum number allowed. You may remove one if you would like to choose a different work."))), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-tour__results" }, s.map((i, h) => /* @__PURE__ */ e.createElement(
    ee,
    {
      key: i.id,
      setRemoveButtons: u,
      itemData: i,
      itemIndex: h,
      shouldAssignFocus: d,
      setShouldAssignFocus: l
    }
  )))), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta aic-ct-full-bleed" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-wrapper aic-ct-full-bleed__core" }, s.length > 0 && s.length < 6 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You've added ", s.length, " of the maximum", " ", n.items.max, " artworks."), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: m,
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
      onClick: p
    },
    "Finish My Tour"
  ))), s.length === 6 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You've added ", s.length, " artworks, the maximum number allowed. Please remove one if you would like to choose a different work."), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "f-buttons btn btn--my-museum-tour",
      onClick: p
    },
    "Finish My Tour"
  ))), s.length === 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You haven't added any artworks to your tour yet"), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: m,
      id: "aic-ct-tour__cta-browse",
      type: "button",
      className: "f-buttons btn btn--secondary",
      onClick: o
    },
    "Browse for More Artworks"
  ))))));
}
function Ce() {
  const {
    tourTitle: s,
    setTourTitle: a,
    creatorEmail: r,
    setCreatorEmail: n,
    validCreatorEmail: d,
    setValidCreatorEmail: l,
    creatorName: c,
    setCreatorName: u,
    recipientName: m,
    setRecipientName: o,
    marketingOptIn: p,
    setMarketingOptIn: i,
    tourDescription: h,
    setTourDescription: g,
    limits: f
  } = S(P);
  let b = C(!1), y = C(!1);
  const v = (N) => {
    b.current == (N === "") && (b.current = !b.current, F(document, "gtm:push", {
      event: "mmt_personalization",
      fieldPopulated: b.current
    })), u(N);
  }, _ = (N) => {
    y.current == (N === "") && (y.current = !y.current, F(document, "gtm:push", {
      event: "mmt_tribute",
      fieldPopulated: y.current
    })), o(N);
  }, k = (N) => {
    b.current == (N === "") && (b.current = !b.current, F(document, "gtm:push", {
      event: "mmt_personalization",
      fieldPopulated: b.current
    })), g(name);
  }, A = (N) => {
    F(document, "gtm:push", {
      event: "mmt_email_optin",
      optInStatus: N
    }), i(N);
  }, I = q({
    initialValue: s,
    maxLength: f.title,
    valueSetter: a
  }), R = q({
    initialValue: c,
    maxLength: f.creatorName,
    valueSetter: v
  }), D = q({
    initialValue: m,
    maxLength: f.recipientName,
    valueSetter: _
  }), x = q({
    initialValue: h,
    maxLength: f.description,
    valueSetter: k
  });
  return /* @__PURE__ */ e.createElement("fieldset", { className: "m-fieldset aic-ct-fieldset" }, /* @__PURE__ */ e.createElement("ol", { className: "m-fieldset__fieldset" }, /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__title", className: "label f-secondary" }, "Tour Title ", /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true" }, " *")), /* @__PURE__ */ e.createElement("span", { className: "input" }, /* @__PURE__ */ e.createElement("span", { className: "input__io-container" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      className: "f-secondary",
      type: "text",
      onChange: I.onChange,
      value: I.value,
      id: "aic-ct-metadata__title",
      maxLength: I.maxLength,
      "aria-required": "true",
      "aria-invalid": I.value ? "false" : "true",
      "aria-describedby": I.value ? null : "aic-ct-metadata__invalid-title",
      required: !0
    }
  ), I.counterEl), !I.value && /* @__PURE__ */ e.createElement(
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
      value: R.value,
      onChange: R.onChange,
      id: "aic-ct-metadata__creator-name",
      maxLength: R.maxLength
    }
  ), R.counterEl))), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement(
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
      onChange: (N) => {
        n(N.target.value), l(N.target.validity.valid);
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
      value: D.value,
      onChange: D.onChange,
      id: "aic-ct-metadata__recipient-name",
      maxLength: D.maxLength
    }
  ), D.counterEl))), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement(
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
      onChange: x.onChange,
      rows: "5",
      value: x.value,
      maxLength: x.maxLength
    }
  ), x.counterEl))), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement("span", { className: "checkbox f-secondary" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      id: "aic-ct-metadata__opt-in",
      value: p,
      name: "aic-ct-metadata__opt-in",
      checked: p,
      onChange: (N) => {
        A(N.target.checked);
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
    apiSaveEndpoint: s,
    tourTitle: a,
    creatorName: r,
    creatorEmail: n,
    recipientName: d,
    marketingOptIn: l,
    validCreatorEmail: c,
    tourItems: u,
    tourDescription: m,
    validityIssues: o,
    setValidityIssues: p,
    limits: i,
    isSaving: h,
    setIsSaving: g,
    setActiveNavPage: f
  } = S(P), [b, y] = E(null), v = async () => {
    g(!0);
    try {
      const _ = await fetch(`${s}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          creatorEmail: n,
          marketingOptIn: l,
          tourJson: {
            title: a,
            creatorName: r,
            recipientName: d,
            description: m,
            // "artworks" is essentially everything from the GET response with added "objectNote"
            // The API expects these fields named in this way
            artworks: u
          }
        })
      });
      if (!_.ok)
        throw new Error(
          "There was a problem saving your tour, please try again. If the problem persists, please contact us and let us know."
        );
      const { message: k, my_museum_tour: A } = await _.json();
      y({
        type: "success",
        message: k,
        id: A.id
      });
    } catch (_) {
      y({
        type: "error",
        message: _.message
      });
    }
    g(!1);
  };
  return w(() => {
    const _ = [];
    a.length || _.push("A tour title"), a.length > i.title && _.push("Tour title must not exceed the character limit"), c || _.push("A valid email address"), m.length > i.description && _.push(
      "Tour description must not exceed the character limit"
    ), u.length < i.items.min && _.push("At least one artwork is required for your tour"), u.length > i.items.max && _.push("Tour must not contain more than 6 artworks"), u.some((k) => {
      var A;
      return ((A = k.objectNote) == null ? void 0 : A.length) > i.objectNote ? (_.push("Notes must not exceed the character limit"), !0) : !1;
    }), p(_);
  }, [
    a,
    m,
    u,
    p,
    i,
    c
  ]), w(() => {
    b != null && b.id && Q.assign(
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
      /* @__PURE__ */ e.createElement("ul", null, o.map((_, k) => /* @__PURE__ */ e.createElement("li", { className: "f-body", key: k }, _)))
    ),
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation__actions" }, /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "btn btn--secondary f-buttons",
        type: "button",
        onClick: () => {
          u.length ? f(1) : f(0);
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
    !h && !b && /* @__PURE__ */ e.createElement(
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
          onClick: v,
          disabled: h
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
          onClick: v,
          disabled: h
        },
        "Try again"
      ))
    ))
  ));
}
const Fe = (s) => {
  const {
    apiSaveEndpoint: a,
    hideFromTours: r,
    tourTitle: n,
    tourDescription: d,
    tourItems: l,
    heroImageId: c
  } = s, u = "https://www.artic.edu/iiif/2", m = {
    apiSaveEndpoint: a,
    tourTitle: n,
    tourDescription: d,
    tourItems: l,
    heroImageId: c,
    iiifBaseUrl: u
  }, o = {
    hideFromTours: r
  };
  return w(() => {
    document.body.style.overflow = "unset";
  }, []), /* @__PURE__ */ e.createElement("div", { id: "my-museum-tour-builder", className: "my-museum-tour" }, /* @__PURE__ */ e.createElement(Y, { ...m }, /* @__PURE__ */ e.createElement(ke, null), /* @__PURE__ */ e.createElement(z, null, /* @__PURE__ */ e.createElement(V, { id: 0, title: "Choose Your Artworks" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-intro aic-ct-intro--keyline aic-ct__core" }, /* @__PURE__ */ e.createElement("h1", { className: "f-display-2" }, "Create your own tour"), /* @__PURE__ */ e.createElement("p", { className: "f-deck" }, "Choose up to 6 artworks for your tour by searching for a particular work or artist, browsing themes, or selecting from the list of artworks below.")), /* @__PURE__ */ e.createElement(W, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement(J, { ...o }), /* @__PURE__ */ e.createElement(X, { ...o }), /* @__PURE__ */ e.createElement(Pe, null)))), /* @__PURE__ */ e.createElement(V, { id: 1, title: "Personalize" }, c && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-hero aic-ct-full-bleed" }, /* @__PURE__ */ e.createElement(
    "img",
    {
      src: T(u, c, 20, 20, "full"),
      srcSet: `${T(
        u,
        c,
        480,
        480,
        "full"
      )} 320w, ${T(
        u,
        c,
        640,
        640,
        "full"
      )} 480w, ${T(
        u,
        c,
        960,
        960,
        "full"
      )} 640w, ${T(
        u,
        c,
        1280,
        1280,
        "full"
      )} 960w, ${T(
        u,
        c,
        1920,
        1920,
        "full"
      )} 1280w`,
      alt: ""
    }
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-intro aic-ct__core" }, /* @__PURE__ */ e.createElement("h1", { className: "f-display-2" }, "Personalize your tour")), /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement(Ce, null)), /* @__PURE__ */ e.createElement(xe, null)), /* @__PURE__ */ e.createElement(V, { id: 2, title: "Finish and Share" }, /* @__PURE__ */ e.createElement(Ie, null))), /* @__PURE__ */ e.createElement(Se, null)));
};
Fe.propTypes = {
  apiSaveEndpoint: t.string,
  hideFromTours: t.array,
  tourTitle: t.string,
  tourDescription: t.string,
  tourItems: t.array,
  searchPreviewId: t.number,
  heroImageId: t.string
};
export {
  Fe as default
};
