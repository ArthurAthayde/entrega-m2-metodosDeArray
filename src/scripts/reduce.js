array = [1,2,3,4,5]

const initalValue = 0;
let reduceResult = 0;

function minhaCallBackReduce(initalValue, element){
   
}

function meuMetodoReduce(array, callback){
  for (let index = 0; index < array.length; index++) {
    const currentValue = array[index];
    reduceResult = initalValue + currentValue
    callback(currentValue, index, array);
  }
}

meuMetodoReduce(array, minhaCallBackReduce)
console.log(reduceResult);
