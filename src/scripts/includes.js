array = [1, 2, 3, 4, 5]

function meuMetodoIncludes(array, value, fromIndex) {
    if (fromIndex) {
        for (let i = fromIndex; i < array.length; i++) {
            let currentValue = array[i];
            if (value === currentValue) {
                return true;
            }
        }
        return false;
    }else{
        for (let i = 0; i < array.length; i++) {
            let currentValue = array[i];
            if (value === currentValue) {
                return true;
            }
        }
        return false;
    }
}
    console.log(meuMetodoIncludes(array, 2, 1));
