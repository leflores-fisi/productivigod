// Tasks actions

export const addTodo = ({ status, groupTitle, id }) => {
  return {
    type: "@todos/add",
    payload: { status, groupTitle, id },
  };
};
export const removeTodo = (id, groupTitle) => {
  return {
    type: "@todos/remove",
    payload: { id, groupTitle },
  };
};
export const editTodo = ({ id, status, text, groupTitle }) => {
  return {
    type: "@todos/edit",
    payload: { id, status, text, groupTitle },
  };
};