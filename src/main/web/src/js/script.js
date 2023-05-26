function validar(){
    var usuario = document.getElementById('exampleInputEmail1').value;
    var senha = document.getElementById('exampleInputPassword1').value;

    if (usuario == "admin@gmail.com" && senha == "123"){
        window.location.href = "C:\Users\Fatec\Desktop\Sistema-Odontologico\pages\agenda.html";
    }
    else{
        document.getElementById('loginMsg').innerHTML = "Acesso negado";
    }

}