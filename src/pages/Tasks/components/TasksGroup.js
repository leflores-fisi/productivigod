import { useState } from "react";
import TaskItem from "./TaskItem";

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
              return <TaskItem text={todo.text} status={todo.status}/>
            })
          }
        </ul>
        : null
      }
    </div>
  );
}
export default TasksBlock;