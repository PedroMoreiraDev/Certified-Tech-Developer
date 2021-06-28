let microondas = function(construcTime, constructFood)
{

let foodOptions = {
food: ['pipoca', 'macarrao', 'carne', 'feijão', 'brigadeiro'],
time: [10, 8, 15, 12, 8]
}

//funcao de criacao
    function UserInput(time, inputFood){
    this.time = time
    this.inputFood = inputFood
}
const userChoice = new UserInput(construcTime, constructFood)


//loop para percorrer food0ptions e comparar com a criacao

    for (i = 0; i < foodOptions.food.length; i++)
    {
        if(userChoice.inputFood.includes(!foodOptions.food[i]))
        {
            return  console.log("prato inexistente")
        }
        else if(userChoice.inputFood == foodOptions.food[i] && userChoice.time > foodOptions.time[i]*2)
        {
            return console.log("a comida queimou")
        }
        else
        if(userChoice.inputFood == foodOptions.food[i] && userChoice.time < foodOptions.time[i])
        {
        return console.log("tempo insuficiente")
        }
        else 
        if(userChoice.inputFood == foodOptions.food[i] && userChoice.time > foodOptions.time[i]*3)
        {
            return console.log("kabumm")
        }
        else
        return console.log("prato pronto, bom apetite!")
    }
}
microondas(100, 'pipoca')


