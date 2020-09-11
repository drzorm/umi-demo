var S = Object.assign,
  F = (h, a, e) =>
    new Promise((i, o) => {
      var d = f => {
          try {
            p(e.next(f));
          } catch (g) {
            o(g);
          }
        },
        s = f => {
          try {
            p(e.throw(f));
          } catch (g) {
            o(g);
          }
        },
        p = f => (f.done ? i(f.value) : Promise.resolve(f.value).then(d, s));
      p((e = e.apply(h, a)).next());
    });
(function(h) {
  function a(t) {
    for (var r = t[0], n = t[1], l = t[2], O, c, P = 0, R = []; P < r.length; P++)
      (c = r[P]), Object.prototype.hasOwnProperty.call(o, c) && o[c] && R.push(o[c][0]), (o[c] = 0);
    for (O in n) Object.prototype.hasOwnProperty.call(n, O) && (h[O] = n[O]);
    for (_ && _(t); R.length; ) R.shift()();
    return d.push.apply(d, l || []), e();
  }
  function e() {
    for (var t, r = 0; r < d.length; r++) {
      for (var n = d[r], l = !0, O = 1; O < n.length; O++) {
        var c = n[O];
        o[c] !== 0 && (l = !1);
      }
      l && (d.splice(r--, 1), (t = s((s.s = n[0]))));
    }
    return t;
  }
  var i = {},
    o = { 0: 0 },
    d = [];
  function s(t) {
    if (i[t]) return i[t].exports;
    var r = (i[t] = { i: t, l: !1, exports: {} });
    return h[t].call(r.exports, r, r.exports, s), (r.l = !0), r.exports;
  }
  (s.m = h),
    (s.c = i),
    (s.d = function(t, r, n) {
      s.o(t, r) || Object.defineProperty(t, r, { enumerable: !0, get: n });
    }),
    (s.r = function(t) {
      typeof Symbol != "undefined" &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (s.t = function(t, r) {
      if ((r & 1 && (t = s(t)), r & 8)) return t;
      if (r & 4 && typeof t == "object" && t && t.__esModule) return t;
      var n = Object.create(null);
      if ((s.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), r & 2 && typeof t != "string"))
        for (var l in t)
          s.d(
            n,
            l,
            function(O) {
              return t[O];
            }.bind(null, l),
          );
      return n;
    }),
    (s.n = function(t) {
      var r =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return s.d(r, "a", r), r;
    }),
    (s.o = function(t, r) {
      return Object.prototype.hasOwnProperty.call(t, r);
    }),
    (s.p = "./");
  var p = (window.webpackJsonp = window.webpackJsonp || []),
    f = p.push.bind(p);
  (p.push = a), (p = p.slice());
  for (var g = 0; g < p.length; g++) a(p[g]);
  var _ = f;
  return d.push([0, 1]), e();
})({
  "+ego": function(h, a, e) {
    "use strict";
    e.r(a);
    var i = e("cDcd"),
      o = e.n(i);
    const d = o.a.memo(n => o.a.createElement("div", { className: "layout" }, n.children));
    var s = d,
      p = e("tJVT"),
      f = e("sm/d");
    const g = (n, l) => {
        switch (l.type) {
          case "update":
            return l.payload;
          default:
            return n;
        }
      },
      _ = Object(i.memo)(n => {
        const l = Object(i.useReducer)(g, "red"),
          O = Object(p.a)(l, 2),
          c = O[0],
          P = O[1];
        return o.a.createElement(f.a.Provider, { value: { state: c, dispatch: P } }, n.children);
      });
    var t = _,
      r = (a.default = Object(i.memo)(n => o.a.createElement(t, null, o.a.createElement(s, null, n.children))));
  },
  0: function(h, a, e) {
    h.exports = e("tB8F");
  },
  "2hfb": function(h, a, e) {},
  "9kvl": function(h, a, e) {
    "use strict";
    e.d(a, "b", function() {
      return i.b;
    }),
      e.d(a, "c", function() {
        return o.a;
      }),
      e.d(a, "d", function() {
        return O;
      }),
      e.d(a, "a", function() {
        return b.a;
      });
    var i = e("FfOG"),
      o = e("bCY9");
    const d = 1;
    var s = e("I5X1"),
      p = e("/xke"),
      f = e("TeRw"),
      g = e("miYZ"),
      _ = e("tsqr"),
      t = e("PpiC"),
      r = e("io9h"),
      n = e("LtsZ"),
      l = e("0iz5");
    function O(E, A = {}) {
      return Object(l.a)(
        E,
        S(
          {
            formatResult: y => (y == null ? void 0 : y.data),
            requestMethod: y => {
              if (typeof y == "string") return x(y);
              if (typeof y == "object") {
                const B = y.url,
                  W = Object(t.a)(y, ["url"]);
                return x(B, W);
              }
              throw new Error("request options error");
            },
          },
          A,
        ),
      );
    }
    let c;
    (function(E) {
      (E[(E.SILENT = 0)] = "SILENT"),
        (E[(E.WARN_MESSAGE = 1)] = "WARN_MESSAGE"),
        (E[(E.ERROR_MESSAGE = 2)] = "ERROR_MESSAGE"),
        (E[(E.NOTIFICATION = 4)] = "NOTIFICATION"),
        (E[(E.REDIRECT = 9)] = "REDIRECT");
    })(c || (c = {}));
    const P = "/exception";
    let R;
    const C = () => {
        var E;
        if (R) return R;
        const A = o.a.applyPlugins({ key: "request", type: n.ApplyPluginsType.modify, initialValue: {} }),
          y = ((E = A.errorConfig) === null || E === void 0 ? void 0 : E.adaptor) || (u => u);
        (R = Object(r.b)(
          S(
            {
              errorHandler: u => {
                var I, U, N;
                if (
                  u == null || (I = u.request) === null || I === void 0 || (U = I.options) === null || U === void 0
                    ? void 0
                    : U.skipErrorHandler
                )
                  throw u;
                let T;
                if (u.name === "ResponseError" && u.data && u.request) {
                  var m;
                  const v = { req: u.request, res: u.response };
                  (T = y(u.data, v)),
                    (u.message = ((m = T) === null || m === void 0 ? void 0 : m.errorMessage) || u.message),
                    (u.data = u.data),
                    (u.info = T);
                }
                if (((T = u.info), T)) {
                  var M, L, D;
                  const v = (M = T) === null || M === void 0 ? void 0 : M.errorMessage,
                    j = (L = T) === null || L === void 0 ? void 0 : L.errorCode,
                    K = ((D = A.errorConfig) === null || D === void 0 ? void 0 : D.errorPage) || P;
                  switch ((N = T) === null || N === void 0 ? void 0 : N.showType) {
                    case c.SILENT:
                      break;
                    case c.WARN_MESSAGE:
                      _.b.warn(v);
                      break;
                    case c.ERROR_MESSAGE:
                      _.b.error(v);
                      break;
                    case c.NOTIFICATION:
                      f.a.open({ message: v });
                      break;
                    case c.REDIRECT:
                      i.b.push({ pathname: K, query: { errorCode: j, errorMessage: v } });
                      break;
                    default:
                      _.b.error(v);
                      break;
                  }
                } else _.b.error(u.message || "Request error, please retry.");
                throw u;
              },
            },
            A,
          ),
        )),
          R.use((u, I) =>
            F(this, [], function*() {
              var U;
              yield I();
              const N = u.req,
                T = u.res;
              if ((U = N.options) === null || U === void 0 ? void 0 : U.skipErrorHandler) return;
              const m = N.options,
                M = m.getResponse,
                L = M ? T.data : T,
                D = y(L, u);
              if (D.success === !1) {
                const v = new Error(D.errorMessage);
                throw ((v.name = "BizError"), (v.data = L), (v.info = D), v);
              }
            }),
          );
        const B = A.middlewares || [];
        B.forEach(u => {
          R.use(u);
        });
        const W = A.requestInterceptors || [],
          X = A.responseInterceptors || [];
        return (
          W.map(u => {
            R.interceptors.request.use(u);
          }),
          X.map(u => {
            R.interceptors.response.use(u);
          }),
          R
        );
      },
      x = (E, A) => {
        const y = C();
        return y(E, A);
      };
    var b = e("qhky");
  },
  A8du: function(h, a, e) {
    "use strict";
    e.r(a);
    var i = e("cDcd"),
      o = e.n(i),
      d = e("2hfb"),
      s = e.n(d),
      p = e("9kvl");
    a.default = () =>
      o.a.createElement(
        o.a.Fragment,
        null,
        o.a.createElement(p.a, null, o.a.createElement("title", null, "login")),
        o.a.createElement("div", null, "login"),
      );
  },
  FfOG: function(h, a, e) {
    "use strict";
    e.d(a, "a", function() {
      return s;
    }),
      e.d(a, "b", function() {
        return d;
      });
    var i = e("YS25");
    let o = { basename: "/" };
    window.routerBase && (o.basename = window.routerBase);
    let d = Object({ NODE_ENV: "production" }).__IS_SERVER ? null : Object(i.b)(o);
    const s = (f = !1) => (f || (d = Object(i.b)(o)), d),
      p = (f = {}) => {
        o = S(S({}, o), f);
      };
  },
  GV2H: function(h, a, e) {
    "use strict";
    e.r(a);
    var i = e("cDcd"),
      o = e.n(i),
      d = e("ET/R"),
      s = e("iuhU"),
      p = e("9kvl"),
      f = e("io9h"),
      g = e("sm/d"),
      _ = e("o7/9"),
      t = e.n(_);
    let r = 0;
    a.default = () => {
      var n;
      const l = Object(i.useContext)(g.a),
        O = Object(p.d)(() => Object(f.a)("/api/topics", { params: { page: ~~(Math.random() * 99), limit: 1 } })),
        c = O.data,
        P = O.error,
        R = O.loading;
      return (
        Object(i.useEffect)(() => {
          console.log("ENV :>> ", "production");
        }, []),
        Object(d.a)(() => {
          console.log("useMount");
        }),
        Object(i.useEffect)(() => {
          const C = window.setInterval(() => {
            l.dispatch({ type: "update", payload: ["blue", "red"][r++ % 2] });
          }, 3e3);
          return () => {
            window.clearTimeout(C);
          };
        }, [l]),
        o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(p.a, null, o.a.createElement("title", null, l.state)),
          o.a.createElement(
            "div",
            { className: Object(s.a)(t.a.state, t.a[l.state]) },
            c == null || (n = c[0]) === null || n === void 0 ? void 0 : n.title,
          ),
        )
      );
    };
  },
  I5X1: function(h, a, e) {
    "use strict";
    e.d(a, "a", function() {
      return _;
    });
    var i = e("tJVT"),
      o = e("cDcd"),
      d = e.n(o),
      s = e("aUsF"),
      p = e.n(s),
      f = e("FMtG"),
      g = e.n(f);
    function _(t, r) {
      const n = Object(o.useContext)(f.UmiContext),
        l = Object(o.useRef)(r);
      l.current = r;
      const O = Object(o.useState)(() => (l.current ? l.current(n.data[t]) : n.data[t])),
        c = Object(i.a)(O, 2),
        P = c[0],
        R = c[1],
        C = Object(o.useRef)(P);
      return (
        (C.current = P),
        Object(o.useEffect)(() => {
          const x = b => {
            if (r && l.current) {
              const E = l.current(b),
                A = C.current;
              p()(E, A) || R(E);
            } else R(b);
          };
          try {
            n.callbacks[t].add(x);
          } catch (b) {
            (n.callbacks[t] = new Set()), n.callbacks[t].add(x);
          }
          return () => {
            n.callbacks[t].delete(x);
          };
        }, [t]),
        P
      );
    }
  },
  bCY9: function(h, a, e) {
    "use strict";
    e.d(a, "a", function() {
      return o;
    });
    var i = e("LtsZ");
    const o = new i.Plugin({
      validKeys: [
        "modifyClientRenderOpts",
        "patchRoutes",
        "rootContainer",
        "render",
        "onRouteChange",
        "getInitialState",
        "request",
      ],
    });
  },
  cDcd: function(h, a) {
    h.exports = window.React;
  },
  faye: function(h, a) {
    h.exports = window.ReactDOM;
  },
  "o7/9": function(h, a, e) {
    h.exports = { state: "state___3_TLw", red: "red___ROgao", blue: "blue___1YK0d" };
  },
  "sm/d": function(h, a, e) {
    "use strict";
    var i = e("cDcd"),
      o = e.n(i);
    const d = o.a.createContext({ state: "red", dispatch: s => {} });
    a.a = d;
  },
  tB8F: function(h, a, e) {
    "use strict";
    e.r(a);
    var i = {};
    e.r(i),
      e.d(i, "request", function() {
        return f;
      });
    var o = {};
    e.r(o),
      e.d(o, "rootContainer", function() {
        return n;
      });
    var d = {};
    e.r(d),
      e.d(d, "rootContainer", function() {
        return B;
      });
    var s = e("bCY9"),
      p = e("PpiC");
    const f = {
      timeout: 3e4,
      errorConfig: {
        adaptor: m => {
          const M = m.success,
            L = m.error_msg,
            D = Object(p.a)(m, ["success", "error_msg"]);
          return S(S({}, D), { success: m.success, errorMessage: m.error_msg });
        },
      },
      middlewares: [],
      requestInterceptors: [],
      responseInterceptors: [],
    };
    var g = e("cDcd"),
      _ = e.n(g),
      t = e("I5X1");
    if (typeof t.a != "function")
      throw new Error("[plugin-initial-state]: useModel is not a function, @umijs/plugin-model is required.");
    var r = m => {
      const M = m.children,
        L = Object(g.useRef)(!1),
        D = Object(t.a)("@@initialState") || {},
        v = D.loading,
        j = v === void 0 ? !1 : v;
      return (
        Object(g.useEffect)(() => {
          j || (L.current = !0);
        }, [j]),
        j && !L.current ? null : M
      );
    };
    function n(m) {
      return _.a.createElement(r, null, m);
    }
    var l = e("tJVT"),
      O = () => ({ loading: !1, refresh: () => {} }),
      c = e("7xWI"),
      P = e.n(c),
      R = e("sFpY"),
      C = e.n(R),
      x = e("FMtG");
    const b = { "@@initialState": O },
      E = new P.a(),
      A = C.a;
    var y = ({ children: m }) =>
      _.a.createElement(
        x.UmiContext.Provider,
        { value: E },
        Object.entries(b).map(M =>
          _.a.createElement(A, {
            key: M[0],
            namespace: M[0],
            hook: M[1],
            onUpdate: L => {
              const D = M,
                v = Object(l.a)(D, 1),
                j = v[0];
              (E.data[j] = L), E.update(j);
            },
          }),
        ),
        m,
      );
    function B(m) {
      return _.a.createElement(y, null, m);
    }
    s.a.register({ apply: i, path: "F:/demo/umi-demo/src/app.ts" }),
      s.a.register({ apply: o, path: "../plugin-initial-state/runtime" }),
      s.a.register({ apply: d, path: "../plugin-model/runtime" });
    var W = e("FfOG"),
      X = e("LtsZ"),
      u = e("zlVK");
    function I() {
      const m = [
        {
          path: "/",
          component: e("+ego").default,
          routes: [
            { path: "/", exact: !0, component: e("GV2H").default },
            { path: "/login", exact: !0, component: e("A8du").default },
          ],
        },
      ];
      return s.a.applyPlugins({ key: "patchRoutes", type: X.ApplyPluginsType.event, args: { routes: m } }), m;
    }
    const U = (m = {}) =>
        s.a.applyPlugins({
          key: "render",
          type: X.ApplyPluginsType.compose,
          initialValue: () => {
            const M = s.a.applyPlugins({
              key: "modifyClientRenderOpts",
              type: X.ApplyPluginsType.modify,
              initialValue: {
                routes: m.routes || I(),
                plugin: s.a,
                history: Object(W.a)(m.hot),
                isServer: Object({ NODE_ENV: "production" }).__IS_SERVER,
                rootElement: "root",
              },
            });
            return Object(u.renderClient)(M);
          },
          args: m,
        }),
      N = U();
    var T = (a.default = N());
    window.g_umi = { version: "3.2.19" };
  },
});
