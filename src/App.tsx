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

  const toggleTodo = (id: number) => {
    const tgReasult = todos.map((todo) => {
       return todo.id === id? {...todo, done: !todo.done}: todo
    })
      setTodos(tgReasult);
  }

  return (
    <>
      <h1>Todo App</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>追加</button>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}
           onClick={() => toggleTodo(todo.id)}
           style={{textDecoration: todo.done?  "line-through": "none"}}
           >{todo.text}</li>
        })}
      </ul>
    </>
  )
}

export default App
