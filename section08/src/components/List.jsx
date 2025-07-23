import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
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

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ); // key prop으로 전달해야 함
        })}
      </div>
    </div>
  );
};

export default List;
