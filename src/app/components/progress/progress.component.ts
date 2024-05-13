import { Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'erekle-progress',
  standalone: true,
  imports: [],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent {

  percentage = input.required<number>()
  fgcolor = input('var(--color-basic, darkgray)')
  bgcolor = input('var(--color-disabled, lightgrey)')
  tooltip = input<string>()

  @HostBinding('style.background-color')
  get containerBackground() {
    return this.bgcolor()
  }

  @HostBinding()
  get title() {
    return this.tooltip() ?? (this.percentage() + '%')
  }

}
