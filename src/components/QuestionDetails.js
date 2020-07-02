import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionDetails extends Component {
  render() {
    const { question, authedUser } = this.props
    console.log(authedUser, "Logged in as...")
    const path = !!this.props.askerImg ? this.props.askerImg : ''
    
    console.log(this.props.askerImg)
    return (
      <div >
      		<h1 className="center">Would You Rather</h1>
      		{!!path ?
      			<div className="middleImageHolder">
      				<img src={path} alt='Logo' />
      			</div>
				: <span>Loading</span>
			}      		
      		<div className="flex">
				<div className='centerPower'>OR</div>
      			{ question ?
      			<div className={`flexed backAgainOne ${
                 question.optionOne.votes.includes(authedUser) ? 'chosen' : ''
                }`}>
      				{ question['optionOne'].text }
      			</div>
				: <span>Loading</span>
				}
      			{ !!question ?
      			<div className={`flexed backAgainTwo ${
                 question.optionTwo.votes.includes(authedUser) ? 'chosen' : ''
                }`}>
      				{this.props.question['optionTwo'].text}
      			</div>
				: <span>Loading</span>
				}
      		</div>
			{ !!this.props.question ?
			<div className="flex">			
				<div className="flexed">
					<div>Votes:{question['optionOne'].votes.length}</div>
					<div>
						{(question['optionOne'].votes.length / (question['optionTwo'].votes.length + 											question['optionOne'].votes.length)).toFixed(1) } %</div>
				</div>
				<div className="flexed">
					<div>Votes:{this.props.question['optionTwo'].votes.length}</div>
					<div>
						{(this.props.question['optionTwo'].votes.length / (this.props.question['optionTwo'].votes.length + 											this.props.question['optionOne'].votes.length)).toFixed(1) } %</div>
				</div>
			</div>
			:
			<div>Loading...</div>
			}
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser, setUsers }, props) {
  const { id } = props.match.params
  console.log(questions,'Then setUsers -->', setUsers, props.match.params)
  return {
    askerImg : !!setUsers && questions[id] ? setUsers.users[
					questions[id].author
				].avatarURL : '',
	authedUser,
    question: questions[id],
  }
}

export default connect(mapStateToProps)(QuestionDetails)