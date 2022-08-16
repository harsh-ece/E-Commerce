import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../_model/product.model';
import { map } from 'rxjs';
import{ProductModel} from '../_model/ProductModel.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclient:HttpClient) { }

   public addProduct(Product:FormData){
    return this.httpclient.post<product>("http://localhost:8080/addNewProduct",Product);

   }
  public getAllProducts(){
    return this.httpclient.get<ProductModel[]>("http://localhost:8080/getAllProducts");
  }
  public getAllProducts1(){
    return this.httpclient.get<product[]>("http://localhost:8080/getAllProducts");
  }
  public deleteProduct(id:number){
    return this.httpclient.delete("http://localhost:8080/delete/"+id);
  }
  public addToCartProduct(id:number){
    return this.httpclient.post<number>("http://localhost:8080/addToCart/"+id,id);
  }
  public getProductsById(id:number){
    return this.httpclient.get<product>(`http://localhost:8080/getProductsById/${id}`);
  }
   
  public homeProducts(){
    return this.httpclient.get<any>(` https://fakestoreapi.com/products/`)

    .pipe(map((res:any)=>{
      return res;
    }));}
   
  
  }

