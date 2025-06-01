import { Component } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { faAt, faBirthdayCake, faCircleUser, faCity, faGlobe, faIdCard, faInfoCircle, faMapLocation, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Field } from '@models/field';

@Component({
  selector: 'panel-identity',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './identity.component.html',
  styleUrl: './identity.component.scss'
})
export class IdentityPanelComponent {

  fields: Array<Field> = [
    {icon: faMapLocationDot, value: '38B Grand Place Louis le Sénéchal'},
    {icon: faCity, value: '62250 MARQUISE'},
    {icon: faGlobe, value: 'FRANCE'},
    {icon: faBirthdayCake, value: '17/06/1993'},
    {icon: faAt, value: 'clemgournay@gmail.com', link: 'mailto:clemgournay@gmail.com'},
    {icon: faPhone, value: '+33 7 69 82 93 51', link: 'tel:+33 7 69 82 93 51'},
    {icon: faInfoCircle, value: 'Intend to live near Tokyo by September 2025', highlight: true},
  ];

  // Icons
  faIdCard = faIdCard;

  openField(field: Field): void {
    if (field.link) {
      window.open(field.link, '_blank');
    }
  }

}
