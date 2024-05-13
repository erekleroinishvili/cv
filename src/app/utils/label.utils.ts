import { Label, LabelObject, LabelText, LabelType } from "../models";
import { isTruthy } from "./type-guards";

const textLabelFrom = (text: string): LabelText => {
    return {
        type: 'text',
        label: text
    }
}

export const normalizeLabel = (label: Label): Array<LabelObject> => {
    if (Array.isArray(label)) {
        return label.flatMap(normalizeLabel)
    } else if (typeof label === 'string') {
        return [textLabelFrom(label)]
    } else {
        return [label]
    }
}

export const labelToString = (label: Label): string => {
    const ignoreLabelTypes: LabelType[] = []
    return normalizeLabel(label)
        .filter(entry => ignoreLabelTypes.includes(entry.type))
        .map(entry => entry.label)
        .filter(isTruthy)
        .join('')
}
