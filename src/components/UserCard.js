import React from 'react'
import { connect } from 'react-redux'
import { customizeDate } from "../core/customizeDate";
import Proptypes from "prop-types";
import {Container,Image as Imag,Button,Badge, ListGroup} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';


const UserCard = ({ author, question }) => {

	return (
		<Container>
			<hr />
			<Container>
				<h3 style={{textAlign: "center" }}><Badge>{author.name}</Badge> is asking: </h3>
				<Imag className="rounded mx-auto d-block" 
					src={author.avatarURL} alt={`${author.name}`}
					style={{ width: "18rem" }} thumbnail/>
			</Container>
			<br />
			<Container style={{textAlign: "center" }}>
				<h2 style={{color:"red"}}>Would You Rather  ?</h2> <br />
				<ListGroup>
					<ListGroup.Item as="h5" style={{color:"darkblue"}}>{question.optionOne.text} </ListGroup.Item>
					<br /><h5 style={{color: "darkred" }}>Or</h5>
					<br />	<ListGroup.Item as="h5" style={{color:"darkblue"}}>{question.optionTwo.text}</ListGroup.Item>
				</ListGroup> <br />
				<LinkContainer to={`questions/${question.id}`}>
					<Button>View</Button>
				</LinkContainer>
				<br /> <br />
				<p style={{fontFamily: 'Shadows Into Light',}}>{customizeDate(question.timestamp)}</p>
			</Container>
		</Container>
	)
}

UserCard.propTypes = {
	question: Proptypes.object,
	users: Proptypes.array,
	questions: Proptypes.array,

}

const mapStateToProps = ({ questions, users }, { id }) => {
	const question = questions[id]
	return { question, author: users[question.author] }
}

export default connect(mapStateToProps)(UserCard);