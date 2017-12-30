import React, { Component } from "react"
import { Menu, Icon, Button, Header, Sidebar } from 'semantic-ui-react'
import Link from "gatsby-link"

class Navbar extends Component {
    state = {}
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
      return (
        <Menu color='black' fixed='top' widths={4} inverted style={{height:40, width:'100%', opacity:0.8}}>
          <Menu.Item header as={Link} to="/" onClick={this.handleItemClick} style={{fontSize:18, fontFamily:'Dosis'}}>Derek Xu</Menu.Item>
          <Menu.Item as={Link} to="/resume" name='resume' active={activeItem === 'resume'} onClick={this.handleItemClick}>
            <Icon name='file text' />
            Resume
          </Menu.Item>
          <Menu.Item as={Link} to="/projects" name='projects' active={activeItem === 'projects'} onClick={this.handleItemClick}>
            <Icon name='wrench' />
            Projects
          </Menu.Item>
          <Menu.Item as={Link} to="/about" name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
            <Icon name='user circle outline' />
            About
          </Menu.Item>
        </Menu>
      )
    }
  }

export default Navbar

  class SidebarMobile extends Component {
    state = { visible: false }
  
    toggleVisibility = () => this.setState({ visible: !this.state.visible })
  
    handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name })
      this.toggleVisibility()
    } 
  
    render() {
      const { visible, activeItem } = this.state
      return (
        <div>
          <Menu fixed='top'>
            <Menu.Item onClick={this.toggleVisibility}>
              <Icon name='sidebar' />
            </Menu.Item>
            <Menu.Item header>
              Derek Xu
            </Menu.Item>
          </Menu>
          <Sidebar.Pushable style={{marginTop:40}}>
            <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
              <Menu.Item header as={Link} to="/" onClick={this.handleItemClick}>
                <Icon name='home' />
                Home
              </Menu.Item>
              <Menu.Item as={Link} to="/resume" name='resume' active={activeItem === 'resume'} onClick={this.handleItemClick}>
                <Icon name='file text' />
                Resume
              </Menu.Item>
              <Menu.Item as={Link} to="/projects" name='projects' active={activeItem === 'projects'} onClick={this.handleItemClick}>
                <Icon name='wrench' />
                Projects
              </Menu.Item>
              <Menu.Item as={Link} to="/music" name='music' active={activeItem === 'music'} onClick={this.handleItemClick}>
                <Icon name='music' />
                Music
              </Menu.Item>
              <Menu.Item as={Link} to="/about" name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
                <Icon name='user circle outline' />
                About
              </Menu.Item>
            </Sidebar>
              <Sidebar.Pusher style={{minHeight:'100vh'}}>
                <Container style={{paddingTop:20}}>
                  {this.props.pages()}
                </Container>
              </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      )
    }
  }