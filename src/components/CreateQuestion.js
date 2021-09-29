import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {addQuestion, handleAddQuestion} from "../store/actions";


class CreateQuestion extends Component {
	state = {
		redirect: false,
		optionOne: '',
		optionTwo: '',
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.addQuestion(this.state.optionOne, this.state.optionTwo)
		this.setState({redirect: true})
	}
	render() {
		if(this.state.redirect === 'true') {
			return <Redirect to='/' />
		}
		return(
			<div>
				<h2>Would you rather ???</h2>
				<div>
					<img src={this.props.userAvatar} alt={this.props.userAvatar.name}/>
					<form onSubmit={this.handleSubmit}>
						<textarea
							onChange={event => this.setState({optionOne: event.target.value})}
							value={this.state.optionOne}
							/>

						<h4>Or</h4>
						<textarea
							onChange={event => this.setState({optionTwo: event.target.value})}
							value={this.state.optionTwo}
							/>
						<button type='submit' disabled={
							this.state.optionOne === '' || this.state.optionOne === ''
						}>Submit</button>
					</form>
				</div>
			</div>

		)
	}
}

const mapStateToProps = ({users, authedUser}) => ({
		userAvatar: users[authedUser].avatarURL,
		authedUserName: users[authedUser].name
})
const mapDispatchToProps = dispatch => ({
		addQuestion: (one, two) => dispatch(handleAddQuestion(one, two))
})


export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion);