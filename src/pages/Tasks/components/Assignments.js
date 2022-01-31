import TasksGroup from "./TasksGroup";
import '../../../styles/Assignments.scss'

function Assignments({content}) {

  return (
    <div className="assignments">
      {
        content.groups.map(group => {
          return <TasksGroup title={group.title} todos={group.todos}/>
        })
      }
    </div>
  );
}
export default Assignments;