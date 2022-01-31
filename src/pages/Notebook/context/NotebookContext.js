
import React, { useContext } from 'react'

export const NotebookContext = React.createContext(undefined);

export function NotebookProvider({reducer, initialState, children}) {
  return (
    <NotebookContext.Provider value={initialState}>
      {children}
    </NotebookContext.Provider>
  )
}

export function useNotebook() {
  return useContext(NotebookContext)
};