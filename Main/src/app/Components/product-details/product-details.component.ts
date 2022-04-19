import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  
  @Input() PotInfo:any;

  constructor(private PotService : ProductService ,private CurntLink:ActivatedRoute) { }
  //property for pots data
  product:any
    ngOnInit(): void {
      this.PotService.getById(this.CurntLink.snapshot.params["id"]).subscribe(
        (data)=>{this.product=data},
        (errorr)=>{console.log(errorr)}
      )
    }



}
