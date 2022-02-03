import produce from "immer";
import { divideString } from "../funcs";

const appSession = JSON.parse(localStorage.getItem('appSession'));

// Reducer
const appReducer = (state = appSession, action) => {

  switch (action.type) {

    case '@tasks/add':

      const path = action.payload.path, 
            groupTitle = action.payload.groupTitle,
            paths = divideString(path, path.lastIndexOf('/'));

      const index1 = state.tabs.map(t => t.path).indexOf(paths[0]),
            index2 = state.tabs[index1].subtabs.map(s => s.path).indexOf(paths[1]),
            index3 = state.tabs[index1].subtabs[index2].content.groups.map(g => g.title).indexOf(groupTitle);

      const newstate = produce(state, draft => {
        draft.tabs[index1].subtabs[index2].content.groups[index3].todos.push({
          text: action.payload.text,
          status: action.payload.status
        })
      });
      console.log(`Added task with text: "${action.payload.text}"`)
      return newstate;

    case '@tasks/remove':
    console.log('Removing the poor task with id', action.payload.id)
    return {
        ...state
      }

    case '@tasks/edit':
    console.log('Editing new task')
    return {
      ...state
    }
    
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
export default appReducer;