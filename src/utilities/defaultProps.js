import { nanoid } from "nanoid"

export const defaultCalendarContent = {
  days: [
    {
      date: '2022-02-14', // UTC DATE
      events: [
        {
          at: 60,
          length: 60,
          text: 'San valentin'
        },
        {
          at: 180,
          length: 60,
          text: 'Get dog to park'
        }
      ]
    },
    {
      date: '2022-02-11', // UTC DATE
      events: [
        {
          at: 60,
          length: 1440,
          text: 'Cute event'
        }
      ]
    }
  ]
}
export const defaultAppSession = {

  user: {
    name: 'Floresfisi',
    status: 'focused'
  },
  tabs: [
    {
      icon: '📁',
      title: 'Project',
      path: '/productivigod',
      type: 'DASHBOARD_VIEWER',
      subtabs: [
        {
          icon: '🐢',
          title: 'Todos',
          path: '/tasks',
          type: 'ASSIGNMENTS_VIEWER',
          content: {
            design: 'BOARD',
            groups: [
              {
                title: 'To do',
                todos: [
                  {
                    id: nanoid(),
                    text: 'Need to implement login',
                    status: 'Uncompleted'
                  }
                ]
              },
              {
                title: 'Today',
                todos: [
                  {
                    id: nanoid(),
                    text: 'Take the dog to the park',
                    status: 'Uncompleted'
                  },
                  {
                    id: nanoid(),
                    text: 'Buy some milk',
                    status: 'Uncompleted'
                  }
                ]
              },
              {
                title: 'Doing',
                todos: [
                  {
                    id: nanoid(),
                    text: 'Coding',
                    status: 'Completed'
                  }
                ]
              },
              {
                title: 'Done',
                todos: [
                  {
                    id: nanoid(),
                    text: 'Sleep',
                    status: 'Completed'
                  }, 
                  {
                    id: nanoid(),
                    text: 'Buy milk and cheese',
                    status: 'Done'
                  }
                ]
              }
            ]
          }
        },
        {
          icon: '👾',
          title: 'Links savior',
          path: '/links-savior',
          type: 'NOTEBOOK_VIEWER',
          content: 'Links links links links'
        },
        {
          icon: '📅',
          title: 'Soft calendar subtab',
          path: '/soft-calendar-subtab',
          type: 'CALENDAR_VIEWER',
          content: {
            days: []
          }
        }
      ]
    },
    {
      icon: '☕',
      title: 'Tasks',
      path: '/tasks',
      type: 'ASSIGNMENTS_VIEWER',
      content: {
        design: 'LIST',
        groups: [
          {
            title: 'Ideas',
            todos: [
              {
                id: nanoid(),
                text: 'Need to implement login',
                status: 'Uncompleted'
              }
            ]
          },
          {
            title: 'Dead ideas',
            todos: [
              {
                id: nanoid(),
                text: 'Say welcome to the frustred dreams',
                status: 'Completed'
              }
            ]
          }
        ]
      }
    },
    {
      icon: '📖',
      title: 'Notebook',
      path: '/notebook',
      type: 'NOTEBOOK_VIEWER',
      content: 'Personally, I love this turtle'
    },
    {
      icon: '🌽',
      title: 'Day planner',
      path: '/day-planner',
      type: 'DAILY_PLANNER_VIEWER',
      content: {}
    },
    {
      icon: '📅',
      title: 'Soft calendar',
      path: '/soft-calendar',
      type: 'CALENDAR_VIEWER',
      content: defaultCalendarContent
    }
  ]
}
export const defaultTodoTabContent = {
  design: 'BOARD',
  groups: [
    {
      title: '🤨 Ideas',
      todos: [
      ]
    },
    {
      title: '🐧 To do',
      todos: [
      ]
    },
    {
      title: '😳 Doing',
      todos: [
      ]
    },
    {
      title: '🥴 Done',
      todos: [
      ]
    }
  ]
}

// LocalStorage total current size
let total = 0;
for (let item in localStorage) {
  if (localStorage.hasOwnProperty(item)) {
    let size = ((localStorage[item].length + item.length) * 2);
    total += size;
    console.log(`${item} = ${(size / 1024).toFixed(5)} KB`);
  }
};
console.log(`Total = ${(total / 1024).toFixed(5)} KB`);
