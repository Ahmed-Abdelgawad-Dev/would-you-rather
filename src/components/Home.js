import React, {useState} from 'react'
import Question from './Question'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'


const Home = ({questions, authedUser}) => {
	const [answered, setAnswered] = useState(null)



	const filtered = Object.values(questions).filter((ques) => {
		// const has = (
		// 	ques.firstOption.votes.indexOf(authedUser) > -1 ||
		// 	ques.secondOption.votes.indexOf(authedUser) > -1
		//);
		// return answered ? has : !has
	});
	const sorted = filtered.sort((a, b) => b.timestamp - a.timestamp)
	return(
		<React.Fragment>
			<button	onClick={()=> setAnswered({answered: false})}>Unanswered Questions</button>
			<button	onClick={()=> setAnswered({answered: true})}>answered Questions</button>
			<ul>
				{sorted.map((q) => (
					<li key={q.id}>
						<Link to={`question/${q['id']}`}>
							<Question id={q.id} />
						</Link>
					</li>
				))}
			</ul>
		</React.Fragment>
	)
}

const mapStateToProps = ({authedUser, questions}) => {
	// const answersOfUser = users[authedUser].answers;
	return {
		authedUser, questions
		// answered:   Object.values(questions).filter((ques) => {
		// 	return  Object.keys(answersOfUser).includes((ques.id))
		// }).sort((a, b) => b.timestamp - a.timestamp),
		//
		// unanswered: Object.values(questions).filter((ques) => {
		// 	return  !Object.keys(answersOfUser).includes((ques.id))
		// }).sort((a, b) => b.timestamp - a.timestamp)
	}
}
export default connect(mapStateToProps)(Home);