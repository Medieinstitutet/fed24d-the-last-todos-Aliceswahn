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
      <li onClick={() => onComplete(todo.id)} style={{ cursor: 'pointer' }}>
        {todo.text}
      </li>
    )
  }
  
  export default TodoItem
  