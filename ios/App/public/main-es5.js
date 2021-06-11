function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/@ionic/pwa-elements/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicPwaElementsDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./pwa-action-sheet.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-action-sheet.entry.js", 43],
      "./pwa-camera-modal-instance.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal-instance.entry.js", 44],
      "./pwa-camera-modal.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal.entry.js", 45],
      "./pwa-camera.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera.entry.js", 46],
      "./pwa-toast.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-toast.entry.js", 47]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/pwa-elements/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _backend_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./backend/services/AuthGuard.service */
    "./src/app/backend/services/AuthGuard.service.ts");

    var routes = [{
      path: '',
      redirectTo: 'post-register-about',
      pathMatch: 'full'
    }, {
      path: 'tab1',
      children: [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-news-feed-news-feed-module */
          "pages-news-feed-news-feed-module").then(__webpack_require__.bind(null,
          /*! ./pages/news-feed/news-feed.module */
          "./src/app/pages/news-feed/news-feed.module.ts")).then(function (m) {
            return m.NewsFeedPageModule;
          });
        },
        canActivate: [_backend_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
      }],
      canActivate: [_backend_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: 'tab2',
      children: [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-notifications-page-notifications-module */
          "pages-notifications-page-notifications-module").then(__webpack_require__.bind(null,
          /*! ./pages/notifications-page/notifications.module */
          "./src/app/pages/notifications-page/notifications.module.ts")).then(function (m) {
            return m.NotificationsPageModule;
          });
        },
        canActivate: [_backend_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
      }],
      canActivate: [_backend_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: 'search',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/modals/search/search.module */
        "./src/app/pages/modals/search/search.module.ts")).then(function (m) {
          return m.SearchPageModule;
        });
      },
      canActivate: [_backend_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: 'add',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/modals/add/add.module */
        "./src/app/pages/modals/add/add.module.ts")).then(function (m) {
          return m.AddPageModule;
        });
      },
      canActivate: [_backend_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: 'map-filter',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/modals/map-filter/map-filter.module */
        "./src/app/pages/modals/map-filter/map-filter.module.ts")).then(function (m) {
          return m.MapFilterPageModule;
        });
      },
      canActivate: [_backend_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: 'user-profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-user-profile-user-profile-module */
        "pages-user-profile-user-profile-module").then(__webpack_require__.bind(null,
        /*! ./pages/user-profile/user-profile.module */
        "./src/app/pages/user-profile/user-profile.module.ts")).then(function (m) {
          return m.UserProfilePageModule;
        });
      },
      canActivate: [_backend_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: 'user-timeline',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/user-timeline/user-timeline.module */
        "./src/app/pages/user-timeline/user-timeline.module.ts")).then(function (m) {
          return m.UserTimelinePageModule;
        });
      },
      canActivate: [_backend_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: 'sign-in',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-sign-in-sign-in-module */
        "pages-sign-in-sign-in-module").then(__webpack_require__.bind(null,
        /*! ./pages/sign-in/sign-in.module */
        "./src/app/pages/sign-in/sign-in.module.ts")).then(function (m) {
          return m.SignInPageModule;
        });
      }
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-register-register-module */
        "pages-register-register-module").then(__webpack_require__.bind(null,
        /*! ./pages/register/register.module */
        "./src/app/pages/register/register.module.ts")).then(function (m) {
          return m.RegisterPageModule;
        });
      }
    }, {
      path: 'post-register-about',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-post-register-about-post-register-about-module */
        "pages-post-register-about-post-register-about-module").then(__webpack_require__.bind(null,
        /*! ./pages/post-register-about/post-register-about.module */
        "./src/app/pages/post-register-about/post-register-about.module.ts")).then(function (m) {
          return m.PostRegisterAboutPageModule;
        });
      }
    }, {
      path: 'post-register-locations',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-post-register-locations-post-register-locations-module */
        "pages-post-register-locations-post-register-locations-module").then(__webpack_require__.bind(null,
        /*! ./pages/post-register-locations/post-register-locations.module */
        "./src/app/pages/post-register-locations/post-register-locations.module.ts")).then(function (m) {
          return m.PostRegisterLocationsPageModule;
        });
      },
      canActivate: [_backend_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: 'mark-location',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/mark-location/mark-location.module */
        "./src/app/pages/mark-location/mark-location.module.ts")).then(function (m) {
          return m.MarkLocationPageModule;
        });
      },
      canActivate: [_backend_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: 'add-post',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/add-post/add-post.module */
        "./src/app/pages/add-post/add-post.module.ts")).then(function (m) {
          return m.AddPostPageModule;
        });
      },
      canActivate: [_backend_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: 'add-post-image',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/add-post-image/add-post-image.module */
        "./src/app/pages/add-post-image/add-post-image.module.ts")).then(function (m) {
          return m.AddPostImagePageModule;
        });
      },
      canActivate: [_backend_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: 'comments',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-comments-comments-module */
        "pages-comments-comments-module").then(__webpack_require__.bind(null,
        /*! ./pages/comments/comments.module */
        "./src/app/pages/comments/comments.module.ts")).then(function (m) {
          return m.CommentsPageModule;
        });
      },
      canActivate: [_backend_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: 'user-settings',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/user-settings/user-settings.module */
        "./src/app/pages/user-settings/user-settings.module.ts")).then(function (m) {
          return m.UserSettingsPageModule;
        });
      },
      canActivate: [_backend_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: 'forgot-password',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/modals/forgot-password/forgot-password.module */
        "./src/app/pages/modals/forgot-password/forgot-password.module.ts")).then(function (m) {
          return m.ForgotPasswordPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @capacitor/splash-screen */
    "./node_modules/@capacitor/splash-screen/dist/esm/index.js");
    /* harmony import */


    var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @capacitor/status-bar */
    "./node_modules/@capacitor/status-bar/dist/esm/index.js");
    /* harmony import */


    var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @capacitor/push-notifications */
    "./node_modules/@capacitor/push-notifications/dist/esm/index.js");
    /* harmony import */


    var _capacitor_community_fcm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @capacitor-community/fcm */
    "./node_modules/@capacitor-community/fcm/dist/esm/index.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _pages_modals_add_add_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/modals/add/add.page */
    "./src/app/pages/modals/add/add.page.ts");
    /* harmony import */


    var _backend_clients_api_accounts_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./backend/clients/api/accounts.service */
    "./src/app/backend/clients/api/accounts.service.ts");
    /* harmony import */


    var _services_modal_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/modal.service */
    "./src/app/services/modal.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_ion_tab_bar_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-tab-bar", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-tab-button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-tab-button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Notifications");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ion_fab_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-fab", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-fab-button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ion_fab_4_Template_ion_fab_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.presentAddModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var fcm = new _capacitor_community_fcm__WEBPACK_IMPORTED_MODULE_6__["FCM"]();

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, userService, modalController, alertController, router, zone, modalSvc) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.userService = userService;
        this.modalController = modalController;
        this.alertController = alertController;
        this.router = router;
        this.zone = zone;
        this.modalSvc = modalSvc;
        this.platform.ready().then(function () {
          _this.initializeApp();
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this2 = this;

          this.platform.ready().then(function () {
            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Capacitor"].isPluginAvailable('StatusBar')) {
              _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__["StatusBar"].setStyle({
                style: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_4__["Style"].Default
              });
            }

            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Capacitor"].isPluginAvailable('SplashScreen')) {
              _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"].hide();
            }

            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Capacitor"].isPluginAvailable('PushNotifications')) {
              _this2.registerPush();
            }

            _this2.zone.run(function () {
              if (_this2.userService.isLoggedIn) {
                _this2.router.navigate(['tab1']);
              } else {
                _this2.router.navigate(['sign-in']);
              }
            });
          });
        }
      }, {
        key: "registerPush",
        value: function registerPush() {
          var _this3 = this;

          _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_5__["PushNotifications"].requestPermissions().then(function (result) {
            if (result.receive === 'granted') {
              // Register with Apple / Google to receive push via APNS/FCM
              _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_5__["PushNotifications"].register().then(function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(fcm.getToken().then(function (r) {
                  _this3.userService.setFcmToken(r.token);
                })["catch"](function (err) {
                  console.log("FCM Token ERROR: ".concat(JSON.stringify(err)));
                }));
              });
            } else {
              console.log('Push notifications not registered');
            }
          });

          _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_5__["PushNotifications"].addListener('registration', function (token) {// alert('Push registration success, token: ' + token.value);
          });

          _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_5__["PushNotifications"].addListener('registrationError', function (error) {// alert('Error on registration: ' + JSON.stringify(error));
          });

          _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_5__["PushNotifications"].addListener('pushNotificationReceived', /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(notification) {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log(notification.title);

                      _this3.alert(notification.title, notification.body);

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());

          _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_5__["PushNotifications"].addListener('pushNotificationActionPerformed', function (notification) {// alert('Push action performed: ' + JSON.stringify(notification));
          });
        }
      }, {
        key: "alert",
        value: function () {
          var _alert = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(title, body) {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: title,
                      message: body,
                      buttons: [{
                        text: 'OKAY',
                        role: 'cancel',
                        handler: function handler() {
                          alert.dismiss();
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function alert(_x2, _x3) {
            return _alert.apply(this, arguments);
          }

          return alert;
        }()
      }, {
        key: "presentAddModal",
        value: function () {
          var _presentAddModal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      component: _pages_modals_add_add_page__WEBPACK_IMPORTED_MODULE_9__["AddPage"],
                      showBackdrop: true,
                      swipeToClose: true,
                      cssClass: 'add-modal',
                      backdropDismiss: true
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    return _context3.abrupt("return", _context3.sent);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          function presentAddModal() {
            return _presentAddModal.apply(this, arguments);
          }

          return presentAddModal;
        }()
      }, {
        key: "showFooter",
        get: function get() {
          if (this.router.url === '/sign-in') {
            return false;
          }

          if (this.router.url === '/register') {
            return false;
          }

          if (this.router.url === '/post-register-about') {
            return false;
          }

          if (this.router.url === '/post-register-locations') {
            return false;
          }

          if (this.router.url === '/comments') {
            return false;
          }

          if (this.modalSvc.dis === false) {
            return false;
          }

          return true;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_backend_clients_api_accounts_service__WEBPACK_IMPORTED_MODULE_10__["AccountsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_11__["ModalService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 2,
      consts: [["slot", "bottom", 4, "ngIf"], ["horizontal", "center", "vertical", "bottom", 4, "ngIf"], ["slot", "bottom"], ["tab", "tab1"], ["name", "home-outline"], ["tab", "tab2"], ["name", "notifications-outline"], ["horizontal", "center", "vertical", "bottom"], [1, "add-button", 3, "click"], ["name", "add", 2, "height", "50", "width", "20"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-tabs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ion_tab_bar_3_Template, 9, 0, "ion-tab-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_ion_fab_4_Template, 3, 0, "ion-fab", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFooter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFooter);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonApp"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTabs"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTabBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFabButton"]],
      styles: ["ion-tab-button[_ngcontent-%COMP%] {\n  --color-selected: #128C7E;\n}\n\n.add-button[_ngcontent-%COMP%] {\n  --background: #128C7E;\n  --background-activated: #128C7E;\n  --ripple-color: #128C7E;\n  --background-focused: #128C7E;\n  --color-focused: #128C7E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CcmVuZGFuR2liZXJzb24vRG9jdW1lbnRzL0Rldi9WaXNpdC9WaXNpdC4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFiLWJ1dHRvbiB7XG4gICAgLS1jb2xvci1zZWxlY3RlZDogIzEyOEM3RTtcbn1cblxuLmFkZC1idXR0b24ge1xuICAgIC0tYmFja2dyb3VuZDogIzEyOEM3RTtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMTI4QzdFO1xuICAgIC0tcmlwcGxlLWNvbG9yOiAjMTI4QzdFO1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjMTI4QzdFO1xuICAgIC0tY29sb3ItZm9jdXNlZDogIzEyOEM3RTtcbn0iLCJpb24tdGFiLWJ1dHRvbiB7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6ICMxMjhDN0U7XG59XG5cbi5hZGQtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMTI4QzdFO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMTI4QzdFO1xuICAtLXJpcHBsZS1jb2xvcjogIzEyOEM3RTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICMxMjhDN0U7XG4gIC0tY29sb3ItZm9jdXNlZDogIzEyOEM3RTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: 'app.component.html',
          styleUrls: ['app.component.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _backend_clients_api_accounts_service__WEBPACK_IMPORTED_MODULE_10__["AccountsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _services_modal_service__WEBPACK_IMPORTED_MODULE_11__["ModalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _pages_modals_search_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/modals/search/search.module */
    "./src/app/pages/modals/search/search.module.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_modals_add_add_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/modals/add/add.module */
    "./src/app/pages/modals/add/add.module.ts");
    /* harmony import */


    var _pages_modals_map_filter_map_filter_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/modals/map-filter/map-filter.module */
    "./src/app/pages/modals/map-filter/map-filter.module.ts");
    /* harmony import */


    var _pages_modals_forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/modals/forgot-password/forgot-password.module */
    "./src/app/pages/modals/forgot-password/forgot-password.module.ts");
    /* harmony import */


    var _pages_user_timeline_user_timeline_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/user-timeline/user-timeline.module */
    "./src/app/pages/user-timeline/user-timeline.module.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _backend_models_httpConfigInterceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./backend/models/httpConfigInterceptor */
    "./src/app/backend/models/httpConfigInterceptor.ts");
    /* harmony import */


    var _backend_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./backend/services/AuthGuard.service */
    "./src/app/backend/services/AuthGuard.service.ts");
    /* harmony import */


    var _backend_clients__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./backend/clients */
    "./src/app/backend/clients/index.ts");
    /* harmony import */


    var _pages_mark_location_mark_location_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/mark-location/mark-location.module */
    "./src/app/pages/mark-location/mark-location.module.ts");
    /* harmony import */


    var ionic_selectable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ionic-selectable */
    "./node_modules/ionic-selectable/__ivy_ngcc__/esm2015/ionic-selectable.min.js");
    /* harmony import */


    var _objects_location_json_location_selector__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./objects/location-json/location.selector */
    "./src/app/objects/location-json/location.selector.ts");
    /* harmony import */


    var _pages_add_post_add_post_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/add-post/add-post.module */
    "./src/app/pages/add-post/add-post.module.ts");
    /* harmony import */


    var _pages_add_post_image_add_post_image_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pages/add-post-image/add-post-image.module */
    "./src/app/pages/add-post-image/add-post-image.module.ts");
    /* harmony import */


    var _pages_user_settings_user_settings_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pages/user-settings/user-settings.module */
    "./src/app/pages/user-settings/user-settings.module.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_backend_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"], _backend_clients__WEBPACK_IMPORTED_MODULE_15__["AccountsService"], _backend_clients__WEBPACK_IMPORTED_MODULE_15__["UserService"], _backend_clients__WEBPACK_IMPORTED_MODULE_15__["PostService"], _objects_location_json_location_selector__WEBPACK_IMPORTED_MODULE_18__["LocationSelector"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicRouteStrategy"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
        useClass: _backend_models_httpConfigInterceptor__WEBPACK_IMPORTED_MODULE_13__["HttpConfigInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _pages_modals_search_search_module__WEBPACK_IMPORTED_MODULE_4__["SearchPageModule"], _pages_modals_add_add_module__WEBPACK_IMPORTED_MODULE_7__["AddPageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _pages_user_timeline_user_timeline_module__WEBPACK_IMPORTED_MODULE_10__["UserTimelinePageModule"], _pages_modals_map_filter_map_filter_module__WEBPACK_IMPORTED_MODULE_8__["MapFilterPageModule"], _pages_mark_location_mark_location_module__WEBPACK_IMPORTED_MODULE_16__["MarkLocationPageModule"], _pages_add_post_add_post_module__WEBPACK_IMPORTED_MODULE_19__["AddPostPageModule"], _pages_user_settings_user_settings_module__WEBPACK_IMPORTED_MODULE_21__["UserSettingsPageModule"], _pages_add_post_image_add_post_image_module__WEBPACK_IMPORTED_MODULE_20__["AddPostImagePageModule"], _pages_modals_forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordPageModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_17__["IonicSelectableModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_22__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_24__["environment"].firebaseConfig), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__["AngularFireAuthModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["IonicStorageModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _pages_modals_search_search_module__WEBPACK_IMPORTED_MODULE_4__["SearchPageModule"], _pages_modals_add_add_module__WEBPACK_IMPORTED_MODULE_7__["AddPageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _pages_user_timeline_user_timeline_module__WEBPACK_IMPORTED_MODULE_10__["UserTimelinePageModule"], _pages_modals_map_filter_map_filter_module__WEBPACK_IMPORTED_MODULE_8__["MapFilterPageModule"], _pages_mark_location_mark_location_module__WEBPACK_IMPORTED_MODULE_16__["MarkLocationPageModule"], _pages_add_post_add_post_module__WEBPACK_IMPORTED_MODULE_19__["AddPostPageModule"], _pages_user_settings_user_settings_module__WEBPACK_IMPORTED_MODULE_21__["UserSettingsPageModule"], _pages_add_post_image_add_post_image_module__WEBPACK_IMPORTED_MODULE_20__["AddPostImagePageModule"], _pages_modals_forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordPageModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_17__["IonicSelectableModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_22__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__["AngularFireAuthModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
          entryComponents: [],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _pages_modals_search_search_module__WEBPACK_IMPORTED_MODULE_4__["SearchPageModule"], _pages_modals_add_add_module__WEBPACK_IMPORTED_MODULE_7__["AddPageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _pages_user_timeline_user_timeline_module__WEBPACK_IMPORTED_MODULE_10__["UserTimelinePageModule"], _pages_modals_map_filter_map_filter_module__WEBPACK_IMPORTED_MODULE_8__["MapFilterPageModule"], _pages_mark_location_mark_location_module__WEBPACK_IMPORTED_MODULE_16__["MarkLocationPageModule"], _pages_add_post_add_post_module__WEBPACK_IMPORTED_MODULE_19__["AddPostPageModule"], _pages_user_settings_user_settings_module__WEBPACK_IMPORTED_MODULE_21__["UserSettingsPageModule"], _pages_add_post_image_add_post_image_module__WEBPACK_IMPORTED_MODULE_20__["AddPostImagePageModule"], _pages_modals_forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordPageModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_17__["IonicSelectableModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_22__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_24__["environment"].firebaseConfig), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__["AngularFireAuthModule"]],
          providers: [_backend_services_AuthGuard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"], _backend_clients__WEBPACK_IMPORTED_MODULE_15__["AccountsService"], _backend_clients__WEBPACK_IMPORTED_MODULE_15__["UserService"], _backend_clients__WEBPACK_IMPORTED_MODULE_15__["PostService"], _objects_location_json_location_selector__WEBPACK_IMPORTED_MODULE_18__["LocationSelector"], {
            provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"],
            useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicRouteStrategy"]
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
            useClass: _backend_models_httpConfigInterceptor__WEBPACK_IMPORTED_MODULE_13__["HttpConfigInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/backend/clients/api.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/backend/clients/api.module.ts ***!
    \***********************************************/

  /*! exports provided: ApiModule */

  /***/
  function srcAppBackendClientsApiModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiModule", function () {
      return ApiModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./configuration */
    "./src/app/backend/clients/configuration.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _api_accounts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api/accounts.service */
    "./src/app/backend/clients/api/accounts.service.ts");
    /* harmony import */


    var _api_blobStorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./api/blobStorage.service */
    "./src/app/backend/clients/api/blobStorage.service.ts");
    /* harmony import */


    var _api_devops_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./api/devops.service */
    "./src/app/backend/clients/api/devops.service.ts");
    /* harmony import */


    var _api_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./api/post.service */
    "./src/app/backend/clients/api/post.service.ts");
    /* harmony import */


    var _api_postTestData_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./api/postTestData.service */
    "./src/app/backend/clients/api/postTestData.service.ts");
    /* harmony import */


    var _api_tag_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./api/tag.service */
    "./src/app/backend/clients/api/tag.service.ts");
    /* harmony import */


    var _api_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./api/user.service */
    "./src/app/backend/clients/api/user.service.ts");
    /* harmony import */


    var _api_userLocation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./api/userLocation.service */
    "./src/app/backend/clients/api/userLocation.service.ts");
    /* harmony import */


    var _api_userMessage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./api/userMessage.service */
    "./src/app/backend/clients/api/userMessage.service.ts");

    var ApiModule = /*#__PURE__*/function () {
      function ApiModule(parentModule, http) {
        _classCallCheck(this, ApiModule);

        if (parentModule) {
          throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }

        if (!http) {
          throw new Error('You need to import the HttpClientModule in your AppModule! \n' + 'See also https://github.com/angular/angular/issues/20575');
        }
      }

      _createClass(ApiModule, null, [{
        key: "forRoot",
        value: function forRoot(configurationFactory) {
          return {
            ngModule: ApiModule,
            providers: [{
              provide: _configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"],
              useFactory: configurationFactory
            }]
          };
        }
      }]);

      return ApiModule;
    }();

    ApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ApiModule
    });
    ApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ApiModule_Factory(t) {
        return new (t || ApiModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ApiModule, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], 8));
      },
      providers: [_api_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"], _api_blobStorage_service__WEBPACK_IMPORTED_MODULE_4__["BlobStorageService"], _api_devops_service__WEBPACK_IMPORTED_MODULE_5__["DevopsService"], _api_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"], _api_postTestData_service__WEBPACK_IMPORTED_MODULE_7__["PostTestDataService"], _api_tag_service__WEBPACK_IMPORTED_MODULE_8__["TagService"], _api_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"], _api_userLocation_service__WEBPACK_IMPORTED_MODULE_10__["UserLocationService"], _api_userMessage_service__WEBPACK_IMPORTED_MODULE_11__["UserMessageService"]],
      imports: [[]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [],
          declarations: [],
          exports: [],
          providers: [_api_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"], _api_blobStorage_service__WEBPACK_IMPORTED_MODULE_4__["BlobStorageService"], _api_devops_service__WEBPACK_IMPORTED_MODULE_5__["DevopsService"], _api_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"], _api_postTestData_service__WEBPACK_IMPORTED_MODULE_7__["PostTestDataService"], _api_tag_service__WEBPACK_IMPORTED_MODULE_8__["TagService"], _api_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"], _api_userLocation_service__WEBPACK_IMPORTED_MODULE_10__["UserLocationService"], _api_userMessage_service__WEBPACK_IMPORTED_MODULE_11__["UserMessageService"]]
        }]
      }], function () {
        return [{
          type: ApiModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/backend/clients/api/accounts.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/backend/clients/api/accounts.service.ts ***!
    \*********************************************************/

  /*! exports provided: InterceptorSkipHeader, AccountsService */

  /***/
  function srcAppBackendClientsApiAccountsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InterceptorSkipHeader", function () {
      return InterceptorSkipHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountsService", function () {
      return AccountsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.esm.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/index.js");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../configuration */
    "./src/app/backend/clients/configuration.ts");
    /* harmony import */


    var _encoder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../encoder */
    "./src/app/backend/clients/encoder.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _capacitor_community_apple_sign_in__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @capacitor-community/apple-sign-in */
    "./node_modules/@capacitor-community/apple-sign-in/dist/esm/index.js");
    /**
     * My Title
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: 1.0.0
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */

    /* tslint:disable:no-unused-variable member-ordering */
    // tslint:disable: max-line-length
    // tslint:disable: import-spacing
    // This call avoid needs to call registerWebPlugin


    var InterceptorSkipHeader = 'X-Skip-Interceptor';

    var AccountsService = /*#__PURE__*/function () {
      function AccountsService(httpClient, basePath, configuration, router, zone, storage, alertController, ngFireAuth) {
        var _this4 = this;

        _classCallCheck(this, AccountsService);

        this.httpClient = httpClient;
        this.router = router;
        this.zone = zone;
        this.storage = storage;
        this.alertController = alertController;
        this.ngFireAuth = ngFireAuth;
        this.basePath = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"];
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set(InterceptorSkipHeader, '');
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_10__["Configuration"]();
        this.authSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);

        if (basePath) {
          this.basePath = basePath;
        }

        if (configuration) {
          this.configuration = configuration;
          this.basePath = basePath || configuration.basePath || this.basePath;
        }

        this.ngFireAuth.authState.subscribe(function (user) {
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            JSON.parse(localStorage.getItem('user'));

            _this4.getFcmToken().subscribe(function (token) {
              console.log("FCM:".concat(token));

              _this4.accountUpdateFcmDeviceIdPost(token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (res) {
                console.log(res);
              }, function (err) {
                return console.log(err);
              });
            });
          } else {
            localStorage.setItem('user', null);
            JSON.parse(localStorage.getItem('user'));
          }
        });
      }

      _createClass(AccountsService, [{
        key: "logout",
        value: function () {
          var _logout = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    return _context4.abrupt("return", this.ngFireAuth.signOut().then(function () {
                      localStorage.removeItem('user');

                      _this5.zone.run(function () {
                        _this5.router.navigate(['sign-in']);
                      });
                    }));

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));

          function logout() {
            return _logout.apply(this, arguments);
          }

          return logout;
        }()
      }, {
        key: "SendVerificationMail",
        // Email verification when new user register
        value: function SendVerificationMail() {
          var _this6 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].auth().currentUser.sendEmailVerification().then(function () {
            _this6.zone.run(function () {
              _this6.router.navigate(['verify-email']);
            });
          }));
        }
      }, {
        key: "PasswordRecover",
        // Recover password
        value: function PasswordRecover(passwordResetEmail) {
          var _this7 = this;

          return firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].auth().sendPasswordResetEmail(passwordResetEmail).then(function () {
            _this7.alert('Success', 'Password reset email has been sent, please check your inbox.');
          })["catch"](function (error) {
            _this7.alert('Reset error', error);
          });
        }
      }, {
        key: "alert",
        value: function () {
          var _alert2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(title, body) {
            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertController.create({
                      header: title,
                      message: body,
                      buttons: [{
                        text: 'OKAY',
                        role: 'cancel',
                        handler: function handler() {
                          alert.dismiss();
                        }
                      }]
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));

          function alert(_x4, _x5) {
            return _alert2.apply(this, arguments);
          }

          return alert;
        }()
      }, {
        key: "getToken",
        value: function () {
          var _getToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.prev = 0;
                    _context6.next = 3;
                    return firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].auth().currentUser.getIdToken();

                  case 3:
                    return _context6.abrupt("return", _context6.sent);

                  case 6:
                    _context6.prev = 6;
                    _context6.t0 = _context6["catch"](0);
                    return _context6.abrupt("return", '');

                  case 9:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, null, [[0, 6]]);
          }));

          function getToken() {
            return _getToken.apply(this, arguments);
          }

          return getToken;
        }()
      }, {
        key: "getUserId",
        value: function getUserId() {
          return firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].auth().currentUser.uid;
        } // Login in with email/password

      }, {
        key: "login",
        value: function login(email, password) {
          var _this8 = this;

          return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].auth().setPersistence(firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].auth.Auth.Persistence.LOCAL).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].auth().signInWithEmailAndPassword(email, password).then(function (res) {
                        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_9__["Capacitor"].isNativePlatform()) {
                          _this8.getFcmToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (token) {
                            _this8.accountUpdateFcmDeviceIdPost(token);

                            resolve(res);
                          });
                        } else {
                          resolve(res);
                        }
                      }, function (err) {
                        return reject(err);
                      });

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            })));
          });
        }
      }, {
        key: "loginFacebook",
        value: function loginFacebook() {}
      }, {
        key: "loginApple",
        value: function () {
          var _loginApple = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var options;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    options = {
                      clientId: 'com.visittravelapp.visit',
                      redirectURI: 'com.visittravelapp.visit',
                      scopes: 'name email'
                    };

                    _capacitor_community_apple_sign_in__WEBPACK_IMPORTED_MODULE_13__["SignInWithApple"].authorize(options).then(function (result) {
                      var credentials = {
                        response: result.response,
                        provider: 'APPLE'
                      };
                      console.log(result);
                    })["catch"](function (error) {
                      console.log(error); // Handle error
                    }); // const credential = new firebase.auth.OAuthProvider('apple.com').credential({
                    //   idToken: appleResponse.identityToken
                    // });
                    // // Call the sign in with our created credentials
                    // const userCredential = await firebase.auth().signInWithCredential(credential);


                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));

          function loginApple() {
            return _loginApple.apply(this, arguments);
          }

          return loginApple;
        }() // GoogleAuth() {
        //   return this.AuthLogin(new auth.GoogleAuthProvider());
        // }

      }, {
        key: "loginWithToken",
        value: function loginWithToken(token) {
          var _this9 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].auth().signInWithCustomToken(token).then(function () {
            return _this9.getFcmToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (token) {
              return _this9.accountUpdateFcmDeviceIdPost(token);
            });
          }));
        }
      }, {
        key: "getFcmToken",
        value: function getFcmToken() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.storage.get('fcm'));
        }
      }, {
        key: "setFcmToken",
        value: function setFcmToken(token) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.storage.set('fcm', token));
        }
      }, {
        key: "accountEmailTakenGet",
        value: function accountEmailTakenGet(email) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
            encoder: new _encoder__WEBPACK_IMPORTED_MODULE_11__["CustomHttpUrlEncodingCodec"]()
          });

          if (email !== undefined && email !== null) {
            queryParameters = queryParameters.set('email', email);
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.request('get', "".concat(this.basePath, "/account/email_taken"), {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "accountUpdateFcmDeviceIdPost",
        value: function accountUpdateFcmDeviceIdPost(deviceId) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (deviceId === null || deviceId === undefined) {
            throw new Error('Required parameter deviceId was null or undefined when calling accountUpdateFcmDeviceIdPost.');
          }

          var headers = this.defaultHeaders; // authentication (Bearer) required

          if (this.configuration.apiKeys && this.configuration.apiKeys.Authorization) {
            headers = headers.set('Authorization', this.configuration.apiKeys.Authorization);
          } // to determine the Accept header


          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.request('post', "".concat(this.basePath, "/account/update/fcm/").concat(encodeURIComponent(String(deviceId))), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "accountRegisterPostForm",
        value: function accountRegisterPostForm(body, blob, observe, reportProgress) {
          // public accountRegisterPostForm(body?: RegisterRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<JwtToken>>;
          // public accountRegisterPostForm(body?: RegisterRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<JwtToken>>;
          // public accountRegisterPostForm(body?: RegisterRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['multipart/form-data'];
          return this.httpClient.request('post', "".concat(this.basePath, "/account/register"), {
            body: body,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "accountUpdateLocationsPost",
        value: function accountUpdateLocationsPost(body) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
          var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

          if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
          }

          return this.httpClient.request('post', "".concat(this.basePath, "/account/update/locations"), {
            body: body,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "accountUpdateProfileImagePost",
        value: function accountUpdateProfileImagePost(blob) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
          var body = new FormData();
          body.append('image', blob);
          return this.httpClient.request('post', "".concat(this.basePath, "/account/update/profile_image"), {
            body: body,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "accountUpdatePost",
        value: function accountUpdatePost(firstname, lastname, title, education, birthLocation, residenceLocation) {
          var observe = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'body';
          var reportProgress = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
          var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
            encoder: new _encoder__WEBPACK_IMPORTED_MODULE_11__["CustomHttpUrlEncodingCodec"]()
          });

          if (firstname !== undefined && firstname !== null) {
            queryParameters = queryParameters.set('Firstname', firstname);
          }

          if (lastname !== undefined && lastname !== null) {
            queryParameters = queryParameters.set('Lastname', lastname);
          }

          if (title !== undefined && title !== null) {
            queryParameters = queryParameters.set('Title', title);
          }

          if (education !== undefined && education !== null) {
            queryParameters = queryParameters.set('Education', education);
          }

          if (birthLocation !== undefined && birthLocation !== null) {
            queryParameters = queryParameters.set('BirthLocation', birthLocation);
          }

          if (residenceLocation !== undefined && residenceLocation !== null) {
            queryParameters = queryParameters.set('ResidenceLocation', residenceLocation);
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.request('post', "".concat(this.basePath, "/account/update"), {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "isLoggedIn",
        get: function get() {
          var user = JSON.parse(localStorage.getItem('user'));
          return user !== null;
        }
      }, {
        key: "isEmailVerified",
        get: function get() {
          var user = JSON.parse(localStorage.getItem('user'));
          return user.emailVerified !== false;
        }
      }]);

      return AccountsService;
    }();

    AccountsService.ɵfac = function AccountsService_Factory(t) {
      return new (t || AccountsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_10__["Configuration"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]));
    };

    AccountsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AccountsService,
      factory: AccountsService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"]]
          }]
        }, {
          type: _configuration__WEBPACK_IMPORTED_MODULE_10__["Configuration"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["AlertController"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/backend/clients/api/api.ts":
  /*!********************************************!*\
    !*** ./src/app/backend/clients/api/api.ts ***!
    \********************************************/

  /*! exports provided: InterceptorSkipHeader, AccountsService, BlobStorageService, DevopsService, PostService, PostTestDataService, TagService, UserService, UserLocationService, UserMessageService, APIS */

  /***/
  function srcAppBackendClientsApiApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APIS", function () {
      return APIS;
    });
    /* harmony import */


    var _accounts_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./accounts.service */
    "./src/app/backend/clients/api/accounts.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InterceptorSkipHeader", function () {
      return _accounts_service__WEBPACK_IMPORTED_MODULE_0__["InterceptorSkipHeader"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccountsService", function () {
      return _accounts_service__WEBPACK_IMPORTED_MODULE_0__["AccountsService"];
    });
    /* harmony import */


    var _blobStorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./blobStorage.service */
    "./src/app/backend/clients/api/blobStorage.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BlobStorageService", function () {
      return _blobStorage_service__WEBPACK_IMPORTED_MODULE_1__["BlobStorageService"];
    });
    /* harmony import */


    var _devops_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./devops.service */
    "./src/app/backend/clients/api/devops.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DevopsService", function () {
      return _devops_service__WEBPACK_IMPORTED_MODULE_2__["DevopsService"];
    });
    /* harmony import */


    var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./post.service */
    "./src/app/backend/clients/api/post.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PostService", function () {
      return _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"];
    });
    /* harmony import */


    var _postTestData_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./postTestData.service */
    "./src/app/backend/clients/api/postTestData.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PostTestDataService", function () {
      return _postTestData_service__WEBPACK_IMPORTED_MODULE_4__["PostTestDataService"];
    });
    /* harmony import */


    var _tag_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tag.service */
    "./src/app/backend/clients/api/tag.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TagService", function () {
      return _tag_service__WEBPACK_IMPORTED_MODULE_5__["TagService"];
    });
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/backend/clients/api/user.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"];
    });
    /* harmony import */


    var _userLocation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./userLocation.service */
    "./src/app/backend/clients/api/userLocation.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserLocationService", function () {
      return _userLocation_service__WEBPACK_IMPORTED_MODULE_7__["UserLocationService"];
    });
    /* harmony import */


    var _userMessage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./userMessage.service */
    "./src/app/backend/clients/api/userMessage.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserMessageService", function () {
      return _userMessage_service__WEBPACK_IMPORTED_MODULE_8__["UserMessageService"];
    }); // tslint:disable-next-line: max-line-length


    var APIS = [_accounts_service__WEBPACK_IMPORTED_MODULE_0__["AccountsService"], _blobStorage_service__WEBPACK_IMPORTED_MODULE_1__["BlobStorageService"], _devops_service__WEBPACK_IMPORTED_MODULE_2__["DevopsService"], _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"], _postTestData_service__WEBPACK_IMPORTED_MODULE_4__["PostTestDataService"], _tag_service__WEBPACK_IMPORTED_MODULE_5__["TagService"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _userLocation_service__WEBPACK_IMPORTED_MODULE_7__["UserLocationService"], _userMessage_service__WEBPACK_IMPORTED_MODULE_8__["UserMessageService"]];
    /***/
  },

  /***/
  "./src/app/backend/clients/api/blobStorage.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/backend/clients/api/blobStorage.service.ts ***!
    \************************************************************/

  /*! exports provided: BlobStorageService */

  /***/
  function srcAppBackendClientsApiBlobStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlobStorageService", function () {
      return BlobStorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../encoder */
    "./src/app/backend/clients/encoder.ts");
    /* harmony import */


    var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../variables */
    "./src/app/backend/clients/variables.ts");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../configuration */
    "./src/app/backend/clients/configuration.ts");
    /**
     * My Title
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: 1.0.0
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */

    /* tslint:disable:no-unused-variable member-ordering */
    // tslint:disable: import-spacing
    // tslint:disable: max-line-length


    var BlobStorageService = /*#__PURE__*/function () {
      function BlobStorageService(httpClient, basePath, configuration) {
        _classCallCheck(this, BlobStorageService);

        this.httpClient = httpClient;
        this.basePath = 'https://localhost:5001';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();

        if (basePath) {
          this.basePath = basePath;
        }

        if (configuration) {
          this.configuration = configuration;
          this.basePath = basePath || configuration.basePath || this.basePath;
        }
      }
      /**
       * @param consumes string[] mime-types
       * @return true: consumes contains 'multipart/form-data', false: otherwise
       */


      _createClass(BlobStorageService, [{
        key: "canConsumeForm",
        value: function canConsumeForm(consumes) {
          var form = 'multipart/form-data';

          var _iterator = _createForOfIteratorHelper(consumes),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var consume = _step.value;

              if (form === consume) {
                return true;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return false;
        }
      }, {
        key: "storageDeleteFileFileNameGet",
        value: function storageDeleteFileFileNameGet(fileName) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (fileName === null || fileName === undefined) {
            throw new Error('Required parameter fileName was null or undefined when calling storageDeleteFileFileNameGet.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = [];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.request('get', "".concat(this.basePath, "/storage/DeleteFile/").concat(encodeURIComponent(String(fileName))), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "storageDownloadFileFileNameGet",
        value: function storageDownloadFileFileNameGet(fileName) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (fileName === null || fileName === undefined) {
            throw new Error('Required parameter fileName was null or undefined when calling storageDownloadFileFileNameGet.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.request('get', "".concat(this.basePath, "/storage/DownloadFile/").concat(encodeURIComponent(String(fileName))), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "storageListFilesUserIdGet",
        value: function storageListFilesUserIdGet(userId) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling storageListFilesUserIdGet.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.request('get', "".concat(this.basePath, "/storage/ListFiles/").concat(encodeURIComponent(String(userId))), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "storageUploadFilePostForm",
        value: function storageUploadFilePostForm(asset, fileName) {
          var observe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'body';
          var reportProgress = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
            encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]()
          });

          if (fileName !== undefined && fileName !== null) {
            queryParameters = queryParameters.set('fileName', fileName);
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = [];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['multipart/form-data'];
          var canConsumeForm = this.canConsumeForm(consumes);
          var formParams;
          var useForm = false;
          var convertFormParamsToString = false; // use FormData to transmit files using content-type "multipart/form-data"
          // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data

          useForm = canConsumeForm;

          if (useForm) {
            formParams = new FormData();
          } else {
            formParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
              encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]()
            });
          }

          if (asset !== undefined) {
            formParams = formParams.append('asset', asset) || formParams;
          }

          return this.httpClient.request('post', "".concat(this.basePath, "/storage/UploadFile"), {
            body: convertFormParamsToString ? formParams.toString() : formParams,
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }]);

      return BlobStorageService;
    }();

    BlobStorageService.ɵfac = function BlobStorageService_Factory(t) {
      return new (t || BlobStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8));
    };

    BlobStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BlobStorageService,
      factory: BlobStorageService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlobStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
          }]
        }, {
          type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/backend/clients/api/devops.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/backend/clients/api/devops.service.ts ***!
    \*******************************************************/

  /*! exports provided: DevopsService */

  /***/
  function srcAppBackendClientsApiDevopsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DevopsService", function () {
      return DevopsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../configuration */
    "./src/app/backend/clients/configuration.ts");
    /**
     * Visit
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: v1
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */

    /* tslint:disable:no-unused-variable member-ordering */
    // tslint:disable: max-line-length
    // tslint:disable: import-spacing


    var InterceptorSkipHeader = 'X-Skip-Interceptor';

    var DevopsService = /*#__PURE__*/function () {
      function DevopsService(httpClient, basePath, configuration) {
        _classCallCheck(this, DevopsService);

        this.httpClient = httpClient;
        this.basePath = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"];
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set(InterceptorSkipHeader, '');
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();

        if (basePath) {
          this.basePath = basePath;
        }

        if (configuration) {
          this.configuration = configuration;
          this.basePath = basePath || configuration.basePath || this.basePath;
        }
      }
      /**
       * @param consumes string[] mime-types
       * @return true: consumes contains 'multipart/form-data', false: otherwise
       */


      _createClass(DevopsService, [{
        key: "canConsumeForm",
        value: function canConsumeForm(consumes) {
          var form = 'multipart/form-data';

          var _iterator2 = _createForOfIteratorHelper(consumes),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var consume = _step2.value;

              if (form === consume) {
                return true;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return false;
        }
      }, {
        key: "devopsPostTypesPost",
        value: function devopsPostTypesPost() {
          var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
          var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var headers = this.defaultHeaders; // authentication (Bearer) required

          if (this.configuration.apiKeys && this.configuration.apiKeys.Authorization) {
            headers = headers.set('Authorization', this.configuration.apiKeys.Authorization);
          } // to determine the Accept header


          var httpHeaderAccepts = [];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.request('post', "".concat(this.basePath, "/devops/post_types"), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }]);

      return DevopsService;
    }();

    DevopsService.ɵfac = function DevopsService_Factory(t) {
      return new (t || DevopsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"], 8));
    };

    DevopsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DevopsService,
      factory: DevopsService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevopsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"]]
          }]
        }, {
          type: _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/backend/clients/api/post.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/backend/clients/api/post.service.ts ***!
    \*****************************************************/

  /*! exports provided: PostService */

  /***/
  function srcAppBackendClientsApiPostServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostService", function () {
      return PostService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../configuration */
    "./src/app/backend/clients/configuration.ts");
    /**
     * Visit
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: v1
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */

    /* tslint:disable:no-unused-variable member-ordering */
    // tslint:disable: no-redundant-jsdoc
    // tslint:disable: max-line-length
    // tslint:disable: import-spacing


    var InterceptorSkipHeader = 'X-Skip-Interceptor';

    var PostService = /*#__PURE__*/function () {
      function PostService(httpClient, basePath, configuration) {
        _classCallCheck(this, PostService);

        this.httpClient = httpClient;
        this.basePath = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"];
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set(InterceptorSkipHeader, '');
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();

        if (basePath) {
          this.basePath = basePath;
        }

        if (configuration) {
          this.configuration = configuration;
          this.basePath = basePath || configuration.basePath || this.basePath;
        }
      }

      _createClass(PostService, [{
        key: "postsCommentPostIdPost",
        value: function postsCommentPostIdPost(postId, body) {
          var observe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'body';
          var reportProgress = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

          if (postId === null || postId === undefined) {
            throw new Error('Required parameter postId was null or undefined when calling postsCommentPostIdPost.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
          var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

          if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
          }

          return this.httpClient.request('post', "".concat(this.basePath, "/posts/comment/").concat(encodeURIComponent(String(postId))), {
            body: body,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "postsCommentsGetPostIdGet",
        value: function postsCommentsGetPostIdGet(postId) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (postId === null || postId === undefined) {
            throw new Error('Required parameter postId was null or undefined when calling postsCommentsGetPostIdGet.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.request('get', "".concat(this.basePath, "/posts/comments/get/").concat(encodeURIComponent(String(postId))), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "postsLikePostIdPost",
        value: function postsLikePostIdPost(postId) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (postId === null || postId === undefined) {
            throw new Error('Required parameter postId was null or undefined when calling postsLikePostIdPost.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.request('post', "".concat(this.basePath, "/posts/like/").concat(encodeURIComponent(String(postId))), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "postsLikesGetPostIdGet",
        value: function postsLikesGetPostIdGet(postId) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (postId === null || postId === undefined) {
            throw new Error('Required parameter postId was null or undefined when calling postsLikesGetPostIdGet.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.request('get', "".concat(this.basePath, "/posts/likes/get/").concat(encodeURIComponent(String(postId))), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "postsNewPostForm",
        value: function postsNewPostForm(caption, postType, locationCode, image) {
          var observe = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'body';
          var reportProgress = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['multipart/form-data'];
          var formParams;
          formParams = new FormData();
          var convertFormParamsToString = false;

          if (caption !== undefined) {
            formParams = formParams.append('Caption', caption) || formParams;
          }

          if (postType !== undefined) {
            formParams = formParams.append('PostType', postType) || formParams;
          }

          if (locationCode !== undefined) {
            formParams = formParams.append('LocationCode', locationCode) || formParams;
          }

          if (image !== undefined) {
            formParams = formParams.append('Image', image) || formParams;
          }

          return this.httpClient.request('post', "".concat(this.basePath, "/posts/new"), {
            body: convertFormParamsToString ? formParams.toString() : formParams,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "postsPageGet",
        value: function postsPageGet(page, filter, userId) {
          var observe = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'body';
          var reportProgress = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

          if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling postsPageGet.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          var uri = "".concat(this.basePath, "/posts/").concat(encodeURIComponent(String(page)));

          if (filter !== '' && userId === '') {
            uri = "".concat(this.basePath, "/posts/").concat(encodeURIComponent(String(page)), "/filter/").concat(encodeURIComponent(String(filter)));
          } else if (userId !== '' && filter === '') {
            uri = "".concat(this.basePath, "/posts/").concat(encodeURIComponent(String(page)), "/user/").concat(encodeURIComponent(String(userId)));
          } else if (userId !== '' && filter !== '') {
            uri = "".concat(this.basePath, "/posts/").concat(encodeURIComponent(String(page)), "/").concat(encodeURIComponent(String(filter)), "/").concat(encodeURIComponent(String(userId)));
          }

          return this.httpClient.request('get', uri, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }]);

      return PostService;
    }();

    PostService.ɵfac = function PostService_Factory(t) {
      return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"], 8));
    };

    PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PostService,
      factory: PostService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"]]
          }]
        }, {
          type: _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/backend/clients/api/postTestData.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/backend/clients/api/postTestData.service.ts ***!
    \*************************************************************/

  /*! exports provided: PostTestDataService */

  /***/
  function srcAppBackendClientsApiPostTestDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostTestDataService", function () {
      return PostTestDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../variables */
    "./src/app/backend/clients/variables.ts");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../configuration */
    "./src/app/backend/clients/configuration.ts");
    /**
     * My Title
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: 1.0.0
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */

    /* tslint:disable:no-unused-variable member-ordering */


    var PostTestDataService = /*#__PURE__*/function () {
      function PostTestDataService(httpClient, basePath, configuration) {
        _classCallCheck(this, PostTestDataService);

        this.httpClient = httpClient;
        this.basePath = 'https://localhost:5001';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();

        if (basePath) {
          this.basePath = basePath;
        }

        if (configuration) {
          this.configuration = configuration;
          this.basePath = basePath || configuration.basePath || this.basePath;
        }
      }
      /**
       * @param consumes string[] mime-types
       * @return true: consumes contains 'multipart/form-data', false: otherwise
       */


      _createClass(PostTestDataService, [{
        key: "canConsumeForm",
        value: function canConsumeForm(consumes) {
          var form = 'multipart/form-data';

          var _iterator3 = _createForOfIteratorHelper(consumes),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var consume = _step3.value;

              if (form === consume) {
                return true;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          return false;
        }
      }, {
        key: "postTestDataGetAll",
        value: function postTestDataGetAll() {
          var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
          var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.get("".concat(this.basePath, "/api/TestData/users"), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "postTestDataPostTest",
        value: function postTestDataPostTest() {
          var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
          var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.post("".concat(this.basePath, "/api/TestData/post"), null, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }]);

      return PostTestDataService;
    }();

    PostTestDataService.ɵfac = function PostTestDataService_Factory(t) {
      return new (t || PostTestDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"], 8));
    };

    PostTestDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PostTestDataService,
      factory: PostTestDataService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostTestDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"]]
          }]
        }, {
          type: _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/backend/clients/api/tag.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/backend/clients/api/tag.service.ts ***!
    \****************************************************/

  /*! exports provided: TagService */

  /***/
  function srcAppBackendClientsApiTagServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagService", function () {
      return TagService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../variables */
    "./src/app/backend/clients/variables.ts");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../configuration */
    "./src/app/backend/clients/configuration.ts");
    /**
     * My Title
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: 1.0.0
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */

    /* tslint:disable:no-unused-variable member-ordering */


    var TagService = /*#__PURE__*/function () {
      function TagService(httpClient, basePath, configuration) {
        _classCallCheck(this, TagService);

        this.httpClient = httpClient;
        this.basePath = 'https://localhost:5001';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();

        if (basePath) {
          this.basePath = basePath;
        }

        if (configuration) {
          this.configuration = configuration;
          this.basePath = basePath || configuration.basePath || this.basePath;
        }
      }
      /**
       * @param consumes string[] mime-types
       * @return true: consumes contains 'multipart/form-data', false: otherwise
       */


      _createClass(TagService, [{
        key: "canConsumeForm",
        value: function canConsumeForm(consumes) {
          var form = 'multipart/form-data';

          var _iterator4 = _createForOfIteratorHelper(consumes),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var consume = _step4.value;

              if (form === consume) {
                return true;
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          return false;
        }
      }, {
        key: "tagDeleteTag",
        value: function tagDeleteTag(id) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling tagDeleteTag.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient["delete"]("".concat(this.basePath, "/api/Tag/").concat(encodeURIComponent(String(id))), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "tagGetTag",
        value: function tagGetTag(id) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling tagGetTag.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.get("".concat(this.basePath, "/api/Tag/").concat(encodeURIComponent(String(id))), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "tagGetTagAll",
        value: function tagGetTagAll() {
          var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
          var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.get("".concat(this.basePath, "/api/Tag"), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "tagPostTag",
        value: function tagPostTag(tag) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (tag === null || tag === undefined) {
            throw new Error('Required parameter tag was null or undefined when calling tagPostTag.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
          var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

          if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
          }

          return this.httpClient.post("".concat(this.basePath, "/api/Tag"), tag, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "tagPutTag",
        value: function tagPutTag(id, tag) {
          var observe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'body';
          var reportProgress = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

          if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling tagPutTag.');
          }

          if (tag === null || tag === undefined) {
            throw new Error('Required parameter tag was null or undefined when calling tagPutTag.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = [];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
          var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

          if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
          }

          return this.httpClient.put("".concat(this.basePath, "/api/Tag/").concat(encodeURIComponent(String(id))), tag, {
            responseType: 'blob',
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }]);

      return TagService;
    }();

    TagService.ɵfac = function TagService_Factory(t) {
      return new (t || TagService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"], 8));
    };

    TagService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TagService,
      factory: TagService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"]]
          }]
        }, {
          type: _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/backend/clients/api/user.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/backend/clients/api/user.service.ts ***!
    \*****************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppBackendClientsApiUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../configuration */
    "./src/app/backend/clients/configuration.ts");
    /**
     * My Title
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: 1.0.0
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */

    /* tslint:disable:no-unused-variable member-ordering */
    // tslint:disable: max-line-length
    // tslint:disable: import-spacing


    var InterceptorSkipHeader = 'X-Skip-Interceptor';

    var UserService = /*#__PURE__*/function () {
      function UserService(httpClient, basePath, configuration) {
        _classCallCheck(this, UserService);

        this.httpClient = httpClient;
        this.basePath = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"];
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set(InterceptorSkipHeader, '');
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();

        if (basePath) {
          this.basePath = basePath;
        }

        if (configuration) {
          this.configuration = configuration;
          this.basePath = basePath || configuration.basePath || this.basePath;
        }
      }
      /**
       * @param consumes string[] mime-types
       * @return true: consumes contains 'multipart/form-data', false: otherwise
       */


      _createClass(UserService, [{
        key: "canConsumeForm",
        value: function canConsumeForm(consumes) {
          var form = 'multipart/form-data';

          var _iterator5 = _createForOfIteratorHelper(consumes),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var consume = _step5.value;

              if (form === consume) {
                return true;
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          return false;
        }
      }, {
        key: "userAllGet",
        value: function userAllGet() {
          var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
          var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var headers = this.defaultHeaders; // authentication (Bearer) required

          if (this.configuration.apiKeys && this.configuration.apiKeys.Authorization) {
            headers = headers.set('Authorization', this.configuration.apiKeys.Authorization);
          } // to determine the Accept header


          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.request('get', "".concat(this.basePath, "/User/all"), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "userIdGet",
        value: function userIdGet(id) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userIdGet.');
          }

          var headers = this.defaultHeaders; // authentication (Bearer) required

          if (this.configuration.apiKeys && this.configuration.apiKeys.Authorization) {
            headers = headers.set('Authorization', this.configuration.apiKeys.Authorization);
          } // to determine the Accept header


          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.request('get', "".concat(this.basePath, "/User/").concat(encodeURIComponent(String(id))), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "userSearchQueryGet",
        value: function userSearchQueryGet(query) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (query === null || query === undefined) {
            throw new Error('Required parameter query was null or undefined when calling userSearchQueryGet.');
          }

          var headers = this.defaultHeaders; // authentication (Bearer) required

          if (this.configuration.apiKeys && this.configuration.apiKeys.Authorization) {
            headers = headers.set('Authorization', this.configuration.apiKeys.Authorization);
          } // to determine the Accept header


          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.request('get', "".concat(this.basePath, "/User/search/").concat(encodeURIComponent(String(query))), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "userSelfGet",
        value: function userSelfGet() {
          var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
          var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var headers = this.defaultHeaders; // authentication (Bearer) required

          if (this.configuration.apiKeys && this.configuration.apiKeys.Authorization) {
            headers = headers.set('Authorization', this.configuration.apiKeys.Authorization);
          } // to determine the Accept header


          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.request('get', "".concat(this.basePath, "/User/self"), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"], 8));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"]]
          }]
        }, {
          type: _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/backend/clients/api/userLocation.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/backend/clients/api/userLocation.service.ts ***!
    \*************************************************************/

  /*! exports provided: UserLocationService */

  /***/
  function srcAppBackendClientsApiUserLocationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserLocationService", function () {
      return UserLocationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../variables */
    "./src/app/backend/clients/variables.ts");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../configuration */
    "./src/app/backend/clients/configuration.ts");
    /**
     * My Title
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: 1.0.0
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */

    /* tslint:disable:no-unused-variable member-ordering */


    var UserLocationService = /*#__PURE__*/function () {
      function UserLocationService(httpClient, basePath, configuration) {
        _classCallCheck(this, UserLocationService);

        this.httpClient = httpClient;
        this.basePath = 'https://localhost:5001';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();

        if (basePath) {
          this.basePath = basePath;
        }

        if (configuration) {
          this.configuration = configuration;
          this.basePath = basePath || configuration.basePath || this.basePath;
        }
      }
      /**
       * @param consumes string[] mime-types
       * @return true: consumes contains 'multipart/form-data', false: otherwise
       */


      _createClass(UserLocationService, [{
        key: "canConsumeForm",
        value: function canConsumeForm(consumes) {
          var form = 'multipart/form-data';

          var _iterator6 = _createForOfIteratorHelper(consumes),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var consume = _step6.value;

              if (form === consume) {
                return true;
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          return false;
        }
      }, {
        key: "userLocationDeleteUserLocation",
        value: function userLocationDeleteUserLocation(id) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userLocationDeleteUserLocation.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient["delete"]("".concat(this.basePath, "/api/UserLocation/").concat(encodeURIComponent(String(id))), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "userLocationGetUserLocation",
        value: function userLocationGetUserLocation(id) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userLocationGetUserLocation.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.get("".concat(this.basePath, "/api/UserLocation/").concat(encodeURIComponent(String(id))), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "userLocationGetUserLocationAll",
        value: function userLocationGetUserLocationAll() {
          var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
          var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.get("".concat(this.basePath, "/api/UserLocation"), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "userLocationPostUserLocation",
        value: function userLocationPostUserLocation(userLocation) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (userLocation === null || userLocation === undefined) {
            throw new Error('Required parameter userLocation was null or undefined when calling userLocationPostUserLocation.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
          var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

          if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
          }

          return this.httpClient.post("".concat(this.basePath, "/api/UserLocation"), userLocation, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "userLocationPutUserLocation",
        value: function userLocationPutUserLocation(id, userLocation) {
          var observe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'body';
          var reportProgress = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

          if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userLocationPutUserLocation.');
          }

          if (userLocation === null || userLocation === undefined) {
            throw new Error('Required parameter userLocation was null or undefined when calling userLocationPutUserLocation.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = [];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
          var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

          if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
          }

          return this.httpClient.put("".concat(this.basePath, "/api/UserLocation/").concat(encodeURIComponent(String(id))), userLocation, {
            responseType: 'blob',
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }]);

      return UserLocationService;
    }();

    UserLocationService.ɵfac = function UserLocationService_Factory(t) {
      return new (t || UserLocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"], 8));
    };

    UserLocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserLocationService,
      factory: UserLocationService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserLocationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"]]
          }]
        }, {
          type: _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/backend/clients/api/userMessage.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/backend/clients/api/userMessage.service.ts ***!
    \************************************************************/

  /*! exports provided: UserMessageService */

  /***/
  function srcAppBackendClientsApiUserMessageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserMessageService", function () {
      return UserMessageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../variables */
    "./src/app/backend/clients/variables.ts");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../configuration */
    "./src/app/backend/clients/configuration.ts");
    /**
     * My Title
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: 1.0.0
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */

    /* tslint:disable:no-unused-variable member-ordering */


    var UserMessageService = /*#__PURE__*/function () {
      function UserMessageService(httpClient, basePath, configuration) {
        _classCallCheck(this, UserMessageService);

        this.httpClient = httpClient;
        this.basePath = 'https://localhost:5001';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();

        if (basePath) {
          this.basePath = basePath;
        }

        if (configuration) {
          this.configuration = configuration;
          this.basePath = basePath || configuration.basePath || this.basePath;
        }
      }
      /**
       * @param consumes string[] mime-types
       * @return true: consumes contains 'multipart/form-data', false: otherwise
       */


      _createClass(UserMessageService, [{
        key: "canConsumeForm",
        value: function canConsumeForm(consumes) {
          var form = 'multipart/form-data';

          var _iterator7 = _createForOfIteratorHelper(consumes),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var consume = _step7.value;

              if (form === consume) {
                return true;
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }

          return false;
        }
      }, {
        key: "userMessageDeleteUserMessage",
        value: function userMessageDeleteUserMessage(id) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userMessageDeleteUserMessage.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient["delete"]("".concat(this.basePath, "/api/UserMessage/").concat(encodeURIComponent(String(id))), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "userMessageGetUserMessage",
        value: function userMessageGetUserMessage(id) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userMessageGetUserMessage.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.get("".concat(this.basePath, "/api/UserMessage/").concat(encodeURIComponent(String(id))), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "userMessageGetUserMessageAll",
        value: function userMessageGetUserMessageAll() {
          var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
          var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.get("".concat(this.basePath, "/api/UserMessage"), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "userMessagePostUserMessage",
        value: function userMessagePostUserMessage(userMessage) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (userMessage === null || userMessage === undefined) {
            throw new Error('Required parameter userMessage was null or undefined when calling userMessagePostUserMessage.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['text/plain', 'application/json', 'text/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
          var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

          if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
          }

          return this.httpClient.post("".concat(this.basePath, "/api/UserMessage"), userMessage, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "userMessagePutUserMessage",
        value: function userMessagePutUserMessage(id, userMessage) {
          var observe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'body';
          var reportProgress = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

          if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling userMessagePutUserMessage.');
          }

          if (userMessage === null || userMessage === undefined) {
            throw new Error('Required parameter userMessage was null or undefined when calling userMessagePutUserMessage.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = [];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
          var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

          if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
          }

          return this.httpClient.put("".concat(this.basePath, "/api/UserMessage/").concat(encodeURIComponent(String(id))), userMessage, {
            responseType: 'blob',
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }]);

      return UserMessageService;
    }();

    UserMessageService.ɵfac = function UserMessageService_Factory(t) {
      return new (t || UserMessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"], 8));
    };

    UserMessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserMessageService,
      factory: UserMessageService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserMessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"]]
          }]
        }, {
          type: _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/backend/clients/configuration.ts":
  /*!**************************************************!*\
    !*** ./src/app/backend/clients/configuration.ts ***!
    \**************************************************/

  /*! exports provided: Configuration */

  /***/
  function srcAppBackendClientsConfigurationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Configuration", function () {
      return Configuration;
    });

    var Configuration = /*#__PURE__*/function () {
      function Configuration() {
        var configurationParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Configuration);

        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
      }
      /**
       * Select the correct content-type to use for a request.
       * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
       * If no content type is found return the first found type if the contentTypes is not empty
       * @param contentTypes - the array of content types that are available for selection
       * @returns the selected content-type or <code>undefined</code> if no selection could be made.
       */


      _createClass(Configuration, [{
        key: "selectHeaderContentType",
        value: function selectHeaderContentType(contentTypes) {
          var _this10 = this;

          if (contentTypes.length == 0) {
            return undefined;
          }

          var type = contentTypes.find(function (x) {
            return _this10.isJsonMime(x);
          });

          if (type === undefined) {
            return contentTypes[0];
          }

          return type;
        }
        /**
         * Select the correct accept content-type to use for a request.
         * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
         * If no content type is found return the first found type if the contentTypes is not empty
         * @param accepts - the array of content types that are available for selection.
         * @returns the selected content-type or <code>undefined</code> if no selection could be made.
         */

      }, {
        key: "selectHeaderAccept",
        value: function selectHeaderAccept(accepts) {
          var _this11 = this;

          if (accepts.length == 0) {
            return undefined;
          }

          var type = accepts.find(function (x) {
            return _this11.isJsonMime(x);
          });

          if (type === undefined) {
            return accepts[0];
          }

          return type;
        }
        /**
         * Check if the given MIME is a JSON MIME.
         * JSON MIME examples:
         *   application/json
         *   application/json; charset=UTF8
         *   APPLICATION/JSON
         *   application/vnd.company+json
         * @param mime - MIME (Multipurpose Internet Mail Extensions)
         * @return True if the given MIME is JSON, false otherwise.
         */

      }, {
        key: "isJsonMime",
        value: function isJsonMime(mime) {
          var jsonMime = new RegExp('^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
          return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
        }
      }]);

      return Configuration;
    }();
    /***/

  },

  /***/
  "./src/app/backend/clients/encoder.ts":
  /*!********************************************!*\
    !*** ./src/app/backend/clients/encoder.ts ***!
    \********************************************/

  /*! exports provided: CustomHttpUrlEncodingCodec */

  /***/
  function srcAppBackendClientsEncoderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomHttpUrlEncodingCodec", function () {
      return CustomHttpUrlEncodingCodec;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /**
     * CustomHttpUrlEncodingCodec
     * Fix plus sign (+) not encoding, so sent as blank space
     * See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
     */


    var CustomHttpUrlEncodingCodec = /*#__PURE__*/function (_angular_common_http_) {
      _inherits(CustomHttpUrlEncodingCodec, _angular_common_http_);

      var _super = _createSuper(CustomHttpUrlEncodingCodec);

      function CustomHttpUrlEncodingCodec() {
        _classCallCheck(this, CustomHttpUrlEncodingCodec);

        return _super.apply(this, arguments);
      }

      _createClass(CustomHttpUrlEncodingCodec, [{
        key: "encodeKey",
        value: function encodeKey(k) {
          k = _get(_getPrototypeOf(CustomHttpUrlEncodingCodec.prototype), "encodeKey", this).call(this, k);
          return k.replace(/\+/gi, '%2B');
        }
      }, {
        key: "encodeValue",
        value: function encodeValue(v) {
          v = _get(_getPrototypeOf(CustomHttpUrlEncodingCodec.prototype), "encodeValue", this).call(this, v);
          return v.replace(/\+/gi, '%2B');
        }
      }]);

      return CustomHttpUrlEncodingCodec;
    }(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpUrlEncodingCodec"]);
    /***/

  },

  /***/
  "./src/app/backend/clients/index.ts":
  /*!******************************************!*\
    !*** ./src/app/backend/clients/index.ts ***!
    \******************************************/

  /*! exports provided: InterceptorSkipHeader, AccountsService, BlobStorageService, DevopsService, PostService, PostTestDataService, TagService, UserService, UserLocationService, UserMessageService, APIS, AddressFamily, CallingConventions, EventAttributes, FieldAttributes, GenericParameterAttributes, LayoutKind, MemberTypes, MethodAttributes, MethodImplAttributes, ModelValidationState, ParameterAttributes, PropertyAttributes, SecurityRuleSet, TypeAttributes, BASE_PATH, COLLECTION_FORMATS, Configuration, ApiModule */

  /***/
  function srcAppBackendClientsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./api/api */
    "./src/app/backend/clients/api/api.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InterceptorSkipHeader", function () {
      return _api_api__WEBPACK_IMPORTED_MODULE_0__["InterceptorSkipHeader"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccountsService", function () {
      return _api_api__WEBPACK_IMPORTED_MODULE_0__["AccountsService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BlobStorageService", function () {
      return _api_api__WEBPACK_IMPORTED_MODULE_0__["BlobStorageService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DevopsService", function () {
      return _api_api__WEBPACK_IMPORTED_MODULE_0__["DevopsService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PostService", function () {
      return _api_api__WEBPACK_IMPORTED_MODULE_0__["PostService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PostTestDataService", function () {
      return _api_api__WEBPACK_IMPORTED_MODULE_0__["PostTestDataService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TagService", function () {
      return _api_api__WEBPACK_IMPORTED_MODULE_0__["TagService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return _api_api__WEBPACK_IMPORTED_MODULE_0__["UserService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserLocationService", function () {
      return _api_api__WEBPACK_IMPORTED_MODULE_0__["UserLocationService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserMessageService", function () {
      return _api_api__WEBPACK_IMPORTED_MODULE_0__["UserMessageService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "APIS", function () {
      return _api_api__WEBPACK_IMPORTED_MODULE_0__["APIS"];
    });
    /* harmony import */


    var _model_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./model/models */
    "./src/app/backend/clients/model/models.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AddressFamily", function () {
      return _model_models__WEBPACK_IMPORTED_MODULE_1__["AddressFamily"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CallingConventions", function () {
      return _model_models__WEBPACK_IMPORTED_MODULE_1__["CallingConventions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EventAttributes", function () {
      return _model_models__WEBPACK_IMPORTED_MODULE_1__["EventAttributes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FieldAttributes", function () {
      return _model_models__WEBPACK_IMPORTED_MODULE_1__["FieldAttributes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GenericParameterAttributes", function () {
      return _model_models__WEBPACK_IMPORTED_MODULE_1__["GenericParameterAttributes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LayoutKind", function () {
      return _model_models__WEBPACK_IMPORTED_MODULE_1__["LayoutKind"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MemberTypes", function () {
      return _model_models__WEBPACK_IMPORTED_MODULE_1__["MemberTypes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MethodAttributes", function () {
      return _model_models__WEBPACK_IMPORTED_MODULE_1__["MethodAttributes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MethodImplAttributes", function () {
      return _model_models__WEBPACK_IMPORTED_MODULE_1__["MethodImplAttributes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModelValidationState", function () {
      return _model_models__WEBPACK_IMPORTED_MODULE_1__["ModelValidationState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ParameterAttributes", function () {
      return _model_models__WEBPACK_IMPORTED_MODULE_1__["ParameterAttributes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PropertyAttributes", function () {
      return _model_models__WEBPACK_IMPORTED_MODULE_1__["PropertyAttributes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SecurityRuleSet", function () {
      return _model_models__WEBPACK_IMPORTED_MODULE_1__["SecurityRuleSet"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TypeAttributes", function () {
      return _model_models__WEBPACK_IMPORTED_MODULE_1__["TypeAttributes"];
    });
    /* harmony import */


    var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./variables */
    "./src/app/backend/clients/variables.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BASE_PATH", function () {
      return _variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function () {
      return _variables__WEBPACK_IMPORTED_MODULE_2__["COLLECTION_FORMATS"];
    });
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./configuration */
    "./src/app/backend/clients/configuration.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Configuration", function () {
      return _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"];
    });
    /* harmony import */


    var _api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./api.module */
    "./src/app/backend/clients/api.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiModule", function () {
      return _api_module__WEBPACK_IMPORTED_MODULE_4__["ApiModule"];
    });
    /***/

  },

  /***/
  "./src/app/backend/clients/model/addressFamily.ts":
  /*!********************************************************!*\
    !*** ./src/app/backend/clients/model/addressFamily.ts ***!
    \********************************************************/

  /*! exports provided: AddressFamily */

  /***/
  function srcAppBackendClientsModelAddressFamilyTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressFamily", function () {
      return AddressFamily;
    });
    /**
     * Visit
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: v1
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */


    var AddressFamily = {
      NUMBER_0: 0,
      NUMBER_1: 1,
      NUMBER_2: 2,
      NUMBER_3: 3,
      NUMBER_4: 4,
      NUMBER_5: 5,
      NUMBER_6: 6,
      NUMBER_7: 7,
      NUMBER_8: 8,
      NUMBER_9: 9,
      NUMBER_10: 10,
      NUMBER_11: 11,
      NUMBER_12: 12,
      NUMBER_13: 13,
      NUMBER_14: 14,
      NUMBER_15: 15,
      NUMBER_16: 16,
      NUMBER_17: 17,
      NUMBER_18: 18,
      NUMBER_19: 19,
      NUMBER_21: 21,
      NUMBER_22: 22,
      NUMBER_23: 23,
      NUMBER_24: 24,
      NUMBER_25: 25,
      NUMBER_26: 26,
      NUMBER_28: 28,
      NUMBER_29: 29,
      NUMBER_65536: 65536,
      NUMBER_65537: 65537,
      NUMBER_MINUS_1: -1
    };
    /***/
  },

  /***/
  "./src/app/backend/clients/model/callingConventions.ts":
  /*!*************************************************************!*\
    !*** ./src/app/backend/clients/model/callingConventions.ts ***!
    \*************************************************************/

  /*! exports provided: CallingConventions */

  /***/
  function srcAppBackendClientsModelCallingConventionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallingConventions", function () {
      return CallingConventions;
    });
    /**
     * Visit
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: v1
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */


    var CallingConventions = {
      NUMBER_1: 1,
      NUMBER_2: 2,
      NUMBER_3: 3,
      NUMBER_32: 32,
      NUMBER_64: 64
    };
    /***/
  },

  /***/
  "./src/app/backend/clients/model/eventAttributes.ts":
  /*!**********************************************************!*\
    !*** ./src/app/backend/clients/model/eventAttributes.ts ***!
    \**********************************************************/

  /*! exports provided: EventAttributes */

  /***/
  function srcAppBackendClientsModelEventAttributesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventAttributes", function () {
      return EventAttributes;
    });
    /**
     * Visit
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: v1
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */


    var EventAttributes = {
      NUMBER_0: 0,
      NUMBER_512: 512,
      NUMBER_1024: 1024
    };
    /***/
  },

  /***/
  "./src/app/backend/clients/model/fieldAttributes.ts":
  /*!**********************************************************!*\
    !*** ./src/app/backend/clients/model/fieldAttributes.ts ***!
    \**********************************************************/

  /*! exports provided: FieldAttributes */

  /***/
  function srcAppBackendClientsModelFieldAttributesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FieldAttributes", function () {
      return FieldAttributes;
    });
    /**
     * Visit
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: v1
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */


    var FieldAttributes = {
      NUMBER_0: 0,
      NUMBER_1: 1,
      NUMBER_2: 2,
      NUMBER_3: 3,
      NUMBER_4: 4,
      NUMBER_5: 5,
      NUMBER_6: 6,
      NUMBER_7: 7,
      NUMBER_16: 16,
      NUMBER_32: 32,
      NUMBER_64: 64,
      NUMBER_128: 128,
      NUMBER_256: 256,
      NUMBER_512: 512,
      NUMBER_1024: 1024,
      NUMBER_4096: 4096,
      NUMBER_8192: 8192,
      NUMBER_32768: 32768,
      NUMBER_38144: 38144
    };
    /***/
  },

  /***/
  "./src/app/backend/clients/model/genericParameterAttributes.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/backend/clients/model/genericParameterAttributes.ts ***!
    \*********************************************************************/

  /*! exports provided: GenericParameterAttributes */

  /***/
  function srcAppBackendClientsModelGenericParameterAttributesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenericParameterAttributes", function () {
      return GenericParameterAttributes;
    });
    /**
     * Visit
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: v1
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */


    var GenericParameterAttributes = {
      NUMBER_0: 0,
      NUMBER_1: 1,
      NUMBER_2: 2,
      NUMBER_3: 3,
      NUMBER_4: 4,
      NUMBER_8: 8,
      NUMBER_16: 16,
      NUMBER_28: 28
    };
    /***/
  },

  /***/
  "./src/app/backend/clients/model/layoutKind.ts":
  /*!*****************************************************!*\
    !*** ./src/app/backend/clients/model/layoutKind.ts ***!
    \*****************************************************/

  /*! exports provided: LayoutKind */

  /***/
  function srcAppBackendClientsModelLayoutKindTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutKind", function () {
      return LayoutKind;
    });
    /**
     * Visit
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: v1
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */


    var LayoutKind = {
      NUMBER_0: 0,
      NUMBER_2: 2,
      NUMBER_3: 3
    };
    /***/
  },

  /***/
  "./src/app/backend/clients/model/memberTypes.ts":
  /*!******************************************************!*\
    !*** ./src/app/backend/clients/model/memberTypes.ts ***!
    \******************************************************/

  /*! exports provided: MemberTypes */

  /***/
  function srcAppBackendClientsModelMemberTypesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberTypes", function () {
      return MemberTypes;
    });
    /**
     * Visit
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: v1
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */


    var MemberTypes = {
      NUMBER_1: 1,
      NUMBER_2: 2,
      NUMBER_4: 4,
      NUMBER_8: 8,
      NUMBER_16: 16,
      NUMBER_32: 32,
      NUMBER_64: 64,
      NUMBER_128: 128,
      NUMBER_191: 191
    };
    /***/
  },

  /***/
  "./src/app/backend/clients/model/methodAttributes.ts":
  /*!***********************************************************!*\
    !*** ./src/app/backend/clients/model/methodAttributes.ts ***!
    \***********************************************************/

  /*! exports provided: MethodAttributes */

  /***/
  function srcAppBackendClientsModelMethodAttributesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MethodAttributes", function () {
      return MethodAttributes;
    });
    /**
     * Visit
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: v1
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */


    var MethodAttributes = {
      NUMBER_0: 0,
      NUMBER_1: 1,
      NUMBER_2: 2,
      NUMBER_3: 3,
      NUMBER_4: 4,
      NUMBER_5: 5,
      NUMBER_6: 6,
      NUMBER_7: 7,
      NUMBER_8: 8,
      NUMBER_16: 16,
      NUMBER_32: 32,
      NUMBER_64: 64,
      NUMBER_128: 128,
      NUMBER_256: 256,
      NUMBER_512: 512,
      NUMBER_1024: 1024,
      NUMBER_2048: 2048,
      NUMBER_4096: 4096,
      NUMBER_8192: 8192,
      NUMBER_16384: 16384,
      NUMBER_32768: 32768,
      NUMBER_53248: 53248
    };
    /***/
  },

  /***/
  "./src/app/backend/clients/model/methodImplAttributes.ts":
  /*!***************************************************************!*\
    !*** ./src/app/backend/clients/model/methodImplAttributes.ts ***!
    \***************************************************************/

  /*! exports provided: MethodImplAttributes */

  /***/
  function srcAppBackendClientsModelMethodImplAttributesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MethodImplAttributes", function () {
      return MethodImplAttributes;
    });
    /**
     * Visit
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: v1
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */


    var MethodImplAttributes = {
      NUMBER_0: 0,
      NUMBER_1: 1,
      NUMBER_2: 2,
      NUMBER_3: 3,
      NUMBER_4: 4,
      NUMBER_8: 8,
      NUMBER_16: 16,
      NUMBER_32: 32,
      NUMBER_64: 64,
      NUMBER_128: 128,
      NUMBER_256: 256,
      NUMBER_512: 512,
      NUMBER_4096: 4096,
      NUMBER_65535: 65535
    };
    /***/
  },

  /***/
  "./src/app/backend/clients/model/modelValidationState.ts":
  /*!***************************************************************!*\
    !*** ./src/app/backend/clients/model/modelValidationState.ts ***!
    \***************************************************************/

  /*! exports provided: ModelValidationState */

  /***/
  function srcAppBackendClientsModelModelValidationStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelValidationState", function () {
      return ModelValidationState;
    });
    /**
     * Visit
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: v1
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */


    var ModelValidationState = {
      NUMBER_0: 0,
      NUMBER_1: 1,
      NUMBER_2: 2,
      NUMBER_3: 3
    };
    /***/
  },

  /***/
  "./src/app/backend/clients/model/models.ts":
  /*!*************************************************!*\
    !*** ./src/app/backend/clients/model/models.ts ***!
    \*************************************************/

  /*! exports provided: AddressFamily, CallingConventions, EventAttributes, FieldAttributes, GenericParameterAttributes, LayoutKind, MemberTypes, MethodAttributes, MethodImplAttributes, ModelValidationState, ParameterAttributes, PropertyAttributes, SecurityRuleSet, TypeAttributes */

  /***/
  function srcAppBackendClientsModelModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _addressFamily__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./addressFamily */
    "./src/app/backend/clients/model/addressFamily.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AddressFamily", function () {
      return _addressFamily__WEBPACK_IMPORTED_MODULE_0__["AddressFamily"];
    });
    /* harmony import */


    var _callingConventions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./callingConventions */
    "./src/app/backend/clients/model/callingConventions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CallingConventions", function () {
      return _callingConventions__WEBPACK_IMPORTED_MODULE_1__["CallingConventions"];
    });
    /* harmony import */


    var _eventAttributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./eventAttributes */
    "./src/app/backend/clients/model/eventAttributes.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EventAttributes", function () {
      return _eventAttributes__WEBPACK_IMPORTED_MODULE_2__["EventAttributes"];
    });
    /* harmony import */


    var _fieldAttributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fieldAttributes */
    "./src/app/backend/clients/model/fieldAttributes.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FieldAttributes", function () {
      return _fieldAttributes__WEBPACK_IMPORTED_MODULE_3__["FieldAttributes"];
    });
    /* harmony import */


    var _genericParameterAttributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./genericParameterAttributes */
    "./src/app/backend/clients/model/genericParameterAttributes.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GenericParameterAttributes", function () {
      return _genericParameterAttributes__WEBPACK_IMPORTED_MODULE_4__["GenericParameterAttributes"];
    });
    /* harmony import */


    var _layoutKind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./layoutKind */
    "./src/app/backend/clients/model/layoutKind.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LayoutKind", function () {
      return _layoutKind__WEBPACK_IMPORTED_MODULE_5__["LayoutKind"];
    });
    /* harmony import */


    var _memberTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./memberTypes */
    "./src/app/backend/clients/model/memberTypes.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MemberTypes", function () {
      return _memberTypes__WEBPACK_IMPORTED_MODULE_6__["MemberTypes"];
    });
    /* harmony import */


    var _methodAttributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./methodAttributes */
    "./src/app/backend/clients/model/methodAttributes.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MethodAttributes", function () {
      return _methodAttributes__WEBPACK_IMPORTED_MODULE_7__["MethodAttributes"];
    });
    /* harmony import */


    var _methodImplAttributes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./methodImplAttributes */
    "./src/app/backend/clients/model/methodImplAttributes.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MethodImplAttributes", function () {
      return _methodImplAttributes__WEBPACK_IMPORTED_MODULE_8__["MethodImplAttributes"];
    });
    /* harmony import */


    var _modelValidationState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./modelValidationState */
    "./src/app/backend/clients/model/modelValidationState.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModelValidationState", function () {
      return _modelValidationState__WEBPACK_IMPORTED_MODULE_9__["ModelValidationState"];
    });
    /* harmony import */


    var _parameterAttributes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./parameterAttributes */
    "./src/app/backend/clients/model/parameterAttributes.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ParameterAttributes", function () {
      return _parameterAttributes__WEBPACK_IMPORTED_MODULE_10__["ParameterAttributes"];
    });
    /* harmony import */


    var _propertyAttributes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./propertyAttributes */
    "./src/app/backend/clients/model/propertyAttributes.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PropertyAttributes", function () {
      return _propertyAttributes__WEBPACK_IMPORTED_MODULE_11__["PropertyAttributes"];
    });
    /* harmony import */


    var _securityRuleSet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./securityRuleSet */
    "./src/app/backend/clients/model/securityRuleSet.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SecurityRuleSet", function () {
      return _securityRuleSet__WEBPACK_IMPORTED_MODULE_12__["SecurityRuleSet"];
    });
    /* harmony import */


    var _typeAttributes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./typeAttributes */
    "./src/app/backend/clients/model/typeAttributes.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TypeAttributes", function () {
      return _typeAttributes__WEBPACK_IMPORTED_MODULE_13__["TypeAttributes"];
    });
    /***/

  },

  /***/
  "./src/app/backend/clients/model/parameterAttributes.ts":
  /*!**************************************************************!*\
    !*** ./src/app/backend/clients/model/parameterAttributes.ts ***!
    \**************************************************************/

  /*! exports provided: ParameterAttributes */

  /***/
  function srcAppBackendClientsModelParameterAttributesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParameterAttributes", function () {
      return ParameterAttributes;
    });
    /**
     * Visit
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: v1
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */


    var ParameterAttributes = {
      NUMBER_0: 0,
      NUMBER_1: 1,
      NUMBER_2: 2,
      NUMBER_4: 4,
      NUMBER_8: 8,
      NUMBER_16: 16,
      NUMBER_4096: 4096,
      NUMBER_8192: 8192,
      NUMBER_16384: 16384,
      NUMBER_32768: 32768,
      NUMBER_61440: 61440
    };
    /***/
  },

  /***/
  "./src/app/backend/clients/model/propertyAttributes.ts":
  /*!*************************************************************!*\
    !*** ./src/app/backend/clients/model/propertyAttributes.ts ***!
    \*************************************************************/

  /*! exports provided: PropertyAttributes */

  /***/
  function srcAppBackendClientsModelPropertyAttributesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyAttributes", function () {
      return PropertyAttributes;
    });
    /**
     * Visit
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: v1
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */


    var PropertyAttributes = {
      NUMBER_0: 0,
      NUMBER_512: 512,
      NUMBER_1024: 1024,
      NUMBER_4096: 4096,
      NUMBER_8192: 8192,
      NUMBER_16384: 16384,
      NUMBER_32768: 32768,
      NUMBER_62464: 62464
    };
    /***/
  },

  /***/
  "./src/app/backend/clients/model/securityRuleSet.ts":
  /*!**********************************************************!*\
    !*** ./src/app/backend/clients/model/securityRuleSet.ts ***!
    \**********************************************************/

  /*! exports provided: SecurityRuleSet */

  /***/
  function srcAppBackendClientsModelSecurityRuleSetTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecurityRuleSet", function () {
      return SecurityRuleSet;
    });
    /**
     * Visit
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: v1
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */


    var SecurityRuleSet = {
      NUMBER_0: 0,
      NUMBER_1: 1,
      NUMBER_2: 2
    };
    /***/
  },

  /***/
  "./src/app/backend/clients/model/typeAttributes.ts":
  /*!*********************************************************!*\
    !*** ./src/app/backend/clients/model/typeAttributes.ts ***!
    \*********************************************************/

  /*! exports provided: TypeAttributes */

  /***/
  function srcAppBackendClientsModelTypeAttributesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypeAttributes", function () {
      return TypeAttributes;
    });
    /**
     * Visit
     * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
     *
     * OpenAPI spec version: v1
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */


    var TypeAttributes = {
      NUMBER_0: 0,
      NUMBER_1: 1,
      NUMBER_2: 2,
      NUMBER_3: 3,
      NUMBER_4: 4,
      NUMBER_5: 5,
      NUMBER_6: 6,
      NUMBER_7: 7,
      NUMBER_8: 8,
      NUMBER_16: 16,
      NUMBER_24: 24,
      NUMBER_32: 32,
      NUMBER_128: 128,
      NUMBER_256: 256,
      NUMBER_1024: 1024,
      NUMBER_2048: 2048,
      NUMBER_4096: 4096,
      NUMBER_8192: 8192,
      NUMBER_16384: 16384,
      NUMBER_65536: 65536,
      NUMBER_131072: 131072,
      NUMBER_196608: 196608,
      NUMBER_262144: 262144,
      NUMBER_264192: 264192,
      NUMBER_1048576: 1048576,
      NUMBER_12582912: 12582912
    };
    /***/
  },

  /***/
  "./src/app/backend/clients/variables.ts":
  /*!**********************************************!*\
    !*** ./src/app/backend/clients/variables.ts ***!
    \**********************************************/

  /*! exports provided: BASE_PATH, COLLECTION_FORMATS */

  /***/
  function srcAppBackendClientsVariablesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BASE_PATH", function () {
      return BASE_PATH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function () {
      return COLLECTION_FORMATS;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('basePath');
    var COLLECTION_FORMATS = {
      csv: ',',
      tsv: '   ',
      ssv: ' ',
      pipes: '|'
    };
    /***/
  },

  /***/
  "./src/app/backend/models/httpConfigInterceptor.ts":
  /*!*********************************************************!*\
    !*** ./src/app/backend/models/httpConfigInterceptor.ts ***!
    \*********************************************************/

  /*! exports provided: HttpConfigInterceptor */

  /***/
  function srcAppBackendModelsHttpConfigInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpConfigInterceptor", function () {
      return HttpConfigInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _clients_api_accounts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../clients/api/accounts.service */
    "./src/app/backend/clients/api/accounts.service.ts");

    var TOKEN_KEY = 'ACCESS_TOKEN';

    var HttpConfigInterceptor = /*#__PURE__*/function () {
      function HttpConfigInterceptor(alertController, accountService) {
        _classCallCheck(this, HttpConfigInterceptor);

        this.alertController = alertController;
        this.accountService = accountService;
      }

      _createClass(HttpConfigInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.accountService.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (token) {
            if (token !== '') {
              request = request.clone({
                headers: request.headers.set('Authorization', 'Bearer ' + token)
              });
            } // if (!request.headers.has('Content-Type')) {
            //     request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
            // }


            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) {
              if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {// do nothing for now
              }

              return event;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
              var status = error.status;
              var reason = error; // this.presentAlert(status, reason);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }));
          }));
        }
      }, {
        key: "presentAlert",
        value: function () {
          var _presentAlert = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(status, reason) {
            var alert;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.alertController.create({
                      header: status + ' Error',
                      subHeader: 'Subtitle',
                      message: reason,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context9.sent;
                    _context9.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));

          function presentAlert(_x6, _x7) {
            return _presentAlert.apply(this, arguments);
          }

          return presentAlert;
        }()
      }]);

      return HttpConfigInterceptor;
    }();

    HttpConfigInterceptor.ɵfac = function HttpConfigInterceptor_Factory(t) {
      return new (t || HttpConfigInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_clients_api_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"]));
    };

    HttpConfigInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HttpConfigInterceptor,
      factory: HttpConfigInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpConfigInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _clients_api_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/backend/services/AuthGuard.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/backend/services/AuthGuard.service.ts ***!
    \*******************************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppBackendServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.esm.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, zone) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.zone = zone;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route) {
          var _this12 = this;

          return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].auth().onAuthStateChanged(function (user) {
              if (user) {
                // User is signed in.
                resolve(true);
              } else {
                // No user is signed in.
                resolve(false);

                _this12.zone.run(function () {
                  _this12.router.navigate(['sign-in']);
                });
              }
            });
          });
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/card-flip/card-flip.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/card-flip/card-flip.component.ts ***!
    \*************************************************************/

  /*! exports provided: CardFlipComponent */

  /***/
  function srcAppComponentsCardFlipCardFlipComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardFlipComponent", function () {
      return CardFlipComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = [[["", 8, "card-flip-front"]], [["flip-card"]], [["", 8, "card-flip-back"]]];
    var _c1 = [".card-flip-front", "flip-card", ".card-flip-back"];

    var CardFlipComponent = /*#__PURE__*/function () {
      function CardFlipComponent() {
        _classCallCheck(this, CardFlipComponent);

        this.flipped = false;
      }

      _createClass(CardFlipComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "flip",
        value: function flip() {
          this.flipped = !this.flipped;
        }
      }]);

      return CardFlipComponent;
    }();

    CardFlipComponent.ɵfac = function CardFlipComponent_Factory(t) {
      return new (t || CardFlipComponent)();
    };

    CardFlipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardFlipComponent,
      selectors: [["card-flip"]],
      ngContentSelectors: _c1,
      decls: 7,
      vars: 2,
      consts: [[1, "flip-container"], [1, "flipper"], [1, "front"], [1, "back"]],
      template: function CardFlipComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("flipped", ctx.flipped);
        }
      },
      styles: [".card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: normal;\n  padding-bottom: 5px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: none;\n  background-color: inherit;\n  font-size: 16px;\n  display: inline-block;\n}\n\n.comment[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  --padding-bottom: 0px;\n}\n\nion-card-content[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n  padding: 5px;\n  padding-bottom: 10px !important;\n}\n\n.three-col-grid[_ngcontent-%COMP%] {\n  --ion-grid-columns: 3;\n}\n\n.rcorners[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  background-position: left top;\n  background-repeat: repeat;\n}\n\n.flip-container[_ngcontent-%COMP%] {\n  perspective: 1000px;\n}\n\n\n\n.flip-container.flipped[_ngcontent-%COMP%]   .flipper[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n\n\n\n.flipper[_ngcontent-%COMP%] {\n  transition: 0.6s;\n  transform-style: preserve-3d;\n  position: relative;\n}\n\n\n\n.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%] {\n  backface-visibility: hidden;\n}\n\n\n\n.front[_ngcontent-%COMP%] {\n  z-index: 2;\n  \n  transform: rotateY(0deg);\n}\n\n\n\n.back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CcmVuZGFuR2liZXJzb24vRG9jdW1lbnRzL0Rldi9WaXNpdC9WaXNpdC4vc3JjL2FwcC9jb21wb25lbnRzL2NhcmQtZmxpcC9jYXJkLWZsaXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC1mbGlwL2NhcmQtZmxpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUEsK0JBQUE7O0FBQ0E7RUFDRSwwQkFBQTtBQ0NGOztBREdBLHlCQUFBOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtFQUVBLGtCQUFBO0FDREY7O0FESUEsa0NBQUE7O0FBQ0E7O0VBRUUsMkJBQUE7QUNERjs7QURJQSxrQ0FBQTs7QUFDQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FDREY7O0FESUEsZ0NBQUE7O0FBQ0E7RUFDRSwwQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJkLWZsaXAvY2FyZC1mbGlwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY29tbWVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cblxuLnRocmVlLWNvbC1ncmlkIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiAzO1xufVxuXG4ucmNvcm5lcnMge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbn1cblxuLmZsaXAtY29udGFpbmVyIHtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbn1cblxuLyogZmxpcCB0aGUgcGFuZSB3aGVuIGhvdmVyZWQgKi9cbi5mbGlwLWNvbnRhaW5lci5mbGlwcGVkIC5mbGlwcGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cblxuLyogZmxpcCBzcGVlZCBnb2VzIGhlcmUgKi9cbi5mbGlwcGVyIHtcbiAgdHJhbnNpdGlvbjogMC42cztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIGhpZGUgYmFjayBvZiBwYW5lIGR1cmluZyBzd2FwICovXG4uZnJvbnQsXG4uYmFjayB7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLyogZnJvbnQgcGFuZSwgcGxhY2VkIGFib3ZlIGJhY2sgKi9cbi5mcm9udCB7XG4gIHotaW5kZXg6IDI7XG4gIC8qIGZvciBmaXJlZm94IDMxICovXG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbn1cblxuLyogYmFjaywgaW5pdGlhbGx5IGhpZGRlbiBwYW5lICovXG4uYmFjayB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufSIsIi5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNvbW1lbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50aHJlZS1jb2wtZ3JpZCB7XG4gIC0taW9uLWdyaWQtY29sdW1uczogMztcbn1cblxuLnJjb3JuZXJzIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG5cbi5mbGlwLWNvbnRhaW5lciB7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG59XG5cbi8qIGZsaXAgdGhlIHBhbmUgd2hlbiBob3ZlcmVkICovXG4uZmxpcC1jb250YWluZXIuZmxpcHBlZCAuZmxpcHBlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG4vKiBmbGlwIHNwZWVkIGdvZXMgaGVyZSAqL1xuLmZsaXBwZXIge1xuICB0cmFuc2l0aW9uOiAwLjZzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIGhpZGUgYmFjayBvZiBwYW5lIGR1cmluZyBzd2FwICovXG4uZnJvbnQsXG4uYmFjayB7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLyogZnJvbnQgcGFuZSwgcGxhY2VkIGFib3ZlIGJhY2sgKi9cbi5mcm9udCB7XG4gIHotaW5kZXg6IDI7XG4gIC8qIGZvciBmaXJlZm94IDMxICovXG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbn1cblxuLyogYmFjaywgaW5pdGlhbGx5IGhpZGRlbiBwYW5lICovXG4uYmFjayB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardFlipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'card-flip',
          templateUrl: './card-flip.component.html',
          styleUrls: ['./card-flip.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/post/post.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/post/post.component.ts ***!
    \***************************************************/

  /*! exports provided: PostComponent */

  /***/
  function srcAppComponentsPostPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostComponent", function () {
      return PostComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_backend_clients__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/backend/clients */
    "./src/app/backend/clients/index.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../pipes/date-ago.pipe */
    "./src/app/pipes/date-ago.pipe.ts");

    function PostComponent_ion_card_1_ion_row_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r1.postContentLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", post_r1.name);
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "post-image-container": a0,
        "post-container": a1
      };
    };

    function PostComponent_ion_card_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-grid", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-col", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-avatar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_ion_card_1_Template_img_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var post_r1 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.openProfile(post_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-card-title", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-card-subtitle", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-col", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-buttons");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-grid");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-row", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PostComponent_ion_card_1_ion_row_23_Template, 4, 2, "ion-row", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-buttons");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ion-button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_ion_card_1_Template_ion_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var post_r1 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.likePost(post_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ion-col", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ion-buttons");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ion-button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_ion_card_1_Template_ion_button_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var post_r1 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.viewComments(post_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ion-col", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ion-note");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "dateAgo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ion-buttons");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ion-button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_ion_card_1_Template_ion_button_click_40_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var post_r1 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.viewComments(post_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " View all comments ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c0, post_r1.postContentLink, post_r1.postContentLink === undefined));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r1.fkUser.avi, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", post_r1.fkUser.firstname, " ", post_r1.fkUser.lastname, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.location.locationName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r1.postCaption, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r1.postContentLink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r1.likedByCurrentUser == true ? ctx_r0.likedIcon : ctx_r0.likeIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r1.likeCount || 0, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r1.commentCount || 0, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 11, post_r1.postTime));
      }
    }

    var PostComponent = /*#__PURE__*/function () {
      function PostComponent(router, zone, postSvc) {
        _classCallCheck(this, PostComponent);

        this.router = router;
        this.zone = zone;
        this.postSvc = postSvc;
        this.posts = [];
        this.location = 'Charleston, SC'; // flipped = false;

        this.likeIcon = '../../assets/UI/heart.svg';
        this.likedIcon = '../../assets/UI/liked-icon.svg'; // this.route.queryParams.subscribe(params => {
        //   if (this.router.getCurrentNavigation().extras.state) {
        //     this.displayNewUser = true;
        //     this.username = this.router.getCurrentNavigation().extras.state.newUser;
        //   }
        // });
      }

      _createClass(PostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "likePost",
        value: function likePost(post) {
          if (!post.likedByCurrentUser) {
            this.postSvc.postsLikePostIdPost(post.postId.toString()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe();
            post.likeCount++;
            post.likedByCurrentUser = true;
          }
        }
      }, {
        key: "viewComments",
        value: function viewComments(post) {
          var _this13 = this;

          var navigationExtras = {
            replaceUrl: false,
            state: {
              postId: post.postId
            }
          };
          this.zone.run(function () {
            _this13.router.navigateByUrl('/comments', navigationExtras);
          });
        }
      }, {
        key: "openProfile",
        value: function openProfile(post) {
          var _this14 = this;

          var navigationExtras = {
            replaceUrl: false,
            state: {
              userId: post.fkUserId
            }
          };
          this.zone.run(function () {
            _this14.router.navigateByUrl('/user-profile', navigationExtras);
          });
        }
      }]);

      return PostComponent;
    }();

    PostComponent.ɵfac = function PostComponent_Factory(t) {
      return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backend_clients__WEBPACK_IMPORTED_MODULE_3__["PostService"]));
    };

    PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostComponent,
      selectors: [["post"]],
      inputs: {
        posts: "posts"
      },
      decls: 2,
      vars: 1,
      consts: [["approxItemHeight", "500", 3, "items"], [3, "ngClass", 4, "virtualItem"], [3, "ngClass"], [1, "card-flip-front"], [1, "three-col-grid"], ["size", ".6"], [3, "src", "click"], [1, "card-title"], ["color", "medium"], ["size", ".4"], [1, "ion-justify-content-center"], ["src", "../../assets/UI/optionsDots.svg"], [1, "ion-align-items-baseline"], [4, "ngIf"], [1, "ion-justify-content-center", 3, "click"], [3, "src"], ["size", "4"], ["src", "../../assets/UI/comments.svg"], [1, "align-self-center", "text-center"], [1, "btn", 3, "click"], ["height", "300", 1, "rcorners", 3, "src", "alt"]],
      template: function PostComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-virtual-scroll", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostComponent_ion_card_1_Template, 42, 16, "ion-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.posts);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonVirtualScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["VirtualItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardSubtitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonNote"]],
      pipes: [_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_6__["DateAgoPipe"]],
      styles: [".card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: normal;\n  padding-bottom: 5px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: none;\n  background-color: inherit;\n  font-size: 16px;\n  display: inline-block;\n}\n\n.circle-pic[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n}\n\n.comments-grid[_ngcontent-%COMP%] {\n  --ion-grid-columns: 3;\n}\n\n.user-pic[_ngcontent-%COMP%]   .rcorners[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n\n.comment[_ngcontent-%COMP%] {\n  margin-bottom: 5px !important;\n  margin-top: 4px !important;\n}\n\n.post-image-container[_ngcontent-%COMP%] {\n  height: 100% !important;\n}\n\n.post-container[_ngcontent-%COMP%] {\n  height: 5.5% !important;\n}\n\nion-card-content[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n  padding: 5px;\n  padding-bottom: 10px !important;\n}\n\nion-card[_ngcontent-%COMP%] {\n  max-height: 580px;\n}\n\n.three-col-grid[_ngcontent-%COMP%] {\n  --ion-grid-columns: 3;\n}\n\n.rcorners[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  background-position: left top;\n  background-repeat: repeat;\n}\n\n.flip-container[_ngcontent-%COMP%] {\n  perspective: 1000px;\n}\n\n\n\n.flip-container.flipped[_ngcontent-%COMP%]   .flipper[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n\n\n\n.flipper[_ngcontent-%COMP%] {\n  transition: 0.6s;\n  transform-style: preserve-3d;\n  position: relative;\n}\n\n\n\n.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%] {\n  backface-visibility: hidden;\n}\n\n\n\n.front[_ngcontent-%COMP%] {\n  z-index: 2;\n  \n  transform: rotateY(0deg);\n}\n\n\n\n.back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CcmVuZGFuR2liZXJzb24vRG9jdW1lbnRzL0Rldi9WaXNpdC9WaXNpdC4vc3JjL2FwcC9jb21wb25lbnRzL3Bvc3QvcG9zdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb3N0L3Bvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDZCQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBLCtCQUFBOztBQUNBO0VBQ0UsMEJBQUE7QUNDRjs7QURHQSx5QkFBQTs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7RUFFQSxrQkFBQTtBQ0RGOztBRElBLGtDQUFBOztBQUNBOztFQUVFLDJCQUFBO0FDREY7O0FESUEsa0NBQUE7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQ0RGOztBRElBLGdDQUFBOztBQUNBO0VBQ0UsMEJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY2lyY2xlLXBpYyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jb21tZW50cy1ncmlkIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiAzO1xufVxuXG4udXNlci1waWMgLnJjb3JuZXJzIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmNvbW1lbnQge1xuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wb3N0LWltYWdlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ucG9zdC1jb250YWluZXIge1xuICBoZWlnaHQ6IDUuNSUgIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXgtaGVpZ2h0OiA1ODBweDtcbn1cblxuLnRocmVlLWNvbC1ncmlkIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiAzO1xufVxuXG4ucmNvcm5lcnMge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbn1cblxuLmZsaXAtY29udGFpbmVyIHtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbn1cblxuLyogZmxpcCB0aGUgcGFuZSB3aGVuIGhvdmVyZWQgKi9cbi5mbGlwLWNvbnRhaW5lci5mbGlwcGVkIC5mbGlwcGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cblxuLyogZmxpcCBzcGVlZCBnb2VzIGhlcmUgKi9cbi5mbGlwcGVyIHtcbiAgdHJhbnNpdGlvbjogMC42cztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIGhpZGUgYmFjayBvZiBwYW5lIGR1cmluZyBzd2FwICovXG4uZnJvbnQsXG4uYmFjayB7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLyogZnJvbnQgcGFuZSwgcGxhY2VkIGFib3ZlIGJhY2sgKi9cbi5mcm9udCB7XG4gIHotaW5kZXg6IDI7XG4gIC8qIGZvciBmaXJlZm94IDMxICovXG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbn1cblxuLyogYmFjaywgaW5pdGlhbGx5IGhpZGRlbiBwYW5lICovXG4uYmFjayB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufSIsIi5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNpcmNsZS1waWMge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY29tbWVudHMtZ3JpZCB7XG4gIC0taW9uLWdyaWQtY29sdW1uczogMztcbn1cblxuLnVzZXItcGljIC5yY29ybmVycyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5jb21tZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDRweCAhaW1wb3J0YW50O1xufVxuXG4ucG9zdC1pbWFnZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLnBvc3QtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA1LjUlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWF4LWhlaWdodDogNTgwcHg7XG59XG5cbi50aHJlZS1jb2wtZ3JpZCB7XG4gIC0taW9uLWdyaWQtY29sdW1uczogMztcbn1cblxuLnJjb3JuZXJzIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG5cbi5mbGlwLWNvbnRhaW5lciB7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG59XG5cbi8qIGZsaXAgdGhlIHBhbmUgd2hlbiBob3ZlcmVkICovXG4uZmxpcC1jb250YWluZXIuZmxpcHBlZCAuZmxpcHBlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG4vKiBmbGlwIHNwZWVkIGdvZXMgaGVyZSAqL1xuLmZsaXBwZXIge1xuICB0cmFuc2l0aW9uOiAwLjZzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIGhpZGUgYmFjayBvZiBwYW5lIGR1cmluZyBzd2FwICovXG4uZnJvbnQsXG4uYmFjayB7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLyogZnJvbnQgcGFuZSwgcGxhY2VkIGFib3ZlIGJhY2sgKi9cbi5mcm9udCB7XG4gIHotaW5kZXg6IDI7XG4gIC8qIGZvciBmaXJlZm94IDMxICovXG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbn1cblxuLyogYmFjaywgaW5pdGlhbGx5IGhpZGRlbiBwYW5lICovXG4uYmFjayB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'post',
          templateUrl: './post.component.html',
          styleUrls: ['./post.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: src_app_backend_clients__WEBPACK_IMPORTED_MODULE_3__["PostService"]
        }];
      }, {
        posts: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/objects/enums/map-selection-mode.ts":
  /*!*****************************************************!*\
    !*** ./src/app/objects/enums/map-selection-mode.ts ***!
    \*****************************************************/

  /*! exports provided: MapSelectionMode */

  /***/
  function srcAppObjectsEnumsMapSelectionModeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapSelectionMode", function () {
      return MapSelectionMode;
    });

    var MapSelectionMode;

    (function (MapSelectionMode) {
      MapSelectionMode[MapSelectionMode["MULTI_VISIT"] = 0] = "MULTI_VISIT";
      MapSelectionMode[MapSelectionMode["MULTI_TO_VISIT"] = 1] = "MULTI_TO_VISIT";
      MapSelectionMode[MapSelectionMode["VISITED"] = 2] = "VISITED";
      MapSelectionMode[MapSelectionMode["TO_VISIT"] = 3] = "TO_VISIT";
      MapSelectionMode[MapSelectionMode["FILTER"] = 4] = "FILTER";
      MapSelectionMode[MapSelectionMode["NONE"] = 5] = "NONE";
    })(MapSelectionMode || (MapSelectionMode = {}));
    /***/

  },

  /***/
  "./src/app/objects/location-json/json/countries.json":
  /*!***********************************************************!*\
    !*** ./src/app/objects/location-json/json/countries.json ***!
    \***********************************************************/

  /*! exports provided: Countries, default */

  /***/
  function srcAppObjectsLocationJsonJsonCountriesJson(module) {
    module.exports = JSON.parse("{\"Countries\":[{\"id\":\"TV\",\"name\":\"Tuvalu\"},{\"id\":\"BV\",\"name\":\"Bouvet Island\"},{\"id\":\"GI\",\"name\":\"Gibraltar\"},{\"id\":\"GO\",\"name\":\"Glorioso Islands\"},{\"id\":\"JU\",\"name\":\"Juan De Nova Island\"},{\"id\":\"UM-DQ\",\"name\":\"Jarvis Island\"},{\"id\":\"UM-FQ\",\"name\":\"Baker Island\"},{\"id\":\"UM-HQ\",\"name\":\"Howland Island\"},{\"id\":\"UM-JQ\",\"name\":\"Johnston Atoll\"},{\"id\":\"UM-MQ\",\"name\":\"Midway Islands\"},{\"id\":\"UM-WQ\",\"name\":\"Wake Island\"},{\"id\":\"BQ\",\"name\":\"Bonair, Saint Eustachius and Saba\"},{\"id\":\"NL\",\"name\":\"Netherlands\"},{\"id\":\"ZW\",\"name\":\"Zimbabwe\"},{\"id\":\"ZM\",\"name\":\"Zambia\"},{\"id\":\"ZA\",\"name\":\"South Africa\"},{\"id\":\"YE\",\"name\":\"Yemen\"},{\"id\":\"WS\",\"name\":\"Samoa\"},{\"id\":\"WF\",\"name\":\"Wallis and Futuna\"},{\"id\":\"PS\",\"name\":\"Palestinian Territories\"},{\"id\":\"VU\",\"name\":\"Vanuatu\"},{\"id\":\"VN\",\"name\":\"Vietnam\"},{\"id\":\"VI\",\"name\":\"US Virgin Islands\"},{\"id\":\"VG\",\"name\":\"British Virgin Islands\"},{\"id\":\"VE\",\"name\":\"Venezuela\"},{\"id\":\"VC\",\"name\":\"Saint Vincent and the Grenadines\"},{\"id\":\"VA\",\"name\":\"Vatican City\"},{\"id\":\"UZ\",\"name\":\"Uzbekistan\"},{\"id\":\"US\",\"name\":\"United States\"},{\"id\":\"UY\",\"name\":\"Uruguay\"},{\"id\":\"UA\",\"name\":\"Ukraine\"},{\"id\":\"UG\",\"name\":\"Uganda\"},{\"id\":\"TZ\",\"name\":\"Tanzania\"},{\"id\":\"TW\",\"name\":\"Taiwan\"},{\"id\":\"TR\",\"name\":\"Turkey\"},{\"id\":\"TN\",\"name\":\"Tunisia\"},{\"id\":\"TT\",\"name\":\"Trinidad and Tobago\"},{\"id\":\"TO\",\"name\":\"Tonga\"},{\"id\":\"TL\",\"name\":\"Timor-Leste\"},{\"id\":\"TM\",\"name\":\"Turkmenistan\"},{\"id\":\"TK\",\"name\":\"Tokelau\"},{\"id\":\"TJ\",\"name\":\"Tajikistan\"},{\"id\":\"TH\",\"name\":\"Thailand\"},{\"id\":\"TG\",\"name\":\"Togo\"},{\"id\":\"TD\",\"name\":\"Chad\"},{\"id\":\"TC\",\"name\":\"Turks and Caicos Islands\"},{\"id\":\"SY\",\"name\":\"Syria\"},{\"id\":\"SC\",\"name\":\"Seychelles\"},{\"id\":\"SX\",\"name\":\"Sint Maarten\"},{\"id\":\"SZ\",\"name\":\"eSwatini\"},{\"id\":\"SE\",\"name\":\"Sweden\"},{\"id\":\"SI\",\"name\":\"Slovenia\"},{\"id\":\"SK\",\"name\":\"Slovakia\"},{\"id\":\"SR\",\"name\":\"Suriname\"},{\"id\":\"ST\",\"name\":\"Sao Tome and Principe\"},{\"id\":\"RS\",\"name\":\"Serbia\"},{\"id\":\"PM\",\"name\":\"Saint Pierre and Miquelon\"},{\"id\":\"SO\",\"name\":\"Somalia\"},{\"id\":\"SM\",\"name\":\"San Marino\"},{\"id\":\"SV\",\"name\":\"El Salvador\"},{\"id\":\"SL\",\"name\":\"Sierra Leone\"},{\"id\":\"SB\",\"name\":\"Solomon Islands\"},{\"id\":\"SH\",\"name\":\"Saint Helena\"},{\"id\":\"GS\",\"name\":\"South Georgia and South Sandwich Islands\"},{\"id\":\"SG\",\"name\":\"Singapore\"},{\"id\":\"SN\",\"name\":\"Senegal\"},{\"id\":\"SS\",\"name\":\"South Sudan\"},{\"id\":\"SD\",\"name\":\"Sudan\"},{\"id\":\"SA\",\"name\":\"Saudi Arabia\"},{\"id\":\"EH\",\"name\":\"Western Sahara\"},{\"id\":\"RW\",\"name\":\"Rwanda\"},{\"id\":\"RU\",\"name\":\"Russia\"},{\"id\":\"RO\",\"name\":\"Romania\"},{\"id\":\"RE\",\"name\":\"Reunion\"},{\"id\":\"QA\",\"name\":\"Qatar\"},{\"id\":\"PF\",\"name\":\"French Polynesia\"},{\"id\":\"PY\",\"name\":\"Paraguay\"},{\"id\":\"PT\",\"name\":\"Portugal\"},{\"id\":\"KP\",\"name\":\"North Korea\"},{\"id\":\"PR\",\"name\":\"Puerto Rico\"},{\"id\":\"PL\",\"name\":\"Poland\"},{\"id\":\"PG\",\"name\":\"Papua New Guinea\"},{\"id\":\"PW\",\"name\":\"Palau\"},{\"id\":\"PH\",\"name\":\"Philippines\"},{\"id\":\"PE\",\"name\":\"Peru\"},{\"id\":\"PN\",\"name\":\"Pitcairn Islands\"},{\"id\":\"PA\",\"name\":\"Panama\"},{\"id\":\"PK\",\"name\":\"Pakistan\"},{\"id\":\"OM\",\"name\":\"Oman\"},{\"id\":\"NZ\",\"name\":\"New Zealand\"},{\"id\":\"SJ\",\"name\":\"Svalbard and Jan Mayen\"},{\"id\":\"NR\",\"name\":\"Nauru\"},{\"id\":\"NP\",\"name\":\"Nepal\"},{\"id\":\"NO\",\"name\":\"Norway\"},{\"id\":\"NU\",\"name\":\"Niue\"},{\"id\":\"NI\",\"name\":\"Nicaragua\"},{\"id\":\"NG\",\"name\":\"Nigeria\"},{\"id\":\"NF\",\"name\":\"Norfolk Island\"},{\"id\":\"NE\",\"name\":\"Niger\"},{\"id\":\"NC\",\"name\":\"New Caledonia\"},{\"id\":\"NA\",\"name\":\"Namibia\"},{\"id\":\"YT\",\"name\":\"Mayotte\"},{\"id\":\"MY\",\"name\":\"Malaysia\"},{\"id\":\"MW\",\"name\":\"Malawi\"},{\"id\":\"MU\",\"name\":\"Mauritius\"},{\"id\":\"MQ\",\"name\":\"Martinique\"},{\"id\":\"MS\",\"name\":\"Montserrat\"},{\"id\":\"MR\",\"name\":\"Mauritania\"},{\"id\":\"MZ\",\"name\":\"Mozambique\"},{\"id\":\"MP\",\"name\":\"Northern Mariana Islands\"},{\"id\":\"MN\",\"name\":\"Mongolia\"},{\"id\":\"ME\",\"name\":\"Montenegro\"},{\"id\":\"MM\",\"name\":\"Myanmar\"},{\"id\":\"MT\",\"name\":\"Malta\"},{\"id\":\"ML\",\"name\":\"Mali\"},{\"id\":\"MK\",\"name\":\"North Macedonia\"},{\"id\":\"MH\",\"name\":\"Marshall Islands\"},{\"id\":\"MX\",\"name\":\"Mexico\"},{\"id\":\"MV\",\"name\":\"Maldives\"},{\"id\":\"MG\",\"name\":\"Madagascar\"},{\"id\":\"MD\",\"name\":\"Moldova\"},{\"id\":\"MC\",\"name\":\"Monaco\"},{\"id\":\"MA\",\"name\":\"Morocco\"},{\"id\":\"MF\",\"name\":\"Saint Martin\"},{\"id\":\"MO\",\"name\":\"Macau\"},{\"id\":\"LV\",\"name\":\"Latvia\"},{\"id\":\"LU\",\"name\":\"Luxembourg\"},{\"id\":\"LT\",\"name\":\"Lithuania\"},{\"id\":\"LS\",\"name\":\"Lesotho\"},{\"id\":\"LK\",\"name\":\"Sri Lanka\"},{\"id\":\"LI\",\"name\":\"Liechtenstein\"},{\"id\":\"LC\",\"name\":\"Saint Lucia\"},{\"id\":\"LY\",\"name\":\"Libya\"},{\"id\":\"LR\",\"name\":\"Liberia\"},{\"id\":\"LB\",\"name\":\"Lebanon\"},{\"id\":\"LA\",\"name\":\"Lao People's Democratic Republic\"},{\"id\":\"KW\",\"name\":\"Kuwait\"},{\"id\":\"XK\",\"name\":\"Kosovo\"},{\"id\":\"KR\",\"name\":\"South Korea\"},{\"id\":\"KN\",\"name\":\"Saint Kitts and Nevis\"},{\"id\":\"KI\",\"name\":\"Kiribati\"},{\"id\":\"KH\",\"name\":\"Cambodia\"},{\"id\":\"KG\",\"name\":\"Kyrgyzstan\"},{\"id\":\"KE\",\"name\":\"Kenya\"},{\"id\":\"KZ\",\"name\":\"Kazakhstan\"},{\"id\":\"JP\",\"name\":\"Japan\"},{\"id\":\"JO\",\"name\":\"Jordan\"},{\"id\":\"JE\",\"name\":\"Jersey\"},{\"id\":\"JM\",\"name\":\"Jamaica\"},{\"id\":\"IT\",\"name\":\"Italy\"},{\"id\":\"IL\",\"name\":\"Israel\"},{\"id\":\"IS\",\"name\":\"Iceland\"},{\"id\":\"IQ\",\"name\":\"Iraq\"},{\"id\":\"IR\",\"name\":\"Iran\"},{\"id\":\"IE\",\"name\":\"Ireland\"},{\"id\":\"IO\",\"name\":\"British Indian Ocean Territory\"},{\"id\":\"IN\",\"name\":\"India\"},{\"id\":\"IM\",\"name\":\"Isle of Man\"},{\"id\":\"ID\",\"name\":\"Indonesia\"},{\"id\":\"HU\",\"name\":\"Hungary\"},{\"id\":\"HT\",\"name\":\"Haiti\"},{\"id\":\"HR\",\"name\":\"Croatia\"},{\"id\":\"HN\",\"name\":\"Honduras\"},{\"id\":\"HM\",\"name\":\"Heard Island and McDonald Islands\"},{\"id\":\"HK\",\"name\":\"Hong Kong\"},{\"id\":\"GY\",\"name\":\"Guyana\"},{\"id\":\"GU\",\"name\":\"Guam\"},{\"id\":\"GF\",\"name\":\"French Guiana\"},{\"id\":\"GT\",\"name\":\"Guatemala\"},{\"id\":\"GL\",\"name\":\"Greenland\"},{\"id\":\"GD\",\"name\":\"Grenada\"},{\"id\":\"GR\",\"name\":\"Greece\"},{\"id\":\"GQ\",\"name\":\"Equatorial Guinea\"},{\"id\":\"GW\",\"name\":\"Guinea-Bissau\"},{\"id\":\"GM\",\"name\":\"Gambia\"},{\"id\":\"GP\",\"name\":\"Guadeloupe\"},{\"id\":\"GN\",\"name\":\"Guinea\"},{\"id\":\"GH\",\"name\":\"Ghana\"},{\"id\":\"GG\",\"name\":\"Guernsey\"},{\"id\":\"GE\",\"name\":\"Georgia\"},{\"id\":\"GA\",\"name\":\"Gabon\"},{\"id\":\"FR\",\"name\":\"France\"},{\"id\":\"FM\",\"name\":\"Federated States of Micronesia\"},{\"id\":\"FO\",\"name\":\"Faroe Islands\"},{\"id\":\"FK\",\"name\":\"Falkland Islands\"},{\"id\":\"FJ\",\"name\":\"Fiji\"},{\"id\":\"FI\",\"name\":\"Finland\"},{\"id\":\"ET\",\"name\":\"Ethiopia\"},{\"id\":\"EE\",\"name\":\"Estonia\"},{\"id\":\"ES\",\"name\":\"Spain\"},{\"id\":\"ER\",\"name\":\"Eritrea\"},{\"id\":\"GB\",\"name\":\"United Kingdom\"},{\"id\":\"EG\",\"name\":\"Egypt\"},{\"id\":\"EC\",\"name\":\"Ecuador\"},{\"id\":\"DZ\",\"name\":\"Algeria\"},{\"id\":\"DO\",\"name\":\"Dominican Republic\"},{\"id\":\"DK\",\"name\":\"Denmark\"},{\"id\":\"DM\",\"name\":\"Dominica\"},{\"id\":\"DJ\",\"name\":\"Djibouti\"},{\"id\":\"DE\",\"name\":\"Germany\"},{\"id\":\"CZ\",\"name\":\"Czechia\"},{\"id\":\"CY\",\"name\":\"Cyprus\"},{\"id\":\"KY\",\"name\":\"Cayman Islands\"},{\"id\":\"CX\",\"name\":\"Christmas Island\"},{\"id\":\"CW\",\"name\":\"Curaçao\"},{\"id\":\"CU\",\"name\":\"Cuba\"},{\"id\":\"CR\",\"name\":\"Costa Rica\"},{\"id\":\"CV\",\"name\":\"Cape Verde\"},{\"id\":\"KM\",\"name\":\"Comoros\"},{\"id\":\"CO\",\"name\":\"Colombia\"},{\"id\":\"CK\",\"name\":\"Cook Islands\"},{\"id\":\"CG\",\"name\":\"Republic of Congo\"},{\"id\":\"CD\",\"name\":\"Democratic Republic of Congo\"},{\"id\":\"CM\",\"name\":\"Cameroon\"},{\"id\":\"CI\",\"name\":\"Côte d'Ivoire\"},{\"id\":\"CN\",\"name\":\"China\"},{\"id\":\"CL\",\"name\":\"Chile\"},{\"id\":\"CH\",\"name\":\"Switzerland\"},{\"id\":\"CC\",\"name\":\"Cocos (Keeling) Islands\"},{\"id\":\"CA\",\"name\":\"Canada\"},{\"id\":\"CF\",\"name\":\"Central African Republic\"},{\"id\":\"BE\",\"name\":\"Belgium\"},{\"id\":\"BW\",\"name\":\"Botswana\"},{\"id\":\"BT\",\"name\":\"Bhutan\"},{\"id\":\"BN\",\"name\":\"Brunei\"},{\"id\":\"BB\",\"name\":\"Barbados\"},{\"id\":\"BR\",\"name\":\"Brazil\"},{\"id\":\"BO\",\"name\":\"Bolivia\"},{\"id\":\"BM\",\"name\":\"Bermuda\"},{\"id\":\"BZ\",\"name\":\"Belize\"},{\"id\":\"BY\",\"name\":\"Belarus\"},{\"id\":\"BL\",\"name\":\"Saint Barthelemy\"},{\"id\":\"BS\",\"name\":\"Bahamas\"},{\"id\":\"BH\",\"name\":\"Bahrain\"},{\"id\":\"BA\",\"name\":\"Bosnia and Herzegovina\"},{\"id\":\"BG\",\"name\":\"Bulgaria\"},{\"id\":\"BD\",\"name\":\"Bangladesh\"},{\"id\":\"BF\",\"name\":\"Burkina Faso\"},{\"id\":\"BJ\",\"name\":\"Benin\"},{\"id\":\"BI\",\"name\":\"Burundi\"},{\"id\":\"AZ\",\"name\":\"Azerbaijan\"},{\"id\":\"AT\",\"name\":\"Austria\"},{\"id\":\"AU\",\"name\":\"Australia\"},{\"id\":\"TF\",\"name\":\"French Southern and Antarctic Lands\"},{\"id\":\"AQ\",\"name\":\"Antarctica\"},{\"id\":\"AS\",\"name\":\"American Samoa\"},{\"id\":\"AM\",\"name\":\"Armenia\"},{\"id\":\"AR\",\"name\":\"Argentina\"},{\"id\":\"AE\",\"name\":\"United Arab Emirates\"},{\"id\":\"AD\",\"name\":\"Andorra\"},{\"id\":\"AX\",\"name\":\"Aland Islands\"},{\"id\":\"AL\",\"name\":\"Albania\"},{\"id\":\"AI\",\"name\":\"Anguilla\"},{\"id\":\"AO\",\"name\":\"Angola\"},{\"id\":\"AF\",\"name\":\"Afghanistan\"},{\"id\":\"AG\",\"name\":\"Antigua and Barbuda\"},{\"id\":\"AW\",\"name\":\"Aruba\"}]}");
    /***/
  },

  /***/
  "./src/app/objects/location-json/json/states.json":
  /*!********************************************************!*\
    !*** ./src/app/objects/location-json/json/states.json ***!
    \********************************************************/

  /*! exports provided: States, default */

  /***/
  function srcAppObjectsLocationJsonJsonStatesJson(module) {
    module.exports = JSON.parse("{\"States\":[{\"name\":\"Alaska\",\"id\":\"US-AK\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Alabama\",\"id\":\"US-AL\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Arkansas\",\"id\":\"US-AR\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Arizona\",\"id\":\"US-AZ\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"California\",\"id\":\"US-CA\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Colorado\",\"id\":\"US-CO\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Connecticut\",\"id\":\"US-CT\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"District of Columbia\",\"id\":\"US-DC\",\"CNTRY\":\"United States of America\",\"TYPE\":\"Federal District\"},{\"name\":\"Delaware\",\"id\":\"US-DE\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Florida\",\"id\":\"US-FL\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Georgia\",\"id\":\"US-GA\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Hawaii\",\"id\":\"US-HI\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Iowa\",\"id\":\"US-IA\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Idaho\",\"id\":\"US-ID\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Illinois\",\"id\":\"US-IL\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Indiana\",\"id\":\"US-IN\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Kansas\",\"id\":\"US-KS\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Kentucky\",\"id\":\"US-KY\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Louisiana\",\"id\":\"US-LA\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Massachusetts\",\"id\":\"US-MA\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Maryland\",\"id\":\"US-MD\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Maine\",\"id\":\"US-ME\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Michigan\",\"id\":\"US-MI\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Minnesota\",\"id\":\"US-MN\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Missouri\",\"id\":\"US-MO\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Mississippi\",\"id\":\"US-MS\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Montana\",\"id\":\"US-MT\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"North Carolina\",\"id\":\"US-NC\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"North Dakota\",\"id\":\"US-ND\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Nebraska\",\"id\":\"US-NE\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"New Hampshire\",\"id\":\"US-NH\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"New Jersey\",\"id\":\"US-NJ\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"New Mexico\",\"id\":\"US-NM\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Nevada\",\"id\":\"US-NV\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"New York\",\"id\":\"US-NY\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Ohio\",\"id\":\"US-OH\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Oklahoma\",\"id\":\"US-OK\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Oregon\",\"id\":\"US-OR\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Pennsylvania\",\"id\":\"US-PA\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Rhode Island\",\"id\":\"US-RI\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"South Carolina\",\"id\":\"US-SC\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"South Dakota\",\"id\":\"US-SD\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Tennessee\",\"id\":\"US-TN\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Texas\",\"id\":\"US-TX\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Utah\",\"id\":\"US-UT\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Virginia\",\"id\":\"US-VA\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Vermont\",\"id\":\"US-VT\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Washington\",\"id\":\"US-WA\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Wisconsin\",\"id\":\"US-WI\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"West Virginia\",\"id\":\"US-WV\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"},{\"name\":\"Wyoming\",\"id\":\"US-WY\",\"CNTRY\":\"United States of America\",\"TYPE\":\"State\"}]}");
    /***/
  },

  /***/
  "./src/app/objects/location-json/location.selector.ts":
  /*!************************************************************!*\
    !*** ./src/app/objects/location-json/location.selector.ts ***!
    \************************************************************/

  /*! exports provided: LocationSelector */

  /***/
  function srcAppObjectsLocationJsonLocationSelectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationSelector", function () {
      return LocationSelector;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _json_states_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./json/states.json */
    "./src/app/objects/location-json/json/states.json");

    var _json_states_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ./json/states.json */
    "./src/app/objects/location-json/json/states.json", 1);
    /* harmony import */


    var _json_countries_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./json/countries.json */
    "./src/app/objects/location-json/json/countries.json");

    var _json_countries_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ./json/countries.json */
    "./src/app/objects/location-json/json/countries.json", 1);

    var LocationSelector = /*#__PURE__*/function () {
      function LocationSelector() {
        _classCallCheck(this, LocationSelector);
      }

      _createClass(LocationSelector, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getStates",
        value: function getStates() {
          return _json_states_json__WEBPACK_IMPORTED_MODULE_1__;
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          return _json_countries_json__WEBPACK_IMPORTED_MODULE_2__;
        }
      }, {
        key: "getAllLocations",
        value: function getAllLocations() {
          var options = [];
          this.getCountries().Countries.forEach(function (e) {
            var name = e.name;
            var id = e.id;
            options.push({
              id: id,
              name: name
            });
          });
          this.getStates().States.forEach(function (e) {
            var name = e.name;
            var id = e.id;
            options.push({
              id: id,
              name: name
            });
          });
          return options.sort(this.compare);
        }
      }, {
        key: "compare",
        value: function compare(a, b) {
          var comparison = 0;

          if (a.name > b.name) {
            comparison = 1;
          } else if (a.name < b.name) {
            comparison = -1;
          }

          return comparison;
        }
      }]);

      return LocationSelector;
    }();

    LocationSelector.ɵfac = function LocationSelector_Factory(t) {
      return new (t || LocationSelector)();
    };

    LocationSelector.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LocationSelector,
      factory: LocationSelector.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationSelector, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/objects/map.ts":
  /*!********************************!*\
    !*** ./src/app/objects/map.ts ***!
    \********************************/

  /*! exports provided: Map */

  /***/
  function srcAppObjectsMapTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Map", function () {
      return Map;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @amcharts/amcharts4/core */
    "./node_modules/@amcharts/amcharts4/core.js");
    /* harmony import */


    var _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @amcharts/amcharts4/maps */
    "./node_modules/@amcharts/amcharts4/maps.js");
    /* harmony import */


    var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @amcharts/amcharts4/themes/animated */
    "./node_modules/@amcharts/amcharts4/themes/animated.js");
    /* harmony import */


    var _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @amcharts/amcharts4-geodata/worldLow */
    "./node_modules/@amcharts/amcharts4-geodata/worldLow.js");
    /* harmony import */


    var _amcharts_amcharts4_geodata_usaLow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @amcharts/amcharts4-geodata/usaLow */
    "./node_modules/@amcharts/amcharts4-geodata/usaLow.js");
    /* harmony import */


    var _enums_map_selection_mode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./enums/map-selection-mode */
    "./src/app/objects/enums/map-selection-mode.ts"); // import am4geodata_canadaLow from '@amcharts/amcharts4-geodata/canadaLow';
    // import am4geodata_russiaLow from '@amcharts/amcharts4-geodata/russiaLow';


    var Map = /*#__PURE__*/function () {
      function Map(zone) {
        _classCallCheck(this, Map);

        this.zone = zone;
        this.selectedArea = new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapPolygon"]();
        this.polygonArr = new Array();
        this.selectedArr = new Array();
        this.seriesArr = new Array();
        this.createMap(_enums_map_selection_mode__WEBPACK_IMPORTED_MODULE_6__["MapSelectionMode"].NONE);
        this.selectionMode = _enums_map_selection_mode__WEBPACK_IMPORTED_MODULE_6__["MapSelectionMode"].NONE;
      } // static getInstance(zone: NgZone): Map {
      //   if (!Map.instance) {
      //     Map.instance = new Map(zone);
      //   }
      //   return Map.instance;
      // }


      _createClass(Map, [{
        key: "createMap",
        value: function () {
          var _createMap = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(selectionMode) {
            var _this15 = this;

            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["disposeAllCharts"]();

                    this.zone.runOutsideAngular(function () {
                      var worldSeries;
                      var usaSeries; // let canadaSeries: am4maps.MapPolygonSeries;
                      // let russiaSeries: am4maps.MapPolygonSeries;

                      var chart;

                      _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["ready"](function () {
                        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__["default"]);

                        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["options"].autoDispose = true; // Create map instance

                        chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"](undefined, _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapChart"]);
                        chart.geodata = _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_4__["default"];
                        chart.projection = new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["projections"].Miller();
                        chart.zoomControl = new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["ZoomControl"]();
                        chart.zoomControl.plusButton.hide();
                        chart.zoomControl.minusButton.hide();
                        chart.tapToActivate = true;
                        chart.seriesContainer.events.disableType('doublehit');
                        chart.chartContainer.background.events.disableType('doublehit');
                        chart.showOnInit = true; // Home button

                        var homeButton = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["Button"]();
                        homeButton.events.on('hit', function () {
                          chart.goHome();
                        });
                        homeButton.icon = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["Sprite"]();
                        homeButton.padding(7, 5, 7, 5);
                        homeButton.width = 30;
                        homeButton.icon.path = 'M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8';
                        homeButton.marginBottom = 10;
                        homeButton.parent = chart.zoomControl;
                        homeButton.insertAfter(chart.zoomControl.minusButton); // Series for World map

                        worldSeries = chart.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapPolygonSeries"]());
                        worldSeries.exclude = ['AQ'];
                        worldSeries.useGeodata = true;

                        _this15.seriesArr.push(worldSeries);

                        _this15.polygonArr.push(worldSeries.mapPolygons.template); // Series for United States map


                        usaSeries = chart.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapPolygonSeries"]());
                        usaSeries.geodata = _amcharts_amcharts4_geodata_usaLow__WEBPACK_IMPORTED_MODULE_5__["default"];

                        _this15.seriesArr.push(usaSeries);

                        _this15.polygonArr.push(usaSeries.mapPolygons.template); // // Series for Canada map
                        // canadaSeries = chart.series.push(new am4maps.MapPolygonSeries());
                        // canadaSeries.geodata = am4geodata_canadaLow;
                        // this.seriesArr.push(canadaSeries);
                        // this.polygonArr.push(canadaSeries.mapPolygons.template);
                        // // Series for Russia map
                        // russiaSeries = chart.series.push(new am4maps.MapPolygonSeries());
                        // russiaSeries.geodata = am4geodata_russiaLow;
                        // this.seriesArr.push(russiaSeries);
                        // this.polygonArr.push(russiaSeries.mapPolygons.template);

                      });

                      _this15.setupTemplates();

                      _this15.setSelectionMode(selectionMode);

                      _this15.chart = chart;
                    });

                  case 2:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));

          function createMap(_x8) {
            return _createMap.apply(this, arguments);
          }

          return createMap;
        }()
      }, {
        key: "addMapToDiv",
        value: function addMapToDiv(selectionMode, divName) {
          this.selectionMode = selectionMode;
          this.setSelectionMode(this.selectionMode);
          this.chart.moveHtmlContainer(divName);
        }
      }, {
        key: "setupTemplates",
        value: function setupTemplates() {
          var _this16 = this;

          this.polygonArr.forEach(function (polygonTemplate) {
            polygonTemplate.tooltipText = '{name}';
            polygonTemplate.nonScalingStroke = true;
            polygonTemplate.applyOnClones = true;
            polygonTemplate.strokeOpacity = 0.5;
            var activeState = polygonTemplate.states.create('active');
            var visited = polygonTemplate.states.create('visited');
            visited.properties.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#128C7E');
            var toVisit = polygonTemplate.states.create('toVisit');
            toVisit.properties.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#F05E23');
            var defaultState = polygonTemplate.states.create('default');
            defaultState.properties.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#d9d9d9');
            polygonTemplate.events.on('hit', function (ev) {
              var data = ev.target.dataItem.dataContext;
              _this16.selectedArea = data; // this.selectedName = data.name;

              _this16.selectedId = data.id;

              if (_this16.lastSelected !== ev.target) {
                ev.target.series.chart.zoomToMapObject(ev.target);
                _this16.lastSelected = ev.target;
              }
            });
          });
        }
      }, {
        key: "setSelectionMode",
        value: function setSelectionMode(selectionMode) {
          var _this17 = this;

          this.selectionMode = selectionMode; // Allow only one location to be hightlighted at a time

          if (this.selectionMode === _enums_map_selection_mode__WEBPACK_IMPORTED_MODULE_6__["MapSelectionMode"].FILTER) {
            this.polygonArr.forEach(function (polygonTemplate) {
              polygonTemplate.events.on('doublehit', function (ev) {
                var data = ev.target.dataItem.dataContext;

                _this17.resetAllLocations();

                _this17.changeVisitStatus(data.id, 'visited');
              });
            });
          } else if (this.selectionMode !== _enums_map_selection_mode__WEBPACK_IMPORTED_MODULE_6__["MapSelectionMode"].NONE) {
            this.polygonArr.forEach(function (polygonTemplate) {
              polygonTemplate.events.off('doublehit');
              polygonTemplate.events.on('doublehit', function (ev) {
                var data = ev.target.dataItem.dataContext;

                if (_this17.selectionMode === _enums_map_selection_mode__WEBPACK_IMPORTED_MODULE_6__["MapSelectionMode"].TO_VISIT) {
                  _this17.changeVisitStatus(data.id, 'toVisit');
                } else {
                  _this17.changeVisitStatus(data.id, 'visited');
                }
              });
            });
          }
        }
      }, {
        key: "zoomToLocation",
        value: function zoomToLocation(locationId) {
          var _iterator8 = _createForOfIteratorHelper(this.seriesArr),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var series = _step8.value;
              var result = series.getPolygonById(locationId);

              if (result !== undefined) {
                this.chart.zoomToMapObject(result);
                break;
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }
      }, {
        key: "zoomHome",
        value: function zoomHome() {
          this.chart.goHome();
        }
      }, {
        key: "resetAllLocations",
        value: function resetAllLocations() {
          var _this18 = this;

          this.selectedArr.forEach(function (location) {
            var _iterator9 = _createForOfIteratorHelper(_this18.seriesArr),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var series = _step9.value;
                var result = series.getPolygonById(location.locationId);

                if (result !== undefined) {
                  result.setState('default');
                }
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          });
        }
      }, {
        key: "changeVisitStatus",
        value: function () {
          var _changeVisitStatus = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(locationId, status) {
            var _iterator10, _step10, series, result, locationInArray, index;

            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _iterator10 = _createForOfIteratorHelper(this.seriesArr);
                    _context11.prev = 1;

                    _iterator10.s();

                  case 3:
                    if ((_step10 = _iterator10.n()).done) {
                      _context11.next = 11;
                      break;
                    }

                    series = _step10.value;
                    result = series.getPolygonById(locationId);

                    if (!(result !== undefined)) {
                      _context11.next = 9;
                      break;
                    }

                    this.selectedArea = result;
                    return _context11.abrupt("break", 11);

                  case 9:
                    _context11.next = 3;
                    break;

                  case 11:
                    _context11.next = 16;
                    break;

                  case 13:
                    _context11.prev = 13;
                    _context11.t0 = _context11["catch"](1);

                    _iterator10.e(_context11.t0);

                  case 16:
                    _context11.prev = 16;

                    _iterator10.f();

                    return _context11.finish(16);

                  case 19:
                    locationInArray = this.selectedArr.find(function (d) {
                      return d.locationId === locationId;
                    });

                    if (locationInArray !== undefined) {
                      index = this.selectedArr.indexOf(locationInArray, 0);

                      if (index > -1) {
                        this.selectedArr.splice(index, 1);
                        this.selectedArea.setState('default');
                      }
                    } else {
                      if (status === 'visited') {
                        this.selectedArea.setState('visited');
                      } else if (status === 'toVisit') {
                        this.selectedArea.setState('toVisit');
                      }

                      this.selectedArr.push({
                        locationId: locationId,
                        status: status
                      });
                    }

                  case 21:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this, [[1, 13, 16, 19]]);
          }));

          function changeVisitStatus(_x9, _x10) {
            return _changeVisitStatus.apply(this, arguments);
          }

          return changeVisitStatus;
        }()
      }, {
        key: "destroyMap",
        value: function destroyMap() {
          var _this19 = this;

          this.zone.runOutsideAngular(function () {
            if (_this19.chart) {
              _this19.chart.dispose();
            }
          });
        }
      }, {
        key: "selectedId",
        get: function get() {
          return this.id;
        },
        set: function set(id) {
          this.id = id;
        }
      }, {
        key: "selectedName",
        get: function get() {
          return this.name;
        },
        set: function set(name) {
          this.name = name;
        }
      }]);

      return Map;
    }();

    Map.ɵfac = function Map_Factory(t) {
      return new (t || Map)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    Map.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Map,
      factory: Map.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Map, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/add-post-image/add-post-image-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/add-post-image/add-post-image-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: AddPostImagePageRoutingModule */

  /***/
  function srcAppPagesAddPostImageAddPostImageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPostImagePageRoutingModule", function () {
      return AddPostImagePageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _add_post_image_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./add-post-image.page */
    "./src/app/pages/add-post-image/add-post-image.page.ts");

    var routes = [{
      path: '',
      component: _add_post_image_page__WEBPACK_IMPORTED_MODULE_2__["AddPostImagePage"]
    }];

    var AddPostImagePageRoutingModule = function AddPostImagePageRoutingModule() {
      _classCallCheck(this, AddPostImagePageRoutingModule);
    };

    AddPostImagePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AddPostImagePageRoutingModule
    });
    AddPostImagePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AddPostImagePageRoutingModule_Factory(t) {
        return new (t || AddPostImagePageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddPostImagePageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPostImagePageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/add-post-image/add-post-image.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/add-post-image/add-post-image.module.ts ***!
    \***************************************************************/

  /*! exports provided: AddPostImagePageModule */

  /***/
  function srcAppPagesAddPostImageAddPostImageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPostImagePageModule", function () {
      return AddPostImagePageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _add_post_image_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add-post-image-routing.module */
    "./src/app/pages/add-post-image/add-post-image-routing.module.ts");
    /* harmony import */


    var _add_post_image_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-post-image.page */
    "./src/app/pages/add-post-image/add-post-image.page.ts");
    /* harmony import */


    var ionic_selectable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ionic-selectable */
    "./node_modules/ionic-selectable/__ivy_ngcc__/esm2015/ionic-selectable.min.js");

    var AddPostImagePageModule = function AddPostImagePageModule() {
      _classCallCheck(this, AddPostImagePageModule);
    };

    AddPostImagePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AddPostImagePageModule
    });
    AddPostImagePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AddPostImagePageModule_Factory(t) {
        return new (t || AddPostImagePageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _add_post_image_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddPostImagePageRoutingModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_6__["IonicSelectableModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddPostImagePageModule, {
        declarations: [_add_post_image_page__WEBPACK_IMPORTED_MODULE_5__["AddPostImagePage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _add_post_image_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddPostImagePageRoutingModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_6__["IonicSelectableModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPostImagePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _add_post_image_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddPostImagePageRoutingModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_6__["IonicSelectableModule"]],
          declarations: [_add_post_image_page__WEBPACK_IMPORTED_MODULE_5__["AddPostImagePage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/add-post-image/add-post-image.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/add-post-image/add-post-image.page.ts ***!
    \*************************************************************/

  /*! exports provided: AddPostImagePage */

  /***/
  function srcAppPagesAddPostImageAddPostImagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPostImagePage", function () {
      return AddPostImagePage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @capacitor/camera */
    "./node_modules/@capacitor/camera/dist/esm/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/backend/clients */
    "./src/app/backend/clients/index.ts");
    /* harmony import */


    var src_app_objects_location_json_location_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/objects/location-json/location.selector */
    "./src/app/objects/location-json/location.selector.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic-selectable */
    "./node_modules/ionic-selectable/__ivy_ngcc__/esm2015/ionic-selectable.min.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddPostImagePage_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Unexpected error when creating post ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AddPostImagePage = /*#__PURE__*/function () {
      function AddPostImagePage(loadingController, modalCtrl, selector, postService) {
        _classCallCheck(this, AddPostImagePage);

        this.loadingController = loadingController;
        this.modalCtrl = modalCtrl;
        this.selector = selector;
        this.postService = postService;
        this.selectedLocation = undefined;
        this.postText = undefined;
        this.locationOptions = [];
        this.userImage = '../../../assets/UI/clickToUpload.jpg';
      }

      _createClass(AddPostImagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.locationOptions = this.selector.getAllLocations();
        }
      }, {
        key: "filterLocations",
        value: function filterLocations(text) {
          return this.locationOptions.filter(function (option) {
            return option.name.toLowerCase().indexOf(text) !== -1;
          });
        }
      }, {
        key: "searchLocations",
        value: function searchLocations(event) {
          var text = event.text.trim().toLowerCase();
          event.component.startSearch();

          if (!text) {
            event.component.items = [];
            event.component.endSearch();
            return;
          }

          event.component.items = this.filterLocations(text);
          event.component.endSearch();
        }
      }, {
        key: "post",
        value: function () {
          var _post = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var _this20 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.loadingController.create({
                      duration: 2000
                    });

                  case 2:
                    loading = _context12.sent;
                    _context12.next = 5;
                    return loading.present();

                  case 5:
                    this.postService.postsNewPostForm(this.postText, 'image', this.selectedLocation.id, this.blob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (res) {
                      loading.dismiss();

                      _this20.dismiss();
                    }, function (err) {
                      _this20.error = true;
                      loading.dismiss();
                    });

                  case 6:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));

          function post() {
            return _post.apply(this, arguments);
          }

          return post;
        }()
      }, {
        key: "dismiss",
        value: function dismiss() {
          // using the injected ModalController this page
          // can "dismiss" itself and optionally pass back data
          this.modalCtrl.dismiss({
            dismissed: true
          });
        }
      }, {
        key: "b64toBlob",
        value: function b64toBlob(dataURI) {
          var byteString = atob(dataURI.split(',')[1]);
          var ab = new ArrayBuffer(byteString.length);
          var ia = new Uint8Array(ab);

          for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
          }

          this.blob = new Blob([ab], {
            type: 'image/jpeg'
          });
        }
      }, {
        key: "getUserImage",
        value: function () {
          var _getUserImage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var imageUrl;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["Camera"].getPhoto({
                      quality: 90,
                      allowEditing: true,
                      resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"].DataUrl
                    });

                  case 2:
                    this.image = _context13.sent;
                    // image.webPath will contain a path that can be set as an image src.
                    // You can access the original file using image.path, which can be
                    // passed to the Filesystem API to read the raw data of the image,
                    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
                    imageUrl = this.image.dataUrl; // Can be set to the src of an image now

                    this.userImage = imageUrl;
                    this.b64toBlob(this.image.dataUrl);

                  case 6:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));

          function getUserImage() {
            return _getUserImage.apply(this, arguments);
          }

          return getUserImage;
        }()
      }]);

      return AddPostImagePage;
    }();

    AddPostImagePage.ɵfac = function AddPostImagePage_Factory(t) {
      return new (t || AddPostImagePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_objects_location_json_location_selector__WEBPACK_IMPORTED_MODULE_5__["LocationSelector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__["PostService"]));
    };

    AddPostImagePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddPostImagePage,
      selectors: [["app-add-post-image"]],
      decls: 28,
      vars: 7,
      consts: [["no-bounce", ""], [1, "splash"], ["height", "300", 1, "rcorners", 3, "src", "click"], [1, "roundedInput"], ["rows", "10", "placeholder", "Caption*", "maxlength", "250", "autocapitalize", "true", "required", "", 3, "ngModel", "ngModelChange"], ["itemValueField", "id", "itemTextField", "name", 3, "ngModel", "items", "canSearch", "ngModelChange"], [1, "validation-errors"], ["class", "error-message", 4, "ngIf"], [1, "button-div"], ["expand", "block", "type", "submit", 1, "submit-button", 3, "disabled", "click"], ["expand", "block", "type", "submit", 1, "submit-button", 3, "click"], [1, "error-message"], ["name", "information-circle-outline"]],
      template: function AddPostImagePage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Upload Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Everyone loves a nice travel related photo!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPostImagePage_Template_img_click_10_listener() {
            return ctx.getUserImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-textarea", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPostImagePage_Template_ion_textarea_ngModelChange_14_listener($event) {
            return ctx.postText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Location*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ionic-selectable", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPostImagePage_Template_ionic_selectable_ngModelChange_20_listener($event) {
            return ctx.selectedLocation = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AddPostImagePage_div_22_Template, 3, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPostImagePage_Template_ion_button_click_24_listener() {
            return ctx.post();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Add post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPostImagePage_Template_ion_button_click_26_listener() {
            return ctx.dismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.userImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.postText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedLocation)("items", ctx.locationOptions)("canSearch", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.postText && ctx.selectedLocation !== undefined);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"]],
      styles: ["ion-content[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  --background: none;\n}\nion-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  padding-top: 10%;\n  font-size: 40px;\n  font-weight: bold;\n  color: white;\n}\nion-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  font-size: 20px;\n  color: white;\n}\n.btn[_ngcontent-%COMP%] {\n  border: none;\n  background-color: inherit;\n  font-size: 16px;\n  display: inline-block;\n}\n.submit-button[_ngcontent-%COMP%] {\n  --background: #fff;\n  --background-activated: #fff;\n  --ripple-color: #fff;\n  --background-focused: #fff;\n  --color-focused: #fff;\n  color: #128C7E;\n  --vertical-align: middle;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n.button-div[_ngcontent-%COMP%] {\n  padding-top: 10%;\n}\n.rcorners[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  background-position: left top;\n  background-repeat: repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CcmVuZGFuR2liZXJzb24vRG9jdW1lbnRzL0Rldi9WaXNpdC9WaXNpdC4vc3JjL2FwcC9wYWdlcy9hZGQtcG9zdC1pbWFnZS9hZGQtcG9zdC1pbWFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkZC1wb3N0LWltYWdlL2FkZC1wb3N0LWltYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSjtBREVFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0FKO0FES0E7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNGRjtBREtBO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFFQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNIRjtBRE1BO0VBQ0UsZ0JBQUE7QUNIRjtBRE1BO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGQtcG9zdC1pbWFnZS9hZGQtcG9zdC1pbWFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcblxuICBoMSB7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICBoMyB7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbn1cblxuLmJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmO1xuICAtLXJpcHBsZS1jb2xvcjogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmY7XG4gIC0tY29sb3ItZm9jdXNlZDogI2ZmZjtcbiAgY29sb3I6ICMxMjhDN0U7XG5cbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbn1cblxuLmJ1dHRvbi1kaXYge1xuICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG4ucmNvcm5lcnMge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbn0iLCJpb24tY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cbmlvbi1jb250ZW50IGgxIHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgaDMge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmO1xuICAtLXJpcHBsZS1jb2xvcjogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmY7XG4gIC0tY29sb3ItZm9jdXNlZDogI2ZmZjtcbiAgY29sb3I6ICMxMjhDN0U7XG4gIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG59XG5cbi5idXR0b24tZGl2IHtcbiAgcGFkZGluZy10b3A6IDEwJTtcbn1cblxuLnJjb3JuZXJzIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPostImagePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-post-image',
          templateUrl: './add-post-image.page.html',
          styleUrls: ['./add-post-image.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: src_app_objects_location_json_location_selector__WEBPACK_IMPORTED_MODULE_5__["LocationSelector"]
        }, {
          type: src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__["PostService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/add-post/add-post-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/add-post/add-post-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: AddPostPageRoutingModule */

  /***/
  function srcAppPagesAddPostAddPostRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPostPageRoutingModule", function () {
      return AddPostPageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _add_post_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./add-post.page */
    "./src/app/pages/add-post/add-post.page.ts");

    var routes = [{
      path: '',
      component: _add_post_page__WEBPACK_IMPORTED_MODULE_2__["AddPostPage"]
    }];

    var AddPostPageRoutingModule = function AddPostPageRoutingModule() {
      _classCallCheck(this, AddPostPageRoutingModule);
    };

    AddPostPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AddPostPageRoutingModule
    });
    AddPostPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AddPostPageRoutingModule_Factory(t) {
        return new (t || AddPostPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddPostPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPostPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/add-post/add-post.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/add-post/add-post.module.ts ***!
    \***************************************************/

  /*! exports provided: AddPostPageModule */

  /***/
  function srcAppPagesAddPostAddPostModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPostPageModule", function () {
      return AddPostPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _add_post_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add-post-routing.module */
    "./src/app/pages/add-post/add-post-routing.module.ts");
    /* harmony import */


    var _add_post_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-post.page */
    "./src/app/pages/add-post/add-post.page.ts");
    /* harmony import */


    var ionic_selectable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ionic-selectable */
    "./node_modules/ionic-selectable/__ivy_ngcc__/esm2015/ionic-selectable.min.js");

    var AddPostPageModule = function AddPostPageModule() {
      _classCallCheck(this, AddPostPageModule);
    };

    AddPostPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AddPostPageModule
    });
    AddPostPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AddPostPageModule_Factory(t) {
        return new (t || AddPostPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _add_post_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddPostPageRoutingModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_6__["IonicSelectableModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddPostPageModule, {
        declarations: [_add_post_page__WEBPACK_IMPORTED_MODULE_5__["AddPostPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _add_post_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddPostPageRoutingModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_6__["IonicSelectableModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPostPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _add_post_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddPostPageRoutingModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_6__["IonicSelectableModule"]],
          declarations: [_add_post_page__WEBPACK_IMPORTED_MODULE_5__["AddPostPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/add-post/add-post.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/add-post/add-post.page.ts ***!
    \*************************************************/

  /*! exports provided: AddPostPage */

  /***/
  function srcAppPagesAddPostAddPostPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPostPage", function () {
      return AddPostPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_backend_clients__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/backend/clients */
    "./src/app/backend/clients/index.ts");
    /* harmony import */


    var src_app_objects_location_json_location_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/objects/location-json/location.selector */
    "./src/app/objects/location-json/location.selector.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ionic_selectable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ionic-selectable */
    "./node_modules/ionic-selectable/__ivy_ngcc__/esm2015/ionic-selectable.min.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddPostPage_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Unexpected error when creating post ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AddPostPage = /*#__PURE__*/function () {
      function AddPostPage(loadingController, modalCtrl, selector, postService) {
        _classCallCheck(this, AddPostPage);

        this.loadingController = loadingController;
        this.modalCtrl = modalCtrl;
        this.selector = selector;
        this.postService = postService;
        this.selectedLocation = undefined;
        this.postText = undefined;
        this.locationOptions = [];
      }

      _createClass(AddPostPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.locationOptions = this.selector.getAllLocations();
        }
      }, {
        key: "filterLocations",
        value: function filterLocations(text) {
          return this.locationOptions.filter(function (option) {
            return option.name.toLowerCase().indexOf(text) !== -1;
          });
        }
      }, {
        key: "searchLocations",
        value: function searchLocations(event) {
          var text = event.text.trim().toLowerCase();
          event.component.startSearch();

          if (!text) {
            event.component.items = [];
            event.component.endSearch();
            return;
          }

          event.component.items = this.filterLocations(text);
          event.component.endSearch();
        }
      }, {
        key: "post",
        value: function () {
          var _post2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var _this21 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.loadingController.create({
                      duration: 2000
                    });

                  case 2:
                    loading = _context14.sent;
                    _context14.next = 5;
                    return loading.present();

                  case 5:
                    this.postService.postsNewPostForm(this.postText, 'text', this.selectedLocation.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (res) {
                      loading.dismiss();

                      _this21.dismiss();
                    }, function (err) {
                      _this21.error = true;
                      loading.dismiss();
                    });

                  case 6:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));

          function post() {
            return _post2.apply(this, arguments);
          }

          return post;
        }()
      }, {
        key: "dismiss",
        value: function dismiss() {
          // using the injected ModalController this page
          // can "dismiss" itself and optionally pass back data
          this.modalCtrl.dismiss({
            dismissed: true
          });
        }
      }]);

      return AddPostPage;
    }();

    AddPostPage.ɵfac = function AddPostPage_Factory(t) {
      return new (t || AddPostPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_objects_location_json_location_selector__WEBPACK_IMPORTED_MODULE_4__["LocationSelector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backend_clients__WEBPACK_IMPORTED_MODULE_3__["PostService"]));
    };

    AddPostPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddPostPage,
      selectors: [["app-add-post"]],
      decls: 24,
      vars: 6,
      consts: [["no-bounce", ""], [1, "splash"], [1, "roundedInput"], ["rows", "10", "placeholder", "Travel related content*", "maxlength", "250", "autocapitalize", "true", "required", "", 3, "ngModel", "ngModelChange"], ["itemValueField", "id", "itemTextField", "name", 3, "ngModel", "items", "canSearch", "ngModelChange"], [1, "validation-errors"], ["class", "error-message", 4, "ngIf"], [1, "button-div"], ["expand", "block", "type", "submit", 1, "submit-button", 3, "disabled", "click"], ["expand", "block", "type", "submit", 1, "submit-button", 3, "click"], [1, "error-message"], ["name", "information-circle-outline"]],
      template: function AddPostPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Looking for travel advice? Want to share something interesting about a destination? Let's hear it! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-textarea", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPostPage_Template_ion_textarea_ngModelChange_10_listener($event) {
            return ctx.postText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Location*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ionic-selectable", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPostPage_Template_ionic_selectable_ngModelChange_16_listener($event) {
            return ctx.selectedLocation = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddPostPage_div_18_Template, 3, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPostPage_Template_ion_button_click_20_listener() {
            return ctx.post();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Add post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPostPage_Template_ion_button_click_22_listener() {
            return ctx.dismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.postText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedLocation)("items", ctx.locationOptions)("canSearch", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.postText && !ctx.selectedLocation);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], ionic_selectable__WEBPACK_IMPORTED_MODULE_6__["IonicSelectableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"]],
      styles: ["ion-content[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  --background: none;\n}\nion-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  padding-top: 10%;\n  font-size: 40px;\n  font-weight: bold;\n  color: white;\n}\nion-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  font-size: 20px;\n  color: white;\n}\n.btn[_ngcontent-%COMP%] {\n  border: none;\n  background-color: inherit;\n  font-size: 16px;\n  display: inline-block;\n}\n.submit-button[_ngcontent-%COMP%] {\n  --background: #fff;\n  --background-activated: #fff;\n  --ripple-color: #fff;\n  --background-focused: #fff;\n  --color-focused: #fff;\n  color: #128C7E;\n  --vertical-align: middle;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n.button-div[_ngcontent-%COMP%] {\n  padding-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CcmVuZGFuR2liZXJzb24vRG9jdW1lbnRzL0Rldi9WaXNpdC9WaXNpdC4vc3JjL2FwcC9wYWdlcy9hZGQtcG9zdC9hZGQtcG9zdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkZC1wb3N0L2FkZC1wb3N0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSjtBREVFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0FKO0FESUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNERjtBRElBO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFFQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNGRjtBREtBO0VBQ0UsZ0JBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1wb3N0L2FkZC1wb3N0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuXG4gIGgxIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIGgzIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuLmJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmO1xuICAtLXJpcHBsZS1jb2xvcjogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmY7XG4gIC0tY29sb3ItZm9jdXNlZDogI2ZmZjtcbiAgY29sb3I6ICMxMjhDN0U7XG5cbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbn1cblxuLmJ1dHRvbi1kaXYge1xuICBwYWRkaW5nLXRvcDogMTAlO1xufSIsImlvbi1jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuaW9uLWNvbnRlbnQgaDEge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24tY29udGVudCBoMyB7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmY7XG4gIC0tcmlwcGxlLWNvbG9yOiAjZmZmO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZjtcbiAgLS1jb2xvci1mb2N1c2VkOiAjZmZmO1xuICBjb2xvcjogIzEyOEM3RTtcbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbn1cblxuLmJ1dHRvbi1kaXYge1xuICBwYWRkaW5nLXRvcDogMTAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPostPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-post',
          templateUrl: './add-post.page.html',
          styleUrls: ['./add-post.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
        }, {
          type: src_app_objects_location_json_location_selector__WEBPACK_IMPORTED_MODULE_4__["LocationSelector"]
        }, {
          type: src_app_backend_clients__WEBPACK_IMPORTED_MODULE_3__["PostService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/mark-location/mark-location-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/mark-location/mark-location-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: MarkLocationPageRoutingModule */

  /***/
  function srcAppPagesMarkLocationMarkLocationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkLocationPageRoutingModule", function () {
      return MarkLocationPageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _mark_location_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mark-location.page */
    "./src/app/pages/mark-location/mark-location.page.ts");

    var routes = [{
      path: '',
      component: _mark_location_page__WEBPACK_IMPORTED_MODULE_2__["MarkLocationPage"]
    }];

    var MarkLocationPageRoutingModule = function MarkLocationPageRoutingModule() {
      _classCallCheck(this, MarkLocationPageRoutingModule);
    };

    MarkLocationPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MarkLocationPageRoutingModule
    });
    MarkLocationPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MarkLocationPageRoutingModule_Factory(t) {
        return new (t || MarkLocationPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MarkLocationPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkLocationPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/mark-location/mark-location.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/mark-location/mark-location.module.ts ***!
    \*************************************************************/

  /*! exports provided: MarkLocationPageModule */

  /***/
  function srcAppPagesMarkLocationMarkLocationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkLocationPageModule", function () {
      return MarkLocationPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _mark_location_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./mark-location-routing.module */
    "./src/app/pages/mark-location/mark-location-routing.module.ts");
    /* harmony import */


    var _mark_location_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mark-location.page */
    "./src/app/pages/mark-location/mark-location.page.ts");

    var MarkLocationPageModule = function MarkLocationPageModule() {
      _classCallCheck(this, MarkLocationPageModule);
    };

    MarkLocationPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MarkLocationPageModule
    });
    MarkLocationPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MarkLocationPageModule_Factory(t) {
        return new (t || MarkLocationPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _mark_location_routing_module__WEBPACK_IMPORTED_MODULE_4__["MarkLocationPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MarkLocationPageModule, {
        declarations: [_mark_location_page__WEBPACK_IMPORTED_MODULE_5__["MarkLocationPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _mark_location_routing_module__WEBPACK_IMPORTED_MODULE_4__["MarkLocationPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkLocationPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _mark_location_routing_module__WEBPACK_IMPORTED_MODULE_4__["MarkLocationPageRoutingModule"]],
          declarations: [_mark_location_page__WEBPACK_IMPORTED_MODULE_5__["MarkLocationPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/mark-location/mark-location.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/mark-location/mark-location.page.ts ***!
    \***********************************************************/

  /*! exports provided: MarkLocationPage */

  /***/
  function srcAppPagesMarkLocationMarkLocationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkLocationPage", function () {
      return MarkLocationPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_backend_clients__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/backend/clients */
    "./src/app/backend/clients/index.ts");
    /* harmony import */


    var src_app_objects_enums_map_selection_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/objects/enums/map-selection-mode */
    "./src/app/objects/enums/map-selection-mode.ts");
    /* harmony import */


    var src_app_objects_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/objects/map */
    "./src/app/objects/map.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var MarkLocationPage = /*#__PURE__*/function () {
      function MarkLocationPage(modalCtrl, zone, accountService) {
        _classCallCheck(this, MarkLocationPage);

        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.accountService = accountService;
        this.locationRequest = {
          locations: {}
        };
        this.titleTextVisited = 'Where have you visited?';
        this.titleTextToVisit = 'Bucketlist';
        this.subtitleTextVisited = "Show your friends (and yourself) where you've been!";
        this.subtitleTextToVisit = "Mark down every and any place you find interesting and want to checkout someday, let's make it happen!";
        this.displayVisitedText = true;
      }

      _createClass(MarkLocationPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.map = new src_app_objects_map__WEBPACK_IMPORTED_MODULE_3__["Map"](this.zone);
          this.map.addMapToDiv(this.selectionMode, 'mark-map');

          if (this.selectionMode === src_app_objects_enums_map_selection_mode__WEBPACK_IMPORTED_MODULE_2__["MapSelectionMode"].TO_VISIT) {
            this.displayVisitedText = false;
          }
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          this.map.destroyMap();
        }
      }, {
        key: "mapLocationsToRequest",
        value: function mapLocationsToRequest() {
          var _this22 = this;

          this.map.selectedArr.forEach(function (location) {
            _this22.locationRequest.locations[location.locationId] = location.status;
          });
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          // using the injected ModalController this page
          // can "dismiss" itself and optionally pass back data
          this.modalCtrl.dismiss({
            dismissed: true
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this23 = this;

          this.mapLocationsToRequest();
          this.accountService.accountUpdateLocationsPost(this.locationRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (res) {
            _this23.dismiss();
          } // (error) => {
          //   this.hasError = true;
          //   this.error = 'An unexpected error has occurred.';
          // }
          );
        }
      }]);

      return MarkLocationPage;
    }();

    MarkLocationPage.ɵfac = function MarkLocationPage_Factory(t) {
      return new (t || MarkLocationPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backend_clients__WEBPACK_IMPORTED_MODULE_1__["AccountsService"]));
    };

    MarkLocationPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MarkLocationPage,
      selectors: [["mark-location"]],
      inputs: {
        selectionMode: "selectionMode"
      },
      decls: 12,
      vars: 1,
      consts: [["no-bounce", ""], [1, "splash"], ["id", "mark-map", 1, "chartdiv"], [1, "button-div"], ["expand", "block", "type", "submit", 1, "submit-button", 3, "click"]],
      template: function MarkLocationPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Click a location on the map to zoom to it. Double click the location to select/deselect it. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarkLocationPage_Template_ion_button_click_8_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Update my map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarkLocationPage_Template_ion_button_click_10_listener() {
            return ctx.dismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.displayVisitedText ? ctx.titleTextVisited : ctx.titleTextToVisit);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"]],
      styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: none;\n  padding-left: 5%;\n}\nion-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  padding-top: 10%;\n  font-size: 40px;\n  font-weight: bold;\n  color: white;\n}\nion-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  font-size: 20px;\n  color: white;\n}\n.chartdiv[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40%;\n}\n.btn[_ngcontent-%COMP%] {\n  border: none;\n  background-color: inherit;\n  font-size: 16px;\n  display: inline-block;\n}\n.submit-button[_ngcontent-%COMP%] {\n  --background: #fff;\n  --background-activated: #fff;\n  --ripple-color: #fff;\n  --background-focused: #fff;\n  --color-focused: #fff;\n  color: #128C7E;\n  --vertical-align: middle;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n.button-div[_ngcontent-%COMP%] {\n  padding-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CcmVuZGFuR2liZXJzb24vRG9jdW1lbnRzL0Rldi9WaXNpdC9WaXNpdC4vc3JjL2FwcC9wYWdlcy9tYXJrLWxvY2F0aW9uL21hcmstbG9jYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYXJrLWxvY2F0aW9uL21hcmstbG9jYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ0NGO0FEQ0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FERUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQUo7QURLQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDRkY7QURLQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0ZGO0FES0E7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUVBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0hGO0FETUE7RUFDRSxnQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFyay1sb2NhdGlvbi9tYXJrLWxvY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuXG4gIGgxIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIGgzIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxufVxuXG4uY2hhcnRkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MCU7XG59XG5cbi5idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZjtcbiAgLS1yaXBwbGUtY29sb3I6ICNmZmY7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmO1xuICAtLWNvbG9yLWZvY3VzZWQ6ICNmZmY7XG4gIGNvbG9yOiAjMTI4QzdFO1xuXG4gIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG59XG5cbi5idXR0b24tZGl2IHtcbiAgcGFkZGluZy10b3A6IDEwJTtcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cbmlvbi1jb250ZW50IGgxIHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgaDMge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNoYXJ0ZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDAlO1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmY7XG4gIC0tcmlwcGxlLWNvbG9yOiAjZmZmO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZjtcbiAgLS1jb2xvci1mb2N1c2VkOiAjZmZmO1xuICBjb2xvcjogIzEyOEM3RTtcbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbn1cblxuLmJ1dHRvbi1kaXYge1xuICBwYWRkaW5nLXRvcDogMTAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkLocationPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mark-location',
          templateUrl: './mark-location.page.html',
          styleUrls: ['./mark-location.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: src_app_backend_clients__WEBPACK_IMPORTED_MODULE_1__["AccountsService"]
        }];
      }, {
        selectionMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/modals/add/add-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/modals/add/add-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: AddPageRoutingModule */

  /***/
  function srcAppPagesModalsAddAddRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPageRoutingModule", function () {
      return AddPageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _add_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./add.page */
    "./src/app/pages/modals/add/add.page.ts");

    var routes = [{
      path: '',
      component: _add_page__WEBPACK_IMPORTED_MODULE_2__["AddPage"]
    }];

    var AddPageRoutingModule = function AddPageRoutingModule() {
      _classCallCheck(this, AddPageRoutingModule);
    };

    AddPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AddPageRoutingModule
    });
    AddPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AddPageRoutingModule_Factory(t) {
        return new (t || AddPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/modals/add/add.module.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/modals/add/add.module.ts ***!
    \************************************************/

  /*! exports provided: AddPageModule */

  /***/
  function srcAppPagesModalsAddAddModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPageModule", function () {
      return AddPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _add_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add-routing.module */
    "./src/app/pages/modals/add/add-routing.module.ts");
    /* harmony import */


    var _add_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add.page */
    "./src/app/pages/modals/add/add.page.ts");

    var AddPageModule = function AddPageModule() {
      _classCallCheck(this, AddPageModule);
    };

    AddPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AddPageModule
    });
    AddPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AddPageModule_Factory(t) {
        return new (t || AddPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _add_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddPageModule, {
        declarations: [_add_page__WEBPACK_IMPORTED_MODULE_5__["AddPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _add_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _add_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddPageRoutingModule"]],
          declarations: [_add_page__WEBPACK_IMPORTED_MODULE_5__["AddPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/modals/add/add.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/modals/add/add.page.ts ***!
    \**********************************************/

  /*! exports provided: AddPage */

  /***/
  function srcAppPagesModalsAddAddPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPage", function () {
      return AddPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_objects_enums_map_selection_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/objects/enums/map-selection-mode */
    "./src/app/objects/enums/map-selection-mode.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _mark_location_mark_location_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../mark-location/mark-location.page */
    "./src/app/pages/mark-location/mark-location.page.ts");
    /* harmony import */


    var _add_post_add_post_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../add-post/add-post.page */
    "./src/app/pages/add-post/add-post.page.ts");
    /* harmony import */


    var _add_post_image_add_post_image_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../add-post-image/add-post-image.page */
    "./src/app/pages/add-post-image/add-post-image.page.ts");

    var AddPage = /*#__PURE__*/function () {
      function AddPage(router, modalCtrl) {
        _classCallCheck(this, AddPage);

        this.router = router;
        this.modalCtrl = modalCtrl;
      }

      _createClass(AddPage, [{
        key: "markLocationsToVisit",
        value: function () {
          var _markLocationsToVisit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var modal;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.modalCtrl.create({
                      component: _mark_location_mark_location_page__WEBPACK_IMPORTED_MODULE_4__["MarkLocationPage"],
                      componentProps: {
                        selectionMode: src_app_objects_enums_map_selection_mode__WEBPACK_IMPORTED_MODULE_2__["MapSelectionMode"].TO_VISIT
                      }
                    });

                  case 2:
                    modal = _context15.sent;
                    _context15.next = 5;
                    return modal.present();

                  case 5:
                    return _context15.abrupt("return", _context15.sent);

                  case 6:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));

          function markLocationsToVisit() {
            return _markLocationsToVisit.apply(this, arguments);
          }

          return markLocationsToVisit;
        }()
      }, {
        key: "markVisitedLocations",
        value: function () {
          var _markVisitedLocations = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var modal;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this.modalCtrl.create({
                      component: _mark_location_mark_location_page__WEBPACK_IMPORTED_MODULE_4__["MarkLocationPage"],
                      componentProps: {
                        selectionMode: src_app_objects_enums_map_selection_mode__WEBPACK_IMPORTED_MODULE_2__["MapSelectionMode"].VISITED
                      }
                    });

                  case 2:
                    modal = _context16.sent;
                    _context16.next = 5;
                    return modal.present();

                  case 5:
                    return _context16.abrupt("return", _context16.sent);

                  case 6:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));

          function markVisitedLocations() {
            return _markVisitedLocations.apply(this, arguments);
          }

          return markVisitedLocations;
        }()
      }, {
        key: "addNewPost",
        value: function () {
          var _addNewPost = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            var modal;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.modalCtrl.create({
                      component: _add_post_add_post_page__WEBPACK_IMPORTED_MODULE_5__["AddPostPage"],
                      componentProps: {}
                    });

                  case 2:
                    modal = _context17.sent;
                    _context17.next = 5;
                    return modal.present();

                  case 5:
                    return _context17.abrupt("return", _context17.sent);

                  case 6:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));

          function addNewPost() {
            return _addNewPost.apply(this, arguments);
          }

          return addNewPost;
        }()
      }, {
        key: "addNewImage",
        value: function () {
          var _addNewImage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var modal;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return this.modalCtrl.create({
                      component: _add_post_image_add_post_image_page__WEBPACK_IMPORTED_MODULE_6__["AddPostImagePage"],
                      componentProps: {}
                    });

                  case 2:
                    modal = _context18.sent;
                    _context18.next = 5;
                    return modal.present();

                  case 5:
                    return _context18.abrupt("return", _context18.sent);

                  case 6:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));

          function addNewImage() {
            return _addNewImage.apply(this, arguments);
          }

          return addNewImage;
        }()
      }]);

      return AddPage;
    }();

    AddPage.ɵfac = function AddPage_Factory(t) {
      return new (t || AddPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]));
    };

    AddPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddPage,
      selectors: [["add-modal"]],
      decls: 39,
      vars: 1,
      consts: [["lines", "none", 3, "scrollY"], ["lines", "none"], ["src", "../../../../assets/UI/visitedIcon.svg"], ["size", "10", 3, "click"], ["src", "../../../../assets/UI/toVisitIcon.svg"], ["src", "../../../../assets/UI/pictureIcon.svg"], ["src", "../../../../assets/UI/postIcon.svg"]],
      template: function AddPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mark Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPage_Template_ion_col_click_9_listener() {
            return ctx.markVisitedLocations();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Visited");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPage_Template_ion_col_click_17_listener() {
            return ctx.markLocationsToVisit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Wants to visit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-item", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Add Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPage_Template_ion_col_click_28_listener() {
            return ctx.addNewImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ion-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPage_Template_ion_col_click_36_listener() {
            return ctx.addNewPost();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollY", true);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"]],
      styles: ["ion-card[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n  margin-top: 4px !important;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CcmVuZGFuR2liZXJzb24vRG9jdW1lbnRzL0Rldi9WaXNpdC9WaXNpdC4vc3JjL2FwcC9wYWdlcy9tb2RhbHMvYWRkL2FkZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21vZGFscy9hZGQvYWRkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tb2RhbHMvYWRkL2FkZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogNHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufSIsImlvbi1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDRweCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'add-modal',
          templateUrl: './add.page.html',
          styleUrls: ['./add.page.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/modals/forgot-password/forgot-password-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/modals/forgot-password/forgot-password-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: ForgotPasswordPageRoutingModule */

  /***/
  function srcAppPagesModalsForgotPasswordForgotPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageRoutingModule", function () {
      return ForgotPasswordPageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _forgot_password_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./forgot-password.page */
    "./src/app/pages/modals/forgot-password/forgot-password.page.ts");

    var routes = [{
      path: '',
      component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordPage"]
    }];

    var ForgotPasswordPageRoutingModule = function ForgotPasswordPageRoutingModule() {
      _classCallCheck(this, ForgotPasswordPageRoutingModule);
    };

    ForgotPasswordPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ForgotPasswordPageRoutingModule
    });
    ForgotPasswordPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ForgotPasswordPageRoutingModule_Factory(t) {
        return new (t || ForgotPasswordPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ForgotPasswordPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/modals/forgot-password/forgot-password.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/modals/forgot-password/forgot-password.module.ts ***!
    \************************************************************************/

  /*! exports provided: ForgotPasswordPageModule */

  /***/
  function srcAppPagesModalsForgotPasswordForgotPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function () {
      return ForgotPasswordPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./forgot-password-routing.module */
    "./src/app/pages/modals/forgot-password/forgot-password-routing.module.ts");
    /* harmony import */


    var _forgot_password_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forgot-password.page */
    "./src/app/pages/modals/forgot-password/forgot-password.page.ts");

    var ForgotPasswordPageModule = function ForgotPasswordPageModule() {
      _classCallCheck(this, ForgotPasswordPageModule);
    };

    ForgotPasswordPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ForgotPasswordPageModule
    });
    ForgotPasswordPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ForgotPasswordPageModule_Factory(t) {
        return new (t || ForgotPasswordPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ForgotPasswordPageModule, {
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordPageRoutingModule"]],
          declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/modals/forgot-password/forgot-password.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/modals/forgot-password/forgot-password.page.ts ***!
    \**********************************************************************/

  /*! exports provided: ForgotPasswordPage */

  /***/
  function srcAppPagesModalsForgotPasswordForgotPasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function () {
      return ForgotPasswordPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_backend_clients_api_accounts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/backend/clients/api/accounts.service */
    "./src/app/backend/clients/api/accounts.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ForgotPasswordPage = /*#__PURE__*/function () {
      function ForgotPasswordPage(accountService, modalController, loadingController) {
        _classCallCheck(this, ForgotPasswordPage);

        this.accountService = accountService;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.userEmail = '';
      }

      _createClass(ForgotPasswordPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeModal",
        value: function () {
          var _closeModal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    _context19.next = 2;
                    return this.modalController.dismiss();

                  case 2:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));

          function closeModal() {
            return _closeModal.apply(this, arguments);
          }

          return closeModal;
        }()
      }, {
        key: "onSubmit",
        value: function () {
          var _onSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var _this24 = this;

            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    this.accountService.PasswordRecover(this.userEmail).then(function () {
                      return _this24.closeModal();
                    });

                  case 1:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));

          function onSubmit() {
            return _onSubmit.apply(this, arguments);
          }

          return onSubmit;
        }()
      }]);

      return ForgotPasswordPage;
    }();

    ForgotPasswordPage.ɵfac = function ForgotPasswordPage_Factory(t) {
      return new (t || ForgotPasswordPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backend_clients_api_accounts_service__WEBPACK_IMPORTED_MODULE_2__["AccountsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]));
    };

    ForgotPasswordPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgotPasswordPage,
      selectors: [["app-forgot-password"]],
      decls: 16,
      vars: 2,
      consts: [[3, "scrollY"], [1, "center-any-object"], [1, "roundedInput"], ["autocapitalize", "true", "placeholder", "Email", "type", "email", "required", "", 3, "ngModel", "ngModelChange"], ["expand", "block", 1, "reset-button", 3, "click"], ["color", "medium", "expand", "block", 3, "click"]],
      template: function ForgotPasswordPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reset Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgotPasswordPage_Template_ion_input_ngModelChange_8_listener($event) {
            return ctx.userEmail = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordPage_Template_ion_button_click_11_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordPage_Template_ion_button_click_14_listener() {
            return ctx.closeModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollY", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userEmail);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]],
      styles: [".reset-button[_ngcontent-%COMP%] {\n  --background: #128C7E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CcmVuZGFuR2liZXJzb24vRG9jdW1lbnRzL0Rldi9WaXNpdC9WaXNpdC4vc3JjL2FwcC9wYWdlcy9tb2RhbHMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21vZGFscy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tb2RhbHMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzZXQtYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICMxMjhDN0U7XG4gIH0iLCIucmVzZXQtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMTI4QzdFO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forgot-password',
          templateUrl: './forgot-password.page.html',
          styleUrls: ['./forgot-password.page.scss']
        }]
      }], function () {
        return [{
          type: src_app_backend_clients_api_accounts_service__WEBPACK_IMPORTED_MODULE_2__["AccountsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/modals/map-filter/map-filter-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/modals/map-filter/map-filter-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: MapFilterPageRoutingModule */

  /***/
  function srcAppPagesModalsMapFilterMapFilterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapFilterPageRoutingModule", function () {
      return MapFilterPageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _map_filter_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./map-filter.page */
    "./src/app/pages/modals/map-filter/map-filter.page.ts");

    var routes = [{
      path: '',
      component: _map_filter_page__WEBPACK_IMPORTED_MODULE_2__["MapFilterPage"]
    }];

    var MapFilterPageRoutingModule = function MapFilterPageRoutingModule() {
      _classCallCheck(this, MapFilterPageRoutingModule);
    };

    MapFilterPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MapFilterPageRoutingModule
    });
    MapFilterPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MapFilterPageRoutingModule_Factory(t) {
        return new (t || MapFilterPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MapFilterPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapFilterPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/modals/map-filter/map-filter.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/modals/map-filter/map-filter.module.ts ***!
    \**************************************************************/

  /*! exports provided: MapFilterPageModule */

  /***/
  function srcAppPagesModalsMapFilterMapFilterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapFilterPageModule", function () {
      return MapFilterPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _map_filter_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./map-filter-routing.module */
    "./src/app/pages/modals/map-filter/map-filter-routing.module.ts");
    /* harmony import */


    var _map_filter_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./map-filter.page */
    "./src/app/pages/modals/map-filter/map-filter.page.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var MapFilterPageModule = function MapFilterPageModule() {
      _classCallCheck(this, MapFilterPageModule);
    };

    MapFilterPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MapFilterPageModule
    });
    MapFilterPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MapFilterPageModule_Factory(t) {
        return new (t || MapFilterPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _map_filter_routing_module__WEBPACK_IMPORTED_MODULE_4__["MapFilterPageRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MapFilterPageModule, {
        declarations: [_map_filter_page__WEBPACK_IMPORTED_MODULE_5__["MapFilterPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _map_filter_routing_module__WEBPACK_IMPORTED_MODULE_4__["MapFilterPageRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapFilterPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _map_filter_routing_module__WEBPACK_IMPORTED_MODULE_4__["MapFilterPageRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
          declarations: [_map_filter_page__WEBPACK_IMPORTED_MODULE_5__["MapFilterPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/modals/map-filter/map-filter.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/modals/map-filter/map-filter.page.ts ***!
    \************************************************************/

  /*! exports provided: MapFilterPage */

  /***/
  function srcAppPagesModalsMapFilterMapFilterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapFilterPage", function () {
      return MapFilterPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _objects_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../objects/map */
    "./src/app/objects/map.ts");
    /* harmony import */


    var _objects_enums_map_selection_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../objects/enums/map-selection-mode */
    "./src/app/objects/enums/map-selection-mode.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var MapFilterPage = /*#__PURE__*/function () {
      function MapFilterPage(modalController, loadingController, zone, navParams) {
        _classCallCheck(this, MapFilterPage);

        this.modalController = modalController;
        this.loadingController = loadingController;
        this.zone = zone;
        this.navParams = navParams;
        this.selectionMode = _objects_enums_map_selection_mode__WEBPACK_IMPORTED_MODULE_2__["MapSelectionMode"].FILTER;
        this.filter = '';
      }

      _createClass(MapFilterPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.map = new _objects_map__WEBPACK_IMPORTED_MODULE_1__["Map"](this.zone);
          this.map.addMapToDiv(this.selectionMode, 'filter-map');
          this.filter = this.navParams.data.filter;
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          this.map.destroyMap();
        }
      }, {
        key: "restFilter",
        value: function () {
          var _restFilter = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    this.filter = '';
                    _context21.next = 3;
                    return this.closeModal();

                  case 3:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));

          function restFilter() {
            return _restFilter.apply(this, arguments);
          }

          return restFilter;
        }()
      }, {
        key: "filterSubmit",
        value: function () {
          var _filterSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    if (this.map.selectedArr.length > 0) {
                      this.filter = this.map.selectedArr[0].locationId;
                    }

                    _context22.next = 3;
                    return this.closeModal();

                  case 3:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));

          function filterSubmit() {
            return _filterSubmit.apply(this, arguments);
          }

          return filterSubmit;
        }()
      }, {
        key: "closeModal",
        value: function () {
          var _closeModal2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            var loading, onClosedData;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.next = 2;
                    return this.loadingController.create({
                      duration: 2000
                    });

                  case 2:
                    loading = _context23.sent;
                    _context23.next = 5;
                    return loading.present();

                  case 5:
                    onClosedData = this.filter;
                    _context23.next = 8;
                    return this.modalController.dismiss(onClosedData);

                  case 8:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));

          function closeModal() {
            return _closeModal2.apply(this, arguments);
          }

          return closeModal;
        }()
      }]);

      return MapFilterPage;
    }();

    MapFilterPage.ɵfac = function MapFilterPage_Factory(t) {
      return new (t || MapFilterPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]));
    };

    MapFilterPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MapFilterPage,
      selectors: [["map-filter"]],
      decls: 11,
      vars: 1,
      consts: [[3, "scrollY"], ["spellcheck", "true", "showCancelButton", "true"], ["id", "filter-map", "onload", "onLoad()", 1, "chartdiv"], ["color", "medium", "expand", "block", 3, "click"], ["expand", "block", 1, "filter-button", 3, "click"]],
      template: function MapFilterPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-searchbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapFilterPage_Template_ion_button_click_6_listener() {
            return ctx.restFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapFilterPage_Template_ion_button_click_9_listener() {
            return ctx.filterSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollY", false);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"]],
      styles: [".filter-button[_ngcontent-%COMP%] {\n  --background: #128C7E;\n}\n\n.chartdiv[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CcmVuZGFuR2liZXJzb24vRG9jdW1lbnRzL0Rldi9WaXNpdC9WaXNpdC4vc3JjL2FwcC9wYWdlcy9tb2RhbHMvbWFwLWZpbHRlci9tYXAtZmlsdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbW9kYWxzL21hcC1maWx0ZXIvbWFwLWZpbHRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZGFscy9tYXAtZmlsdGVyL21hcC1maWx0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMxMjhDN0U7XG59XG5cbi5jaGFydGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwJTtcbn0iLCIuZmlsdGVyLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzEyOEM3RTtcbn1cblxuLmNoYXJ0ZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapFilterPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'map-filter',
          templateUrl: './map-filter.page.html',
          styleUrls: ['./map-filter.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/modals/search/search-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/modals/search/search-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: SearchPageRoutingModule */

  /***/
  function srcAppPagesModalsSearchSearchRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function () {
      return SearchPageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _search_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./search.page */
    "./src/app/pages/modals/search/search.page.ts");

    var routes = [{
      path: '',
      component: _search_page__WEBPACK_IMPORTED_MODULE_2__["SearchPage"]
    }];

    var SearchPageRoutingModule = function SearchPageRoutingModule() {
      _classCallCheck(this, SearchPageRoutingModule);
    };

    SearchPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SearchPageRoutingModule
    });
    SearchPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SearchPageRoutingModule_Factory(t) {
        return new (t || SearchPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/modals/search/search.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/modals/search/search.module.ts ***!
    \******************************************************/

  /*! exports provided: SearchPageModule */

  /***/
  function srcAppPagesModalsSearchSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPageModule", function () {
      return SearchPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _search_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./search-routing.module */
    "./src/app/pages/modals/search/search-routing.module.ts");
    /* harmony import */


    var _search_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search.page */
    "./src/app/pages/modals/search/search.page.ts");

    var SearchPageModule = function SearchPageModule() {
      _classCallCheck(this, SearchPageModule);
    };

    SearchPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SearchPageModule
    });
    SearchPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SearchPageModule_Factory(t) {
        return new (t || SearchPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _search_routing_module__WEBPACK_IMPORTED_MODULE_4__["SearchPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchPageModule, {
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_5__["SearchPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _search_routing_module__WEBPACK_IMPORTED_MODULE_4__["SearchPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _search_routing_module__WEBPACK_IMPORTED_MODULE_4__["SearchPageRoutingModule"]],
          declarations: [_search_page__WEBPACK_IMPORTED_MODULE_5__["SearchPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/modals/search/search.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/modals/search/search.page.ts ***!
    \****************************************************/

  /*! exports provided: SearchPage */

  /***/
  function srcAppPagesModalsSearchSearchPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPage", function () {
      return SearchPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_backend_clients__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/backend/clients */
    "./src/app/backend/clients/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SearchPage_ion_card_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchPage_ion_card_8_Template_ion_card_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var item_r1 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.goToProfile(item_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-grid", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-col", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-row", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-col", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-text", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-text");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.avi, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r1.firstName, " ", item_r1.lastName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.residenceLocation);
      }
    }

    var SearchPage = /*#__PURE__*/function () {
      function SearchPage(viewCtrl, userService, zone, router) {
        _classCallCheck(this, SearchPage);

        this.viewCtrl = viewCtrl;
        this.userService = userService;
        this.zone = zone;
        this.router = router;
        this.people = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.searchQuery = '';
      }

      _createClass(SearchPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "search",
        value: function search() {
          var _this25 = this;

          this.userService.userSearchQueryGet(this.searchQuery).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (users) {
            _this25.people.next(users);
          });
        }
      }, {
        key: "goToProfile",
        value: function goToProfile(user) {
          var _this26 = this;

          var navigationExtras = {
            replaceUrl: true,
            skipLocationChange: true,
            state: {
              userId: user.id
            }
          };
          var onClosedData = user.id;
          this.viewCtrl.dismiss(onClosedData);
          this.zone.run(function () {
            _this26.router.navigateByUrl('/user-profile', navigationExtras);
          });
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.viewCtrl.dismiss();
        }
      }]);

      return SearchPage;
    }();

    SearchPage.ɵfac = function SearchPage_Factory(t) {
      return new (t || SearchPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backend_clients__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    SearchPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchPage,
      selectors: [["search"]],
      decls: 9,
      vars: 4,
      consts: [["slot", "end"], ["large", "", "slot", "end", 3, "click"], ["name", "close", 1, "close-icon"], ["spellcheck", "true", 3, "ngModel", "search", "ngModelChange"], [3, "items"], [3, "click", 4, "virtualItem"], [3, "click"], [1, "search-grid"], [1, "ion-align-self-center"], [1, "ion-align-items-center"], [1, "user-pic", "img-center", 3, "src"], ["size", "1.5", 1, "ion-align-self-center"], ["color", "dark"]],
      template: function SearchPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-buttons", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchPage_Template_ion_button_click_2_listener() {
            return ctx.dismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-searchbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function SearchPage_Template_ion_searchbar_search_4_listener() {
            return ctx.search();
          })("ngModelChange", function SearchPage_Template_ion_searchbar_ngModelChange_4_listener($event) {
            return ctx.searchQuery = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-virtual-scroll", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchPage_ion_card_8_Template, 16, 4, "ion-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchQuery);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, ctx.people));
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonVirtualScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["VirtualItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonText"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
      styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\nion-searchbar[_ngcontent-%COMP%] {\n  --background: #128C7E;\n  --color: white;\n  --icon-color: white;\n}\n\n.close-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: white;\n}\n\nion-header[_ngcontent-%COMP%] {\n  border-radius: 25px;\n}\n\n.search-grid[_ngcontent-%COMP%] {\n  --ion-grid-columns: 2;\n  --ion-grid-column-padding: 1px;\n  --ion-grid-padding: 1.5px;\n}\n\nion-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  margin-bottom: 5px !important;\n  margin-top: 4px !important;\n}\n\n.user-pic[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CcmVuZGFuR2liZXJzb24vRG9jdW1lbnRzL0Rldi9WaXNpdC9WaXNpdC4vc3JjL2FwcC9wYWdlcy9tb2RhbHMvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21vZGFscy9zZWFyY2gvc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZGFscy9zZWFyY2gvc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMTI4QzdFO1xuICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIC0taWNvbi1jb2xvcjogd2hpdGU7XG59XG5cbi5jbG9zZS1pY29uIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24taGVhZGVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4uc2VhcmNoLWdyaWQge1xuICAgIC0taW9uLWdyaWQtY29sdW1uczogMjtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAxcHg7XG4gICAgLS1pb24tZ3JpZC1wYWRkaW5nOiAxLjVweDtcbn1cblxuaW9uLWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiA0cHggIWltcG9ydGFudDtcbn1cblxuLnVzZXItcGljIHtcbiAgICB3aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMTI4QzdFO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1pY29uLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNsb3NlLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWhlYWRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5zZWFyY2gtZ3JpZCB7XG4gIC0taW9uLWdyaWQtY29sdW1uczogMjtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMXB4O1xuICAtLWlvbi1ncmlkLXBhZGRpbmc6IDEuNXB4O1xufVxuXG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDRweCAhaW1wb3J0YW50O1xufVxuXG4udXNlci1waWMge1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'search',
          templateUrl: './search.page.html',
          styleUrls: ['./search.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
        }, {
          type: src_app_backend_clients__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/user-settings/user-settings-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/user-settings/user-settings-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: UserSettingsPageRoutingModule */

  /***/
  function srcAppPagesUserSettingsUserSettingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSettingsPageRoutingModule", function () {
      return UserSettingsPageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _user_settings_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-settings.page */
    "./src/app/pages/user-settings/user-settings.page.ts");

    var routes = [{
      path: '',
      component: _user_settings_page__WEBPACK_IMPORTED_MODULE_2__["UserSettingsPage"]
    }];

    var UserSettingsPageRoutingModule = function UserSettingsPageRoutingModule() {
      _classCallCheck(this, UserSettingsPageRoutingModule);
    };

    UserSettingsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserSettingsPageRoutingModule
    });
    UserSettingsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserSettingsPageRoutingModule_Factory(t) {
        return new (t || UserSettingsPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserSettingsPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSettingsPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/user-settings/user-settings.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/user-settings/user-settings.module.ts ***!
    \*************************************************************/

  /*! exports provided: UserSettingsPageModule */

  /***/
  function srcAppPagesUserSettingsUserSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSettingsPageModule", function () {
      return UserSettingsPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _user_settings_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-settings-routing.module */
    "./src/app/pages/user-settings/user-settings-routing.module.ts");
    /* harmony import */


    var _user_settings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-settings.page */
    "./src/app/pages/user-settings/user-settings.page.ts");

    var UserSettingsPageModule = function UserSettingsPageModule() {
      _classCallCheck(this, UserSettingsPageModule);
    };

    UserSettingsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserSettingsPageModule
    });
    UserSettingsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserSettingsPageModule_Factory(t) {
        return new (t || UserSettingsPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _user_settings_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserSettingsPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserSettingsPageModule, {
        declarations: [_user_settings_page__WEBPACK_IMPORTED_MODULE_5__["UserSettingsPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _user_settings_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserSettingsPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSettingsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _user_settings_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserSettingsPageRoutingModule"]],
          declarations: [_user_settings_page__WEBPACK_IMPORTED_MODULE_5__["UserSettingsPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/user-settings/user-settings.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/user-settings/user-settings.page.ts ***!
    \***********************************************************/

  /*! exports provided: UserSettingsPage */

  /***/
  function srcAppPagesUserSettingsUserSettingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSettingsPage", function () {
      return UserSettingsPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @capacitor/camera */
    "./node_modules/@capacitor/camera/dist/esm/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_backend_clients__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/backend/clients */
    "./src/app/backend/clients/index.ts");

    var UserSettingsPage = /*#__PURE__*/function () {
      function UserSettingsPage(loadingController, route, navParams, modalController, accountService) {
        _classCallCheck(this, UserSettingsPage);

        this.loadingController = loadingController;
        this.route = route;
        this.navParams = navParams;
        this.modalController = modalController;
        this.accountService = accountService;
        this.userImage = '../../../assets/UI/profilePicUpload.svg';
        this.blob = undefined;
        this.user = this.navParams.data.user;
        this.userImage = this.user.avi;
      }

      _createClass(UserSettingsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var birthPlace = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
          var residence = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
          var education = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
          var title = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
          this.aboutForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            birthPlace: birthPlace,
            residence: residence,
            education: education,
            title: title
          });
        }
      }, {
        key: "onSubmit",
        value: function () {
          var _onSubmit2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
            var _this27 = this;

            var loading, title, education, birthPlace, residence;
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    _context25.next = 2;
                    return this.loadingController.create({
                      duration: 2000
                    });

                  case 2:
                    loading = _context25.sent;
                    _context25.next = 5;
                    return loading.present();

                  case 5:
                    title = this.aboutForm.controls.title.value === '' ? this.user.title : this.aboutForm.controls.title.value;
                    education = this.aboutForm.controls.education.value === '' ? this.user.education : this.aboutForm.controls.education.value;
                    birthPlace = this.aboutForm.controls.birthPlace.value === '' ? this.user.birthLocation : this.aboutForm.controls.birthPlace.value;
                    residence = this.aboutForm.controls.residence.value === '' ? this.user.residenceLocation : this.aboutForm.controls.residence.value; // todo create a forkjoin or something here to make these run together

                    this.accountService.accountUpdatePost(this.user.firstname, this.user.lastname, title, education, birthPlace, residence).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
                      return regeneratorRuntime.wrap(function _callee24$(_context24) {
                        while (1) {
                          switch (_context24.prev = _context24.next) {
                            case 0:
                              if (_this27.blob !== undefined) {
                                _this27.accountService.accountUpdateProfileImagePost(_this27.blob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function () {});
                              }

                              _context24.next = 3;
                              return loading.dismiss();

                            case 3:
                              _this27.dismiss();

                            case 4:
                            case "end":
                              return _context24.stop();
                          }
                        }
                      }, _callee24);
                    })));

                  case 10:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));

          function onSubmit() {
            return _onSubmit2.apply(this, arguments);
          }

          return onSubmit;
        }()
      }, {
        key: "b64toBlob",
        value: function b64toBlob(dataURI) {
          var byteString = atob(dataURI.split(',')[1]);
          var ab = new ArrayBuffer(byteString.length);
          var ia = new Uint8Array(ab);

          for (var i = 0; i < byteString.length; i += 1) {
            ia[i] = byteString.charCodeAt(i);
          }

          this.blob = new Blob([ab], {
            type: 'image/jpeg'
          });
        }
      }, {
        key: "getUserImage",
        value: function () {
          var _getUserImage2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
            var imageUrl;
            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    _context26.next = 2;
                    return _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["Camera"].getPhoto({
                      quality: 90,
                      allowEditing: true,
                      resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["CameraResultType"].DataUrl
                    });

                  case 2:
                    this.image = _context26.sent;
                    // image.webPath will contain a path that can be set as an image src.
                    // You can access the original file using image.path, which can be
                    // passed to the Filesystem API to read the raw data of the image,
                    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
                    imageUrl = this.image.dataUrl; // Can be set to the src of an image now

                    this.userImage = imageUrl;
                    this.b64toBlob(this.image.dataUrl);

                  case 6:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26, this);
          }));

          function getUserImage() {
            return _getUserImage2.apply(this, arguments);
          }

          return getUserImage;
        }()
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalController.dismiss();
        }
      }, {
        key: "logout",
        value: function () {
          var _logout2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    _context27.next = 2;
                    return this.accountService.logout();

                  case 2:
                    this.dismiss();

                  case 3:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27, this);
          }));

          function logout() {
            return _logout2.apply(this, arguments);
          }

          return logout;
        }()
      }]);

      return UserSettingsPage;
    }();

    UserSettingsPage.ɵfac = function UserSettingsPage_Factory(t) {
      return new (t || UserSettingsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backend_clients__WEBPACK_IMPORTED_MODULE_6__["AccountsService"]));
    };

    UserSettingsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserSettingsPage,
      selectors: [["app-user-settings"]],
      decls: 48,
      vars: 6,
      consts: [["no-bounce", ""], [1, "splash"], ["slot", "secondary"], ["color", "dark", 3, "click"], ["name", "arrow-back"], ["slot", "primary"], ["name", "log-out-outline"], [3, "formGroup", "ngSubmit"], ["size", "3"], [3, "src", "click"], [1, "bottomRow"], [1, "roundedInput"], ["position", "floating"], ["autocapitalize", "true", "type", "text", "formControlName", "birthPlace", "required", "", 3, "placeholder"], ["autocapitalize", "true", "type", "text", "formControlName", "residence", "required", "", 3, "placeholder"], ["autocapitalize", "true", "type", "text", "formControlName", "education", "required", "", 3, "placeholder"], ["autocapitalize", "true", "type", "text", "formControlName", "title", "required", "", 3, "placeholder"], [1, "button-div"], ["expand", "block", "type", "submit", 1, "submit-button"]],
      template: function UserSettingsPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-buttons", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserSettingsPage_Template_ion_button_click_5_listener() {
            return ctx.dismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-buttons", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserSettingsPage_Template_ion_button_click_8_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ion-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Update profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserSettingsPage_Template_form_ngSubmit_12_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-col", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-avatar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserSettingsPage_Template_img_click_17_listener() {
            return ctx.getUserImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Change your profile pic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-row", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-item", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Birthplace");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "ion-input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ion-row", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-item", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ion-label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Current Residence");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "ion-input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ion-row", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ion-item", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ion-label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "ion-input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ion-row", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ion-item", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ion-label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Title or Employment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "ion-input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ion-button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.aboutForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.userImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.user.birthLocation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.user.residenceLocation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.user.education);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.user.title);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]],
      styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: none;\n}\nion-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  padding-top: 10%;\n  font-size: 40px;\n  font-weight: bold;\n  color: white;\n}\nion-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  font-size: 20px;\n  color: white;\n}\n.roundedInput[_ngcontent-%COMP%] {\n  --border-radius: 10px;\n  --border-width: 1px;\n  --highlight-height: 0;\n  --background: #f8f9fa;\n  padding-top: 10px;\n  padding-block: 10%;\n}\n.nameRow[_ngcontent-%COMP%] {\n  padding-block: 10%;\n}\n.nameRow[_ngcontent-%COMP%]   .roundedInput[_ngcontent-%COMP%] {\n  padding-block: 0%;\n}\n.submit-button[_ngcontent-%COMP%] {\n  --background: #fff;\n  --background-activated: #fff;\n  --ripple-color: #fff;\n  --background-focused: #fff;\n  --color-focused: #fff;\n  color: #128C7E;\n  --vertical-align: middle;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n.bottomRow[_ngcontent-%COMP%] {\n  margin-top: -30px;\n}\nion-avatar[_ngcontent-%COMP%] {\n  width: 110% !important;\n  height: 110% !important;\n  max-width: 80px !important;\n  max-height: 80px !important;\n}\n.logout[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  color: white;\n}\n.logout[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CcmVuZGFuR2liZXJzb24vRG9jdW1lbnRzL0Rldi9WaXNpdC9WaXNpdC4vc3JjL2FwcC9wYWdlcy91c2VyLXNldHRpbmdzL3VzZXItc2V0dGluZ3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy91c2VyLXNldHRpbmdzL3VzZXItc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjtBRENFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSjtBREVFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0FKO0FESUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNERjtBRElBO0VBS0Usa0JBQUE7QUNMRjtBRENFO0VBQ0UsaUJBQUE7QUNDSjtBREtBO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFFQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNIRjtBRE1BO0VBQ0UsaUJBQUE7QUNIRjtBRFVBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUNQRjtBRFVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDUEY7QURTRTtFQUNFLFlBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItc2V0dGluZ3MvdXNlci1zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcblxuICBoMSB7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICBoMyB7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG5cbi5yb3VuZGVkSW5wdXQge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcbiAgLS1iYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ibG9jazogMTAlO1xufVxuXG4ubmFtZVJvdyB7XG4gIC5yb3VuZGVkSW5wdXQge1xuICAgIHBhZGRpbmctYmxvY2s6IDAlO1xuICB9XG5cbiAgcGFkZGluZy1ibG9jazogMTAlO1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZjtcbiAgLS1yaXBwbGUtY29sb3I6ICNmZmY7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmO1xuICAtLWNvbG9yLWZvY3VzZWQ6ICNmZmY7XG4gIGNvbG9yOiAjMTI4QzdFO1xuXG4gIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG59XG5cbi5ib3R0b21Sb3cge1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuLy8gLmJ1dHRvbi1kaXZ7XG4vLyAgIHBhZGRpbmctdG9wOiAxMCU7XG4vLyB9XG5cbmlvbi1hdmF0YXIge1xuICB3aWR0aDogMTEwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDExMCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemVcbiAgbWF4LWhlaWdodDogODBweCAhaW1wb3J0YW50OyAvL2FueSBzaXplIFxufVxuXG4ubG9nb3V0IHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgY29sb3I6IHdoaXRlO1xuXG4gIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuaW9uLWNvbnRlbnQgaDEge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24tY29udGVudCBoMyB7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucm91bmRlZElucHV0IHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XG4gIC0tYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYmxvY2s6IDEwJTtcbn1cblxuLm5hbWVSb3cge1xuICBwYWRkaW5nLWJsb2NrOiAxMCU7XG59XG4ubmFtZVJvdyAucm91bmRlZElucHV0IHtcbiAgcGFkZGluZy1ibG9jazogMCU7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmO1xuICAtLXJpcHBsZS1jb2xvcjogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmY7XG4gIC0tY29sb3ItZm9jdXNlZDogI2ZmZjtcbiAgY29sb3I6ICMxMjhDN0U7XG4gIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG59XG5cbi5ib3R0b21Sb3cge1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIHdpZHRoOiAxMTAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTEwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogODBweCAhaW1wb3J0YW50O1xufVxuXG4ubG9nb3V0IHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmxvZ291dCBhIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSettingsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-settings',
          templateUrl: './user-settings.page.html',
          styleUrls: ['./user-settings.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_backend_clients__WEBPACK_IMPORTED_MODULE_6__["AccountsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/user-timeline/user-timeline-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/user-timeline/user-timeline-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: UserTimelinePageRoutingModule */

  /***/
  function srcAppPagesUserTimelineUserTimelineRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserTimelinePageRoutingModule", function () {
      return UserTimelinePageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _user_timeline_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-timeline.page */
    "./src/app/pages/user-timeline/user-timeline.page.ts");

    var routes = [{
      path: '',
      component: _user_timeline_page__WEBPACK_IMPORTED_MODULE_2__["UserTimelinePage"]
    }];

    var UserTimelinePageRoutingModule = function UserTimelinePageRoutingModule() {
      _classCallCheck(this, UserTimelinePageRoutingModule);
    };

    UserTimelinePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserTimelinePageRoutingModule
    });
    UserTimelinePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserTimelinePageRoutingModule_Factory(t) {
        return new (t || UserTimelinePageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserTimelinePageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserTimelinePageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/user-timeline/user-timeline.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/user-timeline/user-timeline.module.ts ***!
    \*************************************************************/

  /*! exports provided: UserTimelinePageModule */

  /***/
  function srcAppPagesUserTimelineUserTimelineModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserTimelinePageModule", function () {
      return UserTimelinePageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _user_timeline_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-timeline-routing.module */
    "./src/app/pages/user-timeline/user-timeline-routing.module.ts");
    /* harmony import */


    var _user_timeline_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-timeline.page */
    "./src/app/pages/user-timeline/user-timeline.page.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var UserTimelinePageModule = function UserTimelinePageModule() {
      _classCallCheck(this, UserTimelinePageModule);
    };

    UserTimelinePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserTimelinePageModule
    });
    UserTimelinePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserTimelinePageModule_Factory(t) {
        return new (t || UserTimelinePageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _user_timeline_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserTimelinePageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserTimelinePageModule, {
        declarations: [_user_timeline_page__WEBPACK_IMPORTED_MODULE_5__["UserTimelinePage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _user_timeline_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserTimelinePageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserTimelinePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _user_timeline_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserTimelinePageRoutingModule"]],
          declarations: [_user_timeline_page__WEBPACK_IMPORTED_MODULE_5__["UserTimelinePage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/user-timeline/user-timeline.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/user-timeline/user-timeline.page.ts ***!
    \***********************************************************/

  /*! exports provided: UserTimelinePage */

  /***/
  function srcAppPagesUserTimelineUserTimelinePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserTimelinePage", function () {
      return UserTimelinePage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _modals_search_search_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../modals/search/search.page */
    "./src/app/pages/modals/search/search.page.ts");
    /* harmony import */


    var _modals_map_filter_map_filter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../modals/map-filter/map-filter.page */
    "./src/app/pages/modals/map-filter/map-filter.page.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _backend_clients_api_accounts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../backend/clients/api/accounts.service */
    "./src/app/backend/clients/api/accounts.service.ts");
    /* harmony import */


    var src_app_backend_clients__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/backend/clients */
    "./src/app/backend/clients/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _components_post_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/post/post.component */
    "./src/app/components/post/post.component.ts");

    var UserTimelinePage = /*#__PURE__*/function () {
      function UserTimelinePage(modalController, loadingController, accountService, postService, navParams, zone, router) {
        _classCallCheck(this, UserTimelinePage);

        this.modalController = modalController;
        this.loadingController = loadingController;
        this.accountService = accountService;
        this.postService = postService;
        this.navParams = navParams;
        this.zone = zone;
        this.router = router;
        this.posts = [];
        this.pageNumber = 1;
        this.morePages = false;
        this.filter = '';
        this.selectedUserId = '';
      }

      _createClass(UserTimelinePage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this28 = this;

          this.selectedUserId = this.navParams.data.userId;
          this.postService.postsPageGet(this.pageNumber, this.filter, this.selectedUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function (res) {
            _this28.morePages = res.hasNextPage;
            _this28.pageNumber = res.pageIndex;
            _this28.posts = res.items;
          });
        }
      }, {
        key: "getPosts",
        value: function getPosts(event) {
          var _this29 = this;

          if (this.morePages) {
            this.postService.postsPageGet(this.pageNumber + 1, this.filter, this.selectedUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function (res) {
              _this29.morePages = res.hasNextPage;
              _this29.pageNumber = res.pageIndex; // TODO The posts shouldn't be overwritten here but rather appended... not working though

              if (_this29.posts.length === 0) {
                _this29.posts = [];
              } else {
                var oldposts = _this29.posts;
                _this29.posts = [];
                var oldResLen = oldposts.length;

                for (var i = 0; i < oldResLen; i++) {
                  _this29.posts.push(oldposts[i]);
                }
              }

              var resLen = res.items.length;

              for (var _i = 0; _i < resLen; _i++) {
                _this29.posts.push(res.items[_i]);
              } // this.posts = res.items;


              if (event) {
                event.target.complete();
              }
            });
          } else {
            this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
          }
        }
      }, {
        key: "refreshPosts",
        value: function refreshPosts(event) {
          var _this30 = this;

          this.postService.postsPageGet(1, this.filter, this.selectedUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function (res) {
            _this30.morePages = res.hasNextPage;
            _this30.pageNumber = res.pageIndex;
            _this30.posts = res.items;

            if (event) {
              event.target.complete();
            }
          });
        }
      }, {
        key: "presentSearchModal",
        value: function () {
          var _presentSearchModal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
            var modal;
            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    _context28.next = 2;
                    return this.modalController.create({
                      component: _modals_search_search_page__WEBPACK_IMPORTED_MODULE_2__["SearchPage"],
                      componentProps: {},
                      showBackdrop: true,
                      cssClass: 'search-modal'
                    });

                  case 2:
                    modal = _context28.sent;
                    _context28.next = 5;
                    return modal.present();

                  case 5:
                    return _context28.abrupt("return", _context28.sent);

                  case 6:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28, this);
          }));

          function presentSearchModal() {
            return _presentSearchModal.apply(this, arguments);
          }

          return presentSearchModal;
        }()
      }, {
        key: "openProfile",
        value: function openProfile() {
          var _this31 = this;

          var navigationExtras = {
            replaceUrl: true,
            skipLocationChange: true,
            state: {
              userId: this.accountService.getUserId()
            }
          };
          this.zone.run(function () {
            _this31.router.navigateByUrl('/user-profile', navigationExtras);
          });
        }
      }, {
        key: "presentMapFilter",
        value: function () {
          var _presentMapFilter = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
            var _this32 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee30$(_context30) {
              while (1) {
                switch (_context30.prev = _context30.next) {
                  case 0:
                    _context30.next = 2;
                    return this.modalController.create({
                      component: _modals_map_filter_map_filter_page__WEBPACK_IMPORTED_MODULE_3__["MapFilterPage"],
                      showBackdrop: true,
                      cssClass: 'filter-modal',
                      componentProps: {
                        filter: this.filter
                      }
                    });

                  case 2:
                    modal = _context30.sent;
                    modal.onDidDismiss().then( /*#__PURE__*/function () {
                      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29(dataReturned) {
                        return regeneratorRuntime.wrap(function _callee29$(_context29) {
                          while (1) {
                            switch (_context29.prev = _context29.next) {
                              case 0:
                                if (!(dataReturned !== null)) {
                                  _context29.next = 5;
                                  break;
                                }

                                _this32.filter = dataReturned.data;

                                _this32.refreshPosts();

                                _context29.next = 5;
                                return _this32.loadingController.dismiss();

                              case 5:
                              case "end":
                                return _context29.stop();
                            }
                          }
                        }, _callee29);
                      }));

                      return function (_x11) {
                        return _ref4.apply(this, arguments);
                      };
                    }());
                    _context30.next = 6;
                    return modal.present();

                  case 6:
                    return _context30.abrupt("return", _context30.sent);

                  case 7:
                  case "end":
                    return _context30.stop();
                }
              }
            }, _callee30, this);
          }));

          function presentMapFilter() {
            return _presentMapFilter.apply(this, arguments);
          }

          return presentMapFilter;
        }()
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalController.dismiss();
        }
      }]);

      return UserTimelinePage;
    }();

    UserTimelinePage.ɵfac = function UserTimelinePage_Factory(t) {
      return new (t || UserTimelinePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_backend_clients_api_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backend_clients__WEBPACK_IMPORTED_MODULE_6__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    UserTimelinePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserTimelinePage,
      selectors: [["user-timeline"]],
      viewQuery: function UserTimelinePage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScroll"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.infiniteScroll = _t.first);
        }
      },
      decls: 18,
      vars: 2,
      consts: [[1, "ion-no-border", 2, "background-color", "#128c7e"], ["color", "#128C7E", 1, "ion-no-border"], ["slot", "start"], ["slot", "start", "large", "", 3, "click"], ["name", "close", 1, "close-icon"], ["slot", "end"], ["slot", "end", 3, "click"], ["src", "../../../assets/UI/search-outline.svg", 1, "img-center"], ["color", "light", 3, "fullscreen"], ["slot", "fixed", 3, "ionRefresh"], ["refresherRef", ""], ["pullingText", "Pull to refresh", "refreshingSpinner", "circles", "refreshingText", "Refreshing..."], [3, "posts"], ["threshold", "100px", 3, "ionInfinite"], ["loadingSpinner", "circles", "loadingText", "Getting more posts..."], ["vertical", "bottom", 1, "map-filter-fab"], ["fill", "clear", 3, "click"], ["src", "../../assets/UI/FilterClosed.svg"]],
      template: function UserTimelinePage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserTimelinePage_Template_ion_button_click_3_listener() {
            return ctx.dismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-buttons", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserTimelinePage_Template_ion_button_click_6_listener() {
            return ctx.presentSearchModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-content", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-refresher", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionRefresh", function UserTimelinePage_Template_ion_refresher_ionRefresh_9_listener($event) {
            return ctx.refreshPosts($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ion-refresher-content", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "post", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-infinite-scroll", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionInfinite", function UserTimelinePage_Template_ion_infinite_scroll_ionInfinite_13_listener($event) {
            return ctx.getPosts($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ion-infinite-scroll-content", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-fab", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserTimelinePage_Template_ion_button_click_16_listener() {
            return ctx.presentMapFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullscreen", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("posts", ctx.posts);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRefresherContent"], _components_post_post_component__WEBPACK_IMPORTED_MODULE_8__["PostComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScrollContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFab"]],
      styles: [".close-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: white;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: translucent;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --min-height: 2% !important;\n  --padding-top: 10px;\n}\n\n.circle-pic[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 35px;\n  border-radius: 50%;\n}\n\n.center[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\n.post-pic[_ngcontent-%COMP%] {\n  --border-radius: 75% ;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: normal;\n  padding-bottom: 5px;\n}\n\n.header-grid[_ngcontent-%COMP%] {\n  --ion-grid-columns: 3;\n  --ion-grid-column-padding: 1px;\n  --ion-grid-padding: 1px;\n}\n\n.map-filter[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-self: center;\n}\n\n.map-filter-fab[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-self: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: none;\n  background-color: inherit;\n  font-size: 16px;\n  display: inline-block;\n}\n\n.comment[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  --padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CcmVuZGFuR2liZXJzb24vRG9jdW1lbnRzL0Rldi9WaXNpdC9WaXNpdC4vc3JjL2FwcC9wYWdlcy91c2VyLXRpbWVsaW5lL3VzZXItdGltZWxpbmUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy91c2VyLXRpbWVsaW5lL3VzZXItdGltZWxpbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURTQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ05GOztBRFNBO0VBQ0Usb0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FDTkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VyLXRpbWVsaW5lL3VzZXItdGltZWxpbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tbWluLWhlaWdodDogMiUgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmNpcmNsZS1waWMge1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wb3N0LXBpYyB7XG4gIC0tYm9yZGVyLXJhZGl1czogNzUlXG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uaGVhZGVyLWdyaWQge1xuICAtLWlvbi1ncmlkLWNvbHVtbnM6IDM7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDFweDtcbiAgLS1pb24tZ3JpZC1wYWRkaW5nOiAxcHg7XG59XG5cbi5tYXAtZmlsdGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLm1hcC1maWx0ZXItZmFiIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLy8gLmJ1dHRvbjpob3ZlciB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMyRUU1OUQ7XG4vLyAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDIwcHggcmdiYSg0NiwgMjI5LCAxNTcsIDAuNCk7XG4vLyAgIGNvbG9yOiAjZmZmO1xuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTdweCk7XG4vLyB9XG5cbi5idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY29tbWVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbn0iLCIuY2xvc2UtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1taW4taGVpZ2h0OiAyJSAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uY2lyY2xlLXBpYyB7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jZW50ZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnBvc3QtcGljIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA3NSUgO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmhlYWRlci1ncmlkIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiAzO1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAxcHg7XG4gIC0taW9uLWdyaWQtcGFkZGluZzogMXB4O1xufVxuXG4ubWFwLWZpbHRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5tYXAtZmlsdGVyLWZhYiB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY29tbWVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserTimelinePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'user-timeline',
          templateUrl: './user-timeline.page.html',
          styleUrls: ['./user-timeline.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]
        }, {
          type: _backend_clients_api_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"]
        }, {
          type: src_app_backend_clients__WEBPACK_IMPORTED_MODULE_6__["PostService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, {
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScroll"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pipes/date-ago.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/pipes/date-ago.pipe.ts ***!
    \****************************************/

  /*! exports provided: DateAgoPipe */

  /***/
  function srcAppPipesDateAgoPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateAgoPipe", function () {
      return DateAgoPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DateAgoPipe = /*#__PURE__*/function () {
      function DateAgoPipe() {
        _classCallCheck(this, DateAgoPipe);
      }

      _createClass(DateAgoPipe, [{
        key: "transform",
        value: function transform(value, args) {
          if (value) {
            var now = new Date().toUTCString();
            var seconds = Math.abs((new Date(now).getTime() - new Date(value + 'Z').getTime()) / 1000); // appending Z lets the date know its UTC

            if (seconds < 29) {
              // less than 30 seconds ago will show as 'Just now'
              return 'Just now';
            }

            var intervals = {
              day: 86400,
              hour: 3600,
              minute: 60,
              second: 1
            };
            var counter; // tslint:disable-next-line: forin

            for (var i in intervals) {
              counter = Math.floor(seconds / intervals[i]);

              if (Math.floor(seconds / 86400) > 1) {
                var date = new Date(value);
                var month = date.toLocaleString('default', {
                  month: 'long'
                });
                return "".concat(month, " ").concat(date.getDate());
              }

              if (counter > 0) {
                if (counter === 1) {
                  return counter + ' ' + i + ' ago'; // singular (1 hour ago)
                } else {
                  return counter + ' ' + i + 's ago'; // plural (2 hours ago)
                }
              }
            }
          }

          return value;
        }
      }]);

      return DateAgoPipe;
    }();

    DateAgoPipe.ɵfac = function DateAgoPipe_Factory(t) {
      return new (t || DateAgoPipe)();
    };

    DateAgoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "dateAgo",
      type: DateAgoPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateAgoPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'dateAgo'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/modal.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/modal.service.ts ***!
    \*******************************************/

  /*! exports provided: ModalService */

  /***/
  function srcAppServicesModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalService", function () {
      return ModalService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ModalService = /*#__PURE__*/function () {
      function ModalService() {
        _classCallCheck(this, ModalService);

        this.modals = [];
      }

      _createClass(ModalService, [{
        key: "add",
        value: function add(modal) {
          this.modals.push(modal);
        }
      }, {
        key: "remove",
        value: function remove(id) {
          this.modals = this.modals.filter(function (x) {
            return x.id !== id;
          });
        }
      }, {
        key: "open",
        value: function open(id) {
          var modal = this.modals.filter(function (x) {
            return x.id === id;
          })[0];
          modal.present();
        }
      }, {
        key: "close",
        value: function close(id) {
          var modal = this.modals.filter(function (x) {
            return x.id === id;
          })[0];
          modal.close();
        }
      }]);

      return ModalService;
    }();

    ModalService.ɵfac = function ModalService_Factory(t) {
      return new (t || ModalService)();
    };

    ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ModalService,
      factory: ModalService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _components_post_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../components/post/post.component */
    "./src/app/components/post/post.component.ts");
    /* harmony import */


    var _components_card_flip_card_flip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/card-flip/card-flip.component */
    "./src/app/components/card-flip/card-flip.component.ts");
    /* harmony import */


    var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../pipes/date-ago.pipe */
    "./src/app/pipes/date-ago.pipe.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_components_post_post_component__WEBPACK_IMPORTED_MODULE_3__["PostComponent"], _components_card_flip_card_flip_component__WEBPACK_IMPORTED_MODULE_4__["CardFlipComponent"], _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_5__["DateAgoPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]],
        exports: [_components_post_post_component__WEBPACK_IMPORTED_MODULE_3__["PostComponent"], _components_card_flip_card_flip_component__WEBPACK_IMPORTED_MODULE_4__["CardFlipComponent"], _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_5__["DateAgoPipe"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]],
          declarations: [_components_post_post_component__WEBPACK_IMPORTED_MODULE_3__["PostComponent"], _components_card_flip_card_flip_component__WEBPACK_IMPORTED_MODULE_4__["CardFlipComponent"], _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_5__["DateAgoPipe"]],
          providers: [],
          exports: [_components_post_post_component__WEBPACK_IMPORTED_MODULE_3__["PostComponent"], _components_card_flip_card_flip_component__WEBPACK_IMPORTED_MODULE_4__["CardFlipComponent"], _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_5__["DateAgoPipe"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment, BASE_PATH */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BASE_PATH", function () {
      return BASE_PATH;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebaseConfig: {
        apiKey: 'AIzaSyDpx-hQIOXVBbNfGRaFQQTx-vzVwKwpA4Y',
        authDomain: 'visit-4efb7.firebaseapp.com',
        projectId: 'visit-4efb7',
        storageBucket: 'visit-4efb7.appspot.com',
        messagingSenderId: '227659578598',
        appId: '1:227659578598:web:94cdae4520ab27359d8f27',
        measurementId: 'G-P6HNG7BB8S'
      }
    };
    var BASE_PATH = 'https://visit-service.azurewebsites.net';
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/pwa-elements/loader */
    "./node_modules/@ionic/pwa-elements/loader/index.es2017.mjs");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    }); // Call the element loader after the platform has been bootstrapped


    Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__["defineCustomElements"])(window);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/BrendanGiberson/Documents/Dev/Visit/Visit./src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map