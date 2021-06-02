estacao = function(estacaoDoAno)
{
    switch(estacaoDoAno){
        case "Verão":
            console.log("Que calor, ein?!.");
            break;

        case ("inverno"):
            console.log("Frio dms!.");
            break;
        
        case "Outono":
            console.log("É a estação em que as folhas caem.");
            break;

        case "Primavera":
            console.log("O momomento em que as folhas crescem.");
            break;

        default:
            console.log("Ops, estação inválida.");
    }

}

estacao("inverno")