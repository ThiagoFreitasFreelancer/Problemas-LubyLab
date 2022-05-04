

/*

4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}

*/
function convertArrayObject(array){

    let objeto = Object()
    let aux;

    array.map(function(num){
        if(typeof num == "string"){
            objeto[num]
            aux = num
        }else{
            objeto[aux] = num
        }
    })
    return objeto
}