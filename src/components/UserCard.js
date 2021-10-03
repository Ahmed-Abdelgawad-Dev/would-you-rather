import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {customizeDate} from "../core/customizeDate";
import Proptypes from "prop-types";


const UserCard = ({author, question}) => {

	return(
		<div>
			<hr/>
			<h3 className="user-name">{author.name} is asking:  </h3>
			<div>
				<img src={author.avatarURL} alt={`${author.name}`}/>
			</div>
			<h3>Would You Rather  ?</h3>
			<div className="wyr">
				<p className="one">{question.optionOne.text}</p>
					<span>OR</span>
				<p className="two">{question.optionTwo.text}... ?</p>
				<button className="btn-link"><Link to={`question/${question.id}`}>View</Link></button>

				{/*Formatting date as Tyler has shown in the course*/}
				<p className="date">{customizeDate(question.timestamp)}</p>
			</div>
		</div>
	)
}

UserCard.propTypes = {
	question: Proptypes.object,
	users: Proptypes.array,
	questions: Proptypes.array,

}

const mapStateToProps = ({questions, users}, {id}) => {
	const question = questions[id]
	return {question, author: users[question.author]}
}

export default connect(mapStateToProps)(UserCard);