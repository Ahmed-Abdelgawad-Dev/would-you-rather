import React from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { Container, Badge, Image as Imag, Row } from 'react-bootstrap'

const LeaderBoard = ({ IDs, users }) => {
  return (
    <React.Fragment>

      {IDs && IDs.map(id => {
        const { answers, avatarURL, questions, name } = users[id]
        return (
          <Container key={id}>
            <Row>
              <h3 style={{ textAlign: "center" }} > <Badge>{name}</Badge></h3>
              <Imag
                className="rounded mx-auto d-block"
                style={{ width: "20rem" }} src={avatarURL} thumbnail />
            </Row>
            <br />
            <Row style={{ textAlign: "center" }}>
              <br />

              <h5 style={{ color: "orange" }}>Questions {questions.length}</h5> <br />
              <h5 style={{ color: "orangered" }}>Answers: {Object.keys(answers).length}</h5>
              <h2 style={{ color: "red" }}>Score :  <span style={{ color: "darkred" }}>{questions.length + Object.keys(answers).length}</span></h2>
              
              <hr />
            </Row>
          </Container>
        );
      })}

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