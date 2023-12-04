import e, { createContext as R, useState as h, useReducer as ue, useRef as P, useMemo as A, useContext as I, useEffect as N, useCallback as me } from "react";
import t from "prop-types";
const de = (n, a) => {
  switch (a.type) {
    case "ADD_ITEM":
      return [...n, { ...a.payload, objectNote: "" }];
    case "UPDATE_NOTE":
      return n.map((r) => r.id === a.payload.id ? { ...r, objectNote: a.payload.objectNote } : r);
    case "REMOVE_ITEM":
      return n.filter(({ id: r }) => r !== a.payload);
    default:
      return n;
  }
}, w = R();
function F(n) {
  const {
    children: a,
    tourTitle: r,
    creatorEmail: c,
    creatorName: o,
    recipientName: s,
    tourDescription: i,
    marketingOptIn: u,
    tourItems: l,
    navPages: g,
    apiSaveEndpoint: d
  } = n, [v, b] = h(r || ""), [m, f] = h(c || ""), [E, _] = h(!1), [p, y] = h(o || ""), [T, Y] = h(s || ""), [Q, U] = h(
    u || !1
  ), [H, z] = h(
    i || ""
  ), [J, W] = h(g || []), [G, K] = h(0), [X, Z] = ue(
    de,
    l || []
  ), ee = P(null), [te, ae] = h([]), re = "https://artic.edu/iiif/2", ne = d || "/api/v1/custom-tours", [ie, se] = h(!1), [ce, le] = h(0), oe = A(
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
    w.Provider,
    {
      value: {
        apiSaveEndpoint: ne,
        iiifBaseUrl: re,
        limits: oe,
        tourTitle: v,
        setTourTitle: b,
        creatorEmail: m,
        setCreatorEmail: f,
        validCreatorEmail: E,
        setValidCreatorEmail: _,
        creatorName: p,
        setCreatorName: y,
        recipientName: T,
        setRecipientName: Y,
        tourDescription: H,
        setTourDescription: z,
        marketingOptIn: Q,
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
F.propTypes = {
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
w.Provider.propTypes = {
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
function he(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var V = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(n) {
  (function() {
    var a = {}.hasOwnProperty;
    function r() {
      for (var c = [], o = 0; o < arguments.length; o++) {
        var s = arguments[o];
        if (s) {
          var i = typeof s;
          if (i === "string" || i === "number")
            c.push(s);
          else if (Array.isArray(s)) {
            if (s.length) {
              var u = r.apply(null, s);
              u && c.push(u);
            }
          } else if (i === "object") {
            if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]")) {
              c.push(s.toString());
              continue;
            }
            for (var l in s)
              a.call(s, l) && s[l] && c.push(l);
          }
        }
      }
      return c.join(" ");
    }
    n.exports ? (r.default = r, n.exports = r) : window.classNames = r;
  })();
})(V);
var pe = V.exports;
const D = /* @__PURE__ */ he(pe);
function ge() {
  const {
    navPages: n,
    activeNavPage: a,
    setActiveNavPage: r,
    navSearchButtonRef: c,
    isSaving: o
  } = I(w), s = (i) => D("aic-ct-nav__button btn f-buttons btn--transparent", {
    "aic-ct-nav__button--active": a === i,
    "aic-ct-nav__button--done": a > i
  });
  return /* @__PURE__ */ e.createElement("footer", { className: "aic-ct-footer", "aria-label": "Custom tour builder footer" }, /* @__PURE__ */ e.createElement(
    "nav",
    {
      id: "aic-ct-navigation",
      className: "aic-ct-nav",
      "aria-label": "Custom tour builder navigation"
    },
    n.map((i, u) => /* @__PURE__ */ e.createElement(
      "button",
      {
        ref: i.id === 0 ? c : null,
        key: i.id,
        id: `aic-ct-nav-button-${i.id}`,
        "aria-controls": `aic-ct-nav-page-${i.id}`,
        "aria-pressed": i.id === a,
        type: "button",
        onClick: () => r(u),
        disabled: o,
        className: s(i.id)
      },
      /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__button-wrapper" }, /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__number" }, i.id + 1), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__title" }, i.title), " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-nav__tagline" }, i.tagline))
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
function O({ children: n }) {
  const { setNavPages: a } = I(w);
  return N(() => {
    a(
      n ? n.map((r, c) => ({
        id: c,
        title: r.props.title,
        tagline: r.props.tagline
      })) : []
    );
  }, [n, a]), /* @__PURE__ */ e.createElement("div", { id: "aic-ct-nav-pages" }, n);
}
O.propTypes = {
  children: t.node.isRequired
};
function k(n) {
  const { id: a, children: r } = n, { activeNavPage: c } = I(w);
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
k.propTypes = {
  id: t.number.isRequired,
  title: t.string.isRequired,
  tagline: t.string.isRequired,
  children: t.oneOfType([
    t.arrayOf(t.element),
    t.object
  ]).isRequired
};
const S = R();
function j(n) {
  const {
    children: a,
    searchResultItems: r,
    searchQuery: c,
    searchFetching: o,
    searchError: s,
    searchPreviewId: i
  } = n, [u, l] = h(
    r || null
  ), [g, d] = h(c || ""), [v, b] = h(
    o || !1
  ), [m, f] = h(s || !1), [E, _] = h(null), [p, y] = h(
    i || null
  ), T = P();
  return /* @__PURE__ */ e.createElement(
    S.Provider,
    {
      value: {
        searchResultItems: u,
        setSearchResultItems: l,
        searchQuery: g,
        setSearchQuery: d,
        searchFetching: v,
        setSearchFetching: b,
        searchError: m,
        setSearchError: f,
        activeTheme: E,
        setActiveTheme: _,
        searchPreviewId: p,
        setSearchPreviewId: y,
        searchPreviewRef: T
      }
    },
    a
  );
}
j.propTypes = {
  children: t.node.isRequired,
  searchResultItems: t.array,
  searchQuery: t.string,
  searchFetching: t.bool,
  searchError: t.oneOfType([t.string, t.bool]),
  searchPreviewId: t.number
};
S.Provider.propTypes = {
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
const q = (n) => {
  const [a, r] = h(null), [c, o] = h(!1), [s, i] = h(null), [u, l] = h(null), { dataSubSelector: g, dataSetter: d, fetchingSetter: v, errorSetter: b } = n || {}, m = () => {
    r(null), o(!1), i(null), l(null);
  }, f = async (E) => {
    o(!0);
    const _ = new AbortController();
    l(_);
    try {
      const y = await (await fetch(E, { signal: _.signal })).json();
      r(g ? y[g] : y), i(null), o(!1);
    } catch (p) {
      if (p.name === "AbortError") {
        m();
        return;
      }
      i("Error fetching results"), o(!1);
    }
  };
  return N(() => {
    const E = u;
    return () => {
      E && E.abort();
    };
  }, [u]), N(() => {
    d && d(a);
  }, [a, d]), N(() => {
    b && b(s);
  }, [s, b]), N(() => {
    v && v(c);
  }, [c, v]), { data: a, fetching: c, error: s, fetchData: f, resetState: m };
};
function x(n, a, r = "", c = "", o = "full", s = !0) {
  return `${n}/${a}/${o}/${s && "!"}${r},${c}/0/default.jpg`;
}
function L(n) {
  const a = new URL("https://api.artic.edu/api/v1/artworks/search");
  return a.searchParams.set("query[bool][must][][term][is_on_view]", "true"), a.searchParams.set("query[bool][must][][exists][field]", "description"), a.searchParams.set("query[bool][should][][exists][field]", "description"), a.searchParams.set("query[bool][should][][exists][field]", "subject_id"), a.searchParams.set("query[bool][should][][exists][field]", "style_id"), a.searchParams.set("query[bool][should][][term][is_boosted]", "true"), a.searchParams.set("query[bool][minimum_should_match]", "1"), a.searchParams.set(
    "fields",
    "artist_title,description,id,image_id,thumbnail,title,date_display,gallery_title,gallery_id"
  ), a.searchParams.set("limit", "60"), n.keywords && a.searchParams.set("q", n.keywords), n.subjectIds && a.searchParams.set(
    "query[bool][must][][terms][subject_ids][]",
    n.subjectIds
  ), n.categoryIds && a.searchParams.set(
    "query[bool][must][][term][category_ids][value]",
    n.categoryIds
  ), a;
}
function ve() {
  const {
    searchQuery: n,
    setSearchQuery: a,
    setSearchResultItems: r,
    setSearchFetching: c,
    setSearchError: o,
    setActiveTheme: s
  } = I(S), { fetchData: i } = q({
    dataSubSelector: "data",
    dataSetter: r,
    fetchingSetter: c,
    errorSetter: o
  }), u = (l) => {
    i(L({ keywords: n })), s(null), l.preventDefault();
  };
  return /* @__PURE__ */ e.createElement(
    "form",
    {
      id: "aic-ct-search",
      role: "search",
      "aria-label": "Objects for your tour",
      onSubmit: u
    },
    /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-search__input", className: "sr-only" }, "Search the collection"),
    /* @__PURE__ */ e.createElement("br", null),
    /* @__PURE__ */ e.createElement(
      "input",
      {
        id: "aic-ct-search__input",
        type: "search",
        placeholder: "Search",
        value: n,
        onChange: (l) => {
          l.target.value && l.target.setCustomValidity(""), a(l.target.value);
        },
        onInvalid: (l) => {
          l.target.setCustomValidity("You must enter a search term");
        },
        required: !0
      }
    ),
    /* @__PURE__ */ e.createElement("button", { id: "aic-ct-search__button", type: "submit" }, "Search")
  );
}
function M(n) {
  const { id: a, label: r, subjectIds: c, categoryIds: o } = n, {
    setSearchResultItems: s,
    setSearchFetching: i,
    setSearchError: u,
    setSearchQuery: l,
    activeTheme: g,
    setActiveTheme: d
  } = I(S), { fetchData: v, resetState: b } = q({
    dataSubSelector: "data",
    dataSetter: s,
    fetchingSetter: i,
    errorSetter: u
  }), m = () => {
    g === r ? (d(null), b()) : (v(L({ subjectIds: c, categoryIds: o })), d(r), l(""));
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, (g === null || g === r) && /* @__PURE__ */ e.createElement(
    "button",
    {
      id: `aic-ct-theme-toggle-${a}`,
      onClick: m,
      "aria-pressed": g === r ? "true" : "false"
    },
    r
  ));
}
M.propTypes = {
  id: t.number.isRequired,
  label: t.string.isRequired,
  subjectIds: t.arrayOf(t.string),
  categoryIds: t.arrayOf(t.string),
  thumbnailId: t.string.isRequired
};
function fe() {
  const n = [
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
      thumbnailId: "ea8c5d62-6ce8-88e8-feb1-e0053cf534c5"
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
  return /* @__PURE__ */ e.createElement("div", { id: "aic-ct-themes" }, n.map((a, r) => /* @__PURE__ */ e.createElement(
    M,
    {
      key: a.label,
      id: r,
      label: a.label,
      subjectIds: a.subjectIds,
      categoryIds: a.categoryIds,
      thumbnailId: a.thumbnailId
    }
  )));
}
function $(n) {
  const { setSearchPreviewId: a, searchPreviewRef: r } = I(S), { iiifBaseUrl: c, setScrollY: o } = I(w), { itemData: s } = n, i = () => {
    const u = document.documentElement.scrollTop;
    a(s.id), o(u), r.current.showModal(), document.documentElement.classList.add("s-body-locked"), setTimeout(() => {
      document.body.scrollTop = u;
    }, 0);
  };
  return /* @__PURE__ */ e.createElement("li", { id: `aic-ct-search__item-${s.id}`, className: "aic-ct-result" }, s.image_id && /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn--transparent f-buttons btn--ct-search__image aic-ct-result__button",
      type: "button",
      onClick: i
    },
    /* @__PURE__ */ e.createElement(
      "img",
      {
        src: x(c, s.image_id, "240", "240"),
        alt: s.thumbnail.alt_text
      }
    )
  ), s.title && /* @__PURE__ */ e.createElement("h2", null, s.title), s.artist_title && /* @__PURE__ */ e.createElement("p", null, s.artist_title));
}
$.propTypes = {
  itemData: t.shape({
    id: t.number.isRequired,
    title: t.string.isRequired,
    image_id: t.string,
    thumbnail: t.shape({
      alt_text: t.string
    }),
    artist_title: t.string,
    description: t.string
  })
};
function be() {
  const { searchPreviewId: n, searchResultItems: a, searchPreviewRef: r } = I(S), { iiifBaseUrl: c, tourItems: o, tourItemsDispatch: s } = I(w), [i, u] = h(!1), [l, g] = h(null), d = D({
    "aic-ct-preview__content": !0,
    "aic-ct-preview--loading": !l
  });
  N(() => {
    g(
      a.find((m) => m.id === n)
    );
  }, [n, a]);
  const v = () => {
    var m;
    s({
      type: i ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: i ? l.id : l
    }), (m = r == null ? void 0 : r.current) == null || m.close();
  }, b = () => {
    var m;
    (m = r == null ? void 0 : r.current) == null || m.close();
  };
  return N(() => {
    l && u(o.find((m) => m.id === l.id));
  }, [o, l]), /* @__PURE__ */ e.createElement("div", { className: d, id: "aic-ct-preview__content" }, l ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__header aic-ct-preview__padded" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-preview__close",
      className: "btn btn--icon btn--transparent aic-ct-preview__close",
      type: "button",
      "aria-label": "Close",
      onClick: b
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" }))
  ), /* @__PURE__ */ e.createElement("h2", { className: "f-module-title-2" }, "Artwork details")), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__image" }, /* @__PURE__ */ e.createElement(
    "img",
    {
      src: x(c, l.image_id, 680, 680),
      width: l.thumbnail.width,
      height: l.thumbnail.height,
      alt: l.thumbnail.alt_text || ""
    }
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__padded" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__details" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__title f-headline-editorial" }, l.title, l.date_display && /* @__PURE__ */ e.createElement(e.Fragment, null, ",", " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-preview__date f-list-4" }, l.date_display))), l.artist_title && /* @__PURE__ */ e.createElement("p", { className: "aic-ct-preview__artist f-subheading-1" }, l.artist_title)), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__links" }, (o.length < 6 || i) && /* @__PURE__ */ e.createElement(
    "button",
    {
      id: `aic-ct-preview__action-button-${l.id}`,
      className: "btn f-buttons aic-ct-preview__action-button",
      type: "button",
      onClick: v,
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
      href: `https://www.artic.edu/artworks/${l.id}`
    },
    "View full artwork page ",
    /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", className: "icon--new-window" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--new-window" }))
  )), l.description && /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__description" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__description-title f-module-title-2" }, "Artwork description"), /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "f-body",
      dangerouslySetInnerHTML: { __html: l.description }
    }
  )), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn--transparent btn--w-icon f-buttons aic-ct-preview__close-trans",
      type: "button",
      onClick: b
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" })),
    "Close and back to results"
  ))) : /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__padded" }, "Loading... ", /* @__PURE__ */ e.createElement("span", { className: "loader" })));
}
function Ee() {
  const {
    searchError: n,
    searchFetching: a,
    searchResultItems: r,
    searchPreviewRef: c,
    setSearchPreviewId: o
  } = I(S), { scrollY: s } = I(w), i = me(() => {
    o(null), document.documentElement.scrollTop = s, document.documentElement.classList.remove("s-body-locked");
  }, [o, s]);
  return N(() => {
    const u = c.current;
    return u && u.addEventListener("close", i), () => {
      u && u.removeEventListener("close", i);
    };
  }, [c, i]), a ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__loading" }, "Loading...") : n ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__error" }, n) : (r == null ? void 0 : r.length) === 0 ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__no-results" }, "Sorry, we couldn’t find any results matching your criteria") : (r == null ? void 0 : r.length) > 0 ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-search__results" }, r.map((u) => /* @__PURE__ */ e.createElement($, { key: u.id, itemData: u }))), /* @__PURE__ */ e.createElement(
    "dialog",
    {
      ref: c,
      id: "aic-ct-search-preview",
      onClose: i
    },
    /* @__PURE__ */ e.createElement(be, null)
  )) : null;
}
function C(n = {}) {
  const { initialValue: a, maxLength: r, valueSetter: c } = n, [o, s] = h(a || ""), i = P(null), u = r - o.length;
  return {
    value: o,
    onChange: (g) => {
      const { value: d } = g.target;
      i.current.ariaBusy = !0, s(d), c && c(d), i.current.ariaBusy = !1;
    },
    countRef: i,
    charsRemaining: u,
    maxLength: r,
    counterEl: /* @__PURE__ */ e.createElement("span", { ref: i, "aria-live": "polite" }, "(", u, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")
  };
}
function B(n) {
  var m;
  const { itemData: a, itemIndex: r, setShouldAssignFocus: c, setRemoveButtons: o } = n, { iiifBaseUrl: s, tourItems: i, tourItemsDispatch: u, limits: l } = I(w), g = P(null), d = C({
    initialValue: (m = i[r]) == null ? void 0 : m.objectNote,
    maxLength: l.objectNote
  }), v = A(
    () => ({
      id: a.id,
      objectNote: d.value
    }),
    [a.id, d.value]
  ), b = () => {
    u({
      type: "REMOVE_ITEM",
      payload: a.id
    });
  };
  return N(() => {
    u({
      type: "UPDATE_NOTE",
      payload: v
    });
  }, [v, u]), N(() => {
    const f = g.current;
    return () => {
      document.activeElement === f && (i.length > 1 ? i.find((E, _) => {
        E.id === a.id && c({
          flag: !0,
          id: i[_ !== i.length - 1 ? _ + 1 : _ - 1].id
        });
      }) : c({
        flag: !0,
        id: null
      }));
    };
  }, [i, a.id, c]), N(() => (o((f) => [...f, { id: a.id, ref: g }]), () => {
    o(
      (f) => f.filter((E) => E.id !== a.id)
    );
  }), [o, i, a.id]), /* @__PURE__ */ e.createElement("li", { id: `aic-ct-tour__item-${a.id}` }, a.title && /* @__PURE__ */ e.createElement("h2", null, a.title), a.image_id && /* @__PURE__ */ e.createElement(
    "img",
    {
      src: x(s, a.image_id, "240", "240"),
      alt: a.thumbnail.alt_text
    }
  ), a.artist_title && /* @__PURE__ */ e.createElement("p", null, a.artist_title), a.description && /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: a.description } }), /* @__PURE__ */ e.createElement("label", { htmlFor: `aic-ct-note-${a.id}` }, "Personal note", " ", /* @__PURE__ */ e.createElement("span", { ref: d.countRef, "aria-live": "polite" }, "(", d.charsRemaining, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "textarea",
    {
      id: `aic-ct-note-${a.id}`,
      onChange: d.onChange,
      rows: "5",
      value: d.value,
      maxLength: d.maxLength
    }
  ), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: g,
      type: "button",
      onClick: () => {
        b(a.id);
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
  const { tourItems: n, navSearchButtonRef: a } = I(w), [r, c] = h({
    flag: !1,
    id: null
  }), [o, s] = h([]);
  return N(() => {
    r.flag && (!n.length && (a != null && a.current) ? a.current.focus() : o.find((i) => i.id === r.id).ref.current.focus(), c(!1));
  }, [n, r, o, a]), /* @__PURE__ */ e.createElement(e.Fragment, null, n.length > 0 ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("h2", { id: "aic-ct-tour__heading" }, "Your tour"), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-tour__results" }, n.map((i, u) => /* @__PURE__ */ e.createElement(
    B,
    {
      key: i.id,
      setRemoveButtons: s,
      itemData: i,
      itemIndex: u,
      shouldAssignFocus: r,
      setShouldAssignFocus: c
    }
  )))) : /* @__PURE__ */ e.createElement("div", { id: "aic-ct-tour__no-items" }, "You haven’t added any artworks to your tour yet"));
}
function ye() {
  const {
    tourTitle: n,
    setTourTitle: a,
    creatorEmail: r,
    setCreatorEmail: c,
    setValidCreatorEmail: o,
    creatorName: s,
    setCreatorName: i,
    recipientName: u,
    setRecipientName: l,
    marketingOptIn: g,
    setMarketingOptIn: d,
    tourDescription: v,
    setTourDescription: b,
    limits: m
  } = I(w), f = C({
    initialValue: n,
    maxLength: m.title,
    valueSetter: a
  }), E = C({
    initialValue: s,
    maxLength: m.creatorName,
    valueSetter: i
  }), _ = C({
    initialValue: u,
    maxLength: m.recipientName,
    valueSetter: l
  }), p = C({
    initialValue: v,
    maxLength: m.description,
    valueSetter: b
  });
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__title" }, "Tour Title ", f.counterEl), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      onChange: f.onChange,
      value: f.value,
      id: "aic-ct-metadata__title",
      maxLength: f.maxLength,
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
      value: r.value,
      onChange: (y) => {
        c(y.target.value), o(y.target.validity.valid);
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
  )), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__description" }, "Tour Description ", /* @__PURE__ */ e.createElement("em", null, "(optional)"), " ", p.counterEl), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "textarea",
    {
      id: "aic-ct-metadata__description",
      onChange: p.onChange,
      rows: "5",
      value: p.value,
      maxLength: p.maxLength
    }
  )), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      id: "aic-ct-metadata__opt-in",
      checked: g,
      onChange: (y) => {
        d(y.target.checked);
      }
    }
  ), /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__opt-in" }, "I would like to recieve marketing emails from AIC")));
}
function Ie() {
  const {
    apiSaveEndpoint: n,
    tourTitle: a,
    creatorName: r,
    creatorEmail: c,
    recipientName: o,
    marketingOptIn: s,
    validCreatorEmail: i,
    tourItems: u,
    tourDescription: l,
    validityIssues: g,
    setValidityIssues: d,
    limits: v,
    isSaving: b,
    setIsSaving: m
  } = I(w), [f, E] = h(null), _ = async () => {
    m(!0);
    try {
      const p = await fetch(`${n}`, {
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
            recipientName: o,
            description: l,
            // "artworks" is essentially everything from the GET response with added "objectNote"
            // The API expects these fields named in this way
            artworks: u
          }
        })
      });
      if (!p.ok)
        throw new Error(
          "There was a problem saving your tour, please try again. If the problem persists, please contact us and let us know."
        );
      const { message: y } = await p.json();
      E({
        type: "success",
        message: y
      });
    } catch (p) {
      E({
        type: "error",
        message: p.message
      });
    }
    m(!1);
  };
  return N(() => {
    const p = [];
    a.length || p.push("A title is required"), a.length > v.title && p.push("Tour title must not exceed the character limit"), i || p.push("A valid email address is required"), l.length > v.description && p.push(
      "Tour description must not exceed the character limit"
    ), u.length < v.items.min && p.push("At least one item is required"), u.length > v.items.max && p.push("Tours must not contain more than 6 artworks"), u.some((y) => {
      var T;
      return ((T = y.objectNote) == null ? void 0 : T.length) > v.objectNote ? (p.push("Notes must not exceed the character limit"), !0) : !1;
    }), d(p);
  }, [
    a,
    l,
    u,
    d,
    v,
    i
  ]), /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("h2", null, "Submit your tour"), g.length ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", null, "Fix these issue before submitting your tour:"), g.length && /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-validation-errors" }, g.map((p, y) => /* @__PURE__ */ e.createElement("li", { key: y }, p)))) : /* @__PURE__ */ e.createElement("div", { id: "aic-ct-validation-success" }, /* @__PURE__ */ e.createElement("div", { tabIndex: "-1", "aria-live": "polite" }, b && /* @__PURE__ */ e.createElement("p", null, "Saving..."), !b && !f && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", null, "Are you sure you want to submit your tour? You won't be able to make any more changes after this stage"), /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-save-button",
      type: "button",
      onClick: _,
      disabled: b
    },
    "Save my tour"
  )), f && (f.type === "success" && /* @__PURE__ */ e.createElement("div", { id: "aic-ct-save-success" }, /* @__PURE__ */ e.createElement("p", null, f.message)) || f.type === "error" && /* @__PURE__ */ e.createElement("div", { id: "aic-ct-save-error" }, /* @__PURE__ */ e.createElement("p", null, f.message), /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-save-button",
      type: "button",
      onClick: _,
      disabled: b
    },
    "Save my tour"
  ))))));
}
function Ne() {
  const { activeNavPage: n, setActiveNavPage: a, tourItems: r } = I(w), c = r.length, o = () => {
    a(n === 0 ? 1 : 2);
  };
  return /* @__PURE__ */ e.createElement(
    "header",
    {
      id: "aic-ct-header",
      className: "aic-ct-header f-body",
      "aria-label": "Custom tour builder"
    },
    /* @__PURE__ */ e.createElement("div", { className: "aic-ct-item-info", "aria-live": "polite" }, /* @__PURE__ */ e.createElement("span", { id: "aic-ct-item-count", className: "aic-ct-item-count" }, c), " ", /* @__PURE__ */ e.createElement("span", null, "artworks added ", /* @__PURE__ */ e.createElement("em", null, "(of max 6)"))),
    /* @__PURE__ */ e.createElement(
      "button",
      {
        id: "aic-ct-header__button",
        className: "aic-ct-header__button btn btn--transparent btn--w-icon f-buttons",
        type: "button",
        onClick: o
      },
      n === 0 && "Preview",
      n > 0 && "Finish",
      /* @__PURE__ */ e.createElement("svg", { className: "icon--arrow", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--arrow" }))
    )
  );
}
const we = (n) => {
  const { apiSaveEndpoint: a, tourTitle: r, tourDescription: c, tourItems: o } = n, s = {
    apiSaveEndpoint: a,
    tourTitle: r,
    tourDescription: c,
    tourItems: o
  };
  return N(() => {
    window.addEventListener("beforeunload", (i) => {
      i.preventDefault(), i.returnValue = "";
    });
  }, []), /* @__PURE__ */ e.createElement("div", { className: "custom-tours" }, /* @__PURE__ */ e.createElement(F, { ...s }, /* @__PURE__ */ e.createElement(Ne, null), /* @__PURE__ */ e.createElement(O, null, /* @__PURE__ */ e.createElement(
    k,
    {
      id: 0,
      title: "Browse",
      tagline: "for artworks to add to your tour"
    },
    /* @__PURE__ */ e.createElement(j, null, /* @__PURE__ */ e.createElement(ve, null), /* @__PURE__ */ e.createElement(fe, null), /* @__PURE__ */ e.createElement(Ee, null))
  ), /* @__PURE__ */ e.createElement(
    k,
    {
      id: 1,
      title: "Personalize",
      tagline: "your tour by adding notes to artworks"
    },
    /* @__PURE__ */ e.createElement(ye, null),
    /* @__PURE__ */ e.createElement(_e, null)
  ), /* @__PURE__ */ e.createElement(k, { id: 2, title: "Complete", tagline: "and share with friends" }, /* @__PURE__ */ e.createElement(Ie, null))), /* @__PURE__ */ e.createElement(ge, null)));
};
we.propTypes = {
  apiSaveEndpoint: t.string,
  tourTitle: t.string,
  tourDescription: t.string,
  tourItems: t.array,
  searchPreviewId: t.number
};
export {
  we as default
};
