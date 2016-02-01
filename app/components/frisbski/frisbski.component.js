'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var broadcaster_1 = require('../../broadcaster');
var language_pipe_1 = require('../../pipes/language.pipe');
var frisbski_service_1 = require('../../services/frisbski/frisbski.service');
var FrisbskiComponent = (function () {
    function FrisbskiComponent(_broadcaster, _frisbskiEventService) {
        var _this = this;
        this._frisbskiEventService = _frisbskiEventService;
        _broadcaster.subscribe(function (languageEvent) { return _this.language = languageEvent; });
        this.selected = 'Events';
    }
    FrisbskiComponent.prototype.select = function (item) {
        console.log('item was ', item);
        this.selected = item;
    };
    ;
    ;
    FrisbskiComponent.prototype.getEvents = function () {
        var _this = this;
        this._frisbskiEventService.getEvents().then(function (events) {
            _this.events = events;
            _this.eventNumber = Math.round(Math.random() * (events.length - 1));
            _this.event = events[_this.eventNumber];
        });
    };
    ;
    FrisbskiComponent.prototype.previousEvent = function () {
        this.eventNumber = this.eventNumber === 0 ? (this.events.length - 1) : (this.eventNumber - 1);
        this.event = this.events[this.eventNumber];
    };
    ;
    FrisbskiComponent.prototype.nextEvent = function () {
        this.eventNumber = this.eventNumber === (this.events.length - 1) ? 0 : (this.eventNumber + 1);
        this.event = this.events[this.eventNumber];
    };
    ;
    FrisbskiComponent.prototype.ngOnInit = function () {
        this.getEvents();
        console.log('frisbski component loaded');
    };
    ;
    FrisbskiComponent = __decorate([
        core_1.Component({
            selector: 'frisbski',
            templateUrl: 'components/frisbski/frisbski.template.html',
            styleUrls: ['components/frisbski/frisbski.style.css'],
            pipes: [language_pipe_1.LanguagePipe],
            providers: [frisbski_service_1.FrisbskiEventService]
        }), 
        __metadata('design:paramtypes', [broadcaster_1.Broadcaster, frisbski_service_1.FrisbskiEventService])
    ], FrisbskiComponent);
    return FrisbskiComponent;
}());
exports.FrisbskiComponent = FrisbskiComponent;
//# sourceMappingURL=frisbski.component.js.map