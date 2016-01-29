import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {NinjaService} from './ninja.service';
import {NinjasComponent} from './ninjas.component';
import {DashboardComponent} from './dashboard.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1> 
        <nav>
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['Ninjas']">Ninjas</a>
        </nav>
        <router-outlet></router-outlet>
    `,

    providers: [NinjaService],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/dashboard', name:'Dashboard', component: DashboardComponent, useAsDefault: true},
    {path: '/ninjas', name:'Ninjas', component: NinjasComponent},

])

export class AppComponent {
    public title  = 'Ninjas Wall Of Fame';

    constructor() {}
}

