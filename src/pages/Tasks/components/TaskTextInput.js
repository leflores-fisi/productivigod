import { useDispatch } from 'react-redux'
import { addTask } from '../../../redux/actions'

function TaskTextInput(/*{todos}*/) {

  const dispatch = useDispatch();

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        dispatch(addTask(e.target.firstChild.value, 'Default status'))
      }}>
        <input type='text'></input>
      </form>
      <div>Agregar tarea</div>
    </div>
  );
}

export default TaskTextInput;