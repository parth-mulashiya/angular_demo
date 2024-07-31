import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-img',
  standalone: true,
  imports: [],
  templateUrl: './show-img.component.html',
  styleUrl: './show-img.component.css'
})
export class ShowImgComponent {

  @Input() image:string = '';
}
