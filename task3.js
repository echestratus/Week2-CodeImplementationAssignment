const divideAndSort= (num) => {
    num = num.toString().split("0");
    newNum = num.map((value) => {
        return value.split("").sort((a, b) => a - b).join("");
    });
    newNum = parseInt(num.join(""));
    return newNum;
}
console.log(divideAndSort(5956560159466056));