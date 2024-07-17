import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { FormComponent } from './components/form/form.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,AboutComponent,InterpolationComponent,FormComponent,PropertyBindingComponent],  //import the component name here
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_demo';
}
