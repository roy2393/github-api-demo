/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojdatasource-common"],function(a){a.Qa=function(g){if(!(g instanceof a.na))throw Error(a.na.we._ERR_DATA_INVALID_TYPE_SUMMARY+"\n"+a.na.we._ERR_DATA_INVALID_TYPE_DETAIL);this.ge=g;this.Ca=0;this.Mm=-1;this.kt=[];this.Init();Object.defineProperty(this,"sortCriteria",{configurable:!1,enumerable:!0,get:function(){return this.ge.sortCriteria},set:function(a){this.ge.sortCriteria=a}})};o_("PagingTableDataSource",a.Qa,a);a.f.ya(a.Qa,a.na,"oj.PagingTableDataSource");a.Qa.prototype.Init=
function(){a.Qa.O.Init.call(this)};a.Qa.prototype.getWrappedDataSource=function(){return this.ge};a.f.j("PagingTableDataSource.prototype.getWrappedDataSource",{getWrappedDataSource:a.Qa.prototype.getWrappedDataSource});a.Qa.prototype.getPage=function(){return"loadMore"==this.XH?0:this.bQ()};a.f.j("PagingTableDataSource.prototype.getPage",{getPage:a.Qa.prototype.getPage});a.Qa.prototype.setPage=function(g,c){c=c||{};g=parseInt(g,10);try{a.Qa.O.handleEvent.call(this,a.Kd.fa.BEFOREPAGE,{page:g,previousPage:this.bQ()})}catch(b){return Promise.reject(b)}var d=
this.bQ();this.Lb=null!=c.pageSize?c.pageSize:this.Lb;c.pageSize=this.Lb;c.startIndex=g*this.Lb;this.Ca=null==c.startIndex?this.Ca:c.startIndex;this.XH="page";var e=this;return new Promise(function(b,g){0<e.Lb?e.ge.fetch(c).then(function(c){c.startIndex=0;0<c.data.length?e.gA(e.Ca+c.data.length-1,!0):e.gA(-1,!0);a.Qa.O.handleEvent.call(e,a.Kd.fa.PAGE,{page:e.bQ(),previousPage:d});b(null)},function(a){e.Ca=d*e.Lb;g(a)}):b(null)})};a.f.j("PagingTableDataSource.prototype.setPage",{setPage:a.Qa.prototype.setPage});
a.Qa.prototype.getStartItemIndex=function(){return"loadMore"==this.XH?0:this.Ca};a.f.j("PagingTableDataSource.prototype.getStartItemIndex",{getStartItemIndex:a.Qa.prototype.getStartItemIndex});a.Qa.prototype.getEndItemIndex=function(){return this.Mm};a.f.j("PagingTableDataSource.prototype.getEndItemIndex",{getEndItemIndex:a.Qa.prototype.getEndItemIndex});a.Qa.prototype.getPageCount=function(){var a=this.totalSize();return-1==a?-1:Math.ceil(a/this.Lb)};a.f.j("PagingTableDataSource.prototype.getPageCount",
{getPageCount:a.Qa.prototype.getPageCount});a.Qa.prototype.at=function(a,c){return this.ge.at(a,c)};a.f.j("PagingTableDataSource.prototype.at",{at:a.Qa.prototype.at});a.Qa.prototype.fetch=function(a){a=a||{};if(null==a.startIndex)return this.setPage(this.getPage());this.XH="loadMore";this.Ca=null==a.startIndex?this.Ca:a.startIndex;var c=null==a.pageSize?this.Lb:a.pageSize;null==this.Lb&&(this.Lb=c);a.pageSize=c;a.startIndex=this.Ca;var b=this;return new Promise(function(d,e){0<c?b.ge.fetch(a).then(function(a){0<
a.data.length?b.gA(b.Ca+a.data.length-1,!0):b.gA(-1,!0);d(a)},function(a){e(a)}):d(null)})};a.f.j("PagingTableDataSource.prototype.fetch",{fetch:a.Qa.prototype.fetch});a.Qa.prototype.get=function(a,c){return this.ge.get(a,c)};a.f.j("PagingTableDataSource.prototype.get",{get:a.Qa.prototype.get});a.Qa.prototype.getCapability=function(a){return this.ge.getCapability(a)};a.f.j("PagingTableDataSource.prototype.getCapability",{getCapability:a.Qa.prototype.getCapability});a.Qa.prototype.on=function(g,c){var b=
this,d=this.ge;if(g==a.na.fa.SYNC){var e=function(a){b.KMa(a,c)};this.kt.push({eventType:g,eventHandler:c,wrappedEventHandler:e});d.on(g,e)}else if(g==a.na.fa.ADD||g==a.na.fa.REMOVE||g==a.na.fa.CHANGE)e=function(a){b.xMa(a,c)},this.kt.push({eventType:g,eventHandler:c,wrappedEventHandler:e}),d.on(g,e);else if(g==a.na.fa.REFRESH||g==a.na.fa.RESET)e=function(a){b.Ca=0;c(a)},this.kt.push({eventType:g,eventHandler:c,wrappedEventHandler:e}),d.on(g,e);else if(g==a.Kd.fa.PAGE||g==a.Kd.fa.BEFOREPAGE||g==a.Kd.fa.PAGECOUNT)a.Qa.O.on.call(this,
g,c);else d.on(g,c)};a.f.j("PagingTableDataSource.prototype.on",{on:a.Qa.prototype.on});a.Qa.prototype.off=function(g,c){g!=a.Kd.fa.PAGE&&g!=a.Kd.fa.PAGECOUNT||a.Qa.O.off.call(this,g,c);var b=this.ge;if(null!=this.kt){var d=this.kt.length,e;for(e=0;e<d;e++)if(this.kt[e].eventType==g&&this.kt[e].eventHandler==c){b.off(g,this.kt[e].wrappedEventHandler);this.kt.splice(e,1);break}}b.off(g,c)};a.f.j("PagingTableDataSource.prototype.off",{off:a.Qa.prototype.off});a.Qa.prototype.sort=function(a){return this.ge.sort(a)};
a.f.j("PagingTableDataSource.prototype.sort",{sort:a.Qa.prototype.sort});a.Qa.prototype.totalSize=function(){return this.ge.totalSize()};a.f.j("PagingTableDataSource.prototype.totalSize",{totalSize:a.Qa.prototype.totalSize});a.Qa.prototype.totalSizeConfidence=function(){return this.ge.totalSizeConfidence()};a.f.j("PagingTableDataSource.prototype.totalSizeConfidence",{totalSizeConfidence:a.Qa.prototype.totalSizeConfidence});a.Qa.prototype.bQ=function(){return 0<this.Lb?Math.floor(this.Ca/this.Lb):
0};a.Qa.prototype.xMa=function(a,c){var b=[],d;for(d=0;d<a.indexes.length;d++){var e=a.indexes[d];void 0!==e&&("page"==this.XH&&(e-=this.Ca),(0>e||e>=this.Ca+this.Lb)&&b.push(d))}if(0<b.length)for(b.sort(function(a,b){return a-b}),d=b.length-1;0<=d;d--)a.data.splice(b[d],1),a.indexes.splice(b[d],1),a.keys.splice(b[d],1);0<a.indexes.length&&this.gA(a.indexes[a.indexes.length-1],!1);a.startIndex=this.Ca;c(a)};a.Qa.prototype.KMa=function(g,c){g.startIndex!=this.Ca&&(this.Ca=g.startIndex);0<g.data.length?
this.gA(g.startIndex+g.data.length-1,!0):this.gA(-1,!0);if("page"==this.XH){var b={};a.tc.Gd(b,g);b.startIndex=0;c(b)}else c(g)};a.Qa.prototype.gA=function(a,c){this.Mm=c?a:a>this.Mm?a:this.Mm;var b=this.totalSize();0<b&&(this.Mm=this.Mm>b-1?b-1:this.Mm)};a.Qa.fa={ADD:"add",REMOVE:"remove",RESET:"reset",SYNC:"sync",REFRESH:"refresh",SORT:"sort"};o_("PagingTableDataSource.EventType",a.Qa.fa,a);a.Kd=function(){};o_("PagingModel",a.Kd,a);a.Kd.prototype.getPage=function(){};a.f.j("PagingModel.prototype.getPage",
{getPage:a.Kd.prototype.getPage});a.Kd.prototype.setPage=function(){};a.f.j("PagingModel.prototype.setPage",{setPage:a.Kd.prototype.setPage});a.Kd.prototype.getStartItemIndex=function(){};a.f.j("PagingModel.prototype.getStartItemIndex",{getStartItemIndex:a.Kd.prototype.getStartItemIndex});a.Kd.prototype.getEndItemIndex=function(){};a.f.j("PagingModel.prototype.getEndItemIndex",{getEndItemIndex:a.Kd.prototype.getEndItemIndex});a.Kd.prototype.getPageCount=function(){};a.f.j("PagingModel.prototype.getPageCount",
{getPageCount:a.Kd.prototype.getPageCount});a.Kd.prototype.totalSize=function(){};a.f.j("PagingModel.prototype.totalSize",{totalSize:a.Kd.prototype.totalSize});a.Kd.prototype.totalSizeConfidence=function(){};a.f.j("PagingModel.prototype.totalSizeConfidence",{totalSizeConfidence:a.Kd.prototype.totalSizeConfidence});a.Kd.fa={BEFOREPAGE:"beforePage",PAGE:"page",PAGECOUNT:"pageCount"};o_("PagingModel.EventType",a.Kd.fa,a)});