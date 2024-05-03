import { Component, input } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';

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

  protected visible = false

}
