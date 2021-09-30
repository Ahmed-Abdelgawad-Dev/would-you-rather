import React, {useEffect} from 'react'
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
import Page404 from "./Page404";


let theAuthedUser = false
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    theAuthedUser === true
        ? <Component {...props} />
        : <Page404 />
  )}/>
)

const App = ({loadingStatus, dispatch}) => {
    // New common hook i/of componentDidMount
    useEffect(() => {
        dispatch(getInitialData())
    })
  return (
      <>
          <Navbar />
          {!loadingStatus &&
              <div className="App">

                {/*<PrivateRoute exact path='/' render={()=> <QuestionsList />} />*/}
                {/*<PrivateRoute exact path='/create' render={()=> <CreateQuestion />} />*/}
                {/*<Route exact path='/login' render={()=><Login />} />*/}
                {/*<Route path='/question/:id' render={()=><QuestionManager />} />*/}
                {/*<PrivateRoute exact path='/leaderboard' render={()=><LeaderBoard />} />*/}

                <Route exact path='/login' component={Login} />
                <Route exact path='/' component={QuestionsList} />
                <Route exact path='/create' component={CreateQuestion} />
                <Route exact path='/leaderboard' component={LeaderBoard} />
                <Route path='/question/:id' component={QuestionManager} />
            </div>
          }
      </>
  );
}

const mapStateToProps = ({questions, authedUsers}) => {
    return {
        loadingStatus: questions === null,
        theAuthedUser: authedUsers !== null
    }
}
export default connect(mapStateToProps)(App);
