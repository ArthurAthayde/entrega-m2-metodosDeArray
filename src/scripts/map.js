array = [1,2,3,4,5]

let numbersMaped = []

function minhaCallBackMap (element, index, array) {
array[index] = `Número mapeado ${element} tem o index ${index} e tem como array original ${array}`;
}

function meuMetodoMap(array, callback){
  for (let index = 0; index < array.length; index++) {
    const currentValue = array[index];
    numbersMaped.push(currentValue * 2)
    callback(currentValue, index, array);
  }
}

meuMetodoMap(array, minhaCallBackMap)
console.table(numbersMaped);
