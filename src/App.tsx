import "./App.css";
import { useState } from 'react'

type Todo = {
  id: number
  text: string
  done: boolean
}

function App() {
  const [todos] = useState<Todo[]>([
    { id: 1, text: 'Läs klart veckans bok', done: false },
    { id: 2, text: 'Boka tid för vaccination', done: false },
    { id: 3, text: 'Tvätta bilen', done: false },
  ])

  return (
    <main>
      <h1>Todo-lista</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App

