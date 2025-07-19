// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr; // four만 적으면 1 2 3 undifined
console.log(one, two, three, four); // 1 2 3 4

// 2. 객체의 구조 분해 할당
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

let { name, age: myAge, hobby, extra = "hello" } = person; // 객체는 {} 이용
console.log(name, myAge, hobby, extra); // 이정환 27 테니스 hello

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra); // 이정환 27 테니스 undifined
};

func(person); // 위에 person이라는 객체를 넘겼기 때문에 구조 분해 할당이 가능, 10 같은 값 넘기면 X
