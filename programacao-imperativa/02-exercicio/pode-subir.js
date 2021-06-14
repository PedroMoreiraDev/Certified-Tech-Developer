/*

Em um parque de diversões nos pedem um programa para verificar se os passageiros da montanha-russa podem entrar no brinquedo.

Crie uma função podeSubir() que receba dois parâmetros: 
altura da pessoa;
se está acompanhada.

Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa pode subir ou não, baseado nas seguintes condições:
A pessoa deve medir mais de 1.40m e menos de 2 metros.
Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada..

*/

function canGoUp(height, accompany)
{

    if (height < 1.20)
    {
        return (false);
    }
    else if(height > 1.40 && height < 2.00)
    {
        return (true);
    }
    else if (height < 1.40 && accompany == true)
    {
        return (true);
    }
    else
    {
        return (false);
    }
    
}

console.log(canGoUp(1.49,false))
