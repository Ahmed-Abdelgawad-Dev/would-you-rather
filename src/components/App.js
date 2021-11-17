import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Navbar from "./Navbar";
import LeaderBoard from "./LeaderBoard";
import '../index.css'
import QuestionsList from "./QuestionsList";
import { connect } from "react-redux";
import { getInitialData } from "../store/actions/index";
import CreateQuestion from "./CreateQuestion";
import QuestionManager from "./QuestionManager";
import Page404 from "./Page404";

import {Container} from 'react-bootstrap'

let theAuthedUser = false;
//https://ui.dev/react-router-v5-protected-routes-authentication/
function PrivateRoute({ children, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) => {
				return theAuthedUser ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location },
						}}
					/>
				);
			}}
		/>
	);
}

class App extends React.Component {
	componentDidMount() {
		this.props.dispatch(getInitialData());
	}

	render() {
		theAuthedUser = this.props.theAuthedUser;
		return (
			<>
			<div className="main-div">
				<Navbar />
				<Container fluid className="app">
					{this.props.questions !== null && (
						<div>
							<Switch>
								<Route exact path="/login">
									<Login />
								</Route>
								<PrivateRoute exact path="/">
									<QuestionsList />
								</PrivateRoute>
								<PrivateRoute exact path="/add">
									<CreateQuestion />
								</PrivateRoute>
								<PrivateRoute exact path="/questions/:id">
									<QuestionManager />
								</PrivateRoute>
								<PrivateRoute exact path="/leaderboard">
									<LeaderBoard />
								</PrivateRoute>
								<PrivateRoute path="/">
									<Page404 />
								</PrivateRoute>
							</Switch>
						</div>
					)}
				</Container>
				</div>
			</>
		);
	}
}

const mapStateToProps = ({ authedUser }) => ({
	theAuthedUser: authedUser !== null,
});

export default connect(mapStateToProps)(App);
