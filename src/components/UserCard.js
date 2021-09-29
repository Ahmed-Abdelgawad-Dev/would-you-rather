import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {customizeDate} from "../core/customizeDate";


const UserCard = (props) => {
	console.log('=>>>>>>>',props)
	return(
		<div>
			<h4>{props.author.name} Asks => </h4>
			<div>
				<img src={props.author.avatarURL} alt={`${props.author.name}`}/>
			</div>
			<div><h3>Would You Rather  ?</h3></div>
			<p>{props.question.optionOne.text} OR {props.question.optionTwo.text}... ?</p>
			<Link to={`question/${props.question.id}`}>View</Link>
			<p>{customizeDate(props.question.timestamp)}</p>
		</div>
	)
}

const mapStateToProps = ({questions, users}, {id}) => {
	const question = questions[id]
	return {question, author: users[question.author]}
}

export default connect(mapStateToProps)(UserCard);