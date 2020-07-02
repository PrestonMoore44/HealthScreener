import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { handleInitialData } from './shared'
 
export const RECEIVE_QUESTIONS = 'RECEIVE_TWEETS'
export const ADD_VOTE = 'ADD_VOTE'
export const ADD_QUESTION = 'ADD_QUESTION'


export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function addQuestion (info) {
  	return (dispatch) => {
    	return saveQuestion(info)
        .catch((e) => {
          alert('The was an error liking the tweet. Try again.')
        })
    	.then(() => dispatch(handleInitialData()) )
    }
}

export function addVote (info) {
  return (dispatch) => {
    return saveQuestionAnswer(info)
        .catch((e) => {
          alert('The was an error liking the tweet. Try again.')
        })
    	.then(() => dispatch(handleInitialData()) )
  }
}
