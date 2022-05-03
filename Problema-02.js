

function arrayReverse(array){

    let Newarray = []
    for(let i = array.length - 1; i != -1; i--){
        Newarray.push(array[i])
    }
    return Newarray
}