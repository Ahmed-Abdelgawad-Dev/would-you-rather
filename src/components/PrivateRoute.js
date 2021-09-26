import React from 'react'
import {connect} from 'react-redux'
import { Route, Redirect, withRouter } from "react-router-dom";

const PrivateRoute = ({component: Component, ...kwargs}) => {
	return(
		<Route {...kwargs} render={function(props) {
      return (
        kwargs.authedUser
        ? <Component {...props} />
        : <Redirect to={{pathname: '/', state: { from: props.location }}} />
      )}
    } />
	);
}
function mapStateToProps({authedUser}) {
	return{authedUser}
}

export default withRouter(connect(mapStateToProps)(PrivateRoute));