import React from 'react'
import { connect } from 'react-redux'
import {handleSaveAnswerOfQuestion} from "../store/actions";



class Question extends React.Component {
	state = {
		Alert: false,
		option: 'noThing'
	}
	handleSubmit (e) {
		e.preventDefault()
		this.state.option === 'noThing'
		? this.setState({Alert: true})
		: this.props.dispatch(handleSaveAnswerOfQuestion(this.props.question.id, this.state.option))
	}
	handleChange(e) {
	this.setState({
	  option: e.target.value,
	  Alert: false,
	})
	}

	render() {
		return(
			<div>
				<h2>{this.props.author.name} is asking</h2>
				<div>
					<img src={this.props.author.avatarURL} alt={this.props.author.avatarURL}/>
				</div>
				<div>
					<h2>Would You Rather ...</h2>
					<form
						onChange={(e) => this.handleChange(e)}
						onSubmit={(e) => this.handleSubmit(e)}>
					<div>
						<input type='radio' name='choice' value='optionOne' />
                        <span>{this.props.question.optionOne.text}</span>
					</div>
					<div>
			            <input type='radio' name='choice' value='optionTwo' />
			            <span>{this.props.question.optionTwo.text}</span>
					</div>
						{this.state.Alert && <h3>Please Chose An Option !</h3>}
						<input type='submit' value='submit' />
					</form>
				</div>
			</div>
		);
	}
}

export default connect()(Question)