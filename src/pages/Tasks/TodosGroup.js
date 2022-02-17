import { useRef, useState } from 'react';
import TodoItem from './TodoItem';
import AddTodoButton from './AddTodoButton';
import EditableDiv from '../../components/EditableDiv';

function TodosGroup({ title, todos }) {

  const [opened, setOpened] = useState(true)
  const [groupTitle, setGroupTitle] = useState(title)
  const titleRef = useRef()
  const groupTitleRef = useRef(title)

  const handleFolded = () => {
    setOpened(prev => !prev)
  }
  const onTitleEdit = (text) => {
    console.log(text)
  }

  return (
    <div className='todos-group'>
      <header className='todos-group__header'>
        <button className='toggle-open-btn interactive' onClick={handleFolded}>{opened? 'v' : '>'} </button>
        <EditableDiv className='title' initial={title} handleBlur={onTitleEdit}/>
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
                    groupTitle={title}/>)
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