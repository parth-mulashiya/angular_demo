import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Output() dataEvent = new EventEmitter<any>();

  selectedItem = {
    item:'',
    image:''
  }
  itemList:Array<any> = [
    {
      item:'Select Image',
      image: ''
    },
    {
      item:'Sunflower',
      image: 'https://www.trustbasket.com/cdn/shop/articles/Sunflower.webp?v=1681365917'
    },
    {
      item:'Tulip',
      image: 'https://gardenerspath.com/wp-content/uploads/2023/04/Types-of-Tulip-Flowers-Featured.jpg'
    },
    {
      item:'Rose',
      image: 'https://www.1800flowers.com/blog/wp-content/uploads/2017/03/single-red-rose.jpg'
    }
  ]

  handleSelection = (e:any) => {
    this.selectedItem = this.itemList.find(ele=>ele.item === e.target.value)
    this.dataEvent.emit(this.selectedItem)
  }
}
