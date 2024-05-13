export interface LabelLink {
    type: 'link'
    label: string
    url: string
}

export interface LabelText {
    type: 'text'
    label: string
}

export interface LabelImage {
    type: 'image'
    label: string
    url: string
    alt?: string
}

export interface LabelProgress {
    type: 'progress'
    label: string
    percent: number
}

export type LabelObject = LabelLink | LabelText | LabelImage | LabelProgress
export type LabelType = LabelObject['type']

export type Label =
    (string | LabelObject) |
    (string | LabelObject)[]
