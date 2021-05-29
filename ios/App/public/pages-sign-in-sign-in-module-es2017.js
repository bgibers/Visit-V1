(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-in-sign-in-module"],{

/***/ "./src/app/pages/sign-in/sign-in-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SignInPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageRoutingModule", function() { return SignInPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/pages/sign-in/sign-in.page.ts");





const routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_2__["SignInPage"]
    }
];
class SignInPageRoutingModule {
}
SignInPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SignInPageRoutingModule });
SignInPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SignInPageRoutingModule_Factory(t) { return new (t || SignInPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SignInPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.module.ts ***!
  \*************************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-in-routing.module */ "./src/app/pages/sign-in/sign-in-routing.module.ts");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/pages/sign-in/sign-in.page.ts");







class SignInPageModule {
}
SignInPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SignInPageModule });
SignInPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SignInPageModule_Factory(t) { return new (t || SignInPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_4__["SignInPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SignInPageModule, { declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_5__["SignInPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_4__["SignInPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_4__["SignInPageRoutingModule"]
                ],
                declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_5__["SignInPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.page.ts ***!
  \***********************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_backend_clients__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/backend/clients */ "./src/app/backend/clients/index.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function SignInPage_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r2.message, " ");
} }
function SignInPage_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignInPage_ng_container_7_div_1_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("email").hasError(validation_r2.type) && (ctx_r0.loginForm.get("email").dirty || ctx_r0.loginForm.get("email").touched));
} }
function SignInPage_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Incorrect username/password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SignInPage {
    constructor(formBuilder, loadingController, router, accountService) {
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.router = router;
        this.accountService = accountService;
        this.passwordType = 'password';
        this.validationMessages = {
            email: [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Please enter a valid email.' }
            ],
            password: [
                { type: 'required', message: 'Password is required.' }
            ]
        };
    }
    togglePasswordMode() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    }
    ngOnInit() {
        const email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$')
        ]));
        const password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]));
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email,
            password
        });
    }
    async onSubmit(values) {
        const loginModel = {
            userName: this.loginForm.controls.email.value,
            password: this.loginForm.controls.password.value
        };
        const loading = await this.loadingController.create({
            duration: 2000
        });
        await loading.present();
        await this.accountService.login(loginModel.userName, loginModel.password).then(value => {
            if (value === null) {
                this.invalidLogin = true;
                loading.dismiss();
            }
            const navigationExtras = {
            // replaceUrl: false,
            // state: {
            //   userId: value.id
            // }
            };
            loading.dismiss();
            this.router.navigateByUrl('/tab1', navigationExtras);
        });
    }
    openRegister() {
        const navigationExtras = {
            replaceUrl: false,
            state: {
                userName: 'tester'
            }
        };
        this.router.navigateByUrl('/register', navigationExtras);
    }
}
SignInPage.ɵfac = function SignInPage_Factory(t) { return new (t || SignInPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backend_clients__WEBPACK_IMPORTED_MODULE_3__["AccountsService"])); };
SignInPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInPage, selectors: [["sign-in"]], decls: 26, vars: 6, consts: [["no-bounce", "", 1, "form-content", 3, "scrollY"], [3, "formGroup", "ngSubmit"], [1, "roundedInput"], ["autocapitalize", "true", "placeholder", "Email", "type", "email", "formControlName", "email", "required", ""], [1, "validation-errors"], [4, "ngFor", "ngForOf"], ["autocapitalize", "true", "placeholder", "Password", "formControlName", "password", "required", "", 3, "type"], ["name", "eye", "item-right", "", 3, "click"], ["class", "error-message", 4, "ngIf"], [1, "button-div"], ["expand", "block", "type", "submit", 1, "submit-button", 3, "disabled"], ["expand", "block", "type", "submit", 1, "submit-button", 3, "click"], ["expand", "block", 1, "facebook-button"], ["slot", "start", "name", "logo-facebook"], ["expand", "block", 1, "apple-button"], ["slot", "start", "name", "logo-apple"], [1, "error-message"], ["name", "information-circle-outline"]], template: function SignInPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignInPage_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(ctx.loginForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ion-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SignInPage_ng_container_7_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ion-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInPage_Template_ion_icon_click_10_listener() { return ctx.togglePasswordMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SignInPage_div_12_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInPage_Template_ion_button_click_17_listener() { return ctx.openRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Login with Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "ion-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Sign in with Apple ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollY", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessages.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.passwordType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"]], styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: bold;\n  color: white;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: none;\n  background: url('backgroundLogin.png');\n  background-size: cover;\n}\n\nion-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  padding-top: 10%;\n  font-size: 40px;\n  font-weight: bold;\n  color: white;\n}\n\n.roundedInput[_ngcontent-%COMP%] {\n  --border-radius: 10px;\n  --border-width: 1px;\n  --highlight-height: 0;\n  --background: #f8f9fa;\n  padding-top: 10px;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.roundedInput.ion-invalid.item-has-focus[_ngcontent-%COMP%] {\n  --border-color: var(--ion-color-danger-shade);\n}\n\n.roundedInput.ion-valid.item-has-focus[_ngcontent-%COMP%] {\n  --border-color: var(--ion-color-success-shade);\n}\n\n.roundedInput.ion-invalid.ion-dirty[_ngcontent-%COMP%] {\n  --border-color: var(--ion-color-danger-shade);\n}\n\n.roundedInput.ion-valid.ion-dirty[_ngcontent-%COMP%] {\n  --border-color: var(--ion-color-success-shade);\n}\n\n.submit-button[_ngcontent-%COMP%] {\n  --background: #ffff;\n  --background-activated: #fff;\n  --ripple-color: #fff;\n  --background-focused: #fff;\n  --color-focused: #fff;\n  color: #128C7E;\n  --vertical-align: middle;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.button-div[_ngcontent-%COMP%] {\n  padding-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CcmVuZGFuR2liZXJzb24vRG9jdW1lbnRzL0Rldi9WaXNpdC9WaXNpdC1hcHAtbmV3L1Zpc2l0Li9zcmMvYXBwL3BhZ2VzL3NpZ24taW4vc2lnbi1pbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NpZ24taW4vc2lnbi1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDRSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURBRTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDRU47O0FERUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNDLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NMOztBREVBO0VBRUUsNkNBQUE7QUNBRjs7QURHQTtFQUNFLDhDQUFBO0FDQUY7O0FER0E7RUFDRSw2Q0FBQTtBQ0FGOztBREdBO0VBQ0UsOENBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBRUEsd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6d2hpdGU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFja2dyb3VuZExvZ2luLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaDEge1xuICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICAgIHBhZGRpbmctdG9wOiAxMCU7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOndoaXRlO1xuICB9XG59XG5cbi5yb3VuZGVkSW5wdXQge1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcbiAgICAtLWJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgIHBhZGRpbmctdG9wOjEwcHg7XG4gICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAgfVxuXG4ucm91bmRlZElucHV0Lmlvbi1pbnZhbGlkLml0ZW0taGFzLWZvY3VzIHtcblxuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG59XG5cbi5yb3VuZGVkSW5wdXQuaW9uLXZhbGlkLml0ZW0taGFzLWZvY3VzIHtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcbn1cblxuLnJvdW5kZWRJbnB1dC5pb24taW52YWxpZC5pb24tZGlydHkge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG59XG5cbi5yb3VuZGVkSW5wdXQuaW9uLXZhbGlkLmlvbi1kaXJ0eSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XG59XG5cbi5zdWJtaXQtYnV0dG9ue1xuICAtLWJhY2tncm91bmQ6ICNmZmZmO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmO1xuICAtLXJpcHBsZS1jb2xvcjogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmY7XG4gIC0tY29sb3ItZm9jdXNlZDogI2ZmZjtcbiAgY29sb3I6ICMxMjhDN0U7XG5cbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbn1cblxuLmJ1dHRvbi1kaXZ7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG59IiwiaDEge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFja2dyb3VuZExvZ2luLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbmlvbi1jb250ZW50IGgxIHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucm91bmRlZElucHV0IHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XG4gIC0tYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xufVxuXG4ucm91bmRlZElucHV0Lmlvbi1pbnZhbGlkLml0ZW0taGFzLWZvY3VzIHtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xufVxuXG4ucm91bmRlZElucHV0Lmlvbi12YWxpZC5pdGVtLWhhcy1mb2N1cyB7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XG59XG5cbi5yb3VuZGVkSW5wdXQuaW9uLWludmFsaWQuaW9uLWRpcnR5IHtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xufVxuXG4ucm91bmRlZElucHV0Lmlvbi12YWxpZC5pb24tZGlydHkge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmY7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmY7XG4gIC0tcmlwcGxlLWNvbG9yOiAjZmZmO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZjtcbiAgLS1jb2xvci1mb2N1c2VkOiAjZmZmO1xuICBjb2xvcjogIzEyOEM3RTtcbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbn1cblxuLmJ1dHRvbi1kaXYge1xuICBwYWRkaW5nLXRvcDogMTAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sign-in',
                templateUrl: './sign-in.page.html',
                styleUrls: ['./sign-in.page.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_backend_clients__WEBPACK_IMPORTED_MODULE_3__["AccountsService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-sign-in-sign-in-module-es2017.js.map