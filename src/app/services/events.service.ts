import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax'
import { CvEvent } from '../models';
import { firstValueFrom, map, share, tap } from 'rxjs';
import { removeHiddenEvents } from '../utils/events';
// import { EVENTS } from '../events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private eventsReply = ajax.getJSON<{events: CvEvent[]}>('events.json').pipe(
    map(reply => reply.events),
tap(events => console.log(`Events before`, events)),
    map(events => removeHiddenEvents(events)),
tap(events => console.log(`Events after`, events)),
    share({resetOnError: true}),
  )
  events = firstValueFrom(this.eventsReply)

  // events = fetch('events.json')
  //   .then(response => response.json())
  //   .then((reply: {events: CvEvent[]}) => reply.events)

}
