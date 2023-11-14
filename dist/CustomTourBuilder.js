import e, { createContext as A, useState as f, useReducer as G, useRef as N, useMemo as x, useContext as b, useEffect as g, useCallback as K } from "react";
import r from "prop-types";
const W = (n, t) => {
  switch (t.type) {
    case "ADD_ITEM":
      return [...n, { ...t.payload, note: "" }];
    case "UPDATE_NOTE":
      return n.map((a) => a.id === t.payload.id ? { ...a, note: t.payload.note } : a);
    case "REMOVE_ITEM":
      return n.filter(({ id: a }) => a !== t.payload);
    default:
      return n;
  }
}, _ = A();
function D(n) {
  const {
    children: t,
    tourTitle: a,
    tourDescription: c,
    tourItems: l,
    navPages: s,
    apiSaveEndpoint: i
  } = n, [u, o] = f(a || ""), [h, p] = f(
    c || ""
  ), [v, d] = f(s || []), [m, y] = f(0), [E, S] = G(
    W,
    l || []
  ), w = N(null), [T, R] = f([]), L = "https://artic.edu/iiif/2", Y = i || "/api/v1/custom-tours", [Q, U] = f(!1), [H, z] = f(0), J = x(
    () => ({
      note: 255,
      title: 255,
      description: 255,
      items: {
        min: 1,
        max: 6
      }
    }),
    []
  );
  return /* @__PURE__ */ e.createElement(
    _.Provider,
    {
      value: {
        apiSaveEndpoint: Y,
        iiifBaseUrl: L,
        limits: J,
        tourTitle: u,
        setTourTitle: o,
        tourDescription: h,
        setTourDescription: p,
        tourItems: E,
        tourItemsDispatch: S,
        navPages: v,
        setNavPages: d,
        activeNavPage: m,
        setActiveNavPage: y,
        navSearchButtonRef: w,
        validityIssues: T,
        setValidityIssues: R,
        isSaving: Q,
        setIsSaving: U,
        scrollY: H,
        setScrollY: z
      }
    },
    t
  );
}
D.propTypes = {
  apiSaveEndpoint: r.string,
  children: r.node.isRequired,
  tourTitle: r.string,
  tourDescription: r.string,
  tourItems: r.instanceOf(Array),
  navPages: r.instanceOf(Array)
};
_.Provider.propTypes = {
  value: r.shape({
    apiSaveEndpoint: r.string,
    iiifBaseUrl: r.string,
    limits: r.shape({
      note: r.number,
      title: r.number,
      description: r.number,
      items: r.shape({
        min: r.number,
        max: r.number
      })
    }),
    tourItems: r.instanceOf(Array),
    tourItemsDispatch: r.func,
    tourTitle: r.string,
    setTourTitle: r.func,
    tourDescription: r.string,
    setTourDescription: r.func,
    navPages: r.instanceOf(Array),
    setNavPages: r.func,
    activeNavPage: r.number,
    setActiveNavPage: r.func,
    navSearchButtonRef: r.shape({
      current: r.instanceOf(Element)
    }),
    validityIssues: r.arrayOf(r.string),
    setValidityIssues: r.func,
    isSaving: r.bool,
    setIsSaving: r.func,
    scrollY: r.number,
    setScrollY: r.func
  })
};
function X() {
  const {
    navPages: n,
    activeNavPage: t,
    setActiveNavPage: a,
    navSearchButtonRef: c,
    isSaving: l
  } = b(_);
  return /* @__PURE__ */ e.createElement("nav", { id: "aic-ct-navigation", "aria-label": "Custom tour navigation" }, n.map((s, i) => /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: s.id === 0 ? c : null,
      key: s.id,
      id: `aic-ct-nav-button-${s.id}`,
      "aria-controls": `aic-ct-nav-page-${s.id}`,
      "aria-pressed": s.id === t,
      type: "button",
      onClick: () => a(i),
      disabled: l
    },
    s.title
  )));
}
function F({ children: n }) {
  const { setNavPages: t } = b(_);
  return g(() => {
    t(
      n ? n.map((a, c) => ({
        id: c,
        title: a.props.title
      })) : []
    );
  }, [n, t]), /* @__PURE__ */ e.createElement("div", { id: "aic-ct-nav-pages" }, n);
}
F.propTypes = {
  children: r.node.isRequired
};
function P(n) {
  const { id: t, children: a } = n, { activeNavPage: c } = b(_);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      tabIndex: "0",
      id: `aic-ct-nav-page-${t}`,
      "aria-labelledby": `aic-ct-nav-button-${t}`,
      "aria-hidden": c !== t,
      style: c !== t ? { display: "none" } : {}
    },
    a
  );
}
P.propTypes = {
  id: r.number.isRequired,
  title: r.string.isRequired,
  children: r.oneOfType([
    r.arrayOf(r.element),
    r.object
  ]).isRequired
};
const I = A();
function j(n) {
  const {
    children: t,
    searchResultItems: a,
    searchQuery: c,
    searchFetching: l,
    searchError: s,
    searchPreviewId: i
  } = n, [u, o] = f(
    a || null
  ), [h, p] = f(c || ""), [v, d] = f(
    l || !1
  ), [m, y] = f(s || !1), [E, S] = f(null), [w, T] = f(
    i || null
  ), R = N();
  return /* @__PURE__ */ e.createElement(
    I.Provider,
    {
      value: {
        searchResultItems: u,
        setSearchResultItems: o,
        searchQuery: h,
        setSearchQuery: p,
        searchFetching: v,
        setSearchFetching: d,
        searchError: m,
        setSearchError: y,
        activeTheme: E,
        setActiveTheme: S,
        searchPreviewId: w,
        setSearchPreviewId: T,
        searchPreviewRef: R
      }
    },
    t
  );
}
j.propTypes = {
  children: r.node.isRequired,
  searchResultItems: r.array,
  searchQuery: r.string,
  searchFetching: r.bool,
  searchError: r.oneOfType([r.string, r.bool]),
  searchPreviewId: r.number
};
I.Provider.propTypes = {
  value: r.shape({
    searchResultItems: r.array,
    setSearchResultItems: r.func,
    searchQuery: r.string,
    setSearchQuery: r.func,
    searchFetching: r.bool,
    setSearchFetching: r.func,
    searchError: r.oneOfType([r.string, r.bool]),
    setSearchError: r.func,
    activeTheme: r.string,
    setActiveTheme: r.func,
    searchPreviewId: r.number,
    setSearchPreviewId: r.func,
    searchPreviewRef: r.object
  }),
  children: r.node.isRequired
};
const O = (n) => {
  const [t, a] = f(null), [c, l] = f(!1), [s, i] = f(null), [u, o] = f(null), { dataSubSelector: h, dataSetter: p, fetchingSetter: v, errorSetter: d } = n || {}, m = () => {
    a(null), l(!1), i(null), o(null);
  }, y = async (E) => {
    l(!0);
    const S = new AbortController();
    o(S);
    try {
      const T = await (await fetch(E, { signal: S.signal })).json();
      a(h ? T[h] : T), i(null), l(!1);
    } catch (w) {
      if (w.name === "AbortError") {
        m();
        return;
      }
      i("Error fetching results"), l(!1);
    }
  };
  return g(() => {
    const E = u;
    return () => {
      E && E.abort();
    };
  }, [u]), g(() => {
    p && p(t);
  }, [t, p]), g(() => {
    d && d(s);
  }, [s, d]), g(() => {
    v && v(c);
  }, [c, v]), { data: t, fetching: c, error: s, fetchData: y, resetState: m };
};
function k(n, t, a = "", c = "", l = "full", s = !0) {
  return `${n}/${t}/${l}/${s && "!"}${a},${c}/0/default.jpg`;
}
function q(n) {
  const t = new URL("https://api.artic.edu/api/v1/artworks/search");
  return t.searchParams.set("query[bool][must][][term][is_on_view]", "true"), t.searchParams.set("query[bool][must][][exists][field]", "description"), t.searchParams.set("query[bool][should][][exists][field]", "description"), t.searchParams.set("query[bool][should][][exists][field]", "subject_id"), t.searchParams.set("query[bool][should][][exists][field]", "style_id"), t.searchParams.set("query[bool][should][][term][is_boosted]", "true"), t.searchParams.set("query[bool][minimum_should_match]", "1"), t.searchParams.set(
    "fields",
    "artist_title,description,id,image_id,thumbnail,title,date_display"
  ), t.searchParams.set("limit", "10"), n.keywords && t.searchParams.set("q", n.keywords), n.subjectIds && t.searchParams.set(
    "query[bool][must][][terms][subject_ids][]",
    n.subjectIds
  ), n.categoryIds && t.searchParams.set(
    "query[bool][must][][term][category_ids][value]",
    n.categoryIds
  ), t;
}
function Z() {
  const {
    searchQuery: n,
    setSearchQuery: t,
    setSearchResultItems: a,
    setSearchFetching: c,
    setSearchError: l,
    setActiveTheme: s
  } = b(I), { fetchData: i } = O({
    dataSubSelector: "data",
    dataSetter: a,
    fetchingSetter: c,
    errorSetter: l
  }), u = (o) => {
    i(q({ keywords: n })), s(null), o.preventDefault();
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
        onChange: (o) => {
          o.target.value && o.target.setCustomValidity(""), t(o.target.value);
        },
        onInvalid: (o) => {
          o.target.setCustomValidity("You must enter a search term");
        },
        required: !0
      }
    ),
    /* @__PURE__ */ e.createElement("button", { id: "aic-ct-search__button", type: "submit" }, "Search")
  );
}
function V(n) {
  const { id: t, label: a, subjectIds: c, categoryIds: l } = n, {
    setSearchResultItems: s,
    setSearchFetching: i,
    setSearchError: u,
    setSearchQuery: o,
    activeTheme: h,
    setActiveTheme: p
  } = b(I), { fetchData: v, resetState: d } = O({
    dataSubSelector: "data",
    dataSetter: s,
    fetchingSetter: i,
    errorSetter: u
  }), m = () => {
    h === a ? (p(null), d()) : (v(q({ subjectIds: c, categoryIds: l })), p(a), o(""));
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, (h === null || h === a) && /* @__PURE__ */ e.createElement(
    "button",
    {
      id: `aic-ct-theme-toggle-${t}`,
      onClick: m,
      "aria-pressed": h === a ? "true" : "false"
    },
    a
  ));
}
V.propTypes = {
  id: r.number.isRequired,
  label: r.string.isRequired,
  subjectIds: r.arrayOf(r.string),
  categoryIds: r.arrayOf(r.string),
  thumbnailId: r.string.isRequired
};
function ee() {
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
  return /* @__PURE__ */ e.createElement("div", { id: "aic-ct-themes" }, n.map((t, a) => /* @__PURE__ */ e.createElement(
    V,
    {
      key: t.label,
      id: a,
      label: t.label,
      subjectIds: t.subjectIds,
      categoryIds: t.categoryIds,
      thumbnailId: t.thumbnailId
    }
  )));
}
function M(n) {
  const { setSearchPreviewId: t, searchPreviewRef: a } = b(I), { iiifBaseUrl: c, setScrollY: l } = b(_), { itemData: s } = n, i = () => {
    const u = document.documentElement.scrollTop;
    t(s.id), l(u), a.current.showModal(), document.documentElement.classList.add("s-body-locked"), setTimeout(() => {
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
        src: k(c, s.image_id, "240", "240"),
        alt: s.thumbnail.alt_text
      }
    )
  ), s.title && /* @__PURE__ */ e.createElement("h2", null, s.title), s.artist_title && /* @__PURE__ */ e.createElement("p", null, s.artist_title));
}
M.propTypes = {
  itemData: r.shape({
    id: r.number.isRequired,
    title: r.string.isRequired,
    image_id: r.string,
    thumbnail: r.shape({
      alt_text: r.string
    }),
    artist_title: r.string,
    description: r.string
  })
};
function te(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var $ = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(n) {
  (function() {
    var t = {}.hasOwnProperty;
    function a() {
      for (var c = [], l = 0; l < arguments.length; l++) {
        var s = arguments[l];
        if (s) {
          var i = typeof s;
          if (i === "string" || i === "number")
            c.push(s);
          else if (Array.isArray(s)) {
            if (s.length) {
              var u = a.apply(null, s);
              u && c.push(u);
            }
          } else if (i === "object") {
            if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]")) {
              c.push(s.toString());
              continue;
            }
            for (var o in s)
              t.call(s, o) && s[o] && c.push(o);
          }
        }
      }
      return c.join(" ");
    }
    n.exports ? (a.default = a, n.exports = a) : window.classNames = a;
  })();
})($);
var re = $.exports;
const ae = /* @__PURE__ */ te(re);
function ne() {
  const { searchPreviewId: n, searchResultItems: t, searchPreviewRef: a } = b(I), { iiifBaseUrl: c, tourItems: l, tourItemsDispatch: s } = b(_), [i, u] = f(!1), [o, h] = f(null), p = ae({
    "aic-ct-preview__content": !0,
    "aic-ct-preview--loading": !o
  });
  g(() => {
    h(
      t.find((m) => m.id === n)
    );
  }, [n, t]);
  const v = () => {
    var m;
    s({
      type: i ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: i ? o.id : o
    }), (m = a == null ? void 0 : a.current) == null || m.close();
  }, d = () => {
    var m;
    (m = a == null ? void 0 : a.current) == null || m.close();
  };
  return g(() => {
    o && u(l.find((m) => m.id === o.id));
  }, [l, o]), /* @__PURE__ */ e.createElement("div", { className: p, id: "aic-ct-preview__content" }, o ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__header aic-ct-preview__padded" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-preview__close",
      className: "btn btn--icon btn--transparent aic-ct-preview__close",
      type: "button",
      "aria-label": "Close",
      onClick: d
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" }))
  ), /* @__PURE__ */ e.createElement("h2", { className: "f-module-title-2" }, "Artwork details")), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__image" }, /* @__PURE__ */ e.createElement(
    "img",
    {
      src: k(c, o.image_id, 680, 680),
      width: o.thumbnail.width,
      height: o.thumbnail.height,
      alt: o.thumbnail.alt_text || ""
    }
  )), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__padded" }, /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__details" }, /* @__PURE__ */ e.createElement("h3", { className: "aic-ct-preview__title f-headline-editorial" }, o.title, o.date_display && /* @__PURE__ */ e.createElement(e.Fragment, null, ",", " ", /* @__PURE__ */ e.createElement("span", { className: "aic-ct-preview__date f-list-4" }, o.date_display))), o.artist_title && /* @__PURE__ */ e.createElement("p", { className: "aic-ct-preview__artist f-subheading-1" }, o.artist_title)), /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__links" }, (l.length < 6 || i) && /* @__PURE__ */ e.createElement(
    "button",
    {
      id: `aic-ct-preview__action-button-${o.id}`,
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
      onClick: d
    },
    /* @__PURE__ */ e.createElement("svg", { className: "icon--close--24", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#icon--close--24" })),
    "Close and back to results"
  ))) : /* @__PURE__ */ e.createElement("div", { className: "aic-ct-preview__padded" }, "Loading... ", /* @__PURE__ */ e.createElement("span", { className: "loader" })));
}
function se() {
  const {
    searchError: n,
    searchFetching: t,
    searchResultItems: a,
    searchPreviewRef: c,
    setSearchPreviewId: l
  } = b(I), { scrollY: s } = b(_), i = K(() => {
    l(null), document.documentElement.scrollTop = s, document.documentElement.classList.remove("s-body-locked");
  }, [l, s]);
  return g(() => {
    const u = c.current;
    return u && u.addEventListener("close", i), () => {
      u && u.removeEventListener("close", i);
    };
  }, [c, i]), t ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__loading" }, "Loading...") : n ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__error" }, n) : (a == null ? void 0 : a.length) === 0 ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__no-results" }, "Sorry, we couldn’t find any results matching your criteria") : (a == null ? void 0 : a.length) > 0 ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-search__results" }, a.map((u) => /* @__PURE__ */ e.createElement(M, { key: u.id, itemData: u }))), /* @__PURE__ */ e.createElement(
    "dialog",
    {
      ref: c,
      id: "aic-ct-search-preview",
      onClose: i
    },
    /* @__PURE__ */ e.createElement(ne, null)
  )) : null;
}
function C(n, t) {
  const [a, c] = f(n || ""), l = N(null);
  return {
    value: a,
    onChange: (i) => {
      const { value: u } = i.target;
      l.current.ariaBusy = !0, c(u), l.current.ariaBusy = !1;
    },
    countRef: l,
    charsRemaining: t - a.length,
    maxLength: t
  };
}
function B(n) {
  var m;
  const { itemData: t, itemIndex: a, setShouldAssignFocus: c, setRemoveButtons: l } = n, { iiifBaseUrl: s, tourItems: i, tourItemsDispatch: u, limits: o } = b(_), h = N(null), p = C((m = i[a]) == null ? void 0 : m.note, o.note), v = x(
    () => ({
      id: t.id,
      note: p.value
    }),
    [t.id, p.value]
  ), d = () => {
    u({
      type: "REMOVE_ITEM",
      payload: t.id
    });
  };
  return g(() => {
    u({
      type: "UPDATE_NOTE",
      payload: v
    });
  }, [v, u]), g(() => {
    const y = h.current;
    return () => {
      document.activeElement === y && (i.length > 1 ? i.find((E, S) => {
        E.id === t.id && c({
          flag: !0,
          id: i[S !== i.length - 1 ? S + 1 : S - 1].id
        });
      }) : c({
        flag: !0,
        id: null
      }));
    };
  }, [i, t.id, c]), g(() => (l((y) => [...y, { id: t.id, ref: h }]), () => {
    l(
      (y) => y.filter((E) => E.id !== t.id)
    );
  }), [l, i, t.id]), /* @__PURE__ */ e.createElement("li", { id: `aic-ct-tour__item-${t.id}` }, t.title && /* @__PURE__ */ e.createElement("h2", null, t.title), t.image_id && /* @__PURE__ */ e.createElement(
    "img",
    {
      src: k(s, t.image_id, "240", "240"),
      alt: t.thumbnail.alt_text
    }
  ), t.artist_title && /* @__PURE__ */ e.createElement("p", null, t.artist_title), t.description && /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: t.description } }), /* @__PURE__ */ e.createElement("label", { htmlFor: `aic-ct-note-${t.id}` }, "Personal note", " ", /* @__PURE__ */ e.createElement("span", { ref: p.countRef, "aria-live": "polite" }, "(", p.charsRemaining, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "textarea",
    {
      id: `aic-ct-note-${t.id}`,
      onChange: p.onChange,
      rows: "5",
      value: p.value,
      maxLength: p.maxLength
    }
  ), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: h,
      type: "button",
      onClick: () => {
        d(t.id);
      }
    },
    "Remove from tour"
  ));
}
B.propTypes = {
  itemData: r.shape({
    id: r.number.isRequired,
    title: r.string.isRequired,
    image_id: r.string,
    thumbnail: r.shape({
      alt_text: r.string
    }),
    artist_title: r.string,
    description: r.string
  }),
  itemIndex: r.number.isRequired,
  setRemoveButtons: r.func,
  setShouldAssignFocus: r.func
};
function ie() {
  const { tourItems: n, navSearchButtonRef: t } = b(_), [a, c] = f({
    flag: !1,
    id: null
  }), [l, s] = f([]);
  return g(() => {
    a.flag && (!n.length && (t != null && t.current) ? t.current.focus() : l.find((i) => i.id === a.id).ref.current.focus(), c(!1));
  }, [n, a, l, t]), /* @__PURE__ */ e.createElement(e.Fragment, null, n.length > 0 ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("h2", { id: "aic-ct-tour__heading" }, "Your tour"), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-tour__results" }, n.map((i, u) => /* @__PURE__ */ e.createElement(
    B,
    {
      key: i.id,
      setRemoveButtons: s,
      itemData: i,
      itemIndex: u,
      shouldAssignFocus: a,
      setShouldAssignFocus: c
    }
  )))) : /* @__PURE__ */ e.createElement("div", { id: "aic-ct-tour__no-items" }, "You haven’t added any artworks to your tour yet"));
}
function ce() {
  const {
    tourTitle: n,
    setTourTitle: t,
    tourDescription: a,
    setTourDescription: c,
    limits: l
  } = b(_), s = C(n, l.title), i = C(a, l.description);
  return g(() => {
    t(s.value);
  }, [s, t]), g(() => {
    c(i.value);
  }, [i, c]), /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__title" }, "Tour Title", " ", /* @__PURE__ */ e.createElement("span", { ref: s.countRef, "aria-live": "polite" }, "(", s.charsRemaining, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      onChange: s.onChange,
      value: s.value,
      id: "aic-ct-metadata__title",
      maxLength: s.maxLength,
      required: !0
    }
  )), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__description" }, "Tour Description", " ", /* @__PURE__ */ e.createElement("span", { ref: i.countRef, "aria-live": "polite" }, "(", i.charsRemaining, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "textarea",
    {
      id: "aic-ct-metadata__description",
      onChange: i.onChange,
      rows: "5",
      value: i.value,
      maxLength: i.maxLength
    }
  )));
}
function le() {
  const {
    apiSaveEndpoint: n,
    tourTitle: t,
    tourItems: a,
    tourDescription: c,
    validityIssues: l,
    setValidityIssues: s,
    limits: i,
    isSaving: u,
    setIsSaving: o
  } = b(_), [h, p] = f(null), v = async () => {
    o(!0);
    try {
      const d = await fetch(`${n}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: t,
          description: c,
          // Pass in note as objectNote and destructure the rest as rest
          artworks: a.map(({ note: y, ...E }) => ({
            objectNote: y,
            ...E
          }))
        })
      });
      if (!d.ok)
        throw new Error(
          "There was a problem saving your tour, please try again. If the problem persists, please contact us and let us know."
        );
      const { message: m } = await d.json();
      p({
        type: "success",
        message: m
      });
    } catch (d) {
      p({
        type: "error",
        message: d.message
      });
    }
    o(!1);
  };
  return g(() => {
    const d = [];
    t.length || d.push("A title is required"), t.length > i.title && d.push("Tour title must not exceed the character limit"), c.length > i.description && d.push(
      "Tour description must not exceed the character limit"
    ), a.length < i.items.min && d.push("At least one item is required"), a.length > i.items.max && d.push("Tours must not contain more than 6 artworks"), a.some((m) => m.note.length > i.note ? (d.push("Notes must not exceed the character limit"), !0) : !1), s(d);
  }, [t, c, a, s, i]), /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("h2", null, "Submit your tour"), l.length ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", null, "Fix these issue before submitting your tour:"), l.length && /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-validation-errors" }, l.map((d, m) => /* @__PURE__ */ e.createElement("li", { key: m }, d)))) : /* @__PURE__ */ e.createElement("div", { id: "aic-ct-validation-success" }, /* @__PURE__ */ e.createElement("div", { tabIndex: "-1", "aria-live": "polite" }, u && /* @__PURE__ */ e.createElement("p", null, "Saving..."), !u && !h && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", null, "Are you sure you want to submit your tour? You won't be able to make any more changes after this stage"), /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-save-button",
      type: "button",
      onClick: v,
      disabled: u
    },
    "Save my tour"
  )), h && (h.type === "success" && /* @__PURE__ */ e.createElement("div", { id: "aic-ct-save-success" }, /* @__PURE__ */ e.createElement("p", null, h.message)) || h.type === "error" && /* @__PURE__ */ e.createElement("div", { id: "aic-ct-save-error" }, /* @__PURE__ */ e.createElement("p", null, h.message), /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-save-button",
      type: "button",
      onClick: v,
      disabled: u
    },
    "Save my tour"
  ))))));
}
const oe = (n) => {
  const { apiSaveEndpoint: t, tourTitle: a, tourDescription: c, tourItems: l } = n, s = {
    apiSaveEndpoint: t,
    tourTitle: a,
    tourDescription: c,
    tourItems: l
  };
  return /* @__PURE__ */ e.createElement("div", { className: "custom-tours" }, /* @__PURE__ */ e.createElement(D, { ...s }, /* @__PURE__ */ e.createElement(X, null), /* @__PURE__ */ e.createElement(F, null, /* @__PURE__ */ e.createElement(P, { id: 0, title: "Search" }, /* @__PURE__ */ e.createElement(j, null, /* @__PURE__ */ e.createElement(Z, null), /* @__PURE__ */ e.createElement(ee, null), /* @__PURE__ */ e.createElement(se, null))), /* @__PURE__ */ e.createElement(P, { id: 1, title: "Your tour" }, /* @__PURE__ */ e.createElement(ce, null), /* @__PURE__ */ e.createElement(ie, null)), /* @__PURE__ */ e.createElement(P, { id: 2, title: "Save your tour" }, /* @__PURE__ */ e.createElement(le, null)))));
};
oe.propTypes = {
  apiSaveEndpoint: r.string,
  tourTitle: r.string,
  tourDescription: r.string,
  tourItems: r.array,
  searchPreviewId: r.number
};
export {
  oe as default
};
