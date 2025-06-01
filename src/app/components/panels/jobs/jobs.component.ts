import { Component } from '@angular/core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Period } from '@models/period';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'panel-jobs',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsPanelComponent {

  jobs: Array<Period> = [
    {start: 2018, end: 2025, place: 'GEARWORKS Inc., France', type: 'Fullstack Freelance'},
    {start: 2016, end: 2018, place: 'FASTCODING Inc., Japan', type: 'Front-end engineer, Full time'},
    {start: 2014, end: 2016, place: 'PLATE Inc., Japan', type: 'Front-end engineer, Half-time'},
    {start: 2013, end: 2013, place: 'National Institute of Technology, Sendai, Japan', type: '3 month Internship, Research in IT'}
  ];

  // Icons
  faBuilding = faBuilding;
}
