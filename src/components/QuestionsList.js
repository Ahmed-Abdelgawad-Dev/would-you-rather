import React from 'react'
import {connect} from "react-redux";
import UserCard from "./UserCard";


class QuestionsList extends React.Component {
	state = {
		questionsAnswered: false,
	}

	render() {
		const IDs = this.state.questionsAnswered
			? this.props.questionsIDs.filter((id) => this.props.IDsAnswered.includes(id))
			: this.props.questionsIDs.filter((id) => !this.props.IDsAnswered.includes(id))

	return (
		<div className='question-type'>
			<button
	          onClick={() => this.setState({questionsAnswered: true})}>
	          Answered Questions {
	          	this.props.questionsIDs.filter((id) => this.props.IDsAnswered.includes(id)).length
			}
	        </button>
	        <button
	          onClick={() => this.setState({questionsAnswered: false})}>
	          Unanswered Questions {
	          	this.props.questionsIDs.filter((id) => !this.props.IDsAnswered.includes(id)).length
	        }
	        </button>
			<ul>
				{IDs.length === 0
					? 'No available questions'
					: IDs.map((id) => (
						// <li key={id}> <UserCard id={id} /></li>
						<UserCard id={id} />
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
	IDsAnswered: users[authedUser] ? Object.keys(users[authedUser].answers) : []
	}
}

export default connect(mapStateToProps)(QuestionsList);