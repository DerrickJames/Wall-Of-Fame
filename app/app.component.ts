import {Component} from 'angular2/core';

interface Ninja {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1> 
        <h2>Ninjas List</h2>
        <ul class="list-items">
            <li *ngFor="#ninja of ninjas" 
                (click)="onSelect(ninja)"
                [class.selected]="ninja === selectedNinja">

                <span class="badge">{{ninja.id}}</span> {{ninja.name}}
            </li>
        </ul>

        <div *ngIf="selectedNinja">
            <h2>{{selectedNinja.name}} details!</h2>
            <div><label>ID: </label>{{selectedNinja.id}}</div>
            <div>
                <label>NAME: </label>
                <div><input [(ngModel)]="selectedNinja.name" placeholder="Name"></div>
            </div>
        </div>
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
    `]
})

export class AppComponent {
    public title  = 'Ninjas Wall Of Fame';
    public ninjas = NINJAS;

    public selectedNinja: Ninja;

    onSelect(ninja: Ninja) { this.selectedNinja = ninja; }
}

var NINJAS: Ninja[] = [
    { "id": 1, "name": "Derrick James" },
    { "id": 2, "name": "Athman Gude" },
    { "id": 3, "name": "Ronny Nyaga" },
    { "id": 4, "name": "Morris Maina" },
    { "id": 5, "name": "James Mshai" },
    { "id": 6, "name": "Steve Kiriba" },
    { "id": 7, "name": "Steve Murathe" },
    { "id": 8, "name": "Mary Nunga" },
    { "id": 9, "name": "Leone Munene" },
    { "id": 10, "name": "Lavender Naomi" }
];
