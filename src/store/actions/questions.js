export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER_OF_QUESTION ='SAVE_ANSWER_OF_QUESTION'
// Questions


// addQuestion action creator
export const addQuestion = (question) => {
	return {type: ADD_QUESTION, question}
}

// receiveQuestions action creator
export const receiveQuestions = (questions) => {
	return {type: RECEIVE_QUESTIONS, questions}
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
