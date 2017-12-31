import React, { Component } from "react"
import Link from "gatsby-link"
import DimButton from '../components/DimButton'
import { withPrefix } from 'gatsby-link'
import Helmet from "react-helmet"

export default class Resume extends React.Component {
  render() {
    return (
      <div style={{background:'linear-gradient(to right, #4267b2, #92a2dd)', display:'flex', flexDirection:'column', paddingTop:40, fontSize:'calc(22px + 0.6vw)', height:'100%', width:'100%'}}>
        <div className='textbox' style={{flex:'auto', maxWidth:800}}>
          <div style={{flex:'none'}}>
            <p style={{fontSize:'1em', color:'#ededed'}}> Through school assignments, Hackathons and fun personal projects I have developed skills with numerous modern technologies.</p>
            <p style={{fontSize:'1em', color:'#ededed'}}> My greatest strengths are currently in front-end development with HTML/CSS/JavaScript (React+Redux), and application development using C++, Python and React Native. </p>
          </div>
            <h2 style={{paddingTop:20, textAlign:'center', color:'white'}}> Learn more about my qualifications below! </h2>
        </div>
        <div className='stackable' style={{flex:'auto', width:'100%'}}>
          <DimButton name='Resume' icon='file' color='orange' message='Click here to view a PDF version of my resume' to={__PATH_PREFIX__ + '/resume.pdf'}/>
          <DimButton name='Github' icon='github' color='#6e5494' message='Click here to view my Github profile' to='https://github.com/PlumSauc3'/>
          <DimButton name='LinkedIn' icon='linkedin' color='#4875B4' message='Click here to view my LinkedIn' to='https://www.linkedin.com/in/derek-xu-06814177/'/>
        </div>
      </div>
    )
  }
}