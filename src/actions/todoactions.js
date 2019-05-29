/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const ADD_VALUE = 'ADD_VALUE'
export const DELETE_TODO = 'DELETE_TODO'
export const UPDATE_FILTER = 'UPDATE_FILTER'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'

/*
 * action creators
 */

 export function addToDo(name) {
   console.log(name);
  return { type: ADD_TODO, text:name };
}

export function addValue(value) {
 return { type: ADD_VALUE, text:value };
}

export function deleteToDo(index) {
  return { type: DELETE_TODO, index: index };
}

export function updateFilter(filter) {
  return { type: UPDATE_FILTER, filter: filter };
}

export function toggleCompleted(index) {
  return { type: TOGGLE_COMPLETED, index: index };
}

export function clearCompleted() {
  return { type: CLEAR_COMPLETED }
}