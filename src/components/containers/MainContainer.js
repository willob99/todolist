import { connect } from 'react-redux'
import { deleteToDo, toggleCompleted } from '../../actions/todoactions.js'
import Main from '../Main.js'

const mapStateToProps = (state) => {
    return {
        todolist: state.todo.todolist,
        filter: state.todo.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteToDo: (index) => {
            dispatch(deleteToDo(index));
        },
        toggleCompleted: (index) => {
            dispatch(toggleCompleted(index));
        }
    }
}

const MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
  
  export default MainContainer