import { Component } from '@angular/core';
import { RadialChartComponent } from '@components/parts/radial-chart/radial-chart.component';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Skill } from '@models/skill';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'panel-personal-skills',
  standalone: true,
  imports: [
    SharedModule,
    RadialChartComponent
  ],
  templateUrl: './personal-skills.component.html',
  styleUrl: './personal-skills.component.scss'
})
export class PersonalSkillsPanelComponent {

  skills: Array<Skill> = [
    {key: 'leadership', name: 'Leadership', value: 90, animated: false},
    {key: 'initiativity', name: 'Initativity', value: 95, animated: false},
    {key: 'creativity', name: 'Creativity', value: 95, animated: false},
  ];

  // Icons
  faUser = faUser;

  constructor() {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      for (let skill of this.skills) {
        skill.animated = true;
      }
    })
  }

}
