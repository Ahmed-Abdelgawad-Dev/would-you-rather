import React from 'react'
import {Link} from "react-router-dom";
const Page404 = () => {
	return(
		<div className="please-login">
			<h2>Page-404 - The page does not exist</h2>
			<div>Continue to <Link to="/login">Login in</Link>page</div>
		</div>
	)
}

export default Page404