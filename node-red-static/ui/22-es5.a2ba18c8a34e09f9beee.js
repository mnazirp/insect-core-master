!function(){function t(t,c){if(!(t instanceof c))throw new TypeError("Cannot call a class as a function")}function c(t,c){for(var e=0;e<c.length;e++){var n=c[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"Olx+":function(c,n,a){"use strict";a.r(n),a.d(n,"GrowthChamberMonitorModule",(function(){return Jt}));var i=a("ofXK"),b=a("tyNb"),r=a("5HBU"),o=a("sYmb"),s={lang:"en",data:{}},l={lang:"my",data:{}},d=a("XNiG"),f=a("PqYM"),u=a("eIep"),g=a("un/a"),p=a("w1tV"),h=a("1G5W"),T=a("0IaG"),m=a("fXoL"),U=a("/t3+"),v=a("XiUz"),C=a("EwFO"),k=a("bTqV");function y(t,c){if(1&t&&(m.Ub(0,"tr"),m.Ub(1,"td"),m.Ub(2,"h2"),m.Lc(3,"Rack Id"),m.Tb(),m.Tb(),m.Ub(4,"td"),m.Ub(5,"h3"),m.Lc(6),m.Tb(),m.Tb(),m.Tb()),2&t){var e=m.gc(2);m.Cb(6),m.Mc(e.rackDetails.label)}}function M(t,c){if(1&t&&(m.Ub(0,"tr"),m.Ub(1,"td"),m.Ub(2,"h2"),m.Lc(3,"Submitted By"),m.Tb(),m.Tb(),m.Ub(4,"td"),m.Ub(5,"h3"),m.Lc(6),m.Tb(),m.Tb(),m.Tb()),2&t){var e=m.gc(2);m.Cb(6),m.Mc(e.rackDetails.user_name)}}function L(t,c){if(1&t&&(m.Ub(0,"tr"),m.Ub(1,"td"),m.Ub(2,"h2"),m.Lc(3,"Submitted Date"),m.Tb(),m.Tb(),m.Ub(4,"td"),m.Ub(5,"h3"),m.Lc(6),m.hc(7,"date"),m.Tb(),m.Tb(),m.Tb()),2&t){var e=m.gc(2);m.Cb(6),m.Mc(m.jc(7,1,e.rackDetails.submission_timestamp,"HH:MM, dd-MMM-yyyy"))}}function D(t,c){if(1&t&&(m.Ub(0,"tr"),m.Ub(1,"td"),m.Ub(2,"h2"),m.Lc(3,"Total Neonate sum"),m.Tb(),m.Tb(),m.Ub(4,"td"),m.Ub(5,"h3"),m.Lc(6),m.Tb(),m.Tb(),m.Tb()),2&t){var e=m.gc(2);m.Cb(6),m.Mc(e.rackDetails.totalNeonateSum)}}function P(t,c){if(1&t&&(m.Ub(0,"table",8),m.Jc(1,y,7,1,"tr",9),m.Jc(2,M,7,1,"tr",9),m.Jc(3,L,8,4,"tr",9),m.Jc(4,D,7,1,"tr",9),m.Tb()),2&t){var e=m.gc();m.Cb(1),m.nc("ngIf",e.rackDetails.label),m.Cb(1),m.nc("ngIf",e.rackDetails.user_name),m.Cb(1),m.nc("ngIf",e.rackDetails.submission_timestamp),m.Cb(1),m.nc("ngIf",e.rackDetails.totalNeonateSum)}}function O(t,c){if(1&t&&(m.Ub(0,"tr"),m.Ub(1,"td"),m.Ub(2,"h2"),m.Lc(3,"Submitted By"),m.Tb(),m.Tb(),m.Ub(4,"td"),m.Ub(5,"h3"),m.Lc(6),m.Tb(),m.Tb(),m.Tb()),2&t){var e=m.gc(2);m.Cb(6),m.Mc(e.rackDetails.user_name)}}function I(t,c){if(1&t&&(m.Ub(0,"tr"),m.Ub(1,"td"),m.Ub(2,"h2"),m.Lc(3,"Submitted Date"),m.Tb(),m.Tb(),m.Ub(4,"td"),m.Ub(5,"h3"),m.Lc(6),m.hc(7,"date"),m.Tb(),m.Tb(),m.Tb()),2&t){var e=m.gc(2);m.Cb(6),m.Mc(m.jc(7,1,e.rackDetails.submission_timestamp,"HH:MM, dd-MM-yyyy"))}}function w(t,c){if(1&t&&(m.Ub(0,"tr"),m.Ub(1,"td"),m.Ub(2,"h2"),m.Lc(3,"Actual Weight"),m.Tb(),m.Tb(),m.Ub(4,"td"),m.Ub(5,"h3"),m.Lc(6),m.Tb(),m.Tb(),m.Tb()),2&t){var e=m.gc(2);m.Cb(6),m.Mc(e.rackDetails.rackActualTotalWeight)}}function _(t,c){if(1&t&&(m.Ub(0,"tr"),m.Ub(1,"td"),m.Ub(2,"h2"),m.Lc(3,"Feed Setpoint"),m.Tb(),m.Tb(),m.Ub(4,"td"),m.Ub(5,"h3"),m.Lc(6),m.Tb(),m.Tb(),m.Tb()),2&t){var e=m.gc(2);m.Cb(6),m.Mc(e.rackDetails.feedSetPoint)}}function x(t,c){if(1&t&&(m.Ub(0,"tr"),m.Ub(1,"td"),m.Ub(2,"h2"),m.Lc(3,"5 Dol Setpoint"),m.Tb(),m.Tb(),m.Ub(4,"td"),m.Ub(5,"h3"),m.Lc(6),m.Tb(),m.Tb(),m.Tb()),2&t){var e=m.gc(2);m.Cb(6),m.Mc(e.rackDetails["5DolSetPoint"])}}function J(t,c){if(1&t&&(m.Ub(0,"tr"),m.Ub(1,"td"),m.Ub(2,"h2"),m.Lc(3,"5 Dol Weight per Tray"),m.Tb(),m.Tb(),m.Ub(4,"td"),m.Ub(5,"h3"),m.Lc(6),m.Tb(),m.Tb(),m.Tb()),2&t){var e=m.gc(2);m.Cb(6),m.Mc(e.rackDetails["5DolWeightPerTray"])}}function S(t,c){if(1&t&&(m.Ub(0,"tr"),m.Ub(1,"td"),m.Ub(2,"h2"),m.Lc(3,"5 Dol Average Weight"),m.Tb(),m.Tb(),m.Ub(4,"td"),m.Ub(5,"h3"),m.Lc(6),m.Tb(),m.Tb(),m.Tb()),2&t){var e=m.gc(2);m.Cb(6),m.Mc(e.rackDetails["5DolAverageWeight"])}}function F(t,c){if(1&t&&(m.Ub(0,"tr"),m.Ub(1,"td"),m.Ub(2,"h2"),m.Lc(3,"Process Timestamp"),m.Tb(),m.Tb(),m.Ub(4,"td"),m.Ub(5,"h3"),m.Lc(6),m.hc(7,"date"),m.Tb(),m.Tb(),m.Tb()),2&t){var e=m.gc(2);m.Cb(6),m.Mc(m.jc(7,1,e.rackDetails.timestamp,"HH:MM, dd-MM-yyyy"))}}function W(t,c){if(1&t&&(m.Ub(0,"table",8),m.Jc(1,O,7,1,"tr",9),m.Jc(2,I,8,4,"tr",9),m.Jc(3,w,7,1,"tr",9),m.Jc(4,_,7,1,"tr",9),m.Jc(5,x,7,1,"tr",9),m.Jc(6,J,7,1,"tr",9),m.Jc(7,S,7,1,"tr",9),m.Jc(8,F,8,4,"tr",9),m.Tb()),2&t){var e=m.gc();m.Cb(1),m.nc("ngIf",e.rackDetails.user_name),m.Cb(1),m.nc("ngIf",e.rackDetails.submission_timestamp),m.Cb(1),m.nc("ngIf",e.rackDetails.rackActualTotalWeight),m.Cb(1),m.nc("ngIf",e.rackDetails.feedSetPoint),m.Cb(1),m.nc("ngIf",e.rackDetails["5DolSetPoint"]),m.Cb(1),m.nc("ngIf",e.rackDetails["5DolWeightPerTray"]),m.Cb(1),m.nc("ngIf",e.rackDetails["5DolAverageWeight"]),m.Cb(1),m.nc("ngIf",e.rackDetails.timestamp)}}function $(t,c){if(1&t&&(m.Ub(0,"tr"),m.Ub(1,"td"),m.Ub(2,"h2"),m.Lc(3,"Submitted By"),m.Tb(),m.Tb(),m.Ub(4,"td"),m.Ub(5,"h3"),m.Lc(6),m.Tb(),m.Tb(),m.Tb()),2&t){var e=m.gc(2);m.Cb(6),m.Mc(e.rackDetails.user_name)}}function A(t,c){if(1&t&&(m.Ub(0,"tr"),m.Ub(1,"td"),m.Ub(2,"h2"),m.Lc(3,"Submitted Date"),m.Tb(),m.Tb(),m.Ub(4,"td"),m.Ub(5,"h3"),m.Lc(6),m.hc(7,"date"),m.Tb(),m.Tb(),m.Tb()),2&t){var e=m.gc(2);m.Cb(6),m.Mc(m.jc(7,1,e.rackDetails.submission_timestamp,"HH:MM, dd-MMM-yyyy"))}}function R(t,c){if(1&t&&(m.Ub(0,"tr"),m.Ub(1,"td"),m.Ub(2,"h2"),m.Lc(3,"Average Weight"),m.Tb(),m.Tb(),m.Ub(4,"td"),m.Ub(5,"h3"),m.Lc(6),m.Tb(),m.Tb(),m.Tb()),2&t){var e=m.gc(2);m.Cb(6),m.Mc(e.rackDetails.prePupaeAverageWeight)}}function j(t,c){if(1&t&&(m.Ub(0,"tr"),m.Ub(1,"td"),m.Ub(2,"h2"),m.Lc(3,"Total Pre-Pupae count per rack"),m.Tb(),m.Tb(),m.Ub(4,"td"),m.Ub(5,"h3"),m.Lc(6),m.Tb(),m.Tb(),m.Tb()),2&t){var e=m.gc(2);m.Cb(6),m.Mc(e.rackDetails.totalPrePupaeCountPerRack)}}function H(t,c){if(1&t&&(m.Ub(0,"tr"),m.Ub(1,"td"),m.Ub(2,"h2"),m.Lc(3,"Tray Count"),m.Tb(),m.Tb(),m.Ub(4,"td"),m.Ub(5,"h3"),m.Lc(6),m.Tb(),m.Tb(),m.Tb()),2&t){var e=m.gc(2);m.Cb(6),m.Mc(e.rackDetails.trayCount)}}function N(t,c){if(1&t&&(m.Ub(0,"tr"),m.Ub(1,"td"),m.Ub(2,"h2"),m.Lc(3,"Weight per tray Setpoint"),m.Tb(),m.Tb(),m.Ub(4,"td"),m.Ub(5,"h3"),m.Lc(6),m.Tb(),m.Tb(),m.Tb()),2&t){var e=m.gc(2);m.Cb(6),m.Mc(e.rackDetails.weightPerTraySetpoint)}}function G(t,c){if(1&t&&(m.Ub(0,"table",8),m.Jc(1,$,7,1,"tr",9),m.Jc(2,A,8,4,"tr",9),m.Jc(3,R,7,1,"tr",9),m.Jc(4,j,7,1,"tr",9),m.Jc(5,H,7,1,"tr",9),m.Jc(6,N,7,1,"tr",9),m.Tb()),2&t){var e=m.gc();m.Cb(1),m.nc("ngIf",e.rackDetails.user_name),m.Cb(1),m.nc("ngIf",e.rackDetails.submission_timestamp),m.Cb(1),m.nc("ngIf",e.rackDetails.prePupaeAverageWeight),m.Cb(1),m.nc("ngIf",e.rackDetails.totalPrePupaeCountPerRack),m.Cb(1),m.nc("ngIf",e.rackDetails.trayCount),m.Cb(1),m.nc("ngIf",e.rackDetails.weightPerTraySetpoint)}}function B(t,c){if(1&t&&(m.Ub(0,"tr"),m.Ub(1,"td"),m.Ub(2,"h2"),m.Lc(3,"Submitted By"),m.Tb(),m.Tb(),m.Ub(4,"td"),m.Ub(5,"h3"),m.Lc(6),m.Tb(),m.Tb(),m.Tb()),2&t){var e=m.gc(2);m.Cb(6),m.Mc(e.rackDetails.user_name)}}function E(t,c){if(1&t&&(m.Ub(0,"tr"),m.Ub(1,"td"),m.Ub(2,"h2"),m.Lc(3,"Submitted Date"),m.Tb(),m.Tb(),m.Ub(4,"td"),m.Ub(5,"h3"),m.Lc(6),m.hc(7,"date"),m.Tb(),m.Tb(),m.Tb()),2&t){var e=m.gc(2);m.Cb(6),m.Mc(m.jc(7,1,e.rackDetails.submission_timestamp,"HH:MM, dd-MMM-yyyy"))}}function V(t,c){if(1&t&&(m.Ub(0,"tr"),m.Ub(1,"td"),m.Ub(2,"h2"),m.Lc(3,"Average Weight"),m.Tb(),m.Tb(),m.Ub(4,"td"),m.Ub(5,"h3"),m.Lc(6),m.Tb(),m.Tb(),m.Tb()),2&t){var e=m.gc(2);m.Cb(6),m.Mc(e.rackDetails.prePupaeAverageWeight)}}function K(t,c){if(1&t&&(m.Ub(0,"tr"),m.Ub(1,"td"),m.Ub(2,"h2"),m.Lc(3,"Total Pre-Pupae count per rack"),m.Tb(),m.Tb(),m.Ub(4,"td"),m.Ub(5,"h3"),m.Lc(6),m.Tb(),m.Tb(),m.Tb()),2&t){var e=m.gc(2);m.Cb(6),m.Mc(e.rackDetails.totalPrePupaeCountPerRack)}}function X(t,c){if(1&t&&(m.Ub(0,"tr"),m.Ub(1,"td"),m.Ub(2,"h2"),m.Lc(3,"Tray Count"),m.Tb(),m.Tb(),m.Ub(4,"td"),m.Ub(5,"h3"),m.Lc(6),m.Tb(),m.Tb(),m.Tb()),2&t){var e=m.gc(2);m.Cb(6),m.Mc(e.rackDetails.trayCount)}}function Y(t,c){if(1&t&&(m.Ub(0,"tr"),m.Ub(1,"td"),m.Ub(2,"h2"),m.Lc(3,"Weight per tray Setpoint"),m.Tb(),m.Tb(),m.Ub(4,"td"),m.Ub(5,"h3"),m.Lc(6),m.Tb(),m.Tb(),m.Tb()),2&t){var e=m.gc(2);m.Cb(6),m.Mc(e.rackDetails.weightPerTraySetpoint)}}function q(t,c){if(1&t&&(m.Ub(0,"table",8),m.Jc(1,B,7,1,"tr",9),m.Jc(2,E,8,4,"tr",9),m.Jc(3,V,7,1,"tr",9),m.Jc(4,K,7,1,"tr",9),m.Jc(5,X,7,1,"tr",9),m.Jc(6,Y,7,1,"tr",9),m.Tb()),2&t){var e=m.gc();m.Cb(1),m.nc("ngIf",e.rackDetails.user_name),m.Cb(1),m.nc("ngIf",e.rackDetails.submission_timestamp),m.Cb(1),m.nc("ngIf",e.rackDetails.prePupaeAverageWeight),m.Cb(1),m.nc("ngIf",e.rackDetails.totalPrePupaeCountPerRack),m.Cb(1),m.nc("ngIf",e.rackDetails.trayCount),m.Cb(1),m.nc("ngIf",e.rackDetails.weightPerTraySetpoint)}}var z,Q,Z=((z=function(){function c(e,n){t(this,c),this.data=e,this.dialogRef=n,this.rackDetails=e}return e(c,[{key:"ngOnInit",value:function(){}},{key:"close",value:function(){this.dialogRef.close()}}]),c}()).\u0275fac=function(t){return new(t||z)(m.Ob(T.a),m.Ob(T.f))},z.\u0275cmp=m.Ib({type:z,selectors:[["process-status-details"]],decls:13,vars:5,consts:[[1,"dialog-content-wrapper"],[1,"mat-accent","m-0"],["fxFlex","","fxLayout","row","fxLayoutAlign","space-between center"],[1,"title","dialog-title"],["mat-dialog-content","","fusePerfectScrollbar","",1,"p-16","pb-0","m-0"],["style","width: 100%;",4,"ngIf"],["mat-dialog-actions","","fxLayout","row","fxLayoutAlign","end center",1,"m-0","p-16"],["mat-raised-button","","color","accent","aria-label","close",1,"save-button",3,"click"],[2,"width","100%"],[4,"ngIf"]],template:function(t,c){1&t&&(m.Ub(0,"div",0),m.Ub(1,"mat-toolbar",1),m.Ub(2,"mat-toolbar-row",2),m.Ub(3,"span",3),m.Lc(4),m.Tb(),m.Tb(),m.Tb(),m.Ub(5,"div",4),m.Jc(6,P,5,4,"table",5),m.Jc(7,W,9,8,"table",5),m.Jc(8,G,7,6,"table",5),m.Jc(9,q,7,6,"table",5),m.Tb(),m.Ub(10,"div",6),m.Ub(11,"button",7),m.cc("click",(function(){return c.close()})),m.Lc(12," CLOSE "),m.Tb(),m.Tb(),m.Tb()),2&t&&(m.Cb(4),m.Mc(c.rackDetails.label),m.Cb(2),m.nc("ngIf","nursery"===c.rackDetails.type),m.Cb(1),m.nc("ngIf","growthChamber"===c.rackDetails.type),m.Cb(1),m.nc("ngIf","prePupaeChamber"===c.rackDetails.type),m.Cb(1),m.nc("ngIf","pupationChamber"===c.rackDetails.type))},directives:[U.a,U.c,v.a,v.c,v.b,T.d,C.a,i.t,T.c,k.b],pipes:[i.f],styles:["@media screen and (max-width:599px){.event-form-dialog{width:100%}}@media screen and (min-width:600px){.event-form-dialog{width:480px}}.event-form-dialog .mat-dialog-container{padding:0}.event-form-dialog .dialog-content-wrapper{max-height:85vh;display:flex;flex-direction:column}.event-form-dialog .primary-color-input,.event-form-dialog .secondary-color-input{padding:6px 8px}"],encapsulation:2}),z),tt=a("3Pt+"),ct=a("tk/3"),et=a("4WDQ"),nt=((Q=function(){function c(e,n){t(this,c),this.http=e,this.global=n}return e(c,[{key:"getProcess",value:function(t,c){return this.http.get("/api/".concat(this.global.tenant,"/dashboard-status-monitor/").concat(t.process),{headers:{skipLoading:c?"true":""}})}},{key:"getNurseryRackDetail",value:function(t){return this.http.post("/api/".concat(this.global.tenant,"/dashboard/monitor-nursery/rack"),t)}},{key:"getRackDetail",value:function(t){return this.http.post("/api/".concat(this.global.tenant,"/dashboard/monitor-grow-out-chamber/rack"),t)}},{key:"getPupationRackDetail",value:function(t){return this.http.post("/api/".concat(this.global.tenant,"/dashboard/monitor-pupation/rack"),t)}}]),c}()).\u0275fac=function(t){return new(t||Q)(m.Yb(ct.b),m.Yb(et.a))},Q.\u0275prov=m.Kb({token:Q,factory:Q.\u0275fac,providedIn:"root"}),Q),at=a("gPJw"),it=a("Rea6"),bt=a("kmnG"),rt=a("d3UM"),ot=a("FKr1"),st=a("A5z7");function lt(t,c){if(1&t&&(m.Ub(0,"mat-option",11),m.Lc(1),m.Tb()),2&t){var e=c.$implicit;m.nc("value",e.value),m.Cb(1),m.Nc(" ",e.name," ")}}function dt(t,c){if(1&t){var e=m.Vb();m.Ub(0,"mat-chip",22),m.cc("click",(function(){m.yc(e);var t=c.$implicit;return m.gc(4).openRackDetail(t)})),m.Lc(1),m.Tb()}if(2&t){var n=c.$implicit;m.Cb(1),m.Pc(" ",n.label," - ",n.date," (",n.counts,") ")}}function ft(t,c){if(1&t&&(m.Ub(0,"div"),m.Jc(1,dt,2,3,"mat-chip",21),m.Tb()),2&t){var e=m.gc().$implicit;m.Cb(1),m.nc("ngForOf",e.details)}}function ut(t,c){if(1&t&&(m.Ub(0,"mat-chip",24),m.Lc(1),m.Tb()),2&t){var e=c.$implicit;m.Cb(1),m.Pc(" ",e.label," - ",e.date," (",e.counts,") ")}}function gt(t,c){if(1&t&&m.Jc(0,ut,2,3,"mat-chip",23),2&t){var e=m.gc().$implicit;m.nc("ngForOf",e.details)}}function pt(t,c){if(1&t&&(m.Ub(0,"div",14),m.Ub(1,"div",15),m.Ub(2,"div",16),m.Ub(3,"div",17),m.Lc(4),m.Tb(),m.Tb(),m.Ub(5,"div",18),m.Ub(6,"mat-chip-list"),m.Jc(7,ft,2,1,"div",19),m.Jc(8,gt,1,1,"ng-template",null,20,m.Kc),m.Tb(),m.Tb(),m.Tb(),m.Tb()),2&t){var e=c.$implicit,n=m.uc(9),a=m.gc().$implicit;m.Cb(4),m.Mc(e.label),m.Cb(3),m.nc("ngIf",a.click)("ngIfElse",n)}}function ht(t,c){if(1&t&&(m.Ub(0,"div"),m.Ub(1,"div"),m.Ub(2,"h1"),m.Lc(3),m.Tb(),m.Tb(),m.Ub(4,"div",12),m.Jc(5,pt,10,3,"div",13),m.Tb(),m.Tb()),2&t){var e=c.$implicit;m.Cb(3),m.Nc(" ",e.header," "),m.Cb(2),m.nc("ngForOf",e.labels)}}function Tt(t,c){if(1&t){var e=m.Vb();m.Ub(0,"mat-chip",22),m.cc("click",(function(){m.yc(e);var t=m.gc().$implicit;return m.gc(3).openRackDetail(t)})),m.Lc(1),m.Tb()}if(2&t){var n=m.gc().$implicit;m.Cb(1),m.Oc(" ",n.label," ",n.setupDateId," ")}}function mt(t,c){if(1&t){var e=m.Vb();m.Ub(0,"mat-chip",22),m.cc("click",(function(){m.yc(e);var t=m.gc().$implicit;return m.gc(3).openRackDetail(t)})),m.Lc(1),m.Tb()}if(2&t){var n=m.gc().$implicit;m.Cb(1),m.Oc(" ",n.label," ",n.batchIdList," ")}}function Ut(t,c){if(1&t&&(m.Ub(0,"div"),m.Jc(1,Tt,2,2,"mat-chip",26),m.Jc(2,mt,2,2,"mat-chip",26),m.Tb()),2&t){var e=c.$implicit;m.Cb(1),m.nc("ngIf",e.setupDateId),m.Cb(1),m.nc("ngIf",e.batchIdList&&!e.setupDateId)}}function vt(t,c){if(1&t&&(m.Ub(0,"div",14),m.Ub(1,"div",15),m.Ub(2,"div",16),m.Ub(3,"div",17),m.Lc(4),m.Tb(),m.Ub(5,"div",25),m.Lc(6),m.Tb(),m.Tb(),m.Ub(7,"div",18),m.Ub(8,"mat-chip-list"),m.Jc(9,Ut,3,2,"div",9),m.Tb(),m.Tb(),m.Tb(),m.Tb()),2&t){var e=c.$implicit;m.Cb(4),m.Mc(e.label),m.Cb(2),m.Mc(e.deviceId),m.Cb(3),m.nc("ngForOf",e.rackIdList)}}function Ct(t,c){if(1&t&&(m.Ub(0,"div",12),m.Jc(1,vt,10,3,"div",13),m.Tb()),2&t){var e=m.gc();m.Cb(1),m.nc("ngForOf",e.chambers)}}function kt(t,c){if(1&t&&(m.Ub(0,"span"),m.Lc(1),m.Tb()),2&t){var e=c.$implicit;m.Cb(1),m.Oc(" ",e.key," (",e.value,") \xa0 ")}}function yt(t,c){if(1&t&&(m.Ub(0,"mat-chip",24),m.Lc(1),m.Jc(2,kt,2,2,"span",9),m.hc(3,"keyvalue"),m.Tb()),2&t){var e=m.gc().$implicit;m.Cb(1),m.Nc(" ",e.label," \xa0 "),m.Cb(1),m.nc("ngForOf",m.ic(3,2,e.setupDateId))}}function Mt(t,c){if(1&t&&(m.Ub(0,"mat-chip",24),m.Lc(1),m.Tb()),2&t){var e=m.gc().$implicit;m.Cb(1),m.Oc(" ",e.label," ",e.batchIdList,"\xa0 ")}}function Lt(t,c){if(1&t&&(m.Ub(0,"div"),m.Jc(1,yt,4,4,"mat-chip",27),m.Jc(2,Mt,2,2,"mat-chip",27),m.Tb()),2&t){var e=c.$implicit;m.Cb(1),m.nc("ngIf",e.setupDateId),m.Cb(1),m.nc("ngIf",e.batchIdList&&!e.setupDateId)}}function Dt(t,c){if(1&t&&(m.Ub(0,"div",14),m.Ub(1,"div",15),m.Ub(2,"div",16),m.Ub(3,"div",17),m.Lc(4),m.Tb(),m.Ub(5,"div",25),m.Lc(6),m.Tb(),m.Tb(),m.Ub(7,"div",18),m.Ub(8,"mat-chip-list"),m.Jc(9,Lt,3,2,"div",9),m.Tb(),m.Tb(),m.Tb(),m.Tb()),2&t){var e=c.$implicit;m.Cb(4),m.Mc(e.label),m.Cb(2),m.Mc(e.deviceId),m.Cb(3),m.nc("ngForOf",e.rackIdList)}}function Pt(t,c){if(1&t&&(m.Ub(0,"div",12),m.Jc(1,Dt,10,3,"div",13),m.Tb()),2&t){var e=m.gc();m.Cb(1),m.nc("ngForOf",e.chambers)}}var Ot,It,wt=((Ot=function(){function c(e,n,a,i,b){t(this,c),this._service=e,this._fuseTranslationLoaderService=n,this._translateService=a,this.matDialog=i,this.snackBar=b,this.details=[],this.chambers=[],this.stopPolling=new d.a,this.form=this.getForm(),this.resType="growthChamber",this.selectProcesses=[{name:"Grow Chamber Monitor",value:"growthChamberId"},{name:"Pre Pupation Chamber Monitor",value:"prePupaeChamberId"},{name:"Emergence Chamber Monitor",value:"pupationChamberId"},{name:"Nursery Rack Monitor",value:"nursery"}],this._fuseTranslationLoaderService.loadTranslations(s,l),this._translateService.onTranslationChange.subscribe((function(t){console.log(t)}))}return e(c,[{key:"ngOnDestroy",value:function(){this.stopPolling.next()}},{key:"ngOnInit",value:function(){var t=this;this.polling=Object(f.a)(1,5e3).pipe(Object(u.a)((function(){return t._service.getProcess(t.form.value,!0)})),Object(g.a)(),Object(p.a)(),Object(h.a)(this.stopPolling)),this.polling.subscribe((function(c){console.log(t.datas),t.datas=c}))}},{key:"getForm",value:function(){return new tt.k({process:new tt.h("growthChamberId")})}},{key:"search",value:function(){var t=this;this.resType="",this._service.getProcess(this.form.value,!0).subscribe((function(c){t.datas=c}))}},{key:"openRackDetail",value:function(t){var c=this,e=Object.assign({},t);console.log(t),this._service.getRackDetail(e).subscribe((function(e){e.label=t.label,e.type=c.resType,c.matDialog.open(Z,{data:e,minWidth:"50%",maxWidth:"95vw",maxHeight:"90vh",panelClass:"event-form-dialog"})}),(function(t){console.log(t),c.snackBar.openError(t.error.message)}))}}]),c}()).\u0275fac=function(t){return new(t||Ot)(m.Ob(nt),m.Ob(at.a),m.Ob(o.d),m.Ob(T.b),m.Ob(it.a))},Ot.\u0275cmp=m.Ib({type:Ot,selectors:[["app-process-status-dashboard"]],decls:16,vars:5,consts:[["id","contacts",1,"page-layout","simple","fullwidth"],[1,"content","p-24"],["fxLayout","column"],["fxLayout","row","fxLayoutGap","24px",3,"formGroup"],["appearance","outline",2,"width","50%"],["formControlName","process"],[3,"value",4,"ngFor","ngForOf"],[2,"padding","0.25em 0.25em calc(21.5px + 0.25em) 0.25em"],["mat-raised-button","","fxFill","","color","accent",3,"click"],[4,"ngFor","ngForOf"],["class","cards",4,"ngIf"],[3,"value"],[1,"cards"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[1,"fuse-card",2,"padding-top","0px"],[1,"p-16"],[1,"h1"],["fxLayout","row","fxLayoutAlign","start center",1,"p-8","pt-0"],[4,"ngIf","ngIfElse"],["notClick",""],["class","pointer",3,"click",4,"ngFor","ngForOf"],[1,"pointer",3,"click"],["class","pointer",4,"ngFor","ngForOf"],[1,"pointer"],[1,"h4","secondary-text"],["class","pointer",3,"click",4,"ngIf"],["class","pointer",4,"ngIf"]],template:function(t,c){1&t&&(m.Ub(0,"div",0),m.Ub(1,"div",1),m.Ub(2,"div",2),m.Ub(3,"form",3),m.Ub(4,"mat-form-field",4),m.Ub(5,"mat-label"),m.Lc(6,"Process"),m.Tb(),m.Ub(7,"mat-select",5),m.Jc(8,lt,2,2,"mat-option",6),m.Tb(),m.Tb(),m.Ub(9,"div",7),m.Ub(10,"button",8),m.cc("click",(function(){return c.search()})),m.Lc(11," Search "),m.Tb(),m.Tb(),m.Tb(),m.Ub(12,"div"),m.Jc(13,ht,6,2,"div",9),m.Jc(14,Ct,2,1,"div",10),m.Jc(15,Pt,2,1,"div",10),m.Tb(),m.Tb(),m.Tb(),m.Tb()),2&t&&(m.Cb(3),m.nc("formGroup",c.form),m.Cb(5),m.nc("ngForOf",c.selectProcesses),m.Cb(5),m.nc("ngForOf",c.datas),m.Cb(1),m.nc("ngIf","growthChamber"==c.resType),m.Cb(1),m.nc("ngIf","pupationChamber"==c.resType||"prePupaeChamber"==c.resType))},directives:[v.c,tt.A,tt.t,v.d,tt.l,bt.c,bt.g,rt.a,tt.s,tt.j,i.s,k.b,v.e,i.t,ot.o,v.b,st.c,st.a],pipes:[i.l],styles:[".pointer[_ngcontent-%COMP%]{cursor:pointer}#contacts[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]{width:100%;max-width:480px;border-radius:28px;overflow:hidden;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}#contacts[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{width:100%;height:48px;line-height:48px;padding:0 18px}#contacts[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:48px;min-height:48px;max-height:48px;padding:0 16px;border:none;outline:none}#contacts[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{overflow:hidden}#contacts[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-items:stretch}#contacts[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;align-items:flex-start;padding:1%;min-width:320px}#contacts[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .fuse-card[_ngcontent-%COMP%]{height:100%}#contacts[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]:not(.locked-open){background:#fff}#contacts[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]:hover{background:#f5f5f5;cursor:pointer}"]}),Ot),_t=a("Wp6s"),xt=[{path:"",component:wt}],Jt=((It=function c(){t(this,c)}).\u0275mod=m.Mb({type:It}),It.\u0275inj=m.Lb({factory:function(t){return new(t||It)},imports:[[i.c,b.l.forChild(xt),o.b,r.a,_t.d,st.e,T.e,U.b,k.c,rt.b,bt.e]]}),It)}}])}();