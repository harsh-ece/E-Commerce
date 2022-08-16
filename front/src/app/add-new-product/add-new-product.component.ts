import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

import { FileHandle } from '../_model/file-handle.model';
import { product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  Product: product={
    id:0,
    productName:"",
    productDescription:"",
    discountedPrice:0,
    originalPrice:0,
    productImages:[]
  }

  constructor(private productService:ProductService,
    private sanitizer:DomSanitizer ) { }

  ngOnInit(): void {
  }
  addProduct( productForm: NgForm){
   const productFormData= this.prepareFormData(this.Product);

    this.productService.addProduct(productFormData).subscribe(
      (response:product)=>{
        productForm.reset();
        this.Product.productImages=[];
      },
      
      (error:HttpErrorResponse)=>{
        console.log(error);
      }
      );

    
  }
  prepareFormData(Product:product):FormData{
    const formData=new FormData();

    formData.append(
      'product',
      new Blob([JSON.stringify(Product)],{type:'application/json'})
    );
     for(var i=0;i<Product.productImages.length;i++){
      formData.append(
        'imageFile',
        Product.productImages[i].file,
        Product.productImages[i].file.name
      );
     }
     return formData


  }
  onFileSelected(event){
    if(event.target.files){
      const file = event.target.files[0];

      const fileHandle:FileHandle={
        file:file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }
      this.Product.productImages.push(fileHandle);
    }

  }
  removeImage(i:number){
    this.Product.productImages.splice(i,1);
  }

  fileDropped(fileHandle:FileHandle){
    this.Product.productImages.push(fileHandle);
  }

}
