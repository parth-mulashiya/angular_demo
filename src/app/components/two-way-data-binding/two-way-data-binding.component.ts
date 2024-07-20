import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


// For [(ngModel)] to work, you need to import FormsModule from @angular/forms in your Angular module.


@Component({
  selector: 'app-two-way-data-binding',
  standalone: true,
  imports: [FormsModule],  // Import FormsModule here
  templateUrl: './two-way-data-binding.component.html',
  styleUrl: './two-way-data-binding.component.css'
})
export class TwoWayDataBindingComponent {

  name:string = ""

  changeName(val:string){
    this.name = val
  }

}
