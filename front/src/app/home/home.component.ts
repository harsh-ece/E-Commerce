import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';
import { GetAllProductsComponent } from '../get-all-products/get-all-products.component';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { CartService } from '../_services/cart.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForOf } from '@angular/common';
import { SafeUrl } from '@angular/platform-browser';
import { ProductModel } from '../_model/ProductModel.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor(private produtService:ProductService,
    private router:Router,
    private cartService:CartService,
    private sanitizer:DomSanitizer) { }

  
  product:any;
  thumbnail:any;
  is:any[];
  retrieveURL:ProductModel[];
  a:any;
  i:any;
  image:SafeUrl;
  harsh:any[];


  

  ngOnInit(): void {
    
    this.produtService.getAllProducts().subscribe
      (res=>{
        this.product=res;
        this.retrieveURL=res;

      

        
        
         this.product.forEach((a:any) => {

         var reader = new FileReader ();
         var array = new Uint8Array(a.productImage.picByte);

var blob = new Blob([array]);
      /*reader.readAsDataURL(blob);
       reader.onload = (_event) => {
       this.retrieveURL = reader.result;*/

            
           // this.retrieveURL = this.sanitizer.bypassSecurityTrustUrl(objectURL);
       
      
          
     Object.assign(a,{quantity:1,total:a.discountedPrice,image:this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(blob))});
     //this.harsh.push(this.a);
      
      
      
    })});

    
   

      
      
      
      
   
    
    
    
  }
  AddToCart(product:any){
    this.cartService.AddToCart(product);
    this.cartService.getProduct().subscribe(
      (res)=>
      {
        console.log(res);
      }
    );
    

    ;


  }
}

   // this.produtService.getAllProducts().subscribe(
     // (resp:product[])=>
     // {
        
       // this.product=resp;
      //},
      //(error:HttpErrorResponse)=>
      //{
        //console.log(error);
      //}


    //);
  //}
  /*Addtocart= "Add to cart";
  toggle=true;
  change(){
    this.toggle=!this.toggle
 this.Addtocart= this.toggle? "Add To Cart":"Added to cart"
  }
  Addtocart1= "Add to cart";
  toggle1=true;
  change1(){
    this.toggle1=!this.toggle1
 this.Addtocart1= this.toggle1? "Add To Cart":"Added to cart"
  }
  Addtocart2= "Add to cart";
  toggle2=true;
  change2(){
    this.toggle2=!this.toggle2
 this.Addtocart2= this.toggle2? "Add To Cart":"Added to cart"
  }

  Add(id:number){
    this.produtService.addToCartProduct(id).subscribe(
      (resp:number)=>{
      console.log(resp);
      this.router.navigate(['cart',id]);

      
    },
      (error:HttpErrorResponse)=>
      {
        console.log(error);
      }
      
      

    );


  }
  

}*/