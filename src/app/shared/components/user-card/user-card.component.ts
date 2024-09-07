import { Component, Input } from '@angular/core';
import { User } from '../../models/user.dto';
import { Company } from '../../models/company.dto';
import { Address } from '../../models/address.dto';
import { PhotoService } from '../../../services/photo.service';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  
  @Input() user: User = new User(); 
  userPhotoUrl: string = '';

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.loadUserPhoto();
  }

  loadUserPhoto(): void {
    this.photoService.getUserPhoto(this.user.id).subscribe(
      (photoUrl: string) => {
        this.userPhotoUrl = photoUrl;
      },
      (error) => {
        console.error('Photo not found', error);
        this.userPhotoUrl = 'path/to/default/image.jpg';
      }
    );
  }
  

  

}
