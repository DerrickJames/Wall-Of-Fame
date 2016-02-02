import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

import {Ninja} from '../ninjas/ninja.interface';
import {NinjaService} from '../ninjas/ninja.service';
import {InitCapsPipe} from '../blocks/pipes/init-caps.pipe';
import {NinjaDetailComponent} from '../ninjas/ninja-detail.component';

@Component({
    templateUrl: 'src/app/dashboard/dashboard.component.html',
    pipes: [InitCapsPipe]
})

export class DashboardComponent {
    public ninjas: Ninja[];
    public selectedNinja: Ninja;

    constructor(private _ninjaService: NinjaService) { console.log('DashboardComponent Invoked');}

}

