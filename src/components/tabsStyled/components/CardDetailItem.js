import React from 'react'
// import IconButton from '../Form/IconButton'
export default class MemberCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <li key={this.props.key}>
        <div className="rightContentBox">
          <div className="userCon">
            <div className="imgCon">
              <img src={this.props.data.avatar} alt="avatar"/>
            </div>
            <div className="userText">
              <h3>{this.props.data.name}</h3>
              <h5>{this.props.data.member}</h5>
            </div>
          </div>
        </div>
        <div className="rightBtns">
          <a href="">
            <span className="fa fa-angle-down" />
          </a>
        </div>
      </li>
    )
  }
}
