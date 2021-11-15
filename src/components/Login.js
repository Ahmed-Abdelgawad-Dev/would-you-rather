import React from "react";
import { connect } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";
import { setAuthedUser } from "../store/actions/authedUser";
import PropTypes from "prop-types";
import {Container} from 'react-bootstrap'
import {Card, Row, Col, Badge} from 'react-bootstrap'

// Component changed to NON CLASS as using
// useLocation must be with functional
// component and that's why useState hook is used too.
const Login = (props) => {
	const [redirect, setRedirect] = React.useState(false);

	const handleButtonClick = (id) => {
		props.signIn(id);
		setRedirect(true);
	};

	const { state } = useLocation();
	// Directing the authedUser to the main page conditionally.
	//https://ui.dev/react-router-v5-protected-routes-authentication/
	if (redirect === true) {
		return <Redirect to={state?.from || "/"} />;
	}
	return (
		<>
				{Object.keys(props.users).map((id) => {
					const { name, avatarURL } = props.users[id];
					return (
						<Container fluid>
							<Row className="d-block mx-auto img-fluid w-50">
								<Col className="rounded mx-auto d-block">
									<Card key={id} style={{ width: '15rem' }}>
									<Card.Img 
										variant="top" src={avatarURL}
										onClick={() => {handleButtonClick(id);}}
										alt={name}/>
									<Card.Body>
										<Card.Title ><Badge pill bg="light" text="dark">{name}</Badge></Card.Title>
										<Card.Text>Click on the photo to login.</Card.Text>		
									</Card.Body>
									</Card>
									<br />
								</Col>
								
							</Row>
						</Container>
					);
				})}
		</>
	);
};

Login.propTypes = {
	signIn: PropTypes.func,
};

const mapStateToProps = ({ users }) => ({ users });
const mapDispatchToProps = (dispatch) => ({
	// Dispatching here is implemented as a variant experience
	// Regarding that when dispatching is simple we can implement it this way too
	signIn: (id) => dispatch(setAuthedUser(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
