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
var language_pipe_1 = require('../../pipes/language.pipe');
var broadcaster_1 = require('../../broadcaster');
var getAge = function (type) {
    var birth = new Date(1984, 3, 15);
    var now = new Date();
    var timediff = now.getTime() - birth.getTime();
    switch (type) {
        case 'vikna':
            return Math.floor(timediff / (1000 * 60 * 60 * 24 * 7));
        case 'mánaða':
            console.log('now ', now.getFullYear());
            console.log('birth ', birth.getFullYear());
            return ((now.getUTCFullYear() - birth.getUTCFullYear()) * 12) + now.getMonth() - birth.getMonth();
        case 'árs':
            return Math.abs(new Date(Date.now() - birth.getTime()).getUTCFullYear() - 1970);
        default:
            return Math.floor(timediff / (1000 * 60 * 60 * 24));
    }
};
var AboutComponent = (function () {
    function AboutComponent(_broadcaster) {
        var _this = this;
        this.ageType = 'vikna';
        this.age = getAge(this.ageType);
        _broadcaster.subscribe(function (languageEvent) { return _this.language = languageEvent; });
    }
    AboutComponent.prototype.toggleAgeType = function () {
        switch (this.ageType) {
            case 'vikna':
                this.ageType = 'mánaða';
                break;
            case 'mánaða':
                this.ageType = 'árs';
                break;
            case 'árs':
                this.ageType = 'daga';
                break;
            default:
                this.ageType = 'vikna';
                break;
        }
        this.age = getAge(this.ageType);
    };
    AboutComponent.prototype.ngOnInit = function () {
        console.log('about component loaded');
    };
    ;
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'about',
            templateUrl: 'components/about/about.template.html',
            styleUrls: ['components/about/about.style.css'],
            pipes: [language_pipe_1.LanguagePipe]
        }), 
        __metadata('design:paramtypes', [broadcaster_1.Broadcaster])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map