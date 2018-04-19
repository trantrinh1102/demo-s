import React from 'react'
// import 'rc-slider/assets/index.css'
// import 'rc-tooltip/assets/bootstrap.css'
import {
  ListGroup,
  ListGroupItem,
  Button,
  Col,
  Row,
  PanelGroup,
  Panel,
  FormControl
} from 'react-bootstrap'
import { Route } from 'react-router-dom'
// import Portfolio from './portfolio'
import Tags from 'components/react-bootstrap/tag';
import Blends from './components/Blends'
// import Group from './group'

class CapsuleInfo extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  componentWillMount() {}

  render() {
    const { match } = this.props
    return (
      <div className="rightBar">
        <Row>
          <Col md={8}>
            <Route exact path={`${match.url}`} component={Tags} name="tags" />
            <Route exact path={`${match.url}/blend`} component={Blends} />
            <Route exact path={`${match.url}/blend`} component={Blends} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default CapsuleInfo;
