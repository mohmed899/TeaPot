import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor( private Handel:CategoryService ) { }
 cats : any 
  ngOnInit(): void {
     this.Handel.getAll().subscribe(
       (data)=>{this.cats=data},
       (e)=>{console.log(e)}
    )
  }

}
