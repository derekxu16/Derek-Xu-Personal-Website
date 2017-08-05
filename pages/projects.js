import React, { Component } from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import { Container, Header, Divider, List, Grid, Popup, Icon } from 'semantic-ui-react'

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
          ],
          links : [
            {name: 'android', text: "Available on Google Play!", link : "https://play.google.com/store/apps/details?id=com.derekxu.pianochordpads", color: 'green'}
          ],
        },
        {
          sectionName: 'Circle Memory Game',
          link: "https://github.com/PlumSauc3/Circle-Memory-Game",
          entries : [
            ['Technologies', 'C++, OpenFrameworks'],
            ['Description', "A memory game that I wrote in C++ using OpenFrameworks. Circles are displayed on screen on the start of each round and disappear after a short amount of time. The player's objective is to find all of the hidden circles without missing more than 3 times!"],
          ],
          links : [
            
          ],
        },
        {
          sectionName: 'Derek Xu Music Reivews',
          link: "https://github.com/PlumSauc3/Derek-Xu-Music-Reviews",
          entries : [
            ['Technologies', 'JavaScript, React+Redux, Semantic UI, Spotify API, Python, Flask'],
            ['Description', 'A music review website where I personally make lists of music that I enjoyed. The frontend is written in React+Redux with Semantic UI styling. The backend uses a Python Flask app to gather album data from the Spotify API.'],
          ],
          links : [
            {name: 'music', text: "Read my reviews here!", link : "https://plumsauc3.github.io/Derek-Xu-Music-Reviews/", color : 'blue'}
          ],
        },
        {
          sectionName: 'Personal Website',
          link: "https://github.com/PlumSauc3/Derek-Xu-Personal-Website",
          entries : [
            ['Technologies', 'Gatsby, React, Semantic UI'],
            ['Description', "The website you're looking at right now! Created with React using the GatsbyJS library. Designed with Semantic UI."]
          ],
          links : [
            
          ],
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
            return <Section name={sect.sectionName} entries={sect.entries} link={sect.link} key={i} links={sect.links}/>
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
        <Grid.Column width={8}>
          <Header as='h3'><a href={this.props.link}> {this.props.name} </a></Header>
          <List>
            {this.props.entries.map((item, i) => {
              return (
                <ListItem title={item[0]} text={item[1]} key={i}/>
              )
            })}
          </List>
        </Grid.Column>
        <Grid.Column width={4}>
            <Grid>
              {this.props.links.map((item, i) => {
                return (
                  <Grid.Row stretched centered columns={1}>
                    <Grid.Column>
                      <Popup
                        trigger={
                          <a href={item.link} style={{margin:'auto'}}>
                            <Icon name={item.name} size='huge' color={item.color} />
                          </a>
                        }
                        content={item.text}
                        hideOnSroll
                    />
                    </Grid.Column>
                  </Grid.Row>
                )
              })}
            </Grid>
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