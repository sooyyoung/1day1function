// 2022.06.15
// react - input창에 값을 입력하고 버튼을 클릭하면 업로드

import { useState } from 'react';

function App() {
  const [names, setNames] = useState(['홍길동', '김영희']);
  const [input, setInput] = useState('');   

  // input을 입력할 때 상태마다 핸들링
  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  // 업로드 처리
  const handleUpload = () => {
    // state 업데이트
    setNames((prevState) => {   // prevState - 업데이트 전의 이전 상태
      // console.log('이전 state: ', prevState);
      return([input, ...prevState])   // 현재 prevState == ['홍길동', '김영희']
    })
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange}/>
      <button onClick={handleUpload}>Upload</button>

      {/* 화면에 이름 출력 */}
      {names.map((name, index) => {
        // map을 사용해서 요소를 출력할 때는 key가 필요, key값으로 배열의 index
        return <p key={index}>{name}</p>
      })}
    </div>
  );
}

export default App;