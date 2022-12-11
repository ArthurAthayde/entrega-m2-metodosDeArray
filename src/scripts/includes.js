array = [1, 2, 3, 4, 5]

const minhaCallBackIncludes = element => {
    if (element = true) {
        console.log(Boolean(element));
    }


}

function meuMetodoIncludes(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i];
        if (currentValue === 5) {
            callback(currentValue);
        }
    }

}

meuMetodoIncludes(array, minhaCallBackIncludes);