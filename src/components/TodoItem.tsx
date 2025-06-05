type Todo = {
    id: number
    text: string
    done: boolean
  }
  
  type Props = {
    todo: Todo
    onComplete: (id: number) => void
  }
  
  function TodoItem({ todo, onComplete }: Props) {
    return (
      <li
        onClick={() => onComplete(todo.id)}
        style={{
          textDecoration: todo.done ? 'line-through' : 'none',
          opacity: todo.done ? 0.5 : 1,
          cursor: 'pointer',
        }}
      >
        {todo.text}
      </li>
    )
  }
  
  export default TodoItem
  
  