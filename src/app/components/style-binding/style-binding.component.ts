import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  standalone: true,
  imports: [],
  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.css'
})
export class StyleBindingComponent {

  //here we have to specify all css property which we have to use in html element
  btnColor = 'teal'
  textColor = 'blue'
  textSize = 30
}
