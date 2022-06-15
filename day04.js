// 2022.05.23

// 삼육구 삼육구
// 숫자에 3,6,9가 포함되어 있는 만큼 박수 치기!

// for of 문을 사용해서 요소의 값이 3,6,9라면 배열에 짝👏을 추가한다.
// toString() : 수를 문자열로 반환한다.
// split() : 문자열을 구분자를 이용하여 분할한다.

function 삼육구(number) {
    let nums = number.toString().split('');
    let clap = [];
  
    for (let num of nums) {
      if (num === '3' || num === '6' || num === '9') {
        clap.push('짝👏');
      }
    }
    return clap;
}
  
console.log(삼육구(369));
console.log(삼육구(336699));
console.log(삼육구(12));
