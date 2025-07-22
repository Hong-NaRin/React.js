import "./Main.css";

// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다
const Main = () => {
  // const number = 10;
  // const obj = { a: 1 };

  const user = {
    name: "이정환",
    isLogin: true,
  };

  return (
    // <main>
    //   <h1>main</h1>
    //   <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
    //   {10}
    //   {number}
    //   {[1, 2, 3]}
    //   {true} { /* 값 렌더링 X */ }
    //   {undefined} {/* 값 렌더링 X */ }
    //   {null} {/* 값 렌더링 X */}
    //   {obj.a}
    // </main>
    <>
      {user.isLogin ? (
        // 자바스크립트랑 html을 함께 쓰고 있기 때문에 class="logout"이라고 적으면 안됨
        <div className="logout">로그아웃</div>
      ) : (
        <div>로그인</div>
      )}
    </>
  );
};

export default Main;
