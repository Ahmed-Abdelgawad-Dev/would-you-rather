import React from 'react'
import {connect} from "react-redux";


const LeaderBoard = ({orderedUsersIDs, users}) => (
	<ul>
    {orderedUsersIDs && orderedUsersIDs.map(id => {
      const { answers,avatarURL, questions, name } = users[id]
      return (
        <li key={id}>
          <h4>{name}</h4>
          <div>
            <img src={avatarURL} alt={`${name} of user`}/>
            <div>
              <h2>Questions => {questions.length}</h2>
              <h2>Answers =>  {Object.keys(answers).length}</h2>
              <h2>Sum =>  {questions.length + Object.keys(answers).length}</h2>
            </div>
          </div>
        </li>
      );
    })}
  </ul>
)

const mapStateToProps = ({users}) => {
	return {
		users,
		orderedUsersIDs: Object.keys(users)
			.sort((a, b) => (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length))
	}
}

export default connect(mapStateToProps)(LeaderBoard);