import { RECEIVE_QUESTIONS, ADD_VOTE } from '../actions/questions'

export default function questions(state = {}, action = null) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_VOTE :
  		return 	{
  			...state
        }
    default :
      return state
  }
}
