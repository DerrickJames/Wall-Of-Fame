import {Component} from 'angular2/core';

interface Ninja {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1> 
        <h2>{{ninja.name}} details!</h2>
        <div><label>ID: </label>{{ninja.id}}</div>
        <div>
            <label>NAME: </label>
            <div><input [(ngModel)]="ninja.name" placeholder="Name"></div>
        </div>
    `
})

export class AppComponent {
    public title = 'Ninjas Wall Of Fame';

    public ninja: Ninja = {
        id: 1,
        name: 'Ricky James'
    };
}
