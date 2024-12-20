import { Component, input } from '@angular/core';
import type { Label, LabelObject } from '../../models';
import { normalizeLabel } from '../../utils/label.utils';
import { ImageLinkComponent } from '../image-link/image-link.component';
import { ProgressComponent } from '../progress/progress.component';

@Component({
  selector: 'erekle-label',
  standalone: true,
  imports: [
    ImageLinkComponent,
    ProgressComponent,
  ],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss'
})
export class LabelComponent {

  label = input.required<(LabelObject)[], Label>({transform: normalizeLabel})

}
