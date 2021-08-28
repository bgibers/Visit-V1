(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{b8Qw:function(n,o,t){"use strict";t.r(o),t.d(o,"SignInPageModule",(function(){return b}));var e=t("ofXK"),i=t("3Pt+"),c=t("TEn/"),r=t("tyNb"),s=t("MCRb"),a=t("Jk5i"),l=t("fXoL");function d(n,o){if(1&n&&(l.hc(0,"div",17),l.dc(1,"ion-icon",18),l.Kc(2),l.gc()),2&n){const n=l.sc().$implicit;l.Rb(2),l.Mc(" ",n.message," ")}}function g(n,o){if(1&n&&(l.fc(0),l.Jc(1,d,3,1,"div",9),l.ec()),2&n){const n=o.$implicit,t=l.sc();l.Rb(1),l.yc("ngIf",t.loginForm.get("email").hasError(n.type)&&(t.loginForm.get("email").dirty||t.loginForm.get("email").touched))}}function p(n,o){if(1&n&&(l.hc(0,"div",17),l.dc(1,"ion-icon",18),l.Kc(2),l.gc()),2&n){const n=l.sc();l.Rb(2),l.Mc(" ",n.invalidLoginText," ")}}function u(n,o){if(1&n){const n=l.ic();l.hc(0,"ion-button",19),l.pc("click",(function(){l.Fc(n);return l.sc().openAppleSignIn()})),l.dc(1,"ion-icon",20),l.Kc(2," Sign in with Apple "),l.gc()}}class h{constructor(n,o,t,e,i,c,r,s){this.formBuilder=n,this.loadingController=o,this.modalController=t,this.platform=e,this.cd=i,this.zone=c,this.router=r,this.accountService=s,this.passwordType="password",this.validationMessages={email:[{type:"required",message:"Email is required."},{type:"pattern",message:"Please enter a valid email."}],password:[{type:"required",message:"Password is required."}]},this.invalidLogin=!1,this.invalidLoginText="",this.showAppleSignIn=!1}togglePasswordMode(){this.passwordType="text"===this.passwordType?"password":"text"}async ngOnInit(){this.showAppleSignIn=this.platform.is("ios");const n=new i.b("",i.p.compose([i.p.required,i.p.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,3}$")])),o=new i.b("",i.p.compose([i.p.required]));this.loginForm=new i.d({email:n,password:o})}async openAppleSignIn(){await this.accountService.loginApple().then(async n=>{if(!0===n.firstLogin){const o={replaceUrl:!1,state:{firstName:n.firstName,lastName:n.lastName,email:n.email,password:"",sso:!0}};this.zone.run(()=>{this.router.navigateByUrl("/post-register-about",o)})}else{const n={replaceUrl:!1};this.zone.run(()=>{this.router.navigateByUrl("/tab1",n)})}})}async openFacebookSignIn(){await this.accountService.loginFacebook().then(async n=>{if(!0===n.firstLogin){const o={replaceUrl:!1,state:{firstName:n.firstName,lastName:n.lastName,email:n.email,password:"",sso:!0}};this.zone.run(()=>{this.router.navigateByUrl("/post-register-about",o)})}else{const n={replaceUrl:!1};this.zone.run(()=>{this.router.navigateByUrl("/tab1",n)})}})}async onSubmit(n){const o={userName:this.loginForm.controls.email.value,password:this.loginForm.controls.password.value},t=await this.loadingController.create({});await t.present(),this.accountService.login(o.userName,o.password).then(n=>{console.log(n),this.invalidLogin=!1,this.zone.run(()=>{this.router.navigateByUrl("/tab1",{replaceUrl:!1})}),t.dismiss()},n=>{"auth/user-not-found"===n.code?this.invalidLoginText="User not found":"auth/wrong-password"===n.code?this.invalidLoginText="Invalid password":this.invalidLoginText="Unexpected error",this.invalidLogin=!0,this.refresh(),t.dismiss()})}openRegister(){const n={replaceUrl:!1,state:{}};this.zone.run(()=>{this.router.navigateByUrl("/register",n)})}async presentForgotPassword(){const n=await this.modalController.create({component:a.a,showBackdrop:!0,cssClass:"forgot-password-modal"});return n.onDidDismiss().then(async n=>{}),await n.present()}refresh(){this.cd.detectChanges()}get getInvalidLogin(){return this.invalidLogin}}h.\u0275fac=function(n){return new(n||h)(l.cc(i.a),l.cc(c.V),l.cc(c.W),l.cc(c.Z),l.cc(l.j),l.cc(l.L),l.cc(r.g),l.cc(s.a))},h.\u0275cmp=l.Wb({type:h,selectors:[["sign-in"]],decls:26,vars:7,consts:[["no-bounce","",1,"form-content",3,"scrollY"],[1,"splash"],[3,"formGroup","ngSubmit"],[1,"roundedInput"],["autocapitalize","true","placeholder","Email","type","email","formControlName","email","required",""],[1,"validation-errors"],[4,"ngFor","ngForOf"],["autocapitalize","true","placeholder","Password","formControlName","password","required","",3,"type"],["name","eye","item-right","",3,"click"],["class","error-message",4,"ngIf"],[1,"button-div"],["size","6",2,"padding-left","22px"],["expand","block","type","submit",1,"submit-button",2,"padding-right","0px","padding-left","0",3,"disabled"],["size","6",2,"padding-right","22px"],["expand","block","type","submit",1,"submit-button",2,"padding-right","0px","padding-left","0",3,"click"],["class","apple-button","expand","block",3,"click",4,"ngIf"],[1,"forgot-password-link","center-any-object",3,"click"],[1,"error-message"],["name","information-circle-outline"],["expand","block",1,"apple-button",3,"click"],["slot","start","name","logo-apple"]],template:function(n,o){1&n&&(l.hc(0,"ion-content",0),l.hc(1,"div",1),l.hc(2,"h1"),l.Kc(3,"Welcome"),l.gc(),l.hc(4,"form",2),l.pc("ngSubmit",(function(){return o.onSubmit(o.loginForm.value)})),l.hc(5,"ion-item",3),l.dc(6,"ion-input",4),l.hc(7,"div",5),l.Jc(8,g,2,1,"ng-container",6),l.gc(),l.gc(),l.hc(9,"ion-item",3),l.dc(10,"ion-input",7),l.hc(11,"ion-icon",8),l.pc("click",(function(){return o.togglePasswordMode()})),l.gc(),l.gc(),l.hc(12,"div",5),l.Jc(13,p,3,1,"div",9),l.gc(),l.hc(14,"div",10),l.hc(15,"ion-row"),l.hc(16,"ion-col",11),l.hc(17,"ion-button",12),l.Kc(18,"Login"),l.gc(),l.gc(),l.hc(19,"ion-col",13),l.hc(20,"ion-button",14),l.pc("click",(function(){return o.openRegister()})),l.Kc(21,"Register"),l.gc(),l.gc(),l.gc(),l.gc(),l.gc(),l.hc(22,"div",10),l.Jc(23,u,3,0,"ion-button",15),l.hc(24,"h3",16),l.pc("click",(function(){return o.presentForgotPassword()})),l.Kc(25,"Forgot Password?"),l.gc(),l.gc(),l.gc(),l.gc()),2&n&&(l.yc("scrollY",!1),l.Rb(4),l.yc("formGroup",o.loginForm),l.Rb(4),l.yc("ngForOf",o.validationMessages.email),l.Rb(2),l.yc("type",o.passwordType),l.Rb(3),l.yc("ngIf",o.getInvalidLogin),l.Rb(4),l.yc("disabled",!o.loginForm.valid),l.Rb(6),l.yc("ngIf",o.showAppleSignIn))},directives:[c.n,i.q,i.l,i.e,c.y,c.x,c.cb,i.k,i.c,i.o,e.j,c.u,e.k,c.H,c.m,c.g],styles:["h1[_ngcontent-%COMP%]{font-size:50px;font-weight:700;color:#fff}ion-content[_ngcontent-%COMP%]{--background:none}ion-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding-top:25%;padding-bottom:50px;font-size:40px;margin:0;text-align:center;font-weight:700;color:#fff}.roundedInput[_ngcontent-%COMP%]{--border-radius:10px;--border-width:1px;--highlight-height:0;--background:#f8f9fa;padding-top:20px;padding-left:5%;padding-right:5%}.roundedInput.ion-invalid.item-has-focus[_ngcontent-%COMP%]{--border-color:var(--ion-color-danger-shade)}.roundedInput.ion-valid.item-has-focus[_ngcontent-%COMP%]{--border-color:var(--ion-color-success-shade)}.roundedInput.ion-invalid.ion-dirty[_ngcontent-%COMP%]{--border-color:var(--ion-color-danger-shade)}.roundedInput.ion-valid.ion-dirty[_ngcontent-%COMP%]{--border-color:var(--ion-color-success-shade)}.submit-button[_ngcontent-%COMP%]{--background:#fff;--background-activated:#fff;--ripple-color:#fff;--background-focused:#fff;--color-focused:#fff;color:#128c7e;--vertical-align:middle;padding-left:5%;padding-right:5%}.button-div[_ngcontent-%COMP%]{padding-top:6%}.forgot-password-link[_ngcontent-%COMP%]{--vertical-align:middle;color:#fff;text-decoration:underline}"]});const f=[{path:"",component:h}];class m{}m.\u0275mod=l.ac({type:m}),m.\u0275inj=l.Zb({factory:function(n){return new(n||m)},imports:[[r.k.forChild(f)],r.k]});class b{}b.\u0275mod=l.ac({type:b}),b.\u0275inj=l.Zb({factory:function(n){return new(n||b)},imports:[[e.c,i.g,i.n,c.T,m]]})}}]);