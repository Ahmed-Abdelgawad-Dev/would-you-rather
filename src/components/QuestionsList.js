import React from 'react'
import {connect} from "react-redux";
import UserCard from "./UserCard";
import Proptypes from 'prop-types'

// Using class Component preferable dues to having a state.
class QuestionsList extends React.Component {

	state = {
		questionsAnswered: false,
	}

	render() {
		// if there is question answers
		const IDs = this.state.questionsAnswered
			// give answered question
			? this.props.questionsIDs.filter((id) => this.props.IDsAnswered.includes(id))
			// or Unanswered questions
			: this.props.questionsIDs.filter((id) => !this.props.IDsAnswered.includes(id))

	return (
		<div className='question-type'>
			{/*Button to show answered questions*/}
			<button className={this.state.questionsAnswered ? 'no' : 'focus'}
	          onClick={() => this.setState({questionsAnswered: true})}>
	          Answered Questions
				<span className="ques-num">
					{this.props.questionsIDs.filter((id) => this.props.IDsAnswered.includes(id)).length}
				</span>
	        </button>
	        {/*Button to show unanswered questions*/}
			<button className={this.state.questionsAnswered ? 'focus' : 'no'}
	          onClick={() => this.setState({questionsAnswered: false})}>
	          Unanswered Questions
				<span className="ques-num">
					{this.props.questionsIDs.filter((id) => !this.props.IDsAnswered.includes(id)).length}
				</span>
	        </button>
			{/*Render the requested type of questions*/}
			<ul>
				{IDs.length === 0
					// show this msg if there is no questions
					? 'No available questions'
					: IDs.map((id) => (
						<li key={id}> <UserCard id={id} /></li>
				))}
			</ul>
		</div>
	);
}}

QuestionsList.propTypes = {
	questionsIDs: Proptypes.array,
	IDsAnswered: Proptypes.array,
	authedUser: Proptypes.string,
	users: Proptypes.array,
	questions: Proptypes.array,

}

const mapStateToProps = ({authedUser, users, questions}) => {
	return {
	//Sorting Questions
	questionsIDs: Object.keys(questions)
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp),
		// putting th users answers in a variable and invoking it in the component
		// else invoke an empty list
		IDsAnswered: users[authedUser] ? Object.keys(users[authedUser].answers) : []
	}
}

export default connect(mapStateToProps)(QuestionsList);