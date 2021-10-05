import React from 'react'
import {connect} from "react-redux";
import {Link} from 'react-router-dom'
import {setAuthedUser} from "../store/actions/authedUser";
import PropTypes from 'prop-types';


const Navbar = ({authedUserName, authedUser, signOut}) => {
	return(
		<div className="nav">
			<ul className="nav-list">
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/add'>Create Question</Link></li>
				<li><Link to='/leaderboard'>Leader Board</Link></li>
		        {/* Redirect the user to the app functionalities if authed, else to login link */}
				{authedUser
		          ? (
		          	<div>
		              <li>
		                <Link to='/login' onClick={() => signOut()}>Sign Out</Link>
		              </li>
		              <li className="connected-user">{authedUserName}</li>
		            </div>
			        )
		          : (<li>
		              <Link to='/login' >Login</Link>
		            </li>)
		        }
			</ul>

		</div>
	)
}

Navbar.propTypes = {
	signOut: PropTypes.func,
	users: PropTypes.object,
	authedUserName: PropTypes.string || null
}

const mapStateToProps = ({users, authedUser}) => {
	return {
		authedUser, authedUserName: authedUser && users[authedUser] ? users[authedUser].name : null
	}
}
const mapDispatchToProps = (dispatch) => ({
	// simple dispatching could be implemented here.
	signOut: () => dispatch(setAuthedUser(null))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
