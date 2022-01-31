
function TaskItem({text, status}) {

  return (
    <li className='task'>
      <span className='task__status'>
        <div>
          {status}
        </div>  
      </span>
      <div className='task__text'>{text}</div>
    </li>
  )
}
export default TaskItem;