// 5가지의 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드

let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
  // 배열의 요소에 위치한 값, 인덱스, arr
  console.log(idx, item);
});

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr); // [2, 4, 6]

// 2. includes
// 배열의 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
let isInclude2 = arr2.includes(10);
console.log(isInclude); // 3이 존재하니까 true
console.log(isInclude2); // false

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let arr4 = [2, 2, 3];
let index = arr3.indexOf(2);
let index2 = arr4.indexOf(2);
console.log(index); // 2의 값이 1번 인덱스에 있으므로 1 반환, 값이 없으면 -1 반환
console.log(index2); // 같은 값이 들어있으면 앞에서부터 탐색하기 때문에 앞에 있는 인덱스 0 반환

// indexOf는 얕은 비교를 하기 때문에 배열에서 특정 객체값이 존재하는지 찾을 수 없으므로 findIndex를 사용해야 함
let objectArr = [{ name: "이정환" }, { name: "홍길동" }];
console.log(objectArr.indexOf({ name: "이정환" })); // -1
console.log(objectArr.findIndex((item) => item.name === "이정환")); // 0

// 4. finedIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 메서드
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr5 = [1, 2, 3];
const findedIndex = arr5.findIndex((item) => {
  if (item % 2 !== 0) return true;
});

console.log(findedIndex);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr6 = [{ name: "이정환" }, { name: "홍길동" }];
const finded = arr6.find((item) => item.name === "이정환");
console.log(finded); // 객체 자체가 반환 {name: '이정환'}
