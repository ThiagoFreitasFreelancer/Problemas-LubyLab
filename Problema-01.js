

/*
1) Implemente um método que crie um novo array baseado nos valores passados.
Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']
*/

/**
 * Creat New Array Whit Size "size" and Complet Whit "any" Object
 * size : Numbe
 * any : Any
 */
function newArray(size, any){
    if(typeof size != "number"){
        return "incorrect or unexpected value";
    }
    let newarray = []

    for(let i = 0; i < size; i++){
        newarray.push(any);
    }
return newarray}

