import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../_model/product.model';
import { CartService } from '../_services/cart.service';
import { ProductService } from '../_services/product.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router:ActivatedRoute,
    private productService: ProductService,
    private cartService:CartService) { }

  id:number;
  products:any;
  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public grandTotal !:number;

  ngOnInit(): void {
    this.cartService.getProduct().subscribe
      (res=>{
        this.products=res;
     
   this.grandTotal= this.cartService.getTotalPrice();})
  
  

  }
  removeItem(item:any){
    this.cartService.removeProduct(item);

    
    
  }
  emptycart(){
    this.cartService.removeAllCart();
  }






}
