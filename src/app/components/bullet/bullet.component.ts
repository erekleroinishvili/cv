import { Component, HostBinding, HostListener, model, output } from '@angular/core';
import { Bullet } from '../../models';

@Component({
  selector: 'erekle-bullet',
  standalone: true,
  imports: [],
  templateUrl: './bullet.component.html',
  styleUrl: './bullet.component.scss'
})
export class BulletComponent {

  bullet = model.required<Bullet>()
  action = output<'expanded' | 'collapsed'>()

  @HostBinding('class.clickable')
  get clickable() {
    return this.bullet() === 'expanded' || this.bullet() === 'collapsed'
  }

  @HostListener('click')
  protected toggle() {
    if ( this.bullet() === 'collapsed' ) {
      this.bullet.set('expanded')
      this.action.emit('expanded')
    } else if (this.bullet() === 'expanded') {
      this.bullet.set('collapsed')
      this.action.emit('collapsed')
    }
  }

  protected togglex() {
    switch (this.bullet()) {
      case 'none': return this.bullet.set('bullet')
      case 'bullet': return this.bullet.set('collapsed')
      case 'collapsed': return this.bullet.set('expanded')
      case 'expanded': return this.bullet.set('none')
    }
  }

}
