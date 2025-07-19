function returnFalse() {
  console.log("False 함수");
  // return false;
  return undefined;
}

function returnTrue() {
  console.log("True 함수");
  // return true;
  return 10;
}

// console.log(returnFalse() || returnTrue()); // true // 10
console.log(returnFalse() && returnTrue()); // false // undifined

// 단락 평가 활용 사례
function printName(person) {
  // console.log(person && person.name); // undifined
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName(); // person의 값이 없음
printName({ name: "이정환" }); // 이정환
