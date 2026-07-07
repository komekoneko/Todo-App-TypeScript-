import './App.css'
import { useState } from 'react'


type Todo = {
  id: number,
  text: string,
  done: boolean
}
function App() {
  const [ todos, setTodos ] = useState<Todo[]>([])
  const [ input, setInput] = useState("");

  const addTodo = () => {
    const result = [...todos, { id: Date.now(), text: input, done: false }];
    setTodos(result);
    setInput("");
  }

  return (
    <>
      <h1>Todo App</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>追加</button>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>
        })}
      </ul>
    </>
  )
}

export default App
