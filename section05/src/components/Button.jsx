// const Button = (props) => {
//   console.log(props);
//   return (
//     <button style={{ color: props.color }}>
//       {props.text} - {props.color}
//     </button>
//   );
// };

// 자동으로 설정될 기본값 (버튼에 컬러 props가 없을 때를 위해)
const Button = ({ text, color = "black", children }) => {
  function onClickButton(e) {
    console.log(text);
    console.log(e);
  }
  return (
    <button
      onClick={onClickButton}
      // onMouseEnter={onClickButton} {/* 마우스를 커서 */}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {/* color가 없는데 toUpperCase를 하면 오류가 발생하므로 기본값 설정해야 함*/}
      {children}
    </button>
  );
};

export default Button;
