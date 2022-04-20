import { Component, Input,Inject, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';

import { MAT_DIALOG_DATA ,MatDialogRef,MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor(private habdler :ProductService,public dialog: MatDialog) { }
  @Input() product:any;
  @Input() IsUpdatable :any;
  ngOnInit(): void {
  }

  delete(){
    if(confirm("Do you want to delete ?"))
    this.habdler.delete(this.product.id).subscribe(
      ()=>{  document.location.reload()},
      ()=>{}
    );
  }
 
  update(){
    const dialogRef = this.dialog.open(DialogComponent,  {
      width: '550px',
      data: {
        id:this.product.id,
        name: this.product.name,
        subName:  this.product.subName,
        Brand:  this.product.Brand,
        price:  this.product.price,
        discount:  this.product.discount,
        cat:  this.product.cat,
        image:this.product.image,
        features:this.product.features ,
        status:"update"
      },
    });

  }
}

// @Component({
//   selector: 'app-dialog',
//   templateUrl: './dd.html',
  
// })
// export class DialogOverviewExampleDialog {
//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: any,
//   ) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

//   AddProduct(cat:String,subName:String,name:String,Brand:string,Image:string, price:String,features:string,discount:String  )
//   {
//   }
//   CloseModal(){}
// }
