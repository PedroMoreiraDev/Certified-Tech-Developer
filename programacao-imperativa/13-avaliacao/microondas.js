let microondas = function(time, food) {


if(food == 'pipoca' && time <10)
    {
        console.log("tempo insuficiente")
    }


else if(food == 'pipoca' && time >= 10*3)
{
    console.log("kabummm")
}

else if(food == 'pipoca' && time >= 10*2)
{
    console.log("a pipoca queimou")
}


else if(food == 'pipoca')
console.log("Prato pronto, bom apetite!!!")

// macarrão


else if(food == 'macarrão' && time < 8)
    {
        console.log("tempo insuficiente")
    }


    else if(food == 'macarrão' && time >= 8*3)
{
    console.log("kabummm")
}


   else if(food == 'macarrão' && time >= 8*2)
{
    console.log("o macarrão queimou")
}


else if (food == 'macarrão')
console.log("Prato pronto, bom apetite!!!")

// carne

else if(food == 'carne' && time < 15)
    {
        console.log("tempo insuficiente")
    }


    else if(food == 'carne' && time >= 15*3)
{
    console.log("kabummm")
}

    else if(food == 'carne' && time >= 15*2)
{
    console.log("a carne queimou")
}



else if (food == 'carne')
console.log("Prato pronto, bom apetite!!!")

// feijão

else if(food == 'feijão' && time < 12)
    {
        console.log("tempo insuficiente")
    }

    else if(food == 'feijão' && time >= 12*3)
{
    console.log("kabummm")
}

    else if(food == 'feijão' && time >= 12*2)
{
    console.log("o feijão queimou")
}



else if (food == 'feijão')
{
console.log("Prato pronto, bom apetite!!!")

}
else if(food == 'brigadeiro' && time <8)
    {
        console.log("tempo insuficiente")
    }

    else if(food == 'bridageiro' && time >= 8*3)
{
    console.log("kabummm")
}

    else if(food == 'brigadeiro' && time >= 8*2)
{
    console.log("o brigadeiro queimou")
}

else if (food == 'brigadeiro')
console.log("Prato pronto, bom apetite!!!")

else
{console.log ("prato inexistente")}
}




microondas(10, 'pipoca')