'use strict';

import {Component,OnInit} from 'angular2/core';
import {Broadcaster} from '../../broadcaster';
import {LanguagePipe} from '../../pipes/language.pipe';
import {FrisbskiEvent} from '../../interfaces/frisbskiEvent.interface';
import {FrisbskiEventService} from '../../services/frisbski/frisbski.service';

@Component({
  selector: 'frisbski',
  templateUrl: 'components/frisbski/frisbski.template.html',
  styleUrls: ['components/frisbski/frisbski.style.css'],
  pipes: [LanguagePipe],
  providers: [FrisbskiEventService]
})
export class FrisbskiComponent implements OnInit {
  public language : String;
  public selected : String;
  public events : FrisbskiEvent[];
  public event : FrisbskiEvent;
  private eventNumber : number;
  select(item){
    console.log('item was ', item);
    this.selected = item;
  };
  constructor(_broadcaster: Broadcaster, private _frisbskiEventService : FrisbskiEventService) {
    _broadcaster.subscribe(languageEvent => this.language = languageEvent);
    this.selected = 'Events';
  };
  getEvents(){
    this._frisbskiEventService.getEvents().then(events => {
      this.events = events;
      this.eventNumber = Math.round(Math.random()*(events.length - 1));
      this.event = events[this.eventNumber];
    });
  };
  previousEvent(){
    this.eventNumber = this.eventNumber===0?(this.events.length-1):(this.eventNumber - 1);
    this.event = this.events[this.eventNumber];
  };
  nextEvent(){
    this.eventNumber = this.eventNumber===(this.events.length-1)?0:(this.eventNumber + 1);
    this.event = this.events[this.eventNumber];
  };
  ngOnInit(){
    this.getEvents();
    console.log('frisbski component loaded');
  };
}
