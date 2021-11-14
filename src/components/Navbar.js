import React from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../store/actions/authedUser";
import PropTypes from "prop-types";

import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar as NB, Nav } from "react-bootstrap";



const Navbar = ({ authedUserName, authedUser, signOut }) => {
	return (
		<>
		<Container>
			<NB fixed="top" bg="dark" variant="dark">
				<LinkContainer to="/">
					<Nav.Link><span style={{color:"royalblue"}}>Home</span></Nav.Link>
				</LinkContainer>
				<Nav>
					<LinkContainer to="/add">
						<Nav.Link>Create Question</Nav.Link>
					</LinkContainer>

					<LinkContainer to="/leaderboard">
						<Nav.Link>Leader Board</Nav.Link>
					</LinkContainer>

					<LinkContainer to="/login">
						{authedUser ? (
							<Nav.Link onClick={() => signOut()}>
								Sign out: <span style={{color: "crimson"}}>{authedUserName}</span>
							</Nav.Link>
						) : (
							<Nav.Link>Login</Nav.Link>
						)}
					</LinkContainer>
				</Nav>
			</NB>
		</Container><br /><br /><br />
		</>
	);
};

Navbar.propTypes = {
	signOut: PropTypes.func,
	users: PropTypes.object,
	authedUserName: PropTypes.string || null,
};

const mapStateToProps = ({ users, authedUser }) => {
	return {
		authedUser,
		authedUserName:
			authedUser && users[authedUser] ? users[authedUser].name : null,
	};
};

const mapDispatchToProps = (dispatch) => ({
	// simple dispatching could be implemented here.
	signOut: () => dispatch(setAuthedUser(null)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);