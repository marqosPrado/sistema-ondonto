function calcular() {
    var valorReceita = document.getElementById("valor-receita").value;
    var valorDespesa = document.getElementById("valor-despesa").value;
    
    
    var mostrarResultado = document.getElementById("receita-liquida")

    // Verifica se o input está vazio
    if(isNaN(valorReceita) || isNaN(valorDespesa)){
        mostrarResultado.innerHTML = "Valor Inválido!"
    }
    
    // Verificando se o valor digitado no input receita é um valor positivo
    if(valorReceita < 0) {
        valorReceita = Math.abs(valorReceita) * + 1

        var resultado = parseInt(valorReceita) + parseInt(valorDespesa);
        mostrarResultado.innerHTML = `R$ ${resultado}`
    } else {
        var resultado = parseInt(valorReceita) + parseInt(valorDespesa);
        mostrarResultado.innerHTML = `R$ ${resultado}`
    }

    // Verificando se o valor digitado no input despesa é um valor negativo
    if(valorDespesa > 0){
        valorDespesa = Math.abs(valorDespesa) * - 1

        var resultado = parseInt(valorReceita) + parseInt(valorDespesa);
        mostrarResultado.innerHTML = `R$ ${resultado}`
    } else {
        var resultado = parseInt(valorReceita) + parseInt(valorDespesa);
        mostrarResultado.innerHTML = `R$ ${resultado}`
    }

}