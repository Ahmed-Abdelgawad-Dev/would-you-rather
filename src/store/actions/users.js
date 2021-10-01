export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION_TO_USER ='ADD_QUESTION_TO_USER'
export const SAVE_ANSWER_TO_USER = 'SAVE_ANSWER_TO_USER'


// Users
// receiveUsers action creator
export const receiveUsers = (users) => {
	return {type: RECEIVE_USERS, users}
}

// AddQuestionToUser action creator
export const AddQuestionToUser = (authedUser, id) => {
	return {type: ADD_QUESTION_TO_USER, authedUser, id}
}

// saveAnswerToUser action creator
export const saveAnswerToUser = (authedUser, id, answer) => {
	return {
		type: SAVE_ANSWER_TO_USER,
		authedUser, id, answer,
	}
}