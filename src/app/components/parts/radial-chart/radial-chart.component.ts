import { Component, Input } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-radial-chart',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './radial-chart.component.html',
  styleUrl: './radial-chart.component.scss'
})
export class RadialChartComponent {

  @Input('index') index: number = 0;
  @Input('delay') delay: number = 0.5;
  @Input('label') label: string = '';
  @Input('value') value: number = 50;
  @Input('size') size: number = 150;
  @Input('line-width') lineWidth: number = 15;
  @Input('animated') animated: boolean = false;

  constructor() {
  }

  getFullMaskRotation(): number {
    let rotation = 0;
    if (this.animated) {
      let val = this.value/100;
      rotation =  (val * 360) / 2;
    }
    return rotation;
  }

  getMaskShimRotation(): number {
    let rotation = 0;
    if (this.animated) {
      let val = this.value/100;
      rotation = (val * 360);
    }
    return rotation;
  }
}
