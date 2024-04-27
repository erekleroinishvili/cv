import { NgZone, inject } from "@angular/core"
import { fromEventPattern } from "rxjs"
import { toNgZone } from "./rxjs-ngzone"

export function htmlElementSize(target: HTMLElement | string, ngZone = inject(NgZone)) {
    return htmlElementSizeNoZone(target).pipe(
        toNgZone(ngZone),
    )
}

export function htmlElementSizeNoZone(target: HTMLElement | string) {
    return fromEventPattern(
        handler => {
            const resizeObserver = new ResizeObserver(entries => {
                handler(entries[0])
            })

            const targetElement = typeof target === 'string'
                ? document.getElementById(target)!
                : target
            resizeObserver.observe(targetElement)
            return resizeObserver
        },
        (handler, resizeObserver: ResizeObserver) => {
            resizeObserver.disconnect()
        },
        (entry: ResizeObserverEntry) => ({
            borderBoxHeight: entry.borderBoxSize[0].blockSize,
            borderBoxWidth: entry.borderBoxSize[0].inlineSize,
            contentBoxHeight: entry.contentBoxSize[0].blockSize,
            contentBoxWidth: entry.contentBoxSize[0].inlineSize,
        })
    )
}
