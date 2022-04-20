import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpC: HttpClient) { }


  getByCategory(cat: string) {
    return this.httpC.get(`/pro?cat=${cat}`)
  }

  getAll() {
    return this.httpC.get(`http://localhost:3000/pro`)
  }

  getById(Id: any) {
    return this.httpC.get(`http://localhost:3000/pro/${Id}`)
  }

  delete( Id:any){
    return this.httpC.delete(`http://localhost:3000/pro/${Id}`);   
  }

  add( obj:any ){
    return this.httpC.post("http://localhost:3000/pro",obj)
  }

  update( obj:any , Id:any ){
    return this.httpC.put(`http://localhost:3000/pro/${Id} `,obj)
  }
}
