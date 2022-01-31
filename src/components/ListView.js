import { useState } from 'react';
import { Link, Route, useLocation } from 'wouter';
import MarkDownEditor from '../pages/Notebook/components/MarkdownEditor';

const TABS_TYPE = {
  TODOS_VIEWER: 'tab_todos_viewer',
  NOTEBOOK_VIEWER: 'tab_notebook_viewer',
  MANAGER_VIEWER: 'tab_manager_viewer'
}

const TODOS = {
  CONTENT_TYPE: 'todos_list',
  DESIGN: {
    TABLE: 'todos_design_table',
    LIST: 'todos_design_list'
  },
  TODO_STATUS: {
    COMPLETED: 'todo_status_completed',
    UNCOMPLETED: 'todo_status_uncompleted'
  }
}


const AppSession = {
  tabs: [
    {
      icon: '☕',
      title: 'Tasks',
      path: '/tasks',
      type: TABS_TYPE.TODOS_VIEWER,
      subtabs: [
        {
          icon: '🎒',
          title: 'College',
          path: '/college',
          content: {
            type: TODOS.CONTENT_TYPE,
            design: TODOS.DESIGN.TABLE,
            groups: [
              {
                title: 'To Do',
                todos: [
                  {
                    text: 'Test the app',
                    status: TODOS.TODO_STATUS.COMPLETED
                  },
                  {
                    text: 'See this',
                    status: TODOS.TODO_STATUS.UNCOMPLETED
                  }
                ]
              },
              {
                title: 'Doing',
                todos: [
                  {
                    text: 'Programming like a goat',
                    status: TODOS.TODO_STATUS.COMPLETED
                  }
                ]
              },
              {
                title: 'Done',
                todos: [
                  {
                    text: 'Nothing yet but soon',
                    status: TODOS.TODO_STATUS.UNCOMPLETED
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
            type: TODOS.CONTENT_TYPE,
            design: TODOS.DESIGN.LIST,
            groups: [
              {
                title: 'Ideas',
                todos: [
                  {
                    text: 'Implement login',
                    status: TODOS.TODO_STATUS.UNCOMPLETED
                  }
                ]
              },
              {
                title: 'Dead ideas',
                todos: [
                  {
                    text: 'Say welcome to the frustred dreams',
                    status: TODOS.TODO_STATUS.COMPLETED
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
      type: TABS_TYPE.NOTEBOOK_VIEWER,
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
      type: TABS_TYPE.MANAGER_VIEWER
    },
  ]
}


const listItems = AppSession.tabs[1];

function ListView() {

  const [currentTab, setCurrentTab] = useLocation();

  return (
    <div>
      {
      <ul>
        {
          currentTab === listItems.path
          ?
            listItems.subtabs.map((item) => (
              <Link to={listItems.path + item.path} key={item.title}>
                <div>
                  <li>{item.title}</li>
                </div>
              </Link>
            ))
          : null
        }
      </ul>
      }
      {
        listItems.subtabs.map((item) => (
          <>
            <Route path={listItems.path + item.path}>
              <MarkDownEditor content={item.content}>
              </MarkDownEditor>
            </Route>
          </>
        ))
      }
    </div>
  )
}
export default ListView;