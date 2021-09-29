import React from 'react'
import {connect} from "react-redux";


class QuestionDetails extends React.Component {
	render() {
		const {question, author, authedUser} = this.props
		const sumOfVotes = (
			question.optionOne.votes.length +
			question.optionTwo.votes.length
		)
		const chosenOption = question.optionOne.votes.include(authedUser)
		return(
			<div>
				<h4>This question is asked by {author.name}</h4>
				<div>
					<img src={author.avatarURL} alt={author.avatarURL}/>
				</div>
				<div>
	            <h2>The Results:</h2>
	            <div className={`question-result ${chosenOption}`}>
	              <p>{question.optionOne.text}</p>
	              <p>{`${(question.optionOne.votes.length / sumOfVotes * 100).toFixed(0)}%`}</p>
	              <p>{`${question.optionOne.votes.length} out of ${sumOfVotes} votes`}</p>
	            </div>
	            <div className={`question-result ${!chosenOption}`}>
	              <p>{question.optionTwo.text}</p>
	              <p>{`${(question.optionTwo.votes.length / sumOfVotes * 100).toFixed(0)}%`}</p>
	              <p>{`${question.optionTwo.votes.length} out of ${sumOfVotes} votes`}</p>
	            </div>
	          </div>
			</div>
		)
	}
}
export default connect()(QuestionDetails);