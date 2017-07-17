import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import { Container, Header, Divider, List } from 'semantic-ui-react'

export default class About extends React.Component {
  render() {
    return (
      <Container text>
        <Header as='h2'>
          About Me
        </Header>
        <p> I'm a 17 year old Software Engineering student at the University of Waterloo. I grew up in Kanata, Ontario and completed the IB Diploma Programme at Colonel By SS. I love programming! I currently like working with React and C++ the most. I also love doing competitve programming contests. I am ranked in the top 100 on the Don Mills Online Judge. </p>
        <Divider />
        <Header as='h3'> Hobbies </Header>
        <List>
          <List.Item as='a' href="https://dmoj.ca/user/plumsauc3"> DMOJ Profile </List.Item>
          <List.Item as='a' href="https://www.youtube.com/derekxumusic"> Youtube channel</List.Item>
          <List.Item as='a' href="https://github.com/PlumSauc3"> Github </List.Item>
          <List.Item> I also enjoy playing soccer, running and ultimate frisbee </List.Item>
        </List>
      </Container>
    )
  }
}
