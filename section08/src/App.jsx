import "./App.css";
import Header from "./components/header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useState, useRef } from "react";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React.js 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "TypeScript 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "next.js 공부하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    // todos State의 값들 중에
    // targetId와 일치하는 id를 갖는 todo 아이템의 isDone 변경

    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열을 전달해줘야 함
    setTodos(
      todos.map((todo) => {
        // todo는 각 배열 요소를 담기 위한 변수 이름 (=item)
        if (todo.id === targetId) {
          return {
            ...todo,
            isDone: !todo.isDone, // isDone 값을 반대로 뒤집은 새 객체로 반환
          };
        }
        return todo; // 원래 todo 아이템을 반환해서 변형되지 않도록 설정
      })
    );
  };

  const onDelete = (targetId) => {
    // 인수 : todos 배열에서 targetId와 일치하는 Id를 갖는 요소만 삭제한 새로운 배열을 넣어줌 -> setTodos(인수)
    // 전달받은 targetId와 일치하지 않는 todo만 남겨서 새 배열을 만들고, 그걸 setTodos로 상태 업데이트
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
