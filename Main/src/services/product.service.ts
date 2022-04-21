import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _items: { icon: string }[] = [];
  constructor(private httpC: HttpClient) {
    this._items = JSON.parse(localStorage.getItem('items') || '[]'); // get the data at lunch 
  }


  getByCategory(cat: string) {
    return this.httpC.get(`http://localhost:3000/pro?cat=${cat}`)
  }

  getAll() {
    return this.httpC.get(`http://localhost:3000/pro`)
  }

  getById(Id: any) {
    return this.httpC.get(`http://localhost:3000/pro/${Id}`)
  }

  delete(Id: any) {
    return this.httpC.delete(`http://localhost:3000/pro/${Id}`);
  }

  add(obj: any) {
    return this.httpC.post("http://localhost:3000/pro", obj)
  }
 

  addItemCart(item: { icon: string; }) {
    this._items.push(item);
    this.syncItems();
  }
  removeItemCart(item: { icon: string; }){
    const index = this._items.indexOf(item);
    this._items.splice(index,1);
    this.syncItems();
  }
  get length(): number {
    return this._items.length
  }
  get items(){
    return this._items.slice(0)
  }

  syncItems() {
    localStorage.setItem('items', JSON.stringify(this._items)); // sync the data

  }

  update( obj:any , Id:any ){
    return this.httpC.put(`http://localhost:3000/pro/${Id} `,obj)
  }
}
