// 1. 변수 let
let age = 27;
console.log(age);

age = 30; // let age = 30; -> 변경은 할 수 있지만 let 변수 중복 선언은 안됨
console.log(age);

// 2. 상수 const
const birth = "1997.01.07"; // const 선언은 초기화해야 함 (값을 바꿀 수 없음)

// 3. 변수 명명규칙 (네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다. -> let $_name;
// 3-2. 숫자로 시작할 수 없다 -> let name1;, let _2name;
// 3-3. 예약어를 사용할 수 없다. -> let if

// 4. 변수 명명 가이드
let salesCount = 1; // let a = 1; (x) -> 아무도 알아볼 수 없음
let refundCount = 2;
let totalSalesCount = salesCount - refundCount;
