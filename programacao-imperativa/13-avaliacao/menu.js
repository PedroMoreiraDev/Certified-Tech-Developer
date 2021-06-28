let microondas = function(valueConstruction, inputFood)
{

let foodOptions = {
food: ['pipoca', 'macarrao', 'carne', 'feijão', 'brigadeiro'],
time: [10, 8, 15, 12, 8]
}


function UserInput(time, inputFood){
    this.time = time
    this.inputFood = inputFood

    
}
const userChoice = new UserInput(valueConstruction, inputFood)

       for (i = 0; i < foodOptions.food.length; i++)
       {
            
        if(this.inputFood != foodOptions.food[i])
        {
            return  console.log("prato inexistente")
        }
        else if(this.inputFood == foodOptions.food[i] && time > foodOptions.time[i]*2)
        {
            return console.log("a comida queimou")
        }
        else
        if(this.inputFood == foodOptions.food[i] && time < foodOptions.time[i])
        {
           return console.log("tempo insuficiente")
        }
        
        else 
        if(this.inputFood == foodOptions.food[i] && time > foodOptions.time[i]*3)
        {
            return console.log("kabumm")
        }
        else
        return console.log("prato pronto, bom apetite!")
    }

// pipoca
}

microondas(30, 'pipoca')


