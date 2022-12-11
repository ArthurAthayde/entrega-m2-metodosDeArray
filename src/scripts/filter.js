array = [1, 2, 3, 4, 5];

let numbersFiltered = [];

const minhaCallBackFilter = (element, filter) => {
  if (element >= filter) {
    numbersFiltered.push(element);
  }
}

function meuMetodoFilter(array, callback, filter) {
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    callback(currentValue, filter);
  }
}

meuMetodoFilter(array, minhaCallBackFilter, 3);
console.log(numbersFiltered);
