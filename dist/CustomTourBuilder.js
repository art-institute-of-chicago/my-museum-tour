import e, { createContext as A, useState as b, useReducer as ue, useRef as C, useMemo as F, useContext as N, useEffect as w, useCallback as me } from "react";
import t from "prop-types";
const de = (i, a) => {
  switch (a.type) {
    case "ADD_ITEM":
      return [...i, { ...a.payload, objectNote: "" }];
    case "UPDATE_NOTE":
      return i.map((n) => n.id === a.payload.id ? { ...n, objectNote: a.payload.objectNote } : n);
    case "REMOVE_ITEM":
      return i.filter(({ id: n }) => n !== a.payload);
    default:
      return i;
  }
}, I = A();
function V(i) {
  const {
    children: a,
    tourTitle: n,
    creatorEmail: s,
    creatorName: u,
    recipientName: l,
    tourDescription: r,
    marketingOptIn: o,
    tourItems: c,
    navPages: p,
    apiSaveEndpoint: m
  } = i, [d, h] = b(n || ""), [g, v] = b(s || ""), [E, _] = b(!1), [f, y] = b(u || ""), [k, Y] = b(l || ""), [H, U] = b(
    o || !1
  ), [Q, z] = b(
    r || ""
  ), [J, W] = b(p || []), [G, K] = b(0), [X, Z] = ue(
    de,
    c || []
  ), ee = C(null), [te, ae] = b([]), re = "https://artic.edu/iiif/2", ne = m || "/api/v1/custom-tours", [ie, se] = b(!1), [ce, le] = b(0), oe = F(
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
        apiSaveEndpoint: ne,
        iiifBaseUrl: re,
        limits: oe,
        tourTitle: d,
        setTourTitle: h,
        creatorEmail: g,
        setCreatorEmail: v,
        validCreatorEmail: E,
        setValidCreatorEmail: _,
        creatorName: f,
        setCreatorName: y,
        recipientName: k,
        setRecipientName: Y,
        tourDescription: Q,
        setTourDescription: z,
        marketingOptIn: H,
        setMarketingOptIn: U,
        tourItems: X,
        tourItemsDispatch: Z,
        navPages: J,
        setNavPages: W,
        activeNavPage: G,
        setActiveNavPage: K,
        navSearchButtonRef: ee,
        validityIssues: te,
        setValidityIssues: ae,
        isSaving: ie,
        setIsSaving: se,
        scrollY: ce,
        setScrollY: le
      }
    },
    a
  );
}
V.propTypes = {
  apiSaveEndpoint: t.string,
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
    navSearchButtonRef: t.shape({
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
function he(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var j = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(i) {
  (function() {
    var a = {}.hasOwnProperty;
    function n() {
      for (var s = [], u = 0; u < arguments.length; u++) {
        var l = arguments[u];
        if (l) {
          var r = typeof l;
          if (r === "string" || r === "number")
            s.push(l);
          else if (Array.isArray(l)) {
            if (l.length) {
              var o = n.apply(null, l);
              o && s.push(o);
            }
          } else if (r === "object") {
            if (l.toString !== Object.prototype.toString && !l.toString.toString().includes("[native code]")) {
              s.push(l.toString());
              continue;
            }
            for (var c in l)
              a.call(l, c) && l[c] && s.push(c);
          }
        }
      }
      return s.join(" ");
    }
    i.exports ? (n.default = n, i.exports = n) : window.classNames = n;
  })();
})(j);
var pe = j.exports;
const P = /* @__PURE__ */ he(pe);
function ge() {
  const {
    navPages: i,
    activeNavPage: a,
    setActiveNavPage: n,
    navSearchButtonRef: s,
    isSaving: u
  } = N(I), l = (r) => P("aic-ct-nav__button btn f-buttons btn--transparent", {
    "aic-ct-nav__button--active": a === r,
    "aic-ct-nav__button--done": a > r
  });
  return /* @__PURE__ */ e.createElement("footer", { className: "aic-ct-footer", "aria-label": "Custom tour builder footer" }, /* @__PURE__ */ e.createElement(
    "nav",
    {
      id: "aic-ct-navigation",
      className: "aic-ct-nav",
      "aria-label": "Custom tour builder navigation"
    },
    i.map((r, o) => /* @__PURE__ */ e.createElement(
      "button",
      {
        ref: r.id === 0 ? s : null,
        key: r.id,
        id: `aic-ct-nav-button-${r.id}`,
        "aria-controls": `aic-ct-nav-page-${r.id}`,
        "aria-pressed": r.id === a,
        type: "button",
        onClick: () => n(o),
        disabled: u,
        className: l(r.id)
      },
      /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__button-wrapper" }, /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__number" }, r.id + 1), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__title" }, r.title), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__tagline" }, r.tagline))
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
function D({ children: i }) {
  const { setNavPages: a } = N(I);
  return w(() => {
    a(
      i ? i.map((n, s) => ({
        id: s,
        title: n.props.title,
        tagline: n.props.tagline
      })) : []
    );
  }, [i, a]), /* @__PURE__ */ e.createElement("div", { id: "aic-ct-nav-pages" }, i);
}
D.propTypes = {
  children: t.node.isRequired
};
function R(i) {
  const { id: a, children: n } = i, { activeNavPage: s } = N(I);
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
R.propTypes = {
  id: t.number.isRequired,
  title: t.string.isRequired,
  tagline: t.string.isRequired,
  children: t.oneOfType([
    t.arrayOf(t.element),
    t.object
  ]).isRequired
};
const T = A();
function O(i) {
  const {
    children: a,
    searchResultItems: n,
    searchQuery: s,
    searchFetching: u,
    searchError: l,
    searchPreviewId: r
  } = i, [o, c] = b(
    n || null
  ), [p, m] = b(s || ""), [d, h] = b(
    u || !1
  ), [g, v] = b(l || !1), [E, _] = b(null), [f, y] = b(
    r || null
  ), k = C();
  return /* @__PURE__ */ e.createElement(
    T.Provider,
    {
      value: {
        searchResultItems: o,
        setSearchResultItems: c,
        searchQuery: p,
        setSearchQuery: m,
        searchFetching: d,
        setSearchFetching: h,
        searchError: g,
        setSearchError: v,
        activeTheme: E,
        setActiveTheme: _,
        searchPreviewId: f,
        setSearchPreviewId: y,
        searchPreviewRef: k
      }
    },
    a
  );
}
O.propTypes = {
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
const q = (i) => {
  const [a, n] = b(null), [s, u] = b(!1), [l, r] = b(null), [o, c] = b(null), { dataSubSelector: p, dataSetter: m, fetchingSetter: d, errorSetter: h } = i || {}, g = () => {
    n(null), u(!1), r(null), c(null);
  }, v = async (E) => {
    u(!0);
    const _ = new AbortController();
    c(_);
    try {
      const y = await (await fetch(E, { signal: _.signal })).json();
      n(p ? y[p] : y), r(null), u(!1);
    } catch (f) {
      if (f.name === "AbortError") {
        g();
        return;
      }
      r("Error fetching results"), u(!1);
    }
  };
  return w(() => {
    const E = o;
    return () => {
      E && E.abort();
    };
  }, [o]), w(() => {
    m && m(a);
  }, [a, m]), w(() => {
    h && h(l);
  }, [l, h]), w(() => {
    d && d(s);
  }, [s, d]), { data: a, fetching: s, error: l, fetchData: v, resetState: g };
};
function S(i, a, n = "", s = "", u = "full", l = !0) {
  return `${i}/${a}/${u}/${l ? "!" : ""}${n},${s}/0/default.jpg`;
}
function L(i) {
  const a = new URL("https://api.artic.edu/api/v1/artworks/search");
  return a.searchParams.set("query[bool][must][][term][is_on_view]", "true"), a.searchParams.set("query[bool][must][][exists][field]", "description"), a.searchParams.set("query[bool][should][][exists][field]", "description"), a.searchParams.set("query[bool][should][][exists][field]", "subject_id"), a.searchParams.set("query[bool][should][][exists][field]", "style_id"), a.searchParams.set("query[bool][should][][term][is_boosted]", "true"), a.searchParams.set("query[bool][minimum_should_match]", "1"), a.searchParams.set(
    "fields",
    "artist_title,description,id,image_id,thumbnail,title,date_display,gallery_title,gallery_id"
  ), a.searchParams.set("limit", "60"), i.keywords && a.searchParams.set("q", i.keywords), i.subjectIds && a.searchParams.set(
    "query[bool][must][][terms][subject_ids][]",
    i.subjectIds
  ), i.categoryIds && a.searchParams.set(
    "query[bool][must][][term][category_ids][value]",
    i.categoryIds
  ), a;
}
function be() {
  const {
    searchQuery: i,
    setSearchQuery: a,
    setSearchResultItems: n,
    setSearchFetching: s,
    setSearchError: u,
    setActiveTheme: l
  } = N(T), { fetchData: r } = q({
    dataSubSelector: "data",
    dataSetter: n,
    fetchingSetter: s,
    errorSetter: u
  }), o = (m) => {
    r(L({ keywords: i })), l(null), m.preventDefault();
  }, c = C(null), p = P("m-search-bar aic-ct-search", {
    "s-autocomplete-active": i
  });
  return /* @__PURE__ */ e.createElement(
    "form",
    {
      id: "aic-ct-search",
      role: "search",
      "aria-label": "Objects for your tour",
      onSubmit: o,
      className: p
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
        onChange: (m) => {
          m.target.value && m.target.setCustomValidity(""), a(m.target.value);
        },
        onInvalid: (m) => {
          m.target.setCustomValidity("You must enter a search term");
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
        ref: c
      },
      /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--search--24" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--search--24" }))
    ), /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "m-search-bar__clear",
        "aria-label": "Clear search",
        type: "reset",
        onClick: () => {
          a(""), n(null), l(null), c.current.focus();
        }
      },
      /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--close" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close" }))
    ))
  );
}
function $(i) {
  const { id: a, label: n, subjectIds: s, categoryIds: u, thumbnailId: l } = i, { iiifBaseUrl: r } = N(I), {
    setSearchResultItems: o,
    setSearchFetching: c,
    setSearchError: p,
    setSearchQuery: m,
    activeTheme: d,
    setActiveTheme: h
  } = N(T), { fetchData: g, resetState: v } = q({
    dataSubSelector: "data",
    dataSetter: o,
    fetchingSetter: c,
    errorSetter: p
  }), E = () => {
    d === n ? (h(null), v()) : (g(L({ subjectIds: s, categoryIds: u })), h(n), m(""));
  }, _ = P(
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
      className: _,
      id: `aic-ct-theme-toggle-${a}`,
      onClick: E,
      "aria-pressed": d === n ? "true" : "false"
    },
    /* @__PURE__ */ e.createElement("span", { className: "aic-ct-theme-toggle__wrapper" }, /* @__PURE__ */ e.createElement(
      "img",
      {
        src: S(r, l, "40", "40", "square"),
        alt: ""
      }
    ), n, d === n && /* @__PURE__ */ e.createElement("svg", { className: "icon--close" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close" })))
  )));
}
$.propTypes = {
  id: t.number.isRequired,
  label: t.string.isRequired,
  subjectIds: t.arrayOf(t.string),
  categoryIds: t.arrayOf(t.string),
  thumbnailId: t.string.isRequired
};
function fe() {
  const i = [
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
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("header", { className: "aic-ct-section-header" }, /* @__PURE__ */ e.createElement("h2", { className: "f-module-title-2" }, "Browse by theme")), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-themes", className: "aic-ct-themes" }, i.map((a, n) => /* @__PURE__ */ e.createElement(
    $,
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
function M(i) {
  const { setSearchPreviewId: a, searchPreviewRef: n } = N(T), { iiifBaseUrl: s, setScrollY: u, tourItems: l } = N(I), { itemData: r } = i, o = l.some((h) => h.id === r.id), c = C(null), p = C(), m = () => {
    const h = document.documentElement.scrollTop;
    a(r.id), u(h), n.current.showModal(), document.documentElement.classList.add("s-body-locked"), setTimeout(() => {
      document.body.scrollTop = h;
    }, 0);
  }, d = P(
    "aic-ct-result o-pinboard__item m-listing m-listing--variable-height",
    {
      "aic-ct-result--selected": o
    }
  );
  return w(() => {
    var h;
    (h = p == null ? void 0 : p.current) != null && h.includes("s-positioned") && c.current.classList.add("s-positioned"), p.current = c.current.className;
  }), /* @__PURE__ */ e.createElement(
    "li",
    {
      ref: c,
      id: `aic-ct-search__item-${r.id}`,
      className: d
    },
    r.image_id && /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "aic-ct-result__button",
        type: "button",
        onClick: m,
        "aria-description": o ? "This object is in your tour" : void 0
      },
      /* @__PURE__ */ e.createElement("span", { className: "m-listing__link" }, /* @__PURE__ */ e.createElement("span", { className: "m-listing__img m-listing__img--no-bg" }, o && /* @__PURE__ */ e.createElement("span", { className: "aic-ct-selected-marker" }, /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--check" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--check" }))), /* @__PURE__ */ e.createElement(
        "img",
        {
          src: r.thumbnail.lqip,
          alt: "",
          height: r.thumbnail.height,
          width: r.thumbnail.width,
          "data-iiif-id": `${s}/${r.image_id}`,
          "data-pin-media": S(
            s,
            r.image_id,
            "600",
            void 0,
            void 0,
            !1
          ),
          sizes: "(min-width: 1640px) 336px, (min-width: 1200px) 20.31vw, (min-width: 900px) 28.13vw, (min-width: 600px) 43.75vw,  43.75vw",
          "data-srcSet": `${S(
            s,
            r.image_id,
            "200",
            void 0,
            void 0,
            !1
          )} 200w, ${S(
            s,
            r.image_id,
            "400",
            void 0,
            void 0,
            !1
          )} 400w, ${S(
            s,
            r.image_id,
            "843",
            void 0,
            void 0,
            !1
          )} 843w, ${S(
            s,
            r.image_id,
            "1686",
            void 0,
            void 0,
            !1
          )} 1686w`
        }
      )), /* @__PURE__ */ e.createElement(
        "span",
        {
          id: `aic-ct-result__meta-${r.id}`,
          className: "m-listing__meta"
        },
        r.title && /* @__PURE__ */ e.createElement("span", { className: "title f-list-7" }, r.title),
        r.artist_title && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement("span", { className: "subtitle f-tertiary" }, r.artist_title))
      ))
    )
  );
}
M.propTypes = {
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
function ve() {
  const { searchPreviewId: i, searchResultItems: a, searchPreviewRef: n } = N(T), { iiifBaseUrl: s, tourItems: u, tourItemsDispatch: l } = N(I), [r, o] = b(!1), [c, p] = b(null), m = P({
    "aic-ct-preview__content": !0,
    "aic-ct-preview--loading": !c
  });
  w(() => {
    p(
      a.find((g) => g.id === i)
    );
  }, [i, a]);
  const d = () => {
    var g;
    l({
      type: r ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: r ? c.id : c
    }), (g = n == null ? void 0 : n.current) == null || g.close();
  }, h = () => {
    var g;
    (g = n == null ? void 0 : n.current) == null || g.close();
  };
  return w(() => {
    c && o(u.find((g) => g.id === c.id));
  }, [u, c]), /* @__PURE__ */ e.createElement("div", { className: m, id: "aic-ct-preview__content" }, c ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__header aic-ct-preview__padded" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-preview__close",
      className: "btn btn--icon btn--transparent aic-ct-preview__close",
      type: "button",
      "aria-label": "Close",
      onClick: h
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" }))
  ), /* @__PURE__ */ e.createElement("h2", { className: "f-module-title-2" }, "Artwork details")), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__image" }, /* @__PURE__ */ e.createElement(
    "img",
    {
      src: S(s, c.image_id, 680, 680),
      width: c.thumbnail.width,
      height: c.thumbnail.height,
      alt: c.thumbnail.alt_text || ""
    }
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__padded" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__details" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__title f-headline-editorial" }, c.title, c.date_display && /* @__PURE__ */ e.createElement(e.Fragment, null, ",", " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-preview__date f-list-4" }, c.date_display))), c.artist_title && /* @__PURE__ */ e.createElement("p", { className: "aic-ct-preview__artist f-subheading-1" }, c.artist_title)), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__links" }, (u.length < 6 || r) && /* @__PURE__ */ e.createElement(
    "button",
    {
      id: `aic-ct-preview__action-button-${c.id}`,
      className: "btn f-buttons aic-ct-preview__action-button",
      type: "button",
      onClick: d,
      "aria-pressed": r ? "true" : "false",
      "aria-label": "Toggle from your tour"
    },
    r ? "Remove from your tour" : "Add to your tour"
  ), /* @__PURE__ */ e.createElement(
    "a",
    {
      className: "f-link",
      target: "_blank",
      rel: "noopener noreferrer",
      href: `https://www.artic.edu/artworks/${c.id}`
    },
    "View full artwork page ",
    /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--new-window" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--new-window" }))
  )), c.description && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__description" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__description-title f-module-title-2" }, "Artwork description"), /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "f-body",
      dangerouslySetInnerHTML: { __html: c.description }
    }
  )), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn--transparent btn--w-icon f-buttons aic-ct-preview__close-trans",
      type: "button",
      onClick: h
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" })),
    "Close and back to results"
  ))) : /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__padded aic-ct-loader f-body" }, /* @__PURE__ */ e.createElement("p", null, "Loading..."), /* @__PURE__ */ e.createElement("div", { className: "loader" })));
}
function Ee() {
  const {
    searchError: i,
    searchFetching: a,
    searchResultItems: n,
    searchPreviewRef: s,
    setSearchPreviewId: u
  } = N(T), { scrollY: l } = N(I), r = me(() => {
    u(null), document.documentElement.scrollTop = l, document.documentElement.classList.remove("s-body-locked");
  }, [u, l]);
  return w(() => {
    const o = s.current;
    return o && o.addEventListener("close", r), () => {
      o && o.removeEventListener("close", r);
    };
  }, [s, r]), w(() => {
    const o = new Event("page:updated", { bubbles: !0 });
    setTimeout(() => {
      document.dispatchEvent(o);
    }, 0);
  }, [n]), !n && !a && !i ? null : /* @__PURE__ */ e.createElement("div", { className: "aic-ct-search-results" }, a && // Render only the loading message while fetching
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
  ), (n == null ? void 0 : n.length) === 0 && !a && !i && // Render only a no results message if there are no results
  /* @__PURE__ */ e.createElement(
    "div",
    {
      id: "aic-ct-search-results__no-results",
      className: "aic-ct-search-results__message f-body"
    },
    /* @__PURE__ */ e.createElement("p", null, "Sorry, we couldn’t find any results matching your criteria")
  ), (n == null ? void 0 : n.length) > 0 && !a && !i && // Render the results if there are results
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
    n.map((o) => /* @__PURE__ */ e.createElement(M, { key: o.id, itemData: o }))
  ), /* @__PURE__ */ e.createElement(
    "dialog",
    {
      ref: s,
      id: "aic-ct-search-preview",
      onClose: r
    },
    /* @__PURE__ */ e.createElement(ve, null)
  )));
}
function x(i = {}) {
  const { initialValue: a, maxLength: n, valueSetter: s } = i, [u, l] = b(a || ""), r = C(null), o = n - u.length;
  return {
    value: u,
    onChange: (p) => {
      const { value: m } = p.target;
      r.current.ariaBusy = !0, l(m), s && s(m), r.current.ariaBusy = !1;
    },
    countRef: r,
    charsRemaining: o,
    maxLength: n,
    counterEl: /* @__PURE__ */ e.createElement("span", { ref: r, "aria-live": "polite" }, "(", o, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")
  };
}
function B(i) {
  var g;
  const { itemData: a, itemIndex: n, setShouldAssignFocus: s, setRemoveButtons: u } = i, { iiifBaseUrl: l, tourItems: r, tourItemsDispatch: o, limits: c } = N(I), p = C(null), m = x({
    initialValue: (g = r[n]) == null ? void 0 : g.objectNote,
    maxLength: c.objectNote
  }), d = F(
    () => ({
      id: a.id,
      objectNote: m.value
    }),
    [a.id, m.value]
  ), h = () => {
    o({
      type: "REMOVE_ITEM",
      payload: a.id
    });
  };
  return w(() => {
    o({
      type: "UPDATE_NOTE",
      payload: d
    });
  }, [d, o]), w(() => {
    const v = p.current;
    return () => {
      document.activeElement === v && (r.length > 1 ? r.find((E, _) => {
        E.id === a.id && s({
          flag: !0,
          id: r[_ !== r.length - 1 ? _ + 1 : _ - 1].id
        });
      }) : s({
        flag: !0,
        id: null
      }));
    };
  }, [r, a.id, s]), w(() => (u((v) => [...v, { id: a.id, ref: p }]), () => {
    u(
      (v) => v.filter((E) => E.id !== a.id)
    );
  }), [u, r, a.id]), /* @__PURE__ */ e.createElement("li", { id: `aic-ct-tour__item-${a.id}` }, a.title && /* @__PURE__ */ e.createElement("h2", null, a.title), a.image_id && /* @__PURE__ */ e.createElement(
    "img",
    {
      src: S(l, a.image_id, "240", "240"),
      alt: a.thumbnail.alt_text
    }
  ), a.artist_title && /* @__PURE__ */ e.createElement("p", null, a.artist_title), a.description && /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: a.description } }), /* @__PURE__ */ e.createElement("label", { htmlFor: `aic-ct-note-${a.id}` }, "Personal note", " ", /* @__PURE__ */ e.createElement("span", { ref: m.countRef, "aria-live": "polite" }, "(", m.charsRemaining, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "textarea",
    {
      id: `aic-ct-note-${a.id}`,
      onChange: m.onChange,
      rows: "5",
      value: m.value,
      maxLength: m.maxLength
    }
  ), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: p,
      type: "button",
      onClick: () => {
        h(a.id);
      }
    },
    "Remove from tour"
  ));
}
B.propTypes = {
  itemData: t.shape({
    id: t.number.isRequired,
    title: t.string.isRequired,
    image_id: t.string,
    thumbnail: t.shape({
      alt_text: t.string
    }),
    artist_title: t.string,
    description: t.string
  }),
  itemIndex: t.number.isRequired,
  setRemoveButtons: t.func,
  setShouldAssignFocus: t.func
};
function _e() {
  const { tourItems: i, navSearchButtonRef: a } = N(I), [n, s] = b({
    flag: !1,
    id: null
  }), [u, l] = b([]);
  return w(() => {
    n.flag && (!i.length && (a != null && a.current) ? a.current.focus() : u.find((r) => r.id === n.id).ref.current.focus(), s(!1));
  }, [i, n, u, a]), /* @__PURE__ */ e.createElement(e.Fragment, null, i.length > 0 ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("h2", { id: "aic-ct-tour__heading" }, "Your tour"), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-tour__results" }, i.map((r, o) => /* @__PURE__ */ e.createElement(
    B,
    {
      key: r.id,
      setRemoveButtons: l,
      itemData: r,
      itemIndex: o,
      shouldAssignFocus: n,
      setShouldAssignFocus: s
    }
  )))) : /* @__PURE__ */ e.createElement("div", { id: "aic-ct-tour__no-items" }, "You haven’t added any artworks to your tour yet"));
}
function ye() {
  const {
    tourTitle: i,
    setTourTitle: a,
    creatorEmail: n,
    setCreatorEmail: s,
    setValidCreatorEmail: u,
    creatorName: l,
    setCreatorName: r,
    recipientName: o,
    setRecipientName: c,
    marketingOptIn: p,
    setMarketingOptIn: m,
    tourDescription: d,
    setTourDescription: h,
    limits: g
  } = N(I), v = x({
    initialValue: i,
    maxLength: g.title,
    valueSetter: a
  }), E = x({
    initialValue: l,
    maxLength: g.creatorName,
    valueSetter: r
  }), _ = x({
    initialValue: o,
    maxLength: g.recipientName,
    valueSetter: c
  }), f = x({
    initialValue: d,
    maxLength: g.description,
    valueSetter: h
  });
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__title" }, "Tour Title ", v.counterEl), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      onChange: v.onChange,
      value: v.value,
      id: "aic-ct-metadata__title",
      maxLength: v.maxLength,
      "aria-required": "true",
      required: !0
    }
  )), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__creator-name" }, "Your name ", /* @__PURE__ */ e.createElement("em", null, "(optional)"), " ", E.counterEl), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: E.value,
      onChange: E.onChange,
      id: "aic-ct-metadata__creator-name",
      maxLength: E.maxLength
    }
  )), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__creator-email" }, "Your email"), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "email",
      value: n.value,
      onChange: (y) => {
        s(y.target.value), u(y.target.validity.valid);
      },
      id: "aic-ct-metadata__creator-email",
      "aria-required": "true",
      required: !0
    }
  )), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__recipient-name" }, "Who is this tour for? ", /* @__PURE__ */ e.createElement("em", null, "(optional)"), " ", _.counterEl), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: _.value,
      onChange: _.onChange,
      id: "aic-ct-metadata__recipient-name",
      maxLength: _.maxLength
    }
  )), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__description" }, "Tour Description ", /* @__PURE__ */ e.createElement("em", null, "(optional)"), " ", f.counterEl), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "textarea",
    {
      id: "aic-ct-metadata__description",
      onChange: f.onChange,
      rows: "5",
      value: f.value,
      maxLength: f.maxLength
    }
  )), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      id: "aic-ct-metadata__opt-in",
      checked: p,
      onChange: (y) => {
        m(y.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__opt-in" }, "I would like to recieve marketing emails from AIC")));
}
function Ne() {
  const {
    apiSaveEndpoint: i,
    tourTitle: a,
    creatorName: n,
    creatorEmail: s,
    recipientName: u,
    marketingOptIn: l,
    validCreatorEmail: r,
    tourItems: o,
    tourDescription: c,
    validityIssues: p,
    setValidityIssues: m,
    limits: d,
    isSaving: h,
    setIsSaving: g
  } = N(I), [v, E] = b(null), _ = async () => {
    g(!0);
    try {
      const f = await fetch(`${i}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          creatorEmail: s,
          marketingOptIn: l,
          tourJson: {
            title: a,
            creatorName: n,
            recipientName: u,
            description: c,
            // "artworks" is essentially everything from the GET response with added "objectNote"
            // The API expects these fields named in this way
            artworks: o
          }
        })
      });
      if (!f.ok)
        throw new Error(
          "There was a problem saving your tour, please try again. If the problem persists, please contact us and let us know."
        );
      const { message: y } = await f.json();
      E({
        type: "success",
        message: y
      });
    } catch (f) {
      E({
        type: "error",
        message: f.message
      });
    }
    g(!1);
  };
  return w(() => {
    const f = [];
    a.length || f.push("A title is required"), a.length > d.title && f.push("Tour title must not exceed the character limit"), r || f.push("A valid email address is required"), c.length > d.description && f.push(
      "Tour description must not exceed the character limit"
    ), o.length < d.items.min && f.push("At least one item is required"), o.length > d.items.max && f.push("Tours must not contain more than 6 artworks"), o.some((y) => {
      var k;
      return ((k = y.objectNote) == null ? void 0 : k.length) > d.objectNote ? (f.push("Notes must not exceed the character limit"), !0) : !1;
    }), m(f);
  }, [
    a,
    c,
    o,
    m,
    d,
    r
  ]), /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("h2", null, "Submit your tour"), p.length ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", null, "Fix these issue before submitting your tour:"), p.length && /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-validation-errors" }, p.map((f, y) => /* @__PURE__ */ e.createElement("li", { key: y }, f)))) : /* @__PURE__ */ e.createElement("div", { id: "aic-ct-validation-success" }, /* @__PURE__ */ e.createElement("div", { tabIndex: "-1", "aria-live": "polite" }, h && /* @__PURE__ */ e.createElement("p", null, "Saving..."), !h && !v && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", null, "Are you sure you want to submit your tour? You won't be able to make any more changes after this stage"), /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-save-button",
      type: "button",
      onClick: _,
      disabled: h
    },
    "Save my tour"
  )), v && (v.type === "success" && /* @__PURE__ */ e.createElement("div", { id: "aic-ct-save-success" }, /* @__PURE__ */ e.createElement("p", null, v.message)) || v.type === "error" && /* @__PURE__ */ e.createElement("div", { id: "aic-ct-save-error" }, /* @__PURE__ */ e.createElement("p", null, v.message), /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-save-button",
      type: "button",
      onClick: _,
      disabled: h
    },
    "Save my tour"
  ))))));
}
function we() {
  const { activeNavPage: i, setActiveNavPage: a, tourItems: n } = N(I), s = n.length, u = () => {
    a(i === 0 ? 1 : 2);
  };
  return /* @__PURE__ */ e.createElement(
    "header",
    {
      id: "aic-ct-header",
      className: "aic-ct-header f-body",
      "aria-label": "Custom tour builder"
    },
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-item-info", "aria-live": "polite" }, /* @__PURE__ */ e.createElement("span", { id: "aic-ct-item-count", className: "aic-ct-item-count f-body" }, s), " ", /* @__PURE__ */ e.createElement("span", null, "artworks added ", /* @__PURE__ */ e.createElement("em", null, "(of max 6)"))),
    /* @__PURE__ */ e.createElement(
      "button",
      {
        id: "aic-ct-header__button",
        className: "aic-ct-header__button btn btn--transparent btn--w-icon f-buttons",
        type: "button",
        onClick: u
      },
      i === 0 && "Preview",
      i > 0 && "Finish",
      /* @__PURE__ */ e.createElement("svg", { className: "icon--arrow", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--arrow" }))
    )
  );
}
const Ie = (i) => {
  const { apiSaveEndpoint: a, tourTitle: n, tourDescription: s, tourItems: u } = i, l = {
    apiSaveEndpoint: a,
    tourTitle: n,
    tourDescription: s,
    tourItems: u
  };
  return w(() => {
    window.addEventListener("beforeunload", (r) => {
      r.preventDefault(), r.returnValue = "";
    });
  }, []), /* @__PURE__ */ e.createElement("div", { className: "custom-tours" }, /* @__PURE__ */ e.createElement(V, { ...l }, /* @__PURE__ */ e.createElement(we, null), /* @__PURE__ */ e.createElement(D, null, /* @__PURE__ */ e.createElement(
    R,
    {
      id: 0,
      title: "Browse",
      tagline: "for artworks to add to your tour"
    },
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-intro" }, /* @__PURE__ */ e.createElement("h1", { className: "f-display-2" }, "Create your own tour"), /* @__PURE__ */ e.createElement("p", { className: "f-deck" }, "Select from the list of available artworks or browse themes to help get you started. Choose up to 6 artworks for your tour.")),
    /* @__PURE__ */ e.createElement(O, null, /* @__PURE__ */ e.createElement(be, null), /* @__PURE__ */ e.createElement(fe, null), /* @__PURE__ */ e.createElement(Ee, null))
  ), /* @__PURE__ */ e.createElement(
    R,
    {
      id: 1,
      title: "Personalize",
      tagline: "your tour by adding notes to artworks"
    },
    /* @__PURE__ */ e.createElement(ye, null),
    /* @__PURE__ */ e.createElement(_e, null)
  ), /* @__PURE__ */ e.createElement(R, { id: 2, title: "Complete", tagline: "and share with friends" }, /* @__PURE__ */ e.createElement(Ne, null))), /* @__PURE__ */ e.createElement(ge, null)));
};
Ie.propTypes = {
  apiSaveEndpoint: t.string,
  tourTitle: t.string,
  tourDescription: t.string,
  tourItems: t.array,
  searchPreviewId: t.number
};
export {
  Ie as default
};
