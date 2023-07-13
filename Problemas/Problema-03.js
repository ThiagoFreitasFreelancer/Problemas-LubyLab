
/*

3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]

*/

/**
 * Remove valores nulos do array
 * @param {[]} array 
 * @returns Array
 */
function clearArray(array){

    let newArray = array.filter(function(num){
        return num
    })

    console.log(newArray)
}