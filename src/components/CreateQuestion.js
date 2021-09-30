import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {handleAddQuestion} from "../store/actions";


class CreateQuestion extends Component {
	state = {
		redirect: false,
		optionOne: '',
		optionTwo: '',
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.addQuestion(this.state.optionOne, this.state.optionTwo)
		this.setState({redirect: true})
	}
	render() {
		const {avatar, authedUserName} = this.props;
		if(this.state.redirect) {
			return <Redirect to='/' />
		}
		return(
			<div>
				<h2>Would you rather ???</h2>
				<div>
					<img style={{maxWidth: "100px"}} src={avatar} alt={`authedUserName${authedUserName}`}/>
					<form onSubmit={this.handleSubmit}>
						<textarea
							onChange={e => this.setState({optionOne: e.target.value})}
							value={this.state.optionOne}
							placeholder="Suggestion One"
							/>

						<h4>Or</h4>
						<textarea
							onChange={e => this.setState({optionTwo: e.target.value})}
							value={this.state.optionTwo}
							placeholder="Suggestion Two"
							/>
						<br/><br/>
						<button type='submit' disabled={
							this.state.optionOne === '' || this.state.optionOne === ''
						}>Submit
						</button>
					</form>
				</div>
			</div>

		)
	}
}
const mapStateToProps = ({users, authedUser}) => ({avatar: users[authedUser].avatarURL, authedUserName: users[authedUser].name})
const mapDispatchToProps = (dispatch) => ({addQuestion: (one, two) => dispatch(handleAddQuestion(one, two))})


export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion);