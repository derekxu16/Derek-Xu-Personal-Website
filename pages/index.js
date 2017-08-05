import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import { Grid, Header, Image } from 'semantic-ui-react'
import mePic from '../images/good2.png'
import Socialbar from '../components/Socialbar'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row columns={1} centered>
            <Grid.Column width={12}>
              <Header as='h2'>
                Welcome!
              </Header>
              <p style={{fontSize:16}}> Hi! I'm Derek, a 17 year old Software Engineering student at the University of Waterloo. I love to code and learn about coding. I enjoy making projects such as games, webistes and apps and I am especially fond of competitive programming! </p>
              <Image src={mePic} width={350} centered shape='circular' style={{marginTop:40}}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1} centered style={{marginTop:10}}>
            <Grid.Column> <Socialbar /> </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
