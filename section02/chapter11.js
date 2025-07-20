// 동기와 비동기
console.log(1);

// setTimeout -> 원하는 코드를 특정 시간이 지난 이후에 비동기적으로 실행할 수 있는 함수
setTimeout(() => {
  console.log(2);
}, 3000); // 3초를 세는 타이머만 설정해 놓고 기다리지 않기 때문에 3이 먼저 출력되고 2가 출력됨

console.log(3);
