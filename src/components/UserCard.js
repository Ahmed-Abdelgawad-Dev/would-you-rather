import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {customizeDate} from "../core/customizeDate";


const UserCard = ({author, question}) => {
	return(
		<div>
			<h3>{author.name} is asking:  </h3>
			<div>
				<img style={{maxWidth: "100px"}} src={author.avatarURL} alt={`${author.name}`}/>
			</div>
			<div><h3>Would You Rather  ?</h3></div>
			<p>{question.optionOne.text} OR {question.optionTwo.text}... ?</p>
			<Link to={`question/${question.id}`}>View</Link>
			<p>{customizeDate(question.timestamp)}</p>
		</div>
	)
}

const mapStateToProps = ({questions, users}, {id}) => {
	const question = questions[id]
	return {question, author: users[question.author]}
}

export default connect(mapStateToProps)(UserCard);