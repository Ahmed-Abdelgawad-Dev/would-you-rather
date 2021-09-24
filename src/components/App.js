import {Route} from 'react-router-dom'
import Home from './Home'
import NewQuestion from './NewQuestion'
import Navbar from "./Navbar";
import LeaderBoard from "./LeaderBoard";
import Login from './Login'


const App = () => {
  return (
    <div className="App">
        <Navbar />
        <Route exact path='/'><Home /></Route>
        <Route exact path='/question'><NewQuestion /></Route>
        <Route exact path='/leaderboard'><LeaderBoard /></Route>
        <Route exact path='/login'><Login /></Route>
    </div>
  );
}

export default App;
