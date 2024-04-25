import { isPlatformServer } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { fromEvent, map, of, share, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollListenerService {

  private readonly isServer = isPlatformServer(inject(PLATFORM_ID))

  verticalScroll$ = this.isServer
    ? of(0)
    : fromEvent(document, 'scroll', {passive: true}).pipe(
      share({resetOnRefCountZero: true}),
      startWith(null),
      map(() => window.scrollY),
    )

}
