/* Ex 01:

Declare uma variável com o nome status. Atribua a ela um valor booleano: (true ou false).

Em seguida, faça um if que avalie o valor contido nesta variável. Se o valor armazenado for true, imprima a seguinte mensagem no console: O valor é true - verdadeiro. Caso contrário, imprima a mensagem: O valor é false - falso. */


function firstIf()
{
    let status = true;

    if (status == true)
    {
        return console.log("O valor é true - verdadeiro.");
    }

    if (status == false)
    {
        return console.log("O valor é false - falso.")
    }

    if( status != true && status != false)
    {
        return console.log("Insira um valor booleano válido.");
    }
}

firstIf();

