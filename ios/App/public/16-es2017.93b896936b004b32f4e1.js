(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{qhKe:function(t,n,o){"use strict";o.r(n),o.d(n,"CommentsPageModule",(function(){return k}));var e=o("ofXK"),i=o("3Pt+"),s=o("TEn/"),c=o("tyNb"),r=o("IzEk"),b=o("MCRb"),l=o("ykzJ"),a=o("6g0+"),p=o("fXoL"),d=o("e8h1"),m=o("6Kw5");function u(t,n){if(1&t){const t=p.Rb();p.Qb(0,"ion-row"),p.Qb(1,"ion-col"),p.Qb(2,"div",27),p.Qb(3,"img",28),p.Yb("click",(function(){p.oc(t);const n=p.bc();return n.openViewer(null==n.post?null:n.post.postContentLink)})),p.Pb(),p.Pb(),p.Pb(),p.Pb()}if(2&t){const t=p.bc();p.Ab(3),p.hc("src",null==t.post?null:t.post.postContentLink,p.pc)("alt",null==t.post?null:t.post.postId)}}function g(t,n){1&t&&(p.Qb(0,"h1",29),p.tc(1," No comments! Be the first! "),p.Pb())}function h(t,n){if(1&t){const t=p.Rb();p.Qb(0,"ion-item",30),p.Qb(1,"ion-grid",31),p.Qb(2,"ion-row"),p.Qb(3,"ion-col",32),p.Qb(4,"ion-row",33),p.Qb(5,"ion-col"),p.Qb(6,"img",34),p.Yb("click",(function(){p.oc(t);const o=n.$implicit;return p.bc().openProfile(o.user.id)})),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Qb(7,"ion-col",35),p.Qb(8,"ion-row"),p.Qb(9,"ion-col"),p.Qb(10,"p"),p.Qb(11,"strong"),p.tc(12),p.Pb(),p.tc(13),p.Pb(),p.Pb(),p.Pb(),p.Qb(14,"ion-row"),p.Qb(15,"ion-col"),p.Qb(16,"ion-text",13),p.tc(17),p.cc(18,"dateAgo"),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Pb()}if(2&t){const t=n.$implicit;p.Ab(6),p.hc("src",t.user.avi,p.pc),p.Ab(6),p.wc("",t.user.firstName," ",t.user.lastname,""),p.Ab(1),p.vc(" ",t.comment," "),p.Ab(4),p.uc(p.dc(18,5,t.date))}}const P=function(t,n){return{"post-image-container":t,"post-container":n}},f=[{path:"",component:(()=>{class t{constructor(t,n,o,e,i,s,c,r,b){this.storage=t,this.modalController=n,this.loadingController=o,this.router=e,this.zone=i,this.route=s,this.postSvc=c,this.accountService=r,this.cd=b,this.comments=[],this.newComments=[],this.postId="",this.post=void 0,this.commentText="",this.likeIcon="../../assets/UI/heart.svg",this.likedIcon="../../assets/UI/liked-icon.svg",this.storage.get("image").then(t=>{this.image=t.avi}),this.route.queryParams.subscribe(t=>{this.router.getCurrentNavigation().extras.state&&(this.postId=this.router.getCurrentNavigation().extras.state.postId),this.getPostInfo()})}myFunc(){return{count:1,data:{id:1}}}async getPostInfo(){const t=await this.loadingController.create({});await t.present(),this.getComments(),await this.getPost(t).then(()=>{this.cd.detectChanges()})}async getPost(t){return new Promise(n=>{this.postSvc.postsSingleIdGet(+this.postId).pipe(Object(r.a)(1)).subscribe(async o=>{console.log(o),this.post=o,t.dismiss(),n("done")})})}async openViewer(t){this.postfaa=t;const n=await this.modalController.create({component:a.b,componentProps:{src:this.postfaa},cssClass:"ion-img-viewer",keyboardClose:!0,showBackdrop:!0});return await n.present()}likePost(t){t.likedByCurrentUser||(this.postSvc.postsLikePostIdPost(t.postId.toString()).pipe(Object(r.a)(1)).subscribe(),t.likeCount++,t.likedByCurrentUser=!0)}getComments(){this.postSvc.postsCommentsGetPostIdGet(this.postId).pipe(Object(r.a)(1)).subscribe(t=>{this.comments=[];const n=t.length;for(let o=0;o<n;o++)this.comments.push(t[o]);this.cd.detectChanges()})}get canSend(){return this.commentText.length>1&&this.commentText.length<250}commentOnPost(){this.postSvc.postsCommentPostIdPost(this.postId,{comment:this.commentText}).pipe(Object(r.a)(1)).subscribe(t=>{this.getComments()}),this.commentText=""}backToFeed(){this.zone.run(()=>{this.router.navigateByUrl("/tab1")})}openProfile(t){const n={replaceUrl:!1,state:{userId:t}};this.zone.run(()=>{this.router.navigateByUrl("/user-profile",n)})}async presentSearchModal(){const t=await this.modalController.create({component:l.a,componentProps:{},showBackdrop:!0,cssClass:"search-modal"});return await t.present()}}return t.\u0275fac=function(n){return new(n||t)(p.Lb(d.b),p.Lb(s.V),p.Lb(s.U),p.Lb(c.g),p.Lb(p.z),p.Lb(c.a),p.Lb(b.b),p.Lb(b.a),p.Lb(p.h))},t.\u0275cmp=p.Fb({type:t,selectors:[["comments"]],decls:53,vars:21,consts:[[1,"ion-no-border",2,"background-color","#128C7E"],["color","#128C7E",1,"ion-no-border"],[1,"header-grid"],[1,"ion-align-items-baseline"],[1,"ion-justify-content-start"],["defaultHref","/tab1",2,"color","beige",3,"click"],[3,"scrollY"],[3,"ngClass"],[1,"card-flip-front"],[1,"three-col-grid"],["size",".6"],[3,"src","click"],[1,"card-title"],["color","medium"],["size",".4"],[1,"ion-justify-content-center"],["src","../../assets/UI/optionsDots.svg"],[4,"ngIf"],[1,"ion-justify-content-center",3,"click"],[3,"src"],["size","4"],[1,"align-self-center","text-center"],["type","text","placeholder","Comment",3,"ngModel","ngModelChange"],["clear","","item-right","",3,"disabled","click"],["class","ion-text-center ion-justify-center","style","height: 100%; flex-direction: column",4,"ngIf"],[3,"items","scrollTop"],["class","comment",4,"virtualItem"],[1,"swiper-zoom-container"],["ionImgViewer","","height","300",1,"rcorners",3,"src","alt","click"],[1,"ion-text-center","ion-justify-center",2,"height","100%","flex-direction","column"],[1,"comment"],[1,"comments-grid"],[1,"ion-align-self-center"],[1,"ion-align-items-center"],[1,"user-pic","img-center",3,"src","click"],["size","2.2"]],template:function(t,n){1&t&&(p.Qb(0,"ion-header",0),p.Qb(1,"ion-toolbar",1),p.Qb(2,"ion-grid",2),p.Qb(3,"ion-row",3),p.Qb(4,"ion-col",4),p.Qb(5,"ion-buttons"),p.Qb(6,"ion-back-button",5),p.Yb("click",(function(){return n.backToFeed()})),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Qb(7,"ion-content",6),p.Qb(8,"ion-card",7),p.Qb(9,"div",8),p.Qb(10,"ion-grid",9),p.Qb(11,"ion-row"),p.Qb(12,"ion-col",10),p.Qb(13,"ion-avatar"),p.Qb(14,"img",11),p.Yb("click",(function(){return n.openProfile(null==n.post?null:n.post.fkUserId)})),p.Pb(),p.Pb(),p.Pb(),p.Qb(15,"ion-col"),p.Qb(16,"ion-row"),p.Qb(17,"ion-card-title",12),p.tc(18),p.Pb(),p.Pb(),p.Qb(19,"ion-row"),p.Qb(20,"ion-card-subtitle",13),p.tc(21),p.Pb(),p.Pb(),p.Pb(),p.Qb(22,"ion-col",14),p.Qb(23,"ion-buttons"),p.Qb(24,"ion-button",15),p.Mb(25,"img",16),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Qb(26,"ion-card-content"),p.Qb(27,"ion-grid"),p.Qb(28,"ion-row",3),p.Qb(29,"ion-col"),p.tc(30),p.Pb(),p.Pb(),p.sc(31,u,4,2,"ion-row",17),p.Qb(32,"ion-row"),p.Qb(33,"ion-col"),p.Qb(34,"ion-buttons"),p.Qb(35,"ion-button",18),p.Yb("click",(function(){return n.likePost(n.post)})),p.Mb(36,"img",19),p.Pb(),p.tc(37),p.Pb(),p.Pb(),p.Mb(38,"ion-col",20),p.Qb(39,"ion-col",21),p.Qb(40,"ion-note"),p.tc(41),p.cc(42,"dateAgo"),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Qb(43,"ion-item"),p.Qb(44,"ion-input",22),p.Yb("ngModelChange",(function(t){return n.commentText=t})),p.Pb(),p.Qb(45,"button",23),p.Yb("click",(function(){return n.commentOnPost()})),p.tc(46," Send "),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.sc(47,g,2,0,"h1",24),p.Qb(48,"ion-grid"),p.Qb(49,"ion-row"),p.Qb(50,"ion-col"),p.Qb(51,"ion-virtual-scroll",25),p.sc(52,h,19,7,"ion-item",26),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Pb()),2&t&&(p.Ab(7),p.hc("scrollY",!0),p.Ab(1),p.hc("ngClass",p.lc(18,P,null==n.post?null:n.post.postContentLink,void 0===(null==n.post?null:n.post.postContentLink))),p.Ab(6),p.hc("src",null==n.post||null==n.post.fkUser?null:n.post.fkUser.avi,p.pc),p.Ab(4),p.wc("",null==n.post||null==n.post.fkUser?null:n.post.fkUser.firstname," ",null==n.post||null==n.post.fkUser?null:n.post.fkUser.lastname,""),p.Ab(3),p.uc(null==n.post?null:n.post.location.locationName),p.Ab(9),p.vc(" ",null==n.post?null:n.post.postCaption," "),p.Ab(1),p.hc("ngIf",null==n.post?null:n.post.postContentLink),p.Ab(5),p.hc("src",1==(null==n.post?null:n.post.likedByCurrentUser)?n.likedIcon:n.likeIcon,p.pc),p.Ab(1),p.vc(" ",(null==n.post?null:n.post.likeCount)||0," "),p.Ab(4),p.uc(p.dc(42,16,null==n.post?null:n.post.postTime)),p.Ab(3),p.hc("ngModel",n.commentText),p.Ab(1),p.hc("disabled",!n.canSend),p.Ab(2),p.hc("ngIf",0===n.comments.length),p.Ab(4),p.hc("items",n.comments)("scrollTop",!0))},directives:[s.s,s.Q,s.r,s.G,s.l,s.g,s.d,s.e,s.m,s.h,e.i,s.c,s.k,s.j,s.f,s.i,e.k,s.C,s.x,s.w,s.bb,i.k,i.m,s.R,s.db,s.N],pipes:[m.a],styles:[".user-pic[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%}.circle-pic[_ngcontent-%COMP%]{width:60px;height:50px;border-radius:50%}.header-grid[_ngcontent-%COMP%]{--ion-grid-columns:3;--ion-grid-column-padding:1px;--ion-grid-padding:1px}ion-content[_ngcontent-%COMP%]{--padding-top:10%}.comments-grid[_ngcontent-%COMP%]{--ion-grid-column-padding:1px;--ion-grid-padding:1px}.comment[_ngcontent-%COMP%]{margin-bottom:5px!important}.comment[_ngcontent-%COMP%], ion-card[_ngcontent-%COMP%]{margin-top:4px!important}ion-card[_ngcontent-%COMP%]{margin-bottom:0!important}.btn[_ngcontent-%COMP%]{border:none;background-color:inherit;font-size:16px;display:inline-block}.card-title[_ngcontent-%COMP%]{font-size:20px;font-weight:400;padding-bottom:5px}.comments-grid[_ngcontent-%COMP%]{--ion-grid-columns:3}.post-image-container[_ngcontent-%COMP%]{height:100%!important}.post-container[_ngcontent-%COMP%]{height:5.5%!important}ion-card-content[_ngcontent-%COMP%]{padding-top:0!important;padding:5px;padding-bottom:10px!important}ion-card[_ngcontent-%COMP%]{max-height:580px}.three-col-grid[_ngcontent-%COMP%]{--ion-grid-columns:3}.rcorners[_ngcontent-%COMP%]{border-radius:25px;background-position:0 0;background-repeat:repeat}.flip-container[_ngcontent-%COMP%]{perspective:1000px}.flip-container.flipped[_ngcontent-%COMP%]   .flipper[_ngcontent-%COMP%]{transform:rotateY(180deg)}.flipper[_ngcontent-%COMP%]{transition:.6s;transform-style:preserve-3d;position:relative}.back[_ngcontent-%COMP%], .front[_ngcontent-%COMP%]{backface-visibility:hidden}.front[_ngcontent-%COMP%]{z-index:2;transform:rotateY(0deg)}.back[_ngcontent-%COMP%]{transform:rotateY(180deg)}"]}),t})()}];let C=(()=>{class t{}return t.\u0275mod=p.Jb({type:t}),t.\u0275inj=p.Ib({factory:function(n){return new(n||t)},imports:[[c.k.forChild(f)],c.k]}),t})();var Q=o("PCNd");let k=(()=>{class t{}return t.\u0275mod=p.Jb({type:t}),t.\u0275inj=p.Ib({factory:function(n){return new(n||t)},imports:[[e.c,i.g,s.S,Q.a,C]]}),t})()}}]);