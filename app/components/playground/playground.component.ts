'use strict';

import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Broadcaster} from '../../broadcaster';
import {LanguagePipe} from '../../pipes/language.pipe';

const mergeSort = require('./algorithms/mergeSort');

const arrayHelper = require('./algorithms/arrayHelper');

@Component({
  selector: 'playground',
  templateUrl: 'components/playground/playground.template.html',
  styleUrls: ['components/playground/playground.style.css'],
  pipes: [LanguagePipe]
})
export class PlaygroundComponent implements OnInit {
  public language: String;
  public selected: String;
  public generatedArray: Number[];
  public sortedArray: Number[];
  public arrayLength: Number;
  public duration: Number;
  generateArray(){
    this.sortedArray = [];
    this.generatedArray = arrayHelper.makeRandomizedArray(this.arrayLength);
    if(this.generatedArray.length >= 5000){
      console.log('Generated array: ', this.generatedArray);
    }
  };
  mergeSort(){
    let tempDate = new Date();
    mergeSort.sortAsync(this.generatedArray).then(result=>{
      this.sortedArray = result
      this.duration = new Date().getTime() - tempDate.getTime();
      if(result.length >= 5000){
        console.log('Sorted array: ', result)
      }
    });
  };
  select(item) {
    console.log('item was ', item);
    this.selected = item;
  };
  constructor(_broadcaster: Broadcaster) {
    _broadcaster.subscribe(languageEvent => this.language = languageEvent);
    this.selected = 'Algorithms';
    this.arrayLength = 10;
    this.generatedArray = [];
    this.sortedArray = [];
  };
  ngOnInit() {
    console.log('playground component loaded');
  };
}
