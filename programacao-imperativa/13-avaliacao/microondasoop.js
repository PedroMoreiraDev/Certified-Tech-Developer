let microondas = function(valueConstruction, inputFood)
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
const userChoice = new UserInput(valueConstruction, inputFood)

//loop para percorrer food0ptions e comparar com a criacao

    for (i = 0; i < foodOptions.food.length; i++)
    {
        if(UserInput.inputFood != foodOptions.food[i])
        {
            return  console.log("prato inexistente")
        }
        else if(UserInput.inputFood == foodOptions.food[i] && time > foodOptions.time[i]*2)
        {
            return console.log("a comida queimou")
        }
        else
        if(UserInput.inputFood == foodOptions.food[i] && time < foodOptions.time[i])
        {
        return console.log("tempo insuficiente")
        }
        else 
        if(UserInput.inputFood == foodOptions.food[i] && time > foodOptions.time[i]*3)
        {
            return console.log("kabumm")
        }
        else
        return console.log("prato pronto, bom apetite!")
    }
}

microondas(30, 'pipoca')


