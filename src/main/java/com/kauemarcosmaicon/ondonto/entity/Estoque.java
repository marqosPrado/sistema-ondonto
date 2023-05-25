package com.kauemarcosmaicon.ondonto.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "TB_ESTOQUE")
public class Estoque {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false, length = 50)
    private String nameProduct;

    @Column(nullable = false, length = 400)
    private String descProduct;

    //@Column(nullable = false)
    private Integer quantProduct;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setQuantProduct(Integer quantProduct) {
        this.quantProduct = quantProduct;
    }

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
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
