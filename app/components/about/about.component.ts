'use strict';

import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {LanguagePipe} from '../../pipes/language.pipe';
import {Broadcaster} from '../../broadcaster';

let getAge = type => {
  let birth = new Date(1984,3,15);
  let now = new Date();
  let timediff = now.getTime()-birth.getTime();
  switch (type){
    case 'vikna':
      return Math.floor(timediff / (1000*60*60*24*7));
    case 'mánaða':
      console.log('now ', now.getFullYear());
      console.log('birth ', birth.getFullYear());
      return ((now.getUTCFullYear() - birth.getUTCFullYear()) * 12) + now.getMonth()-birth.getMonth();
    case 'árs':
      return Math.abs(new Date(Date.now()-birth.getTime()).getUTCFullYear()-1970);
    default:
      return Math.floor(timediff / (1000*60*60*24));
  }
}

@Component({
  selector: 'about',
  templateUrl: 'components/about/about.template.html',
  styleUrls: ['components/about/about.style.css'],
  pipes: [LanguagePipe]
})
export class AboutComponent implements OnInit {
  public language : string;
  public age : number;
  public ageType : string;
  constructor(_broadcaster: Broadcaster) {
    this.ageType = 'vikna';
    this.age = getAge(this.ageType);
    _broadcaster.subscribe(languageEvent => this.language = languageEvent);
  }
  toggleAgeType(){
    switch (this.ageType){
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
  }
  ngOnInit(){
    console.log('about component loaded');
  };
}
