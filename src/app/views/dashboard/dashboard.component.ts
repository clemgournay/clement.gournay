import { Component } from '@angular/core';
import { IdentityPanelComponent } from '@components/panels/identity/identity.component';
import { SharedModule } from '@shared/shared.module';
import { TechnicalSkillsPanelComponent } from '@components/panels/technical-skills/technical-skills.component';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { HobbiesPanelComponent } from '@components/panels/hobbies/hobbies.component';
import { PersonalSkillsPanelComponent } from '@components/panels/personal-skills/personal-skills.component';
import { SchoolsPanelComponent } from '@components/panels/schools/schools.component';
import { JobsPanelComponent } from '@components/panels/jobs/jobs.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SharedModule,
    IdentityPanelComponent,
    PersonalSkillsPanelComponent,
    TechnicalSkillsPanelComponent,
    HobbiesPanelComponent,
    PersonalSkillsPanelComponent,
    SchoolsPanelComponent,
    JobsPanelComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  // Icons
  faCircleUser = faCircleUser;

}
