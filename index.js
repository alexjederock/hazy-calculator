const calculate = (arr) => {
    const operands = ['+', '-', '/', '*']
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (((!isNaN(arr[i]) && arr[i] !== '' && arr[i] !== ' ') || operands.includes(arr[i]))) newArr.push(arr[i])
    }
    if (newArr.length !== 3 || !operands.includes(newArr[1])) return NaN

    switch (newArr[1]) {
        case '+':
            return Number(newArr[0]) + Number(newArr[2])
        case '-':
            return Number(newArr[0]) - Number(newArr[2])
        case '*':
            return Number(newArr[0]) * Number(newArr[2])
        case '/':
            return Number(newArr[0]) / Number(newArr[2])

    }

}


module.exports = calculate
