!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{ZVj9:function(a,n,i){"use strict";i.r(n),i.d(n,"SampleModule",(function(){return z}));var o=i("tyNb"),c=i("sYmb"),l=i("5HBU"),r=i("tk/3"),b=i("3Pt+"),s=i("wd/R"),u=i("XNiG"),f=i("PqYM"),d=i("eIep"),m=i("un/a"),h=i("w1tV"),p=i("1G5W"),v={lang:"en",data:{SAMPLE:{HELLO:"Hello, World!"}}},g={lang:"tr",data:{SAMPLE:{HELLO:"Merhaba D\xfcnya!"}}},U=i("fXoL"),L=i("gPJw"),T=i("4WDQ"),C=i("GReN"),w=i("EwFO"),y=i("XiUz"),D=i("kmnG"),O=i("d3UM"),S=i("ofXK"),P=i("FKr1"),k=i("bTqV"),I=i("Wp6s"),M=i("+0xr");function F(t,e){if(1&t&&(U.Ub(0,"mat-option",22),U.Lc(1),U.Tb()),2&t){var a=e.$implicit;U.nc("value",a.value),U.Cb(1),U.Mc(a.label)}}function J(t,e){if(1&t&&(U.Ub(0,"mat-option",22),U.Lc(1),U.Tb()),2&t){var a=e.$implicit;U.nc("value",a.value),U.Cb(1),U.Mc(a.label)}}function x(t,e){if(1&t&&(U.Ub(0,"mat-option",22),U.Lc(1),U.Tb()),2&t){var a=e.$implicit;U.nc("value",a.value),U.Cb(1),U.Mc(a.label)}}function R(t,e){1&t&&(U.Ub(0,"th",23),U.Lc(1," Parameter "),U.Tb())}function N(t,e){if(1&t&&(U.Ub(0,"td",24),U.Lc(1),U.Tb()),2&t){var a=e.$implicit;U.Cb(1),U.Nc(" ",a.parameter," ")}}function j(t,e){1&t&&(U.Ub(0,"th",23),U.Lc(1," Value "),U.Tb())}function E(t,e){if(1&t&&(U.Ub(0,"td",24),U.Lc(1),U.Tb()),2&t){var a=e.$implicit;U.Cb(1),U.Nc(" ",a.value," ")}}function G(t,e){1&t&&(U.Ub(0,"th",23),U.Lc(1," Unit "),U.Tb())}function H(t,e){if(1&t&&(U.Ub(0,"td",24),U.Lc(1),U.Tb()),2&t){var a=e.$implicit;U.Cb(1),U.Nc(" ",a.unit," ")}}function _(t,e){1&t&&U.Pb(0,"tr",25)}function $(t,e){1&t&&U.Pb(0,"tr",26)}function V(t,e){1&t&&(U.Ub(0,"div"),U.Lc(1,"No data"),U.Tb())}var W,X,q=[D.e,O.b,P.p,k.c,M.l,I.d],A=[{path:"",component:(W=function(){function a(e,n,i,o,c){var l=this;t(this,a),this._fuseTranslationLoaderService=e,this.http=n,this.global=i,this.momentUtil=o,this.activatedRoute=c,this.displayedColumns=["parameter","value","unit"],this.dataSource=[],this.originalData=[],this.form=new b.k({site:new b.h("chang_chun_facility"),location:new b.h(""),deviceId:new b.h}),this.stopPolling=new u.a,this.eventName="dashboard-sensor",this.sensorOptions=[],this.locationOptions=[],this.siteOptions=[{value:"chang_chun_facility",label:"Chang Chun Facility"}],this._fuseTranslationLoaderService.loadTranslations(v,g),this.activatedRoute.queryParams.subscribe((function(t){l.selectedDeviceId=t.deviceId,l.form.controls.deviceId.setValue(l.selectedDeviceId)}))}var n,i,o;return n=a,(i=[{key:"ngOnInit",value:function(){}},{key:"startPolling",value:function(){var t=this;this.polling=Object(f.a)(1,15e3).pipe(Object(d.a)((function(){return t.fetchData(t.selectedDeviceId,t.selectedLocation)})),Object(m.a)(),Object(h.a)(),Object(p.a)(this.stopPolling)),this.polling.subscribe((function(e){return t.handleData(e)}))}},{key:"fetchData",value:function(t,e){var a={};return e&&(a.location=e),this.http.get("/api/".concat(this.global.tenant,"/forms/dashboard-sensor/").concat(t),{headers:{skipLoading:"true"},params:a})}},{key:"handleData",value:function(t){this.selectedSite=this.form.controls.site.value,this.selectedDeviceId=this.form.controls.deviceId.value,this.selectedLocation=this.form.controls.location.value,this.lastUpdated=t.timestamp?s(1e3*t.timestamp).format(this.momentUtil.displayFormat):"",this.dataSource=t.params}},{key:"filterDataSource",value:function(){var t=this;this.fetchData(this.form.controls.deviceId.value,this.form.controls.location.value).subscribe((function(e){return t.handleData(e)}))}},{key:"ngOnDestroy",value:function(){this.stopPolling.next()}},{key:"submit",value:function(){var t=this,e=new r.d;for(var a in this.form.value){var n=this.form.value[a];n&&(e=e.append(a,n))}this.http.get("/api/".concat(this.global.tenant,"/iot/dashbord-sensor"),{params:e}).subscribe((function(t){}),(function(e){t.global.error(e)}))}},{key:"selectedSiteLabel",get:function(){var t=this,e=this.siteOptions.find((function(e){return e.value===t.selectedSite}));return e?e.label:""}},{key:"formEmpty",get:function(){var t=!0;for(var e in this.form.value)this.form.value[e]&&(t=!1);return t}}])&&e(n.prototype,i),o&&e(n,o),a}(),W.\u0275fac=function(t){return new(t||W)(U.Ob(L.a),U.Ob(r.b),U.Ob(T.a),U.Ob(C.a),U.Ob(o.a))},W.\u0275cmp=U.Ib({type:W,selectors:[["sample"]],decls:59,vars:13,consts:[["fusePerfectScrollbar","",1,"page-layout","blank","p-24"],["fxLayout","column"],["fxLayout","row","fxLayoutGap","24px",3,"formGroup","ngSubmit"],["appearance","outline","fxFlex","100"],["formControlName","site"],[3,"value",4,"ngFor","ngForOf"],["formControlName","location"],["value",""],["formControlName","deviceId"],["fxFlex","10",2,"padding","0.25em 0.25em calc(21.5px + 0.25em) 0.25em"],["mat-raised-button","","fxFill","","color","accent","type","submit",3,"disabled","click"],[1,"filter"],[2,"float","right"],["mat-table","","fxFlex","",3,"dataSource"],["matColumnDef","parameter"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","value"],["matColumnDef","unit"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[4,"ngIf"],[3,"value"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(U.Ub(0,"div",0),U.Ub(1,"div",1),U.Ub(2,"form",2),U.cc("ngSubmit",(function(){return e.filterDataSource()})),U.Ub(3,"mat-form-field",3),U.Ub(4,"mat-label"),U.Lc(5,"Site Filter"),U.Tb(),U.Ub(6,"mat-select",4),U.Jc(7,F,2,2,"mat-option",5),U.Tb(),U.Tb(),U.Ub(8,"mat-form-field",3),U.Ub(9,"mat-label"),U.Lc(10,"Location Filter"),U.Tb(),U.Ub(11,"mat-select",6),U.Ub(12,"mat-option",7),U.Lc(13,"Show all"),U.Tb(),U.Jc(14,J,2,2,"mat-option",5),U.Tb(),U.Tb(),U.Ub(15,"mat-form-field",3),U.Ub(16,"mat-label"),U.Lc(17,"Device ID"),U.Tb(),U.Ub(18,"mat-select",8),U.Jc(19,x,2,2,"mat-option",5),U.Tb(),U.Tb(),U.Ub(20,"div",9),U.Ub(21,"button",10),U.cc("click",(function(){return e.filterDataSource()})),U.Lc(22,"Show"),U.Tb(),U.Tb(),U.Tb(),U.Ub(23,"mat-card",1),U.Ub(24,"table",11),U.Ub(25,"tr"),U.Ub(26,"td",12),U.Lc(27,"Device ID:"),U.Tb(),U.Ub(28,"td"),U.Lc(29),U.Tb(),U.Ub(30,"td",12),U.Lc(31,"Location:"),U.Tb(),U.Ub(32,"td"),U.Lc(33),U.Tb(),U.Ub(34,"td",12),U.Lc(35,"Measurement Timestamp:"),U.Tb(),U.Ub(36,"td"),U.Lc(37),U.Tb(),U.Tb(),U.Ub(38,"tr"),U.Pb(39,"td"),U.Pb(40,"td"),U.Pb(41,"td"),U.Ub(42,"td"),U.Lc(43),U.Tb(),U.Pb(44,"td"),U.Pb(45,"td"),U.Tb(),U.Tb(),U.Ub(46,"table",13),U.Sb(47,14),U.Jc(48,R,2,0,"th",15),U.Jc(49,N,2,1,"td",16),U.Rb(),U.Sb(50,17),U.Jc(51,j,2,0,"th",15),U.Jc(52,E,2,1,"td",16),U.Rb(),U.Sb(53,18),U.Jc(54,G,2,0,"th",15),U.Jc(55,H,2,1,"td",16),U.Rb(),U.Jc(56,_,1,0,"tr",19),U.Jc(57,$,1,0,"tr",20),U.Tb(),U.Jc(58,V,2,0,"div",21),U.Tb(),U.Tb(),U.Tb()),2&t&&(U.Cb(2),U.nc("formGroup",e.form),U.Cb(5),U.nc("ngForOf",e.siteOptions),U.Cb(7),U.nc("ngForOf",e.locationOptions),U.Cb(5),U.nc("ngForOf",e.sensorOptions),U.Cb(2),U.nc("disabled",e.formEmpty),U.Cb(8),U.Mc(e.selectedDeviceId),U.Cb(4),U.Mc(e.selectedSiteLabel),U.Cb(4),U.Mc(e.lastUpdated),U.Cb(6),U.Mc(e.selectedLocation||"Showing all"),U.Cb(3),U.nc("dataSource",e.dataSource),U.Cb(10),U.nc("matHeaderRowDef",e.displayedColumns),U.Cb(1),U.nc("matRowDefColumns",e.displayedColumns),U.Cb(1),U.nc("ngIf",0===e.dataSource.length))},directives:[w.a,y.c,b.A,b.t,y.d,b.l,D.c,y.a,D.g,O.a,b.s,b.j,S.s,P.o,k.b,y.e,I.a,M.j,M.c,M.e,M.b,M.g,M.i,S.t,M.d,M.a,M.f,M.h],styles:[".filter[_ngcontent-%COMP%]{font-size:large;font-weight:700}"]}),W)}],z=((X=function e(){t(this,e)}).\u0275mod=U.Mb({type:X}),X.\u0275inj=U.Lb({factory:function(t){return new(t||X)},imports:[[o.l.forChild(A),c.b,l.a,q]]}),X)}}])}();