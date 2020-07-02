import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import  Question from './Question'

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
       	<div className="basicFlex">
            <div className="blueBack" onClick={this.handleLatest}><h2>Latest Polls</h2></div>
      		<div className="yellowBack" onClick={this.handleAnswered}><h2>Answered Polls</h2></div>
		</div>
          { this.state.showUnread ?
             <div className="flexMain blueBack">
              {this.props.questionsLatest.map((it) => (
                <div className="flexItem" key={it.id}>
                   <Question question={it}/>
                </div>
			  ))}
            </div>
					:
           <div className="flexMain yellowBack">
             {this.props.questionsAnswered.map((it) => (
               <div className="flexItem" key={it.id}>
                 <Question question={it}/>
               </div>
			))}
           </div>
		}
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