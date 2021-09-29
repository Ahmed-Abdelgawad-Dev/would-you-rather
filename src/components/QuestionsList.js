import React, {useState} from 'react'
import {connect} from "react-redux";
import UserCard from "./UserCard";


class QuestionsList extends React.Component {
	state = {
		questionsAnswered: false,
	}

	render() {
		const IDs = this.state.questionsAnswered
			? this.props.questionsIDs.filter((id) => this.props.answeredQuestionsIDs.includes(id))
			: this.props.questionsIDs.filter((id) => !this.props.answeredQuestionsIDs.includes(id))

	return (
		<div>
			<button className={this.state.questionsAnswered ? 'none' : 'focus'}
	          onClick={() => this.setState({showAnsweredQuestions: true})}>
	          Answered Questions
	        </button>
	        <button className={this.state.questionsAnswered ? 'focus' : 'none'}
	          onClick={() => this.setState({showAnsweredQuestions: false})}>
	          Unanswered Questions
	        </button>
			<ul>
				{IDs.length !== 0
					? 'No questions available'
					: IDs.map((id) => (
						<li key={id}> <UserCard id={id} /></li>
				))}
			</ul>
		</div>
	);
	}


}
const mapStateToProps = ({authedUser, users, questions}) => {
	return {
	questionsIDs: Object.keys(questions)
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp),
	answeredQuestionsIDs: users[authedUser] ? Object.keys(users[authedUser].answers) : []
	}
}

export default connect(mapStateToProps)(QuestionsList);