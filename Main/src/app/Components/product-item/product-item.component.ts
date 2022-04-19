import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor(private habdler :ProductService) { }
  @Input() product:any;
  @Input() IsUpdatable :any;
  ngOnInit(): void {
  }

  delete(){
    
    this.habdler.delete(this.product.id).subscribe(
      ()=>{ document.location.reload()},
      ()=>{}
    );
  }

}
