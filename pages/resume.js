import React, { Component } from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import { Container, Header, Divider, List, Grid, Segment } from 'semantic-ui-react'

export default class Resume extends React.Component {
  componentWillMount() {
    this.setState({
      sections : [
        {
          color: "blue",
          sectionName: 'Education',
          entries : [
            ['University of Waterloo', 'Software Engineering 1A Undergraduate Candidate'],
            ['Colonel By Secondary School', 'Completed International Baccalaureate Diploma with a score of 39'],
          ]
        },
        {
          sectionName : 'Skills',
          entries : [
            ['HTML and CSS', 'I enjoy creating websites and web applications'],
            ['React and Javascript', 'Have worked with React, React Native and Redux'],
            ['C++', 'Have created a few projects in C++ and use C++ primarily in programming contests'],
            ['Java', 'Have created an Android App with Java for musicians. It has received over 1000 downloads on the Play Store'],
            ['Python', 'Use Python frequently for competitive programming. I have experience with Flask and REST APIs'],
          ]
        },
        {
          sectionName : 'Awards',
          entries : [
            ['2017 ECOO Finals 9th Place', ''],
            ['2017 ECOO Eastern Ontario Champions', ''],
            ['2017 ECOO OCDSB Boardwide Champions', ''],
            ['Grade 12 Computer Science (ICS4U) Subject Award', 'Colonel By Secondary School highest ICS4U grade'],
            ['Grades 9-12 OCDSB Silver Medal', 'Mainted an average of at least 90 during all four years of high school'],
          ]
        },
        {
          sectionName : 'Work Experience',
          entries : [
            ['Gap Factory Tanger Kanata', 'Cashier and Sales Associate from August 2016 to July 2017'],
          ]
        },
      ]
    })
  }
  render() {
    return (
      <div>
        <Header as='h2'>Resume</Header>
        <Grid stackable divided='vertically'>
          { /* <Grid.Row centered columns={2}>
            <Grid.Column width={8}>
              <Section name={this.state.sections[0].sectionName} entries={this.state.sections[0].entries} bg=''/>
            </Grid.Column>
            <Grid.Column width={4}>
              <Section name={this.state.sections[1].sectionName} entries={this.state.sections[1].entries}/>
            </Grid.Column>
          </Grid.Row> */}
          {this.state.sections.map((sect, i) => {
            return (
              <Grid.Row centered>
                <Grid.Column>
                  <Section name={sect.sectionName} entries={sect.entries} />
                </Grid.Column>
              </Grid.Row>
            )
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
        <Container style={{backgroundColor:this.props.bg}}>
          <Header as='h3'> {this.props.name} </Header>
          <List>
            {this.props.entries.map(item => {
              return (
                <ListItem title={item[0]} text={item[1]} />
              )
            })}
          </List>
        </Container>
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
        <p> {this.props.text} </p>
      </div>
      </List.Item>
    )
  }
}