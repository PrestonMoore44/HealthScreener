import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import Login from './Login' 
import { handleInitialData } from '../actions/shared'
import { FaAngleDown } from "react-icons/fa";


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
       	<div className="flexHeaderMain">
          <div className="logoContainer">
            <div>Matrix Technology</div>
            <div>logo</div>
          </div>
          <div className="otherHeaderRight">
            <div>Approach</div>
            <div>Team <FaAngleDown className="rotateMe"/></div>
            <div>Industries<FaAngleDown className="rotateMe"/></div>
            <div>Results<FaAngleDown className="rotateMe"/></div>
            <div>
              <button className="speakButton">Speak With an Expert</button>
            </div>
          </div>
        </div>
         :
        <div className="flexHeaderMain"></div>
       }
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