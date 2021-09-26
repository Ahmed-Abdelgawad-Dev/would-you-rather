import React from 'react'
import {Link} from 'react-router-dom'
import '../index.css'

const Navbar = () => {
	return(
		<div>
			<ul className="nav-list">
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/question'>New Question</Link></li>
				<li><Link to='/leaderboard'>Leader Board</Link></li>
				<li><Link to="/login">Logout</Link></li>
			</ul>

		</div>
	)
}
export default Navbar;