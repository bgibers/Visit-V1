(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{T60g:function(t,i,e){"use strict";e.r(i),e.d(i,"PostRegisterLocationsPageModule",(function(){return y}));var n=e("ofXK"),o=e("3Pt+"),c=e("TEn/"),s=e("tyNb"),a=e("KFg1"),r=e("iBXB"),d=e("MCRb"),l=e("IzEk"),h=e("fXoL");function u(t,i){if(1&t){const t=h.ic();h.hc(0,"ion-button",7),h.pc("click",(function(){h.Fc(t);return h.sc().switchMode()})),h.Kc(1,"Next"),h.gc()}}function p(t,i){if(1&t){const t=h.ic();h.hc(0,"ion-button",7),h.pc("click",(function(){h.Fc(t);return h.sc().switchMode()})),h.Kc(1,"Back"),h.gc()}}function g(t,i){if(1&t){const t=h.ic();h.hc(0,"ion-button",7),h.pc("click",(function(){h.Fc(t);return h.sc().onSubmit()})),h.Kc(1,"I'm Done!"),h.gc()}}class f{constructor(t,i,e,n,o){this.router=t,this.loadingController=i,this.accountService=e,this.zone=n,this.route=o,this.selectionMode=r.a.VISITED,this.titleTextVisited="Where have you visited?",this.titleTextToVisit="Bucketlist",this.subtitleTextVisited="We'll get to where you want to go in a moment,\n  but first let's show your friends (and yourself) where you've been!",this.subtitleTextToVisit="Mark down every and any place you find interesting and want to checkout someday, let's make it happen!",this.displayVisitedText=!0,this.locationRequest={locations:{},registration:!0},this.hasError=!1,this.error=""}async ionViewDidEnter(){const t=await this.loadingController.create({});await t.present(),this.map=new a.a(this.zone),this.map.addMapToDiv(this.selectionMode,"register-map"),t.dismiss()}ionViewDidLeave(){this.map.destroyMap()}switchMode(){this.map.zoomHome(),this.selectionMode===r.a.VISITED?(this.map.setSelectionMode(r.a.TO_VISIT),this.displayVisitedText=!1,this.selectionMode=r.a.TO_VISIT):(this.map.setSelectionMode(r.a.VISITED),this.displayVisitedText=!0,this.selectionMode=r.a.VISITED)}mapLocationsToRequest(){this.map.selectedArr.forEach(t=>{this.locationRequest.locations[t.locationId]=t.status})}onSubmit(){this.mapLocationsToRequest(),this.accountService.accountUpdateLocationsPost(this.locationRequest).pipe(Object(l.a)(1)).subscribe(t=>{const i={replaceUrl:!1};this.zone.run(()=>{this.router.navigateByUrl("/tab1",i)})},t=>{this.hasError=!0,this.error="An unexpected error has occurred."})}}f.\u0275fac=function(t){return new(t||f)(h.cc(s.g),h.cc(c.U),h.cc(d.a),h.cc(h.L),h.cc(s.a))},f.\u0275cmp=h.Wb({type:f,selectors:[["post-register-locations"]],decls:15,vars:5,consts:[["no-bounce",""],[1,"splash"],[1,"ion-align-items-baseline"],[1,"ion-justify-content-start"],["id","register-map",1,"chartdiv"],[1,"button-div"],["class","submit-button","expand","block","type","submit",3,"click",4,"ngIf"],["expand","block","type","submit",1,"submit-button",3,"click"]],template:function(t,i){1&t&&(h.hc(0,"ion-content",0),h.hc(1,"div",1),h.hc(2,"ion-row",2),h.dc(3,"ion-col",3),h.gc(),h.hc(4,"h1"),h.Kc(5),h.gc(),h.hc(6,"h3"),h.Kc(7),h.gc(),h.hc(8,"h4"),h.Kc(9," Click a location on the map to zoom to it. Double click the location to select/deselect it. "),h.gc(),h.dc(10,"div",4),h.hc(11,"div",5),h.Jc(12,u,2,0,"ion-button",6),h.Jc(13,p,2,0,"ion-button",6),h.Jc(14,g,2,0,"ion-button",6),h.gc(),h.gc(),h.gc()),2&t&&(h.Rb(5),h.Lc(i.displayVisitedText?i.titleTextVisited:i.titleTextToVisit),h.Rb(2),h.Lc(i.displayVisitedText?i.subtitleTextVisited:i.subtitleTextToVisit),h.Rb(5),h.yc("ngIf",i.displayVisitedText),h.Rb(1),h.yc("ngIf",!i.displayVisitedText),h.Rb(1),h.yc("ngIf",!i.displayVisitedText))},directives:[c.m,c.G,c.l,n.k,c.f],styles:["ion-content[_ngcontent-%COMP%]{--background:none}ion-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding-left:5%;padding-top:10%;font-size:40px;font-weight:700;margin:0;color:#fff}ion-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px}ion-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{padding-left:5%;padding-right:0;color:#fff;margin:0}ion-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:11px}.submit-button[_ngcontent-%COMP%]{--background:#fff;--background-activated:#fff;--ripple-color:#fff;--background-focused:#fff;--color-focused:#fff;color:#128c7e;--vertical-align:middle;padding-left:5%;padding-right:5%}.button-div[_ngcontent-%COMP%]{padding-top:0}.chartdiv[_ngcontent-%COMP%]{width:100%;height:400px}"]});const b=[{path:"",component:f}];class m{}m.\u0275mod=h.ac({type:m}),m.\u0275inj=h.Zb({factory:function(t){return new(t||m)},imports:[[s.k.forChild(b)],s.k]});class y{}y.\u0275mod=h.ac({type:y}),y.\u0275inj=h.Zb({factory:function(t){return new(t||y)},imports:[[n.c,o.g,c.S,m]]})}}]);