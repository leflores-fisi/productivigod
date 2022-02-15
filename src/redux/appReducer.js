import produce from 'immer';
import { getCurrentTabPath, getCurrentSubtabPath, generatePathByName, userIsOnTab, userIsOnSubtab } from '../utilities/funcs';
import { defaultAppSession, defaultTodoTabContent, defaultCalendarContent } from '../utilities/defaultProps';

const appSession = JSON.parse(localStorage.getItem('appSession')) || defaultAppSession;

// Utilities
const getTabRoute = (state, tab_path = getCurrentTabPath()) => {

  let tab_index = state.tabs.map(t => t.path).indexOf(tab_path)
  return tab_index
}
const getSubtabRoute = (state, subtab_path = getCurrentSubtabPath()) => {
  let tab_path    = getCurrentTabPath()

  let tab_index    = state.tabs.map(t => t.path).indexOf(tab_path),
      subtab_index = state.tabs[tab_index].subtabs.map(st => st.path).indexOf(subtab_path)
  
  return [tab_index, subtab_index]
}
const getTodoRoute = (state, groupTitle, scope) => {

  if (scope === 'tab') {
    let tab_path    = getCurrentTabPath()
  
    let tab_index    = state.tabs.map(t => t.path).indexOf(tab_path),
        group_index  = state.tabs[tab_index].content.groups.map(g => g.title).indexOf(groupTitle);
  
    return [tab_index, group_index]
  }
  else if (scope === 'subtab') {

    let tab_path    = getCurrentTabPath()
    let subtab_path = getCurrentSubtabPath()
  
    let tab_index    = state.tabs.map(t => t.path).indexOf(tab_path),
        subtab_index = state.tabs[tab_index].subtabs.map(st => st.path).indexOf(subtab_path),
        group_index  = state.tabs[tab_index].subtabs[subtab_index].content.groups.map(g => g.title).indexOf(groupTitle);
  
    return [tab_index, subtab_index, group_index]
  }
}

const defaultContentByTabType = (tab_type) => {
  if (tab_type === 'ASSIGNMENTS_VIEWER') return defaultTodoTabContent
  if (tab_type === 'NOTEBOOK_VIEWER') return ''
  if (tab_type === 'TABS_FOLDER_VIEWER') return {}
  if (tab_type === 'CALENDAR_VIEWER') return defaultCalendarContent
  else throw new Error(`Uncaught error trying to find the tab type: '${tab_type}' on AppReducer.js`)
}

// Reducer variables
let tab_index, subtab_index, group_index, newState;

