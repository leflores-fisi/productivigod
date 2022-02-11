import { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodoButton from './AddTodoButton';

function TodosGroup({ title, todos }) {

  const [opened, setOpened] = useState(true)

  const handleChange = () => {
    setOpened(prev => !prev)
  }

  return (
    <div className='todos-group'>
      <header className='todos-group__header' onClick={handleChange}>
        <div className='title'>{title}</div>
        <AddTodoButton groupTitle={title}/>
      </header>
      {
        opened ?
        < >
          <ul className='todos-list'>
            {
              todos.map(todo => {
                return (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  text={todo.text} 
                  status={todo.status}
                  groupTitle={title}
                />)
              })
            }
          </ul>
        </>
        : null // hidden todos
      }
    </div>
  )
}
export default TodosGroup;