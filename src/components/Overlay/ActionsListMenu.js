import React, { useContext } from 'react'
import { ActionsMenuContext } from '../../context/ActionsMenuContext'
import './styles/ActionsList.scss'

function ActionsListMenu() {

  const menuContext = useContext(ActionsMenuContext)

  const coordinates = {
    top: `${menuContext.position.mousePos.y}px`,
    left: `${menuContext.position.mousePos.x}px`
  }

  const handleOptionsSelected = (option) => {
    // Putting the option on the context
    menuContext.userSelection.current = option
    // Hiding menu
    menuContext.visibility.setVisibility(false)
    // Executing the callback function
    menuContext.callback.current()
  }

  return (
    <div className='actions-list-modal' style={coordinates}>
      {
        menuContext.visibility.isVisible ?
        <div className='actions-list-container'>
          {
            menuContext.options.getList.map(option => (
              <button
                key={option}
                className='neutral'
                onMouseDown={(e) => {e.stopPropagation()}}
                onClick={() => handleOptionsSelected(option)}
              >{option}</button>))
          }
        </div>
        : null
      }
    </div>
  )
}

export default ActionsListMenu