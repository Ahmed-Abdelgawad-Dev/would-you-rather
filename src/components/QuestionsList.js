import React from 'react'
import { connect } from "react-redux";
import UserCard from "./UserCard";
import Proptypes from 'prop-types'
import { Container, Button} from 'react-bootstrap';

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
			<Container style={{textAlign: "center" }}>
				{/*Button to show answered questions*/}
				<Button size="md" className={this.state.questionsAnswered}
					onClick={() => this.setState({ questionsAnswered: true })}>
					Answered Questions: (
					<span style={{color: "black"}}>
						{this.props.questionsIDs.filter((id) => this.props.IDsAnswered.includes(id)).length}
					</span>)
				</Button>
				{/*Button to show unanswered questions*/}
				|<Button size="md" className={this.state.questionsAnswered}
					onClick={() => this.setState({ questionsAnswered: false })}>
					Unanswered Questions: (
					<span style={{color: "black"}}>
						{this.props.questionsIDs.filter((id) => !this.props.IDsAnswered.includes(id)).length}
					</span>)
				</Button>
				{/*Render the requested type of questions*/}
				<Container>
					{IDs.length === 0
						// show this msg if there is no questions
						? 'No available questions'
						: IDs.map((id) => (
							<p key={id}> <UserCard id={id} /></p>
						))}
				</Container>
			</Container>
		);
	}
}

QuestionsList.propTypes = {
	questionsIDs: Proptypes.array,
	IDsAnswered: Proptypes.array,
	authedUser: Proptypes.string,
	users: Proptypes.array,
	questions: Proptypes.array,

}

const mapStateToProps = ({ authedUser, users, questions }) => {
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