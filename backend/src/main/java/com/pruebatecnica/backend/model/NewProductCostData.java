package com.pruebatecnica.backend.model;

import lombok.Data;

@Data
public class NewProductCostData {

    private int idProducto;
    private int cantidad;
    private int precio;
    private String instalacion;
}
