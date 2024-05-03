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

export type LabelObject = LabelLink | LabelText | LabelImage

export type Label =
    (string | LabelObject) |
    (string | LabelObject)[]
