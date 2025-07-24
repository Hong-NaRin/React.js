import "./App.css";
import Header from "./components/header";
import Editor from "./components/Editor";
import List from "./components/List";
// import Exam from "./components/Exam";
import { useState, useRef, useReducer } from "react";

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

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state]; // action.data는 onCreate에서 dispatch를 호출하면서 전달한 새로운 todoItem
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  const onUpdate = (targetId) => {
    // targetId와 일치하는 id를 갖는 todo 아이템의 isDone 변경
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };

  const onDelete = (targetId) => {
    // 전달받은 targetId와 일치하지 않는 todo만 남겨서 새 배열을 만들고, 상태 업데이트
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };

  return (
    <div className="App">
      {/* <Exam /> */}
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
