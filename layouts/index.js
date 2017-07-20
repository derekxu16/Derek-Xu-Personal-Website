import React, { Component } from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import { Menu, Container, Icon } from 'semantic-ui-react'

//import '../semantic/dist/semantic.min.css';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }
  render() {
    return (
      <div>
        <Navbar />
        <Container>
          {this.props.children()}
        </Container>
      </div>
    )
  }
}

class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div style={{marginBottom: 60}}>
      <Menu color='blue' fixed='top' inverted>
        <Menu.Item header as={Link} to="/" onClick={this.handleItemClick}>Derek Xu</Menu.Item>
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
      </Menu>
      </div>
    )
  }
}