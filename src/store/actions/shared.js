
import {getUsersAndQuestions} from "../../core/API";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";


export const getInitialData = () => {
	return (dispatch) =>{
		return getUsersAndQuestions()
			.then(({users, questions}) => {
				dispatch(receiveUsers(users))
				dispatch(receiveQuestions(questions))
				dispatch(setAuthedUser('Ahmed'))
			})
	}
}