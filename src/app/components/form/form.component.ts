import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  output = ""

  printName(value: string){
    this.output = "Name is : " + value
  }
  //printName() function has 1 argument 'value' its type is string
  //this fumction is used to store input into variable and set into 'output' variable
}
