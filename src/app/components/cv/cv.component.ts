import { Component, inject } from '@angular/core';
import { from } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop'
import { EventsService } from '../../services/events.service';
import { CvEventComponent } from '../cv-event/cv-event.component';

@Component({
  selector: 'erekle-cv',
  standalone: true,
  imports: [
    CvEventComponent,
  ],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent {

  protected readonly events = toSignal(from(inject(EventsService).events))

}
