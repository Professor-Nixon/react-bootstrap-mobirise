function escolherCor(){
    /*Guardando a cor escolhida no select*/
    let cores = document.getElementById("escolhaCores").value;
     /*Guardando as DIVs de cada cor em uma variável*/
    let verde = document.getElementById("corVerde");
    let amarelo = document.getElementById("corAmarelo");
    let vermelho = document.getElementById("corVermelho");
    //verificando se a cor escolhida foi o verde
    if (cores == "verde"){
        //aplicando a classe de cor do bootstrap
            verde.className = "bg-success" 
            amarelo.className = "bg-secondary"
            vermelho.className = "bg-secondary"
    }
    //Verificando se escolhoram o amarelo 
        else if (cores == "amarelo"){
             //aplicando a classe de cor do bootstrap
                verde.className = "bg-secondary" 
                amarelo.className = "bg-warning"
                vermelho.className = "bg-secondary"
        }
        //verificando se a cor escolhida foi o vermelho
            else if (cores == "vermelho"){
                 //aplicando a classe de cor do bootstrap
                    verde.className = "bg-secondary" 
                    amarelo.className = "bg-secondary"
                    vermelho.className = "bg-danger"
                }
                    //Se não escolheu nenhuma cor ainda.
                    else{
                     //aplicando a classe de cor do bootstrap
                        verde.className = "bg-secondary" 
                        amarelo.className = "bg-secondary"
                        vermelho.className = "bg-secondary"
                     }



}