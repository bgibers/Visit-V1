(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{qhKe:function(t,n,o){"use strict";o.r(n),o.d(n,"CommentsPageModule",(function(){return y}));var c=o("ofXK"),e=o("3Pt+"),i=o("TEn/"),s=o("tyNb"),r=o("IzEk"),l=o("MCRb"),a=o("ykzJ"),g=o("6g0+"),p=o("fXoL"),h=o("e8h1"),d=o("6Kw5");function m(t,n){if(1&t){const t=p.ic();p.hc(0,"ion-row"),p.hc(1,"ion-col"),p.hc(2,"div",27),p.hc(3,"img",28),p.pc("click",(function(){p.Fc(t);const n=p.sc();return n.openViewer(null==n.post?null:n.post.postContentLink)})),p.gc(),p.gc(),p.gc(),p.gc()}if(2&t){const t=p.sc();p.Rb(3),p.yc("src",null==t.post?null:t.post.postContentLink,p.Gc)("alt",null==t.post?null:t.post.postId)}}function u(t,n){1&t&&(p.hc(0,"h1",29),p.Kc(1," No comments! Be the first! "),p.gc())}function b(t,n){if(1&t){const t=p.ic();p.hc(0,"ion-item",30),p.hc(1,"ion-grid",31),p.hc(2,"ion-row"),p.hc(3,"ion-col",32),p.hc(4,"ion-row",33),p.hc(5,"ion-col"),p.hc(6,"img",34),p.pc("click",(function(){p.Fc(t);const o=n.$implicit;return p.sc().openProfile(o.user.id)})),p.gc(),p.gc(),p.gc(),p.gc(),p.hc(7,"ion-col",35),p.hc(8,"ion-row"),p.hc(9,"ion-col"),p.hc(10,"p"),p.hc(11,"strong"),p.Kc(12),p.gc(),p.Kc(13),p.gc(),p.gc(),p.gc(),p.hc(14,"ion-row"),p.hc(15,"ion-col"),p.hc(16,"ion-text",13),p.Kc(17),p.tc(18,"dateAgo"),p.gc(),p.gc(),p.gc(),p.gc(),p.gc(),p.gc(),p.gc()}if(2&t){const t=n.$implicit;p.Rb(6),p.yc("src",t.user.avi,p.Gc),p.Rb(6),p.Nc("",t.user.firstName," ",t.user.lastname,""),p.Rb(1),p.Mc(" ",t.comment," "),p.Rb(4),p.Lc(p.uc(18,5,t.date))}}const f=function(t,n){return{"post-image-container":t,"post-container":n}};class C{constructor(t,n,o,c,e,i,s,r,l){this.storage=t,this.modalController=n,this.loadingController=o,this.router=c,this.zone=e,this.route=i,this.postSvc=s,this.accountService=r,this.cd=l,this.comments=[],this.newComments=[],this.postId="",this.post=void 0,this.commentText="",this.likeIcon="../../assets/UI/heart.svg",this.likedIcon="../../assets/UI/liked-icon.svg",this.storage.get("image").then(t=>{this.image=t.avi}),this.route.queryParams.subscribe(t=>{this.router.getCurrentNavigation().extras.state&&(this.postId=this.router.getCurrentNavigation().extras.state.postId),this.getPostInfo()})}myFunc(){return{count:1,data:{id:1}}}async getPostInfo(){const t=await this.loadingController.create({});await t.present(),this.getComments(),await this.getPost(t).then(()=>{this.cd.detectChanges()})}async getPost(t){return new Promise(n=>{this.postSvc.postsSingleIdGet(+this.postId).pipe(Object(r.a)(1)).subscribe(async o=>{console.log(o),this.post=o,t.dismiss(),n("done")})})}async openViewer(t){this.postfaa=t;const n=await this.modalController.create({component:g.b,componentProps:{src:this.postfaa},cssClass:"ion-img-viewer",keyboardClose:!0,showBackdrop:!0});return await n.present()}likePost(t){t.likedByCurrentUser||(this.postSvc.postsLikePostIdPost(t.postId.toString()).pipe(Object(r.a)(1)).subscribe(),t.likeCount++,t.likedByCurrentUser=!0)}getComments(){this.postSvc.postsCommentsGetPostIdGet(this.postId).pipe(Object(r.a)(1)).subscribe(t=>{this.comments.length,this.comments=[];const n=t.length;for(let o=0;o<n;o++)this.comments.push(t[o]);this.cd.detectChanges()})}get canSend(){return this.commentText.length>1&&this.commentText.length<250}commentOnPost(){const t={comment:this.commentText};this.postSvc.postsCommentPostIdPost(this.postId,t).pipe(Object(r.a)(1)).subscribe(t=>{this.getComments()}),this.commentText=""}backToFeed(){this.zone.run(()=>{this.router.navigateByUrl("/tab1")})}openProfile(t){const n={replaceUrl:!1,state:{userId:t}};this.zone.run(()=>{this.router.navigateByUrl("/user-profile",n)})}async presentSearchModal(){const t=await this.modalController.create({component:a.a,componentProps:{},showBackdrop:!0,cssClass:"search-modal"});return await t.present()}}C.\u0275fac=function(t){return new(t||C)(p.cc(h.b),p.cc(i.V),p.cc(i.U),p.cc(s.g),p.cc(p.L),p.cc(s.a),p.cc(l.b),p.cc(l.a),p.cc(p.j))},C.\u0275cmp=p.Wb({type:C,selectors:[["comments"]],decls:53,vars:21,consts:[[1,"ion-no-border",2,"background-color","#128C7E"],["color","#128C7E",1,"ion-no-border"],[1,"header-grid"],[1,"ion-align-items-baseline"],[1,"ion-justify-content-start"],["defaultHref","/tab1",2,"color","beige",3,"click"],[3,"scrollY"],[3,"ngClass"],[1,"card-flip-front"],[1,"three-col-grid"],["size",".6"],[3,"src","click"],[1,"card-title"],["color","medium"],["size",".4"],[1,"ion-justify-content-center"],["src","../../assets/UI/optionsDots.svg"],[4,"ngIf"],[1,"ion-justify-content-center",3,"click"],[3,"src"],["size","4"],[1,"align-self-center","text-center"],["type","text","placeholder","Comment",3,"ngModel","ngModelChange"],["clear","","item-right","",3,"disabled","click"],["class","ion-text-center ion-justify-center","style","height: 100%; flex-direction: column",4,"ngIf"],[3,"items","scrollTop"],["class","comment",4,"virtualItem"],[1,"swiper-zoom-container"],["ionImgViewer","","height","300",1,"rcorners",3,"src","alt","click"],[1,"ion-text-center","ion-justify-center",2,"height","100%","flex-direction","column"],[1,"comment"],[1,"comments-grid"],[1,"ion-align-self-center"],[1,"ion-align-items-center"],[1,"user-pic","img-center",3,"src","click"],["size","2.2"]],template:function(t,n){1&t&&(p.hc(0,"ion-header",0),p.hc(1,"ion-toolbar",1),p.hc(2,"ion-grid",2),p.hc(3,"ion-row",3),p.hc(4,"ion-col",4),p.hc(5,"ion-buttons"),p.hc(6,"ion-back-button",5),p.pc("click",(function(){return n.backToFeed()})),p.gc(),p.gc(),p.gc(),p.gc(),p.gc(),p.gc(),p.gc(),p.hc(7,"ion-content",6),p.hc(8,"ion-card",7),p.hc(9,"div",8),p.hc(10,"ion-grid",9),p.hc(11,"ion-row"),p.hc(12,"ion-col",10),p.hc(13,"ion-avatar"),p.hc(14,"img",11),p.pc("click",(function(){return n.openProfile(null==n.post?null:n.post.fkUserId)})),p.gc(),p.gc(),p.gc(),p.hc(15,"ion-col"),p.hc(16,"ion-row"),p.hc(17,"ion-card-title",12),p.Kc(18),p.gc(),p.gc(),p.hc(19,"ion-row"),p.hc(20,"ion-card-subtitle",13),p.Kc(21),p.gc(),p.gc(),p.gc(),p.hc(22,"ion-col",14),p.hc(23,"ion-buttons"),p.hc(24,"ion-button",15),p.dc(25,"img",16),p.gc(),p.gc(),p.gc(),p.gc(),p.gc(),p.hc(26,"ion-card-content"),p.hc(27,"ion-grid"),p.hc(28,"ion-row",3),p.hc(29,"ion-col"),p.Kc(30),p.gc(),p.gc(),p.Jc(31,m,4,2,"ion-row",17),p.hc(32,"ion-row"),p.hc(33,"ion-col"),p.hc(34,"ion-buttons"),p.hc(35,"ion-button",18),p.pc("click",(function(){return n.likePost(n.post)})),p.dc(36,"img",19),p.gc(),p.Kc(37),p.gc(),p.gc(),p.dc(38,"ion-col",20),p.hc(39,"ion-col",21),p.hc(40,"ion-note"),p.Kc(41),p.tc(42,"dateAgo"),p.gc(),p.gc(),p.gc(),p.gc(),p.hc(43,"ion-item"),p.hc(44,"ion-input",22),p.pc("ngModelChange",(function(t){return n.commentText=t})),p.gc(),p.hc(45,"button",23),p.pc("click",(function(){return n.commentOnPost()})),p.Kc(46," Send "),p.gc(),p.gc(),p.gc(),p.gc(),p.gc(),p.Jc(47,u,2,0,"h1",24),p.hc(48,"ion-grid"),p.hc(49,"ion-row"),p.hc(50,"ion-col"),p.hc(51,"ion-virtual-scroll",25),p.Jc(52,b,19,7,"ion-item",26),p.gc(),p.gc(),p.gc(),p.gc(),p.gc()),2&t&&(p.Rb(7),p.yc("scrollY",!0),p.Rb(1),p.yc("ngClass",p.Cc(18,f,null==n.post?null:n.post.postContentLink,void 0===(null==n.post?null:n.post.postContentLink))),p.Rb(6),p.yc("src",null==n.post||null==n.post.fkUser?null:n.post.fkUser.avi,p.Gc),p.Rb(4),p.Nc("",null==n.post||null==n.post.fkUser?null:n.post.fkUser.firstname," ",null==n.post||null==n.post.fkUser?null:n.post.fkUser.lastname,""),p.Rb(3),p.Lc(null==n.post?null:n.post.location.locationName),p.Rb(9),p.Mc(" ",null==n.post?null:n.post.postCaption," "),p.Rb(1),p.yc("ngIf",null==n.post?null:n.post.postContentLink),p.Rb(5),p.yc("src",1==(null==n.post?null:n.post.likedByCurrentUser)?n.likedIcon:n.likeIcon,p.Gc),p.Rb(1),p.Mc(" ",(null==n.post?null:n.post.likeCount)||0," "),p.Rb(4),p.Lc(p.uc(42,16,null==n.post?null:n.post.postTime)),p.Rb(3),p.yc("ngModel",n.commentText),p.Rb(1),p.yc("disabled",!n.canSend),p.Rb(2),p.yc("ngIf",0===n.comments.length),p.Rb(4),p.yc("items",n.comments)("scrollTop",!0))},directives:[i.s,i.Q,i.r,i.G,i.l,i.g,i.d,i.e,i.m,i.h,c.i,i.c,i.k,i.j,i.f,i.i,c.k,i.C,i.x,i.w,i.bb,e.k,e.m,i.R,i.db,i.N],pipes:[d.a],styles:[".user-pic[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%}.circle-pic[_ngcontent-%COMP%]{width:60px;height:50px;border-radius:50%}.header-grid[_ngcontent-%COMP%]{--ion-grid-columns:3;--ion-grid-column-padding:1px;--ion-grid-padding:1px}ion-content[_ngcontent-%COMP%]{--padding-top:10%}.comments-grid[_ngcontent-%COMP%]{--ion-grid-column-padding:1px;--ion-grid-padding:1px}.comment[_ngcontent-%COMP%]{margin-bottom:5px!important}.comment[_ngcontent-%COMP%], ion-card[_ngcontent-%COMP%]{margin-top:4px!important}ion-card[_ngcontent-%COMP%]{margin-bottom:0!important}.btn[_ngcontent-%COMP%]{border:none;background-color:inherit;font-size:16px;display:inline-block}.card-title[_ngcontent-%COMP%]{font-size:20px;font-weight:400;padding-bottom:5px}.comments-grid[_ngcontent-%COMP%]{--ion-grid-columns:3}.post-image-container[_ngcontent-%COMP%]{height:100%!important}.post-container[_ngcontent-%COMP%]{height:5.5%!important}ion-card-content[_ngcontent-%COMP%]{padding-top:0!important;padding:5px;padding-bottom:10px!important}ion-card[_ngcontent-%COMP%]{max-height:580px}.three-col-grid[_ngcontent-%COMP%]{--ion-grid-columns:3}.rcorners[_ngcontent-%COMP%]{border-radius:25px;background-position:0 0;background-repeat:repeat}.flip-container[_ngcontent-%COMP%]{perspective:1000px}.flip-container.flipped[_ngcontent-%COMP%]   .flipper[_ngcontent-%COMP%]{transform:rotateY(180deg)}.flipper[_ngcontent-%COMP%]{transition:.6s;transform-style:preserve-3d;position:relative}.back[_ngcontent-%COMP%], .front[_ngcontent-%COMP%]{backface-visibility:hidden}.front[_ngcontent-%COMP%]{z-index:2;transform:rotateY(0deg)}.back[_ngcontent-%COMP%]{transform:rotateY(180deg)}"]});const k=[{path:"",component:C}];class P{}P.\u0275mod=p.ac({type:P}),P.\u0275inj=p.Zb({factory:function(t){return new(t||P)},imports:[[s.k.forChild(k)],s.k]});var w=o("PCNd");class y{}y.\u0275mod=p.ac({type:y}),y.\u0275inj=p.Zb({factory:function(t){return new(t||y)},imports:[[c.c,e.g,i.S,w.a,P]]})}}]);