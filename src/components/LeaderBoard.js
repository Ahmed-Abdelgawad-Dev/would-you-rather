import React from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types'


const LeaderBoard = ({ IDs, users }) => {
  return(
    <React.Fragment>
      <ul>

        {IDs && IDs.map(id => {

            const {answers, avatarURL, questions, name} = users[id]

            return (
              <li key={id}>
                <h3 className="user-name">{name}</h3>
                <div>
                  <img src={avatarURL} alt={`name:${name}`}/>
                  <div className="qa">
                      <br/>
                    <span>Questions {questions.length}</span> <br/>
                    <span >Answers: {Object.keys(answers).length}</span>
                  </div>
                    <h4 className="score">Score :  {questions.length + Object.keys(answers).length}</h4>
                    <hr/>
                </div>
              </li>
          );
        })}
      </ul>
    </React.Fragment>
  )
}

LeaderBoard.propTypes = {
    users: PropTypes.object
}

const mapStateToProps = ({ users }) => ({
  users,
  IDs: Object.keys(users)
    .sort((a, b) => (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length))
})

export default connect(mapStateToProps)(LeaderBoard);