// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity; // 양의 무한대
let mInf = -Infinity; // 음의 무한대

let nan = NaN; // 수치연산이 실패했을 때의 결과값
console.log(1 * "hello"); // NaN

// 2. String Type
let myName = "이정환"; // 작은 따옴표나 큰 따옴표 같이 사용
let myLocation = "목동";
let introduce = myName + myLocation;
console.log(introduce); // 이정환목동

let introduceText = `${myName}은 ${myLocation}에 거주합니다.`; // 변수의 값을 동적으로 포함시킴 (벡틱)
console.log(introduceText); // 이정환은 목동에 거주합니다.

// 3. boolean Type
let isSwithchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없음) -> 5번과 다르게 명시적으로 값을 없다고 설정해야 함
let empty = null;

// 5. Undifined Type (변수 선언하고 어떤 값을 집어 넣지 않았을 때 자동으로 할당되는 값 )
let none;
console.log(none);
