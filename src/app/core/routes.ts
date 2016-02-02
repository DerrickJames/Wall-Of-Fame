import {NinjasComponent} from '../ninjas/ninjas.component';
import {DashboardComponent} from '../dashboard/dashboard.component';

export var ROUTES = [
    {
        path: '/ninjas/...',
        name:'Ninjas',
        component: NinjasComponent,
        useAsDefault: true
    },

    {
        path: '/dashboard',
        name:'Dashboard',
        component: DashboardComponent,
    }
];
