function asyncGeneratorStep(t,e,n,i,o,c,r){try{var s=t[c](r),a=s.value}catch(u){return void n(u)}s.done?e(a):Promise.resolve(a).then(i,o)}function _asyncToGenerator(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var c=t.apply(e,n);function r(t){asyncGeneratorStep(c,i,o,r,s,"next",t)}function s(t){asyncGeneratorStep(c,i,o,r,s,"throw",t)}r(void 0)}))}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{T60g:function(t,e,n){"use strict";n.r(e),n.d(e,"PostRegisterLocationsPageModule",(function(){return x}));var i=n("ofXK"),o=n("3Pt+"),c=n("TEn/"),r=n("tyNb"),s=n("KFg1"),a=n("iBXB"),u=n("MCRb"),l=n("IzEk"),h=n("y8Nm"),f=n("ue0K"),d=n("VQPA"),p=n("fXoL"),g=n("cZdB");function m(t,e){if(1&t){var n=p.ic();p.hc(0,"ion-item",11),p.pc("click",(function(){p.Fc(n);var t=e.$implicit;return p.sc(2).dataas(t)})),p.hc(1,"ion-label"),p.Kc(2),p.gc(),p.gc()}if(2&t){var i=e.$implicit;p.Rb(2),p.Lc(i.name)}}function v(t,e){if(1&t){var n=p.ic();p.hc(0,"ion-item",11),p.pc("click",(function(){p.Fc(n);var t=e.$implicit;return p.sc(2).dataas(t)})),p.hc(1,"ion-label"),p.Kc(2),p.gc(),p.gc()}if(2&t){var i=e.$implicit;p.Rb(2),p.Lc(i.name)}}function b(t,e){if(1&t&&(p.hc(0,"ion-list"),p.Jc(1,m,3,1,"ion-item",10),p.tc(2,"filter"),p.Jc(3,v,3,1,"ion-item",10),p.tc(4,"filter"),p.gc()),2&t){var n=p.sc();p.Rb(1),p.yc("ngForOf",p.vc(2,2,n.countries.Countries,n.filterTerm)),p.Rb(2),p.yc("ngForOf",p.vc(4,5,n.states.States,n.filterTerm))}}function y(t,e){if(1&t){var n=p.ic();p.hc(0,"ion-button",12),p.pc("click",(function(){return p.Fc(n),p.sc().switchMode()})),p.Kc(1,"Next"),p.gc()}}function k(t,e){if(1&t){var n=p.ic();p.hc(0,"ion-button",12),p.pc("click",(function(){return p.Fc(n),p.sc().switchMode()})),p.Kc(1,"Back"),p.gc()}}function T(t,e){if(1&t){var n=p.ic();p.hc(0,"ion-button",12),p.pc("click",(function(){return p.Fc(n),p.sc().onSubmit()})),p.Kc(1,"I'm Done!"),p.gc()}}var w=function(){function t(e,n,i,o,c,r){_classCallCheck(this,t),this.router=e,this.searchLocations=n,this.loadingController=i,this.accountService=o,this.zone=c,this.route=r,this.selectionMode=a.a.VISITED,this.titleTextVisited="Where have you visited?",this.titleTextToVisit="Bucketlist",this.subtitleTextVisited="We'll get to where you want to go in a moment,\n  but first let's show your friends (and yourself) where you've been!",this.subtitleTextToVisit="Mark down every and any place you find interesting and want to checkout someday, let's make it happen!",this.displayVisitedText=!0,this.locationRequest={locations:{},registration:!0},this.hasError=!1,this.error="",this.countries=h,this.states=f}var e,n;return _createClass(t,[{key:"ionViewDidEnter",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadingController.create({});case 2:return e=t.sent,t.next=5,e.present();case 5:this.map=new s.a(this.zone),this.map.addMapToDiv(this.selectionMode,"register-map"),e.dismiss();case 8:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"ionViewDidLeave",value:function(){this.map.destroyMap()}},{key:"switchMode",value:function(){this.map.zoomHome(),this.selectionMode===a.a.VISITED?(this.map.setSelectionMode(a.a.TO_VISIT),this.displayVisitedText=!1,this.selectionMode=a.a.TO_VISIT):(this.map.setSelectionMode(a.a.VISITED),this.displayVisitedText=!0,this.selectionMode=a.a.VISITED)}},{key:"mapLocationsToRequest",value:function(){var t=this;this.map.selectedArr.forEach((function(e){t.locationRequest.locations[e.locationId]=e.status}))}},{key:"onSubmit",value:(e=_asyncToGenerator(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadingController.create({});case 2:return e=t.sent,t.next=5,e.present();case 5:this.mapLocationsToRequest(),this.accountService.accountUpdateLocationsPost(this.locationRequest).pipe(Object(l.a)(1)).subscribe((function(t){var i={replaceUrl:!0};e.dismiss(),n.zone.run((function(){n.router.navigateByUrl("/tab1",i)}))}),(function(t){e.dismiss(),n.hasError=!0,n.error="An unexpected error has occurred."}));case 7:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"searchvalue",value:function(){this.hide=!0,this.mapvalue=this.filterTerm,this.map.zoomToLocation(this.mapvalue)}},{key:"dataas",value:function(t){this.hide=!1,this.map.zoomToLocation(t.id)}},{key:"setFilteredItems",value:function(){var t=this;return this.country.filter((function(e){return e.name.toLowerCase().indexOf(t.searchTerm.toLowerCase())>-1}))}},{key:"show",value:function(t){this.searchLocations.dis=t}}]),t}();w.\u0275fac=function(t){return new(t||w)(p.cc(r.g),p.cc(d.a),p.cc(c.V),p.cc(u.a),p.cc(p.L),p.cc(r.a))},w.\u0275cmp=p.Wb({type:w,selectors:[["post-register-locations"]],decls:18,vars:7,consts:[["no-bounce",""],[1,"splash"],[1,"ion-align-items-baseline"],[1,"ion-justify-content-start"],[1,"map-search-container"],["spellcheck","true",3,"ngModel","focusout","search","focusin","ngModelChange"],[4,"ngIf"],["id","register-map",1,"chartdiv"],[1,"button-div"],["class","submit-button","expand","block","type","submit",3,"click",4,"ngIf"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["expand","block","type","submit",1,"submit-button",3,"click"]],template:function(t,e){1&t&&(p.hc(0,"ion-content",0),p.hc(1,"div",1),p.hc(2,"ion-row",2),p.dc(3,"ion-col",3),p.gc(),p.hc(4,"h1"),p.Kc(5),p.gc(),p.hc(6,"h3"),p.Kc(7),p.gc(),p.hc(8,"h4"),p.Kc(9," Click a location on the map to zoom to it. Double click the location to select/deselect it. "),p.gc(),p.hc(10,"div",4),p.hc(11,"ion-searchbar",5),p.pc("focusout",(function(){return e.show(!0)}))("search",(function(){return e.searchvalue()}))("focusin",(function(){return e.show(!1)}))("ngModelChange",(function(t){return e.filterTerm=t})),p.gc(),p.Jc(12,b,5,8,"ion-list",6),p.gc(),p.dc(13,"div",7),p.hc(14,"div",8),p.Jc(15,y,2,0,"ion-button",9),p.Jc(16,k,2,0,"ion-button",9),p.Jc(17,T,2,0,"ion-button",9),p.gc(),p.gc(),p.gc()),2&t&&(p.Rb(5),p.Lc(e.displayVisitedText?e.titleTextVisited:e.titleTextToVisit),p.Rb(2),p.Lc(e.displayVisitedText?e.subtitleTextVisited:e.subtitleTextToVisit),p.Rb(4),p.yc("ngModel",e.filterTerm),p.Rb(1),p.yc("ngIf",1==e.hide),p.Rb(3),p.yc("ngIf",e.displayVisitedText),p.Rb(1),p.yc("ngIf",!e.displayVisitedText),p.Rb(1),p.yc("ngIf",!e.displayVisitedText))},directives:[c.n,c.H,c.m,c.I,c.cb,o.k,o.m,i.k,c.C,i.j,c.y,c.B,c.g],pipes:[g.a],styles:["ion-content[_ngcontent-%COMP%]{--background:none}ion-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding-left:5%;padding-top:10%;font-size:40px;font-weight:700;margin:0;color:#fff}ion-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px}ion-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{padding-left:5%;padding-right:0;color:#fff;margin:0}ion-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:11px}.map-search-container[_ngcontent-%COMP%]{padding-left:10%;padding-right:10%;margin-top:5px}.submit-button[_ngcontent-%COMP%]{--background:#fff;--background-activated:#fff;--ripple-color:#fff;--background-focused:#fff;--color-focused:#fff;color:#128c7e;--vertical-align:middle;padding-left:5%;padding-right:5%}.button-div[_ngcontent-%COMP%]{padding-top:0}.chartdiv[_ngcontent-%COMP%]{width:100%;height:400px}"]});var C=[{path:"",component:w}],M=function t(){_classCallCheck(this,t)};M.\u0275mod=p.ac({type:M}),M.\u0275inj=p.Zb({factory:function(t){return new(t||M)},imports:[[r.k.forChild(C)],r.k]});var x=function t(){_classCallCheck(this,t)};x.\u0275mod=p.ac({type:x}),x.\u0275inj=p.Zb({factory:function(t){return new(t||x)},imports:[[i.c,o.g,c.T,M,g.b]]})}}]);