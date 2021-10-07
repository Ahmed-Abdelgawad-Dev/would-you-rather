// The faked backend
import {
	_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer
} from "../../core/_DATA";
import {AddQuestionToUser, receiveUsers, saveAnswerToUser} from "./users";
import {addQuestion, receiveQuestions, saveAnswerOfQuestion} from "./questions";
import {setAuthedUser} from "./authedUser";

// Get the authedUser from the local storage
let AUTHED_USER_ID = localStorage.getItem('theAuthedUser')
if (AUTHED_USER_ID === 'null') {
	AUTHED_USER_ID = null
}
// let AUTHED_USER_ID = 'theAuthedUser'

// fetch users and questions
export const getInitialData = () => {
	return (dispatch) =>{
		return Promise.all([_getUsers(), _getQuestions()])
			.then(([users, questions]) => {
				dispatch(receiveUsers(users))
				dispatch(receiveQuestions(questions))
				dispatch(setAuthedUser(AUTHED_USER_ID))
			})
	}
}

// handle the added question
export const handleAddQuestion = (optionOneText, optionTwoText) => {
	return (dispatch, getState) => {
		const {authedUser} = getState()
		return _saveQuestion({
			author: authedUser, optionOneText, optionTwoText
		}).then((question) => {
				dispatch(addQuestion(question))
				dispatch(AddQuestionToUser(authedUser, question.id))
			})
	}
}

// save the answer of the question
export const handleSaveAnswerOfQuestion = (id, answer) => {
	return (dispatch, getState) => {
		const {authedUser} = getState()
		return _saveQuestionAnswer({
			authedUser, qid: id, answer
		})
			.then(dispatch(saveAnswerOfQuestion(id, answer, authedUser)))
			.then(dispatch(saveAnswerToUser(authedUser, id, answer)))
	}
}
