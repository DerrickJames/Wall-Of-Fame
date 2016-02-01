import {NINJAS} from './ninjas.mock';
import {Injectable} from 'angular2/core';

@Injectable()
export class NinjaService {
    getNinjas() {
        return Promise.resolve(NINJAS);
    }
}
