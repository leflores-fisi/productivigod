import TodosGroup from "./TodosGroup";
import './Assignments.scss'

function Assignments({content}) {

  return (
    <div className="assignments">
      {
        content.groups.map(group => {
          return <TodosGroup
            key={group.title}
            title={group.title}
            todos={group.todos}/>
        })
      }
    </div>
  );
}
export default Assignments;