package com.pruebatecnica.backend.service;

import com.pruebatecnica.backend.model.Product;
import com.pruebatecnica.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

@Service
@Transactional
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public ArrayList<Product> getProducts() {
        return (ArrayList<Product>) productRepository.findAll();
    }

}
