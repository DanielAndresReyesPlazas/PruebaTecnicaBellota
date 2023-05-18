package com.pruebatecnica.backend.service;

import com.pruebatecnica.backend.model.ListaPrecios;
import com.pruebatecnica.backend.repository.ListaPreciosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

@Service
@Transactional
public class ListaPreciosService {

    @Autowired
    ListaPreciosRepository listaPreciosRepository;

    public ArrayList<ListaPrecios> getListaPrecios(String listaPrecios) {
        return (ArrayList<ListaPrecios>) listaPreciosRepository.findAllByListaPrecios(listaPrecios);
    }
    public int updatePrices(ArrayList<ListaPrecios> listaPreciosUpdated) {
        int recordsUpdated = 0;
        for (int i = 0; i < listaPreciosUpdated.size(); i++) {
            listaPreciosRepository.save(listaPreciosUpdated.get(i));
            recordsUpdated++;
        }
        return recordsUpdated;
    }
}
