// 2022.05.31
// 요일 확인하기

// 월 a, 일 b를 입력받아 무슨 요일인지 리턴
// new Date() : 새로운 date 객체를 반환
// getDay() : 일~토 (0~6)로 표현하기 때문에 "SUN"부터 배열에 넣기
// getMonth()도 0부터 시작

const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function checkDay(a, b) {
  const theDay = new Date(`2022-${a}-${b}`);
  console.log(day[theDay.getDay()]);
}

checkDay(a, b);
