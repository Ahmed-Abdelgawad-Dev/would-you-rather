import React from 'react'
import Question from './Question'
import QuestionDetails from "./QuestionDetails";
import { connect } from 'react-redux'



const QuestionManager =({question, users, authedUser}) => {
	return(
		<div>
			<div>
				{question && authedUser
					? (Object.keys(users[authedUser].answers).includes(question.id)
						? <QuestionDetails authedUser={authedUser} author={users[question.author]} question={question}/>
						: <Question author={users[question.author]} question={question} />)
					: 'Please Sign in first'
				}
			</div>
		</div>
	)
}
const mapStateToProps = ({ authedUser, users, questions }, props) => ({
  authedUser,
  users,
  question: questions[props.match.params.id]
})

export default connect(mapStateToProps)(QuestionManager);