//import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/actions'
import { nanoid } from 'nanoid'

function TodoTextInput({ groupTitle }) {

  const dispatch = useDispatch()

  const handleClick = (e) => {
    dispatch(addTodo({
      status: 'Default',
      id: nanoid(), groupTitle
    }))
    // Focusing the new todo added
    setTimeout(() => e.target.parentElement.children[1].lastChild.children[1].focus(), 0)
  }
  return (
    <button className='todos-input' onClick={handleClick}> + Add new task</button>
  )
}

export default TodoTextInput