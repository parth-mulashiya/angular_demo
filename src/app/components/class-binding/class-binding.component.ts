import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  standalone: true,
  imports: [],
  templateUrl: './class-binding.component.html',
  styleUrl: './class-binding.component.css'
})
export class ClassBindingComponent {

  btnClass = 'bold textColor bgColor'  //here we have to specify all css class which we have to use in html element

}
