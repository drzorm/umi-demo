var S = Object.assign,
  F = (h, a, e) =>
    new Promise((i, o) => {
      var d = f => {
          try {
            E(e.next(f));
          } catch (v) {
            o(v);
          }
        },
        s = f => {
          try {
            E(e.throw(f));
          } catch (v) {
            o(v);
          }
        },
        E = f => (f.done ? i(f.value) : Promise.resolve(f.value).then(d, s));
      E((e = e.apply(h, a)).next());
    });
(function(h) {
  function a(t) {
    for (var r = t[0], n = t[1], l = t[2], O, c, P = 0, g = []; P < r.length; P++)
      (c = r[P]), Object.prototype.hasOwnProperty.call(o, c) && o[c] && g.push(o[c][0]), (o[c] = 0);
    for (O in n) Object.prototype.hasOwnProperty.call(n, O) && (h[O] = n[O]);
    for (R && R(t); g.length; ) g.shift()();
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
  var E = (window.webpackJsonp = window.webpackJsonp || []),
    f = E.push.bind(E);
  (E.push = a), (E = E.slice());
  for (var v = 0; v < E.length; v++) a(E[v]);
  var R = f;
  return d.push([0, 1]), e();
})({
  "+ego": function(h, a, e) {
    "use strict";
    e.r(a);
    var i = e("cDcd"),
      o = e.n(i);
    const d = o.a.memo(n => o.a.createElement("div", { className: "layout" }, n.children));
    var s = d,
      E = e("tJVT"),
      f = e("sm/d");
    const v = (n, l) => {
        switch (l.type) {
          case "update":
            return l.payload;
          default:
            return n;
        }
      },
      R = Object(i.memo)(n => {
        const l = Object(i.useReducer)(v, "red"),
          O = Object(E.a)(l, 2),
          c = O[0],
          P = O[1];
        return o.a.createElement(f.a.Provider, { value: { state: c, dispatch: P } }, n.children);
      });
    var t = R,
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
        return U;
      }),
      e.d(a, "e", function() {
        return O;
      }),
      e.d(a, "a", function() {
        return b.a;
      });
    var i = e("FfOG"),
      o = e("bCY9");
    const d = 1;
    var s = e("I5X1"),
      E = e("/xke"),
      f = e("TeRw"),
      v = e("miYZ"),
      R = e("tsqr"),
      t = e("PpiC"),
      r = e("io9h"),
      n = e("LtsZ"),
      l = e("0iz5");
    function O(p, A = {}) {
      return Object(l.a)(
        p,
        S(
          {
            formatResult: y => (y == null ? void 0 : y.data),
            requestMethod: y => {
              if (typeof y == "string") return U(y);
              if (typeof y == "object") {
                const B = y.url,
                  W = Object(t.a)(y, ["url"]);
                return U(B, W);
              }
              throw new Error("request options error");
            },
          },
          A,
        ),
      );
    }
    let c;
    (function(p) {
      (p[(p.SILENT = 0)] = "SILENT"),
        (p[(p.WARN_MESSAGE = 1)] = "WARN_MESSAGE"),
        (p[(p.ERROR_MESSAGE = 2)] = "ERROR_MESSAGE"),
        (p[(p.NOTIFICATION = 4)] = "NOTIFICATION"),
        (p[(p.REDIRECT = 9)] = "REDIRECT");
    })(c || (c = {}));
    const P = "/exception";
    let g;
    const x = () => {
        var p;
        if (g) return g;
        const A = o.a.applyPlugins({ key: "request", type: n.ApplyPluginsType.modify, initialValue: {} }),
          y = ((p = A.errorConfig) === null || p === void 0 ? void 0 : p.adaptor) || (u => u);
        (g = Object(r.a)(
          S(
            {
              errorHandler: u => {
                var I, C, j;
                if (
                  u == null || (I = u.request) === null || I === void 0 || (C = I.options) === null || C === void 0
                    ? void 0
                    : C.skipErrorHandler
                )
                  throw u;
                let T;
                if (u.name === "ResponseError" && u.data && u.request) {
                  var m;
                  const _ = { req: u.request, res: u.response };
                  (T = y(u.data, _)),
                    (u.message = ((m = T) === null || m === void 0 ? void 0 : m.errorMessage) || u.message),
                    (u.data = u.data),
                    (u.info = T);
                }
                if (((T = u.info), T)) {
                  var M, L, D;
                  const _ = (M = T) === null || M === void 0 ? void 0 : M.errorMessage,
                    N = (L = T) === null || L === void 0 ? void 0 : L.errorCode,
                    K = ((D = A.errorConfig) === null || D === void 0 ? void 0 : D.errorPage) || P;
                  switch ((j = T) === null || j === void 0 ? void 0 : j.showType) {
                    case c.SILENT:
                      break;
                    case c.WARN_MESSAGE:
                      R.b.warn(_);
                      break;
                    case c.ERROR_MESSAGE:
                      R.b.error(_);
                      break;
                    case c.NOTIFICATION:
                      f.a.open({ message: _ });
                      break;
                    case c.REDIRECT:
                      i.b.push({ pathname: K, query: { errorCode: N, errorMessage: _ } });
                      break;
                    default:
                      R.b.error(_);
                      break;
                  }
                } else R.b.error(u.message || "Request error, please retry.");
                throw u;
              },
            },
            A,
          ),
        )),
          g.use((u, I) =>
            F(this, null, function*() {
              var C;
              yield I();
              const j = u.req,
                T = u.res;
              if ((C = j.options) === null || C === void 0 ? void 0 : C.skipErrorHandler) return;
              const m = j.options,
                M = m.getResponse,
                L = M ? T.data : T,
                D = y(L, u);
              if (D.success === !1) {
                const _ = new Error(D.errorMessage);
                throw ((_.name = "BizError"), (_.data = L), (_.info = D), _);
              }
            }),
          );
        const B = A.middlewares || [];
        B.forEach(u => {
          g.use(u);
        });
        const W = A.requestInterceptors || [],
          X = A.responseInterceptors || [];
        return (
          W.map(u => {
            g.interceptors.request.use(u);
          }),
          X.map(u => {
            g.interceptors.response.use(u);
          }),
          g
        );
      },
      U = (p, A) => {
        const y = x();
        return y(p, A);
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
      E = e("9kvl");
    a.default = () =>
      o.a.createElement(
        o.a.Fragment,
        null,
        o.a.createElement(E.a, null, o.a.createElement("title", null, "login")),
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
      E = (f = {}) => {
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
      E = e("9kvl"),
      f = e("sm/d"),
      v = e("o7/9"),
      R = e.n(v);
    let t = 0;
    const r = 6e3;
    a.default = () => {
      var n;
      const l = Object(i.useContext)(f.a),
        O = Object(E.e)(() => Object(E.d)("/topics", { params: { page: ~~(Math.random() * 99), limit: 1 } }), {
          refreshOnWindowFocus: !0,
        }),
        c = O.data,
        P = O.error,
        g = O.loading;
      return (
        Object(i.useEffect)(() => {
          console.log("ENV :>> ", "prod"), console.log("SERVER_PATH", "https://cnodejs.org/api/v1");
        }, []),
        Object(d.a)(() => {
          console.log("useMount");
        }),
        Object(i.useEffect)(() => {
          const x = window.setInterval(() => {
            l.dispatch({ type: "update", payload: ["blue", "red"][t++ % 2] });
          }, r);
          return () => {
            window.clearTimeout(x);
          };
        }, [l]),
        o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(E.a, null, o.a.createElement("title", null, l.state)),
          o.a.createElement(
            "div",
            { className: Object(s.a)(R.a.theme, R.a[l.state]) },
            c == null || (n = c[0]) === null || n === void 0 ? void 0 : n.title,
          ),
        )
      );
    };
  },
  I5X1: function(h, a, e) {
    "use strict";
    e.d(a, "a", function() {
      return R;
    });
    var i = e("tJVT"),
      o = e("cDcd"),
      d = e.n(o),
      s = e("aUsF"),
      E = e.n(s),
      f = e("FMtG"),
      v = e.n(f);
    function R(t, r) {
      const n = Object(o.useContext)(f.UmiContext),
        l = Object(o.useRef)(r);
      l.current = r;
      const O = Object(o.useState)(() => (l.current ? l.current(n.data[t]) : n.data[t])),
        c = Object(i.a)(O, 2),
        P = c[0],
        g = c[1],
        x = Object(o.useRef)(P);
      return (
        (x.current = P),
        Object(o.useEffect)(() => {
          const U = b => {
            if (r && l.current) {
              const p = l.current(b),
                A = x.current;
              E()(p, A) || g(p);
            } else g(b);
          };
          try {
            n.callbacks[t].add(U);
          } catch (b) {
            (n.callbacks[t] = new Set()), n.callbacks[t].add(U);
          }
          return () => {
            n.callbacks[t].delete(U);
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
    h.exports = { theme: "theme___yQy2E", red: "red___ROgao", blue: "blue___1YK0d" };
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
      E = e("PpiC");
    const f = {
      timeout: 3e4,
      prefix: "https://cnodejs.org/api/v1",
      errorConfig: {
        adaptor: m => {
          const M = m.success,
            L = m.error_msg,
            D = Object(E.a)(m, ["success", "error_msg"]);
          return S(S({}, D), { success: m.success, errorMessage: m.error_msg });
        },
      },
      middlewares: [],
      requestInterceptors: [],
      responseInterceptors: [],
    };
    var v = e("cDcd"),
      R = e.n(v),
      t = e("I5X1");
    if (typeof t.a != "function")
      throw new Error("[plugin-initial-state]: useModel is not a function, @umijs/plugin-model is required.");
    var r = m => {
      const M = m.children,
        L = Object(v.useRef)(!1),
        D = Object(t.a)("@@initialState") || {},
        _ = D.loading,
        N = _ === void 0 ? !1 : _;
      return (
        Object(v.useEffect)(() => {
          N || (L.current = !0);
        }, [N]),
        N && !L.current ? null : M
      );
    };
    function n(m) {
      return R.a.createElement(r, null, m);
    }
    var l = e("tJVT"),
      O = () => ({ loading: !1, refresh: () => {} }),
      c = e("7xWI"),
      P = e.n(c),
      g = e("sFpY"),
      x = e.n(g),
      U = e("FMtG");
    const b = { "@@initialState": O },
      p = new P.a(),
      A = x.a;
    var y = ({ children: m }) =>
      R.a.createElement(
        U.UmiContext.Provider,
        { value: p },
        Object.entries(b).map(M =>
          R.a.createElement(A, {
            key: M[0],
            namespace: M[0],
            hook: M[1],
            onUpdate: L => {
              const D = M,
                _ = Object(l.a)(D, 1),
                N = _[0];
              (p.data[N] = L), p.update(N);
            },
          }),
        ),
        m,
      );
    function B(m) {
      return R.a.createElement(y, null, m);
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
    const C = (m = {}) =>
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
      j = C();
    var T = (a.default = j());
    window.g_umi = { version: "3.2.20" };
  },
});
