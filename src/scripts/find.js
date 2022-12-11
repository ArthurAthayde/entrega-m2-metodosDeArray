array = [1, 2, 3, 4, 5]

const minhaCallBackFinded = element => {
    console.log(element);
}

function meuMetodoFind(array, callback, value) {
    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i];
        if (currentValue > value) {
            callback(currentValue);
            return currentValue;
        }
    }
}

meuMetodoFind(array, minhaCallBackFinded, 2)
