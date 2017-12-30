import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import { Grid, Header } from 'semantic-ui-react'
//import { SidebarMobile}
import Navbar from '../components/Navbar'
import 'semantic-ui-css/semantic.min.css';
import '../css/index.css';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }
  render() {
    return (
        <Grid style={{height:'100%', width:'100%', margin:0}}>
          {/* <Grid.Row only='mobile' centered>
            <Grid.Column style={{padding:0}}>
              <SidebarMobile pages={this.props.children}/>
            </Grid.Column>
          </Grid.Row> */}
          <Grid.Row style={{height:'100%', padding:0, margin:0}}>
            <Navbar />
              {this.props.children()}
          </Grid.Row>
        </Grid>
    )
  }
}