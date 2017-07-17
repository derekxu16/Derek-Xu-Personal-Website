import React, { Component } from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import { Menu, Container } from 'semantic-ui-react'

import "../css/typography.css"

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
      <Menu color='blue'>
        <Menu.Item header as={Link} to="/">Derek Xu</Menu.Item>
        <Menu.Item as={Link} to="/resume" name='Resume' active={activeItem === 'resume'} onClick={this.handleItemClick} />
        <Menu.Item as={Link} to="/about" name='About' active={activeItem === 'about'} onClick={this.handleItemClick} />
        <Menu.Item as={Link} to="/music" name='Music' active={activeItem === 'music'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}