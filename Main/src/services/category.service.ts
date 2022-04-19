import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpC:HttpClient) { }

  getAll(){
    return this.httpC.get(`http://localhost:3000/cat`)
 }
}
