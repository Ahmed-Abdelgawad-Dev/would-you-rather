import React from 'react'
import { connect } from 'react-redux'



const Question = ({author, question}) => {
	return(
		<div>

		</div>
	);
}

const mapStateToProps = ({questions, users,authedUser}, {id}) => {
	const question = questions[id]
	const author = question ? users[question.author] : null
	return {
		question,
		author,
		authedUser
	}
}
export default connect(mapStateToProps)(Question)