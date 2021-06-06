function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-in-sign-in-module"], {
  /***/
  "./src/app/pages/sign-in/sign-in-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/sign-in/sign-in-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: SignInPageRoutingModule */

  /***/
  function srcAppPagesSignInSignInRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInPageRoutingModule", function () {
      return SignInPageRoutingModule;
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


    var _sign_in_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sign-in.page */
    "./src/app/pages/sign-in/sign-in.page.ts");

    var routes = [{
      path: '',
      component: _sign_in_page__WEBPACK_IMPORTED_MODULE_2__["SignInPage"]
    }];

    var SignInPageRoutingModule = function SignInPageRoutingModule() {
      _classCallCheck(this, SignInPageRoutingModule);
    };

    SignInPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SignInPageRoutingModule
    });
    SignInPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SignInPageRoutingModule_Factory(t) {
        return new (t || SignInPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SignInPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInPageRoutingModule, [{
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
  "./src/app/pages/sign-in/sign-in.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/sign-in/sign-in.module.ts ***!
    \*************************************************/

  /*! exports provided: SignInPageModule */

  /***/
  function srcAppPagesSignInSignInModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInPageModule", function () {
      return SignInPageModule;
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


    var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sign-in-routing.module */
    "./src/app/pages/sign-in/sign-in-routing.module.ts");
    /* harmony import */


    var _sign_in_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sign-in.page */
    "./src/app/pages/sign-in/sign-in.page.ts");

    var SignInPageModule = function SignInPageModule() {
      _classCallCheck(this, SignInPageModule);
    };

    SignInPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SignInPageModule
    });
    SignInPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SignInPageModule_Factory(t) {
        return new (t || SignInPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_4__["SignInPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SignInPageModule, {
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_5__["SignInPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_4__["SignInPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_4__["SignInPageRoutingModule"]],
          declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_5__["SignInPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/sign-in/sign-in.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/sign-in/sign-in.page.ts ***!
    \***********************************************/

  /*! exports provided: SignInPage */

  /***/
  function srcAppPagesSignInSignInPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInPage", function () {
      return SignInPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/backend/clients */
    "./src/app/backend/clients/index.ts");
    /* harmony import */


    var _modals_forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../modals/forgot-password/forgot-password.page */
    "./src/app/pages/modals/forgot-password/forgot-password.page.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SignInPage_ng_container_8_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var validation_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r2.message, " ");
      }
    }

    function SignInPage_ng_container_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignInPage_ng_container_8_div_1_Template, 3, 1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var validation_r2 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("email").hasError(validation_r2.type) && (ctx_r0.loginForm.get("email").dirty || ctx_r0.loginForm.get("email").touched));
      }
    }

    function SignInPage_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.invalidLoginText, " ");
      }
    }

    var SignInPage = /*#__PURE__*/function () {
      function SignInPage(formBuilder, loadingController, modalController, cd, zone, router, accountService) {
        _classCallCheck(this, SignInPage);

        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.cd = cd;
        this.zone = zone;
        this.router = router;
        this.accountService = accountService;
        this.passwordType = 'password';
        this.validationMessages = {
          email: [{
            type: 'required',
            message: 'Email is required.'
          }, {
            type: 'pattern',
            message: 'Please enter a valid email.'
          }],
          password: [{
            type: 'required',
            message: 'Password is required.'
          }]
        };
        this.invalidLogin = false;
        this.invalidLoginText = '';
      }

      _createClass(SignInPage, [{
        key: "togglePasswordMode",
        value: function togglePasswordMode() {
          this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,3}$')]));
          var password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: email,
            password: password
          });
        }
      }, {
        key: "onSubmit",
        value: function () {
          var _onSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(values) {
            var _this = this;

            var loginModel, loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    loginModel = {
                      userName: this.loginForm.controls.email.value,
                      password: this.loginForm.controls.password.value
                    };
                    _context.next = 3;
                    return this.loadingController.create({
                      duration: 2000
                    });

                  case 3:
                    loading = _context.sent;
                    _context.next = 6;
                    return loading.present();

                  case 6:
                    this.accountService.login(loginModel.userName, loginModel.password).then(function (res) {
                      console.log(res);
                      _this.invalidLogin = false;

                      _this.zone.run(function () {
                        var navigationExtras = {
                          replaceUrl: false
                        };

                        _this.router.navigateByUrl('/tab1', navigationExtras);
                      });

                      loading.dismiss();
                    }, function (err) {
                      if (err.code === 'auth/user-not-found') {
                        _this.invalidLoginText = 'User not found';
                      } else if (err.code === 'auth/wrong-password') {
                        _this.invalidLoginText = 'Invalid password';
                      } else {
                        _this.invalidLoginText = 'Unexpected error';
                      }

                      _this.invalidLogin = true;

                      _this.refresh();

                      loading.dismiss();
                    });

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function onSubmit(_x) {
            return _onSubmit.apply(this, arguments);
          }

          return onSubmit;
        }()
      }, {
        key: "openRegister",
        value: function openRegister() {
          var _this2 = this;

          var navigationExtras = {
            replaceUrl: false,
            state: {// userName: 'tester',
            }
          };
          this.zone.run(function () {
            _this2.router.navigateByUrl('/register', navigationExtras);
          });
        }
      }, {
        key: "presentForgotPassword",
        value: function () {
          var _presentForgotPassword = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      component: _modals_forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPage"],
                      showBackdrop: true,
                      cssClass: 'forgot-password-modal'
                    });

                  case 2:
                    modal = _context3.sent;
                    modal.onDidDismiss().then( /*#__PURE__*/function () {
                      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dataReturned) {
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                if (dataReturned !== null) {// this.filter = dataReturned.data;
                                  // this.refreshPosts();
                                  // await this.loadingController.dismiss();
                                }

                              case 1:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2);
                      }));

                      return function (_x2) {
                        return _ref.apply(this, arguments);
                      };
                    }());
                    _context3.next = 6;
                    return modal.present();

                  case 6:
                    return _context3.abrupt("return", _context3.sent);

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          function presentForgotPassword() {
            return _presentForgotPassword.apply(this, arguments);
          }

          return presentForgotPassword;
        }()
      }, {
        key: "refresh",
        value: function refresh() {
          this.cd.detectChanges();
        }
      }, {
        key: "getInvalidLogin",
        get: function get() {
          return this.invalidLogin;
        }
      }]);

      return SignInPage;
    }();

    SignInPage.ɵfac = function SignInPage_Factory(t) {
      return new (t || SignInPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__["AccountsService"]));
    };

    SignInPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignInPage,
      selectors: [["sign-in"]],
      decls: 29,
      vars: 6,
      consts: [["no-bounce", "", 1, "form-content", 3, "scrollY"], [1, "splash"], [3, "formGroup", "ngSubmit"], [1, "roundedInput"], ["autocapitalize", "true", "placeholder", "Email", "type", "email", "formControlName", "email", "required", ""], [1, "validation-errors"], [4, "ngFor", "ngForOf"], ["autocapitalize", "true", "placeholder", "Password", "formControlName", "password", "required", "", 3, "type"], ["name", "eye", "item-right", "", 3, "click"], ["class", "error-message", 4, "ngIf"], [1, "button-div"], ["expand", "block", "type", "submit", 1, "submit-button", 3, "disabled"], ["expand", "block", "type", "submit", 1, "submit-button", 3, "click"], ["expand", "block", 1, "facebook-button"], ["slot", "start", "name", "logo-facebook"], ["expand", "block", 1, "apple-button"], ["slot", "start", "name", "logo-apple"], [1, "forgot-password-link", "center-any-object", 3, "click"], [1, "error-message"], ["name", "information-circle-outline"]],
      template: function SignInPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignInPage_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit(ctx.loginForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SignInPage_ng_container_8_Template, 2, 1, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ion-input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInPage_Template_ion_icon_click_11_listener() {
            return ctx.togglePasswordMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SignInPage_div_13_Template, 3, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInPage_Template_ion_button_click_18_listener() {
            return ctx.openRegister();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "ion-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Login with Facebook ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "ion-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Sign in with Apple ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInPage_Template_h3_click_27_listener() {
            return ctx.presentForgotPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Forgot Password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollY", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessages.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.passwordType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getInvalidLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: bold;\n  color: white;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: none;\n}\n\nion-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  padding-top: 10%;\n  font-size: 40px;\n  font-weight: bold;\n  color: white;\n}\n\n.roundedInput[_ngcontent-%COMP%] {\n  --border-radius: 10px;\n  --border-width: 1px;\n  --highlight-height: 0;\n  --background: #f8f9fa;\n  padding-top: 10px;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.roundedInput.ion-invalid.item-has-focus[_ngcontent-%COMP%] {\n  --border-color: var(--ion-color-danger-shade);\n}\n\n.roundedInput.ion-valid.item-has-focus[_ngcontent-%COMP%] {\n  --border-color: var(--ion-color-success-shade);\n}\n\n.roundedInput.ion-invalid.ion-dirty[_ngcontent-%COMP%] {\n  --border-color: var(--ion-color-danger-shade);\n}\n\n.roundedInput.ion-valid.ion-dirty[_ngcontent-%COMP%] {\n  --border-color: var(--ion-color-success-shade);\n}\n\n.submit-button[_ngcontent-%COMP%] {\n  --background: #ffff;\n  --background-activated: #fff;\n  --ripple-color: #fff;\n  --background-focused: #fff;\n  --color-focused: #fff;\n  color: #128C7E;\n  --vertical-align: middle;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.button-div[_ngcontent-%COMP%] {\n  padding-top: 10%;\n}\n\n.forgot-password-link[_ngcontent-%COMP%] {\n  --vertical-align: middle;\n  color: white;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CcmVuZGFuR2liZXJzb24vRG9jdW1lbnRzL0Rldi9WaXNpdC9WaXNpdC1hcHAtbmV3L1Zpc2l0Li9zcmMvYXBwL3BhZ2VzL3NpZ24taW4vc2lnbi1pbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NpZ24taW4vc2lnbi1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURHQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFFRSw2Q0FBQTtBQ0RGOztBRElBO0VBQ0UsOENBQUE7QUNERjs7QURJQTtFQUNFLDZDQUFBO0FDREY7O0FESUE7RUFDRSw4Q0FBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFFQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURLQTtFQUNFLGdCQUFBO0FDRkY7O0FES0E7RUFDRSx3QkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcblxuICBoMSB7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuLnJvdW5kZWRJbnB1dCB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xuICAtLWJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbn1cblxuLnJvdW5kZWRJbnB1dC5pb24taW52YWxpZC5pdGVtLWhhcy1mb2N1cyB7XG5cbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xufVxuXG4ucm91bmRlZElucHV0Lmlvbi12YWxpZC5pdGVtLWhhcy1mb2N1cyB7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XG59XG5cbi5yb3VuZGVkSW5wdXQuaW9uLWludmFsaWQuaW9uLWRpcnR5IHtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xufVxuXG4ucm91bmRlZElucHV0Lmlvbi12YWxpZC5pb24tZGlydHkge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmY7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmY7XG4gIC0tcmlwcGxlLWNvbG9yOiAjZmZmO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZjtcbiAgLS1jb2xvci1mb2N1c2VkOiAjZmZmO1xuICBjb2xvcjogIzEyOEM3RTtcblxuICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xufVxuXG4uYnV0dG9uLWRpdiB7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG59XG5cbi5mb3Jnb3QtcGFzc3dvcmQtbGluayB7XG4gIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iLCJoMSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59XG5pb24tY29udGVudCBoMSB7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJvdW5kZWRJbnB1dCB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xuICAtLWJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbn1cblxuLnJvdW5kZWRJbnB1dC5pb24taW52YWxpZC5pdGVtLWhhcy1mb2N1cyB7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcbn1cblxuLnJvdW5kZWRJbnB1dC5pb24tdmFsaWQuaXRlbS1oYXMtZm9jdXMge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xufVxuXG4ucm91bmRlZElucHV0Lmlvbi1pbnZhbGlkLmlvbi1kaXJ0eSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcbn1cblxuLnJvdW5kZWRJbnB1dC5pb24tdmFsaWQuaW9uLWRpcnR5IHtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmO1xuICAtLXJpcHBsZS1jb2xvcjogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmY7XG4gIC0tY29sb3ItZm9jdXNlZDogI2ZmZjtcbiAgY29sb3I6ICMxMjhDN0U7XG4gIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG59XG5cbi5idXR0b24tZGl2IHtcbiAgcGFkZGluZy10b3A6IDEwJTtcbn1cblxuLmZvcmdvdC1wYXNzd29yZC1saW5rIHtcbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'sign-in',
          templateUrl: './sign-in.page.html',
          styleUrls: ['./sign-in.page.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__["AccountsService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-sign-in-sign-in-module-es5.js.map