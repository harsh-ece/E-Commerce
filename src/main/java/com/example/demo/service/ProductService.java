package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.dao.ProductDao;
import com.example.demo.entity.Product;



@Service
public class ProductService {
	
	@Autowired
	private ProductDao productDao;
	
	public Product addNewProduct(Product product) {
		
		return productDao.save(product);
	}

	public List<Product> getAllProduct(){
		return (List<Product>)productDao.findAll();
		
	}
	
	public void deleteProduct(Integer productId) {
		 productDao.deleteById(productId);
	}
	public Product addToCart(Integer productId) {
		Product empl = productDao.findById(productId).orElseThrow(()-> new ConfigDataResourceNotFoundException(null));
		return empl;}
		
		public ResponseEntity<Product> getProductsById(Integer productId) {
			Product empl = productDao.findById(productId).orElseThrow();
			return ResponseEntity.ok(empl);
		
	
	}
}
