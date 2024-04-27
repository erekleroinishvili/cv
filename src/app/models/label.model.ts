export interface LabelLink {
    type?: 'link'
    label: string
    url: string
}

export interface LabelText extends Omit<Partial<LabelLink>, 'type'> {
    type: 'text'
    label: string
}

export type LabelObject = LabelLink | LabelText

export type Label =
    (string | LabelObject) |
    (string | LabelObject)[]
