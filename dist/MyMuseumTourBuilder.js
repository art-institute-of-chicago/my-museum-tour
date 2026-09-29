import e, { createContext as Q, useState as N, useReducer as Ne, useRef as M, useMemo as B, useContext as P, useEffect as C, useCallback as U } from "react";
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
    tourDescription: l,
    marketingOptIn: u,
    tourItems: m,
    navPages: d,
    apiSaveEndpoint: p,
    iiifBaseUrl: o
  } = n, [h, f] = N(i || ""), [g, E] = N(a || ""), [_, b] = N(!1), [v, y] = N(s || ""), [k, S] = N(c || ""), [x, A] = N(
    u || !1
  ), [T, w] = N(
    l || ""
  ), [V, se] = N(d || []), [ce, le] = N(0), [oe, me] = Ne(
    we,
    m || []
  ), ue = M(null), de = M(null), [he, pe] = N([]), fe = p || "/api/v1/my-museum-tour", [_e, be] = N(!1), [ge, ve] = N(0), Ee = B(
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
  ), ye = B(
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
        iiifBaseUrl: o,
        limits: Ee,
        tourTitle: h,
        setTourTitle: f,
        creatorEmail: g,
        setCreatorEmail: E,
        validCreatorEmail: _,
        setValidCreatorEmail: b,
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
        setIsSaving: be,
        scrollY: ge,
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
          var l = typeof c;
          if (l === "string" || l === "number")
            a.push(c);
          else if (Array.isArray(c)) {
            if (c.length) {
              var u = i.apply(null, c);
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
  } = P(F), l = () => {
    var u;
    (u = c == null ? void 0 : c.current) == null || u.focus(), a(1);
  };
  return /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-header__slots", className: "aic-ct-header__slots" }, Array.from({ length: r.items.max }).map((u, m) => /* @__PURE__ */ e.createElement(
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
        onClick: l,
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
  } = P(F), l = a.length, u = j(
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
      l
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
      n.map((c, l) => /* @__PURE__ */ e.createElement(
        "button",
        {
          key: c.id,
          id: `aic-ct-nav-button-${c.id}`,
          "aria-controls": `aic-ct-nav-page-${c.id}`,
          "aria-pressed": c.id === r,
          type: "button",
          onClick: () => i(l),
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
    ], u = '<div style="%s" aria-hidden="true">' + i + "</div>", m = function() {
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
      var p = /* @__PURE__ */ new Date(), o = this, h = o.serif, f = o.sansSerif, g = o.parent, E = o.appended, _, b = o.options, v = b.reference;
      function y(T) {
        return l.concat(["font-weight:" + b.weight, "font-style:" + b.style]).concat("font-family:" + T).join(";");
      }
      var k = u.replace(/\%s/, y(a)), S = u.replace(/\%s/, y(s));
      g || (g = o.parent = b.window.document.createElement("div")), g.innerHTML = k + S, f = o.sansSerif = g.firstChild, h = o.serif = f.nextSibling, b.glyphs && (f.innerHTML += b.glyphs, h.innerHTML += b.glyphs);
      function x(T, w, V) {
        return Math.abs(T.width - w.offsetWidth) > V || Math.abs(T.height - w.offsetHeight) > V;
      }
      function A() {
        return (/* @__PURE__ */ new Date()).getTime() - p.getTime() > b.timeout;
      }
      (function T() {
        v || (v = b.window.document.body), !E && v && (v.appendChild(g), E = o.appended = !0, _ = o.getMeasurements(), f.style.fontFamily = o.fontFamily + ", " + a, h.style.fontFamily = o.fontFamily + ", " + s), E && _ && (x(_.sansSerif, f, b.tolerance) || x(_.serif, h, b.tolerance)) ? b.success() : A() ? b.error() : !E && "requestAnimationFrame" in b.window ? b.window.requestAnimationFrame(T) : b.window.setTimeout(T, b.delay);
      })();
    }, m.prototype.cleanFamilyName = function(p) {
      return p.replace(/[\'\"]/g, "").toLowerCase();
    }, m.prototype.cleanWeight = function(p) {
      var o = {
        normal: "400",
        bold: "700"
      };
      return "" + (o[p] || p);
    }, m.prototype.checkFontFaces = function(p) {
      var o = this;
      o.options.window.document.fonts.forEach(function(h) {
        o.cleanFamilyName(h.family) === o.cleanFamilyName(o.fontFamily) && o.cleanWeight(h.weight) === o.cleanWeight(o.options.weight) && h.style === o.options.style && h.load().then(function() {
          o.options.success(h), o.options.window.clearTimeout(p);
        });
      });
    }, m.prototype.init = function(p, o) {
      var h;
      for (var f in c)
        o.hasOwnProperty(f) || (o[f] = c[f]);
      this.options = o, this.fontFamily = p, !o.glyphs && "fonts" in o.window.document ? (o.timeout && (h = o.window.setTimeout(function() {
        o.error();
      }, o.timeout)), this.checkFontFaces(h)) : this.load();
    };
    var d = function(p, o) {
      var h = new m();
      return h.init(p, o), h;
    };
    return d;
  });
})(Ae);
function K({ children: n }) {
  var c, l, u;
  const { activeNavPage: r, navPages: i, setNavPages: a, navPageEvents: s } = P(F);
  return C(() => {
    R(document, "gtm:push", {
      event: s[r],
      count: 1
    }), a(
      n ? n.map((m, d) => ({
        id: d,
        title: m.props.title,
        tagline: m.props.tagline
      })) : []
    );
  }, [n, a, r, s]), C(() => {
    var m;
    (m = document.querySelector("#my-museum-tour-builder")) == null || m.scrollIntoView();
  }, [r]), /* @__PURE__ */ e.createElement("div", { id: "aic-ct-nav-pages" }, /* @__PURE__ */ e.createElement("div", { className: "sr-only", "aria-live": "polite" }, "Step ", ((c = i[r]) == null ? void 0 : c.id) + 1, " ", (l = i[r]) == null ? void 0 : l.title, " ", (u = i[r]) == null ? void 0 : u.tagline), n);
}
K.propTypes = {
  children: t.node.isRequired
};
function H(n) {
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
H.propTypes = {
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
    searchError: l,
    searchPreviewId: u,
    pagination: m
  } = n, [d, p] = N(
    i || null
  ), [o, h] = N(a || ""), [f, g] = N(s || null), [E, _] = N(
    c || !1
  ), [b, v] = N(l || !1), [y, k] = N(null), [S, x] = N(
    u || null
  ), A = M(), [T, w] = N(m || null);
  return /* @__PURE__ */ e.createElement(
    O.Provider,
    {
      value: {
        searchResultItems: d,
        setSearchResultItems: p,
        searchQuery: o,
        setSearchQuery: h,
        searchParams: f,
        setSearchParams: g,
        searchFetching: E,
        setSearchFetching: _,
        searchError: b,
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
    setPagination: l
  } = P(O), { dataSelector: u = "data", paginationSelector: m = "pagination" } = n || {}, d = () => {
    c(null), l(null), s(!1), a(null), i(null);
  }, p = async (o) => {
    s(!0);
    const h = new AbortController();
    i(h);
    try {
      const g = await (await fetch(o, { signal: h.signal })).json();
      c(u ? g[u] : g), l(m ? g[m] : {}), a(null), s(!1);
    } catch (f) {
      if (f.name === "AbortError") {
        d();
        return;
      }
      a("Error fetching results"), s(!1);
    }
  };
  return C(() => {
    const o = r;
    return () => {
      o && o.abort();
    };
  }, [r]), { fetchData: p, resetState: d };
};
function X(n) {
  const { searchQuery: r, setSearchQuery: i, setSearchResultItems: a, setActiveTheme: s } = P(O), [c, l] = N(!0), { fetchData: u } = Y(), { hideObjectsFromTours: m, hideGalleriesFromTours: d } = n, p = (f) => {
    R(document, "gtm:push", {
      event: "mmt_keyword_search",
      keyword: r
    }), u(
      q(
        { keywords: r, page: 1 },
        m,
        d
      )
    ), s(null), f.preventDefault();
  }, o = M(null), h = j("m-search-bar aic-ct-search", {
    "s-autocomplete-active": r
  });
  return C(() => {
    c && (l(!1), u(
      q(
        { keywords: "", page: 1 },
        m,
        d
      )
    ));
  }, [
    u,
    c,
    l,
    m,
    d
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
          i(""), a(null), s(null), u(
            q(
              { keywords: "", page: 1 },
              m,
              d
            )
          ), o.current.focus();
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
    hideGalleriesFromTours: l
  } = n, { iiifBaseUrl: u } = P(F), { setSearchParams: m, setSearchQuery: d, activeTheme: p, setActiveTheme: o } = P(O), { fetchData: h } = Y(), f = () => {
    p === i ? (o(null), m(null), h(
      q(
        { keywords: "", page: 1 },
        c,
        l
      )
    )) : (R(document, "gtm:push", {
      event: "mmt_quickfilter",
      mmt_filterTitle: i
    }), h(
      q(
        s,
        c,
        l
      )
    ), m(s), o(i), d(""));
  }, g = j(
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
      className: g,
      id: `aic-ct-theme-toggle-${r}`,
      onClick: f,
      "aria-pressed": p === i ? "true" : "false"
    },
    /* @__PURE__ */ e.createElement("span", { className: "aic-ct-theme-toggle__wrapper" }, /* @__PURE__ */ e.createElement(
      "img",
      {
        src: I(u, a, "40", "40", "square"),
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
  const { setSearchPreviewId: r, searchPreviewRef: i } = P(O), { iiifBaseUrl: a, setScrollY: s, tourItems: c } = P(F), { itemData: l } = n, u = c.some((h) => h.id === l.id), m = M(null), d = M(), p = () => {
    const h = document.documentElement.scrollTop;
    R(document, "gtm:push", {
      event: "mmt_artwork_modal",
      artworkTitle: l.title
    }), r(l.id), s(h), i.current.showModal(), setTimeout(() => {
      document.documentElement.classList.add(
        "s-body-locked",
        "s-body-locked--ct"
      ), document.body.scrollTop = h;
    }, 0);
  }, o = j(
    "aic-ct-result o-pinboard__item m-listing m-listing--variable-height",
    {
      "aic-ct-result--selected": u
    }
  );
  return C(() => {
    var h;
    (h = d == null ? void 0 : d.current) != null && h.includes("s-positioned") && m.current.classList.add("s-positioned"), d.current = m.current.className;
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
        onClick: p,
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
          "data-pin-media": I(
            a,
            l.image_id,
            "600",
            void 0,
            void 0,
            !1
          ),
          sizes: "(min-width: 1640px) 336px, (min-width: 1200px) 20.31vw, (min-width: 900px) 28.13vw, (min-width: 600px) 43.75vw,  43.75vw",
          "data-srcset": `${I(
            a,
            l.image_id,
            Math.min(l.thumbnail.width, 200),
            void 0,
            void 0,
            !1
          )} 200w, ${I(
            a,
            l.image_id,
            Math.min(l.thumbnail.width, 400),
            void 0,
            void 0,
            !1
          )} 400w, ${I(
            a,
            l.image_id,
            Math.min(l.thumbnail.width, 843),
            void 0,
            void 0,
            !1
          )} 843w, ${I(
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
    u() && n(a.current_page + 1);
  }, c = () => {
    m() || n(a.current_page - 1);
  }, l = () => (a == null ? void 0 : a.total_pages) > 1, u = () => a.total_pages > a.current_page, m = () => a.current_page <= 1, d = () => ({
    first: L(1, a.total_pages),
    slider: null,
    last: null
  }), p = () => {
    let y = 7;
    return l() ? a.current_page <= y ? o(y) : a.current_page > a.total_pages - y ? h(y) : f() : { first: null, slider: null, last: null };
  }, o = (y) => {
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
    slider: g(),
    last: _()
  }), g = () => L(
    a.current_page - 3,
    a.current_page + 3
  ), E = () => L(1, 2), _ = () => L(a.total_pages - 1, a.total_pages);
  let b = (a == null ? void 0 : a.total_pages) < 3 * 2 + 8 ? d() : p(), v = [
    b.first,
    Array.isArray(b.slider) ? ["..."] : null,
    b.slider,
    Array.isArray(b.last) ? ["..."] : null,
    b.last
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
  const { searchPreviewId: n, searchResultItems: r, searchPreviewRef: i } = P(O), { iiifBaseUrl: a, tourItems: s, tourItemsDispatch: c, limits: l } = P(F), [u, m] = N(!1), [d, p] = N(null), o = j({
    "aic-ct-preview__content": !0,
    "aic-ct-preview--loading": !d,
    "aic-ct-preview__content-warning": s.length >= 6
  });
  C(() => {
    p(
      r.find((g) => g.id === n)
    );
  }, [n, r]);
  const h = () => {
    var g;
    c({
      type: u ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: d
    }), R(document, "gtm:push", {
      event: u ? "mmt_remove_artwork" : "mmt_add_artwork",
      artworkTitle: d.title
    }), (g = i == null ? void 0 : i.current) == null || g.close();
  }, f = () => {
    var g;
    (g = i == null ? void 0 : i.current) == null || g.close();
  };
  return C(() => {
    d && m(s.find((g) => g.id === d.id));
  }, [s, d]), s.length < 6 || u ? /* @__PURE__ */ e.createElement("div", { className: o, id: "aic-ct-preview__content" }, d ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__header aic-ct-preview__core" }, /* @__PURE__ */ e.createElement(
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
      src: I(a, d.image_id, 680, 680),
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
      onClick: h,
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
      onClick: f
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
      onClick: f
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" }))
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__body aic-ct-preview__core" }, /* @__PURE__ */ e.createElement("svg", { className: "icon--max-artworks" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--max-artworks" })), /* @__PURE__ */ e.createElement("p", { className: "f-list-6" }, "You have already added ", l.items.max, " artworks, the maximum number allowed."), /* @__PURE__ */ e.createElement("p", { className: "f-list-6" }, "Please remove one if you would like to choose a different work.")), /* @__PURE__ */ e.createElement("br", null)));
}
function ne({ hideObjectsFromTours: n, hideGalleriesFromTours: r }) {
  const {
    searchError: i,
    searchFetching: a,
    searchResultItems: s,
    searchPreviewRef: c,
    setSearchPreviewId: l,
    activeTheme: u,
    searchParams: m,
    searchQuery: d
  } = P(O), { scrollY: p } = P(F), o = M(null), { fetchData: h } = Y(), f = U(
    (_) => {
      var b;
      (_.type === "close" || (b = c == null ? void 0 : c.current) != null && b.open && _.target === (c == null ? void 0 : c.current)) && (c.current.close(), l(null), document.documentElement.scrollTop = p, document.documentElement.classList.remove(
        "s-body-locked",
        "s-body-locked--ct"
      ));
    },
    [l, p, c]
  ), g = U(() => {
    const _ = new Event("page:updated", { bubbles: !0 });
    setTimeout(() => {
      document.dispatchEvent(_);
    }, 0);
  }, []), E = (_) => {
    h(
      q(
        { ...{ keywords: d, page: _ }, ...m },
        n,
        r
      )
    );
  };
  return C(() => {
    o.current && (s == null ? void 0 : s.length) > 0 && !a && !i && g();
  }, [
    o,
    s,
    a,
    i,
    g
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
      ref: o,
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
  ))), /* @__PURE__ */ e.createElement("p", { className: "u-hide", id: "aic-ct-search__in-your-tour" }, "This object is in your tour", " "), /* @__PURE__ */ e.createElement("p", { className: "sr-only", "aria-live": "polite" }, a ? "Loading" : u ? `Showing results for ${u}` : d ? `Showing results for ${d}` : "Showing default results"));
}
ne.propTypes = {
  hideObjectsFromTours: t.array,
  hideGalleriesFromTours: t.array
};
function $(n = {}) {
  const { id: r, initialValue: i, maxLength: a, valueSetter: s } = n, [c, l] = N(i || ""), u = M(null), m = a - c.length, d = D(c), p = `${r}-invalid-markup`;
  return {
    value: c,
    onChange: (h) => {
      const { value: f } = h.target;
      u.current.ariaBusy = !0, l(f), s && s(f), u.current.ariaBusy = !1;
    },
    countRef: u,
    charsRemaining: m,
    maxLength: a,
    counterEl: /* @__PURE__ */ e.createElement("output", { ref: u }, "(", m, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")"),
    hasMarkup: d,
    markupErrorId: p,
    markupErrorEl: d ? /* @__PURE__ */ e.createElement("span", { id: p, className: "error-msg f-secondary" }, Ce) : null
  };
}
function ie(n) {
  var E;
  const { itemData: r, itemIndex: i, setShouldAssignFocus: a, setRemoveButtons: s } = n, { iiifBaseUrl: c, tourItems: l, tourItemsDispatch: u, limits: m } = P(F), d = M(null);
  let p = M(!1);
  const o = (_) => {
    let b = l.reduce((v, y) => (y == null ? void 0 : y.objectNote.length) > 0 || v, !1);
    p.current == (_ === "") && !b && (p.current = !p.current, R(document, "gtm:push", {
      event: "mmt_artwork_note",
      fieldPopulated: p.current
    }));
  }, h = $({
    id: `aic-ct-note-${r.id}`,
    initialValue: (E = l[i]) == null ? void 0 : E.objectNote,
    maxLength: m.objectNote,
    valueSetter: o
  }), f = B(
    () => ({
      id: r.id,
      objectNote: h.value
    }),
    [r.id, h.value]
  ), g = () => {
    u({
      type: "REMOVE_ITEM",
      payload: r
    }), R(document, "gtm:push", {
      event: "mmt_remove_artwork",
      artworkTitle: r.title
    });
  };
  return C(() => {
    u({
      type: "UPDATE_NOTE",
      payload: f
    });
  }, [f, u]), C(() => {
    const _ = d.current;
    return () => {
      document.activeElement === _ && (l.length > 1 ? l.find((b, v) => {
        b.id === r.id && a({
          flag: !0,
          id: l[v !== l.length - 1 ? v + 1 : v - 1].id
        });
      }) : a({
        flag: !0,
        id: null
      }));
    };
  }, [l, r.id, a]), C(() => (s((_) => [..._, { id: r.id, ref: d }]), () => {
    s(
      (_) => _.filter((b) => b.id !== r.id)
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
        src: I(
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
        ref: d,
        type: "button",
        onClick: () => {
          g(r.id);
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
  }), [l, u] = N([]), m = M(null), d = () => {
    i(0), r.current.focus();
  }, p = () => {
    i(2), r.current.focus();
  };
  return C(() => {
    s.flag && (!n.length && (m != null && m.current) ? m.current.focus() : l.find((o) => o.id === s.id).ref.current.focus(), c(!1));
  }, [n, s, l, m]), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour" }, n.length > 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement("header", { className: "aic-ct-section-header f-body" }, /* @__PURE__ */ e.createElement("h2", { id: "aic-ct-tour__heading", className: "f-module-title-2" }, "Artworks in your tour")), /* @__PURE__ */ e.createElement("div", { className: "f-body aic-ct-tour__intro" }, /* @__PURE__ */ e.createElement("p", null, "Your artworks are listed below in the order that you selected them. Your final tour will have them ordered based on their location in the galleries to give you the easiest tour path."), n.length === 6 && /* @__PURE__ */ e.createElement("p", null, /* @__PURE__ */ e.createElement("br", null), "You've added 6 artworks, the maximum number allowed. You may remove one if you would like to choose a different work."))), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-tour__results" }, n.map((o, h) => /* @__PURE__ */ e.createElement(
    ie,
    {
      key: o.id,
      setRemoveButtons: u,
      itemData: o,
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
      onClick: d
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
      onClick: d
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
    creatorName: l,
    setCreatorName: u,
    recipientName: m,
    setRecipientName: d,
    marketingOptIn: p,
    setMarketingOptIn: o,
    tourDescription: h,
    setTourDescription: f,
    limits: g
  } = P(F);
  let E = M(!1), _ = M(!1);
  const b = (w) => {
    E.current == (w === "") && (E.current = !E.current, R(document, "gtm:push", {
      event: "mmt_personalization",
      fieldPopulated: E.current
    })), u(w);
  }, v = (w) => {
    _.current == (w === "") && (_.current = !_.current, R(document, "gtm:push", {
      event: "mmt_tribute",
      fieldPopulated: _.current
    })), d(w);
  }, y = (w) => {
    E.current == (w === "") && (E.current = !E.current, R(document, "gtm:push", {
      event: "mmt_personalization",
      fieldPopulated: E.current
    })), f(w);
  }, k = (w) => {
    R(document, "gtm:push", {
      event: "mmt_email_optin",
      optInStatus: w
    }), o(w);
  }, S = $({
    id: "aic-ct-metadata__title",
    initialValue: n,
    maxLength: g.title,
    valueSetter: r
  }), x = $({
    id: "aic-ct-metadata__creator-name",
    initialValue: l,
    maxLength: g.creatorName,
    valueSetter: b
  }), A = $({
    id: "aic-ct-metadata__recipient-name",
    initialValue: m,
    maxLength: g.recipientName,
    valueSetter: v
  }), T = $({
    id: "aic-ct-metadata__description",
    initialValue: h,
    maxLength: g.description,
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
    validCreatorEmail: l,
    tourItems: u,
    tourDescription: m,
    validityIssues: d,
    setValidityIssues: p,
    limits: o,
    isSaving: h,
    setIsSaving: f,
    setActiveNavPage: g
  } = P(F), [E, _] = N(null), b = async () => {
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
            artworks: u
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
    r.length || v.push("A tour title"), r.length > o.title && v.push("Tour title must not exceed the character limit"), l || v.push("A valid email address"), m.length > o.description && v.push(
      "Tour description must not exceed the character limit"
    ), u.length < o.items.min && v.push("At least one artwork is required for your tour"), u.length > o.items.max && v.push("Tour must not contain more than 6 artworks"), u.some((y) => {
      var k;
      return ((k = y.objectNote) == null ? void 0 : k.length) > o.objectNote ? (v.push("Notes must not exceed the character limit"), !0) : !1;
    }), D(r) && v.push("Tour title must not contain HTML"), D(i) && v.push("Your name must not contain HTML"), D(s) && v.push(
      "Recipient name must not contain HTML"
    ), D(m) && v.push(
      "Tour description must not contain HTML"
    ), u.some((y) => D(y.objectNote)) && v.push("Notes must not contain HTML"), p(v);
  }, [
    r,
    i,
    s,
    m,
    u,
    p,
    o,
    l
  ]), C(() => {
    E != null && E.id && W.assign(
      `/my-museum-tour/${E.id}?tourCreationComplete=true`
    );
  }, [E]), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation" }, d.length ? /* @__PURE__ */ e.createElement(
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
      /* @__PURE__ */ e.createElement("ul", null, d.map((v, y) => /* @__PURE__ */ e.createElement("li", { className: "f-body", key: y }, v)))
    ),
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation__actions" }, /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "btn btn--secondary f-buttons",
        type: "button",
        onClick: () => {
          u.length ? g(1) : g(0);
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
          onClick: b,
          disabled: h
        },
        "Yes, save my tour"
      ), /* @__PURE__ */ e.createElement(
        "button",
        {
          className: "btn btn--secondary f-buttons",
          type: "button",
          onClick: () => {
            g(1);
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
          onClick: b,
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
    hideObjectsFromTours: i,
    hideGalleriesFromTours: a,
    tourTitle: s,
    tourDescription: c,
    tourItems: l,
    heroImageId: u
  } = n, m = "https://www.artic.edu/iiif/2", d = {
    apiSaveEndpoint: r,
    tourTitle: s,
    tourDescription: c,
    tourItems: l,
    heroImageId: u,
    iiifBaseUrl: m
  }, p = {
    hideObjectsFromTours: i,
    hideGalleriesFromTours: a
  };
  return C(() => {
    document.body.style.overflow = "unset";
  }, []), /* @__PURE__ */ e.createElement("div", { id: "my-museum-tour-builder", className: "my-museum-tour" }, /* @__PURE__ */ e.createElement(z, { ...d }, /* @__PURE__ */ e.createElement(Ie, null), /* @__PURE__ */ e.createElement(K, null, /* @__PURE__ */ e.createElement(H, { id: 0, title: "Choose Your Artworks" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-intro aic-ct-intro--keyline aic-ct__core" }, /* @__PURE__ */ e.createElement("h1", { className: "f-display-2" }, "Create your own tour"), /* @__PURE__ */ e.createElement("p", { className: "f-deck" }, "Choose up to 6 artworks for your tour by searching for a particular work or artist, browsing themes, or selecting from the list of artworks below.")), /* @__PURE__ */ e.createElement(J, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement(X, { ...p }), /* @__PURE__ */ e.createElement(ee, { ...p }), /* @__PURE__ */ e.createElement(ne, { ...p })))), /* @__PURE__ */ e.createElement(H, { id: 1, title: "Personalize" }, u && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-hero aic-ct-full-bleed" }, /* @__PURE__ */ e.createElement(
    "img",
    {
      src: I(m, u, 20, 20, "full"),
      srcSet: `${I(
        m,
        u,
        480,
        480,
        "full"
      )} 320w, ${I(
        m,
        u,
        640,
        640,
        "full"
      )} 480w, ${I(
        m,
        u,
        960,
        960,
        "full"
      )} 640w, ${I(
        m,
        u,
        1280,
        1280,
        "full"
      )} 960w, ${I(
        m,
        u,
        1920,
        1920,
        "full"
      )} 1280w`,
      alt: ""
    }
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-intro aic-ct__core" }, /* @__PURE__ */ e.createElement("h1", { className: "f-display-2" }, "Personalize your tour")), /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement(Oe, null)), /* @__PURE__ */ e.createElement(Re, null)), /* @__PURE__ */ e.createElement(H, { id: 2, title: "Finish and Share" }, /* @__PURE__ */ e.createElement(je, null))), /* @__PURE__ */ e.createElement(Fe, null)));
};
Le.propTypes = {
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
  Le as default
};
