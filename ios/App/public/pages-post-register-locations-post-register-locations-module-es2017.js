(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-post-register-locations-post-register-locations-module"],{

/***/ "./src/app/pages/post-register-locations/post-register-locations-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/post-register-locations/post-register-locations-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: PostRegisterLocationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostRegisterLocationsPageRoutingModule", function() { return PostRegisterLocationsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _post_register_locations_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-register-locations.page */ "./src/app/pages/post-register-locations/post-register-locations.page.ts");





const routes = [
    {
        path: '',
        component: _post_register_locations_page__WEBPACK_IMPORTED_MODULE_2__["PostRegisterLocationsPage"]
    }
];
class PostRegisterLocationsPageRoutingModule {
}
PostRegisterLocationsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PostRegisterLocationsPageRoutingModule });
PostRegisterLocationsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PostRegisterLocationsPageRoutingModule_Factory(t) { return new (t || PostRegisterLocationsPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostRegisterLocationsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostRegisterLocationsPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/post-register-locations/post-register-locations.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/post-register-locations/post-register-locations.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PostRegisterLocationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostRegisterLocationsPageModule", function() { return PostRegisterLocationsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _post_register_locations_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-register-locations-routing.module */ "./src/app/pages/post-register-locations/post-register-locations-routing.module.ts");
/* harmony import */ var _post_register_locations_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-register-locations.page */ "./src/app/pages/post-register-locations/post-register-locations.page.ts");







class PostRegisterLocationsPageModule {
}
PostRegisterLocationsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PostRegisterLocationsPageModule });
PostRegisterLocationsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PostRegisterLocationsPageModule_Factory(t) { return new (t || PostRegisterLocationsPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _post_register_locations_routing_module__WEBPACK_IMPORTED_MODULE_4__["PostRegisterLocationsPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostRegisterLocationsPageModule, { declarations: [_post_register_locations_page__WEBPACK_IMPORTED_MODULE_5__["PostRegisterLocationsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _post_register_locations_routing_module__WEBPACK_IMPORTED_MODULE_4__["PostRegisterLocationsPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostRegisterLocationsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _post_register_locations_routing_module__WEBPACK_IMPORTED_MODULE_4__["PostRegisterLocationsPageRoutingModule"]
                ],
                declarations: [_post_register_locations_page__WEBPACK_IMPORTED_MODULE_5__["PostRegisterLocationsPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/post-register-locations/post-register-locations.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/post-register-locations/post-register-locations.page.ts ***!
  \*******************************************************************************/
/*! exports provided: PostRegisterLocationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostRegisterLocationsPage", function() { return PostRegisterLocationsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _objects_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objects/map */ "./src/app/objects/map.ts");
/* harmony import */ var src_app_objects_enums_map_selection_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/objects/enums/map-selection-mode */ "./src/app/objects/enums/map-selection-mode.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/backend/clients */ "./src/app/backend/clients/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function PostRegisterLocationsPage_ion_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostRegisterLocationsPage_ion_button_9_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.switchMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostRegisterLocationsPage_ion_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostRegisterLocationsPage_ion_button_10_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.switchMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostRegisterLocationsPage_ion_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostRegisterLocationsPage_ion_button_11_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "I'm Done!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PostRegisterLocationsPage {
    constructor(router, accountService, zone, route) {
        this.router = router;
        this.accountService = accountService;
        this.zone = zone;
        this.route = route;
        this.selectionMode = src_app_objects_enums_map_selection_mode__WEBPACK_IMPORTED_MODULE_2__["MapSelectionMode"].VISITED;
        this.titleTextVisited = 'Where have you visited?';
        this.titleTextToVisit = 'Bucketlist';
        this.subtitleTextVisited = `We'll get to where you want to go in a moment,
  but first let\'s show your friends (and yourself) where you've been!`;
        this.subtitleTextToVisit = `Mark down every and any place you find interesting and want to checkout someday, let's make it happen!`;
        this.displayVisitedText = true;
        this.locationRequest = {
            locations: {},
        };
        this.hasError = false;
        this.error = '';
    }
    ionViewWillEnter() {
        this.map = new _objects_map__WEBPACK_IMPORTED_MODULE_1__["Map"](this.zone);
        this.map.addMapToDiv(this.selectionMode, 'register-map');
    }
    ionViewDidLeave() {
        this.map.destroyMap();
    }
    switchMode() {
        this.map.zoomHome();
        if (this.selectionMode === src_app_objects_enums_map_selection_mode__WEBPACK_IMPORTED_MODULE_2__["MapSelectionMode"].VISITED) {
            this.map.setSelectionMode(src_app_objects_enums_map_selection_mode__WEBPACK_IMPORTED_MODULE_2__["MapSelectionMode"].TO_VISIT);
            this.displayVisitedText = false;
            this.selectionMode = src_app_objects_enums_map_selection_mode__WEBPACK_IMPORTED_MODULE_2__["MapSelectionMode"].TO_VISIT;
        }
        else {
            this.map.setSelectionMode(src_app_objects_enums_map_selection_mode__WEBPACK_IMPORTED_MODULE_2__["MapSelectionMode"].VISITED);
            this.displayVisitedText = true;
            this.selectionMode = src_app_objects_enums_map_selection_mode__WEBPACK_IMPORTED_MODULE_2__["MapSelectionMode"].VISITED;
        }
    }
    mapLocationsToRequest() {
        this.map.selectedArr.forEach((location) => {
            this.locationRequest.locations[location.locationId] = location.status;
        });
    }
    onSubmit() {
        this.mapLocationsToRequest();
        this.accountService
            .accountUpdateLocationsPost(this.locationRequest)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe((res) => {
            const navigationExtras = {
                replaceUrl: false,
                state: {
                    userName: 'tester',
                },
            };
            this.router.navigateByUrl('/tab1', navigationExtras);
        }, (error) => {
            this.hasError = true;
            this.error = 'An unexpected error has occurred.';
        });
    }
}
PostRegisterLocationsPage.ɵfac = function PostRegisterLocationsPage_Factory(t) { return new (t || PostRegisterLocationsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__["AccountsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
PostRegisterLocationsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostRegisterLocationsPage, selectors: [["post-register-locations"]], decls: 12, vars: 5, consts: [["no-bounce", ""], ["id", "register-map", 1, "chartdiv"], [1, "button-div"], ["class", "submit-button", "expand", "block", "type", "submit", 3, "click", 4, "ngIf"], ["expand", "block", "type", "submit", 1, "submit-button", 3, "click"]], template: function PostRegisterLocationsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Click a location on the map to zoom to it. Double click the location to select/deselect it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PostRegisterLocationsPage_ion_button_9_Template, 2, 0, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PostRegisterLocationsPage_ion_button_10_Template, 2, 0, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PostRegisterLocationsPage_ion_button_11_Template, 2, 0, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.displayVisitedText ? ctx.titleTextVisited : ctx.titleTextToVisit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.displayVisitedText ? ctx.subtitleTextVisited : ctx.subtitleTextToVisit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayVisitedText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.displayVisitedText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.displayVisitedText);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background:none;\n  background: url('backgroundLogin.png');\n  background-size: cover;\n}\nion-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  padding-top: 5%;\n  font-size: 40px;\n  font-weight: bold;\n  color: white;\n}\nion-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  padding-right: 5%;\n  font-size: 15px;\n  color: white;\n}\nion-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  padding-right: 5%;\n  font-size: 10px;\n  color: white;\n}\n.submit-button[_ngcontent-%COMP%] {\n  --background: #fff;\n  --background-activated: #fff;\n  --ripple-color: #fff;\n  --background-focused: #fff;\n  --color-focused: #fff;\n  color: #128C7E;\n  --vertical-align: middle;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n.button-div[_ngcontent-%COMP%] {\n  padding-top: 10%;\n}\n.chartdiv[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CcmVuZGFuR2liZXJzb24vRG9jdW1lbnRzL0Rldi9WaXNpdC9WaXNpdC1hcHAtbmV3L1Zpc2l0Li9zcmMvYXBwL3BhZ2VzL3Bvc3QtcmVnaXN0ZXItbG9jYXRpb25zL3Bvc3QtcmVnaXN0ZXItbG9jYXRpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcG9zdC1yZWdpc3Rlci1sb2NhdGlvbnMvcG9zdC1yZWdpc3Rlci1sb2NhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0FDQ0o7QURBSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNFUjtBREFJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDRVI7QURBSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0VSO0FEQ0E7RUFDSSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUVBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKO0FERUE7RUFDSSxnQkFBQTtBQ0NKO0FERUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9zdC1yZWdpc3Rlci1sb2NhdGlvbnMvcG9zdC1yZWdpc3Rlci1sb2NhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDpub25lO1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kTG9naW4ucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaDEge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgICAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgIH1cbiAgICBoMyB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgIH1cbiAgICBoNCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgIH1cbn1cbi5zdWJtaXQtYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmO1xuICAgIC0tcmlwcGxlLWNvbG9yOiAjZmZmO1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmO1xuICAgIC0tY29sb3ItZm9jdXNlZDogI2ZmZjtcbiAgICBjb2xvcjogIzEyOEM3RTtcbiAgXG4gICAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgcGFkZGluZy1yaWdodDogNSU7XG4gIH1cblxuLmJ1dHRvbi1kaXZ7XG4gICAgcGFkZGluZy10b3A6IDEwJTtcbn1cblxuLmNoYXJ0ZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICB9IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6bm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmRMb2dpbi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5pb24tY29udGVudCBoMSB7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgaDMge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24tY29udGVudCBoNCB7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmY7XG4gIC0tcmlwcGxlLWNvbG9yOiAjZmZmO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZjtcbiAgLS1jb2xvci1mb2N1c2VkOiAjZmZmO1xuICBjb2xvcjogIzEyOEM3RTtcbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbn1cblxuLmJ1dHRvbi1kaXYge1xuICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG4uY2hhcnRkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostRegisterLocationsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'post-register-locations',
                templateUrl: './post-register-locations.page.html',
                styleUrls: ['./post-register-locations.page.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__["AccountsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-post-register-locations-post-register-locations-module-es2017.js.map