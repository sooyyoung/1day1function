// 2022.05.16
// 윤년인지 확인하기

// 4로 나누어 떨어지는 해는 윤년이다.
// 100으로 나누어 떨어지는 해는 윤년이 아니다.
// 400으로 나누어 떨어지는 해는 윤년이다.

// 숫자인 년도를 매개변수로 입력했을 때 윤년이면 true, 아니면 false 반환

function isLeapYear(year) {
    return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0);
}

console.log(`2022년은 윤년인가? === ${isLeapYear(2022)}`);  // false
console.log(`2020년은 윤년인가? === ${isLeapYear(2020)}`);  // true
