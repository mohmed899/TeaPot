import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.css']
})
export class ItemCategoryComponent implements OnInit {

  constructor() { }
  @Input() category:any;
  ngOnInit(): void {
  }

}
