import { Directive, ElementRef, NgZone, computed, inject, input } from '@angular/core';
import { switchMap } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop'
import { htmlElementSize } from '../utils/html-element-size';

@Directive({
  selector: '[erekleElementSize]',
  standalone: true,
  exportAs: 'erekleElementSize',
})
export class ElementSizeDirective {

  public readonly target = input.required<HTMLElement | string>({alias: 'erekleElementSize'})
  private readonly hostElement: HTMLElement = inject(ElementRef).nativeElement
  private readonly ngZone = inject(NgZone)

  private readonly size$ = toObservable(this.target).pipe(
    switchMap(target => htmlElementSize(target || this.hostElement, this.ngZone)),
  )

  readonly fullSize = toSignal(this.size$)

  readonly borderBoxHeight = computed(() => this.fullSize()?.borderBoxHeight ?? 0)
  readonly borderBoxWidth = computed(() => this.fullSize()?.borderBoxWidth ?? 0)
  readonly contentBoxHeight = computed(() => this.fullSize()?.contentBoxHeight ?? 0)
  readonly contentBoxWidth = computed(() => this.fullSize()?.contentBoxWidth ?? 0)

}
