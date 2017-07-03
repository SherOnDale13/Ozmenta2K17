/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from './login.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/material';
import * as i3 from '@angular/flex-layout/flexbox/api/class';
import * as i4 from '@angular/flex-layout/media-query/media-monitor';
import * as i5 from './login.component';
import * as i6 from '@angular/forms';
import * as i7 from '../../../../node_modules/@angular/material/typings/index.ngfactory';
import * as i8 from '@angular/common';
import * as i9 from '../../services/user.service';
var styles_LoginComponent = [i0.styles];
export var RenderType_LoginComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_LoginComponent, data: {} });
function View_LoginComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, 'md-hint', [['class',
                'app-alert mat-hint']], [[2, 'mat-right', null], [1, 'id', 0]], null, null, null, null)), i1.ɵdid(16384, null, 0, i2.MdPrefixRejector, [[2, i2.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null),
        i1.ɵdid(16384, [[4, 4]], 0, i2.MdHint, [], null, null),
        i1.ɵdid(933888, null, 0, i3.ClassDirective, [i4.MediaMonitor, i1.IterableDiffers,
            i1.KeyValueDiffers, i1.ElementRef, i1.Renderer, i1.Renderer2], { classBase: [0,
                'classBase'] }, null), (_l()(), i1.ɵted(null, ['This field is required']))], function (_ck, _v) {
        var currVal_2 = 'app-alert';
        _ck(_v, 3, 0, currVal_2);
    }, function (_ck, _v) {
        var currVal_0 = (i1.ɵnov(_v, 2).align == 'end');
        var currVal_1 = i1.ɵnov(_v, 2).id;
        _ck(_v, 0, 0, currVal_0, currVal_1);
    });
}
function View_LoginComponent_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, 'md-hint', [['class',
                'app-alert mat-hint']], [[2, 'mat-right', null], [1, 'id', 0]], null, null, null, null)), i1.ɵdid(16384, null, 0, i2.MdPrefixRejector, [[2, i2.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null),
        i1.ɵdid(16384, [[4, 4]], 0, i2.MdHint, [], null, null),
        i1.ɵdid(933888, null, 0, i3.ClassDirective, [i4.MediaMonitor, i1.IterableDiffers,
            i1.KeyValueDiffers, i1.ElementRef, i1.Renderer, i1.Renderer2], { classBase: [0,
                'classBase'] }, null), (_l()(), i1.ɵted(null, ['Invalid Email Address']))], function (_ck, _v) {
        var currVal_2 = 'app-alert';
        _ck(_v, 3, 0, currVal_2);
    }, function (_ck, _v) {
        var currVal_0 = (i1.ɵnov(_v, 2).align == 'end');
        var currVal_1 = i1.ɵnov(_v, 2).id;
        _ck(_v, 0, 0, currVal_0, currVal_1);
    });
}
function View_LoginComponent_3(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, 'md-hint', [['class',
                'app-alert mat-hint']], [[2, 'mat-right', null], [1, 'id', 0]], null, null, null, null)), i1.ɵdid(16384, null, 0, i2.MdPrefixRejector, [[2, i2.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null),
        i1.ɵdid(16384, [[10, 4]], 0, i2.MdHint, [], null, null),
        i1.ɵdid(933888, null, 0, i3.ClassDirective, [i4.MediaMonitor, i1.IterableDiffers,
            i1.KeyValueDiffers, i1.ElementRef, i1.Renderer, i1.Renderer2], { classBase: [0,
                'classBase'] }, null), (_l()(), i1.ɵted(null, ['This field is required']))], function (_ck, _v) {
        var currVal_2 = 'app-alert';
        _ck(_v, 3, 0, currVal_2);
    }, function (_ck, _v) {
        var currVal_0 = (i1.ɵnov(_v, 2).align == 'end');
        var currVal_1 = i1.ɵnov(_v, 2).id;
        _ck(_v, 0, 0, currVal_0, currVal_1);
    });
}
export function View_LoginComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 87, 'div', [['class',
                'container']], null, null, null, null, null)),
        i1.ɵdid(933888, null, 0, i3.ClassDirective, [i4.MediaMonitor, i1.IterableDiffers,
            i1.KeyValueDiffers, i1.ElementRef, i1.Renderer, i1.Renderer2], { classBase: [0,
                'classBase'] }, null), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(),
            i1.ɵeld(0, null, null, 83, 'form', [['novalidate', '']], [[2,
                    'ng-untouched', null], [2, 'ng-touched', null], [2, 'ng-pristine',
                    null], [2, 'ng-dirty', null], [2, 'ng-valid', null],
                [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null,
                    'ngSubmit'], [null, 'submit'], [null, 'reset']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('submit' === en)) {
                    var pd_0 = (i1.ɵnov(_v, 5).onSubmit($event) !== false);
                    ad = (pd_0 && ad);
                }
                if (('reset' === en)) {
                    var pd_1 = (i1.ɵnov(_v, 5).onReset() !== false);
                    ad = (pd_1 && ad);
                }
                if (('ngSubmit' === en)) {
                    var pd_2 = (_co.loginUser(_co.rForm.value) !== false);
                    ad = (pd_2 && ad);
                }
                return ad;
            }, null, null)), i1.ɵdid(16384, null, 0, i6.ɵbf, [], null, null), i1.ɵdid(540672, null, 0, i6.FormGroupDirective, [[8, null], [8, null]], { form: [0, 'form'] }, { ngSubmit: 'ngSubmit' }),
        i1.ɵprd(2048, null, i6.ControlContainer, null, [i6.FormGroupDirective]),
        i1.ɵdid(16384, null, 0, i6.NgControlStatusGroup, [i6.ControlContainer], null, null), (_l()(), i1.ɵted(null, ['\n    '])),
        (_l()(), i1.ɵeld(0, null, null, 23, 'md-input-container', [['class',
                'app-full-width mat-input-container']], [[1, 'align', 0], [2, 'mat-input-invalid',
                null], [2, 'mat-focused', null], [2, 'ng-untouched', null],
            [2, 'ng-touched', null], [2, 'ng-pristine', null], [2, 'ng-dirty',
                null], [2, 'ng-valid', null], [2, 'ng-invalid', null],
            [2, 'ng-pending', null]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 10)._focusInput() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i7.View_MdInputContainer_0, i7.RenderType_MdInputContainer)), i1.ɵdid(7389184, null, 6, i2.MdInputContainer, [i1.ElementRef, i1.ChangeDetectorRef,
            [2, i2.MD_PLACEHOLDER_GLOBAL_OPTIONS]], null, null), i1.ɵqud(335544320, 1, { _mdInputChild: 0 }), i1.ɵqud(335544320, 2, { _placeholderChild: 0 }), i1.ɵqud(603979776, 3, { _errorChildren: 1 }), i1.ɵqud(603979776, 4, { _hintChildren: 1 }), i1.ɵqud(603979776, 5, { _prefixChildren: 1 }), i1.ɵqud(603979776, 6, { _suffixChildren: 1 }), i1.ɵdid(933888, null, 0, i3.ClassDirective, [i4.MediaMonitor, i1.IterableDiffers, i1.KeyValueDiffers,
            i1.ElementRef, i1.Renderer, i1.Renderer2], { classBase: [0, 'classBase'] }, null), (_l()(), i1.ɵted(1, ['\n      '])), (_l()(), i1.ɵeld(0, null, 1, 6, 'input', [['class', 'mat-input-element'], ['formControlName', 'email'], ['mdInput',
                ''], ['placeholder', 'Email'], ['type', 'email']], [[8, 'id', 0], [8, 'placeholder',
                0], [8, 'disabled', 0], [8, 'required', 0], [1, 'aria-describedby', 0], [1, 'aria-invalid',
                0], [2, 'ng-untouched', null], [2, 'ng-touched', null], [2,
                'ng-pristine', null], [2, 'ng-dirty', null], [2, 'ng-valid',
                null], [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null, 'input'], [null, 'blur'], [null, 'compositionstart'],
            [null, 'compositionend'], [null, 'focus']], function (_v, en, $event) {
            var ad = true;
            if (('input' === en)) {
                var pd_0 = (i1.ɵnov(_v, 20)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 20).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i1.ɵnov(_v, 20)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i1.ɵnov(_v, 20)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('blur' === en)) {
                var pd_4 = (i1.ɵnov(_v, 24)._onBlur() !== false);
                ad = (pd_4 && ad);
            }
            if (('focus' === en)) {
                var pd_5 = (i1.ɵnov(_v, 24)._onFocus() !== false);
                ad = (pd_5 && ad);
            }
            if (('input' === en)) {
                var pd_6 = (i1.ɵnov(_v, 24)._onInput() !== false);
                ad = (pd_6 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i6.DefaultValueAccessor, [i1.Renderer, i1.ElementRef, [2, i6.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i6.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i6.DefaultValueAccessor]), i1.ɵdid(671744, null, 0, i6.FormControlName, [[3, i6.ControlContainer], [8, null], [8, null], [2, i6.NG_VALUE_ACCESSOR]], { name: [0, 'name'] }, null), i1.ɵprd(2048, null, i6.NgControl, null, [i6.FormControlName]), i1.ɵdid(16384, [[1, 4]], 0, i2.MdInputDirective, [i1.ElementRef, i1.Renderer2, i2.Platform, [2, i6.NgControl], [2, i6.NgForm], [2,
                i6.FormGroupDirective]], { placeholder: [0, 'placeholder'], type: [1, 'type'] }, null), i1.ɵdid(16384, null, 0, i6.NgControlStatus, [i6.NgControl], null, null), (_l()(), i1.ɵted(1, ['\n      '])), (_l()(), i1.ɵand(16777216, null, 5, 1, null, View_LoginComponent_1)), i1.ɵdid(16384, null, 0, i8.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), i1.ɵted(1, ['\n      '])), (_l()(), i1.ɵand(16777216, null, 5, 1, null, View_LoginComponent_2)), i1.ɵdid(16384, null, 0, i8.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(),
            i1.ɵted(1, ['\n    '])), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(),
            i1.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 20, 'md-input-container', [['class', 'app-full-width mat-input-container']], [[1, 'align', 0], [2, 'mat-input-invalid',
                null], [2, 'mat-focused', null], [2, 'ng-untouched', null],
            [2, 'ng-touched', null], [2, 'ng-pristine', null], [2, 'ng-dirty',
                null], [2, 'ng-valid', null], [2, 'ng-invalid', null],
            [2, 'ng-pending', null]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 37)._focusInput() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i7.View_MdInputContainer_0, i7.RenderType_MdInputContainer)), i1.ɵdid(7389184, null, 6, i2.MdInputContainer, [i1.ElementRef, i1.ChangeDetectorRef,
            [2, i2.MD_PLACEHOLDER_GLOBAL_OPTIONS]], null, null), i1.ɵqud(335544320, 7, { _mdInputChild: 0 }), i1.ɵqud(335544320, 8, { _placeholderChild: 0 }), i1.ɵqud(603979776, 9, { _errorChildren: 1 }), i1.ɵqud(603979776, 10, { _hintChildren: 1 }), i1.ɵqud(603979776, 11, { _prefixChildren: 1 }), i1.ɵqud(603979776, 12, { _suffixChildren: 1 }), i1.ɵdid(933888, null, 0, i3.ClassDirective, [i4.MediaMonitor, i1.IterableDiffers, i1.KeyValueDiffers,
            i1.ElementRef, i1.Renderer, i1.Renderer2], { classBase: [0, 'classBase'] }, null), (_l()(), i1.ɵted(1, ['\n      '])), (_l()(), i1.ɵeld(0, null, 1, 6, 'input', [['class', 'mat-input-element'], ['formControlName', 'password'],
            ['mdInput', ''], ['placeholder', 'Password'], ['type', 'password']], [[8, 'id',
                0], [8, 'placeholder', 0], [8, 'disabled', 0], [8, 'required', 0], [1, 'aria-describedby',
                0], [1, 'aria-invalid', 0], [2, 'ng-untouched', null], [2, 'ng-touched',
                null], [2, 'ng-pristine', null], [2, 'ng-dirty', null],
            [2, 'ng-valid', null], [2, 'ng-invalid', null], [2, 'ng-pending',
                null]], [[null, 'input'], [null, 'blur'],
            [null, 'compositionstart'], [null, 'compositionend'],
            [null, 'focus']], function (_v, en, $event) {
            var ad = true;
            if (('input' === en)) {
                var pd_0 = (i1.ɵnov(_v, 47)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 47).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i1.ɵnov(_v, 47)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i1.ɵnov(_v, 47)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('blur' === en)) {
                var pd_4 = (i1.ɵnov(_v, 51)._onBlur() !== false);
                ad = (pd_4 && ad);
            }
            if (('focus' === en)) {
                var pd_5 = (i1.ɵnov(_v, 51)._onFocus() !== false);
                ad = (pd_5 && ad);
            }
            if (('input' === en)) {
                var pd_6 = (i1.ɵnov(_v, 51)._onInput() !== false);
                ad = (pd_6 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i6.DefaultValueAccessor, [i1.Renderer, i1.ElementRef, [2, i6.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i6.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i6.DefaultValueAccessor]), i1.ɵdid(671744, null, 0, i6.FormControlName, [[3, i6.ControlContainer], [8, null], [8, null], [2, i6.NG_VALUE_ACCESSOR]], { name: [0, 'name'] }, null), i1.ɵprd(2048, null, i6.NgControl, null, [i6.FormControlName]), i1.ɵdid(16384, [[7, 4]], 0, i2.MdInputDirective, [i1.ElementRef, i1.Renderer2, i2.Platform, [2, i6.NgControl], [2, i6.NgForm], [2,
                i6.FormGroupDirective]], { placeholder: [0, 'placeholder'], type: [1, 'type'] }, null), i1.ɵdid(16384, null, 0, i6.NgControlStatus, [i6.NgControl], null, null), (_l()(), i1.ɵted(1, ['\n      '])), (_l()(), i1.ɵand(16777216, null, 5, 1, null, View_LoginComponent_3)), i1.ɵdid(16384, null, 0, i8.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), i1.ɵted(1, ['\n    '])), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(),
            i1.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 7, 'md-checkbox', [['class', 'mat-checkbox'], ['formControlName', 'remember']], [[2, 'mat-checkbox-indeterminate', null], [2, 'mat-checkbox-checked',
                null], [2, 'mat-checkbox-disabled', null], [2, 'mat-checkbox-label-before',
                null], [2, 'ng-untouched', null], [2, 'ng-touched', null],
            [2, 'ng-pristine', null], [2, 'ng-dirty', null], [2, 'ng-valid',
                null], [2, 'ng-invalid', null], [2, 'ng-pending', null]], null, null, i7.View_MdCheckbox_0, i7.RenderType_MdCheckbox)),
        i1.ɵdid(16384, null, 0, i2.MdPrefixRejector, [[2, i2.MATERIAL_COMPATIBILITY_MODE],
            i1.ElementRef], null, null), i1.ɵdid(4374528, null, 0, i2.MdCheckbox, [i1.Renderer2, i1.ElementRef, i1.ChangeDetectorRef, i2.FocusOriginMonitor], null, null), i1.ɵprd(1024, null, i6.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i2.MdCheckbox]), i1.ɵdid(671744, null, 0, i6.FormControlName, [[3,
                i6.ControlContainer], [8, null], [8, null], [2, i6.NG_VALUE_ACCESSOR]], { name: [0, 'name'] }, null), i1.ɵprd(2048, null, i6.NgControl, null, [i6.FormControlName]), i1.ɵdid(16384, null, 0, i6.NgControlStatus, [i6.NgControl], null, null), (_l()(), i1.ɵted(0, ['Remember Me'])),
        (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 0, 'br', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 4, 'button', [['class',
                'mat-raised-button'], ['color', 'primary'], ['md-raised-button', ''], ['type',
                'submit']], [[8, 'disabled', 0]], null, null, i7.View_MdButton_0, i7.RenderType_MdButton)), i1.ɵdid(16384, null, 0, i2.MdPrefixRejector, [[2, i2.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null),
        i1.ɵdid(180224, null, 0, i2.MdButton, [i1.Renderer2, i1.ElementRef, i2.Platform,
            i2.FocusOriginMonitor], { disabled: [0, 'disabled'], color: [1, 'color'] }, null),
        i1.ɵdid(16384, null, 0, i2.MdRaisedButtonCssMatStyler, [], null, null), (_l()(), i1.ɵted(0, ['Submit'])), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 4, 'button', [['class',
                'mat-raised-button'], ['color', 'warn'], ['md-raised-button', ''], ['type', 'reset']], [[8, 'disabled', 0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.dialogRef.close() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, i7.View_MdButton_0, i7.RenderType_MdButton)), i1.ɵdid(16384, null, 0, i2.MdPrefixRejector, [[2, i2.MATERIAL_COMPATIBILITY_MODE], i1.ElementRef], null, null), i1.ɵdid(180224, null, 0, i2.MdButton, [i1.Renderer2, i1.ElementRef, i2.Platform, i2.FocusOriginMonitor], { color: [0,
                'color'] }, null), i1.ɵdid(16384, null, 0, i2.MdRaisedButtonCssMatStyler, [], null, null), (_l()(), i1.ɵted(0, ['Cancel'])),
        (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = 'container';
        _ck(_v, 1, 0, currVal_0);
        var currVal_8 = _co.rForm;
        _ck(_v, 5, 0, currVal_8);
        var currVal_19 = 'app-full-width';
        _ck(_v, 17, 0, currVal_19);
        var currVal_33 = 'email';
        _ck(_v, 22, 0, currVal_33);
        var currVal_34 = 'Email';
        var currVal_35 = 'email';
        _ck(_v, 24, 0, currVal_34, currVal_35);
        var currVal_36 = ((_co.rForm.controls['email'].pristine || !_co.rForm.controls['email'].value) && _co.rForm.controls['email'].touched);
        _ck(_v, 28, 0, currVal_36);
        var currVal_37 = (((!_co.rForm.controls['email'].pristine && !_co.rForm.controls['email'].value) && _co.rForm.controls['email'].touched) && !_co.rForm.controls['email'].valid);
        _ck(_v, 31, 0, currVal_37);
        var currVal_48 = 'app-full-width';
        _ck(_v, 44, 0, currVal_48);
        var currVal_62 = 'password';
        _ck(_v, 49, 0, currVal_62);
        var currVal_63 = 'Password';
        var currVal_64 = 'password';
        _ck(_v, 51, 0, currVal_63, currVal_64);
        var currVal_65 = ((_co.rForm.controls['password'].pristine || (_co.rForm.controls['password'].value == '')) && _co.rForm.controls['password'].touched);
        _ck(_v, 55, 0, currVal_65);
        var currVal_77 = 'remember';
        _ck(_v, 66, 0, currVal_77);
        var currVal_79 = !_co.rForm.valid;
        var currVal_80 = 'primary';
        _ck(_v, 77, 0, currVal_79, currVal_80);
        var currVal_82 = 'warn';
        _ck(_v, 83, 0, currVal_82);
    }, function (_ck, _v) {
        var currVal_1 = i1.ɵnov(_v, 7).ngClassUntouched;
        var currVal_2 = i1.ɵnov(_v, 7).ngClassTouched;
        var currVal_3 = i1.ɵnov(_v, 7).ngClassPristine;
        var currVal_4 = i1.ɵnov(_v, 7).ngClassDirty;
        var currVal_5 = i1.ɵnov(_v, 7).ngClassValid;
        var currVal_6 = i1.ɵnov(_v, 7).ngClassInvalid;
        var currVal_7 = i1.ɵnov(_v, 7).ngClassPending;
        _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);
        var currVal_9 = null;
        var currVal_10 = i1.ɵnov(_v, 10)._mdInputChild._isErrorState();
        var currVal_11 = i1.ɵnov(_v, 10)._mdInputChild.focused;
        var currVal_12 = i1.ɵnov(_v, 10)._shouldForward('untouched');
        var currVal_13 = i1.ɵnov(_v, 10)._shouldForward('touched');
        var currVal_14 = i1.ɵnov(_v, 10)._shouldForward('pristine');
        var currVal_15 = i1.ɵnov(_v, 10)._shouldForward('dirty');
        var currVal_16 = i1.ɵnov(_v, 10)._shouldForward('valid');
        var currVal_17 = i1.ɵnov(_v, 10)._shouldForward('invalid');
        var currVal_18 = i1.ɵnov(_v, 10)._shouldForward('pending');
        _ck(_v, 9, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18);
        var currVal_20 = i1.ɵnov(_v, 24).id;
        var currVal_21 = i1.ɵnov(_v, 24).placeholder;
        var currVal_22 = i1.ɵnov(_v, 24).disabled;
        var currVal_23 = i1.ɵnov(_v, 24).required;
        var currVal_24 = (i1.ɵnov(_v, 24).ariaDescribedby || null);
        var currVal_25 = i1.ɵnov(_v, 24)._isErrorState();
        var currVal_26 = i1.ɵnov(_v, 25).ngClassUntouched;
        var currVal_27 = i1.ɵnov(_v, 25).ngClassTouched;
        var currVal_28 = i1.ɵnov(_v, 25).ngClassPristine;
        var currVal_29 = i1.ɵnov(_v, 25).ngClassDirty;
        var currVal_30 = i1.ɵnov(_v, 25).ngClassValid;
        var currVal_31 = i1.ɵnov(_v, 25).ngClassInvalid;
        var currVal_32 = i1.ɵnov(_v, 25).ngClassPending;
        _ck(_v, 19, 1, [currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25,
            currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32]);
        var currVal_38 = null;
        var currVal_39 = i1.ɵnov(_v, 37)._mdInputChild._isErrorState();
        var currVal_40 = i1.ɵnov(_v, 37)._mdInputChild.focused;
        var currVal_41 = i1.ɵnov(_v, 37)._shouldForward('untouched');
        var currVal_42 = i1.ɵnov(_v, 37)._shouldForward('touched');
        var currVal_43 = i1.ɵnov(_v, 37)._shouldForward('pristine');
        var currVal_44 = i1.ɵnov(_v, 37)._shouldForward('dirty');
        var currVal_45 = i1.ɵnov(_v, 37)._shouldForward('valid');
        var currVal_46 = i1.ɵnov(_v, 37)._shouldForward('invalid');
        var currVal_47 = i1.ɵnov(_v, 37)._shouldForward('pending');
        _ck(_v, 36, 0, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47);
        var currVal_49 = i1.ɵnov(_v, 51).id;
        var currVal_50 = i1.ɵnov(_v, 51).placeholder;
        var currVal_51 = i1.ɵnov(_v, 51).disabled;
        var currVal_52 = i1.ɵnov(_v, 51).required;
        var currVal_53 = (i1.ɵnov(_v, 51).ariaDescribedby || null);
        var currVal_54 = i1.ɵnov(_v, 51)._isErrorState();
        var currVal_55 = i1.ɵnov(_v, 52).ngClassUntouched;
        var currVal_56 = i1.ɵnov(_v, 52).ngClassTouched;
        var currVal_57 = i1.ɵnov(_v, 52).ngClassPristine;
        var currVal_58 = i1.ɵnov(_v, 52).ngClassDirty;
        var currVal_59 = i1.ɵnov(_v, 52).ngClassValid;
        var currVal_60 = i1.ɵnov(_v, 52).ngClassInvalid;
        var currVal_61 = i1.ɵnov(_v, 52).ngClassPending;
        _ck(_v, 46, 1, [currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54,
            currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61]);
        var currVal_66 = i1.ɵnov(_v, 64).indeterminate;
        var currVal_67 = i1.ɵnov(_v, 64).checked;
        var currVal_68 = i1.ɵnov(_v, 64).disabled;
        var currVal_69 = (i1.ɵnov(_v, 64).labelPosition == 'before');
        var currVal_70 = i1.ɵnov(_v, 68).ngClassUntouched;
        var currVal_71 = i1.ɵnov(_v, 68).ngClassTouched;
        var currVal_72 = i1.ɵnov(_v, 68).ngClassPristine;
        var currVal_73 = i1.ɵnov(_v, 68).ngClassDirty;
        var currVal_74 = i1.ɵnov(_v, 68).ngClassValid;
        var currVal_75 = i1.ɵnov(_v, 68).ngClassInvalid;
        var currVal_76 = i1.ɵnov(_v, 68).ngClassPending;
        _ck(_v, 62, 1, [currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71,
            currVal_72, currVal_73, currVal_74, currVal_75, currVal_76]);
        var currVal_78 = (i1.ɵnov(_v, 77).disabled || null);
        _ck(_v, 75, 0, currVal_78);
        var currVal_81 = (i1.ɵnov(_v, 83).disabled || null);
        _ck(_v, 81, 0, currVal_81);
    });
}
export function View_LoginComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'app-login', [], null, null, null, View_LoginComponent_0, RenderType_LoginComponent)),
        i1.ɵdid(49152, null, 0, i5.LoginComponent, [i2.MdDialogRef, i6.FormBuilder,
            i2.MdSnackBar, i9.UserService], null, null)], null, null);
}
export var LoginComponentNgFactory = i1.ɵccf('app-login', i5.LoginComponent, View_LoginComponent_Host_0, {}, {}, []);
