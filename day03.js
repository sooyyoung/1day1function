// 2022.05.18
// 최솟값/최댓값 구하기

// 최솟값 1개만 구하는 것이므로
// 1. 변수 output을 배열의 첫번째 요소로 설정한다.
// 2. 배열 전체를 반복해서 output보다 더 작은 값이 있는지 확인한다.
// 3. 더 작은 값(item)이 있다면 output의 값을 item으로 변경한다.
function min(array){
    let output = array[0]
    for (const item of array){
        if (output > item){
            output = item
        }
    }
    return output;
}
const Arr = [52, 24, 32, 10, 46];
console.log(`${Arr} 중에 최솟값은? ${min(Arr)}`);  


// 최댓값 구하기
function max(array){
    let output = array[0]
    for (const item of array){
        if (output < item){
            output = item
        }
    }
    return output;
}
const Arr2 = [34, 14, 55, 20, 9];
console.log(`${Arr2} 중에 최댓값은? ${max(Arr2)}`);  
