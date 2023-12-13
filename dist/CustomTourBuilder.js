import e, { createContext as V, useState as g, useReducer as ue, useRef as C, useMemo as j, useContext as N, useEffect as y, useCallback as de } from "react";
import t from "prop-types";
const he = (r, a) => {
  switch (a.type) {
    case "ADD_ITEM":
      return [...r, { ...a.payload, objectNote: "" }];
    case "UPDATE_NOTE":
      return r.map((n) => n.id === a.payload.id ? { ...n, objectNote: a.payload.objectNote } : n);
    case "REMOVE_ITEM":
      return r.filter(({ id: n }) => n !== a.payload);
    default:
      return r;
  }
}, S = V();
function D(r) {
  const {
    children: a,
    tourTitle: n,
    creatorEmail: c,
    creatorName: m,
    recipientName: s,
    tourDescription: i,
    marketingOptIn: l,
    tourItems: o,
    navPages: d,
    apiSaveEndpoint: u,
    iiifBaseUrl: h,
    unloadHandler: p
  } = r, [f, v] = g(n || ""), [E, b] = g(c || ""), [w, k] = g(!1), [_, x] = g(m || ""), [P, U] = g(s || ""), [Q, z] = g(
    l || !1
  ), [J, G] = g(
    i || ""
  ), [W, K] = g(d || []), [X, Z] = g(0), [ee, te] = ue(
    he,
    o || []
  ), ae = C(null), [re, ne] = g([]), ie = u || "/api/v1/custom-tours", [se, ce] = g(!1), [le, oe] = g(0), me = j(
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
    S.Provider,
    {
      value: {
        apiSaveEndpoint: ie,
        iiifBaseUrl: h,
        limits: me,
        tourTitle: f,
        setTourTitle: v,
        creatorEmail: E,
        setCreatorEmail: b,
        validCreatorEmail: w,
        setValidCreatorEmail: k,
        creatorName: _,
        setCreatorName: x,
        recipientName: P,
        setRecipientName: U,
        tourDescription: J,
        setTourDescription: G,
        marketingOptIn: Q,
        setMarketingOptIn: z,
        tourItems: ee,
        tourItemsDispatch: te,
        navPages: W,
        setNavPages: K,
        activeNavPage: X,
        setActiveNavPage: Z,
        headerNextButtonRef: ae,
        validityIssues: re,
        setValidityIssues: ne,
        isSaving: se,
        setIsSaving: ce,
        scrollY: le,
        setScrollY: oe,
        unloadHandler: p
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
  navPages: t.instanceOf(Array),
  unloadHandler: t.func
};
S.Provider.propTypes = {
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
function pe() {
  const { activeNavPage: r, setActiveNavPage: a, tourItems: n, headerNextButtonRef: c } = N(S), m = n.length, s = () => {
    a(r === 0 ? 1 : 2);
  };
  return /* @__PURE__ */ e.createElement(
    "header",
    {
      id: "aic-ct-header",
      className: "aic-ct-header f-body",
      "aria-label": "Custom tour builder"
    },
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-item-info", "aria-live": "polite" }, /* @__PURE__ */ e.createElement("span", { id: "aic-ct-item-count", className: "aic-ct-item-count f-body" }, m), " ", /* @__PURE__ */ e.createElement("span", null, "artworks added ", /* @__PURE__ */ e.createElement("em", null, "(of max 6)"))),
    /* @__PURE__ */ e.createElement(
      "button",
      {
        ref: c,
        id: "aic-ct-header__button",
        className: "aic-ct-header__button btn btn--transparent btn--w-icon f-buttons",
        type: "button",
        onClick: s
      },
      r === 0 && "Preview",
      r > 0 && "Finish",
      /* @__PURE__ */ e.createElement("svg", { className: "icon--arrow", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--arrow" }))
    )
  );
}
function fe(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var O = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(r) {
  (function() {
    var a = {}.hasOwnProperty;
    function n() {
      for (var c = [], m = 0; m < arguments.length; m++) {
        var s = arguments[m];
        if (s) {
          var i = typeof s;
          if (i === "string" || i === "number")
            c.push(s);
          else if (Array.isArray(s)) {
            if (s.length) {
              var l = n.apply(null, s);
              l && c.push(l);
            }
          } else if (i === "object") {
            if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]")) {
              c.push(s.toString());
              continue;
            }
            for (var o in s)
              a.call(s, o) && s[o] && c.push(o);
          }
        }
      }
      return c.join(" ");
    }
    r.exports ? (n.default = n, r.exports = n) : window.classNames = n;
  })();
})(O);
var be = O.exports;
const F = /* @__PURE__ */ fe(be);
function ge() {
  const { navPages: r, activeNavPage: a, setActiveNavPage: n, isSaving: c } = N(S), m = (s) => F("aic-ct-nav__button btn f-buttons btn--transparent", {
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
        className: m(s.id)
      },
      /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__button-wrapper" }, /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__number" }, s.id + 1), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__title" }, s.title), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__tagline" }, s.tagline))
    ))
  ), /* @__PURE__ */ e.createElement(
    "a",
    {
      href: "/custom-tours",
      className: "btn btn--transparent btn--w-icon f-buttons aic-ct-nav__exit",
      type: "button"
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" })),
    "Exit custom tour"
  ));
}
function q({ children: r }) {
  const { setNavPages: a } = N(S);
  return y(() => {
    a(
      r ? r.map((n, c) => ({
        id: c,
        title: n.props.title,
        tagline: n.props.tagline
      })) : []
    );
  }, [r, a]), /* @__PURE__ */ e.createElement("div", { id: "aic-ct-nav-pages" }, r);
}
q.propTypes = {
  children: t.node.isRequired
};
function A(r) {
  const { id: a, children: n } = r, { activeNavPage: c } = N(S);
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
A.propTypes = {
  id: t.number.isRequired,
  title: t.string.isRequired,
  tagline: t.string.isRequired,
  children: t.oneOfType([
    t.arrayOf(t.element),
    t.object
  ]).isRequired
};
const T = V();
function L(r) {
  const {
    children: a,
    searchResultItems: n,
    searchQuery: c,
    searchFetching: m,
    searchError: s,
    searchPreviewId: i
  } = r, [l, o] = g(
    n || null
  ), [d, u] = g(c || ""), [h, p] = g(
    m || !1
  ), [f, v] = g(s || !1), [E, b] = g(null), [w, k] = g(
    i || null
  ), _ = C();
  return /* @__PURE__ */ e.createElement(
    T.Provider,
    {
      value: {
        searchResultItems: l,
        setSearchResultItems: o,
        searchQuery: d,
        setSearchQuery: u,
        searchFetching: h,
        setSearchFetching: p,
        searchError: f,
        setSearchError: v,
        activeTheme: E,
        setActiveTheme: b,
        searchPreviewId: w,
        setSearchPreviewId: k,
        searchPreviewRef: _
      }
    },
    a
  );
}
L.propTypes = {
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
const $ = (r) => {
  const [a, n] = g(null), [c, m] = g(!1), [s, i] = g(null), [l, o] = g(null), { dataSubSelector: d, dataSetter: u, fetchingSetter: h, errorSetter: p } = r || {}, f = () => {
    n(null), m(!1), i(null), o(null);
  }, v = async (E) => {
    m(!0);
    const b = new AbortController();
    o(b);
    try {
      const k = await (await fetch(E, { signal: b.signal })).json();
      n(d ? k[d] : k), i(null), m(!1);
    } catch (w) {
      if (w.name === "AbortError") {
        f();
        return;
      }
      i("Error fetching results"), m(!1);
    }
  };
  return y(() => {
    const E = l;
    return () => {
      E && E.abort();
    };
  }, [l]), y(() => {
    u && u(a);
  }, [a, u]), y(() => {
    p && p(s);
  }, [s, p]), y(() => {
    h && h(c);
  }, [c, h]), { data: a, fetching: c, error: s, fetchData: v, resetState: f };
};
function I(r, a, n = "", c = "", m = "full", s = !0) {
  return `${r}/${a}/${m}/${s ? "!" : ""}${n},${c}/0/default.jpg`;
}
function B(r) {
  const a = new URL("https://api.artic.edu/api/v1/artworks/search");
  return a.searchParams.set("query[bool][must][][term][is_on_view]", "true"), a.searchParams.set("query[bool][must][][exists][field]", "description"), a.searchParams.set("query[bool][should][][exists][field]", "description"), a.searchParams.set("query[bool][should][][exists][field]", "subject_id"), a.searchParams.set("query[bool][should][][exists][field]", "style_id"), a.searchParams.set("query[bool][should][][term][is_boosted]", "true"), a.searchParams.set("query[bool][minimum_should_match]", "1"), a.searchParams.set(
    "fields",
    "artist_title,description,id,image_id,thumbnail,title,date_display,gallery_title,gallery_id"
  ), a.searchParams.set("limit", "60"), r.keywords && a.searchParams.set("q", r.keywords), r.subjectIds && a.searchParams.set(
    "query[bool][must][][terms][subject_ids][]",
    r.subjectIds
  ), r.categoryIds && a.searchParams.set(
    "query[bool][must][][term][category_ids][value]",
    r.categoryIds
  ), a;
}
const ve = {
  assign: (r) => window.location.assign(r)
};
function Ee() {
  const {
    searchQuery: r,
    setSearchQuery: a,
    setSearchResultItems: n,
    setSearchFetching: c,
    setSearchError: m,
    setActiveTheme: s
  } = N(T), { fetchData: i } = $({
    dataSubSelector: "data",
    dataSetter: n,
    fetchingSetter: c,
    errorSetter: m
  }), l = (u) => {
    i(B({ keywords: r })), s(null), u.preventDefault();
  }, o = C(null), d = F("m-search-bar aic-ct-search", {
    "s-autocomplete-active": r
  });
  return /* @__PURE__ */ e.createElement(
    "form",
    {
      id: "aic-ct-search",
      role: "search",
      "aria-label": "Objects for your tour",
      onSubmit: l,
      className: d
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
        onChange: (u) => {
          u.target.value && u.target.setCustomValidity(""), a(u.target.value);
        },
        onInvalid: (u) => {
          u.target.setCustomValidity("You must enter a search term");
        },
        required: !0
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
          a(""), n(null), s(null), o.current.focus();
        }
      },
      /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--close" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close" }))
    ))
  );
}
function M(r) {
  const { id: a, label: n, subjectIds: c, categoryIds: m, thumbnailId: s } = r, { iiifBaseUrl: i } = N(S), {
    setSearchResultItems: l,
    setSearchFetching: o,
    setSearchError: d,
    setSearchQuery: u,
    activeTheme: h,
    setActiveTheme: p
  } = N(T), { fetchData: f, resetState: v } = $({
    dataSubSelector: "data",
    dataSetter: l,
    fetchingSetter: o,
    errorSetter: d
  }), E = () => {
    h === n ? (p(null), v()) : (f(B({ subjectIds: c, categoryIds: m })), p(n), u(""));
  }, b = F(
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
      id: `aic-ct-theme-toggle-${a}`,
      onClick: E,
      "aria-pressed": h === n ? "true" : "false"
    },
    /* @__PURE__ */ e.createElement("span", { className: "aic-ct-theme-toggle__wrapper" }, /* @__PURE__ */ e.createElement(
      "img",
      {
        src: I(i, s, "40", "40", "square"),
        alt: ""
      }
    ), n, h === n && /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--close" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close" })))
  )));
}
M.propTypes = {
  id: t.number.isRequired,
  label: t.string.isRequired,
  subjectIds: t.arrayOf(t.string),
  categoryIds: t.arrayOf(t.string),
  thumbnailId: t.string.isRequired
};
function _e() {
  const r = [
    {
      label: "Landscapes",
      subjectIds: ["TM-8657"],
      thumbnailId: "2d484387-2509-5e8e-2c43-22f9981972eb"
    },
    {
      label: "Fashion",
      subjectIds: ["TM-8663"],
      thumbnailId: "b272df73-a965-ac37-4172-be4e99483637"
    },
    {
      label: "Mythology",
      subjectIds: ["TM-8766"],
      thumbnailId: "3e41420d-2bae-5863-1980-fd39a78e1ffe"
    },
    {
      label: "Animals",
      subjectIds: ["TM-12218"],
      thumbnailId: "9ae64560-a416-ec19-851a-c76c5ca3c64f"
    },
    {
      label: "Chicago artists",
      categoryIds: ["PC-154"],
      thumbnailId: "f7f9615d-2c2b-6b23-47b2-cd6cdc846504"
    },
    {
      label: "Essentials",
      categoryIds: ["PC-831"],
      thumbnailId: "25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e"
    }
  ];
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("header", { className: "aic-ct-section-header" }, /* @__PURE__ */ e.createElement("h2", { className: "f-module-title-2" }, "Browse by theme")), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-themes", className: "aic-ct-themes" }, r.map((a, n) => /* @__PURE__ */ e.createElement(
    M,
    {
      key: a.label,
      id: n,
      label: a.label,
      subjectIds: a.subjectIds,
      categoryIds: a.categoryIds,
      thumbnailId: a.thumbnailId
    }
  ))));
}
function H(r) {
  const { setSearchPreviewId: a, searchPreviewRef: n } = N(T), { iiifBaseUrl: c, setScrollY: m, tourItems: s } = N(S), { itemData: i } = r, l = s.some((p) => p.id === i.id), o = C(null), d = C(), u = () => {
    const p = document.documentElement.scrollTop;
    a(i.id), m(p), n.current.showModal(), document.documentElement.classList.add("s-body-locked"), setTimeout(() => {
      document.body.scrollTop = p;
    }, 0);
  }, h = F(
    "aic-ct-result o-pinboard__item m-listing m-listing--variable-height",
    {
      "aic-ct-result--selected": l
    }
  );
  return y(() => {
    var p;
    (p = d == null ? void 0 : d.current) != null && p.includes("s-positioned") && o.current.classList.add("s-positioned"), d.current = o.current.className;
  }), /* @__PURE__ */ e.createElement(
    "li",
    {
      ref: o,
      id: `aic-ct-search-item-${i.id}`,
      className: h
    },
    i.image_id && /* @__PURE__ */ e.createElement(
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
          src: i.thumbnail.lqip,
          alt: "",
          height: i.thumbnail.height,
          width: i.thumbnail.width,
          "data-iiif-id": `${c}/${i.image_id}`,
          "data-pin-media": I(
            c,
            i.image_id,
            "600",
            void 0,
            void 0,
            !1
          ),
          sizes: "(min-width: 1640px) 336px, (min-width: 1200px) 20.31vw, (min-width: 900px) 28.13vw, (min-width: 600px) 43.75vw,  43.75vw",
          "data-srcset": `${I(
            c,
            i.image_id,
            "200",
            void 0,
            void 0,
            !1
          )} 200w, ${I(
            c,
            i.image_id,
            "400",
            void 0,
            void 0,
            !1
          )} 400w, ${I(
            c,
            i.image_id,
            "843",
            void 0,
            void 0,
            !1
          )} 843w, ${I(
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
H.propTypes = {
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
  const { searchPreviewId: r, searchResultItems: a, searchPreviewRef: n } = N(T), { iiifBaseUrl: c, tourItems: m, tourItemsDispatch: s } = N(S), [i, l] = g(!1), [o, d] = g(null), u = F({
    "aic-ct-preview__content": !0,
    "aic-ct-preview--loading": !o
  });
  y(() => {
    d(
      a.find((f) => f.id === r)
    );
  }, [r, a]);
  const h = () => {
    var f;
    s({
      type: i ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: i ? o.id : o
    }), (f = n == null ? void 0 : n.current) == null || f.close();
  }, p = () => {
    var f;
    (f = n == null ? void 0 : n.current) == null || f.close();
  };
  return y(() => {
    o && l(m.find((f) => f.id === o.id));
  }, [m, o]), /* @__PURE__ */ e.createElement("div", { className: u, id: "aic-ct-preview__content" }, o ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__header aic-ct-preview__padded" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-preview__close",
      className: "btn btn--icon btn--transparent aic-ct-preview__close",
      type: "button",
      "aria-label": "Close",
      onClick: p
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" }))
  ), /* @__PURE__ */ e.createElement("h2", { className: "f-module-title-2" }, "Artwork details")), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__image" }, /* @__PURE__ */ e.createElement(
    "img",
    {
      src: I(c, o.image_id, 680, 680),
      width: o.thumbnail.width,
      height: o.thumbnail.height,
      alt: o.thumbnail.alt_text || ""
    }
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__padded" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__details" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__title f-headline-editorial" }, o.title, o.date_display && /* @__PURE__ */ e.createElement(e.Fragment, null, ",", " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-preview__date f-list-4" }, o.date_display))), o.artist_title && /* @__PURE__ */ e.createElement("p", { className: "aic-ct-preview__artist f-subheading-1" }, o.artist_title)), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__links" }, (m.length < 6 || i) && /* @__PURE__ */ e.createElement(
    "button",
    {
      id: `aic-ct-preview__action-button-${o.id}`,
      className: "btn f-buttons aic-ct-preview__action-button",
      type: "button",
      onClick: h,
      "aria-pressed": i ? "true" : "false",
      "aria-label": "Toggle from your tour"
    },
    i ? "Remove from your tour" : "Add to your tour"
  ), /* @__PURE__ */ e.createElement(
    "a",
    {
      className: "f-link",
      target: "_blank",
      rel: "noopener noreferrer",
      href: `https://www.artic.edu/artworks/${o.id}`
    },
    "View full artwork page ",
    /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--new-window" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--new-window" }))
  )), o.description && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__description" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__description-title f-module-title-2" }, "Artwork description"), /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "f-body",
      dangerouslySetInnerHTML: { __html: o.description }
    }
  )), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn--transparent btn--w-icon f-buttons aic-ct-preview__close-trans",
      type: "button",
      onClick: p
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" })),
    "Close and back to results"
  ))) : /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__padded aic-ct-loader f-body" }, /* @__PURE__ */ e.createElement("p", null, "Loading..."), /* @__PURE__ */ e.createElement("div", { className: "loader" })));
}
function Ne() {
  const {
    searchError: r,
    searchFetching: a,
    searchResultItems: n,
    searchPreviewRef: c,
    setSearchPreviewId: m
  } = N(T), { scrollY: s } = N(S), i = de(() => {
    m(null), document.documentElement.scrollTop = s, document.documentElement.classList.remove("s-body-locked");
  }, [m, s]);
  return y(() => {
    const l = c.current;
    return l && l.addEventListener("close", i), () => {
      l && l.removeEventListener("close", i);
    };
  }, [c, i]), y(() => {
    const l = new Event("page:updated", { bubbles: !0 });
    setTimeout(() => {
      document.dispatchEvent(l);
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
    /* @__PURE__ */ e.createElement("p", null, "Sorry, we couldn’t find any results matching your criteria")
  ), (n == null ? void 0 : n.length) > 0 && !a && !r && // Render the results if there are results
  /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("header", { className: "aic-ct-section-header f-body" }, /* @__PURE__ */ e.createElement("h2", { className: "f-module-title-2" }, "Choose artworks"), /* @__PURE__ */ e.createElement(
    "span",
    {
      id: "aic-ct-search-result-count",
      className: "aic-ct-item-count aic-ct-item-count--body"
    },
    n.length
  )), /* @__PURE__ */ e.createElement("p", { className: "aic-ct-pre-result-text f-body" }, "Browse these artworks currently on view and available for your tour."), /* @__PURE__ */ e.createElement(
    "ul",
    {
      id: "aic-ct-search-results__items",
      className: "o-pinboard o-pinboard--2-col@xsmall o-pinboard--2-col@small o-pinboard--3-col@medium o-pinboard--4-col@large o-pinboard--4-col@xlarge",
      "data-pinboard-option-layout": "o-pinboard--2-col@xsmall o-pinboard--2-col@small o-pinboard--2-col@medium o-pinboard--3-col@large o-pinboard--3-col@xlarge",
      "data-pinboard-maintain-order": "false",
      "data-behavior": "pinboard"
    },
    n.map((l) => /* @__PURE__ */ e.createElement(H, { key: l.id, itemData: l }))
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
function R(r = {}) {
  const { initialValue: a, maxLength: n, valueSetter: c } = r, [m, s] = g(a || ""), i = C(null), l = n - m.length;
  return {
    value: m,
    onChange: (d) => {
      const { value: u } = d.target;
      i.current.ariaBusy = !0, s(u), c && c(u), i.current.ariaBusy = !1;
    },
    countRef: i,
    charsRemaining: l,
    maxLength: n,
    counterEl: /* @__PURE__ */ e.createElement("output", { ref: i }, "(", l, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")
  };
}
function Y(r) {
  var f;
  const { itemData: a, itemIndex: n, setShouldAssignFocus: c, setRemoveButtons: m } = r, { iiifBaseUrl: s, tourItems: i, tourItemsDispatch: l, limits: o } = N(S), d = C(null), u = R({
    initialValue: (f = i[n]) == null ? void 0 : f.objectNote,
    maxLength: o.objectNote
  }), h = j(
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
  return y(() => {
    l({
      type: "UPDATE_NOTE",
      payload: h
    });
  }, [h, l]), y(() => {
    const v = d.current;
    return () => {
      document.activeElement === v && (i.length > 1 ? i.find((E, b) => {
        E.id === a.id && c({
          flag: !0,
          id: i[b !== i.length - 1 ? b + 1 : b - 1].id
        });
      }) : c({
        flag: !0,
        id: null
      }));
    };
  }, [i, a.id, c]), y(() => (m((v) => [...v, { id: a.id, ref: d }]), () => {
    m(
      (v) => v.filter((E) => E.id !== a.id)
    );
  }), [m, i, a.id]), /* @__PURE__ */ e.createElement("li", { className: "aic-ct-tour-item", id: `aic-ct-tour-item-${a.id}` }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour-item__lockup" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour-item__info" }, a.title && /* @__PURE__ */ e.createElement("h2", { className: "aic-ct-tour-item__title f-deck" }, a.title, a.date_display && /* @__PURE__ */ e.createElement(e.Fragment, null, ", ", a.date_display)), a.artist_title && /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-tour-item__artist f-body" }, a.artist_title), a.gallery_title && /* @__PURE__ */ e.createElement("p", { className: "aic-ct-tour-item__gallery f-secondary" }, /* @__PURE__ */ e.createElement("svg", { className: "icon--location", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--location" })), a.gallery_title)), a.image_id && /* @__PURE__ */ e.createElement(
    "img",
    {
      className: "aic-ct-tour-item-image",
      src: I(
        s,
        a.image_id,
        "96",
        "128",
        "full",
        !0
      ),
      alt: a.thumbnail.alt_text
    }
  )), a.description && /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "aic-ct-tour-item__description f-body ",
      dangerouslySetInnerHTML: { __html: a.description }
    }
  ), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour-item__note" }, /* @__PURE__ */ e.createElement(
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
  ), u.counterEl))), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn--transparent f-secondary aic-ct-tour-item__remove",
      ref: d,
      type: "button",
      onClick: () => {
        p(a.id);
      }
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--delete", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--delete" })),
    "Remove from tour"
  ));
}
Y.propTypes = {
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
  const { tourItems: r, headerNextButtonRef: a, setActiveNavPage: n } = N(S), [c, m] = g({
    flag: !1,
    id: null
  }), [s, i] = g([]), l = C(null), o = () => {
    n(0), a.current.focus();
  }, d = () => {
    n(2), a.current.focus();
  };
  return y(() => {
    c.flag && (!r.length && (l != null && l.current) ? l.current.focus() : s.find((u) => u.id === c.id).ref.current.focus(), m(!1));
  }, [r, c, s, l]), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour" }, r.length > 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("header", { className: "aic-ct-section-header f-body" }, /* @__PURE__ */ e.createElement("h2", { id: "aic-ct-tour__heading", className: "f-module-title-2" }, "Artworks in your tour")), /* @__PURE__ */ e.createElement("div", { className: "f-body aic-ct-tour__intro" }, /* @__PURE__ */ e.createElement("p", null, "To optimize your visit, we automatically arrange the order of your tour based on the location of the artwork in the museum."), r.length === 6 && /* @__PURE__ */ e.createElement("p", null, "You've added 6 artworks, the maximum number allowed. Please remove one if you would like to include more artwork.")), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-tour__results" }, r.map((u, h) => /* @__PURE__ */ e.createElement(
    Y,
    {
      key: u.id,
      setRemoveButtons: i,
      itemData: u,
      itemIndex: h,
      shouldAssignFocus: c,
      setShouldAssignFocus: m
    }
  )))), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta" }, r.length > 0 && r.length < 6 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You've added ", r.length, " ", r.length === 1 ? "artwork" : "artworks", " to your tour"), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: l,
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
      onClick: d
    },
    "Finish creating tour"
  ))), r.length === 6 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You've added ", r.length, " artworks, the maximum number allowed. Please remove one if you would like to include more artwork"), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "f-buttons btn btn--primary",
      onClick: d
    },
    "Finish creating tour"
  ))), r.length === 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You haven't added any artworks to your tour yet"), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: l,
      id: "aic-ct-tour__cta-browse",
      type: "button",
      className: "f-buttons btn btn--secondary",
      onClick: o
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
    setValidCreatorEmail: m,
    creatorName: s,
    setCreatorName: i,
    recipientName: l,
    setRecipientName: o,
    marketingOptIn: d,
    setMarketingOptIn: u,
    tourDescription: h,
    setTourDescription: p,
    limits: f
  } = N(S), v = R({
    initialValue: r,
    maxLength: f.title,
    valueSetter: a
  }), E = R({
    initialValue: s,
    maxLength: f.creatorName,
    valueSetter: i
  }), b = R({
    initialValue: l,
    maxLength: f.recipientName,
    valueSetter: o
  }), w = R({
    initialValue: h,
    maxLength: f.description,
    valueSetter: p
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
        c(k.target.value), m(k.target.validity.valid);
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
      value: b.value,
      onChange: b.onChange,
      id: "aic-ct-metadata__recipient-name",
      maxLength: b.maxLength
    }
  ), b.counterEl))), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement(
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
  ), /* @__PURE__ */ e.createElement("span", { className: "f-body" }, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__opt-in", className: "label" }, "I would like to recieve marketing emails from AIC"))), /* @__PURE__ */ e.createElement(
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
    apiSaveEndpoint: r,
    tourTitle: a,
    creatorName: n,
    creatorEmail: c,
    recipientName: m,
    marketingOptIn: s,
    validCreatorEmail: i,
    tourItems: l,
    tourDescription: o,
    validityIssues: d,
    setValidityIssues: u,
    limits: h,
    isSaving: p,
    setIsSaving: f,
    setActiveNavPage: v,
    unloadHandler: E
  } = N(S), [b, w] = g(null), k = async () => {
    f(!0);
    try {
      const _ = await fetch(`${r}`, {
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
            recipientName: m,
            description: o,
            // "artworks" is essentially everything from the GET response with added "objectNote"
            // The API expects these fields named in this way
            artworks: l
          }
        })
      });
      if (!_.ok)
        throw new Error(
          "There was a problem saving your tour, please try again. If the problem persists, please contact us and let us know."
        );
      const { message: x, custom_tour: P } = await _.json();
      w({
        type: "success",
        message: x,
        id: P.id
      });
    } catch (_) {
      w({
        type: "error",
        message: _.message
      });
    }
    f(!1);
  };
  return y(() => {
    const _ = [];
    a.length || _.push("A title is required"), a.length > h.title && _.push("Tour title must not exceed the character limit"), i || _.push("A valid email address is required"), o.length > h.description && _.push(
      "Tour description must not exceed the character limit"
    ), l.length < h.items.min && _.push("At least one item is required"), l.length > h.items.max && _.push("Tours must not contain more than 6 artworks"), l.some((x) => {
      var P;
      return ((P = x.objectNote) == null ? void 0 : P.length) > h.objectNote ? (_.push("Notes must not exceed the character limit"), !0) : !1;
    }), u(_);
  }, [
    a,
    o,
    l,
    u,
    h,
    i
  ]), y(() => {
    b != null && b.id && (window.removeEventListener("beforeunload", E), ve.assign(
      `/custom-tours/${b.id}?tourCreationComplete=true`
    ));
  }, [b, E]), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation" }, d.length ? /* @__PURE__ */ e.createElement(
    "div",
    {
      id: "aic-ct-validation__error",
      className: "aic-ct-validation__error aic-ct-validation__content"
    },
    /* @__PURE__ */ e.createElement("h1", { className: "f-headline" }, "Finish your tour?"),
    /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "Fix these issue before finishing your tour:"),
    /* @__PURE__ */ e.createElement(
      "div",
      {
        id: "aic-ct-validation__errors",
        className: "aic-ct-validation__errors aic-ct-validation__content o-blocks"
      },
      /* @__PURE__ */ e.createElement("ul", null, d.map((_, x) => /* @__PURE__ */ e.createElement("li", { className: "f-body", key: x }, _)))
    ),
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation__actions" }, /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "btn btn--secondary f-buttons",
        type: "button",
        onClick: () => {
          l.length ? v(1) : v(0);
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
      /* @__PURE__ */ e.createElement("h1", { className: "f-headline" }, "Are you sure you want to submit your tour?"),
      /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You won't be able to edit it once this has been done.", /* @__PURE__ */ e.createElement("br", null), "Your tour will be automatically emailed to you when finished."),
      /* @__PURE__ */ e.createElement("div", { className: "aic-ct-validation__actions" }, /* @__PURE__ */ e.createElement(
        "button",
        {
          id: "aic-ct-save-button",
          className: "btn btn--primary f-buttons",
          type: "button",
          onClick: k,
          disabled: p
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
          onClick: k,
          disabled: p
        },
        "Try again"
      ))
    ))
  ));
}
const Se = (r) => {
  const {
    apiSaveEndpoint: a,
    tourTitle: n,
    tourDescription: c,
    tourItems: m,
    heroImageId: s
  } = r, i = "https://artic.edu/iiif/2", l = (d) => {
    d.preventDefault(), d.returnValue = "";
  }, o = {
    apiSaveEndpoint: a,
    tourTitle: n,
    tourDescription: c,
    tourItems: m,
    heroImageId: s,
    iiifBaseUrl: i,
    unloadHandler: l
  };
  return y(() => {
    window.addEventListener("beforeunload", l);
  }, []), /* @__PURE__ */ e.createElement("div", { className: "custom-tours" }, /* @__PURE__ */ e.createElement(D, { ...o }, /* @__PURE__ */ e.createElement(pe, null), /* @__PURE__ */ e.createElement(q, null, /* @__PURE__ */ e.createElement(
    A,
    {
      id: 0,
      title: "Browse",
      tagline: "for artworks to add to your tour"
    },
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-intro aic-ct-intro--keyline" }, /* @__PURE__ */ e.createElement("h1", { className: "f-display-2" }, "Create your own tour"), /* @__PURE__ */ e.createElement("p", { className: "f-deck" }, "Select from the list of available artworks or browse themes to help get you started. Choose up to 6 artworks for your tour.")),
    /* @__PURE__ */ e.createElement(L, null, /* @__PURE__ */ e.createElement(Ee, null), /* @__PURE__ */ e.createElement(_e, null), /* @__PURE__ */ e.createElement(Ne, null))
  ), /* @__PURE__ */ e.createElement(
    A,
    {
      id: 1,
      title: "Personalize",
      tagline: "your tour by adding notes to artworks"
    },
    s && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-hero" }, /* @__PURE__ */ e.createElement(
      "img",
      {
        src: I(i, s, 20, 20, "full"),
        srcSet: `${I(
          i,
          s,
          480,
          480,
          "full"
        )} 320w, ${I(
          i,
          s,
          640,
          640,
          "full"
        )} 480w, ${I(
          i,
          s,
          960,
          960,
          "full"
        )} 640w, ${I(
          i,
          s,
          1280,
          1280,
          "full"
        )} 960w, ${I(
          i,
          s,
          1920,
          1920,
          "full"
        )} 1280w`,
        alt: ""
      }
    )),
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-intro" }, /* @__PURE__ */ e.createElement("h1", { className: "f-display-2" }, "Personalize your tour")),
    /* @__PURE__ */ e.createElement(ke, null),
    /* @__PURE__ */ e.createElement(we, null)
  ), /* @__PURE__ */ e.createElement(A, { id: 2, title: "Complete", tagline: "and share with friends" }, /* @__PURE__ */ e.createElement(Ie, null))), /* @__PURE__ */ e.createElement(ge, null)));
};
Se.propTypes = {
  apiSaveEndpoint: t.string,
  tourTitle: t.string,
  tourDescription: t.string,
  tourItems: t.array,
  searchPreviewId: t.number,
  heroImageId: t.string
};
export {
  Se as default
};
