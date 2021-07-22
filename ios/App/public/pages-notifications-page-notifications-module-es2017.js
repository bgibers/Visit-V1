(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notifications-page-notifications-module"],{

/***/ "./src/app/pages/notifications-page/notifications.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/notifications-page/notifications.module.ts ***!
  \******************************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications.page */ "./src/app/pages/notifications-page/notifications.page.ts");








class NotificationsPageModule {
}
NotificationsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NotificationsPageModule });
NotificationsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NotificationsPageModule_Factory(t) { return new (t || NotificationsPageModule)(); }, imports: [[
            _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _notifications_page__WEBPACK_IMPORTED_MODULE_5__["NotificationsPage"] }]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NotificationsPageModule, { declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_5__["NotificationsPage"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NotificationsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _notifications_page__WEBPACK_IMPORTED_MODULE_5__["NotificationsPage"] }]),
                ],
                declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_5__["NotificationsPage"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/notifications-page/notifications.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/notifications-page/notifications.page.ts ***!
  \****************************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function NotificationsPage_ion_card_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-grid", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-row", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-row", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-text", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r1.verbage, " ", item_r1.isComment == true ? "\"" + item_r1.comment + "\"" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.time);
} }
class NotificationsPage {
    constructor() {
        this.notifications = [];
        this.commentIcon = '../../../assets/UI/comment-icon.svg';
        this.likeIcon = '../../../assets/UI/liked-icon.svg';
        this.commentVerbage = 'commented on your post';
        this.likeVerbage = 'liked your post';
    }
    ngOnInit() {
        for (let i = 0; i < 10; i++) {
            this.notifications.push({
                name: 'Brendan Giberson',
                icon: this.commentIcon,
                verbage: this.commentVerbage,
                isComment: true,
                comment: 'That looks dope!',
                time: '10 mins ago',
            });
            this.notifications.push({
                name: 'Brendan Giberson',
                icon: this.likeIcon,
                verbage: this.likeVerbage,
                isComment: false,
                comment: 'That looks dope!',
                time: '10 mins ago',
            });
        }
    }
}
NotificationsPage.ɵfac = function NotificationsPage_Factory(t) { return new (t || NotificationsPage)(); };
NotificationsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationsPage, selectors: [["notifications"]], decls: 10, vars: 2, consts: [[1, "ion-no-border", 2, "background-color", "#128C7E"], ["color", "#128C7E", 1, "ion-no-border"], [1, "header-grid"], [1, "ion-align-items-baseline"], [1, "ion-justify-content-start"], ["defaultHref", "/tab1", 2, "color", "white"], [3, "fullscreen"], [1, "notifications-list"], [4, "ngFor", "ngForOf"], [1, "comments-grid"], [2, "padding-left", "8px", "padding-top", "8px"], ["src", "../../../assets/stockPhoto.png", 1, "user-pic", "img-center"], [3, "src"], ["size", "2.5"], [1, "ion-align-items-end"], [1, "ion-align-self-end"], ["color", "medium"]], template: function NotificationsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-grid", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-back-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NotificationsPage_ion_card_9_Template, 21, 5, "ion-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonText"]], styles: [".user-pic[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding-top: 6px;\n  padding-right: 2px;\n  padding-bottom: 12px;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --padding-top: 10%;\n}\n\n.comments-grid[_ngcontent-%COMP%] {\n  --ion-grid-columns: 3;\n  --ion-grid-column-padding: 1px;\n  --ion-grid-padding: 1px;\n}\n\nion-card[_ngcontent-%COMP%] {\n  margin-bottom: 10px !important;\n  margin-top: 4px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CcmVuZGFuR2liZXJzb24vRG9jdW1lbnRzL0Rldi9WaXNpdC9WaXNpdC4vc3JjL2FwcC9wYWdlcy9ub3RpZmljYXRpb25zLXBhZ2Uvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbnMtcGFnZS9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7QUNIRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNGRjs7QURPQTtFQUNFLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUNKRjs7QURPQTtFQUNFLDhCQUFBO0VBQ0EsMEJBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbnMtcGFnZS9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcclxuLy8gICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xyXG4vLyB9XHJcblxyXG4udXNlci1waWMge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxucHtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxufVxyXG4vLyAubm90aWZpY2F0aW9ucy1saXN0IHtcclxuLy8gICBiYWNrZ3JvdW5kOiByZ2JhKDE4LCAxNDAsIDEyNikgIWltcG9ydGFudDsgXHJcbi8vIH1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy10b3A6IDEwJTtcclxufVxyXG5cclxuLmNvbW1lbnRzLWdyaWQge1xyXG4gIC0taW9uLWdyaWQtY29sdW1uczogMztcclxuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAxcHg7XHJcbiAgLS1pb24tZ3JpZC1wYWRkaW5nOiAxcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogNHB4ICFpbXBvcnRhbnQ7XHJcbn0iLCIudXNlci1waWMge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXRvcDogMTAlO1xufVxuXG4uY29tbWVudHMtZ3JpZCB7XG4gIC0taW9uLWdyaWQtY29sdW1uczogMztcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMXB4O1xuICAtLWlvbi1ncmlkLXBhZGRpbmc6IDFweDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDRweCAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'notifications',
                templateUrl: 'notifications.page.html',
                styleUrls: ['notifications.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-notifications-page-notifications-module-es2017.js.map