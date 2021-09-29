// The faked backend
import {
	_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer
} from "../../core/_DATA";

// Constants
export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_ANSWER_OF_QUESTION ='SAVE_ANSWER_OF_QUESTION'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION_TO_USER ='ADD_QUESTION_TO_USER'
export const SAVE_ANSWER_TO_USER = 'SAVE_ANSWER_TO_USER'

// Authed User saved in the local storage by k,v pairs
export const setAuthedUser = (id) => {
	localStorage.setItem('loggedUser', id)
	return {type: SET_AUTHED_USER,id}
}


// Questions
// receiveQuestions action creator
export const receiveQuestions = (questions) => {
	return {type: RECEIVE_QUESTIONS, questions}
}

// addQuestion action creator
export const addQuestion = (question) => {
	return {type: ADD_QUESTION, question}
}

// saveAnswerOfQuestion action creator
export const saveAnswerOfQuestion = (id, answer, authedUser) => {
  return {
    type: SAVE_ANSWER_OF_QUESTION,
	  id,
	  answer,
	  authedUser,
  }
}


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


//Shared dispatching functions to manage the state
let AUTHED_USER_ID = localStorage.getItem('loggedUser')
if (!AUTHED_USER_ID || AUTHED_USER_ID === 'null') {
	AUTHED_USER_ID = null
}

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
export const handleAddQuestion = (optionOne, optionTwo) => {
	return (dispatch, getState) => {
		const {authedUser} = getState()
		return _saveQuestion({
			author: authedUser, optionOne, optionTwo
		})
			.then((question) => {
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
