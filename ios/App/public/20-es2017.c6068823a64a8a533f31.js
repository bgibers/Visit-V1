(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{fhSy:function(e,t,o){"use strict";o.r(t),o.d(t,"RegisterPageModule",(function(){return N}));var i=o("ofXK"),r=o("3Pt+"),n=o("TEn/"),s=o("tyNb"),a=o("MCRb"),c=o("IzEk"),b=o("fXoL");function d(e,t){if(1&e&&(b.Qb(0,"div",25),b.Mb(1,"ion-icon",26),b.tc(2),b.Pb()),2&e){const e=b.bc().$implicit;b.Ab(2),b.vc(" ",e.message," ")}}function l(e,t){if(1&e&&(b.Ob(0),b.sc(1,d,3,1,"div",19),b.Nb()),2&e){const e=t.$implicit,o=b.bc();b.Ab(1),b.hc("ngIf",o.registerForm.get("firstName").hasError(e.type)&&(o.registerForm.get("firstName").dirty||o.registerForm.get("firstName").touched))}}function g(e,t){if(1&e&&(b.Qb(0,"div",25),b.Mb(1,"ion-icon",26),b.tc(2),b.Pb()),2&e){const e=b.bc().$implicit;b.Ab(2),b.vc(" ",e.message," ")}}function m(e,t){if(1&e&&(b.Ob(0),b.sc(1,g,3,1,"div",19),b.Nb()),2&e){const e=t.$implicit,o=b.bc();b.Ab(1),b.hc("ngIf",o.registerForm.get("lastName").hasError(e.type)&&(o.registerForm.get("lastName").dirty||o.registerForm.get("lastName").touched))}}function p(e,t){if(1&e&&(b.Qb(0,"div",25),b.Mb(1,"ion-icon",26),b.tc(2),b.Pb()),2&e){const e=b.bc().$implicit;b.Ab(2),b.vc(" ",e.message," ")}}function u(e,t){if(1&e&&(b.Ob(0),b.sc(1,p,3,1,"div",19),b.Nb()),2&e){const e=t.$implicit,o=b.bc();b.Ab(1),b.hc("ngIf",o.registerForm.get("email").hasError(e.type)&&(o.registerForm.get("email").dirty||o.registerForm.get("email").touched))}}function f(e,t){if(1&e&&(b.Qb(0,"div",25),b.Mb(1,"ion-icon",26),b.tc(2),b.Pb()),2&e){const e=b.bc().$implicit;b.Ab(2),b.vc(" ",e.message," ")}}function h(e,t){if(1&e&&(b.Ob(0),b.sc(1,f,3,1,"div",19),b.Nb()),2&e){const e=t.$implicit,o=b.bc();b.Ab(1),b.hc("ngIf",o.registerForm.get("matchingPasswords").get("password").hasError(e.type)&&(o.registerForm.get("matchingPasswords").get("password").dirty||o.registerForm.get("matchingPasswords").get("password").touched))}}function P(e,t){if(1&e&&(b.Qb(0,"div",25),b.Mb(1,"ion-icon",26),b.tc(2),b.Pb()),2&e){const e=b.bc().$implicit;b.Ab(2),b.vc(" ",e.message," ")}}function w(e,t){if(1&e&&(b.Ob(0),b.sc(1,P,3,1,"div",19),b.Nb()),2&e){const e=t.$implicit,o=b.bc();b.Ab(1),b.hc("ngIf",o.registerForm.get("matchingPasswords").get("confirmPassword").hasError(e.type)&&(o.registerForm.get("matchingPasswords").get("confirmPassword").dirty||o.registerForm.get("matchingPasswords").get("confirmPassword").touched))}}function v(e,t){if(1&e&&(b.Qb(0,"div",25),b.Mb(1,"ion-icon",26),b.tc(2),b.Pb()),2&e){const e=b.bc().$implicit;b.Ab(2),b.vc(" ",e.message," ")}}function y(e,t){if(1&e&&(b.Ob(0),b.sc(1,v,3,1,"div",19),b.Nb()),2&e){const e=t.$implicit,o=b.bc();b.Ab(1),b.hc("ngIf",o.registerForm.get("matchingPasswords").hasError(e.type)&&(o.registerForm.get("matchingPasswords").get("confirmPassword").dirty||o.registerForm.get("matchingPasswords").get("confirmPassword").touched))}}function M(e,t){if(1&e&&(b.Qb(0,"div",25),b.Mb(1,"ion-icon",26),b.tc(2),b.Pb()),2&e){const e=b.bc();b.Ab(2),b.vc(" ",e.error," ")}}function Q(e,t){if(1&e){const e=b.Rb();b.Qb(0,"ion-button",27),b.Yb("click",(function(){return b.oc(e),b.bc().openAppleSignIn()})),b.Mb(1,"ion-icon",28),b.tc(2," Sign in with Apple "),b.Pb()}}const A=function(){return["/sign-in"]},k=[{path:"",component:(()=>{class e{constructor(e,t,o,i,r){this.formBuilder=e,this.router=t,this.platform=o,this.zone=i,this.accountService=r,this.passwordType="password",this.hasError=!1,this.error="",this.showAppleSignIn=!1,this.validationMessages={email:[{type:"required",message:"Email is required."},{type:"pattern",message:"Please enter a valid email."}],firstName:[{type:"required",message:"First name is required."}],lastName:[{type:"required",message:"Last name is required."}],password:[{type:"required",message:"Password is required."},{type:"minlength",message:"Password must be at least 5 characters long."},{type:"pattern",message:"Your password must contain an uppercase, lowercase, number, and character."}],confirmPassword:[{type:"required",message:"Confirm password is required."}],matchingPasswords:[{type:"areEqual",message:"Password mismatch."}]}}ngOnInit(){this.showAppleSignIn=this.platform.is("ios");const e=new r.b("",r.p.compose([r.p.required,r.p.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,3}$")]));this.matchingPasswordsGroup=new r.d({password:new r.b("",r.p.compose([r.p.minLength(7),r.p.required,r.p.pattern("^(?=.*[0-9])(?=.*[!@#$%.^&*?])[a-zA-Z0-9!@#$%.^&*?]{7,25}$")])),confirmPassword:new r.b("",r.p.required)},e=>class{static areEqual(e){let t,o=!0;for(const i in e.controls)if(e.controls.hasOwnProperty(i)){const r=e.controls[i];if(void 0===t)t=r.value;else if(t!==r.value){o=!1;break}}return o?null:{areEqual:!0}}}.areEqual(e));const t=new r.b("",r.p.required),o=new r.b("",r.p.required);this.registerForm=new r.d({firstName:t,lastName:o,email:e,matchingPasswords:this.matchingPasswordsGroup})}togglePasswordMode(){this.passwordType="text"===this.passwordType?"password":"text"}async openAppleSignIn(){await this.accountService.loginApple().then(async e=>{if(!0===e.firstLogin){const t={replaceUrl:!1,state:{firstName:e.firstName,lastName:e.lastName,email:e.email,password:"",sso:!0}};this.zone.run(()=>{this.router.navigateByUrl("/post-register-about",t)})}else{const e={replaceUrl:!1};this.zone.run(()=>{this.router.navigateByUrl("/tab1",e)})}})}onSubmit(){this.accountService.accountEmailTakenGet(this.registerForm.controls.email.value).pipe(Object(c.a)(1)).subscribe(e=>{if(!1===e){const e={replaceUrl:!1,state:{firstName:this.registerForm.controls.firstName.value,lastName:this.registerForm.controls.lastName.value,email:this.registerForm.controls.email.value,password:this.matchingPasswordsGroup.controls.password.value}};this.zone.run(()=>{this.router.navigateByUrl("/post-register-about",e)})}else this.hasError=!0,this.error="An account with this email is already registered."},e=>{console.log(e),this.hasError=!0,this.error="An unexpected error has occurred."})}}return e.\u0275fac=function(t){return new(t||e)(b.Lb(r.a),b.Lb(s.g),b.Lb(n.Y),b.Lb(b.z),b.Lb(a.a))},e.\u0275cmp=b.Fb({type:e,selectors:[["register"]],decls:55,vars:15,consts:[["no-bounce","",3,"scrollY"],[1,"splash"],[1,"ion-align-items-baseline"],[1,"ion-justify-content-start"],["defaultHref","/sign-in",2,"color","beige"],[1,"back-to-login"],["routerLinkActive","router-link-active",3,"routerLink"],[3,"formGroup","ngSubmit"],[1,"roundedInput"],["autocapitalize","true","placeholder","First Name*","type","text","formControlName","firstName","required",""],[1,"validation-errors"],[4,"ngFor","ngForOf"],["autocapitalize","true","placeholder","Last Name*","type","text","formControlName","lastName","required",""],["autocapitalize","true","placeholder","Email*","type","email","formControlName","email","required",""],["formGroupName","matchingPasswords"],["autocapitalize","true","placeholder","Password*","formControlName","password","required","",3,"type"],["name","eye","item-right","",3,"click"],[1,"roundedInput",2,"margin-top","10px"],["autocapitalize","true","placeholder","Confirm Password*","formControlName","confirmPassword","required","",3,"type"],["class","error-message",4,"ngIf"],[1,"button-div"],["expand","block","type","submit",1,"submit-button",3,"disabled"],["expand","block",1,"facebook-button"],["slot","start","name","logo-facebook"],["class","apple-button","expand","block",3,"click",4,"ngIf"],[1,"error-message"],["name","information-circle-outline"],["expand","block",1,"apple-button",3,"click"],["slot","start","name","logo-apple"]],template:function(e,t){1&e&&(b.Qb(0,"ion-content",0),b.Qb(1,"div",1),b.Qb(2,"ion-row",2),b.Qb(3,"ion-col",3),b.Qb(4,"ion-buttons"),b.Mb(5,"ion-back-button",4),b.Pb(),b.Pb(),b.Pb(),b.Qb(6,"h1"),b.tc(7,"Create Account"),b.Pb(),b.Qb(8,"p",5),b.tc(9," Already have an account? "),b.Qb(10,"a",6),b.tc(11,"Login instead"),b.Pb(),b.Pb(),b.Qb(12,"form",7),b.Yb("ngSubmit",(function(){return t.onSubmit()})),b.Qb(13,"ion-grid"),b.Qb(14,"ion-row"),b.Qb(15,"ion-col"),b.Qb(16,"ion-item",8),b.Mb(17,"ion-input",9),b.Qb(18,"div",10),b.sc(19,l,2,1,"ng-container",11),b.Pb(),b.Pb(),b.Pb(),b.Qb(20,"ion-col"),b.Qb(21,"ion-item",8),b.Mb(22,"ion-input",12),b.Qb(23,"div",10),b.sc(24,m,2,1,"ng-container",11),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Qb(25,"ion-row"),b.Qb(26,"ion-col"),b.Qb(27,"ion-item",8),b.Mb(28,"ion-input",13),b.Qb(29,"div",10),b.sc(30,u,2,1,"ng-container",11),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Qb(31,"ion-row"),b.Qb(32,"ion-col"),b.Qb(33,"div",14),b.Qb(34,"ion-item",8),b.Mb(35,"ion-input",15),b.Qb(36,"ion-icon",16),b.Yb("click",(function(){return t.togglePasswordMode()})),b.Pb(),b.Pb(),b.Qb(37,"div",10),b.sc(38,h,2,1,"ng-container",11),b.Pb(),b.Qb(39,"ion-item",17),b.Mb(40,"ion-input",18),b.Pb(),b.Qb(41,"div",10),b.sc(42,w,2,1,"ng-container",11),b.Pb(),b.Pb(),b.Qb(43,"div",10),b.sc(44,y,2,1,"ng-container",11),b.Pb(),b.Qb(45,"div",10),b.sc(46,M,3,1,"div",19),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Qb(47,"div",20),b.Qb(48,"ion-button",21),b.tc(49,"Register"),b.Pb(),b.Pb(),b.Pb(),b.Qb(50,"div",20),b.Qb(51,"ion-button",22),b.Mb(52,"ion-icon",23),b.tc(53," Login with Facebook "),b.Pb(),b.sc(54,Q,3,0,"ion-button",24),b.Pb(),b.Pb(),b.Pb()),2&e&&(b.hc("scrollY",!1),b.Ab(10),b.hc("routerLink",b.jc(14,A)),b.Ab(2),b.hc("formGroup",t.registerForm),b.Ab(7),b.hc("ngForOf",t.validationMessages.firstName),b.Ab(5),b.hc("ngForOf",t.validationMessages.lastName),b.Ab(6),b.hc("ngForOf",t.validationMessages.email),b.Ab(5),b.hc("type",t.passwordType),b.Ab(3),b.hc("ngForOf",t.validationMessages.password),b.Ab(2),b.hc("type",t.passwordType),b.Ab(2),b.hc("ngForOf",t.validationMessages.confirmPassword),b.Ab(2),b.hc("ngForOf",t.validationMessages.matchingPasswords),b.Ab(2),b.hc("ngIf",t.hasError),b.Ab(2),b.hc("disabled",!t.registerForm.valid),b.Ab(6),b.hc("ngIf",t.showAppleSignIn))},directives:[n.m,n.G,n.l,n.g,n.d,n.e,s.j,s.i,n.Z,r.q,r.l,r.e,n.r,n.x,n.w,n.bb,r.k,r.c,r.o,i.j,r.f,n.t,i.k,n.f],styles:["ion-content[_ngcontent-%COMP%]{--background:none}ion-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding-top:3%;text-align:center;font-size:40px;font-weight:700;margin:0;color:#fff}ion-header[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{--background:transparent}.close-icon[_ngcontent-%COMP%]{font-size:30px;color:#fff}.roundedInput[_ngcontent-%COMP%]{--border-radius:10px;--border-width:1px;--highlight-height:0;--background:#f8f9fa;padding-top:10px}.nameRow[_ngcontent-%COMP%]{padding-block:10%}.nameRow[_ngcontent-%COMP%]   .roundedInput[_ngcontent-%COMP%]{padding-block:0}.roundedInput.ion-invalid.item-has-focus[_ngcontent-%COMP%]{--border-color:var(--ion-color-danger-shade)}.roundedInput.ion-valid.item-has-focus[_ngcontent-%COMP%]{--border-color:var(--ion-color-success-shade)}.roundedInput.ion-invalid.ion-dirty[_ngcontent-%COMP%]{--border-color:var(--ion-color-danger-shade)}.roundedInput.ion-valid.ion-dirty[_ngcontent-%COMP%]{--border-color:var(--ion-color-success-shade)}.submit-button[_ngcontent-%COMP%]{--background:#fff;--background-activated:#fff;--ripple-color:#fff;--background-focused:#fff;--color-focused:#fff;color:#128c7e;--vertical-align:middle;padding-left:5%;padding-right:5%}.back-to-login[_ngcontent-%COMP%]{color:#fff;text-align:center}.back-to-login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.button-div[_ngcontent-%COMP%]{padding-top:3%}ion-grid[_ngcontent-%COMP%]{padding-left:5%;padding-right:5%;padding-bottom:0}"]}),e})()}];let F=(()=>{class e{}return e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({factory:function(t){return new(t||e)},imports:[[s.k.forChild(k)],s.k]}),e})(),N=(()=>{class e{}return e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({factory:function(t){return new(t||e)},imports:[[i.c,r.g,n.S,r.n,F]]}),e})()}}]);