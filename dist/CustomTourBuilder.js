import e, { createContext as q, useState as b, useReducer as pe, useRef as x, useMemo as O, useContext as N, useEffect as g, useCallback as L } from "react";
import t from "prop-types";
const he = (r, a) => {
  switch (a.type) {
    case "ADD_ITEM":
      return a.payload.short_description && (a.payload.description = a.payload.short_description), delete a.payload.short_description, [...r, { ...a.payload, objectNote: "" }];
    case "UPDATE_NOTE":
      return r.map((n) => n.id === a.payload.id ? { ...n, objectNote: a.payload.objectNote } : n);
    case "REMOVE_ITEM":
      return r.filter(({ id: n }) => n !== a.payload);
    default:
      return r;
  }
}, I = q();
function V(r) {
  const {
    children: a,
    tourTitle: n,
    creatorEmail: s,
    creatorName: m,
    recipientName: c,
    tourDescription: i,
    marketingOptIn: u,
    tourItems: o,
    navPages: l,
    apiSaveEndpoint: d,
    iiifBaseUrl: h,
    unloadHandler: p
  } = r, [v, f] = b(n || ""), [E, _] = b(s || ""), [w, k] = b(!1), [y, C] = b(m || ""), [P, z] = b(c || ""), [J, G] = b(
    u || !1
  ), [K, W] = b(
    i || ""
  ), [X, Z] = b(l || []), [ee, te] = b(0), [ae, re] = pe(
    he,
    o || []
  ), ne = x(null), [ie, se] = b([]), ce = d || "/api/v1/custom-tours", [le, oe] = b(!1), [me, ue] = b(0), de = O(
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
    I.Provider,
    {
      value: {
        apiSaveEndpoint: ce,
        iiifBaseUrl: h,
        limits: de,
        tourTitle: v,
        setTourTitle: f,
        creatorEmail: E,
        setCreatorEmail: _,
        validCreatorEmail: w,
        setValidCreatorEmail: k,
        creatorName: y,
        setCreatorName: C,
        recipientName: P,
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
        headerNextButtonRef: ne,
        validityIssues: ie,
        setValidityIssues: se,
        isSaving: le,
        setIsSaving: oe,
        scrollY: me,
        setScrollY: ue,
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
function fe(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var $ = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(r) {
  (function() {
    var a = {}.hasOwnProperty;
    function n() {
      for (var s = [], m = 0; m < arguments.length; m++) {
        var c = arguments[m];
        if (c) {
          var i = typeof c;
          if (i === "string" || i === "number")
            s.push(c);
          else if (Array.isArray(c)) {
            if (c.length) {
              var u = n.apply(null, c);
              u && s.push(u);
            }
          } else if (i === "object") {
            if (c.toString !== Object.prototype.toString && !c.toString.toString().includes("[native code]")) {
              s.push(c.toString());
              continue;
            }
            for (var o in c)
              a.call(c, o) && c[o] && s.push(o);
          }
        }
      }
      return s.join(" ");
    }
    r.exports ? (n.default = n, r.exports = n) : window.classNames = n;
  })();
})($);
var be = $.exports;
const R = /* @__PURE__ */ fe(be);
function S(r, a, n = "", s = "", m = "full", c = !0) {
  return `${r}/${a}/${m}/${c ? "!" : ""}${n},${s}/0/default.jpg`;
}
function F(r) {
  const a = new URL("https://api.artic.edu/api/v1/artworks/search");
  a.searchParams.set("query[bool][must][][term][is_on_view]", "true"), a.searchParams.set("query[bool][must][][exists][field]", "description"), a.searchParams.set("query[bool][should][][exists][field]", "description"), a.searchParams.set("query[bool][should][][exists][field]", "subject_id"), a.searchParams.set("query[bool][should][][exists][field]", "style_id"), a.searchParams.set("query[bool][should][][term][is_boosted]", "true"), a.searchParams.set("query[bool][minimum_should_match]", "1"), a.searchParams.set(
    "fields",
    "artist_title,short_description,description,id,image_id,thumbnail,title,date_display,gallery_title,gallery_id"
  ), a.searchParams.set("limit", "60"), typeof r.keywords < "u" && a.searchParams.set("q", r.keywords);
  for (const [n, s] of Object.entries(r))
    n.includes("_ids") && a.searchParams.set(`query[bool][must][][terms][${n}][]`, s);
  return a;
}
const j = {
  assign: (r) => window.location.assign(r)
};
function _e() {
  const { activeNavPage: r, setActiveNavPage: a, tourItems: n, headerNextButtonRef: s } = N(I), m = n.length, c = R(
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
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-item-info", "aria-live": "polite" }, /* @__PURE__ */ e.createElement("span", { id: "aic-ct-item-count", className: "aic-ct-item-count f-body" }, m), " ", /* @__PURE__ */ e.createElement("span", null, "artworks ", /* @__PURE__ */ e.createElement("em", null, "(of max 6)"))),
    /* @__PURE__ */ e.createElement(
      "button",
      {
        ref: s,
        id: "aic-ct-header__back-button",
        className: c,
        type: "button",
        onClick: () => {
          r === 0 ? j.assign("/custom-tours") : a(r === 1 ? 0 : 1);
        }
      },
      /* @__PURE__ */ e.createElement("svg", { className: "icon--arrow", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--arrow" })),
      "Back"
    ),
    /* @__PURE__ */ e.createElement(
      "button",
      {
        ref: s,
        id: "aic-ct-header__next-button",
        className: "aic-ct-header__button aic-ct-header__button--next btn btn--transparent btn--w-icon f-buttons",
        type: "button",
        onClick: () => {
          a(r === 0 ? 1 : 2);
        }
      },
      r === 0 && "Next",
      r > 0 && "Finish",
      /* @__PURE__ */ e.createElement("svg", { className: "icon--arrow", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--arrow" }))
    )
  );
}
function ve() {
  const { navPages: r, activeNavPage: a, setActiveNavPage: n, isSaving: s } = N(I), m = (c) => R("aic-ct-nav__button btn f-buttons btn--transparent", {
    "aic-ct-nav__button--active": a === c,
    "aic-ct-nav__button--done": a > c
  });
  return /* @__PURE__ */ e.createElement("footer", { className: "aic-ct-footer", "aria-label": "Custom tour builder footer" }, /* @__PURE__ */ e.createElement(
    "nav",
    {
      id: "aic-ct-navigation",
      className: "aic-ct-nav",
      "aria-label": "Custom tour builder navigation"
    },
    r.map((c, i) => /* @__PURE__ */ e.createElement(
      "button",
      {
        key: c.id,
        id: `aic-ct-nav-button-${c.id}`,
        "aria-controls": `aic-ct-nav-page-${c.id}`,
        "aria-pressed": c.id === a,
        type: "button",
        onClick: () => n(i),
        disabled: s,
        className: m(c.id)
      },
      /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__button-wrapper" }, /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__number" }, c.id + 1), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__title" }, c.title), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__tagline" }, c.tagline))
    ))
  ));
}
function B({ children: r }) {
  const { activeNavPage: a, setNavPages: n } = N(I);
  return g(() => {
    n(
      r ? r.map((s, m) => ({
        id: m,
        title: s.props.title,
        tagline: s.props.tagline
      })) : []
    );
  }, [r, n]), g(() => {
    var s;
    (s = document.querySelector("#custom-tours-builder")) == null || s.scrollIntoView();
  }, [a]), /* @__PURE__ */ e.createElement("div", { id: "aic-ct-nav-pages" }, r);
}
B.propTypes = {
  children: t.node.isRequired
};
function D(r) {
  const { id: a, children: n } = r, { activeNavPage: s } = N(I);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      tabIndex: "0",
      id: `aic-ct-nav-page-${a}`,
      "aria-labelledby": `aic-ct-nav-button-${a}`,
      "aria-hidden": s !== a,
      style: s !== a ? { display: "none" } : {}
    },
    n
  );
}
D.propTypes = {
  id: t.number.isRequired,
  title: t.string.isRequired,
  tagline: t.string.isRequired,
  children: t.oneOfType([
    t.arrayOf(t.element),
    t.object
  ]).isRequired
};
const T = q();
function M(r) {
  const {
    children: a,
    searchResultItems: n,
    searchQuery: s,
    searchFetching: m,
    searchError: c,
    searchPreviewId: i
  } = r, [u, o] = b(
    n || null
  ), [l, d] = b(s || ""), [h, p] = b(
    m || !1
  ), [v, f] = b(c || !1), [E, _] = b(null), [w, k] = b(
    i || null
  ), y = x();
  return /* @__PURE__ */ e.createElement(
    T.Provider,
    {
      value: {
        searchResultItems: u,
        setSearchResultItems: o,
        searchQuery: l,
        setSearchQuery: d,
        searchFetching: h,
        setSearchFetching: p,
        searchError: v,
        setSearchError: f,
        activeTheme: E,
        setActiveTheme: _,
        searchPreviewId: w,
        setSearchPreviewId: k,
        searchPreviewRef: y
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
const H = (r) => {
  const [a, n] = b(null), [s, m] = b(!1), [c, i] = b(null), [u, o] = b(null), { dataSubSelector: l, dataSetter: d, fetchingSetter: h, errorSetter: p } = r || {}, v = () => {
    n(null), m(!1), i(null), o(null);
  }, f = async (E) => {
    m(!0);
    const _ = new AbortController();
    o(_);
    try {
      const k = await (await fetch(E, { signal: _.signal })).json();
      n(l ? k[l] : k), i(null), m(!1);
    } catch (w) {
      if (w.name === "AbortError") {
        v();
        return;
      }
      i("Error fetching results"), m(!1);
    }
  };
  return g(() => {
    const E = u;
    return () => {
      E && E.abort();
    };
  }, [u]), g(() => {
    d && d(a);
  }, [a, d]), g(() => {
    p && p(c);
  }, [c, p]), g(() => {
    h && h(s);
  }, [s, h]), { data: a, fetching: s, error: c, fetchData: f, resetState: v };
};
function Ee() {
  const {
    searchQuery: r,
    setSearchQuery: a,
    setSearchResultItems: n,
    setSearchFetching: s,
    setSearchError: m,
    setActiveTheme: c
  } = N(T), [i, u] = b(!0), { fetchData: o } = H({
    dataSubSelector: "data",
    dataSetter: n,
    fetchingSetter: s,
    errorSetter: m
  }), l = (p) => {
    o(F({ keywords: r })), c(null), p.preventDefault();
  }, d = x(null), h = R("m-search-bar aic-ct-search", {
    "s-autocomplete-active": r
  });
  return g(() => {
    i && (u(!1), o(F({ keywords: "" })));
  }, [o, i, u]), /* @__PURE__ */ e.createElement(
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
        value: r,
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
        ref: d
      },
      /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--search--24" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--search--24" }))
    ), /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "m-search-bar__clear",
        "aria-label": "Clear search",
        type: "reset",
        onClick: () => {
          a(""), n(null), c(null), o(F({ keywords: "" })), d.current.focus();
        }
      },
      /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--close" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close" }))
    ))
  );
}
function Y(r) {
  const { id: a, label: n, thumbnailId: s, searchParams: m } = r, { iiifBaseUrl: c } = N(I), {
    setSearchResultItems: i,
    setSearchFetching: u,
    setSearchError: o,
    setSearchQuery: l,
    activeTheme: d,
    setActiveTheme: h
  } = N(T), { fetchData: p } = H({
    dataSubSelector: "data",
    dataSetter: i,
    fetchingSetter: u,
    errorSetter: o
  }), v = () => {
    d === n ? (h(null), p(F({ keywords: "" }))) : (p(F(m)), h(n), l(""));
  }, f = R(
    "aic-ct-theme-toggle tag tag--senary tag--w-image",
    {
      "f-tag": d !== n,
      "f-tag-2": d === n,
      "aic-ct-theme-toggle--active": d === n
    }
  );
  return /* @__PURE__ */ e.createElement(e.Fragment, null, (d === null || d === n) && /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: f,
      id: `aic-ct-theme-toggle-${a}`,
      onClick: v,
      "aria-pressed": d === n ? "true" : "false"
    },
    /* @__PURE__ */ e.createElement("span", { className: "aic-ct-theme-toggle__wrapper" }, /* @__PURE__ */ e.createElement(
      "img",
      {
        src: S(c, s, "40", "40", "square"),
        alt: ""
      }
    ), n, d === n && /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--close" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close" })))
  )));
}
Y.propTypes = {
  id: t.number.isRequired,
  label: t.string.isRequired,
  thumbnailId: t.string.isRequired,
  searchParams: t.object.isRequired
};
function ge() {
  const r = [
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
  return /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-themes", className: "aic-ct-themes" }, r.map((a, n) => /* @__PURE__ */ e.createElement(
    Y,
    {
      key: a.label,
      id: n,
      label: a.label,
      thumbnailId: a.thumbnailId,
      searchParams: a.searchParams
    }
  )));
}
function U(r) {
  const { setSearchPreviewId: a, searchPreviewRef: n } = N(T), { iiifBaseUrl: s, setScrollY: m, tourItems: c } = N(I), { itemData: i } = r, u = c.some((p) => p.id === i.id), o = x(null), l = x(), d = () => {
    const p = document.documentElement.scrollTop;
    a(i.id), m(p), n.current.showModal(), setTimeout(() => {
      document.documentElement.classList.add(
        "s-body-locked",
        "s-body-locked--ct"
      ), document.body.scrollTop = p;
    }, 0);
  }, h = R(
    "aic-ct-result o-pinboard__item m-listing m-listing--variable-height",
    {
      "aic-ct-result--selected": u
    }
  );
  return g(() => {
    var p;
    (p = l == null ? void 0 : l.current) != null && p.includes("s-positioned") && o.current.classList.add("s-positioned"), l.current = o.current.className;
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
        onClick: d,
        "aria-describedby": u ? "aic-ct-search__in-your-tour" : void 0
      },
      /* @__PURE__ */ e.createElement("span", { className: "m-listing__link" }, /* @__PURE__ */ e.createElement("span", { className: "m-listing__img m-listing__img--no-bg" }, u && /* @__PURE__ */ e.createElement("span", { className: "aic-ct-selected-marker" }, /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--check" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--check" }))), /* @__PURE__ */ e.createElement(
        "img",
        {
          src: i.thumbnail.lqip,
          alt: "",
          height: i.thumbnail.height,
          width: i.thumbnail.width,
          "data-iiif-id": `${s}/${i.image_id}`,
          "data-pin-media": S(
            s,
            i.image_id,
            "600",
            void 0,
            void 0,
            !1
          ),
          sizes: "(min-width: 1640px) 336px, (min-width: 1200px) 20.31vw, (min-width: 900px) 28.13vw, (min-width: 600px) 43.75vw,  43.75vw",
          "data-srcset": `${S(
            s,
            i.image_id,
            "200",
            void 0,
            void 0,
            !1
          )} 200w, ${S(
            s,
            i.image_id,
            "400",
            void 0,
            void 0,
            !1
          )} 400w, ${S(
            s,
            i.image_id,
            "843",
            void 0,
            void 0,
            !1
          )} 843w, ${S(
            s,
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
function ye() {
  const { searchPreviewId: r, searchResultItems: a, searchPreviewRef: n } = N(T), { iiifBaseUrl: s, tourItems: m, tourItemsDispatch: c, limits: i } = N(I), [u, o] = b(!1), [l, d] = b(null), h = R({
    "aic-ct-preview__content": !0,
    "aic-ct-preview--loading": !l
  });
  g(() => {
    d(
      a.find((f) => f.id === r)
    );
  }, [r, a]);
  const p = () => {
    var f;
    c({
      type: u ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: u ? l.id : l
    }), (f = n == null ? void 0 : n.current) == null || f.close();
  }, v = () => {
    var f;
    (f = n == null ? void 0 : n.current) == null || f.close();
  };
  return g(() => {
    l && o(m.find((f) => f.id === l.id));
  }, [m, l]), /* @__PURE__ */ e.createElement("div", { className: h, id: "aic-ct-preview__content" }, l ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__header aic-ct-preview__core" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-preview__close",
      className: "btn btn--icon btn--transparent aic-ct-preview__close",
      type: "button",
      "aria-label": "Close",
      onClick: v
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" }))
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__image" }, /* @__PURE__ */ e.createElement(
    "img",
    {
      src: S(s, l.image_id, 680, 680),
      width: l.thumbnail.width,
      height: l.thumbnail.height,
      alt: l.thumbnail.alt_text || ""
    }
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__core" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__details" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__title f-headline-editorial" }, l.title, l.date_display && /* @__PURE__ */ e.createElement(e.Fragment, null, ",", " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-preview__date f-list-4" }, l.date_display))), l.artist_title && /* @__PURE__ */ e.createElement("p", { className: "aic-ct-preview__artist f-subheading-1" }, l.artist_title)), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__links" }, m.length < 6 || u ? /* @__PURE__ */ e.createElement(
    "button",
    {
      id: `aic-ct-preview__action-button-${l.id}`,
      className: "btn f-buttons aic-ct-preview__action-button",
      type: "button",
      onClick: p,
      "aria-pressed": u ? "true" : "false",
      "aria-label": "Toggle from your tour"
    },
    u ? "Remove from your tour" : "Add to your tour"
  ) : /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You have already added ", i.items.max, " artworks, the maximum number allowed. Please remove one if you would like to include this artwork.")), (l.short_description || l.description) && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__description" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__description-title f-module-title-2" }, "Artwork description"), /* @__PURE__ */ e.createElement(
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
      onClick: v
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" })),
    "Close and go back to results"
  ))) : /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__core aic-ct-loader f-body" }, /* @__PURE__ */ e.createElement("p", null, "Loading..."), /* @__PURE__ */ e.createElement("div", { className: "loader" })));
}
function Ne() {
  const {
    searchError: r,
    searchFetching: a,
    searchResultItems: n,
    searchPreviewRef: s,
    setSearchPreviewId: m
  } = N(T), { scrollY: c } = N(I), i = L(
    (o) => {
      var l;
      (o.type === "close" || (l = s == null ? void 0 : s.current) != null && l.open && o.target === (s == null ? void 0 : s.current)) && (s.current.close(), m(null), document.documentElement.scrollTop = c, document.documentElement.classList.remove(
        "s-body-locked",
        "s-body-locked--ct"
      ));
    },
    [m, c, s]
  ), u = L(() => {
    const o = new Event("page:updated", { bubbles: !0 });
    setTimeout(() => {
      document.dispatchEvent(o);
    }, 0);
  }, []);
  return g(() => {
    const o = s.current;
    return o && (o.addEventListener("close", i), o.addEventListener("click", i)), () => {
      o && (o.removeEventListener("close", i), o.removeEventListener("click", i));
    };
  }, [s, i]), g(() => {
    u();
  }, [n, u]), g(() => (window.addEventListener("load", u), () => {
    window.removeEventListener("load", u);
  }), [u]), !n && !a && !r ? null : /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-search-results" }, a && // Render only the loading message while fetching
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
    /* @__PURE__ */ e.createElement("p", null, "Sorry, we couldn’t find any artworks matching your search. ")
  ), (n == null ? void 0 : n.length) > 0 && !a && !r && // Render the results if there are results
  /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "aic-ct-pre-result-text f-body" }, "These artworks are currently on view and available for your tour."), /* @__PURE__ */ e.createElement(
    "ul",
    {
      id: "aic-ct-search-results__items",
      className: "o-pinboard o-pinboard--2-col@xsmall o-pinboard--2-col@small o-pinboard--3-col@medium o-pinboard--4-col@large o-pinboard--4-col@xlarge",
      "data-pinboard-option-layout": "o-pinboard--2-col@xsmall o-pinboard--2-col@small o-pinboard--2-col@medium o-pinboard--3-col@large o-pinboard--3-col@xlarge",
      "data-pinboard-maintain-order": "false",
      "data-behavior": "pinboard"
    },
    n.map((o) => /* @__PURE__ */ e.createElement(U, { key: o.id, itemData: o }))
  ), /* @__PURE__ */ e.createElement(
    "dialog",
    {
      ref: s,
      id: "aic-ct-search-preview",
      onClose: i
    },
    /* @__PURE__ */ e.createElement(ye, null)
  ))), /* @__PURE__ */ e.createElement("p", { className: "u-hide", id: "aic-ct-search__in-your-tour" }, "This object is in your tour", " "));
}
function A(r = {}) {
  const { initialValue: a, maxLength: n, valueSetter: s } = r, [m, c] = b(a || ""), i = x(null), u = n - m.length;
  return {
    value: m,
    onChange: (l) => {
      const { value: d } = l.target;
      i.current.ariaBusy = !0, c(d), s && s(d), i.current.ariaBusy = !1;
    },
    countRef: i,
    charsRemaining: u,
    maxLength: n,
    counterEl: /* @__PURE__ */ e.createElement("output", { ref: i }, "(", u, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")
  };
}
function Q(r) {
  var v;
  const { itemData: a, itemIndex: n, setShouldAssignFocus: s, setRemoveButtons: m } = r, { iiifBaseUrl: c, tourItems: i, tourItemsDispatch: u, limits: o } = N(I), l = x(null), d = A({
    initialValue: (v = i[n]) == null ? void 0 : v.objectNote,
    maxLength: o.objectNote
  }), h = O(
    () => ({
      id: a.id,
      objectNote: d.value
    }),
    [a.id, d.value]
  ), p = () => {
    u({
      type: "REMOVE_ITEM",
      payload: a.id
    });
  };
  return g(() => {
    u({
      type: "UPDATE_NOTE",
      payload: h
    });
  }, [h, u]), g(() => {
    const f = l.current;
    return () => {
      document.activeElement === f && (i.length > 1 ? i.find((E, _) => {
        E.id === a.id && s({
          flag: !0,
          id: i[_ !== i.length - 1 ? _ + 1 : _ - 1].id
        });
      }) : s({
        flag: !0,
        id: null
      }));
    };
  }, [i, a.id, s]), g(() => (m((f) => [...f, { id: a.id, ref: l }]), () => {
    m(
      (f) => f.filter((E) => E.id !== a.id)
    );
  }), [m, i, a.id]), /* @__PURE__ */ e.createElement(
    "li",
    {
      className: "aic-ct-tour-item aic-ct__core",
      id: `aic-ct-tour-item-${a.id}`
    },
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour-item__lockup" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour-item__info" }, a.title && /* @__PURE__ */ e.createElement("h2", { className: "aic-ct-tour-item__title f-deck" }, a.title, a.date_display && /* @__PURE__ */ e.createElement(e.Fragment, null, ", ", a.date_display)), a.artist_title && /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-tour-item__artist f-body" }, a.artist_title), a.gallery_title && /* @__PURE__ */ e.createElement("p", { className: "aic-ct-tour-item__gallery f-secondary" }, a.gallery_title)), a.image_id && /* @__PURE__ */ e.createElement(
      "img",
      {
        className: "aic-ct-tour-item__image",
        src: S(
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
        onChange: d.onChange,
        rows: "5",
        placeholder: "e.g. I love the colors in this one.",
        value: d.value,
        maxLength: d.maxLength
      }
    ), d.counterEl))),
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
function we() {
  const { tourItems: r, headerNextButtonRef: a, setActiveNavPage: n, limits: s } = N(I), [m, c] = b({
    flag: !1,
    id: null
  }), [i, u] = b([]), o = x(null), l = () => {
    n(0), a.current.focus();
  }, d = () => {
    n(2), a.current.focus();
  };
  return g(() => {
    m.flag && (!r.length && (o != null && o.current) ? o.current.focus() : i.find((h) => h.id === m.id).ref.current.focus(), c(!1));
  }, [r, m, i, o]), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour" }, r.length > 0 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement("header", { className: "aic-ct-section-header f-body" }, /* @__PURE__ */ e.createElement("h2", { id: "aic-ct-tour__heading", className: "f-module-title-2" }, "Artworks in your tour")), /* @__PURE__ */ e.createElement("div", { className: "f-body aic-ct-tour__intro" }, /* @__PURE__ */ e.createElement("p", null, "To optimize your visit, we automatically arrange the order of your tour based on the location of the artwork in the museum."), r.length === 6 && /* @__PURE__ */ e.createElement("p", null, "You've added 6 artworks, the maximum number allowed. Please remove one if you would like to include more artwork."))), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-tour__results" }, r.map((h, p) => /* @__PURE__ */ e.createElement(
    Q,
    {
      key: h.id,
      setRemoveButtons: u,
      itemData: h,
      itemIndex: p,
      shouldAssignFocus: m,
      setShouldAssignFocus: c
    }
  )))), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta" }, r.length > 0 && r.length < 6 && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", { className: "f-body" }, "You've added ", r.length, " of the maximum", " ", s.items.max, " artworks."), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-tour__cta-actions" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: o,
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
      ref: o,
      id: "aic-ct-tour__cta-browse",
      type: "button",
      className: "f-buttons btn btn--secondary",
      onClick: l
    },
    "Browse for more artworks"
  )))));
}
function ke() {
  const {
    tourTitle: r,
    setTourTitle: a,
    creatorEmail: n,
    setCreatorEmail: s,
    setValidCreatorEmail: m,
    creatorName: c,
    setCreatorName: i,
    recipientName: u,
    setRecipientName: o,
    marketingOptIn: l,
    setMarketingOptIn: d,
    tourDescription: h,
    setTourDescription: p,
    limits: v
  } = N(I), f = A({
    initialValue: r,
    maxLength: v.title,
    valueSetter: a
  }), E = A({
    initialValue: c,
    maxLength: v.creatorName,
    valueSetter: i
  }), _ = A({
    initialValue: u,
    maxLength: v.recipientName,
    valueSetter: o
  }), w = A({
    initialValue: h,
    maxLength: v.description,
    valueSetter: p
  });
  return /* @__PURE__ */ e.createElement("fieldset", { className: "m-fieldset aic-ct-fieldset" }, /* @__PURE__ */ e.createElement("ol", { className: "m-fieldset__fieldset" }, /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__title", className: "label f-secondary" }, "Tour Title *"), /* @__PURE__ */ e.createElement("span", { className: "input" }, /* @__PURE__ */ e.createElement("span", { className: "input__io-container" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      className: "f-secondary",
      type: "text",
      onChange: f.onChange,
      value: f.value,
      id: "aic-ct-metadata__title",
      maxLength: f.maxLength,
      "aria-required": "true",
      required: !0
    }
  ), f.counterEl))), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement(
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
        s(k.target.value), m(k.target.validity.valid);
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
    "If you are making this tour for someone else, add their name below ",
    /* @__PURE__ */ e.createElement("em", null, "(optional)")
  ), /* @__PURE__ */ e.createElement("span", { className: "input" }, /* @__PURE__ */ e.createElement("span", { className: "input__io-container" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      className: "f-secondary",
      type: "text",
      value: _.value,
      onChange: _.onChange,
      id: "aic-ct-metadata__recipient-name",
      maxLength: _.maxLength
    }
  ), _.counterEl))), /* @__PURE__ */ e.createElement("li", { className: "m-fieldset__field o-blocks" }, /* @__PURE__ */ e.createElement(
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
      value: l,
      name: "aic-ct-metadata__opt-in",
      checked: l,
      onChange: (k) => {
        d(k.target.checked);
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
function Se() {
  const {
    apiSaveEndpoint: r,
    tourTitle: a,
    creatorName: n,
    creatorEmail: s,
    recipientName: m,
    marketingOptIn: c,
    validCreatorEmail: i,
    tourItems: u,
    tourDescription: o,
    validityIssues: l,
    setValidityIssues: d,
    limits: h,
    isSaving: p,
    setIsSaving: v,
    setActiveNavPage: f,
    unloadHandler: E
  } = N(I), [_, w] = b(null), k = async () => {
    v(!0);
    try {
      const y = await fetch(`${r}`, {
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
            creatorName: n,
            recipientName: m,
            description: o,
            // "artworks" is essentially everything from the GET response with added "objectNote"
            // The API expects these fields named in this way
            artworks: u
          }
        })
      });
      if (!y.ok)
        throw new Error(
          "There was a problem saving your tour, please try again. If the problem persists, please contact us and let us know."
        );
      const { message: C, custom_tour: P } = await y.json();
      w({
        type: "success",
        message: C,
        id: P.id
      });
    } catch (y) {
      w({
        type: "error",
        message: y.message
      });
    }
    v(!1);
  };
  return g(() => {
    const y = [];
    a.length || y.push("A tour title"), a.length > h.title && y.push("Tour title must not exceed the character limit"), i || y.push("A valid email address"), o.length > h.description && y.push(
      "Tour description must not exceed the character limit"
    ), u.length < h.items.min && y.push("At least one artwork is required for your tour"), u.length > h.items.max && y.push("Tours must not contain more than 6 artworks"), u.some((C) => {
      var P;
      return ((P = C.objectNote) == null ? void 0 : P.length) > h.objectNote ? (y.push("Notes must not exceed the character limit"), !0) : !1;
    }), d(y);
  }, [
    a,
    o,
    u,
    d,
    h,
    i
  ]), g(() => {
    _ != null && _.id && (window.removeEventListener("beforeunload", E), j.assign(
      `/custom-tours/${_.id}?tourCreationComplete=true`
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
      /* @__PURE__ */ e.createElement("ul", null, l.map((y, C) => /* @__PURE__ */ e.createElement("li", { className: "f-body", key: C }, y)))
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
          onClick: k,
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
          onClick: k,
          disabled: p
        },
        "Try again"
      ))
    ))
  ));
}
const Ie = (r) => {
  const {
    apiSaveEndpoint: a,
    tourTitle: n,
    tourDescription: s,
    tourItems: m,
    heroImageId: c
  } = r, i = "https://artic.edu/iiif/2", u = (l) => {
    l.preventDefault(), l.returnValue = "";
  }, o = {
    apiSaveEndpoint: a,
    tourTitle: n,
    tourDescription: s,
    tourItems: m,
    heroImageId: c,
    iiifBaseUrl: i,
    unloadHandler: u
  };
  return g(() => {
    window.addEventListener("beforeunload", u), document.body.style.overflow = "unset";
  }, []), /* @__PURE__ */ e.createElement("div", { id: "custom-tours-builder", className: "custom-tours" }, /* @__PURE__ */ e.createElement(V, { ...o }, /* @__PURE__ */ e.createElement(_e, null), /* @__PURE__ */ e.createElement(B, null, /* @__PURE__ */ e.createElement(
    D,
    {
      id: 0,
      title: "Browse",
      tagline: "for artworks to add to your tour"
    },
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-intro aic-ct-intro--keyline aic-ct__core" }, /* @__PURE__ */ e.createElement("h1", { className: "f-display-2" }, "Create your own tour"), /* @__PURE__ */ e.createElement("p", { className: "f-deck" }, "Choose up to 6 artworks for your tour by searching for a particular work or artist, browsing themes or selecting from the list of artworks below.")),
    /* @__PURE__ */ e.createElement(M, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement(Ee, null), /* @__PURE__ */ e.createElement(ge, null), /* @__PURE__ */ e.createElement(Ne, null)))
  ), /* @__PURE__ */ e.createElement(
    D,
    {
      id: 1,
      title: "Personalize",
      tagline: "your tour by adding notes to artworks"
    },
    c && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-hero" }, /* @__PURE__ */ e.createElement(
      "img",
      {
        src: S(i, c, 20, 20, "full"),
        srcSet: `${S(
          i,
          c,
          480,
          480,
          "full"
        )} 320w, ${S(
          i,
          c,
          640,
          640,
          "full"
        )} 480w, ${S(
          i,
          c,
          960,
          960,
          "full"
        )} 640w, ${S(
          i,
          c,
          1280,
          1280,
          "full"
        )} 960w, ${S(
          i,
          c,
          1920,
          1920,
          "full"
        )} 1280w`,
        alt: ""
      }
    )),
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-intro aic-ct__core" }, /* @__PURE__ */ e.createElement("h1", { className: "f-display-2" }, "Personalize your tour")),
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct__core" }, /* @__PURE__ */ e.createElement(ke, null)),
    /* @__PURE__ */ e.createElement(we, null)
  ), /* @__PURE__ */ e.createElement(D, { id: 2, title: "Complete", tagline: "and share with friends" }, /* @__PURE__ */ e.createElement(Se, null))), /* @__PURE__ */ e.createElement(ve, null)));
};
Ie.propTypes = {
  apiSaveEndpoint: t.string,
  tourTitle: t.string,
  tourDescription: t.string,
  tourItems: t.array,
  searchPreviewId: t.number,
  heroImageId: t.string
};
export {
  Ie as default
};
