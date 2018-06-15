import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import { Container, Header, Divider, List } from 'semantic-ui-react'
import DimButton from '../components/DimTile'

export default class About extends React.Component {
  render() {
    return (
      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', fontSize:'calc(16px + 1vw)', background:'linear-gradient(to bottom right, #4267b2, #92a2dd)', width:'100%', minHeight:'100%', paddingTop:40}}>
        <div className='textbox' style={{color:'#ededed', flex:'auto', maxWidth:700}}>
          <p> I'm an 18 year old currently studying Software Engineering at the University of Waterloo. I grew up in Ottawa, Ontario and completed the IB Diploma Programme at Colonel By SS. </p>
          <p> I love programming! I currently like working with React and C++ the most. I also love doing competitve programming contests. I am ranked in the top 20% of users on CSAcademy and in the top 100 users on the Don Mills Online Judge. </p>
          <p> Outside of technology, I've got two other major hobbies. I have always loved music! I can play several instruments but I sing and play guitar most frequently. I also love to yoyo. It may sound outdated but yoyoing has changed a lot since the '90s! Yoyoing requires technical skill, creativity and determination, it's so much fun! </p>
        </div>
        <div className='stackable' style={{flex:'auto', width:'100%'}}>
          <DimButton name='Music' icon='youtube' color='#cc181e' message='Click here to visit my music channel' to="https://www.youtube.com/derekxumusic"/>
          <DimButton name='Yoyoing' icon='instagram' color='#8a3ab9' message='Click here to see my yoyo videos on Instagram' to='https://www.instagram.com/yoderekyo/'/>
          <DimButton name='Competitive Programming' icon='winner' color='#4875B4' message='Click here to view my DMOJ profile' to='https://dmoj.ca/user/plumsauc3/'/>
        </div>
      </div>
    )
  }
}
