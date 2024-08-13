import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-object-ng-for',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './list-object-ng-for.component.html',
  styleUrl: './list-object-ng-for.component.css'
})
export class ListObjectNgForComponent {
  name:string = '';
  city:string = '';
  age:number = 0;

  list:any = [
    {
      Name: 'ramesh',
      City: 'rajkot',
      Age: 25
    },
  ];

  onAddData = () => {
    if(this.name === '' || this.city === '' || this.age <= 0){
      alert('Please fill all details first..')
      return;
    }
    this.list.push({
      Name: this.name,
      City: this.city,
      Age: this.age
    })
    this.name = ''
    this.city = ''
    this.age = 0;
  }
}
