import React from 'react'
import  '../index.css'
import {Route} from 'react-router-dom'
import Login from './Login'
import Navbar from "./Navbar";
import LeaderBoard from "./LeaderBoard";
import QuestionsList from "./QuestionsList";
import { connect } from 'react-redux'
import {getInitialData} from "../store/actions/index";
import CreateQuestion from "./CreateQuestion";
import QuestionManager from "./QuestionManager";
import PleaseLogin from "./PleaseLogin";
import Page404 from "./Page404";


// Stackoverflow Solution for implementing the protected route.
let theAuthedUser = false
const PrivateRoute = ({ component: Component, ...kwargs }) => (
  <Route {...kwargs} render={(props) => (
    theAuthedUser === true
      ? <Component {...props} />
      : <PleaseLogin />
  )}/>
)

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
              <Route            exact path='/login' component={Login} />
              <PrivateRoute     exact path='/' component={QuestionsList} />
              <PrivateRoute     exact path='/add' component={CreateQuestion} />
              <PrivateRoute            exact path='/question/:id' component={QuestionManager} />
              <PrivateRoute     exact path='/leaderboard' component={LeaderBoard} />
              {/*<Route                  path='/' component={Page404} />*/}
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