import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  productData: any // carry the prodct data and the states for updat or add new project 
  constructor(@Inject(MAT_DIALOG_DATA) ProductData: any, private handl: ProductService, public dialogRef: MatDialogRef<DialogComponent>,) {
    this.productData = ProductData;
  }

  ngOnInit(): void {
    console.log("modlal");
  }
  SaveProduct(cat: String, subName: String, name: String, Brand: string, Image: string, price: String, features: string, discount: String) {
    var p = { name, subName, Brand, price: Number(price), discount: Number(discount), cat, image: Image.split(","), features: features.split(",") }
    //we have two case update or add new one 
    console.log(this.productData)
    if (this.productData.status == "update")  //update old one 
    {


      confirm("im in update")
      this.handl.update(p, this.productData.id).subscribe(
        () => {
          confirm("updated")
          document.location.reload()
        },
        (e) => { alert(e) }
      )

    }
    else { //and new 
      confirm("im in add")
 
      this.handl.add(p).subscribe(
        () => {
          confirm("added")
          document.location.reload()
        },
        (e) => { alert(e) }
      )
    }

  }
  CloseModal() {
    this.dialogRef.close();
  }


}
