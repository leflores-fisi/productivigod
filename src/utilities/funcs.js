
export function divideString (string, index) {
  return [string.substring(0, index), string.substring(index)]
}

export function getTodosArrayByGroupTitle(groupTitle) {
  const groups = Array.from(document.querySelectorAll('.todos-group'))
  const groupFounded = groups.find(group => group.children[0].textContent.trim() === groupTitle)
  // children 0: header; children 1: todos-list; children 2: addTodo button
  return groupFounded? Array.from(groupFounded.children[1].children) : console.error('Group not founded in funcs.js -> getTodosByGroupTitle');
}

export function getTodoById(id) {
  return document.getElementById(id) || console.error('Todo not founded in funcs.js -> getTodoById');
}