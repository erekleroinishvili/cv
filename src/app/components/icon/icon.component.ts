import { Component, input } from '@angular/core';
import { ICONS_HOME } from '../../app.settings';
import { joinPaths } from '../../utils/string';

@Component({
  selector: 'erekle-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  src = input.required<string, string>({transform: addRoot})
  alt = input<string, string | null>(this.processAltText(null), {transform: this.processAltText})

  private processAltText(alt: string | null) {
    if (! alt) return 'Icon'
    else return 'Icon: ' + alt
  }

}

function addRoot(iconPath: string) {
  return joinPaths(ICONS_HOME, iconPath, '/')
}
