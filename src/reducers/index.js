import { combineReducers } from "redux"
import { withReduxStateSync } from 'redux-state-sync'
import messages from "./messages"
import users from "./users"

const chat = combineReducers({
  messages,
  users
});

export default withReduxStateSync(chat)