import { CvEvent } from "../models";

export function removeHiddenEvents(events: CvEvent[]): CvEvent[] {
    return events
        .filter(event => event.hidden !== true)
        .map(event => {
            if (event.events) {
                return {
                    ...event,
                    events: removeHiddenEvents(event.events),
                }
            } else {
                return event
            }
        })
}

/** For a given single event, returns the value to display for its event count.
 * Will return null if supplied event has `countShown` set to `false`.
 */
export function countEvents(event: CvEvent) {
    if (event.countShown === true) {
        if (!event.events?.length) {
            return event.countable === false ? 0 : 1
        } else {
            if (event.countDepth === 'shallow') {
                return event.events.reduce(sum => sum + (event.countable === false ? 0 : 1), 0)
            } else {
                return event.events.reduce((sum, child) => sum + eventCountContribution(child), 0)
            }
        }
    } else {
        return null
    }
}

/** Returns number of events a given event will contribute to its parent's event count */
export function eventCountContribution(event: CvEvent): number {
    if (event.countThrough === false || !event.events?.length) {
        return event.countable === false ? 0 : 1
    }
    return event.events.reduce((sum, child) => {
        return sum + eventCountContribution(child)
    }, 0)
}

/** Returns total number of events in an array of events, including their children */
export function eventCountContributionSum(events: CvEvent[]): number {
    return events.reduce((sum, event) => sum + eventCountContribution(event), 0)
}
