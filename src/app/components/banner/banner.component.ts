import { animate, animateChild, group, query, state, style, transition, trigger } from '@angular/animations';
import { Component, input, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'erekle-banner',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
  ],
  animations: [
    trigger('fade', [
      state('void', style({
        opacity: 0,
      })),
      transition(':enter, :leave', [
        group([
          animate(300),
          query('@popup', animateChild())
        ])
      ])
    ]),

    trigger('popup', [
      state('void', style({
        transform: 'scale(0)',
        opacity: 0,
      })),
      transition(':enter, :leave', animate(300))
    ])
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

  visible = model(true)
  zIndex = input<number | 'auto'>('auto')

}
