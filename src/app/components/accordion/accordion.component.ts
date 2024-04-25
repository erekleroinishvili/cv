import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'erekle-accordion',
  standalone: true,
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  animations: [
    trigger('accordion', [
      state('false', style({height: 0})),
      transition('true <=> false', animate(300))
    ])
  ]
})
export class AccordionComponent {
  expanded = input.required<boolean>()

  @HostBinding('style')
  cssStyle: Partial<CSSStyleDeclaration> = {
    display: 'block',
    overflowY: 'hidden',
  }

  @HostBinding('@accordion')
  get accordionState() {
    return this.expanded()
  }

}
