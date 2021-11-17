import React from 'react'
import { connect } from 'react-redux'
import { handleSaveAnswerOfQuestion } from "../store/actions";
import PropTypes from 'prop-types';
import {Image as Imag, Container, Badge} from 'react-bootstrap'

// Class component is used for having a state with changeable values.
class Question extends React.Component {
	state = {
		Alert: false,
		option: 'empty'
	}

	handleChange(e) { this.setState({ option: e.target.value, Alert: false, }) }

	handleSubmit(e) {
		e.preventDefault()
		this.state.option === 'empty'
			? this.setState({ Alert: true })
			: this.props.dispatch(handleSaveAnswerOfQuestion(
				this.props.question.id, this.state.option
			))
	}

	render() {
		return (
			<Container style={{textAlign: "center" }}>
				<h2><span className="asked-by"><Badge>{this.props.author.name}</Badge></span> is asking  </h2>
				<Container>
					<Imag className="rounded mx-auto d-block" 
						style={{width:"16rem"}}
						src={this.props.author.avatarURL} 
						alt={this.props.author.name} thumbnail />
				</Container> <br />
				<Container>
					<h2 style={{color: "red" }}>Would You Rather ...</h2>
					<form
						onChange={(e) => this.handleChange(e)}
						onSubmit={(e) => this.handleSubmit(e)}
					>
						<div>
							<input type='radio' name='theChoice' value='optionOne' />
							<span>{this.props.question.optionOne.text}</span>
						</div>
						<div>
							<input type='radio' name='theChoice' value='optionTwo' />
							<span>{this.props.question.optionTwo.text}</span>
						</div>
						{this.state.Alert && <h3>Please Choose An Option !</h3>}
						<input style={{
							fontWeight: "bold",
							margin: "10px",
							padding: "8px",
							borderRadius: "6px",
							background: "blue",
							color: "white"
						}}
							variant="primary" type='submit' value='Submit' />
					</form>
				</Container>
			</Container>
		);
	}
}

Question.propTypes = {
	signOut: PropTypes.func,
	users: PropTypes.object,
	question: PropTypes.object
}

export default connect()(Question)