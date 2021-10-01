import {
	RECEIVE_USERS, ADD_QUESTION_TO_USER, SAVE_ANSWER_TO_USER
} from "../actions/users";


// users reducer
export function users(state= {}, action) {
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


