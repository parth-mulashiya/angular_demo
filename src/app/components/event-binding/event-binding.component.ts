import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {

  onClick(){
    console.log("--> Click event called by using Event Binding.")
  }

  name:string = ""
  name1:string = ""

  onName(val:string){
    this.name = val
    console.log("--> Name is : ",this.name)

  }

  onKeyUp(){
    console.log("--> Key up event called")
  }

  submit(val:string){
    this.name1 = val
    console.log("--> Name is : ",this.name1)
  }
}
