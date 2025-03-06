/*!
* jQuery Mobile 1.5.0-alpha.1
* (c) 2010, 2017 jQuery Foundation, Inc.
* jquery.org/license
*
* Modified to adapt the latest jQuery version (v3 above) included on WordPress 5.6:
* - (2020-12-11) - Try to access `.concat` of undefined `$.event.props` - removed.
* - (2021-02-04) - jQuery bind method is deprecated.
* - (2021-02-04) - jQuery unbind method is deprecated.
* - (2024-10-13) - Upgrade to 1.5.0-alpha.1
* - (2024-10-20) - Remove code unrelated to swipe feature
*/

(function(e, t, n) {
  typeof define == "function" && define.amd
    ? define(["jquery"], function(r) {
        return n(r, e, t), r.mobile;
      })
    : n(e.jQuery, e, t);
})(this, document, function(e, t, n, r) {
  (function(e, t, n, r) {
    function T(e) {
      while (e && typeof e.originalEvent != "undefined") e = e.originalEvent;
      return e;
    }

    function N(t, n) {
      var i = t.type,
        s,
        o,
        a,
        l,
        c,
        h,
        p,
        d,
        v;
      t = e.Event(t);
      t.type = n;
      s = t.originalEvent;
      o = [];
      i.search(/^(mouse|click)/) > -1 && (o = f);
      if (s) for (p = o.length, l; p; ) (l = o[--p]), (t[l] = s[l]);
      i.search(/mouse(down|up)|click/) > -1 && !t.which && (t.which = 1);
      if (i.search(/^touch/) !== -1) {
        a = T(s);
        i = a.touches;
        c = a.changedTouches;
        h = i && i.length ? i[0] : c && c.length ? c[0] : r;
        if (h) for (d = 0, v = u.length; d < v; d++) (l = u[d]), (t[l] = h[l]);
      }
      return t;
    }

    function P(t, n, r) {
      var i;
      if ((r && r[t]) || (!r && k(n.target, t)))
        (i = N(n, t)), e(n.target).trigger(i);
      return i;
    }

    function B(t) {
      var n = T(t).touches,
        r,
        i,
        o;
      n && n.length === 1 &&
        ((r = t.target),
        (i = C(r)),
        i.hasVirtualBinding &&
          ((E = w++),
          e.data(r, s, E),
          D(),
          M(),
          (d = !1),
          (o = T(t).touches[0]),
          (h = o.pageX),
          (p = o.pageY),
          P("vmouseover", t, i),
          P("vmousedown", t, i)));
    }

    function j(e) {
      if (g) return;
      d || P("vmousecancel", e, C(e.target));
      d = !0;
      _();
    }

    function F(t) {
      if (g) return;
      var n = T(t).touches[0],
        r = d,
        i = e.vmouse.moveDistanceThreshold,
        s = C(t.target);
      d =
        d || Math.abs(n.pageX - h) > i || Math.abs(n.pageY - p) > i;
      d && !r && P("vmousecancel", t, s);
      P("vmousemove", t, s);
      _();
    }

    function I(e) {
      if (g) return;
      A();
      var t = C(e.target),
        n,
        r;
      P("vmouseup", e, t);
      d ||
        ((n = P("vclick", e, t)),
        n &&
          n.isDefaultPrevented() &&
          ((r = T(e).changedTouches[0]),
          v.push({ touchID: E, x: r.clientX, y: r.clientY }),
          (m = !0)));
      P("vmouseout", e, t);
      d = !1;
      _();
    }

    function U(t) {
      var n = t.substr(1);
      return {
        setup: function() {
          q(this) || e.data(this, i, {});
          var r = e.data(this, i);
          r[t] = !0;
          l[t] = (l[t] || 0) + 1;
          l[t] === 1 && b.on(n, H);
          e(this).on(n, R);
          y &&
            ((l.touchstart = (l.touchstart || 0) + 1),
            l.touchstart === 1 &&
              b
                .on("touchstart", B)
                .on("touchend", I)
                .on("touchmove", F)
                .on("scroll", j));
        },
        teardown: function() {
          --l[t];
          l[t] || b.off(n, H);
          y &&
            (--l.touchstart,
            l.touchstart ||
              b
                .off("touchstart", B)
                .off("touchmove", F)
                .off("touchend", I)
                .off("scroll", j));
          var r = e(this),
            s = e.data(this, i);
          s && (s[t] = !1);
          r.off(n, R);
          q(this) || r.removeData(i);
        }
      };
    }

    var i = "virtualMouseBindings",
      s = "virtualTouchID",
      o = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(
        " "
      ),
      u = "clientX clientY pageX pageY screenX screenY".split(" "),
      a = e.event.mouseHooks ? e.event.mouseHooks.props : [],
      f = [],
      l = {},
      c = 0,
      h = 0,
      p = 0,
      d = !1,
      v = [],
      m = !1,
      g = !1,
      y = "addEventListener" in n,
      b = e(n),
      w = 1,
      E = 0,
      S,
      x;
    e.vmouse = {
      moveDistanceThreshold: 10,
      clickDistanceThreshold: 10,
      resetTimerDuration: 1500
    };
    for (x = 0; x < o.length; x++) e.event.special[o[x]] = U(o[x]);
    y &&
      n.addEventListener(
        "click",
        function(t) {
          var n = v.length,
            r = t.target,
            i,
            o,
            u,
            a,
            f,
            l;
          if (n) {
            i = t.clientX;
            o = t.clientY;
            S = e.vmouse.clickDistanceThreshold;
            u = r;
            while (u) {
              for (a = 0; a < n; a++) {
                f = v[a];
                l = 0;
                if (
                  (u === r &&
                    Math.abs(f.x - i) < S &&
                    Math.abs(f.y - o) < S) ||
                  e.data(u, s) === f.touchID
                ) {
                  t.preventDefault();
                  t.stopPropagation();
                  return;
                }
              }
              u = u.parentNode;
            }
          }
        },
        !0
      );
  })(e, t, n),
    function(e) {
      e.mobile = {};
    }(e),
    function(e, t) {
      var r = { touch: "ontouchend" in n };
      e.mobile.support = e.mobile.support || {};
      e.extend(e.support, r);
      e.extend(e.mobile.support, r);
    }(e),
    function(e, t, r) {
      function l(t, n, i, s) {
        var o = i.type;
        i.type = n;
        s ? e.event.trigger(i, r, t) : e.event.dispatch.call(t, i);
        i.type = o;
      }
      var i = e(n),
        s = e.mobile.support.touch,
        o = "touchmove scroll",
        u = s ? "touchstart" : "mousedown",
        a = s ? "touchend" : "mouseup",
        f = s ? "touchmove" : "mousemove";
      e.each(
        "touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(
          " "
        ),
        function(t, n) {
          e.fn[n] = function(e) {
            return e ? this.on(n, e) : this.trigger(n);
          };
          e.attrFn && (e.attrFn[n] = !0);
        }
      );
      e.event.special.swipe = {
        scrollSupressionThreshold: 30,
        durationThreshold: 1e3,
        horizontalDistanceThreshold: 30,
        verticalDistanceThreshold: 30,
        getLocation: function(e) {
          var n = t.pageXOffset,
            r = t.pageYOffset,
            i = e.clientX,
            s = e.clientY;
          if (
            (e.pageY === 0 && Math.floor(s) > Math.floor(e.pageY)) ||
            (e.pageX === 0 && Math.floor(i) > Math.floor(e.pageX))
          )
            (i -= n), (s -= r);
          else if (s < e.pageY - r || i < e.pageX - n)
            (i = e.pageX - n), (s = e.pageY - r);
          return { x: i, y: s };
        },
        start: function(t) {
          var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
            r = e.event.special.swipe.getLocation(n);
          return {
            time: new Date().getTime(),
            coords: [r.x, r.y],
            origin: e(t.target)
          };
        },
        stop: function(t) {
          var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
            r = e.event.special.swipe.getLocation(n);
          return { time: new Date().getTime(), coords: [r.x, r.y] };
        },
        handleSwipe: function(t, n, r, i) {
          if (
            n.time - t.time < e.event.special.swipe.durationThreshold &&
            Math.abs(t.coords[0] - n.coords[0]) >
              e.event.special.swipe.horizontalDistanceThreshold &&
            Math.abs(t.coords[1] - n.coords[1]) <
              e.event.special.swipe.verticalDistanceThreshold
          ) {
            var s = t.coords[0] > n.coords[0] ? "swipeleft" : "swiperight";
            return (
              l(r, "swipe", e.Event("swipe", { target: i, swipestart: t, swipestop: n }), !0),
              l(r, s, e.Event(s, { target: i, swipestart: t, swipestop: n }), !0),
              !0
            );
          }
          return !1;
        },
        eventInProgress: !1,
        setup: function() {
          var t,
            n = this,
            r = e(n),
            s = {};
          (t = e.data(this, "mobile-events")),
            t || ((t = { length: 0 }), e.data(this, "mobile-events", t)),
            t.length++,
            (t.swipe = s),
            (s.start = function(t) {
              if (e.event.special.swipe.eventInProgress) return;
              e.event.special.swipe.eventInProgress = !0;
              var r,
                o = e.event.special.swipe.start(t),
                u = t.target,
                l = !1;
              (s.move = function(t) {
                if (!o || t.isDefaultPrevented()) return;
                (r = e.event.special.swipe.stop(t)),
                  l ||
                    (l = e.event.special.swipe.handleSwipe(o, r, n, u)),
                    l && (e.event.special.swipe.eventInProgress = !1),
                    Math.abs(o.coords[0] - r.coords[0]) >
                      e.event.special.swipe.scrollSupressionThreshold &&
                      t.preventDefault();
              }),
                (s.stop = function() {
                  l = !0;
                  e.event.special.swipe.eventInProgress = !1;
                  i.off(f, s.move);
                  s.move = null;
                });
              i.on(f, s.move).one(a, s.stop);
            }),
            r.on(u, s.start);
        },
        teardown: function() {
          var t, n;
          (t = e.data(this, "mobile-events")),
            t && ((n = t.swipe), delete t.swipe, t.length--, t.length === 0 && e.removeData(this, "mobile-events")),
            n &&
              (n.start && e(this).off(u, n.start),
              n.move && i.off(f, n.move),
              n.stop && i.off(a, n.stop));
        }
      };
      e.each(
        { swipeleft: "swipe.left", swiperight: "swipe.right" },
        function(t, n) {
          e.event.special[t] = {
            setup: function() {
              e(this).on(n, e.noop);
            },
            teardown: function() {
              e(this).off(n);
            }
          };
        }
      );
    }(e, this);
});