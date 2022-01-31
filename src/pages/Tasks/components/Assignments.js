import TasksBlock from "./TasksBlock";
import '../../../styles/Assignments.scss'
import { useEffect } from "react";

function Assignments({content}) {

  useEffect(() => {
    console.log(content, 'AAAA')
  }, [])

  return (
    <div className="assignments">
      {
        content.groups.map(group => {
          return <TasksBlock title={group.title} todos={group.todos}/>
        })
      }
    </div>
  );
}
export default Assignments;