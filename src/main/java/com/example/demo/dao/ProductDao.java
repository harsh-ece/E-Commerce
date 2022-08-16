package com.example.demo.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Product;

@Repository
public interface ProductDao extends CrudRepository<Product, Integer> {
	 @Query("SELECT pic_byte from ecommerce.image_model;")
	   byte[] getPicByte();

}
