import produce from 'immer';
import { getCurrentTabPath, getCurrentSubtabPath } from '../utilities/funcs';
import { defaultAppSession } from '../utilities/defaultProps';

const appSession = JSON.parse(localStorage.getItem('appSession')) || defaultAppSession;

// Utilities
const getSubtabRoute = (state, subtab_path) => {

  let subtab_index = state.tabs.map(t => t.path).indexOf(subtab_path)
  return subtab_index
}
const getTodoRoute = (state, groupTitle) => {

  let tab_path    = getCurrentTabPath()
  let subtab_path = getCurrentSubtabPath()

  let tab_index    = state.tabs.map(t => t.path).indexOf(tab_path),
      subtab_index = state.tabs[tab_index].subtabs.map(st => st.path).indexOf(subtab_path),
      group_index  = state.tabs[tab_index].subtabs[subtab_index].content.groups.map(g => g.title).indexOf(groupTitle);

  return [tab_index, subtab_index, group_index]
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
      console.log('New empty task added');
      return newState;
      
    case '@todos/edit':
      [tab_index, subtab_index, group_index] = getTodoRoute(state, action.payload.groupTitle);

      newState = produce(state, draft => {
        let todo_index = draft.tabs[tab_index].subtabs[subtab_index].content.groups[group_index].todos.map(todo => todo.id).indexOf(action.payload.id)
        draft.tabs[tab_index].subtabs[subtab_index].content.groups[group_index].todos[todo_index] = {
          id: action.payload.id,
          text: action.payload.text,
          status: action.payload.status
        }
      });
      console.log('Editing new task')
      return newState;

    case '@todos/remove':
      [tab_index, subtab_index, group_index] = getTodoRoute(state, action.payload.groupTitle);

      newState = produce(state, draft => {
        draft.tabs[tab_index].subtabs[subtab_index].content.groups[group_index].todos = draft.tabs[tab_index].subtabs[subtab_index].content.groups[group_index].todos
          .filter((todo) => todo.id !== action.payload.id);
      });
      console.log('Removing the poor task with id', action.payload.id);
      return newState;


    // Tabs ------>
    
    case '@tabs/add':
      newState = produce(state, draft => {
        draft.tabs.push({
          icon: action.payload.icon,
          title: action.payload.title,
          path: '/'+action.payload.title,
          type: action.payload.type,
          subtabs: []
        });
      });
      console.log('Adding new tab at the tabsnavbar');
      return newState;
      
    case '@tabs/edit':
      console.log('Editing new tab at the tabsnavbar')
      return {
        ...state
      }

    case '@tabs/remove':
    console.log('Removing a poor tab at the tabsnavbar')
      return {
        ...state
      }

    
    // Subtabs ------>
    
    case '@subtabs/add':
      tab_index = getSubtabRoute(state, action.payload.tab_path)
      newState = produce(state, draft => {
        draft.tabs[tab_index].subtabs.push({
          icon: action.payload.icon,
          title: action.payload.title,
          path: '/'+action.payload.title,
          content: {}
        });
      });
      console.log('Adding new subtab at the listview');
      return newState;

    case '@subtabs/edit':
      console.log('Editing new subtab at the listview')
      return {
        ...state
      }
    
    case '@subtabs/remove':
    console.log('Removing a poor subtab at the listview')
      return {
        ...state
      }

      
    default:
      return {
        ...state
    }
  }
}
export default AppReducer;