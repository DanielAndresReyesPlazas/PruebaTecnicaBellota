package com.pruebatecnica.backend.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "lista_precios")
@Data
public class ListaPrecios {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_lista_precios")
    private int idListaPrecios;

    @Column(name = "lista_precios")
    private String listaPrecios;

    @Column(name = "cod_producto")
    private String codigoProducto;

    @Column(name = "precio")
    private double precio;
}
