import {
	SET_AUTHED_USER, RECEIVE_QUESTIONS, ADD_QUESTION,
	SAVE_ANSWER_OF_QUESTION, ADD_QUESTION_TO_USER,
	RECEIVE_USERS, SAVE_ANSWER_TO_USER
} from "../actions/index";
import { combineReducers } from "redux";


//  authedUser Reducer
 function authedUser (state=null, action)  {
	switch (action.type) {
		case SET_AUTHED_USER:
			return action.id
		default:
			return state
	}
}

// questions reducer
function questions(state = {}, action) {
  const { type, question, id, answer, authedUser } = action
  switch (type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION:
      return {
        ...state,
        [question.id]: question,
      }
    case SAVE_ANSWER_OF_QUESTION:
      return {
        ...state,
        [id]: {
          ...state[id],
          [answer]: {
            ...state[id][answer],
            votes: state[id][answer].votes.concat(authedUser)
          }
        }
      }
    default:
      return state
  }
}

// users reducer
function users(state= {}, action) {
	switch (action.type) {
		case RECEIVE_USERS:
			return {...state, ...action.users}
		case ADD_QUESTION_TO_USER:
			const {authedUser, id} = action
			return {
				...state,[authedUser]: {...state[authedUser]},
				questions: state[authedUser].questions.concat(id)
			}
		case SAVE_ANSWER_TO_USER:
			const {answer} = action
			return {
				...state, [action.authedUser]: {
					...state[action.authedUser],
					answers: {
						...state[action.authedUser].answers,
						[action.id] : answer
					}
				}
			}
		default:
			return state
	}
}



// combining reducers together
export default combineReducers({
	users, questions,authedUser
})
