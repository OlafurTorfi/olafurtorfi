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
var router_1 = require('angular2/router');
var blog_service_1 = require('../../services/blog/blog.service');
var comment_service_1 = require('../../services/comment/comment.service');
var router_2 = require('angular2/router');
var ArticleComponent = (function () {
    function ArticleComponent(_blogService, _commentService, _broadcaster, _routeParams) {
        var _this = this;
        this._blogService = _blogService;
        this._commentService = _commentService;
        this._broadcaster = _broadcaster;
        this._routeParams = _routeParams;
        _broadcaster.subscribe(function (languageEvent) { return _this.language = languageEvent; });
    }
    ;
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this._routeParams.get('id');
        this._blogService.getBlog(Number(this.id)).then(function (result) { return _this.blog = result; });
        this._commentService.getComments(Number(this.id)).then(function (result) { return _this.comments = result; });
        console.log('about component loaded');
    };
    ;
    ArticleComponent = __decorate([
        core_1.Component({
            selector: 'about',
            templateUrl: 'components/article/article.template.html',
            styleUrls: ['components/article/article.style.css'],
            directives: [router_2.ROUTER_DIRECTIVES],
            providers: [blog_service_1.BlogService, comment_service_1.CommentService],
            pipes: [language_pipe_1.LanguagePipe]
        }), 
        __metadata('design:paramtypes', [blog_service_1.BlogService, comment_service_1.CommentService, broadcaster_1.Broadcaster, router_1.RouteParams])
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
//# sourceMappingURL=article.component.js.map