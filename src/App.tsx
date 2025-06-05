import "./App.css";
import { useEffect, useState } from 'react'

type Todo = {
  id: number
  text: string
  done: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const stored = localStorage.getItem("todos")
    return stored ? JSON.parse(stored) : [
      { id: 1, text: 'Läs klart veckans bok', done: false },
      { id: 2, text: 'Boka tid för vaccination', done: false },
      { id: 3, text: 'Tvätta bilen', done: false },
    ]
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const handleComplete = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
  }

  return (
    <main>
      <h1>Todo-lista</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleComplete(todo.id)}>
            {todo.text}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App


