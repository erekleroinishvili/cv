import { Label, LabelObject, LabelText } from "../models";

const textLabelFrom = (text: string): LabelText => {
    return {
        type: 'text',
        label: text
    }
}

export const normalizeLabel = (label: Label): Array<LabelObject> => {
    if ( Array.isArray(label) ) {
        return label.flatMap(normalizeLabel)
    } else if ( typeof label === 'string' ) {
        return [textLabelFrom(label)]
    } else {
        return [label]
    }
}
