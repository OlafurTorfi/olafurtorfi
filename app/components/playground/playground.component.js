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
var mergeSort = require('./algorithms/mergeSort');
var selectionSort = require('./algorithms/selectionSort');
var insertionSort = require('./algorithms/insertionSort');
var shellSort = require('./algorithms/shellSort');
var arrayHelper = require('./algorithms/arrayHelper');
var PlaygroundComponent = (function () {
    function PlaygroundComponent(_broadcaster) {
        var _this = this;
        _broadcaster.subscribe(function (languageEvent) { return _this.language = languageEvent; });
        this.selected = 'Algorithms';
        this.arrayLength = 10;
        this.generatedArray = [];
        this.sortedArray = [];
    }
    PlaygroundComponent.prototype.sortingHelper = function (sortFunc) {
        var _this = this;
        this.sortedArray = [];
        var tempDate = new Date();
        sortFunc.sortAsync(this.generatedArray).then(function (result) {
            _this.sortedArray = result;
            _this.duration = new Date().getTime() - tempDate.getTime();
            if (result.length >= 5000) {
                console.log('Sorted array: ', result);
            }
        });
    };
    ;
    PlaygroundComponent.prototype.generateArray = function () {
        this.sortedArray = [];
        this.generatedArray = arrayHelper.makeRandomizedArray(this.arrayLength);
        if (this.generatedArray.length >= 5000) {
            console.log('Generated array: ', this.generatedArray);
        }
    };
    ;
    PlaygroundComponent.prototype.generateRange = function () {
        this.sortedArray = [];
        this.generatedArray = arrayHelper.makeShuffledRangeArray(this.arrayLength);
        if (this.generatedArray.length >= 5000) {
            console.log('Generated array: ', this.generatedArray);
        }
    };
    PlaygroundComponent.prototype.mergeSort = function () {
        this.sortingHelper(mergeSort);
    };
    ;
    PlaygroundComponent.prototype.selectionSort = function () {
        this.sortingHelper(selectionSort);
    };
    ;
    PlaygroundComponent.prototype.insertionSort = function () {
        this.sortingHelper(insertionSort);
    };
    ;
    PlaygroundComponent.prototype.shellSort = function () {
        this.sortingHelper(shellSort);
    };
    ;
    PlaygroundComponent.prototype.select = function (item) {
        console.log('item was ', item);
        this.selected = item;
    };
    ;
    ;
    PlaygroundComponent.prototype.ngOnInit = function () {
        console.log('playground component loaded');
    };
    ;
    PlaygroundComponent = __decorate([
        core_1.Component({
            selector: 'playground',
            templateUrl: 'components/playground/playground.template.html',
            styleUrls: ['components/playground/playground.style.css'],
            pipes: [language_pipe_1.LanguagePipe]
        }), 
        __metadata('design:paramtypes', [broadcaster_1.Broadcaster])
    ], PlaygroundComponent);
    return PlaygroundComponent;
}());
exports.PlaygroundComponent = PlaygroundComponent;
//# sourceMappingURL=playground.component.js.map