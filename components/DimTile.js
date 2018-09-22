import React, { Component } from 'react';
import { Icon, Dimmer } from 'semantic-ui-react';

export default class DimTile extends Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    const { active } = this.state

    return (
      <div style={{ display: 'flex', flex: 'auto' }}>
        <Dimmer.Dimmable
          as="div"
          className="vertical-center-container"
          style={{ backgroundColor: this.props.color, flex: 'auto', margin: 0 }}
          dimmed={active}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
        >
          <Dimmer active={active} as="a" href={this.props.to}>
            <p style={{ fontSize: 16, textAlign: 'left', margin: 20 }}>{this.props.message}</p>
          </Dimmer>
            <div className="vertical-center-container" style={{ width: 200 }}>
              <h1 className="tile-header">{this.props.name}</h1>
              <Icon inverted fitted name={this.props.icon} size='huge'/>
            </div>
        </Dimmer.Dimmable>
      </div>
    )
  }
}