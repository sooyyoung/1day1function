// 2022.06.03
// 영희 있나요? 

// return이 없을 경우 '있어요!' 가 두 번 찍힌다! 출석부에 영희 이름이 중복되기 때문이다.
// 영희 이름은 한 번만 확인하면 되므로 return으로 함수를 종료해 준다.

let 출석부 = ['흥민', '영희', '철수', '재석', '영희'];

function isName(name){
    for (i = 0; i <= 출석부.length; i++){
        if(name == 출석부[i]){
            console.log('있어요~!!');
            return;
        }
    }
}
isName('영희');
