import React, { useContext } from 'react'

export const TasksContext = React.createContext('YEES');

export function TasksProvider({reducer, initialState, children}) {
  return (
    <TasksContext.Provider value={'WAIT BUDDY'}>
      {children}
    </TasksContext.Provider>
  )
}

export function useTasks() {
  useContext(TasksContext);
};