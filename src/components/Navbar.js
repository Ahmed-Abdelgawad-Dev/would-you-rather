import React from 'react'
import {connect} from "react-redux";
import {Link} from 'react-router-dom'
import {setAuthedUser} from "../store/actions";



const Navbar = ({authedUserName, authedUser, signOut}) => {
	return(
		<div>
			<ul className="nav-list">
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/create'>Create Question</Link></li>
				<li><Link to='/leaderboard'>Leader Board</Link></li>
		        {authedUser
		          ? (
		          	<div>
		              <li>
		                <Link to='/login' onClick={() => signOut()}>Sign Out</Link>
		              </li>
		              <li>{authedUserName}</li>
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

const mapStateToProps = ({users, authedUser}) => {
	return {
		authedUser,
		authedUserName: authedUser && users[authedUser] ? users[authedUser].name : null
	}
}
const mapDispatchToProps = (dispatch) => ({
	signOut: () => dispatch(setAuthedUser(null))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
