// es module system
import mul, { add, sub } from "./math.js"; // 동일한 경로로 값을 불러오는 여러 개 import문은 합치는 것도 가능함

// es module system을 이용할 때는 .js 같은 확장자를 입력해야 함
// import mul from "./math.js";
// import { add, sub } from "./math.js";
console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 3));

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);

// common js
// const moduleData = require("./math");
// // const { add, sub } = require("./math"); -> 위랑 같은 뜻
// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));
// console.log(moduleData);

// console.log("안녕 Node.js");
