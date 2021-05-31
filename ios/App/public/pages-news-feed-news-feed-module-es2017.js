(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-news-feed-news-feed-module"],{

/***/ "./src/app/pages/news-feed/news-feed.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/news-feed/news-feed.module.ts ***!
  \*****************************************************/
/*! exports provided: NewsFeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFeedPageModule", function() { return NewsFeedPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _news_feed_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news-feed.page */ "./src/app/pages/news-feed/news-feed.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");









class NewsFeedPageModule {
}
NewsFeedPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NewsFeedPageModule });
NewsFeedPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NewsFeedPageModule_Factory(t) { return new (t || NewsFeedPageModule)(); }, imports: [[
            _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _news_feed_page__WEBPACK_IMPORTED_MODULE_5__["NewsFeedPage"] }])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NewsFeedPageModule, { declarations: [_news_feed_page__WEBPACK_IMPORTED_MODULE_5__["NewsFeedPage"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NewsFeedPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _news_feed_page__WEBPACK_IMPORTED_MODULE_5__["NewsFeedPage"] }])
                ],
                declarations: [
                    _news_feed_page__WEBPACK_IMPORTED_MODULE_5__["NewsFeedPage"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/news-feed/news-feed.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/news-feed/news-feed.page.ts ***!
  \***************************************************/
/*! exports provided: NewsFeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFeedPage", function() { return NewsFeedPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modals_search_search_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/search/search.page */ "./src/app/pages/modals/search/search.page.ts");
/* harmony import */ var _modals_map_filter_map_filter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/map-filter/map-filter.page */ "./src/app/pages/modals/map-filter/map-filter.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _backend_clients_api_accounts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../backend/clients/api/accounts.service */ "./src/app/backend/clients/api/accounts.service.ts");
/* harmony import */ var src_app_backend_clients__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/backend/clients */ "./src/app/backend/clients/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/post/post.component */ "./src/app/components/post/post.component.ts");














class NewsFeedPage {
    constructor(modalController, zone, loadingController, accountService, postService, router) {
        this.modalController = modalController;
        this.zone = zone;
        this.loadingController = loadingController;
        this.accountService = accountService;
        this.postService = postService;
        this.router = router;
        this.posts = [];
        this.pageNumber = 1;
        this.morePages = false;
        this.filter = '';
        this.selectedUserId = '';
    }
    ngOnInit() {
        // console.log(1);
        // setInterval(_ => {
        //   console.log(this.posts);
        // }, 1000)
        this.postService.postsPageGet(this.pageNumber, this.filter, this.selectedUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(res => {
            this.morePages = res.hasNextPage;
            this.pageNumber = res.pageIndex;
            this.posts = res.items;
        }, async (err) => {
            if (err.status === 401) {
                await this.accountService.logout();
            }
        });
    }
    getPosts(event) {
        if (this.morePages) {
            this.postService.postsPageGet(this.pageNumber + 1, this.filter, this.selectedUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(res => {
                console.log(res);
                this.morePages = res.hasNextPage;
                this.pageNumber = res.pageIndex;
                // TODO The posts shouldn't be overwritten here but rather appended... not working though
                // this.posts = res.items;
                if (this.posts.length === 0) {
                    this.posts = [];
                }
                else {
                    let oldposts = this.posts;
                    this.posts = [];
                    let oldResLen = oldposts.length;
                    for (let i = 0; i < oldResLen; i++) {
                        this.posts.push(oldposts[i]);
                    }
                }
                let resLen = res.items.length;
                for (let i = 0; i < resLen; i++) {
                    this.posts.push(res.items[i]);
                }
                if (event) {
                    event.target.complete();
                }
            }, (async (err) => {
                console.log(err);
                if (err.status === 401) {
                    await this.accountService.logout();
                }
            }));
        }
        else {
            this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
        }
    }
    refreshPosts(event) {
        this.postService.postsPageGet(1, this.filter, this.selectedUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(res => {
            this.morePages = res.hasNextPage;
            this.pageNumber = res.pageIndex;
            this.posts = res.items;
            if (event) {
                event.target.complete();
            }
        }, (async (err) => {
            console.log(err);
            if (err.status === 401) {
                await this.accountService.logout();
            }
        }));
    }
    async presentSearchModal() {
        const modal = await this.modalController.create({
            component: _modals_search_search_page__WEBPACK_IMPORTED_MODULE_2__["SearchPage"],
            componentProps: {},
            showBackdrop: true,
            cssClass: 'search-modal'
        });
        return await modal.present();
    }
    openProfile() {
        const navigationExtras = {
            replaceUrl: true,
            skipLocationChange: true,
            state: {
                userId: this.accountService.getUserId()
            }
        };
        this.zone.run(() => {
            this.router.navigateByUrl('/user-profile', navigationExtras);
        });
    }
    async presentMapFilter() {
        const modal = await this.modalController.create({
            component: _modals_map_filter_map_filter_page__WEBPACK_IMPORTED_MODULE_3__["MapFilterPage"],
            showBackdrop: true,
            cssClass: 'filter-modal',
            componentProps: {
                filter: this.filter
            }
        });
        modal.onDidDismiss().then(async (dataReturned) => {
            if (dataReturned !== null) {
                this.filter = dataReturned.data;
                this.refreshPosts();
                await this.loadingController.dismiss();
            }
        });
        return await modal.present();
    }
}
NewsFeedPage.ɵfac = function NewsFeedPage_Factory(t) { return new (t || NewsFeedPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_backend_clients_api_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backend_clients__WEBPACK_IMPORTED_MODULE_6__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
NewsFeedPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsFeedPage, selectors: [["news-feed"]], viewQuery: function NewsFeedPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScroll"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.infiniteScroll = _t.first);
    } }, decls: 24, vars: 2, consts: [[2, "background-color", "#128C7E"], ["color", "#128C7E"], [1, "header-grid"], [1, "ion-align-items-baseline"], [1, "ion-justify-content-start"], [1, "ion-justify-content-start", "circle-pic", 3, "click"], ["src", "../../assets/defaultuser.png", 1, "img-center", "circle-pic"], [1, "ion-justify-self-bottom"], ["height", "60px", "width", "120px", "src", "../../assets/logos/whiteLogo.png"], [1, "ion-justify-content-end"], [1, "ion-justify-content-end", 3, "click"], ["src", "../../assets/UI/search-outline.svg", 1, "img-center"], ["color", "light", 3, "fullscreen"], ["slot", "fixed", 3, "ionRefresh"], ["refresherRef", ""], ["pullingText", "Pull to refresh", "refreshingSpinner", "circles", "refreshingText", "Refreshing..."], [3, "posts"], ["threshold", "100px", 3, "ionInfinite"], ["loadingSpinner", "circles", "loadingText", "Getting more posts..."], ["vertical", "bottom", 1, "map-filter-fab"], ["fill", "clear", 3, "click"], ["src", "../../assets/UI/FilterClosed.svg"]], template: function NewsFeedPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-grid", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-buttons", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsFeedPage_Template_ion_button_click_6_listener() { return ctx.openProfile(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsFeedPage_Template_ion_button_click_12_listener() { return ctx.presentSearchModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-content", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-refresher", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionRefresh", function NewsFeedPage_Template_ion_refresher_ionRefresh_15_listener($event) { return ctx.refreshPosts($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ion-refresher-content", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "post", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-infinite-scroll", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionInfinite", function NewsFeedPage_Template_ion_infinite_scroll_ionInfinite_19_listener($event) { return ctx.getPosts($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "ion-infinite-scroll-content", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-fab", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsFeedPage_Template_ion_button_click_22_listener() { return ctx.presentMapFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullscreen", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("posts", ctx.posts);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRefresherContent"], _components_post_post_component__WEBPACK_IMPORTED_MODULE_8__["PostComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScrollContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFab"]], styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: translucent;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --min-height:2%!important;\n  --padding-top: 10px;\n}\n\n.circle-pic[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 35px;\n  border-radius: 50%;\n}\n\n.center[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\n.post-pic[_ngcontent-%COMP%] {\n  --border-radius: 75% ;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: normal;\n  padding-bottom: 5px;\n}\n\n.header-grid[_ngcontent-%COMP%] {\n  --ion-grid-columns: 3;\n  --ion-grid-column-padding:1px;\n  --ion-grid-padding:1px;\n}\n\n.map-filter[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-self: center;\n}\n\n.map-filter-fab[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-self: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: none;\n  background-color: inherit;\n  font-size: 16px;\n  display: inline-block;\n}\n\n.comment[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  --padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9CcmVuZGFuR2liZXJzb24vRG9jdW1lbnRzL0Rldi9WaXNpdC9WaXNpdC1hcHAtbmV3L1Zpc2l0Li9zcmMvYXBwL3BhZ2VzL25ld3MtZmVlZC9uZXdzLWZlZWQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9uZXdzLWZlZWQvbmV3cy1mZWVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7QUNDQTs7QURFQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURTQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ05GOztBRFNBO0VBQ0Usb0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FDTkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZXdzLWZlZWQvbmV3cy1mZWVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG5pb24tdG9vbGJhcntcbiAgLS1taW4taGVpZ2h0OjIlIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmNpcmNsZS1waWN7XG4gIHdpZHRoOjQ1cHg7XG4gIGhlaWdodDozNXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wb3N0LXBpY3tcbiAgLS1ib3JkZXItcmFkaXVzOiA3NSVcbn1cblxuLmNhcmQtdGl0bGV7XG4gIGZvbnQtc2l6ZToyMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uaGVhZGVyLWdyaWQge1xuLS1pb24tZ3JpZC1jb2x1bW5zOiAzO1xuLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzoxcHg7XG4tLWlvbi1ncmlkLXBhZGRpbmc6MXB4O1xufVxuXG4ubWFwLWZpbHRlcntcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLm1hcC1maWx0ZXItZmFie1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4vLyAuYnV0dG9uOmhvdmVyIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzJFRTU5RDtcbi8vICAgYm94LXNoYWRvdzogMHB4IDE1cHggMjBweCByZ2JhKDQ2LCAyMjksIDE1NywgMC40KTtcbi8vICAgY29sb3I6ICNmZmY7XG4vLyAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtN3B4KTtcbi8vIH1cblxuLmJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jb21tZW50e1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIH0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1taW4taGVpZ2h0OjIlIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmNpcmNsZS1waWMge1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wb3N0LXBpYyB7XG4gIC0tYm9yZGVyLXJhZGl1czogNzUlIDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5oZWFkZXItZ3JpZCB7XG4gIC0taW9uLWdyaWQtY29sdW1uczogMztcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzoxcHg7XG4gIC0taW9uLWdyaWQtcGFkZGluZzoxcHg7XG59XG5cbi5tYXAtZmlsdGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLm1hcC1maWx0ZXItZmFiIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jb21tZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsFeedPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'news-feed',
                templateUrl: 'news-feed.page.html',
                styleUrls: ['news-feed.page.scss']
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"] }, { type: _backend_clients_api_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"] }, { type: src_app_backend_clients__WEBPACK_IMPORTED_MODULE_6__["PostService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { infiniteScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScroll"]]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-news-feed-news-feed-module-es2017.js.map