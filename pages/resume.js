import React, { Component } from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import { Container, Header, Divider, List } from 'semantic-ui-react'

export default class Resume extends React.Component {
  componentWillMount() {
    this.setState({
      sections : [
        {
          sectionName: 'Education',
          entries : [
            ['University of Waterloo', 'Software Engineering 1A Undergraduate Candidate'],
            ['Colonel By Secondary School', 'Completed International Baccalaureate Diploma with a score of 39'],
          ]
        },
        {
          sectionName : 'Skills',
          entries : [
            ['React', 'Have worked with React, React Native and Redux'],
            ['C++', 'Have created a few projects in C++ and mainly use C++ in programming contests'],
            ['Java', 'Have created an Android App with Java for musicians. It has received over 1000 downloads on the Play Store'],
          ]
        },
        {
          sectionName : 'Awards',
          entries : [
            ['2017 ECOO Finals 9th Place', ''],
            ['2017 ECOO Eastern Ontario Champions', ''],
            ['2017 ECOO OCDSB Boardwide Champions', ''],
            ['Grade 12 Computer Science (ICS4U) Subject Award', 'Colonel By Secondary School highest ICS4U grade'],
          ]
        },
        {
          sectionName : 'Work Experience',
          entries : [
            ['Gap Factory Tanger Kanata', 'Cashier and Sales Associate from August 2016 to July 2017'],
          ]
        }
      ]
    })
  }
  render() {
    return (
      <Container text>
        <Header as='h2'>
          Resume
        </Header>
        <div>
          {this.state.sections.map(sect => {
            return <Section name={sect.sectionName} entries={sect.entries} />
          })}
        </div>
      </Container>
    )
  }
}

class Section extends Component {
  render() {
    //Displays one section of the resume
    return (
      <Container text>
        <Header as='h3'> {this.props.name} </Header>
        <List>
          {this.props.entries.map(item => {
            return (
              <ListItem title={item[0]} text={item[1]} />
            )
          })}
        </List>
        <Divider />
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
        <p style={{fontSize:16}}> {this.props.text} </p>
      </div>
      </List.Item>
    )
  }
}