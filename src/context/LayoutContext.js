import { createContext, useState } from 'react'

export const ActionsMenuContext = createContext()

export function ActionsMenuContextProvider ({children}) {

  const [isVisible, setVisibility] = useState(false)
  const [userSelection, setUserSelection] = useState('')
  const [mousePos, setMousePos] = useState({x: 0, y: 0})

  return (
    <ActionsMenuContext.Provider value={{
      visibility: {isVisible, setVisibility},
      selection: {userSelection, setUserSelection},
      position: {mousePos, setMousePos}
    }}>
      {children}
    </ActionsMenuContext.Provider>
  )
}