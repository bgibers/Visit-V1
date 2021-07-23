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
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_2__["SignInPage"],
    },
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
            _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_4__["SignInPageRoutingModule"],
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
                    _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_4__["SignInPageRoutingModule"],
                ],
                declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_5__["SignInPage"]],
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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/backend/clients */ "./src/app/backend/clients/index.ts");
/* harmony import */ var _modals_forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/forgot-password/forgot-password.page */ "./src/app/pages/modals/forgot-password/forgot-password.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function SignInPage_ng_container_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r3.message, " ");
} }
function SignInPage_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignInPage_ng_container_8_div_1_Template, 3, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("email").hasError(validation_r3.type) && (ctx_r0.loginForm.get("email").dirty || ctx_r0.loginForm.get("email").touched));
} }
function SignInPage_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.invalidLoginText, " ");
} }
function SignInPage_ion_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInPage_ion_button_26_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.openAppleSignIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sign in with Apple ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SignInPage {
    constructor(formBuilder, loadingController, modalController, platform, cd, zone, router, accountService) {
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.platform = platform;
        this.cd = cd;
        this.zone = zone;
        this.router = router;
        this.accountService = accountService;
        this.passwordType = 'password';
        this.validationMessages = {
            email: [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Please enter a valid email.' },
            ],
            password: [{ type: 'required', message: 'Password is required.' }],
        };
        this.invalidLogin = false;
        this.invalidLoginText = '';
        this.showAppleSignIn = false;
    }
    togglePasswordMode() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    }
    async ngOnInit() {
        // Only show the Apple sign in button on iOS
        this.showAppleSignIn = this.platform.is('ios');
        const email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,3}$'),
        ]));
        const password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email,
            password,
        });
    }
    async openAppleSignIn() {
        await this.accountService.loginApple().then(async (res) => {
            if (res.firstLogin === true) {
                const navigationExtras = {
                    replaceUrl: false,
                    state: {
                        firstName: res.firstName,
                        lastName: res.lastName,
                        email: res.email,
                        password: '',
                        sso: true
                    }
                };
                this.zone.run(() => {
                    this.router.navigateByUrl('/post-register-about', navigationExtras);
                });
            }
            else {
                const navigationExtras = {
                    replaceUrl: false
                };
                this.zone.run(() => {
                    this.router.navigateByUrl('/tab1', navigationExtras);
                });
            }
        });
    }
    async onSubmit(values) {
        const loginModel = {
            userName: this.loginForm.controls.email.value,
            password: this.loginForm.controls.password.value,
        };
        const loading = await this.loadingController.create({
        // duration: 2000,
        });
        await loading.present();
        this.accountService.login(loginModel.userName, loginModel.password).then((res) => {
            console.log(res);
            this.invalidLogin = false;
            this.zone.run(() => {
                const navigationExtras = {
                    replaceUrl: false,
                };
                this.router.navigateByUrl('/tab1', navigationExtras);
            });
            loading.dismiss();
        }, (err) => {
            if (err.code === 'auth/user-not-found') {
                this.invalidLoginText = 'User not found';
            }
            else if (err.code === 'auth/wrong-password') {
                this.invalidLoginText = 'Invalid password';
            }
            else {
                this.invalidLoginText = 'Unexpected error';
            }
            this.invalidLogin = true;
            this.refresh();
            loading.dismiss();
        });
    }
    openRegister() {
        const navigationExtras = {
            replaceUrl: false,
            state: {
            // userName: 'tester',
            },
        };
        this.zone.run(() => {
            this.router.navigateByUrl('/register', navigationExtras);
        });
    }
    async presentForgotPassword() {
        const modal = await this.modalController.create({
            component: _modals_forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPage"],
            showBackdrop: true,
            cssClass: 'forgot-password-modal',
        });
        modal.onDidDismiss().then(async (dataReturned) => {
            if (dataReturned !== null) {
                // this.filter = dataReturned.data;
                // this.refreshPosts();
                // await this.loadingController.dismiss();
            }
        });
        return await modal.present();
    }
    refresh() {
        this.cd.detectChanges();
    }
    get getInvalidLogin() {
        return this.invalidLogin;
    }
}
SignInPage.ɵfac = function SignInPage_Factory(t) { return new (t || SignInPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__["AccountsService"])); };
SignInPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInPage, selectors: [["sign-in"]], decls: 29, vars: 7, consts: [["no-bounce", "", 1, "form-content", 3, "scrollY"], [1, "splash"], [3, "formGroup", "ngSubmit"], [1, "roundedInput"], ["autocapitalize", "true", "placeholder", "Email", "type", "email", "formControlName", "email", "required", ""], [1, "validation-errors"], [4, "ngFor", "ngForOf"], ["autocapitalize", "true", "placeholder", "Password", "formControlName", "password", "required", "", 3, "type"], ["name", "eye", "item-right", "", 3, "click"], ["class", "error-message", 4, "ngIf"], [1, "button-div"], ["size", "6", 2, "padding-left", "22px"], ["expand", "block", "type", "submit", 1, "submit-button", 2, "padding-right", "0px", "padding-left", "0", 3, "disabled"], ["size", "6", 2, "padding-right", "22px"], ["expand", "block", "type", "submit", 1, "submit-button", 2, "padding-right", "0px", "padding-left", "0", 3, "click"], ["expand", "block", 1, "facebook-button"], ["slot", "start", "name", "logo-facebook"], ["class", "apple-button", "expand", "block", 3, "click", 4, "ngIf"], [1, "forgot-password-link", "center-any-object", 3, "click"], [1, "error-message"], ["name", "information-circle-outline"], ["expand", "block", 1, "apple-button", 3, "click"], ["slot", "start", "name", "logo-apple"]], template: function SignInPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignInPage_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(ctx.loginForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SignInPage_ng_container_8_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ion-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInPage_Template_ion_icon_click_11_listener() { return ctx.togglePasswordMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SignInPage_div_13_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-col", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-col", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInPage_Template_ion_button_click_20_listener() { return ctx.openRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "ion-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Login with Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SignInPage_ion_button_26_Template, 3, 0, "ion-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInPage_Template_h3_click_27_listener() { return ctx.presentForgotPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollY", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessages.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.passwordType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getInvalidLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAppleSignIn);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"]], styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: bold;\n  color: white;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: none;\n}\n\nion-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-top: 25%;\n  padding-bottom: 50px;\n  font-size: 40px;\n  margin: 0;\n  text-align: center;\n  font-weight: bold;\n  color: white;\n}\n\n.roundedInput[_ngcontent-%COMP%] {\n  --border-radius: 10px;\n  --border-width: 1px;\n  --highlight-height: 0;\n  --background: #f8f9fa;\n  padding-top: 20px;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.roundedInput.ion-invalid.item-has-focus[_ngcontent-%COMP%] {\n  --border-color: var(--ion-color-danger-shade);\n}\n\n.roundedInput.ion-valid.item-has-focus[_ngcontent-%COMP%] {\n  --border-color: var(--ion-color-success-shade);\n}\n\n.roundedInput.ion-invalid.ion-dirty[_ngcontent-%COMP%] {\n  --border-color: var(--ion-color-danger-shade);\n}\n\n.roundedInput.ion-valid.ion-dirty[_ngcontent-%COMP%] {\n  --border-color: var(--ion-color-success-shade);\n}\n\n.submit-button[_ngcontent-%COMP%] {\n  --background: #ffff;\n  --background-activated: #fff;\n  --ripple-color: #fff;\n  --background-focused: #fff;\n  --color-focused: #fff;\n  color: #128C7E;\n  --vertical-align: middle;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.button-div[_ngcontent-%COMP%] {\n  padding-top: 6%;\n}\n\n.forgot-password-link[_ngcontent-%COMP%] {\n  --vertical-align: middle;\n  color: white;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CcmVuZGFuR2liZXJzb24vRG9jdW1lbnRzL0Rldi9WaXNpdC9WaXNpdC4vc3JjL2FwcC9wYWdlcy9zaWduLWluL3NpZ24taW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaWduLWluL3NpZ24taW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURDRTtFQUVFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQUo7O0FESUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBRUUsNkNBQUE7QUNGRjs7QURLQTtFQUNFLDhDQUFBO0FDRkY7O0FES0E7RUFDRSw2Q0FBQTtBQ0ZGOztBREtBO0VBQ0UsOENBQUE7QUNGRjs7QURLQTtFQUNFLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBRUEsd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSEY7O0FETUE7RUFDRSxlQUFBO0FDSEY7O0FETUE7RUFDRSx3QkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG5cclxuICBoMSB7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDUlOyBcclxuICAgIHBhZGRpbmctdG9wOiAyNSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLnJvdW5kZWRJbnB1dCB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xyXG4gIC0tYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4ucm91bmRlZElucHV0Lmlvbi1pbnZhbGlkLml0ZW0taGFzLWZvY3VzIHtcclxuXHJcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUpO1xyXG59XHJcblxyXG4ucm91bmRlZElucHV0Lmlvbi12YWxpZC5pdGVtLWhhcy1mb2N1cyB7XHJcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcclxufVxyXG5cclxuLnJvdW5kZWRJbnB1dC5pb24taW52YWxpZC5pb24tZGlydHkge1xyXG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcclxufVxyXG5cclxuLnJvdW5kZWRJbnB1dC5pb24tdmFsaWQuaW9uLWRpcnR5IHtcclxuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xyXG59XHJcblxyXG4uc3VibWl0LWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZjtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmO1xyXG4gIC0tcmlwcGxlLWNvbG9yOiAjZmZmO1xyXG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmO1xyXG4gIC0tY29sb3ItZm9jdXNlZDogI2ZmZjtcclxuICBjb2xvcjogIzEyOEM3RTtcclxuXHJcbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbn1cclxuXHJcbi5idXR0b24tZGl2IHtcclxuICBwYWRkaW5nLXRvcDogNiU7XHJcbn1cclxuXHJcbi5mb3Jnb3QtcGFzc3dvcmQtbGluayB7XHJcbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufSIsImgxIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cbmlvbi1jb250ZW50IGgxIHtcbiAgcGFkZGluZy10b3A6IDI1JTtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5yb3VuZGVkSW5wdXQge1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcbiAgLS1iYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG59XG5cbi5yb3VuZGVkSW5wdXQuaW9uLWludmFsaWQuaXRlbS1oYXMtZm9jdXMge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG59XG5cbi5yb3VuZGVkSW5wdXQuaW9uLXZhbGlkLml0ZW0taGFzLWZvY3VzIHtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlKTtcbn1cblxuLnJvdW5kZWRJbnB1dC5pb24taW52YWxpZC5pb24tZGlydHkge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG59XG5cbi5yb3VuZGVkSW5wdXQuaW9uLXZhbGlkLmlvbi1kaXJ0eSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZjtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZjtcbiAgLS1yaXBwbGUtY29sb3I6ICNmZmY7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmO1xuICAtLWNvbG9yLWZvY3VzZWQ6ICNmZmY7XG4gIGNvbG9yOiAjMTI4QzdFO1xuICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xufVxuXG4uYnV0dG9uLWRpdiB7XG4gIHBhZGRpbmctdG9wOiA2JTtcbn1cblxuLmZvcmdvdC1wYXNzd29yZC1saW5rIHtcbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sign-in',
                templateUrl: './sign-in.page.html',
                styleUrls: ['./sign-in.page.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__["AccountsService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-sign-in-sign-in-module-es2017.js.map