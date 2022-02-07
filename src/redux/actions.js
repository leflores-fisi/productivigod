
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
export const editTab = ({ new_icon, new_title, tab_path }) => {
  return {
    type: '@tabs/edit',
    payload: { new_icon, new_title, tab_path }
  }
}
export const removeTab = ({ tab_path }) => {
  return {
    type: '@tabs/remove',
    payload: { tab_path }
  }
}

// Subtabs actions ----->
export const addSubtab = ({ icon, title, tab_path }) => {
  return {
    type: '@subtabs/add',
    payload: { icon, title, tab_path }
  }
}
export const editSubtab = ({ new_icon, new_title, subtab_path }) => {
  return {
    type: '@subtabs/edit',
    payload: { new_icon, new_title, subtab_path }
  }
}
export const removeSubtab = ({ title, tab_path }) => {
  return {
    type: '@subtabs/remove',
    payload: { title, tab_path }
  }
}
