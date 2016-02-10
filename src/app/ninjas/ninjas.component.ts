import {Component} from "angular2/core";
import {RouteConfig, RouterOutlet} from "angular2/router";

import {NINJASROUTES} from "./ninjas.routes";

@Component({
    templateUrl: "src/app/ninjas/ninjas.component.html",
    styleUrls: ["src/app/ninjas/ninjas.component.css"],
    directives: [RouterOutlet],
})

@RouteConfig(NINJASROUTES)

export class NinjasComponent {  }
