package com.pruebatecnica.backend.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "producto_")
@IdClass(ProductId.class)
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idproducto_")
    private int idProducto;

    @Column(name = "producto")
    private String producto;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "Instalacion")
    private String instalacion;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "bodega")
    private String bodega;

    @Column(name = "inventario")
    private int inventario;

    @Column(name = "costo_unitario")
    private double costoUnitario;

}
