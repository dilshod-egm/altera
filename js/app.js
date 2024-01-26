(() => {
  var e = {
      211: function (e, t) {
        !(function (e) {
          "use strict";
          function t(e) {
            return s(e) && "function" == typeof e.from;
          }
          function s(e) {
            return "object" == typeof e && "function" == typeof e.to;
          }
          function i(e) {
            e.parentElement.removeChild(e);
          }
          function n(e) {
            return null != e;
          }
          function a(e) {
            e.preventDefault();
          }
          function r(e) {
            return e.filter(function (e) {
              return !this[e] && (this[e] = !0);
            }, {});
          }
          function o(e, t) {
            return Math.round(e / t) * t;
          }
          function l(e, t) {
            var s = e.getBoundingClientRect(),
              i = e.ownerDocument,
              n = i.documentElement,
              a = v(i);
            return (
              /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (a.x = 0),
              t ? s.top + a.y - n.clientTop : s.left + a.x - n.clientLeft
            );
          }
          function c(e) {
            return "number" == typeof e && !isNaN(e) && isFinite(e);
          }
          function d(e, t, s) {
            s > 0 &&
              (f(e, t),
              setTimeout(function () {
                m(e, t);
              }, s));
          }
          function u(e) {
            return Math.max(Math.min(e, 100), 0);
          }
          function p(e) {
            return Array.isArray(e) ? e : [e];
          }
          function h(e) {
            var t = (e = String(e)).split(".");
            return t.length > 1 ? t[1].length : 0;
          }
          function f(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.add(t)
              : (e.className += " " + t);
          }
          function m(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.remove(t)
              : (e.className = e.className.replace(
                  new RegExp(
                    "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                    "gi"
                  ),
                  " "
                ));
          }
          function g(e, t) {
            return e.classList
              ? e.classList.contains(t)
              : new RegExp("\\b" + t + "\\b").test(e.className);
          }
          function v(e) {
            var t = void 0 !== window.pageXOffset,
              s = "CSS1Compat" === (e.compatMode || "");
            return {
              x: t
                ? window.pageXOffset
                : s
                ? e.documentElement.scrollLeft
                : e.body.scrollLeft,
              y: t
                ? window.pageYOffset
                : s
                ? e.documentElement.scrollTop
                : e.body.scrollTop,
            };
          }
          function b() {
            return window.navigator.pointerEnabled
              ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
              : window.navigator.msPointerEnabled
              ? {
                  start: "MSPointerDown",
                  move: "MSPointerMove",
                  end: "MSPointerUp",
                }
              : {
                  start: "mousedown touchstart",
                  move: "mousemove touchmove",
                  end: "mouseup touchend",
                };
          }
          function w() {
            var e = !1;
            try {
              var t = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0;
                },
              });
              window.addEventListener("test", null, t);
            } catch (e) {}
            return e;
          }
          function S() {
            return (
              window.CSS && CSS.supports && CSS.supports("touch-action", "none")
            );
          }
          function y(e, t) {
            return 100 / (t - e);
          }
          function x(e, t, s) {
            return (100 * t) / (e[s + 1] - e[s]);
          }
          function C(e, t) {
            return x(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0], 0);
          }
          function E(e, t) {
            return (t * (e[1] - e[0])) / 100 + e[0];
          }
          function T(e, t) {
            for (var s = 1; e >= t[s]; ) s += 1;
            return s;
          }
          function P(e, t, s) {
            if (s >= e.slice(-1)[0]) return 100;
            var i = T(s, e),
              n = e[i - 1],
              a = e[i],
              r = t[i - 1],
              o = t[i];
            return r + C([n, a], s) / y(r, o);
          }
          function _(e, t, s) {
            if (s >= 100) return e.slice(-1)[0];
            var i = T(s, t),
              n = e[i - 1],
              a = e[i],
              r = t[i - 1];
            return E([n, a], (s - r) * y(r, t[i]));
          }
          function L(e, t, s, i) {
            if (100 === i) return i;
            var n = T(i, e),
              a = e[n - 1],
              r = e[n];
            return s
              ? i - a > (r - a) / 2
                ? r
                : a
              : t[n - 1]
              ? e[n - 1] + o(i - e[n - 1], t[n - 1])
              : i;
          }
          var A, k;
          (e.PipsMode = void 0),
            ((k = e.PipsMode || (e.PipsMode = {})).Range = "range"),
            (k.Steps = "steps"),
            (k.Positions = "positions"),
            (k.Count = "count"),
            (k.Values = "values"),
            (e.PipsType = void 0),
            ((A = e.PipsType || (e.PipsType = {}))[(A.None = -1)] = "None"),
            (A[(A.NoValue = 0)] = "NoValue"),
            (A[(A.LargeValue = 1)] = "LargeValue"),
            (A[(A.SmallValue = 2)] = "SmallValue");
          var M = (function () {
              function e(e, t, s) {
                var i;
                (this.xPct = []),
                  (this.xVal = []),
                  (this.xSteps = []),
                  (this.xNumSteps = []),
                  (this.xHighestCompleteStep = []),
                  (this.xSteps = [s || !1]),
                  (this.xNumSteps = [!1]),
                  (this.snap = t);
                var n = [];
                for (
                  Object.keys(e).forEach(function (t) {
                    n.push([p(e[t]), t]);
                  }),
                    n.sort(function (e, t) {
                      return e[0][0] - t[0][0];
                    }),
                    i = 0;
                  i < n.length;
                  i++
                )
                  this.handleEntryPoint(n[i][1], n[i][0]);
                for (
                  this.xNumSteps = this.xSteps.slice(0), i = 0;
                  i < this.xNumSteps.length;
                  i++
                )
                  this.handleStepPoint(i, this.xNumSteps[i]);
              }
              return (
                (e.prototype.getDistance = function (e) {
                  for (var t = [], s = 0; s < this.xNumSteps.length - 1; s++)
                    t[s] = x(this.xVal, e, s);
                  return t;
                }),
                (e.prototype.getAbsoluteDistance = function (e, t, s) {
                  var i,
                    n = 0;
                  if (e < this.xPct[this.xPct.length - 1])
                    for (; e > this.xPct[n + 1]; ) n++;
                  else
                    e === this.xPct[this.xPct.length - 1] &&
                      (n = this.xPct.length - 2);
                  s || e !== this.xPct[n + 1] || n++, null === t && (t = []);
                  var a = 1,
                    r = t[n],
                    o = 0,
                    l = 0,
                    c = 0,
                    d = 0;
                  for (
                    i = s
                      ? (e - this.xPct[n]) / (this.xPct[n + 1] - this.xPct[n])
                      : (this.xPct[n + 1] - e) /
                        (this.xPct[n + 1] - this.xPct[n]);
                    r > 0;

                  )
                    (o = this.xPct[n + 1 + d] - this.xPct[n + d]),
                      t[n + d] * a + 100 - 100 * i > 100
                        ? ((l = o * i), (a = (r - 100 * i) / t[n + d]), (i = 1))
                        : ((l = ((t[n + d] * o) / 100) * a), (a = 0)),
                      s
                        ? ((c -= l), this.xPct.length + d >= 1 && d--)
                        : ((c += l), this.xPct.length - d >= 1 && d++),
                      (r = t[n + d] * a);
                  return e + c;
                }),
                (e.prototype.toStepping = function (e) {
                  return (e = P(this.xVal, this.xPct, e));
                }),
                (e.prototype.fromStepping = function (e) {
                  return _(this.xVal, this.xPct, e);
                }),
                (e.prototype.getStep = function (e) {
                  return (e = L(this.xPct, this.xSteps, this.snap, e));
                }),
                (e.prototype.getDefaultStep = function (e, t, s) {
                  var i = T(e, this.xPct);
                  return (
                    (100 === e || (t && e === this.xPct[i - 1])) &&
                      (i = Math.max(i - 1, 1)),
                    (this.xVal[i] - this.xVal[i - 1]) / s
                  );
                }),
                (e.prototype.getNearbySteps = function (e) {
                  var t = T(e, this.xPct);
                  return {
                    stepBefore: {
                      startValue: this.xVal[t - 2],
                      step: this.xNumSteps[t - 2],
                      highestStep: this.xHighestCompleteStep[t - 2],
                    },
                    thisStep: {
                      startValue: this.xVal[t - 1],
                      step: this.xNumSteps[t - 1],
                      highestStep: this.xHighestCompleteStep[t - 1],
                    },
                    stepAfter: {
                      startValue: this.xVal[t],
                      step: this.xNumSteps[t],
                      highestStep: this.xHighestCompleteStep[t],
                    },
                  };
                }),
                (e.prototype.countStepDecimals = function () {
                  var e = this.xNumSteps.map(h);
                  return Math.max.apply(null, e);
                }),
                (e.prototype.hasNoSize = function () {
                  return this.xVal[0] === this.xVal[this.xVal.length - 1];
                }),
                (e.prototype.convert = function (e) {
                  return this.getStep(this.toStepping(e));
                }),
                (e.prototype.handleEntryPoint = function (e, t) {
                  var s;
                  if (
                    !c(
                      (s = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e))
                    ) ||
                    !c(t[0])
                  )
                    throw new Error("noUiSlider: 'range' value isn't numeric.");
                  this.xPct.push(s), this.xVal.push(t[0]);
                  var i = Number(t[1]);
                  s
                    ? this.xSteps.push(!isNaN(i) && i)
                    : isNaN(i) || (this.xSteps[0] = i),
                    this.xHighestCompleteStep.push(0);
                }),
                (e.prototype.handleStepPoint = function (e, t) {
                  if (t)
                    if (this.xVal[e] !== this.xVal[e + 1]) {
                      this.xSteps[e] =
                        x([this.xVal[e], this.xVal[e + 1]], t, 0) /
                        y(this.xPct[e], this.xPct[e + 1]);
                      var s =
                          (this.xVal[e + 1] - this.xVal[e]) / this.xNumSteps[e],
                        i = Math.ceil(Number(s.toFixed(3)) - 1),
                        n = this.xVal[e] + this.xNumSteps[e] * i;
                      this.xHighestCompleteStep[e] = n;
                    } else
                      this.xSteps[e] = this.xHighestCompleteStep[e] =
                        this.xVal[e];
                }),
                e
              );
            })(),
            O = {
              to: function (e) {
                return void 0 === e ? "" : e.toFixed(2);
              },
              from: Number,
            },
            $ = {
              target: "target",
              base: "base",
              origin: "origin",
              handle: "handle",
              handleLower: "handle-lower",
              handleUpper: "handle-upper",
              touchArea: "touch-area",
              horizontal: "horizontal",
              vertical: "vertical",
              background: "background",
              connect: "connect",
              connects: "connects",
              ltr: "ltr",
              rtl: "rtl",
              textDirectionLtr: "txt-dir-ltr",
              textDirectionRtl: "txt-dir-rtl",
              draggable: "draggable",
              drag: "state-drag",
              tap: "state-tap",
              active: "active",
              tooltip: "tooltip",
              pips: "pips",
              pipsHorizontal: "pips-horizontal",
              pipsVertical: "pips-vertical",
              marker: "marker",
              markerHorizontal: "marker-horizontal",
              markerVertical: "marker-vertical",
              markerNormal: "marker-normal",
              markerLarge: "marker-large",
              markerSub: "marker-sub",
              value: "value",
              valueHorizontal: "value-horizontal",
              valueVertical: "value-vertical",
              valueNormal: "value-normal",
              valueLarge: "value-large",
              valueSub: "value-sub",
            },
            B = { tooltips: ".__tooltips", aria: ".__aria" };
          function N(e, t) {
            if (!c(t)) throw new Error("noUiSlider: 'step' is not numeric.");
            e.singleStep = t;
          }
          function V(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardPageMultiplier' is not numeric."
              );
            e.keyboardPageMultiplier = t;
          }
          function D(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardMultiplier' is not numeric."
              );
            e.keyboardMultiplier = t;
          }
          function q(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardDefaultStep' is not numeric."
              );
            e.keyboardDefaultStep = t;
          }
          function z(e, t) {
            if ("object" != typeof t || Array.isArray(t))
              throw new Error("noUiSlider: 'range' is not an object.");
            if (void 0 === t.min || void 0 === t.max)
              throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
            e.spectrum = new M(t, e.snap || !1, e.singleStep);
          }
          function I(e, t) {
            if (((t = p(t)), !Array.isArray(t) || !t.length))
              throw new Error("noUiSlider: 'start' option is incorrect.");
            (e.handles = t.length), (e.start = t);
          }
          function H(e, t) {
            if ("boolean" != typeof t)
              throw new Error("noUiSlider: 'snap' option must be a boolean.");
            e.snap = t;
          }
          function j(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'animate' option must be a boolean."
              );
            e.animate = t;
          }
          function G(e, t) {
            if ("number" != typeof t)
              throw new Error(
                "noUiSlider: 'animationDuration' option must be a number."
              );
            e.animationDuration = t;
          }
          function F(e, t) {
            var s,
              i = [!1];
            if (
              ("lower" === t ? (t = [!0, !1]) : "upper" === t && (t = [!1, !0]),
              !0 === t || !1 === t)
            ) {
              for (s = 1; s < e.handles; s++) i.push(t);
              i.push(!1);
            } else {
              if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1)
                throw new Error(
                  "noUiSlider: 'connect' option doesn't match handle count."
                );
              i = t;
            }
            e.connect = i;
          }
          function U(e, t) {
            switch (t) {
              case "horizontal":
                e.ort = 0;
                break;
              case "vertical":
                e.ort = 1;
                break;
              default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
            }
          }
          function R(e, t) {
            if (!c(t))
              throw new Error("noUiSlider: 'margin' option must be numeric.");
            0 !== t && (e.margin = e.spectrum.getDistance(t));
          }
          function W(e, t) {
            if (!c(t))
              throw new Error("noUiSlider: 'limit' option must be numeric.");
            if (
              ((e.limit = e.spectrum.getDistance(t)), !e.limit || e.handles < 2)
            )
              throw new Error(
                "noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles."
              );
          }
          function X(e, t) {
            var s;
            if (!c(t) && !Array.isArray(t))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (Array.isArray(t) && 2 !== t.length && !c(t[0]) && !c(t[1]))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (0 !== t) {
              for (
                Array.isArray(t) || (t = [t, t]),
                  e.padding = [
                    e.spectrum.getDistance(t[0]),
                    e.spectrum.getDistance(t[1]),
                  ],
                  s = 0;
                s < e.spectrum.xNumSteps.length - 1;
                s++
              )
                if (e.padding[0][s] < 0 || e.padding[1][s] < 0)
                  throw new Error(
                    "noUiSlider: 'padding' option must be a positive number(s)."
                  );
              var i = t[0] + t[1],
                n = e.spectrum.xVal[0];
              if (i / (e.spectrum.xVal[e.spectrum.xVal.length - 1] - n) > 1)
                throw new Error(
                  "noUiSlider: 'padding' option must not exceed 100% of the range."
                );
            }
          }
          function Y(e, t) {
            switch (t) {
              case "ltr":
                e.dir = 0;
                break;
              case "rtl":
                e.dir = 1;
                break;
              default:
                throw new Error(
                  "noUiSlider: 'direction' option was not recognized."
                );
            }
          }
          function K(e, t) {
            if ("string" != typeof t)
              throw new Error(
                "noUiSlider: 'behaviour' must be a string containing options."
              );
            var s = t.indexOf("tap") >= 0,
              i = t.indexOf("drag") >= 0,
              n = t.indexOf("fixed") >= 0,
              a = t.indexOf("snap") >= 0,
              r = t.indexOf("hover") >= 0,
              o = t.indexOf("unconstrained") >= 0,
              l = t.indexOf("drag-all") >= 0;
            if (n) {
              if (2 !== e.handles)
                throw new Error(
                  "noUiSlider: 'fixed' behaviour must be used with 2 handles"
                );
              R(e, e.start[1] - e.start[0]);
            }
            if (o && (e.margin || e.limit))
              throw new Error(
                "noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit"
              );
            e.events = {
              tap: s || a,
              drag: i,
              dragAll: l,
              fixed: n,
              snap: a,
              hover: r,
              unconstrained: o,
            };
          }
          function Q(e, t) {
            if (!1 !== t)
              if (!0 === t || s(t)) {
                e.tooltips = [];
                for (var i = 0; i < e.handles; i++) e.tooltips.push(t);
              } else {
                if ((t = p(t)).length !== e.handles)
                  throw new Error(
                    "noUiSlider: must pass a formatter for all handles."
                  );
                t.forEach(function (e) {
                  if ("boolean" != typeof e && !s(e))
                    throw new Error(
                      "noUiSlider: 'tooltips' must be passed a formatter or 'false'."
                    );
                }),
                  (e.tooltips = t);
              }
          }
          function Z(e, t) {
            if (t.length !== e.handles)
              throw new Error(
                "noUiSlider: must pass a attributes for all handles."
              );
            e.handleAttributes = t;
          }
          function J(e, t) {
            if (!s(t))
              throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
            e.ariaFormat = t;
          }
          function ee(e, s) {
            if (!t(s))
              throw new Error(
                "noUiSlider: 'format' requires 'to' and 'from' methods."
              );
            e.format = s;
          }
          function te(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'keyboardSupport' option must be a boolean."
              );
            e.keyboardSupport = t;
          }
          function se(e, t) {
            e.documentElement = t;
          }
          function ie(e, t) {
            if ("string" != typeof t && !1 !== t)
              throw new Error(
                "noUiSlider: 'cssPrefix' must be a string or `false`."
              );
            e.cssPrefix = t;
          }
          function ne(e, t) {
            if ("object" != typeof t)
              throw new Error("noUiSlider: 'cssClasses' must be an object.");
            "string" == typeof e.cssPrefix
              ? ((e.cssClasses = {}),
                Object.keys(t).forEach(function (s) {
                  e.cssClasses[s] = e.cssPrefix + t[s];
                }))
              : (e.cssClasses = t);
          }
          function ae(e) {
            var t = {
                margin: null,
                limit: null,
                padding: null,
                animate: !0,
                animationDuration: 300,
                ariaFormat: O,
                format: O,
              },
              s = {
                step: { r: !1, t: N },
                keyboardPageMultiplier: { r: !1, t: V },
                keyboardMultiplier: { r: !1, t: D },
                keyboardDefaultStep: { r: !1, t: q },
                start: { r: !0, t: I },
                connect: { r: !0, t: F },
                direction: { r: !0, t: Y },
                snap: { r: !1, t: H },
                animate: { r: !1, t: j },
                animationDuration: { r: !1, t: G },
                range: { r: !0, t: z },
                orientation: { r: !1, t: U },
                margin: { r: !1, t: R },
                limit: { r: !1, t: W },
                padding: { r: !1, t: X },
                behaviour: { r: !0, t: K },
                ariaFormat: { r: !1, t: J },
                format: { r: !1, t: ee },
                tooltips: { r: !1, t: Q },
                keyboardSupport: { r: !0, t: te },
                documentElement: { r: !1, t: se },
                cssPrefix: { r: !0, t: ie },
                cssClasses: { r: !0, t: ne },
                handleAttributes: { r: !1, t: Z },
              },
              i = {
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                keyboardSupport: !0,
                cssPrefix: "noUi-",
                cssClasses: $,
                keyboardPageMultiplier: 5,
                keyboardMultiplier: 1,
                keyboardDefaultStep: 10,
              };
            e.format && !e.ariaFormat && (e.ariaFormat = e.format),
              Object.keys(s).forEach(function (a) {
                if (n(e[a]) || void 0 !== i[a])
                  s[a].t(t, n(e[a]) ? e[a] : i[a]);
                else if (s[a].r)
                  throw new Error("noUiSlider: '" + a + "' is required.");
              }),
              (t.pips = e.pips);
            var a = document.createElement("div"),
              r = void 0 !== a.style.msTransform,
              o = void 0 !== a.style.transform;
            t.transformRule = o
              ? "transform"
              : r
              ? "msTransform"
              : "webkitTransform";
            var l = [
              ["left", "top"],
              ["right", "bottom"],
            ];
            return (t.style = l[t.dir][t.ort]), t;
          }
          function re(t, s, o) {
            var c,
              h,
              y,
              x,
              C,
              E = b(),
              T = S() && w(),
              P = t,
              _ = s.spectrum,
              L = [],
              A = [],
              k = [],
              M = 0,
              O = {},
              $ = t.ownerDocument,
              N = s.documentElement || $.documentElement,
              V = $.body,
              D = "rtl" === $.dir || 1 === s.ort ? 0 : 100;
            function q(e, t) {
              var s = $.createElement("div");
              return t && f(s, t), e.appendChild(s), s;
            }
            function z(e, t) {
              var i = q(e, s.cssClasses.origin),
                n = q(i, s.cssClasses.handle);
              if (
                (q(n, s.cssClasses.touchArea),
                n.setAttribute("data-handle", String(t)),
                s.keyboardSupport &&
                  (n.setAttribute("tabindex", "0"),
                  n.addEventListener("keydown", function (e) {
                    return he(e, t);
                  })),
                void 0 !== s.handleAttributes)
              ) {
                var a = s.handleAttributes[t];
                Object.keys(a).forEach(function (e) {
                  n.setAttribute(e, a[e]);
                });
              }
              return (
                n.setAttribute("role", "slider"),
                n.setAttribute(
                  "aria-orientation",
                  s.ort ? "vertical" : "horizontal"
                ),
                0 === t
                  ? f(n, s.cssClasses.handleLower)
                  : t === s.handles - 1 && f(n, s.cssClasses.handleUpper),
                i
              );
            }
            function I(e, t) {
              return !!t && q(e, s.cssClasses.connect);
            }
            function H(e, t) {
              var i = q(t, s.cssClasses.connects);
              (h = []), (y = []).push(I(i, e[0]));
              for (var n = 0; n < s.handles; n++)
                h.push(z(t, n)), (k[n] = n), y.push(I(i, e[n + 1]));
            }
            function j(e) {
              return (
                f(e, s.cssClasses.target),
                0 === s.dir ? f(e, s.cssClasses.ltr) : f(e, s.cssClasses.rtl),
                0 === s.ort
                  ? f(e, s.cssClasses.horizontal)
                  : f(e, s.cssClasses.vertical),
                f(
                  e,
                  "rtl" === getComputedStyle(e).direction
                    ? s.cssClasses.textDirectionRtl
                    : s.cssClasses.textDirectionLtr
                ),
                q(e, s.cssClasses.base)
              );
            }
            function G(e, t) {
              return (
                !(!s.tooltips || !s.tooltips[t]) &&
                q(e.firstChild, s.cssClasses.tooltip)
              );
            }
            function F() {
              return P.hasAttribute("disabled");
            }
            function U(e) {
              return h[e].hasAttribute("disabled");
            }
            function R() {
              C &&
                (ve("update" + B.tooltips),
                C.forEach(function (e) {
                  e && i(e);
                }),
                (C = null));
            }
            function W() {
              R(),
                (C = h.map(G)),
                me("update" + B.tooltips, function (e, t, i) {
                  if (C && s.tooltips && !1 !== C[t]) {
                    var n = e[t];
                    !0 !== s.tooltips[t] && (n = s.tooltips[t].to(i[t])),
                      (C[t].innerHTML = n);
                  }
                });
            }
            function X() {
              ve("update" + B.aria),
                me("update" + B.aria, function (e, t, i, n, a) {
                  k.forEach(function (e) {
                    var t = h[e],
                      n = we(A, e, 0, !0, !0, !0),
                      r = we(A, e, 100, !0, !0, !0),
                      o = a[e],
                      l = String(s.ariaFormat.to(i[e]));
                    (n = _.fromStepping(n).toFixed(1)),
                      (r = _.fromStepping(r).toFixed(1)),
                      (o = _.fromStepping(o).toFixed(1)),
                      t.children[0].setAttribute("aria-valuemin", n),
                      t.children[0].setAttribute("aria-valuemax", r),
                      t.children[0].setAttribute("aria-valuenow", o),
                      t.children[0].setAttribute("aria-valuetext", l);
                  });
                });
            }
            function Y(t) {
              if (t.mode === e.PipsMode.Range || t.mode === e.PipsMode.Steps)
                return _.xVal;
              if (t.mode === e.PipsMode.Count) {
                if (t.values < 2)
                  throw new Error(
                    "noUiSlider: 'values' (>= 2) required for mode 'count'."
                  );
                for (var s = t.values - 1, i = 100 / s, n = []; s--; )
                  n[s] = s * i;
                return n.push(100), K(n, t.stepped);
              }
              return t.mode === e.PipsMode.Positions
                ? K(t.values, t.stepped)
                : t.mode === e.PipsMode.Values
                ? t.stepped
                  ? t.values.map(function (e) {
                      return _.fromStepping(_.getStep(_.toStepping(e)));
                    })
                  : t.values
                : [];
            }
            function K(e, t) {
              return e.map(function (e) {
                return _.fromStepping(t ? _.getStep(e) : e);
              });
            }
            function Q(t) {
              function s(e, t) {
                return Number((e + t).toFixed(7));
              }
              var i = Y(t),
                n = {},
                a = _.xVal[0],
                o = _.xVal[_.xVal.length - 1],
                l = !1,
                c = !1,
                d = 0;
              return (
                (i = r(
                  i.slice().sort(function (e, t) {
                    return e - t;
                  })
                ))[0] !== a && (i.unshift(a), (l = !0)),
                i[i.length - 1] !== o && (i.push(o), (c = !0)),
                i.forEach(function (a, r) {
                  var o,
                    u,
                    p,
                    h,
                    f,
                    m,
                    g,
                    v,
                    b,
                    w,
                    S = a,
                    y = i[r + 1],
                    x = t.mode === e.PipsMode.Steps;
                  for (
                    x && (o = _.xNumSteps[r]),
                      o || (o = y - S),
                      void 0 === y && (y = S),
                      o = Math.max(o, 1e-7),
                      u = S;
                    u <= y;
                    u = s(u, o)
                  ) {
                    for (
                      v = (f = (h = _.toStepping(u)) - d) / (t.density || 1),
                        w = f / (b = Math.round(v)),
                        p = 1;
                      p <= b;
                      p += 1
                    )
                      n[(m = d + p * w).toFixed(5)] = [_.fromStepping(m), 0];
                    (g =
                      i.indexOf(u) > -1
                        ? e.PipsType.LargeValue
                        : x
                        ? e.PipsType.SmallValue
                        : e.PipsType.NoValue),
                      !r && l && u !== y && (g = 0),
                      (u === y && c) || (n[h.toFixed(5)] = [u, g]),
                      (d = h);
                  }
                }),
                n
              );
            }
            function Z(t, i, n) {
              var a,
                r,
                o = $.createElement("div"),
                l =
                  (((a = {})[e.PipsType.None] = ""),
                  (a[e.PipsType.NoValue] = s.cssClasses.valueNormal),
                  (a[e.PipsType.LargeValue] = s.cssClasses.valueLarge),
                  (a[e.PipsType.SmallValue] = s.cssClasses.valueSub),
                  a),
                c =
                  (((r = {})[e.PipsType.None] = ""),
                  (r[e.PipsType.NoValue] = s.cssClasses.markerNormal),
                  (r[e.PipsType.LargeValue] = s.cssClasses.markerLarge),
                  (r[e.PipsType.SmallValue] = s.cssClasses.markerSub),
                  r),
                d = [s.cssClasses.valueHorizontal, s.cssClasses.valueVertical],
                u = [
                  s.cssClasses.markerHorizontal,
                  s.cssClasses.markerVertical,
                ];
              function p(e, t) {
                var i = t === s.cssClasses.value,
                  n = i ? l : c;
                return t + " " + (i ? d : u)[s.ort] + " " + n[e];
              }
              function h(t, a, r) {
                if ((r = i ? i(a, r) : r) !== e.PipsType.None) {
                  var l = q(o, !1);
                  (l.className = p(r, s.cssClasses.marker)),
                    (l.style[s.style] = t + "%"),
                    r > e.PipsType.NoValue &&
                      (((l = q(o, !1)).className = p(r, s.cssClasses.value)),
                      l.setAttribute("data-value", String(a)),
                      (l.style[s.style] = t + "%"),
                      (l.innerHTML = String(n.to(a))));
                }
              }
              return (
                f(o, s.cssClasses.pips),
                f(
                  o,
                  0 === s.ort
                    ? s.cssClasses.pipsHorizontal
                    : s.cssClasses.pipsVertical
                ),
                Object.keys(t).forEach(function (e) {
                  h(e, t[e][0], t[e][1]);
                }),
                o
              );
            }
            function J() {
              x && (i(x), (x = null));
            }
            function ee(e) {
              J();
              var t = Q(e),
                s = e.filter,
                i = e.format || {
                  to: function (e) {
                    return String(Math.round(e));
                  },
                };
              return (x = P.appendChild(Z(t, s, i)));
            }
            function te() {
              var e = c.getBoundingClientRect(),
                t = "offset" + ["Width", "Height"][s.ort];
              return 0 === s.ort ? e.width || c[t] : e.height || c[t];
            }
            function se(e, t, i, n) {
              var a = function (a) {
                  var r = ie(a, n.pageOffset, n.target || t);
                  return (
                    !!r &&
                    !(F() && !n.doNotReject) &&
                    !(g(P, s.cssClasses.tap) && !n.doNotReject) &&
                    !(e === E.start && void 0 !== r.buttons && r.buttons > 1) &&
                    (!n.hover || !r.buttons) &&
                    (T || r.preventDefault(),
                    (r.calcPoint = r.points[s.ort]),
                    void i(r, n))
                  );
                },
                r = [];
              return (
                e.split(" ").forEach(function (e) {
                  t.addEventListener(e, a, !!T && { passive: !0 }),
                    r.push([e, a]);
                }),
                r
              );
            }
            function ie(e, t, s) {
              var i = 0 === e.type.indexOf("touch"),
                n = 0 === e.type.indexOf("mouse"),
                a = 0 === e.type.indexOf("pointer"),
                r = 0,
                o = 0;
              if (
                (0 === e.type.indexOf("MSPointer") && (a = !0),
                "mousedown" === e.type && !e.buttons && !e.touches)
              )
                return !1;
              if (i) {
                var l = function (t) {
                  var i = t.target;
                  return (
                    i === s ||
                    s.contains(i) ||
                    (e.composed && e.composedPath().shift() === s)
                  );
                };
                if ("touchstart" === e.type) {
                  var c = Array.prototype.filter.call(e.touches, l);
                  if (c.length > 1) return !1;
                  (r = c[0].pageX), (o = c[0].pageY);
                } else {
                  var d = Array.prototype.find.call(e.changedTouches, l);
                  if (!d) return !1;
                  (r = d.pageX), (o = d.pageY);
                }
              }
              return (
                (t = t || v($)),
                (n || a) && ((r = e.clientX + t.x), (o = e.clientY + t.y)),
                (e.pageOffset = t),
                (e.points = [r, o]),
                (e.cursor = n || a),
                e
              );
            }
            function ne(e) {
              var t = (100 * (e - l(c, s.ort))) / te();
              return (t = u(t)), s.dir ? 100 - t : t;
            }
            function re(e) {
              var t = 100,
                s = !1;
              return (
                h.forEach(function (i, n) {
                  if (!U(n)) {
                    var a = A[n],
                      r = Math.abs(a - e);
                    (r < t || (r <= t && e > a) || (100 === r && 100 === t)) &&
                      ((s = n), (t = r));
                  }
                }),
                s
              );
            }
            function oe(e, t) {
              "mouseout" === e.type &&
                "HTML" === e.target.nodeName &&
                null === e.relatedTarget &&
                ce(e, t);
            }
            function le(e, t) {
              if (
                -1 === navigator.appVersion.indexOf("MSIE 9") &&
                0 === e.buttons &&
                0 !== t.buttonsProperty
              )
                return ce(e, t);
              var i = (s.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint);
              ye(
                i > 0,
                (100 * i) / t.baseSize,
                t.locations,
                t.handleNumbers,
                t.connect
              );
            }
            function ce(e, t) {
              t.handle && (m(t.handle, s.cssClasses.active), (M -= 1)),
                t.listeners.forEach(function (e) {
                  N.removeEventListener(e[0], e[1]);
                }),
                0 === M &&
                  (m(P, s.cssClasses.drag),
                  Ee(),
                  e.cursor &&
                    ((V.style.cursor = ""),
                    V.removeEventListener("selectstart", a))),
                t.handleNumbers.forEach(function (e) {
                  be("change", e), be("set", e), be("end", e);
                });
            }
            function de(e, t) {
              if (!t.handleNumbers.some(U)) {
                var i;
                1 === t.handleNumbers.length &&
                  ((i = h[t.handleNumbers[0]].children[0]),
                  (M += 1),
                  f(i, s.cssClasses.active)),
                  e.stopPropagation();
                var n = [],
                  r = se(E.move, N, le, {
                    target: e.target,
                    handle: i,
                    connect: t.connect,
                    listeners: n,
                    startCalcPoint: e.calcPoint,
                    baseSize: te(),
                    pageOffset: e.pageOffset,
                    handleNumbers: t.handleNumbers,
                    buttonsProperty: e.buttons,
                    locations: A.slice(),
                  }),
                  o = se(E.end, N, ce, {
                    target: e.target,
                    handle: i,
                    listeners: n,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  }),
                  l = se("mouseout", N, oe, {
                    target: e.target,
                    handle: i,
                    listeners: n,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  });
                n.push.apply(n, r.concat(o, l)),
                  e.cursor &&
                    ((V.style.cursor = getComputedStyle(e.target).cursor),
                    h.length > 1 && f(P, s.cssClasses.drag),
                    V.addEventListener("selectstart", a, !1)),
                  t.handleNumbers.forEach(function (e) {
                    be("start", e);
                  });
              }
            }
            function ue(e) {
              e.stopPropagation();
              var t = ne(e.calcPoint),
                i = re(t);
              !1 !== i &&
                (s.events.snap || d(P, s.cssClasses.tap, s.animationDuration),
                Te(i, t, !0, !0),
                Ee(),
                be("slide", i, !0),
                be("update", i, !0),
                s.events.snap
                  ? de(e, { handleNumbers: [i] })
                  : (be("change", i, !0), be("set", i, !0)));
            }
            function pe(e) {
              var t = ne(e.calcPoint),
                s = _.getStep(t),
                i = _.fromStepping(s);
              Object.keys(O).forEach(function (e) {
                "hover" === e.split(".")[0] &&
                  O[e].forEach(function (e) {
                    e.call(De, i);
                  });
              });
            }
            function he(e, t) {
              if (F() || U(t)) return !1;
              var i = ["Left", "Right"],
                n = ["Down", "Up"],
                a = ["PageDown", "PageUp"],
                r = ["Home", "End"];
              s.dir && !s.ort
                ? i.reverse()
                : s.ort && !s.dir && (n.reverse(), a.reverse());
              var o,
                l = e.key.replace("Arrow", ""),
                c = l === a[0],
                d = l === a[1],
                u = l === n[0] || l === i[0] || c,
                p = l === n[1] || l === i[1] || d,
                h = l === r[0],
                f = l === r[1];
              if (!(u || p || h || f)) return !0;
              if ((e.preventDefault(), p || u)) {
                var m = u ? 0 : 1,
                  g = $e(t)[m];
                if (null === g) return !1;
                !1 === g &&
                  (g = _.getDefaultStep(A[t], u, s.keyboardDefaultStep)),
                  (g *=
                    d || c ? s.keyboardPageMultiplier : s.keyboardMultiplier),
                  (g = Math.max(g, 1e-7)),
                  (g *= u ? -1 : 1),
                  (o = L[t] + g);
              } else
                o = f
                  ? s.spectrum.xVal[s.spectrum.xVal.length - 1]
                  : s.spectrum.xVal[0];
              return (
                Te(t, _.toStepping(o), !0, !0),
                be("slide", t),
                be("update", t),
                be("change", t),
                be("set", t),
                !1
              );
            }
            function fe(e) {
              e.fixed ||
                h.forEach(function (e, t) {
                  se(E.start, e.children[0], de, { handleNumbers: [t] });
                }),
                e.tap && se(E.start, c, ue, {}),
                e.hover && se(E.move, c, pe, { hover: !0 }),
                e.drag &&
                  y.forEach(function (t, i) {
                    if (!1 !== t && 0 !== i && i !== y.length - 1) {
                      var n = h[i - 1],
                        a = h[i],
                        r = [t],
                        o = [n, a],
                        l = [i - 1, i];
                      f(t, s.cssClasses.draggable),
                        e.fixed &&
                          (r.push(n.children[0]), r.push(a.children[0])),
                        e.dragAll && ((o = h), (l = k)),
                        r.forEach(function (e) {
                          se(E.start, e, de, {
                            handles: o,
                            handleNumbers: l,
                            connect: t,
                          });
                        });
                    }
                  });
            }
            function me(e, t) {
              (O[e] = O[e] || []),
                O[e].push(t),
                "update" === e.split(".")[0] &&
                  h.forEach(function (e, t) {
                    be("update", t);
                  });
            }
            function ge(e) {
              return e === B.aria || e === B.tooltips;
            }
            function ve(e) {
              var t = e && e.split(".")[0],
                s = t ? e.substring(t.length) : e;
              Object.keys(O).forEach(function (e) {
                var i = e.split(".")[0],
                  n = e.substring(i.length);
                (t && t !== i) ||
                  (s && s !== n) ||
                  (ge(n) && s !== n) ||
                  delete O[e];
              });
            }
            function be(e, t, i) {
              Object.keys(O).forEach(function (n) {
                var a = n.split(".")[0];
                e === a &&
                  O[n].forEach(function (e) {
                    e.call(
                      De,
                      L.map(s.format.to),
                      t,
                      L.slice(),
                      i || !1,
                      A.slice(),
                      De
                    );
                  });
              });
            }
            function we(e, t, i, n, a, r) {
              var o;
              return (
                h.length > 1 &&
                  !s.events.unconstrained &&
                  (n &&
                    t > 0 &&
                    ((o = _.getAbsoluteDistance(e[t - 1], s.margin, !1)),
                    (i = Math.max(i, o))),
                  a &&
                    t < h.length - 1 &&
                    ((o = _.getAbsoluteDistance(e[t + 1], s.margin, !0)),
                    (i = Math.min(i, o)))),
                h.length > 1 &&
                  s.limit &&
                  (n &&
                    t > 0 &&
                    ((o = _.getAbsoluteDistance(e[t - 1], s.limit, !1)),
                    (i = Math.min(i, o))),
                  a &&
                    t < h.length - 1 &&
                    ((o = _.getAbsoluteDistance(e[t + 1], s.limit, !0)),
                    (i = Math.max(i, o)))),
                s.padding &&
                  (0 === t &&
                    ((o = _.getAbsoluteDistance(0, s.padding[0], !1)),
                    (i = Math.max(i, o))),
                  t === h.length - 1 &&
                    ((o = _.getAbsoluteDistance(100, s.padding[1], !0)),
                    (i = Math.min(i, o)))),
                !((i = u((i = _.getStep(i)))) === e[t] && !r) && i
              );
            }
            function Se(e, t) {
              var i = s.ort;
              return (i ? t : e) + ", " + (i ? e : t);
            }
            function ye(e, t, s, i, n) {
              var a = s.slice(),
                r = i[0],
                o = [!e, e],
                l = [e, !e];
              (i = i.slice()),
                e && i.reverse(),
                i.length > 1
                  ? i.forEach(function (e, s) {
                      var i = we(a, e, a[e] + t, o[s], l[s], !1);
                      !1 === i ? (t = 0) : ((t = i - a[e]), (a[e] = i));
                    })
                  : (o = l = [!0]);
              var c = !1;
              i.forEach(function (e, i) {
                c = Te(e, s[e] + t, o[i], l[i]) || c;
              }),
                c &&
                  (i.forEach(function (e) {
                    be("update", e), be("slide", e);
                  }),
                  null != n && be("drag", r));
            }
            function xe(e, t) {
              return s.dir ? 100 - e - t : e;
            }
            function Ce(e, t) {
              (A[e] = t), (L[e] = _.fromStepping(t));
              var i = "translate(" + Se(xe(t, 0) - D + "%", "0") + ")";
              (h[e].style[s.transformRule] = i), Pe(e), Pe(e + 1);
            }
            function Ee() {
              k.forEach(function (e) {
                var t = A[e] > 50 ? -1 : 1,
                  s = 3 + (h.length + t * e);
                h[e].style.zIndex = String(s);
              });
            }
            function Te(e, t, s, i, n) {
              return (
                n || (t = we(A, e, t, s, i, !1)), !1 !== t && (Ce(e, t), !0)
              );
            }
            function Pe(e) {
              if (y[e]) {
                var t = 0,
                  i = 100;
                0 !== e && (t = A[e - 1]), e !== y.length - 1 && (i = A[e]);
                var n = i - t,
                  a = "translate(" + Se(xe(t, n) + "%", "0") + ")",
                  r = "scale(" + Se(n / 100, "1") + ")";
                y[e].style[s.transformRule] = a + " " + r;
              }
            }
            function _e(e, t) {
              return null === e || !1 === e || void 0 === e
                ? A[t]
                : ("number" == typeof e && (e = String(e)),
                  !1 !== (e = s.format.from(e)) && (e = _.toStepping(e)),
                  !1 === e || isNaN(e) ? A[t] : e);
            }
            function Le(e, t, i) {
              var n = p(e),
                a = void 0 === A[0];
              (t = void 0 === t || t),
                s.animate && !a && d(P, s.cssClasses.tap, s.animationDuration),
                k.forEach(function (e) {
                  Te(e, _e(n[e], e), !0, !1, i);
                });
              var r = 1 === k.length ? 0 : 1;
              if (a && _.hasNoSize() && ((i = !0), (A[0] = 0), k.length > 1)) {
                var o = 100 / (k.length - 1);
                k.forEach(function (e) {
                  A[e] = e * o;
                });
              }
              for (; r < k.length; ++r)
                k.forEach(function (e) {
                  Te(e, A[e], !0, !0, i);
                });
              Ee(),
                k.forEach(function (e) {
                  be("update", e), null !== n[e] && t && be("set", e);
                });
            }
            function Ae(e) {
              Le(s.start, e);
            }
            function ke(e, t, s, i) {
              if (!((e = Number(e)) >= 0 && e < k.length))
                throw new Error("noUiSlider: invalid handle number, got: " + e);
              Te(e, _e(t, e), !0, !0, i), be("update", e), s && be("set", e);
            }
            function Me(e) {
              if ((void 0 === e && (e = !1), e))
                return 1 === L.length ? L[0] : L.slice(0);
              var t = L.map(s.format.to);
              return 1 === t.length ? t[0] : t;
            }
            function Oe() {
              for (
                ve(B.aria),
                  ve(B.tooltips),
                  Object.keys(s.cssClasses).forEach(function (e) {
                    m(P, s.cssClasses[e]);
                  });
                P.firstChild;

              )
                P.removeChild(P.firstChild);
              delete P.noUiSlider;
            }
            function $e(e) {
              var t = A[e],
                i = _.getNearbySteps(t),
                n = L[e],
                a = i.thisStep.step,
                r = null;
              if (s.snap)
                return [
                  n - i.stepBefore.startValue || null,
                  i.stepAfter.startValue - n || null,
                ];
              !1 !== a &&
                n + a > i.stepAfter.startValue &&
                (a = i.stepAfter.startValue - n),
                (r =
                  n > i.thisStep.startValue
                    ? i.thisStep.step
                    : !1 !== i.stepBefore.step && n - i.stepBefore.highestStep),
                100 === t ? (a = null) : 0 === t && (r = null);
              var o = _.countStepDecimals();
              return (
                null !== a && !1 !== a && (a = Number(a.toFixed(o))),
                null !== r && !1 !== r && (r = Number(r.toFixed(o))),
                [r, a]
              );
            }
            function Be() {
              return k.map($e);
            }
            function Ne(e, t) {
              var i = Me(),
                a = [
                  "margin",
                  "limit",
                  "padding",
                  "range",
                  "animate",
                  "snap",
                  "step",
                  "format",
                  "pips",
                  "tooltips",
                ];
              a.forEach(function (t) {
                void 0 !== e[t] && (o[t] = e[t]);
              });
              var r = ae(o);
              a.forEach(function (t) {
                void 0 !== e[t] && (s[t] = r[t]);
              }),
                (_ = r.spectrum),
                (s.margin = r.margin),
                (s.limit = r.limit),
                (s.padding = r.padding),
                s.pips ? ee(s.pips) : J(),
                s.tooltips ? W() : R(),
                (A = []),
                Le(n(e.start) ? e.start : i, t);
            }
            function Ve() {
              (c = j(P)),
                H(s.connect, c),
                fe(s.events),
                Le(s.start),
                s.pips && ee(s.pips),
                s.tooltips && W(),
                X();
            }
            Ve();
            var De = {
              destroy: Oe,
              steps: Be,
              on: me,
              off: ve,
              get: Me,
              set: Le,
              setHandle: ke,
              reset: Ae,
              __moveHandles: function (e, t, s) {
                ye(e, t, A, s);
              },
              options: o,
              updateOptions: Ne,
              target: P,
              removePips: J,
              removeTooltips: R,
              getPositions: function () {
                return A.slice();
              },
              getTooltips: function () {
                return C;
              },
              getOrigins: function () {
                return h;
              },
              pips: ee,
            };
            return De;
          }
          function oe(e, t) {
            if (!e || !e.nodeName)
              throw new Error(
                "noUiSlider: create requires a single element, got: " + e
              );
            if (e.noUiSlider)
              throw new Error("noUiSlider: Slider was already initialized.");
            var s = re(e, ae(t), t);
            return (e.noUiSlider = s), s;
          }
          var le = { __spectrum: M, cssClasses: $, create: oe };
          (e.create = oe),
            (e.cssClasses = $),
            (e.default = le),
            Object.defineProperty(e, "__esModule", { value: !0 });
        })(t);
      },
    },
    t = {};
  function s(i) {
    var n = t[i];
    if (void 0 !== n) return n.exports;
    var a = (t[i] = { exports: {} });
    return e[i].call(a.exports, a, a.exports, s), a.exports;
  }
  (() => {
    "use strict";
    function e(e) {
      this.type = e;
    }
    (e.prototype.init = function () {
      const e = this;
      (this.оbjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          s = t.dataset.da.trim().split(","),
          i = {};
        (i.element = t),
          (i.parent = t.parentNode),
          (i.destination = document.querySelector(s[0].trim())),
          (i.breakpoint = s[1] ? s[1].trim() : "767"),
          (i.place = s[2] ? s[2].trim() : "last"),
          (i.index = this.indexInParent(i.parent, i.element)),
          this.оbjects.push(i);
      }
      this.arraySort(this.оbjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.оbjects,
          function (e) {
            return (
              "(" +
              this.type +
              "-width: " +
              e.breakpoint +
              "px)," +
              e.breakpoint
            );
          },
          this
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (e, t, s) {
            return Array.prototype.indexOf.call(s, e) === t;
          }
        ));
      for (let t = 0; t < this.mediaQueries.length; t++) {
        const s = this.mediaQueries[t],
          i = String.prototype.split.call(s, ","),
          n = window.matchMedia(i[0]),
          a = i[1],
          r = Array.prototype.filter.call(this.оbjects, function (e) {
            return e.breakpoint === a;
          });
        n.addListener(function () {
          e.mediaHandler(n, r);
        }),
          this.mediaHandler(n, r);
      }
    }),
      (e.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const s = t[e];
            (s.index = this.indexInParent(s.parent, s.element)),
              this.moveTo(s.place, s.element, s.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const s = t[e];
            s.element.classList.contains(this.daClassname) &&
              this.moveBack(s.parent, s.element, s.index);
          }
      }),
      (e.prototype.moveTo = function (e, t, s) {
        t.classList.add(this.daClassname),
          "last" === e || e >= s.children.length
            ? s.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? s.children[e].insertAdjacentElement("beforebegin", t)
            : s.insertAdjacentElement("afterbegin", t);
      }),
      (e.prototype.moveBack = function (e, t, s) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[s]
            ? e.children[s].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (e.prototype.indexInParent = function (e, t) {
        const s = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(s, t);
      }),
      (e.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    var t;
    new e("max").init(),
      (t = function () {
        var e = [
          "decimals",
          "thousand",
          "mark",
          "prefix",
          "suffix",
          "encoder",
          "decoder",
          "negativeBefore",
          "negative",
          "edit",
          "undo",
        ];
        function t(e) {
          return e.split("").reverse().join("");
        }
        function s(e, t) {
          return e.substring(0, t.length) === t;
        }
        function i(e, t, s) {
          if ((e[t] || e[s]) && e[t] === e[s]) throw new Error(t);
        }
        function n(e) {
          return "number" == typeof e && isFinite(e);
        }
        function a(e, s, i, a, r, o, l, c, d, u, p, h) {
          var f,
            m,
            g,
            v = h,
            b = "",
            w = "";
          return (
            o && (h = o(h)),
            !!n(h) &&
              (!1 !== e && 0 === parseFloat(h.toFixed(e)) && (h = 0),
              h < 0 && ((f = !0), (h = Math.abs(h))),
              !1 !== e &&
                (h = (function (e, t) {
                  return (
                    (e = e.toString().split("e")),
                    (+(
                      (e = (e = Math.round(
                        +(e[0] + "e" + (e[1] ? +e[1] + t : t))
                      ))
                        .toString()
                        .split("e"))[0] +
                      "e" +
                      (e[1] ? e[1] - t : -t)
                    )).toFixed(t)
                  );
                })(h, e)),
              -1 !== (h = h.toString()).indexOf(".")
                ? ((g = (m = h.split("."))[0]), i && (b = i + m[1]))
                : (g = h),
              s && (g = t((g = t(g).match(/.{1,3}/g)).join(t(s)))),
              f && c && (w += c),
              a && (w += a),
              f && d && (w += d),
              (w += g),
              (w += b),
              r && (w += r),
              u && (w = u(w, v)),
              w)
          );
        }
        function r(e, t, i, a, r, o, l, c, d, u, p, h) {
          var f,
            m = "";
          return (
            p && (h = p(h)),
            !(!h || "string" != typeof h) &&
              (c && s(h, c) && ((h = h.replace(c, "")), (f = !0)),
              a && s(h, a) && (h = h.replace(a, "")),
              d && s(h, d) && ((h = h.replace(d, "")), (f = !0)),
              r &&
                (function (e, t) {
                  return e.slice(-1 * t.length) === t;
                })(h, r) &&
                (h = h.slice(0, -1 * r.length)),
              t && (h = h.split(t).join("")),
              i && (h = h.replace(i, ".")),
              f && (m += "-"),
              "" !== (m = (m += h).replace(/[^0-9\.\-.]/g, "")) &&
                ((m = Number(m)), l && (m = l(m)), !!n(m) && m))
          );
        }
        function o(t, s, i) {
          var n,
            a = [];
          for (n = 0; n < e.length; n += 1) a.push(t[e[n]]);
          return a.push(i), s.apply("", a);
        }
        return function t(s) {
          if (!(this instanceof t)) return new t(s);
          "object" == typeof s &&
            ((s = (function (t) {
              var s,
                n,
                a,
                r = {};
              for (
                void 0 === t.suffix && (t.suffix = t.postfix), s = 0;
                s < e.length;
                s += 1
              )
                if (void 0 === (a = t[(n = e[s])]))
                  "negative" !== n || r.negativeBefore
                    ? "mark" === n && "." !== r.thousand
                      ? (r[n] = ".")
                      : (r[n] = !1)
                    : (r[n] = "-");
                else if ("decimals" === n) {
                  if (!(0 <= a && a < 8)) throw new Error(n);
                  r[n] = a;
                } else if (
                  "encoder" === n ||
                  "decoder" === n ||
                  "edit" === n ||
                  "undo" === n
                ) {
                  if ("function" != typeof a) throw new Error(n);
                  r[n] = a;
                } else {
                  if ("string" != typeof a) throw new Error(n);
                  r[n] = a;
                }
              return (
                i(r, "mark", "thousand"),
                i(r, "prefix", "negative"),
                i(r, "prefix", "negativeBefore"),
                r
              );
            })(s)),
            (this.to = function (e) {
              return o(s, a, e);
            }),
            (this.from = function (e) {
              return o(s, r, e);
            }));
        };
      }),
      "function" == typeof define && define.amd
        ? define([], t)
        : "object" == typeof exports
        ? (module.exports = t())
        : (window.wNumb = t());
    class i {
      constructor(e) {
        let t = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-youtube",
          youtubePlaceAttribute: "data-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup__content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          bodyLockDelay: 500,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...t,
            ...e,
            classes: { ...t.classes, ...e?.classes },
            hashSettings: { ...t.hashSettings, ...e?.hashSettings },
            on: { ...t.on, ...e?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("Проснулся"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t)
              return (
                e.preventDefault(),
                (this._dataValue = t.getAttribute(
                  this.options.attributeOpenButton
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `Ой ой, не заполнен атрибут у ${t.classList}`
                    )
              );
            return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (e.preventDefault(), void this.close())
              : void 0;
          }.bind(this)
        ),
          document.addEventListener(
            "keydown",
            function (e) {
              if (
                this.options.closeEsc &&
                27 == e.which &&
                "Escape" === e.code &&
                this.isOpen
              )
                return e.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == e.which &&
                this.isOpen &&
                this._focusCatch(e);
            }.bind(this)
          ),
          document.querySelector("form[data-ajax],form[data-dev]") &&
            document.addEventListener(
              "formSent",
              function (e) {
                const t = e.detail.form.dataset.popupMessage;
                t && this.open(t);
              }.bind(this)
            ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this)
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this)
            ));
      }
      open(e) {
        if (
          (e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute
              )}?rel=0&showinfo=0&autoplay=1`,
              t = document.createElement("iframe");
            t.setAttribute("allowfullscreen", "");
            const s = this.options.setAutoplayYoutube ? "autoplay;" : "";
            t.setAttribute("allow", `${s}; encrypted-media`),
              t.setAttribute("src", e),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(t);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : c(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } })
            ),
            this.popupLogging("Открыл попап");
        } else
          this.popupLogging(
            "Ой ой, такого попапа нет. Проверьте корректность ввода. "
          );
      }
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
          this.isOpen &&
            l &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              c(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("Закрыл попап"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${e}"]`
        ) &&
          e &&
          this.open(e);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl),
          s = Array.prototype.slice.call(t),
          i = s.indexOf(document.activeElement);
        e.shiftKey && 0 === i && (s[s.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            i !== s.length - 1 ||
            (s[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging && p(`[Попапос]: ${e}`);
      }
    }
    let n = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          n.Android() || n.BlackBerry() || n.iOS() || n.Opera() || n.Windows()
        );
      },
    };
    let a = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t));
      },
      r = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let i = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = i + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide");
            }, t);
        }
      },
      o = (e, t = 500) => (e.hidden ? r(e, t) : a(e, t)),
      l = !0,
      c = (e = 500) => {
        document.documentElement.classList.contains("lock") ? d(e) : u(e);
      },
      d = (e = 500) => {
        let t = document.querySelector("body");
        if (l) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (l = !1),
            setTimeout(function () {
              l = !0;
            }, e);
        }
      },
      u = (e = 500) => {
        let t = document.querySelector("body");
        if (l) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (l = !1),
            setTimeout(function () {
              l = !0;
            }, e);
        }
      };
    function p(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function h(e, t) {
      for (var s = 0; s < e.length; s++) e[s].classList.remove(t);
    }
    function f(e, t) {
      const s = Array.from(e).filter(function (e, s, i) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (s.length) {
        const e = [];
        s.forEach((s) => {
          const i = {},
            n = s.dataset[t].split(",");
          (i.value = n[0]),
            (i.type = n[1] ? n[1].trim() : "max"),
            (i.item = s),
            e.push(i);
        });
        let i = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        i = (function (e) {
          return e.filter(function (e, t, s) {
            return s.indexOf(e) === t;
          });
        })(i);
        const n = [];
        if (i.length)
          return (
            i.forEach((t) => {
              const s = t.split(","),
                i = s[1],
                a = s[2],
                r = window.matchMedia(s[0]),
                o = e.filter(function (e) {
                  if (e.value === i && e.type === a) return !0;
                });
              n.push({ itemsArray: o, matchMedia: r });
            }),
            n
          );
      }
    }
    let m = (e, t = !1, s = 500, i = 0) => {
      const n = document.querySelector(e);
      if (n) {
        let a = "",
          r = 0;
        t &&
          ((a = "header.header"), (r = document.querySelector(a).offsetHeight));
        let o = {
          speedAsDuration: !0,
          speed: s,
          header: a,
          offset: i,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (d(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(n, "", o);
        else {
          let e = n.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: r ? e - r : e, behavior: "smooth" });
        }
        p(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else p(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    class g {
      constructor(e, t = null) {
        if (
          ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
          (this.selectClasses = {
            classSelect: "select",
            classSelectBody: "select__body",
            classSelectTitle: "select__title",
            classSelectValue: "select__value",
            classSelectLabel: "select__label",
            classSelectInput: "select__input",
            classSelectText: "select__text",
            classSelectLink: "select__link",
            classSelectOptions: "select__options",
            classSelectOptionsScroll: "select__scroll",
            classSelectOption: "select__option",
            classSelectContent: "select__content",
            classSelectRow: "select__row",
            classSelectData: "select__asset",
            classSelectDisabled: "_select-disabled",
            classSelectTag: "_select-tag",
            classSelectOpen: "_select-open",
            classSelectActive: "_select-active",
            classSelectFocus: "_select-focus",
            classSelectMultiple: "_select-multiple",
            classSelectCheckBox: "_select-checkbox",
            classSelectOptionSelected: "_select-selected",
          }),
          (this._this = this),
          this.config.init)
        ) {
          const e = t
            ? document.querySelectorAll(t)
            : document.querySelectorAll("select");
          e.length
            ? (this.selectsInit(e),
              this.setLogging(`Проснулся, построил селектов: (${e.length})`))
            : this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
        }
      }
      getSelectClass(e) {
        return `.${e}`;
      }
      getSelectElement(e, t) {
        return {
          originalSelect: e.querySelector("select"),
          selectElement: e.querySelector(this.getSelectClass(t)),
        };
      }
      selectsInit(e) {
        e.forEach((e, t) => {
          this.selectInit(e, t + 1);
        }),
          document.addEventListener(
            "click",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "keydown",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusin",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusout",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          );
      }
      selectInit(e, t) {
        const s = this;
        let i = document.createElement("div");
        if (
          (i.classList.add(this.selectClasses.classSelect),
          e.parentNode.insertBefore(i, e),
          i.appendChild(e),
          (e.hidden = !0),
          t && (e.dataset.id = t),
          i.insertAdjacentHTML(
            "beforeend",
            `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
          ),
          this.selectBuild(e),
          this.getSelectPlaceholder(e) &&
            ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
            this.getSelectPlaceholder(e).label.show))
        ) {
          this.getSelectElement(
            i,
            this.selectClasses.classSelectTitle
          ).selectElement.insertAdjacentHTML(
            "afterbegin",
            `<span class="${this.selectClasses.classSelectLabel}">${
              this.getSelectPlaceholder(e).label.text
                ? this.getSelectPlaceholder(e).label.text
                : this.getSelectPlaceholder(e).value
            }</span>`
          );
        }
        (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
          e.addEventListener("change", function (e) {
            s.selectChange(e);
          });
      }
      selectBuild(e) {
        const t = e.parentElement;
        (t.dataset.id = e.dataset.id),
          t.classList.add(
            e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
          ),
          e.multiple
            ? t.classList.add(this.selectClasses.classSelectMultiple)
            : t.classList.remove(this.selectClasses.classSelectMultiple),
          e.hasAttribute("data-checkbox") && e.multiple
            ? t.classList.add(this.selectClasses.classSelectCheckBox)
            : t.classList.remove(this.selectClasses.classSelectCheckBox),
          this.setSelectTitleValue(t, e),
          this.setOptions(t, e),
          e.hasAttribute("data-search") && this.searchActions(t),
          e.hasAttribute("data-open") && this.selectAction(t),
          this.selectDisabled(t, e);
      }
      selectsActions(e) {
        const t = e.target,
          s = e.type;
        if (
          t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
          t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
        ) {
          const i = t.closest(".select")
              ? t.closest(".select")
              : document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${
                    t.closest(
                      this.getSelectClass(this.selectClasses.classSelectTag)
                    ).dataset.selectId
                  }"]`
                ),
            n = this.getSelectElement(i).originalSelect;
          if ("click" === s) {
            if (!n.disabled)
              if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                )
              ) {
                const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ),
                  s = document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                  );
                this.optionAction(i, n, s);
              } else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTitle)
                )
              )
                this.selectAction(i);
              else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                )
              ) {
                const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                );
                this.optionAction(i, n, e);
              }
          } else
            "focusin" === s || "focusout" === s
              ? t.closest(
                  this.getSelectClass(this.selectClasses.classSelect)
                ) &&
                ("focusin" === s
                  ? i.classList.add(this.selectClasses.classSelectFocus)
                  : i.classList.remove(this.selectClasses.classSelectFocus))
              : "keydown" === s && "Escape" === e.code && this.selectsСlose();
        } else this.selectsСlose();
      }
      selectsСlose() {
        const e = document.querySelectorAll(
          `${this.getSelectClass(
            this.selectClasses.classSelect
          )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
        );
        e.length &&
          e.forEach((e) => {
            this.selectAction(e);
          });
      }
      selectAction(e) {
        const t = this.getSelectElement(e).originalSelect,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement;
        s.classList.contains("_slide") ||
          (e.classList.toggle(this.selectClasses.classSelectOpen),
          o(s, t.dataset.speed));
      }
      setSelectTitleValue(e, t) {
        const s = this.getSelectElement(
            e,
            this.selectClasses.classSelectBody
          ).selectElement,
          i = this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement;
        i && i.remove(),
          s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
      }
      getSelectTitleValue(e, t) {
        let s = this.getSelectedOptionsData(t, 2).html;
        if (
          (t.multiple &&
            t.hasAttribute("data-tags") &&
            ((s = this.getSelectedOptionsData(t)
              .elements.map(
                (t) =>
                  `<span role="button" data-select-id="${
                    e.dataset.id
                  }" data-value="${
                    t.value
                  }" class="_select-tag">${this.getSelectElementContent(
                    t
                  )}</span>`
              )
              .join("")),
            t.dataset.tags &&
              document.querySelector(t.dataset.tags) &&
              ((document.querySelector(t.dataset.tags).innerHTML = s),
              t.hasAttribute("data-search") && (s = !1))),
          (s = s.length ? s : t.dataset.placeholder),
          this.getSelectedOptionsData(t).values.length
            ? e.classList.add(this.selectClasses.classSelectActive)
            : e.classList.remove(this.selectClasses.classSelectActive),
          t.hasAttribute("data-search"))
        )
          return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
        {
          const e =
            this.getSelectedOptionsData(t).elements.length &&
            this.getSelectedOptionsData(t).elements[0].dataset.class
              ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
              : "";
          return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
        }
      }
      getSelectElementContent(e) {
        const t = e.dataset.asset ? `${e.dataset.asset}` : "",
          s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
        let i = "";
        return (
          (i += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectData}">`
            : ""),
          (i += t ? s : ""),
          (i += t ? "</span>" : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectText}">`
            : ""),
          (i += e.textContent),
          (i += t ? "</span>" : ""),
          (i += t ? "</span>" : ""),
          i
        );
      }
      getSelectPlaceholder(e) {
        const t = Array.from(e.options).find((e) => !e.value);
        if (t)
          return {
            value: t.textContent,
            show: t.hasAttribute("data-show"),
            label: {
              show: t.hasAttribute("data-label"),
              text: t.dataset.label,
            },
          };
      }
      getSelectedOptionsData(e, t) {
        let s = [];
        return (
          e.multiple
            ? (s = Array.from(e.options)
                .filter((e) => e.value)
                .filter((e) => e.selected))
            : s.push(e.options[e.selectedIndex]),
          {
            elements: s.map((e) => e),
            values: s.filter((e) => e.value).map((e) => e.value),
            html: s.map((e) => this.getSelectElementContent(e)),
          }
        );
      }
      getOptions(e) {
        let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
          s = e.dataset.scroll
            ? `style="max-height:${e.dataset.scroll}px"`
            : "",
          i = Array.from(e.options);
        if (i.length > 0) {
          let n = "";
          return (
            ((this.getSelectPlaceholder(e) &&
              !this.getSelectPlaceholder(e).show) ||
              e.multiple) &&
              (i = i.filter((e) => e.value)),
            (n += t
              ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
              : ""),
            i.forEach((t) => {
              n += this.getOption(t, e);
            }),
            (n += t ? "</div>" : ""),
            n
          );
        }
      }
      getOption(e, t) {
        const s =
            e.selected && t.multiple
              ? ` ${this.selectClasses.classSelectOptionSelected}`
              : "",
          i =
            e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
          n = e.dataset.class ? ` ${e.dataset.class}` : "",
          a = !!e.dataset.href && e.dataset.href,
          r = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
        let o = "";
        return (
          (o += a
            ? `<a ${r} ${i} href="${a}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${n}${s}">`
            : `<button ${i} class="${this.selectClasses.classSelectOption}${n}${s}" data-value="${e.value}" type="button">`),
          (o += this.getSelectElementContent(e)),
          (o += a ? "</a>" : "</button>"),
          o
        );
      }
      setOptions(e, t) {
        this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement.innerHTML = this.getOptions(t);
      }
      optionAction(e, t, s) {
        if (t.multiple) {
          s.classList.toggle(this.selectClasses.classSelectOptionSelected);
          this.getSelectedOptionsData(t).elements.forEach((e) => {
            e.removeAttribute("selected");
          });
          e.querySelectorAll(
            this.getSelectClass(this.selectClasses.classSelectOptionSelected)
          ).forEach((e) => {
            t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
              "selected",
              "selected"
            );
          });
        } else
          t.hasAttribute("data-show-selected") ||
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ) &&
              (e.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption
                )}[hidden]`
              ).hidden = !1),
            (s.hidden = !0)),
            (t.value = s.hasAttribute("data-value")
              ? s.dataset.value
              : s.textContent),
            this.selectAction(e);
        this.setSelectTitleValue(e, t), this.setSelectChange(t);
      }
      selectChange(e) {
        const t = e.target;
        this.selectBuild(t), this.setSelectChange(t);
      }
      setSelectChange(e) {
        if (
          (e.hasAttribute("data-validate") && b.validateInput(e),
          e.hasAttribute("data-submit") && e.value)
        ) {
          let t = document.createElement("button");
          (t.type = "submit"),
            e.closest("form").append(t),
            t.click(),
            t.remove();
        }
        const t = e.parentElement;
        this.selectCallback(t, e);
      }
      selectDisabled(e, t) {
        t.disabled
          ? (e.classList.add(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !0))
          : (e.classList.remove(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !1));
      }
      searchActions(e) {
        this.getSelectElement(e).originalSelect;
        const t = this.getSelectElement(
            e,
            this.selectClasses.classSelectInput
          ).selectElement,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement,
          i = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
          n = this;
        t.addEventListener("input", function () {
          i.forEach((e) => {
            e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
              ? (e.hidden = !1)
              : (e.hidden = !0);
          }),
            !0 === s.hidden && n.selectAction(e);
        });
      }
      selectCallback(e, t) {
        document.dispatchEvent(
          new CustomEvent("selectCallback", { detail: { select: t } })
        );
      }
      setLogging(e) {
        this.config.logging && p(`[select]: ${e}`);
      }
    }
    const v = { inputMaskModule: null, selectModule: null };
    let b = {
      getErrors(e) {
        let t = 0,
          s = e.querySelectorAll("*[data-required]");
        return (
          s.length &&
            s.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error")
            );
      },
      formClean(e) {
        e.reset(),
          setTimeout(() => {
            let t = e.querySelectorAll("input,textarea");
            for (let e = 0; e < t.length; e++) {
              const s = t[e];
              s.parentElement.classList.remove("_form-focus"),
                s.classList.remove("_form-focus"),
                b.removeError(s),
                (s.value = s.dataset.placeholder);
            }
            let s = e.querySelectorAll(".checkbox__input");
            if (s.length > 0)
              for (let e = 0; e < s.length; e++) {
                s[e].checked = !1;
              }
            if (v.selectModule) {
              let t = e.querySelectorAll(".select");
              if (t.length)
                for (let e = 0; e < t.length; e++) {
                  const s = t[e].querySelector("select");
                  v.selectModule.selectBuild(s);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    var w = s(211);
    function S(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function y(e = {}, t = {}) {
      Object.keys(t).forEach((s) => {
        void 0 === e[s]
          ? (e[s] = t[s])
          : S(t[s]) && S(e[s]) && Object.keys(t[s]).length > 0 && y(e[s], t[s]);
      });
    }
    !(function () {
      const e = document.querySelector("[data-range]");
      if (e) {
        w.create(e, {
          start: [0, 0.5],
          connect: !0,
          step: 0,
          range: { min: 0, max: 3 },
          pips: {
            mode: "values",
            values: [0, 0.5, 1, 1.5, 2, 2.5, 3],
            format: wNumb({ suffix: "м" }),
          },
          format: wNumb({ decimals: 2, suffix: "м" }),
        });
        let t = document.querySelector("[data-indicator]");
        e.noUiSlider.on("update", function (e) {
          t.innerHTML = e.join(" - ");
        });
      }
      const t = document.querySelector("[data-range-price]");
      if (t) {
        w.create(t, {
          start: [0],
          connect: [!0, !1],
          step: 0,
          range: { min: 0, max: 3 },
          pips: {
            mode: "values",
            values: [0, 0.5, 1, 1.5, 2, 2.5, 3],
            format: wNumb({ suffix: "м" }),
          },
          format: wNumb({ decimals: 2, suffix: "м" }),
        });
        let e = document.querySelector("[data-indicator-price]");
        t.noUiSlider.on("update", function (t, s) {
          e.innerHTML = t[s];
        });
        let i = t.querySelectorAll(".noUi-value");
        function n() {
          let e = Number(this.getAttribute("data-value"));
          t.noUiSlider.set(e);
        }
        for (var s = 0; s < i.length; s++)
          (i[s].style.cursor = "pointer"), i[s].addEventListener("click", n);
      }
      const i = document.querySelector("[data-range-month]");
      if (i) {
        w.create(i, {
          start: 0,
          connect: [!0, !1],
          step: 0,
          range: { min: 0, max: 84 },
          pips: { mode: "values", values: [0, 12, 24, 36, 48, 60, 72, 84] },
          format: wNumb({ decimals: 0, suffix: " мес." }),
        });
        let e = document.querySelector("[data-indicator-month]");
        i.noUiSlider.on("update", function (t, s) {
          e.innerHTML = t[s];
        });
        let t = i.querySelectorAll(".noUi-value");
        function n() {
          let e = Number(this.getAttribute("data-value"));
          i.noUiSlider.set(e);
        }
        for (s = 0; s < t.length; s++)
          (t[s].style.cursor = "pointer"), t[s].addEventListener("click", n);
      }
      const n = document.querySelector("[data-range-calc]");
      if (n) {
        w.create(n, {
          start: 0,
          connect: [!0, !1],
          step: 10,
          range: { min: 0, max: 1e5 },
          format: wNumb({ decimals: 0 }),
        });
        let e = document.querySelector("[data-indicator-all]"),
          t = document.querySelector("[data-indicator-residue]");
        n.noUiSlider.on("update", function (s, i) {
          (e.innerHTML = s[i]), (t.innerHTML = s);
        });
        let s = [document.querySelector("[data-indicator-input]")];
        n.noUiSlider.on("update", function (e, t) {
          s[t].value = e[t];
        }),
          s.forEach(function (e, t) {
            e.addEventListener("change", function () {
              n.noUiSlider.setHandle(t, this.value);
            }),
              e.addEventListener("keydown", function (e) {
                var s,
                  i = n.noUiSlider.get(),
                  a = Number(i[t]),
                  r = n.noUiSlider.steps()[t];
                switch (e.which) {
                  case 13:
                    n.noUiSlider.setHandle(t, this.value);
                    break;
                  case 38:
                    !1 === (s = r[1]) && (s = 1),
                      null !== s && n.noUiSlider.setHandle(t, a + s);
                    break;
                  case 40:
                    !1 === (s = r[0]) && (s = 1),
                      null !== s && n.noUiSlider.setHandle(t, a - s);
                }
              });
          });
      }
    })();
    const x = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function C() {
      const e = "undefined" != typeof document ? document : {};
      return y(e, x), e;
    }
    const E = {
      document: x,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function T() {
      const e = "undefined" != typeof window ? window : {};
      return y(e, E), e;
    }
    class P extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function _(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(..._(e)) : t.push(e);
        }),
        t
      );
    }
    function L(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function A(e, t) {
      const s = T(),
        i = C();
      let n = [];
      if (!t && e instanceof P) return e;
      if (!e) return new P(n);
      if ("string" == typeof e) {
        const s = e.trim();
        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
          let e = "div";
          0 === s.indexOf("<li") && (e = "ul"),
            0 === s.indexOf("<tr") && (e = "tbody"),
            (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
            0 === s.indexOf("<tbody") && (e = "table"),
            0 === s.indexOf("<option") && (e = "select");
          const t = i.createElement(e);
          t.innerHTML = s;
          for (let e = 0; e < t.childNodes.length; e += 1)
            n.push(t.childNodes[e]);
        } else
          n = (function (e, t) {
            if ("string" != typeof e) return [e];
            const s = [],
              i = t.querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) s.push(i[e]);
            return s;
          })(e.trim(), t || i);
      } else if (e.nodeType || e === s || e === i) n.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof P) return e;
        n = e;
      }
      return new P(
        (function (e) {
          const t = [];
          for (let s = 0; s < e.length; s += 1)
            -1 === t.indexOf(e[s]) && t.push(e[s]);
          return t;
        })(n)
      );
    }
    A.fn = P.prototype;
    const k = "resize scroll".split(" ");
    function M(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            k.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : A(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    M("click"),
      M("blur"),
      M("focus"),
      M("focusin"),
      M("focusout"),
      M("keyup"),
      M("keydown"),
      M("keypress"),
      M("submit"),
      M("change"),
      M("mousedown"),
      M("mousemove"),
      M("mouseup"),
      M("mouseenter"),
      M("mouseleave"),
      M("mouseout"),
      M("mouseover"),
      M("touchstart"),
      M("touchend"),
      M("touchmove"),
      M("resize"),
      M("scroll");
    const O = {
      addClass: function (...e) {
        const t = _(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = _(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = _(e.map((e) => e.split(" ")));
        return (
          L(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = _(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let s = 0; s < this.length; s += 1)
          if (2 === arguments.length) this[s].setAttribute(e, t);
          else
            for (const t in e)
              (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, s, i, n] = e;
        function a(e) {
          const t = e.target;
          if (!t) return;
          const n = e.target.dom7EventData || [];
          if ((n.indexOf(e) < 0 && n.unshift(e), A(t).is(s))) i.apply(t, n);
          else {
            const e = A(t).parents();
            for (let t = 0; t < e.length; t += 1)
              A(e[t]).is(s) && i.apply(e[t], n);
          }
        }
        function r(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
        }
        "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
          n || (n = !1);
        const o = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (s)
            for (l = 0; l < o.length; l += 1) {
              const e = o[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: i, proxyListener: a }),
                t.addEventListener(e, a, n);
            }
          else
            for (l = 0; l < o.length; l += 1) {
              const e = o[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: i, proxyListener: r }),
                t.addEventListener(e, r, n);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, s, i, n] = e;
        "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
          n || (n = !1);
        const a = t.split(" ");
        for (let e = 0; e < a.length; e += 1) {
          const t = a[e];
          for (let e = 0; e < this.length; e += 1) {
            const a = this[e];
            let r;
            if (
              (!s && a.dom7Listeners
                ? (r = a.dom7Listeners[t])
                : s && a.dom7LiveListeners && (r = a.dom7LiveListeners[t]),
              r && r.length)
            )
              for (let e = r.length - 1; e >= 0; e -= 1) {
                const s = r[e];
                (i && s.listener === i) ||
                (i &&
                  s.listener &&
                  s.listener.dom7proxy &&
                  s.listener.dom7proxy === i)
                  ? (a.removeEventListener(t, s.proxyListener, n),
                    r.splice(e, 1))
                  : i ||
                    (a.removeEventListener(t, s.proxyListener, n),
                    r.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = T(),
          s = e[0].split(" "),
          i = e[1];
        for (let n = 0; n < s.length; n += 1) {
          const a = s[n];
          for (let s = 0; s < this.length; s += 1) {
            const n = this[s];
            if (t.CustomEvent) {
              const s = new t.CustomEvent(a, {
                detail: i,
                bubbles: !0,
                cancelable: !0,
              });
              (n.dom7EventData = e.filter((e, t) => t > 0)),
                n.dispatchEvent(s),
                (n.dom7EventData = []),
                delete n.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function s(i) {
              i.target === this && (e.call(this, i), t.off("transitionend", s));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = T();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = T(),
            t = C(),
            s = this[0],
            i = s.getBoundingClientRect(),
            n = t.body,
            a = s.clientTop || n.clientTop || 0,
            r = s.clientLeft || n.clientLeft || 0,
            o = s === e ? e.scrollY : s.scrollTop,
            l = s === e ? e.scrollX : s.scrollLeft;
          return { top: i.top + o - a, left: i.left + l - r };
        }
        return null;
      },
      css: function (e, t) {
        const s = T();
        let i;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1)
              for (const t in e) this[i].style[t] = e[t];
            return this;
          }
          if (this[0])
            return s.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, s) => {
              e.apply(t, [t, s]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = T(),
          s = C(),
          i = this[0];
        let n, a;
        if (!i || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (i.matches) return i.matches(e);
          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
          if (i.msMatchesSelector) return i.msMatchesSelector(e);
          for (n = A(e), a = 0; a < n.length; a += 1) if (n[a] === i) return !0;
          return !1;
        }
        if (e === s) return i === s;
        if (e === t) return i === t;
        if (e.nodeType || e instanceof P) {
          for (n = e.nodeType ? [e] : e, a = 0; a < n.length; a += 1)
            if (n[a] === i) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return A([]);
        if (e < 0) {
          const s = t + e;
          return A(s < 0 ? [] : [this[s]]);
        }
        return A([this[e]]);
      },
      append: function (...e) {
        let t;
        const s = C();
        for (let i = 0; i < e.length; i += 1) {
          t = e[i];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const i = s.createElement("div");
              for (i.innerHTML = t; i.firstChild; )
                this[e].appendChild(i.firstChild);
            } else if (t instanceof P)
              for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = C();
        let s, i;
        for (s = 0; s < this.length; s += 1)
          if ("string" == typeof e) {
            const n = t.createElement("div");
            for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1)
              this[s].insertBefore(n.childNodes[i], this[s].childNodes[0]);
          } else if (e instanceof P)
            for (i = 0; i < e.length; i += 1)
              this[s].insertBefore(e[i], this[s].childNodes[0]);
          else this[s].insertBefore(e, this[s].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && A(this[0].nextElementSibling).is(e)
              ? A([this[0].nextElementSibling])
              : A([])
            : this[0].nextElementSibling
            ? A([this[0].nextElementSibling])
            : A([])
          : A([]);
      },
      nextAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return A([]);
        for (; s.nextElementSibling; ) {
          const i = s.nextElementSibling;
          e ? A(i).is(e) && t.push(i) : t.push(i), (s = i);
        }
        return A(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && A(t.previousElementSibling).is(e)
              ? A([t.previousElementSibling])
              : A([])
            : t.previousElementSibling
            ? A([t.previousElementSibling])
            : A([]);
        }
        return A([]);
      },
      prevAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return A([]);
        for (; s.previousElementSibling; ) {
          const i = s.previousElementSibling;
          e ? A(i).is(e) && t.push(i) : t.push(i), (s = i);
        }
        return A(t);
      },
      parent: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1)
          null !== this[s].parentNode &&
            (e
              ? A(this[s].parentNode).is(e) && t.push(this[s].parentNode)
              : t.push(this[s].parentNode));
        return A(t);
      },
      parents: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          let i = this[s].parentNode;
          for (; i; )
            e ? A(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
        }
        return A(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? A([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const i = this[s].querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) t.push(i[e]);
        }
        return A(t);
      },
      children: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const i = this[s].children;
          for (let s = 0; s < i.length; s += 1)
            (e && !A(i[s]).is(e)) || t.push(i[s]);
        }
        return A(t);
      },
      filter: function (e) {
        return A(L(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(O).forEach((e) => {
      Object.defineProperty(A.fn, e, { value: O[e], writable: !0 });
    });
    const $ = A;
    function B(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function N() {
      return Date.now();
    }
    function V(e, t) {
      void 0 === t && (t = "x");
      const s = T();
      let i, n, a;
      const r = (function (e) {
        const t = T();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((n = r.transform || r.webkitTransform),
            n.split(",").length > 6 &&
              (n = n
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (a = new s.WebKitCSSMatrix("none" === n ? "" : n)))
          : ((a =
              r.MozTransform ||
              r.OTransform ||
              r.MsTransform ||
              r.msTransform ||
              r.transform ||
              r
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = a.toString().split(","))),
        "x" === t &&
          (n = s.WebKitCSSMatrix
            ? a.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === t &&
          (n = s.WebKitCSSMatrix
            ? a.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        n || 0
      );
    }
    function D(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function q(e) {
      return "undefined" != typeof window && void 0 !== window.HTMLElement
        ? e instanceof HTMLElement
        : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function z() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let s = 1; s < arguments.length; s += 1) {
        const i = s < 0 || arguments.length <= s ? void 0 : arguments[s];
        if (null != i && !q(i)) {
          const s = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, n = s.length; t < n; t += 1) {
            const n = s[t],
              a = Object.getOwnPropertyDescriptor(i, n);
            void 0 !== a &&
              a.enumerable &&
              (D(e[n]) && D(i[n])
                ? i[n].__swiper__
                  ? (e[n] = i[n])
                  : z(e[n], i[n])
                : !D(e[n]) && D(i[n])
                ? ((e[n] = {}), i[n].__swiper__ ? (e[n] = i[n]) : z(e[n], i[n]))
                : (e[n] = i[n]));
          }
        }
      }
      return e;
    }
    function I(e, t, s) {
      e.style.setProperty(t, s);
    }
    function H(e) {
      let { swiper: t, targetPosition: s, side: i } = e;
      const n = T(),
        a = -t.translate;
      let r,
        o = null;
      const l = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        n.cancelAnimationFrame(t.cssModeFrameID);
      const c = s > a ? "next" : "prev",
        d = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
        u = () => {
          (r = new Date().getTime()), null === o && (o = r);
          const e = Math.max(Math.min((r - o) / l, 1), 0),
            c = 0.5 - Math.cos(e * Math.PI) / 2;
          let p = a + c * (s - a);
          if ((d(p, s) && (p = s), t.wrapperEl.scrollTo({ [i]: p }), d(p, s)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [i]: p });
              }),
              void n.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = n.requestAnimationFrame(u);
        };
      u();
    }
    let j, G, F;
    function U() {
      return (
        j ||
          (j = (function () {
            const e = T(),
              t = C();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const s = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, s);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        j
      );
    }
    function R(e) {
      return (
        void 0 === e && (e = {}),
        G ||
          (G = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const s = U(),
              i = T(),
              n = i.navigator.platform,
              a = t || i.navigator.userAgent,
              r = { ios: !1, android: !1 },
              o = i.screen.width,
              l = i.screen.height,
              c = a.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = a.match(/(iPad).*OS\s([\d_]+)/);
            const u = a.match(/(iPod)(.*OS\s([\d_]+))?/),
              p = !d && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              h = "Win32" === n;
            let f = "MacIntel" === n;
            return (
              !d &&
                f &&
                s.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${o}x${l}`) >= 0 &&
                ((d = a.match(/(Version)\/([\d.]+)/)),
                d || (d = [0, 1, "13_0_0"]),
                (f = !1)),
              c && !h && ((r.os = "android"), (r.android = !0)),
              (d || p || u) && ((r.os = "ios"), (r.ios = !0)),
              r
            );
          })(e)),
        G
      );
    }
    function W() {
      return (
        F ||
          (F = (function () {
            const e = T();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        F
      );
    }
    const X = {
      on(e, t, s) {
        const i = this;
        if ("function" != typeof t) return i;
        const n = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][n](t);
          }),
          i
        );
      },
      once(e, t, s) {
        const i = this;
        if ("function" != typeof t) return i;
        function n() {
          i.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
          for (var s = arguments.length, a = new Array(s), r = 0; r < s; r++)
            a[r] = arguments[r];
          t.apply(i, a);
        }
        return (n.__emitterProxy = t), i.on(e, n, s);
      },
      onAny(e, t) {
        const s = this;
        if ("function" != typeof e) return s;
        const i = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return s.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((i, n) => {
                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(n, 1);
                  });
            }),
            s)
          : s;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners) return e;
        let t, s, i;
        for (var n = arguments.length, a = new Array(n), r = 0; r < n; r++)
          a[r] = arguments[r];
        "string" == typeof a[0] || Array.isArray(a[0])
          ? ((t = a[0]), (s = a.slice(1, a.length)), (i = e))
          : ((t = a[0].events), (s = a[0].data), (i = a[0].context || e)),
          s.unshift(i);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(i, [t, ...s]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(i, s);
                });
          }),
          e
        );
      },
    };
    const Y = {
      updateSize: function () {
        const e = this;
        let t, s;
        const i = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : i[0].clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(i.css("padding-left") || 0, 10) -
              parseInt(i.css("padding-right") || 0, 10)),
            (s =
              s -
              parseInt(i.css("padding-top") || 0, 10) -
              parseInt(i.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }
        const i = e.params,
          { $wrapperEl: n, size: a, rtlTranslate: r, wrongRTL: o } = e,
          l = e.virtual && i.virtual.enabled,
          c = l ? e.virtual.slides.length : e.slides.length,
          d = n.children(`.${e.params.slideClass}`),
          u = l ? e.virtual.slides.length : d.length;
        let p = [];
        const h = [],
          f = [];
        let m = i.slidesOffsetBefore;
        "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
        let g = i.slidesOffsetAfter;
        "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          b = e.slidesGrid.length;
        let w = i.spaceBetween,
          S = -m,
          y = 0,
          x = 0;
        if (void 0 === a) return;
        "string" == typeof w &&
          w.indexOf("%") >= 0 &&
          (w = (parseFloat(w.replace("%", "")) / 100) * a),
          (e.virtualSize = -w),
          r
            ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          i.centeredSlides &&
            i.cssMode &&
            (I(e.wrapperEl, "--swiper-centered-offset-before", ""),
            I(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const C = i.grid && i.grid.rows > 1 && e.grid;
        let E;
        C && e.grid.initSlides(u);
        const T =
          "auto" === i.slidesPerView &&
          i.breakpoints &&
          Object.keys(i.breakpoints).filter(
            (e) => void 0 !== i.breakpoints[e].slidesPerView
          ).length > 0;
        for (let n = 0; n < u; n += 1) {
          E = 0;
          const r = d.eq(n);
          if (
            (C && e.grid.updateSlide(n, r, u, t), "none" !== r.css("display"))
          ) {
            if ("auto" === i.slidesPerView) {
              T && (d[n].style[t("width")] = "");
              const a = getComputedStyle(r[0]),
                o = r[0].style.transform,
                l = r[0].style.webkitTransform;
              if (
                (o && (r[0].style.transform = "none"),
                l && (r[0].style.webkitTransform = "none"),
                i.roundLengths)
              )
                E = e.isHorizontal() ? r.outerWidth(!0) : r.outerHeight(!0);
              else {
                const e = s(a, "width"),
                  t = s(a, "padding-left"),
                  i = s(a, "padding-right"),
                  n = s(a, "margin-left"),
                  o = s(a, "margin-right"),
                  l = a.getPropertyValue("box-sizing");
                if (l && "border-box" === l) E = e + n + o;
                else {
                  const { clientWidth: s, offsetWidth: a } = r[0];
                  E = e + t + i + n + o + (a - s);
                }
              }
              o && (r[0].style.transform = o),
                l && (r[0].style.webkitTransform = l),
                i.roundLengths && (E = Math.floor(E));
            } else
              (E = (a - (i.slidesPerView - 1) * w) / i.slidesPerView),
                i.roundLengths && (E = Math.floor(E)),
                d[n] && (d[n].style[t("width")] = `${E}px`);
            d[n] && (d[n].swiperSlideSize = E),
              f.push(E),
              i.centeredSlides
                ? ((S = S + E / 2 + y / 2 + w),
                  0 === y && 0 !== n && (S = S - a / 2 - w),
                  0 === n && (S = S - a / 2 - w),
                  Math.abs(S) < 0.001 && (S = 0),
                  i.roundLengths && (S = Math.floor(S)),
                  x % i.slidesPerGroup == 0 && p.push(S),
                  h.push(S))
                : (i.roundLengths && (S = Math.floor(S)),
                  (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                    e.params.slidesPerGroup ==
                    0 && p.push(S),
                  h.push(S),
                  (S = S + E + w)),
              (e.virtualSize += E + w),
              (y = E),
              (x += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, a) + g),
          r &&
            o &&
            ("slide" === i.effect || "coverflow" === i.effect) &&
            n.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
          i.setWrapperSize &&
            n.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
          C && e.grid.updateWrapperSize(E, p, t),
          !i.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < p.length; s += 1) {
            let n = p[s];
            i.roundLengths && (n = Math.floor(n)),
              p[s] <= e.virtualSize - a && t.push(n);
          }
          (p = t),
            Math.floor(e.virtualSize - a) - Math.floor(p[p.length - 1]) > 1 &&
              p.push(e.virtualSize - a);
        }
        if ((0 === p.length && (p = [0]), 0 !== i.spaceBetween)) {
          const s = e.isHorizontal() && r ? "marginLeft" : t("marginRight");
          d.filter((e, t) => !i.cssMode || t !== d.length - 1).css({
            [s]: `${w}px`,
          });
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
          let e = 0;
          f.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
            (e -= i.spaceBetween);
          const t = e - a;
          p = p.map((e) => (e < 0 ? -m : e > t ? t + g : e));
        }
        if (i.centerInsufficientSlides) {
          let e = 0;
          if (
            (f.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
            (e -= i.spaceBetween),
            e < a)
          ) {
            const t = (a - e) / 2;
            p.forEach((e, s) => {
              p[s] = e - t;
            }),
              h.forEach((e, s) => {
                h[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: d,
            snapGrid: p,
            slidesGrid: h,
            slidesSizesGrid: f,
          }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
        ) {
          I(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
            I(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - f[f.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        if (
          (u !== c && e.emit("slidesLengthChange"),
          p.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          h.length !== b && e.emit("slidesGridLengthChange"),
          i.watchSlidesProgress && e.updateSlidesOffset(),
          !(l || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
        ) {
          const t = `${i.containerModifierClass}backface-hidden`,
            s = e.$el.hasClass(t);
          u <= i.maxBackfaceHiddenSlides
            ? s || e.$el.addClass(t)
            : s && e.$el.removeClass(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          i = t.virtual && t.params.virtual.enabled;
        let n,
          a = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const r = (e) =>
          i
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            t.visibleSlides.each((e) => {
              s.push(e);
            });
          else
            for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
              const e = t.activeIndex + n;
              if (e > t.slides.length && !i) break;
              s.push(r(e));
            }
        else s.push(r(t.activeIndex));
        for (n = 0; n < s.length; n += 1)
          if (void 0 !== s[n]) {
            const e = s[n].offsetHeight;
            a = e > a ? e : a;
          }
        (a || 0 === a) && t.$wrapperEl.css("height", `${a}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let s = 0; s < t.length; s += 1)
          t[s].swiperSlideOffset = e.isHorizontal()
            ? t[s].offsetLeft
            : t[s].offsetTop;
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          s = t.params,
          { slides: i, rtlTranslate: n, snapGrid: a } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let r = -e;
        n && (r = e),
          i.removeClass(s.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < i.length; e += 1) {
          const o = i[e];
          let l = o.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (l -= i[0].swiperSlideOffset);
          const c =
              (r + (s.centeredSlides ? t.minTranslate() : 0) - l) /
              (o.swiperSlideSize + s.spaceBetween),
            d =
              (r - a[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) /
              (o.swiperSlideSize + s.spaceBetween),
            u = -(r - l),
            p = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (p > 1 && p <= t.size) ||
            (u <= 0 && p >= t.size)) &&
            (t.visibleSlides.push(o),
            t.visibleSlidesIndexes.push(e),
            i.eq(e).addClass(s.slideVisibleClass)),
            (o.progress = n ? -c : c),
            (o.originalProgress = n ? -d : d);
        }
        t.visibleSlides = $(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: n, isBeginning: a, isEnd: r } = t;
        const o = a,
          l = r;
        0 === i
          ? ((n = 0), (a = !0), (r = !0))
          : ((n = (e - t.minTranslate()) / i), (a = n <= 0), (r = n >= 1)),
          Object.assign(t, { progress: n, isBeginning: a, isEnd: r }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          a && !o && t.emit("reachBeginning toEdge"),
          r && !l && t.emit("reachEnd toEdge"),
          ((o && !a) || (l && !r)) && t.emit("fromEdge"),
          t.emit("progress", n);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: s,
            $wrapperEl: i,
            activeIndex: n,
            realIndex: a,
          } = e,
          r = e.virtual && s.virtual.enabled;
        let o;
        t.removeClass(
          `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
        ),
          (o = r
            ? e.$wrapperEl.find(
                `.${s.slideClass}[data-swiper-slide-index="${n}"]`
              )
            : t.eq(n)),
          o.addClass(s.slideActiveClass),
          s.loop &&
            (o.hasClass(s.slideDuplicateClass)
              ? i
                  .children(
                    `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${a}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass)
              : i
                  .children(
                    `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${a}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass));
        let l = o.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
        s.loop &&
          0 === l.length &&
          ((l = t.eq(0)), l.addClass(s.slideNextClass));
        let c = o.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
        s.loop &&
          0 === c.length &&
          ((c = t.eq(-1)), c.addClass(s.slidePrevClass)),
          s.loop &&
            (l.hasClass(s.slideDuplicateClass)
              ? i
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass)
              : i
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass),
            c.hasClass(s.slideDuplicateClass)
              ? i
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)
              : i
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: i,
            snapGrid: n,
            params: a,
            activeIndex: r,
            realIndex: o,
            snapIndex: l,
          } = t;
        let c,
          d = e;
        if (void 0 === d) {
          for (let e = 0; e < i.length; e += 1)
            void 0 !== i[e + 1]
              ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
                ? (d = e)
                : s >= i[e] && s < i[e + 1] && (d = e + 1)
              : s >= i[e] && (d = e);
          a.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
        }
        if (n.indexOf(s) >= 0) c = n.indexOf(s);
        else {
          const e = Math.min(a.slidesPerGroupSkip, d);
          c = e + Math.floor((d - e) / a.slidesPerGroup);
        }
        if ((c >= n.length && (c = n.length - 1), d === r))
          return void (
            c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
          );
        const u = parseInt(
          t.slides.eq(d).attr("data-swiper-slide-index") || d,
          10
        );
        Object.assign(t, {
          snapIndex: c,
          realIndex: u,
          previousIndex: r,
          activeIndex: d,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          o !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          s = t.params,
          i = $(e).closest(`.${s.slideClass}`)[0];
        let n,
          a = !1;
        if (i)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === i) {
              (a = !0), (n = e);
              break;
            }
        if (!i || !a)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = i),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                $(i).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = n),
          s.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const K = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const {
          params: t,
          rtlTranslate: s,
          translate: i,
          $wrapperEl: n,
        } = this;
        if (t.virtualTranslate) return s ? -i : i;
        if (t.cssMode) return i;
        let a = V(n[0], e);
        return s && (a = -a), a || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          {
            rtlTranslate: i,
            params: n,
            $wrapperEl: a,
            wrapperEl: r,
            progress: o,
          } = s;
        let l,
          c = 0,
          d = 0;
        s.isHorizontal() ? (c = i ? -e : e) : (d = e),
          n.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
          n.cssMode
            ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -c : -d)
            : n.virtualTranslate ||
              a.transform(`translate3d(${c}px, ${d}px, 0px)`),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? c : d);
        const u = s.maxTranslate() - s.minTranslate();
        (l = 0 === u ? 0 : (e - s.minTranslate()) / u),
          l !== o && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, s, i, n) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          void 0 === i && (i = !0);
        const a = this,
          { params: r, wrapperEl: o } = a;
        if (a.animating && r.preventInteractionOnTransition) return !1;
        const l = a.minTranslate(),
          c = a.maxTranslate();
        let d;
        if (
          ((d = i && e > l ? l : i && e < c ? c : e),
          a.updateProgress(d),
          r.cssMode)
        ) {
          const e = a.isHorizontal();
          if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!a.support.smoothScroll)
              return (
                H({ swiper: a, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            o.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (a.setTransition(0),
              a.setTranslate(d),
              s &&
                (a.emit("beforeTransitionStart", t, n),
                a.emit("transitionEnd")))
            : (a.setTransition(t),
              a.setTranslate(d),
              s &&
                (a.emit("beforeTransitionStart", t, n),
                a.emit("transitionStart")),
              a.animating ||
                ((a.animating = !0),
                a.onTranslateToWrapperTransitionEnd ||
                  (a.onTranslateToWrapperTransitionEnd = function (e) {
                    a &&
                      !a.destroyed &&
                      e.target === this &&
                      (a.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        a.onTranslateToWrapperTransitionEnd
                      ),
                      a.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        a.onTranslateToWrapperTransitionEnd
                      ),
                      (a.onTranslateToWrapperTransitionEnd = null),
                      delete a.onTranslateToWrapperTransitionEnd,
                      s && a.emit("transitionEnd"));
                  }),
                a.$wrapperEl[0].addEventListener(
                  "transitionend",
                  a.onTranslateToWrapperTransitionEnd
                ),
                a.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  a.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function Q(e) {
      let { swiper: t, runCallbacks: s, direction: i, step: n } = e;
      const { activeIndex: a, previousIndex: r } = t;
      let o = i;
      if (
        (o || (o = a > r ? "next" : a < r ? "prev" : "reset"),
        t.emit(`transition${n}`),
        s && a !== r)
      ) {
        if ("reset" === o) return void t.emit(`slideResetTransition${n}`);
        t.emit(`slideChangeTransition${n}`),
          "next" === o
            ? t.emit(`slideNextTransition${n}`)
            : t.emit(`slidePrevTransition${n}`);
      }
    }
    const Z = {
      slideTo: function (e, t, s, i, n) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          "number" != typeof e && "string" != typeof e)
        )
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          );
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const a = this;
        let r = e;
        r < 0 && (r = 0);
        const {
          params: o,
          snapGrid: l,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: u,
          rtlTranslate: p,
          wrapperEl: h,
          enabled: f,
        } = a;
        if (
          (a.animating && o.preventInteractionOnTransition) ||
          (!f && !i && !n)
        )
          return !1;
        const m = Math.min(a.params.slidesPerGroupSkip, r);
        let g = m + Math.floor((r - m) / a.params.slidesPerGroup);
        g >= l.length && (g = l.length - 1),
          (u || o.initialSlide || 0) === (d || 0) &&
            s &&
            a.emit("beforeSlideChangeStart");
        const v = -l[g];
        if ((a.updateProgress(v), o.normalizeSlideIndex))
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * v),
              s = Math.floor(100 * c[e]),
              i = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= s && t < i - (i - s) / 2
                ? (r = e)
                : t >= s && t < i && (r = e + 1)
              : t >= s && (r = e);
          }
        if (a.initialized && r !== u) {
          if (!a.allowSlideNext && v < a.translate && v < a.minTranslate())
            return !1;
          if (
            !a.allowSlidePrev &&
            v > a.translate &&
            v > a.maxTranslate() &&
            (u || 0) !== r
          )
            return !1;
        }
        let b;
        if (
          ((b = r > u ? "next" : r < u ? "prev" : "reset"),
          (p && -v === a.translate) || (!p && v === a.translate))
        )
          return (
            a.updateActiveIndex(r),
            o.autoHeight && a.updateAutoHeight(),
            a.updateSlidesClasses(),
            "slide" !== o.effect && a.setTranslate(v),
            "reset" !== b && (a.transitionStart(s, b), a.transitionEnd(s, b)),
            !1
          );
        if (o.cssMode) {
          const e = a.isHorizontal(),
            s = p ? v : -v;
          if (0 === t) {
            const t = a.virtual && a.params.virtual.enabled;
            t &&
              ((a.wrapperEl.style.scrollSnapType = "none"),
              (a._immediateVirtual = !0)),
              (h[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (a.wrapperEl.style.scrollSnapType = ""),
                    (a._swiperImmediateVirtual = !1);
                });
          } else {
            if (!a.support.smoothScroll)
              return (
                H({ swiper: a, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          a.setTransition(t),
          a.setTranslate(v),
          a.updateActiveIndex(r),
          a.updateSlidesClasses(),
          a.emit("beforeTransitionStart", t, i),
          a.transitionStart(s, b),
          0 === t
            ? a.transitionEnd(s, b)
            : a.animating ||
              ((a.animating = !0),
              a.onSlideToWrapperTransitionEnd ||
                (a.onSlideToWrapperTransitionEnd = function (e) {
                  a &&
                    !a.destroyed &&
                    e.target === this &&
                    (a.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      a.onSlideToWrapperTransitionEnd
                    ),
                    a.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      a.onSlideToWrapperTransitionEnd
                    ),
                    (a.onSlideToWrapperTransitionEnd = null),
                    delete a.onSlideToWrapperTransitionEnd,
                    a.transitionEnd(s, b));
                }),
              a.$wrapperEl[0].addEventListener(
                "transitionend",
                a.onSlideToWrapperTransitionEnd
              ),
              a.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                a.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e, t, s, i) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0);
        const n = this;
        let a = e;
        return n.params.loop && (a += n.loopedSlides), n.slideTo(a, t, s, i);
      },
      slideNext: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          { animating: n, enabled: a, params: r } = i;
        if (!a) return i;
        let o = r.slidesPerGroup;
        "auto" === r.slidesPerView &&
          1 === r.slidesPerGroup &&
          r.slidesPerGroupAuto &&
          (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const l = i.activeIndex < r.slidesPerGroupSkip ? 1 : o;
        if (r.loop) {
          if (n && r.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        return r.rewind && i.isEnd
          ? i.slideTo(0, e, t, s)
          : i.slideTo(i.activeIndex + l, e, t, s);
      },
      slidePrev: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          {
            params: n,
            animating: a,
            snapGrid: r,
            slidesGrid: o,
            rtlTranslate: l,
            enabled: c,
          } = i;
        if (!c) return i;
        if (n.loop) {
          if (a && n.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = d(l ? i.translate : -i.translate),
          p = r.map((e) => d(e));
        let h = r[p.indexOf(u) - 1];
        if (void 0 === h && n.cssMode) {
          let e;
          r.forEach((t, s) => {
            u >= t && (e = s);
          }),
            void 0 !== e && (h = r[e > 0 ? e - 1 : e]);
        }
        let f = 0;
        if (
          (void 0 !== h &&
            ((f = o.indexOf(h)),
            f < 0 && (f = i.activeIndex - 1),
            "auto" === n.slidesPerView &&
              1 === n.slidesPerGroup &&
              n.slidesPerGroupAuto &&
              ((f = f - i.slidesPerViewDynamic("previous", !0) + 1),
              (f = Math.max(f, 0)))),
          n.rewind && i.isBeginning)
        ) {
          const n =
            i.params.virtual && i.params.virtual.enabled && i.virtual
              ? i.virtual.slides.length - 1
              : i.slides.length - 1;
          return i.slideTo(n, e, t, s);
        }
        return i.slideTo(f, e, t, s);
      },
      slideReset: function (e, t, s) {
        return (
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, s)
        );
      },
      slideToClosest: function (e, t, s, i) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === i && (i = 0.5);
        const n = this;
        let a = n.activeIndex;
        const r = Math.min(n.params.slidesPerGroupSkip, a),
          o = r + Math.floor((a - r) / n.params.slidesPerGroup),
          l = n.rtlTranslate ? n.translate : -n.translate;
        if (l >= n.snapGrid[o]) {
          const e = n.snapGrid[o];
          l - e > (n.snapGrid[o + 1] - e) * i && (a += n.params.slidesPerGroup);
        } else {
          const e = n.snapGrid[o - 1];
          l - e <= (n.snapGrid[o] - e) * i && (a -= n.params.slidesPerGroup);
        }
        return (
          (a = Math.max(a, 0)),
          (a = Math.min(a, n.slidesGrid.length - 1)),
          n.slideTo(a, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: s } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let n,
          a = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (n = parseInt($(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? a < e.loopedSlides - i / 2 ||
                a > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (a = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  B(() => {
                    e.slideTo(a);
                  }))
                : e.slideTo(a)
              : a > e.slides.length - i
              ? (e.loopFix(),
                (a = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                B(() => {
                  e.slideTo(a);
                }))
              : e.slideTo(a);
        } else e.slideTo(a);
      },
    };
    const J = {
      loopCreate: function () {
        const e = this,
          t = C(),
          { params: s, $wrapperEl: i } = e,
          n = i.children().length > 0 ? $(i.children()[0].parentNode) : i;
        n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
        let a = n.children(`.${s.slideClass}`);
        if (s.loopFillGroupWithBlank) {
          const e = s.slidesPerGroup - (a.length % s.slidesPerGroup);
          if (e !== s.slidesPerGroup) {
            for (let i = 0; i < e; i += 1) {
              const e = $(t.createElement("div")).addClass(
                `${s.slideClass} ${s.slideBlankClass}`
              );
              n.append(e);
            }
            a = n.children(`.${s.slideClass}`);
          }
        }
        "auto" !== s.slidesPerView ||
          s.loopedSlides ||
          (s.loopedSlides = a.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(s.loopedSlides || s.slidesPerView, 10)
          )),
          (e.loopedSlides += s.loopAdditionalSlides),
          e.loopedSlides > a.length && (e.loopedSlides = a.length);
        const r = [],
          o = [];
        a.each((t, s) => {
          const i = $(t);
          s < e.loopedSlides && o.push(t),
            s < a.length && s >= a.length - e.loopedSlides && r.push(t),
            i.attr("data-swiper-slide-index", s);
        });
        for (let e = 0; e < o.length; e += 1)
          n.append($(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
        for (let e = r.length - 1; e >= 0; e -= 1)
          n.prepend($(r[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: s,
          loopedSlides: i,
          allowSlidePrev: n,
          allowSlideNext: a,
          snapGrid: r,
          rtlTranslate: o,
        } = e;
        let l;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const c = -r[t] - e.getTranslate();
        if (t < i) {
          (l = s.length - 3 * i + t), (l += i);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((o ? -e.translate : e.translate) - c);
        } else if (t >= s.length - i) {
          (l = -s.length + t + i), (l += i);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((o ? -e.translate : e.translate) - c);
        }
        (e.allowSlidePrev = n), (e.allowSlideNext = a), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: s } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          s.removeAttr("data-swiper-slide-index");
      },
    };
    function ee(e) {
      const t = this,
        s = C(),
        i = T(),
        n = t.touchEventsData,
        { params: a, touches: r, enabled: o } = t;
      if (!o) return;
      if (t.animating && a.preventInteractionOnTransition) return;
      !t.animating && a.cssMode && a.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let c = $(l.target);
      if ("wrapper" === a.touchEventsTarget && !c.closest(t.wrapperEl).length)
        return;
      if (
        ((n.isTouchEvent = "touchstart" === l.type),
        !n.isTouchEvent && "which" in l && 3 === l.which)
      )
        return;
      if (!n.isTouchEvent && "button" in l && l.button > 0) return;
      if (n.isTouched && n.isMoved) return;
      !!a.noSwipingClass &&
        "" !== a.noSwipingClass &&
        l.target &&
        l.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (c = $(e.path[0]));
      const d = a.noSwipingSelector
          ? a.noSwipingSelector
          : `.${a.noSwipingClass}`,
        u = !(!l.target || !l.target.shadowRoot);
      if (
        a.noSwiping &&
        (u
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(s) {
                  return s && s !== C() && s !== T()
                    ? (s.assignedSlot && (s = s.assignedSlot),
                      s.closest(e) || t(s.getRootNode().host))
                    : null;
                })(t)
              );
            })(d, l.target)
          : c.closest(d)[0])
      )
        return void (t.allowClick = !0);
      if (a.swipeHandler && !c.closest(a.swipeHandler)[0]) return;
      (r.currentX =
        "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
        (r.currentY =
          "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
      const p = r.currentX,
        h = r.currentY,
        f = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
        m = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
      if (f && (p <= m || p >= i.innerWidth - m)) {
        if ("prevent" !== f) return;
        e.preventDefault();
      }
      if (
        (Object.assign(n, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (r.startX = p),
        (r.startY = h),
        (n.touchStartTime = N()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        a.threshold > 0 && (n.allowThresholdMove = !1),
        "touchstart" !== l.type)
      ) {
        let e = !0;
        c.is(n.focusableElements) &&
          ((e = !1), "SELECT" === c[0].nodeName && (n.isTouched = !1)),
          s.activeElement &&
            $(s.activeElement).is(n.focusableElements) &&
            s.activeElement !== c[0] &&
            s.activeElement.blur();
        const i = e && t.allowTouchMove && a.touchStartPreventDefault;
        (!a.touchStartForcePreventDefault && !i) ||
          c[0].isContentEditable ||
          l.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !a.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", l);
    }
    function te(e) {
      const t = C(),
        s = this,
        i = s.touchEventsData,
        { params: n, touches: a, rtlTranslate: r, enabled: o } = s;
      if (!o) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          s.emit("touchMoveOpposite", l)
        );
      if (i.isTouchEvent && "touchmove" !== l.type) return;
      const c =
          "touchmove" === l.type &&
          l.targetTouches &&
          (l.targetTouches[0] || l.changedTouches[0]),
        d = "touchmove" === l.type ? c.pageX : l.pageX,
        u = "touchmove" === l.type ? c.pageY : l.pageY;
      if (l.preventedByNestedSwiper) return (a.startX = d), void (a.startY = u);
      if (!s.allowTouchMove)
        return (
          $(l.target).is(i.focusableElements) || (s.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(a, {
              startX: d,
              startY: u,
              currentX: d,
              currentY: u,
            }),
            (i.touchStartTime = N()))
          )
        );
      if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
        if (s.isVertical()) {
          if (
            (u < a.startY && s.translate <= s.maxTranslate()) ||
            (u > a.startY && s.translate >= s.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (d < a.startX && s.translate <= s.maxTranslate()) ||
          (d > a.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        i.isTouchEvent &&
        t.activeElement &&
        l.target === t.activeElement &&
        $(l.target).is(i.focusableElements)
      )
        return (i.isMoved = !0), void (s.allowClick = !1);
      if (
        (i.allowTouchCallbacks && s.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (a.currentX = d), (a.currentY = u);
      const p = a.currentX - a.startX,
        h = a.currentY - a.startY;
      if (s.params.threshold && Math.sqrt(p ** 2 + h ** 2) < s.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (s.isHorizontal() && a.currentY === a.startY) ||
        (s.isVertical() && a.currentX === a.startX)
          ? (i.isScrolling = !1)
          : p * p + h * h >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(h), Math.abs(p))) / Math.PI),
            (i.isScrolling = s.isHorizontal()
              ? e > n.touchAngle
              : 90 - e > n.touchAngle));
      }
      if (
        (i.isScrolling && s.emit("touchMoveOpposite", l),
        void 0 === i.startMoving &&
          ((a.currentX === a.startX && a.currentY === a.startY) ||
            (i.startMoving = !0)),
        i.isScrolling)
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (s.allowClick = !1),
        !n.cssMode && l.cancelable && l.preventDefault(),
        n.touchMoveStopPropagation && !n.nested && l.stopPropagation(),
        i.isMoved ||
          (n.loop && !n.cssMode && s.loopFix(),
          (i.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating &&
            s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (i.allowMomentumBounce = !1),
          !n.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", l)),
        s.emit("sliderMove", l),
        (i.isMoved = !0);
      let f = s.isHorizontal() ? p : h;
      (a.diff = f),
        (f *= n.touchRatio),
        r && (f = -f),
        (s.swipeDirection = f > 0 ? "prev" : "next"),
        (i.currentTranslate = f + i.startTranslate);
      let m = !0,
        g = n.resistanceRatio;
      if (
        (n.touchReleaseOnEdges && (g = 0),
        f > 0 && i.currentTranslate > s.minTranslate()
          ? ((m = !1),
            n.resistance &&
              (i.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + i.startTranslate + f) ** g))
          : f < 0 &&
            i.currentTranslate < s.maxTranslate() &&
            ((m = !1),
            n.resistance &&
              (i.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - i.startTranslate - f) ** g)),
        m && (l.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        n.threshold > 0)
      ) {
        if (!(Math.abs(f) > n.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (a.startX = a.currentX),
            (a.startY = a.currentY),
            (i.currentTranslate = i.startTranslate),
            void (a.diff = s.isHorizontal()
              ? a.currentX - a.startX
              : a.currentY - a.startY)
          );
      }
      n.followFinger &&
        !n.cssMode &&
        (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
          n.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        s.params.freeMode &&
          n.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate));
    }
    function se(e) {
      const t = this,
        s = t.touchEventsData,
        {
          params: i,
          touches: n,
          rtlTranslate: a,
          slidesGrid: r,
          enabled: o,
        } = t;
      if (!o) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", l),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && i.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      i.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = N(),
        d = c - s.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          d < 300 &&
            c - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((s.lastClickTime = N()),
        B(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === n.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let u;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (u = i.followFinger
          ? a
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        i.cssMode)
      )
        return;
      if (t.params.freeMode && i.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let p = 0,
        h = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < r.length;
        e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
      ) {
        const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        void 0 !== r[e + t]
          ? u >= r[e] && u < r[e + t] && ((p = e), (h = r[e + t] - r[e]))
          : u >= r[e] && ((p = e), (h = r[r.length - 1] - r[r.length - 2]));
      }
      let f = null,
        m = null;
      i.rewind &&
        (t.isBeginning
          ? (m =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (f = 0));
      const g = (u - r[p]) / h,
        v = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      if (d > i.longSwipesMs) {
        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (g >= i.longSwipesRatio
            ? t.slideTo(i.rewind && t.isEnd ? f : p + v)
            : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (g > 1 - i.longSwipesRatio
              ? t.slideTo(p + v)
              : null !== m && g < 0 && Math.abs(g) > i.longSwipesRatio
              ? t.slideTo(m)
              : t.slideTo(p));
      } else {
        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
          ? l.target === t.navigation.nextEl
            ? t.slideTo(p + v)
            : t.slideTo(p)
          : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : p + v),
            "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p));
      }
    }
    function ie() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: n, snapGrid: a } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = n),
        (e.allowSlideNext = i),
        e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
    }
    function ne(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function ae() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
      if (!i) return;
      let n;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const a = e.maxTranslate() - e.minTranslate();
      (n = 0 === a ? 0 : (e.translate - e.minTranslate()) / a),
        n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let re = !1;
    function oe() {}
    const le = (e, t) => {
      const s = C(),
        {
          params: i,
          touchEvents: n,
          el: a,
          wrapperEl: r,
          device: o,
          support: l,
        } = e,
        c = !!i.nested,
        d = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;
      if (l.touch) {
        const t = !(
          "touchstart" !== n.start ||
          !l.passiveListener ||
          !i.passiveListeners
        ) && { passive: !0, capture: !1 };
        a[d](n.start, e.onTouchStart, t),
          a[d](
            n.move,
            e.onTouchMove,
            l.passiveListener ? { passive: !1, capture: c } : c
          ),
          a[d](n.end, e.onTouchEnd, t),
          n.cancel && a[d](n.cancel, e.onTouchEnd, t);
      } else
        a[d](n.start, e.onTouchStart, !1),
          s[d](n.move, e.onTouchMove, c),
          s[d](n.end, e.onTouchEnd, !1);
      (i.preventClicks || i.preventClicksPropagation) &&
        a[d]("click", e.onClick, !0),
        i.cssMode && r[d]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[u](
              o.ios || o.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              ie,
              !0
            )
          : e[u]("observerUpdate", ie, !0);
    };
    const ce = {
        attachEvents: function () {
          const e = this,
            t = C(),
            { params: s, support: i } = e;
          (e.onTouchStart = ee.bind(e)),
            (e.onTouchMove = te.bind(e)),
            (e.onTouchEnd = se.bind(e)),
            s.cssMode && (e.onScroll = ae.bind(e)),
            (e.onClick = ne.bind(e)),
            i.touch && !re && (t.addEventListener("touchstart", oe), (re = !0)),
            le(e, "on");
        },
        detachEvents: function () {
          le(this, "off");
        },
      },
      de = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const ue = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: s,
            loopedSlides: i = 0,
            params: n,
            $el: a,
          } = e,
          r = n.breakpoints;
        if (!r || (r && 0 === Object.keys(r).length)) return;
        const o = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
        if (!o || e.currentBreakpoint === o) return;
        const l = (o in r ? r[o] : void 0) || e.originalParams,
          c = de(e, n),
          d = de(e, l),
          u = n.enabled;
        c && !d
          ? (a.removeClass(
              `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !c &&
            d &&
            (a.addClass(`${n.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === n.grid.fill)) &&
              a.addClass(`${n.containerModifierClass}grid-column`),
            e.emitContainerClasses());
        const p = l.direction && l.direction !== n.direction,
          h = n.loop && (l.slidesPerView !== n.slidesPerView || p);
        p && s && e.changeDirection(), z(e.params, l);
        const f = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          u && !f ? e.disable() : !u && f && e.enable(),
          (e.currentBreakpoint = o),
          e.emit("_beforeBreakpoint", l),
          h &&
            s &&
            (e.loopDestroy(),
            e.loopCreate(),
            e.updateSlides(),
            e.slideTo(t - i + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t, s) {
        if ((void 0 === t && (t = "window"), !e || ("container" === t && !s)))
          return;
        let i = !1;
        const n = T(),
          a = "window" === t ? n.innerHeight : s.clientHeight,
          r = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: a * t, point: e };
            }
            return { value: e, point: e };
          });
        r.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < r.length; e += 1) {
          const { point: a, value: o } = r[e];
          "window" === t
            ? n.matchMedia(`(min-width: ${o}px)`).matches && (i = a)
            : o <= s.clientWidth && (i = a);
        }
        return i || "max";
      },
    };
    const pe = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: s,
            rtl: i,
            $el: n,
            device: a,
            support: r,
          } = e,
          o = (function (e, t) {
            const s = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((i) => {
                      e[i] && s.push(t + i);
                    })
                  : "string" == typeof e && s.push(t + e);
              }),
              s
            );
          })(
            [
              "initialized",
              s.direction,
              { "pointer-events": !r.touch },
              { "free-mode": e.params.freeMode && s.freeMode.enabled },
              { autoheight: s.autoHeight },
              { rtl: i },
              { grid: s.grid && s.grid.rows > 1 },
              {
                "grid-column":
                  s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
              },
              { android: a.android },
              { ios: a.ios },
              { "css-mode": s.cssMode },
              { centered: s.cssMode && s.centeredSlides },
            ],
            s.containerModifierClass
          );
        t.push(...o), n.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const he = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function fe(e, t) {
      return function (s) {
        void 0 === s && (s = {});
        const i = Object.keys(s)[0],
          n = s[i];
        "object" == typeof n && null !== n
          ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
              !0 === e[i] &&
              (e[i] = { auto: !0 }),
            i in e && "enabled" in n
              ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                "object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                z(t, s))
              : z(t, s))
          : z(t, s);
      };
    }
    const me = {
        eventsEmitter: X,
        update: Y,
        translate: K,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode || s.$wrapperEl.transition(e),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: i } = s;
            i.cssMode ||
              (i.autoHeight && s.updateAutoHeight(),
              Q({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: i } = s;
            (s.animating = !1),
              i.cssMode ||
                (s.setTransition(0),
                Q({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: Z,
        loop: J,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (s.style.cursor = "move"),
              (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (s.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: ce,
        breakpoints: ue,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: i } = s;
            if (i) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: pe,
        images: {
          loadImage: function (e, t, s, i, n, a) {
            const r = T();
            let o;
            function l() {
              a && a();
            }
            $(e).parent("picture")[0] || (e.complete && n)
              ? l()
              : t
              ? ((o = new r.Image()),
                (o.onload = l),
                (o.onerror = l),
                i && (o.sizes = i),
                s && (o.srcset = s),
                t && (o.src = t))
              : l();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
              const i = e.imagesToLoad[s];
              e.loadImage(
                i,
                i.currentSrc || i.getAttribute("src"),
                i.srcset || i.getAttribute("srcset"),
                i.sizes || i.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      ge = {};
    class ve {
      constructor() {
        let e, t;
        for (var s = arguments.length, i = new Array(s), n = 0; n < s; n++)
          i[n] = arguments[n];
        if (
          (1 === i.length &&
          i[0].constructor &&
          "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
            ? (t = i[0])
            : ([e, t] = i),
          t || (t = {}),
          (t = z({}, t)),
          e && !t.el && (t.el = e),
          t.el && $(t.el).length > 1)
        ) {
          const e = [];
          return (
            $(t.el).each((s) => {
              const i = z({}, t, { el: s });
              e.push(new ve(i));
            }),
            e
          );
        }
        const a = this;
        (a.__swiper__ = !0),
          (a.support = U()),
          (a.device = R({ userAgent: t.userAgent })),
          (a.browser = W()),
          (a.eventsListeners = {}),
          (a.eventsAnyListeners = []),
          (a.modules = [...a.__modules__]),
          t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
        const r = {};
        a.modules.forEach((e) => {
          e({
            swiper: a,
            extendParams: fe(t, r),
            on: a.on.bind(a),
            once: a.once.bind(a),
            off: a.off.bind(a),
            emit: a.emit.bind(a),
          });
        });
        const o = z({}, he, r);
        return (
          (a.params = z({}, o, ge, t)),
          (a.originalParams = z({}, a.params)),
          (a.passedParams = z({}, t)),
          a.params &&
            a.params.on &&
            Object.keys(a.params.on).forEach((e) => {
              a.on(e, a.params.on[e]);
            }),
          a.params && a.params.onAny && a.onAny(a.params.onAny),
          (a.$ = $),
          Object.assign(a, {
            enabled: a.params.enabled,
            el: e,
            classNames: [],
            slides: $(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === a.params.direction,
            isVertical: () => "vertical" === a.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: a.params.allowSlideNext,
            allowSlidePrev: a.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (a.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (a.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                a.support.touch || !a.params.simulateTouch
                  ? a.touchEventsTouch
                  : a.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: a.params.focusableElements,
              lastClickTime: N(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: a.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          a.emit("_swiper"),
          a.params.init && a.init(),
          a
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = s.minTranslate(),
          n = (s.maxTranslate() - i) * e + i;
        s.translateTo(n, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return e.className
          .split(" ")
          .filter(
            (e) =>
              0 === e.indexOf("swiper-slide") ||
              0 === e.indexOf(t.params.slideClass)
          )
          .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((s) => {
          const i = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: s,
          slides: i,
          slidesGrid: n,
          slidesSizesGrid: a,
          size: r,
          activeIndex: o,
        } = this;
        let l = 1;
        if (s.centeredSlides) {
          let e,
            t = i[o].swiperSlideSize;
          for (let s = o + 1; s < i.length; s += 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (l += 1), t > r && (e = !0));
          for (let s = o - 1; s >= 0; s -= 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (l += 1), t > r && (e = !0));
        } else if ("current" === e)
          for (let e = o + 1; e < i.length; e += 1) {
            (t ? n[e] + a[e] - n[o] < r : n[e] - n[o] < r) && (l += 1);
          }
        else
          for (let e = o - 1; e >= 0; e -= 1) {
            n[o] - n[e] < r && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let n;
        s.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (i(), e.params.autoHeight && e.updateAutoHeight())
            : ((n =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              n || i()),
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const s = this,
          i = s.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.$el
              .removeClass(`${s.params.containerModifierClass}${i}`)
              .addClass(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const s = $(e || t.params.el);
        if (!(e = s[0])) return !1;
        e.swiper = t;
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let n = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = $(e.shadowRoot.querySelector(i()));
            return (t.children = (e) => s.children(e)), t;
          }
          return s.children(i());
        })();
        if (0 === n.length && t.params.createElements) {
          const e = C().createElement("div");
          (n = $(e)),
            (e.className = t.params.wrapperClass),
            s.append(e),
            s.children(`.${t.params.slideClass}`).each((e) => {
              n.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: s,
            el: e,
            $wrapperEl: n,
            wrapperEl: n[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
            wrongRTL: "-webkit-box" === n.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const s = this,
          { params: i, $el: n, $wrapperEl: a, slides: r } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            i.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              n.removeAttr("style"),
              a.removeAttr("style"),
              r &&
                r.length &&
                r
                  .removeClass(
                    [
                      i.slideVisibleClass,
                      i.slideActiveClass,
                      i.slideNextClass,
                      i.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        z(ge, e);
      }
      static get extendedDefaults() {
        return ge;
      }
      static get defaults() {
        return he;
      }
      static installModule(e) {
        ve.prototype.__modules__ || (ve.prototype.__modules__ = []);
        const t = ve.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => ve.installModule(e)), ve)
          : (ve.installModule(e), ve);
      }
    }
    Object.keys(me).forEach((e) => {
      Object.keys(me[e]).forEach((t) => {
        ve.prototype[t] = me[e][t];
      });
    }),
      ve.use([
        function (e) {
          let { swiper: t, on: s, emit: i } = e;
          const n = T();
          let a = null,
            r = null;
          const o = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (i("beforeResize"), i("resize"));
            },
            l = () => {
              t && !t.destroyed && t.initialized && i("orientationchange");
            };
          s("init", () => {
            t.params.resizeObserver && void 0 !== n.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((a = new ResizeObserver((e) => {
                  r = n.requestAnimationFrame(() => {
                    const { width: s, height: i } = t;
                    let n = s,
                      a = i;
                    e.forEach((e) => {
                      let { contentBoxSize: s, contentRect: i, target: r } = e;
                      (r && r !== t.el) ||
                        ((n = i ? i.width : (s[0] || s).inlineSize),
                        (a = i ? i.height : (s[0] || s).blockSize));
                    }),
                      (n === s && a === i) || o();
                  });
                })),
                a.observe(t.el))
              : (n.addEventListener("resize", o),
                n.addEventListener("orientationchange", l));
          }),
            s("destroy", () => {
              r && n.cancelAnimationFrame(r),
                a && a.unobserve && t.el && (a.unobserve(t.el), (a = null)),
                n.removeEventListener("resize", o),
                n.removeEventListener("orientationchange", l);
            });
        },
        function (e) {
          let { swiper: t, extendParams: s, on: i, emit: n } = e;
          const a = [],
            r = T(),
            o = function (e, t) {
              void 0 === t && (t = {});
              const s = new (r.MutationObserver || r.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void n("observerUpdate", e[0]);
                  const t = function () {
                    n("observerUpdate", e[0]);
                  };
                  r.requestAnimationFrame
                    ? r.requestAnimationFrame(t)
                    : r.setTimeout(t, 0);
                }
              );
              s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                a.push(s);
            };
          s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            i("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = t.$el.parents();
                  for (let t = 0; t < e.length; t += 1) o(e[t]);
                }
                o(t.$el[0], { childList: t.params.observeSlideChildren }),
                  o(t.$wrapperEl[0], { attributes: !1 });
              }
            }),
            i("destroy", () => {
              a.forEach((e) => {
                e.disconnect();
              }),
                a.splice(0, a.length);
            });
        },
      ]);
    const be = ve;
    function we(e, t, s, i) {
      const n = C();
      return (
        e.params.createElements &&
          Object.keys(i).forEach((a) => {
            if (!s[a] && !0 === s.auto) {
              let r = e.$el.children(`.${i[a]}`)[0];
              r ||
                ((r = n.createElement("div")),
                (r.className = i[a]),
                e.$el.append(r)),
                (s[a] = r),
                (t[a] = r);
            }
          }),
        s
      );
    }
    function Se(e) {
      let { swiper: t, extendParams: s, on: i, emit: n } = e;
      function a(e) {
        let s;
        return (
          e &&
            ((s = $(e)),
            t.params.uniqueNavElements &&
              "string" == typeof e &&
              s.length > 1 &&
              1 === t.$el.find(e).length &&
              (s = t.$el.find(e))),
          s
        );
      }
      function r(e, s) {
        const i = t.params.navigation;
        e &&
          e.length > 0 &&
          (e[s ? "addClass" : "removeClass"](i.disabledClass),
          e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s),
          t.params.watchOverflow &&
            t.enabled &&
            e[t.isLocked ? "addClass" : "removeClass"](i.lockClass));
      }
      function o() {
        if (t.params.loop) return;
        const { $nextEl: e, $prevEl: s } = t.navigation;
        r(s, t.isBeginning && !t.params.rewind),
          r(e, t.isEnd && !t.params.rewind);
      }
      function l(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev();
      }
      function c(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
      }
      function d() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = we(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !e.nextEl && !e.prevEl)
        )
          return;
        const s = a(e.nextEl),
          i = a(e.prevEl);
        s && s.length > 0 && s.on("click", c),
          i && i.length > 0 && i.on("click", l),
          Object.assign(t.navigation, {
            $nextEl: s,
            nextEl: s && s[0],
            $prevEl: i,
            prevEl: i && i[0],
          }),
          t.enabled ||
            (s && s.addClass(e.lockClass), i && i.addClass(e.lockClass));
      }
      function u() {
        const { $nextEl: e, $prevEl: s } = t.navigation;
        e &&
          e.length &&
          (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)),
          s &&
            s.length &&
            (s.off("click", l),
            s.removeClass(t.params.navigation.disabledClass));
      }
      s({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
        },
      }),
        (t.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        i("init", () => {
          d(), o();
        }),
        i("toEdge fromEdge lock unlock", () => {
          o();
        }),
        i("destroy", () => {
          u();
        }),
        i("enable disable", () => {
          const { $nextEl: e, $prevEl: s } = t.navigation;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.navigation.lockClass
            ),
            s &&
              s[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              );
        }),
        i("click", (e, s) => {
          const { $nextEl: i, $prevEl: a } = t.navigation,
            r = s.target;
          if (t.params.navigation.hideOnClick && !$(r).is(a) && !$(r).is(i)) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === r || t.pagination.el.contains(r))
            )
              return;
            let e;
            i
              ? (e = i.hasClass(t.params.navigation.hiddenClass))
              : a && (e = a.hasClass(t.params.navigation.hiddenClass)),
              n(!0 === e ? "navigationShow" : "navigationHide"),
              i && i.toggleClass(t.params.navigation.hiddenClass),
              a && a.toggleClass(t.params.navigation.hiddenClass);
          }
        }),
        Object.assign(t.navigation, { update: o, init: d, destroy: u });
    }
    function ye(e) {
      return (
        void 0 === e && (e = ""),
        `.${e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")}`
      );
    }
    function xe(e) {
      let { swiper: t, extendParams: s, on: i, emit: n } = e;
      const a = "swiper-pagination";
      let r;
      s({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${a}-bullet`,
          bulletActiveClass: `${a}-bullet-active`,
          modifierClass: `${a}-`,
          currentClass: `${a}-current`,
          totalClass: `${a}-total`,
          hiddenClass: `${a}-hidden`,
          progressbarFillClass: `${a}-progressbar-fill`,
          progressbarOppositeClass: `${a}-progressbar-opposite`,
          clickableClass: `${a}-clickable`,
          lockClass: `${a}-lock`,
          horizontalClass: `${a}-horizontal`,
          verticalClass: `${a}-vertical`,
        },
      }),
        (t.pagination = { el: null, $el: null, bullets: [] });
      let o = 0;
      function l() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          !t.pagination.$el ||
          0 === t.pagination.$el.length
        );
      }
      function c(e, s) {
        const { bulletActiveClass: i } = t.params.pagination;
        e[s]().addClass(`${i}-${s}`)[s]().addClass(`${i}-${s}-${s}`);
      }
      function d() {
        const e = t.rtl,
          s = t.params.pagination;
        if (l()) return;
        const i =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          a = t.pagination.$el;
        let d;
        const u = t.params.loop
          ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup)
          : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((d = Math.ceil(
                (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
              )),
              d > i - 1 - 2 * t.loopedSlides && (d -= i - 2 * t.loopedSlides),
              d > u - 1 && (d -= u),
              d < 0 && "bullets" !== t.params.paginationType && (d = u + d))
            : (d = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
          "bullets" === s.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const i = t.pagination.bullets;
          let n, l, u;
          if (
            (s.dynamicBullets &&
              ((r = i
                .eq(0)
                [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              a.css(
                t.isHorizontal() ? "width" : "height",
                r * (s.dynamicMainBullets + 4) + "px"
              ),
              s.dynamicMainBullets > 1 &&
                void 0 !== t.previousIndex &&
                ((o += d - (t.previousIndex - t.loopedSlides || 0)),
                o > s.dynamicMainBullets - 1
                  ? (o = s.dynamicMainBullets - 1)
                  : o < 0 && (o = 0)),
              (n = Math.max(d - o, 0)),
              (l = n + (Math.min(i.length, s.dynamicMainBullets) - 1)),
              (u = (l + n) / 2)),
            i.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${s.bulletActiveClass}${e}`)
                .join(" ")
            ),
            a.length > 1)
          )
            i.each((e) => {
              const t = $(e),
                i = t.index();
              i === d && t.addClass(s.bulletActiveClass),
                s.dynamicBullets &&
                  (i >= n &&
                    i <= l &&
                    t.addClass(`${s.bulletActiveClass}-main`),
                  i === n && c(t, "prev"),
                  i === l && c(t, "next"));
            });
          else {
            const e = i.eq(d),
              a = e.index();
            if ((e.addClass(s.bulletActiveClass), s.dynamicBullets)) {
              const e = i.eq(n),
                r = i.eq(l);
              for (let e = n; e <= l; e += 1)
                i.eq(e).addClass(`${s.bulletActiveClass}-main`);
              if (t.params.loop)
                if (a >= i.length) {
                  for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                    i.eq(i.length - e).addClass(`${s.bulletActiveClass}-main`);
                  i.eq(i.length - s.dynamicMainBullets - 1).addClass(
                    `${s.bulletActiveClass}-prev`
                  );
                } else c(e, "prev"), c(r, "next");
              else c(e, "prev"), c(r, "next");
            }
          }
          if (s.dynamicBullets) {
            const n = Math.min(i.length, s.dynamicMainBullets + 4),
              a = (r * n - r) / 2 - u * r,
              o = e ? "right" : "left";
            i.css(t.isHorizontal() ? o : "top", `${a}px`);
          }
        }
        if (
          ("fraction" === s.type &&
            (a.find(ye(s.currentClass)).text(s.formatFractionCurrent(d + 1)),
            a.find(ye(s.totalClass)).text(s.formatFractionTotal(u))),
          "progressbar" === s.type)
        ) {
          let e;
          e = s.progressbarOpposite
            ? t.isHorizontal()
              ? "vertical"
              : "horizontal"
            : t.isHorizontal()
            ? "horizontal"
            : "vertical";
          const i = (d + 1) / u;
          let n = 1,
            r = 1;
          "horizontal" === e ? (n = i) : (r = i),
            a
              .find(ye(s.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${r})`)
              .transition(t.params.speed);
        }
        "custom" === s.type && s.renderCustom
          ? (a.html(s.renderCustom(t, d + 1, u)), n("paginationRender", a[0]))
          : n("paginationUpdate", a[0]),
          t.params.watchOverflow &&
            t.enabled &&
            a[t.isLocked ? "addClass" : "removeClass"](s.lockClass);
      }
      function u() {
        const e = t.params.pagination;
        if (l()) return;
        const s =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          i = t.pagination.$el;
        let a = "";
        if ("bullets" === e.type) {
          let n = t.params.loop
            ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            !t.params.loop &&
            n > s &&
            (n = s);
          for (let s = 0; s < n; s += 1)
            e.renderBullet
              ? (a += e.renderBullet.call(t, s, e.bulletClass))
              : (a += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
          i.html(a), (t.pagination.bullets = i.find(ye(e.bulletClass)));
        }
        "fraction" === e.type &&
          ((a = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          i.html(a)),
          "progressbar" === e.type &&
            ((a = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
            i.html(a)),
          "custom" !== e.type && n("paginationRender", t.pagination.$el[0]);
      }
      function p() {
        t.params.pagination = we(
          t,
          t.originalParams.pagination,
          t.params.pagination,
          { el: "swiper-pagination" }
        );
        const e = t.params.pagination;
        if (!e.el) return;
        let s = $(e.el);
        0 !== s.length &&
          (t.params.uniqueNavElements &&
            "string" == typeof e.el &&
            s.length > 1 &&
            ((s = t.$el.find(e.el)),
            s.length > 1 &&
              (s = s.filter((e) => $(e).parents(".swiper")[0] === t.el))),
          "bullets" === e.type && e.clickable && s.addClass(e.clickableClass),
          s.addClass(e.modifierClass + e.type),
          s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          "bullets" === e.type &&
            e.dynamicBullets &&
            (s.addClass(`${e.modifierClass}${e.type}-dynamic`),
            (o = 0),
            e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
          "progressbar" === e.type &&
            e.progressbarOpposite &&
            s.addClass(e.progressbarOppositeClass),
          e.clickable &&
            s.on("click", ye(e.bulletClass), function (e) {
              e.preventDefault();
              let s = $(this).index() * t.params.slidesPerGroup;
              t.params.loop && (s += t.loopedSlides), t.slideTo(s);
            }),
          Object.assign(t.pagination, { $el: s, el: s[0] }),
          t.enabled || s.addClass(e.lockClass));
      }
      function h() {
        const e = t.params.pagination;
        if (l()) return;
        const s = t.pagination.$el;
        s.removeClass(e.hiddenClass),
          s.removeClass(e.modifierClass + e.type),
          s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          t.pagination.bullets &&
            t.pagination.bullets.removeClass &&
            t.pagination.bullets.removeClass(e.bulletActiveClass),
          e.clickable && s.off("click", ye(e.bulletClass));
      }
      i("init", () => {
        p(), u(), d();
      }),
        i("activeIndexChange", () => {
          (t.params.loop || void 0 === t.snapIndex) && d();
        }),
        i("snapIndexChange", () => {
          t.params.loop || d();
        }),
        i("slidesLengthChange", () => {
          t.params.loop && (u(), d());
        }),
        i("snapGridLengthChange", () => {
          t.params.loop || (u(), d());
        }),
        i("destroy", () => {
          h();
        }),
        i("enable disable", () => {
          const { $el: e } = t.pagination;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.pagination.lockClass
            );
        }),
        i("lock unlock", () => {
          d();
        }),
        i("click", (e, s) => {
          const i = s.target,
            { $el: a } = t.pagination;
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            a.length > 0 &&
            !$(i).hasClass(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && i === t.navigation.nextEl) ||
                (t.navigation.prevEl && i === t.navigation.prevEl))
            )
              return;
            const e = a.hasClass(t.params.pagination.hiddenClass);
            n(!0 === e ? "paginationShow" : "paginationHide"),
              a.toggleClass(t.params.pagination.hiddenClass);
          }
        }),
        Object.assign(t.pagination, {
          render: u,
          update: d,
          init: p,
          destroy: h,
        });
    }
    function Ce(e) {
      let { swiper: t, extendParams: s, on: i } = e;
      s({ parallax: { enabled: !1 } });
      const n = (e, s) => {
          const { rtl: i } = t,
            n = $(e),
            a = i ? -1 : 1,
            r = n.attr("data-swiper-parallax") || "0";
          let o = n.attr("data-swiper-parallax-x"),
            l = n.attr("data-swiper-parallax-y");
          const c = n.attr("data-swiper-parallax-scale"),
            d = n.attr("data-swiper-parallax-opacity");
          if (
            (o || l
              ? ((o = o || "0"), (l = l || "0"))
              : t.isHorizontal()
              ? ((o = r), (l = "0"))
              : ((l = r), (o = "0")),
            (o =
              o.indexOf("%") >= 0
                ? parseInt(o, 10) * s * a + "%"
                : o * s * a + "px"),
            (l =
              l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px"),
            null != d)
          ) {
            const e = d - (d - 1) * (1 - Math.abs(s));
            n[0].style.opacity = e;
          }
          if (null == c) n.transform(`translate3d(${o}, ${l}, 0px)`);
          else {
            const e = c - (c - 1) * (1 - Math.abs(s));
            n.transform(`translate3d(${o}, ${l}, 0px) scale(${e})`);
          }
        },
        a = () => {
          const { $el: e, slides: s, progress: i, snapGrid: a } = t;
          e
            .children(
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
            )
            .each((e) => {
              n(e, i);
            }),
            s.each((e, s) => {
              let r = e.progress;
              t.params.slidesPerGroup > 1 &&
                "auto" !== t.params.slidesPerView &&
                (r += Math.ceil(s / 2) - i * (a.length - 1)),
                (r = Math.min(Math.max(r, -1), 1)),
                $(e)
                  .find(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                  )
                  .each((e) => {
                    n(e, r);
                  });
            });
        };
      i("beforeInit", () => {
        t.params.parallax.enabled &&
          ((t.params.watchSlidesProgress = !0),
          (t.originalParams.watchSlidesProgress = !0));
      }),
        i("init", () => {
          t.params.parallax.enabled && a();
        }),
        i("setTranslate", () => {
          t.params.parallax.enabled && a();
        }),
        i("setTransition", (e, s) => {
          t.params.parallax.enabled &&
            (function (e) {
              void 0 === e && (e = t.params.speed);
              const { $el: s } = t;
              s.find(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              ).each((t) => {
                const s = $(t);
                let i =
                  parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (i = 0), s.transition(i);
              });
            })(s);
        });
    }
    function Ee(e) {
      let t,
        { swiper: s, extendParams: i, on: n, emit: a } = e;
      function r() {
        const e = s.slides.eq(s.activeIndex);
        let i = s.params.autoplay.delay;
        e.attr("data-swiper-autoplay") &&
          (i = e.attr("data-swiper-autoplay") || s.params.autoplay.delay),
          clearTimeout(t),
          (t = B(() => {
            let e;
            s.params.autoplay.reverseDirection
              ? s.params.loop
                ? (s.loopFix(),
                  (e = s.slidePrev(s.params.speed, !0, !0)),
                  a("autoplay"))
                : s.isBeginning
                ? s.params.autoplay.stopOnLastSlide
                  ? l()
                  : ((e = s.slideTo(
                      s.slides.length - 1,
                      s.params.speed,
                      !0,
                      !0
                    )),
                    a("autoplay"))
                : ((e = s.slidePrev(s.params.speed, !0, !0)), a("autoplay"))
              : s.params.loop
              ? (s.loopFix(),
                (e = s.slideNext(s.params.speed, !0, !0)),
                a("autoplay"))
              : s.isEnd
              ? s.params.autoplay.stopOnLastSlide
                ? l()
                : ((e = s.slideTo(0, s.params.speed, !0, !0)), a("autoplay"))
              : ((e = s.slideNext(s.params.speed, !0, !0)), a("autoplay")),
              ((s.params.cssMode && s.autoplay.running) || !1 === e) && r();
          }, i));
      }
      function o() {
        return (
          void 0 === t &&
          !s.autoplay.running &&
          ((s.autoplay.running = !0), a("autoplayStart"), r(), !0)
        );
      }
      function l() {
        return (
          !!s.autoplay.running &&
          void 0 !== t &&
          (t && (clearTimeout(t), (t = void 0)),
          (s.autoplay.running = !1),
          a("autoplayStop"),
          !0)
        );
      }
      function c(e) {
        s.autoplay.running &&
          (s.autoplay.paused ||
            (t && clearTimeout(t),
            (s.autoplay.paused = !0),
            0 !== e && s.params.autoplay.waitForTransition
              ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                  s.$wrapperEl[0].addEventListener(e, u);
                })
              : ((s.autoplay.paused = !1), r())));
      }
      function d() {
        const e = C();
        "hidden" === e.visibilityState && s.autoplay.running && c(),
          "visible" === e.visibilityState &&
            s.autoplay.paused &&
            (r(), (s.autoplay.paused = !1));
      }
      function u(e) {
        s &&
          !s.destroyed &&
          s.$wrapperEl &&
          e.target === s.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach((e) => {
            s.$wrapperEl[0].removeEventListener(e, u);
          }),
          (s.autoplay.paused = !1),
          s.autoplay.running ? r() : l());
      }
      function p() {
        s.params.autoplay.disableOnInteraction
          ? l()
          : (a("autoplayPause"), c()),
          ["transitionend", "webkitTransitionEnd"].forEach((e) => {
            s.$wrapperEl[0].removeEventListener(e, u);
          });
      }
      function h() {
        s.params.autoplay.disableOnInteraction ||
          ((s.autoplay.paused = !1), a("autoplayResume"), r());
      }
      (s.autoplay = { running: !1, paused: !1 }),
        i({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        }),
        n("init", () => {
          if (s.params.autoplay.enabled) {
            o();
            C().addEventListener("visibilitychange", d),
              s.params.autoplay.pauseOnMouseEnter &&
                (s.$el.on("mouseenter", p), s.$el.on("mouseleave", h));
          }
        }),
        n("beforeTransitionStart", (e, t, i) => {
          s.autoplay.running &&
            (i || !s.params.autoplay.disableOnInteraction
              ? s.autoplay.pause(t)
              : l());
        }),
        n("sliderFirstMove", () => {
          s.autoplay.running &&
            (s.params.autoplay.disableOnInteraction ? l() : c());
        }),
        n("touchEnd", () => {
          s.params.cssMode &&
            s.autoplay.paused &&
            !s.params.autoplay.disableOnInteraction &&
            r();
        }),
        n("destroy", () => {
          s.$el.off("mouseenter", p),
            s.$el.off("mouseleave", h),
            s.autoplay.running && l();
          C().removeEventListener("visibilitychange", d);
        }),
        Object.assign(s.autoplay, { pause: c, run: r, start: o, stop: l });
    }
    function Te(e) {
      let t,
        s,
        i,
        { swiper: n, extendParams: a } = e;
      a({ grid: { rows: 1, fill: "column" } });
      n.grid = {
        initSlides: (e) => {
          const { slidesPerView: a } = n.params,
            { rows: r, fill: o } = n.params.grid;
          (s = t / r),
            (i = Math.floor(e / r)),
            (t = Math.floor(e / r) === e / r ? e : Math.ceil(e / r) * r),
            "auto" !== a && "row" === o && (t = Math.max(t, a * r));
        },
        updateSlide: (e, a, r, o) => {
          const { slidesPerGroup: l, spaceBetween: c } = n.params,
            { rows: d, fill: u } = n.params.grid;
          let p, h, f;
          if ("row" === u && l > 1) {
            const s = Math.floor(e / (l * d)),
              i = e - d * l * s,
              n = 0 === s ? l : Math.min(Math.ceil((r - s * d * l) / d), l);
            (f = Math.floor(i / n)),
              (h = i - f * n + s * l),
              (p = h + (f * t) / d),
              a.css({ "-webkit-order": p, order: p });
          } else
            "column" === u
              ? ((h = Math.floor(e / d)),
                (f = e - h * d),
                (h > i || (h === i && f === d - 1)) &&
                  ((f += 1), f >= d && ((f = 0), (h += 1))))
              : ((f = Math.floor(e / s)), (h = e - f * s));
          a.css(o("margin-top"), 0 !== f ? c && `${c}px` : "");
        },
        updateWrapperSize: (e, s, i) => {
          const {
              spaceBetween: a,
              centeredSlides: r,
              roundLengths: o,
            } = n.params,
            { rows: l } = n.params.grid;
          if (
            ((n.virtualSize = (e + a) * t),
            (n.virtualSize = Math.ceil(n.virtualSize / l) - a),
            n.$wrapperEl.css({ [i("width")]: `${n.virtualSize + a}px` }),
            r)
          ) {
            s.splice(0, s.length);
            const e = [];
            for (let t = 0; t < s.length; t += 1) {
              let i = s[t];
              o && (i = Math.floor(i)),
                s[t] < n.virtualSize + s[0] && e.push(i);
            }
            s.push(...e);
          }
        },
      };
    }
    function Pe() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    window.addEventListener("load", function (e) {
      Pe(),
        document.querySelector(".main-block__slider") &&
          new be(".main-block__slider", {
            modules: [Se, xe, Ce, Ee],
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            parallax: !0,
            observer: !0,
            observeParents: !0,
            slidesPerView: 1,
            spaceBetween: 50,
            autoHeight: !0,
            speed: 800,
            loop: !0,
            pagination: { el: ".controll-main-block__dotts", clickable: !0 },
            navigation: {
              nextEl: ".controll-main-block__arrows_next",
              prevEl: ".controll-main-block__arrows_prev",
            },
            on: {},
          }),
        document.querySelector(".product-card__slider") &&
          new be(".product-card__slider", {
            modules: [Ee],
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            parallax: !0,
            observer: !0,
            observeParents: !0,
            autoHeight: !0,
            speed: 800,
            loop: !0,
            breakpoints: {
              320: { slidesPerView: 1.06, spaceBetween: 10 },
              480: { slidesPerView: 1.3, spaceBetween: 15 },
              768: { slidesPerView: 2.06, spaceBetween: 15 },
              992: { slidesPerView: 2.4, spaceBetween: 15 },
              1268: { slidesPerView: 3, spaceBetween: 30 },
            },
            on: {},
          }),
        document.querySelector(".our-selection__slider") &&
          new be(".our-selection__slider", {
            modules: [Se, xe, Ce],
            parallax: !0,
            observer: !0,
            observeParents: !0,
            autoHeight: !0,
            speed: 800,
            navigation: {
              nextEl: ".our-selection-arrow__next",
              prevEl: ".our-selection-arrow__prev",
            },
            breakpoints: {
              320: { slidesPerView: 1.06, spaceBetween: 10 },
              480: { slidesPerView: 1.4, spaceBetween: 10 },
              620: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 2.2, spaceBetween: 15 },
              992: { slidesPerView: 2.5, spaceBetween: 20 },
              1268: { slidesPerView: 3, spaceBetween: 30 },
            },
            on: {},
          }),
        document.querySelector(".special-offers__slider") &&
          new be(".special-offers__slider", {
            modules: [Se, xe, Ce],
            parallax: !0,
            observer: !0,
            observeParents: !0,
            autoHeight: !0,
            speed: 800,
            navigation: {
              nextEl: ".special-offers-arrow__next",
              prevEl: ".special-offers-arrow__prev",
            },
            breakpoints: {
              320: { slidesPerView: 1.06, spaceBetween: 10 },
              480: { slidesPerView: 1.4, spaceBetween: 10 },
              620: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 2.2, spaceBetween: 15 },
              992: { slidesPerView: 2.5, spaceBetween: 20 },
              1268: { slidesPerView: 3, spaceBetween: 30 },
            },
            on: {},
          }),
        document.querySelector(".partner-banks__slider") &&
          new be(".partner-banks__slider", {
            modules: [Se, xe, Ce, Te],
            parallax: !0,
            observer: !0,
            observeParents: !0,
            autoHeight: !0,
            speed: 800,
            navigation: {
              nextEl: ".partner-banks-arrow__next",
              prevEl: ".partner-banks-arrow__prev",
            },
            breakpoints: {
              320: { slidesPerView: 1.06, spaceBetween: 10 },
              480: { slidesPerView: 1.5, spaceBetween: 10 },
              660: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 2.1, spaceBetween: 15 },
              992: { slidesPerView: 3, spaceBetween: 20 },
              1268: { slidesPerView: 4, spaceBetween: 30 },
            },
            on: {},
          }),
        document.querySelector(".trust-us__slider") &&
          new be(".trust-us__slider", {
            modules: [Se, xe],
            parallax: !0,
            observer: !0,
            observeParents: !0,
            autoHeight: !0,
            speed: 800,
            navigation: {
              nextEl: ".trust-us-arrow__next",
              prevEl: ".trust-us-arrow__prev",
            },
            breakpoints: {
              320: { slidesPerView: 1.06, spaceBetween: 10 },
              480: { slidesPerView: 1.5, spaceBetween: 10 },
              660: { slidesPerView: 2, spaceBetween: 15 },
              768: { slidesPerView: 2.1, spaceBetween: 15 },
              992: { slidesPerView: 3, spaceBetween: 20 },
              1400: { slidesPerView: 4, spaceBetween: 30 },
            },
            on: {},
          }),
        document.querySelector(".reviews__slider") &&
          new be(".reviews__slider", {
            modules: [],
            parallax: !0,
            observer: !0,
            observeParents: !0,
            speed: 800,
            loop: !0,
            breakpoints: {
              320: { slidesPerView: 1.06, spaceBetween: 10 },
              480: { slidesPerView: 1.3, spaceBetween: 15 },
              540: { slidesPerView: 1.7, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 15 },
              768: { slidesPerView: 2.1, spaceBetween: 15 },
              992: { slidesPerView: 3, spaceBetween: 20 },
              1400: { slidesPerView: 3, spaceBetween: 30 },
            },
            on: {},
          }),
        document.querySelector(".blog__slider") &&
          new be(".blog__slider", {
            modules: [Se, xe],
            parallax: !0,
            observer: !0,
            observeParents: !0,
            autoHeight: !0,
            speed: 800,
            navigation: {
              nextEl: ".blog-arrow__next",
              prevEl: ".blog-arrow__prev",
            },
            breakpoints: {
              320: { slidesPerView: 1.06, spaceBetween: 10 },
              480: { slidesPerView: 1.5, spaceBetween: 10 },
              660: { slidesPerView: 2, spaceBetween: 15 },
              768: { slidesPerView: 2.1, spaceBetween: 15 },
              992: { slidesPerView: 3, spaceBetween: 20 },
              1268: { slidesPerView: 4, spaceBetween: 30 },
            },
            on: {},
          });
    });
    let _e = [41.308308, 69.266321];
    ymaps.ready(function () {
      let e = new ymaps.Map("map", {
        center: _e,
        zoom: 17,
        controls: ["smallMapDefaultSet"],
      });
      e.controls.remove("searchControl"),
        e.controls.remove("trafficControl"),
        e.controls.remove("typeSelector"),
        e.controls.remove("fullscreenControl"),
        e.controls.remove("rulerControl");
      let t = new ymaps.Placemark(
        _e,
        { hintContent: "This hint", balloonContent: "This baloon" },
        {
          iconLayout: "default#image",
          iconImageHref: "img/icons/marker.svg",
          iconImageSize: [48, 66],
          iconImageOffset: [-25, -70],
        }
      );
      e.geoObjects.add(t);
    });
    let Le = !1;
    setTimeout(() => {
      if (Le) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0),
      document.addEventListener("click", function (e) {
        const t = e.target;
        window.innerWidth > 0 &&
          n.any() &&
          t.classList.contains("menu-catalog__arrow") &&
          (t.closest(".menu-catalog__item").classList.toggle("_hover"),
          t.closest("html").classList.toggle("_sub-menu-open"));
        window.innerWidth > 991.98 &&
          n.any() &&
          !t.closest(".menu-catalog__item") &&
          document.querySelectorAll(".menu-catalog__item._hover") &&
          h(document.querySelectorAll(".menu-catalog__item._hover"), "_hover");
        const s = document.querySelector(".bottom-header");
        window.innerWidth < 991.98 &&
          n.any() &&
          (t.classList.contains("menu-catalog__arrow")
            ? ((s.style.opacity = "0"), (s.style.visibility = "hidden"))
            : t.classList.contains("menu-back__btn") &&
              ((s.style.opacity = "1"), (s.style.visibility = "visible")),
          t.closest(".search-actions__icon") && u());
        t.closest(".search-actions__icon")
          ? (document
              .querySelector(".search-actions")
              .classList.toggle("_active"),
            document
              .querySelector(".search-actions__icon")
              .classList.toggle("_active"))
          : !t.closest(".search-actions") &&
            document.querySelector(".search-actions._active") &&
            (document
              .querySelector(".search-actions")
              .classList.remove("_active"),
            document
              .querySelector(".search-actions__icon")
              .classList.remove("_active"));
        document.documentElement.classList.contains("menu-open") &&
          t.classList.contains("search-back__btn") &&
          u();
        t.classList.contains("search-back__btn") && d();
        t.classList.contains("menu-back__btn") &&
          (document
            .querySelector(".search-actions__icon")
            .classList.remove("_active"),
          h(document.querySelectorAll(".menu-catalog__item._hover"), "_hover"),
          h(document.querySelectorAll(".search-actions._active"), "_active"),
          h(
            document.querySelectorAll("html._sub-menu-open"),
            "_sub-menu-open"
          ));
        t.classList.contains("menu-fullback") &&
          ((s.style.opacity = "1"),
          (s.style.visibility = "visible"),
          d(),
          h(document.querySelectorAll(".menu-catalog__item._hover"), "_hover"),
          h(document.querySelectorAll("html.menu-open"), "menu-open"),
          h(
            document.querySelectorAll("html._sub-menu-open"),
            "_sub-menu-open"
          ));
        t.closest(".about-company__play") &&
          (console.log("Working"),
          document
            .querySelector(".about-company__video")
            .setAttribute("controls", !0),
          document.querySelector(".about-company__video").paused
            ? (document.querySelector(".about-company__video").play(),
              document
                .querySelector(".about-company__content")
                .classList.add("_play"))
            : document.querySelector(".about-company__video").pause());
      }),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            l && (c(), document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        const e = document.querySelectorAll("[data-spollers]");
        if (e.length > 0) {
          const t = Array.from(e).filter(function (e, t, s) {
            return !e.dataset.spollers.split(",")[0];
          });
          t.length && i(t);
          let s = f(e, "spollers");
          function i(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                t.matches || !t
                  ? (e.classList.add("_spoller-init"),
                    n(e),
                    e.addEventListener("click", r))
                  : (e.classList.remove("_spoller-init"),
                    n(e, !1),
                    e.removeEventListener("click", r));
            });
          }
          function n(e, t = !0) {
            const s = e.querySelectorAll("[data-spoller]");
            s.length > 0 &&
              s.forEach((e) => {
                t
                  ? (e.removeAttribute("tabindex"),
                    e.classList.contains("_spoller-active") ||
                      (e.nextElementSibling.hidden = !0))
                  : (e.setAttribute("tabindex", "-1"),
                    (e.nextElementSibling.hidden = !1));
              });
          }
          function r(e) {
            const t = e.target;
            if (t.closest("[data-spoller]")) {
              const s = t.closest("[data-spoller]"),
                i = s.closest("[data-spollers]"),
                n = !!i.hasAttribute("data-one-spoller");
              i.querySelectorAll("._slide").length ||
                (n && !s.classList.contains("_spoller-active") && l(i),
                s.classList.toggle("_spoller-active"),
                o(s.nextElementSibling, 500)),
                e.preventDefault();
            }
          }
          function l(e) {
            const t = e.querySelector("[data-spoller]._spoller-active");
            t &&
              (t.classList.remove("_spoller-active"),
              a(t.nextElementSibling, 500));
          }
          s &&
            s.length &&
            s.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                i(e.itemsArray, e.matchMedia);
              }),
                i(e.itemsArray, e.matchMedia);
            });
        }
      })(),
      (function () {
        const e = document.querySelectorAll("[data-tabs]");
        let t = [];
        if (e.length > 0) {
          const n = location.hash.replace("#", "");
          n.startsWith("tab-") && (t = n.replace("tab-", "").split("-")),
            e.forEach((e, s) => {
              e.classList.add("_tab-init"),
                e.setAttribute("data-tabs-index", s),
                e.addEventListener("click", i),
                (function (e) {
                  const s = e.querySelectorAll("[data-tabs-titles]>*"),
                    i = e.querySelectorAll("[data-tabs-body]>*"),
                    n = e.dataset.tabsIndex,
                    a = t[0] == n;
                  if (a) {
                    e.querySelector(
                      "[data-tabs-titles]>._tab-active"
                    ).classList.remove("_tab-active");
                  }
                  i.length > 0 &&
                    i.forEach((e, i) => {
                      s[i].setAttribute("data-tabs-title", ""),
                        e.setAttribute("data-tabs-item", ""),
                        a && i == t[1] && s[i].classList.add("_tab-active"),
                        (e.hidden = !s[i].classList.contains("_tab-active"));
                    });
                })(e);
            });
          let a = f(e, "tabs");
          a &&
            a.length &&
            a.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                s(e.itemsArray, e.matchMedia);
              }),
                s(e.itemsArray, e.matchMedia);
            });
        }
        function s(e, t) {
          e.forEach((e) => {
            const s = (e = e.item).querySelector("[data-tabs-titles]"),
              i = e.querySelectorAll("[data-tabs-title]"),
              n = e.querySelector("[data-tabs-body]");
            e.querySelectorAll("[data-tabs-item]").forEach((a, r) => {
              t.matches
                ? (n.append(i[r]), n.append(a), e.classList.add("_tab-spoller"))
                : (s.append(i[r]), e.classList.remove("_tab-spoller"));
            });
          });
        }
        function i(e) {
          const t = e.target;
          if (t.closest("[data-tabs-title]")) {
            const s = t.closest("[data-tabs-title]"),
              i = s.closest("[data-tabs]");
            if (
              !s.classList.contains("_tab-active") &&
              !i.querySelectorAll("._slide").length
            ) {
              const e = i.querySelector("[data-tabs-title]._tab-active");
              e && e.classList.remove("_tab-active"),
                s.classList.add("_tab-active"),
                (function (e) {
                  const t = e.querySelectorAll("[data-tabs-title]"),
                    s = e.querySelectorAll("[data-tabs-item]"),
                    i = e.dataset.tabsIndex,
                    n = (function (e) {
                      if (e.hasAttribute("data-tabs-animate"))
                        return e.dataset.tabsAnimate > 0
                          ? e.dataset.tabsAnimate
                          : 500;
                    })(e);
                  s.length > 0 &&
                    s.forEach((e, s) => {
                      t[s].classList.contains("_tab-active")
                        ? (n ? r(e, n) : (e.hidden = !1),
                          e.closest(".popup") ||
                            (location.hash = `tab-${i}-${s}`))
                        : n
                        ? a(e, n)
                        : (e.hidden = !0);
                    });
                })(i);
            }
            e.preventDefault();
          }
        }
      })(),
      (function () {
        const e = document.querySelectorAll("[data-showmore]");
        let t, s;
        function i(e) {
          e.forEach((e) => {
            n(e.itemsArray, e.matchMedia);
          });
        }
        function n(e, t) {
          e.forEach((e) => {
            !(function (e, t = !1) {
              const s = (e = t ? e.item : e).querySelector(
                  "[data-showmore-content]"
                ),
                i = e.querySelector("[data-showmore-button]"),
                n = o(e, s);
              (t.matches || !t) &&
              n <
                (function (e) {
                  let t = e.offsetHeight;
                  e.style.removeProperty("height");
                  let s = e.offsetHeight;
                  return (e.style.height = `${t}px`), s;
                })(s)
                ? (a(s, 0, n), (i.hidden = !1))
                : (r(s, 0, n), (i.hidden = !0));
            })(e, t);
          });
        }
        function o(e, t) {
          let s = 0;
          if ("items" === (e.dataset.showmore ? e.dataset.showmore : "size")) {
            const e = t.dataset.showmoreContent ? t.dataset.showmoreContent : 3,
              i = t.children;
            for (let t = 1; t < i.length; t++) {
              if (((s += i[t - 1].offsetHeight), t === e)) break;
            }
          } else {
            s = t.dataset.showmoreContent ? t.dataset.showmoreContent : 150;
          }
          return s;
        }
        function l(e) {
          const l = e.target,
            c = e.type;
          if ("click" === c) {
            if (l.closest("[data-showmore-button]")) {
              const e = l
                  .closest("[data-showmore-button]")
                  .closest("[data-showmore]"),
                t = e.querySelector("[data-showmore-content]"),
                s = e.dataset.showmoreButton ? e.dataset.showmoreButton : "500",
                i = o(e, t);
              t.classList.contains("_slide") ||
                (e.classList.contains("_showmore-active")
                  ? a(t, s, i)
                  : r(t, s, i),
                e.classList.toggle("_showmore-active"));
            }
          } else "resize" === c && (t.length && n(t), s.length && i(s));
        }
        e.length &&
          ((t = Array.from(e).filter(function (e, t, s) {
            return !e.dataset.showmoreMedia;
          })),
          t.length && n(t),
          document.addEventListener("click", l),
          window.addEventListener("resize", l),
          (s = f(e, "showmoreMedia")),
          s &&
            s.length &&
            (s.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                n(e.itemsArray, e.matchMedia);
              });
            }),
            i(s)));
      })(),
      new i({}),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]"
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              b.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && b.validateInput(t));
          });
      })(),
      (function (e) {
        const t = document.forms;
        if (t.length)
          for (const e of t)
            e.addEventListener("submit", function (e) {
              s(e.target, e);
            }),
              e.addEventListener("reset", function (e) {
                const t = e.target;
                b.formClean(t);
              });
        async function s(t, s) {
          if (0 === (e ? b.getErrors(t) : 0)) {
            if (t.hasAttribute("data-ajax")) {
              s.preventDefault();
              const e = t.getAttribute("action")
                  ? t.getAttribute("action").trim()
                  : "#",
                n = t.getAttribute("method")
                  ? t.getAttribute("method").trim()
                  : "GET",
                a = new FormData(t);
              t.classList.add("_sending");
              const r = await fetch(e, { method: n, body: a });
              if (r.ok) {
                await r.json();
                t.classList.remove("_sending"), i(t);
              } else alert("Ошибка"), t.classList.remove("_sending");
            } else t.hasAttribute("data-dev") && (s.preventDefault(), i(t));
          } else {
            s.preventDefault();
            const e = t.querySelector("._form-error");
            e && t.hasAttribute("data-goto-error") && m(e, !0, 1e3);
          }
        }
        function i(e) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: e } })
          ),
            b.formClean(e),
            p(`[Формы]: ${"Форма отправлена!"}`);
        }
      })(!0),
      (function () {
        const e = document.querySelectorAll(".rating");
        e.length > 0 &&
          (function () {
            let t, s;
            for (let t = 0; t < e.length; t++) {
              i(e[t]);
            }
            function i(e) {
              n(e), a(), e.classList.contains("rating_set") && r(e);
            }
            function n(e) {
              (t = e.querySelector(".rating__active")),
                (s = e.querySelector(".rating__value"));
            }
            function a(e = s.innerHTML) {
              const i = e / 0.05;
              t.style.width = `${i}%`;
            }
            function r(e) {
              const t = e.querySelectorAll(".rating__item");
              for (let i = 0; i < t.length; i++) {
                const r = t[i];
                r.addEventListener("mouseenter", function (t) {
                  n(e), a(r.value);
                }),
                  r.addEventListener("mouseleave", function (e) {
                    a();
                  }),
                  r.addEventListener("click", function (t) {
                    n(e),
                      e.dataset.ajax
                        ? o(r.value, e)
                        : ((s.innerHTML = i + 1), a());
                  });
              }
            }
            async function o(e, t) {
              if (!t.classList.contains("rating_sending")) {
                t.classList.add("rating_sending");
                let e = await fetch("rating.json", { method: "GET" });
                if (e.ok) {
                  const i = (await e.json()).newRating;
                  (s.innerHTML = i), a(), t.classList.remove("rating_sending");
                } else alert("Ошибка"), t.classList.remove("rating_sending");
              }
            }
          })();
      })(),
      (v.selectModule = new g({}));
  })();
})();
