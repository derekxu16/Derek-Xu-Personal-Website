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
      <div style={{display:'flex', flexDirection:'column', minHeight:'100%', width:'100%', padding:0, margin:0}}>
        <Navbar />
        {this.props.children()}
      </div>
    )
  }
}