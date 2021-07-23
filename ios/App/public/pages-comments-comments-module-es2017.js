(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-comments-comments-module"],{

/***/ "./src/app/pages/comments/comments-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/comments/comments-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CommentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsPageRoutingModule", function() { return CommentsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _comments_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.page */ "./src/app/pages/comments/comments.page.ts");





const routes = [
    {
        path: '',
        component: _comments_page__WEBPACK_IMPORTED_MODULE_2__["CommentsPage"],
    },
];
class CommentsPageRoutingModule {
}
CommentsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CommentsPageRoutingModule });
CommentsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CommentsPageRoutingModule_Factory(t) { return new (t || CommentsPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommentsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/comments/comments.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/comments/comments.module.ts ***!
  \***************************************************/
/*! exports provided: CommentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsPageModule", function() { return CommentsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _comments_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comments-routing.module */ "./src/app/pages/comments/comments-routing.module.ts");
/* harmony import */ var _comments_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comments.page */ "./src/app/pages/comments/comments.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








class CommentsPageModule {
}
CommentsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CommentsPageModule });
CommentsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CommentsPageModule_Factory(t) { return new (t || CommentsPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _comments_routing_module__WEBPACK_IMPORTED_MODULE_4__["CommentsPageRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommentsPageModule, { declarations: [_comments_page__WEBPACK_IMPORTED_MODULE_5__["CommentsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _comments_routing_module__WEBPACK_IMPORTED_MODULE_4__["CommentsPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _comments_routing_module__WEBPACK_IMPORTED_MODULE_4__["CommentsPageRoutingModule"],
                ],
                declarations: [_comments_page__WEBPACK_IMPORTED_MODULE_5__["CommentsPage"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/comments/comments.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/comments/comments.page.ts ***!
  \*************************************************/
/*! exports provided: CommentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsPage", function() { return CommentsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/backend/clients */ "./src/app/backend/clients/index.ts");
/* harmony import */ var _modals_search_search_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/search/search.page */ "./src/app/pages/modals/search/search.page.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/date-ago.pipe */ "./src/app/pipes/date-ago.pipe.ts");















function CommentsPage_h1_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No comments! Be the first! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommentsPage_ion_item_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-grid", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-row", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-col", 18);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "dateAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", comment_r2.user.avi, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", comment_r2.user.firstName, " ", comment_r2.user.lastname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r2.comment, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 5, comment_r2.date));
} }
class CommentsPage {
    constructor(storage, modalController, router, zone, route, postSvc, accountService) {
        this.storage = storage;
        this.modalController = modalController;
        this.router = router;
        this.zone = zone;
        this.route = route;
        this.postSvc = postSvc;
        this.accountService = accountService;
        this.comments = [];
        this.newComments = [];
        this.postId = '';
        this.commentText = '';
        this.storage.get('image').then((val) => {
            this.image = val.avi;
        });
        this.route.queryParams.subscribe((params) => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.postId = this.router.getCurrentNavigation().extras.state.postId;
            }
        });
    }
    myFunc() {
        return { count: 1, data: { id: 1 } };
    }
    ngOnInit() {
        this.userId = this.accountService.getUserId();
    }
    ionViewWillEnter() {
        this.getComments();
    }
    getComments() {
        // todo fix this. the list is overwriting
        this.postSvc
            .postsCommentsGetPostIdGet(this.postId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe((res) => {
            if (this.comments.length === 0) {
                this.comments = [];
            }
            else {
                this.comments = [];
                // this.newComments = [];
                // console.log(this.comments);
                // let oldResLen = oldComments.length;
                //   for (let i = 0; i < oldResLen; i++) {
                //     console.log(i);
                //     this.comments.push(oldComments[i]);
                //     this.newComments.push(oldComments[i]);
                //   }
            }
            const resLen = res.length;
            for (let i = 0; i < resLen; i++) {
                this.comments.push(res[i]);
            }
            // this.comments = res;
        });
    }
    get canSend() {
        return this.commentText.length > 1 && this.commentText.length < 250;
    }
    commentOnPost() {
        const comment = {
            comment: this.commentText,
        };
        this.postSvc
            .postsCommentPostIdPost(this.postId, comment)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe((res) => {
            // todo handle error. refresh comments after new posted
            this.getComments();
        });
        this.commentText = '';
    }
    backToFeed() {
        this.zone.run(() => {
            this.router.navigateByUrl('/news-feed');
        });
    }
    openProfile() {
        const navigationExtras = {
            replaceUrl: true,
            skipLocationChange: true,
            state: {
                userId: this.accountService.getUserId(),
            },
        };
        this.zone.run(() => {
            this.router.navigateByUrl('/user-profile', navigationExtras);
        });
    }
    async presentSearchModal() {
        const modal = await this.modalController.create({
            component: _modals_search_search_page__WEBPACK_IMPORTED_MODULE_5__["SearchPage"],
            componentProps: {},
            showBackdrop: true,
            cssClass: 'search-modal',
        });
        return await modal.present();
    }
}
CommentsPage.ɵfac = function CommentsPage_Factory(t) { return new (t || CommentsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__["AccountsService"])); };
CommentsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentsPage, selectors: [["comments"]], decls: 19, vars: 5, consts: [[1, "ion-no-border", 2, "background-color", "#128C7E"], ["color", "#128C7E", 1, "ion-no-border"], [1, "header-grid"], [1, "ion-align-items-baseline"], [1, "ion-justify-content-start"], ["defaultHref", "/tab1", 2, "color", "white"], [3, "scrollY"], ["class", "ion-text-center ion-justify-center", "style", "height: 100%; flex-direction: column", 4, "ngIf"], [3, "items"], ["class", "comment", 4, "virtualItem"], ["type", "text", "placeholder", "Comment", 3, "ngModel", "ngModelChange"], ["clear", "", "item-right", "", 3, "disabled", "click"], [1, "ion-text-center", "ion-justify-center", 2, "height", "100%", "flex-direction", "column"], [1, "comment"], [1, "comments-grid"], [1, "ion-align-self-center"], [1, "ion-align-items-center"], [1, "user-pic", "img-center", 3, "src"], ["size", "2.2"], ["color", "medium"]], template: function CommentsPage_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CommentsPage_h1_8_Template, 2, 0, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-virtual-scroll", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CommentsPage_ion_item_13_Template, 19, 7, "ion-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CommentsPage_Template_ion_input_ngModelChange_16_listener($event) { return ctx.commentText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentsPage_Template_button_click_17_listener() { return ctx.commentOnPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollY", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comments.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.comments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.commentText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.canSend);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonVirtualScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["VirtualItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonText"]], pipes: [_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_9__["DateAgoPipe"]], styles: [".user-pic[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\n.circle-pic[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 50px;\n  border-radius: 50%;\n}\n\n.header-grid[_ngcontent-%COMP%] {\n  --ion-grid-columns: 3;\n  --ion-grid-column-padding: 1px;\n  --ion-grid-padding: 1px;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --padding-top: 10%;\n}\n\n.comments-grid[_ngcontent-%COMP%] {\n  --ion-grid-columns: 3;\n  --ion-grid-column-padding: 1px;\n  --ion-grid-padding: 1px;\n}\n\n.comment[_ngcontent-%COMP%] {\n  margin-bottom: 5px !important;\n  margin-top: 4px !important;\n}\n\nion-card[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n  margin-top: 4px !important;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: none;\n  background-color: inherit;\n  font-size: 16px;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CcmVuZGFuR2liZXJzb24vRG9jdW1lbnRzL0Rldi9WaXNpdC9WaXNpdC4vc3JjL2FwcC9wYWdlcy9jb21tZW50cy9jb21tZW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbW1lbnRzL2NvbW1lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7QUNIRjs7QURNQTtFQUNFLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7QUNIRjs7QURNQTtFQUNFLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQ0hGOztBRE1BO0VBQ0UsNkJBQUE7RUFDQSwwQkFBQTtBQ0hGOztBRE1BO0VBQ0UsNkJBQUE7RUFDQSwwQkFBQTtBQ0hGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21tZW50cy9jb21tZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tY29udGVudCBpb24tdG9vbGJhciB7XHJcbi8vICAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcclxuLy8gfVxyXG5cclxuLnVzZXItcGljIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY2lyY2xlLXBpYyB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmhlYWRlci1ncmlkIHtcclxuICAtLWlvbi1ncmlkLWNvbHVtbnM6IDM7XHJcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMXB4O1xyXG4gIC0taW9uLWdyaWQtcGFkZGluZzogMXB4O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLXRvcDogMTAlO1xyXG59XHJcblxyXG4uY29tbWVudHMtZ3JpZCB7XHJcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiAzO1xyXG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDFweDtcclxuICAtLWlvbi1ncmlkLXBhZGRpbmc6IDFweDtcclxufVxyXG5cclxuLmNvbW1lbnQge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iLCIudXNlci1waWMge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2lyY2xlLXBpYyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5oZWFkZXItZ3JpZCB7XG4gIC0taW9uLWdyaWQtY29sdW1uczogMztcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMXB4O1xuICAtLWlvbi1ncmlkLXBhZGRpbmc6IDFweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctdG9wOiAxMCU7XG59XG5cbi5jb21tZW50cy1ncmlkIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiAzO1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAxcHg7XG4gIC0taW9uLWdyaWQtcGFkZGluZzogMXB4O1xufVxuXG4uY29tbWVudCB7XG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA0cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'comments',
                templateUrl: './comments.page.html',
                styleUrls: ['./comments.page.scss'],
            }]
    }], function () { return [{ type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__["PostService"] }, { type: src_app_backend_clients__WEBPACK_IMPORTED_MODULE_4__["AccountsService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-comments-comments-module-es2017.js.map