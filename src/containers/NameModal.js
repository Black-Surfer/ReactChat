import { connect } from 'react-redux'
import NameModalComponent from '../components/NameModal'
import { addUser } from '../actions'

const mapDispatchToProps = dispatch => ({
  dispatch: (name) => {
    dispatch(addUser(name))
  }
})

export const NameModal = connect((state) => ({
  users: state.users
}), mapDispatchToProps)(NameModalComponent)