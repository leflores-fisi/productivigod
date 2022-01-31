import React, { useContext } from 'react';

export const AppSessionContext = React.createContext('No context provided');

const AppSession = {
  tabs: [
    {
      icon: '☕',
      title: 'Tasks',
      path: '/tasks',
      type: 'ASSIGNMENTS_VIEWER',
      subtabs: [
        {
          icon: '🎒',
          title: 'College',
          path: '/college',
          content: {
            design: 'TABLE',
            groups: [
              {
                title: 'To Do',
                todos: [
                  {
                    text: 'Test the app',
                    status: 'COMPLETED'
                  },
                  {
                    text: 'See this',
                    status: 'COMPLETED'
                  }
                ]
              },
              {
                title: 'Doing',
                todos: [
                  {
                    text: 'Programming like a goat',
                    status: 'COMPLETED'
                  }
                ]
              },
              {
                title: 'Done',
                todos: [
                  {
                    text: 'Nothing yet but soon',
                    status: 'UNCOMPLETED'
                  }
                ]
              }
            ]
          }
        },
        {
          icon: '💼',
          title: 'Work',
          path: '/work',
          content: {
            design: 'LIST',
            groups: [
              {
                title: 'Ideas',
                todos: [
                  {
                    text: 'Implement login',
                    status: 'UNCOMPLETED'
                  }
                ]
              },
              {
                title: 'Dead ideas',
                todos: [
                  {
                    text: 'Say welcome to the frustred dreams',
                    status: 'COMPLETED'
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      icon: '📖',
      title: 'Notebook',
      path: '/notebook',
      type: 'NOTEBOOK_VIEWER',
      subtabs: [
        {
          icon: '💡',
          title: 'Ideas',
          path: '/ideas',
          content: 'Tengo un sueño, ¿prometes que no te burlarás?'
        },
        {
          icon: '🐢',
          title: 'Personal',
          path: '/personal',
          content: 'Personalmente, amo a esta tortuguita'
        },
        {
          icon: '💻',
          title: 'Class notes',
          path: '/notes',
          content: 'Debía entregar una tarea hoy...'
        }
      ]
    },
    {
      icon: '🧭',
      title: 'Manager',
      path: '/manager',
      type: 'MANAGER_VIEWER'
    },
  ]
}

export function AppSessionContextProvider({children}) {
  return (
    <AppSessionContext.Provider value={AppSession}>
      {children}
    </AppSessionContext.Provider>
  )
}

export const useAppSession = () => useContext(AppSessionContext);
