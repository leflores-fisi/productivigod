
// Tasks actions

export const removeTask = (id) => {
  return {
    type: '@tasks/remove',
    payload: {
      id
    }
  }
}
export const addTask = (text, status, index) => {
  return {
    type: '@tasks/add',
    payload: {
      text, status, index
    }
  }
}

