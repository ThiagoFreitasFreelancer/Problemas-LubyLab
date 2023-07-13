

/*

5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois
 do array de entrada. Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]

*/

function removeItemArray(array, number1, number2){
    
    function isEquals(num){
        if(num != number1 && num != number2){
            return num
        }
    }
    let newArray = array.filter(isEquals)
    console.log(newArray)
}
