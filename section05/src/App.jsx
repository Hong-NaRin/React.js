import "./App.css";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Register />
    </>
  );
}

// import Header from "./components/Header.jsx";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Button from "./components/Button";
// import Bulb from "./components/Bulb";
// import Counter from "./components/Counter";

// function App() {
//   const buttonProps = {
//     text: "메일",
//     color: "red",
//     a: 1,
//     b: 2,
//     c: 3,
//   };

//   return (
//     <>
//       {/* <Header />
//       <Main />
//       <Footer /> */}

//       <Button {...buttonProps} />
//       {/* <Button text={"메일"} color={"red"} /> */}
//       <Button text={"카페"} />
//       <Button text={"블로그"}>
//         <div>자식요소</div> {/* 컴포넌트를 전달해도 됨 */}
//       </Button>
//       <Bulb />
//       <Counter />
//     </>
//   );
// }

export default App;
