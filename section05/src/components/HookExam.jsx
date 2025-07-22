import useInput from "../hooks/useInput";

// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건문이나 반복문 내부에서 호출될 수 없다
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다
// -> 커스텀 훅을 만들 때는 함수 이름 앞에 use라는 접두사 사용

// useInput.jsx 파일에 내용 있음
// function useInput() {
//   const [input, setInput] = useState("");

//   const onChange = (e) => {
//     setInput(e.target.value);
//   };

//   return [input, setInput];
// }

const HookExam = () => {
  const [input, onChange] = useInput("");
  const [input2, onChange2] = useInput(); // 반복 사용할 수도 있음

  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
