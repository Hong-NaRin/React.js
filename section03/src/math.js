// math 모듈

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// multiply 함수는 default로 내보내져서 math module을 대표하는 기본 값이 됨
export default function multiply(a, b) {
  return a * b;
}

// common js
// // module이라는 내장 객체에exports라는 프로퍼티에 객체를 저장
// module.exports = {
//   add: add, // key와 value값이 똑같을 경우 함수의 이름만 명시해줘도 됨
//   sub,
// };

// Es module system
export { add, sub };
