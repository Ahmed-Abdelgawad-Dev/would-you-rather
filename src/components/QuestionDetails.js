import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Container, ProgressBar, Image as Imag, Badge } from "react-bootstrap";

const QuestionDetails = ({ question, author }) => {
	const sumOfVotes =
		question.optionOne.votes.length + question.optionTwo.votes.length;

	return (
		<Container style={{ textAlign: "center" }}>
			<h4 style={{ color: "red" }}>
				This question is asked by{" "}
				<Badge>
					<span className="asked-by">{author.name}</span>
				</Badge>
			</h4>
			<Imag
				style={{ width: "16rem" }}
				className="rounded mx-auto d-block"
				src={author.avatarURL}
				alt={author.name}
				thumbnail
			/>{" "}
			<br />
			<h3 style={{ color: "darkred" }}>Votes:</h3>
			<Container style={{ color: "blue" }}>
				<p className="options">{question.optionOne.text}</p>
				<p className="of">{`${question.optionOne.votes.length} of total ${sumOfVotes} votes`}</p>
				<ProgressBar
					variant="info"
					animated
					now={(question.optionOne.votes.length / sumOfVotes) * 100}
					label={`${(
						(question.optionOne.votes.length / sumOfVotes) *
						100
					).toFixed(0)}%`}
				/>
			</Container>
			<br />
			<hr />
			<Container style={{ color: "blue" }}>
				<p className="options">{question.optionTwo.text}</p>
				<p className="of">{`${question.optionTwo.votes.length} of total ${sumOfVotes} votes`}</p>
				<p className="percent">{`${(
					(question.optionTwo.votes.length / sumOfVotes) *
					100
				).toFixed(0)}%`}</p>
				<ProgressBar
					variant="info"
					animated
					now={(question.optionTwo.votes.length / sumOfVotes) * 100}
					label={`${(
						(question.optionTwo.votes.length / sumOfVotes) *
						100
					).toFixed(0)}%`}
				/>
			</Container>
		</Container>
	);
};

QuestionDetails.propTypes = {
	question: PropTypes.object,
	author: PropTypes.object,
};

export default connect()(QuestionDetails);
