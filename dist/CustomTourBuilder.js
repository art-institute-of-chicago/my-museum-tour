import t, { createContext as x, useState as h, useReducer as H, useRef as A, useMemo as D, useContext as E, useEffect as y } from "react";
import r from "prop-types";
const z = (n, e) => {
  switch (e.type) {
    case "ADD_ITEM":
      return [...n, { ...e.payload, note: "" }];
    case "UPDATE_NOTE":
      return n.map((a) => a.id === e.payload.id ? { ...a, note: e.payload.note } : a);
    case "REMOVE_ITEM":
      return n.filter(({ id: a }) => a !== e.payload);
    default:
      return n;
  }
}, I = x();
function F(n) {
  const {
    children: e,
    tourTitle: a,
    tourDescription: l,
    tourItems: i,
    navPages: s,
    apiSaveEndpoint: c
  } = n, [u, d] = h(a || ""), [p, m] = h(
    l || ""
  ), [f, o] = h(s || []), [g, v] = h(0), [b, S] = H(
    z,
    i || []
  ), _ = A(null), [R, $] = h([]), B = "https://artic.edu/iiif/2", L = c || "/api/v1/custom-tours", [Q, U] = h(!1), Y = D(
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
  return /* @__PURE__ */ t.createElement(
    I.Provider,
    {
      value: {
        apiSaveEndpoint: L,
        iiifBaseUrl: B,
        limits: Y,
        tourTitle: u,
        setTourTitle: d,
        tourDescription: p,
        setTourDescription: m,
        tourItems: b,
        tourItemsDispatch: S,
        navPages: f,
        setNavPages: o,
        activeNavPage: g,
        setActiveNavPage: v,
        navSearchButtonRef: _,
        validityIssues: R,
        setValidityIssues: $,
        isSaving: Q,
        setIsSaving: U
      }
    },
    e
  );
}
F.propTypes = {
  apiSaveEndpoint: r.string,
  children: r.node.isRequired,
  tourTitle: r.string,
  tourDescription: r.string,
  tourItems: r.instanceOf(Array),
  navPages: r.instanceOf(Array)
};
I.Provider.propTypes = {
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
    setIsSaving: r.func
  })
};
function J() {
  const {
    navPages: n,
    activeNavPage: e,
    setActiveNavPage: a,
    navSearchButtonRef: l,
    isSaving: i
  } = E(I);
  return /* @__PURE__ */ t.createElement("nav", { id: "aic-ct-navigation", "aria-label": "Custom tour navigation" }, n.map((s, c) => /* @__PURE__ */ t.createElement(
    "button",
    {
      ref: s.id === 0 ? l : null,
      key: s.id,
      id: `aic-ct-nav-button-${s.id}`,
      "aria-controls": `aic-ct-nav-page-${s.id}`,
      "aria-pressed": s.id === e,
      type: "button",
      onClick: () => a(c),
      disabled: i
    },
    s.title
  )));
}
function w({ children: n }) {
  const { setNavPages: e } = E(I);
  return y(() => {
    e(
      n ? n.map((a, l) => ({
        id: l,
        title: a.props.title
      })) : []
    );
  }, [n, e]), /* @__PURE__ */ t.createElement("div", { id: "aic-ct-nav-pages" }, n);
}
w.propTypes = {
  children: r.node.isRequired
};
function P(n) {
  const { id: e, children: a } = n, { activeNavPage: l } = E(I);
  return /* @__PURE__ */ t.createElement(
    "div",
    {
      tabIndex: "0",
      id: `aic-ct-nav-page-${e}`,
      "aria-labelledby": `aic-ct-nav-button-${e}`,
      "aria-hidden": l !== e,
      style: l !== e ? { display: "none" } : {}
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
const T = x();
function k(n) {
  const {
    children: e,
    searchResultItems: a,
    searchQuery: l,
    searchFetching: i,
    searchError: s
  } = n, [c, u] = h(
    a || null
  ), [d, p] = h(l || ""), [m, f] = h(
    i || !1
  ), [o, g] = h(s || !1), [v, b] = h(null);
  return /* @__PURE__ */ t.createElement(
    T.Provider,
    {
      value: {
        searchResultItems: c,
        setSearchResultItems: u,
        searchQuery: d,
        setSearchQuery: p,
        searchFetching: m,
        setSearchFetching: f,
        searchError: o,
        setSearchError: g,
        activeTheme: v,
        setActiveTheme: b
      }
    },
    e
  );
}
k.propTypes = {
  children: r.node.isRequired,
  searchResultItems: r.array,
  searchQuery: r.string,
  searchFetching: r.bool,
  searchError: r.oneOfType([r.string, r.bool])
};
T.Provider.propTypes = {
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
    setActiveTheme: r.func
  }),
  children: r.node.isRequired
};
const q = (n) => {
  const [e, a] = h(null), [l, i] = h(!1), [s, c] = h(null), [u, d] = h(null), { dataSubSelector: p, dataSetter: m, fetchingSetter: f, errorSetter: o } = n || {}, g = () => {
    a(null), i(!1), c(null), d(null);
  }, v = async (b) => {
    i(!0);
    const S = new AbortController();
    d(S);
    try {
      const R = await (await fetch(b, { signal: S.signal })).json();
      a(p ? R[p] : R), c(null), i(!1);
    } catch (_) {
      if (_.name === "AbortError") {
        g();
        return;
      }
      c("Error fetching results"), i(!1);
    }
  };
  return y(() => {
    const b = u;
    return () => {
      b && b.abort();
    };
  }, [u]), y(() => {
    m && m(e);
  }, [e, m]), y(() => {
    o && o(s);
  }, [s, o]), y(() => {
    f && f(l);
  }, [l, f]), { data: e, fetching: l, error: s, fetchData: v, resetState: g };
};
function N(n, e, a = "", l = "", i = "full", s = !0) {
  return `${n}/${e}/${i}/${s && "!"}${a},${l}/0/default.jpg`;
}
function O(n) {
  const e = new URL("https://api.artic.edu/api/v1/artworks/search");
  return e.searchParams.set("query[bool][must][][term][is_on_view]", "true"), e.searchParams.set("query[bool][must][][exists][field]", "description"), e.searchParams.set("query[bool][should][][exists][field]", "description"), e.searchParams.set("query[bool][should][][exists][field]", "subject_id"), e.searchParams.set("query[bool][should][][exists][field]", "style_id"), e.searchParams.set("query[bool][should][][term][is_boosted]", "true"), e.searchParams.set("query[bool][minimum_should_match]", "1"), e.searchParams.set(
    "fields",
    "artist_title,description,id,image_id,thumbnail,title"
  ), e.searchParams.set("limit", "10"), n.keywords && e.searchParams.set("q", n.keywords), n.subjectIds && e.searchParams.set(
    "query[bool][must][][terms][subject_ids][]",
    n.subjectIds
  ), n.categoryIds && e.searchParams.set(
    "query[bool][must][][term][category_ids][value]",
    n.categoryIds
  ), e;
}
function G() {
  const {
    searchQuery: n,
    setSearchQuery: e,
    setSearchResultItems: a,
    setSearchFetching: l,
    setSearchError: i,
    setActiveTheme: s
  } = E(T), { fetchData: c } = q({
    dataSubSelector: "data",
    dataSetter: a,
    fetchingSetter: l,
    errorSetter: i
  }), u = (d) => {
    c(O({ keywords: n })), s(null), d.preventDefault();
  };
  return /* @__PURE__ */ t.createElement(
    "form",
    {
      id: "aic-ct-search",
      role: "search",
      "aria-label": "Objects for your tour",
      onSubmit: u
    },
    /* @__PURE__ */ t.createElement("label", { htmlFor: "aic-ct-search__input", className: "sr-only" }, "Search the collection"),
    /* @__PURE__ */ t.createElement("br", null),
    /* @__PURE__ */ t.createElement(
      "input",
      {
        id: "aic-ct-search__input",
        type: "search",
        placeholder: "Search",
        value: n,
        onChange: (d) => {
          d.target.value && d.target.setCustomValidity(""), e(d.target.value);
        },
        onInvalid: (d) => {
          d.target.setCustomValidity("You must enter a search term");
        },
        required: !0
      }
    ),
    /* @__PURE__ */ t.createElement("button", { id: "aic-ct-search__button", type: "submit" }, "Search")
  );
}
function V(n) {
  const { id: e, label: a, subjectIds: l, thumbnailId: i, categoryIds: s } = n, {
    setSearchResultItems: c,
    setSearchFetching: u,
    setSearchError: d,
    setSearchQuery: p,
    activeTheme: m,
    setActiveTheme: f
  } = E(T), { fetchData: o, resetState: g } = q({
    dataSubSelector: "data",
    dataSetter: c,
    fetchingSetter: u,
    errorSetter: d
  }), v = () => {
    m === a ? (f(null), g()) : (o(O({ subjectIds: l, categoryIds: s })), f(a), p(""));
  };
  return /* @__PURE__ */ t.createElement(t.Fragment, null, (m === null || m === a) && /* @__PURE__ */ t.createElement(
    "button",
    {
      id: `aic-ct-theme-toggle-${e}`,
      onClick: v,
      "aria-pressed": m === a ? "true" : "false"
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
function K() {
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
  return /* @__PURE__ */ t.createElement("div", { id: "aic-ct-themes" }, n.map((e, a) => /* @__PURE__ */ t.createElement(
    V,
    {
      key: e.label,
      id: a,
      label: e.label,
      subjectIds: e.subjectIds,
      categoryIds: e.categoryIds,
      thumbnailId: e.thumbnailId
    }
  )));
}
function j(n) {
  const { iiifBaseUrl: e, tourItems: a, tourItemsDispatch: l } = E(I), { itemData: i } = n, [s, c] = h(!1), u = () => {
    l({
      type: s ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: s ? i.id : i
    });
  };
  return y(() => {
    c(a.find((d) => d.id === i.id));
  }, [a, i.id]), /* @__PURE__ */ t.createElement("li", { id: `aic-ct-search__item-${i.id}` }, i.title && /* @__PURE__ */ t.createElement("h2", null, i.title), i.image_id && /* @__PURE__ */ t.createElement(
    "img",
    {
      src: N(e, i.image_id, "240", "240"),
      alt: i.thumbnail.alt_text
    }
  ), i.artist_title && /* @__PURE__ */ t.createElement("p", null, i.artist_title), i.description && /* @__PURE__ */ t.createElement("div", { dangerouslySetInnerHTML: { __html: i.description } }), (a.length < 6 || s) && /* @__PURE__ */ t.createElement(
    "button",
    {
      type: "button",
      onClick: u,
      "aria-pressed": s ? "true" : "false",
      "aria-label": s ? "Remove from tour" : "Add to tour"
    },
    s ? "Remove from tour" : "Add to tour"
  ));
}
j.propTypes = {
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
function W() {
  const { searchError: n, searchFetching: e, searchResultItems: a } = E(T);
  return e ? /* @__PURE__ */ t.createElement("div", { id: "aic-ct-search__loading" }, "Loading...") : n ? /* @__PURE__ */ t.createElement("div", { id: "aic-ct-search__error" }, n) : (a == null ? void 0 : a.length) === 0 ? /* @__PURE__ */ t.createElement("div", { id: "aic-ct-search__no-results" }, "Sorry, we couldn’t find any results matching your criteria") : (a == null ? void 0 : a.length) > 0 ? /* @__PURE__ */ t.createElement("ul", { id: "aic-ct-search__results" }, a.map((l) => /* @__PURE__ */ t.createElement(j, { key: l.id, itemData: l }))) : null;
}
function C(n, e) {
  const [a, l] = h(n || ""), i = A(null);
  return {
    value: a,
    onChange: (c) => {
      const { value: u } = c.target;
      i.current.ariaBusy = !0, l(u), i.current.ariaBusy = !1;
    },
    countRef: i,
    charsRemaining: e - a.length,
    maxLength: e
  };
}
function M(n) {
  var g;
  const { itemData: e, itemIndex: a, setShouldAssignFocus: l, setRemoveButtons: i } = n, { iiifBaseUrl: s, tourItems: c, tourItemsDispatch: u, limits: d } = E(I), p = A(null), m = C((g = c[a]) == null ? void 0 : g.note, d.note), f = D(
    () => ({
      id: e.id,
      note: m.value
    }),
    [e.id, m.value]
  ), o = () => {
    u({
      type: "REMOVE_ITEM",
      payload: e.id
    });
  };
  return y(() => {
    u({
      type: "UPDATE_NOTE",
      payload: f
    });
  }, [f, u]), y(() => {
    const v = p.current;
    return () => {
      document.activeElement === v && (c.length > 1 ? c.find((b, S) => {
        b.id === e.id && l({
          flag: !0,
          id: c[S !== c.length - 1 ? S + 1 : S - 1].id
        });
      }) : l({
        flag: !0,
        id: null
      }));
    };
  }, [c, e.id, l]), y(() => (i((v) => [...v, { id: e.id, ref: p }]), () => {
    i(
      (v) => v.filter((b) => b.id !== e.id)
    );
  }), [i, c, e.id]), /* @__PURE__ */ t.createElement("li", { id: `aic-ct-tour__item-${e.id}` }, e.title && /* @__PURE__ */ t.createElement("h2", null, e.title), e.image_id && /* @__PURE__ */ t.createElement(
    "img",
    {
      src: N(s, e.image_id, "240", "240"),
      alt: e.thumbnail.alt_text
    }
  ), e.artist_title && /* @__PURE__ */ t.createElement("p", null, e.artist_title), e.description && /* @__PURE__ */ t.createElement("div", { dangerouslySetInnerHTML: { __html: e.description } }), /* @__PURE__ */ t.createElement("label", { htmlFor: `aic-ct-note-${e.id}` }, "Personal note", " ", /* @__PURE__ */ t.createElement("span", { ref: m.countRef, "aria-live": "polite" }, "(", m.charsRemaining, /* @__PURE__ */ t.createElement("span", { className: "sr-only" }, " characters remaining"), ")")), /* @__PURE__ */ t.createElement("br", null), /* @__PURE__ */ t.createElement(
    "textarea",
    {
      id: `aic-ct-note-${e.id}`,
      onChange: m.onChange,
      rows: "5",
      value: m.value,
      maxLength: m.maxLength
    }
  ), /* @__PURE__ */ t.createElement("br", null), /* @__PURE__ */ t.createElement(
    "button",
    {
      ref: p,
      type: "button",
      onClick: () => {
        o(e.id);
      }
    },
    "Remove from tour"
  ));
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
  }),
  itemIndex: r.number.isRequired,
  setRemoveButtons: r.func,
  setShouldAssignFocus: r.func
};
function X() {
  const { tourItems: n, navSearchButtonRef: e } = E(I), [a, l] = h({
    flag: !1,
    id: null
  }), [i, s] = h([]);
  return y(() => {
    a.flag && (!n.length && (e != null && e.current) ? e.current.focus() : i.find((c) => c.id === a.id).ref.current.focus(), l(!1));
  }, [n, a, i, e]), /* @__PURE__ */ t.createElement(t.Fragment, null, n.length > 0 ? /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("h2", { id: "aic-ct-tour__heading" }, "Your tour"), /* @__PURE__ */ t.createElement("ul", { id: "aic-ct-tour__results" }, n.map((c, u) => /* @__PURE__ */ t.createElement(
    M,
    {
      key: c.id,
      setRemoveButtons: s,
      itemData: c,
      itemIndex: u,
      shouldAssignFocus: a,
      setShouldAssignFocus: l
    }
  )))) : /* @__PURE__ */ t.createElement("div", { id: "aic-ct-tour__no-items" }, "You haven’t added any artworks to your tour yet"));
}
function Z() {
  const {
    tourTitle: n,
    setTourTitle: e,
    tourDescription: a,
    setTourDescription: l,
    limits: i
  } = E(I), s = C(n, i.title), c = C(a, i.description);
  return y(() => {
    e(s.value);
  }, [s, e]), y(() => {
    l(c.value);
  }, [c, l]), /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("div", null, /* @__PURE__ */ t.createElement("label", { htmlFor: "aic-ct-metadata__title" }, "Tour Title", " ", /* @__PURE__ */ t.createElement("span", { ref: s.countRef, "aria-live": "polite" }, "(", s.charsRemaining, /* @__PURE__ */ t.createElement("span", { className: "sr-only" }, " characters remaining"), ")")), /* @__PURE__ */ t.createElement("br", null), /* @__PURE__ */ t.createElement(
    "input",
    {
      type: "text",
      onChange: s.onChange,
      value: s.value,
      id: "aic-ct-metadata__title",
      maxLength: s.maxLength,
      required: !0
    }
  )), /* @__PURE__ */ t.createElement("div", null, /* @__PURE__ */ t.createElement("label", { htmlFor: "aic-ct-metadata__description" }, "Tour Description", " ", /* @__PURE__ */ t.createElement("span", { ref: c.countRef, "aria-live": "polite" }, "(", c.charsRemaining, /* @__PURE__ */ t.createElement("span", { className: "sr-only" }, " characters remaining"), ")")), /* @__PURE__ */ t.createElement("br", null), /* @__PURE__ */ t.createElement(
    "textarea",
    {
      id: "aic-ct-metadata__description",
      onChange: c.onChange,
      rows: "5",
      value: c.value,
      maxLength: c.maxLength
    }
  )));
}
function ee() {
  const {
    apiSaveEndpoint: n,
    tourTitle: e,
    tourItems: a,
    tourDescription: l,
    validityIssues: i,
    setValidityIssues: s,
    limits: c,
    isSaving: u,
    setIsSaving: d
  } = E(I), [p, m] = h(null), f = async () => {
    d(!0);
    try {
      const o = await fetch(`${n}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: e,
          description: l,
          // Pass in note as objectNote and destructure the rest as rest
          artworks: a.map(({ note: v, ...b }) => ({
            objectNote: v,
            ...b
          }))
        })
      });
      if (!o.ok)
        throw new Error(
          "There was a problem saving your tour, please try again. If the problem persists, please contact us and let us know."
        );
      const { message: g } = await o.json();
      m({
        type: "success",
        message: g
      });
    } catch (o) {
      m({
        type: "error",
        message: o.message
      });
    }
    d(!1);
  };
  return y(() => {
    const o = [];
    e.length || o.push("A title is required"), e.length > c.title && o.push("Tour title must not exceed the character limit"), l.length > c.description && o.push(
      "Tour description must not exceed the character limit"
    ), a.length < c.items.min && o.push("At least one item is required"), a.length > c.items.max && o.push("Tours must not contain more than 6 artworks"), a.some((g) => g.note.length > c.note ? (o.push("Notes must not exceed the character limit"), !0) : !1), s(o);
  }, [e, l, a, s, c]), /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("h2", null, "Submit your tour"), i.length ? /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("p", null, "Fix these issue before submitting your tour:"), i.length && /* @__PURE__ */ t.createElement("ul", { id: "aic-ct-validation-errors" }, i.map((o, g) => /* @__PURE__ */ t.createElement("li", { key: g }, o)))) : /* @__PURE__ */ t.createElement("div", { id: "aic-ct-validation-success" }, /* @__PURE__ */ t.createElement("div", { tabIndex: "-1", "aria-live": "polite" }, u && /* @__PURE__ */ t.createElement("p", null, "Saving..."), !u && !p && /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("p", null, "Are you sure you want to submit your tour? You won't be able to make any more changes after this stage"), /* @__PURE__ */ t.createElement(
    "button",
    {
      id: "aic-ct-save-button",
      type: "button",
      onClick: f,
      disabled: u
    },
    "Save my tour"
  )), p && (p.type === "success" && /* @__PURE__ */ t.createElement("div", { id: "aic-ct-save-success" }, /* @__PURE__ */ t.createElement("p", null, p.message)) || p.type === "error" && /* @__PURE__ */ t.createElement("div", { id: "aic-ct-save-error" }, /* @__PURE__ */ t.createElement("p", null, p.message), /* @__PURE__ */ t.createElement(
    "button",
    {
      id: "aic-ct-save-button",
      type: "button",
      onClick: f,
      disabled: u
    },
    "Save my tour"
  ))))));
}
const te = (n) => {
  const { apiSaveEndpoint: e, tourTitle: a, tourDescription: l, tourItems: i } = n, s = {
    apiSaveEndpoint: e,
    tourTitle: a,
    tourDescription: l,
    tourItems: i
  };
  return /* @__PURE__ */ t.createElement(F, { ...s }, /* @__PURE__ */ t.createElement(J, null), /* @__PURE__ */ t.createElement(w, null, /* @__PURE__ */ t.createElement(P, { id: 0, title: "Search" }, /* @__PURE__ */ t.createElement(k, null, /* @__PURE__ */ t.createElement(G, null), /* @__PURE__ */ t.createElement(K, null), /* @__PURE__ */ t.createElement(W, null))), /* @__PURE__ */ t.createElement(P, { id: 1, title: "Your tour" }, /* @__PURE__ */ t.createElement(Z, null), /* @__PURE__ */ t.createElement(X, null)), /* @__PURE__ */ t.createElement(P, { id: 2, title: "Save your tour" }, /* @__PURE__ */ t.createElement(ee, null))));
};
te.propTypes = {
  apiSaveEndpoint: r.string,
  tourTitle: r.string,
  tourDescription: r.string,
  tourItems: r.array
};
export {
  te as default
};
