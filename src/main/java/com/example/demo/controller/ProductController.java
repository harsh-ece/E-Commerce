package com.example.demo.controller;

import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entity.ImageModel;
import com.example.demo.entity.Product;
import com.example.demo.service.ProductService;
import java.util.List;



@RestController
public class ProductController {
	
	
	@Autowired
	private ProductService productService;
	
	@PostMapping(value ={"/addNewProduct"}, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE })
	public Product addNewProduct(@RequestPart("product") Product product,
			@RequestPart("imageFile") MultipartFile file) {
		//return productService.addNewProduct(product);
		try {
			ImageModel images= uploadImage(file);
			product.setProductImage(images);
			return productService.addNewProduct(product);
			
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println(e.getMessage());
			return null;
		}
		}
	
	public ImageModel uploadImage(MultipartFile multipartFiles) throws IOException {
		

		MultipartFile file = multipartFiles;
		
			ImageModel imageModel = new ImageModel(
					file.getOriginalFilename(),
					file.getContentType(),
					file.getBytes()
					);
		
		
		return imageModel;}
	
	
	@GetMapping("/getAllProducts")
	public List<Product> getAllProducts(){
		return productService.getAllProduct();
		
		
		
	}
	
	@DeleteMapping({"/delete/{id}"})
	public void deleteProduct(@PathVariable("id") Integer id) {
		productService.deleteProduct(id);
		
		
	}
	
	@PostMapping({"/addToCart/{id}"})
	public Product addToCart(@PathVariable("id") Integer id) {
		return productService.addToCart(id);}
		

		@GetMapping({"/getProductsById/{id}"})
		public ResponseEntity<Product> getProductsById(@PathVariable("id") Integer id) {
			return productService.getProductsById(id);
		
		
	}
		
		//@PostMapping({"/itemAdded/{id}"})
		//public Product cart(@PathVariable("id") Integer id,@RequestBody Product product) {
		//	return productService.
			
			
		//}
	//
		
		
		
		
		
		


}