function getCountElement(array) {
    let result = {};
    array.sort();
    let count = 1;
    for(let i = 1; i < array.length; i++) {
        if(array[i] == array[i-1]) {
            count++;
            result[`${array[i]}`] = count;
        } else {
            count = 1;
            result[`${array[i]}`] = count;
        }
    }
    return result;
}
console.log(getCountElement(["one", "two", "three", "one", "one", "three"]));