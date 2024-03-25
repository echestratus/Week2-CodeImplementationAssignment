const divideAndSort= (num) => {
    num = num.toString().split("0");
    num = num.map((value) => {
        return value.split("").sort((a, b) => a - b).join("");
    });
    num = parseInt(num.join(""));
    return num;
}
console.log(divideAndSort(5956560159466056));