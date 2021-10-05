import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {setAuthedUser} from "../store/actions/authedUser";
import PropTypes from 'prop-types'

class Login extends React.Component{
	state ={
		redirect: false
	}

	handleButtonClick(id) {
		this.props.signIn(id)
		this.setState({redirect: true})
	}

	render() {
		// Directing the authedUser to the main page conditionally.
		if(this.state.redirect) { return <Redirect to='/' />}

		return (
			<div>
				<ul className="login-list">
					{Object.keys(this.props.users).map((id) => {
						const {name, avatarURL} = this.props.users[id]
						return (
							<li key={id}>
								<hr/>
								<img
									onClick={() => {this.handleButtonClick(id)}}
									alt={name}
								     src={avatarURL} />
								<p className="user-name">{name}</p>
								<button
									className="login-btn"
									onClick={() => {this.handleButtonClick(id)}}
									>Sign in
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		)
	}
}

Login.propTypes = {
	signIn: PropTypes.func
}

const mapStateToProps = ({users}) => ({users})
const mapDispatchToProps = dispatch => ({
	// Dispatching here is implemented as a variant experience
	// Regarding that when dispatching is simple we can implement it this way too
  signIn: (id) => dispatch(setAuthedUser(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login) ;