/*Adicione seu codigo abaixo */

array = [1, 2, 3, 4, 5]

function minhaCallBackForIndexOf(element, index, array) {
    if (element === index) {
        console.log(index);
    }
}

function meuMetodoforIndexOf(array, callback) {
    for (let index = 0; index < array.length; index++) {
        const currentValue = array[index]
        callback(currentValue, index, array)
    }
}

meuMetodoforIndexOf(array, minhaCallBackForIndexOf)


