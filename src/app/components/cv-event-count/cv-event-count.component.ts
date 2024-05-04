import { Component, computed, input } from '@angular/core';
import { CvEvent } from '../../models';
import { countEvents } from '../../utils/events';

@Component({
  selector: 'erekle-cv-event-count',
  standalone: true,
  imports: [],
  templateUrl: './cv-event-count.component.html',
  styleUrl: './cv-event-count.component.scss'
})
export class CvEventCountComponent {
  event = input.required<CvEvent>()

  protected readonly eventCount = computed(() => countEvents(this.event()))

}
