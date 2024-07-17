import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {
  //to use variables in html file we have to define it in this class
  //its call one way databining where data transfer from ts file to html file

  //define variables in component

  name:string = "Parth"  //typescript syntax to define variable

  name2 = "Angular Example"     //javascript syntax to define variable in typescript

  age:number = 22     //number datatype to store int double float

  inputType = "text"
  inputType2 = "checkbox"

  color = "green"

  date:Date = new Date();     //Date() function to show the current date


  //function ex
  show():string{    // :string is return type it is not compulsory
    return "This is function Example"
  }



}
