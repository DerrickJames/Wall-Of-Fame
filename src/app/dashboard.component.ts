import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

import {Ninja} from './ninja.interface';
import {NinjaService} from './ninja.service';
import {InitCapsPipe} from './init-caps.pipe';
import {NinjaDetailComponent} from './ninja-detail.component';

@Component({
    selector: 'dashboard',
    templateUrl: 'src/app/dashboard.component.html',
    pipes: [InitCapsPipe]
})

export class DashboardComponent {
    public ninjas: Ninja[];
    public selectedNinja: Ninja;

    constructor(private _ninjaService: NinjaService) { console.log('DashboardComponent Invoked');}

}

