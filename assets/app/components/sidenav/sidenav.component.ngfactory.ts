/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './sidenav.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '../../../../node_modules/@angular/material/typings/index.ngfactory';
import * as i3 from '@angular/material';
import * as i4 from '@angular/platform-browser';
import * as i5 from './sidenav.component';
const styles_SidenavComponent:any[] = [i0.styles];
export const RenderType_SidenavComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_SidenavComponent,data:{}});
export function View_SidenavComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),154,'md-sidenav-container',
      [['class','mat-sidenav-container'],['fullscreen','']],[[2,'mat-sidenav-transition',
          (null as any)]],(null as any),(null as any),i2.View_MdSidenavContainer_0,
      i2.RenderType_MdSidenavContainer)),i1.ɵdid(16384,(null as any),0,i3.MdPrefixRejector,
      [[2,i3.MATERIAL_COMPATIBILITY_MODE],i1.ElementRef],(null as any),(null as any)),
      i1.ɵdid(1097728,(null as any),1,i3.MdSidenavContainer,[[2,i3.Dir],i1.ElementRef,
          i1.Renderer2,i1.NgZone],(null as any),(null as any)),i1.ɵqud(603979776,1,
          {_sidenavs:1}),(_l()(),i1.ɵted(1,['\n    '])),(_l()(),i1.ɵeld(0,(null as any),
          0,93,'md-sidenav',[['class','app-sidenav mat-sidenav'],['mode','side'],['tabIndex',
              '-1']],[[1,'align',0],[2,'mat-sidenav-closed',(null as any)],[2,'mat-sidenav-closing',
              (null as any)],[2,'mat-sidenav-end',(null as any)],[2,'mat-sidenav-opened',
              (null as any)],[2,'mat-sidenav-opening',(null as any)],[2,'mat-sidenav-over',
              (null as any)],[2,'mat-sidenav-push',(null as any)],[2,'mat-sidenav-side',
              (null as any)]],[[(null as any),'transitionend'],[(null as any),'keydown']],
          (_v,en,$event) => {
            var ad:boolean = true;
            if (('transitionend' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,7)._onTransitionEnd($event)) !== false);
              ad = (pd_0 && ad);
            }
            if (('keydown' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,7).handleKeydown($event)) !== false);
              ad = (pd_1 && ad);
            }
            return ad;
          },i2.View_MdSidenav_0,i2.RenderType_MdSidenav)),i1.ɵdid(16384,(null as any),
          0,i3.MdPrefixRejector,[[2,i3.MATERIAL_COMPATIBILITY_MODE],i1.ElementRef],
          (null as any),(null as any)),i1.ɵdid(1228800,[[1,4],['sidenav',4]],0,i3.MdSidenav,
          [i1.ElementRef,i3.FocusTrapFactory,[2,i4.DOCUMENT]],{mode:[0,'mode']},(null as any)),
      (_l()(),i1.ɵted(0,['\n        '])),(_l()(),i1.ɵeld(0,(null as any),0,88,'md-list',
          [['class','mat-list'],['role','list']],(null as any),(null as any),(null as any),
          i2.View_MdList_0,i2.RenderType_MdList)),i1.ɵdid(16384,(null as any),0,i3.MdPrefixRejector,
          [[2,i3.MATERIAL_COMPATIBILITY_MODE],i1.ElementRef],(null as any),(null as any)),
      i1.ɵdid(49152,(null as any),0,i3.MdList,([] as any[]),(null as any),(null as any)),
      i1.ɵdid(16384,(null as any),0,i3.MdListCssMatStyler,([] as any[]),(null as any),
          (null as any)),(_l()(),i1.ɵted(0,['\n            '])),(_l()(),i1.ɵeld(0,
          (null as any),0,19,'md-list-item',[['class','mat-list-item'],['role','listitem']],
          (null as any),[[(null as any),'focus'],[(null as any),'blur']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('focus' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,16)._handleFocus()) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,16)._handleBlur()) !== false);
              ad = (pd_1 && ad);
            }
            return ad;
          },i2.View_MdListItem_0,i2.RenderType_MdListItem)),i1.ɵdid(16384,(null as any),
          0,i3.MdPrefixRejector,[[2,i3.MATERIAL_COMPATIBILITY_MODE],i1.ElementRef],
          (null as any),(null as any)),i1.ɵdid(1097728,(null as any),2,i3.MdListItem,
          [i1.Renderer2,i1.ElementRef,[2,i3.MdList],[2,i3.MdNavListCssMatStyler]],
          (null as any),(null as any)),i1.ɵqud(603979776,2,{_lines:1}),i1.ɵqud(335544320,
          3,{_hasAvatar:0}),(_l()(),i1.ɵted(2,['\n                '])),(_l()(),i1.ɵeld(0,
          (null as any),2,12,'a',[['class','mat-button'],['md-button','']],[[1,'disabled',
              0],[1,'aria-disabled',0],[8,'tabIndex',0]],[[(null as any),'click']],
          (_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,22)._haltDisabledEvents($event)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },i2.View_MdAnchor_0,i2.RenderType_MdAnchor)),i1.ɵdid(16384,(null as any),
          0,i3.MdPrefixRejector,[[2,i3.MATERIAL_COMPATIBILITY_MODE],i1.ElementRef],
          (null as any),(null as any)),i1.ɵdid(180224,(null as any),0,i3.MdAnchor,
          [i3.Platform,i3.FocusOriginMonitor,i1.ElementRef,i1.Renderer2],(null as any),
          (null as any)),i1.ɵdid(16384,(null as any),0,i3.MdButtonCssMatStyler,([] as any[]),
          (null as any),(null as any)),(_l()(),i1.ɵted(0,['\n                    '])),
      (_l()(),i1.ɵeld(0,(null as any),0,3,'md-icon',[['class','mat-icon'],['role',
          'img']],(null as any),(null as any),(null as any),i2.View_MdIcon_0,i2.RenderType_MdIcon)),
      i1.ɵdid(16384,(null as any),0,i3.MdPrefixRejector,[[2,i3.MATERIAL_COMPATIBILITY_MODE],
          i1.ElementRef],(null as any),(null as any)),i1.ɵdid(638976,(null as any),
          0,i3.MdIcon,[i1.Renderer2,i1.ElementRef,i3.MdIconRegistry,[8,(null as any)]],
          (null as any),(null as any)),(_l()(),i1.ɵted(0,['home'])),(_l()(),i1.ɵted(0,
          ['\n                    '])),(_l()(),i1.ɵeld(0,(null as any),0,1,'span',
          ([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['Home'])),(_l()(),i1.ɵted(0,['\n                '])),
      (_l()(),i1.ɵted(2,['\n            '])),(_l()(),i1.ɵted(0,['\n            '])),
      (_l()(),i1.ɵeld(0,(null as any),0,19,'md-list-item',[['class','mat-list-item'],
          ['role','listitem']],(null as any),[[(null as any),'focus'],[(null as any),
          'blur']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('focus' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,37)._handleFocus()) !== false);
          ad = (pd_0 && ad);
        }
        if (('blur' === en)) {
          const pd_1:any = ((<any>i1.ɵnov(_v,37)._handleBlur()) !== false);
          ad = (pd_1 && ad);
        }
        return ad;
      },i2.View_MdListItem_0,i2.RenderType_MdListItem)),i1.ɵdid(16384,(null as any),
          0,i3.MdPrefixRejector,[[2,i3.MATERIAL_COMPATIBILITY_MODE],i1.ElementRef],
          (null as any),(null as any)),i1.ɵdid(1097728,(null as any),2,i3.MdListItem,
          [i1.Renderer2,i1.ElementRef,[2,i3.MdList],[2,i3.MdNavListCssMatStyler]],
          (null as any),(null as any)),i1.ɵqud(603979776,4,{_lines:1}),i1.ɵqud(335544320,
          5,{_hasAvatar:0}),(_l()(),i1.ɵted(2,['\n                '])),(_l()(),i1.ɵeld(0,
          (null as any),2,12,'a',[['class','mat-button'],['md-button','']],[[1,'disabled',
              0],[1,'aria-disabled',0],[8,'tabIndex',0]],[[(null as any),'click']],
          (_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,43)._haltDisabledEvents($event)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },i2.View_MdAnchor_0,i2.RenderType_MdAnchor)),i1.ɵdid(16384,(null as any),
          0,i3.MdPrefixRejector,[[2,i3.MATERIAL_COMPATIBILITY_MODE],i1.ElementRef],
          (null as any),(null as any)),i1.ɵdid(180224,(null as any),0,i3.MdAnchor,
          [i3.Platform,i3.FocusOriginMonitor,i1.ElementRef,i1.Renderer2],(null as any),
          (null as any)),i1.ɵdid(16384,(null as any),0,i3.MdButtonCssMatStyler,([] as any[]),
          (null as any),(null as any)),(_l()(),i1.ɵted(0,['\n                    '])),
      (_l()(),i1.ɵeld(0,(null as any),0,3,'md-icon',[['class','mat-icon'],['role',
          'img']],(null as any),(null as any),(null as any),i2.View_MdIcon_0,i2.RenderType_MdIcon)),
      i1.ɵdid(16384,(null as any),0,i3.MdPrefixRejector,[[2,i3.MATERIAL_COMPATIBILITY_MODE],
          i1.ElementRef],(null as any),(null as any)),i1.ɵdid(638976,(null as any),
          0,i3.MdIcon,[i1.Renderer2,i1.ElementRef,i3.MdIconRegistry,[8,(null as any)]],
          (null as any),(null as any)),(_l()(),i1.ɵted(0,['event'])),(_l()(),i1.ɵted(0,
          ['\n                    '])),(_l()(),i1.ɵeld(0,(null as any),0,1,'span',
          ([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['Events'])),(_l()(),i1.ɵted(0,['\n                '])),
      (_l()(),i1.ɵted(2,['\n            '])),(_l()(),i1.ɵted(0,['\n            '])),
      (_l()(),i1.ɵeld(0,(null as any),0,19,'md-list-item',[['class','mat-list-item'],
          ['role','listitem']],(null as any),[[(null as any),'focus'],[(null as any),
          'blur']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('focus' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,58)._handleFocus()) !== false);
          ad = (pd_0 && ad);
        }
        if (('blur' === en)) {
          const pd_1:any = ((<any>i1.ɵnov(_v,58)._handleBlur()) !== false);
          ad = (pd_1 && ad);
        }
        return ad;
      },i2.View_MdListItem_0,i2.RenderType_MdListItem)),i1.ɵdid(16384,(null as any),
          0,i3.MdPrefixRejector,[[2,i3.MATERIAL_COMPATIBILITY_MODE],i1.ElementRef],
          (null as any),(null as any)),i1.ɵdid(1097728,(null as any),2,i3.MdListItem,
          [i1.Renderer2,i1.ElementRef,[2,i3.MdList],[2,i3.MdNavListCssMatStyler]],
          (null as any),(null as any)),i1.ɵqud(603979776,6,{_lines:1}),i1.ɵqud(335544320,
          7,{_hasAvatar:0}),(_l()(),i1.ɵted(2,['\n                '])),(_l()(),i1.ɵeld(0,
          (null as any),2,12,'a',[['class','mat-button'],['md-button','']],[[1,'disabled',
              0],[1,'aria-disabled',0],[8,'tabIndex',0]],[[(null as any),'click']],
          (_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,64)._haltDisabledEvents($event)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },i2.View_MdAnchor_0,i2.RenderType_MdAnchor)),i1.ɵdid(16384,(null as any),
          0,i3.MdPrefixRejector,[[2,i3.MATERIAL_COMPATIBILITY_MODE],i1.ElementRef],
          (null as any),(null as any)),i1.ɵdid(180224,(null as any),0,i3.MdAnchor,
          [i3.Platform,i3.FocusOriginMonitor,i1.ElementRef,i1.Renderer2],(null as any),
          (null as any)),i1.ɵdid(16384,(null as any),0,i3.MdButtonCssMatStyler,([] as any[]),
          (null as any),(null as any)),(_l()(),i1.ɵted(0,['\n                    '])),
      (_l()(),i1.ɵeld(0,(null as any),0,3,'md-icon',[['class','mat-icon'],['role',
          'img']],(null as any),(null as any),(null as any),i2.View_MdIcon_0,i2.RenderType_MdIcon)),
      i1.ɵdid(16384,(null as any),0,i3.MdPrefixRejector,[[2,i3.MATERIAL_COMPATIBILITY_MODE],
          i1.ElementRef],(null as any),(null as any)),i1.ɵdid(638976,(null as any),
          0,i3.MdIcon,[i1.Renderer2,i1.ElementRef,i3.MdIconRegistry,[8,(null as any)]],
          (null as any),(null as any)),(_l()(),i1.ɵted(0,['class'])),(_l()(),i1.ɵted(0,
          ['\n                    '])),(_l()(),i1.ɵeld(0,(null as any),0,1,'span',
          ([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['Workshops'])),(_l()(),i1.ɵted(0,['\n                '])),
      (_l()(),i1.ɵted(2,['\n            '])),(_l()(),i1.ɵted(0,['\n            '])),
      (_l()(),i1.ɵeld(0,(null as any),0,19,'md-list-item',[['class','mat-list-item'],
          ['role','listitem']],(null as any),[[(null as any),'focus'],[(null as any),
          'blur']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('focus' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,79)._handleFocus()) !== false);
          ad = (pd_0 && ad);
        }
        if (('blur' === en)) {
          const pd_1:any = ((<any>i1.ɵnov(_v,79)._handleBlur()) !== false);
          ad = (pd_1 && ad);
        }
        return ad;
      },i2.View_MdListItem_0,i2.RenderType_MdListItem)),i1.ɵdid(16384,(null as any),
          0,i3.MdPrefixRejector,[[2,i3.MATERIAL_COMPATIBILITY_MODE],i1.ElementRef],
          (null as any),(null as any)),i1.ɵdid(1097728,(null as any),2,i3.MdListItem,
          [i1.Renderer2,i1.ElementRef,[2,i3.MdList],[2,i3.MdNavListCssMatStyler]],
          (null as any),(null as any)),i1.ɵqud(603979776,8,{_lines:1}),i1.ɵqud(335544320,
          9,{_hasAvatar:0}),(_l()(),i1.ɵted(2,['\n                '])),(_l()(),i1.ɵeld(0,
          (null as any),2,12,'a',[['class','mat-button'],['md-button','']],[[1,'disabled',
              0],[1,'aria-disabled',0],[8,'tabIndex',0]],[[(null as any),'click']],
          (_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,85)._haltDisabledEvents($event)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },i2.View_MdAnchor_0,i2.RenderType_MdAnchor)),i1.ɵdid(16384,(null as any),
          0,i3.MdPrefixRejector,[[2,i3.MATERIAL_COMPATIBILITY_MODE],i1.ElementRef],
          (null as any),(null as any)),i1.ɵdid(180224,(null as any),0,i3.MdAnchor,
          [i3.Platform,i3.FocusOriginMonitor,i1.ElementRef,i1.Renderer2],(null as any),
          (null as any)),i1.ɵdid(16384,(null as any),0,i3.MdButtonCssMatStyler,([] as any[]),
          (null as any),(null as any)),(_l()(),i1.ɵted(0,['\n                    '])),
      (_l()(),i1.ɵeld(0,(null as any),0,3,'md-icon',[['class','mat-icon'],['role',
          'img']],(null as any),(null as any),(null as any),i2.View_MdIcon_0,i2.RenderType_MdIcon)),
      i1.ɵdid(16384,(null as any),0,i3.MdPrefixRejector,[[2,i3.MATERIAL_COMPATIBILITY_MODE],
          i1.ElementRef],(null as any),(null as any)),i1.ɵdid(638976,(null as any),
          0,i3.MdIcon,[i1.Renderer2,i1.ElementRef,i3.MdIconRegistry,[8,(null as any)]],
          (null as any),(null as any)),(_l()(),i1.ɵted(0,['contacts'])),(_l()(),i1.ɵted(0,
          ['\n                    '])),(_l()(),i1.ɵeld(0,(null as any),0,1,'span',
          ([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['Contacts'])),(_l()(),i1.ɵted(0,['\n                '])),
      (_l()(),i1.ɵted(2,['\n            '])),(_l()(),i1.ɵted(0,['\n        '])),(_l()(),
          i1.ɵted(0,['\n    '])),(_l()(),i1.ɵted(1,['\n    '])),(_l()(),i1.ɵeld(0,
          (null as any),1,23,'md-toolbar',[['class','mat-toolbar'],['color','primary'],
              ['role','toolbar']],(null as any),(null as any),(null as any),i2.View_MdToolbar_0,
          i2.RenderType_MdToolbar)),i1.ɵdid(16384,(null as any),0,i3.MdPrefixRejector,
          [[2,i3.MATERIAL_COMPATIBILITY_MODE],i1.ElementRef],(null as any),(null as any)),
      i1.ɵdid(49152,(null as any),0,i3.MdToolbar,[i1.Renderer2,i1.ElementRef],{color:[0,
          'color']},(null as any)),(_l()(),i1.ɵted(0,['\n        '])),(_l()(),i1.ɵeld(0,
          (null as any),0,6,'button',[['class','app-icon-button']],(null as any),[[(null as any),
              'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,7).toggle()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n            '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),3,'md-icon',[['class','mat-icon'],
          ['role','img']],(null as any),(null as any),(null as any),i2.View_MdIcon_0,
          i2.RenderType_MdIcon)),i1.ɵdid(16384,(null as any),0,i3.MdPrefixRejector,
          [[2,i3.MATERIAL_COMPATIBILITY_MODE],i1.ElementRef],(null as any),(null as any)),
      i1.ɵdid(638976,(null as any),0,i3.MdIcon,[i1.Renderer2,i1.ElementRef,i3.MdIconRegistry,
          [8,(null as any)]],(null as any),(null as any)),(_l()(),i1.ɵted(0,['menu'])),
      (_l()(),i1.ɵted((null as any),['\n        '])),(_l()(),i1.ɵted(0,[' Ozmenta 2K17\n        '])),
      (_l()(),i1.ɵeld(0,(null as any),0,0,'span',[['class','app-filler']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(0,
          ['\n        '])),(_l()(),i1.ɵeld(16777216,(null as any),0,8,'button',[['aria-haspopup',
          'true'],['class','mat-mini-fab'],['md-mini-fab','']],[[8,'disabled',0]],
          [[(null as any),'mousedown'],[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('mousedown' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,118)._handleMousedown($event)) !== false);
              ad = (pd_0 && ad);
            }
            if (('click' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,118).toggleMenu()) !== false);
              ad = (pd_1 && ad);
            }
            return ad;
          },i2.View_MdButton_0,i2.RenderType_MdButton)),i1.ɵdid(16384,(null as any),
          0,i3.MdPrefixRejector,[[2,i3.MATERIAL_COMPATIBILITY_MODE],i1.ElementRef],
          (null as any),(null as any)),i1.ɵdid(180224,(null as any),0,i3.MdButton,
          [i1.Renderer2,i1.ElementRef,i3.Platform,i3.FocusOriginMonitor],(null as any),
          (null as any)),i1.ɵdid(16384,(null as any),0,i3.MdMiniFab,[[2,i3.MdButton],
          [8,(null as any)]],(null as any),(null as any)),i1.ɵdid(4341760,(null as any),
          0,i3.MdMenuTrigger,[i3.Overlay,i1.ElementRef,i1.ViewContainerRef,[2,i3.Dir]],
          {menu:[0,'menu']},(null as any)),(_l()(),i1.ɵeld(0,(null as any),0,3,'md-icon',
          [['class','mat-icon'],['role','img']],(null as any),(null as any),(null as any),
          i2.View_MdIcon_0,i2.RenderType_MdIcon)),i1.ɵdid(16384,(null as any),0,i3.MdPrefixRejector,
          [[2,i3.MATERIAL_COMPATIBILITY_MODE],i1.ElementRef],(null as any),(null as any)),
      i1.ɵdid(638976,(null as any),0,i3.MdIcon,[i1.Renderer2,i1.ElementRef,i3.MdIconRegistry,
          [8,(null as any)]],(null as any),(null as any)),(_l()(),i1.ɵted(0,['add'])),
      (_l()(),i1.ɵted(0,['\n    '])),(_l()(),i1.ɵted(1,['\n    '])),(_l()(),i1.ɵeld(0,
          (null as any),1,28,'md-menu',[['role','menu']],(null as any),(null as any),
          (null as any),i2.View_MdMenu_0,i2.RenderType_MdMenu)),i1.ɵdid(16384,(null as any),
          0,i3.MdPrefixRejector,[[2,i3.MATERIAL_COMPATIBILITY_MODE],i1.ElementRef],
          (null as any),(null as any)),i1.ɵdid(1228800,[['menu',4]],1,i3.MdMenu,[i1.ElementRef],
          (null as any),(null as any)),i1.ɵqud(603979776,10,{items:1}),(_l()(),i1.ɵted(0,
          ['\n        '])),(_l()(),i1.ɵeld(0,(null as any),0,10,'button',[['class',
          'mat-menu-item'],['md-menu-item',''],['role','menuitem']],[[1,'tabindex',
          0],[1,'aria-disabled',0],[1,'disabled',0]],[[(null as any),'click']],(_v,
          en,$event) => {
        var ad:boolean = true;
        var _co:i5.SidenavComponent = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,131)._checkDisabled($event)) !== false);
          ad = (pd_0 && ad);
        }
        if (('click' === en)) {
          const pd_1:any = ((<any>_co.openLoginForm()) !== false);
          ad = (pd_1 && ad);
        }
        return ad;
      },i2.View_MdMenuItem_0,i2.RenderType_MdMenuItem)),i1.ɵdid(49152,[[10,4]],0,i3.MdMenuItem,
          [i1.ElementRef],(null as any),(null as any)),(_l()(),i1.ɵted(0,['\n            '])),
      (_l()(),i1.ɵeld(0,(null as any),0,3,'md-icon',[['class','mat-icon'],['role',
          'img']],(null as any),(null as any),(null as any),i2.View_MdIcon_0,i2.RenderType_MdIcon)),
      i1.ɵdid(16384,(null as any),0,i3.MdPrefixRejector,[[2,i3.MATERIAL_COMPATIBILITY_MODE],
          i1.ElementRef],(null as any),(null as any)),i1.ɵdid(638976,(null as any),
          0,i3.MdIcon,[i1.Renderer2,i1.ElementRef,i3.MdIconRegistry,[8,(null as any)]],
          (null as any),(null as any)),(_l()(),i1.ɵted(0,['account_circle'])),(_l()(),
          i1.ɵted(0,['\n            '])),(_l()(),i1.ɵeld(0,(null as any),0,1,'span',
          ([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['Login'])),(_l()(),i1.ɵted(0,['\n        '])),
      (_l()(),i1.ɵted(0,['\n        '])),(_l()(),i1.ɵeld(0,(null as any),0,10,'button',
          [['class','mat-menu-item'],['md-menu-item',''],['role','menuitem']],[[1,
              'tabindex',0],[1,'aria-disabled',0],[1,'disabled',0]],[[(null as any),
              'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i5.SidenavComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,143)._checkDisabled($event)) !== false);
              ad = (pd_0 && ad);
            }
            if (('click' === en)) {
              const pd_1:any = ((<any>_co.openRegisterForm()) !== false);
              ad = (pd_1 && ad);
            }
            return ad;
          },i2.View_MdMenuItem_0,i2.RenderType_MdMenuItem)),i1.ɵdid(49152,[[10,4]],
          0,i3.MdMenuItem,[i1.ElementRef],(null as any),(null as any)),(_l()(),i1.ɵted(0,
          ['\n            '])),(_l()(),i1.ɵeld(0,(null as any),0,3,'md-icon',[['class',
          'mat-icon'],['role','img']],(null as any),(null as any),(null as any),i2.View_MdIcon_0,
          i2.RenderType_MdIcon)),i1.ɵdid(16384,(null as any),0,i3.MdPrefixRejector,
          [[2,i3.MATERIAL_COMPATIBILITY_MODE],i1.ElementRef],(null as any),(null as any)),
      i1.ɵdid(638976,(null as any),0,i3.MdIcon,[i1.Renderer2,i1.ElementRef,i3.MdIconRegistry,
          [8,(null as any)]],(null as any),(null as any)),(_l()(),i1.ɵted(0,['account_circle'])),
      (_l()(),i1.ɵted(0,['\n            '])),(_l()(),i1.ɵeld(0,(null as any),0,1,'span',
          ([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['Register'])),(_l()(),i1.ɵted(0,['\n        '])),
      (_l()(),i1.ɵted(0,['\n    '])),(_l()(),i1.ɵted(1,['\n']))],(_ck,_v) => {
    const currVal_10:any = 'side';
    _ck(_v,7,0,currVal_10);
    _ck(_v,27,0);
    _ck(_v,48,0);
    _ck(_v,69,0);
    _ck(_v,90,0);
    const currVal_23:any = 'primary';
    _ck(_v,102,0,currVal_23);
    _ck(_v,108,0);
    const currVal_25:any = i1.ɵnov(_v,127);
    _ck(_v,118,0,currVal_25);
    _ck(_v,121,0);
    _ck(_v,135,0);
    _ck(_v,147,0);
  },(_ck,_v) => {
    const currVal_0:any = i1.ɵnov(_v,2)._enableTransitions;
    _ck(_v,0,0,currVal_0);
    const currVal_1:any = (null as any);
    const currVal_2:any = i1.ɵnov(_v,7)._isClosed;
    const currVal_3:any = i1.ɵnov(_v,7)._isClosing;
    const currVal_4:any = i1.ɵnov(_v,7)._isEnd;
    const currVal_5:any = i1.ɵnov(_v,7)._isOpened;
    const currVal_6:any = i1.ɵnov(_v,7)._isOpening;
    const currVal_7:any = i1.ɵnov(_v,7)._modeOver;
    const currVal_8:any = i1.ɵnov(_v,7)._modePush;
    const currVal_9:any = i1.ɵnov(_v,7)._modeSide;
    _ck(_v,5,0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7,
        currVal_8,currVal_9);
    const currVal_11:any = (i1.ɵnov(_v,22).disabled || (null as any));
    const currVal_12:any = i1.ɵnov(_v,22)._isAriaDisabled;
    const currVal_13:any = i1.ɵnov(_v,22).tabIndex;
    _ck(_v,20,0,currVal_11,currVal_12,currVal_13);
    const currVal_14:any = (i1.ɵnov(_v,43).disabled || (null as any));
    const currVal_15:any = i1.ɵnov(_v,43)._isAriaDisabled;
    const currVal_16:any = i1.ɵnov(_v,43).tabIndex;
    _ck(_v,41,0,currVal_14,currVal_15,currVal_16);
    const currVal_17:any = (i1.ɵnov(_v,64).disabled || (null as any));
    const currVal_18:any = i1.ɵnov(_v,64)._isAriaDisabled;
    const currVal_19:any = i1.ɵnov(_v,64).tabIndex;
    _ck(_v,62,0,currVal_17,currVal_18,currVal_19);
    const currVal_20:any = (i1.ɵnov(_v,85).disabled || (null as any));
    const currVal_21:any = i1.ɵnov(_v,85)._isAriaDisabled;
    const currVal_22:any = i1.ɵnov(_v,85).tabIndex;
    _ck(_v,83,0,currVal_20,currVal_21,currVal_22);
    const currVal_24:any = (i1.ɵnov(_v,116).disabled || (null as any));
    _ck(_v,114,0,currVal_24);
    const currVal_26:any = i1.ɵnov(_v,131)._getTabIndex();
    const currVal_27:any = i1.ɵnov(_v,131).disabled.toString();
    const currVal_28:any = i1.ɵnov(_v,131)._getDisabledAttr();
    _ck(_v,130,0,currVal_26,currVal_27,currVal_28);
    const currVal_29:any = i1.ɵnov(_v,143)._getTabIndex();
    const currVal_30:any = i1.ɵnov(_v,143).disabled.toString();
    const currVal_31:any = i1.ɵnov(_v,143)._getDisabledAttr();
    _ck(_v,142,0,currVal_29,currVal_30,currVal_31);
  });
}
export function View_SidenavComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'app-sidenav',
      ([] as any[]),(null as any),(null as any),(null as any),View_SidenavComponent_0,
      RenderType_SidenavComponent)),i1.ɵdid(49152,(null as any),0,i5.SidenavComponent,
      [i3.MdDialog],(null as any),(null as any))],(null as any),(null as any));
}
export const SidenavComponentNgFactory:i1.ComponentFactory<i5.SidenavComponent> = i1.ɵccf('app-sidenav',
    i5.SidenavComponent,View_SidenavComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvU2hlcmluL096bWVudGEySzE3L2Fzc2V0cy9hcHAvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL1NoZXJpbi9Pem1lbnRhMksxNy9hc3NldHMvYXBwL2NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L1VzZXJzL1NoZXJpbi9Pem1lbnRhMksxNy9hc3NldHMvYXBwL2NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvU2hlcmluL096bWVudGEySzE3L2Fzc2V0cy9hcHAvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnRzLlNpZGVuYXZDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8bWQtc2lkZW5hdi1jb250YWluZXIgZnVsbHNjcmVlbj5cclxuICAgIDxtZC1zaWRlbmF2ICNzaWRlbmF2IG1vZGU9XCJzaWRlXCIgY2xhc3M9XCJhcHAtc2lkZW5hdlwiPlxyXG4gICAgICAgIDxtZC1saXN0PlxyXG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtPlxyXG4gICAgICAgICAgICAgICAgPGEgbWQtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZC1pY29uPmhvbWU8L21kLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+SG9tZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XHJcbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8YSBtZC1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1kLWljb24+ZXZlbnQ8L21kLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+RXZlbnRzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cclxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbT5cclxuICAgICAgICAgICAgICAgIDxhIG1kLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8bWQtaWNvbj5jbGFzczwvbWQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Xb3Jrc2hvcHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxyXG4gICAgICAgICAgICA8bWQtbGlzdC1pdGVtPlxyXG4gICAgICAgICAgICAgICAgPGEgbWQtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZC1pY29uPmNvbnRhY3RzPC9tZC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkNvbnRhY3RzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cclxuICAgICAgICA8L21kLWxpc3Q+XHJcbiAgICA8L21kLXNpZGVuYXY+XHJcbiAgICA8bWQtdG9vbGJhciBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYXBwLWljb24tYnV0dG9uXCIgKGNsaWNrKT1cInNpZGVuYXYudG9nZ2xlKClcIj5cclxuICAgICAgICAgICAgPG1kLWljb24+bWVudTwvbWQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj4gT3ptZW50YSAySzE3XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhcHAtZmlsbGVyXCI+PC9zcGFuPlxyXG4gICAgICAgIDxidXR0b24gbWQtbWluaS1mYWIgW21kTWVudVRyaWdnZXJGb3JdPVwibWVudVwiPjxtZC1pY29uPmFkZDwvbWQtaWNvbj48L2J1dHRvbj5cclxuICAgIDwvbWQtdG9vbGJhcj5cclxuICAgIDxtZC1tZW51ICNtZW51PVwibWRNZW51XCI+XHJcbiAgICAgICAgPGJ1dHRvbiBtZC1tZW51LWl0ZW0gKGNsaWNrKT1cIm9wZW5Mb2dpbkZvcm0oKVwiPlxyXG4gICAgICAgICAgICA8bWQtaWNvbj5hY2NvdW50X2NpcmNsZTwvbWQtaWNvbj5cclxuICAgICAgICAgICAgPHNwYW4+TG9naW48L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBtZC1tZW51LWl0ZW0gKGNsaWNrKT1cIm9wZW5SZWdpc3RlckZvcm0oKVwiPlxyXG4gICAgICAgICAgICA8bWQtaWNvbj5hY2NvdW50X2NpcmNsZTwvbWQtaWNvbj5cclxuICAgICAgICAgICAgPHNwYW4+UmVnaXN0ZXI8L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8L21kLW1lbnU+XHJcbjwvbWQtc2lkZW5hdi1jb250YWluZXI+IiwiPGFwcC1zaWRlbmF2PjwvYXBwLXNpZGVuYXY+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0FBO01BQUE7VUFBQTtzQ0FBQSxVQUFBO01BQUE7YUFBQTtnQ0FBQTtVQUFBLGVBQWlDLCtCQUM3QjtVQUFBO2NBQUE7Y0FBQTtjQUFBO2NBQUE7Y0FBQTtVQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7VUFBQSx1REFBQTtVQUFBO1VBQUEsb0NBQUE7VUFBQTtNQUFxRCxtQ0FDakQ7VUFBQTsrQ0FBQSxVQUFBO1VBQUE7YUFBQTthQUFBO1VBQUEsZUFBUyx1Q0FDTDtVQUFBO1VBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtVQUFBLHlEQUFBO1VBQUE7VUFBQSxvQ0FBQTtVQUFBO1VBQUE7VUFBQSxrQkFBYywyQ0FDVjtVQUFBO2NBQUE7VUFBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtVQUFBLHFEQUFBO1VBQUE7VUFBQSxv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
