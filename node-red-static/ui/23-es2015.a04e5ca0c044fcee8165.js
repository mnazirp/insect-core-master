(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{M28B:function(r,s,e){"use strict";e.r(s),e.d(s,"ResetPasswordModule",(function(){return H}));var t=e("tyNb"),o=e("bTqV"),a=e("kmnG"),i=e("NFeN"),d=e("qFsG"),n=e("5HBU"),p=e("3Pt+"),c=e("XNiG"),w=e("1G5W"),b=e("PVWW"),m=e("fXoL"),u=e("0JVi"),f=e("tk/3");let l=(()=>{class r{constructor(r){this.http=r}resetPassword(r,s){return this.http.post("/api/reset-password/finish",{reset_id:r,password:s})}}return r.\u0275fac=function(s){return new(s||r)(m.Yb(f.b))},r.\u0275prov=m.Kb({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var g=e("XiUz"),h=e("ofXK");function x(r,s){1&r&&(m.Ub(0,"mat-error"),m.Lc(1," Password is required "),m.Tb())}function v(r,s){1&r&&(m.Ub(0,"mat-error"),m.Lc(1," Password is too short "),m.Tb())}function P(r,s){1&r&&(m.Ub(0,"mat-error"),m.Lc(1," Password confirmation is required "),m.Tb())}function C(r,s){1&r&&(m.Ub(0,"mat-error"),m.Lc(1," Passwords must match "),m.Tb())}function y(r,s){1&r&&(m.Ub(0,"span"),m.Lc(1," Reset succeed, you can now login with your new password. "),m.Tb())}function T(r,s){if(1&r&&(m.Ub(0,"span",16),m.Lc(1),m.Tb()),2&r){const r=m.gc();m.Cb(1),m.Nc(" Failed to reset password: ",r.failedMsg," ")}}const U=function(){return{duration:"300ms",y:"100px"}},L=function(r){return{value:"*",params:r}};let k=(()=>{class r{constructor(r,s,e,t){this._fuseConfigService=r,this._formBuilder=s,this.service=e,this.activatedRoute=t,this.passwordHide=!0,this._fuseConfigService.config={layout:{navbar:{hidden:!0},toolbar:{hidden:!0},footer:{hidden:!0},sidepanel:{hidden:!0}}},this._unsubscribeAll=new c.a,this.activatedRoute.queryParams.subscribe(r=>{this.resetId=r.resetId,console.log(this.resetId)})}ngOnInit(){this.resetPasswordForm=this._formBuilder.group({name:[""],email:[""],password:["",[p.z.required,p.z.minLength(8)]],passwordConfirm:["",[p.z.required,I]]}),this.resetPasswordForm.get("password").valueChanges.pipe(Object(w.a)(this._unsubscribeAll)).subscribe(()=>{this.resetPasswordForm.get("passwordConfirm").updateValueAndValidity()})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}submit(){this.submitted=!1,this.resetPasswordForm.invalid?this.resetPasswordForm.markAllAsTouched():(this.submitted=!0,this.service.resetPassword(this.resetId,this.resetPasswordForm.value.password).subscribe(r=>{this.succeeded=!0},r=>{this.failed=!0,this.failedMsg=r.error.message||"Error"}))}}return r.\u0275fac=function(s){return new(s||r)(m.Ob(u.b),m.Ob(p.g),m.Ob(l),m.Ob(t.a))},r.\u0275cmp=m.Ib({type:r,selectors:[["reset-password"]],decls:34,vars:20,consts:[["id","reset-password","fxLayout","column"],["id","reset-password-form-wrapper","fxLayout","column","fxLayoutAlign","center center"],["id","reset-password-form"],[1,"logo"],["src","assets/icons/protenga/favicon.png"],[1,"title"],["name","resetPasswordForm","novalidate","",3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","formControlName","password",3,"type"],["mat-icon-button","","matSuffix","","type","button",3,"click"],[4,"ngIf"],["matInput","","formControlName","passwordConfirm",3,"type"],["mat-raised-button","","color","accent","aria-label","RESET MY PASSWORD",1,"submit-button"],["fxLayout","row","fxLayoutAlign","center center",1,"login"],["style","color: red;",4,"ngIf"],[1,"link",3,"routerLink"],[2,"color","red"]],template:function(r,s){1&r&&(m.Ub(0,"div",0),m.Ub(1,"div",1),m.Ub(2,"div",2),m.Ub(3,"div",3),m.Pb(4,"img",4),m.Tb(),m.Ub(5,"div",5),m.Lc(6,"RESET YOUR PASSWORD"),m.Tb(),m.Ub(7,"form",6),m.cc("ngSubmit",(function(){return s.submit()})),m.Ub(8,"mat-form-field",7),m.Ub(9,"mat-label"),m.Lc(10,"Password"),m.Tb(),m.Pb(11,"input",8),m.Ub(12,"button",9),m.cc("click",(function(){return s.passwordHide=!s.passwordHide})),m.Ub(13,"mat-icon"),m.Lc(14),m.Tb(),m.Tb(),m.Jc(15,x,2,0,"mat-error",10),m.Jc(16,v,2,0,"mat-error",10),m.Tb(),m.Ub(17,"mat-form-field",7),m.Ub(18,"mat-label"),m.Lc(19,"Password (Confirm)"),m.Tb(),m.Pb(20,"input",11),m.Ub(21,"button",9),m.cc("click",(function(){return s.passwordHide=!s.passwordHide})),m.Ub(22,"mat-icon"),m.Lc(23),m.Tb(),m.Tb(),m.Jc(24,P,2,0,"mat-error",10),m.Jc(25,C,2,0,"mat-error",10),m.Tb(),m.Ub(26,"button",12),m.Lc(27," RESET MY PASSWORD "),m.Tb(),m.Tb(),m.Ub(28,"div",13),m.Jc(29,y,2,0,"span",10),m.Jc(30,T,2,1,"span",14),m.Tb(),m.Ub(31,"div",13),m.Ub(32,"a",15),m.Lc(33,"Go back to login"),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Tb()),2&r&&(m.Cb(2),m.nc("@animate",m.qc(18,L,m.pc(17,U))),m.Cb(5),m.nc("formGroup",s.resetPasswordForm),m.Cb(4),m.nc("type",s.passwordHide?"password":"text"),m.Cb(1),m.Db("aria-label","Hide password")("aria-pressed",s.passwordHide),m.Cb(2),m.Mc(s.passwordHide?"visibility_off":"visibility"),m.Cb(1),m.nc("ngIf",s.resetPasswordForm.get("password").hasError("required")),m.Cb(1),m.nc("ngIf",s.resetPasswordForm.get("password").hasError("minlength")),m.Cb(4),m.nc("type",s.passwordHide?"password":"text"),m.Cb(1),m.Db("aria-label","Hide password")("aria-pressed",s.passwordHide),m.Cb(2),m.Mc(s.passwordHide?"visibility_off":"visibility"),m.Cb(1),m.nc("ngIf",s.resetPasswordForm.get("passwordConfirm").hasError("required")),m.Cb(1),m.nc("ngIf",!s.resetPasswordForm.get("passwordConfirm").hasError("required")&&s.resetPasswordForm.get("passwordConfirm").hasError("passwordsNotMatching")),m.Cb(4),m.nc("ngIf",s.submitted&&s.succeeded),m.Cb(1),m.nc("ngIf",s.submitted&&s.failed),m.Cb(2),m.nc("routerLink","/login/id"))},directives:[g.c,g.b,p.A,p.t,p.l,a.c,a.g,d.b,p.d,p.s,p.j,o.b,a.i,i.a,h.t,t.k,a.b],styles:["reset-password #reset-password{width:100%;background:url(/assets/images/backgrounds/dark-material-bg.jpg) no-repeat;background-size:cover}reset-password #reset-password #reset-password-form-wrapper{flex:1 0 auto;padding:32px}@media screen and (max-width:599px){reset-password #reset-password #reset-password-form-wrapper{padding:16px}}reset-password #reset-password #reset-password-form-wrapper #reset-password-form{width:400px;max-width:400px;padding:32px;text-align:center;box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}@media screen and (max-width:599px){reset-password #reset-password #reset-password-form-wrapper #reset-password-form{padding:24px;width:100%}}reset-password #reset-password #reset-password-form-wrapper #reset-password-form .logo{width:128px;margin:32px auto}reset-password #reset-password #reset-password-form-wrapper #reset-password-form .title{font-size:20px;margin:16px 0 32px}reset-password #reset-password #reset-password-form-wrapper #reset-password-form form{width:100%;text-align:left}reset-password #reset-password #reset-password-form-wrapper #reset-password-form form mat-form-field{width:100%}reset-password #reset-password #reset-password-form-wrapper #reset-password-form form .submit-button{width:220px;margin:16px auto;display:block}@media screen and (max-width:599px){reset-password #reset-password #reset-password-form-wrapper #reset-password-form form .submit-button{width:90%}}reset-password #reset-password #reset-password-form-wrapper #reset-password-form .login{margin:32px auto 24px;width:250px;font-weight:600}reset-password #reset-password #reset-password-form-wrapper #reset-password-form .login .text{margin-right:8px}"],encapsulation:2,data:{animation:b.a}}),r})();const I=r=>{if(!r.parent||!r)return null;const s=r.parent.get("password"),e=r.parent.get("passwordConfirm");return s&&e?""===e.value||s.value===e.value?null:{passwordsNotMatching:!0}:null},F=[{path:"",component:k}];let H=(()=>{class r{}return r.\u0275mod=m.Mb({type:r}),r.\u0275inj=m.Lb({factory:function(s){return new(s||r)},imports:[[t.l.forChild(F),o.c,a.e,i.b,d.c,n.a]]}),r})()}}]);