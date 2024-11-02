import { Component } from '@angular/core';
import { UserProfileComponent } from "../../../components/user/profile/user-profile.component";

@Component({
  selector: 'app-user-profile-page',
  standalone: true,
  imports: [UserProfileComponent],
  templateUrl: './user-profile-page.component.html',
  styleUrl: './user-profile-page.component.css'
})
export class UserProfilePageComponent {

}
