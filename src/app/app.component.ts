import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { FormComponent } from './components/form/form.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';
import { DemoComponent } from './components/demo/demo.component';
import { ParentComponent } from './components/parent/parent.component';
import { IfElseComponent } from './components/if-else/if-else.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,AboutComponent,InterpolationComponent,FormComponent,PropertyBindingComponent,StyleBindingComponent,ClassBindingComponent,EventBindingComponent,TwoWayDataBindingComponent,DemoComponent,ParentComponent,IfElseComponent],  //import the component name here
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_demo';
  title1 = 'First project';
  text = "Hello i am coming from parent component";
}
