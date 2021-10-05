import React from 'react'
import {Link} from "react-router-dom";
const Page404 = () => {
	return(
		<div className="please-login">
			<h2>Page - 404</h2>
			<div>Continue to <Link to="/">main page</Link></div>
		</div>
	)
}

export default Page404