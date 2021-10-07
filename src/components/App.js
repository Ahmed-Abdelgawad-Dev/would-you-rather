import React from 'react'
import  '../index.css'
import {Redirect, Route} from 'react-router-dom'
import Login from './Login'
import Navbar from "./Navbar";
import LeaderBoard from "./LeaderBoard";
import QuestionsList from "./QuestionsList";
import { connect } from 'react-redux'
import {getInitialData} from "../store/actions/index";
import CreateQuestion from "./CreateQuestion";
import QuestionManager from "./QuestionManager";




let theAuthedUser = false
//https://ui.dev/react-router-v5-protected-routes-authentication/
function PrivateRoute({ children, ...rest }) {
	return (
		<Route {...rest} render={({ location }) => {
			return theAuthedUser
				? children
				: <Redirect to={{
					pathname: '/login',
					state: { from: location }
				}}/>
		}} />
	)
}

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getInitialData())
  }

  render() {
    theAuthedUser = this.props.theAuthedUser

    return (
        <React.Fragment>
            <header className="head">Would You Rather App</header>
          <Navbar />
          <div className="app">
            {this.props.questions !== null &&
            <div className='app-container'>
              <Route            exact path='/login'><Login/></Route>
              <PrivateRoute     exact path='/'><QuestionsList/></PrivateRoute>
              <PrivateRoute     exact path='/add'><CreateQuestion/></PrivateRoute>
              <PrivateRoute            exact path='/question/:id'><QuestionManager/></PrivateRoute>
              <PrivateRoute     exact path='/leaderboard'><LeaderBoard/></PrivateRoute>
            </div>
          }
          </div>
        </React.Fragment>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  theAuthedUser: authedUser !== null,
})

export default connect(mapStateToProps)(App);