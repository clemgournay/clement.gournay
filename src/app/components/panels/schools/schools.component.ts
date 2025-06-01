import { Component } from '@angular/core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Period } from '@models/period';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'panel-schools',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './schools.component.html',
  styleUrl: './schools.component.scss'
})
export class SchoolsPanelComponent {

  graduations: Array<Period> = [
    {start: 2014, end: 2016, place: 'ARC Academy Japanese School, Japan', type: 'Japanese proficiency test N2'},
    {start: 2013, end: 2014, place: 'ULCO Calais, France', type: 'IT Licence'},
    {start: 2011, end: 2013, place: 'IUT Calais, France', type: 'DUT - 2 years professional IT diploma'},
    {start: 2008, end: 2010, place: 'Lycée Mariette, France', type: 'High school diploma in sciences with english course'},
  ];

  // icon
  faGraduationCap = faGraduationCap;
}
