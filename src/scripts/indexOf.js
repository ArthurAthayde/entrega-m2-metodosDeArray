/*Adicione seu codigo abaixo */

array = [1, 2, 3, 4, 5]

function meuMetodoforIndexOf(array, element) {
    for (let index = 0; index < array.length; index++) {
        const currentValue = array[index]
        if(array[index] === element){
            return index;
        }     
    }
    return -1
}
console.log(meuMetodoforIndexOf(array, 2)); 
