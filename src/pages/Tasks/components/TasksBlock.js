import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

function TasksBlock() {

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
        Grupo
      </div>
      {
        folded
        ?
        <ul>
          <TaskItem text='tarea 1'/>
          <TaskItem text='tarea 2'/>
          <TaskItem text='tarea 3'/>
        </ul>
        :
        <></>
      }
    </div>
  );
}
export default TasksBlock;