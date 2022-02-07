import { nanoid } from "nanoid"

export const defaultAppSession = {

  user: {
    name: 'Floresfisi',
    status: 'focused'
  },
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
            design: 'BOARD',
            groups: [
              {
                title: 'Less than 2 minutes',
                todos: [
                  {
                    id: nanoid(),
                    text: 'Test the app',
                    status: 'Completed'
                  },
                  {
                    id: nanoid(),
                    text: 'See this',
                    status: 'Uncompleted'
                  }
                ]
              },
              {
                title: 'Less than half hour',
                todos: [
                  {
                    id: nanoid(),
                    text: 'Programming like a goat',
                    status: 'Completed'
                  }
                ]
              },
              {
                title: 'More than half hour',
                todos: [
                  {
                    id: nanoid(),
                    text: 'Nothing yet but soon',
                    status: 'Uncompleted'
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
          content: 'I have a dream, you promise you are dont gonna laugh?'
        },
        {
          icon: '🐢',
          title: 'Personal',
          path: '/personal',
          content: 'Personally, I love this turtle'
        },
        {
          icon: '💻',
          title: 'Class notes',
          path: '/notes',
          content: 'My teacher dont never read a task'
        }
      ]
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
