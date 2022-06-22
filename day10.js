// 2022.06.13
// 딸기를 키위로 바꿔줘

const array = ['🍌', '🍓', '🍇', '🍓'];

function replace(array, from, to) {
  const newReplace = Array.from(array);
  for (let i = 0; i <= newReplace.length; i++) {
    if (newReplace[i] === '🍓') {
      newReplace[i] = '🥝';
    }
  }
  return newReplace;
}

const result = replace(array);
console.log(result);