import {
  ADD_TODO,
  DELETE_TODO,
  ADD_VALUE,
  UPDATE_FILTER,
  TOGGLE_COMPLETED,
  CLEAR_COMPLETED,
} from '../actions/todoactions.js'

const initialState = {
  todolist:[],
  filter: 0
}

let array;

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      if(action.text === "")
        return state;
      action.text.trim();
      let newtodo = {
        name: action.text,
        editing: false,
        finished: false,
      }

      return Object.assign({}, state, { todolist: state.todolist.concat([newtodo]) } )

    case ADD_VALUE:
      return Object.assign({}, state, { todolist: state.todolist.concat([action.text]) } )

    case DELETE_TODO:
      array = state.todolist.filter((todo, index) => index !== action.index);
      return Object.assign({}, state, { todolist: array });
      
    case UPDATE_FILTER:
      return Object.assign({}, state, { filter: action.filter })

    case TOGGLE_COMPLETED:
      array = state.todolist;
      array[action.index].finished = !array[action.index].finished;; 
      return Object.assign({}, state, { todolist: array });

    case CLEAR_COMPLETED:
      console.log("clearing completed")
      array = state.todolist.filter(value => {
        return !value.finished;
      });
      return Object.assign({}, state, { todolist: array });
    
    default:
      return state
  }
}

export default todoReducer