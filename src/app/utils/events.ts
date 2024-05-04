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

export function eventCountContribution(event: CvEvent): number {
    if (event.countThrough === false || !event.events?.length) {
        return event.countable === false ? 0 : 1
    }
    return event.events.reduce((sum, child) => {
        return sum + eventCountContribution(child)
    }, 0)
}
