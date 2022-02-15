//import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/actions'
import { nanoid } from 'nanoid'

function AddTodoButton({ groupTitle }) {

  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(addTodo({
      status: 'Default',
      id: nanoid(),
      groupTitle: groupTitle
    }))
    // Focusing the new todo added
    setTimeout(() => 
    e.target.parentElement.parentElement.children[1].lastChild.children[1].focus(), 0)
  }
  return (
    <button className='add-todo-btn' onClick={handleClick}> New todo </button>
  )
}

export default AddTodoButton