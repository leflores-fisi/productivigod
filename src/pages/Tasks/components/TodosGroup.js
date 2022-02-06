import { useState } from 'react';
import TodoItem from './TodoItem';
import TodoTextInput from './TodoTextInput';

function TodosGroup({ title, todos }) {

  const [opened, setOpened] = useState(true)

  const handleChange = () => {
    setOpened(prev => !prev)
  }

  return (
    <div className='todos-group'>
      <header className='todos-group__header' onClick={handleChange}>
        <input type='checkbox' onChange={handleChange} checked={opened}/>
        <div>{title}</div>
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
          <TodoTextInput groupTitle={title}/>
        </>
        : <div>TODOS DOES NOT EXIST IN TodosGroup.js</div>
      }
    </div>
  )
}
export default TodosGroup;