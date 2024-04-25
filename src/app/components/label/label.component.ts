import { Component, input } from '@angular/core';
import type { Label, LabelLink, LabelText } from '../../models';
import { normalizeLabel } from '../../utils/label.utils';

@Component({
  selector: 'erekle-label',
  standalone: true,
  imports: [],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss'
})
export class LabelComponent {

  label = input.required<(LabelLink | LabelText)[], Label>({transform: normalizeLabel})

}
