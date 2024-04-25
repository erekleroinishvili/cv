import { Component, input } from '@angular/core';
import { CvEvent } from '../../models';

type DateRange = Pick<CvEvent, 'date' | 'start' | 'end'>

@Component({
  selector: 'erekle-range',
  standalone: true,
  imports: [],
  templateUrl: './range.component.html',
  styleUrl: './range.component.scss'
})
export class RangeComponent {
  event = input.required<DateRange>()
}
