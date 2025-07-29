import "./App.css";
import Header from "./components/header";
import Editor from "./components/Editor";
import List from "./components/List";
// import Exam from "./components/Exam";
import {
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext,
  useMemo,
} from "react";
import { use } from "react";

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

// 하나로만 Context하면 TodoItem에서 todos만 다시 생성되어야 하지만
// onUpdate, onDelete 객체도 계속 다시 생성되기 때문에 2개로 나눔
// export const TodoContext = createContext();
// console.log(TodoContext);

export const TodoStateContext = createContext(); // todos
export const TodoDispatchContext = createContext(); // onCreate, onUpdate, onDelete

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

  // useCallback으로 메모리제이션 하기 위해 주석처리
  // const onUpdate = (targetId) => {
  //   // targetId와 일치하는 id를 갖는 todo 아이템의 isDone 변경
  //   dispatch({
  //     type: "UPDATE",
  //     targetId: targetId,
  //   });
  // };

  const onUpdate = useCallback((targetId) => {
    // targetId와 일치하는 id를 갖는 todo 아이템의 isDone 변경
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  // useCallback으로 메모리제이션 하기 위해 주석처리
  // const onDelete = (targetId) => {
  //   // 전달받은 targetId와 일치하지 않는 todo만 남겨서 새 배열을 만들고, 상태 업데이트
  //   dispatch({
  //     type: "DELETE",
  //     targetId: targetId,
  //   });
  // };

  // 함수를 메모이제이션 -> deps를 빈 배열로 생성하면 최초로 mount될 때 한 번 생성
  // -> 리렌더링 한다고 해도 함수를 다시 생성할 수 없게 함
  // ex) const func = useCallback(() => {}, []);
  const onDelete = useCallback((targetId) => {
    // 전달받은 targetId와 일치하지 않는 todo만 남겨서 새 배열을 만들고, 상태 업데이트
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []); // 빈 배열을 전달해서 객체값이 앱 컴포넌트 마운트 이후에는 다시 재생성하지 않도록 설정

  return (
    <div className="App">
      {/* <Exam /> */}
      <Header />
      {/* <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} /> */}

      {/* Editor와 List 컴포넌트를 Provider 컴포넌트로 감싸서 설정해주면 
      value 데이터를 공급받아서 이용할 수 있음 */}
      {/* <TodoContext.Provider
        value={{
          todos,
          onCreate,
          onUpdate,
          onDelete,
        }}
      >
        <Editor />
        <List />
      </TodoContext.Provider> */}
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
