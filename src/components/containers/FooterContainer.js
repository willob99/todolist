import { connect } from 'react-redux'
import { updateFilter, clearCompleted } from '../../actions/todoactions.js'
import Footer from '../Footer.js'

const mapStateToProps = (state, ownProps) => {
    console.log("state", state)
    return {
        length: state.todo.todolist.length
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFilter: (filter) =>{
            dispatch(updateFilter(filter))
        },
        clearCompleted: () =>{
            dispatch(clearCompleted())
        }
    }
}

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

export default FooterContainer