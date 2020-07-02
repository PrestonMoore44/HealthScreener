import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import LeaderboardUser from './LeaderboardUser'

class Leaderboard extends Component {
  render() {
    let { users } = this.props 
    return (
      <div >
			<h2 className="center">Leaderboard</h2>
      		{users.map((it) => (
    			<LeaderboardUser key={it.id} user={it}></LeaderboardUser>
    		))}
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser, setUsers }) {
  //console.log(" Users ---> ", setUsers, "...Inside leaderboard")
  return {
    test: !!setUsers ? Object.values(setUsers.users) : [],
    users: !!setUsers ? Object.values(setUsers.users).sort((a,b) => {
    		if ( (a.questions.length + Object.values(a.answers).length) < (b.questions.length + Object.values(b.answers).length)  ) {
            	return 1;
            } else if ((b.questions.length + Object.values(b.answers).length) < (a.questions.length + Object.values(a.answers).length)  ) {
            	return -1;
            } else {
            	return 0;
            }
    }) : [],
  }
}

export default withRouter( connect(mapStateToProps)(Leaderboard) )