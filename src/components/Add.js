import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { addQuestion } from '../actions/questions'


class Add extends Component {
  state = {
    redirect:false,
    optionOneText : '',
    optionTwoText : ''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(addQuestion({
    	...this.state,
      	...{
        	author : this.props.authedUser
        }
    }))
      .then(() => { this.setState({
        redirect: true
      })})
  }
  handleChange = (e) => {
	 this.setState((state,props) => (
       { optionTwoText: state.optionTwoText, optionOneText : e.target.value }
     ));
  }

  handleChangeTwo = (e) => {
	 this.setState((state,props) => (
       { optionOneText: state.optionOneText, optionTwoText : e.target.value }
     ));
  }
  render() {
    if (this.state.redirect === true) {
            return <Redirect to="/" />
        }
    return (
      <div >
			<h2 className="center">Would You Rather</h2>
              <form onSubmit={this.handleSubmit} className="addForm">
                <div className="form-group">
                  <label >Option One</label>
                  <input type="text" 
					value={this.state.optionOne}
					onChange={this.handleChange}
					className="form-control" 
					placeholder="Enter option one...">
				  </input>
                </div>
                <div className="form-group">
                  <label >Option Two</label>
                  <input type="text"
					value={this.state.optionTwo}
					onChange={this.handleChangeTwo}
					className="form-control"
					placeholder="Enter option two...">
				  </input>
                </div>
                <button type="submit" >Submit</button>
              </form>
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser, setUsers }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(Add)