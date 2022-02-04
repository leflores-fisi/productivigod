import { useState } from 'react'
import { editTodo, removeTodo, addTodo } from '../../../redux/actions'
import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux'
import { getTodoById } from '../../../utilities/funcs'

function TodoItem({ id, text, status, groupTitle }) {

  const [textContent, setTextContent] = useState(text)
  const [textOnFocus, setTextOnFocus] = useState('')
  const dispatch = useDispatch()

  // Functionalities
  const thisTodo = () => getTodoById(id)
  const focusSibling = (who) => {
    let siblingTodo
    if (who === 'nextTodo') {
      siblingTodo = thisTodo().nextElementSibling
      if (!siblingTodo) return
      siblingTodo.children[1].focus()
      setTimeout(() => siblingTodo.children[1].setSelectionRange(0, 0), 0)
    }
    else if (who === 'previousTodo') {
      siblingTodo = thisTodo().previousElementSibling
      if (!siblingTodo) return
      siblingTodo.children[1].focus()
      let cartePos = siblingTodo.children[1].value.length
      setTimeout(() => siblingTodo.children[1].setSelectionRange(cartePos, cartePos), 0)
    }
  }

  // Event handlers
  const handleChange = (e) => {

    switch (e.key) {
      
      case 'Enter':
        if (textContent !== '') {
          dispatch(addTodo({
            status: 'Default',
            id: nanoid(), groupTitle
          }))
          setTimeout(() => focusSibling('nextTodo'), 0)
        }
        break
        
      case 'Backspace':
        if (textContent === '' && thisTodo().previousElementSibling) {
          e.preventDefault();
          focusSibling('previousTodo')
          dispatch(removeTodo(id, groupTitle))
        }
        break
      
      case 'ArrowLeft':
        if (!textContent || thisTodo().children[1].selectionStart === 0) {
          focusSibling('previousTodo')
        }
        break
      
      case 'ArrowRight':
        if (!textContent || thisTodo().children[1].selectionEnd === thisTodo().children[1].value.length)
          focusSibling('nextTodo')
        break

      case 'ArrowUp':
        focusSibling('previousTodo')
        break

      case 'ArrowDown':
        focusSibling('nextTodo')
        break

      default: setTextContent(e.target.value)
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
          Remove
      </button>
    </li>
  )
}
export default TodoItem