package com.kauemarcosmaicon.ondonto.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "TB_ESTOQUE")
public class Estoque {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false, length = 50)
    private String codProduct;

    @Column(nullable = false, length = 400)
    private String descProduct;

    @Column(nullable = false, length = 50)
    private String fornecedor;

    //@Column(nullable = false)
    private Integer quantProduct;

    @Column(nullable = false, length = 100)
    private String typeProduct;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setQuantProduct(Integer quantProduct) {
        this.quantProduct = quantProduct;
    }

    public String getCodProduct() {
        return codProduct;
    }

    public void setCodProduct(String codProduct) {
        this.codProduct = codProduct;
    }

    public String getFornecedor() {
        return fornecedor;
    }

    public void setFornecedor(String fornecedor) {
        this.fornecedor = fornecedor;
    }

    public String getTypeProduct() {
        return typeProduct;
    }

    public void setTypeProduct(String typeProduct) {
        this.typeProduct = typeProduct;
    }

    public String getDescProduct() {
        return descProduct;
    }

    public void setDescProduct(String descProduct) {
        this.descProduct = descProduct;
    }

    public int getQuantProduct() {
        return quantProduct;
    }

    public void setQuantProduct(int quantProduct) {
        this.quantProduct = quantProduct;
    }
}
