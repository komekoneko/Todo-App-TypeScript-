import './App.css'
import { useEffect, useState } from 'react'


type Todo = {
  id: number,
  text: string,
  done: boolean
}

type Filter = "all" | "active" | "completed"
function App() {
  const saved = localStorage.getItem("todos");

  const [ todos, setTodos ] = useState<Todo[]>(saved? JSON.parse(saved) : [])
  const [ input, setInput] = useState("");
  const [filter, setFilter] = useState<Filter>("all")

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = () => {
    if(input === ""){
      return alert("何か入力してください");
    }
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

  const deleteTodo = (id: number) => {
    const dlResult = todos.filter((todo) => {
      return id !== todo.id;
    })
    setTodos(dlResult);
  }

  const visibleTodos = todos.filter((todo) => {
    if(filter === "all"){
      return true
    }else if(filter === "active"){
      return !todo.done
    }else {
      return todo.done
    }
  })

  return (
    <>
      <h1>Todo App</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>追加</button>
      <button onClick={() => setFilter("all")} >all</button>
      <button onClick={() => setFilter("active")}>active</button>
      <button onClick={() => setFilter("completed")}>completed</button>
      <ul>
        {visibleTodos.map((todo) => {
          return <li key={todo.id}
           onClick={() => toggleTodo(todo.id)}>
            <span style={{textDecoration: todo.done?  "line-through": "none"}}>{todo.text}</span>
            <button onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id)}}>削除</button></li>
        })}
      </ul>
    </>
  )
}

export default App
