import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  username = ""
  password = ""
  lang = ""
  hobbies = ""
  gender = ""

  getHobbies(value: string){
    this.hobbies += value + ' '
  }
  getGender(value: string){
    this.gender = value
  }
  getForms(){
    console.log(this.username, this.password, this.lang, this.hobbies, this.gender)
  }
}
