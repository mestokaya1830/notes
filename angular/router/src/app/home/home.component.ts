import { Component } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    NgClass,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imgSrc = '../assets/img1.png'
  twoWay = ""
  auth = ""
  auth2 = ""
  user = ""
  pass = ""
  users = [
    {id:1, name: 'Mesto', age: 30},
    {id:2, name: 'Karl', age: 40},
    {id:3, name: 'Hannry', age: 30}
  ]

  getFormWithId(username: string, password: string){
    this.auth = username +' '+ password 
  }

  getFormWithModel(){
    this.auth2 = this.user +' '+ this.pass 
  }
}
