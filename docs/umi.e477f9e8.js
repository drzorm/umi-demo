var I = Object.assign,
  F = (f, a, e) =>
    new Promise((i, o) => {
      var l = p => {
          try {
            m(e.next(p));
          } catch (v) {
            o(v);
          }
        },
        s = p => {
          try {
            m(e.throw(p));
          } catch (v) {
            o(v);
          }
        },
        m = p => (p.done ? i(p.value) : Promise.resolve(p.value).then(l, s));
      m((e = e.apply(f, a)).next());
    });
(function(f) {
  function a(t) {
    for (var n = t[0], r = t[1], d = t[2], h, O, P = 0, g = []; P < n.length; P++)
      (O = n[P]), Object.prototype.hasOwnProperty.call(o, O) && o[O] && g.push(o[O][0]), (o[O] = 0);
    for (h in r) Object.prototype.hasOwnProperty.call(r, h) && (f[h] = r[h]);
    for (R && R(t); g.length; ) g.shift()();
    return l.push.apply(l, d || []), e();
  }
  function e() {
    for (var t, n = 0; n < l.length; n++) {
      for (var r = l[n], d = !0, h = 1; h < r.length; h++) {
        var O = r[h];
        o[O] !== 0 && (d = !1);
      }
      d && (l.splice(n--, 1), (t = s((s.s = r[0]))));
    }
    return t;
  }
  var i = {},
    o = { 0: 0 },
    l = [];
  function s(t) {
    if (i[t]) return i[t].exports;
    var n = (i[t] = { i: t, l: !1, exports: {} });
    return f[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = f),
    (s.c = i),
    (s.d = function(t, n, r) {
      s.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
    }),
    (s.r = function(t) {
      typeof Symbol != "undefined" &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (s.t = function(t, n) {
      if ((n & 1 && (t = s(t)), n & 8)) return t;
      if (n & 4 && typeof t == "object" && t && t.__esModule) return t;
      var r = Object.create(null);
      if ((s.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), n & 2 && typeof t != "string"))
        for (var d in t)
          s.d(
            r,
            d,
            function(h) {
              return t[h];
            }.bind(null, d),
          );
      return r;
    }),
    (s.n = function(t) {
      var n =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return s.d(n, "a", n), n;
    }),
    (s.o = function(t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (s.p = "./");
  var m = (window.webpackJsonp = window.webpackJsonp || []),
    p = m.push.bind(m);
  (m.push = a), (m = m.slice());
  for (var v = 0; v < m.length; v++) a(m[v]);
  var R = p;
  return l.push([0, 1]), e();
})({
  "+ego": function(f, a, e) {
    "use strict";
    e.r(a);
    var i = e("cDcd"),
      o = e.n(i);
    const l = o.a.memo(r => o.a.createElement("div", { className: "layout" }, r.children));
    var s = l,
      m = e("tJVT"),
      p = e("sm/d");
    const v = (r, d) => {
        switch (d.type) {
          case "update":
            return d.payload;
          default:
            return r;
        }
      },
      R = Object(i.memo)(r => {
        const d = Object(i.useReducer)(v, "red"),
          h = Object(m.a)(d, 2),
          O = h[0],
          P = h[1];
        return o.a.createElement(p.a.Provider, { value: { state: O, dispatch: P } }, r.children);
      });
    var t = R,
      n = (a.default = Object(i.memo)(r => o.a.createElement(t, null, o.a.createElement(s, null, r.children))));
  },
  0: function(f, a, e) {
    f.exports = e("tB8F");
  },
  "2hfb": function(f, a, e) {},
  "9kvl": function(f, a, e) {
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
        return h;
      }),
      e.d(a, "a", function() {
        return N.a;
      });
    var i = e("FfOG"),
      o = e("bCY9");
    const l = 1;
    var s = e("I5X1"),
      m = e("/xke"),
      p = e("TeRw"),
      v = e("miYZ"),
      R = e("tsqr"),
      t = e("PpiC"),
      n = e("io9h"),
      r = e("LtsZ"),
      d = e("0iz5");
    function h(E, A = {}) {
      return Object(d.a)(
        E,
        I(
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
    let O;
    (function(E) {
      (E[(E.SILENT = 0)] = "SILENT"),
        (E[(E.WARN_MESSAGE = 1)] = "WARN_MESSAGE"),
        (E[(E.ERROR_MESSAGE = 2)] = "ERROR_MESSAGE"),
        (E[(E.NOTIFICATION = 4)] = "NOTIFICATION"),
        (E[(E.REDIRECT = 9)] = "REDIRECT");
    })(O || (O = {}));
    const P = "/exception";
    let g;
    const S = () => {
        var E;
        if (g) return g;
        const A = o.a.applyPlugins({ key: "request", type: r.ApplyPluginsType.modify, initialValue: {} }),
          y = ((E = A.errorConfig) === null || E === void 0 ? void 0 : E.adaptor) || (u => u);
        (g = Object(n.a)(
          I(
            {
              errorHandler: u => {
                var b, C, x;
                if (
                  u == null || (b = u.request) === null || b === void 0 || (C = b.options) === null || C === void 0
                    ? void 0
                    : C.skipErrorHandler
                )
                  throw u;
                let T;
                if (u.name === "ResponseError" && u.data && u.request) {
                  var c;
                  const _ = { req: u.request, res: u.response };
                  (T = y(u.data, _)),
                    (u.message = ((c = T) === null || c === void 0 ? void 0 : c.errorMessage) || u.message),
                    (u.data = u.data),
                    (u.info = T);
                }
                if (((T = u.info), T)) {
                  var M, L, D;
                  const _ = (M = T) === null || M === void 0 ? void 0 : M.errorMessage,
                    j = (L = T) === null || L === void 0 ? void 0 : L.errorCode,
                    K = ((D = A.errorConfig) === null || D === void 0 ? void 0 : D.errorPage) || P;
                  switch ((x = T) === null || x === void 0 ? void 0 : x.showType) {
                    case O.SILENT:
                      break;
                    case O.WARN_MESSAGE:
                      R.b.warn(_);
                      break;
                    case O.ERROR_MESSAGE:
                      R.b.error(_);
                      break;
                    case O.NOTIFICATION:
                      p.a.open({ message: _ });
                      break;
                    case O.REDIRECT:
                      i.b.push({ pathname: K, query: { errorCode: j, errorMessage: _ } });
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
          g.use((u, b) =>
            F(this, null, function*() {
              var C;
              yield b();
              const x = u.req,
                T = u.res;
              if ((C = x.options) === null || C === void 0 ? void 0 : C.skipErrorHandler) return;
              const c = x.options,
                M = c.getResponse,
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
      U = (E, A) => {
        const y = S();
        return y(E, A);
      };
    var N = e("qhky");
  },
  A8du: function(f, a, e) {
    "use strict";
    e.r(a);
    var i = e("cDcd"),
      o = e.n(i),
      l = e("2hfb"),
      s = e.n(l),
      m = e("9kvl");
    a.default = () =>
      o.a.createElement(
        o.a.Fragment,
        null,
        o.a.createElement(m.a, null, o.a.createElement("title", null, "login")),
        o.a.createElement("div", null, "login"),
      );
  },
  FfOG: function(f, a, e) {
    "use strict";
    e.d(a, "a", function() {
      return s;
    }),
      e.d(a, "b", function() {
        return l;
      });
    var i = e("YS25");
    let o = { basename: "/" };
    window.routerBase && (o.basename = window.routerBase);
    let l = Object({ NODE_ENV: "production" }).__IS_SERVER ? null : Object(i.b)(o);
    const s = (p = !1) => (p || (l = Object(i.b)(o)), l),
      m = (p = {}) => {
        o = I(I({}, o), p);
      };
  },
  GV2H: function(f, a, e) {
    "use strict";
    e.r(a);
    var i = e("cDcd"),
      o = e.n(i),
      l = e("ET/R"),
      s = e("iuhU"),
      m = e("9kvl"),
      p = e("sm/d"),
      v = e("o7/9"),
      R = e.n(v);
    let t = 0;
    a.default = () => {
      var n;
      const r = Object(i.useContext)(p.a),
        d = Object(m.e)(() => Object(m.d)("/topics", { params: { page: ~~(Math.random() * 99), limit: 1 } }), {
          pollingInterval: 6e3,
        }),
        h = d.data,
        O = d.error,
        P = d.loading;
      return (
        Object(i.useEffect)(() => {
          console.log("ENV :>> ", "prod"), console.log("SERVER_PATH", "https://cnodejs.org/api/v1");
        }, []),
        Object(l.a)(() => {
          console.log("useMount");
        }),
        Object(i.useEffect)(() => {
          const g = window.setInterval(() => {
            r.dispatch({ type: "update", payload: ["blue", "red"][t++ % 2] });
          }, 3e3);
          return () => {
            window.clearTimeout(g);
          };
        }, [r]),
        o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(m.a, null, o.a.createElement("title", null, r.state)),
          o.a.createElement(
            "div",
            { className: Object(s.a)(R.a.state, R.a[r.state]) },
            h == null || (n = h[0]) === null || n === void 0 ? void 0 : n.title,
          ),
        )
      );
    };
  },
  I5X1: function(f, a, e) {
    "use strict";
    e.d(a, "a", function() {
      return R;
    });
    var i = e("tJVT"),
      o = e("cDcd"),
      l = e.n(o),
      s = e("aUsF"),
      m = e.n(s),
      p = e("FMtG"),
      v = e.n(p);
    function R(t, n) {
      const r = Object(o.useContext)(p.UmiContext),
        d = Object(o.useRef)(n);
      d.current = n;
      const h = Object(o.useState)(() => (d.current ? d.current(r.data[t]) : r.data[t])),
        O = Object(i.a)(h, 2),
        P = O[0],
        g = O[1],
        S = Object(o.useRef)(P);
      return (
        (S.current = P),
        Object(o.useEffect)(() => {
          const U = N => {
            if (n && d.current) {
              const E = d.current(N),
                A = S.current;
              m()(E, A) || g(E);
            } else g(N);
          };
          try {
            r.callbacks[t].add(U);
          } catch (N) {
            (r.callbacks[t] = new Set()), r.callbacks[t].add(U);
          }
          return () => {
            r.callbacks[t].delete(U);
          };
        }, [t]),
        P
      );
    }
  },
  bCY9: function(f, a, e) {
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
  cDcd: function(f, a) {
    f.exports = window.React;
  },
  faye: function(f, a) {
    f.exports = window.ReactDOM;
  },
  "o7/9": function(f, a, e) {
    f.exports = { state: "state___3_TLw", red: "red___ROgao", blue: "blue___1YK0d" };
  },
  "sm/d": function(f, a, e) {
    "use strict";
    var i = e("cDcd"),
      o = e.n(i);
    const l = o.a.createContext({ state: "red", dispatch: s => {} });
    a.a = l;
  },
  tB8F: function(f, a, e) {
    "use strict";
    e.r(a);
    var i = {};
    e.r(i),
      e.d(i, "request", function() {
        return p;
      });
    var o = {};
    e.r(o),
      e.d(o, "rootContainer", function() {
        return r;
      });
    var l = {};
    e.r(l),
      e.d(l, "rootContainer", function() {
        return B;
      });
    var s = e("bCY9"),
      m = e("PpiC");
    const p = {
      timeout: 3e4,
      prefix: "https://cnodejs.org/api/v1",
      errorConfig: {
        adaptor: c => {
          const M = c.success,
            L = c.error_msg,
            D = Object(m.a)(c, ["success", "error_msg"]);
          return I(I({}, D), { success: c.success, errorMessage: c.error_msg });
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
    var n = c => {
      const M = c.children,
        L = Object(v.useRef)(!1),
        D = Object(t.a)("@@initialState") || {},
        _ = D.loading,
        j = _ === void 0 ? !1 : _;
      return (
        Object(v.useEffect)(() => {
          j || (L.current = !0);
        }, [j]),
        j && !L.current ? null : M
      );
    };
    function r(c) {
      return R.a.createElement(n, null, c);
    }
    var d = e("tJVT"),
      h = () => ({ loading: !1, refresh: () => {} }),
      O = e("7xWI"),
      P = e.n(O),
      g = e("sFpY"),
      S = e.n(g),
      U = e("FMtG");
    const N = { "@@initialState": h },
      E = new P.a(),
      A = S.a;
    var y = ({ children: c }) =>
      R.a.createElement(
        U.UmiContext.Provider,
        { value: E },
        Object.entries(N).map(M =>
          R.a.createElement(A, {
            key: M[0],
            namespace: M[0],
            hook: M[1],
            onUpdate: L => {
              const D = M,
                _ = Object(d.a)(D, 1),
                j = _[0];
              (E.data[j] = L), E.update(j);
            },
          }),
        ),
        c,
      );
    function B(c) {
      return R.a.createElement(y, null, c);
    }
    s.a.register({ apply: i, path: "F:/demo/umi-demo/src/app.ts" }),
      s.a.register({ apply: o, path: "../plugin-initial-state/runtime" }),
      s.a.register({ apply: l, path: "../plugin-model/runtime" });
    var W = e("FfOG"),
      X = e("LtsZ"),
      u = e("zlVK");
    function b() {
      const c = [
        {
          path: "/",
          component: e("+ego").default,
          routes: [
            { path: "/", exact: !0, component: e("GV2H").default },
            { path: "/login", exact: !0, component: e("A8du").default },
          ],
        },
      ];
      return s.a.applyPlugins({ key: "patchRoutes", type: X.ApplyPluginsType.event, args: { routes: c } }), c;
    }
    const C = (c = {}) =>
        s.a.applyPlugins({
          key: "render",
          type: X.ApplyPluginsType.compose,
          initialValue: () => {
            const M = s.a.applyPlugins({
              key: "modifyClientRenderOpts",
              type: X.ApplyPluginsType.modify,
              initialValue: {
                routes: c.routes || b(),
                plugin: s.a,
                history: Object(W.a)(c.hot),
                isServer: Object({ NODE_ENV: "production" }).__IS_SERVER,
                rootElement: "root",
              },
            });
            return Object(u.renderClient)(M);
          },
          args: c,
        }),
      x = C();
    var T = (a.default = x());
    window.g_umi = { version: "3.2.20" };
  },
});
