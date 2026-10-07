import e, { createContext as Q, useState as N, useReducer as Ne, useRef as M, useMemo as H, useContext as P, useEffect as C, useCallback as U } from "react";
import t from "prop-types";
const we = (n, r) => {
  switch (r.type) {
    case "ADD_ITEM":
      return r.payload.short_description && (r.payload.description = r.payload.short_description), delete r.payload.short_description, [...n, { ...r.payload, objectNote: "" }];
    case "UPDATE_NOTE":
      return n.map((i) => i.id === r.payload.id ? { ...i, objectNote: r.payload.objectNote } : i);
    case "REMOVE_ITEM":
      return n.filter(({ id: i }) => i !== r.payload.id);
    default:
      return n;
  }
}, F = Q();
function z(n) {
  const {
    children: r,
    tourTitle: i,
    creatorEmail: a,
    creatorName: s,
    recipientName: c,
    tourDescription: o,
    marketingOptIn: d,
    tourItems: m,
    navPages: u,
    apiSaveEndpoint: p,
    iiifBaseUrl: l
  } = n, [h, f] = N(i || ""), [b, E] = N(a || ""), [_, g] = N(!1), [v, y] = N(s || ""), [k, S] = N(c || ""), [x, A] = N(
    d || !1
  ), [T, w] = N(
    o || ""
  ), [V, se] = N(u || []), [ce, le] = N(0), [oe, me] = Ne(
    we,
    m || []
  ), ue = M(null), de = M(null), [he, pe] = N([]), fe = p || "/api/v1/my-museum-tour", [_e, ge] = N(!1), [be, ve] = N(0), Ee = H(
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
  ), ye = H(
    () => [
      "mmt_builder_pageview",
      "mmt_personalize_pageview",
      "mmt_ready_to_save_pageview"
    ],
    []
  );
  return /* @__PURE__ */ e.createElement(
    F.Provider,
    {
      value: {
        apiSaveEndpoint: fe,
        iiifBaseUrl: l,
        limits: Ee,
        tourTitle: h,
        setTourTitle: f,
        creatorEmail: b,
        setCreatorEmail: E,
        validCreatorEmail: _,
        setValidCreatorEmail: g,
        creatorName: v,
        setCreatorName: y,
        recipientName: k,
        setRecipientName: S,
        tourDescription: T,
        setTourDescription: w,
        marketingOptIn: x,
        setMarketingOptIn: A,
        tourItems: oe,
        tourItemsDispatch: me,
        navPages: V,
        setNavPages: se,
        activeNavPage: ce,
        setActiveNavPage: le,
        navPageEvents: ye,
        headerPrevButtonRef: ue,
        headerNextButtonRef: de,
        validityIssues: he,
        setValidityIssues: pe,
        isSaving: _e,
        setIsSaving: ge,
        scrollY: be,
        setScrollY: ve
      }
    },
    r
  );
}
z.propTypes = {
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
F.Provider.propTypes = {
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
var ke = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Te(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var G = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(n) {
  (function() {
    var r = {}.hasOwnProperty;
    function i() {
      for (var a = [], s = 0; s < arguments.length; s++) {
        var c = arguments[s];
        if (c) {
          var o = typeof c;
          if (o === "string" || o === "number")
            a.push(c);
          else if (Array.isArray(c)) {
            if (c.length) {
              var d = i.apply(null, c);
              d && a.push(d);
            }
          } else if (o === "object") {
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
    n.exports ? (i.default = i, n.exports = i) : window.classNames = i;
  })();
})(G);
var Pe = G.exports;
const j = /* @__PURE__ */ Te(Pe);
function I(n, r, i = "", a = "", s = "full", c = !0) {
  return `${n}/${r}/${s}/${c ? "!" : ""}${i},${a}/0/default.jpg`;
}
function q(n, r, i) {
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
  ), a.searchParams.set("limit", "60"), typeof n.page < "u" && a.searchParams.set("page", n.page), typeof n.keywords < "u" && a.searchParams.set("q", n.keywords), r)
    for (const s of Object.values(r))
      a.searchParams.set(
        `query[bool][must_not][][term][id][value]=${s}`,
        s
      );
  if (i)
    for (const s of Object.values(i))
      a.searchParams.set(
        `query[bool][must_not][][term][gallery_id][value]=${s}`,
        s
      );
  for (const [s, c] of Object.entries(n))
    s.includes("_ids") ? a.searchParams.set(`query[bool][must][][terms][${s}][]`, c) : s.includes("_titles") && a.searchParams.set(
      `query[bool][must][][terms][${s}.keyword][]`,
      c
    );
  return a;
}
function L(n, r) {
  return Array.from(Array(r + 1 - n), (i, a) => a + n);
}
const Se = /<[a-z!/?]/i, Ce = "HTML is not allowed";
function D(n) {
  return typeof n == "string" && Se.test(n);
}
const W = {
  assign: (n) => window.location.assign(n)
};
function xe() {
  const {
    tourItems: n,
    limits: r,
    iiifBaseUrl: i,
    setActiveNavPage: a,
    activeNavPage: s,
    headerPrevButtonRef: c
  } = P(F), o = () => {
    var d;
    (d = c == null ? void 0 : c.current) == null || d.focus(), a(1);
  };
  return /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-header__slots", className: "aic-ct-header__slots" }, Array.from({ length: r.items.max }).map((d, m) => /* @__PURE__ */ e.createElement(
    "li",
    {
      className: j("aic-ct-header__slot", {
        "aic-ct-header__slot--active": n[m],
        "aic-ct-header__slot--inactive": !n[m]
      }),
      key: m
    },
    /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "btn btn--transparent f-buttons",
        type: "button",
        disabled: !n[m] || s === 1,
        onClick: o,
        "aria-label": `Artwork ${m + 1}, edit on customize page`
      },
      n[m] ? /* @__PURE__ */ e.createElement(
        "img",
        {
          src: I(
            i,
            n[m].image_id,
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
function Ie() {
  const {
    limits: n,
    activeNavPage: r,
    setActiveNavPage: i,
    tourItems: a,
    headerPrevButtonRef: s,
    headerNextButtonRef: c
  } = P(F), o = a.length, d = j(
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
        className: d,
        type: "button",
        onClick: () => {
          r === 0 ? W.assign("/my-museum-tour") : i(r === 1 ? 0 : 1);
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
      o
    ), " ", /* @__PURE__ */ e.createElement("span", null, "artworks of ", n.items.max, " ")), /* @__PURE__ */ e.createElement(xe, null)), /* @__PURE__ */ e.createElement(
      "button",
      {
        ref: c,
        id: "aic-ct-header__next-button",
        className: "aic-ct-header__button aic-ct-header__button--next btn btn--transparent btn--w-icon f-buttons",
        type: "button",
        onClick: () => {
          i(r === 0 ? 1 : 2);
        }
      },
      r === 0 && "Next",
      r > 0 && "Finish",
      /* @__PURE__ */ e.createElement("svg", { className: "icon--arrow", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--arrow" }))
    ))
  );
}
function Fe() {
  const { navPages: n, activeNavPage: r, setActiveNavPage: i, isSaving: a } = P(F), s = (c) => j("aic-ct-nav__button btn f-buttons btn--transparent", {
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
      n.map((c, o) => /* @__PURE__ */ e.createElement(
        "button",
        {
          key: c.id,
          id: `aic-ct-nav-button-${c.id}`,
          "aria-controls": `aic-ct-nav-page-${c.id}`,
          "aria-pressed": c.id === r,
          type: "button",
          onClick: () => i(o),
          disabled: a,
          className: s(c.id)
        },
        /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__button-wrapper" }, /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__number" }, c.id + 1), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__title" }, c.title), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__tagline" }, c.tagline))
      ))
    )
  );
}
var R = function(n, r, i) {
  var a = document.createEvent("HTMLEvents");
  a.initEvent(r, !0, !0), a.data = i || {}, a.eventName = r, n.dispatchEvent(a);
}, Ae = { exports: {} };
(function(n, r) {
  (function(i, a) {
    n.exports = a();
  })(ke, function() {
    var i = "AxmTYklsjo190QW", a = "sans-serif", s = "serif", c = {
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
    }, o = [
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
    ], d = '<div style="%s" aria-hidden="true">' + i + "</div>", m = function() {
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
      var p = /* @__PURE__ */ new Date(), l = this, h = l.serif, f = l.sansSerif, b = l.parent, E = l.appended, _, g = l.options, v = g.reference;
      function y(T) {
        return o.concat(["font-weight:" + g.weight, "font-style:" + g.style]).concat("font-family:" + T).join(";");
      }
      var k = d.replace(/\%s/, y(a)), S = d.replace(/\%s/, y(s));
      b || (b = l.parent = g.window.document.createElement("div")), b.innerHTML = k + S, f = l.sansSerif = b.firstChild, h = l.serif = f.nextSibling, g.glyphs && (f.innerHTML += g.glyphs, h.innerHTML += g.glyphs);
      function x(T, w, V) {
        return Math.abs(T.width - w.offsetWidth) > V || Math.abs(T.height - w.offsetHeight) > V;
      }
      function A() {
        return (/* @__PURE__ */ new Date()).getTime() - p.getTime() > g.timeout;
      }
      (function T() {
        v || (v = g.window.document.body), !E && v && (v.appendChild(b), E = l.appended = !0, _ = l.getMeasurements(), f.style.fontFamily = l.fontFamily + ", " + a, h.style.fontFamily = l.fontFamily + ", " + s), E && _ && (x(_.sansSerif, f, g.tolerance) || x(_.serif, h, g.tolerance)) ? g.success() : A() ? g.error() : !E && "requestAnimationFrame" in g.window ? g.window.requestAnimationFrame(T) : g.window.setTimeout(T, g.delay);
      })();
    }, m.prototype.cleanFamilyName = function(p) {
      return p.replace(/[\'\"]/g, "").toLowerCase();
    }, m.prototype.cleanWeight = function(p) {
      var l = {
        normal: "400",
        bold: "700"
      };
      return "" + (l[p] || p);
    }, m.prototype.checkFontFaces = function(p) {
      var l = this;
      l.options.window.document.fonts.forEach(function(h) {
        l.cleanFamilyName(h.family) === l.cleanFamilyName(l.fontFamily) && l.cleanWeight(h.weight) === l.cleanWeight(l.options.weight) && h.style === l.options.style && h.load().then(function() {
          l.options.success(h), l.options.window.clearTimeout(p);
        });
      });
    }, m.prototype.init = function(p, l) {
      var h;
      for (var f in c)
        l.hasOwnProperty(f) || (l[f] = c[f]);
      this.options = l, this.fontFamily = p, !l.glyphs && "fonts" in l.window.document ? (l.timeout && (h = l.window.setTimeout(function() {
        l.error();
      }, l.timeout)), this.checkFontFaces(h)) : this.load();
    };
    var u = function(p, l) {
      var h = new m();
      return h.init(p, l), h;
    };
    return u;
  });
})(Ae);
function K({ children: n }) {
  var c, o, d;
  const { activeNavPage: r, navPages: i, setNavPages: a, navPageEvents: s } = P(F);
  return C(() => {
    R(document, "gtm:push", {
      event: s[r],
      count: 1
    }), a(
      n ? n.map((m, u) => ({
        id: u,
        title: m.props.title,
        tagline: m.props.tagline
      })) : []
    );
  }, [n, a, r, s]), C(() => {
    var m;
    (m = document.querySelector("#my-museum-tour-builder")) == null || m.scrollIntoView();
  }, [r]), /* @__PURE__ */ e.createElement("div", { id: "aic-ct-nav-pages" }, /* @__PURE__ */ e.createElement("div", { className: "sr-only", "aria-live": "polite" }, "Step ", ((c = i[r]) == null ? void 0 : c.id) + 1, " ", (o = i[r]) == null ? void 0 : o.title, " ", (d = i[r]) == null ? void 0 : d.tagline), n);
}
K.propTypes = {
  children: t.node.isRequired
};
function B(n) {
  const { id: r, children: i } = n, { activeNavPage: a } = P(F);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      tabIndex: "0",
      id: `aic-ct-nav-page-${r}`,
      "aria-labelledby": `aic-ct-nav-button-${r}`,
      "aria-hidden": a !== r,
      style: a !== r ? { display: "none" } : {}
    },
    i
  );
}
B.propTypes = {
  id: t.number.isRequired,
  title: t.string.isRequired,
  tagline: t.string,
  children: t.oneOfType([
    t.arrayOf(t.element),
    t.object
  ]).isRequired
};
const O = Q();
function J(n) {
  const {
    children: r,
    searchResultItems: i,
    searchQuery: a,
    searchParams: s,
    searchFetching: c,
    searchError: o,
    searchPreviewId: d,
    pagination: m
  } = n, [u, p] = N(
    i || null
  ), [l, h] = N(a || ""), [f, b] = N(s || null), [E, _] = N(
    c || !1
  ), [g, v] = N(o || !1), [y, k] = N(null), [S, x] = N(
    d || null
  ), A = M(), [T, w] = N(m || null);
  return /* @__PURE__ */ e.createElement(
    O.Provider,
    {
      value: {
        searchResultItems: u,
        setSearchResultItems: p,
        searchQuery: l,
        setSearchQuery: h,
        searchParams: f,
        setSearchParams: b,
        searchFetching: E,
        setSearchFetching: _,
        searchError: g,
        setSearchError: v,
        activeTheme: y,
        setActiveTheme: k,
        searchPreviewId: S,
        setSearchPreviewId: x,
        searchPreviewRef: A,
        pagination: T,
        setPagination: w
      }
    },
    r
  );
}
J.propTypes = {
  children: t.node.isRequired,
  searchResultItems: t.array,
  searchQuery: t.string,
  searchParams: t.object,
  searchFetching: t.bool,
  searchError: t.oneOfType([t.string, t.bool]),
  searchPreviewId: t.number,
  pagination: t.object
};
O.Provider.propTypes = {
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
const Y = (n) => {
  const [r, i] = N(null), {
    setSearchError: a,
    setSearchFetching: s,
    setSearchResultItems: c,
    setPagination: o
  } = P(O), { dataSelector: d = "data", paginationSelector: m = "pagination" } = n || {}, u = () => {
    c(null), o(null), s(!1), a(null), i(null);
  }, p = async (l) => {
    s(!0);
    const h = new AbortController();
    i(h);
    try {
      const b = await (await fetch(l, { signal: h.signal })).json();
      c(d ? b[d] : b), o(m ? b[m] : {}), a(null), s(!1);
    } catch (f) {
      if (f.name === "AbortError") {
        u();
        return;
      }
      a("Error fetching results"), s(!1);
    }
  };
  return C(() => {
    const l = r;
    return () => {
      l && l.abort();
    };
  }, [r]), { fetchData: p, resetState: u };
};
function X(n) {
  const { searchQuery: r, setSearchQuery: i, setSearchResultItems: a, setActiveTheme: s } = P(O), [c, o] = N(!0), { fetchData: d } = Y(), { hideObjectsFromTours: m, hideGalleriesFromTours: u } = n, p = (f) => {
    R(document, "gtm:push", {
      event: "mmt_keyword_search",
      keyword: r
    }), d(
      q(
        { keywords: r, page: 1 },
        m,
        u
      )
    ), s(null), f.preventDefault();
  }, l = M(null), h = j("m-search-bar aic-ct-search", {
    "s-autocomplete-active": r
  });
  return C(() => {
    c && (o(!1), d(
      q(
        { keywords: "", page: 1 },
        m,
        u
      )
    ));
  }, [
    d,
    c,
    o,
    m,
    u
  ]), /* @__PURE__ */ e.createElement(
    "form",
    {
      id: "aic-ct-search",
      role: "search",
      "aria-label": "Objects for your tour",
      onSubmit: p,
      className: h
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
        onChange: (f) => {
          i(f.target.value);
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
        ref: l
      },
      /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--search--24" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--search--24" }))
    ), /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "m-search-bar__clear",
        "aria-label": "Clear search",
        type: "reset",
        onClick: () => {
          i(""), a(null), s(null), d(
            q(
              { keywords: "", page: 1 },
              m,
              u
            )
          ), l.current.focus();
        }
      },
      /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--close" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close" }))
    ))
  );
}
X.propTypes = {
  hideObjectsFromTours: t.array,
  hideGalleriesFromTours: t.array
};
function Z(n) {
  const {
    id: r,
    label: i,
    thumbnailId: a,
    searchParams: s,
    hideObjectsFromTours: c,
    hideGalleriesFromTours: o
  } = n, { iiifBaseUrl: d } = P(F), { setSearchParams: m, setSearchQuery: u, activeTheme: p, setActiveTheme: l } = P(O), { fetchData: h } = Y(), f = () => {
    p === i ? (l(null), m(null), h(
      q(
        { keywords: "", page: 1 },
        c,
        o
      )
    )) : (R(document, "gtm:push", {
      event: "mmt_quickfilter",
      mmt_filterTitle: i
    }), h(
      q(
        s,
        c,
        o
      )
    ), m(s), l(i), u(""));
  }, b = j(
    "aic-ct-theme-toggle tag tag--senary tag--w-image",
    {
      "f-tag": p !== i,
      "f-tag-2": p === i,
      "aic-ct-theme-toggle--active": p === i
    }
  );
  return /* @__PURE__ */ e.createElement(e.Fragment, null, (p === null || p === i) && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: b,
      id: `aic-ct-theme-toggle-${r}`,
      onClick: f,
      "aria-pressed": p === i ? "true" : "false"
    },
    /* @__PURE__ */ e.createElement("span", { className: "aic-ct-theme-toggle__wrapper" }, /* @__PURE__ */ e.createElement(
      "img",
      {
        src: I(d, a, "40", "40", "square"),
        alt: ""
      }
    ), i, p === i && /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--close" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close" })))
  )));
}
Z.propTypes = {
  id: t.number.isRequired,
  label: t.string.isRequired,
  thumbnailId: t.string.isRequired,
  searchParams: t.object.isRequired,
  hideObjectsFromTours: t.array,
  hideGalleriesFromTours: t.array
};
function ee(n) {
  const { hideObjectsFromTours: r, hideGalleriesFromTours: i } = n, a = [
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
      thumbnailId: "3eaab3a3-2b47-9fdd-121c-050f6b8d9ccb",
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
      thumbnailId: "33d04b6a-3ebe-f577-444c-969cb208ad8d",
      searchParams: {
        theme_titles: ["Women artists"]
      }
    }
  ];
  return /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-themes", className: "aic-ct-themes" }, a.map((s, c) => /* @__PURE__ */ e.createElement(
    Z,
    {
      key: s.label,
      id: c,
      label: s.label,
      thumbnailId: s.thumbnailId,
      searchParams: s.searchParams,
      hideObjectsFromTours: r,
      hideGalleriesFromTours: i
    }
  )));
}
ee.propTypes = {
  hideObjectsFromTours: t.array,
  hideGalleriesFromTours: t.array
};
function te(n) {
  const { setSearchPreviewId: r, searchPreviewRef: i } = P(O), { iiifBaseUrl: a, setScrollY: s, tourItems: c } = P(F), { itemData: o } = n, d = c.some((h) => h.id === o.id), m = M(null), u = M(), p = () => {
    const h = document.documentElement.scrollTop;
    R(document, "gtm:push", {
      event: "mmt_artwork_modal",
      artworkTitle: o.title
    }), r(o.id), s(h), i.current.showModal(), setTimeout(() => {
      document.documentElement.classList.add(
        "s-body-locked",
        "s-body-locked--ct"
      ), document.body.scrollTop = h;
    }, 0);
  }, l = j(
    "aic-ct-result o-pinboard__item m-listing m-listing--variable-height",
    {
      "aic-ct-result--selected": d
    }
  );
  return C(() => {
    var h;
    (h = u == null ? void 0 : u.current) != null && h.includes("s-positioned") && m.current.classList.add("s-positioned"), u.current = m.current.className;
  }), /* @__PURE__ */ e.createElement(
    "li",
    {
      ref: m,
      id: `aic-ct-search-item-${o.id}`,
      className: l
    },
    o.image_id && /* @__PURE__ */ e.createElement(
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
          src: o.thumbnail.lqip,
          alt: "",
          height: o.thumbnail.height,
          width: o.thumbnail.width,
          "data-iiif-id": `${a}/${o.image_id}`,
          "data-pin-media": I(
            a,
            o.image_id,
            "600",
            void 0,
            void 0,
            !1
          ),
          sizes: "(min-width: 1640px) 336px, (min-width: 1200px) 20.31vw, (min-width: 900px) 28.13vw, (min-width: 600px) 43.75vw,  43.75vw",
          "data-srcset": `${I(
            a,
            o.image_id,
            Math.min(o.thumbnail.width, 200),
            void 0,
            void 0,
            !1
          )} 200w, ${I(
            a,
            o.image_id,
            Math.min(o.thumbnail.width, 400),
            void 0,
            void 0,
            !1
          )} 400w, ${I(
            a,
            o.image_id,
            Math.min(o.thumbnail.width, 843),
            void 0,
            void 0,
            !1
          )} 843w, ${I(
            a,
            o.image_id,
            Math.min(o.thumbnail.width, 1686),
            void 0,
            void 0,
            !1
          )} 1686w`
        }
      )), /* @__PURE__ */ e.createElement(
        "span",
        {
          id: `aic-ct-result__meta-${o.id}`,
          className: "m-listing__meta"
        },
        o.title && /* @__PURE__ */ e.createElement("span", { className: "title f-list-7" }, o.title),
        o.artist_title && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement("span", { className: "subtitle f-tertiary" }, o.artist_title))
      ))
    )
  );
}
te.propTypes = {
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
function ae({ page: n, is_current_page: r, goToPage: i }) {
  const a = () => {
    r || i(n);
  };
  return /* @__PURE__ */ e.createElement("li", { className: r ? "s-active" : "" }, /* @__PURE__ */ e.createElement("a", { className: "m-paginator__page f-buttons", onClick: a }, n));
}
ae.propTypes = {
  page: t.number,
  is_current_page: t.bool,
  goToPage: t.func
};
function re({ goToPage: n }) {
  const { pagination: a } = P(O), s = () => {
    d() && n(a.current_page + 1);
  }, c = () => {
    m() || n(a.current_page - 1);
  }, o = () => (a == null ? void 0 : a.total_pages) > 1, d = () => a.total_pages > a.current_page, m = () => a.current_page <= 1, u = () => ({
    first: L(1, a.total_pages),
    slider: null,
    last: null
  }), p = () => {
    let y = 7;
    return o() ? a.current_page <= y ? l(y) : a.current_page > a.total_pages - y ? h(y) : f() : { first: null, slider: null, last: null };
  }, l = (y) => {
    let k = y + 3;
    return {
      first: L(1, k),
      slider: null,
      last: _()
    };
  }, h = (y) => {
    let k = y + 2;
    return {
      first: E(),
      slider: null,
      last: L(
        a.total_pages - k,
        a.total_pages
      )
    };
  }, f = () => ({
    first: E(),
    slider: b(),
    last: _()
  }), b = () => L(
    a.current_page - 3,
    a.current_page + 3
  ), E = () => L(1, 2), _ = () => L(a.total_pages - 1, a.total_pages);
  let g = (a == null ? void 0 : a.total_pages) < 3 * 2 + 8 ? u() : p(), v = [
    g.first,
    Array.isArray(g.slider) ? ["..."] : null,
    g.slider,
    Array.isArray(g.last) ? ["..."] : null,
    g.last
  ].filter((y) => y);
  return /* @__PURE__ */ e.createElement(e.Fragment, null, o() && /* @__PURE__ */ e.createElement("nav", { className: "m-paginator" }, /* @__PURE__ */ e.createElement("ul", { className: "m-paginator__prev-next" }, /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement(
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
  ))), /* @__PURE__ */ e.createElement("ul", { className: "m-paginator__pages" }, v.map(
    (y) => y.map((k, S) => /* @__PURE__ */ e.createElement(e.Fragment, { key: S }, typeof k == "number" && k * 60 <= 1e4 && /* @__PURE__ */ e.createElement(
      ae,
      {
        page: k,
        is_current_page: k === a.current_page,
        goToPage: n
      }
    ), typeof k == "string" && // Ellipses
    /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("span", { className: "f-buttons" }, "…"))))
  )), /* @__PURE__ */ e.createElement("p", { className: "m-paginator__current-page" }, "Page ", a.current_page)));
}
re.propTypes = {
  goToPage: t.func
};
function Me() {
  const { searchPreviewId: n, searchResultItems: r, searchPreviewRef: i } = P(O), { iiifBaseUrl: a, tourItems: s, tourItemsDispatch: c, limits: o } = P(F), [d, m] = N(!1), [u, p] = N(null), l = j({
    "aic-ct-preview__content": !0,
    "aic-ct-preview--loading": !u,
    "aic-ct-preview__content-warning": s.length >= 6
  });
  C(() => {
    p(
      r.find((b) => b.id === n)
    );
  }, [n, r]);
  const h = () => {
    var b;
    c({
      type: d ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: u
    }), R(document, "gtm:push", {
      event: d ? "mmt_remove_artwork" : "mmt_add_artwork",
      artworkTitle: u.title
    }), (b = i == null ? void 0 : i.current) == null || b.close();
  }, f = () => {
    var b;
    (b = i == null ? void 0 : i.current) == null || b.close();
  };
  return C(() => {
    u && m(s.find((b) => b.id === u.id));
  }, [s, u]), s.length < 6 || d ? /* @__PURE__ */ e.createElement("div", { className: l, id: "aic-ct-preview__content" }, u ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__header aic-ct-preview__core" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-preview__close",
      className: "btn btn--icon btn--transparent aic-ct-preview__close",
      type: "button",
      "aria-label": "Close",
      onClick: f
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" }))
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__image" }, /* @__PURE__ */ e.createElement(
    "img",
    {
      src: I(a, u.image_id, 800, 800),
      width: u.thumbnail.width,
      height: u.thumbnail.height,
      alt: u.thumbnail.alt_text || ""
    }
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__core" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__details" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__title f-headline-editorial" }, u.title, u.date_display && /* @__PURE__ */ e.createElement(e.Fragment, null, ",", " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-preview__date f-list-4" }, u.date_display))), u.artist_title && /* @__PURE__ */ e.createElement("p", { className: "aic-ct-preview__artist f-subheading-1" }, u.artist_title)), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__links" }, s.length < 6 || d ? /* @__PURE__ */ e.createElement(
    "button",
    {
      id: `aic-ct-preview__action-button-${u.id}`,
      className: "btn btn--my-museum-tour f-buttons aic-ct-preview__action-button",
      type: "button",
      onClick: h,
      "aria-pressed": d ? "true" : "false",
      "aria-label": "Toggle from your tour"
    },
    d ? "Remove from Your Tour" : "Add to Your Tour"
  ) : /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You have already added ", o.items.max, " artworks, the maximum number allowed. Please remove one if you would like to choose a different work.")), (u.short_description || u.description) && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__description" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__description-title f-module-title-2" }, "Artwork description"), /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "f-body",
      dangerouslySetInnerHTML: {
        __html: u.short_description ? u.short_description : u.description
      }
    }
  ), /* @__PURE__ */ e.createElement(
    "a",
    {
      className: "aic-ct-preview__learn-more f-link",
      target: "_blank",
      rel: "noopener noreferrer",
      href: `https://www.artic.edu/artworks/${u.id}`
    },
    "Learn more ",
    /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--new-window" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--new-window" }))
  )), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn--transparent btn--w-icon f-buttons aic-ct-preview__close-trans",
      type: "button",
      onClick: f
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
      onClick: f
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" }))
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__body aic-ct-preview__core" }, /* @__PURE__ */ e.createElement("svg", { className: "icon--max-artworks" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--max-artworks" })), /* @__PURE__ */ e.createElement("p", { className: "f-list-6" }, "You have already added ", o.items.max, " artworks, the maximum number allowed."), /* @__PURE__ */ e.createElement("p", { className: "f-list-6" }, "Please remove one if you would like to choose a different work.")), /* @__PURE__ */ e.createElement("br", null)));
}
function ne({ hideObjectsFromTours: n, hideGalleriesFromTours: r }) {
  const {
    searchError: i,
    searchFetching: a,
    searchResultItems: s,
    searchPreviewRef: c,
    setSearchPreviewId: o,
    activeTheme: d,
    searchParams: m,
    searchQuery: u
  } = P(O), { scrollY: p } = P(F), l = M(null), { fetchData: h } = Y(), f = U(
    (_) => {
      var g;
      (_.type === "close" || (g = c == null ? void 0 : c.current) != null && g.open && _.target === (c == null ? void 0 : c.current)) && (c.current.close(), o(null), document.documentElement.scrollTop = p, document.documentElement.classList.remove(
        "s-body-locked",
        "s-body-locked--ct"
      ));
    },
    [o, p, c]
  ), b = U(() => {
    const _ = new Event("page:updated", { bubbles: !0 });
    setTimeout(() => {
      document.dispatchEvent(_);
    }, 0);
  }, []), E = (_) => {
    h(
      q(
        { ...{ keywords: u, page: _ }, ...m },
        n,
        r
      )
    );
  };
  return C(() => {
    l.current && (s == null ? void 0 : s.length) > 0 && !a && !i && b();
  }, [
    l,
    s,
    a,
    i,
    b
  ]), C(() => {
    const _ = c.current;
    return _ && (_.addEventListener("close", f), _.addEventListener("click", f)), () => {
      _ && (_.removeEventListener("close", f), _.removeEventListener("click", f));
    };
  }, [c, f]), !s && !a && !i ? null : /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-search-results" }, a && // Render only the loading message while fetching
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
  ), (s == null ? void 0 : s.length) === 0 && !a && !i && // Render only a no results message if there are no results
  /* @__PURE__ */ e.createElement(
    "div",
    {
      id: "aic-ct-search-results__no-results",
      className: "aic-ct-search-results__message f-body"
    },
    /* @__PURE__ */ e.createElement("p", null, "Sorry, we couldn’t find any artworks matching your search. ")
  ), (s == null ? void 0 : s.length) > 0 && !a && !i && // Render the results if there are results
  /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "aic-ct-pre-result-text f-body" }, "The artworks below are currently on view and available to choose for your tour."), /* @__PURE__ */ e.createElement(
    "ul",
    {
      ref: l,
      id: "aic-ct-search-results__items",
      className: "o-pinboard o-pinboard--2-col@xsmall o-pinboard--2-col@small o-pinboard--3-col@medium o-pinboard--4-col@large o-pinboard--4-col@xlarge",
      "data-pinboard-option-layout": "o-pinboard--2-col@xsmall o-pinboard--2-col@small o-pinboard--2-col@medium o-pinboard--3-col@large o-pinboard--3-col@xlarge",
      "data-pinboard-maintain-order": "false",
      "data-behavior": "pinboard"
    },
    s.map((_) => /* @__PURE__ */ e.createElement(te, { key: _.id, itemData: _ }))
  ), /* @__PURE__ */ e.createElement(re, { goToPage: E }), /* @__PURE__ */ e.createElement("p", { className: "aic-ct-post-result-text f-body" }, "Looking for more artworks? Use the search field at the top of the page to see more."), /* @__PURE__ */ e.createElement(
    "dialog",
    {
      ref: c,
      id: "aic-ct-search-preview",
      onClose: f
    },
    /* @__PURE__ */ e.createElement(Me, null)
  ))), /* @__PURE__ */ e.createElement("p", { className: "u-hide", id: "aic-ct-search__in-your-tour" }, "This object is in your tour", " "), /* @__PURE__ */ e.createElement("p", { className: "sr-only", "aria-live": "polite" }, a ? "Loading" : d ? `Showing results for ${d}` : u ? `Showing results for ${u}` : "Showing default results"));
}
ne.propTypes = {
  hideObjectsFromTours: t.array,
  hideGalleriesFromTours: t.array
};
function $(n = {}) {
  const { id: r, initialValue: i, maxLength: a, valueSetter: s } = n, [c, o] = N(i || ""), d = M(null), m = a - c.length, u = D(c), p = `${r}-invalid-markup`;
  return {
    value: c,
    onChange: (h) => {
      const { value: f } = h.target;
      d.current.ariaBusy = !0, o(f), s && s(f), d.current.ariaBusy = !1;
    },
    countRef: d,
    charsRemaining: m,
    maxLength: a,
    counterEl: /* @__PURE__ */ e.createElement("output", { ref: d }, "(", m, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")"),
    hasMarkup: u,
    markupErrorId: p,
    markupErrorEl: u ? /* @__PURE__ */ e.createElement("span", { id: p, className: "error-msg f-secondary" }, Ce) : null
  };
}
function ie(n) {
  var E;
  const { itemData: r, itemIndex: i, setShouldAssignFocus: a, setRemoveButtons: s } = n, { iiifBaseUrl: c, tourItems: o, tourItemsDispatch: d, limits: m } = P(F), u = M(null);
  let p = M(!1);
  const l = (_) => {
    let g = o.reduce((v, y) => (y == null ? void 0 : y.objectNote.length) > 0 || v, !1);
    p.current == (_ === "") && !g && (p.current = !p.current, R(document, "gtm:push", {
      event: "mmt_artwork_note",
      fieldPopulated: p.current
    }));
  }, h = $({
    id: `aic-ct-note-${r.id}`,
    initialValue: (E = o[i]) == null ? void 0 : E.objectNote,
    maxLength: m.objectNote,
    valueSetter: l
  }), f = H(
    () => ({
      id: r.id,
      objectNote: h.value
    }),
    [r.id, h.value]
  ), b = () => {
    d({
      type: "REMOVE_ITEM",
      payload: r
    }), R(document, "gtm:push", {
      event: "mmt_remove_artwork",
      artworkTitle: r.title
    });
  };
  return C(() => {
    d({
      type: "UPDATE_NOTE",
      payload: f
    });
  }, [f, d]), C(() => {
    const _ = u.current;
    return () => {
      document.activeElement === _ && (o.length > 1 ? o.find((g, v) => {
        g.id === r.id && a({
          flag: !0,
          id: o[v !== o.length - 1 ? v + 1 : v - 1].id
        });
      }) : a({
        flag: !0,
        id: null
      }));
    };
  }, [o, r.id, a]), C(() => (s((_) => [..._, { id: r.id, ref: u }]), () => {
    s(
      (_) => _.filter((g) => g.id !== r.id)
    );
  }), [s, o, r.id]), /* @__PURE__ */ e.createElement(
    "li",
    {
      className: "aic-ct-tour-item aic-ct__core",
      id: `aic-ct-tour-item-${r.id}`
    },
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour-item__lockup" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour-item__info" }, r.title && /* @__PURE__ */ e.createElement("h2", { className: "aic-ct-tour-item__title f-deck" }, r.title, r.date_display && /* @__PURE__ */ e.createElement(e.Fragment, null, ", ", r.date_display)), r.artist_title && /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-tour-item__artist f-body" }, r.artist_title), r.gallery_title && /* @__PURE__ */ e.createElement("p", { className: "aic-ct-tour-item__gallery f-secondary" }, r.gallery_title)), r.image_id && /* @__PURE__ */ e.createElement(
      "img",
      {
        className: "aic-ct-tour-item__image",
        src: I(
          c,
          r.image_id,
          "200",
          "200",
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
        onChange: h.onChange,
        rows: "5",
        placeholder: "e.g. This reminds me of our vacation last year.",
        value: h.value,
        maxLength: h.maxLength,
        "aria-invalid": h.hasMarkup ? "true" : "false",
        "aria-describedby": h.hasMarkup ? h.markupErrorId : null
      }
    ), h.counterEl), h.markupErrorEl)),
    /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "btn btn--transparent f-secondary aic-ct-tour-item__remove",
        ref: u,
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
ie.propTypes = {
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
function Re() {
  const { tourItems: n, headerNextButtonRef: r, setActiveNavPage: i, limits: a } = P(F), [s, c] = N({
    flag: !1,
    id: null
  }), [o, d] = N([]), m = M(null), u = () => {
    i(0), r.current.focus();
  }, p = () => {
    i(2), r.current.focus();
  };
  return C(() => {
    s.flag && (!n.length && (m != null && m.current) ? m.current.focus() : o.find((l) => l.id === s.id).ref.current.focus(), c(!1));
  }, [n, s, o, m]), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour" }, n.length > 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement("header", { className: "aic-ct-section-header f-body" }, /* @__PURE__ */ e.createElement("h2", { id: "aic-ct-tour__heading", className: "f-module-title-2" }, "Artworks in your tour")), /* @__PURE__ */ e.createElement("div", { className: "f-body aic-ct-tour__intro" }, /* @__PURE__ */ e.createElement("p", null, "Your artworks are listed below in the order that you selected them. Your final tour will have them ordered based on their location in the galleries to give you the easiest tour path."), n.length === 6 && /* @__PURE__ */ e.createElement("p", null, /* @__PURE__ */ e.createElement("br", null), "You've added 6 artworks, the maximum number allowed. You may remove one if you would like to choose a different work."))), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-tour__results" }, n.map((l, h) => /* @__PURE__ */ e.createElement(
    ie,
    {
      key: l.id,
      setRemoveButtons: d,
      itemData: l,
      itemIndex: h,
      shouldAssignFocus: s,
      setShouldAssignFocus: c
    }
  )))), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta aic-ct-full-bleed" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-wrapper aic-ct-full-bleed__core" }, n.length > 0 && n.length < 6 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You've added ", n.length, " of the maximum", " ", a.items.max, " artworks."), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: m,
      id: "aic-ct-tour__cta-browse",
      type: "button",
      className: "f-buttons btn btn--secondary",
      onClick: u
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
  ))), n.length === 6 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You've added ", n.length, " artworks, the maximum number allowed. Please remove one if you would like to choose a different work."), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "f-buttons btn btn--my-museum-tour",
      onClick: p
    },
    "Finish My Tour"
  ))), n.length === 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You haven't added any artworks to your tour yet"), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: m,
      id: "aic-ct-tour__cta-browse",
      type: "button",
      className: "f-buttons btn btn--secondary",
      onClick: u
    },
    "Browse for More Artworks"
  ))))));
}
function Oe() {
  const {
    tourTitle: n,
    setTourTitle: r,
    creatorEmail: i,
    setCreatorEmail: a,
    validCreatorEmail: s,
    setValidCreatorEmail: c,
    creatorName: o,
    setCreatorName: d,
    recipientName: m,
    setRecipientName: u,
    marketingOptIn: p,
    setMarketingOptIn: l,
    tourDescription: h,
    setTourDescription: f,
    limits: b
  } = P(F);
  let E = M(!1), _ = M(!1);
  const g = (w) => {
    E.current == (w === "") && (E.current = !E.current, R(document, "gtm:push", {
      event: "mmt_personalization",
      fieldPopulated: E.current
    })), d(w);
  }, v = (w) => {
    _.current == (w === "") && (_.current = !_.current, R(document, "gtm:push", {
      event: "mmt_tribute",
      fieldPopulated: _.current
    })), u(w);
  }, y = (w) => {
    E.current == (w === "") && (E.current = !E.current, R(document, "gtm:push", {
      event: "mmt_personalization",
      fieldPopulated: E.current
    })), f(w);
  }, k = (w) => {
    R(document, "gtm:push", {
      event: "mmt_email_optin",
      optInStatus: w
    }), l(w);
  }, S = $({
    id: "aic-ct-metadata__title",
    initialValue: n,
    maxLength: b.title,
    valueSetter: r
  }), x = $({
    id: "aic-ct-metadata__creator-name",
    initialValue: o,
    maxLength: b.creatorName,
    valueSetter: g
  }), A = $({
    id: "aic-ct-metadata__recipient-name",
    initialValue: m,
    maxLength: b.recipientName,
    valueSetter: v
  }), T = $({
    id: "aic-ct-metadata__description",
    initialValue: h,
    maxLength: b.description,
    valueSetter: y
  });
  return /* @__PURE__ */ e.createElement("fieldset", { className: "m-fieldset aic-ct-fieldset" }, /* @__PURE__ */ e.createElement("ol", { className: "m-fieldset__fieldset" }, /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__title", className: "label f-secondary" }, "Tour Title ", /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true" }, " *")), /* @__PURE__ */ e.createElement("span", { className: "input" }, /* @__PURE__ */ e.createElement("span", { className: "input__io-container" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      className: "f-secondary",
      type: "text",
      onChange: S.onChange,
      value: S.value,
      id: "aic-ct-metadata__title",
      maxLength: S.maxLength,
      "aria-required": "true",
      "aria-invalid": S.value && !S.hasMarkup ? "false" : "true",
      "aria-describedby": S.value ? S.hasMarkup ? S.markupErrorId : null : "aic-ct-metadata__invalid-title",
      required: !0
    }
  ), S.counterEl), !S.value && /* @__PURE__ */ e.createElement(
    "span",
    {
      id: "aic-ct-metadata__invalid-title",
      className: "error-msg f-secondary"
    },
    "Please enter a title for your tour"
  ), S.markupErrorEl)), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement(
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
      value: x.value,
      onChange: x.onChange,
      id: "aic-ct-metadata__creator-name",
      maxLength: x.maxLength,
      "aria-invalid": x.hasMarkup ? "true" : "false",
      "aria-describedby": x.hasMarkup ? x.markupErrorId : null
    }
  ), x.counterEl), x.markupErrorEl)), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement(
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
      value: i.value,
      onChange: (w) => {
        a(w.target.value), c(w.target.validity.valid);
      },
      id: "aic-ct-metadata__creator-email",
      "aria-required": "true",
      "aria-invalid": i.value ? "false" : "true",
      "aria-describedby": i.isValid ? null : "aic-ct-metadata__invalid-email",
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
      value: A.value,
      onChange: A.onChange,
      id: "aic-ct-metadata__recipient-name",
      maxLength: A.maxLength,
      "aria-invalid": A.hasMarkup ? "true" : "false",
      "aria-describedby": A.hasMarkup ? A.markupErrorId : null
    }
  ), A.counterEl), A.markupErrorEl)), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement(
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
      onChange: T.onChange,
      rows: "5",
      value: T.value,
      maxLength: T.maxLength,
      "aria-invalid": T.hasMarkup ? "true" : "false",
      "aria-describedby": T.hasMarkup ? T.markupErrorId : null
    }
  ), T.counterEl), T.markupErrorEl)), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement("span", { className: "checkbox f-secondary" }, /* @__PURE__ */ e.createElement(
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
function je() {
  const {
    apiSaveEndpoint: n,
    tourTitle: r,
    creatorName: i,
    creatorEmail: a,
    recipientName: s,
    marketingOptIn: c,
    validCreatorEmail: o,
    tourItems: d,
    tourDescription: m,
    validityIssues: u,
    setValidityIssues: p,
    limits: l,
    isSaving: h,
    setIsSaving: f,
    setActiveNavPage: b
  } = P(F), [E, _] = N(null), g = async () => {
    f(!0);
    try {
      const v = await fetch(`${n}`, {
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
            creatorName: i,
            recipientName: s,
            description: m,
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
      _({
        type: "success",
        message: y,
        id: k.id
      });
    } catch (v) {
      _({
        type: "error",
        message: v.message
      });
    }
    f(!1);
  };
  return C(() => {
    const v = [];
    r.length || v.push("A tour title"), r.length > l.title && v.push("Tour title must not exceed the character limit"), o || v.push("A valid email address"), m.length > l.description && v.push(
      "Tour description must not exceed the character limit"
    ), d.length < l.items.min && v.push("At least one artwork is required for your tour"), d.length > l.items.max && v.push("Tour must not contain more than 6 artworks"), d.some((y) => {
      var k;
      return ((k = y.objectNote) == null ? void 0 : k.length) > l.objectNote ? (v.push("Notes must not exceed the character limit"), !0) : !1;
    }), D(r) && v.push("Tour title must not contain HTML"), D(i) && v.push("Your name must not contain HTML"), D(s) && v.push(
      "Recipient name must not contain HTML"
    ), D(m) && v.push(
      "Tour description must not contain HTML"
    ), d.some((y) => D(y.objectNote)) && v.push("Notes must not contain HTML"), p(v);
  }, [
    r,
    i,
    s,
    m,
    d,
    p,
    l,
    o
  ]), C(() => {
    E != null && E.id && W.assign(
      `/my-museum-tour/${E.id}?tourCreationComplete=true`
    );
  }, [E]), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation" }, u.length ? /* @__PURE__ */ e.createElement(
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
      /* @__PURE__ */ e.createElement("ul", null, u.map((v, y) => /* @__PURE__ */ e.createElement("li", { className: "f-body", key: y }, v)))
    ),
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation__actions" }, /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "btn btn--secondary f-buttons",
        type: "button",
        onClick: () => {
          d.length ? b(1) : b(0);
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
    !h && !E && /* @__PURE__ */ e.createElement(
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
            b(1);
          }
        },
        "No, go back and edit"
      ))
    ),
    E && (E.type === "success" && /* @__PURE__ */ e.createElement(
      "div",
      {
        id: "aic-ct-validation__success",
        className: "aic-ct-validation__content"
      },
      /* @__PURE__ */ e.createElement("h1", { className: "f-headline" }, "Saved successfully!", /* @__PURE__ */ e.createElement("br", null), " Redirecting to your tour")
    ) || E.type === "error" && /* @__PURE__ */ e.createElement(
      "div",
      {
        id: "aic-ct-save-error",
        className: "aic-ct-validation__content"
      },
      /* @__PURE__ */ e.createElement("h1", { className: "f-headline" }, "Looks like there was a problem"),
      /* @__PURE__ */ e.createElement("p", { className: "f-body" }, E.message),
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
const Le = (n) => {
  const {
    apiSaveEndpoint: r,
    iiifBaseUrl: i,
    hideObjectsFromTours: a,
    hideGalleriesFromTours: s,
    tourTitle: c,
    tourDescription: o,
    tourItems: d,
    heroImageId: m
  } = n, u = i || "https://www.artic.edu/iiif/2", p = {
    apiSaveEndpoint: r,
    tourTitle: c,
    tourDescription: o,
    tourItems: d,
    heroImageId: m,
    iiifBaseUrl: u
  }, l = {
    hideObjectsFromTours: a,
    hideGalleriesFromTours: s
  };
  return C(() => {
    document.body.style.overflow = "unset";
  }, []), /* @__PURE__ */ e.createElement("div", { id: "my-museum-tour-builder", className: "my-museum-tour" }, /* @__PURE__ */ e.createElement(z, { ...p }, /* @__PURE__ */ e.createElement(Ie, null), /* @__PURE__ */ e.createElement(K, null, /* @__PURE__ */ e.createElement(B, { id: 0, title: "Choose Your Artworks" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-intro aic-ct-intro--keyline aic-ct__core" }, /* @__PURE__ */ e.createElement("h1", { className: "f-display-2" }, "Create your own tour"), /* @__PURE__ */ e.createElement("p", { className: "f-deck" }, "Choose up to 6 artworks for your tour by searching for a particular work or artist, browsing themes, or selecting from the list of artworks below.")), /* @__PURE__ */ e.createElement(J, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement(X, { ...l }), /* @__PURE__ */ e.createElement(ee, { ...l }), /* @__PURE__ */ e.createElement(ne, { ...l })))), /* @__PURE__ */ e.createElement(B, { id: 1, title: "Personalize" }, m && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-hero aic-ct-full-bleed" }, /* @__PURE__ */ e.createElement(
    "img",
    {
      src: I(u, m, 20, 20, "full"),
      srcSet: `${I(
        u,
        m,
        480,
        480,
        "full"
      )} 320w, ${I(
        u,
        m,
        640,
        640,
        "full"
      )} 480w, ${I(
        u,
        m,
        960,
        960,
        "full"
      )} 640w, ${I(
        u,
        m,
        1280,
        1280,
        "full"
      )} 960w, ${I(
        u,
        m,
        1920,
        1920,
        "full"
      )} 1280w`,
      alt: ""
    }
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-intro aic-ct__core" }, /* @__PURE__ */ e.createElement("h1", { className: "f-display-2" }, "Personalize your tour")), /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement(Oe, null)), /* @__PURE__ */ e.createElement(Re, null)), /* @__PURE__ */ e.createElement(B, { id: 2, title: "Finish and Share" }, /* @__PURE__ */ e.createElement(je, null))), /* @__PURE__ */ e.createElement(Fe, null)));
};
Le.propTypes = {
  apiSaveEndpoint: t.string,
  iiifBaseUrl: t.string,
  hideObjectsFromTours: t.array,
  hideGalleriesFromTours: t.array,
  tourTitle: t.string,
  tourDescription: t.string,
  tourItems: t.array,
  searchPreviewId: t.number,
  heroImageId: t.string
};
export {
  Le as default
};
