(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Om5r:function(t,e,i){"use strict";i.r(e),i.d(e,"SampleModule",(function(){return bt}));var r=i("tyNb"),a=i("sYmb"),o=i("5HBU"),s=i("XNiG"),n=i("PqYM"),c=i("eIep"),d=i("un/a"),h=i("w1tV"),l=i("1G5W");const b={lang:"en",data:{DASHBOARD_ATTENDANCE:{ATTENDANCE:"Attendance",USER_ID:"Protenga ID",USER_NAME:"Name",REPORTED_AT:"Last check-in time",SUBMITTED_AT:"Submitted at",ROLE:"Role",TEMP:"Temp (\xb0C)"}}},m={lang:"my",data:{DASHBOARD_ATTENDANCE:{ATTENDANCE:"Kehadiran",USER_ID:"Protenga ID",USER_NAME:"Nama",REPORTED_AT:"Last check-in time",SUBMITTED_AT:"Dikemukakan pada",ROLE:"Peranan",TEMP:"Suhu yang direkodkan terkini (celsius)"}}};var u=i("fXoL"),p=i("gPJw"),f=i("tk/3"),_=i("4WDQ");let g=(()=>{class t{constructor(){this.rolesLabels={admin:"Administrator"}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=u.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var w=i("EwFO"),O=i("XiUz"),S=i("NFeN"),v=i("ofXK"),D=i("+0xr"),A=i("8LU1"),C=i("FKr1"),j=i("FtGj"),T=i("VRyK"),x=i("R0Ic"),y=i("u47x");const E=["mat-sort-header",""];function P(t,e){if(1&t){const t=u.Vb();u.Ub(0,"div",3),u.cc("@arrowPosition.start",(function(){return u.yc(t),u.gc()._disableViewStateAnimation=!0}))("@arrowPosition.done",(function(){return u.yc(t),u.gc()._disableViewStateAnimation=!1})),u.Pb(1,"div",4),u.Ub(2,"div",5),u.Pb(3,"div",6),u.Pb(4,"div",7),u.Pb(5,"div",8),u.Tb(),u.Tb()}if(2&t){const t=u.gc();u.nc("@arrowOpacity",t._getArrowViewState())("@arrowPosition",t._getArrowViewState())("@allowChildren",t._getArrowDirectionState()),u.Cb(2),u.nc("@indicator",t._getArrowDirectionState()),u.Cb(1),u.nc("@leftPointer",t._getArrowDirectionState()),u.Cb(1),u.nc("@rightPointer",t._getArrowDirectionState())}}const N=["*"];class U{}const R=Object(C.C)(Object(C.A)(U));let k=(()=>{class t extends R{constructor(){super(...arguments),this.sortables=new Map,this._stateChanges=new s.a,this.start="asc",this._direction="",this.sortChange=new u.o}get direction(){return this._direction}set direction(t){this._direction=t}get disableClear(){return this._disableClear}set disableClear(t){this._disableClear=Object(A.c)(t)}register(t){this.sortables.set(t.id,t)}deregister(t){this.sortables.delete(t.id)}sort(t){this.active!=t.id?(this.active=t.id,this.direction=t.start?t.start:this.start):this.direction=this.getNextSortDirection(t),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(t){if(!t)return"";let e=function(t,e){let i=["asc","desc"];return"desc"==t&&i.reverse(),e||i.push(""),i}(t.start||this.start,null!=t.disableClear?t.disableClear:this.disableClear),i=e.indexOf(this.direction)+1;return i>=e.length&&(i=0),e[i]}ngOnInit(){this._markInitialized()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}}return t.\u0275fac=function(e){return I(e||t)},t.\u0275dir=u.Jb({type:t,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{disabled:["matSortDisabled","disabled"],start:["matSortStart","start"],direction:["matSortDirection","direction"],disableClear:["matSortDisableClear","disableClear"],active:["matSortActive","active"]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[u.zb,u.Ab]}),t})();const I=u.Wb(k),L=C.b.ENTERING+" "+C.a.STANDARD_CURVE,M={indicator:Object(x.p)("indicator",[Object(x.m)("active-asc, asc",Object(x.n)({transform:"translateY(0px)"})),Object(x.m)("active-desc, desc",Object(x.n)({transform:"translateY(10px)"})),Object(x.o)("active-asc <=> active-desc",Object(x.e)(L))]),leftPointer:Object(x.p)("leftPointer",[Object(x.m)("active-asc, asc",Object(x.n)({transform:"rotate(-45deg)"})),Object(x.m)("active-desc, desc",Object(x.n)({transform:"rotate(45deg)"})),Object(x.o)("active-asc <=> active-desc",Object(x.e)(L))]),rightPointer:Object(x.p)("rightPointer",[Object(x.m)("active-asc, asc",Object(x.n)({transform:"rotate(45deg)"})),Object(x.m)("active-desc, desc",Object(x.n)({transform:"rotate(-45deg)"})),Object(x.o)("active-asc <=> active-desc",Object(x.e)(L))]),arrowOpacity:Object(x.p)("arrowOpacity",[Object(x.m)("desc-to-active, asc-to-active, active",Object(x.n)({opacity:1})),Object(x.m)("desc-to-hint, asc-to-hint, hint",Object(x.n)({opacity:.54})),Object(x.m)("hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void",Object(x.n)({opacity:0})),Object(x.o)("* => asc, * => desc, * => active, * => hint, * => void",Object(x.e)("0ms")),Object(x.o)("* <=> *",Object(x.e)(L))]),arrowPosition:Object(x.p)("arrowPosition",[Object(x.o)("* => desc-to-hint, * => desc-to-active",Object(x.e)(L,Object(x.i)([Object(x.n)({transform:"translateY(-25%)"}),Object(x.n)({transform:"translateY(0)"})]))),Object(x.o)("* => hint-to-desc, * => active-to-desc",Object(x.e)(L,Object(x.i)([Object(x.n)({transform:"translateY(0)"}),Object(x.n)({transform:"translateY(25%)"})]))),Object(x.o)("* => asc-to-hint, * => asc-to-active",Object(x.e)(L,Object(x.i)([Object(x.n)({transform:"translateY(25%)"}),Object(x.n)({transform:"translateY(0)"})]))),Object(x.o)("* => hint-to-asc, * => active-to-asc",Object(x.e)(L,Object(x.i)([Object(x.n)({transform:"translateY(0)"}),Object(x.n)({transform:"translateY(-25%)"})]))),Object(x.m)("desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active",Object(x.n)({transform:"translateY(0)"})),Object(x.m)("hint-to-desc, active-to-desc, desc",Object(x.n)({transform:"translateY(-25%)"})),Object(x.m)("hint-to-asc, active-to-asc, asc",Object(x.n)({transform:"translateY(25%)"}))]),allowChildren:Object(x.p)("allowChildren",[Object(x.o)("* <=> *",[Object(x.j)("@*",Object(x.f)(),{optional:!0})])])};let H=(()=>{class t{constructor(){this.changes=new s.a,this.sortButtonLabel=t=>"Change sorting for "+t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=Object(u.Kb)({factory:function(){return new t},token:t,providedIn:"root"}),t})();const V={provide:H,deps:[[new u.C,new u.L,H]],useFactory:function(t){return t||new H}};class Y{}const J=Object(C.A)(Y);let B=(()=>{class t extends J{constructor(t,e,i,r,a,o){super(),this._intl=t,this._sort=i,this._columnDef=r,this._focusMonitor=a,this._elementRef=o,this._showIndicatorHint=!1,this._arrowDirection="",this._disableViewStateAnimation=!1,this.arrowPosition="after",this._rerenderSubscription=Object(T.a)(i.sortChange,i._stateChanges,t.changes).subscribe(()=>{this._isSorted()&&this._updateArrowDirection(),!this._isSorted()&&this._viewState&&"active"===this._viewState.toState&&(this._disableViewStateAnimation=!1,this._setAnimationTransitionState({fromState:"active",toState:this._arrowDirection})),e.markForCheck()})}get disableClear(){return this._disableClear}set disableClear(t){this._disableClear=Object(A.c)(t)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._updateArrowDirection(),this._setAnimationTransitionState({toState:this._isSorted()?"active":this._arrowDirection}),this._sort.register(this)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>this._setIndicatorHintVisible(!!t))}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._rerenderSubscription.unsubscribe()}_setIndicatorHintVisible(t){this._isDisabled()&&t||(this._showIndicatorHint=t,this._isSorted()||(this._updateArrowDirection(),this._setAnimationTransitionState(this._showIndicatorHint?{fromState:this._arrowDirection,toState:"hint"}:{fromState:"hint",toState:this._arrowDirection})))}_setAnimationTransitionState(t){this._viewState=t,this._disableViewStateAnimation&&(this._viewState={toState:t.toState})}_toggleOnInteraction(){this._sort.sort(this),"hint"!==this._viewState.toState&&"active"!==this._viewState.toState||(this._disableViewStateAnimation=!0);const t=this._isSorted()?{fromState:this._arrowDirection,toState:"active"}:{fromState:"active",toState:this._arrowDirection};this._setAnimationTransitionState(t),this._showIndicatorHint=!1}_handleClick(){this._isDisabled()||this._toggleOnInteraction()}_handleKeydown(t){this._isDisabled()||t.keyCode!==j.o&&t.keyCode!==j.g||(t.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&("asc"===this._sort.direction||"desc"===this._sort.direction)}_getArrowDirectionState(){return`${this._isSorted()?"active-":""}${this._arrowDirection}`}_getArrowViewState(){const t=this._viewState.fromState;return(t?t+"-to-":"")+this._viewState.toState}_updateArrowDirection(){this._arrowDirection=this._isSorted()?this._sort.direction:this.start||this._sort.start}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?"asc"==this._sort.direction?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}}return t.\u0275fac=function(e){return new(e||t)(u.Ob(H),u.Ob(u.h),u.Ob(k,8),u.Ob("MAT_SORT_HEADER_COLUMN_DEF",8),u.Ob(y.h),u.Ob(u.l))},t.\u0275cmp=u.Ib({type:t,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(t,e){1&t&&u.cc("click",(function(){return e._handleClick()}))("keydown",(function(t){return e._handleKeydown(t)}))("mouseenter",(function(){return e._setIndicatorHintVisible(!0)}))("mouseleave",(function(){return e._setIndicatorHintVisible(!1)})),2&t&&(u.Db("aria-sort",e._getAriaSortAttribute()),u.Gb("mat-sort-header-disabled",e._isDisabled()))},inputs:{disabled:"disabled",arrowPosition:"arrowPosition",disableClear:"disableClear",id:["mat-sort-header","id"],start:"start"},exportAs:["matSortHeader"],features:[u.zb],attrs:E,ngContentSelectors:N,decls:4,vars:6,consts:[["role","button",1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],["class","mat-sort-header-arrow",4,"ngIf"],[1,"mat-sort-header-arrow"],[1,"mat-sort-header-stem"],[1,"mat-sort-header-indicator"],[1,"mat-sort-header-pointer-left"],[1,"mat-sort-header-pointer-right"],[1,"mat-sort-header-pointer-middle"]],template:function(t,e){1&t&&(u.mc(),u.Ub(0,"div",0),u.Ub(1,"div",1),u.lc(2),u.Tb(),u.Jc(3,P,6,6,"div",2),u.Tb()),2&t&&(u.Gb("mat-sort-header-sorted",e._isSorted())("mat-sort-header-position-before","before"==e.arrowPosition),u.Db("tabindex",e._isDisabled()?null:0),u.Cb(3),u.nc("ngIf",e._renderArrow()))},directives:[v.t],styles:[".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"],encapsulation:2,data:{animation:[M.indicator,M.leftPointer,M.rightPointer,M.arrowOpacity,M.arrowPosition,M.allowChildren]},changeDetection:0}),t})(),F=(()=>{class t{}return t.\u0275mod=u.Mb({type:t}),t.\u0275inj=u.Lb({factory:function(e){return new(e||t)},providers:[V],imports:[[v.c]]}),t})();function G(t,e){if(1&t&&(u.Ub(0,"span"),u.Lc(1),u.Tb()),2&t){const t=u.gc();u.Cb(1),u.Nc("(",t.dataSource.length,")")}}function K(t,e){1&t&&(u.Ub(0,"mat-header-cell",19),u.Lc(1),u.hc(2,"translate"),u.Tb()),2&t&&(u.Cb(1),u.Mc(u.ic(2,1,"DASHBOARD_ATTENDANCE.USER_NAME")))}function $(t,e){if(1&t&&(u.Ub(0,"mat-cell"),u.Ub(1,"p",20),u.Lc(2),u.Tb(),u.Tb()),2&t){const t=e.$implicit;u.Cb(2),u.Nc(" ",t.user_name," ")}}function z(t,e){1&t&&(u.Ub(0,"mat-header-cell",19),u.Lc(1),u.hc(2,"translate"),u.Tb()),2&t&&(u.Cb(1),u.Mc(u.ic(2,1,"DASHBOARD_ATTENDANCE.REPORTED_AT")))}function X(t,e){if(1&t&&(u.Ub(0,"mat-cell"),u.Ub(1,"p",21),u.Lc(2),u.hc(3,"date"),u.Tb(),u.Tb()),2&t){const t=e.$implicit;u.Cb(2),u.Nc(" ",u.jc(3,1,t.in_timestamp,"dd-MMM-yyyy, HH:mm")," ")}}function q(t,e){1&t&&(u.Ub(0,"mat-header-cell",19),u.Lc(1),u.hc(2,"translate"),u.Tb()),2&t&&(u.Cb(1),u.Mc(u.ic(2,1,"DASHBOARD_ATTENDANCE.TEMP")))}function W(t,e){if(1&t&&(u.Ub(0,"mat-cell"),u.Ub(1,"p",22),u.Lc(2),u.Tb(),u.Tb()),2&t){const t=e.$implicit;u.Cb(2),u.Nc(" ",t.in_temp||"not set"," ")}}function Q(t,e){1&t&&u.Pb(0,"mat-header-row")}function Z(t,e){1&t&&u.Pb(0,"mat-row",23)}function tt(t,e){1&t&&(u.Ub(0,"div"),u.Lc(1,"No data"),u.Tb())}let et=(()=>{class t{constructor(t,e,i,r){this._fuseTranslationLoaderService=t,this.http=e,this.global=i,this.roleUtils=r,this.displayedColumns=["user_name","in_timestamp","in_temp"],this.dataSource=[],this.res=[],this.stopPolling=new s.a,this._fuseTranslationLoaderService.loadTranslations(b,m)}ngOnInit(){this.polling=Object(n.a)(1,5e3).pipe(Object(c.a)(()=>this.fetch()),Object(d.a)(),Object(h.a)(),Object(l.a)(this.stopPolling)),this.polling.subscribe(t=>this.handleData(t)),this.fetch(),this.sort={direction:"desc",active:"in_timestamp"}}ngOnDestroy(){this.stopPolling.next()}fetch(){return this.http.get(`/api/${this.global.tenant}/forms/dashboard-attendance`,{headers:{skipLoading:"true"}})}handleData(t){this.res=t,this.sort?this.sortData(this.sort):this.dataSource=this.res.slice()}roleLabel(t){return this.roleUtils.rolesLabels[t]||t}sortData(t){const e=this.res.slice();this.sort=t,this.dataSource=t.active&&""!==t.direction?e.sort((e,i)=>{const r="asc"===t.direction;switch(t.active){case"user_id":return it(e.user_id,i.user_id,r);case"user_name":return it(e.user_name,i.user_name,r);case"role":return it(e.role,i.role,r);case"in_timestamp":return it(e.in_timestamp,i.in_timestamp,r);case"in_submitted_date":return it(e.in_submitted_date,i.in_submitted_date,r);case"in_temp":return it(e.in_temp,i.in_temp,r);default:return 0}}):e}}return t.\u0275fac=function(e){return new(e||t)(u.Ob(p.a),u.Ob(f.b),u.Ob(_.a),u.Ob(g))},t.\u0275cmp=u.Ib({type:t,selectors:[["sample"]],decls:27,vars:8,consts:[["id","contacts","fusePerfectScrollbar","",1,"page-layout","simple","fullwidth"],["fxLayout","column","fxLayoutAlign","center center","fxLayout.gt-sm","row","fxLayoutAlign.gt-sm","space-between center",1,"header","accent","p-24"],["fxLayout","row","fxLayoutAlign","start center",1,"logo","mb-24","mb-md-0"],[1,"logo-icon","s-32","mr-16"],[1,"logo-text","h1"],[4,"ngIf"],[1,"search-wrapper","mx-32","mx-md-0"],[1,"content","p-24"],["fusePerfectScrollbar","",1,"center"],[1,"content"],["matSort","",3,"dataSource","matSortChange"],["table",""],["matColumnDef","user_name"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","in_timestamp"],["matColumnDef","in_temp"],[4,"matHeaderRowDef"],["class","contact",4,"matRowDef","matRowDefColumns"],["mat-sort-header",""],[1,"email","text-truncate"],[1,"phone","text-truncate"],[1,"job-title","text-truncate"],[1,"contact"]],template:function(t,e){1&t&&(u.Ub(0,"div",0),u.Ub(1,"div",1),u.Ub(2,"div",2),u.Ub(3,"mat-icon",3),u.Lc(4," supervisor_account "),u.Tb(),u.Ub(5,"span",4),u.Lc(6),u.hc(7,"translate"),u.Jc(8,G,2,1,"span",5),u.Tb(),u.Tb(),u.Pb(9,"div",6),u.Tb(),u.Ub(10,"div",7),u.Ub(11,"div",8),u.Ub(12,"div",9),u.Ub(13,"mat-table",10,11),u.cc("matSortChange",(function(t){return e.sortData(t)})),u.Sb(15,12),u.Jc(16,K,3,3,"mat-header-cell",13),u.Jc(17,$,3,1,"mat-cell",14),u.Rb(),u.Sb(18,15),u.Jc(19,z,3,3,"mat-header-cell",13),u.Jc(20,X,4,4,"mat-cell",14),u.Rb(),u.Sb(21,16),u.Jc(22,q,3,3,"mat-header-cell",13),u.Jc(23,W,3,1,"mat-cell",14),u.Rb(),u.Jc(24,Q,1,0,"mat-header-row",17),u.Jc(25,Z,1,0,"mat-row",18),u.Tb(),u.Jc(26,tt,2,0,"div",5),u.Tb(),u.Tb(),u.Tb(),u.Tb()),2&t&&(u.Cb(6),u.Nc(" ",u.ic(7,6,"DASHBOARD_ATTENDANCE.ATTENDANCE")," "),u.Cb(2),u.nc("ngIf",e.dataSource),u.Cb(5),u.nc("dataSource",e.dataSource),u.Cb(11),u.nc("matHeaderRowDef",e.displayedColumns),u.Cb(1),u.nc("matRowDefColumns",e.displayedColumns),u.Cb(1),u.nc("ngIf",0===e.dataSource.length))},directives:[w.a,O.c,O.b,S.a,v.t,D.j,k,D.c,D.e,D.b,D.g,D.i,D.d,B,D.a,D.f,D.h],pipes:[a.c,v.f],styles:["#contacts .header .search-wrapper{width:100%;max-width:480px;border-radius:28px;overflow:hidden;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}#contacts .header .search-wrapper .search{width:100%;height:48px;line-height:48px;padding:0 18px}#contacts .header .search-wrapper .search input{width:100%;height:48px;min-height:48px;max-height:48px;padding:0 16px;border:none;outline:none}#contacts .content{overflow:hidden}#contacts .content .sidebar:not(.locked-open){background:#fff}"],encapsulation:2}),t})();function it(t,e,i){return(t<e?-1:1)*(i?1:-1)}var rt=i("bSwM"),at=i("STbY"),ot=i("bTqV"),st=i("kmnG"),nt=i("3Pt+"),ct=i("qFsG"),dt=i("d3UM");const ht=[{path:"**",component:et}],lt=[D.l,rt.b,S.b,at.b,ot.c,ct.c,st.e,dt.b,F];let bt=(()=>{class t{}return t.\u0275mod=u.Mb({type:t}),t.\u0275inj=u.Lb({factory:function(e){return new(e||t)},imports:[[r.l.forChild(ht),a.b,o.a,nt.n,nt.x,lt]]}),t})()}}]);