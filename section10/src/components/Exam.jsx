import { useReducer } from "react";

// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
  // dispatch가 action 매개변수로 전달됨
  console.log(state, action); // action = dispatch의 객체
  // if (action.type === "INCREASE") {
  //   return state + action.data;
  // } else if (action.type === "DECREASE") {
  //   return state - action.data;
  // }
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  // dispatch : 발송하다, 급송하다
  // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수로 생성
  const [state, dispatch] = useReducer(reducer, 0); // 상태를 실제로 변환시키는 함수, state의 초기값

  const onClickPlus = () => {
    // 인수 : 상태가 어떻게 변화되길 원하는지
    dispatch({
      type: "INCREASE",
      data: 1, // 얼마나 증가시킬 건지
    }); // -> 인수로 전달된 요청의 내용을 담고 있는 것을 액션 객체라고 함
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
