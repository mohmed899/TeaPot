import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
 cats = ["cat1","cat2","cat3","cat1","cat2","cat3","cat1","cat2","cat3","cat1","cat2","cat3","cat1","cat2","cat3"]
  ngOnInit(): void {
  }

}
