package com.kauemarcosmaicon.ondonto.controller;

import com.kauemarcosmaicon.ondonto.DTOs.EstoqueDTO;
import com.kauemarcosmaicon.ondonto.entity.Estoque;
import com.kauemarcosmaicon.ondonto.services.EstoqueService;
import jakarta.transaction.Transactional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class EstoqueController {

    @Autowired
    EstoqueService estoqueService;

    @GetMapping("/listar-estoque")
    public ResponseEntity<List<Estoque>> pegarProdutos() {
        return ResponseEntity.status(HttpStatus.OK).body(estoqueService.findAll());
    }

    @Transactional
    @PostMapping("/cadastrar-estoque")
    public ResponseEntity<Object> cadastrarEstoque(@RequestBody @Valid EstoqueDTO estoqueDTO) {
        var estoque = new Estoque();
        BeanUtils.copyProperties(estoqueDTO, estoque);
        if(estoqueDTO.getQuantProduct() <= 0) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error");
        }

        return ResponseEntity.status(HttpStatus.CREATED).body(estoqueService.save(estoque));
    }

    @Transactional
    @GetMapping("/listar-estoque/{id}")
    public ResponseEntity<Object> selecionarProduto(@PathVariable(value = "id") Long id) {
        Optional<Estoque> estoqueOptional = estoqueService.findById(id);
        if(!estoqueOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Produto não encontrado");
        }

        return ResponseEntity.status(HttpStatus.OK).body(estoqueOptional.get());
    }

    @GetMapping("/listar-estoque/deletar/{id}")
    public ResponseEntity<Object> deletarProduto(@PathVariable(value = "id") Long id) {
        Optional<Estoque> estoqueOptional = estoqueService.findById(id);
        if(!estoqueOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Produto não encontrado");
        }

        estoqueService.delete(estoqueOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("Produto deletado com sucesso.");
    }


    @PutMapping("/listar-estoque/editar/{id}")
    public ResponseEntity<Object> editarProduto(@PathVariable(value = "id") Long id,
                                                @RequestBody @Valid EstoqueDTO estoqueDTO) {
        Optional<Estoque> estoqueOptional = estoqueService.findById(id);
        if(!estoqueOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Produto não encontrado");
        }
        var estoque = estoqueOptional.get();
        estoque.setCodProduct(estoqueDTO.getCodProduct());
        estoque.setDescProduct(estoqueDTO.getDescProduct());
        estoque.setQuantProduct(estoqueDTO.getQuantProduct());
        estoque.setFornecedor(estoqueDTO.getFornecedor());
        estoque.setTypeProduct(estoqueDTO.getTypeProduct());

        return ResponseEntity.status(HttpStatus.OK).body(estoqueService.save(estoque));
    }

}
