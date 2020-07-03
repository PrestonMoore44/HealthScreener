import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import  Question from './Question'
import { BsDot } from "react-icons/bs";

class Dashboard extends Component {
  state = {
    showUnread: true,
  }  
	handleLatest = (e) => {
    	e.preventDefault();
    	this.setState({
        	showUnread: true
        })
  	}

	handleAnswered = (e) => {
    	e.preventDefault();
    	this.setState({
        	showUnread: false
        })
  	}
  render() {
    return (
      <div className="mainDashboard">
        <div className="backMain">
          <div className="middleMeMain">
            <div className="middleMeFirst">
              <div>ONLINE BRANDING</div>
              <BsDot/>
              <div>CUSTOM SOFTWARE SOLUTIONS</div>
              <BsDot/>
              <div>WEB/MOBILE APPS</div>
              <BsDot/>
              <div>MACHINE LEARNING</div>
            </div>
            <div className="middleMeMainSecond">
              Your brand has one chance to get it right.
            </div>
            <div className="middleMeThird">
              Partner with Matrix Technology to create frictionless digital customer experiences.
            </div> 
          </div>
        </div>

      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions }) {
  return {
    authedUser,
    questionsLatest: Object.values(questions)
    	.filter(it => (it.optionOne.votes.indexOf(authedUser) === -1) &&
               		  (it.optionTwo.votes.indexOf(authedUser) === -1)
               ),
    questionsAnswered: Object.values(questions)
    	.filter(it => (it.optionOne.votes.indexOf(authedUser) !== -1) ||
               		  (it.optionTwo.votes.indexOf(authedUser) !== -1)
               ),
    loading: !!questions && Object.values(questions).length > 0
  }
}

export default withRouter(connect(mapStateToProps)(Dashboard))