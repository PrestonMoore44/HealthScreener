import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  Link } from 'react-router-dom'
import { addVote } from '../actions/questions'

class Question extends Component {
	updateVote = (e) => {
        this.props.dispatch(addVote(
          {
          	authedUser: this.props.authedUser,
            qid : this.props.question.id,
            answer: e
          }
        ))
    }
  render() {

    return (
      <Link to={`/QuestionDetails/${this.props.question.id}`} className='tweet'>
		<div className="flex">
      		<div className='centerPower'>OR</div>
      		<div onClick={() => { this.updateVote('optionOne')}} className="flexed backOne">{this.props.question.optionOne.text}</div>
			<div onClick={() => { this.updateVote('optionTwo')}} className="flexed backTwo">{this.props.question.optionTwo.text}</div>
      	</div>
      </Link>
    )
  }
}

function mapStateToProps ({ questions,authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(Question)