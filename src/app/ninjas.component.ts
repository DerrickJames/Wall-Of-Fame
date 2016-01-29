import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

import {Ninja} from './ninja.interface';
import {NinjaService} from './ninja.service';
import {InitCapsPipe} from './init-caps.pipe';
import {NinjaDetailComponent} from './ninja-detail.component';

@Component({
    selector: 'my-ninjas',
    template: `
        <h2>Ninjas List</h2>
        <ul class="list-items">
            <li *ngFor="#ninja of ninjas" 
                (click)="onSelect(ninja)"
                [class.selected]="ninja === selectedNinja">

                <span class="badge">{{ninja.id}}</span> {{ninja.name | initCaps}}
            </li>
        </ul>

        <ninja-detail [ninja]="selectedNinja"></ninja-detail>
    `,

    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }

        .list-items {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
        }

        .list-items li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0em;
            height: 1.6em;
            border-radius: 4px;
        }

        .list-items li.selected:hover {
            color: white;
        }

        .list-items li:hover {
            color: #607D8B;
            background-color: #EEE;
            left: .1em;
        }

        .list-items .text {
            position: relative;
            top: -3px;
        }

        .list-items .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0em 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0px 0px 4px;
        }
    `],

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

