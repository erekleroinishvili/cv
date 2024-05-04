import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AddToSocialMediaComponent } from './components/add-to-social-media/add-to-social-media.component';

@Component({
  selector: 'erekle-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    AddToSocialMediaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
