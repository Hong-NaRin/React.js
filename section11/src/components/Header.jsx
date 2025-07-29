import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1> {new Date().toDateString()}</h1>
    </div>
  );
};

// 메모 메서드는 인수로 받은 Header컴포넌트를 props가 변경되지 않았을 때는 리렌더링 X
const memoizedHeader = memo(Header); // 최적화하고 싶은 컴포넌트를 인수로 넣음

export default memoizedHeader;
// export default memo(Header); -> 이렇게만 적어도 됨
