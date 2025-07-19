// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다
// -> 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
// let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6]; // spread 사용하지 X
let arr2 = [4, ...arr1, 5, 6]; // spread
console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2);

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1); // 1 2 3

// 2. Rest 매개변수 -> Rest는 나머지 -> 나머지 매개변수
function funcB(one, ...rest) {
  // spread가 아닌 rest
  // 첫번째 인수는 one에 저장되고 나머지 값이 rest에 저장됨
  console.log(rest); // [2, 3]
}
funcB(...arr1);
