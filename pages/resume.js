import React, { Component } from "react"
import { Button, Dimmer, List, Header, Icon } from 'semantic-ui-react'
import Link from "gatsby-link"
import { withPrefix } from 'gatsby-link'
import Helmet from "react-helmet"

export default class Resume extends React.Component {
  render() {
    return (
      <div style={{background:'linear-gradient(to right, #4267b2, #92a2dd)', display:'flex', flexDirection:'column', paddingTop:40, fontSize:'calc(22px + 0.6vw)', height:'100%', width:'100%'}}>
        <div className='textbox' style={{flex:'auto', paddingBottom:20, maxWidth:800}}>
            <p style={{paddingTop:'calc(2.4vh)', flex:'none', fontSize:'1em', color:'#ededed'}}> Through school assignments, Hackathons and fun personal projects I have developed skills with numerous modern technologies.</p>
            <p style={{flex:'none', fontSize:'1em', color:'#ededed'}}> My greatest strengths are currently in front-end development with HTML/CSS/JavaScript (React+Redux), and application development using C++, Python and React Native </p>
            <h2 style={{justifySelf:'flex-end', textAlign:'center', color:'white', marginTop:'auto'}}> Learn more about my qualifications below! </h2>
        </div>
        <div className='stackable' style={{flex:'auto', width:'100%'}}>
          <Section name='Resume' icon='file' color='orange' message='Click here to view a PDF version of my resume' to={__PATH_PREFIX__ + '/resume.pdf'}/>
          <Section name='Github' icon='github' color='#6e5494' message='Click here to view my Github profile' to='https://github.com/PlumSauc3'/>
          <Section name='LinkedIn' icon='linkedin' color='#4875B4' message='Click here to view my LinkedIn' to='https://www.linkedin.com/in/derek-xu-06814177/'/>
        </div>
      </div>
    )
  }
}

class Section extends Component {
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
            <div className='verticalCenterContainer' style={{textAlign:'center'}}>
              <Header as='h1' style={{fontSize:'calc(4px + 3vw)', margin:'auto 0 0 0', paddingBottom:'calc(14px + 4vw)', textAlign:'center', color:'white'}}>{this.props.name}</Header>
              <Icon inverted fitted name={this.props.icon} style={{marginBottom:'auto', fontSize:'calc(30px + 8vw)'}}/>
            </div>
        </Dimmer.Dimmable>
      </div>
    )
  }
}