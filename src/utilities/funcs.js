
/**
 * @description Returns an array of HTML-elements with the '.todo-item's of the given group.
 */
export function getTodosArrayByGroupTitle(groupTitle) {
  const groups = Array.from(document.querySelectorAll('.todos-group'))
  const groupFounded = groups.find(group => group.children[0].textContent.trim() === groupTitle)
  // children 0: header; children 1: todos-list; children 2: addTodo button
  return groupFounded? Array.from(groupFounded.children[1].children) : console.error('Group not founded in funcs.js -> getTodosByGroupTitle');
}

/**
 * @description Returns the todo HTML-element that matches the given id.
 */
export function getTodoById(id) {
  return document.getElementById(id) || console.error('Todo not founded in funcs.js -> getTodoById');
}

/**
 * @description If the user is on a tab, returns his path, otherwise returns an empty string.
 */
export function getCurrentTabPath() {
  let path  = window.location.pathname;
  // Example:
  // if path = '/tab'        -> true  (we are in a tab, returning the tab)
  // if path = '/tab/subtab' -> false (exist subtab, substringing and returning the tab)
  if (path.indexOf('/') === path.lastIndexOf('/')) return path;
  else return path.substring(0, path.lastIndexOf('/'))
}
/**
 * @description If the user is on a subtab, returns his path, otherwise returns null.
 */
export function getCurrentSubtabPath(path = window.location.pathname) {
  if (path.indexOf('/') === path.lastIndexOf('/')) return null;
  else return path.substring(path.lastIndexOf('/'))
}

export function userIsOnTab() {
  let path = window.location.pathname
  if (path.indexOf('/') === path.lastIndexOf('/')) return true;
  else return false
}
export function userIsOnSubtab() {
  let path = window.location.pathname
  if (path.indexOf('/') === path.lastIndexOf('/')) return false;
  else return true
}

/**
 * @description Pure function that generates a valid web path based of a given word.
 */
export const generatePathByName = (name) => {
  return '/' + name.toLowerCase().split(' ').filter(word => word.trim()).join('-')
};

/**
 * @example
 * pxToNumber('69px') // returns 69
 */
export const pxToNumber = (value) => {
  return Number(value.replace('px', ''))
}