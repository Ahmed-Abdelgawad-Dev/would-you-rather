import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'


const Login = ({users}) => {
	return(
		<div>
			<hi>Welcome to Would You Rather Game</hi>
		</div>
	)
}

const mapStateToProps = ({users}) => {
	return {users}
}
export default withRouter(connect(mapStateToProps)(Login)) ;