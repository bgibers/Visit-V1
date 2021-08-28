function asyncGeneratorStep(e,n,t,r,o,i,a){try{var c=e[i](a),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,o)}function _asyncToGenerator(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){asyncGeneratorStep(i,r,o,a,c,"next",e)}function c(e){asyncGeneratorStep(i,r,o,a,c,"throw",e)}a(void 0)}))}}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{b8Qw:function(e,n,t){"use strict";t.r(n),t.d(n,"SignInPageModule",(function(){return v}));var r=t("ofXK"),o=t("3Pt+"),i=t("TEn/"),a=t("tyNb"),c=t("MCRb"),s=t("Jk5i"),u=t("fXoL");function l(e,n){if(1&e&&(u.hc(0,"div",17),u.dc(1,"ion-icon",18),u.Kc(2),u.gc()),2&e){var t=u.sc().$implicit;u.Rb(2),u.Mc(" ",t.message," ")}}function p(e,n){if(1&e&&(u.fc(0),u.Jc(1,l,3,1,"div",9),u.ec()),2&e){var t=n.$implicit,r=u.sc();u.Rb(1),u.yc("ngIf",r.loginForm.get("email").hasError(t.type)&&(r.loginForm.get("email").dirty||r.loginForm.get("email").touched))}}function d(e,n){if(1&e&&(u.hc(0,"div",17),u.dc(1,"ion-icon",18),u.Kc(2),u.gc()),2&e){var t=u.sc();u.Rb(2),u.Mc(" ",t.invalidLoginText," ")}}function g(e,n){if(1&e){var t=u.ic();u.hc(0,"ion-button",19),u.pc("click",(function(){return u.Fc(t),u.sc().openAppleSignIn()})),u.dc(1,"ion-icon",20),u.Kc(2," Sign in with Apple "),u.gc()}}var f=function(){function e(n,t,r,o,i,a,c,s){_classCallCheck(this,e),this.formBuilder=n,this.loadingController=t,this.modalController=r,this.platform=o,this.cd=i,this.zone=a,this.router=c,this.accountService=s,this.passwordType="password",this.validationMessages={email:[{type:"required",message:"Email is required."},{type:"pattern",message:"Please enter a valid email."}],password:[{type:"required",message:"Password is required."}]},this.invalidLogin=!1,this.invalidLoginText="",this.showAppleSignIn=!1}var n,t,r,i,a;return _createClass(e,[{key:"togglePasswordMode",value:function(){this.passwordType="text"===this.passwordType?"password":"text"}},{key:"ngOnInit",value:(a=_asyncToGenerator(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.showAppleSignIn=this.platform.is("ios"),n=new o.b("",o.p.compose([o.p.required,o.p.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,3}$")])),t=new o.b("",o.p.compose([o.p.required])),this.loginForm=new o.d({email:n,password:t});case 3:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"openAppleSignIn",value:(i=_asyncToGenerator(regeneratorRuntime.mark((function e(){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.accountService.loginApple().then(function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!0===t.firstLogin?(r={replaceUrl:!1,state:{firstName:t.firstName,lastName:t.lastName,email:t.email,password:"",sso:!0}},n.zone.run((function(){n.router.navigateByUrl("/post-register-about",r)}))):(o={replaceUrl:!1},n.zone.run((function(){n.router.navigateByUrl("/tab1",o)})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"openFacebookSignIn",value:(r=_asyncToGenerator(regeneratorRuntime.mark((function e(){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.accountService.loginFacebook().then(function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!0===t.firstLogin?(r={replaceUrl:!1,state:{firstName:t.firstName,lastName:t.lastName,email:t.email,password:"",sso:!0}},n.zone.run((function(){n.router.navigateByUrl("/post-register-about",r)}))):(o={replaceUrl:!1},n.zone.run((function(){n.router.navigateByUrl("/tab1",o)})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"onSubmit",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(n){var t,r,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={userName:this.loginForm.controls.email.value,password:this.loginForm.controls.password.value},e.next=3,this.loadingController.create({});case 3:return r=e.sent,e.next=6,r.present();case 6:this.accountService.login(t.userName,t.password).then((function(e){console.log(e),o.invalidLogin=!1,o.zone.run((function(){o.router.navigateByUrl("/tab1",{replaceUrl:!1})})),r.dismiss()}),(function(e){"auth/user-not-found"===e.code?o.invalidLoginText="User not found":"auth/wrong-password"===e.code?o.invalidLoginText="Invalid password":o.invalidLoginText="Unexpected error",o.invalidLogin=!0,o.refresh(),r.dismiss()}));case 7:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"openRegister",value:function(){var e=this,n={replaceUrl:!1,state:{}};this.zone.run((function(){e.router.navigateByUrl("/register",n)}))}},{key:"presentForgotPassword",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:s.a,showBackdrop:!0,cssClass:"forgot-password-modal"});case 2:return(n=e.sent).onDidDismiss().then(function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e.next=6,n.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"refresh",value:function(){this.cd.detectChanges()}},{key:"getInvalidLogin",get:function(){return this.invalidLogin}}]),e}();f.\u0275fac=function(e){return new(e||f)(u.cc(o.a),u.cc(i.V),u.cc(i.W),u.cc(i.Z),u.cc(u.j),u.cc(u.L),u.cc(a.g),u.cc(c.a))},f.\u0275cmp=u.Wb({type:f,selectors:[["sign-in"]],decls:26,vars:7,consts:[["no-bounce","",1,"form-content",3,"scrollY"],[1,"splash"],[3,"formGroup","ngSubmit"],[1,"roundedInput"],["autocapitalize","true","placeholder","Email","type","email","formControlName","email","required",""],[1,"validation-errors"],[4,"ngFor","ngForOf"],["autocapitalize","true","placeholder","Password","formControlName","password","required","",3,"type"],["name","eye","item-right","",3,"click"],["class","error-message",4,"ngIf"],[1,"button-div"],["size","6",2,"padding-left","22px"],["expand","block","type","submit",1,"submit-button",2,"padding-right","0px","padding-left","0",3,"disabled"],["size","6",2,"padding-right","22px"],["expand","block","type","submit",1,"submit-button",2,"padding-right","0px","padding-left","0",3,"click"],["class","apple-button","expand","block",3,"click",4,"ngIf"],[1,"forgot-password-link","center-any-object",3,"click"],[1,"error-message"],["name","information-circle-outline"],["expand","block",1,"apple-button",3,"click"],["slot","start","name","logo-apple"]],template:function(e,n){1&e&&(u.hc(0,"ion-content",0),u.hc(1,"div",1),u.hc(2,"h1"),u.Kc(3,"Welcome"),u.gc(),u.hc(4,"form",2),u.pc("ngSubmit",(function(){return n.onSubmit(n.loginForm.value)})),u.hc(5,"ion-item",3),u.dc(6,"ion-input",4),u.hc(7,"div",5),u.Jc(8,p,2,1,"ng-container",6),u.gc(),u.gc(),u.hc(9,"ion-item",3),u.dc(10,"ion-input",7),u.hc(11,"ion-icon",8),u.pc("click",(function(){return n.togglePasswordMode()})),u.gc(),u.gc(),u.hc(12,"div",5),u.Jc(13,d,3,1,"div",9),u.gc(),u.hc(14,"div",10),u.hc(15,"ion-row"),u.hc(16,"ion-col",11),u.hc(17,"ion-button",12),u.Kc(18,"Login"),u.gc(),u.gc(),u.hc(19,"ion-col",13),u.hc(20,"ion-button",14),u.pc("click",(function(){return n.openRegister()})),u.Kc(21,"Register"),u.gc(),u.gc(),u.gc(),u.gc(),u.gc(),u.hc(22,"div",10),u.Jc(23,g,3,0,"ion-button",15),u.hc(24,"h3",16),u.pc("click",(function(){return n.presentForgotPassword()})),u.Kc(25,"Forgot Password?"),u.gc(),u.gc(),u.gc(),u.gc()),2&e&&(u.yc("scrollY",!1),u.Rb(4),u.yc("formGroup",n.loginForm),u.Rb(4),u.yc("ngForOf",n.validationMessages.email),u.Rb(2),u.yc("type",n.passwordType),u.Rb(3),u.yc("ngIf",n.getInvalidLogin),u.Rb(4),u.yc("disabled",!n.loginForm.valid),u.Rb(6),u.yc("ngIf",n.showAppleSignIn))},directives:[i.n,o.q,o.l,o.e,i.y,i.x,i.cb,o.k,o.c,o.o,r.j,i.u,r.k,i.H,i.m,i.g],styles:["h1[_ngcontent-%COMP%]{font-size:50px;font-weight:700;color:#fff}ion-content[_ngcontent-%COMP%]{--background:none}ion-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding-top:25%;padding-bottom:50px;font-size:40px;margin:0;text-align:center;font-weight:700;color:#fff}.roundedInput[_ngcontent-%COMP%]{--border-radius:10px;--border-width:1px;--highlight-height:0;--background:#f8f9fa;padding-top:20px;padding-left:5%;padding-right:5%}.roundedInput.ion-invalid.item-has-focus[_ngcontent-%COMP%]{--border-color:var(--ion-color-danger-shade)}.roundedInput.ion-valid.item-has-focus[_ngcontent-%COMP%]{--border-color:var(--ion-color-success-shade)}.roundedInput.ion-invalid.ion-dirty[_ngcontent-%COMP%]{--border-color:var(--ion-color-danger-shade)}.roundedInput.ion-valid.ion-dirty[_ngcontent-%COMP%]{--border-color:var(--ion-color-success-shade)}.submit-button[_ngcontent-%COMP%]{--background:#fff;--background-activated:#fff;--ripple-color:#fff;--background-focused:#fff;--color-focused:#fff;color:#128c7e;--vertical-align:middle;padding-left:5%;padding-right:5%}.button-div[_ngcontent-%COMP%]{padding-top:6%}.forgot-password-link[_ngcontent-%COMP%]{--vertical-align:middle;color:#fff;text-decoration:underline}"]});var h=[{path:"",component:f}],m=function e(){_classCallCheck(this,e)};m.\u0275mod=u.ac({type:m}),m.\u0275inj=u.Zb({factory:function(e){return new(e||m)},imports:[[a.k.forChild(h)],a.k]});var v=function e(){_classCallCheck(this,e)};v.\u0275mod=u.ac({type:v}),v.\u0275inj=u.Zb({factory:function(e){return new(e||v)},imports:[[r.c,o.g,o.n,i.T,m]]})}}]);