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
}
