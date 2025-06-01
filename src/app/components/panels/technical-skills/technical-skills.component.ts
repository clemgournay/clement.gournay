import { Component } from '@angular/core';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Skill } from '@models/skill';
import { SharedModule } from '@shared/shared.module';
import { ProgressBarComponent } from "../../parts/progress-bar/progress-bar.component";

@Component({
  selector: 'panel-technical-skills',
  standalone: true,
  imports: [
    SharedModule,
    ProgressBarComponent
],
  templateUrl: './technical-skills.component.html',
  styleUrl: './technical-skills.component.scss'
})
export class TechnicalSkillsPanelComponent {

  skills: Array<Skill> = [
    {key: 'angular', name: 'Angular', value: 100, animated: false},
    {key: 'typescript', name: 'Typescript', value: 100, animated: false},
    {key: 'canvas', name: 'Canvas', value: 95, animated: false},
    {key: 'three', name: 'Three', value: 95, animated: false},
    {key: 'node', name: 'Node', value: 95, animated: false},
    {key: 'python', name: 'Python', value: 85, animated: false},
    {key: 'react', name: 'React/React Native [In progress]', value: 85, animated: false},
    {key: 'vue', name: 'Vue/Nuxt', value: 80, animated: false},
    {key: 'php', name: 'PHP', value: 70, animated: false},
    {key: 'cpp', name: 'C++', value: 60, animated: false},
    {key: 'design', name: 'Design', value: 60, animated: false},
  ];

  // Icons
  faGear = faGear;

  constructor() {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      for (let skill of this.skills) {
        skill.animated = true;
      }
    });
  }


}
