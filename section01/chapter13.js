// 1. 콜백함수
function main(value) {
  // console.log(1);
  // console.log(2);
  value(); // 원하는 타이밍에 실행시킬 수 있음
  // console.log("end");
}

function sub() {
  console.log("sub");
}

main(sub);

/* ----- 위에랑 같은 방식 -----*/
// main(function () {
//   console.log("sub");
// });

// main(() => {
// console.log("sub");
// });

// 2. 콜백함수의 활용

/* -- 중복 함수 불필요 -- */
// function repeat(count) {
//   for (let i = 1; i <= count; i++) {
//   console.log(i);
//   }
// }

// function repeatDouble(count) {
//   for (let i = 1; i <= count; i++) {
//     console.log(i * 2);
//   }
// }

function repeat(count, callback) {
  for (let i = 1; i <= count; i++) {
    callback(i);
  }
}

repeat(5, function (i) {
  console.log(i);
});

// repeatDouble(5);
repeat(5, function (i) {
  console.log(i * 2);
});
