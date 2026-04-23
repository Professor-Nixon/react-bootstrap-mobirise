function testarLogin(){

   let login = document.getElementById("nome").value;
   let senha = document.getElementById("senha").value;

   if (!login || !senha){ //Verifica se usuário informou logiin e senha

      //mostra alert com mensagem para informar o login e senha
     document.getElementById("mensagem").innerText = "Informe o login e a senha!"  
     document.getElementById("alertaMensagem").style.display = "block" 
     document.getElementById("alertaMensagem").className = "alert alert-primary alert-dismissible fade show" 
     return;
      }else{
         //Mostra o Alert com mensagem Obrigado.
         document.getElementById("mensagem").innerText = "Obrigado!" 
         document.getElementById("alertaMensagem").style.display = "block" 
         document.getElementById("alertaMensagem").className = "alert alert-dark alert-dismissible fade show" 
         
      }
}
