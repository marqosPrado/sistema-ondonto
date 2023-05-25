package com.kauemarcosmaicon.ondonto.services;

import com.kauemarcosmaicon.ondonto.entity.Estoque;
import com.kauemarcosmaicon.ondonto.repository.EstoqueRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EstoqueService {

    @Autowired
    EstoqueRepository estoqueRepository;

    @Transactional
    public Estoque save(Estoque estoque) {
        return estoqueRepository.save(estoque);
    }

    public List<Estoque> findAll() {
        return estoqueRepository.findAll();
    }

    public Optional<Estoque> findById(Long id) {
        return estoqueRepository.findById(id);
    }

    @Transactional
    public void delete(Estoque estoque) {
        estoqueRepository.delete(estoque);
    }
}
