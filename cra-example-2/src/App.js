import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);
  return (
    <div>
      <h1>My To Dos {toDos.length}</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (toDo === "") {
            return;
          }
          setTodo(""); // submit 할 때마다 input field 초기화
          setToDos((currentArray) => [toDo, ...currentArray]);
          /* 
           !: setToDos의 사용법
           setTodos(currentArray) {
             !: 여기서 toDo의 값은 인풋 필드에 입력되는 값이다.
            return [toDo, ...currentArray];
           }
          */
        }}
      >
        <input
          value={toDo}
          onChange={(event) => {
            setTodo(event.target.value);
          }}
          type="text"
          placeholder="Write your to do..."
        ></input>
        <button>Add to do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
