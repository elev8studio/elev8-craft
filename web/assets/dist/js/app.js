/******/ ;(function () {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ './web/assets/js/Header.js':
      /*!*********************************!*\
  !*** ./web/assets/js/Header.js ***!
  \*********************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! headroom.js */ './node_modules/headroom.js/dist/headroom.js'
        )
        /* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          headroom_js__WEBPACK_IMPORTED_MODULE_0__
        )

        function Header() {
          var header = document.getElementById('header')
          var headroom = new (headroom_js__WEBPACK_IMPORTED_MODULE_0___default())(
            header,
            {
              offset: 50,
              tolerance: {
                up: 0,
                down: 0,
              },
              classes: {
                initial: 'header--fixed',
                pinned: 'header--slide-down',
                unpinned: 'header--slide-up',
                top: 'header--top',
                notTop: 'header--not-top',
              },
            }
          )
          headroom.init()
        }

        /* harmony default export */ __webpack_exports__['default'] = Header

        /***/
      },

    /***/ './web/assets/js/Menu.js':
      /*!*******************************!*\
  !*** ./web/assets/js/Menu.js ***!
  \*******************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        var Menu = function Menu() {
          document
            .querySelector("[data-behaviour='Menu']")
            .addEventListener('click', function () {
              document
                .getElementById('header')
                .classList.toggle('navigation-open')
            })
        }

        /* harmony default export */ __webpack_exports__['default'] = Menu

        /***/
      },

    /***/ './web/assets/js/Theme.js':
      /*!********************************!*\
  !*** ./web/assets/js/Theme.js ***!
  \********************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        var Theme = function Theme() {
          var setToggle = function setToggle(dark) {
            document.querySelector("[data-behaviour='Theme']").checked = dark
          }

          var setClass = function setClass(dark) {
            return dark
              ? document.documentElement.classList.add('dark')
              : document.documentElement.classList.remove('dark')
          }

          var setLocalStorage = function setLocalStorage(dark) {
            localStorage.theme = dark ? 'dark' : 'light'
          }

          var delayHeaderClose = function delayHeaderClose() {
            setTimeout(function () {
              return document
                .querySelector('.header')
                .classList.remove('navigation-open')
            }, 300)
          } // Manual theme toggle

          var toggleTheme = function toggleTheme() {
            document
              .querySelector("[data-behaviour='Theme']")
              .addEventListener('click', function (e) {
                setLocalStorage(e.target.checked)
                setClass(e.target.checked)
                delayHeaderClose()
              })
          } // Auto theme set

          var setInitialTheme = function setInitialTheme() {
            var dark =
              localStorage.theme === 'dark' ||
              (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
            setToggle(dark)
            setLocalStorage(dark)
            setClass(dark)
          } // Reset site theme when system theme changes

          var resetTheme = function resetTheme() {
            window
              .matchMedia('(prefers-color-scheme: dark)')
              .addEventListener('change', function (e) {
                setToggle(e.matches)
                setLocalStorage(e.matches)
                setClass(e.matches)
              })
          }

          toggleTheme()
          setInitialTheme()
          resetTheme()
        }

        /* harmony default export */ __webpack_exports__['default'] = Theme

        /***/
      },

    /***/ './web/assets/js/app.js':
      /*!******************************!*\
  !*** ./web/assets/js/app.js ***!
  \******************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Theme */ './web/assets/js/Theme.js'
        )
        /* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./Header */ './web/assets/js/Header.js'
        )
        /* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./Menu */ './web/assets/js/Menu.js'
        )

        ;(0, _Theme__WEBPACK_IMPORTED_MODULE_0__.default)()
        ;(0, _Header__WEBPACK_IMPORTED_MODULE_1__.default)()
        ;(0, _Menu__WEBPACK_IMPORTED_MODULE_2__.default)()

        /***/
      },

    /***/ './node_modules/headroom.js/dist/headroom.js':
      /*!***************************************************!*\
  !*** ./node_modules/headroom.js/dist/headroom.js ***!
  \***************************************************/
      /***/ function (module) {
        /*!
         * headroom.js v0.12.0 - Give your page some headroom. Hide your header until you need it
         * Copyright (c) 2020 Nick Williams - http://wicky.nillia.ms/headroom.js
         * License: MIT
         */

        ;(function (global, factory) {
          true ? (module.exports = factory()) : 0
        })(this, function () {
          'use strict'

          function isBrowser() {
            return typeof window !== 'undefined'
          }

          /**
           * Used to detect browser support for adding an event listener with options
           * Credit: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
           */
          function passiveEventsSupported() {
            var supported = false

            try {
              var options = {
                // eslint-disable-next-line getter-return
                get passive() {
                  supported = true
                },
              }
              window.addEventListener('test', options, options)
              window.removeEventListener('test', options, options)
            } catch (err) {
              supported = false
            }

            return supported
          }

          function isSupported() {
            return !!(
              isBrowser() &&
              function () {}.bind &&
              'classList' in document.documentElement &&
              Object.assign &&
              Object.keys &&
              requestAnimationFrame
            )
          }

          function isDocument(obj) {
            return obj.nodeType === 9 // Node.DOCUMENT_NODE === 9
          }

          function isWindow(obj) {
            // `obj === window` or `obj instanceof Window` is not sufficient,
            // as the obj may be the window of an iframe.
            return obj && obj.document && isDocument(obj.document)
          }

          function windowScroller(win) {
            var doc = win.document
            var body = doc.body
            var html = doc.documentElement

            return {
              /**
               * @see http://james.padolsey.com/javascript/get-document-height-cross-browser/
               * @return {Number} the scroll height of the document in pixels
               */
              scrollHeight: function () {
                return Math.max(
                  body.scrollHeight,
                  html.scrollHeight,
                  body.offsetHeight,
                  html.offsetHeight,
                  body.clientHeight,
                  html.clientHeight
                )
              },

              /**
               * @see http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript
               * @return {Number} the height of the viewport in pixels
               */
              height: function () {
                return win.innerHeight || html.clientHeight || body.clientHeight
              },

              /**
               * Gets the Y scroll position
               * @return {Number} pixels the page has scrolled along the Y-axis
               */
              scrollY: function () {
                if (win.pageYOffset !== undefined) {
                  return win.pageYOffset
                }

                return (html || body.parentNode || body).scrollTop
              },
            }
          }

          function elementScroller(element) {
            return {
              /**
               * @return {Number} the scroll height of the element in pixels
               */
              scrollHeight: function () {
                return Math.max(
                  element.scrollHeight,
                  element.offsetHeight,
                  element.clientHeight
                )
              },

              /**
               * @return {Number} the height of the element in pixels
               */
              height: function () {
                return Math.max(element.offsetHeight, element.clientHeight)
              },

              /**
               * Gets the Y scroll position
               * @return {Number} pixels the element has scrolled along the Y-axis
               */
              scrollY: function () {
                return element.scrollTop
              },
            }
          }

          function createScroller(element) {
            return isWindow(element)
              ? windowScroller(element)
              : elementScroller(element)
          }

          /**
           * @param element EventTarget
           */
          function trackScroll(element, options, callback) {
            var isPassiveSupported = passiveEventsSupported()
            var rafId
            var scrolled = false
            var scroller = createScroller(element)
            var lastScrollY = scroller.scrollY()
            var details = {}

            function update() {
              var scrollY = Math.round(scroller.scrollY())
              var height = scroller.height()
              var scrollHeight = scroller.scrollHeight()

              // reuse object for less memory churn
              details.scrollY = scrollY
              details.lastScrollY = lastScrollY
              details.direction = scrollY > lastScrollY ? 'down' : 'up'
              details.distance = Math.abs(scrollY - lastScrollY)
              details.isOutOfBounds =
                scrollY < 0 || scrollY + height > scrollHeight
              details.top = scrollY <= options.offset[details.direction]
              details.bottom = scrollY + height >= scrollHeight
              details.toleranceExceeded =
                details.distance > options.tolerance[details.direction]

              callback(details)

              lastScrollY = scrollY
              scrolled = false
            }

            function handleScroll() {
              if (!scrolled) {
                scrolled = true
                rafId = requestAnimationFrame(update)
              }
            }

            var eventOptions = isPassiveSupported
              ? { passive: true, capture: false }
              : false

            element.addEventListener('scroll', handleScroll, eventOptions)
            update()

            return {
              destroy: function () {
                cancelAnimationFrame(rafId)
                element.removeEventListener(
                  'scroll',
                  handleScroll,
                  eventOptions
                )
              },
            }
          }

          function normalizeUpDown(t) {
            return t === Object(t) ? t : { down: t, up: t }
          }

          /**
           * UI enhancement for fixed headers.
           * Hides header when scrolling down
           * Shows header when scrolling up
           * @constructor
           * @param {DOMElement} elem the header element
           * @param {Object} options options for the widget
           */
          function Headroom(elem, options) {
            options = options || {}
            Object.assign(this, Headroom.options, options)
            this.classes = Object.assign(
              {},
              Headroom.options.classes,
              options.classes
            )

            this.elem = elem
            this.tolerance = normalizeUpDown(this.tolerance)
            this.offset = normalizeUpDown(this.offset)
            this.initialised = false
            this.frozen = false
          }
          Headroom.prototype = {
            constructor: Headroom,

            /**
             * Start listening to scrolling
             * @public
             */
            init: function () {
              if (Headroom.cutsTheMustard && !this.initialised) {
                this.addClass('initial')
                this.initialised = true

                // defer event registration to handle browser
                // potentially restoring previous scroll position
                setTimeout(
                  function (self) {
                    self.scrollTracker = trackScroll(
                      self.scroller,
                      { offset: self.offset, tolerance: self.tolerance },
                      self.update.bind(self)
                    )
                  },
                  100,
                  this
                )
              }

              return this
            },

            /**
             * Destroy the widget, clearing up after itself
             * @public
             */
            destroy: function () {
              this.initialised = false
              Object.keys(this.classes).forEach(this.removeClass, this)
              this.scrollTracker.destroy()
            },

            /**
             * Unpin the element
             * @public
             */
            unpin: function () {
              if (this.hasClass('pinned') || !this.hasClass('unpinned')) {
                this.addClass('unpinned')
                this.removeClass('pinned')

                if (this.onUnpin) {
                  this.onUnpin.call(this)
                }
              }
            },

            /**
             * Pin the element
             * @public
             */
            pin: function () {
              if (this.hasClass('unpinned')) {
                this.addClass('pinned')
                this.removeClass('unpinned')

                if (this.onPin) {
                  this.onPin.call(this)
                }
              }
            },

            /**
             * Freezes the current state of the widget
             * @public
             */
            freeze: function () {
              this.frozen = true
              this.addClass('frozen')
            },

            /**
             * Re-enables the default behaviour of the widget
             * @public
             */
            unfreeze: function () {
              this.frozen = false
              this.removeClass('frozen')
            },

            top: function () {
              if (!this.hasClass('top')) {
                this.addClass('top')
                this.removeClass('notTop')

                if (this.onTop) {
                  this.onTop.call(this)
                }
              }
            },

            notTop: function () {
              if (!this.hasClass('notTop')) {
                this.addClass('notTop')
                this.removeClass('top')

                if (this.onNotTop) {
                  this.onNotTop.call(this)
                }
              }
            },

            bottom: function () {
              if (!this.hasClass('bottom')) {
                this.addClass('bottom')
                this.removeClass('notBottom')

                if (this.onBottom) {
                  this.onBottom.call(this)
                }
              }
            },

            notBottom: function () {
              if (!this.hasClass('notBottom')) {
                this.addClass('notBottom')
                this.removeClass('bottom')

                if (this.onNotBottom) {
                  this.onNotBottom.call(this)
                }
              }
            },

            shouldUnpin: function (details) {
              var scrollingDown = details.direction === 'down'

              return scrollingDown && !details.top && details.toleranceExceeded
            },

            shouldPin: function (details) {
              var scrollingUp = details.direction === 'up'

              return (scrollingUp && details.toleranceExceeded) || details.top
            },

            addClass: function (className) {
              this.elem.classList.add.apply(
                this.elem.classList,
                this.classes[className].split(' ')
              )
            },

            removeClass: function (className) {
              this.elem.classList.remove.apply(
                this.elem.classList,
                this.classes[className].split(' ')
              )
            },

            hasClass: function (className) {
              return this.classes[className].split(' ').every(function (cls) {
                return this.classList.contains(cls)
              }, this.elem)
            },

            update: function (details) {
              if (details.isOutOfBounds) {
                // Ignore bouncy scrolling in OSX
                return
              }

              if (this.frozen === true) {
                return
              }

              if (details.top) {
                this.top()
              } else {
                this.notTop()
              }

              if (details.bottom) {
                this.bottom()
              } else {
                this.notBottom()
              }

              if (this.shouldUnpin(details)) {
                this.unpin()
              } else if (this.shouldPin(details)) {
                this.pin()
              }
            },
          }

          /**
           * Default options
           * @type {Object}
           */
          Headroom.options = {
            tolerance: {
              up: 0,
              down: 0,
            },
            offset: 0,
            scroller: isBrowser() ? window : null,
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
          }

          Headroom.cutsTheMustard = isSupported()

          return Headroom
        })

        /***/
      },

    /***/ './web/assets/scss/style.scss':
      /*!************************************!*\
  !*** ./web/assets/scss/style.scss ***!
  \************************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        // extracted by mini-css-extract-plugin

        /***/
      },

    /******/
  } // The module cache
  /************************************************************************/
  /******/ /******/ var __webpack_module_cache__ = {} // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ if (__webpack_module_cache__[moduleId]) {
      /******/ return __webpack_module_cache__[moduleId].exports
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    }) // Execute the module function
    /******/
    /******/ /******/ __webpack_modules__[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ) // Return the exports of the module
    /******/
    /******/ /******/ return module.exports
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/ /******/ __webpack_require__.m = __webpack_modules__ // the startup function // It's empty as some runtime module handles the default behavior
  /******/
  /******/ /******/ /******/ __webpack_require__.x = function () {} /* webpack/runtime/compat get default export */
  /************************************************************************/
  /******/ /******/ !(function () {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function (module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function () {
              return module['default']
            }
          : /******/ function () {
              return module
            }
      /******/ __webpack_require__.d(getter, { a: getter })
      /******/ return getter
      /******/
    }
    /******/
  })() /* webpack/runtime/define property getters */
  /******/
  /******/ /******/ !(function () {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = function (exports, definition) {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          })
          /******/
        }
        /******/
      }
      /******/
    }
    /******/
  })() /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  /******/ /******/ !(function () {
    /******/ __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop)
    }
    /******/
  })() /* webpack/runtime/make namespace object */
  /******/
  /******/ /******/ !(function () {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        })
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true })
      /******/
    }
    /******/
  })() /* webpack/runtime/jsonp chunk loading */
  /******/
  /******/ /******/ !(function () {
    /******/ // no baseURI
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // Promise = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ '/web/assets/dist/js/app': 0,
      /******/
    }
    /******/
    /******/ var deferredModules = [
      /******/ ['./web/assets/js/app.js'],
      /******/ ['./web/assets/scss/style.scss'],
      /******/
    ] // no chunk on demand loading // no prefetching // no preloaded // no HMR // no HMR manifest
    /******/ /******/
    /******/ /******/
    /******/ /******/
    /******/ /******/
    /******/ /******/
    /******/ var checkDeferredModules = function () {} // install a JSONP callback for chunk loading
    /******/
    /******/ /******/ var webpackJsonpCallback = function (
      parentChunkLoadingFunction,
      data
    ) {
      /******/ var chunkIds = data[0]
      /******/ var moreModules = data[1]
      /******/ var runtime = data[2]
      /******/ var executeModules = data[3] // add "moreModules" to the modules object, // then flag all "chunkIds" as loaded and fire callback
      /******/ /******/ /******/ var moduleId,
        chunkId,
        i = 0,
        resolves = []
      /******/ for (; i < chunkIds.length; i++) {
        /******/ chunkId = chunkIds[i]
        /******/ if (
          __webpack_require__.o(installedChunks, chunkId) &&
          installedChunks[chunkId]
        ) {
          /******/ resolves.push(installedChunks[chunkId][0])
          /******/
        }
        /******/ installedChunks[chunkId] = 0
        /******/
      }
      /******/ for (moduleId in moreModules) {
        /******/ if (__webpack_require__.o(moreModules, moduleId)) {
          /******/ __webpack_require__.m[moduleId] = moreModules[moduleId]
          /******/
        }
        /******/
      }
      /******/ if (runtime) runtime(__webpack_require__)
      /******/ if (parentChunkLoadingFunction) parentChunkLoadingFunction(data)
      /******/ while (resolves.length) {
        /******/ resolves.shift()()
        /******/
      } // add entry modules from loaded chunk to deferred list
      /******/
      /******/ /******/ if (executeModules)
        deferredModules.push.apply(deferredModules, executeModules) // run deferred modules when all chunks ready
      /******/
      /******/ /******/ return checkDeferredModules()
      /******/
    }
    /******/
    /******/ var chunkLoadingGlobal = (self['webpackChunkelev8studio'] =
      self['webpackChunkelev8studio'] || [])
    /******/ chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0))
    /******/ chunkLoadingGlobal.push = webpackJsonpCallback.bind(
      null,
      chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
    )
    /******/
    /******/ function checkDeferredModulesImpl() {
      /******/ var result
      /******/ for (var i = 0; i < deferredModules.length; i++) {
        /******/ var deferredModule = deferredModules[i]
        /******/ var fulfilled = true
        /******/ for (var j = 1; j < deferredModule.length; j++) {
          /******/ var depId = deferredModule[j]
          /******/ if (installedChunks[depId] !== 0) fulfilled = false
          /******/
        }
        /******/ if (fulfilled) {
          /******/ deferredModules.splice(i--, 1)
          /******/ result = __webpack_require__(
            (__webpack_require__.s = deferredModule[0])
          )
          /******/
        }
        /******/
      }
      /******/ if (deferredModules.length === 0) {
        /******/ __webpack_require__.x()
        /******/ __webpack_require__.x = function () {}
        /******/
      }
      /******/ return result
      /******/
    }
    /******/ var startup = __webpack_require__.x
    /******/ __webpack_require__.x = function () {
      /******/ // reset startup function so it can be called again when more startup code is added
      /******/ __webpack_require__.x = startup || function () {}
      /******/ return (checkDeferredModules = checkDeferredModulesImpl)()
      /******/
    }
    /******/
  })() // run startup
  /******/
  /************************************************************************/
  /******/ /******/ __webpack_require__.x()
  /******/
})()
