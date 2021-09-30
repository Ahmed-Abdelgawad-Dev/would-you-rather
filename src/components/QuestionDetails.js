import React from 'react'
import {connect} from "react-redux";


const QuestionDetails = ({question, author})=>{
	const sumOfVotes = (question.optionOne.votes.length + question.optionTwo.votes.length)
	return(
		<div>
			<h4>This question is asked by {author.name}</h4>
			<div>
				<img style={{maxWidth: "100px"}} src={author.avatarURL} alt={author.avatarURL}/>
			</div>
			<div>
            <h2>The Results:</h2>
            <div>
              <p>{question.optionOne.text}</p>
              <p>{`${(question.optionOne.votes.length / sumOfVotes * 100).toFixed(0)}%`}</p>
              <p>{`${question.optionOne.votes.length} of total ${sumOfVotes} votes`}</p>
            </div>
            <div>
              <p>{question.optionTwo.text}</p>
              <p>{`${(question.optionTwo.votes.length / sumOfVotes * 100).toFixed(0)}%`}</p>
              <p>{`${question.optionTwo.votes.length} of total ${sumOfVotes} votes`}</p>
            </div>
          </div>
		</div>
	)

}
export default connect()(QuestionDetails);