import { nanoid } from "nanoid"

export const defaultAppSession = {

  user: {
    name: 'default user',
    state: 'focused'
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
    }
  ]
}

let total = 0;
for (let item in localStorage) {
  if (localStorage.hasOwnProperty(item)) {
    let size = ((localStorage[item].length + item.length) * 2);
    total += size;
    console.log(`${item} = ${(size / 1024).toFixed(5)} KB`);
  }
};
console.log(`Total = ${(total / 1024).toFixed(5)} KB`);
