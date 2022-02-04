import { useState } from 'react'
import { editTodo } from '../../../redux/actions'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../../../redux/actions'
import { getTodoById } from '../../../utilities/funcs'

const focusPreviousTodo = (id) => {
  let previousTodo = getTodoById(id).previousElementSibling
  if (previousTodo) previousTodo.children[1].focus()
}
const focusNextTodo = (id) => {
  let nextTodo = getTodoById(id).nextElementSibling
  if (nextTodo) nextTodo.children[1].focus()
}

function TodoItem({ id, text, status, groupTitle }) {

  const [textContent, setTextContent] = useState(text)
  const [textOnFocus, setTextOnFocus] = useState('')
  const dispatch = useDispatch()

  // Event handlers
  const handleChange = (e) => {

    switch (e.key) {
      case 'Enter':
        // Add new todo
        break
      case 'Backspace':
        if (textContent === '') dispatch(removeTodo(id, groupTitle))
        focusPreviousTodo(id)
        break

      case 'ArrowUp':
        focusPreviousTodo(id)
        break

      case 'ArrowDown':
        focusNextTodo(id)
        break
      
      case 'ArrowLeft':
        if (!textContent) focusPreviousTodo(id)
        break
      
      case 'ArrowRight':
        if (!textContent) focusNextTodo(id)
        break

      default:
        setTextContent(e.target.value)
    }
  }
  const handleOnFocus = (e) => {
    e.target.parentElement.classList.add('selected')
    setTextOnFocus(textContent)
  }
  const handleOutFocus = (e) => {
    // parent <li> class for css styles
    e.target.parentElement.classList.remove('selected')
    e.currentTarget.value = e.currentTarget.value.trim()
    if (textOnFocus.trim() !== textContent.trim()) {
      dispatch(editTodo({
        status: textContent,
        text: textContent,
        id, groupTitle
      }))
    }
  }

  return (
    <li className='todo' id={id}>
      <span className='todo__status'>
        <div>{status}</div>  
      </span>
      <input
        className='todo__text'
        value={textContent}
        onChange={handleChange}
        onKeyDown={handleChange}
        onFocus={handleOnFocus}
        onBlur={handleOutFocus}
      />
      <button 
        onClick={() => dispatch(removeTodo(id, groupTitle))}>
          Borrar
      </button>
    </li>
  )
}
export default TodoItem