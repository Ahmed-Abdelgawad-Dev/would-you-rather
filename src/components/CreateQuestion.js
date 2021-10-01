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
		this.props.dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo))
		this.setState({redirect: true})
	}
	render() {
		// console.log(this.state.optionOne)
		// console.log(this.state.optionTwo)
		const {avatar, authedUserName} = this.props;
		if(this.state.redirect) {
			return <Redirect to='/' />
		}
		return(
			<div>
				<h2>Would you rather ?</h2>
				<div>
					<img
						style={{maxWidth: "100px", borderRadius: "90px"}}
						src={avatar} alt={`user:${authedUserName}`}/>
					<form onSubmit={this.handleSubmit}>
						<textarea
							onChange={e => this.setState({optionOne: e.target.value})}
							value={this.state.optionOne}
							placeholder="Variant One"
							/>
						<h4>Or</h4>
						<textarea
							onChange={e => this.setState({optionTwo: e.target.value})}
							value={this.state.optionTwo}
							placeholder="Variant Two"
							/>
						<br/><br/>
						<button
							className="submit-btn"
							type='submit'
							disabled={this.state.optionOne === '' || this.state.optionOne === ''}
						>
							Submit
						</button>
					</form>
				</div>
			</div>

		)
	}
}
const mapStateToProps = ({users, authedUser}) => ({
	avatar: users[authedUser].avatarURL, authedUserName: users[authedUser].name
})

export default connect(mapStateToProps)(CreateQuestion);