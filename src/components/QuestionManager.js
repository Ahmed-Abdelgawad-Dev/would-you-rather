import React from 'react'
import Question from './Question'
import QuestionDetails from "./QuestionDetails";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";

// None class component as it has no state.
const QuestionManager =({question, users, authedUser}) => {

	return(
		<div>
			<div>
				{question && authedUser
					? (Object.keys(users[authedUser].answers).includes(question.id)

						? <QuestionDetails authedUser={authedUser}
							author={users[question.author]} question={question}/>

						: <Question author={users[question.author]} question={question} />)

					: 'Something went wrong'
				}
			</div>
		</div>
	)
}
const mapStateToProps = ({ authedUser, users, questions }, props) => ({
  authedUser, users,
	question: questions[props.match.params.id]
})

QuestionManager.propTypes = {
	question: PropTypes.object,
	users: PropTypes.object,
	authedUser: PropTypes.string
}

export default withRouter(connect(mapStateToProps)(QuestionManager));