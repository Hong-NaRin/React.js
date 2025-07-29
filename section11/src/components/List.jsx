import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";

const List = () => {
  // 앱 컴포넌트 return 문에 {TodoStateContext.Provider value={todos}에서
  // 그대로 전달했기 때문에 객체가 아니므로 구조분해 할당이 아닌 바로 받아오게 만들어줌
  // const {todos} = useContext(TodosContext);
  const todos = useContext(TodoStateContext);

  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilterData = () => {
    if (search === "") {
      return todos;
    }
    // todos 배열에 filter 메서드를 호출하고 결과값 반환
    // -> 배열의 모든 todo item을 순회하면서 연산의 결과값이 참이 되는 값만 필터링
    return todos.filter(
      (todo) => todo.content.toLowerCase().includes(search.toLowerCase()) // 대소문자랑 관계없이 검색 결과
    ); // includes로 문자열에 포함된 값을 반환
  };

  const filteredTodos = getFilterData();

  // const getAnalyzedData = () => {
  //   console.log("getAnalyzedData 호출!");
  //   const totalCount = todos.length; // 초기화
  //   const doneCount = todos.filter((todo) => todo.isDone).length; // 전체 todo들 중에 완료된 todo의 개수 저장
  //   const notDoneCount = totalCount - doneCount; // 완료되지 않은 todo들의 개수 저장

  //   return {
  //     totalCount,
  //     doneCount,
  //     notDoneCount,
  //   };
  // };

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  // 메모이제이션
  // useEffect는 deps에 들어가는 값이 바뀌면 콜백함수를 다시 실행함 = useMemo도 똑같음
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzedData 호출!");
    const totalCount = todos.length; // 초기화
    const doneCount = todos.filter((todo) => todo.isDone).length; // 전체 todo들 중에 완료된 todo의 개수 저장
    const notDoneCount = totalCount - doneCount; // 완료되지 않은 todo들의 개수 저장

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]); // deps에 포함된 값이 변경되었을 때만 콜백함수 {}를 다시 실행
  // 2번째 배열 -> 의존성 배열(deps)

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total : {totalCount}</div>
        <div>done : {doneCount}</div>
        <div>notDone : {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id} // key prop으로 전달해야 함
              {...todo}
              // TodoContext를 사용하므로 제거
              // onUpdate={onUpdate}
              // onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
