import { Pipe, PipeTransform } from '@angular/core';
import { Label } from '../models';
import { labelToString } from '../utils/label.utils';

@Pipe({
  name: 'labelString',
  standalone: true
})
export class LabelStringPipe implements PipeTransform {

  transform(label: Label): string {
    return labelToString(label)
  }

}
