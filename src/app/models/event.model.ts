import { Label } from "./label.model"

export interface CvEvent {
    hidden?: boolean

    label: Label
    icon?: string

    start?: number | string | null
    end?: number | string | null
    date?: number | string | null

    expand?: number
    autoExpand?: boolean
    events?: CvEvent[] | null

    /** If this event should display number of child events.
     * Default is false */
    countShown?: boolean
    /** If child event count should be shallow (top-level children only) or deep (leafs only).
     * Default is 'deep' */
    countDepth?: 'shallow' | 'deep'
    /** If this event should contribute to parents count of child events.
     * Default is true
     */
    countable?: boolean
    /** When contributing to parent count, should its children be counted
     * Default is true
    */
    countThrough?: boolean
}
