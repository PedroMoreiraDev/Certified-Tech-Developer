/*

02 - Modifique a função podeSubir(), de modo que ela exiba uma mensagem de autorização ou de impedimento no acesso ao brinquedo dependendo se a pessoa se enquadra ou não nas condições do exercício anterior. Por exemplo:
Em caso de autorização, exiba a mensagem: “Acesso autorizado” ou “Acesso autorizado somente com acompanhante”;
Em caso de impedimento, exiba a mensagem: “Acesso negado..”
*/

function podeSubir(alturaDaPessoa, acompanhada)
{

    if (alturaDaPessoa < 1.20)
    {
        return ("Acesso negado.");
    }
    else if(alturaDaPessoa > 1.40 && alturaDaPessoa < 2.00)
    {
        return ("Acesso autorizado.");
    }
    else if (alturaDaPessoa < 1.40 && acompanhada == true)
    {
        return ("Acesso autorizado somente com acompanhante");
    }
    else
    {
        return ("Acesso negado.");
    }
    
}

console.log(podeSubir(1.49,false))