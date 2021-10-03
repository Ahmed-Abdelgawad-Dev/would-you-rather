import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {handleAddQuestion} from "../store/actions";
import PropTypes from 'prop-types'

// Class component as it brings changeable data
class CreateQuestion extends Component {
	state = {
		redirect: false,
		optionOne: '',
		optionTwo: '',
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo))
		this.setState({redirect: true})
	}

	render() {
		const {avatarURL, authedUserName} = this.props;
		if(this.state.redirect) {
			return <Redirect to='/' />
		}

		return(
			<div>
				<h2 className="rather">Would you rather ?</h2>
				<div>
					<img src={avatarURL} alt={`user:${authedUserName}`}/>
					<br/><br/>
					<form className="form" onSubmit={this.handleSubmit}>
						<textarea
							onChange={e => this.setState({optionOne: e.target.value})}
							value={this.state.optionOne}
							placeholder="Variant One"
							/>
						<h3>Or</h3>
						<textarea
							onChange={e => this.setState({optionTwo: e.target.value})}
							value={this.state.optionTwo}
							placeholder="Variant Two"
							/>
						<br/>
						<button
							className="submit-btn"
							type='submit'
							disabled={this.state.optionOne === '' || this.state.optionOne === ''}>
							Submit
						</button>
					</form>
				</div>
			</div>
		)
	}
}

CreateQuestion.propTypes = {
	authedUserName: PropTypes.string
}

const mapStateToProps = ({users, authedUser}) => ({
	// turning long reaching values into variables
	avatarURL: users[authedUser].avatarURL,
	authedUserName: users[authedUser].name
})

export default connect(mapStateToProps)(CreateQuestion);