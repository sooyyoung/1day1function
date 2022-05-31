// 2022.06.07
// 모의고사 평균점수 계산기

// 첫번째 인자는 array, 이전까지 맞아왔던 모의고사 점수
// 두번째 인자는 number, 이번에 맞은 모의고사 점수
// 이전까지 맞아왔던 모의고사들의 점수 평균을 구해서 이번에 맞은 모의고사 점수와 비교 

function cal(arr, b) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result = result + arr[i];
    }

    if (result / arr.length > b) {
      console.log(`${result / arr.length - b}만큼 떨어졌네요! 아쉽`);
    } else {
      console.log(`${b - result / arr.length}만큼 올랐네요! 축하`);
    }
}

cal([20, 30, 40], 20);        // 10만큼 떨어졌네요! 아쉽
cal([40, 60, 80, 96], 76);    // 7만큼 올랐네요! 축하
