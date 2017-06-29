/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from '@angular/core';
import * as i1 from './app.module';
import * as i2 from './app.component';
import * as i3 from '../../node_modules/@angular/material/typings/index.ngfactory';
import * as i4 from './components/teventpage/teventpage.component.ngfactory';
import * as i5 from './components/nteventpage/nteventpage.component.ngfactory';
import * as i6 from './components/workshoppage/workshoppage.component.ngfactory';
import * as i7 from './components/contactspage/contactspage.component.ngfactory';
import * as i8 from './components/homepage/homepage.component.ngfactory';
import * as i9 from './components/login/login.component.ngfactory';
import * as i10 from './components/register/register.component.ngfactory';
import * as i11 from './app.component.ngfactory';
import * as i12 from '@angular/material';
import * as i13 from '@angular/common';
import * as i14 from '@angular/forms';
import * as i15 from '@angular/http';
import * as i16 from '@angular/platform-browser';
import * as i17 from '@angular/animations/browser';
import * as i18 from '@angular/platform-browser/animations';
import * as i19 from '@angular/animations';
import * as i20 from '@angular/router';
import * as i21 from './services/user.service';
import * as i22 from './components/teventpage/teventpage.component';
import * as i23 from './components/nteventpage/nteventpage.component';
import * as i24 from './components/workshoppage/workshoppage.component';
import * as i25 from './components/contactspage/contactspage.component';
import * as i26 from './components/homepage/homepage.component';
export var AppModuleNgFactory = i0.ɵcmf(i1.AppModule, [i2.AppComponent], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.MdDialogContainerNgFactory, i3.MdDatepickerContentNgFactory, i3.MdSnackBarContainerNgFactory,
                    i3.SimpleSnackBarNgFactory, i3.TooltipComponentNgFactory, i4.TEventPageComponentNgFactory,
                    i5.NTEventPageComponentNgFactory, i6.WorkshopPageComponentNgFactory, i7.ContactsPageComponentNgFactory,
                    i8.HomePageComponentNgFactory, i9.LoginComponentNgFactory, i10.RegisterComponentNgFactory,
                    i11.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]),
        i0.ɵmpd(4608, i12.Platform, i12.Platform, []), i0.ɵmpd(5120, i12.ScrollDispatcher, i12.ɵf, [[3, i12.ScrollDispatcher], i0.NgZone, i12.Platform]), i0.ɵmpd(5120, i12.ViewportRuler, i12.ɵd, [[3, i12.ViewportRuler], i12.ScrollDispatcher]),
        i0.ɵmpd(4608, i12.ScrollStrategyOptions, i12.ScrollStrategyOptions, [i12.ScrollDispatcher,
            i12.ViewportRuler]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]),
        i0.ɵmpd(4608, i13.NgLocalization, i13.NgLocaleLocalization, [i0.LOCALE_ID]),
        i0.ɵmpd(5120, i12.OverlayContainer, i12.ɵb, [[3, i12.OverlayContainer]]), i0.ɵmpd(4608, i12.ɵv, i12.ɵv, [i12.ViewportRuler]), i0.ɵmpd(4608, i12.Overlay, i12.Overlay, [i12.ScrollStrategyOptions, i12.OverlayContainer, i0.ComponentFactoryResolver,
            i12.ɵv, i0.ApplicationRef, i0.Injector, i0.NgZone]), i0.ɵmpd(5120, i12.FocusOriginMonitor, i12.FOCUS_ORIGIN_MONITOR_PROVIDER_FACTORY, [[3, i12.FocusOriginMonitor],
            i0.NgZone, i12.Platform]), i0.ɵmpd(4608, i14.ɵi, i14.ɵi, []),
        i0.ɵmpd(5120, i12.UniqueSelectionDispatcher, i12.ɵj, [[3, i12.UniqueSelectionDispatcher]]),
        i0.ɵmpd(4608, i12.ɵa, i12.ɵa, []), i0.ɵmpd(4608, i12.InteractivityChecker, i12.InteractivityChecker, [i12.Platform]), i0.ɵmpd(4608, i12.FocusTrapFactory, i12.FocusTrapFactory, [i12.InteractivityChecker, i12.Platform, i0.NgZone]),
        i0.ɵmpd(5120, i12.LiveAnnouncer, i12.ɵi, [[3, i12.LiveAnnouncer], [2, i12.LIVE_ANNOUNCER_ELEMENT_TOKEN],
            i12.Platform]), i0.ɵmpd(4608, i12.MdDialog, i12.MdDialog, [i12.Overlay, i0.Injector,
            [2, i13.Location], [3, i12.MdDialog]]), i0.ɵmpd(4608, i12.MdDatepickerIntl, i12.MdDatepickerIntl, []), i0.ɵmpd(4608, i15.BrowserXhr, i15.BrowserXhr, []), i0.ɵmpd(4608, i15.ResponseOptions, i15.BaseResponseOptions, []), i0.ɵmpd(5120, i15.XSRFStrategy, i15.ɵb, []), i0.ɵmpd(4608, i15.XHRBackend, i15.XHRBackend, [i15.BrowserXhr, i15.ResponseOptions, i15.XSRFStrategy]),
        i0.ɵmpd(4608, i15.RequestOptions, i15.BaseRequestOptions, []), i0.ɵmpd(5120, i15.Http, i15.ɵc, [i15.XHRBackend, i15.RequestOptions]), i0.ɵmpd(4608, i16.DomSanitizer, i16.ɵe, [i16.DOCUMENT]), i0.ɵmpd(5120, i12.MdIconRegistry, i12.ICON_REGISTRY_PROVIDER_FACTORY, [[3, i12.MdIconRegistry], [2, i15.Http], i16.DomSanitizer]), i0.ɵmpd(4608, i16.HAMMER_GESTURE_CONFIG, i16.HammerGestureConfig, []), i0.ɵmpd(4608, i12.MdSnackBar, i12.MdSnackBar, [i12.Overlay, i12.LiveAnnouncer, [3, i12.MdSnackBar]]),
        i0.ɵmpd(5120, i0.APP_ID, i0.ɵf, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []),
        i0.ɵmpd(6144, i0.Sanitizer, null, [i16.DomSanitizer]), i0.ɵmpd(5120, i16.EVENT_MANAGER_PLUGINS, function (p0_0, p1_0, p2_0, p2_1) {
            return [new i16.ɵDomEventsPlugin(p0_0), new i16.ɵKeyEventsPlugin(p1_0),
                new i16.ɵHammerGesturesPlugin(p2_0, p2_1)];
        }, [i16.DOCUMENT, i16.DOCUMENT, i16.DOCUMENT, i16.HAMMER_GESTURE_CONFIG]),
        i0.ɵmpd(4608, i16.EventManager, i16.EventManager, [i16.EVENT_MANAGER_PLUGINS,
            i0.NgZone]), i0.ɵmpd(135680, i16.ɵDomSharedStylesHost, i16.ɵDomSharedStylesHost, [i16.DOCUMENT]), i0.ɵmpd(4608, i16.ɵDomRendererFactory2, i16.ɵDomRendererFactory2, [i16.EventManager, i16.ɵDomSharedStylesHost]), i0.ɵmpd(5120, i17.AnimationDriver, i18.ɵc, []), i0.ɵmpd(5120, i17.ɵAnimationStyleNormalizer, i18.ɵd, []), i0.ɵmpd(4608, i17.ɵAnimationEngine, i18.ɵb, [i17.AnimationDriver,
            i17.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i18.ɵe, [i16.ɵDomRendererFactory2, i17.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(6144, i16.ɵSharedStylesHost, null, [i16.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i16.Meta, i16.Meta, [i16.DOCUMENT]), i0.ɵmpd(4608, i16.Title, i16.Title, [i16.DOCUMENT]), i0.ɵmpd(4608, i19.AnimationBuilder, i18.ɵBrowserAnimationBuilder, [i0.RendererFactory2]),
        i0.ɵmpd(4608, i14.FormBuilder, i14.FormBuilder, []), i0.ɵmpd(5120, i20.ActivatedRoute, i20.ɵf, [i20.Router]), i0.ɵmpd(4608, i20.NoPreloading, i20.NoPreloading, []), i0.ɵmpd(6144, i20.PreloadingStrategy, null, [i20.NoPreloading]), i0.ɵmpd(135680, i20.RouterPreloader, i20.RouterPreloader, [i20.Router, i0.NgModuleFactoryLoader, i0.Compiler,
            i0.Injector, i20.PreloadingStrategy]), i0.ɵmpd(4608, i20.PreloadAllModules, i20.PreloadAllModules, []), i0.ɵmpd(5120, i20.ROUTER_INITIALIZER, i20.ɵi, [i20.ɵg]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) {
            return [p0_0];
        }, [i20.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i21.UserService, i21.UserService, [i15.Http]), i0.ɵmpd(512, i12.CompatibilityModule, i12.CompatibilityModule, []), i0.ɵmpd(256, i12.MATERIAL_SANITY_CHECKS, true, []),
        i0.ɵmpd(512, i12.MdCommonModule, i12.MdCommonModule, [[2, i16.DOCUMENT], [2, i12.MATERIAL_SANITY_CHECKS]]),
        i0.ɵmpd(512, i12.PlatformModule, i12.PlatformModule, []), i0.ɵmpd(512, i12.ScrollDispatchModule, i12.ScrollDispatchModule, []), i0.ɵmpd(512, i12.MdRippleModule, i12.MdRippleModule, []), i0.ɵmpd(512, i13.CommonModule, i13.CommonModule, []), i0.ɵmpd(512, i12.MdSelectionModule, i12.MdSelectionModule, []), i0.ɵmpd(512, i12.MdOptionModule, i12.MdOptionModule, []),
        i0.ɵmpd(512, i12.PortalModule, i12.PortalModule, []), i0.ɵmpd(512, i12.OverlayModule, i12.OverlayModule, []), i0.ɵmpd(512, i12.MdAutocompleteModule, i12.MdAutocompleteModule, []), i0.ɵmpd(512, i12.StyleModule, i12.StyleModule, []), i0.ɵmpd(512, i12.MdButtonModule, i12.MdButtonModule, []), i0.ɵmpd(512, i14.ɵba, i14.ɵba, []), i0.ɵmpd(512, i14.FormsModule, i14.FormsModule, []), i0.ɵmpd(512, i12.MdButtonToggleModule, i12.MdButtonToggleModule, []), i0.ɵmpd(512, i12.MdCardModule, i12.MdCardModule, []), i0.ɵmpd(512, i12.MdChipsModule, i12.MdChipsModule, []), i0.ɵmpd(512, i12.ObserveContentModule, i12.ObserveContentModule, []), i0.ɵmpd(512, i12.MdCheckboxModule, i12.MdCheckboxModule, []), i0.ɵmpd(512, i12.A11yModule, i12.A11yModule, []),
        i0.ɵmpd(512, i12.MdDialogModule, i12.MdDialogModule, []), i0.ɵmpd(512, i12.MdDatepickerModule, i12.MdDatepickerModule, []), i0.ɵmpd(512, i12.MdExpansionModule, i12.MdExpansionModule, []), i0.ɵmpd(512, i12.MdLineModule, i12.MdLineModule, []), i0.ɵmpd(512, i12.MdGridListModule, i12.MdGridListModule, []), i0.ɵmpd(512, i12.MdIconModule, i12.MdIconModule, []), i0.ɵmpd(512, i12.MdInputModule, i12.MdInputModule, []),
        i0.ɵmpd(512, i12.MdListModule, i12.MdListModule, []), i0.ɵmpd(512, i12.MdMenuModule, i12.MdMenuModule, []), i0.ɵmpd(512, i12.MdProgressBarModule, i12.MdProgressBarModule, []), i0.ɵmpd(512, i12.MdProgressSpinnerModule, i12.MdProgressSpinnerModule, []), i0.ɵmpd(512, i12.MdRadioModule, i12.MdRadioModule, []), i0.ɵmpd(512, i12.MdSelectModule, i12.MdSelectModule, []), i0.ɵmpd(512, i12.MdSidenavModule, i12.MdSidenavModule, []),
        i0.ɵmpd(512, i12.RtlModule, i12.RtlModule, []), i0.ɵmpd(512, i12.MdSliderModule, i12.MdSliderModule, []), i0.ɵmpd(512, i12.MdSlideToggleModule, i12.MdSlideToggleModule, []), i0.ɵmpd(512, i12.MdSnackBarModule, i12.MdSnackBarModule, []), i0.ɵmpd(512, i12.MdTabsModule, i12.MdTabsModule, []), i0.ɵmpd(512, i12.MdToolbarModule, i12.MdToolbarModule, []),
        i0.ɵmpd(512, i12.MdTooltipModule, i12.MdTooltipModule, []), i0.ɵmpd(512, i12.MaterialModule, i12.MaterialModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i16.ɵa, []), i0.ɵmpd(1024, i0.NgProbeToken, function () {
            return [i20.ɵb()];
        }, []), i0.ɵmpd(512, i20.ɵg, i20.ɵg, [i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p0_1, p1_0) {
            return [i16.ɵc(p0_0, p0_1), i20.ɵh(p1_0)];
        }, [[2, i16.NgProbeToken], [2, i0.NgProbeToken], i20.ɵg]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ɵe, i0.ɵe, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver,
            i0.ApplicationInitStatus]), i0.ɵmpd(2048, i0.ApplicationRef, null, [i0.ɵe]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]),
        i0.ɵmpd(512, i16.BrowserModule, i16.BrowserModule, [[3, i16.BrowserModule]]),
        i0.ɵmpd(512, i18.BrowserAnimationsModule, i18.BrowserAnimationsModule, []),
        i0.ɵmpd(512, i14.ReactiveFormsModule, i14.ReactiveFormsModule, []),
        i0.ɵmpd(512, i15.HttpModule, i15.HttpModule, []), i0.ɵmpd(1024, i20.ɵa, i20.ɵd, [[3, i20.Router]]), i0.ɵmpd(512, i20.UrlSerializer, i20.DefaultUrlSerializer, []), i0.ɵmpd(512, i20.ChildrenOutletContexts, i20.ChildrenOutletContexts, []), i0.ɵmpd(256, i20.ROUTER_CONFIGURATION, {}, []),
        i0.ɵmpd(1024, i13.LocationStrategy, i20.ɵc, [i13.PlatformLocation, [2, i13.APP_BASE_HREF],
            i20.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i13.Location, i13.Location, [i13.LocationStrategy]),
        i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]),
        i0.ɵmpd(1024, i20.ROUTES, function () {
            return [[{ path: 'tevents', component: i22.TEventPageComponent }, { path: 'ntevents',
                        component: i23.NTEventPageComponent }, { path: 'workshops', component: i24.WorkshopPageComponent },
                    { path: 'contacts', component: i25.ContactsPageComponent }, { path: '', component: i26.HomePageComponent,
                        pathMatch: 'full' }]];
        }, []), i0.ɵmpd(1024, i20.Router, i20.ɵe, [i0.ApplicationRef, i20.UrlSerializer,
            i20.ChildrenOutletContexts, i13.Location, i0.Injector, i0.NgModuleFactoryLoader,
            i0.Compiler, i20.ROUTES, i20.ROUTER_CONFIGURATION, [2, i20.UrlHandlingStrategy],
            [2, i20.RouteReuseStrategy]]), i0.ɵmpd(512, i20.RouterModule, i20.RouterModule, [[2, i20.ɵa], [2, i20.Router]]), i0.ɵmpd(512, i1.AppModule, i1.AppModule, [])]);
});
