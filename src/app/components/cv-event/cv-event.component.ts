import { Component, HostBinding, computed, input, signal } from '@angular/core';
import type { Bullet, CvEvent } from '../../models';
import { AccordionComponent } from '../accordion/accordion.component';
import { BulletComponent } from '../bullet/bullet.component';
import { IconComponent } from '../icon/icon.component';
import { LabelComponent } from '../label/label.component';
import { LabelStringPipe } from '../../pipes/label-string.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RangeComponent } from '../range/range.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

type UserExpandStatus = 'initial' | 'collapsed' | 'expanded' | 'expanded-more'

@Component({
  selector: 'erekle-cv-event',
  standalone: true,
  imports: [
    AccordionComponent,
    BulletComponent,
    IconComponent,
    LabelComponent,
    LabelStringPipe,
    MatButtonModule,
    MatIconModule,
    RangeComponent,
  ],
  templateUrl: './cv-event.component.html',
  styleUrl: './cv-event.component.scss',
  animations: [
    trigger('retire', [
      state('void', style({
        transform: 'translate3d(50px, 0, 0)',
        opacity: 0,
      })),
      transition(':leave', animate(300))
    ])
  ]
})
export class CvEventComponent {
  event = input.required<CvEvent>()
  level = input(0)

  private readonly marginTop = computed(() => 20 / Math.pow(1.5, this.level()) + 'px')
  private readonly marginLeft = computed(() => this.level() ? '24px' : '0px')
  private readonly indentCss = computed<Partial<CSSStyleDeclaration>>(() => ({
    marginBlockStart: this.marginTop(),
    marginInlineStart: this.marginLeft(),
  }))

  @HostBinding('style')
  get indentation() {
    return this.indentCss()
  }

  @HostBinding('style.--level')
  get indent() {
    return this.level()
  }

  protected readonly userExpanded = signal<UserExpandStatus>('initial')
  protected readonly expanded = computed(() => {
    switch (this.userExpanded()) {
      case 'initial': return this.event().autoExpand !== false
      case 'collapsed': return false
      default: return true
    }
  })

  protected readonly showMoreButton = computed(() => {
    return this.moreEvents()?.length && this.expanded() && this.userExpanded() !== 'expanded-more'
  })

  protected readonly bullet = computed<Bullet>(() => {
    if ( ! this.event().events?.length ) {
      return this.level() > 0 ? 'bullet' : 'none'
    } else {
      return this.expanded() ? 'expanded' : 'collapsed'
    }
  })

  protected readonly minEvents = computed(() => {
    return this.event().events?.slice(0, Math.max(1, this.event().expand || Infinity))
  })

  protected readonly moreEvents = computed(() => {
    return this.event().events?.slice(this.minEvents()?.length)
  })

}
