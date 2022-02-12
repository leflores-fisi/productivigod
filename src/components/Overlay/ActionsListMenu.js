import React, { useContext } from 'react'
import { ActionsMenuContext } from '../../context/LayoutContext'
import './styles/ActionsList.scss'

function ActionsListMenu() {

  // const position = {top: event.y, left: event.x}
  const options = ['New status', 'New event', 'Cancel']
  const menuContext = useContext(ActionsMenuContext)

  const coordinates = {
    top: `${menuContext.position.mousePos.y}px`,
    left: `${menuContext.position.mousePos.x}px`
  } 

  const selectOption = (option) => {
    menuContext.selection.setUserSelection(option)
    menuContext.visibility.setVisibility(false)
  }

  return (
    <div className='actions-list-modal' style={coordinates}>
      {
        menuContext.visibility.isVisible ?
        <div className='actions-list-container'>
          {
            options.map(option => (
              <button key={option} className='neutral' onClick={() => selectOption(option)}>{option}</button>))
          }
        </div>
        : null
      }
    </div>
  )
}

export default ActionsListMenu