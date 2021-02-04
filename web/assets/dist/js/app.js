/*! For license information please see app.js.LICENSE.txt */
!(function () {
  var t = {
      10: function (t, e, n) {
        'use strict'
        var o = function () {
            var t,
              e = function (t) {
                document.querySelector("[data-behaviour='Theme']").checked = t
              },
              n = function (t) {
                return t
                  ? document.documentElement.classList.add('dark')
                  : document.documentElement.classList.remove('dark')
              },
              o = function (t) {
                localStorage.theme = t ? 'dark' : 'light'
              }
            document
              .querySelector("[data-behaviour='Theme']")
              .addEventListener('click', function (t) {
                o(t.target.checked),
                  n(t.target.checked),
                  setTimeout(function () {
                    return document
                      .querySelector('.header')
                      .classList.remove('navigation-open')
                  }, 300)
              }),
              (t =
                'dark' === localStorage.theme ||
                (!('theme' in localStorage) &&
                  window.matchMedia('(prefers-color-scheme: dark)').matches)),
              e(t),
              o(t),
              n(t),
              window
                .matchMedia('(prefers-color-scheme: dark)')
                .addEventListener('change', function (t) {
                  e(t.matches), o(t.matches), n(t.matches)
                })
          },
          i = n(631),
          s = n.n(i)
        var r = function () {
            var t = document.getElementById('header')
            new (s())(t, {
              offset: 50,
              tolerance: { up: 0, down: 0 },
              classes: {
                initial: 'header--fixed',
                pinned: 'header--slide-down',
                unpinned: 'header--slide-up',
                top: 'header--top',
                notTop: 'header--not-top',
              },
            }).init()
          },
          a = function () {
            document
              .querySelector("[data-behaviour='Menu']")
              .addEventListener('click', function () {
                document
                  .getElementById('header')
                  .classList.toggle('navigation-open')
              })
          }
        o(), r(), a()
      },
      631: function (t) {
        t.exports = (function () {
          'use strict'
          function t() {
            return 'undefined' != typeof window
          }
          function e() {
            var t = !1
            try {
              var e = {
                get passive() {
                  t = !0
                },
              }
              window.addEventListener('test', e, e),
                window.removeEventListener('test', e, e)
            } catch (e) {
              t = !1
            }
            return t
          }
          function n() {
            return !!(
              t() &&
              function () {}.bind &&
              'classList' in document.documentElement &&
              Object.assign &&
              Object.keys &&
              requestAnimationFrame
            )
          }
          function o(t) {
            return 9 === t.nodeType
          }
          function i(t) {
            return t && t.document && o(t.document)
          }
          function s(t) {
            var e = t.document,
              n = e.body,
              o = e.documentElement
            return {
              scrollHeight: function () {
                return Math.max(
                  n.scrollHeight,
                  o.scrollHeight,
                  n.offsetHeight,
                  o.offsetHeight,
                  n.clientHeight,
                  o.clientHeight
                )
              },
              height: function () {
                return t.innerHeight || o.clientHeight || n.clientHeight
              },
              scrollY: function () {
                return void 0 !== t.pageYOffset
                  ? t.pageYOffset
                  : (o || n.parentNode || n).scrollTop
              },
            }
          }
          function r(t) {
            return {
              scrollHeight: function () {
                return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight)
              },
              height: function () {
                return Math.max(t.offsetHeight, t.clientHeight)
              },
              scrollY: function () {
                return t.scrollTop
              },
            }
          }
          function a(t) {
            return i(t) ? s(t) : r(t)
          }
          function c(t, n, o) {
            var i,
              s = e(),
              r = !1,
              c = a(t),
              l = c.scrollY(),
              u = {}
            function h() {
              var t = Math.round(c.scrollY()),
                e = c.height(),
                i = c.scrollHeight()
              ;(u.scrollY = t),
                (u.lastScrollY = l),
                (u.direction = t > l ? 'down' : 'up'),
                (u.distance = Math.abs(t - l)),
                (u.isOutOfBounds = t < 0 || t + e > i),
                (u.top = t <= n.offset[u.direction]),
                (u.bottom = t + e >= i),
                (u.toleranceExceeded = u.distance > n.tolerance[u.direction]),
                o(u),
                (l = t),
                (r = !1)
            }
            function d() {
              r || ((r = !0), (i = requestAnimationFrame(h)))
            }
            var f = !!s && { passive: !0, capture: !1 }
            return (
              t.addEventListener('scroll', d, f),
              h(),
              {
                destroy: function () {
                  cancelAnimationFrame(i), t.removeEventListener('scroll', d, f)
                },
              }
            )
          }
          function l(t) {
            return t === Object(t) ? t : { down: t, up: t }
          }
          function u(t, e) {
            ;(e = e || {}),
              Object.assign(this, u.options, e),
              (this.classes = Object.assign({}, u.options.classes, e.classes)),
              (this.elem = t),
              (this.tolerance = l(this.tolerance)),
              (this.offset = l(this.offset)),
              (this.initialised = !1),
              (this.frozen = !1)
          }
          return (
            (u.prototype = {
              constructor: u,
              init: function () {
                return (
                  u.cutsTheMustard &&
                    !this.initialised &&
                    (this.addClass('initial'),
                    (this.initialised = !0),
                    setTimeout(
                      function (t) {
                        t.scrollTracker = c(
                          t.scroller,
                          { offset: t.offset, tolerance: t.tolerance },
                          t.update.bind(t)
                        )
                      },
                      100,
                      this
                    )),
                  this
                )
              },
              destroy: function () {
                ;(this.initialised = !1),
                  Object.keys(this.classes).forEach(this.removeClass, this),
                  this.scrollTracker.destroy()
              },
              unpin: function () {
                ;(!this.hasClass('pinned') && this.hasClass('unpinned')) ||
                  (this.addClass('unpinned'),
                  this.removeClass('pinned'),
                  this.onUnpin && this.onUnpin.call(this))
              },
              pin: function () {
                this.hasClass('unpinned') &&
                  (this.addClass('pinned'),
                  this.removeClass('unpinned'),
                  this.onPin && this.onPin.call(this))
              },
              freeze: function () {
                ;(this.frozen = !0), this.addClass('frozen')
              },
              unfreeze: function () {
                ;(this.frozen = !1), this.removeClass('frozen')
              },
              top: function () {
                this.hasClass('top') ||
                  (this.addClass('top'),
                  this.removeClass('notTop'),
                  this.onTop && this.onTop.call(this))
              },
              notTop: function () {
                this.hasClass('notTop') ||
                  (this.addClass('notTop'),
                  this.removeClass('top'),
                  this.onNotTop && this.onNotTop.call(this))
              },
              bottom: function () {
                this.hasClass('bottom') ||
                  (this.addClass('bottom'),
                  this.removeClass('notBottom'),
                  this.onBottom && this.onBottom.call(this))
              },
              notBottom: function () {
                this.hasClass('notBottom') ||
                  (this.addClass('notBottom'),
                  this.removeClass('bottom'),
                  this.onNotBottom && this.onNotBottom.call(this))
              },
              shouldUnpin: function (t) {
                return 'down' === t.direction && !t.top && t.toleranceExceeded
              },
              shouldPin: function (t) {
                return ('up' === t.direction && t.toleranceExceeded) || t.top
              },
              addClass: function (t) {
                this.elem.classList.add.apply(
                  this.elem.classList,
                  this.classes[t].split(' ')
                )
              },
              removeClass: function (t) {
                this.elem.classList.remove.apply(
                  this.elem.classList,
                  this.classes[t].split(' ')
                )
              },
              hasClass: function (t) {
                return this.classes[t].split(' ').every(function (t) {
                  return this.classList.contains(t)
                }, this.elem)
              },
              update: function (t) {
                t.isOutOfBounds ||
                  (!0 !== this.frozen &&
                    (t.top ? this.top() : this.notTop(),
                    t.bottom ? this.bottom() : this.notBottom(),
                    this.shouldUnpin(t)
                      ? this.unpin()
                      : this.shouldPin(t) && this.pin()))
              },
            }),
            (u.options = {
              tolerance: { up: 0, down: 0 },
              offset: 0,
              scroller: t() ? window : null,
              classes: {
                frozen: 'headroom--frozen',
                pinned: 'headroom--pinned',
                unpinned: 'headroom--unpinned',
                top: 'headroom--top',
                notTop: 'headroom--not-top',
                bottom: 'headroom--bottom',
                notBottom: 'headroom--not-bottom',
                initial: 'headroom',
              },
            }),
            (u.cutsTheMustard = n()),
            u
          )
        })()
      },
      242: function () {},
    },
    e = {}
  function n(o) {
    if (e[o]) return e[o].exports
    var i = (e[o] = { exports: {} })
    return t[o].call(i.exports, i, i.exports, n), i.exports
  }
  ;(n.m = t),
    (n.x = function () {}),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default
            }
          : function () {
              return t
            }
      return n.d(e, { a: e }), e
    }),
    (n.d = function (t, e) {
      for (var o in e)
        n.o(e, o) &&
          !n.o(t, o) &&
          Object.defineProperty(t, o, { enumerable: !0, get: e[o] })
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (function () {
      var t = { 442: 0 },
        e = [[10], [242]],
        o = function () {},
        i = function (i, s) {
          for (
            var r, a, c = s[0], l = s[1], u = s[2], h = s[3], d = 0, f = [];
            d < c.length;
            d++
          )
            (a = c[d]), n.o(t, a) && t[a] && f.push(t[a][0]), (t[a] = 0)
          for (r in l) n.o(l, r) && (n.m[r] = l[r])
          for (u && u(n), i && i(s); f.length; ) f.shift()()
          return h && e.push.apply(e, h), o()
        },
        s = (self.webpackChunkelev8studio = self.webpackChunkelev8studio || [])
      function r() {
        for (var o, i = 0; i < e.length; i++) {
          for (var s = e[i], r = !0, a = 1; a < s.length; a++) {
            var c = s[a]
            0 !== t[c] && (r = !1)
          }
          r && (e.splice(i--, 1), (o = n((n.s = s[0]))))
        }
        return 0 === e.length && (n.x(), (n.x = function () {})), o
      }
      s.forEach(i.bind(null, 0)), (s.push = i.bind(null, s.push.bind(s)))
      var a = n.x
      n.x = function () {
        return (n.x = a || function () {}), (o = r)()
      }
    })(),
    n.x()
})()
