// 비동기 작업 처리하기 (Promise)
// const promise = new Promise((resolve, reject) => {
//   // 비동기 작업 실행하는 함수 -> exeutor

//   setTimeout(() => {
//     const num = 10;
//     if (typeof num === "number") {
//       resolve(num + 10); // {<fulfilled>: 20}
//     } else {
//       reject("num이 숫자가 아닙니다");
//     }
//   }, 2000);
// });

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

// // then 메서드 -> 그 후에
// promise
//   .then((value) => {
//     // promise의 결과 값을 불러서 이용할 수 있음
//     console.log(value); // resolve일 때 실행이 되며, reject이면 실행될 수 없음
//   })
//   .catch((error) => {
//     // reject일 때
//     console.log(error);
//   });

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수 -> exeutor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10); // {<fulfilled>: 20}
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
