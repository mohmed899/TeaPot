import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/services/product.service';
import { ItemCategoryComponent } from '../item-category/item-category.component';
interface Item {
  icon: string;
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  //property for pots data
  product: any
  pots: any
  @Input() PotInfo: any;
  @Input() item: any;

  constructor(private PotService: ProductService, private CurntLink: ActivatedRoute) { }

  ngOnInit(): void {
    this.PotService.getById(this.CurntLink.snapshot.params["id"]).subscribe(
      (data) => { this.product = data },
      (errorr) => { console.log(errorr) }
    )

    this.PotService.getAll().subscribe(
      (data) => {
        this.pots = data

      },
      (e) => { console.log(e) }
    )

  }

 
  get count() {
    return this.PotService.items.filter(i => i.icon == this.item.icon).length;
  }
  get countAll(){
    return this.PotService.items.length
  }

  add() {
    this.PotService.addItemCart(this.item);
    console.log(this.item.id);
  }

  remove() {
    if (this.count > 0) {
      this.PotService.removeItemCart(this.item)
    }
  }


}
