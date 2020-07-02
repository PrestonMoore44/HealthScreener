import { getInitialData } from '../utils/api.js'
import { hideLoading } from 'react-redux-loading'
import { setAuthedUser } from '../actions/authedUser'
import { setUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'

//const AUTHED_ID = 'sarahedo'
export function handleInitialData (authedId = '') {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
      	//console.log(questions, users)
        dispatch(hideLoading())
      	dispatch(setAuthedUser(authedId))
      	dispatch(setUsers(users))
      	dispatch(receiveQuestions(questions))
      })
  }
}

export function setMyAuthedUser (user) {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
      	//console.log(questions, users)
        dispatch(hideLoading())
      	dispatch(setAuthedUser(user))
      	dispatch(setUsers(users))
      	dispatch(receiveQuestions(questions))
      })
  }
}