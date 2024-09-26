import e, { createContext as U, useState as N, useReducer as ye, useRef as F, useMemo as B, useContext as T, useEffect as S, useCallback as Y } from "react";
import t from "prop-types";
const Ne = (i, a) => {
  switch (a.type) {
    case "ADD_ITEM":
      return a.payload.short_description && (a.payload.description = a.payload.short_description), delete a.payload.short_description, [...i, { ...a.payload, objectNote: "" }];
    case "UPDATE_NOTE":
      return i.map((n) => n.id === a.payload.id ? { ...n, objectNote: a.payload.objectNote } : n);
    case "REMOVE_ITEM":
      return i.filter(({ id: n }) => n !== a.payload.id);
    default:
      return i;
  }
}, I = U();
function Q(i) {
  const {
    children: a,
    tourTitle: n,
    creatorEmail: r,
    creatorName: c,
    recipientName: o,
    tourDescription: s,
    marketingOptIn: d,
    tourItems: u,
    navPages: m,
    apiSaveEndpoint: p,
    iiifBaseUrl: l
  } = i, [h, b] = N(n || ""), [_, f] = N(r || ""), [E, g] = N(!1), [v, y] = N(c || ""), [k, C] = N(o || ""), [A, D] = N(
    d || !1
  ), [P, w] = N(
    s || ""
  ), [j, ie] = N(m || []), [se, ce] = N(0), [le, oe] = ye(
    Ne,
    u || []
  ), me = F(null), ue = F(null), [de, he] = N([]), pe = p || "/api/v1/my-museum-tour", [fe, _e] = N(!1), [ge, be] = N(0), ve = B(
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
  ), Ee = B(
    () => [
      "mmt_builder_pageview",
      "mmt_personalize_pageview",
      "mmt_ready_to_save_pageview"
    ],
    []
  );
  return /* @__PURE__ */ e.createElement(
    I.Provider,
    {
      value: {
        apiSaveEndpoint: pe,
        iiifBaseUrl: l,
        limits: ve,
        tourTitle: h,
        setTourTitle: b,
        creatorEmail: _,
        setCreatorEmail: f,
        validCreatorEmail: E,
        setValidCreatorEmail: g,
        creatorName: v,
        setCreatorName: y,
        recipientName: k,
        setRecipientName: C,
        tourDescription: P,
        setTourDescription: w,
        marketingOptIn: A,
        setMarketingOptIn: D,
        tourItems: le,
        tourItemsDispatch: oe,
        navPages: j,
        setNavPages: ie,
        activeNavPage: se,
        setActiveNavPage: ce,
        navPageEvents: Ee,
        headerPrevButtonRef: me,
        headerNextButtonRef: ue,
        validityIssues: de,
        setValidityIssues: he,
        isSaving: fe,
        setIsSaving: _e,
        scrollY: ge,
        setScrollY: be
      }
    },
    a
  );
}
Q.propTypes = {
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
var we = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ke(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var z = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(i) {
  (function() {
    var a = {}.hasOwnProperty;
    function n() {
      for (var r = [], c = 0; c < arguments.length; c++) {
        var o = arguments[c];
        if (o) {
          var s = typeof o;
          if (s === "string" || s === "number")
            r.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var d = n.apply(null, o);
              d && r.push(d);
            }
          } else if (s === "object") {
            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) {
              r.push(o.toString());
              continue;
            }
            for (var u in o)
              a.call(o, u) && o[u] && r.push(u);
          }
        }
      }
      return r.join(" ");
    }
    i.exports ? (n.default = n, i.exports = n) : window.classNames = n;
  })();
})(z);
var Te = z.exports;
const O = /* @__PURE__ */ ke(Te);
function x(i, a, n = "", r = "", c = "full", o = !0) {
  return `${i}/${a}/${c}/${o ? "!" : ""}${n},${r}/0/default.jpg`;
}
function L(i, a) {
  const n = new URL("https://api.artic.edu/api/v1/artworks/search");
  if (n.searchParams.set(
    "query[bool][must_not][][term][gallery_id][value]",
    "2147475902"
  ), n.searchParams.set(
    "query[bool][should][0][bool][must][][exists][field]",
    "short_description"
  ), n.searchParams.set(
    "query[bool][should][0][bool][must][][term][is_on_view][value]",
    "true"
  ), n.searchParams.set(
    "query[bool][should][1][bool][must][][term][is_on_view]",
    "true"
  ), n.searchParams.set(
    "query[bool][should][1][bool][must][][exists][field]",
    "description"
  ), n.searchParams.set(
    "query[bool][should][1][bool][should][][exists][field]",
    "description"
  ), n.searchParams.set(
    "query[bool][should][1][bool][should][][exists][field]",
    "subject_id"
  ), n.searchParams.set(
    "query[bool][should][1][bool][should][][exists][field]",
    "style_id"
  ), n.searchParams.set(
    "query[bool][should][1][bool][should][][term][is_boosted]",
    "true"
  ), n.searchParams.set("query[bool][minimum_should_match]", "1"), n.searchParams.set(
    "fields",
    "artist_title,short_description,description,id,image_id,thumbnail,title,date_display,gallery_title,gallery_id"
  ), n.searchParams.set("limit", "60"), typeof i.page < "u" && n.searchParams.set("page", i.page), typeof i.keywords < "u" && n.searchParams.set("q", i.keywords), a)
    for (const r of Object.values(a))
      n.searchParams.set(
        `query[bool][must_not][][term][id][value]=${r}`,
        r
      );
  for (const [r, c] of Object.entries(i))
    r.includes("_ids") ? n.searchParams.set(`query[bool][must][][terms][${r}][]`, c) : r.includes("_titles") && n.searchParams.set(
      `query[bool][must][][terms][${r}.keyword][]`,
      c
    );
  return n;
}
function q(i, a) {
  return Array.from(Array(a + 1 - i), (n, r) => r + i);
}
const W = {
  assign: (i) => window.location.assign(i)
};
function Pe() {
  const {
    tourItems: i,
    limits: a,
    iiifBaseUrl: n,
    setActiveNavPage: r,
    activeNavPage: c,
    headerPrevButtonRef: o
  } = T(I), s = () => {
    var d;
    (d = o == null ? void 0 : o.current) == null || d.focus(), r(1);
  };
  return /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-header__slots", className: "aic-ct-header__slots" }, Array.from({ length: a.items.max }).map((d, u) => /* @__PURE__ */ e.createElement(
    "li",
    {
      className: O("aic-ct-header__slot", {
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
        disabled: !i[u] || c === 1,
        onClick: s,
        "aria-label": `Artwork ${u + 1}, edit on customize page`
      },
      i[u] ? /* @__PURE__ */ e.createElement(
        "img",
        {
          src: x(
            n,
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
function Se() {
  const {
    limits: i,
    activeNavPage: a,
    setActiveNavPage: n,
    tourItems: r,
    headerPrevButtonRef: c,
    headerNextButtonRef: o
  } = T(I), s = r.length, d = O(
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
        ref: c,
        id: "aic-ct-header__back-button",
        className: d,
        type: "button",
        onClick: () => {
          a === 0 ? W.assign("/my-museum-tour") : n(a === 1 ? 0 : 1);
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
      s
    ), " ", /* @__PURE__ */ e.createElement("span", null, "artworks of ", i.items.max, " ")), /* @__PURE__ */ e.createElement(Pe, null)), /* @__PURE__ */ e.createElement(
      "button",
      {
        ref: o,
        id: "aic-ct-header__next-button",
        className: "aic-ct-header__button aic-ct-header__button--next btn btn--transparent btn--w-icon f-buttons",
        type: "button",
        onClick: () => {
          n(a === 0 ? 1 : 2);
        }
      },
      a === 0 && "Next",
      a > 0 && "Finish",
      /* @__PURE__ */ e.createElement("svg", { className: "icon--arrow", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--arrow" }))
    ))
  );
}
function Ce() {
  const { navPages: i, activeNavPage: a, setActiveNavPage: n, isSaving: r } = T(I), c = (o) => O("aic-ct-nav__button btn f-buttons btn--transparent", {
    "aic-ct-nav__button--active": a === o,
    "aic-ct-nav__button--done": a > o
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
      i.map((o, s) => /* @__PURE__ */ e.createElement(
        "button",
        {
          key: o.id,
          id: `aic-ct-nav-button-${o.id}`,
          "aria-controls": `aic-ct-nav-page-${o.id}`,
          "aria-pressed": o.id === a,
          type: "button",
          onClick: () => n(s),
          disabled: r,
          className: c(o.id)
        },
        /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__button-wrapper" }, /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__number" }, o.id + 1), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__title" }, o.title), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__tagline" }, o.tagline))
      ))
    )
  );
}
var R = function(i, a, n) {
  var r = document.createEvent("HTMLEvents");
  r.initEvent(a, !0, !0), r.data = n || {}, r.eventName = a, i.dispatchEvent(r);
}, xe = { exports: {} };
(function(i, a) {
  (function(n, r) {
    i.exports = r();
  })(we, function() {
    var n = "AxmTYklsjo190QW", r = "sans-serif", c = "serif", o = {
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
    }, s = [
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
    ], d = '<div style="%s" aria-hidden="true">' + n + "</div>", u = function() {
      this.fontFamily = "", this.appended = !1, this.serif = void 0, this.sansSerif = void 0, this.parent = void 0, this.options = {};
    };
    u.prototype.getMeasurements = function() {
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
    }, u.prototype.load = function() {
      var p = /* @__PURE__ */ new Date(), l = this, h = l.serif, b = l.sansSerif, _ = l.parent, f = l.appended, E, g = l.options, v = g.reference;
      function y(P) {
        return s.concat(["font-weight:" + g.weight, "font-style:" + g.style]).concat("font-family:" + P).join(";");
      }
      var k = d.replace(/\%s/, y(r)), C = d.replace(/\%s/, y(c));
      _ || (_ = l.parent = g.window.document.createElement("div")), _.innerHTML = k + C, b = l.sansSerif = _.firstChild, h = l.serif = b.nextSibling, g.glyphs && (b.innerHTML += g.glyphs, h.innerHTML += g.glyphs);
      function A(P, w, j) {
        return Math.abs(P.width - w.offsetWidth) > j || Math.abs(P.height - w.offsetHeight) > j;
      }
      function D() {
        return (/* @__PURE__ */ new Date()).getTime() - p.getTime() > g.timeout;
      }
      (function P() {
        v || (v = g.window.document.body), !f && v && (v.appendChild(_), f = l.appended = !0, E = l.getMeasurements(), b.style.fontFamily = l.fontFamily + ", " + r, h.style.fontFamily = l.fontFamily + ", " + c), f && E && (A(E.sansSerif, b, g.tolerance) || A(E.serif, h, g.tolerance)) ? g.success() : D() ? g.error() : !f && "requestAnimationFrame" in g.window ? g.window.requestAnimationFrame(P) : g.window.setTimeout(P, g.delay);
      })();
    }, u.prototype.cleanFamilyName = function(p) {
      return p.replace(/[\'\"]/g, "").toLowerCase();
    }, u.prototype.cleanWeight = function(p) {
      var l = {
        normal: "400",
        bold: "700"
      };
      return "" + (l[p] || p);
    }, u.prototype.checkFontFaces = function(p) {
      var l = this;
      l.options.window.document.fonts.forEach(function(h) {
        l.cleanFamilyName(h.family) === l.cleanFamilyName(l.fontFamily) && l.cleanWeight(h.weight) === l.cleanWeight(l.options.weight) && h.style === l.options.style && h.load().then(function() {
          l.options.success(h), l.options.window.clearTimeout(p);
        });
      });
    }, u.prototype.init = function(p, l) {
      var h;
      for (var b in o)
        l.hasOwnProperty(b) || (l[b] = o[b]);
      this.options = l, this.fontFamily = p, !l.glyphs && "fonts" in l.window.document ? (l.timeout && (h = l.window.setTimeout(function() {
        l.error();
      }, l.timeout)), this.checkFontFaces(h)) : this.load();
    };
    var m = function(p, l) {
      var h = new u();
      return h.init(p, l), h;
    };
    return m;
  });
})(xe);
function G({ children: i }) {
  var o, s, d;
  const { activeNavPage: a, navPages: n, setNavPages: r, navPageEvents: c } = T(I);
  return S(() => {
    R(document, "gtm:push", {
      event: c[a],
      count: 1
    }), r(
      i ? i.map((u, m) => ({
        id: m,
        title: u.props.title,
        tagline: u.props.tagline
      })) : []
    );
  }, [i, r, a, c]), S(() => {
    var u;
    (u = document.querySelector("#my-museum-tour-builder")) == null || u.scrollIntoView();
  }, [a]), /* @__PURE__ */ e.createElement("div", { id: "aic-ct-nav-pages" }, /* @__PURE__ */ e.createElement("div", { className: "sr-only", "aria-live": "polite" }, "Step ", ((o = n[a]) == null ? void 0 : o.id) + 1, " ", (s = n[a]) == null ? void 0 : s.title, " ", (d = n[a]) == null ? void 0 : d.tagline), i);
}
G.propTypes = {
  children: t.node.isRequired
};
function V(i) {
  const { id: a, children: n } = i, { activeNavPage: r } = T(I);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      tabIndex: "0",
      id: `aic-ct-nav-page-${a}`,
      "aria-labelledby": `aic-ct-nav-button-${a}`,
      "aria-hidden": r !== a,
      style: r !== a ? { display: "none" } : {}
    },
    n
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
const M = U();
function K(i) {
  const {
    children: a,
    searchResultItems: n,
    searchQuery: r,
    searchParams: c,
    searchFetching: o,
    searchError: s,
    searchPreviewId: d,
    pagination: u
  } = i, [m, p] = N(
    n || null
  ), [l, h] = N(r || ""), [b, _] = N(c || null), [f, E] = N(
    o || !1
  ), [g, v] = N(s || !1), [y, k] = N(null), [C, A] = N(
    d || null
  ), D = F(), [P, w] = N(u || null);
  return /* @__PURE__ */ e.createElement(
    M.Provider,
    {
      value: {
        searchResultItems: m,
        setSearchResultItems: p,
        searchQuery: l,
        setSearchQuery: h,
        searchParams: b,
        setSearchParams: _,
        searchFetching: f,
        setSearchFetching: E,
        searchError: g,
        setSearchError: v,
        activeTheme: y,
        setActiveTheme: k,
        searchPreviewId: C,
        setSearchPreviewId: A,
        searchPreviewRef: D,
        pagination: P,
        setPagination: w
      }
    },
    a
  );
}
K.propTypes = {
  children: t.node.isRequired,
  searchResultItems: t.array,
  searchQuery: t.string,
  searchParams: t.object,
  searchFetching: t.bool,
  searchError: t.oneOfType([t.string, t.bool]),
  searchPreviewId: t.number,
  pagination: t.object
};
M.Provider.propTypes = {
  value: t.shape({
    searchResultItems: t.array,
    setSearchResultItems: t.func,
    searchQuery: t.string,
    setSearchQuery: t.func,
    searchParams: t.object,
    setSearchParams: t.func,
    searchFetching: t.bool,
    setSearchFetching: t.func,
    searchError: t.oneOfType([t.string, t.bool]),
    setSearchError: t.func,
    activeTheme: t.string,
    setActiveTheme: t.func,
    searchPreviewId: t.number,
    setSearchPreviewId: t.func,
    searchPreviewRef: t.object,
    pagination: t.object,
    setPagination: t.func
  }),
  children: t.node.isRequired
};
const H = (i) => {
  const [a, n] = N(null), {
    setSearchError: r,
    setSearchFetching: c,
    setSearchResultItems: o,
    setPagination: s
  } = T(M), { dataSelector: d = "data", paginationSelector: u = "pagination" } = i || {}, m = () => {
    o(null), s(null), c(!1), r(null), n(null);
  }, p = async (l) => {
    c(!0);
    const h = new AbortController();
    n(h);
    try {
      const _ = await (await fetch(l, { signal: h.signal })).json();
      o(d ? _[d] : _), s(u ? _[u] : {}), r(null), c(!1);
    } catch (b) {
      if (b.name === "AbortError") {
        m();
        return;
      }
      r("Error fetching results"), c(!1);
    }
  };
  return S(() => {
    const l = a;
    return () => {
      l && l.abort();
    };
  }, [a]), { fetchData: p, resetState: m };
};
function J(i) {
  const { searchQuery: a, setSearchQuery: n, setSearchResultItems: r, setActiveTheme: c } = T(M), [o, s] = N(!0), { fetchData: d } = H(), { hideFromTours: u } = i, m = (h) => {
    R(document, "gtm:push", {
      event: "mmt_keyword_search",
      keyword: a
    }), d(
      L({ keywords: a, page: 1 }, u)
    ), c(null), h.preventDefault();
  }, p = F(null), l = O("m-search-bar aic-ct-search", {
    "s-autocomplete-active": a
  });
  return S(() => {
    o && (s(!1), d(L({ keywords: "", page: 1 }, u)));
  }, [d, o, s, u]), /* @__PURE__ */ e.createElement(
    "form",
    {
      id: "aic-ct-search",
      role: "search",
      "aria-label": "Objects for your tour",
      onSubmit: m,
      className: l
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
        onChange: (h) => {
          n(h.target.value);
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
          n(""), r(null), c(null), d(
            L({ keywords: "", page: 1 }, u)
          ), p.current.focus();
        }
      },
      /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--close" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close" }))
    ))
  );
}
J.propTypes = {
  hideFromTours: t.array
};
function X(i) {
  const { id: a, label: n, thumbnailId: r, searchParams: c, hideFromTours: o } = i, { iiifBaseUrl: s } = T(I), { setSearchParams: d, setSearchQuery: u, activeTheme: m, setActiveTheme: p } = T(M), { fetchData: l } = H(), h = () => {
    m === n ? (p(null), d(null), l(L({ keywords: "", page: 1 }, o))) : (R(document, "gtm:push", {
      event: "mmt_quickfilter",
      mmt_filterTitle: n
    }), l(L(c, o)), d(c), p(n), u(""));
  }, b = O(
    "aic-ct-theme-toggle tag tag--senary tag--w-image",
    {
      "f-tag": m !== n,
      "f-tag-2": m === n,
      "aic-ct-theme-toggle--active": m === n
    }
  );
  return /* @__PURE__ */ e.createElement(e.Fragment, null, (m === null || m === n) && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: b,
      id: `aic-ct-theme-toggle-${a}`,
      onClick: h,
      "aria-pressed": m === n ? "true" : "false"
    },
    /* @__PURE__ */ e.createElement("span", { className: "aic-ct-theme-toggle__wrapper" }, /* @__PURE__ */ e.createElement(
      "img",
      {
        src: x(s, r, "40", "40", "square"),
        alt: ""
      }
    ), n, m === n && /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--close" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close" })))
  )));
}
X.propTypes = {
  id: t.number.isRequired,
  label: t.string.isRequired,
  thumbnailId: t.string.isRequired,
  searchParams: t.object.isRequired,
  hideFromTours: t.array
};
function Z(i) {
  const { hideFromTours: a } = i, n = [
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
  return /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-themes", className: "aic-ct-themes" }, n.map((r, c) => /* @__PURE__ */ e.createElement(
    X,
    {
      key: r.label,
      id: c,
      label: r.label,
      thumbnailId: r.thumbnailId,
      searchParams: r.searchParams,
      hideFromTours: a
    }
  )));
}
Z.propTypes = {
  hideFromTours: t.array
};
function ee(i) {
  const { setSearchPreviewId: a, searchPreviewRef: n } = T(M), { iiifBaseUrl: r, setScrollY: c, tourItems: o } = T(I), { itemData: s } = i, d = o.some((h) => h.id === s.id), u = F(null), m = F(), p = () => {
    const h = document.documentElement.scrollTop;
    R(document, "gtm:push", {
      event: "mmt_artwork_modal",
      artworkTitle: s.title
    }), a(s.id), c(h), n.current.showModal(), setTimeout(() => {
      document.documentElement.classList.add(
        "s-body-locked",
        "s-body-locked--ct"
      ), document.body.scrollTop = h;
    }, 0);
  }, l = O(
    "aic-ct-result o-pinboard__item m-listing m-listing--variable-height",
    {
      "aic-ct-result--selected": d
    }
  );
  return S(() => {
    var h;
    (h = m == null ? void 0 : m.current) != null && h.includes("s-positioned") && u.current.classList.add("s-positioned"), m.current = u.current.className;
  }), /* @__PURE__ */ e.createElement(
    "li",
    {
      ref: u,
      id: `aic-ct-search-item-${s.id}`,
      className: l
    },
    s.image_id && /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "aic-ct-result__button",
        type: "button",
        onClick: p,
        "aria-describedby": d ? "aic-ct-search__in-your-tour" : void 0
      },
      /* @__PURE__ */ e.createElement("span", { className: "m-listing__link" }, /* @__PURE__ */ e.createElement("span", { className: "m-listing__img m-listing__img--no-bg" }, d && /* @__PURE__ */ e.createElement("span", { className: "aic-ct-selected-marker" }, /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--check" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--check" }))), /* @__PURE__ */ e.createElement(
        "img",
        {
          src: s.thumbnail.lqip,
          alt: "",
          height: s.thumbnail.height,
          width: s.thumbnail.width,
          "data-iiif-id": `${r}/${s.image_id}`,
          "data-pin-media": x(
            r,
            s.image_id,
            "600",
            void 0,
            void 0,
            !1
          ),
          sizes: "(min-width: 1640px) 336px, (min-width: 1200px) 20.31vw, (min-width: 900px) 28.13vw, (min-width: 600px) 43.75vw,  43.75vw",
          "data-srcset": `${x(
            r,
            s.image_id,
            Math.min(s.thumbnail.width, 200),
            void 0,
            void 0,
            !1
          )} 200w, ${x(
            r,
            s.image_id,
            Math.min(s.thumbnail.width, 400),
            void 0,
            void 0,
            !1
          )} 400w, ${x(
            r,
            s.image_id,
            Math.min(s.thumbnail.width, 843),
            void 0,
            void 0,
            !1
          )} 843w, ${x(
            r,
            s.image_id,
            Math.min(s.thumbnail.width, 1686),
            void 0,
            void 0,
            !1
          )} 1686w`
        }
      )), /* @__PURE__ */ e.createElement(
        "span",
        {
          id: `aic-ct-result__meta-${s.id}`,
          className: "m-listing__meta"
        },
        s.title && /* @__PURE__ */ e.createElement("span", { className: "title f-list-7" }, s.title),
        s.artist_title && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement("span", { className: "subtitle f-tertiary" }, s.artist_title))
      ))
    )
  );
}
ee.propTypes = {
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
function te({ page: i, is_current_page: a, goToPage: n }) {
  const r = () => {
    a || n(i);
  };
  return /* @__PURE__ */ e.createElement("li", { className: a ? "s-active" : "" }, /* @__PURE__ */ e.createElement("a", { className: "m-paginator__page f-buttons", onClick: r }, i));
}
te.propTypes = {
  page: t.number,
  is_current_page: t.bool,
  goToPage: t.func
};
function ae({ goToPage: i }) {
  const { pagination: r } = T(M), c = () => {
    d() && i(r.current_page + 1);
  }, o = () => {
    u() || i(r.current_page - 1);
  }, s = () => (r == null ? void 0 : r.total_pages) > 1, d = () => r.total_pages > r.current_page, u = () => r.current_page <= 1, m = () => ({
    first: q(1, r.total_pages),
    slider: null,
    last: null
  }), p = () => {
    let y = 7;
    return s() ? r.current_page <= y ? l(y) : r.current_page > r.total_pages - y ? h(y) : b() : { first: null, slider: null, last: null };
  }, l = (y) => {
    let k = y + 3;
    return {
      first: q(1, k),
      slider: null,
      last: E()
    };
  }, h = (y) => {
    let k = y + 2;
    return {
      first: f(),
      slider: null,
      last: q(
        r.total_pages - k,
        r.total_pages
      )
    };
  }, b = () => ({
    first: f(),
    slider: _(),
    last: E()
  }), _ = () => q(
    r.current_page - 3,
    r.current_page + 3
  ), f = () => q(1, 2), E = () => q(r.total_pages - 1, r.total_pages);
  let g = (r == null ? void 0 : r.total_pages) < 3 * 2 + 8 ? m() : p(), v = [
    g.first,
    Array.isArray(g.slider) ? ["..."] : null,
    g.slider,
    Array.isArray(g.last) ? ["..."] : null,
    g.last
  ].filter((y) => y);
  return /* @__PURE__ */ e.createElement(e.Fragment, null, s() && /* @__PURE__ */ e.createElement("nav", { className: "m-paginator" }, /* @__PURE__ */ e.createElement("ul", { className: "m-paginator__prev-next" }, /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement(
    "a",
    {
      className: "m-paginator__next f-buttons",
      onClick: c
    },
    "Next"
  )), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement(
    "a",
    {
      className: "m-paginator__prev f-buttons",
      onClick: o
    },
    "Previous"
  ))), /* @__PURE__ */ e.createElement("ul", { className: "m-paginator__pages" }, v.map(
    (y) => y.map((k, C) => /* @__PURE__ */ e.createElement(e.Fragment, { key: C }, typeof k == "number" && k * 60 <= 1e4 && /* @__PURE__ */ e.createElement(
      te,
      {
        page: k,
        is_current_page: k === r.current_page,
        goToPage: i
      }
    ), typeof k == "string" && // Ellipses
    /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("span", { className: "f-buttons" }, "…"))))
  )), /* @__PURE__ */ e.createElement("p", { className: "m-paginator__current-page" }, "Page ", r.current_page)));
}
ae.propTypes = {
  goToPage: t.func
};
function Ie() {
  const { searchPreviewId: i, searchResultItems: a, searchPreviewRef: n } = T(M), { iiifBaseUrl: r, tourItems: c, tourItemsDispatch: o, limits: s } = T(I), [d, u] = N(!1), [m, p] = N(null), l = O({
    "aic-ct-preview__content": !0,
    "aic-ct-preview--loading": !m,
    "aic-ct-preview__content-warning": c.length >= 6
  });
  S(() => {
    p(
      a.find((_) => _.id === i)
    );
  }, [i, a]);
  const h = () => {
    var _;
    o({
      type: d ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: m
    }), R(document, "gtm:push", {
      event: d ? "mmt_remove_artwork" : "mmt_add_artwork",
      artworkTitle: m.title
    }), (_ = n == null ? void 0 : n.current) == null || _.close();
  }, b = () => {
    var _;
    (_ = n == null ? void 0 : n.current) == null || _.close();
  };
  return S(() => {
    m && u(c.find((_) => _.id === m.id));
  }, [c, m]), c.length < 6 || d ? /* @__PURE__ */ e.createElement("div", { className: l, id: "aic-ct-preview__content" }, m ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__header aic-ct-preview__core" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-preview__close",
      className: "btn btn--icon btn--transparent aic-ct-preview__close",
      type: "button",
      "aria-label": "Close",
      onClick: b
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" }))
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__image" }, /* @__PURE__ */ e.createElement(
    "img",
    {
      src: x(r, m.image_id, 680, 680),
      width: m.thumbnail.width,
      height: m.thumbnail.height,
      alt: m.thumbnail.alt_text || ""
    }
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__core" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__details" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__title f-headline-editorial" }, m.title, m.date_display && /* @__PURE__ */ e.createElement(e.Fragment, null, ",", " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-preview__date f-list-4" }, m.date_display))), m.artist_title && /* @__PURE__ */ e.createElement("p", { className: "aic-ct-preview__artist f-subheading-1" }, m.artist_title)), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__links" }, c.length < 6 || d ? /* @__PURE__ */ e.createElement(
    "button",
    {
      id: `aic-ct-preview__action-button-${m.id}`,
      className: "btn btn--my-museum-tour f-buttons aic-ct-preview__action-button",
      type: "button",
      onClick: h,
      "aria-pressed": d ? "true" : "false",
      "aria-label": "Toggle from your tour"
    },
    d ? "Remove from Your Tour" : "Add to Your Tour"
  ) : /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You have already added ", s.items.max, " artworks, the maximum number allowed. Please remove one if you would like to choose a different work.")), (m.short_description || m.description) && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__description" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__description-title f-module-title-2" }, "Artwork description"), /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "f-body",
      dangerouslySetInnerHTML: {
        __html: m.short_description ? m.short_description : m.description
      }
    }
  ), /* @__PURE__ */ e.createElement(
    "a",
    {
      className: "aic-ct-preview__learn-more f-link",
      target: "_blank",
      rel: "noopener noreferrer",
      href: `https://www.artic.edu/artworks/${m.id}`
    },
    "Learn more ",
    /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--new-window" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--new-window" }))
  )), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn--transparent btn--w-icon f-buttons aic-ct-preview__close-trans",
      type: "button",
      onClick: b
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" })),
    "Close and go back to results"
  ))) : /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__core aic-ct-loader f-body" }, /* @__PURE__ */ e.createElement("p", null, "Loading..."), /* @__PURE__ */ e.createElement("div", { className: "loader" }))) : /* @__PURE__ */ e.createElement("div", { className: l, id: "aic-ct-preview__content" }, /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__header aic-ct-preview__core" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-preview__close",
      className: "btn btn--icon btn--transparent aic-ct-preview__close",
      type: "button",
      "aria-label": "Close",
      onClick: b
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" }))
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__body aic-ct-preview__core" }, /* @__PURE__ */ e.createElement("svg", { className: "icon--max-artworks" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--max-artworks" })), /* @__PURE__ */ e.createElement("p", { className: "f-list-6" }, "You have already added ", s.items.max, " artworks, the maximum number allowed."), /* @__PURE__ */ e.createElement("p", { className: "f-list-6" }, "Please remove one if you would like to choose a different work.")), /* @__PURE__ */ e.createElement("br", null)));
}
function re({ hideFromTours: i }) {
  const {
    searchError: a,
    searchFetching: n,
    searchResultItems: r,
    searchPreviewRef: c,
    setSearchPreviewId: o,
    activeTheme: s,
    searchParams: d,
    searchQuery: u
  } = T(M), { scrollY: m } = T(I), p = F(null), { fetchData: l } = H(), h = Y(
    (f) => {
      var E;
      (f.type === "close" || (E = c == null ? void 0 : c.current) != null && E.open && f.target === (c == null ? void 0 : c.current)) && (c.current.close(), o(null), document.documentElement.scrollTop = m, document.documentElement.classList.remove(
        "s-body-locked",
        "s-body-locked--ct"
      ));
    },
    [o, m, c]
  ), b = Y(() => {
    const f = new Event("page:updated", { bubbles: !0 });
    setTimeout(() => {
      document.dispatchEvent(f);
    }, 0);
  }, []), _ = (f) => {
    l(
      L(
        { ...{ keywords: u, page: f }, ...d },
        i
      )
    );
  };
  return S(() => {
    p.current && (r == null ? void 0 : r.length) > 0 && !n && !a && b();
  }, [
    p,
    r,
    n,
    a,
    b
  ]), S(() => {
    const f = c.current;
    return f && (f.addEventListener("close", h), f.addEventListener("click", h)), () => {
      f && (f.removeEventListener("close", h), f.removeEventListener("click", h));
    };
  }, [c, h]), !r && !n && !a ? null : /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-search-results" }, n && // Render only the loading message while fetching
  /* @__PURE__ */ e.createElement(
    "div",
    {
      id: "aic-ct-search-results__loading",
      className: "aic-ct-search-results__message aic-ct-loader f-body"
    },
    /* @__PURE__ */ e.createElement("p", null, "Loading..."),
    /* @__PURE__ */ e.createElement("div", { className: "loader" })
  ), a && // Render only the error message if there is an error
  /* @__PURE__ */ e.createElement(
    "div",
    {
      id: "aic-ct-search-results__error",
      className: "aic-ct-search-results__message f-body"
    },
    /* @__PURE__ */ e.createElement("p", null, a)
  ), (r == null ? void 0 : r.length) === 0 && !n && !a && // Render only a no results message if there are no results
  /* @__PURE__ */ e.createElement(
    "div",
    {
      id: "aic-ct-search-results__no-results",
      className: "aic-ct-search-results__message f-body"
    },
    /* @__PURE__ */ e.createElement("p", null, "Sorry, we couldn’t find any artworks matching your search. ")
  ), (r == null ? void 0 : r.length) > 0 && !n && !a && // Render the results if there are results
  /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "aic-ct-pre-result-text f-body" }, "The artworks below are currently on view and available to choose for your tour."), /* @__PURE__ */ e.createElement(
    "ul",
    {
      ref: p,
      id: "aic-ct-search-results__items",
      className: "o-pinboard o-pinboard--2-col@xsmall o-pinboard--2-col@small o-pinboard--3-col@medium o-pinboard--4-col@large o-pinboard--4-col@xlarge",
      "data-pinboard-option-layout": "o-pinboard--2-col@xsmall o-pinboard--2-col@small o-pinboard--2-col@medium o-pinboard--3-col@large o-pinboard--3-col@xlarge",
      "data-pinboard-maintain-order": "false",
      "data-behavior": "pinboard"
    },
    r.map((f) => /* @__PURE__ */ e.createElement(ee, { key: f.id, itemData: f }))
  ), /* @__PURE__ */ e.createElement(ae, { goToPage: _ }), /* @__PURE__ */ e.createElement("p", { className: "aic-ct-post-result-text f-body" }, "Looking for more artworks? Use the search field at the top of the page to see more."), /* @__PURE__ */ e.createElement(
    "dialog",
    {
      ref: c,
      id: "aic-ct-search-preview",
      onClose: h
    },
    /* @__PURE__ */ e.createElement(Ie, null)
  ))), /* @__PURE__ */ e.createElement("p", { className: "u-hide", id: "aic-ct-search__in-your-tour" }, "This object is in your tour", " "), /* @__PURE__ */ e.createElement("p", { className: "sr-only", "aria-live": "polite" }, n ? "Loading" : s ? `Showing results for ${s}` : u ? `Showing results for ${u}` : "Showing default results"));
}
re.propTypes = {
  hideFromTours: t.array
};
function $(i = {}) {
  const { initialValue: a, maxLength: n, valueSetter: r } = i, [c, o] = N(a || ""), s = F(null), d = n - c.length;
  return {
    value: c,
    onChange: (m) => {
      const { value: p } = m.target;
      s.current.ariaBusy = !0, o(p), r && r(p), s.current.ariaBusy = !1;
    },
    countRef: s,
    charsRemaining: d,
    maxLength: n,
    counterEl: /* @__PURE__ */ e.createElement("output", { ref: s }, "(", d, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")
  };
}
function ne(i) {
  var f;
  const { itemData: a, itemIndex: n, setShouldAssignFocus: r, setRemoveButtons: c } = i, { iiifBaseUrl: o, tourItems: s, tourItemsDispatch: d, limits: u } = T(I), m = F(null);
  let p = F(!1);
  const l = (E) => {
    let g = s.reduce((v, y) => (y == null ? void 0 : y.objectNote.length) > 0 || v, !1);
    p.current == (E === "") && !g && (p.current = !p.current, R(document, "gtm:push", {
      event: "mmt_artwork_note",
      fieldPopulated: p.current
    }));
  }, h = $({
    initialValue: (f = s[n]) == null ? void 0 : f.objectNote,
    maxLength: u.objectNote,
    valueSetter: l
  }), b = B(
    () => ({
      id: a.id,
      objectNote: h.value
    }),
    [a.id, h.value]
  ), _ = () => {
    d({
      type: "REMOVE_ITEM",
      payload: a
    }), R(document, "gtm:push", {
      event: "mmt_remove_artwork",
      artworkTitle: a.title
    });
  };
  return S(() => {
    d({
      type: "UPDATE_NOTE",
      payload: b
    });
  }, [b, d]), S(() => {
    const E = m.current;
    return () => {
      document.activeElement === E && (s.length > 1 ? s.find((g, v) => {
        g.id === a.id && r({
          flag: !0,
          id: s[v !== s.length - 1 ? v + 1 : v - 1].id
        });
      }) : r({
        flag: !0,
        id: null
      }));
    };
  }, [s, a.id, r]), S(() => (c((E) => [...E, { id: a.id, ref: m }]), () => {
    c(
      (E) => E.filter((g) => g.id !== a.id)
    );
  }), [c, s, a.id]), /* @__PURE__ */ e.createElement(
    "li",
    {
      className: "aic-ct-tour-item aic-ct__core",
      id: `aic-ct-tour-item-${a.id}`
    },
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour-item__lockup" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour-item__info" }, a.title && /* @__PURE__ */ e.createElement("h2", { className: "aic-ct-tour-item__title f-deck" }, a.title, a.date_display && /* @__PURE__ */ e.createElement(e.Fragment, null, ", ", a.date_display)), a.artist_title && /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-tour-item__artist f-body" }, a.artist_title), a.gallery_title && /* @__PURE__ */ e.createElement("p", { className: "aic-ct-tour-item__gallery f-secondary" }, a.gallery_title)), a.image_id && /* @__PURE__ */ e.createElement(
      "img",
      {
        className: "aic-ct-tour-item__image",
        src: x(
          o,
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
        ref: m,
        type: "button",
        onClick: () => {
          _(a.id);
        }
      },
      /* @__PURE__ */ e.createElement("svg", { className: "icon--delete", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--delete" })),
      "Remove from tour"
    )
  );
}
ne.propTypes = {
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
function Fe() {
  const { tourItems: i, headerNextButtonRef: a, setActiveNavPage: n, limits: r } = T(I), [c, o] = N({
    flag: !1,
    id: null
  }), [s, d] = N([]), u = F(null), m = () => {
    n(0), a.current.focus();
  }, p = () => {
    n(2), a.current.focus();
  };
  return S(() => {
    c.flag && (!i.length && (u != null && u.current) ? u.current.focus() : s.find((l) => l.id === c.id).ref.current.focus(), o(!1));
  }, [i, c, s, u]), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour" }, i.length > 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement("header", { className: "aic-ct-section-header f-body" }, /* @__PURE__ */ e.createElement("h2", { id: "aic-ct-tour__heading", className: "f-module-title-2" }, "Artworks in your tour")), /* @__PURE__ */ e.createElement("div", { className: "f-body aic-ct-tour__intro" }, /* @__PURE__ */ e.createElement("p", null, "Your artworks are listed below in the order that you selected them. Your final tour will have them ordered based on their location in the galleries to give you the easiest tour path."), i.length === 6 && /* @__PURE__ */ e.createElement("p", null, /* @__PURE__ */ e.createElement("br", null), "You've added 6 artworks, the maximum number allowed. You may remove one if you would like to choose a different work."))), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-tour__results" }, i.map((l, h) => /* @__PURE__ */ e.createElement(
    ne,
    {
      key: l.id,
      setRemoveButtons: d,
      itemData: l,
      itemIndex: h,
      shouldAssignFocus: c,
      setShouldAssignFocus: o
    }
  )))), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta aic-ct-full-bleed" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-wrapper aic-ct-full-bleed__core" }, i.length > 0 && i.length < 6 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You've added ", i.length, " of the maximum", " ", r.items.max, " artworks."), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: u,
      id: "aic-ct-tour__cta-browse",
      type: "button",
      className: "f-buttons btn btn--secondary",
      onClick: m
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
  ))), i.length === 6 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You've added ", i.length, " artworks, the maximum number allowed. Please remove one if you would like to choose a different work."), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "f-buttons btn btn--my-museum-tour",
      onClick: p
    },
    "Finish My Tour"
  ))), i.length === 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You haven't added any artworks to your tour yet"), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: u,
      id: "aic-ct-tour__cta-browse",
      type: "button",
      className: "f-buttons btn btn--secondary",
      onClick: m
    },
    "Browse for More Artworks"
  ))))));
}
function Ae() {
  const {
    tourTitle: i,
    setTourTitle: a,
    creatorEmail: n,
    setCreatorEmail: r,
    validCreatorEmail: c,
    setValidCreatorEmail: o,
    creatorName: s,
    setCreatorName: d,
    recipientName: u,
    setRecipientName: m,
    marketingOptIn: p,
    setMarketingOptIn: l,
    tourDescription: h,
    setTourDescription: b,
    limits: _
  } = T(I);
  let f = F(!1), E = F(!1);
  const g = (w) => {
    f.current == (w === "") && (f.current = !f.current, R(document, "gtm:push", {
      event: "mmt_personalization",
      fieldPopulated: f.current
    })), d(w);
  }, v = (w) => {
    E.current == (w === "") && (E.current = !E.current, R(document, "gtm:push", {
      event: "mmt_tribute",
      fieldPopulated: E.current
    })), m(w);
  }, y = (w) => {
    f.current == (w === "") && (f.current = !f.current, R(document, "gtm:push", {
      event: "mmt_personalization",
      fieldPopulated: f.current
    })), b(w);
  }, k = (w) => {
    R(document, "gtm:push", {
      event: "mmt_email_optin",
      optInStatus: w
    }), l(w);
  }, C = $({
    initialValue: i,
    maxLength: _.title,
    valueSetter: a
  }), A = $({
    initialValue: s,
    maxLength: _.creatorName,
    valueSetter: g
  }), D = $({
    initialValue: u,
    maxLength: _.recipientName,
    valueSetter: v
  }), P = $({
    initialValue: h,
    maxLength: _.description,
    valueSetter: y
  });
  return /* @__PURE__ */ e.createElement("fieldset", { className: "m-fieldset aic-ct-fieldset" }, /* @__PURE__ */ e.createElement("ol", { className: "m-fieldset__fieldset" }, /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__title", className: "label f-secondary" }, "Tour Title ", /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true" }, " *")), /* @__PURE__ */ e.createElement("span", { className: "input" }, /* @__PURE__ */ e.createElement("span", { className: "input__io-container" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      className: "f-secondary",
      type: "text",
      onChange: C.onChange,
      value: C.value,
      id: "aic-ct-metadata__title",
      maxLength: C.maxLength,
      "aria-required": "true",
      "aria-invalid": C.value ? "false" : "true",
      "aria-describedby": C.value ? null : "aic-ct-metadata__invalid-title",
      required: !0
    }
  ), C.counterEl), !C.value && /* @__PURE__ */ e.createElement(
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
      value: A.value,
      onChange: A.onChange,
      id: "aic-ct-metadata__creator-name",
      maxLength: A.maxLength
    }
  ), A.counterEl))), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement(
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
      value: n.value,
      onChange: (w) => {
        r(w.target.value), o(w.target.validity.valid);
      },
      id: "aic-ct-metadata__creator-email",
      "aria-required": "true",
      "aria-invalid": n.value ? "false" : "true",
      "aria-describedby": n.isValid ? null : "aic-ct-metadata__invalid-email",
      required: !0
    }
  ), !c && /* @__PURE__ */ e.createElement(
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
      onChange: P.onChange,
      rows: "5",
      value: P.value,
      maxLength: P.maxLength
    }
  ), P.counterEl))), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement("span", { className: "checkbox f-secondary" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      id: "aic-ct-metadata__opt-in",
      value: p,
      name: "aic-ct-metadata__opt-in",
      checked: p,
      onChange: (w) => {
        k(w.target.checked);
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
function Re() {
  const {
    apiSaveEndpoint: i,
    tourTitle: a,
    creatorName: n,
    creatorEmail: r,
    recipientName: c,
    marketingOptIn: o,
    validCreatorEmail: s,
    tourItems: d,
    tourDescription: u,
    validityIssues: m,
    setValidityIssues: p,
    limits: l,
    isSaving: h,
    setIsSaving: b,
    setActiveNavPage: _
  } = T(I), [f, E] = N(null), g = async () => {
    b(!0);
    try {
      const v = await fetch(`${i}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          creatorEmail: r,
          marketingOptIn: o,
          tourJson: {
            title: a,
            creatorName: n,
            recipientName: c,
            description: u,
            // "artworks" is essentially everything from the GET response with added "objectNote"
            // The API expects these fields named in this way
            artworks: d
          }
        })
      });
      if (!v.ok)
        throw new Error(
          "There was a problem saving your tour, please try again. If the problem persists, please contact us and let us know."
        );
      const { message: y, my_museum_tour: k } = await v.json();
      E({
        type: "success",
        message: y,
        id: k.id
      });
    } catch (v) {
      E({
        type: "error",
        message: v.message
      });
    }
    b(!1);
  };
  return S(() => {
    const v = [];
    a.length || v.push("A tour title"), a.length > l.title && v.push("Tour title must not exceed the character limit"), s || v.push("A valid email address"), u.length > l.description && v.push(
      "Tour description must not exceed the character limit"
    ), d.length < l.items.min && v.push("At least one artwork is required for your tour"), d.length > l.items.max && v.push("Tour must not contain more than 6 artworks"), d.some((y) => {
      var k;
      return ((k = y.objectNote) == null ? void 0 : k.length) > l.objectNote ? (v.push("Notes must not exceed the character limit"), !0) : !1;
    }), p(v);
  }, [
    a,
    u,
    d,
    p,
    l,
    s
  ]), S(() => {
    f != null && f.id && W.assign(
      `/my-museum-tour/${f.id}?tourCreationComplete=true`
    );
  }, [f]), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation" }, m.length ? /* @__PURE__ */ e.createElement(
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
      /* @__PURE__ */ e.createElement("ul", null, m.map((v, y) => /* @__PURE__ */ e.createElement("li", { className: "f-body", key: y }, v)))
    ),
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation__actions" }, /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "btn btn--secondary f-buttons",
        type: "button",
        onClick: () => {
          d.length ? _(1) : _(0);
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
    !h && !f && /* @__PURE__ */ e.createElement(
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
          onClick: g,
          disabled: h
        },
        "Yes, save my tour"
      ), /* @__PURE__ */ e.createElement(
        "button",
        {
          className: "btn btn--secondary f-buttons",
          type: "button",
          onClick: () => {
            _(1);
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
          onClick: g,
          disabled: h
        },
        "Try again"
      ))
    ))
  ));
}
const De = (i) => {
  const {
    apiSaveEndpoint: a,
    hideFromTours: n,
    tourTitle: r,
    tourDescription: c,
    tourItems: o,
    heroImageId: s
  } = i, d = "https://www.artic.edu/iiif/2", u = {
    apiSaveEndpoint: a,
    tourTitle: r,
    tourDescription: c,
    tourItems: o,
    heroImageId: s,
    iiifBaseUrl: d
  }, m = {
    hideFromTours: n
  };
  return S(() => {
    document.body.style.overflow = "unset";
  }, []), /* @__PURE__ */ e.createElement("div", { id: "my-museum-tour-builder", className: "my-museum-tour" }, /* @__PURE__ */ e.createElement(Q, { ...u }, /* @__PURE__ */ e.createElement(Se, null), /* @__PURE__ */ e.createElement(G, null, /* @__PURE__ */ e.createElement(V, { id: 0, title: "Choose Your Artworks" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-intro aic-ct-intro--keyline aic-ct__core" }, /* @__PURE__ */ e.createElement("h1", { className: "f-display-2" }, "Create your own tour"), /* @__PURE__ */ e.createElement("p", { className: "f-deck" }, "Choose up to 6 artworks for your tour by searching for a particular work or artist, browsing themes, or selecting from the list of artworks below.")), /* @__PURE__ */ e.createElement(K, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement(J, { ...m }), /* @__PURE__ */ e.createElement(Z, { ...m }), /* @__PURE__ */ e.createElement(re, { ...m })))), /* @__PURE__ */ e.createElement(V, { id: 1, title: "Personalize" }, s && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-hero aic-ct-full-bleed" }, /* @__PURE__ */ e.createElement(
    "img",
    {
      src: x(d, s, 20, 20, "full"),
      srcSet: `${x(
        d,
        s,
        480,
        480,
        "full"
      )} 320w, ${x(
        d,
        s,
        640,
        640,
        "full"
      )} 480w, ${x(
        d,
        s,
        960,
        960,
        "full"
      )} 640w, ${x(
        d,
        s,
        1280,
        1280,
        "full"
      )} 960w, ${x(
        d,
        s,
        1920,
        1920,
        "full"
      )} 1280w`,
      alt: ""
    }
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-intro aic-ct__core" }, /* @__PURE__ */ e.createElement("h1", { className: "f-display-2" }, "Personalize your tour")), /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement(Ae, null)), /* @__PURE__ */ e.createElement(Fe, null)), /* @__PURE__ */ e.createElement(V, { id: 2, title: "Finish and Share" }, /* @__PURE__ */ e.createElement(Re, null))), /* @__PURE__ */ e.createElement(Ce, null)));
};
De.propTypes = {
  apiSaveEndpoint: t.string,
  hideFromTours: t.array,
  tourTitle: t.string,
  tourDescription: t.string,
  tourItems: t.array,
  searchPreviewId: t.number,
  heroImageId: t.string
};
export {
  De as default
};
