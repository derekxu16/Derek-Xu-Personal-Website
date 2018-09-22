import React from 'react'
import { Header } from 'semantic-ui-react'

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = { mounted: false }
  }
  componentDidMount() {
    this.setState({ mounted: true })
  }
  render() {
    return (
      <div className='fullscreen vertical-center-container' style={{ padding: 20 }}>
        <Header as='h1' style={{ color: 'white', fontSize: 70, fontWeight: 200 }}>
          Hi, I'm Derek!
        </Header>
        <p style={{ fontSize: 20 }}>
          I study Software Engineering at uWaterloo.
        </p>
      </div>
    );
  }
}