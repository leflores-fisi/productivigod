import { useDispatch } from 'react-redux'
import * as action from '../../../redux/actions'

function TaskItem({text, status}) {

  const dispatch = useDispatch()

  return (
    <li className='task' style={{position: 'relative'}}>
      <span className='task__status'>
        <div>{status}</div>  
      </span>
      <div className='task__text'>{text}</div>
      <button 
        style={{position: 'absolute', right: 0}}
        onClick={() => dispatch(action.removeTask(69))}
        >Borrar</button>
    </li>
  )
}
export default TaskItem;