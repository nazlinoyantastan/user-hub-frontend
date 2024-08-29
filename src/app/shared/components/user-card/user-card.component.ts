import { Component, Input } from '@angular/core';
import { User } from '../../models/user.dto';
import { Company } from '../../models/company.dto';
import { Address } from '../../models/address.dto';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  
  @Input() user: User = new User(); 
  

}
