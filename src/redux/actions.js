
// Todos actions ----->
export const addTodo = ({ status, groupTitle, id }) => {
  return {
    type: '@todos/add',
    payload: { status, groupTitle, id }
  };
};
export const editTodo = ({ id, status, text, groupTitle }) => {
  return {
    type: '@todos/edit',
    payload: { id, status, text, groupTitle }
  };
};
export const removeTodo = (id, groupTitle) => {
  return {
    type: '@todos/remove',
    payload: { id, groupTitle }
  };
};

// Tabs actions ----->
export const addTab = ({ icon, title, type }) => {
  return {
    type: '@tabs/add',
    payload: { icon, title, type }
  }
}

// Subtabs actions ----->
export const addSubtab = ({ icon, title, tab_path }) => {
  return {
    type: '@subtabs/add',
    payload: { icon, title, tab_path }
  }
}
