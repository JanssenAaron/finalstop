import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product'

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product[]>("https://finalexam-13182-default-rtdb.firebaseio.com/" + "products.json"
    ).pipe(map((responseData) => {
      for(let key in responseData) {
        if (Number(key) == id-1){
          return responseData[key]
        }
      }
      return {    
        id: id,
        catergory: "",
        description: "",
        image: "",
        price: 0.0,
        ratingCount:  0,
        rating:  0.0,
        title: "",}
    }))
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>("https://finalexam-13182-default-rtdb.firebaseio.com/" + "products.json")
  }

}