// Reducer
function AppReducer(state = appSession, action) {

  switch (action.type) {

    // Todos ----->

    case '@todos/add':

      if (userIsOnTab()) {
        [tab_index, group_index] = getTodoRoute(state, action.payload.groupTitle, 'tab');
  
        newState = produce(state, draft => {
          draft.tabs[tab_index].content.groups[group_index].todos.push({
            id: action.payload.id,
            text: '',
            status: action.payload.status
          });
        });
        return newState;
      }
      else if (userIsOnSubtab()) {
        [tab_index, subtab_index, group_index] = getTodoRoute(state, action.payload.groupTitle, 'subtab');
  
        newState = produce(state, draft => {
          draft.tabs[tab_index].subtabs[subtab_index].content.groups[group_index].todos.push({
            id: action.payload.id,
            text: '',
            status: action.payload.status
          });
        });
        return newState;
      }
      else return {...state}
      
      
    case '@todos/edit':

      if (userIsOnTab()) {
        [tab_index, group_index] = getTodoRoute(state, action.payload.groupTitle, 'tab');

        newState = produce(state, draft => {
          let todo_index = draft.tabs[tab_index].content.groups[group_index].todos.map(todo => todo.id).indexOf(action.payload.id);
          draft.tabs[tab_index].content.groups[group_index].todos[todo_index] = {
            id: action.payload.id,
            text: action.payload.text,
            status: action.payload.status
          }
        });
        return newState;
      }
      else if (userIsOnSubtab()) {
        [tab_index, subtab_index, group_index] = getTodoRoute(state, action.payload.groupTitle, 'subtab');

        newState = produce(state, draft => {
          let todo_index = draft.tabs[tab_index].subtabs[subtab_index].content.groups[group_index].todos.map(todo => todo.id).indexOf(action.payload.id);
          draft.tabs[tab_index].subtabs[subtab_index].content.groups[group_index].todos[todo_index] = {
            id: action.payload.id,
            text: action.payload.text,
            status: action.payload.status
          }
        });
        return newState;
      }
      else return {...state}

    case '@todos/remove':
      if (userIsOnTab()) {
        [tab_index, group_index] = getTodoRoute(state, action.payload.groupTitle, 'tab');
  
        newState = produce(state, draft => {
          draft.tabs[tab_index].content.groups[group_index].todos = draft.tabs[tab_index].content.groups[group_index].todos
            .filter((todo) => todo.id !== action.payload.id);
        });
        return newState;
      }
      else if (userIsOnSubtab()) {
        [tab_index, subtab_index, group_index] = getTodoRoute(state, action.payload.groupTitle, 'subtab');
  
        newState = produce(state, draft => {
          draft.tabs[tab_index].subtabs[subtab_index].content.groups[group_index].todos = draft.tabs[tab_index].subtabs[subtab_index].content.groups[group_index].todos
            .filter((todo) => todo.id !== action.payload.id);
        });
        return newState;
      }
      else return {...state}


    // Tabs ------>
    
    case '@tabs/add':
      newState = produce(state, draft => {
        if (action.payload.type === 'DASHBOARD_VIEWER') {
          draft.tabs.push({
            icon: action.payload.icon,
            title: action.payload.title,
            path: generatePathByName(action.payload.title),
            type: action.payload.type,
            subtabs: []
          });
        }
        else {
          draft.tabs.push({
            icon: action.payload.icon,
            title: action.payload.title,
            path: generatePathByName(action.payload.title),
            type: action.payload.type,
            content: defaultContentByTabType(action.payload.type)
          });
        }
      });
      console.info(`Welcome ${action.payload.title} to the tabs family`);
      return newState;
      
    case '@tabs/edit':
      tab_index = getTabRoute(state, action.payload.tab_path)
      newState = produce(state, draft => {
        draft.tabs[tab_index] = {
          ...draft.tabs[tab_index],
          icon: action.payload.new_icon,
          title: action.payload.new_title,
          path: generatePathByName(action.payload.new_title)
        };
      });
      console.info(`Tab ${action.payload.tab_path} change to ${generatePathByName(action.payload.new_title)}`)
      return newState;

    case '@tabs/remove':
      newState = produce(state, draft => {
        draft.tabs = draft.tabs.filter((tab) => tab.path !== action.payload.tab_path)
      });
      console.info(`Removing the tab "${action.payload.tab_path}" forever`)
      return newState

    // Subtabs ------>
    
    case '@subtabs/add':
      tab_index = getTabRoute(state)
      newState = produce(state, draft => {
        draft.tabs[tab_index].subtabs.push({
          icon: action.payload.icon,
          title: action.payload.title,
          type: action.payload.subtab_type,
          path: generatePathByName(action.payload.title),
          content: defaultContentByTabType(action.payload.subtab_type)
        });
      });
      console.info('Adding new subtab at the listview');
      return newState;

    case '@subtabs/edit':
      [tab_index, subtab_index] = getSubtabRoute(state, action.payload.subtab_path)
      newState = produce(state, draft => {
        draft.tabs[tab_index].subtabs[subtab_index] = {
          ...draft.tabs[tab_index].subtabs[subtab_index],
          icon: action.payload.new_icon,
          title: action.payload.new_title,
          path: generatePathByName(action.payload.new_title),
        }
      });
      console.info('Editing new subtab at the listview')
      return newState
    
    case '@subtabs/remove':
      tab_index = getTabRoute(state, action.payload.tab_path)
      newState = produce(state, draft => {
        draft.tabs[tab_index].subtabs = draft.tabs[tab_index].subtabs.filter(st => st.title !== action.payload.title)
      });
      console.info('Removing a poor subtab at the listview')
      return newState

    // Calendar ------>

    case '@events/schedule':
      if (userIsOnTab()) {
        tab_index = getTabRoute(state, action.payload.tab_path)
        newState = produce(state, draft => {
          // If already exist a day for that date
          if (draft.tabs[tab_index].content.days.some(day => day.date === action.payload.date)) {
            let day_index = draft.tabs[tab_index].content.days.findIndex(day => day.date === action.payload.date)
            draft.tabs[tab_index].content.days[day_index].events.push({
              at: action.payload.at,
              length: action.payload.length,
              text: action.payload.text
            })
          }
          // If not, we create one
          else {
            draft.tabs[tab_index].content.days.push({
              date: action.payload.date,
              events: [
                {
                  at: action.payload.at,
                  length: action.payload.length,
                  text: action.payload.text
                }
              ]
            })
          }
        })
        return newState
      }
      else if (userIsOnSubtab()) {
        [tab_index, subtab_index] = getSubtabRoute(state)
        newState = produce(state, draft => {
          // If already exist a day for that date
          if (draft.tabs[tab_index].subtabs[subtab_index].content.days.some(day => day.date === action.payload.date)) {
            let day_index = draft.tabs[tab_index].subtabs[subtab_index].content.days.findIndex(day => day.date === action.payload.date)
            draft.tabs[tab_index].subtabs[subtab_index].content.days[day_index].events.push({
              at: action.payload.at,
              length: action.payload.length,
              text: action.payload.text
            })
          }
          // If not, we create one
          else {
            draft.tabs[tab_index].subtabs[subtab_index].content.days.push({
              date: action.payload.date,
              events: [
                {
                  at: action.payload.at,
                  length: action.payload.length,
                  text: action.payload.text
                }
              ]
            })
          }
        })
        return newState
      }
      else return {...state}
    
    case '@events/edit':
      return {...state}
    
    case '@events/remove':
      return {...state}

    case '@moods/schedule':
      return {...state}
    
    case '@moods/edit':
      return {...state}
    
    case '@moods/remove':
      return {...state}

    default:
      return {
        ...state
    }
  }
}
export default AppReducer;