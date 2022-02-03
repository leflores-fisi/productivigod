import produce from "immer";

const appSession = JSON.parse(localStorage.getItem('appSession'));

// Reducer
const appReducer = (state = appSession, action) => {

  switch (action.type) {

    case '@tasks/add':
      console.log(`Added task with text: "${action.payload.text}"`)
      const newstate = produce(state, draft => {
        draft.tabs[0].subtabs[0].content.groups[0].todos.push({
          text: action.payload.text,
          status: action.payload.status
        })
      })
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