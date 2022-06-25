// 2022.06.16 
// react - useState로 냅다 바꾸기

import { useState } from 'react';

function Hello(props) {
  const [name, setName] = useState('뚜용')
  const [age, setAge] = useState(props.age)
  let msg = age > 19 ? '성인' : '미자'
  let color = 'white'

  function newColor(){
    color = color === 'white' ? 'black' : 'white'
    document.querySelector('#color').textContent = color
  }

  return (
    <div>
      <h1>Study State</h1>
      <h2>{name} {age}세 {msg}</h2>
      <button onClick={() => {
        setName(name === '띠용' ? '뚜용' : '띠용')
        setAge(age + 1)
      }}>Change 1</button>
      <p id='color'>{color}</p>
      <button onClick={newColor}>Change 2</button>
    </div>
  )
}

function App() {
  return (
    <Hello age={16}/>
  )
}

export default App;