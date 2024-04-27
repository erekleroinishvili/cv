import { NgZone } from "@angular/core";
import { MonoTypeOperatorFunction, Observable } from "rxjs";

/** Move observable into NgZone */
export function toNgZone<T>(ngZone: NgZone): MonoTypeOperatorFunction<T> {
    return source => new Observable(subscriber => {
        source.subscribe({
            next: value => ngZone.run(() => subscriber.next(value)),
            error: error => ngZone.run(() => subscriber.error(error)),
            complete: () => ngZone.run(() => subscriber.complete())
        })
    })
}
