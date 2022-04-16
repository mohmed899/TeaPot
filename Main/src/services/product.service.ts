import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpC:HttpClient) { }

  
  getByCategory(cat:string ){
    return this.httpC.get(`http://localhost:3000/pro?cat=${cat}`)
 }

 getAll(){
   return this.httpC.get(`http://localhost:3000/pro`)
}
}