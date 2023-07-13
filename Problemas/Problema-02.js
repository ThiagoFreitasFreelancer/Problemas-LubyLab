

/*

2) Implemente um método que inverta um array, não utilize métodos nativos do array.
Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

*/

function arrayReverse(array){

    let Newarray = []
    for(let i = array.length - 1; i != -1; i--){
        Newarray.push(array[i])
    }
    console.log(Newarray)
}