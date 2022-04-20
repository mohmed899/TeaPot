import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private hand:ProductService) { }

  products:any;
  ff="accent";
  ngOnInit(): void {
    this.hand.getAll().subscribe( 
      (data)=>{
        this.products=data
      console.log(data);
      },
      (e)=>{ console.log(e)}
    )
  
  }


fun(tab:MatTabChangeEvent){

  console.log(tab.tab.textLabel );
  var categoryName = tab.tab.textLabel;
  if(categoryName=="All Products")
    {
      this.hand.getAll().subscribe( 
        (data)=>{
          this.products=data
    
        },
        (e)=>{ console.log(e)}
      )
    } else
  this.hand.getByCategory(categoryName).subscribe( 
    (data)=>{
      console.log(data)
      this.products=data

    },
    (e)=>{ console.log(e)}
  )

}

}