import { Component } from '@angular/core';
import { faGuitar, faHeadphones, faHourglass, faLaptopCode, faMusic, faPen } from '@fortawesome/free-solid-svg-icons';
import { Hobby } from '@models/hobby';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'panel-hobbies',
  standalone: true,
  imports: [
    SharedModule,
  ],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss'
})
export class HobbiesPanelComponent {

  hobbies: Array<Hobby> = [
    {key: 'programming', icon: faLaptopCode, name: 'Programming'},
    {key: 'piano', icon: faMusic, name: 'Piano'},
    {key: 'mao', icon: faHeadphones, name: 'MAO'},
    {key: 'drawing', icon: faPen, name: 'Drawing'},
  ];

  // Icons
  faHourglass = faHourglass;

}
