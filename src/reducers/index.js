import { combineReducers } from 'redux'
import authedUser from './authedUser'
import questions from './questions'
import setUsers from './users'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authedUser,
  questions,
  setUsers,
  loadingBar: loadingBarReducer,
})