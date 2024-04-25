import { Component, HostBinding, inject } from '@angular/core';
import { ScrollListenerService } from '../../services/scroll-listener.service';
import { distinctUntilChanged, map, throttleTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'erekle-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @HostBinding('class.shadow')
  private shadow = false

  private readonly scrolled$ = inject(ScrollListenerService).verticalScroll$.pipe(
    throttleTime(100, undefined, {leading: false, trailing: true}),
    map(verticalScroll => verticalScroll > 0),
    distinctUntilChanged(),
    takeUntilDestroyed(),
  ).subscribe(shadow => this.shadow = shadow)
}
