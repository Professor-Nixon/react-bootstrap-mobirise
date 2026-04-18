function salvar() {
    let nome = document.querySelector("#nome").value;
    let email = document.querySelector("#email").value;
    let idade = document.querySelector("#idade").value;
    
    if (nome == "" || !email || !idade){
        document.querySelector("#mensagem").style.display = "block";
        document.querySelector("#mensagem").className="alert alert-danger"
        document.querySelector("#mensagem").innerHTML = "Preencha o registro completo.";
        return;
    }else{
        document.querySelector("#mensagem").className="alert alert-success"
        document.querySelector("#mensagem").style.display = "block";
        document.querySelector("#mensagem").innerHTML = "Cadastro foi salvo com sucesso.";    
    }
}