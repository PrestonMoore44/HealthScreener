import { SET_USERS } from '../actions/users'

export default function setUsers(state = null, action) {
  switch (action.type) {
    case SET_USERS :
      return {...state, ...{ users : action.users} }
    default :
      return state
  }
}