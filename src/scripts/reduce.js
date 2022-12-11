array = [1,2,3,4,5]

let reduceResult = 0;

const minhaCallBackReduce = element =>{
reduceResult+= element;
   
}

function meuMetodoReduce(array, callback){
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    callback(currentValue);
  }
}

meuMetodoReduce(array, minhaCallBackReduce)
console.log(reduceResult);
