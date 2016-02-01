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
  select(item) {
    console.log('item was ', item);
    this.selected = item;
  };
  constructor(_broadcaster: Broadcaster) {
    _broadcaster.subscribe(languageEvent => this.language = languageEvent);
    this.selected = 'Algorithms';
  };
  ngOnInit() {
    console.log(JSON.stringify(mergeSort.sort(arrayHelper.makeRandomizedArray(10))));
    console.log('playground component loaded');
  };
}
