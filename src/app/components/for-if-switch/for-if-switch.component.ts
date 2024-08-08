import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for-if-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './for-if-switch.component.html',
  styleUrl: './for-if-switch.component.css'
})
export class ForIfSwitchComponent {
  items = ["item1","item2","item3"];
  selectedColor="red";
}
