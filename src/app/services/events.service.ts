import { Injectable } from '@angular/core';
import { EVENTS } from '../events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  events = Promise.resolve(EVENTS)

}
