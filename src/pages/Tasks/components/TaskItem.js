
function TaskItem({text, status}) {

  return (
    <li className='task'>
      <input type='checkbox'/>
      <div>{text}</div>
      <span>{status}</span>
    </li>
  )
}
export default TaskItem;