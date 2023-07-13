


/*

10) Implemente um método que encontre os valores comuns entre dois arrays.
Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

*/

function equalsAay(array1, array2) {

    const newArray = array1.filter(number => array2.includes(number)) 
    console.log(newArray)
    return newArray

}