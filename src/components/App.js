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



// Stackoverflow Solution
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
          <Navbar />
          {!this.props.loadingStatus &&
            <div className='container'>
              <Route path='/login' component={Login} />
              <PrivateRoute path='/' exact component={QuestionsList} />
              <PrivateRoute path='/create' component={CreateQuestion} />
              <Route path='/question/:id' component={QuestionManager} />
              <PrivateRoute path='/leaderboard' component={LeaderBoard} />
            </div>
          }
        </React.Fragment>
    );
  }
}

const mapStateToProps = ({ questions, authedUser }) => ({
  loadingStatus: questions === null,
  theAuthedUser: authedUser !== null,
})
//
// const App = ({loadingStatus, dispatch}) => {
//     console.log(localStorage.theAuthedUser)
//     // New common hook i/of componentDidMount
//     useEffect(() => {
//         dispatch(getInitialData())
//     })
//
//       return (
//           <React.Fragment>
//               <Navbar />
//               {!loadingStatus &&
//                     <div className="App">
//                     <Route exact path='/' component={QuestionsList} />
//                     <Route exact path='/create' component={CreateQuestion} />
//                     <Route exact path='/leaderboard' component={LeaderBoard} />
//                     <Route path='/question/:id' component={QuestionManager} />
//                     <Route exact path='/login' component={Login} />
//                   </div>
//               }
//           </React.Fragment>
//       );
// }
//
// const mapStateToProps = ({questions, authedUsers}) => {
//     return {
//         loadingStatus: questions === null,
//         theAuthedUser: authedUsers !== null
//     }
// }
export default connect(mapStateToProps)(App);
