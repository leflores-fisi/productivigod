// Tasks actions

export const addTask = (text, status) => {
  return {
    type: "@tasks/add",
    payload: { text, status },
  };
};
export const removeTask = (id) => {
  return {
    type: "@tasks/remove",
    payload: { id },
  };
};