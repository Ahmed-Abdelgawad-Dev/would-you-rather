import {_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer} from './_DATA'

// Fetching users with Questions in one row
export const getUsersAndQuestions = () => {
	return Promise.all([_getUsers(), _getQuestions()])
		.then(([users, questions])=> ({users, questions})
		)
}

export const saveQuestionAnswer = (authUser, qid, answer) => {
	return _saveQuestionAnswer({authUser, qid, answer})
}

export const saveQuestion = (question) => {
	return _saveQuestion(question)
}

