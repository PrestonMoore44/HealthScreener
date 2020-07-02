import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import Login from './Login' 
import { handleInitialData } from '../actions/shared'


class Nav extends Component {
  state = { redirect : false }
  handleClick = () => {
    this.props.dispatch(handleInitialData())
  };

  render() {
    const { authedUser, userName, loading } = this.props
    return (
      <nav className='nav'>
       { authedUser === '' ?
       	<div>
       		<Login></Login>
       		<h3 className='center'>Welcome, Guest</h3>
       </div>
         :
       		<h3 className='center'>Welcome, {userName}</h3>
       }
		<ul>
        	<li>
		{ !loading ?
         	<NavLink exact to='/' onClick={this.handleClick} activeClassName='active' >
         		Logout
			</NavLink>	
         :
         <a href=''>Login</a>
        }
			</li>
			<li>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
			</li>
			<li>
				<NavLink exact to='/Leaderboard' activeClassName='active'>Leaderboard</NavLink>
			</li>
			<li>
				<NavLink exact to='/Add' activeClassName='active'>Add</NavLink>
			</li>
		</ul>
      </nav>
    )
  }
}

function mapStateToProps ({ authedUser, setUsers}) {
  return {
    authedUser,
    userName : !!setUsers && !!authedUser ? 
    	Object.values(setUsers.users).filter(it => it.id === authedUser)[0].name.split(' ')[0] : '',
    loading: authedUser === null,
  }
}

export default withRouter(connect(mapStateToProps)(Nav))