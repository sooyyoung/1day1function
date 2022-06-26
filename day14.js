// 2022.06.20
// class & constructor

class Student {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  sayHi(){
    return `안녕 나는 ${this.name}이야`;
  }
}

let 학생1 = new Student('Kim', 20);
let 학생2 = new Student('Park', 21);

console.log(학생1);
console.log(학생2.sayHi());