import { combineReducers } from 'redux'
import todoReducer from './todolist.js'

//if you wanted to add another reducer, you would add it here
const reducers = combineReducers({
  todo: todoReducer,
})

export default reducers