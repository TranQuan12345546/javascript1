let stringArray = ['aba', 'aa', 'ad', 'c', 'vcd'];
function getStringHasMaxLength(string) {
    let result = [];
    let max = string[0].length;
    for (let i = 1; i < string.length; i++) {
        if (max < string[i].length) {
            max = string[i].length;
        }
    }
    for(let i = 0; i < string.length; i++) {
        if(string[i].length === max) {
            result.push(string[i]);
        }
    }
    return result;
}



let result = getStringHasMaxLength(stringArray);
console.log(result);