import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {AppComponent} from './core/app.component';
import {NinjaService} from './ninjas/ninja.service';

bootstrap(AppComponent, [ROUTER_PROVIDERS, NinjaService]);
