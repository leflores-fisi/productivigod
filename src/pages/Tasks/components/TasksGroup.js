import { useState } from "react";
import { nanoid } from 'nanoid'
import TaskItem from "./TaskItem";
import TaskTextInput from "./TaskTextInput";

function TasksBlock({title, todos}) {

  const [folded, setFolded] = useState(true);

  const handleChange = (e) => {
    setFolded(!folded);
  }

  return (
    <div className='tasks-group'>
      <header className='tasks-group__header' onClick={handleChange}>
        <input type='checkbox' onChange={handleChange} checked={folded}/>
        <div>{title}</div>
      </header>
      {
        folded ?
        <ul className='tasks-list'>
          {
            todos.map(todo => {
              return <TaskItem key={nanoid()} text={todo.text} status={todo.status}/>
            })
          }
        </ul>
        : null
      }
      <TaskTextInput todos={todos}/>
    </div>
  );
}
export default TasksBlock;