// 2022.05.17

// a부터 b까지 더하기
function sumAll(a, b){
    let output = 0;
    for (let i = a; i <= b; i++){
        output += i;
    }
    return output;
}

console.log(`1부터 100까지의 합 : ${sumAll(1, 100)}`);
// 1부터 100까지의 합 : 5050


// a부터 b까지 곱하기
// 곱하기는 초기값을 0으로 하면 어떤 수를 곱해도 0이 되므로 1로 지정해야 한다!
function multiplyAll(a, b){
    let output = 1;
    for (let i = a; i <= b; i++){
        output *= i;
    }
    return output;
}

console.log(`1부터 3까지의 곱 : ${multiplyAll(1, 3)}`);
// 1부터 3까지의 곱 : 6
