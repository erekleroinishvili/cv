export interface LabelLink {
    type?: 'link'
    label: string
    url: string
}

export interface LabelText extends Omit<Partial<LabelLink>, 'type'> {
    type: 'text'
    label: string
}

export type Label =
    (string | LabelLink | LabelText) |
    (string | LabelLink | LabelText)[]
