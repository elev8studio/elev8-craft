/******/ ;(function () {
	// webpackBootstrap
	/******/ 'use strict'
	/******/ var __webpack_modules__ = {
		/***/ './web/assets/js/app.js':
			/*!******************************!*\
  !*** ./web/assets/js/app.js ***!
  \******************************/
			/***/ function (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) {
				__webpack_require__.r(__webpack_exports__)
				/* harmony import */ var _darkmode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ./darkmode */ './web/assets/js/darkmode.js'
				)
				/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ./header */ './web/assets/js/header.js'
				)
				/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ./menu */ './web/assets/js/menu.js'
				)

				;(0, _darkmode__WEBPACK_IMPORTED_MODULE_0__.default)()
				;(0, _header__WEBPACK_IMPORTED_MODULE_1__.default)()
				;(0, _menu__WEBPACK_IMPORTED_MODULE_2__.default)()

				/***/
			},

		/***/ './web/assets/js/darkmode.js':
			/*!***********************************!*\
  !*** ./web/assets/js/darkmode.js ***!
  \***********************************/
			/***/ function (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) {
				__webpack_require__.r(__webpack_exports__)
				var DarkMode = function DarkMode() {
					window.addEventListener('load', function () {
						var darkmodeToggle = document.querySelector(
							'input[name=theme-toggle]'
						)

						var getTheme = function getTheme(bool) {
							return bool ? 'dark' : 'light'
						}

						var preference = localStorage.getItem('theme')
						var system =
							window.matchMedia &&
							window.matchMedia('(prefers-color-scheme: dark)').matches
						darkmodeToggle.checked = preference ? preference === 'dark' : system
						document.documentElement.setAttribute(
							'data-theme',
							getTheme(darkmodeToggle.checked)
						)
						darkmodeToggle.addEventListener('change', function () {
							document.documentElement.setAttribute(
								'data-theme',
								getTheme(this.checked)
							)
							localStorage.setItem('theme', getTheme(this.checked))
							setTimeout(function () {
								return document
									.querySelector('.header')
									.classList.remove('navigation-open')
							}, 300)
						})
					})
				}

				/* harmony default export */ __webpack_exports__['default'] = DarkMode

				/***/
			},

		/***/ './web/assets/js/header.js':
			/*!*********************************!*\
  !*** ./web/assets/js/header.js ***!
  \*********************************/
			/***/ function (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) {
				__webpack_require__.r(__webpack_exports__)
				function Header() {
					window.addEventListener('load', function () {
						var previous = window.pageYOffset
						document.addEventListener('scroll', function () {
							var header = document.querySelector('.header')
							var windowOffset = window.pageYOffset

							if (window.pageYOffset > 50) {
								header.classList.add('scroll')
							} else {
								header.classList.remove('scroll')
							}

							if (windowOffset > previous) {
								header.setAttribute(
									'style',
									'transform: translateY(calc(-100% + 0px)) translateZ(0px)'
								)
							} else {
								header.setAttribute('style', 'transform: none')
							}

							previous = windowOffset <= 0 ? 0 : windowOffset
						})
					})
				}

				/* harmony default export */ __webpack_exports__['default'] = Header

				/***/
			},

		/***/ './web/assets/js/menu.js':
			/*!*******************************!*\
  !*** ./web/assets/js/menu.js ***!
  \*******************************/
			/***/ function (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) {
				__webpack_require__.r(__webpack_exports__)
				var Menu = function Menu() {
					window.addEventListener('DOMContentLoaded', function () {
						var burger = document.querySelector('.burger-container')

						burger.onclick = function () {
							var header = document.querySelector('.header')
							header.classList.toggle('navigation-open')
						}
					})
				}

				/* harmony default export */ __webpack_exports__['default'] = Menu

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
		/******/ /******/ __webpack_modules__[moduleId](
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
	/******/ /******/ /******/ __webpack_require__.x = function () {} /* webpack/runtime/hasOwnProperty shorthand */
	/************************************************************************/
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
