import { Component, ViewEncapsulation } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,  //used to apply parent css in child component
  // encapsulation: ViewEncapsulation.None,  //used to apply css to parent and child components
})
export class ParentComponent {

}
