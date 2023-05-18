package com.pruebatecnica.backend.controller;

import com.pruebatecnica.backend.model.ListaPrecios;
import com.pruebatecnica.backend.model.NewListaPreciosData;
import com.pruebatecnica.backend.model.NewProductCostData;
import com.pruebatecnica.backend.model.Product;
import com.pruebatecnica.backend.service.ListaPreciosService;
import com.pruebatecnica.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/prueba")
@CrossOrigin(origins = "http://localhost:4200/")
public class Controller {

    @Autowired
    private ProductService productService;

    @Autowired
    private ListaPreciosService listaPreciosService;

    @GetMapping("/getProducts")
    public ResponseEntity<ArrayList<Product>> getProducts() {
        return new ResponseEntity<>(productService.getProducts(), HttpStatus.OK);
    }

    @PostMapping("/newCostProduct")
    public ResponseEntity<Double> newCost(@RequestBody NewProductCostData newProductCostData) {
        ArrayList<Product> products = productService.getProducts();
        double valorInventario = 0;
        int inventario = 0;
        for (int i = 0; i < products.size(); i++) {
            if (products.get(i).getIdProducto() == newProductCostData.getIdProducto()
                    && products.get(i).getInstalacion().equals(newProductCostData.getInstalacion())) {
                valorInventario += (products.get(i).getInventario()) * (products.get(i).getCostoUnitario());
                inventario += products.get(i).getInventario();
            }
        }
        valorInventario += newProductCostData.getCantidad() * newProductCostData.getPrecio();
        inventario += newProductCostData.getCantidad();
        double costoMedio = valorInventario / inventario;
        return new ResponseEntity<>(costoMedio, HttpStatus.OK);
    }

    @PostMapping("/updateListPrices")
    public ResponseEntity<Integer> updateListaPrecios(@RequestBody NewListaPreciosData newListaPreciosData) {
        ArrayList<ListaPrecios> listaPreciosAux = listaPreciosService.getListaPrecios(newListaPreciosData.getListaPrecios());
        for (int i = 0; i < listaPreciosAux.size(); i++) {
            double price = listaPreciosAux.get(i).getPrecio();
            listaPreciosAux.get(i).setPrecio(price + (price * (newListaPreciosData.getPercentage() / 100)));
        }
        int recordsUpdated = listaPreciosService.updatePrices(listaPreciosAux);
        return new ResponseEntity<>(recordsUpdated, HttpStatus.OK);
    }
}
