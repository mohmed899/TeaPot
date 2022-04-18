import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  





  @Input() PotInfo:any;

  constructor(private PotService : ProductService) { }
  //property for pots data
  pots:any
    ngOnInit(): void {
      this.PotService.getAll().subscribe(
        (data)=>{this.pots=data},
        (errorr)=>{console.log(errorr)}
      )
    }



}
