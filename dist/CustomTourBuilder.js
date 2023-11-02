import e, { createContext as x, useState as h, useReducer as U, useRef as P, useMemo as C, useContext as E, useEffect as _ } from "react";
import t from "prop-types";
const j = (i, r) => {
  switch (r.type) {
    case "ADD_ITEM":
      return [...i, { ...r.payload, note: "" }];
    case "UPDATE_NOTE":
      return i.map((a) => a.id === r.payload.id ? { ...a, note: r.payload.note } : a);
    case "REMOVE_ITEM":
      return i.filter(({ id: a }) => a !== r.payload);
    default:
      return i;
  }
}, y = x();
function D(i) {
  const {
    children: r,
    tourTitle: a,
    tourDescription: o,
    tourItems: n,
    navPages: s,
    apiSaveEndpoint: l
  } = i, [d, g] = h(a || ""), [u, c] = h(
    o || ""
  ), [f, m] = h(s || []), [p, v] = h(0), [b, T] = U(
    j,
    n || []
  ), V = P(null), [O, k] = h([]), $ = "https://artic.edu/iiif/2", B = l || "/api/v1/custom-tours", [M, L] = h(!1), Q = C(
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
    y.Provider,
    {
      value: {
        apiSaveEndpoint: B,
        iiifBaseUrl: $,
        limits: Q,
        tourTitle: d,
        setTourTitle: g,
        tourDescription: u,
        setTourDescription: c,
        tourItems: b,
        tourItemsDispatch: T,
        navPages: f,
        setNavPages: m,
        activeNavPage: p,
        setActiveNavPage: v,
        navSearchButtonRef: V,
        validityIssues: O,
        setValidityIssues: k,
        isSaving: M,
        setIsSaving: L
      }
    },
    r
  );
}
D.propTypes = {
  apiSaveEndpoint: t.string,
  children: t.node.isRequired,
  tourTitle: t.string,
  tourDescription: t.string,
  tourItems: t.instanceOf(Array),
  navPages: t.instanceOf(Array)
};
y.Provider.propTypes = {
  value: t.shape({
    apiSaveEndpoint: t.string,
    iiifBaseUrl: t.string,
    limits: t.shape({
      note: t.number,
      title: t.number,
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
    tourDescription: t.string,
    setTourDescription: t.func,
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
    setIsSaving: t.func
  })
};
function Y() {
  const {
    navPages: i,
    activeNavPage: r,
    setActiveNavPage: a,
    navSearchButtonRef: o,
    isSaving: n
  } = E(y);
  return /* @__PURE__ */ e.createElement("nav", { id: "aic-ct-navigation", "aria-label": "Custom tour navigation" }, i.map((s, l) => /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: s.id === 0 ? o : null,
      key: s.id,
      id: `aic-ct-nav-button-${s.id}`,
      "aria-controls": `aic-ct-nav-page-${s.id}`,
      "aria-pressed": s.id === r,
      type: "button",
      onClick: () => a(l),
      disabled: n
    },
    s.title
  )));
}
function A({ children: i }) {
  const { setNavPages: r } = E(y);
  return _(() => {
    r(
      i ? i.map((a, o) => ({
        id: o,
        title: a.props.title
      })) : []
    );
  }, [i, r]), /* @__PURE__ */ e.createElement("div", { id: "aic-ct-nav-pages" }, i);
}
A.propTypes = {
  children: t.node.isRequired
};
function S(i) {
  const { id: r, children: a } = i, { activeNavPage: o } = E(y);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      tabIndex: "0",
      id: `aic-ct-nav-page-${r}`,
      "aria-labelledby": `aic-ct-nav-button-${r}`,
      "aria-hidden": o !== r,
      style: o !== r ? { display: "none" } : {}
    },
    a
  );
}
S.propTypes = {
  id: t.number.isRequired,
  title: t.string.isRequired,
  children: t.oneOfType([
    t.arrayOf(t.element),
    t.object
  ]).isRequired
};
const I = x();
function q(i) {
  const {
    children: r,
    searchResultItems: a,
    searchQuery: o,
    searchFetching: n,
    searchError: s
  } = i, [l, d] = h(
    a || null
  ), [g, u] = h(o || ""), [c, f] = h(
    n || !1
  ), [m, p] = h(s || !1);
  return /* @__PURE__ */ e.createElement(
    I.Provider,
    {
      value: {
        searchResultItems: l,
        setSearchResultItems: d,
        searchQuery: g,
        setSearchQuery: u,
        searchFetching: c,
        setSearchFetching: f,
        searchError: m,
        setSearchError: p
      }
    },
    r
  );
}
q.propTypes = {
  children: t.node.isRequired,
  searchResultItems: t.array,
  searchQuery: t.string,
  searchFetching: t.bool,
  searchError: t.oneOfType([t.string, t.bool])
};
I.Provider.propTypes = {
  value: t.shape({
    searchResultItems: t.array,
    setSearchResultItems: t.func,
    searchQuery: t.string,
    setSearchQuery: t.func,
    searchFetching: t.bool,
    setSearchFetching: t.func,
    searchError: t.oneOfType([t.string, t.bool]),
    setSearchError: t.func
  }),
  children: t.node.isRequired
};
function H() {
  const {
    searchQuery: i,
    setSearchQuery: r,
    setSearchResultItems: a,
    setSearchError: o,
    setSearchFetching: n
  } = E(I), [s, l] = h(i), d = (u) => {
    const c = new URL("https://api.artic.edu/api/v1/artworks/search");
    c.searchParams.set("query[bool][must][][term][is_on_view]", "true"), c.searchParams.set(
      "query[bool][must][][exists][field]",
      "description"
    ), c.searchParams.set(
      "query[bool][should][][exists][field]",
      "description"
    ), c.searchParams.set(
      "query[bool][should][][exists][field]",
      "subject_id"
    ), c.searchParams.set("query[bool][should][][exists][field]", "style_id"), c.searchParams.set("query[bool][should][][term][is_boosted]", "true"), c.searchParams.set("query[bool][minimum_should_match]", "1"), c.searchParams.set(
      "fields",
      "artist_title,description,id,image_id,thumbnail,title"
    ), c.searchParams.set("limit", "10"), c.searchParams.set("q", u);
    const f = new AbortController(), m = f.signal;
    if (u === "") {
      a(null), n(!1), o(null);
      return;
    }
    async function p() {
      try {
        const b = await (await fetch(c, { signal: m })).json();
        a(b.data), n(!1);
      } catch (v) {
        if (v.name === "AbortError")
          return;
        o("Error fetching results"), n(!1);
      }
    }
    return n(!0), p(), () => {
      f.abort();
    };
  }, g = (u) => {
    r(s), d(s), u.preventDefault();
  };
  return /* @__PURE__ */ e.createElement(
    "form",
    {
      id: "aic-ct-search",
      role: "search",
      "aria-label": "Objects for your tour",
      onSubmit: g
    },
    /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-search__input", className: "sr-only" }, "Search the collection"),
    /* @__PURE__ */ e.createElement("br", null),
    /* @__PURE__ */ e.createElement(
      "input",
      {
        id: "aic-ct-search__input",
        type: "search",
        placeholder: "Search",
        value: s,
        onChange: (u) => {
          u.target.value && u.target.setCustomValidity(""), l(u.target.value);
        },
        onInvalid: (u) => {
          u.target.setCustomValidity("You must enter a search term");
        },
        required: !0
      }
    ),
    /* @__PURE__ */ e.createElement("button", { id: "aic-ct-search__button", type: "submit" }, "Search")
  );
}
function F(i, r, a = "", o = "", n = "full", s = !0) {
  return `${i}/${r}/${n}/${s && "!"}${a},${o}/0/default.jpg`;
}
function N(i) {
  const { iiifBaseUrl: r, tourItems: a, tourItemsDispatch: o } = E(y), { itemData: n } = i, [s, l] = h(!1), d = () => {
    o({
      type: s ? "REMOVE_ITEM" : "ADD_ITEM",
      payload: s ? n.id : n
    });
  };
  return _(() => {
    l(a.find((g) => g.id === n.id));
  }, [a, n.id]), /* @__PURE__ */ e.createElement("li", { id: `aic-ct-search__item-${n.id}` }, n.title && /* @__PURE__ */ e.createElement("h2", null, n.title), n.image_id && /* @__PURE__ */ e.createElement(
    "img",
    {
      src: F(r, n.image_id, "240", "240"),
      alt: n.thumbnail.alt_text
    }
  ), n.artist_title && /* @__PURE__ */ e.createElement("p", null, n.artist_title), n.description && /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: n.description } }), (a.length < 6 || s) && /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      onClick: d,
      "aria-pressed": s ? "true" : "false",
      "aria-label": s ? "Remove from tour" : "Add to tour"
    },
    s ? "Remove from tour" : "Add to tour"
  ));
}
N.propTypes = {
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
function z() {
  const { searchError: i, searchFetching: r, searchResultItems: a } = E(I);
  return r ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__loading" }, "Loading...") : i ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__error" }, i) : (a == null ? void 0 : a.length) === 0 ? /* @__PURE__ */ e.createElement("div", { id: "aic-ct-search__no-results" }, "Sorry, we couldn’t find any results matching your criteria") : (a == null ? void 0 : a.length) > 0 ? /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-search__results" }, a.map((o) => /* @__PURE__ */ e.createElement(N, { key: o.id, itemData: o }))) : null;
}
function R(i, r) {
  const [a, o] = h(i || ""), n = P(null);
  return {
    value: a,
    onChange: (l) => {
      const { value: d } = l.target;
      n.current.ariaBusy = !0, o(d), n.current.ariaBusy = !1;
    },
    countRef: n,
    charsRemaining: r - a.length,
    maxLength: r
  };
}
function w(i) {
  var p;
  const { itemData: r, itemIndex: a, setShouldAssignFocus: o, setRemoveButtons: n } = i, { iiifBaseUrl: s, tourItems: l, tourItemsDispatch: d, limits: g } = E(y), u = P(null), c = R((p = l[a]) == null ? void 0 : p.note, g.note), f = C(
    () => ({
      id: r.id,
      note: c.value
    }),
    [r.id, c.value]
  ), m = () => {
    d({
      type: "REMOVE_ITEM",
      payload: r.id
    });
  };
  return _(() => {
    d({
      type: "UPDATE_NOTE",
      payload: f
    });
  }, [f, d]), _(() => {
    const v = u.current;
    return () => {
      document.activeElement === v && (l.length > 1 ? l.find((b, T) => {
        b.id === r.id && o({
          flag: !0,
          id: l[T !== l.length - 1 ? T + 1 : T - 1].id
        });
      }) : o({
        flag: !0,
        id: null
      }));
    };
  }, [l, r.id, o]), _(() => (n((v) => [...v, { id: r.id, ref: u }]), () => {
    n(
      (v) => v.filter((b) => b.id !== r.id)
    );
  }), [n, l, r.id]), /* @__PURE__ */ e.createElement("li", { id: `aic-ct-tour__item-${r.id}` }, r.title && /* @__PURE__ */ e.createElement("h2", null, r.title), r.image_id && /* @__PURE__ */ e.createElement(
    "img",
    {
      src: F(s, r.image_id, "240", "240"),
      alt: r.thumbnail.alt_text
    }
  ), r.artist_title && /* @__PURE__ */ e.createElement("p", null, r.artist_title), r.description && /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: r.description } }), /* @__PURE__ */ e.createElement("label", { htmlFor: `aic-ct-note-${r.id}` }, "Personal note", " ", /* @__PURE__ */ e.createElement("span", { ref: c.countRef, "aria-live": "polite" }, "(", c.charsRemaining, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "textarea",
    {
      id: `aic-ct-note-${r.id}`,
      onChange: c.onChange,
      rows: "5",
      value: c.value,
      maxLength: c.maxLength
    }
  ), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "button",
    {
      ref: u,
      type: "button",
      onClick: () => {
        m(r.id);
      }
    },
    "Remove from tour"
  ));
}
w.propTypes = {
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
function J() {
  const { tourItems: i, navSearchButtonRef: r } = E(y), [a, o] = h({
    flag: !1,
    id: null
  }), [n, s] = h([]);
  return _(() => {
    a.flag && (!i.length && (r != null && r.current) ? r.current.focus() : n.find((l) => l.id === a.id).ref.current.focus(), o(!1));
  }, [i, a, n, r]), /* @__PURE__ */ e.createElement(e.Fragment, null, i.length > 0 ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("h2", { id: "aic-ct-tour__heading" }, "Your tour"), /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-tour__results" }, i.map((l, d) => /* @__PURE__ */ e.createElement(
    w,
    {
      key: l.id,
      setRemoveButtons: s,
      itemData: l,
      itemIndex: d,
      shouldAssignFocus: a,
      setShouldAssignFocus: o
    }
  )))) : /* @__PURE__ */ e.createElement("div", { id: "aic-ct-tour__no-items" }, "You haven’t added any artworks to your tour yet"));
}
function G() {
  const {
    tourTitle: i,
    setTourTitle: r,
    tourDescription: a,
    setTourDescription: o,
    limits: n
  } = E(y), s = R(i, n.title), l = R(a, n.description);
  return _(() => {
    r(s.value);
  }, [s, r]), _(() => {
    o(l.value);
  }, [l, o]), /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__title" }, "Tour Title", " ", /* @__PURE__ */ e.createElement("span", { ref: s.countRef, "aria-live": "polite" }, "(", s.charsRemaining, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "text",
      onChange: s.onChange,
      value: s.value,
      id: "aic-ct-metadata__title",
      maxLength: s.maxLength,
      required: !0
    }
  )), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { htmlFor: "aic-ct-metadata__description" }, "Tour Description", " ", /* @__PURE__ */ e.createElement("span", { ref: l.countRef, "aria-live": "polite" }, "(", l.charsRemaining, /* @__PURE__ */ e.createElement("span", { className: "sr-only" }, " characters remaining"), ")")), /* @__PURE__ */ e.createElement("br", null), /* @__PURE__ */ e.createElement(
    "textarea",
    {
      id: "aic-ct-metadata__description",
      onChange: l.onChange,
      rows: "5",
      value: l.value,
      maxLength: l.maxLength
    }
  )));
}
function K() {
  const {
    apiSaveEndpoint: i,
    tourTitle: r,
    tourItems: a,
    tourDescription: o,
    validityIssues: n,
    setValidityIssues: s,
    limits: l,
    isSaving: d,
    setIsSaving: g
  } = E(y), [u, c] = h(null), f = async () => {
    g(!0);
    try {
      const m = await fetch(`${i}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: r,
          description: o,
          // Pass in note as objectNote and destructure the rest as rest
          artworks: a.map(({ note: v, ...b }) => ({
            objectNote: v,
            ...b
          }))
        })
      });
      if (!m.ok)
        throw new Error(
          "There was a problem saving your tour, please try again. If the problem persists, please contact us and let us know."
        );
      const { message: p } = await m.json();
      c({
        type: "success",
        message: p
      });
    } catch (m) {
      c({
        type: "error",
        message: m.message
      });
    }
    g(!1);
  };
  return _(() => {
    const m = [];
    r.length || m.push("A title is required"), r.length > l.title && m.push("Tour title must not exceed the character limit"), o.length > l.description && m.push(
      "Tour description must not exceed the character limit"
    ), a.length < l.items.min && m.push("At least one item is required"), a.length > l.items.max && m.push("Tours must not contain more than 6 artworks"), a.some((p) => p.note.length > l.note ? (m.push("Notes must not exceed the character limit"), !0) : !1), s(m);
  }, [r, o, a, s, l]), /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("h2", null, "Submit your tour"), n.length ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", null, "Fix these issue before submitting your tour:"), n.length && /* @__PURE__ */ e.createElement("ul", { id: "aic-ct-validation-errors" }, n.map((m, p) => /* @__PURE__ */ e.createElement("li", { key: p }, m)))) : /* @__PURE__ */ e.createElement("div", { id: "aic-ct-validation-success" }, /* @__PURE__ */ e.createElement("div", { tabIndex: "-1", "aria-live": "polite" }, d && /* @__PURE__ */ e.createElement("p", null, "Saving..."), !d && !u && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", null, "Are you sure you want to submit your tour? You won't be able to make any more changes after this stage"), /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-save-button",
      type: "button",
      onClick: f,
      disabled: d
    },
    "Save my tour"
  )), u && (u.type === "success" && /* @__PURE__ */ e.createElement("div", { id: "aic-ct-save-success" }, /* @__PURE__ */ e.createElement("p", null, u.message)) || u.type === "error" && /* @__PURE__ */ e.createElement("div", { id: "aic-ct-save-error" }, /* @__PURE__ */ e.createElement("p", null, u.message), /* @__PURE__ */ e.createElement(
    "button",
    {
      id: "aic-ct-save-button",
      type: "button",
      onClick: f,
      disabled: d
    },
    "Save my tour"
  ))))));
}
const W = (i) => {
  const { apiSaveEndpoint: r, tourTitle: a, tourDescription: o, tourItems: n } = i, s = {
    apiSaveEndpoint: r,
    tourTitle: a,
    tourDescription: o,
    tourItems: n
  };
  return /* @__PURE__ */ e.createElement(D, { ...s }, /* @__PURE__ */ e.createElement(Y, null), /* @__PURE__ */ e.createElement(A, null, /* @__PURE__ */ e.createElement(S, { id: 0, title: "Search" }, /* @__PURE__ */ e.createElement(q, null, /* @__PURE__ */ e.createElement(H, null), /* @__PURE__ */ e.createElement(z, null))), /* @__PURE__ */ e.createElement(S, { id: 1, title: "Your tour" }, /* @__PURE__ */ e.createElement(G, null), /* @__PURE__ */ e.createElement(J, null)), /* @__PURE__ */ e.createElement(S, { id: 2, title: "Save your tour" }, /* @__PURE__ */ e.createElement(K, null))));
};
W.propTypes = {
  apiSaveEndpoint: t.string,
  tourTitle: t.string,
  tourDescription: t.string,
  tourItems: t.array
};
export {
  W as default
};
