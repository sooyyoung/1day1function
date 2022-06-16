// 2022.05.27
// 소수판별

// 소수? : 약수가 1과 자기 자신뿐인 자연수 (2, 3, 5, 7, 11, 13, 17, 19, 23...)
// 2부터 n까지 숫자 중, n이 i로 나누어 떨어지지 않으면 소수이다.
// 1은 소수가 아니다.

// 소수이면 Yes, 아니면 No 출력

function checkPrime(n){
  for (let i = 2; i < n; i++){
    if(n % i === 0){
      console.log("no");
      return false
    }
    if (n === 1){
      console.log("no");
      return false
    }
    console.log("yes");
  }
}
checkPrime(n)
