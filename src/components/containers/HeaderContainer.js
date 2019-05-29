import { connect } from 'react-redux'
import { addToDo } from '../../actions/todoactions.js'
import Header from '../Header.js'

const mapStateToProps = (state, ownProps) => {
    console.log("state", state)
    return {}
}

/*
if you like destruction, use this instead of the above one
const mapStateToProps = ({blahReducer}, ownProps) => {
    return {
        blah:blahReducer.blah,
        blah2:blahReducer.a,
    }
}
*/

const mapDispatchToProps = (dispatch) => {
    return {
        addToDo: (name) =>{
            dispatch(addToDo(name))
        }
    }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer