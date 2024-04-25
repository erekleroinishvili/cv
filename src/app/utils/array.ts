type AsArray<T> = T extends ReadonlyArray<unknown> ? T : [T]

export const asArray = <T>(value: T): AsArray<T> => (Array.isArray(value) ? value : [value]) as AsArray<T>
