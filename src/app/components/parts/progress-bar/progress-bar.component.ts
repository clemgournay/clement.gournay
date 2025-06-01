import { Component, Input } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {

  @Input('index') index: number = 0;
  @Input('delay') delay: number = 0.5;
  @Input('value') value: number = 0;
  @Input('animated') animated: boolean = false;

  getValue(): number {
    let value =  0;
    if (this.animated) value = this.value;
    return value;
  }


}
