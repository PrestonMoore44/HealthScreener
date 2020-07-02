import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import  Leaderboard from './Leaderboard'
import  Add from './Add'
import  Dashboard from './Dashboard'
import  QuestionDetails from './QuestionDetails'
import  Nav from './Nav'
import { handleInitialData } from '../actions/shared'
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class App extends Component {

  componentDidMount() {
	this.props.dispatch(handleInitialData())   	
  }
   
    render() {
    return (
        <BrowserRouter >
      		<Fragment>
      			<div>
                    <Nav history={history}/>
					<Switch>
                      <Route exact path='/' component={Dashboard} />
                      <Route exact path='/Leaderboard' component={Leaderboard}/>
                      <Route exact path='/Add' component={Add}/>
                      <Route exact path='/QuestionDetails/:id' component={QuestionDetails}/>
					</Switch>     
				</div>
			</Fragment>
	  </BrowserRouter>
    )
    }
}
function mapStateToProps ({ authedUser, questions, setUsers }) {
  return {
    users: !!setUsers ? setUsers.users : {},
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
export default connect(mapStateToProps)(App)