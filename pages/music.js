import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import { Container, Header, Divider } from 'semantic-ui-react'

export default class Page2 extends React.Component {
  render() {
    return (
      <Container text>
        <Header as='h2'>
          Music
        </Header>
        <p> I love to code, but I also have a passion for music. I especially like to sing and play guitar. </p>
        <a href="https://www.youtube.com/derekxumusic"> You can find my covers here! </a>
        <Divider />
        <p> I also created a website where I post lists of my favourite albums </p>
        <a href="https://plumsauc3.github.io/Derek-Xu-Music-Reviews/"> You can check it out here! </a>
      </Container>
    )
  }
}
