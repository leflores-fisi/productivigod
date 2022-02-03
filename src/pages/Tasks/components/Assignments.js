import TasksGroup from "./TasksGroup";
import { nanoid } from 'nanoid';
import '../../../styles/Assignments.scss'

function Assignments({content}) {

  return (
    <div className="assignments">
      {
        content.groups.map(group => {
          return <TasksGroup key={nanoid()} title={group.title} todos={group.todos}/>
        })
      }
    </div>
  );
}
export default Assignments;