
let run = "O carro está correndo\n"
let stopp = "O carro está parado\n"

let  carActions = (run, stopp) => {

    return run + stopp
}

let action = (run, stopp, callback) =>{
    
    return callback(run, stopp);
}

console.log(action(run, stopp, carActions))