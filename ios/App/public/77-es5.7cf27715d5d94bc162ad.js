function asyncGeneratorStep(t,n,e,o,c,r,i){try{var s=t[r](i),a=s.value}catch(l){return void e(l)}s.done?n(a):Promise.resolve(a).then(o,c)}function _asyncToGenerator(t){return function(){var n=this,e=arguments;return new Promise((function(o,c){var r=t.apply(n,e);function i(t){asyncGeneratorStep(r,o,c,i,s,"next",t)}function s(t){asyncGeneratorStep(r,o,c,i,s,"throw",t)}i(void 0)}))}}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{qhKe:function(t,n,e){"use strict";e.r(n),e.d(n,"CommentsPageModule",(function(){return P}));var o=e("ofXK"),c=e("3Pt+"),r=e("TEn/"),i=e("tyNb"),s=e("IzEk"),a=e("MCRb"),l=e("ykzJ"),u=e("6g0+"),p=e("fXoL"),g=e("e8h1"),h=e("6Kw5");function m(t,n){if(1&t){var e=p.ic();p.hc(0,"ion-row"),p.hc(1,"ion-col"),p.hc(2,"div",27),p.hc(3,"img",28),p.pc("click",(function(){p.Fc(e);var t=p.sc();return t.openViewer(null==t.post?null:t.post.postContentLink)})),p.gc(),p.gc(),p.gc(),p.gc()}if(2&t){var o=p.sc();p.Rb(3),p.yc("src",null==o.post?null:o.post.postContentLink,p.Gc)("alt",null==o.post?null:o.post.postId)}}function d(t,n){1&t&&(p.hc(0,"h1",29),p.Kc(1," No comments! Be the first! "),p.gc())}function f(t,n){if(1&t){var e=p.ic();p.hc(0,"ion-item",30),p.hc(1,"ion-grid",31),p.hc(2,"ion-row"),p.hc(3,"ion-col",32),p.hc(4,"ion-row",33),p.hc(5,"ion-col"),p.hc(6,"img",34),p.pc("click",(function(){p.Fc(e);var t=n.$implicit;return p.sc().openProfile(t.user.id)})),p.gc(),p.gc(),p.gc(),p.gc(),p.hc(7,"ion-col",35),p.hc(8,"ion-row"),p.hc(9,"ion-col"),p.hc(10,"p"),p.hc(11,"strong"),p.Kc(12),p.gc(),p.Kc(13),p.gc(),p.gc(),p.gc(),p.hc(14,"ion-row"),p.hc(15,"ion-col"),p.hc(16,"ion-text",13),p.Kc(17),p.tc(18,"dateAgo"),p.gc(),p.gc(),p.hc(19,"ion-col",14),p.hc(20,"ion-buttons"),p.hc(21,"ion-button",15),p.dc(22,"img",16),p.gc(),p.gc(),p.gc(),p.gc(),p.gc(),p.gc(),p.gc(),p.gc()}if(2&t){var o=n.$implicit;p.Rb(6),p.yc("src",o.user.avi,p.Gc),p.Rb(6),p.Nc("",o.user.firstName," ",o.user.lastname,""),p.Rb(1),p.Mc(" ",o.comment," "),p.Rb(4),p.Lc(p.uc(18,5,o.date))}}var b=function(t,n){return{"post-image-container":t,"post-container":n}},k=function(){function t(n,e,o,c,r,i,s,a,l){var u=this;_classCallCheck(this,t),this.storage=n,this.modalController=e,this.loadingController=o,this.router=c,this.zone=r,this.route=i,this.postSvc=s,this.accountService=a,this.cd=l,this.comments=[],this.newComments=[],this.postId="",this.post=void 0,this.commentText="",this.likeIcon="../../assets/UI/heart.svg",this.likedIcon="../../assets/UI/liked-icon.svg",this.storage.get("image").then((function(t){u.image=t.avi})),this.route.queryParams.subscribe((function(t){u.router.getCurrentNavigation().extras.state&&(u.postId=u.router.getCurrentNavigation().extras.state.postId),u.getPostInfo()}))}var n,e,o,c;return _createClass(t,[{key:"myFunc",value:function(){return{count:1,data:{id:1}}}},{key:"getPostInfo",value:(c=_asyncToGenerator(regeneratorRuntime.mark((function t(){var n,e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadingController.create({});case 2:return n=t.sent,t.next=5,n.present();case 5:return this.getComments(),t.next=8,this.getPost(n).then((function(){e.cd.detectChanges()}));case 8:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)})},{key:"getPost",value:(o=_asyncToGenerator(regeneratorRuntime.mark((function t(n){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){e.postSvc.postsSingleIdGet(+e.postId).pipe(Object(s.a)(1)).subscribe(function(){var o=_asyncToGenerator(regeneratorRuntime.mark((function o(c){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:console.log(c),e.post=c,n.dismiss(),t("done");case 1:case"end":return o.stop()}}),o)})));return function(t){return o.apply(this,arguments)}}())})));case 1:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)})},{key:"openViewer",value:(e=_asyncToGenerator(regeneratorRuntime.mark((function t(n){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.postfaa=n,t.next=3,this.modalController.create({component:u.b,componentProps:{src:this.postfaa},cssClass:"ion-img-viewer",keyboardClose:!0,showBackdrop:!0});case 3:return e=t.sent,t.next=6,e.present();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})},{key:"likePost",value:function(t){t.likedByCurrentUser||(this.postSvc.postsLikePostIdPost(t.postId.toString()).pipe(Object(s.a)(1)).subscribe(),t.likeCount++,t.likedByCurrentUser=!0)}},{key:"getComments",value:function(){var t=this;this.postSvc.postsCommentsGetPostIdGet(this.postId).pipe(Object(s.a)(1)).subscribe((function(n){t.comments.length,t.comments=[];for(var e=n.length,o=0;o<e;o++)t.comments.push(n[o]);t.cd.detectChanges()}))}},{key:"commentOnPost",value:function(){var t=this,n={comment:this.commentText};this.postSvc.postsCommentPostIdPost(this.postId,n).pipe(Object(s.a)(1)).subscribe((function(n){t.getComments()})),this.commentText=""}},{key:"backToFeed",value:function(){var t=this;this.zone.run((function(){t.router.navigateByUrl("/tab1")}))}},{key:"openProfile",value:function(t){var n=this,e={replaceUrl:!1,state:{userId:t}};this.zone.run((function(){n.router.navigateByUrl("/user-profile",e)}))}},{key:"presentSearchModal",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:l.a,componentProps:{},showBackdrop:!0,cssClass:"search-modal"});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"canSend",get:function(){return this.commentText.length>1&&this.commentText.length<250}}]),t}();k.\u0275fac=function(t){return new(t||k)(p.cc(g.b),p.cc(r.W),p.cc(r.V),p.cc(i.g),p.cc(p.L),p.cc(i.a),p.cc(a.b),p.cc(a.a),p.cc(p.j))},k.\u0275cmp=p.Wb({type:k,selectors:[["comments"]],decls:53,vars:21,consts:[[1,"ion-no-border",2,"background-color","#128C7E"],["color","#128C7E",1,"ion-no-border"],[1,"header-grid"],[1,"ion-align-items-baseline"],[1,"ion-justify-content-start"],["defaultHref","/tab1",2,"color","beige",3,"click"],[3,"scrollY"],[3,"ngClass"],[1,"card-flip-front"],[1,"three-col-grid"],["size",".6"],[3,"src","click"],[1,"card-title"],["color","medium"],["size",".4"],[1,"ion-justify-content-center"],["src","../../assets/UI/optionsDots.svg"],[4,"ngIf"],[1,"ion-justify-content-center",3,"click"],[3,"src"],["size","4"],[1,"align-self-center","text-center"],["autocapitalize","true","autocomplete","\u201ctrue\u201d","spellcheck","\u201ctrue\u201d","type","text","placeholder","Comment",3,"ngModel","ngModelChange"],["clear","","item-right","",3,"disabled","click"],["class","ion-text-center ion-justify-center","style","height: 100%; flex-direction: column",4,"ngIf"],[3,"items","scrollTop"],["class","comment",4,"virtualItem"],[1,"swiper-zoom-container"],["ionImgViewer","","height","300",1,"rcorners",3,"src","alt","click"],[1,"ion-text-center","ion-justify-center",2,"height","100%","flex-direction","column"],[1,"comment"],[1,"comments-grid"],[1,"ion-align-self-center"],[1,"ion-align-items-center"],[1,"user-pic","img-center",3,"src","click"],["size","2.2"]],template:function(t,n){1&t&&(p.hc(0,"ion-header",0),p.hc(1,"ion-toolbar",1),p.hc(2,"ion-grid",2),p.hc(3,"ion-row",3),p.hc(4,"ion-col",4),p.hc(5,"ion-buttons"),p.hc(6,"ion-back-button",5),p.pc("click",(function(){return n.backToFeed()})),p.gc(),p.gc(),p.gc(),p.gc(),p.gc(),p.gc(),p.gc(),p.hc(7,"ion-content",6),p.hc(8,"ion-card",7),p.hc(9,"div",8),p.hc(10,"ion-grid",9),p.hc(11,"ion-row"),p.hc(12,"ion-col",10),p.hc(13,"ion-avatar"),p.hc(14,"img",11),p.pc("click",(function(){return n.openProfile(null==n.post?null:n.post.fkUserId)})),p.gc(),p.gc(),p.gc(),p.hc(15,"ion-col"),p.hc(16,"ion-row"),p.hc(17,"ion-card-title",12),p.Kc(18),p.gc(),p.gc(),p.hc(19,"ion-row"),p.hc(20,"ion-card-subtitle",13),p.Kc(21),p.gc(),p.gc(),p.gc(),p.hc(22,"ion-col",14),p.hc(23,"ion-buttons"),p.hc(24,"ion-button",15),p.dc(25,"img",16),p.gc(),p.gc(),p.gc(),p.gc(),p.gc(),p.hc(26,"ion-card-content"),p.hc(27,"ion-grid"),p.hc(28,"ion-row",3),p.hc(29,"ion-col"),p.Kc(30),p.gc(),p.gc(),p.Jc(31,m,4,2,"ion-row",17),p.hc(32,"ion-row"),p.hc(33,"ion-col"),p.hc(34,"ion-buttons"),p.hc(35,"ion-button",18),p.pc("click",(function(){return n.likePost(n.post)})),p.dc(36,"img",19),p.gc(),p.Kc(37),p.gc(),p.gc(),p.dc(38,"ion-col",20),p.hc(39,"ion-col",21),p.hc(40,"ion-note"),p.Kc(41),p.tc(42,"dateAgo"),p.gc(),p.gc(),p.gc(),p.gc(),p.hc(43,"ion-item"),p.hc(44,"ion-input",22),p.pc("ngModelChange",(function(t){return n.commentText=t})),p.gc(),p.hc(45,"button",23),p.pc("click",(function(){return n.commentOnPost()})),p.Kc(46," Send "),p.gc(),p.gc(),p.gc(),p.gc(),p.gc(),p.Jc(47,d,2,0,"h1",24),p.hc(48,"ion-grid"),p.hc(49,"ion-row"),p.hc(50,"ion-col"),p.hc(51,"ion-virtual-scroll",25),p.Jc(52,f,23,7,"ion-item",26),p.gc(),p.gc(),p.gc(),p.gc(),p.gc()),2&t&&(p.Rb(7),p.yc("scrollY",!0),p.Rb(1),p.yc("ngClass",p.Cc(18,b,null==n.post?null:n.post.postContentLink,void 0===(null==n.post?null:n.post.postContentLink))),p.Rb(6),p.yc("src",null==n.post||null==n.post.fkUser?null:n.post.fkUser.avi,p.Gc),p.Rb(4),p.Nc("",null==n.post||null==n.post.fkUser?null:n.post.fkUser.firstname," ",null==n.post||null==n.post.fkUser?null:n.post.fkUser.lastname,""),p.Rb(3),p.Lc(null==n.post?null:n.post.location.locationName),p.Rb(9),p.Mc(" ",null==n.post?null:n.post.postCaption," "),p.Rb(1),p.yc("ngIf",null==n.post?null:n.post.postContentLink),p.Rb(5),p.yc("src",1==(null==n.post?null:n.post.likedByCurrentUser)?n.likedIcon:n.likeIcon,p.Gc),p.Rb(1),p.Mc(" ",(null==n.post?null:n.post.likeCount)||0," "),p.Rb(4),p.Lc(p.uc(42,16,null==n.post?null:n.post.postTime)),p.Rb(3),p.yc("ngModel",n.commentText),p.Rb(1),p.yc("disabled",!n.canSend),p.Rb(2),p.yc("ngIf",0===n.comments.length),p.Rb(4),p.yc("items",n.comments)("scrollTop",!0))},directives:[r.t,r.R,r.s,r.H,r.m,r.h,r.e,r.f,r.n,r.i,o.i,r.d,r.l,r.k,r.g,r.j,o.k,r.D,r.y,r.x,r.cb,c.k,c.m,r.S,r.eb,r.O],pipes:[h.a],styles:[".user-pic[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%}.circle-pic[_ngcontent-%COMP%]{width:60px;height:50px;border-radius:50%}.header-grid[_ngcontent-%COMP%]{--ion-grid-columns:3;--ion-grid-column-padding:1px;--ion-grid-padding:1px}ion-content[_ngcontent-%COMP%]{--padding-top:10%}.comments-grid[_ngcontent-%COMP%]{--ion-grid-column-padding:1px;--ion-grid-padding:1px}.comment[_ngcontent-%COMP%]{margin-bottom:5px!important}.comment[_ngcontent-%COMP%], ion-card[_ngcontent-%COMP%]{margin-top:4px!important}ion-card[_ngcontent-%COMP%]{margin-bottom:0!important}.btn[_ngcontent-%COMP%]{border:none;background-color:inherit;font-size:16px;display:inline-block}.card-title[_ngcontent-%COMP%]{font-size:20px;font-weight:400;padding-bottom:5px}.comments-grid[_ngcontent-%COMP%]{--ion-grid-columns:3}.post-image-container[_ngcontent-%COMP%]{height:100%!important}.post-container[_ngcontent-%COMP%]{height:5.5%!important}ion-card-content[_ngcontent-%COMP%]{padding-top:0!important;padding:5px;padding-bottom:10px!important}ion-card[_ngcontent-%COMP%]{max-height:580px}.three-col-grid[_ngcontent-%COMP%]{--ion-grid-columns:3}.rcorners[_ngcontent-%COMP%]{border-radius:25px;background-position:0 0;background-repeat:repeat}.flip-container[_ngcontent-%COMP%]{perspective:1000px}.flip-container.flipped[_ngcontent-%COMP%]   .flipper[_ngcontent-%COMP%]{transform:rotateY(180deg)}.flipper[_ngcontent-%COMP%]{transition:.6s;transform-style:preserve-3d;position:relative}.back[_ngcontent-%COMP%], .front[_ngcontent-%COMP%]{backface-visibility:hidden}.front[_ngcontent-%COMP%]{z-index:2;transform:rotateY(0deg)}.back[_ngcontent-%COMP%]{transform:rotateY(180deg)}"]});var C=[{path:"",component:k}],v=function t(){_classCallCheck(this,t)};v.\u0275mod=p.ac({type:v}),v.\u0275inj=p.Zb({factory:function(t){return new(t||v)},imports:[[i.k.forChild(C)],i.k]});var y=e("PCNd"),P=function t(){_classCallCheck(this,t)};P.\u0275mod=p.ac({type:P}),P.\u0275inj=p.Zb({factory:function(t){return new(t||P)},imports:[[o.c,c.g,r.T,y.a,v]]})}}]);