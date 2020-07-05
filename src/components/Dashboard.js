import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import  Question from './Question'
import { BsDot, BsChevronRight } from "react-icons/bs";
import { GiChessRook, GiBrickWall, GiCubeforce } from "react-icons/gi";
import { DiCode } from "react-icons/di"
import { FaCubes, FaChevronRight } from "react-icons/fa"
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMdCloseCircle } from "react-icons/io";

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
        <div className="popContainerMain">
          <div className="popContainerInner">
            <div className="middleMePopContainer">
              <div className="middleMePop one">
                <div className="popTop">
                  <GiChessRook className="middleIcon"/>
                </div>
                <div className="popBottom">
                  Product Stradgety and Roadmapping
                </div>
              </div>
              <div className="middleMePop two">
                <div className="popTop">
                  <GiCubeforce color='white' className="middleIcon"/>
                </div>
                <div className="popBottom">
                  User Design Experience
                </div>
              </div>
              <div className="middleMePop three">
                <div className="popTop">
                  <DiCode className="middleIcon"/>
                </div>
                <div className="popBottom">
                   Customer Software Developement
                </div>
              </div>
            </div>
          </div>
          <div className="secondMid">
            <div className="secondMidInner">Accelerate your roadmap with a</div>
            <div className="secondMidInnerTwo">modern skillset and client-centered team</div>
          </div>
          <div className="centerMeNarrow">Focus on what matters most by relying on us to staff</div>
          <div className="centerMeNarrow">the perfect team and manage the details for you.</div>
          <div className="curved">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#f3f4f5" fill-opacity="1" d="M0,128L48,133.3C96,139,192,149,288,165.3C384,181,480,203,576,208C672,213,768,203,864,176C960,149,1056,107,1152,106.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <div className="flexMe">
              <div className="flexMeDOne">
                <div className="flexMeDOneMini">Time to </div>
                <div className="flexMeDOneMini">Take the Reins</div>
              </div>
              <div className="flexMeDTwo">
                <div className="flexMeDTwoMini">
                  <div><IoMdCloseCircle className="redOrangeIcon"/></div>
                  <div className="formatMe">Stop losing customers to newer competitors because of your outdated applications.</div>
                </div>
                <div className="flexMeDTwoMini">
                  <div><IoMdCloseCircle className="redOrangeIcon"/></div>
                  <div className="formatMe">Stop spinning your wheels with technologists that put their craft ahead of your objectives.</div>
                </div>
                <div className="flexMeDTwoMini">
                  <div><IoMdCloseCircle className="redOrangeIcon"/></div>
                  <div className="formatMe">Stop betting the farm on all-or-nothing software rewrites that risk costly failure.</div>
                </div>
              </div>
            </div>
            <svg class="svgTwo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#f3f4f5" fill-opacity="1" d="M0,128L48,133.3C96,139,192,149,288,165.3C384,181,480,203,576,208C672,213,768,203,864,176C960,149,1056,107,1152,106.7C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
            <div className="centerRedButtonContainer">
              <button className="centerRedButton">SCHEDULE A CALL<FaChevronRight className="schedIcon"/></button>
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