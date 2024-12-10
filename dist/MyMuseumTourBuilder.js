import e, { createContext as U, useState as N, useReducer as ye, useRef as F, useMemo as B, useContext as T, useEffect as S, useCallback as Y } from "react";
import t from "prop-types";
const Ne = (i, r) => {
  switch (r.type) {
    case "ADD_ITEM":
      return r.payload.short_description && (r.payload.description = r.payload.short_description), delete r.payload.short_description, [...i, { ...r.payload, objectNote: "" }];
    case "UPDATE_NOTE":
      return i.map((n) => n.id === r.payload.id ? { ...n, objectNote: r.payload.objectNote } : n);
    case "REMOVE_ITEM":
      return i.filter(({ id: n }) => n !== r.payload.id);
    default:
      return i;
  }
}, I = U();
function Q(i) {
  const {
    children: r,
    tourTitle: n,
    creatorEmail: a,
    creatorName: s,
    recipientName: c,
    tourDescription: l,
    marketingOptIn: u,
    tourItems: m,
    navPages: d,
    apiSaveEndpoint: h,
    iiifBaseUrl: o
  } = i, [p, _] = N(n || ""), [b, v] = N(a || ""), [f, g] = N(!1), [E, y] = N(s || ""), [k, C] = N(c || ""), [A, O] = N(
    u || !1
  ), [P, w] = N(
    l || ""
  ), [$, ie] = N(d || []), [se, ce] = N(0), [le, oe] = ye(
    Ne,
    m || []
  ), me = F(null), ue = F(null), [de, he] = N([]), pe = h || "/api/v1/my-museum-tour", [fe, _e] = N(!1), [ge, be] = N(0), ve = B(
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
        iiifBaseUrl: o,
        limits: ve,
        tourTitle: p,
        setTourTitle: _,
        creatorEmail: b,
        setCreatorEmail: v,
        validCreatorEmail: f,
        setValidCreatorEmail: g,
        creatorName: E,
        setCreatorName: y,
        recipientName: k,
        setRecipientName: C,
        tourDescription: P,
        setTourDescription: w,
        marketingOptIn: A,
        setMarketingOptIn: O,
        tourItems: le,
        tourItemsDispatch: oe,
        navPages: $,
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
    r
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
var G = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(i) {
  (function() {
    var r = {}.hasOwnProperty;
    function n() {
      for (var a = [], s = 0; s < arguments.length; s++) {
        var c = arguments[s];
        if (c) {
          var l = typeof c;
          if (l === "string" || l === "number")
            a.push(c);
          else if (Array.isArray(c)) {
            if (c.length) {
              var u = n.apply(null, c);
              u && a.push(u);
            }
          } else if (l === "object") {
            if (c.toString !== Object.prototype.toString && !c.toString.toString().includes("[native code]")) {
              a.push(c.toString());
              continue;
            }
            for (var m in c)
              r.call(c, m) && c[m] && a.push(m);
          }
        }
      }
      return a.join(" ");
    }
    i.exports ? (n.default = n, i.exports = n) : window.classNames = n;
  })();
})(G);
var Te = G.exports;
const D = /* @__PURE__ */ ke(Te);
function x(i, r, n = "", a = "", s = "full", c = !0) {
  return `${i}/${r}/${s}/${c ? "!" : ""}${n},${a}/0/default.jpg`;
}
function q(i, r, n) {
  const a = new URL("https://api.artic.edu/api/v1/artworks/search");
  if (a.searchParams.set(
    "query[bool][should][0][bool][must][][exists][field]",
    "short_description"
  ), a.searchParams.set(
    "query[bool][should][0][bool][must][][term][is_on_view][value]",
    "true"
  ), a.searchParams.set(
    "query[bool][should][1][bool][must][][term][is_on_view]",
    "true"
  ), a.searchParams.set(
    "query[bool][should][1][bool][must][][exists][field]",
    "description"
  ), a.searchParams.set(
    "query[bool][should][1][bool][should][][exists][field]",
    "description"
  ), a.searchParams.set(
    "query[bool][should][1][bool][should][][exists][field]",
    "subject_id"
  ), a.searchParams.set(
    "query[bool][should][1][bool][should][][exists][field]",
    "style_id"
  ), a.searchParams.set(
    "query[bool][should][1][bool][should][][term][is_boosted]",
    "true"
  ), a.searchParams.set("query[bool][minimum_should_match]", "1"), a.searchParams.set(
    "fields",
    "artist_title,short_description,description,id,image_id,thumbnail,title,date_display,gallery_title,gallery_id"
  ), a.searchParams.set("limit", "60"), typeof i.page < "u" && a.searchParams.set("page", i.page), typeof i.keywords < "u" && a.searchParams.set("q", i.keywords), r)
    for (const s of Object.values(r))
      a.searchParams.set(
        `query[bool][must_not][][term][id][value]=${s}`,
        s
      );
  if (n)
    for (const s of Object.values(n))
      a.searchParams.set(
        `query[bool][must_not][][term][gallery_id][value]=${s}`,
        s
      );
  for (const [s, c] of Object.entries(i))
    s.includes("_ids") ? a.searchParams.set(`query[bool][must][][terms][${s}][]`, c) : s.includes("_titles") && a.searchParams.set(
      `query[bool][must][][terms][${s}.keyword][]`,
      c
    );
  return a;
}
function M(i, r) {
  return Array.from(Array(r + 1 - i), (n, a) => a + i);
}
const z = {
  assign: (i) => window.location.assign(i)
};
function Pe() {
  const {
    tourItems: i,
    limits: r,
    iiifBaseUrl: n,
    setActiveNavPage: a,
    activeNavPage: s,
    headerPrevButtonRef: c
  } = T(I), l = () => {
    var u;
    (u = c == null ? void 0 : c.current) == null || u.focus(), a(1);
  };
  return /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-header__slots", className: "aic-ct-header__slots" }, Array.from({ length: r.items.max }).map((u, m) => /* @__PURE__ */ e.createElement(
    "li",
    {
      className: D("aic-ct-header__slot", {
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
        disabled: !i[m] || s === 1,
        onClick: l,
        "aria-label": `Artwork ${m + 1}, edit on customize page`
      },
      i[m] ? /* @__PURE__ */ e.createElement(
        "img",
        {
          src: x(
            n,
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
function Se() {
  const {
    limits: i,
    activeNavPage: r,
    setActiveNavPage: n,
    tourItems: a,
    headerPrevButtonRef: s,
    headerNextButtonRef: c
  } = T(I), l = a.length, u = D(
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
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-header__wrapper aic-ct-full-bleed__core" }, /* @__PURE__ */ e.createElement(
      "button",
      {
        ref: s,
        id: "aic-ct-header__back-button",
        className: u,
        type: "button",
        onClick: () => {
          r === 0 ? z.assign("/my-museum-tour") : n(r === 1 ? 0 : 1);
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
      l
    ), " ", /* @__PURE__ */ e.createElement("span", null, "artworks of ", i.items.max, " ")), /* @__PURE__ */ e.createElement(Pe, null)), /* @__PURE__ */ e.createElement(
      "button",
      {
        ref: c,
        id: "aic-ct-header__next-button",
        className: "aic-ct-header__button aic-ct-header__button--next btn btn--transparent btn--w-icon f-buttons",
        type: "button",
        onClick: () => {
          n(r === 0 ? 1 : 2);
        }
      },
      r === 0 && "Next",
      r > 0 && "Finish",
      /* @__PURE__ */ e.createElement("svg", { className: "icon--arrow", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--arrow" }))
    ))
  );
}
function Ce() {
  const { navPages: i, activeNavPage: r, setActiveNavPage: n, isSaving: a } = T(I), s = (c) => D("aic-ct-nav__button btn f-buttons btn--transparent", {
    "aic-ct-nav__button--active": r === c,
    "aic-ct-nav__button--done": r > c
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
      i.map((c, l) => /* @__PURE__ */ e.createElement(
        "button",
        {
          key: c.id,
          id: `aic-ct-nav-button-${c.id}`,
          "aria-controls": `aic-ct-nav-page-${c.id}`,
          "aria-pressed": c.id === r,
          type: "button",
          onClick: () => n(l),
          disabled: a,
          className: s(c.id)
        },
        /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__button-wrapper" }, /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__number" }, c.id + 1), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__title" }, c.title), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__tagline" }, c.tagline))
      ))
    )
  );
}
var R = function(i, r, n) {
  var a = document.createEvent("HTMLEvents");
  a.initEvent(r, !0, !0), a.data = n || {}, a.eventName = r, i.dispatchEvent(a);
}, xe = { exports: {} };
(function(i, r) {
  (function(n, a) {
    i.exports = a();
  })(we, function() {
    var n = "AxmTYklsjo190QW", a = "sans-serif", s = "serif", c = {
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
    }, l = [
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
    ], u = '<div style="%s" aria-hidden="true">' + n + "</div>", m = function() {
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
      var h = /* @__PURE__ */ new Date(), o = this, p = o.serif, _ = o.sansSerif, b = o.parent, v = o.appended, f, g = o.options, E = g.reference;
      function y(P) {
        return l.concat(["font-weight:" + g.weight, "font-style:" + g.style]).concat("font-family:" + P).join(";");
      }
      var k = u.replace(/\%s/, y(a)), C = u.replace(/\%s/, y(s));
      b || (b = o.parent = g.window.document.createElement("div")), b.innerHTML = k + C, _ = o.sansSerif = b.firstChild, p = o.serif = _.nextSibling, g.glyphs && (_.innerHTML += g.glyphs, p.innerHTML += g.glyphs);
      function A(P, w, $) {
        return Math.abs(P.width - w.offsetWidth) > $ || Math.abs(P.height - w.offsetHeight) > $;
      }
      function O() {
        return (/* @__PURE__ */ new Date()).getTime() - h.getTime() > g.timeout;
      }
      (function P() {
        E || (E = g.window.document.body), !v && E && (E.appendChild(b), v = o.appended = !0, f = o.getMeasurements(), _.style.fontFamily = o.fontFamily + ", " + a, p.style.fontFamily = o.fontFamily + ", " + s), v && f && (A(f.sansSerif, _, g.tolerance) || A(f.serif, p, g.tolerance)) ? g.success() : O() ? g.error() : !v && "requestAnimationFrame" in g.window ? g.window.requestAnimationFrame(P) : g.window.setTimeout(P, g.delay);
      })();
    }, m.prototype.cleanFamilyName = function(h) {
      return h.replace(/[\'\"]/g, "").toLowerCase();
    }, m.prototype.cleanWeight = function(h) {
      var o = {
        normal: "400",
        bold: "700"
      };
      return "" + (o[h] || h);
    }, m.prototype.checkFontFaces = function(h) {
      var o = this;
      o.options.window.document.fonts.forEach(function(p) {
        o.cleanFamilyName(p.family) === o.cleanFamilyName(o.fontFamily) && o.cleanWeight(p.weight) === o.cleanWeight(o.options.weight) && p.style === o.options.style && p.load().then(function() {
          o.options.success(p), o.options.window.clearTimeout(h);
        });
      });
    }, m.prototype.init = function(h, o) {
      var p;
      for (var _ in c)
        o.hasOwnProperty(_) || (o[_] = c[_]);
      this.options = o, this.fontFamily = h, !o.glyphs && "fonts" in o.window.document ? (o.timeout && (p = o.window.setTimeout(function() {
        o.error();
      }, o.timeout)), this.checkFontFaces(p)) : this.load();
    };
    var d = function(h, o) {
      var p = new m();
      return p.init(h, o), p;
    };
    return d;
  });
})(xe);
function W({ children: i }) {
  var c, l, u;
  const { activeNavPage: r, navPages: n, setNavPages: a, navPageEvents: s } = T(I);
  return S(() => {
    R(document, "gtm:push", {
      event: s[r],
      count: 1
    }), a(
      i ? i.map((m, d) => ({
        id: d,
        title: m.props.title,
        tagline: m.props.tagline
      })) : []
    );
  }, [i, a, r, s]), S(() => {
    var m;
    (m = document.querySelector("#my-museum-tour-builder")) == null || m.scrollIntoView();
  }, [r]), /* @__PURE__ */ e.createElement("div", { id: "aic-ct-nav-pages" }, /* @__PURE__ */ e.createElement("div", { className: "sr-only", "aria-live": "polite" }, "Step ", ((c = n[r]) == null ? void 0 : c.id) + 1, " ", (l = n[r]) == null ? void 0 : l.title, " ", (u = n[r]) == null ? void 0 : u.tagline), i);
}
W.propTypes = {
  children: t.node.isRequired
};
function V(i) {
  const { id: r, children: n } = i, { activeNavPage: a } = T(I);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      tabIndex: "0",
      id: `aic-ct-nav-page-${r}`,
      "aria-labelledby": `aic-ct-nav-button-${r}`,
      "aria-hidden": a !== r,
      style: a !== r ? { display: "none" } : {}
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
const j = U();
function K(i) {
  const {
    children: r,
    searchResultItems: n,
    searchQuery: a,
    searchParams: s,
    searchFetching: c,
    searchError: l,
    searchPreviewId: u,
    pagination: m
  } = i, [d, h] = N(
    n || null
  ), [o, p] = N(a || ""), [_, b] = N(s || null), [v, f] = N(
    c || !1
  ), [g, E] = N(l || !1), [y, k] = N(null), [C, A] = N(
    u || null
  ), O = F(), [P, w] = N(m || null);
  return /* @__PURE__ */ e.createElement(
    j.Provider,
    {
      value: {
        searchResultItems: d,
        setSearchResultItems: h,
        searchQuery: o,
        setSearchQuery: p,
        searchParams: _,
        setSearchParams: b,
        searchFetching: v,
        setSearchFetching: f,
        searchError: g,
        setSearchError: E,
        activeTheme: y,
        setActiveTheme: k,
        searchPreviewId: C,
        setSearchPreviewId: A,
        searchPreviewRef: O,
        pagination: P,
        setPagination: w
      }
    },
    r
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
j.Provider.propTypes = {
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
  const [r, n] = N(null), {
    setSearchError: a,
    setSearchFetching: s,
    setSearchResultItems: c,
    setPagination: l
  } = T(j), { dataSelector: u = "data", paginationSelector: m = "pagination" } = i || {}, d = () => {
    c(null), l(null), s(!1), a(null), n(null);
  }, h = async (o) => {
    s(!0);
    const p = new AbortController();
    n(p);
    try {
      const b = await (await fetch(o, { signal: p.signal })).json();
      c(u ? b[u] : b), l(m ? b[m] : {}), a(null), s(!1);
    } catch (_) {
      if (_.name === "AbortError") {
        d();
        return;
      }
      a("Error fetching results"), s(!1);
    }
  };
  return S(() => {
    const o = r;
    return () => {
      o && o.abort();
    };
  }, [r]), { fetchData: h, resetState: d };
};
function J(i) {
  const { searchQuery: r, setSearchQuery: n, setSearchResultItems: a, setActiveTheme: s } = T(j), [c, l] = N(!0), { fetchData: u } = H(), { hideObjectsFromTours: m, hideGalleriesFromTours: d } = i, h = (_) => {
    R(document, "gtm:push", {
      event: "mmt_keyword_search",
      keyword: r
    }), u(
      q({ keywords: r, page: 1 }, m, d)
    ), s(null), _.preventDefault();
  }, o = F(null), p = D("m-search-bar aic-ct-search", {
    "s-autocomplete-active": r
  });
  return S(() => {
    c && (l(!1), u(q({ keywords: "", page: 1 }, m, d)));
  }, [u, c, l, m, d]), /* @__PURE__ */ e.createElement(
    "form",
    {
      id: "aic-ct-search",
      role: "search",
      "aria-label": "Objects for your tour",
      onSubmit: h,
      className: p
    },
    /* @__PURE__ */ e.createElement("div", { className: "m-search-bar__inner" }, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-search__input", className: "sr-only" }, "Search the collection"), /* @__PURE__ */ e.createElement(
      "input",
      {
        id: "aic-ct-search__input",
        className: "f-secondary",
        type: "text",
        placeholder: "Search by keyword, artist, or title",
        value: r,
        autoComplete: "off",
        onChange: (_) => {
          n(_.target.value);
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
        ref: o
      },
      /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--search--24" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--search--24" }))
    ), /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "m-search-bar__clear",
        "aria-label": "Clear search",
        type: "reset",
        onClick: () => {
          n(""), a(null), s(null), u(
            q({ keywords: "", page: 1 }, m, d)
          ), o.current.focus();
        }
      },
      /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--close" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close" }))
    ))
  );
}
J.propTypes = {
  hideObjectsFromTours: t.array,
  hideGalleriesFromTours: t.array
};
function X(i) {
  const { id: r, label: n, thumbnailId: a, searchParams: s, hideObjectsFromTours: c, hideGalleriesFromTours: l } = i, { iiifBaseUrl: u } = T(I), { setSearchParams: m, setSearchQuery: d, activeTheme: h, setActiveTheme: o } = T(j), { fetchData: p } = H(), _ = () => {
    h === n ? (o(null), m(null), p(q({ keywords: "", page: 1 }, c, l))) : (R(document, "gtm:push", {
      event: "mmt_quickfilter",
      mmt_filterTitle: n
    }), p(q(s, c, l)), m(s), o(n), d(""));
  }, b = D(
    "aic-ct-theme-toggle tag tag--senary tag--w-image",
    {
      "f-tag": h !== n,
      "f-tag-2": h === n,
      "aic-ct-theme-toggle--active": h === n
    }
  );
  return /* @__PURE__ */ e.createElement(e.Fragment, null, (h === null || h === n) && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: b,
      id: `aic-ct-theme-toggle-${r}`,
      onClick: _,
      "aria-pressed": h === n ? "true" : "false"
    },
    /* @__PURE__ */ e.createElement("span", { className: "aic-ct-theme-toggle__wrapper" }, /* @__PURE__ */ e.createElement(
      "img",
      {
        src: x(u, a, "40", "40", "square"),
        alt: ""
      }
    ), n, h === n && /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--close" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close" })))
  )));
}
X.propTypes = {
  id: t.number.isRequired,
  label: t.string.isRequired,
  thumbnailId: t.string.isRequired,
  searchParams: t.object.isRequired,
  hideObjectsFromTours: t.array,
  hideGalleriesFromTours: t.array
};
function Z(i) {
  const { hideObjectsFromTours: r, hideGalleriesFromTours: n } = i, a = [
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
  return /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-themes", className: "aic-ct-themes" }, a.map((s, c) => /* @__PURE__ */ e.createElement(
    X,
    {
      key: s.label,
      id: c,
      label: s.label,
      thumbnailId: s.thumbnailId,
      searchParams: s.searchParams,
      hideObjectsFromTours: r,
      hideGalleriesFromTours: n
    }
  )));
}
Z.propTypes = {
  hideObjectsFromTours: t.array,
  hideGalleriesFromTours: t.array
};
function ee(i) {
  const { setSearchPreviewId: r, searchPreviewRef: n } = T(j), { iiifBaseUrl: a, setScrollY: s, tourItems: c } = T(I), { itemData: l } = i, u = c.some((p) => p.id === l.id), m = F(null), d = F(), h = () => {
    const p = document.documentElement.scrollTop;
    R(document, "gtm:push", {
      event: "mmt_artwork_modal",
      artworkTitle: l.title
    }), r(l.id), s(p), n.current.showModal(), setTimeout(() => {
      document.documentElement.classList.add(
        "s-body-locked",
        "s-body-locked--ct"
      ), document.body.scrollTop = p;
    }, 0);
  }, o = D(
    "aic-ct-result o-pinboard__item m-listing m-listing--variable-height",
    {
      "aic-ct-result--selected": u
    }
  );
  return S(() => {
    var p;
    (p = d == null ? void 0 : d.current) != null && p.includes("s-positioned") && m.current.classList.add("s-positioned"), d.current = m.current.className;
  }), /* @__PURE__ */ e.createElement(
    "li",
    {
      ref: m,
      id: `aic-ct-search-item-${l.id}`,
      className: o
    },
    l.image_id && /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "aic-ct-result__button",
        type: "button",
        onClick: h,
        "aria-describedby": u ? "aic-ct-search__in-your-tour" : void 0
      },
      /* @__PURE__ */ e.createElement("span", { className: "m-listing__link" }, /* @__PURE__ */ e.createElement("span", { className: "m-listing__img m-listing__img--no-bg" }, u && /* @__PURE__ */ e.createElement("span", { className: "aic-ct-selected-marker" }, /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--check" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--check" }))), /* @__PURE__ */ e.createElement(
        "img",
        {
          src: l.thumbnail.lqip,
          alt: "",
          height: l.thumbnail.height,
          width: l.thumbnail.width,
          "data-iiif-id": `${a}/${l.image_id}`,
          "data-pin-media": x(
            a,
            l.image_id,
            "600",
            void 0,
            void 0,
            !1
          ),
          sizes: "(min-width: 1640px) 336px, (min-width: 1200px) 20.31vw, (min-width: 900px) 28.13vw, (min-width: 600px) 43.75vw,  43.75vw",
          "data-srcset": `${x(
            a,
            l.image_id,
            Math.min(l.thumbnail.width, 200),
            void 0,
            void 0,
            !1
          )} 200w, ${x(
            a,
            l.image_id,
            Math.min(l.thumbnail.width, 400),
            void 0,
            void 0,
            !1
          )} 400w, ${x(
            a,
            l.image_id,
            Math.min(l.thumbnail.width, 843),
            void 0,
            void 0,
            !1
          )} 843w, ${x(
            a,
            l.image_id,
            Math.min(l.thumbnail.width, 1686),
            void 0,
            void 0,
            !1
          )} 1686w`
        }
      )), /* @__PURE__ */ e.createElement(
        "span",
        {
          id: `aic-ct-result__meta-${l.id}`,
          className: "m-listing__meta"
        },
        l.title && /* @__PURE__ */ e.createElement("span", { className: "title f-list-7" }, l.title),
        l.artist_title && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement("span", { className: "subtitle f-tertiary" }, l.artist_title))
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
function te({ page: i, is_current_page: r, goToPage: n }) {
  const a = () => {
    r || n(i);
  };
  return /* @__PURE__ */ e.createElement("li", { className: r ? "s-active" : "" }, /* @__PURE__ */ e.createElement("a", { className: "m-paginator__page f-buttons", onClick: a }, i));
}
te.propTypes = {
  page: t.number,
  is_current_page: t.bool,
  goToPage: t.func
};
function ae({ goToPage: i }) {
  const { pagination: a } = T(j), s = () => {
    u() && i(a.current_page + 1);
  }, c = () => {
    m() || i(a.current_page - 1);
  }, l = () => (a == null ? void 0 : a.total_pages) > 1, u = () => a.total_pages > a.current_page, m = () => a.current_page <= 1, d = () => ({
    first: M(1, a.total_pages),
    slider: null,
    last: null
  }), h = () => {
    let y = 7;
    return l() ? a.current_page <= y ? o(y) : a.current_page > a.total_pages - y ? p(y) : _() : { first: null, slider: null, last: null };
  }, o = (y) => {
    let k = y + 3;
    return {
      first: M(1, k),
      slider: null,
      last: f()
    };
  }, p = (y) => {
    let k = y + 2;
    return {
      first: v(),
      slider: null,
      last: M(
        a.total_pages - k,
        a.total_pages
      )
    };
  }, _ = () => ({
    first: v(),
    slider: b(),
    last: f()
  }), b = () => M(
    a.current_page - 3,
    a.current_page + 3
  ), v = () => M(1, 2), f = () => M(a.total_pages - 1, a.total_pages);
  let g = (a == null ? void 0 : a.total_pages) < 3 * 2 + 8 ? d() : h(), E = [
    g.first,
    Array.isArray(g.slider) ? ["..."] : null,
    g.slider,
    Array.isArray(g.last) ? ["..."] : null,
    g.last
  ].filter((y) => y);
  return /* @__PURE__ */ e.createElement(e.Fragment, null, l() && /* @__PURE__ */ e.createElement("nav", { className: "m-paginator" }, /* @__PURE__ */ e.createElement("ul", { className: "m-paginator__prev-next" }, /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement(
    "a",
    {
      className: "m-paginator__next f-buttons",
      onClick: s
    },
    "Next"
  )), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement(
    "a",
    {
      className: "m-paginator__prev f-buttons",
      onClick: c
    },
    "Previous"
  ))), /* @__PURE__ */ e.createElement("ul", { className: "m-paginator__pages" }, E.map(
    (y) => y.map((k, C) => /* @__PURE__ */ e.createElement(e.Fragment, { key: C }, typeof k == "number" && k * 60 <= 1e4 && /* @__PURE__ */ e.createElement(
      te,
      {
        page: k,
        is_current_page: k === a.current_page,
        goToPage: i
      }
    ), typeof k == "string" && // Ellipses
    /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("span", { className: "f-buttons" }, "…"))))
  )), /* @__PURE__ */ e.createElement("p", { className: "m-paginator__current-page" }, "Page ", a.current_page)));
}
ae.propTypes = {
  goToPage: t.func
};
function Ie() {
  const { searchPreviewId: i, searchResultItems: r, searchPreviewRef: n } = T(j), { iiifBaseUrl: a, tourItems: s, tourItemsDispatch: c, limits: l } = T(I), [u, m] = N(!1), [d, h] = N(null), o = D({
    "aic-ct-preview__content": !0,
    "aic-ct-preview--loading": !d,
    "aic-ct-preview__content-warning": s.length >= 6
  });
  S(() => {
    h(
      r.find((b) => b.id === i)
    );
  }, [i, r]);
  const p = () => {
    var b;
    c({
      type: u ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: d
    }), R(document, "gtm:push", {
      event: u ? "mmt_remove_artwork" : "mmt_add_artwork",
      artworkTitle: d.title
    }), (b = n == null ? void 0 : n.current) == null || b.close();
  }, _ = () => {
    var b;
    (b = n == null ? void 0 : n.current) == null || b.close();
  };
  return S(() => {
    d && m(s.find((b) => b.id === d.id));
  }, [s, d]), s.length < 6 || u ? /* @__PURE__ */ e.createElement("div", { className: o, id: "aic-ct-preview__content" }, d ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__header aic-ct-preview__core" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-preview__close",
      className: "btn btn--icon btn--transparent aic-ct-preview__close",
      type: "button",
      "aria-label": "Close",
      onClick: _
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" }))
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__image" }, /* @__PURE__ */ e.createElement(
    "img",
    {
      src: x(a, d.image_id, 680, 680),
      width: d.thumbnail.width,
      height: d.thumbnail.height,
      alt: d.thumbnail.alt_text || ""
    }
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__core" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__details" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__title f-headline-editorial" }, d.title, d.date_display && /* @__PURE__ */ e.createElement(e.Fragment, null, ",", " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-preview__date f-list-4" }, d.date_display))), d.artist_title && /* @__PURE__ */ e.createElement("p", { className: "aic-ct-preview__artist f-subheading-1" }, d.artist_title)), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__links" }, s.length < 6 || u ? /* @__PURE__ */ e.createElement(
    "button",
    {
      id: `aic-ct-preview__action-button-${d.id}`,
      className: "btn btn--my-museum-tour f-buttons aic-ct-preview__action-button",
      type: "button",
      onClick: p,
      "aria-pressed": u ? "true" : "false",
      "aria-label": "Toggle from your tour"
    },
    u ? "Remove from Your Tour" : "Add to Your Tour"
  ) : /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You have already added ", l.items.max, " artworks, the maximum number allowed. Please remove one if you would like to choose a different work.")), (d.short_description || d.description) && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__description" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__description-title f-module-title-2" }, "Artwork description"), /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "f-body",
      dangerouslySetInnerHTML: {
        __html: d.short_description ? d.short_description : d.description
      }
    }
  ), /* @__PURE__ */ e.createElement(
    "a",
    {
      className: "aic-ct-preview__learn-more f-link",
      target: "_blank",
      rel: "noopener noreferrer",
      href: `https://www.artic.edu/artworks/${d.id}`
    },
    "Learn more ",
    /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--new-window" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--new-window" }))
  )), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn--transparent btn--w-icon f-buttons aic-ct-preview__close-trans",
      type: "button",
      onClick: _
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" })),
    "Close and go back to results"
  ))) : /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__core aic-ct-loader f-body" }, /* @__PURE__ */ e.createElement("p", null, "Loading..."), /* @__PURE__ */ e.createElement("div", { className: "loader" }))) : /* @__PURE__ */ e.createElement("div", { className: o, id: "aic-ct-preview__content" }, /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__header aic-ct-preview__core" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-preview__close",
      className: "btn btn--icon btn--transparent aic-ct-preview__close",
      type: "button",
      "aria-label": "Close",
      onClick: _
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" }))
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__body aic-ct-preview__core" }, /* @__PURE__ */ e.createElement("svg", { className: "icon--max-artworks" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--max-artworks" })), /* @__PURE__ */ e.createElement("p", { className: "f-list-6" }, "You have already added ", l.items.max, " artworks, the maximum number allowed."), /* @__PURE__ */ e.createElement("p", { className: "f-list-6" }, "Please remove one if you would like to choose a different work.")), /* @__PURE__ */ e.createElement("br", null)));
}
function re({ hideObjectsFromTours: i, hideGalleriesFromTours: r }) {
  const {
    searchError: n,
    searchFetching: a,
    searchResultItems: s,
    searchPreviewRef: c,
    setSearchPreviewId: l,
    activeTheme: u,
    searchParams: m,
    searchQuery: d
  } = T(j), { scrollY: h } = T(I), o = F(null), { fetchData: p } = H(), _ = Y(
    (f) => {
      var g;
      (f.type === "close" || (g = c == null ? void 0 : c.current) != null && g.open && f.target === (c == null ? void 0 : c.current)) && (c.current.close(), l(null), document.documentElement.scrollTop = h, document.documentElement.classList.remove(
        "s-body-locked",
        "s-body-locked--ct"
      ));
    },
    [l, h, c]
  ), b = Y(() => {
    const f = new Event("page:updated", { bubbles: !0 });
    setTimeout(() => {
      document.dispatchEvent(f);
    }, 0);
  }, []), v = (f) => {
    p(
      q(
        { ...{ keywords: d, page: f }, ...m },
        i,
        r
      )
    );
  };
  return S(() => {
    o.current && (s == null ? void 0 : s.length) > 0 && !a && !n && b();
  }, [
    o,
    s,
    a,
    n,
    b
  ]), S(() => {
    const f = c.current;
    return f && (f.addEventListener("close", _), f.addEventListener("click", _)), () => {
      f && (f.removeEventListener("close", _), f.removeEventListener("click", _));
    };
  }, [c, _]), !s && !a && !n ? null : /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-search-results" }, a && // Render only the loading message while fetching
  /* @__PURE__ */ e.createElement(
    "div",
    {
      id: "aic-ct-search-results__loading",
      className: "aic-ct-search-results__message aic-ct-loader f-body"
    },
    /* @__PURE__ */ e.createElement("p", null, "Loading..."),
    /* @__PURE__ */ e.createElement("div", { className: "loader" })
  ), n && // Render only the error message if there is an error
  /* @__PURE__ */ e.createElement(
    "div",
    {
      id: "aic-ct-search-results__error",
      className: "aic-ct-search-results__message f-body"
    },
    /* @__PURE__ */ e.createElement("p", null, n)
  ), (s == null ? void 0 : s.length) === 0 && !a && !n && // Render only a no results message if there are no results
  /* @__PURE__ */ e.createElement(
    "div",
    {
      id: "aic-ct-search-results__no-results",
      className: "aic-ct-search-results__message f-body"
    },
    /* @__PURE__ */ e.createElement("p", null, "Sorry, we couldn’t find any artworks matching your search. ")
  ), (s == null ? void 0 : s.length) > 0 && !a && !n && // Render the results if there are results
  /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "aic-ct-pre-result-text f-body" }, "The artworks below are currently on view and available to choose for your tour."), /* @__PURE__ */ e.createElement(
    "ul",
    {
      ref: o,
      id: "aic-ct-search-results__items",
      className: "o-pinboard o-pinboard--2-col@xsmall o-pinboard--2-col@small o-pinboard--3-col@medium o-pinboard--4-col@large o-pinboard--4-col@xlarge",
      "data-pinboard-option-layout": "o-pinboard--2-col@xsmall o-pinboard--2-col@small o-pinboard--2-col@medium o-pinboard--3-col@large o-pinboard--3-col@xlarge",
      "data-pinboard-maintain-order": "false",
      "data-behavior": "pinboard"
    },
    s.map((f) => /* @__PURE__ */ e.createElement(ee, { key: f.id, itemData: f }))
  ), /* @__PURE__ */ e.createElement(ae, { goToPage: v }), /* @__PURE__ */ e.createElement("p", { className: "aic-ct-post-result-text f-body" }, "Looking for more artworks? Use the search field at the top of the page to see more."), /* @__PURE__ */ e.createElement(
    "dialog",
    {
      ref: c,
      id: "aic-ct-search-preview",
      onClose: _
    },
    /* @__PURE__ */ e.createElement(Ie, null)
  ))), /* @__PURE__ */ e.createElement("p", { className: "u-hide", id: "aic-ct-search__in-your-tour" }, "This object is in your tour", " "), /* @__PURE__ */ e.createElement("p", { className: "sr-only", "aria-live": "polite" }, a ? "Loading" : u ? `Showing results for ${u}` : d ? `Showing results for ${d}` : "Showing default results"));
}
re.propTypes = {
  hideObjectsFromTours: t.array,
  hideGalleriesFromTours: t.array
};
function L(i = {}) {
  const { initialValue: r, maxLength: n, valueSetter: a } = i, [s, c] = N(r || ""), l = F(null), u = n - s.length;
  return {
    value: s,
    onChange: (d) => {
      const { value: h } = d.target;
      l.current.ariaBusy = !0, c(h), a && a(h), l.current.ariaBusy = !1;
    },
    countRef: l,
    charsRemaining: u,
    maxLength: n,
    counterEl: /* @__PURE__ */ e.createElement("output", { ref: l }, "(", u, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")
  };
}
function ne(i) {
  var v;
  const { itemData: r, itemIndex: n, setShouldAssignFocus: a, setRemoveButtons: s } = i, { iiifBaseUrl: c, tourItems: l, tourItemsDispatch: u, limits: m } = T(I), d = F(null);
  let h = F(!1);
  const o = (f) => {
    let g = l.reduce((E, y) => (y == null ? void 0 : y.objectNote.length) > 0 || E, !1);
    h.current == (f === "") && !g && (h.current = !h.current, R(document, "gtm:push", {
      event: "mmt_artwork_note",
      fieldPopulated: h.current
    }));
  }, p = L({
    initialValue: (v = l[n]) == null ? void 0 : v.objectNote,
    maxLength: m.objectNote,
    valueSetter: o
  }), _ = B(
    () => ({
      id: r.id,
      objectNote: p.value
    }),
    [r.id, p.value]
  ), b = () => {
    u({
      type: "REMOVE_ITEM",
      payload: r
    }), R(document, "gtm:push", {
      event: "mmt_remove_artwork",
      artworkTitle: r.title
    });
  };
  return S(() => {
    u({
      type: "UPDATE_NOTE",
      payload: _
    });
  }, [_, u]), S(() => {
    const f = d.current;
    return () => {
      document.activeElement === f && (l.length > 1 ? l.find((g, E) => {
        g.id === r.id && a({
          flag: !0,
          id: l[E !== l.length - 1 ? E + 1 : E - 1].id
        });
      }) : a({
        flag: !0,
        id: null
      }));
    };
  }, [l, r.id, a]), S(() => (s((f) => [...f, { id: r.id, ref: d }]), () => {
    s(
      (f) => f.filter((g) => g.id !== r.id)
    );
  }), [s, l, r.id]), /* @__PURE__ */ e.createElement(
    "li",
    {
      className: "aic-ct-tour-item aic-ct__core",
      id: `aic-ct-tour-item-${r.id}`
    },
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour-item__lockup" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour-item__info" }, r.title && /* @__PURE__ */ e.createElement("h2", { className: "aic-ct-tour-item__title f-deck" }, r.title, r.date_display && /* @__PURE__ */ e.createElement(e.Fragment, null, ", ", r.date_display)), r.artist_title && /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-tour-item__artist f-body" }, r.artist_title), r.gallery_title && /* @__PURE__ */ e.createElement("p", { className: "aic-ct-tour-item__gallery f-secondary" }, r.gallery_title)), r.image_id && /* @__PURE__ */ e.createElement(
      "img",
      {
        className: "aic-ct-tour-item__image",
        src: x(
          c,
          r.image_id,
          "128",
          "128",
          "square",
          !0
        ),
        alt: r.thumbnail.alt_text
      }
    )),
    r.description && /* @__PURE__ */ e.createElement(
      "div",
      {
        className: "aic-ct-tour-item__description f-body ",
        dangerouslySetInnerHTML: { __html: r.description }
      }
    ),
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour-item__note" }, /* @__PURE__ */ e.createElement(
      "label",
      {
        htmlFor: `aic-ct-note-${r.id}`,
        className: "label f-secondary"
      },
      "Add a note about why you chose this artwork ",
      /* @__PURE__ */ e.createElement("em", null, "(optional)")
    ), /* @__PURE__ */ e.createElement("span", { className: "textarea" }, /* @__PURE__ */ e.createElement("span", { className: "input__io-container" }, /* @__PURE__ */ e.createElement(
      "textarea",
      {
        className: "f-secondary",
        id: `aic-ct-note-${r.id}`,
        onChange: p.onChange,
        rows: "5",
        placeholder: "e.g. This reminds me of our vacation last year.",
        value: p.value,
        maxLength: p.maxLength
      }
    ), p.counterEl))),
    /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "btn btn--transparent f-secondary aic-ct-tour-item__remove",
        ref: d,
        type: "button",
        onClick: () => {
          b(r.id);
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
  const { tourItems: i, headerNextButtonRef: r, setActiveNavPage: n, limits: a } = T(I), [s, c] = N({
    flag: !1,
    id: null
  }), [l, u] = N([]), m = F(null), d = () => {
    n(0), r.current.focus();
  }, h = () => {
    n(2), r.current.focus();
  };
  return S(() => {
    s.flag && (!i.length && (m != null && m.current) ? m.current.focus() : l.find((o) => o.id === s.id).ref.current.focus(), c(!1));
  }, [i, s, l, m]), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour" }, i.length > 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement("header", { className: "aic-ct-section-header f-body" }, /* @__PURE__ */ e.createElement("h2", { id: "aic-ct-tour__heading", className: "f-module-title-2" }, "Artworks in your tour")), /* @__PURE__ */ e.createElement("div", { className: "f-body aic-ct-tour__intro" }, /* @__PURE__ */ e.createElement("p", null, "Your artworks are listed below in the order that you selected them. Your final tour will have them ordered based on their location in the galleries to give you the easiest tour path."), i.length === 6 && /* @__PURE__ */ e.createElement("p", null, /* @__PURE__ */ e.createElement("br", null), "You've added 6 artworks, the maximum number allowed. You may remove one if you would like to choose a different work."))), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-tour__results" }, i.map((o, p) => /* @__PURE__ */ e.createElement(
    ne,
    {
      key: o.id,
      setRemoveButtons: u,
      itemData: o,
      itemIndex: p,
      shouldAssignFocus: s,
      setShouldAssignFocus: c
    }
  )))), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta aic-ct-full-bleed" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-wrapper aic-ct-full-bleed__core" }, i.length > 0 && i.length < 6 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You've added ", i.length, " of the maximum", " ", a.items.max, " artworks."), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: m,
      id: "aic-ct-tour__cta-browse",
      type: "button",
      className: "f-buttons btn btn--secondary",
      onClick: d
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
      className: "f-buttons btn btn--my-museum-tour",
      onClick: h
    },
    "Finish My Tour"
  ))), i.length === 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You haven't added any artworks to your tour yet"), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: m,
      id: "aic-ct-tour__cta-browse",
      type: "button",
      className: "f-buttons btn btn--secondary",
      onClick: d
    },
    "Browse for More Artworks"
  ))))));
}
function Ae() {
  const {
    tourTitle: i,
    setTourTitle: r,
    creatorEmail: n,
    setCreatorEmail: a,
    validCreatorEmail: s,
    setValidCreatorEmail: c,
    creatorName: l,
    setCreatorName: u,
    recipientName: m,
    setRecipientName: d,
    marketingOptIn: h,
    setMarketingOptIn: o,
    tourDescription: p,
    setTourDescription: _,
    limits: b
  } = T(I);
  let v = F(!1), f = F(!1);
  const g = (w) => {
    v.current == (w === "") && (v.current = !v.current, R(document, "gtm:push", {
      event: "mmt_personalization",
      fieldPopulated: v.current
    })), u(w);
  }, E = (w) => {
    f.current == (w === "") && (f.current = !f.current, R(document, "gtm:push", {
      event: "mmt_tribute",
      fieldPopulated: f.current
    })), d(w);
  }, y = (w) => {
    v.current == (w === "") && (v.current = !v.current, R(document, "gtm:push", {
      event: "mmt_personalization",
      fieldPopulated: v.current
    })), _(w);
  }, k = (w) => {
    R(document, "gtm:push", {
      event: "mmt_email_optin",
      optInStatus: w
    }), o(w);
  }, C = L({
    initialValue: i,
    maxLength: b.title,
    valueSetter: r
  }), A = L({
    initialValue: l,
    maxLength: b.creatorName,
    valueSetter: g
  }), O = L({
    initialValue: m,
    maxLength: b.recipientName,
    valueSetter: E
  }), P = L({
    initialValue: p,
    maxLength: b.description,
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
        a(w.target.value), c(w.target.validity.valid);
      },
      id: "aic-ct-metadata__creator-email",
      "aria-required": "true",
      "aria-invalid": n.value ? "false" : "true",
      "aria-describedby": n.isValid ? null : "aic-ct-metadata__invalid-email",
      required: !0
    }
  ), !s && /* @__PURE__ */ e.createElement(
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
      value: O.value,
      onChange: O.onChange,
      id: "aic-ct-metadata__recipient-name",
      maxLength: O.maxLength
    }
  ), O.counterEl))), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement(
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
      value: h,
      name: "aic-ct-metadata__opt-in",
      checked: h,
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
    tourTitle: r,
    creatorName: n,
    creatorEmail: a,
    recipientName: s,
    marketingOptIn: c,
    validCreatorEmail: l,
    tourItems: u,
    tourDescription: m,
    validityIssues: d,
    setValidityIssues: h,
    limits: o,
    isSaving: p,
    setIsSaving: _,
    setActiveNavPage: b
  } = T(I), [v, f] = N(null), g = async () => {
    _(!0);
    try {
      const E = await fetch(`${i}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          creatorEmail: a,
          marketingOptIn: c,
          tourJson: {
            title: r,
            creatorName: n,
            recipientName: s,
            description: m,
            // "artworks" is essentially everything from the GET response with added "objectNote"
            // The API expects these fields named in this way
            artworks: u
          }
        })
      });
      if (!E.ok)
        throw new Error(
          "There was a problem saving your tour, please try again. If the problem persists, please contact us and let us know."
        );
      const { message: y, my_museum_tour: k } = await E.json();
      f({
        type: "success",
        message: y,
        id: k.id
      });
    } catch (E) {
      f({
        type: "error",
        message: E.message
      });
    }
    _(!1);
  };
  return S(() => {
    const E = [];
    r.length || E.push("A tour title"), r.length > o.title && E.push("Tour title must not exceed the character limit"), l || E.push("A valid email address"), m.length > o.description && E.push(
      "Tour description must not exceed the character limit"
    ), u.length < o.items.min && E.push("At least one artwork is required for your tour"), u.length > o.items.max && E.push("Tour must not contain more than 6 artworks"), u.some((y) => {
      var k;
      return ((k = y.objectNote) == null ? void 0 : k.length) > o.objectNote ? (E.push("Notes must not exceed the character limit"), !0) : !1;
    }), h(E);
  }, [
    r,
    m,
    u,
    h,
    o,
    l
  ]), S(() => {
    v != null && v.id && z.assign(
      `/my-museum-tour/${v.id}?tourCreationComplete=true`
    );
  }, [v]), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation" }, d.length ? /* @__PURE__ */ e.createElement(
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
      /* @__PURE__ */ e.createElement("ul", null, d.map((E, y) => /* @__PURE__ */ e.createElement("li", { className: "f-body", key: y }, E)))
    ),
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation__actions" }, /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "btn btn--secondary f-buttons",
        type: "button",
        onClick: () => {
          u.length ? b(1) : b(0);
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
    !p && !v && /* @__PURE__ */ e.createElement(
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
    v && (v.type === "success" && /* @__PURE__ */ e.createElement(
      "div",
      {
        id: "aic-ct-validation__success",
        className: "aic-ct-validation__content"
      },
      /* @__PURE__ */ e.createElement("h1", { className: "f-headline" }, "Saved successfully!", /* @__PURE__ */ e.createElement("br", null), " Redirecting to your tour")
    ) || v.type === "error" && /* @__PURE__ */ e.createElement(
      "div",
      {
        id: "aic-ct-save-error",
        className: "aic-ct-validation__content"
      },
      /* @__PURE__ */ e.createElement("h1", { className: "f-headline" }, "Looks like there was a problem"),
      /* @__PURE__ */ e.createElement("p", { className: "f-body" }, v.message),
      /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation__actions" }, /* @__PURE__ */ e.createElement(
        "button",
        {
          id: "aic-ct-save-button",
          className: "btn btn--primary f-buttons",
          type: "button",
          onClick: g,
          disabled: p
        },
        "Try again"
      ))
    ))
  ));
}
const Oe = (i) => {
  const {
    apiSaveEndpoint: r,
    hideObjectsFromTours: n,
    hideGalleriesFromTours: a,
    tourTitle: s,
    tourDescription: c,
    tourItems: l,
    heroImageId: u
  } = i, m = "https://www.artic.edu/iiif/2", d = {
    apiSaveEndpoint: r,
    tourTitle: s,
    tourDescription: c,
    tourItems: l,
    heroImageId: u,
    iiifBaseUrl: m
  }, h = {
    hideObjectsFromTours: n,
    hideGalleriesFromTours: a
  };
  return S(() => {
    document.body.style.overflow = "unset";
  }, []), /* @__PURE__ */ e.createElement("div", { id: "my-museum-tour-builder", className: "my-museum-tour" }, /* @__PURE__ */ e.createElement(Q, { ...d }, /* @__PURE__ */ e.createElement(Se, null), /* @__PURE__ */ e.createElement(W, null, /* @__PURE__ */ e.createElement(V, { id: 0, title: "Choose Your Artworks" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-intro aic-ct-intro--keyline aic-ct__core" }, /* @__PURE__ */ e.createElement("h1", { className: "f-display-2" }, "Create your own tour"), /* @__PURE__ */ e.createElement("p", { className: "f-deck" }, "Choose up to 6 artworks for your tour by searching for a particular work or artist, browsing themes, or selecting from the list of artworks below.")), /* @__PURE__ */ e.createElement(K, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement(J, { ...h }), /* @__PURE__ */ e.createElement(Z, { ...h }), /* @__PURE__ */ e.createElement(re, { ...h })))), /* @__PURE__ */ e.createElement(V, { id: 1, title: "Personalize" }, u && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-hero aic-ct-full-bleed" }, /* @__PURE__ */ e.createElement(
    "img",
    {
      src: x(m, u, 20, 20, "full"),
      srcSet: `${x(
        m,
        u,
        480,
        480,
        "full"
      )} 320w, ${x(
        m,
        u,
        640,
        640,
        "full"
      )} 480w, ${x(
        m,
        u,
        960,
        960,
        "full"
      )} 640w, ${x(
        m,
        u,
        1280,
        1280,
        "full"
      )} 960w, ${x(
        m,
        u,
        1920,
        1920,
        "full"
      )} 1280w`,
      alt: ""
    }
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-intro aic-ct__core" }, /* @__PURE__ */ e.createElement("h1", { className: "f-display-2" }, "Personalize your tour")), /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement(Ae, null)), /* @__PURE__ */ e.createElement(Fe, null)), /* @__PURE__ */ e.createElement(V, { id: 2, title: "Finish and Share" }, /* @__PURE__ */ e.createElement(Re, null))), /* @__PURE__ */ e.createElement(Ce, null)));
};
Oe.propTypes = {
  apiSaveEndpoint: t.string,
  hideObjectsFromTours: t.array,
  hideGalleriesFromTours: t.array,
  tourTitle: t.string,
  tourDescription: t.string,
  tourItems: t.array,
  searchPreviewId: t.number,
  heroImageId: t.string
};
export {
  Oe as default
};
