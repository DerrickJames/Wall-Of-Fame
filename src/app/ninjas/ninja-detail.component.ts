import {Component} from 'angular2/core';
import {Ninja} from './ninja.interface';
import {InitCapsPipe} from '../blocks/pipes/init-caps.pipe';

@Component({
    selector: 'ninja-detail',
    inputs: ['ninja'],
    template: `
        <div *ngIf="ninja">
            <h2>{{ninja.name | initCaps}} details!</h2>
            <div><label>ID: </label>{{ninja.id}}</div>
            <div>
                <label>NAME: </label>
                <div><input [(ngModel)]="ninja.name" placeholder="Name"></div>
            </div>
        </div>
    `,
    pipes: [InitCapsPipe]
})

export class NinjaDetailComponent {
    public ninja: Ninja;
}
