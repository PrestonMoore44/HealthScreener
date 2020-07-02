import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderboardUser extends Component {
  render() {
    const { user } = this.props
    return (
      <div className="leaderboardUserMain">
			<div className="imgHoldDiv">
      			<img src={user.avatarURL} alt="Logo" />
			</div>
			<div className="remainder">
				<div>Name: {user.name}</div>
				<div>Questions: {user.questions.length}</div>
				<div>Answers: {Object.keys(user.answers).length}</div>
			</div>			
      </div>
    )
  }
}

export default connect()(LeaderboardUser)