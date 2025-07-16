// 함수 선언

// function greeting() {
//   console.log("안녕하세요");
// }

// console.log("호출 전");
// greeting();
// console.log("호출 후");

// 호이스팅 -> 끌어올림 (아래에 둬도 함수 선언됨)
function getArea(width, height) {
  function another() {
    // 중첩 함수
    console.log("another");
  }

  another();

  let area = width * height;
  return area; // console.log(area);
}

let area1 = getArea(10, 20);
console.log(area1);

getArea(120, 200); // console
