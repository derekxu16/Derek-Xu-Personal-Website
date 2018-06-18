import React, { Component } from "react"
import Link from "gatsby-link"
import DimTile from '../components/DimTile'
import Tile from '../components/Tile'
import TileContainer from '../components/TileContainer'
import { withPrefix } from 'gatsby-link'
import Helmet from "react-helmet"

export default class Resume extends React.Component {
  constructor() {
    super();
    this.state = { headerPadding: 0, header: '' };
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    const mobile = window.innerWidth < 720;
    let state = {style: {background:'linear-gradient(to right, #4267b2, #92a2dd)', fontSize: 22, height:'100%', width:'100%'}}
    if (mobile) {
      state.style['justifyContent'] = 'flex-start';
      this.setState(Object.assign(state,{
        headerPadding: '52px 20px 0px 20px',
        header: 'Tap on any of the tiles to learn more about my interests and lifestyle!',
      }));
    } else {
      this.setState(Object.assign(state,{
        headerPadding: '0px 20px 0px 20px',
        header: 'Hover over any of the tiles to learn more about my interests and lifestyle!',
      }));
    }
  }
  render() {
    return (
      <div className='vertical-center-container' style={this.state.style}>
        <p className="tile-container-header" style={{ padding: this.state.headerPadding }}>
          {this.state.header}
        </p>
        <TileContainer>
          <DimTile name='Education' icon='graduation' color='#e4b429' message="I'm about to begin my 2A term of SE at Waterloo. Prior to this, I completed the IB program at Colonel By SS."/>
          <DimTile name='Blog' icon='medium' color='#03a87c' message="I write about anything that I personally believe to be worth sharing on my Medium blog. Click here to check it out, hopefully you'll find an article that you enjoy!" to="https://medium.com/@derekxu"/>
          <DimTile name='Music Covers' icon='youtube' color='#cc181e' message='I love to sing and play guitar. Whenever I find the time, I like to record covers of my favourite songs on my Youtube channel!' to="https://www.youtube.com/derekxumusic"/>
          <DimTile name='Yoyoing' icon='instagram' color='#8a3ab9' message="You've most likely never seen modern yoyo play before. It's extremely fun, challenging and allows me to express my creativity. Click here to see my yoyo videos on Instagram." to='https://www.instagram.com/yoderekyo/'/>
          <DimTile name='Music Reviews' icon='music' color='#aac' message='Not only do I love performing, I also love to listen to music and analyze it. You can get a good idea of what my music taste is like by checking out my RateYourMusic profile.' to='https://rateyourmusic.com/~derekxu'/>
          <DimTile name='Competitive Programming' icon='winner' color='#5575CC' message='I enjoy solving algorithmic problems and like to compete in contests. You can view some of the problems that I have solved on my DMOJ profile.' to='https://dmoj.ca/user/plumsauc3'/>
          {/* <DimTile name='SQL' icon='database' color='#D14F52' message='I am fluent in SQL and can confidently manage relational databases.' />
          <DimTile name='Python' icon='python' color='#ffd343' message="I have experience building backends with Python using Flask and Django. I am also comfortable doing data analysis and manipulation with NumPy, SciPy and Pandas." /> */}
        </TileContainer>
      </div>
    )
  }
}