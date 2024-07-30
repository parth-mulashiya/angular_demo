import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.css'
})
export class ForLoopComponent {

  fruits = ['Apple', 'Banana', 'Orange']

  employees:any = [
    {id:101,name: "Parth",salary:30000,age:22},
    {id:102,name: "Prashant",salary:24000,age:24},
    {id:103,name: "Nirav",salary:27000,age:23},
    {id:104,name: "Bapu",salary:33000,age:21},
    {id:105,name: "Harsh",salary:38000,age:23},
    {id:106,name: "Vijay",salary:21000,age:21},
  ]

}
