// Tasks actions

export const addTodo = ({ status, groupTitle, id }) => {
  return {
    type: "@todo/add",
    payload: { status, groupTitle, id },
  };
};
export const removeTodo = (id, groupTitle) => {
  return {
    type: "@todo/remove",
    payload: { id, groupTitle },
  };
};
export const editTodo = ({ id, status, text, groupTitle }) => {
  return {
    type: "@todo/edit",
    payload: { id, status, text, groupTitle },
  };
};