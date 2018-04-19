import React from 'react'
import IconButton from '../Form/IconButton'
import RoundedButton from '../Form/RoundedButton'
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
              <img src={this.props.data.avatar} alt="avatar" />
            </div>
            <div className="userText">
              <h3>{this.props.data.name}</h3>
              <h5>{this.props.data.member}</h5>
            </div>
          </div>
        </div>
        <div className="rightBtns">
          <RoundedButton label="Follow" />
          <IconButton iconClass="fa fa-envelope" />
          <IconButton iconClass="fa fa-ellipsis-h" />
        </div>
      </li>
    )
  }
}
