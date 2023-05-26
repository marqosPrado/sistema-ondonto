function cadastrar(){
    var input = document.getElementById("inputPreco").value;
    var inputCodigo = document.getElementById("inputCodigo").value;
    var inputProduto = document.getElementById("inputProduto").value;

    if(inputCodigo === "") {
        alert("Digite o Código do Produto")
    }

    if(inputProduto === "") {
        alert("Digite o nome do Produto")
    }

    if(input <= 0) {
        alert("Preço Inválido, digite novamente")
    } else {
        alert("Produto cadastrado com sucesso!")
    }
}