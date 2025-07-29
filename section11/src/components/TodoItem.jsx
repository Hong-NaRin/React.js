import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onChangeCheckBox = () => {
    onUpdate(id); // onUpdate 함수로 호출하고 인수로 id를 전달
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckBox} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// 메모리제이션 방법 1
// 교차 컴포넌트 (HOC)
// 해당 컴포넌트에 최적화나 메모이제이션 같은 기능이 추가된 새로운 컴포넌트를 반환해주는 것
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // onUpdate, onDelete 같은 객체타입 props를 전달할 때에는 계속 바뀌기 때문에
//   // -> 제대로 된 최적화가 이뤄지지 않아서 memo(TodoItem)만으로는 불가능
//   // 반환값에 따라 Props가 바뀌었는지 안 바뀌었는지 판단
//   // T -> Props 바뀌지 않음 -> 리렌더링 X
//   // F -> Props 바뀜 -> 리렌더링 O

//   // id, isDone, content, date가 바뀔 때만 리렌더링 시키려고 함
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });

// 메모리제이션 방법2 (useCallback)
// 위의 방법처럼 하면 props가 추가될 때마다 조건문을 계속 추가해줘야 하기 때문에 번거로움
export default memo(TodoItem);
