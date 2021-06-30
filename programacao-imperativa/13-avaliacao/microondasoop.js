
    //funcao de criacao
    function UserInput(time, inputFood){
        this.time = time
        this.inputFood = inputFood
    }

    //funcao criação > aonde o usuário insere o input
    const userChoice = new UserInput(15, 'pipoca')

// obj ja cadastrado no sistema
let foodOptions = {
food: ['pipoca', 'macarrao', 'carne', 'feijão', 'brigadeiro'],
time: [10, 8, 15, 12, 8]
}

function microondas()
{
//loop para percorrer food0ptions e comparar com a criacao

    

    for (i = 0; i < foodOptions.food.length; i++)
    if(userChoice.inputFood == foodOptions.food[i])
    {
        {
        if(userChoice.inputFood.includes(foodOptions.food[i]) && userChoice.time > foodOptions.time[i]*3)
        {
            return console.log("kabumm")
        }
        else if(userChoice.inputFood.includes(foodOptions.food[i]) && userChoice.time > foodOptions.time[i]*2)
        {
            return console.log("a comida queimou")
        }
        else
        if(userChoice.inputFood.includes( foodOptions.food[i]) && userChoice.time < foodOptions.time[i])
        {
        return console.log("tempo insuficiente")
        }
        return console.log("prato pronto, bom apetite!")
        }

    }
    console.log("prato inexistente")
}
microondas()


