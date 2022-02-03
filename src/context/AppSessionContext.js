// import React, { useContext, useState } from 'react';

// export const AppSessionContext = React.createContext('Failed to load the AppSessionContext');

// const AppSession = {
//   tabs: [
//     {
//       icon: '☕',
//       title: 'Tasks',
//       path: '/tasks',
//       type: 'ASSIGNMENTS_VIEWER',
//       subtabs: [
//         {
//           icon: '🎒',
//           title: 'College',
//           path: '/college',
//           content: {
//             design: 'BOARD',
//             groups: [
//               {
//                 title: 'Less than 2 minutes',
//                 todos: [
//                   {
//                     text: 'Test the app',
//                     status: 'Completed'
//                   },
//                   {
//                     text: 'See this',
//                     status: 'Uncompleted'
//                   }
//                 ]
//               },
//               {
//                 title: 'Less than half hour',
//                 todos: [
//                   {
//                     text: 'Programming like a goat',
//                     status: 'Completed'
//                   }
//                 ]
//               },
//               {
//                 title: 'More than half hour',
//                 todos: [
//                   {
//                     text: 'Nothing yet but soon',
//                     status: 'Uncompleted'
//                   }
//                 ]
//               }
//             ]
//           }
//         },
//         {
//           icon: '💼',
//           title: 'Work',
//           path: '/work',
//           content: {
//             design: 'LIST',
//             groups: [
//               {
//                 title: 'Ideas',
//                 todos: [
//                   {
//                     text: 'Need to implement login',
//                     status: 'Uncompleted'
//                   }
//                 ]
//               },
//               {
//                 title: 'Dead ideas',
//                 todos: [
//                   {
//                     text: 'Say welcome to the frustred dreams',
//                     status: 'Completed'
//                   }
//                 ]
//               }
//             ]
//           }
//         }
//       ]
//     },
//     {
//       icon: '📖',
//       title: 'Notebook',
//       path: '/notebook',
//       type: 'NOTEBOOK_VIEWER',
//       subtabs: [
//         {
//           icon: '💡',
//           title: 'Ideas',
//           path: '/ideas',
//           content: 'Tengo un sueño, ¿prometes que no te burlarás?'
//         },
//         {
//           icon: '🐢',
//           title: 'Personal',
//           path: '/personal',
//           content: 'Personalmente, amo a esta tortuguita'
//         },
//         {
//           icon: '💻',
//           title: 'Class notes',
//           path: '/notes',
//           content: 'Debía entregar una tarea hoy...'
//         }
//       ]
//     },
//     {
//       icon: '🧭',
//       title: 'Manager',
//       path: '/manager',
//       type: 'MANAGER_VIEWER'
//     },
//   ]
// }

// export function AppSessionContextProvider({children}) {

//   const [appSession, setAppSession] = useState(AppSession);

//   return (
//     <AppSessionContext.Provider value={{appSession, setAppSession}}>
//       {children}
//     </AppSessionContext.Provider>
//   )
// }

// export const useAppSession = () => useContext(AppSessionContext);
