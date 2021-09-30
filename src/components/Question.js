import React from 'react'
import { connect } from 'react-redux'
import {handleSaveAnswerOfQuestion} from "../store/actions";



class Question extends React.Component {
	state = {
		Alert: false,
		option: 'none'
	}
	handleChange(e) {this.setState({option: e.target.value, Alert: false,})}
	handleSubmit (e) {
		e.preventDefault()
		this.state.option === 'none'
			? this.setState({Alert: true})
			: this.props.dispatch(handleSaveAnswerOfQuestion(
				this.props.question.id, this.state.option
			))
	}

	render() {
		console.log('question is: => ',this.props.question)
		return(
			<div>
				<h2>{this.props.author.name} is asking</h2>
				<div>
					<img style={{maxWidth: "100px"}} src={this.props.author.avatarURL} alt={this.props.author.avatarURL}/>
				</div>
				<div>
					<h2>Would You Rather ...</h2>
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
						<input type='submit' value='Submit' />
					</form>
				</div>
			</div>
		);
	}
}

export default connect()(Question)