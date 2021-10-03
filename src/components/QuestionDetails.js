import React from 'react'
import {connect} from "react-redux";
import PropTypes from 'prop-types';

const QuestionDetails = ({question, author})=>{

	const sumOfVotes = (question.optionOne.votes.length + question.optionTwo.votes.length)

	return(
		<div>
			<h4 className="this">This question is asked by <span className="asked-by">{author.name}</span></h4>
				<img src={author.avatarURL} alt={author.name}/>
            <h2 className="votes">Votes:</h2>
            <div>
              <p className="options">{question.optionOne.text}</p>
              <p className="percent">{`${(question.optionOne.votes.length / sumOfVotes * 100).toFixed(0)}%`}</p>
              <p className="of">{`${question.optionOne.votes.length} of total ${sumOfVotes} votes`}</p>
            </div>
			<br/><hr/>
            <div>
              <p className="options">{question.optionTwo.text}</p>
              <p className="percent">{`${(question.optionTwo.votes.length / sumOfVotes * 100).toFixed(0)}%`}</p>
              <p className="of">{`${question.optionTwo.votes.length} of total ${sumOfVotes} votes`}</p>
            </div>

		</div>
	)
}

QuestionDetails.propTypes = {
	question: PropTypes.object,
	author: PropTypes.object
}

export default connect()(QuestionDetails);