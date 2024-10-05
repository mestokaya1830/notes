import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
  // styleUrls: ['./navbar.component.css']//multiple css
})

export class Navbar {
 
}