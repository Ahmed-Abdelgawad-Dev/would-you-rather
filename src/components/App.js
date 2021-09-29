import React, {useEffect} from 'react'
import {Route} from 'react-router-dom'

import Login from './Login'
import Navbar from "./Navbar";
import LeaderBoard from "./LeaderBoard";
import QuestionsList from "./QuestionsList";
import { connect } from 'react-redux'
import {getInitialData} from "../store/actions/index";
import CreateQuestion from "./CreateQuestion";


let loggedIn = false
const PrivateRoute = ({ component: Component, ...kwargs }) => (
  <Route {...kwargs} render={(props) => (
    loggedIn === true
      ? <Component {...props} />
      : <div>Please login first</div>
  )}/>
)

const App = (props) => {
    // New common hook i/of componentDidMount
    useEffect(() => {
        console.log(props)
        props.dispatch(getInitialData())
    })
  return (
      <>
          <Navbar />
          {!props.loadingStatus &&
          <div className="App">
            <PrivateRoute exact path='/' component={QuestionsList} />
            <PrivateRoute exact path='/create' component={CreateQuestion} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/leaderboard' component={LeaderBoard} />
        </div>
          }
      </>
  );
}

const mapStateToProps = ({questions, authedUsers}) => {
    return {
        loggedIn: authedUsers !== null,
        loadingStatus: questions === null
    }
}
export default connect(mapStateToProps)(App);
