package com.kauemarcosmaicon.ondonto.DTOs;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class EstoqueDTO {

    @NotBlank
    private String codProduct;

    @NotBlank
    @Size(max = 20)
    private String descProduct;

    @NotBlank
    private String fornecedor;

    @NotBlank
    private Integer quantProduct;

    @NotBlank
    private String typeProduct;

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

    public Integer getQuantProduct() {
        return quantProduct;
    }

    public void setQuantProduct(Integer quantProduct) {
        this.quantProduct = quantProduct;
    }
}
