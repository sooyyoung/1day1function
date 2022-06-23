// 2022.06.14
// 오타 수정하기

// 문장이 입력되면 모든 q를 e로 바꾸기

// 입력 : hqllo my namq is hyqwon
// 출력 : hello my name is hyewon

// replaceAll(문자열, 찾을 문자열, 덮어쓸 문자열);

const word = prompt('문장을 입력하세요');

function replaceAll(str, searchStr, replaceStr){
  return str.split(searchStr).join(replaceStr);
}

console.log(replaceAll(word, 'q', 'e'));