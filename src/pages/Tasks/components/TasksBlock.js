import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

function TasksBlock({title, todos}) {

  const [folded, setFolded] = useState(true);

  const handleChange = (e) => {
    setFolded(!folded);
  }

  useEffect(() => {
    
  }, []);

  return (
    <div className='tasks-block'>
      <div className='tasks-block__header' onClick={handleChange}>
        <input type='checkbox' onChange={handleChange} checked={folded}/>
        {title}
      </div>
      {
        folded
        ?
        <ul>
          {
            todos.map(todo => {
              return <TaskItem text={todo.text} status={todo.status}/>
            })
          }
        </ul>
        :
        <></>
      }
    </div>
  );
}
export default TasksBlock;