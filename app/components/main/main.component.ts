'use strict';

import {Component,OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AboutComponent} from '../about/about.component';
import {FrisbskiComponent} from '../frisbski/frisbski.component';
import {WritingComponent} from '../writing/writing.component';
import {PlaygroundComponent} from '../playground/playground.component';
import {LanguagePipe} from '../../pipes/language.pipe';
import {Broadcaster} from '../../broadcaster';

@Component({
  selector: 'main',
  templateUrl: 'components/main/main.template.html',
  styleUrls: ['components/main/main.style.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: [LanguagePipe],
  providers: [Broadcaster]
})
@RouteConfig([
  {path: '/', name: 'About', component: AboutComponent, useAsDefault:true},
  {path: '/frisbski', name: 'Frisbski', component: FrisbskiComponent },
  {path: '/writing', name: 'Writing', component: WritingComponent },
  {path: '/playground', name: 'Playground', component: PlaygroundComponent }
])
export class MainComponent implements OnInit {
  public hideMenuOnMobile;
  public languageFlagUrl;
  public language;
  public broadcaster;
  constructor(broadcaster: Broadcaster) {
    this.hideMenuOnMobile = true;
    this.languageFlagUrl = "assets/flags/union-jack.png";
    this.language = 'islenska';
    this.broadcaster = broadcaster;
  };
  toggleMenu() {
    this.hideMenuOnMobile = !this.hideMenuOnMobile;
  };
  toggleLanguage() {
    if (this.language==='islenska'){
      this.languageFlagUrl = "assets/flags/icelandic.png";
      this.language = 'english';
    }
    else{
      this.languageFlagUrl = "assets/flags/union-jack.png";
      this.language = 'islenska';
    }
    this.broadcaster.next(this.language);
  }
  ngOnInit() {
    console.log('main component loaded');
  };
}
