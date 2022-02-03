// Tasks actions

export const addTask = (text, status, path, groupTitle) => {
  return {
    type: "@tasks/add",
    payload: { text, status, path, groupTitle },
  };
};
export const removeTask = (id) => {
  return {
    type: "@tasks/remove",
    payload: { id },
  };
};
