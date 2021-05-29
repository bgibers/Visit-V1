function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-comments-comments-module"], {
  /***/
  "./src/app/pages/comments/comments-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/comments/comments-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: CommentsPageRoutingModule */

  /***/
  function srcAppPagesCommentsCommentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsPageRoutingModule", function () {
      return CommentsPageRoutingModule;
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


    var _comments_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./comments.page */
    "./src/app/pages/comments/comments.page.ts");

    var routes = [{
      path: '',
      component: _comments_page__WEBPACK_IMPORTED_MODULE_2__["CommentsPage"]
    }];

    var CommentsPageRoutingModule = function CommentsPageRoutingModule() {
      _classCallCheck(this, CommentsPageRoutingModule);
    };

    CommentsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CommentsPageRoutingModule
    });
    CommentsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CommentsPageRoutingModule_Factory(t) {
        return new (t || CommentsPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommentsPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsPageRoutingModule, [{
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
  "./src/app/pages/comments/comments.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/comments/comments.module.ts ***!
    \***************************************************/

  /*! exports provided: CommentsPageModule */

  /***/
  function srcAppPagesCommentsCommentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsPageModule", function () {
      return CommentsPageModule;
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


    var _comments_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./comments-routing.module */
    "./src/app/pages/comments/comments-routing.module.ts");
    /* harmony import */


    var _comments_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./comments.page */
    "./src/app/pages/comments/comments.page.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var CommentsPageModule = function CommentsPageModule() {
      _classCallCheck(this, CommentsPageModule);
    };

    CommentsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CommentsPageModule
    });
    CommentsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CommentsPageModule_Factory(t) {
        return new (t || CommentsPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _comments_routing_module__WEBPACK_IMPORTED_MODULE_4__["CommentsPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommentsPageModule, {
        declarations: [_comments_page__WEBPACK_IMPORTED_MODULE_5__["CommentsPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _comments_routing_module__WEBPACK_IMPORTED_MODULE_4__["CommentsPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _comments_routing_module__WEBPACK_IMPORTED_MODULE_4__["CommentsPageRoutingModule"]],
          declarations: [_comments_page__WEBPACK_IMPORTED_MODULE_5__["CommentsPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/comments/comments.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/comments/comments.page.ts ***!
    \*************************************************/

  /*! exports provided: CommentsPage */

  /***/
  function srcAppPagesCommentsCommentsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsPage", function () {
      return CommentsPage;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/backend/clients */
    "./src/app/backend/clients/index.ts");
    /* harmony import */


    var _modals_search_search_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../modals/search/search.page */
    "./src/app/pages/modals/search/search.page.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../pipes/date-ago.pipe */
    "./src/app/pipes/date-ago.pipe.ts");

    function CommentsPage_h1_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No comments! Be the first! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CommentsPage_ion_item_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-grid", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-col", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-row", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-col", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-text", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "dateAgo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", comment_r2.user.avi, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", comment_r2.user.firstName, " ", comment_r2.user.lastname, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r2.comment, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 5, comment_r2.date));
      }
    }

    var CommentsPage = /*#__PURE__*/function () {
      function CommentsPage(modalController, router, route, postSvc, accountService) {
        var _this = this;

        _classCallCheck(this, CommentsPage);

        this.modalController = modalController;
        this.router = router;
        this.route = route;
        this.postSvc = postSvc;
        this.accountService = accountService;
        this.comments = [];
        this.newComments = [];
        this.postId = '';
        this.commentText = '';
        this.route.queryParams.subscribe(function (params) {
          if (_this.router.getCurrentNavigation().extras.state) {
            _this.postId = _this.router.getCurrentNavigation().extras.state.postId;
          }
        });
      }

      _createClass(CommentsPage, [{
        key: "myFunc",
        value: function myFunc() {
          return {
            count: 1,
            data: {
              id: 1
            }
          };
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userId = this.accountService.getUserId();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getComments();
        }
      }, {
        key: "getComments",
        value: function getComments() {
          var _this2 = this;

          // todo fix this. the list is overwriting
          this.postSvc.postsCommentsGetPostIdGet(this.postId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (res) {
            if (_this2.comments.length === 0) {
              _this2.comments = [];
            } else {
              _this2.comments = []; // this.newComments = [];
              // console.log(this.comments);
              // let oldResLen = oldComments.length;
              //   for (let i = 0; i < oldResLen; i++) {
              //     console.log(i);
              //     this.comments.push(oldComments[i]);
              //     this.newComments.push(oldComments[i]);
              //   }
            }

            var resLen = res.length;

            for (var i = 0; i < resLen; i++) {
              console.log(i);

              _this2.comments.push(res[i]);
            } // this.comments = res;

          });
        }
      }, {
        key: "commentOnPost",
        value: function commentOnPost() {
          var _this3 = this;

          var comment = {
            comment: this.commentText
          };
          this.postSvc.postsCommentPostIdPost(this.postId, comment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (res) {
            // todo handle error. refresh comments after new posted
            _this3.getComments();
          });
          this.commentText = '';
        }
      }, {
        key: "backToFeed",
        value: function backToFeed() {
          this.router.navigateByUrl('/news-feed');
        }
      }, {
        key: "openProfile",
        value: function openProfile() {
          var navigationExtras = {
            replaceUrl: true,
            skipLocationChange: true,
            state: {
              userId: this.accountService.getUserId()
            }
          };
          this.router.navigateByUrl('/user-profile', navigationExtras);
        }
      }, {
        key: "presentSearchModal",
        value: function () {
          var _presentSearchModal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _modals_search_search_page__WEBPACK_IMPORTED_MODULE_5__["SearchPage"],
                      componentProps: {},
                      showBackdrop: true,
                      cssClass: 'search-modal'
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function presentSearchModal() {
            return _presentSearchModal.apply(this, arguments);
          }

          return presentSearchModal;
        }()
      }, {
        key: "canSend",
        get: function get() {
          return this.commentText.length > 1 && this.commentText.length < 250;
        }
      }]);

      return CommentsPage;
    }();

    CommentsPage.ɵfac = function CommentsPage_Factory(t) {
      return new (t || CommentsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__["AccountsService"]));
    };

    CommentsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CommentsPage,
      selectors: [["comments"]],
      decls: 26,
      vars: 5,
      consts: [[2, "background-color", "#128c7e"], ["color", "#128C7E"], [1, "header-grid"], [1, "ion-align-items-baseline"], [1, "ion-justify-content-start"], [1, "ion-justify-content-start", "circle-pic", 3, "click"], ["src", "../../assets/defaultuser.png", 1, "img-center", "circle-pic"], [1, "ion-justify-self-bottom"], ["height", "60px", "width", "120px", "src", "../../assets/logos/whiteLogo.png"], [1, "ion-justify-content-end"], [1, "ion-justify-content-end", 3, "click"], ["src", "../../assets/UI/search-outline.svg", 1, "img-center"], [3, "scrollY"], ["class", "ion-text-center ion-justify-center", "style", "height: 100%; flex-direction: column", 4, "ngIf"], [3, "items"], ["class", "comment", 4, "virtualItem"], ["type", "text", "placeholder", "Comment", 3, "ngModel", "ngModelChange"], ["clear", "", "item-right", "", 3, "disabled", "click"], [1, "ion-text-center", "ion-justify-center", 2, "height", "100%", "flex-direction", "column"], [1, "comment"], [1, "comments-grid"], [1, "ion-align-self-center"], [1, "ion-align-items-center"], [1, "user-pic", "img-center", 3, "src"], ["size", "2.2"], ["color", "medium"]],
      template: function CommentsPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-grid", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-row", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-col", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-buttons", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentsPage_Template_ion_button_click_6_listener() {
            return ctx.openProfile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-col", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-col", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-buttons", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentsPage_Template_ion_button_click_12_listener() {
            return ctx.presentSearchModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-content", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CommentsPage_h1_15_Template, 2, 0, "h1", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-virtual-scroll", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CommentsPage_ion_item_20_Template, 19, 7, "ion-item", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CommentsPage_Template_ion_input_ngModelChange_23_listener($event) {
            return ctx.commentText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentsPage_Template_button_click_24_listener() {
            return ctx.commentOnPost();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollY", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comments.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.comments);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.commentText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.canSend);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonVirtualScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["VirtualItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonText"]],
      pipes: [_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_8__["DateAgoPipe"]],
      styles: [".user-pic[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\n.circle-pic[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 35px;\n  border-radius: 50%;\n}\n\n.header-grid[_ngcontent-%COMP%] {\n  --ion-grid-columns: 3;\n  --ion-grid-column-padding:1px;\n  --ion-grid-padding:1px;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --padding-top: 10%;\n}\n\n.comments-grid[_ngcontent-%COMP%] {\n  --ion-grid-columns: 3;\n  --ion-grid-column-padding:1px;\n  --ion-grid-padding:1px;\n}\n\n.comment[_ngcontent-%COMP%] {\n  margin-bottom: 5px !important;\n  margin-top: 4px !important;\n}\n\nion-card[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n  margin-top: 4px !important;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: none;\n  background-color: inherit;\n  font-size: 16px;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CcmVuZGFuR2liZXJzb24vRG9jdW1lbnRzL0Rldi9WaXNpdC9WaXNpdC1hcHAtbmV3L1Zpc2l0Li9zcmMvYXBwL3BhZ2VzL2NvbW1lbnRzL2NvbW1lbnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tbWVudHMvY29tbWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtBQ0hKOztBRE1FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtBQ0hKOztBRE1FO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0FDSEo7O0FETUU7RUFDRSxrQkFBQTtBQ0hKOztBREtFO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0FDRko7O0FES0k7RUFDSSw2QkFBQTtFQUNBLDBCQUFBO0FDRlI7O0FESUU7RUFDRSw2QkFBQTtFQUNBLDBCQUFBO0FDREo7O0FESUU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1lbnRzL2NvbW1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbi8vICAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbi8vIH1cblxuLnVzZXItcGlje1xuICAgIHdpZHRoOjQwcHg7XG4gICAgaGVpZ2h0OjQwcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIFxuICAuY2lyY2xlLXBpY3tcbiAgICB3aWR0aDo0NXB4O1xuICAgIGhlaWdodDozNXB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICBcbiAgLmhlYWRlci1ncmlkIHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbnM6IDM7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzoxcHg7XG4gICAgLS1pb24tZ3JpZC1wYWRkaW5nOjFweDtcbiAgICB9XG5cbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy10b3A6IDEwJTtcbiAgfVxuICAuY29tbWVudHMtZ3JpZCB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW5zOiAzO1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6MXB4O1xuICAgIC0taW9uLWdyaWQtcGFkZGluZzoxcHg7XG4gICAgfVxuICBcbiAgICAuY29tbWVudCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHggIWltcG9ydGFudDtcbiAgICB9XG4gIGlvbi1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiA0cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5idG4ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgIiwiLnVzZXItcGljIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNpcmNsZS1waWMge1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaGVhZGVyLWdyaWQge1xuICAtLWlvbi1ncmlkLWNvbHVtbnM6IDM7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6MXB4O1xuICAtLWlvbi1ncmlkLXBhZGRpbmc6MXB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDEwJTtcbn1cblxuLmNvbW1lbnRzLWdyaWQge1xuICAtLWlvbi1ncmlkLWNvbHVtbnM6IDM7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6MXB4O1xuICAtLWlvbi1ncmlkLXBhZGRpbmc6MXB4O1xufVxuXG4uY29tbWVudCB7XG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA0cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'comments',
          templateUrl: './comments.page.html',
          styleUrls: ['./comments.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__["PostService"]
        }, {
          type: src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__["AccountsService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-comments-comments-module-es5.js.map