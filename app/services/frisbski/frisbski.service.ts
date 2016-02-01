import {Injectable} from 'angular2/core';
import {FrisbskiEvent} from '../../interfaces/frisbskiEvent.interface';
import {FEVENTS} from './mock-frisbski';

@Injectable()
export class FrisbskiEventService {
  getEvents() {
    return Promise.resolve(FEVENTS);
  };
}
