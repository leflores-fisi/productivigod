
function TaskItem({index, text, checked}) {

  return (
    <li className='task'>
      <input type='checkbox'/>
      <div>{text}</div>
    </li>
  )
}
export default TaskItem;