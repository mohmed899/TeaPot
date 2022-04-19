import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  productData:any
  constructor( @Inject(MAT_DIALOG_DATA)  ProductData:any,  private handl:ProductService) { 
    this.productData= ProductData;
  }

  ngOnInit(): void {
    console.log("modlal");
  }
  AddProduct(cat:String,subName:String, price:String   ){
    console.log("addd");
            
     var p = {subName,cat,price:Number(price)}
     this.handl.add(p).subscribe(
       ()=>{ confirm("added")},
       (e)=>{alert(e)}
     )

  }



}
