// 스코프
// -> 전역(전체 영역) 스코프 & 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프
function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);

  // function funcB() {} // 함수 선언식에서는 지역 스코프를 가짐
}

funcA();
// funcB(); // 지역 스코프 함수 a오류
// console.log(b); // 오류 발생

if (true) {
  let c = 1; // 지역 스코프
}

for (let i = 0; i < 10; i++) {
  let d = 1; // 지역 스코프
  function funcB() {} // 반복문 안에서는 함수가 지역 스코프를 가지지 않음
}
