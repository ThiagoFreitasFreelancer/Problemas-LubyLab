

/*

7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

*/
function equalsArray(array1, array2){
    let bool = true
    array1.map(function(ele){
        if(array1.indexOf(ele) != array2.indexOf(ele)){
            return bool = false
        }
    })
    console.log(bool)
}