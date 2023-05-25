package com.kauemarcosmaicon.ondonto.DTOs;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class EstoqueDTO {

    @NotBlank
    private String nameProduct;

    @NotBlank
    @Size(max = 20)
    private String descProduct;

    @NotBlank
    private Integer quantProduct;

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

    public Integer getQuantProduct() {
        return quantProduct;
    }

    public void setQuantProduct(Integer quantProduct) {
        this.quantProduct = quantProduct;
    }
}
