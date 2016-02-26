'use strict';

import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Broadcaster} from '../../broadcaster';
import {LanguagePipe} from '../../pipes/language.pipe';

const mergeSort = require('./algorithms/mergeSort');
const selectionSort = require('./algorithms/selectionSort');
const insertionSort = require('./algorithms/insertionSort');
const shellSort = require('./algorithms/shellSort');
const quickSort = require('./algorithms/quickSort');
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
  private sortingHelper(sortFunc) {
    this.sortedArray = [];
    let tempDate = new Date();
    sortFunc(this.generatedArray).then(result=> {
      this.sortedArray = result
      this.duration = new Date().getTime() - tempDate.getTime();
      if (result.length >= 5000) {
        console.log('Sorted array: ', result)
      }
    });
  };
  generateArray() {
    this.sortedArray = [];
    this.generatedArray = arrayHelper.makeRandomizedArray(this.arrayLength);
    if (this.generatedArray.length >= 5000) {
      console.log('Generated array: ', this.generatedArray);
    }
  };
  generateRange() {
    this.sortedArray = [];
    this.generatedArray = arrayHelper.makeShuffledRangeArray(this.arrayLength);
    if (this.generatedArray.length >= 5000) {
      console.log('Generated array: ', this.generatedArray);
    }
  }
  mergeSort() {
    this.sortingHelper(mergeSort.sortAsync);
  };
  mergeSortBottomUp() {
    this.sortingHelper(mergeSort.sortBottomUpAsync);
  };
  selectionSort() {
    this.sortingHelper(selectionSort.sortAsync);
  };
  insertionSort() {
    this.sortingHelper(insertionSort.sortAsync);
  };
  shellSort() {
    this.sortingHelper(shellSort.sortAsync);
  };
  quickSort() {
    this.sortingHelper(quickSort.sortAsync);
  };
  dijkstraQuickSort(){
    this.sortingHelper(quickSort.dijkstraSortAsync)
  }
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
