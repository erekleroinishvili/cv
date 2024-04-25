import { CvEvent } from "../models";

export function removeHiddenEvents(events: CvEvent[]): CvEvent[] {
    return events
        .filter(event => event.hidden !== true)
        .map(event => {
            if ( event.events ) {
                return {
                    ...event,
                    events: removeHiddenEvents(event.events),
                }
            } else {
                return event
            }
        })
}
