import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

import {Ninja} from './ninja.interface';
import {NinjaService} from './ninja.service';
import {InitCapsPipe} from '../blocks/pipes/init-caps.pipe';
import {NinjaDetailComponent} from './ninja-detail.component';

@Component({
    selector: 'my-ninjas',
    templateUrl: 'src/app/ninjas/ninjas.component.html',
    styleUrls: ['src/app/ninjas/ninjas.component.css'],
    directives: [NinjaDetailComponent],
    pipes: [InitCapsPipe]
})

export class NinjasComponent implements OnInit {
    public ninjas: Ninja[];
    public selectedNinja: Ninja;

    constructor(private _ninjaService: NinjaService) { console.log('NinjasComponent Invoked');}

    ngOnInit() {
        this.getNinjas();
    }

    onSelect(ninja: Ninja) { this.selectedNinja = ninja; }

    getNinjas() {
        this._ninjaService.getNinjas().then(ninjas => this.ninjas = ninjas);
    }
}

