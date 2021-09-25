import React, {useEffect} from 'react'
import {Route} from 'react-router-dom'
import '../style.css'
import Home from './Home'
import NewQuestion from './NewQuestion'
import Navbar from "./Navbar";
import LeaderBoard from "./LeaderBoard";
import Login from './Login'
import { connect } from 'react-redux'
import {getInitialData} from "../store/actions/shared";

const App = (props) => {
    useEffect(() => {
        props.dispatch(getInitialData())
        console.log(props)
    })
  return (
    <div className="App">
        <div className="app-address">Would You Rather?</div>
        <Navbar />
        <Route exact path='/'><Home /></Route>
        <Route exact path='/question'><NewQuestion /></Route>
        <Route exact path='/leaderboard'><LeaderBoard /></Route>
        <Route exact path='/login'><Login /></Route>
    </div>
  );
}

const mapStateToProps = ({authedUsers}) => {
    return {
        authedUsers,
        notAuthorized: authedUsers == null
    }
}
export default connect(mapStateToProps)(App);
