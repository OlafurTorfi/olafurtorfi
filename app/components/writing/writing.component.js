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
var common_1 = require('angular2/common');
var blog_service_1 = require('../../services/blog/blog.service');
var broadcaster_1 = require('../../broadcaster');
var router_1 = require('angular2/router');
var WritingComponent = (function () {
    function WritingComponent(_blogService, _broadcaster, _router) {
        var _this = this;
        this._blogService = _blogService;
        this._broadcaster = _broadcaster;
        this._router = _router;
        _broadcaster.subscribe(function (languageEvent) { return _this.language = languageEvent; });
    }
    ;
    WritingComponent.prototype.getBlogs = function () {
        var _this = this;
        this._blogService.getBlogs().then(function (blogs) { return _this.blogs = blogs; });
    };
    ;
    WritingComponent.prototype.goToBlog = function (blog) {
        this._router.navigate(['Article', { id: blog }]);
    };
    WritingComponent.prototype.ngOnInit = function () {
        this.getBlogs();
        console.log('writing component loaded');
    };
    ;
    WritingComponent = __decorate([
        core_1.Component({
            selector: 'writing',
            templateUrl: 'components/writing/writing.template.html',
            styleUrls: ['components/writing/writing.style.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [blog_service_1.BlogService],
            pipes: [common_1.SlicePipe]
        }), 
        __metadata('design:paramtypes', [blog_service_1.BlogService, broadcaster_1.Broadcaster, router_1.Router])
    ], WritingComponent);
    return WritingComponent;
}());
exports.WritingComponent = WritingComponent;
//# sourceMappingURL=writing.component.js.map