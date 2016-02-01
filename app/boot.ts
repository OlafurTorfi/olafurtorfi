'use strict';

import {provide} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser'
import {MainComponent} from './components/main/main.component';
import {
  ROUTER_PROVIDERS,
  LocationStrategy,
  HashLocationStrategy
} from 'angular2/router';

bootstrap(MainComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]).catch(err => console.error(err));;
