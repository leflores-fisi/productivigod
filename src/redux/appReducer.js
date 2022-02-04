import produce from 'immer';
import { divideString } from '../utilities/funcs';
import { defaultAppSession } from '../utilities/defautlAppSession';

const appSession = JSON.parse(localStorage.getItem('appSession')) || defaultAppSession;

// Utilities
const getTodoRoute = (state, groupTitle) => {

  const path = window.location.pathname;
  const paths = divideString(path, path.lastIndexOf('/'));

  const index1 = state.tabs.map(t => t.path).indexOf(paths[0]),
        index2 = state.tabs[index1].subtabs.map(st => st.path).indexOf(paths[1]),
        index3 = state.tabs[index1].subtabs[index2].content.groups.map(g => g.title).indexOf(groupTitle);

  return [index1, index2, index3]
}

// Reducer variables
let index1, index2, index3, newstate;

// Reducer
function AppReducer(state = appSession, action) {

  switch (action.type) {

    case '@todo/add':
      [index1, index2, index3] = getTodoRoute(state, action.payload.groupTitle);

      newstate = produce(state, draft => {
        draft.tabs[index1].subtabs[index2].content.groups[index3].todos.push({
          id: action.payload.id,
          text: '',
          status: action.payload.status
        });
      });
      console.log('New empty task added');
      return newstate;

    case '@todo/remove':
      [index1, index2, index3] = getTodoRoute(state, action.payload.groupTitle);

      newstate = produce(state, draft => {
        draft.tabs[index1].subtabs[index2].content.groups[index3].todos = draft.tabs[index1].subtabs[index2].content.groups[index3].todos
          .filter((todo) => todo.id !== action.payload.id);
      });

      console.log('Removing the poor task with id', action.payload.id);
      return newstate;

    case '@todo/edit':
      [index1, index2, index3] = getTodoRoute(state, action.payload.groupTitle);

      newstate = produce(state, draft => {
        let todo_index = draft.tabs[index1].subtabs[index2].content.groups[index3].todos.map(todo => todo.id).indexOf(action.payload.id)
        draft.tabs[index1].subtabs[index2].content.groups[index3].todos[todo_index] = {
          id: action.payload.id,
          text: action.payload.text,
          status: action.payload.status
        }
      });

      console.log('Editing new task')
      return newstate;
    
    case '@tabs/add':
      console.log('Adding new subtab at the viewlist');
      return {
        ...state
      }

    case '@tabs/remove':
    console.log('Removing a poor subtab at the viewlist')
      return {
        ...state
      }

    case '@tabs/edit':
      console.log('Editing new subtab at the viewlist')
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