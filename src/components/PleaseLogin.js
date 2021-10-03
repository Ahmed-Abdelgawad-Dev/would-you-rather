import React from 'react'
import {Link} from "react-router-dom";
const PleaseLogin = () => {
	return(
		<div className="please-login">
			<h2>Please login first !</h2>
			<Link to="/login"> Continue to login</Link>
		</div>
	)
}

export default PleaseLogin