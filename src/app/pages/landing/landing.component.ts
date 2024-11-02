import { Component } from '@angular/core';
import { NavBarComponent } from '../../sharedComponents/nav-bar/nav-bar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavBarComponent, RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
