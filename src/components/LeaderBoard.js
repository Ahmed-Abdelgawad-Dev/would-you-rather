import React from 'react'
import { connect } from "react-redux";


const LeaderBoard = ({ users, orderedIds }) => (
  <ul>
    {orderedIds && orderedIds.map(id => {
      const { name, avatarURL, questions, answers } = users[id]
      return (
        <li key={id} className='question'>
          <h3>{name}</h3>
          <div className='question-wrapper'>
            <img
              src={avatarURL}
              alt={`Avatar of ${name}`}
            />
            <div className='question-options'>
              <h4>Questions: {questions.length}</h4>
              <h4>Answers: {Object.keys(answers).length}</h4>
              <h3>Score: {questions.length + Object.keys(answers).length}</h3>
              <hr/>
            </div>
          </div>
        </li>
      );
    })}
  </ul>
)

const mapStateToProps = ({ users }) => ({
  users,
  orderedIds: Object.keys(users)
    .sort((a,b) => (Object.keys(users[b].answers).length + users[b].questions.length)
      - (Object.keys(users[a].answers).length + users[a].questions.length))
})

export default connect(mapStateToProps)(LeaderBoard)

// const LeaderBoard = ({ IDs, users }) => (
//   <ul>
//     {IDs && IDs.map(id => {
//       const { answers, avatarURL, questions, name } = users[id]
//       return (
//         <li key={id}>
//           <h4>{name}</h4>
//           <div>
//             <img style={{maxWidth: "100px"}} src={avatarURL} alt={`name:${name}`} />
//             <div>
//               <h3>Questions {questions.length}</h3>
//               <h3>Answers:  {Object.keys(answers).length}</h3>
//               <h2>Total is:   {questions.length + Object.keys(answers).length}</h2>
//             </div>
//           </div>
//         </li>
//       );
//     })}
//   </ul>
// )
// const mapStateToProps = ({ users }) => ({
//   users,
//   IDs: Object.keys(users)
//     .sort((a, b) => (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length)) || null
// })
//
// export default connect(mapStateToProps)(LeaderBoard);