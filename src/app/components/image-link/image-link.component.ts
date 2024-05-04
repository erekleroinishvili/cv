import { Component, computed, input } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { removeTags } from '../../utils/html';

@Component({
  selector: 'erekle-image-link',
  standalone: true,
  imports: [
    BannerComponent,
  ],
  templateUrl: './image-link.component.html',
  styleUrl: './image-link.component.scss'
})
export class ImageLinkComponent {

  src = input.required<string>()
  alt = input.required<string>()

  protected readonly title = computed(() => {
    return 'Popup Image' + (
      this.alt()
        ? ': ' + removeTags(this.alt())
        : ''
    )
  })

  protected visible = false

}
