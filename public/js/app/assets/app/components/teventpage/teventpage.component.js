var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { MdDialog, MdDialogConfig, MdSnackBar } from '@angular/material';
import { MoreService } from '../../services/more.service';
import { UserService } from '../../services/user.service';
import { MoreComponent } from '../more/more.component';
import { RegisterEventComponent } from '../registerevent/registerevent.component';
import { CancelEventComponent } from '../cancelevent/cancelevent.component';
var TEventPageComponent = (function () {
    function TEventPageComponent(moreService, dialog, userService, snackBar) {
        this.moreService = moreService;
        this.dialog = dialog;
        this.userService = userService;
        this.snackBar = snackBar;
        this.nteventsRegistered = {
            e21: false,
            e22: false,
            e23: false,
            e24: false,
            e25: false,
            e26: false
        };
    }
    TEventPageComponent.prototype.ngOnInit = function () {
        this.data = this.moreService.getTMore();
    };
    TEventPageComponent.prototype.openDialog = function (data) {
        var config = new MdDialogConfig();
        config.data = data;
        var dialogRef = this.dialog.open(MoreComponent, config);
    };
    TEventPageComponent.prototype.openConfirmation = function (eventId) {
        var _this = this;
        var dialogRef = this.dialog.open(RegisterEventComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == "confirm") {
                var body = {
                    eventId: eventId,
                    token: _this.userService.getToken()
                };
                _this.userService.registerEvent(body)
                    .subscribe(function (data) {
                    localStorage.setItem('eventsRegistered', data.eventsRegistered);
                    _this.nteventsRegistered.e21 = data.eventsRegistered.e21;
                    _this.nteventsRegistered.e22 = data.eventsRegistered.e22;
                    _this.nteventsRegistered.e23 = data.eventsRegistered.e23;
                    _this.nteventsRegistered.e24 = data.eventsRegistered.e24;
                    _this.nteventsRegistered.e25 = data.eventsRegistered.e25;
                    _this.nteventsRegistered.e26 = data.eventsRegistered.e26;
                    _this.snackBar.open('Successfully Registerd', 'OK');
                }, function (error) {
                    _this.snackBar.open('Registration Faled. Please Try Again Later', 'OK');
                });
            }
        });
    };
    TEventPageComponent.prototype.cancelRegistration = function (eventId) {
        var _this = this;
        var dialogRef = this.dialog.open(CancelEventComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == "confirm") {
                var body = {
                    eventId: eventId,
                    token: _this.userService.getToken()
                };
                _this.userService.cancelEvent(body)
                    .subscribe(function (data) {
                    localStorage.setItem('eventsRegistered', data.eventsRegistered);
                    _this.nteventsRegistered.e21 = data.eventsRegistered.e21;
                    _this.nteventsRegistered.e22 = data.eventsRegistered.e22;
                    _this.nteventsRegistered.e23 = data.eventsRegistered.e23;
                    _this.nteventsRegistered.e24 = data.eventsRegistered.e24;
                    _this.nteventsRegistered.e25 = data.eventsRegistered.e25;
                    _this.nteventsRegistered.e26 = data.eventsRegistered.e26;
                    _this.snackBar.open('Your Registration Is Cancelled', 'OK');
                }, function (error) {
                    _this.snackBar.open('Cancellation Failed. Please Try Again Later', 'OK');
                });
            }
        });
    };
    return TEventPageComponent;
}());
TEventPageComponent = __decorate([
    Component({
        selector: 'app-eventpage',
        templateUrl: './teventpage.component.html',
        styleUrls: ['./teventpage.component.css']
    }),
    __metadata("design:paramtypes", [MoreService, MdDialog, UserService, MdSnackBar])
], TEventPageComponent);
export { TEventPageComponent };
