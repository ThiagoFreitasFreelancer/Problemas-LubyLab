

/*

9) Implemente um método divida um array por uma quantidade passada por parâmetro.
Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

*/

function sliceArr(array, val){
    let a = []
    array.forEach((value, index) => {
        if(index%val === 0){
            a.push(array.slice(index, index+val))
        }
    })
    console.log(a)
}