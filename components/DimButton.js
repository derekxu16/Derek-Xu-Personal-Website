import React, { Component } from 'react'
import { Icon, Dimmer, Header } from 'semantic-ui-react'

export default class DimButton extends Component {
    state = {}
  
    handleShow = () => this.setState({ active: true })
    handleHide = () => this.setState({ active: false })
  
    render() {
      const { active } = this.state
  
      return (
        <div style={{display:'flex', flex:'auto'}}>
          <Dimmer.Dimmable
            as='div'
            className='verticalCenterContainer'
            style={{backgroundColor:this.props.color, flex:'auto', margin:0}}
            dimmed={active}
            onMouseEnter={this.handleShow}
            onMouseLeave={this.handleHide}
          >
            <Dimmer active={active} as='a' href={this.props.to}>
              <Header as='h3' style={{flex:'none', color:'white', margin:20}}>{this.props.message}</Header>
            </Dimmer>
              <div className='verticalCenterContainer' style={{width:200, textAlign:'center'}}>
                <Header as='h1' style={{fontSize:'calc(20px + 0.6vw)', margin:'auto 0 0 0', paddingBottom:'calc(14px + 4vw)', textAlign:'center', color:'white'}}>{this.props.name}</Header>
                <Icon inverted fitted name={this.props.icon} style={{marginBottom:'auto', fontSize:'calc(30px + 8vw)'}}/>
              </div>
          </Dimmer.Dimmable>
        </div>
      )
    }
  }