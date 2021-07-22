function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"], {
  /***/
  "./src/app/objects/validators/password.validator.ts":
  /*!**********************************************************!*\
    !*** ./src/app/objects/validators/password.validator.ts ***!
    \**********************************************************/

  /*! exports provided: PasswordValidator */

  /***/
  function srcAppObjectsValidatorsPasswordValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordValidator", function () {
      return PasswordValidator;
    });

    var PasswordValidator = /*#__PURE__*/function () {
      function PasswordValidator() {
        _classCallCheck(this, PasswordValidator);
      }

      _createClass(PasswordValidator, null, [{
        key: "areEqual",
        // Inspired on: http://plnkr.co/edit/Zcbg2T3tOxYmhxs7vaAm?p=preview
        value: function areEqual(formGroup) {
          var val;
          var valid = true;

          for (var key in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(key)) {
              var control = formGroup.controls[key];

              if (val === undefined) {
                val = control.value;
              } else {
                if (val !== control.value) {
                  valid = false;
                  break;
                }
              }
            }
          }

          if (valid) {
            return null;
          }

          return {
            areEqual: true
          };
        }
      }]);

      return PasswordValidator;
    }();
    /***/

  },

  /***/
  "./src/app/pages/register/register-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/register/register-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterPageRoutingModule */

  /***/
  function srcAppPagesRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
      return RegisterPageRoutingModule;
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


    var _register_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/pages/register/register.page.ts");

    var routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_2__["RegisterPage"]
    }];

    var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
      _classCallCheck(this, RegisterPageRoutingModule);
    };

    RegisterPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RegisterPageRoutingModule
    });
    RegisterPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RegisterPageRoutingModule_Factory(t) {
        return new (t || RegisterPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegisterPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterPageRoutingModule, [{
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
  "./src/app/pages/register/register.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/register/register.module.ts ***!
    \***************************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppPagesRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
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


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/pages/register/register-routing.module.ts");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/pages/register/register.page.ts");

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RegisterPageModule
    });
    RegisterPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RegisterPageModule_Factory(t) {
        return new (t || RegisterPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegisterPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegisterPageModule, {
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegisterPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegisterPageRoutingModule"]],
          declarations: [_register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/register/register.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/register/register.page.ts ***!
    \*************************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppPagesRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_objects_validators_password_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/objects/validators/password.validator */
    "./src/app/objects/validators/password.validator.ts");
    /* harmony import */


    var src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/backend/clients */
    "./src/app/backend/clients/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegisterPage_ng_container_19_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var validation_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r8.message, " ");
      }
    }

    function RegisterPage_ng_container_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterPage_ng_container_19_div_1_Template, 3, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var validation_r8 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.registerForm.get("firstName").hasError(validation_r8.type) && (ctx_r0.registerForm.get("firstName").dirty || ctx_r0.registerForm.get("firstName").touched));
      }
    }

    function RegisterPage_ng_container_24_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var validation_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r11.message, " ");
      }
    }

    function RegisterPage_ng_container_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterPage_ng_container_24_div_1_Template, 3, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var validation_r11 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.registerForm.get("lastName").hasError(validation_r11.type) && (ctx_r1.registerForm.get("lastName").dirty || ctx_r1.registerForm.get("lastName").touched));
      }
    }

    function RegisterPage_ng_container_30_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var validation_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r14.message, " ");
      }
    }

    function RegisterPage_ng_container_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterPage_ng_container_30_div_1_Template, 3, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var validation_r14 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.registerForm.get("email").hasError(validation_r14.type) && (ctx_r2.registerForm.get("email").dirty || ctx_r2.registerForm.get("email").touched));
      }
    }

    function RegisterPage_ng_container_38_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var validation_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r17.message, " ");
      }
    }

    function RegisterPage_ng_container_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterPage_ng_container_38_div_1_Template, 3, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var validation_r17 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.registerForm.get("matchingPasswords").get("password").hasError(validation_r17.type) && (ctx_r3.registerForm.get("matchingPasswords").get("password").dirty || ctx_r3.registerForm.get("matchingPasswords").get("password").touched));
      }
    }

    function RegisterPage_ng_container_42_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var validation_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r20.message, " ");
      }
    }

    function RegisterPage_ng_container_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterPage_ng_container_42_div_1_Template, 3, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var validation_r20 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.registerForm.get("matchingPasswords").get("confirmPassword").hasError(validation_r20.type) && (ctx_r4.registerForm.get("matchingPasswords").get("confirmPassword").dirty || ctx_r4.registerForm.get("matchingPasswords").get("confirmPassword").touched));
      }
    }

    function RegisterPage_ng_container_44_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var validation_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r23.message, " ");
      }
    }

    function RegisterPage_ng_container_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterPage_ng_container_44_div_1_Template, 3, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var validation_r23 = ctx.$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.registerForm.get("matchingPasswords").hasError(validation_r23.type) && (ctx_r5.registerForm.get("matchingPasswords").get("confirmPassword").dirty || ctx_r5.registerForm.get("matchingPasswords").get("confirmPassword").touched));
      }
    }

    function RegisterPage_div_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.error, " ");
      }
    }

    function RegisterPage_ion_button_54_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterPage_ion_button_54_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.openAppleSignIn();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sign in with Apple ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/sign-in"];
    };

    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(formBuilder, router, platform, zone, accountService) {
        _classCallCheck(this, RegisterPage);

        this.formBuilder = formBuilder;
        this.router = router;
        this.platform = platform;
        this.zone = zone;
        this.accountService = accountService;
        this.passwordType = 'password';
        this.hasError = false;
        this.error = '';
        this.showAppleSignIn = false;
        this.validationMessages = {
          email: [{
            type: 'required',
            message: 'Email is required.'
          }, {
            type: 'pattern',
            message: 'Please enter a valid email.'
          }],
          firstName: [{
            type: 'required',
            message: 'First name is required.'
          }],
          lastName: [{
            type: 'required',
            message: 'Last name is required.'
          }],
          password: [{
            type: 'required',
            message: 'Password is required.'
          }, {
            type: 'minlength',
            message: 'Password must be at least 5 characters long.'
          }, {
            type: 'pattern',
            message: 'Your password must contain an uppercase, lowercase, number, and character.'
          }],
          confirmPassword: [{
            type: 'required',
            message: 'Confirm password is required.'
          }],
          matchingPasswords: [{
            type: 'areEqual',
            message: 'Password mismatch.'
          }]
        };
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showAppleSignIn = this.platform.is('ios');
          var email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$')]));
          this.matchingPasswordsGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[0-9])(?=.*[!@#$%.^&*?])[a-zA-Z0-9!@#$%.^&*?]{7,25}$')])),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          }, function (formGroup) {
            return src_app_objects_validators_password_validator__WEBPACK_IMPORTED_MODULE_3__["PasswordValidator"].areEqual(formGroup);
          });
          var firstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
          var lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
          this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: firstName,
            lastName: lastName,
            email: email,
            matchingPasswords: this.matchingPasswordsGroup
          });
        }
      }, {
        key: "togglePasswordMode",
        value: function togglePasswordMode() {
          this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        }
      }, {
        key: "openAppleSignIn",
        value: function () {
          var _openAppleSignIn = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.accountService.loginApple().then( /*#__PURE__*/function () {
                      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
                        var navigationExtras, _navigationExtras;

                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (res.firstLogin === true) {
                                  navigationExtras = {
                                    replaceUrl: false,
                                    state: {
                                      firstName: res.firstName,
                                      lastName: res.lastName,
                                      email: res.email,
                                      password: '',
                                      sso: true
                                    }
                                  };

                                  _this.zone.run(function () {
                                    _this.router.navigateByUrl('/post-register-about', navigationExtras);
                                  });
                                } else {
                                  _navigationExtras = {
                                    replaceUrl: false
                                  };

                                  _this.zone.run(function () {
                                    _this.router.navigateByUrl('/tab1', _navigationExtras);
                                  });
                                }

                              case 1:
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

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function openAppleSignIn() {
            return _openAppleSignIn.apply(this, arguments);
          }

          return openAppleSignIn;
        }()
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          this.accountService.accountEmailTakenGet(this.registerForm.controls.email.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (res) {
            if (res === false) {
              var navigationExtras = {
                replaceUrl: false,
                state: {
                  firstName: _this2.registerForm.controls.firstName.value,
                  lastName: _this2.registerForm.controls.lastName.value,
                  email: _this2.registerForm.controls.email.value,
                  password: _this2.matchingPasswordsGroup.controls.password.value
                }
              };

              _this2.zone.run(function () {
                _this2.router.navigateByUrl('/post-register-about', navigationExtras);
              });
            } else {
              _this2.hasError = true;
              _this2.error = 'An account with this email is already registered.';
            }
          }, function (error) {
            console.log(error);
            _this2.hasError = true;
            _this2.error = 'An unexpected error has occurred.';
          });
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ɵfac = function RegisterPage_Factory(t) {
      return new (t || RegisterPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__["AccountsService"]));
    };

    RegisterPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterPage,
      selectors: [["register"]],
      decls: 55,
      vars: 15,
      consts: [["no-bounce", "", 3, "scrollY"], [1, "splash"], [1, "ion-align-items-baseline"], [1, "ion-justify-content-start"], ["defaultHref", "/sign-in", 2, "color", "beige"], [1, "back-to-login"], ["routerLinkActive", "router-link-active", 3, "routerLink"], [3, "formGroup", "ngSubmit"], [1, "roundedInput"], ["autocapitalize", "true", "placeholder", "First Name*", "type", "text", "formControlName", "firstName", "required", ""], [1, "validation-errors"], [4, "ngFor", "ngForOf"], ["autocapitalize", "true", "placeholder", "Last Name*", "type", "text", "formControlName", "lastName", "required", ""], ["autocapitalize", "true", "placeholder", "Email*", "type", "email", "formControlName", "email", "required", ""], ["formGroupName", "matchingPasswords"], ["autocapitalize", "true", "placeholder", "Password*", "formControlName", "password", "required", "", 3, "type"], ["name", "eye", "item-right", "", 3, "click"], [1, "roundedInput", 2, "margin-top", "10px"], ["autocapitalize", "true", "placeholder", "Confirm Password*", "formControlName", "confirmPassword", "required", "", 3, "type"], ["class", "error-message", 4, "ngIf"], [1, "button-div"], ["expand", "block", "type", "submit", 1, "submit-button", 3, "disabled"], ["expand", "block", 1, "facebook-button"], ["slot", "start", "name", "logo-facebook"], ["class", "apple-button", "expand", "block", 3, "click", 4, "ngIf"], [1, "error-message"], ["name", "information-circle-outline"], ["expand", "block", 1, "apple-button", 3, "click"], ["slot", "start", "name", "logo-apple"]],
      template: function RegisterPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-row", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-buttons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ion-back-button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Already have an account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login instead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterPage_Template_form_ngSubmit_12_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-item", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ion-input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegisterPage_ng_container_19_Template, 2, 1, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-item", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "ion-input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RegisterPage_ng_container_24_Template, 2, 1, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ion-item", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "ion-input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RegisterPage_ng_container_30_Template, 2, 1, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ion-item", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "ion-input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ion-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterPage_Template_ion_icon_click_36_listener() {
            return ctx.togglePasswordMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, RegisterPage_ng_container_38_Template, 2, 1, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ion-item", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "ion-input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, RegisterPage_ng_container_42_Template, 2, 1, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, RegisterPage_ng_container_44_Template, 2, 1, "ng-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, RegisterPage_div_46_Template, 3, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ion-button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ion-button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "ion-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Login with Facebook ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, RegisterPage_ion_button_54_Template, 3, 0, "ion-button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollY", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessages.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessages.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessages.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.passwordType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessages.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.passwordType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessages.confirmPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessages.matchingPasswords);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAppleSignIn);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButtonDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["RouterLinkDelegate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"]],
      styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: none;\n}\nion-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-top: 3%;\n  text-align: center;\n  font-size: 40px;\n  font-weight: bold;\n  margin: 0;\n  color: white;\n}\nion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n}\nion-header[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n.close-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: white;\n}\n.roundedInput[_ngcontent-%COMP%] {\n  --border-radius: 10px;\n  --border-width: 1px;\n  --highlight-height: 0;\n  --background: #f8f9fa;\n  padding-top: 10px;\n}\n.nameRow[_ngcontent-%COMP%] {\n  padding-block: 10%;\n}\n.nameRow[_ngcontent-%COMP%]   .roundedInput[_ngcontent-%COMP%] {\n  padding-block: 0%;\n}\n.roundedInput.ion-invalid.item-has-focus[_ngcontent-%COMP%] {\n  --border-color: var(--ion-color-danger-shade);\n}\n.roundedInput.ion-valid.item-has-focus[_ngcontent-%COMP%] {\n  --border-color: var(--ion-color-success-shade);\n}\n.roundedInput.ion-invalid.ion-dirty[_ngcontent-%COMP%] {\n  --border-color: var(--ion-color-danger-shade);\n}\n.roundedInput.ion-valid.ion-dirty[_ngcontent-%COMP%] {\n  --border-color: var(--ion-color-success-shade);\n}\n.submit-button[_ngcontent-%COMP%] {\n  --background: #fff;\n  --background-activated: #fff;\n  --ripple-color: #fff;\n  --background-focused: #fff;\n  --color-focused: #fff;\n  color: #128C7E;\n  --vertical-align: middle;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n.back-to-login[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n}\n.back-to-login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n.button-div[_ngcontent-%COMP%] {\n  padding-top: 3%;\n}\nion-grid[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  padding-right: 5%;\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CcmVuZGFuR2liZXJzb24vRG9jdW1lbnRzL0Rldi9WaXNpdC9WaXNpdC4vc3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7QURBRTtFQUVFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDQ0o7QURHQTtFQUNFLHlCQUFBO0FDQUY7QURHQTtFQUNFLHlCQUFBO0FDQUY7QURHQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDQUY7QURHQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNBRjtBRElBO0VBS0Usa0JBQUE7QUNMRjtBRENFO0VBQ0UsaUJBQUE7QUNDSjtBREtBO0VBRUUsNkNBQUE7QUNIRjtBRE1BO0VBQ0UsOENBQUE7QUNIRjtBRE1BO0VBQ0UsNkNBQUE7QUNIRjtBRE1BO0VBQ0UsOENBQUE7QUNIRjtBRE1BO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFFQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNKRjtBRE9BO0VBRUUsWUFBQTtFQUNBLGtCQUFBO0FDTEY7QURPRTtFQUNFLFlBQUE7QUNMSjtBRFNBO0VBQ0UsZUFBQTtBQ05GO0FEUUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgaDEge1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmctdG9wOiAzJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5jbG9zZS1pY29uIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucm91bmRlZElucHV0IHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIC8vIHBhZGRpbmctYmxvY2s6IDEwJTtcclxufVxyXG5cclxuLm5hbWVSb3cge1xyXG4gIC5yb3VuZGVkSW5wdXQge1xyXG4gICAgcGFkZGluZy1ibG9jazogMCU7XHJcbiAgfVxyXG5cclxuICBwYWRkaW5nLWJsb2NrOiAxMCU7XHJcbn1cclxuXHJcbi5yb3VuZGVkSW5wdXQuaW9uLWludmFsaWQuaXRlbS1oYXMtZm9jdXMge1xyXG5cclxuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XHJcbn1cclxuXHJcbi5yb3VuZGVkSW5wdXQuaW9uLXZhbGlkLml0ZW0taGFzLWZvY3VzIHtcclxuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xyXG59XHJcblxyXG4ucm91bmRlZElucHV0Lmlvbi1pbnZhbGlkLmlvbi1kaXJ0eSB7XHJcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xyXG59XHJcblxyXG4ucm91bmRlZElucHV0Lmlvbi12YWxpZC5pb24tZGlydHkge1xyXG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZjtcclxuICAtLXJpcHBsZS1jb2xvcjogI2ZmZjtcclxuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZjtcclxuICAtLWNvbG9yLWZvY3VzZWQ6ICNmZmY7XHJcbiAgY29sb3I6ICMxMjhDN0U7XHJcblxyXG4gIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4uYmFjay10by1sb2dpbiB7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiA1JTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi5idXR0b24tZGl2IHtcclxuICBwYWRkaW5nLXRvcDogMyU7XHJcbn1cclxuaW9uLWdyaWR7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuaW9uLWNvbnRlbnQgaDEge1xuICBwYWRkaW5nLXRvcDogMyU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5jbG9zZS1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5yb3VuZGVkSW5wdXQge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcbiAgLS1iYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLm5hbWVSb3cge1xuICBwYWRkaW5nLWJsb2NrOiAxMCU7XG59XG4ubmFtZVJvdyAucm91bmRlZElucHV0IHtcbiAgcGFkZGluZy1ibG9jazogMCU7XG59XG5cbi5yb3VuZGVkSW5wdXQuaW9uLWludmFsaWQuaXRlbS1oYXMtZm9jdXMge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG59XG5cbi5yb3VuZGVkSW5wdXQuaW9uLXZhbGlkLml0ZW0taGFzLWZvY3VzIHtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcbn1cblxuLnJvdW5kZWRJbnB1dC5pb24taW52YWxpZC5pb24tZGlydHkge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG59XG5cbi5yb3VuZGVkSW5wdXQuaW9uLXZhbGlkLmlvbi1kaXJ0eSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmO1xuICAtLXJpcHBsZS1jb2xvcjogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmY7XG4gIC0tY29sb3ItZm9jdXNlZDogI2ZmZjtcbiAgY29sb3I6ICMxMjhDN0U7XG4gIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG59XG5cbi5iYWNrLXRvLWxvZ2luIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYmFjay10by1sb2dpbiBhIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnV0dG9uLWRpdiB7XG4gIHBhZGRpbmctdG9wOiAzJTtcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'register',
          templateUrl: './register.page.html',
          styleUrls: ['./register.page.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__["AccountsService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-register-register-module-es5.js.map