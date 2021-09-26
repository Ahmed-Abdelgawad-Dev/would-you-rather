import React, {useEffect} from 'react'
import {Route} from 'react-router-dom'
import PrivateRoute from "./PrivateRoute";
import Home from './Home'
import NewQuestion from './NewQuestion'
import Navbar from "./Navbar";
import LeaderBoard from "./LeaderBoard";
import Login from './Login'
import { connect } from 'react-redux'
import {getInitialData} from "../store/actions/shared";
import '../index.css'

const App = (props) => {
    console.log(props)
    useEffect(() => {
        props.dispatch(getInitialData())
    })
  return (
      <React.Fragment>
        <div className="App">
            <div className="app-address">Would You Rather ?</div>
            <Navbar />
            <Route exact path='/login'><Login /></Route>
            <PrivateRoute exact path='/'><Home /></PrivateRoute>
            <PrivateRoute exact path='/question'><NewQuestion /></PrivateRoute>
            <PrivateRoute exact path='/leaderboard'><LeaderBoard /></PrivateRoute>
        </div>
      </React.Fragment>
  );
}

const mapStateToProps = ({authedUsers}) => {
    return {
        authedUsers,
        notAuthorized: authedUsers == null
    }
}
export default connect(mapStateToProps)(App);
