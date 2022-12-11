/*Adicione seu codigo abaixo */

array = [1,2,3,4,5]

function minhaCallBackForEach(element, index, array) {
  array[index] = `Número ${element} na posição: ${index}, veio desse array: ${array}`;
}

function meuMetodoforEach(array, callback) {
    for(let index = 0; index < array.length; index++){
      const currentValue = array[index]
      callback(currentValue, index, array)
    }
  }

  meuMetodoforEach(array, minhaCallBackForEach)
console.table(array)






