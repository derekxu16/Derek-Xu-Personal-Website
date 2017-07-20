import React, { Component } from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import { Container, Header, Divider, List, Grid } from 'semantic-ui-react'

export default class Resume extends React.Component {
  componentWillMount() {
    this.setState({
      sections : [
        {
          color: "blue",
          sectionName: 'Piano Chord Pads',
          link: "https://github.com/PlumSauc3/Piano-Chord-Pads",
          entries : [
            ['Technologies', 'Java, Native Android'],
            ['Description', 'Created a tool for musicians and songwriters. It allows users to choose six chords that can be played by tapping on pads. I wanted to help musicians on the go. My app has received over 1000 downloads on the Google Play Store'],
          ]
        },
        {
          sectionName: 'Circle Memory Game',
          link: "https://github.com/PlumSauc3/Circle-Memory-Game",
          entries : [
            ['Technologies', 'C++, OpenFrameworks'],
            ['Description', "A memory game that I wrote in C++ using OpenFrameworks. Circles are displayed on screen on the start of each round and disappear after a short amount of time. The player's objective is to find all of the hidden circles without missing more than 3 times!"],
          ]
        },
        {
          sectionName: 'Derek Xu Music Reivews',
          link: "https://github.com/PlumSauc3/Derek-Xu-Music-Reviews",
          entries : [
            ['Technologies', 'JavaScript, React+Redux, Semantic UI, Spotify API, Python, Flask'],
            ['Description', 'A music review website where I personally make lists of music that I enjoyed. The frontend is written in React+Redux with Semantic UI styling. The backend uses a Python Flask app to gather album data from the Spotify API.'],
          ]
        },
        {
          sectionName: 'Personal Website',
          link: "https://github.com/PlumSauc3/Derek-Xu-Personal-Website",
          entries : [
            ['Technologies', 'Gatsby, React, Semantic UI'],
            ['Description', "The website you're looking at right now! Created with React using the GatsbyJS library. Designed with Semantic UI."]
          ]
        }
      ]
    })
  }
  render() {
    return (
      <div>
        <Header as='h2'>
          Projects
        </Header>
        <Grid divided='vertically'>
          {this.state.sections.map((sect, i) => {
            return <Section name={sect.sectionName} entries={sect.entries} link={sect.link} key={i}/>
          })}
        </Grid>
      </div>
    )
  }
}

class Section extends Component {
  render() {
    //Displays one section of the resume
    return (
      <Grid.Row>
        <Grid.Column width={12}>
        <Header as='h3'><a href={this.props.link}> {this.props.name} </a></Header>
        <List>
          {this.props.entries.map((item, i) => {
            return (
              <ListItem title={item[0]} text={item[1]} key={i}/>
            )
          })}
        </List>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

class ListItem extends Component {
  render() {
    return (
      <List.Item>
      <div>
        <List.Header as='h4'>
          {this.props.title}
        </List.Header>
        <p style={{fontSize:16}}> {this.props.text} </p>
      </div>
      </List.Item>
    )
  }
}