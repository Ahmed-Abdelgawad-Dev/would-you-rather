import React from 'react'
import { connect } from 'react-redux'
import {Redirect, useLocation} from 'react-router-dom'
import {setAuthedUser} from "../store/actions/authedUser";
import PropTypes from 'prop-types'


// Component changed to NON CLASS as using
// useLocation must be with functional
// component and that's why useState hook is used too.
const Login =(props)=>{
	const [redirect, setRedirect] = React.useState(false)

	const handleButtonClick = (id)=>{
		props.signIn(id)
		setRedirect(true)
	}
	const {state} = useLocation()
	// Directing the authedUser to the main page conditionally.
	//https://ui.dev/react-router-v5-protected-routes-authentication/
	if (redirect === true) {return <Redirect to={state?.from || '/'} />}

	return (
		<div>
			<ul className="login-list">
				{Object.keys(props.users).map((id) => {
					const {name, avatarURL} = props.users[id]
					return (
						<li key={id}>
							<hr/>
							<img
								onClick={() => {handleButtonClick(id)}}
								alt={name}
							     src={avatarURL} />
							<p className="user-name">{name}</p>
							<button
								className="login-btn"
								onClick={() => {handleButtonClick(id)}}
								>Sign in
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	)
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