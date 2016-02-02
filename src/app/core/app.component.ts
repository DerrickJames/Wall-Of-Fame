import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ROUTES} from './routes';
import {NinjaService} from '../ninjas/ninja.service';

@Component({
    selector: 'my-app',
    templateUrl: 'src/app/core/app.component.html',
    providers: [NinjaService],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig(ROUTES)

export class AppComponent {
    public title  = 'Ninjas Wall Of Fame';

    constructor() {}
}

