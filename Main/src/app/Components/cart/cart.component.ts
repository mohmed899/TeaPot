import { Component, OnInit,Input } from '@angular/core';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() item: any;
  constructor(private PotService: ProductService) { }

  ngOnInit(): void {
  }

  get count() {
    return this.PotService.items.filter(i => i == this.item).length;
  }
  get countAll(){
    return this.PotService.items.length
  }

  add() {
    this.PotService.addItemCart(this.item)
  }

  remove() {
    if (this.count > 0) {
      this.PotService.removeItemCart(this.item)
    }
  }

}
