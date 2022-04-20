import { Component, NgModule, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductService } from 'src/services/product.service';
import { DialogComponent } from '../dialog/dialog.component';









@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor( private handler:ProductService ,public dialog: MatDialog ) { }

  products:any
  ngOnInit(): void {
     this.handler.getAll().subscribe(
       ( data)=>{
        this.products=data;
        console.log(this.products);
       },
       (Error)=>{
         console.log(Error)
       }
     )
  }

 openModal (){
  let  dref : MatDialogRef<DialogComponent>;
 dref =this.dialog.open(DialogComponent,{
    data:{
      status:"ADD"
    }
  })
 }

}


