import React, { useContext } from 'react'
import { ActionsMenuContext } from '../../context/ActionsMenuContext'
import ActionsListMenu from './ActionsListMenu'
import './styles/Overlay.scss'

function AppOverlay() {
  const actionsListMenu = useContext(ActionsMenuContext)

  const hideMenus = () => {
    actionsListMenu.visibility.setVisibility(false)
  }

  return (
    <div className='app-overlay' onClick={() => hideMenus}>
      <div className='data-overlay'>

        <ActionsListMenu/>
      </div>
    </div>
  )
}

export default AppOverlay