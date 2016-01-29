import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {AppComponent} from './app.component';
import {NinjaService} from './ninja.service';

bootstrap(AppComponent, [ROUTER_PROVIDERS, NinjaService]);
