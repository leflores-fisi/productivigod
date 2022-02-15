import { createContext, useEffect, useMemo, useRef, useState } from 'react'

export const ActionsMenuContext = createContext()

export function ActionsMenuContextProvider ({children}) {

  const callback = useRef(function() {console.log('AAAAAAAAAA')})
  const [getList, setList] = useState([])
  const [isVisible, setVisibility] = useState(false)
  const userSelection = useRef('')
  const [mousePos, setMousePos] = useState({x: 0, y: 0})

  const contextValue = useMemo(
    () => (
      {
        callback,
        options: { getList, setList },
        visibility: { isVisible, setVisibility },
        userSelection,
        position: { mousePos, setMousePos }
      }
    ), [callback, getList, isVisible, userSelection, mousePos]
  )

  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      setVisibility(false)
    })
  }, [])

  return (
    <ActionsMenuContext.Provider value={contextValue}>
      {children}
    </ActionsMenuContext.Provider>
  )
}