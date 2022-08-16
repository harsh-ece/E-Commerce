import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-get-all-products',
  templateUrl: './get-all-products.component.html',
  styleUrls: ['./get-all-products.component.css']
})
export class GetAllProductsComponent implements OnInit {

  constructor(private productService:ProductService ) { }
  displayedColumns: string[] = ['Id', 'Product Name', 'Product Description', 'Discounted-Price','Original-Price','Edit','Delete'];
  ngOnInit(): void {
    this.getAllProducts();
    
  }
  productDetails:product[]=[];
  public getAllProducts(){
    return this.productService.getAllProducts1().subscribe
      ((res:product[])=>
      {
        console.log(res);
        this.productDetails=res;
      },
      (error:HttpErrorResponse)=>
      {
        console.log(error);
      }


    );
    


    
  }
  
  deleteProduct(id:number){
    
    this.productService.deleteProduct(id).subscribe(
      (resp)=>
      {
        
        this.getAllProducts();
      },
      (error:HttpErrorResponse)=>
      {
        console.log(error);
      }

    );
    
  }

  

}
