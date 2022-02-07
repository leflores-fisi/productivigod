import produce from 'immer';
import { getCurrentTabPath, getCurrentSubtabPath, generatePathByName } from '../utilities/funcs';
import { defaultAppSession, defaultTodoTabContent } from '../utilities/defaultProps';

const appSession = JSON.parse(localStorage.getItem('appSession')) || defaultAppSession;

// Utilities
const getTabRoute = (state, tab_path) => {

  let tab_index = state.tabs.map(t => t.path).indexOf(tab_path)
  return tab_index
}
const getSubtabRoute = (state, subtab_path) => {
  let tab_path    = getCurrentTabPath()

  let tab_index    = state.tabs.map(t => t.path).indexOf(tab_path),
      subtab_index = state.tabs[tab_index].subtabs.map(st => st.path).indexOf(subtab_path)
  
  return [tab_index, subtab_index]
}
const getTodoRoute = (state, groupTitle) => {

  let tab_path    = getCurrentTabPath()
  let subtab_path = getCurrentSubtabPath()

  let tab_index    = state.tabs.map(t => t.path).indexOf(tab_path),
      subtab_index = state.tabs[tab_index].subtabs.map(st => st.path).indexOf(subtab_path),
      group_index  = state.tabs[tab_index].subtabs[subtab_index].content.groups.map(g => g.title).indexOf(groupTitle);

  return [tab_index, subtab_index, group_index]
}
const defaultContentByTabType = (tab_type) => {
  if (tab_type === 'ASSIGNMENTS_VIEWER') return defaultTodoTabContent
  if (tab_type === 'NOTEBOOK_VIEWER') return ''
}

// Reducer variables
let tab_index, subtab_index, group_index, newState;

// Reducer
function AppReducer(state = appSession, action) {

  switch (action.type) {

    // Todos ----->

    case '@todos/add':
      [tab_index, subtab_index, group_index] = getTodoRoute(state, action.payload.groupTitle);

      newState = produce(state, draft => {
        draft.tabs[tab_index].subtabs[subtab_index].content.groups[group_index].todos.push({
          id: action.payload.id,
          text: '',
          status: action.payload.status
        });
      });
      console.info('New empty task added');
      return newState;
      
    case '@todos/edit':
      [tab_index, subtab_index, group_index] = getTodoRoute(state, action.payload.groupTitle);

      newState = produce(state, draft => {
        let todo_index = draft.tabs[tab_index].subtabs[subtab_index].content.groups[group_index].todos.map(todo => todo.id).indexOf(action.payload.id);
        draft.tabs[tab_index].subtabs[subtab_index].content.groups[group_index].todos[todo_index] = {
          id: action.payload.id,
          text: action.payload.text,
          status: action.payload.status
        }
      });
      console.info('Editing new task')
      return newState;

    case '@todos/remove':
      [tab_index, subtab_index, group_index] = getTodoRoute(state, action.payload.groupTitle);

      newState = produce(state, draft => {
        draft.tabs[tab_index].subtabs[subtab_index].content.groups[group_index].todos = draft.tabs[tab_index].subtabs[subtab_index].content.groups[group_index].todos
          .filter((todo) => todo.id !== action.payload.id);
      });
      console.info('Removing the poor task with id', action.payload.id);
      return newState;


    // Tabs ------>
    
    case '@tabs/add':
      newState = produce(state, draft => {
        draft.tabs.push({
          icon: action.payload.icon,
          title: action.payload.title,
          path: generatePathByName(action.payload.title),
          type: action.payload.type,
          subtabs: []
        });
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
      tab_index = getTabRoute(state, action.payload.tab_path)
      newState = produce(state, draft => {
        draft.tabs[tab_index].subtabs.push({
          icon: action.payload.icon,
          title: action.payload.title,
          path: generatePathByName(action.payload.title),
          content: defaultContentByTabType(draft.tabs[tab_index].type)
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

      
    default:
      return {
        ...state
    }
  }
}
export default AppReducer;