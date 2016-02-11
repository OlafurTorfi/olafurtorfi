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
var router_1 = require('angular2/router');
var about_component_1 = require('../about/about.component');
var frisbski_component_1 = require('../frisbski/frisbski.component');
var writing_component_1 = require('../writing/writing.component');
var playground_component_1 = require('../playground/playground.component');
var article_component_1 = require('../article/article.component');
var language_pipe_1 = require('../../pipes/language.pipe');
var broadcaster_1 = require('../../broadcaster');
var MainComponent = (function () {
    function MainComponent(broadcaster) {
        this.hideMenuOnMobile = true;
        this.languageFlagUrl = "assets/flags/union-jack.png";
        this.language = 'islenska';
        this.broadcaster = broadcaster;
    }
    ;
    MainComponent.prototype.toggleMenu = function () {
        this.hideMenuOnMobile = !this.hideMenuOnMobile;
    };
    ;
    MainComponent.prototype.toggleLanguage = function () {
        if (this.language === 'islenska') {
            this.languageFlagUrl = "assets/flags/icelandic.png";
            this.language = 'english';
        }
        else {
            this.languageFlagUrl = "assets/flags/union-jack.png";
            this.language = 'islenska';
        }
        this.broadcaster.next(this.language);
    };
    MainComponent.prototype.ngOnInit = function () {
        console.log('main component loaded');
    };
    ;
    MainComponent = __decorate([
        core_1.Component({
            selector: 'main',
            templateUrl: 'components/main/main.template.html',
            styleUrls: ['components/main/main.style.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            pipes: [language_pipe_1.LanguagePipe],
            providers: [broadcaster_1.Broadcaster]
        }),
        router_1.RouteConfig([
            { path: '/', name: 'About', component: about_component_1.AboutComponent, useAsDefault: true },
            { path: '/frisbski', name: 'Frisbski', component: frisbski_component_1.FrisbskiComponent },
            { path: '/writing', name: 'Writing', component: writing_component_1.WritingComponent },
            { path: '/playground', name: 'Playground', component: playground_component_1.PlaygroundComponent },
            { path: '/writing/:id', name: 'Article', component: article_component_1.ArticleComponent }
        ]), 
        __metadata('design:paramtypes', [broadcaster_1.Broadcaster])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map