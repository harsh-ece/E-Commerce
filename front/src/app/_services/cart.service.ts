import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  AddToCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    //console.log(this.cartItemList)
  }
  getProduct(){
    return this.productList.asObservable();
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
 removeProduct(item:any){
  this.cartItemList.map((a:any ,index:any )=>{
    if(item.id==a.id){
      this.cartItemList.splice(index,1);
    }

  })
  this.productList.next(this.cartItemList);

 }

  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
