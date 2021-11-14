import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {handleAddQuestion} from "../store/actions";
import PropTypes from 'prop-types'
import {Badge, Form, Row, Button, Container, Image as Imag} from 'react-bootstrap'


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
			<React.Fragment>
				<Container>
				<h2 style={{textAlign: "center"}}><Badge bg="primary">Would you rather ?</Badge></h2><br />
				<Row>
					<Imag 
						className="rounded mx-auto d-block"
						style={{width: "20rem"}} src={avatarURL} 
						alt={authedUserName} thumbnail/>
				</Row>
				<br />
				<Form onSubmit={this.handleSubmit}>
					<Form.Group className="mb-3" controlId="formBasicText">
						<Form.Label as="h5">First Choice</Form.Label>
						<Form.Control 
							onChange={e => this.setState({optionOne: e.target.value})}
							value={this.state.optionOne}	
							type="text" placeholder="Enter Question Number One" />
					</Form.Group>
					<h3 style={{color: "red", textAlign: "center"}}>OR</h3>
					<Form.Group className="mb-3" controlId="formBasicText">
						<Form.Label as="h5">Second Choice</Form.Label>
						<Form.Control 
							onChange={e => this.setState({optionTwo: e.target.value})}
							value={this.state.optionTwo}
							type="text" placeholder="Enter Question Number Two" />
					</Form.Group>
					
					<Button variant="primary" type="submit" className="rounded mx-auto d-block">
						Submit
					</Button>
					</Form>
				</Container>
			</React.Fragment>
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



// className="rounded mx-auto d-block" className="justify-content-md-center" className="d-flex space-between"