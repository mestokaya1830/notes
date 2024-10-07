import { Component } from '@angular/core';
import { NgClass, NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgFor,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = "Home Page"
  classState = true
  btnState = true
  style = "color:blue"
  styleColor = 'red'
  counter= 0
  auth = ''
  grade = 100
  lang = [
    {id: 1, name: "Html"},
    {id: 2, name: "Css"},
    {id: 3, name: "Javascript"}
  ]
  increase(){
    this.counter++
  }
  decrease(){
    this.counter--
  }
}
