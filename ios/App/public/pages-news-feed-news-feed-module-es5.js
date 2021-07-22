function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-news-feed-news-feed-module"], {
  /***/
  "./src/app/pages/news-feed/news-feed.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/news-feed/news-feed.module.ts ***!
    \*****************************************************/

  /*! exports provided: NewsFeedPageModule */

  /***/
  function srcAppPagesNewsFeedNewsFeedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsFeedPageModule", function () {
      return NewsFeedPageModule;
    });
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _news_feed_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./news-feed.page */
    "./src/app/pages/news-feed/news-feed.page.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var NewsFeedPageModule = function NewsFeedPageModule() {
      _classCallCheck(this, NewsFeedPageModule);
    };

    NewsFeedPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: NewsFeedPageModule
    });
    NewsFeedPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function NewsFeedPageModule_Factory(t) {
        return new (t || NewsFeedPageModule)();
      },
      imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: '',
        component: _news_feed_page__WEBPACK_IMPORTED_MODULE_5__["NewsFeedPage"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NewsFeedPageModule, {
        declarations: [_news_feed_page__WEBPACK_IMPORTED_MODULE_5__["NewsFeedPage"]],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NewsFeedPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _news_feed_page__WEBPACK_IMPORTED_MODULE_5__["NewsFeedPage"]
          }])],
          declarations: [_news_feed_page__WEBPACK_IMPORTED_MODULE_5__["NewsFeedPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/news-feed/news-feed.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/news-feed/news-feed.page.ts ***!
    \***************************************************/

  /*! exports provided: NewsFeedPage */

  /***/
  function srcAppPagesNewsFeedNewsFeedPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsFeedPage", function () {
      return NewsFeedPage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _components_post_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/post/post.component */
    "./src/app/components/post/post.component.ts");

    var NewsFeedPage = /*#__PURE__*/function () {
      function NewsFeedPage(storage, modalController, zone, cd, loadingController, accountService, postService, router) {
        var _this = this;

        _classCallCheck(this, NewsFeedPage);

        this.storage = storage;
        this.modalController = modalController;
        this.zone = zone;
        this.cd = cd;
        this.loadingController = loadingController;
        this.accountService = accountService;
        this.postService = postService;
        this.router = router;
        this.posts = [];
        this.pageNumber = 1;
        this.morePages = false;
        this.filter = '';
        this.selectedUserId = '';
        this.storage.get('image').then(function (val) {
          if (val.avi) {
            _this.image = val.avi;
          } else {
            _this.image = '../../../assets/defaultuser.png';
          }
        });
      }

      _createClass(NewsFeedPage, [{
        key: "ionViewWillEnter",
        value: function () {
          var _ionViewWillEnter = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.loadingController.create();

                  case 2:
                    loading = _context3.sent;
                    _context3.next = 5;
                    return loading.present();

                  case 5:
                    this.postService.postsPageGet(this.pageNumber, this.filter, this.selectedUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe( /*#__PURE__*/function () {
                      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _this2.morePages = res.hasNextPage;
                                _this2.pageNumber = res.pageIndex;
                                _this2.posts = res.items;

                                _this2.refresh(); // see if there are more than one page if so get them


                                _context.next = 6;
                                return _this2.getPosts(1);

                              case 6:
                                loading.dismiss();

                              case 7:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      }));

                      return function (_x) {
                        return _ref.apply(this, arguments);
                      };
                    }(), /*#__PURE__*/function () {
                      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(err) {
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                if (!(err.status === 401)) {
                                  _context2.next = 3;
                                  break;
                                }

                                _context2.next = 3;
                                return _this2.accountService.logout();

                              case 3:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2);
                      }));

                      return function (_x2) {
                        return _ref2.apply(this, arguments);
                      };
                    }());

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          function ionViewWillEnter() {
            return _ionViewWillEnter.apply(this, arguments);
          }

          return ionViewWillEnter;
        }()
      }, {
        key: "getPosts",
        value: function () {
          var _getPosts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(incr, event) {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    return _context5.abrupt("return", new Promise(function (resolve) {
                      if (_this3.morePages) {
                        _this3.postService.postsPageGet(_this3.pageNumber + incr, _this3.filter, _this3.selectedUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function (res) {
                          _this3.morePages = res.hasNextPage;
                          _this3.pageNumber = res.pageIndex;

                          if (_this3.posts.length === 0) {
                            _this3.posts = [];
                          } else {
                            var oldposts = _this3.posts;
                            _this3.posts = [];
                            var oldResLen = oldposts.length;

                            for (var i = 0; i < oldResLen; i++) {
                              _this3.posts.push(oldposts[i]);
                            }
                          }

                          var resLen = res.items.length;

                          for (var _i = 0; _i < resLen; _i++) {
                            _this3.posts.push(res.items[_i]);
                          }

                          if (event) {
                            event.target.complete();
                          }

                          _this3.refresh();

                          resolve('done');
                        }, /*#__PURE__*/function () {
                          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(err) {
                            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                              while (1) {
                                switch (_context4.prev = _context4.next) {
                                  case 0:
                                    console.log(err);

                                    if (!(err.status === 401)) {
                                      _context4.next = 5;
                                      break;
                                    }

                                    _context4.next = 4;
                                    return _this3.accountService.logout();

                                  case 4:
                                    resolve('done');

                                  case 5:
                                  case "end":
                                    return _context4.stop();
                                }
                              }
                            }, _callee4);
                          }));

                          return function (_x5) {
                            return _ref3.apply(this, arguments);
                          };
                        }());
                      } else {
                        resolve('done');
                        _this3.infiniteScroll.disabled = !_this3.infiniteScroll.disabled;
                      }
                    }));

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));

          function getPosts(_x3, _x4) {
            return _getPosts.apply(this, arguments);
          }

          return getPosts;
        }()
      }, {
        key: "refreshPosts",
        value: function refreshPosts(event) {
          var _this4 = this;

          this.postService.postsPageGet(1, this.filter, this.selectedUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function (res) {
            _this4.morePages = res.hasNextPage;
            _this4.pageNumber = res.pageIndex;
            _this4.posts = res.items;

            if (event) {
              event.target.complete();
            }
          }, /*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(err) {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      console.log(err);

                      if (!(err.status === 401)) {
                        _context6.next = 4;
                        break;
                      }

                      _context6.next = 4;
                      return _this4.accountService.logout();

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));

            return function (_x6) {
              return _ref4.apply(this, arguments);
            };
          }());
        }
      }, {
        key: "presentSearchModal",
        value: function () {
          var _presentSearchModal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var modal;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.modalController.create({
                      component: _modals_search_search_page__WEBPACK_IMPORTED_MODULE_2__["SearchPage"],
                      componentProps: {},
                      showBackdrop: true,
                      cssClass: 'search-modal'
                    });

                  case 2:
                    modal = _context7.sent;
                    _context7.next = 5;
                    return modal.present();

                  case 5:
                    return _context7.abrupt("return", _context7.sent);

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));

          function presentSearchModal() {
            return _presentSearchModal.apply(this, arguments);
          }

          return presentSearchModal;
        }()
      }, {
        key: "openProfile",
        value: function openProfile() {
          var _this5 = this;

          var navigationExtras = {
            replaceUrl: true,
            skipLocationChange: true,
            state: {
              userId: this.accountService.getUserId()
            }
          };
          this.zone.run(function () {
            _this5.router.navigateByUrl('/user-profile', navigationExtras);
          });
        }
      }, {
        key: "presentMapFilter",
        value: function () {
          var _presentMapFilter = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this6 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.modalController.create({
                      component: _modals_map_filter_map_filter_page__WEBPACK_IMPORTED_MODULE_3__["MapFilterPage"],
                      showBackdrop: true,
                      cssClass: 'filter-modal',
                      componentProps: {
                        filter: this.filter
                      }
                    });

                  case 2:
                    modal = _context9.sent;
                    modal.onDidDismiss().then( /*#__PURE__*/function () {
                      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(dataReturned) {
                        return regeneratorRuntime.wrap(function _callee8$(_context8) {
                          while (1) {
                            switch (_context8.prev = _context8.next) {
                              case 0:
                                if (!(dataReturned !== null)) {
                                  _context8.next = 5;
                                  break;
                                }

                                _this6.filter = dataReturned.data;

                                _this6.refreshPosts();

                                _context8.next = 5;
                                return _this6.loadingController.dismiss();

                              case 5:
                              case "end":
                                return _context8.stop();
                            }
                          }
                        }, _callee8);
                      }));

                      return function (_x7) {
                        return _ref5.apply(this, arguments);
                      };
                    }());
                    _context9.next = 6;
                    return modal.present();

                  case 6:
                    return _context9.abrupt("return", _context9.sent);

                  case 7:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));

          function presentMapFilter() {
            return _presentMapFilter.apply(this, arguments);
          }

          return presentMapFilter;
        }()
      }, {
        key: "refresh",
        value: function refresh() {
          this.cd.detectChanges();
        }
      }]);

      return NewsFeedPage;
    }();

    NewsFeedPage.ɵfac = function NewsFeedPage_Factory(t) {
      return new (t || NewsFeedPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_backend_clients_api_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backend_clients__WEBPACK_IMPORTED_MODULE_6__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    NewsFeedPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewsFeedPage,
      selectors: [["news-feed"]],
      viewQuery: function NewsFeedPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScroll"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.infiniteScroll = _t.first);
        }
      },
      decls: 25,
      vars: 3,
      consts: [[2, "background-color", "#128c7e"], ["color", "#128C7E"], [1, "header-grid"], [1, "ion-align-items-baseline"], [1, "ion-justify-content-start"], [1, "ion-justify-content-start", "circle-pic", 3, "click"], [3, "src"], [1, "ion-justify-self-bottom"], ["height", "60px", "width", "120px", "src", "../../assets/logos/whiteLogo.png"], [1, "ion-justify-content-end"], [1, "ion-justify-content-end", 3, "click"], ["src", "../../assets/UI/search-outline.svg", 1, "img-center"], ["color", "light", 3, "fullscreen"], ["slot", "fixed", 3, "ionRefresh"], ["refresherRef", ""], ["pullingText", "Pull to refresh", "refreshingSpinner", "circles", "refreshingText", "Refreshing..."], [3, "posts"], ["threshold", "100px", 3, "ionInfinite"], ["loadingSpinner", "circles", "loadingText", "Getting more posts..."], ["vertical", "bottom", 1, "map-filter-fab"], ["fill", "clear", 3, "click"], ["src", "../../assets/UI/FilterClosed.svg"]],
      template: function NewsFeedPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-grid", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-row", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-col", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-buttons", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsFeedPage_Template_ion_button_click_6_listener() {
            return ctx.openProfile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-avatar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-col", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-buttons", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsFeedPage_Template_ion_button_click_13_listener() {
            return ctx.presentSearchModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-content", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-refresher", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionRefresh", function NewsFeedPage_Template_ion_refresher_ionRefresh_16_listener($event) {
            return ctx.refreshPosts($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ion-refresher-content", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "post", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-infinite-scroll", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionInfinite", function NewsFeedPage_Template_ion_infinite_scroll_ionInfinite_20_listener($event) {
            return ctx.getPosts(1, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "ion-infinite-scroll-content", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-fab", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsFeedPage_Template_ion_button_click_23_listener() {
            return ctx.presentMapFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullscreen", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("posts", ctx.posts);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRefresherContent"], _components_post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScrollContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFab"]],
      styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: translucent;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --min-height: 2% !important;\n  --padding-top: 10px;\n}\n\n.circle-pic[_ngcontent-%COMP%] {\n  width: 65px;\n  height: 50px;\n  border-radius: 50%;\n}\n\n.center[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\n.post-pic[_ngcontent-%COMP%] {\n  --border-radius: 75% ;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: normal;\n  padding-bottom: 5px;\n}\n\n.header-grid[_ngcontent-%COMP%] {\n  --ion-grid-columns: 3;\n  --ion-grid-column-padding: 1px;\n  --ion-grid-padding: 1px;\n}\n\n.map-filter[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-self: center;\n}\n\n.map-filter-fab[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-self: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: none;\n  background-color: inherit;\n  font-size: 16px;\n  display: inline-block;\n}\n\n.comment[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  --padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CcmVuZGFuR2liZXJzb24vRG9jdW1lbnRzL0Rldi9WaXNpdC9WaXNpdC4vc3JjL2FwcC9wYWdlcy9uZXdzLWZlZWQvbmV3cy1mZWVkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbmV3cy1mZWVkL25ld3MtZmVlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEU0E7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNORjs7QURTQTtFQUNFLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBQ05GIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmV3cy1mZWVkL25ld3MtZmVlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tbWluLWhlaWdodDogMiUgIWltcG9ydGFudDtcclxuICAtLXBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY2lyY2xlLXBpYyB7XHJcbiAgd2lkdGg6IDY1cHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucG9zdC1waWMge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNzUlXHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWdyaWQge1xyXG4gIC0taW9uLWdyaWQtY29sdW1uczogMztcclxuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAxcHg7XHJcbiAgLS1pb24tZ3JpZC1wYWRkaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5tYXAtZmlsdGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXAtZmlsdGVyLWZhYiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4vLyAuYnV0dG9uOmhvdmVyIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkVFNTlEO1xyXG4vLyAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDIwcHggcmdiYSg0NiwgMjI5LCAxNTcsIDAuNCk7XHJcbi8vICAgY29sb3I6ICNmZmY7XHJcbi8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03cHgpO1xyXG4vLyB9XHJcblxyXG4uYnRuIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY29tbWVudCB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLW1pbi1oZWlnaHQ6IDIlICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5jaXJjbGUtcGljIHtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNTBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNlbnRlciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucG9zdC1waWMge1xuICAtLWJvcmRlci1yYWRpdXM6IDc1JSA7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uaGVhZGVyLWdyaWQge1xuICAtLWlvbi1ncmlkLWNvbHVtbnM6IDM7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDFweDtcbiAgLS1pb24tZ3JpZC1wYWRkaW5nOiAxcHg7XG59XG5cbi5tYXAtZmlsdGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLm1hcC1maWx0ZXItZmFiIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jb21tZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsFeedPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'news-feed',
          templateUrl: 'news-feed.page.html',
          styleUrls: ['news-feed.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]
        }, {
          type: _backend_clients_api_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"]
        }, {
          type: src_app_backend_clients__WEBPACK_IMPORTED_MODULE_6__["PostService"]
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

  }
}]);
//# sourceMappingURL=pages-news-feed-news-feed-module-es5.js.map