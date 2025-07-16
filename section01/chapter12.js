// 1. 함수 표현식 (호이스팅X)
function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA);

let varB = function funcB() {
  // let varB = function () { -> 익명함수로 적어도 됨
  console.log("funcB");
};

varB(); // 값으로 함수를 선언하면 함수의 이름 funcB();로 호출할 수 없음

// 2. 화살표 함수
// let varC = () => 1;
let varC = (value) => {
  console.log(value);
  return value + 1;
};
console.log(varC(10));
