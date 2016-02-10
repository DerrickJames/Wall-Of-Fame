import {Component} from "angular2/core";
import {Ninja} from "./ninja.interface";
import {InitCapsPipe} from "../blocks/pipes/init-caps.pipe";

@Component({
    selector: "ninja-detail",
    inputs: ["ninja"],
    templateUrl: "src/app/ninjas/ninja-detail.component.html",
    pipes: [InitCapsPipe]
})

export class NinjaDetailComponent {
    public ninja: Ninja;
}
