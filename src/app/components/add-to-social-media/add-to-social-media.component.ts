import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'erekle-add-to-social-media',
  standalone: true,
  imports: [],
  templateUrl: './add-to-social-media.component.html',
  styleUrl: './add-to-social-media.component.scss'
})
export class AddToSocialMediaComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const w = window as Window & typeof globalThis & {runAddToAny?: () => void, addToAnyWasRun?: boolean}
    if ( w.runAddToAny ) {
      w.runAddToAny()
    } else {
      w.addToAnyWasRun = false
    }
  }
}
