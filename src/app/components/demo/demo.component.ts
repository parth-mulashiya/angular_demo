import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  @Input({required:true}) text!: string;
  @Input({required:true}) abc!: string;
  constructor(){

  }
  handleOnClick = () => {
    alert("i am clicked..")
  }
}
