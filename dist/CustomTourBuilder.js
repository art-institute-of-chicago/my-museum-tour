import e, { createContext as x, useState as h, useReducer as oe, useRef as k, useMemo as A, useContext as I, useEffect as S, useCallback as ue } from "react";
import t from "prop-types";
const me = (n, a) => {
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
}, N = x();
function F(n) {
  const {
    children: a,
    tourTitle: r,
    creatorEmail: c,
    creatorName: o,
    recipientName: i,
    tourDescription: s,
    marketingOptIn: u,
    tourItems: l,
    navPages: g,
    apiSaveEndpoint: d
  } = n, [v, E] = h(r || ""), [m, f] = h(c || ""), [b, y] = h(!1), [p, _] = h(o || ""), [T, B] = h(i || ""), [Y, Q] = h(
    u || !1
  ), [U, H] = h(
    s || ""
  ), [J, z] = h(g || []), [W, G] = h(0), [K, X] = oe(
    me,
    l || []
  ), Z = k(null), [ee, te] = h([]), ae = "https://artic.edu/iiif/2", re = d || "/api/v1/custom-tours", [ne, ie] = h(!1), [se, ce] = h(0), le = A(
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
    N.Provider,
    {
      value: {
        apiSaveEndpoint: re,
        iiifBaseUrl: ae,
        limits: le,
        tourTitle: v,
        setTourTitle: E,
        creatorEmail: m,
        setCreatorEmail: f,
        validCreatorEmail: b,
        setValidCreatorEmail: y,
        creatorName: p,
        setCreatorName: _,
        recipientName: T,
        setRecipientName: B,
        tourDescription: U,
        setTourDescription: H,
        marketingOptIn: Y,
        setMarketingOptIn: Q,
        tourItems: K,
        tourItemsDispatch: X,
        navPages: J,
        setNavPages: z,
        activeNavPage: W,
        setActiveNavPage: G,
        navSearchButtonRef: Z,
        validityIssues: ee,
        setValidityIssues: te,
        isSaving: ne,
        setIsSaving: ie,
        scrollY: se,
        setScrollY: ce
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
N.Provider.propTypes = {
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
function de() {
  const {
    navPages: n,
    activeNavPage: a,
    setActiveNavPage: r,
    navSearchButtonRef: c,
    isSaving: o
  } = I(N);
  return /* @__PURE__ */ e.createElement("nav", { id: "aic-ct-navigation", "aria-label": "Custom tour navigation" }, n.map((i, s) => /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: i.id === 0 ? c : null,
      key: i.id,
      id: `aic-ct-nav-button-${i.id}`,
      "aria-controls": `aic-ct-nav-page-${i.id}`,
      "aria-pressed": i.id === a,
      type: "button",
      onClick: () => r(s),
      disabled: o
    },
    i.title
  )));
}
function O({ children: n }) {
  const { setNavPages: a } = I(N);
  return S(() => {
    a(
      n ? n.map((r, c) => ({
        id: c,
        title: r.props.title
      })) : []
    );
  }, [n, a]), /* @__PURE__ */ e.createElement("div", { id: "aic-ct-nav-pages" }, n);
}
O.propTypes = {
  children: t.node.isRequired
};
function P(n) {
  const { id: a, children: r } = n, { activeNavPage: c } = I(N);
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
P.propTypes = {
  id: t.number.isRequired,
  title: t.string.isRequired,
  children: t.oneOfType([
    t.arrayOf(t.element),
    t.object
  ]).isRequired
};
const w = x();
function V(n) {
  const {
    children: a,
    searchResultItems: r,
    searchQuery: c,
    searchFetching: o,
    searchError: i,
    searchPreviewId: s
  } = n, [u, l] = h(
    r || null
  ), [g, d] = h(c || ""), [v, E] = h(
    o || !1
  ), [m, f] = h(i || !1), [b, y] = h(null), [p, _] = h(
    s || null
  ), T = k();
  return /* @__PURE__ */ e.createElement(
    w.Provider,
    {
      value: {
        searchResultItems: u,
        setSearchResultItems: l,
        searchQuery: g,
        setSearchQuery: d,
        searchFetching: v,
        setSearchFetching: E,
        searchError: m,
        setSearchError: f,
        activeTheme: b,
        setActiveTheme: y,
        searchPreviewId: p,
        setSearchPreviewId: _,
        searchPreviewRef: T
      }
    },
    a
  );
}
V.propTypes = {
  children: t.node.isRequired,
  searchResultItems: t.array,
  searchQuery: t.string,
  searchFetching: t.bool,
  searchError: t.oneOfType([t.string, t.bool]),
  searchPreviewId: t.number
};
w.Provider.propTypes = {
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
const j = (n) => {
  const [a, r] = h(null), [c, o] = h(!1), [i, s] = h(null), [u, l] = h(null), { dataSubSelector: g, dataSetter: d, fetchingSetter: v, errorSetter: E } = n || {}, m = () => {
    r(null), o(!1), s(null), l(null);
  }, f = async (b) => {
    o(!0);
    const y = new AbortController();
    l(y);
    try {
      const _ = await (await fetch(b, { signal: y.signal })).json();
      r(g ? _[g] : _), s(null), o(!1);
    } catch (p) {
      if (p.name === "AbortError") {
        m();
        return;
      }
      s("Error fetching results"), o(!1);
    }
  };
  return S(() => {
    const b = u;
    return () => {
      b && b.abort();
    };
  }, [u]), S(() => {
    d && d(a);
  }, [a, d]), S(() => {
    E && E(i);
  }, [i, E]), S(() => {
    v && v(c);
  }, [c, v]), { data: a, fetching: c, error: i, fetchData: f, resetState: m };
};
function R(n, a, r = "", c = "", o = "full", i = !0) {
  return `${n}/${a}/${o}/${i && "!"}${r},${c}/0/default.jpg`;
}
function D(n) {
  const a = new URL("https://api.artic.edu/api/v1/artworks/search");
  return a.searchParams.set("query[bool][must][][term][is_on_view]", "true"), a.searchParams.set("query[bool][must][][exists][field]", "description"), a.searchParams.set("query[bool][should][][exists][field]", "description"), a.searchParams.set("query[bool][should][][exists][field]", "subject_id"), a.searchParams.set("query[bool][should][][exists][field]", "style_id"), a.searchParams.set("query[bool][should][][term][is_boosted]", "true"), a.searchParams.set("query[bool][minimum_should_match]", "1"), a.searchParams.set(
    "fields",
    "artist_title,description,id,image_id,thumbnail,title,date_display,gallery_title"
  ), a.searchParams.set("limit", "10"), n.keywords && a.searchParams.set("q", n.keywords), n.subjectIds && a.searchParams.set(
    "query[bool][must][][terms][subject_ids][]",
    n.subjectIds
  ), n.categoryIds && a.searchParams.set(
    "query[bool][must][][term][category_ids][value]",
    n.categoryIds
  ), a;
}
function he() {
  const {
    searchQuery: n,
    setSearchQuery: a,
    setSearchResultItems: r,
    setSearchFetching: c,
    setSearchError: o,
    setActiveTheme: i
  } = I(w), { fetchData: s } = j({
    dataSubSelector: "data",
    dataSetter: r,
    fetchingSetter: c,
    errorSetter: o
  }), u = (l) => {
    s(D({ keywords: n })), i(null), l.preventDefault();
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
function q(n) {
  const { id: a, label: r, subjectIds: c, categoryIds: o } = n, {
    setSearchResultItems: i,
    setSearchFetching: s,
    setSearchError: u,
    setSearchQuery: l,
    activeTheme: g,
    setActiveTheme: d
  } = I(w), { fetchData: v, resetState: E } = j({
    dataSubSelector: "data",
    dataSetter: i,
    fetchingSetter: s,
    errorSetter: u
  }), m = () => {
    g === r ? (d(null), E()) : (v(D({ subjectIds: c, categoryIds: o })), d(r), l(""));
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
q.propTypes = {
  id: t.number.isRequired,
  label: t.string.isRequired,
  subjectIds: t.arrayOf(t.string),
  categoryIds: t.arrayOf(t.string),
  thumbnailId: t.string.isRequired
};
function pe() {
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
    q,
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
function L(n) {
  const { setSearchPreviewId: a, searchPreviewRef: r } = I(w), { iiifBaseUrl: c, setScrollY: o } = I(N), { itemData: i } = n, s = () => {
    const u = document.documentElement.scrollTop;
    a(i.id), o(u), r.current.showModal(), document.documentElement.classList.add("s-body-locked"), setTimeout(() => {
      document.body.scrollTop = u;
    }, 0);
  };
  return /* @__PURE__ */ e.createElement("li", { id: `aic-ct-search__item-${i.id}`, className: "aic-ct-result" }, i.image_id && /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "btn btn--transparent f-buttons btn--ct-search__image aic-ct-result__button",
      type: "button",
      onClick: s
    },
    /* @__PURE__ */ e.createElement(
      "img",
      {
        src: R(c, i.image_id, "240", "240"),
        alt: i.thumbnail.alt_text
      }
    )
  ), i.title && /* @__PURE__ */ e.createElement("h2", null, i.title), i.artist_title && /* @__PURE__ */ e.createElement("p", null, i.artist_title));
}
L.propTypes = {
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
function ge(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var M = { exports: {} };
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
        var i = arguments[o];
        if (i) {
          var s = typeof i;
          if (s === "string" || s === "number")
            c.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var u = r.apply(null, i);
              u && c.push(u);
            }
          } else if (s === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              c.push(i.toString());
              continue;
            }
            for (var l in i)
              a.call(i, l) && i[l] && c.push(l);
          }
        }
      }
      return c.join(" ");
    }
    n.exports ? (r.default = r, n.exports = r) : window.classNames = r;
  })();
})(M);
var ve = M.exports;
const fe = /* @__PURE__ */ ge(ve);
function Ee() {
  const { searchPreviewId: n, searchResultItems: a, searchPreviewRef: r } = I(w), { iiifBaseUrl: c, tourItems: o, tourItemsDispatch: i } = I(N), [s, u] = h(!1), [l, g] = h(null), d = fe({
    "aic-ct-preview__content": !0,
    "aic-ct-preview--loading": !l
  });
  S(() => {
    g(
      a.find((m) => m.id === n)
    );
  }, [n, a]);
  const v = () => {
    var m;
    i({
      type: s ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: s ? l.id : l
    }), (m = r == null ? void 0 : r.current) == null || m.close();
  }, E = () => {
    var m;
    (m = r == null ? void 0 : r.current) == null || m.close();
  };
  return S(() => {
    l && u(o.find((m) => m.id === l.id));
  }, [o, l]), /* @__PURE__ */ e.createElement("div", { className: d, id: "aic-ct-preview__content" }, l ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__header aic-ct-preview__padded" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-preview__close",
      className: "btn btn--icon btn--transparent aic-ct-preview__close",
      type: "button",
      "aria-label": "Close",
      onClick: E
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" }))
  ), /* @__PURE__ */ e.createElement("h2", { className: "f-module-title-2" }, "Artwork details")), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__image" }, /* @__PURE__ */ e.createElement(
    "img",
    {
      src: R(c, l.image_id, 680, 680),
      width: l.thumbnail.width,
      height: l.thumbnail.height,
      alt: l.thumbnail.alt_text || ""
    }
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__padded" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__details" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__title f-headline-editorial" }, l.title, l.date_display && /* @__PURE__ */ e.createElement(e.Fragment, null, ",", " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-preview__date f-list-4" }, l.date_display))), l.artist_title && /* @__PURE__ */ e.createElement("p", { className: "aic-ct-preview__artist f-subheading-1" }, l.artist_title)), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__links" }, (o.length < 6 || s) && /* @__PURE__ */ e.createElement(
    "button",
    {
      id: `aic-ct-preview__action-button-${l.id}`,
      className: "btn f-buttons aic-ct-preview__action-button",
      type: "button",
      onClick: v,
      "aria-pressed": s ? "true" : "false",
      "aria-label": "Toggle from your tour"
    },
    s ? "Remove from your tour" : "Add to your tour"
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
      onClick: E
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" })),
    "Close and back to results"
  ))) : /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__padded" }, "Loading... ", /* @__PURE__ */ e.createElement("span", { className: "loader" })));
}
function be() {
  const {
    searchError: n,
    searchFetching: a,
    searchResultItems: r,
    searchPreviewRef: c,
    setSearchPreviewId: o
  } = I(w), { scrollY: i } = I(N), s = ue(() => {
    o(null), document.documentElement.scrollTop = i, document.documentElement.classList.remove("s-body-locked");
  }, [o, i]);
  return S(() => {
    const u = c.current;
    return u && u.addEventListener("close", s), () => {
      u && u.removeEventListener("close", s);
    };
  }, [c, s]), a ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__loading" }, "Loading...") : n ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__error" }, n) : (r == null ? void 0 : r.length) === 0 ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__no-results" }, "Sorry, we couldn’t find any results matching your criteria") : (r == null ? void 0 : r.length) > 0 ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-search__results" }, r.map((u) => /* @__PURE__ */ e.createElement(L, { key: u.id, itemData: u }))), /* @__PURE__ */ e.createElement(
    "dialog",
    {
      ref: c,
      id: "aic-ct-search-preview",
      onClose: s
    },
    /* @__PURE__ */ e.createElement(Ee, null)
  )) : null;
}
function C(n = {}) {
  const { initialValue: a, maxLength: r, valueSetter: c } = n, [o, i] = h(a || ""), s = k(null), u = r - o.length;
  return {
    value: o,
    onChange: (g) => {
      const { value: d } = g.target;
      s.current.ariaBusy = !0, i(d), c && c(d), s.current.ariaBusy = !1;
    },
    countRef: s,
    charsRemaining: u,
    maxLength: r,
    counterEl: /* @__PURE__ */ e.createElement("span", { ref: s, "aria-live": "polite" }, "(", u, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")
  };
}
function $(n) {
  var m;
  const { itemData: a, itemIndex: r, setShouldAssignFocus: c, setRemoveButtons: o } = n, { iiifBaseUrl: i, tourItems: s, tourItemsDispatch: u, limits: l } = I(N), g = k(null), d = C({
    initialValue: (m = s[r]) == null ? void 0 : m.objectNote,
    maxLength: l.objectNote
  }), v = A(
    () => ({
      id: a.id,
      objectNote: d.value
    }),
    [a.id, d.value]
  ), E = () => {
    u({
      type: "REMOVE_ITEM",
      payload: a.id
    });
  };
  return S(() => {
    u({
      type: "UPDATE_NOTE",
      payload: v
    });
  }, [v, u]), S(() => {
    const f = g.current;
    return () => {
      document.activeElement === f && (s.length > 1 ? s.find((b, y) => {
        b.id === a.id && c({
          flag: !0,
          id: s[y !== s.length - 1 ? y + 1 : y - 1].id
        });
      }) : c({
        flag: !0,
        id: null
      }));
    };
  }, [s, a.id, c]), S(() => (o((f) => [...f, { id: a.id, ref: g }]), () => {
    o(
      (f) => f.filter((b) => b.id !== a.id)
    );
  }), [o, s, a.id]), /* @__PURE__ */ e.createElement("li", { id: `aic-ct-tour__item-${a.id}` }, a.title && /* @__PURE__ */ e.createElement("h2", null, a.title), a.image_id && /* @__PURE__ */ e.createElement(
    "img",
    {
      src: R(i, a.image_id, "240", "240"),
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
        E(a.id);
      }
    },
    "Remove from tour"
  ));
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
  }),
  itemIndex: t.number.isRequired,
  setRemoveButtons: t.func,
  setShouldAssignFocus: t.func
};
function ye() {
  const { tourItems: n, navSearchButtonRef: a } = I(N), [r, c] = h({
    flag: !1,
    id: null
  }), [o, i] = h([]);
  return S(() => {
    r.flag && (!n.length && (a != null && a.current) ? a.current.focus() : o.find((s) => s.id === r.id).ref.current.focus(), c(!1));
  }, [n, r, o, a]), /* @__PURE__ */ e.createElement(e.Fragment, null, n.length > 0 ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("h2", { id: "aic-ct-tour__heading" }, "Your tour"), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-tour__results" }, n.map((s, u) => /* @__PURE__ */ e.createElement(
    $,
    {
      key: s.id,
      setRemoveButtons: i,
      itemData: s,
      itemIndex: u,
      shouldAssignFocus: r,
      setShouldAssignFocus: c
    }
  )))) : /* @__PURE__ */ e.createElement("div", { id: "aic-ct-tour__no-items" }, "You haven’t added any artworks to your tour yet"));
}
function _e() {
  const {
    tourTitle: n,
    setTourTitle: a,
    creatorEmail: r,
    setCreatorEmail: c,
    setValidCreatorEmail: o,
    creatorName: i,
    setCreatorName: s,
    recipientName: u,
    setRecipientName: l,
    marketingOptIn: g,
    setMarketingOptIn: d,
    tourDescription: v,
    setTourDescription: E,
    limits: m
  } = I(N), f = C({
    initialValue: n,
    maxLength: m.title,
    valueSetter: a
  }), b = C({
    initialValue: i,
    maxLength: m.creatorName,
    valueSetter: s
  }), y = C({
    initialValue: u,
    maxLength: m.recipientName,
    valueSetter: l
  }), p = C({
    initialValue: v,
    maxLength: m.description,
    valueSetter: E
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
  )), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__creator-name" }, "Your name ", /* @__PURE__ */ e.createElement("em", null, "(optional)"), " ", b.counterEl), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: b.value,
      onChange: b.onChange,
      id: "aic-ct-metadata__creator-name",
      maxLength: b.maxLength
    }
  )), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__creator-email" }, "Your email"), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "email",
      value: r.value,
      onChange: (_) => {
        c(_.target.value), o(_.target.validity.valid);
      },
      id: "aic-ct-metadata__creator-email",
      "aria-required": "true",
      required: !0
    }
  )), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__recipient-name" }, "Who is this tour for? ", /* @__PURE__ */ e.createElement("em", null, "(optional)"), " ", y.counterEl), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      value: y.value,
      onChange: y.onChange,
      id: "aic-ct-metadata__recipient-name",
      maxLength: y.maxLength
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
      onChange: (_) => {
        d(_.target.checked);
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
    marketingOptIn: i,
    validCreatorEmail: s,
    tourItems: u,
    tourDescription: l,
    validityIssues: g,
    setValidityIssues: d,
    limits: v,
    isSaving: E,
    setIsSaving: m
  } = I(N), [f, b] = h(null), y = async () => {
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
          marketingOptIn: i,
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
      const { message: _ } = await p.json();
      b({
        type: "success",
        message: _
      });
    } catch (p) {
      b({
        type: "error",
        message: p.message
      });
    }
    m(!1);
  };
  return S(() => {
    const p = [];
    a.length || p.push("A title is required"), a.length > v.title && p.push("Tour title must not exceed the character limit"), s || p.push("A valid email address is required"), l.length > v.description && p.push(
      "Tour description must not exceed the character limit"
    ), u.length < v.items.min && p.push("At least one item is required"), u.length > v.items.max && p.push("Tours must not contain more than 6 artworks"), u.some((_) => {
      var T;
      return ((T = _.objectNote) == null ? void 0 : T.length) > v.objectNote ? (p.push("Notes must not exceed the character limit"), !0) : !1;
    }), d(p);
  }, [
    a,
    l,
    u,
    d,
    v,
    s
  ]), /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("h2", null, "Submit your tour"), g.length ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", null, "Fix these issue before submitting your tour:"), g.length && /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-validation-errors" }, g.map((p, _) => /* @__PURE__ */ e.createElement("li", { key: _ }, p)))) : /* @__PURE__ */ e.createElement("div", { id: "aic-ct-validation-success" }, /* @__PURE__ */ e.createElement("div", { tabIndex: "-1", "aria-live": "polite" }, E && /* @__PURE__ */ e.createElement("p", null, "Saving..."), !E && !f && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", null, "Are you sure you want to submit your tour? You won't be able to make any more changes after this stage"), /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-save-button",
      type: "button",
      onClick: y,
      disabled: E
    },
    "Save my tour"
  )), f && (f.type === "success" && /* @__PURE__ */ e.createElement("div", { id: "aic-ct-save-success" }, /* @__PURE__ */ e.createElement("p", null, f.message)) || f.type === "error" && /* @__PURE__ */ e.createElement("div", { id: "aic-ct-save-error" }, /* @__PURE__ */ e.createElement("p", null, f.message), /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-save-button",
      type: "button",
      onClick: y,
      disabled: E
    },
    "Save my tour"
  ))))));
}
const Se = (n) => {
  const { apiSaveEndpoint: a, tourTitle: r, tourDescription: c, tourItems: o } = n, i = {
    apiSaveEndpoint: a,
    tourTitle: r,
    tourDescription: c,
    tourItems: o
  };
  return /* @__PURE__ */ e.createElement("div", { className: "custom-tours" }, /* @__PURE__ */ e.createElement(F, { ...i }, /* @__PURE__ */ e.createElement(de, null), /* @__PURE__ */ e.createElement(O, null, /* @__PURE__ */ e.createElement(P, { id: 0, title: "Search" }, /* @__PURE__ */ e.createElement(V, null, /* @__PURE__ */ e.createElement(he, null), /* @__PURE__ */ e.createElement(pe, null), /* @__PURE__ */ e.createElement(be, null))), /* @__PURE__ */ e.createElement(P, { id: 1, title: "Your tour" }, /* @__PURE__ */ e.createElement(_e, null), /* @__PURE__ */ e.createElement(ye, null)), /* @__PURE__ */ e.createElement(P, { id: 2, title: "Save your tour" }, /* @__PURE__ */ e.createElement(Ie, null)))));
};
Se.propTypes = {
  apiSaveEndpoint: t.string,
  tourTitle: t.string,
  tourDescription: t.string,
  tourItems: t.array,
  searchPreviewId: t.number
};
export {
  Se as default
};
