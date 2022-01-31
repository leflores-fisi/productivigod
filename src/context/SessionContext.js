import React, { useContext } from 'react';

export const SessionContext = React.createContext('YEES');

export function SessionContextProvider({reducer, initialState, children}) {
  return (
    <SessionContext.Provider value={'WAIT BUDDY'}>
      {children}
    </SessionContext.Provider>
  )
}

export function useTasks() {
  useContext(SessionContext);
};