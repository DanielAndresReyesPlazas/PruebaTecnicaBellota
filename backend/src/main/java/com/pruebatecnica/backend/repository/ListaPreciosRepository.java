package com.pruebatecnica.backend.repository;

import com.pruebatecnica.backend.model.ListaPrecios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ListaPreciosRepository extends JpaRepository<ListaPrecios, Long> {

    List<ListaPrecios> findAllByListaPrecios(String listaPrecios);
}
