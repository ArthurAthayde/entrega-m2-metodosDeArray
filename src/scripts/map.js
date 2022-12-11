array = [1,2,3,4,5]

let numbersMaped = []

const minhaCallBackMap = element => numbersMaped.push(element * 2)

function meuMetodoMap(array, callback){
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    callback(currentValue);
  }
}

meuMetodoMap(array, minhaCallBackMap)
console.log(numbersMaped);
