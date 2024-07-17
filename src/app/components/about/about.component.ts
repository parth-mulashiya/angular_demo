import { Component } from '@angular/core';

@Component({
  selector: 'app-about',   //it is unique name/id of this component to use this component in app.component.html file
  standalone: true,
  imports: [],
  template: '<h1>About Component </h1>',    //direact html code not using component html file
  //direact css code not using component css file
  styles: [
    'h1{color: red}'
  ]
})
export class AboutComponent {

}
