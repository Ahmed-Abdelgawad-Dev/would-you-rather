import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {setAuthedUser} from "../store/actions";


class Login extends React.Component{
	state ={
		redirect: false
	}
	handleClick(id) {
		this.props.signIn(id)
		this.setState({redirect: true})
	}
	render() {
		if(this.state.redirect) { return <Redirect to='/' />}
		return (
			<div>
				<ul>
					{Object.keys(this.props.users).map((id) => {
						const {name, avatarURL} = this.props.users[id]
						return (
							<li key={id}>
								<img alt={name}
								     src={avatarURL} />
								<p>{name}</p>
								<button
									onClick={() => {this.handleClick(id)}}
									>Log in with {id}
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = ({users}) => {
	return {users}
}
const mapDispatchToProps = dispatch => ({
  signIn: id => dispatch(setAuthedUser(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login) ;