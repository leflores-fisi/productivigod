import { useState } from "react";
import { nanoid } from 'nanoid'
import TaskItem from "./TaskItem";
import TaskTextInput from "./TaskTextInput";

function TasksBlock({title, todos}) {

  const [opened, setOpened] = useState(true);

  const handleChange = (e) => {
    setOpened(prev => !prev);
  }

  return (
    <div className='tasks-group'>
      <header className='tasks-group__header' onClick={handleChange}>
        <input type='checkbox' onChange={handleChange} checked={opened}/>
        <div>{title}</div>
      </header>
      {
        opened ?
        <ul className='tasks-list'>
          {
            todos.map(todo => {
              return <TaskItem key={nanoid()} text={todo.text} status={todo.status}/>
            })
          }
        </ul>
        : null
      }
      <TaskTextInput groupTitle={title}/>
    </div>
  );
}
export default TasksBlock;