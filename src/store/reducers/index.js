
import { combineReducers } from "redux"
import { users } from './users'
import {authedUser} from "./authedUser";
import {questions} from "./questions";

// combining reducers together
export default combineReducers({users, questions,authedUser})
