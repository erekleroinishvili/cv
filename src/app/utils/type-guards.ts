export const isTruthy = <T>(value: T): value is Exclude<T, false | '' | 0 | null | undefined> => !! value

export const isFalsy = <T>(value: T): value is Extract<T, false | '' | 0 | null | undefined> => ! value
