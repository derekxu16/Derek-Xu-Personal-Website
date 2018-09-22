import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'gatsby'

class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu
        fixed='top'
        widths={3}
        inverted
        style={{ backgroundColor: 'rgb(33, 133, 208, 0.85)', color: 'white', height: 40 }}
      >
        <Menu.Item header as={Link} to="/" onClick={this.handleItemClick} style={{ fontSize: 18, fontFamily:'Dosis' }}>Derek Xu</Menu.Item>
        <Menu.Item as={Link} to="/resume" name='resume' active={activeItem === 'resume'} onClick={this.handleItemClick}>
          <Icon name='file text' />
          Resume
        </Menu.Item>
        {/* <Menu.Item as={Link} to="/projects" name='projects' active={activeItem === 'projects'} onClick={this.handleItemClick}>
          <Icon name='wrench' />
          Projects
        </Menu.Item> */}
        <Menu.Item as={Link} to="/about" name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
          <Icon name='user circle outline' />
          About
        </Menu.Item>
      </Menu>
    )
  }
}

export default Navbar
