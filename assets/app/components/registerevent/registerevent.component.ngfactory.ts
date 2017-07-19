/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './registerevent.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/material';
import * as i3 from '../../../../node_modules/@angular/material/typings/index.ngfactory';
import * as i4 from '@angular/common';
import * as i5 from './registerevent.component';
import * as i6 from '../../services/user.service';
const styles_RegisterEventComponent:any[] = [i0.styles];
export const RenderType_RegisterEventComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_RegisterEventComponent,data:{}});
function View_RegisterEventComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),2,'h1',[['class',
      'mat-dialog-title'],['md-dialog-title','']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i2.MdDialogTitle,
      ([] as any[]),(null as any),(null as any)),(_l()(),i1.ɵted((null as any),['Confirmation']))],
      (null as any),(null as any));
}
function View_RegisterEventComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),2,'div',[['class',
      'mat-dialog-content'],['md-dialog-content','']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i2.MdDialogContent,
      ([] as any[]),(null as any),(null as any)),(_l()(),i1.ɵted((null as any),['Please confirm that you want to register to this event']))],
      (null as any),(null as any));
}
function View_RegisterEventComponent_3(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),16,'div',[['class',
      'mat-dialog-actions'],['md-dialog-actions','']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i2.MdDialogActions,
      ([] as any[]),(null as any),(null as any)),(_l()(),i1.ɵted((null as any),['\n  '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),5,'button',[['class','mat-button'],
          ['md-button',''],['md-dialog-close','confirm'],['type','button']],[[8,'disabled',
          0],[1,'aria-label',0]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,7).dialogRef.close(i1.ɵnov(_v,7).dialogResult)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },i3.View_MdButton_0,i3.RenderType_MdButton)),i1.ɵdid(16384,(null as any),0,
          i2.MdPrefixRejector,[[2,i2.MATERIAL_COMPATIBILITY_MODE],i1.ElementRef],(null as any),
          (null as any)),i1.ɵdid(180224,(null as any),0,i2.MdButton,[i1.Renderer2,
          i1.ElementRef,i2.Platform,i2.FocusOriginMonitor],(null as any),(null as any)),
      i1.ɵdid(16384,(null as any),0,i2.MdButtonCssMatStyler,([] as any[]),(null as any),
          (null as any)),i1.ɵdid(16384,(null as any),0,i2.MdDialogClose,[i2.MdDialogRef],
          {dialogResult:[0,'dialogResult']},(null as any)),(_l()(),i1.ɵted(0,['Confirm'])),
      (_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          5,'button',[['class','mat-button'],['md-button',''],['md-dialog-close','cancel'],
              ['type','button']],[[8,'disabled',0],[1,'aria-label',0]],[[(null as any),
              'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,14).dialogRef.close(i1.ɵnov(_v,14).dialogResult)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },i3.View_MdButton_0,i3.RenderType_MdButton)),i1.ɵdid(16384,(null as any),
          0,i2.MdPrefixRejector,[[2,i2.MATERIAL_COMPATIBILITY_MODE],i1.ElementRef],
          (null as any),(null as any)),i1.ɵdid(180224,(null as any),0,i2.MdButton,
          [i1.Renderer2,i1.ElementRef,i2.Platform,i2.FocusOriginMonitor],(null as any),
          (null as any)),i1.ɵdid(16384,(null as any),0,i2.MdButtonCssMatStyler,([] as any[]),
          (null as any),(null as any)),i1.ɵdid(16384,(null as any),0,i2.MdDialogClose,
          [i2.MdDialogRef],{dialogResult:[0,'dialogResult']},(null as any)),(_l()(),
          i1.ɵted(0,['Cancel'])),(_l()(),i1.ɵted((null as any),['\n']))],(_ck,_v) => {
    const currVal_2:any = 'confirm';
    _ck(_v,7,0,currVal_2);
    const currVal_5:any = 'cancel';
    _ck(_v,14,0,currVal_5);
  },(_ck,_v) => {
    const currVal_0:any = (i1.ɵnov(_v,5).disabled || (null as any));
    const currVal_1:any = i1.ɵnov(_v,7).ariaLabel;
    _ck(_v,3,0,currVal_0,currVal_1);
    const currVal_3:any = (i1.ɵnov(_v,12).disabled || (null as any));
    const currVal_4:any = i1.ɵnov(_v,14).ariaLabel;
    _ck(_v,10,0,currVal_3,currVal_4);
  });
}
function View_RegisterEventComponent_4(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),2,'h1',[['class',
      'mat-dialog-title'],['md-dialog-title','']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i2.MdDialogTitle,
      ([] as any[]),(null as any),(null as any)),(_l()(),i1.ɵted((null as any),['Validation']))],
      (null as any),(null as any));
}
function View_RegisterEventComponent_5(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),2,'div',[['class',
      'mat-dialog-content'],['md-dialog-content','']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i2.MdDialogContent,
      ([] as any[]),(null as any),(null as any)),(_l()(),i1.ɵted((null as any),['Please login to register to this event']))],
      (null as any),(null as any));
}
function View_RegisterEventComponent_6(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),9,'div',[['class',
      'mat-dialog-actions'],['md-dialog-actions','']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i2.MdDialogActions,
      ([] as any[]),(null as any),(null as any)),(_l()(),i1.ɵted((null as any),['\n  '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),5,'button',[['class','mat-button'],
          ['md-button',''],['md-dialog-close','ok'],['type','button']],[[8,'disabled',
          0],[1,'aria-label',0]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,7).dialogRef.close(i1.ɵnov(_v,7).dialogResult)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },i3.View_MdButton_0,i3.RenderType_MdButton)),i1.ɵdid(16384,(null as any),0,
          i2.MdPrefixRejector,[[2,i2.MATERIAL_COMPATIBILITY_MODE],i1.ElementRef],(null as any),
          (null as any)),i1.ɵdid(180224,(null as any),0,i2.MdButton,[i1.Renderer2,
          i1.ElementRef,i2.Platform,i2.FocusOriginMonitor],(null as any),(null as any)),
      i1.ɵdid(16384,(null as any),0,i2.MdButtonCssMatStyler,([] as any[]),(null as any),
          (null as any)),i1.ɵdid(16384,(null as any),0,i2.MdDialogClose,[i2.MdDialogRef],
          {dialogResult:[0,'dialogResult']},(null as any)),(_l()(),i1.ɵted(0,['OK'])),
      (_l()(),i1.ɵted((null as any),['\n']))],(_ck,_v) => {
    const currVal_2:any = 'ok';
    _ck(_v,7,0,currVal_2);
  },(_ck,_v) => {
    const currVal_0:any = (i1.ɵnov(_v,5).disabled || (null as any));
    const currVal_1:any = i1.ɵnov(_v,7).ariaLabel;
    _ck(_v,3,0,currVal_0,currVal_1);
  });
}
export function View_RegisterEventComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_RegisterEventComponent_1)),i1.ɵdid(16384,(null as any),0,i4.NgIf,[i1.ViewContainerRef,
      i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted((null as any),
      ['\n'])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_RegisterEventComponent_2)),i1.ɵdid(16384,(null as any),0,i4.NgIf,[i1.ViewContainerRef,
      i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted((null as any),
      ['\n'])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_RegisterEventComponent_3)),i1.ɵdid(16384,(null as any),0,i4.NgIf,[i1.ViewContainerRef,
      i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted((null as any),
      ['\n'])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_RegisterEventComponent_4)),i1.ɵdid(16384,(null as any),0,i4.NgIf,[i1.ViewContainerRef,
      i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted((null as any),
      ['\n'])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_RegisterEventComponent_5)),i1.ɵdid(16384,(null as any),0,i4.NgIf,[i1.ViewContainerRef,
      i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted((null as any),
      ['\n'])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_RegisterEventComponent_6)),i1.ɵdid(16384,(null as any),0,i4.NgIf,[i1.ViewContainerRef,
      i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any))],(_ck,_v) => {
    var _co:i5.RegisterEventComponent = _v.component;
    const currVal_0:any = _co.isLoggedIn;
    _ck(_v,1,0,currVal_0);
    const currVal_1:any = _co.isLoggedIn;
    _ck(_v,4,0,currVal_1);
    const currVal_2:any = _co.isLoggedIn;
    _ck(_v,7,0,currVal_2);
    const currVal_3:boolean = !_co.isLoggedIn;
    _ck(_v,10,0,currVal_3);
    const currVal_4:boolean = !_co.isLoggedIn;
    _ck(_v,13,0,currVal_4);
    const currVal_5:boolean = !_co.isLoggedIn;
    _ck(_v,16,0,currVal_5);
  },(null as any));
}
export function View_RegisterEventComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'app-registerevent',
      ([] as any[]),(null as any),(null as any),(null as any),View_RegisterEventComponent_0,
      RenderType_RegisterEventComponent)),i1.ɵdid(49152,(null as any),0,i5.RegisterEventComponent,
      [i2.MdDialogRef,i6.UserService],(null as any),(null as any))],(null as any),
      (null as any));
}
export const RegisterEventComponentNgFactory:i1.ComponentFactory<i5.RegisterEventComponent> = i1.ɵccf('app-registerevent',
    i5.RegisterEventComponent,View_RegisterEventComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvcHJpbmMvRGVza3RvcC9vem1lbnRhMmsxNy9hc3NldHMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXJldmVudC9yZWdpc3RlcmV2ZW50LmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy9wcmluYy9EZXNrdG9wL296bWVudGEyazE3L2Fzc2V0cy9hcHAvY29tcG9uZW50cy9yZWdpc3RlcmV2ZW50L3JlZ2lzdGVyZXZlbnQuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvcHJpbmMvRGVza3RvcC9vem1lbnRhMmsxNy9hc3NldHMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXJldmVudC9yZWdpc3RlcmV2ZW50LmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvcHJpbmMvRGVza3RvcC9vem1lbnRhMmsxNy9hc3NldHMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXJldmVudC9yZWdpc3RlcmV2ZW50LmNvbXBvbmVudC50cy5SZWdpc3RlckV2ZW50Q29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGgxIG1kLWRpYWxvZy10aXRsZSAqbmdJZj1cImlzTG9nZ2VkSW5cIj5Db25maXJtYXRpb248L2gxPlxyXG48ZGl2IG1kLWRpYWxvZy1jb250ZW50ICpuZ0lmPVwiaXNMb2dnZWRJblwiPlBsZWFzZSBjb25maXJtIHRoYXQgeW91IHdhbnQgdG8gcmVnaXN0ZXIgdG8gdGhpcyBldmVudDwvZGl2PlxyXG48ZGl2IG1kLWRpYWxvZy1hY3Rpb25zICpuZ0lmPVwiaXNMb2dnZWRJblwiPlxyXG4gIDxidXR0b24gbWQtYnV0dG9uIG1kLWRpYWxvZy1jbG9zZT1cImNvbmZpcm1cIj5Db25maXJtPC9idXR0b24+XHJcbiAgPGJ1dHRvbiBtZC1idXR0b24gbWQtZGlhbG9nLWNsb3NlPVwiY2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XHJcbjwvZGl2PlxyXG48aDEgbWQtZGlhbG9nLXRpdGxlICpuZ0lmPVwiIWlzTG9nZ2VkSW5cIj5WYWxpZGF0aW9uPC9oMT5cclxuPGRpdiBtZC1kaWFsb2ctY29udGVudCAqbmdJZj1cIiFpc0xvZ2dlZEluXCI+UGxlYXNlIGxvZ2luIHRvIHJlZ2lzdGVyIHRvIHRoaXMgZXZlbnQ8L2Rpdj5cclxuPGRpdiBtZC1kaWFsb2ctYWN0aW9ucyAqbmdJZj1cIiFpc0xvZ2dlZEluXCI+XHJcbiAgPGJ1dHRvbiBtZC1idXR0b24gbWQtZGlhbG9nLWNsb3NlPVwib2tcIj5PSzwvYnV0dG9uPlxyXG48L2Rpdj4iLCI8YXBwLXJlZ2lzdGVyZXZlbnQ+PC9hcHAtcmVnaXN0ZXJldmVudD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0FBO01BQUE7TUFBQSxxQ0FBQTtNQUFBLDJDQUF1Qzs7OztvQkFDdkM7TUFBQTtNQUFBLG1EQUFBO01BQUEsMkNBQTBDOzs7O29CQUMxQztNQUFBO01BQUEsbURBQUE7TUFBQSwyQ0FBMEM7TUFDeEM7VUFBQTtVQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO01BQUEscURBQUE7OEJBQUE7VUFBQSxzQkFBQTt5REFBQTthQUFBO1VBQUEsc0JBQUE7VUFBQSxpREFBNEM7TUFBZ0IseUNBQzVEO1VBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO1VBQUEscURBQUE7VUFBQTtVQUFBLG9DQUFBO1VBQUE7VUFBQSxzQkFBQTtVQUFBLG9DQUFBO1VBQUEsa0VBQTJDO2lCQUFBLGdCQUFlO0lBRHhDO0lBQWxCLFdBQWtCLFNBQWxCO0lBQ2tCO0lBQWxCLFlBQWtCLFNBQWxCOztJQURBO0lBQUE7SUFBQSxXQUFBLFVBQUEsU0FBQTtJQUNBO0lBQUE7SUFBQSxZQUFBLFVBQUEsU0FBQTs7OztvQkFFRjtNQUFBO01BQUEscUNBQUE7TUFBQSwyQ0FBd0M7Ozs7b0JBQ3hDO01BQUE7TUFBQSxtREFBQTtNQUFBLDJDQUEyQzs7OztvQkFDM0M7TUFBQTtNQUFBLG1EQUFBO01BQUEsMkNBQTJDO01BQ3pDO1VBQUE7VUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtNQUFBLHFEQUFBOzhCQUFBO1VBQUEsc0JBQUE7eURBQUE7YUFBQTtVQUFBLHNCQUFBO1VBQUEsaURBQXVDO01BQVc7SUFBaEM7SUFBbEIsV0FBa0IsU0FBbEI7O0lBQUE7SUFBQTtJQUFBLFdBQUEsVUFBQSxTQUFBOzs7O29CQVRGO01BQUEsdUNBQUE7b0JBQUEsbUNBQXdEO01BQUEsU0FDeEQ7TUFBQSx1Q0FBQTtvQkFBQSxtQ0FBc0c7TUFBQSxTQUN0RztNQUFBLHVDQUFBO29CQUFBLG1DQUdNO01BQUEsU0FDTjtNQUFBLHVDQUFBO29CQUFBLG1DQUF1RDtNQUFBLFNBQ3ZEO01BQUEsdUNBQUE7b0JBQUEsbUNBQXVGO01BQUEsU0FDdkY7TUFBQSx1Q0FBQTtvQkFBQTs7SUFSb0I7SUFBcEIsV0FBb0IsU0FBcEI7SUFDdUI7SUFBdkIsV0FBdUIsU0FBdkI7SUFDdUI7SUFBdkIsV0FBdUIsU0FBdkI7SUFJb0I7SUFBcEIsWUFBb0IsU0FBcEI7SUFDdUI7SUFBdkIsWUFBdUIsU0FBdkI7SUFDdUI7SUFBdkIsWUFBdUIsU0FBdkI7Ozs7b0JDUkE7TUFBQTt1Q0FBQSxVQUFBO01BQUE7Ozs7In0=
