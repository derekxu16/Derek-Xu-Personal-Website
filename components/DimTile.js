import React, { Component } from 'react'
import { Icon, Dimmer, Header } from 'semantic-ui-react'

export default class DimTile extends Component {
    state = {}
  
    handleShow = () => this.setState({ active: true })
    handleHide = () => this.setState({ active: false })
  
    render() {
      const { active } = this.state
  
      return (
        <div style={{display:'flex', flex:'auto'}}>
          <Dimmer.Dimmable
            as='div'
            className='vertical-center-container'
            style={{backgroundColor:this.props.color, flex:'auto', margin:0}}
            dimmed={active}
            onMouseEnter={this.handleShow}
            onMouseLeave={this.handleHide}
          >
            <Dimmer active={active} as='a' href={this.props.to}>
              <Header as='h3' style={{flex:'none', color:'white', margin:20}}>{this.props.message}</Header>
            </Dimmer>
              <div className='vertical-center-container' style={{width:200, textAlign:'center'}}>
                <Header as='h1' className='tile-header' style={{ marginBottom: 40 }} >{this.props.name}</Header>
                <Icon inverted fitted name={this.props.icon} style={{ fontSize:80 }}/>
              </div>
          </Dimmer.Dimmable>
        </div>
      )
    }
  }