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
        component: _post_register_locations_page__WEBPACK_IMPORTED_MODULE_2__["PostRegisterLocationsPage"],
    },
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
            _post_register_locations_routing_module__WEBPACK_IMPORTED_MODULE_4__["PostRegisterLocationsPageRoutingModule"],
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
                    _post_register_locations_routing_module__WEBPACK_IMPORTED_MODULE_4__["PostRegisterLocationsPageRoutingModule"],
                ],
                declarations: [_post_register_locations_page__WEBPACK_IMPORTED_MODULE_5__["PostRegisterLocationsPage"]],
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











function PostRegisterLocationsPage_ion_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostRegisterLocationsPage_ion_button_14_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.switchMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostRegisterLocationsPage_ion_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostRegisterLocationsPage_ion_button_15_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.switchMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostRegisterLocationsPage_ion_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostRegisterLocationsPage_ion_button_16_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onSubmit(); });
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
            registration: true
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
                replaceUrl: false
            };
            this.zone.run(() => {
                this.router.navigateByUrl('/tab1', navigationExtras);
            });
        }, (error) => {
            this.hasError = true;
            this.error = 'An unexpected error has occurred.';
        });
    }
}
PostRegisterLocationsPage.ɵfac = function PostRegisterLocationsPage_Factory(t) { return new (t || PostRegisterLocationsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__["AccountsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
PostRegisterLocationsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostRegisterLocationsPage, selectors: [["post-register-locations"]], decls: 17, vars: 5, consts: [["no-bounce", ""], [1, "splash"], [1, "ion-align-items-baseline"], [1, "ion-justify-content-start"], ["defaultHref", "/post-register-about", 2, "color", "beige"], ["id", "register-map", 1, "chartdiv"], [1, "button-div"], ["class", "submit-button", "expand", "block", "type", "submit", 3, "click", 4, "ngIf"], ["expand", "block", "type", "submit", 1, "submit-button", 3, "click"]], template: function PostRegisterLocationsPage_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Click a location on the map to zoom to it. Double click the location to select/deselect it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PostRegisterLocationsPage_ion_button_14_Template, 2, 0, "ion-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PostRegisterLocationsPage_ion_button_15_Template, 2, 0, "ion-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PostRegisterLocationsPage_ion_button_16_Template, 2, 0, "ion-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.displayVisitedText ? ctx.titleTextVisited : ctx.titleTextToVisit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.displayVisitedText ? ctx.subtitleTextVisited : ctx.subtitleTextToVisit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayVisitedText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.displayVisitedText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.displayVisitedText);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButtonDelegate"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: none;\n}\nion-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  padding-top: 0%;\n  font-size: 40px;\n  font-weight: bold;\n  margin: 0;\n  color: white;\n}\nion-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  padding-right: 0%;\n  font-size: 15px;\n  color: white;\n  margin: 0px;\n}\nion-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  padding-right: 0%;\n  font-size: 11px;\n  color: white;\n  margin: 0;\n}\n.submit-button[_ngcontent-%COMP%] {\n  --background: #fff;\n  --background-activated: #fff;\n  --ripple-color: #fff;\n  --background-focused: #fff;\n  --color-focused: #fff;\n  color: #128C7E;\n  --vertical-align: middle;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n.button-div[_ngcontent-%COMP%] {\n  padding-top: 0%;\n}\n.chartdiv[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CcmVuZGFuR2liZXJzb24vRG9jdW1lbnRzL0Rldi9WaXNpdC9WaXNpdC4vc3JjL2FwcC9wYWdlcy9wb3N0LXJlZ2lzdGVyLWxvY2F0aW9ucy9wb3N0LXJlZ2lzdGVyLWxvY2F0aW9ucy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Bvc3QtcmVnaXN0ZXItbG9jYXRpb25zL3Bvc3QtcmVnaXN0ZXItbG9jYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURDSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDQ1I7QURFSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBUjtBREdJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0RSO0FES0E7RUFDSSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUVBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0hKO0FETUE7RUFDSSxlQUFBO0FDSEo7QURNQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3N0LXJlZ2lzdGVyLWxvY2F0aW9ucy9wb3N0LXJlZ2lzdGVyLWxvY2F0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmY7XHJcbiAgICAtLXJpcHBsZS1jb2xvcjogI2ZmZjtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmO1xyXG4gICAgLS1jb2xvci1mb2N1c2VkOiAjZmZmO1xyXG4gICAgY29sb3I6ICMxMjhDN0U7XHJcblxyXG4gICAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4uYnV0dG9uLWRpdiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMCU7XHJcbn1cclxuXHJcbi5jaGFydGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cbmlvbi1jb250ZW50IGgxIHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy10b3A6IDAlO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IGgzIHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogMCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDBweDtcbn1cbmlvbi1jb250ZW50IGg0IHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogMCU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDA7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZmO1xuICAtLXJpcHBsZS1jb2xvcjogI2ZmZjtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmY7XG4gIC0tY29sb3ItZm9jdXNlZDogI2ZmZjtcbiAgY29sb3I6ICMxMjhDN0U7XG4gIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG59XG5cbi5idXR0b24tZGl2IHtcbiAgcGFkZGluZy10b3A6IDAlO1xufVxuXG4uY2hhcnRkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MDBweDtcbn0iXX0= */"] });
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