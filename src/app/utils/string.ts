import { isTruthy } from "./type-guards"

const DEFAULT_PATHS_SEPARATOR = '/'

export function joinPaths(path1: string, path2: string, separator?: string): string
export function joinPaths(paths: string[], separator?: string): string
export function joinPaths(p1: string | string[], p2?: string, p3?: string): string {
    const separator = (Array.isArray(p1) ? p2 : p3) ?? DEFAULT_PATHS_SEPARATOR
    const paths = (Array.isArray(p1) ? p1 : [p1, p2])
        .filter(isTruthy)
        .map((path, index) => index === 0 ? path : removePrefixAll(path, separator))
        .map((path, index, paths) => index + 1 === paths.length ? path : removeSuffixAll(path, separator))

    return paths.join(separator)
}

export function removeSuffixAll(s: string, suffix: string) {
    if ( ! suffix ) return s
    while (s.endsWith(suffix)) {
        s = s.slice(0, -suffix.length)
    }
    return s
}

export function removePrefixAll(s: string, prefix: string) {
    if ( ! prefix ) return s
    while (s.startsWith(prefix)) {
        s = s.slice(prefix.length)
    }
    return s
}
