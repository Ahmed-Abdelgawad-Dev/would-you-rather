import React from 'react'
import { connect } from "react-redux";


const LeaderBoard = ({ IDs, users }) => {
  return(
    <React.Fragment>
      <ul>
        {IDs && IDs.map(id => {
          const {answers, avatarURL, questions, name} = users[id]
          return (
              <li key={id}>
                <h3>{name}</h3>
                <div>
                  <img style={{maxWidth: "100px"}} src={avatarURL} alt={`name:${name}`}/>
                  <div>
                    <span>Questions {questions.length}</span> <br/>
                    <span>Answers: {Object.keys(answers).length}</span>
                    <h4>Total is: {questions.length + Object.keys(answers).length}</h4>
                  </div>
                    <hr/>
                </div>
              </li>
          );
        })}
      </ul>
    </React.Fragment>
  )
}


const mapStateToProps = ({ users }) => ({
  users,
  IDs: Object.keys(users)
    .sort((a, b) => (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length))
})

export default connect(mapStateToProps)(LeaderBoard);