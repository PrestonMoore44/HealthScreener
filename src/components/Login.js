import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setMyAuthedUser } from '../actions/shared'
import Select from 'react-select'

class Login extends Component {

  state = {
  	selectedOption : {}
  }

  handleChange = selectedOption => {
    this.setState((state) => (
      { selectedOption, }
    ));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { selectedOption } = this.state
    this.props.dispatch(setMyAuthedUser(selectedOption.value))
  }

  render() {
	const { users } = this.props
    return (
		<div className="loginPage">
         	<div className="darken"></div>
         	<div className="loginMainDiv">
         		<h2>Let's Get Started!</h2>
      			    <form onSubmit={this.handleSubmit}>
        				<label> Select user:
         					<Select value={this.state.selectedValue}
									onChange={this.handleChange} options={users}>
							</Select>
						</label>
						<button className='btn custBtn'type='submit'>Login</button>
					</form>
         	</div>
        </div>
    )
  }
}

function mapStateToProps ({ questions,authedUser, setUsers }) {
  return {
    authedUser,
    users : !!setUsers ? Object.keys(setUsers.users).reduce((acc,it) => {
    	acc.push({ value : it, label : it })
      	return acc;
    },[]) : []
  }
}

export default connect(mapStateToProps)(Login)