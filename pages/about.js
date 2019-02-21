import React from 'react';

import DimTile from '../components/DimTile';
import HomeButton from '../components/HomeButton';
import TileContainer from '../components/TileContainer';

export default function Resume() {
  return (
    <div className='fullscreen' style={{ display: 'flex', justifyContent: 'center' }}>
      <HomeButton />
      <TileContainer>
        <DimTile name='Education' icon='graduation' color='#e4b429' message="I'm currently in the middle of my 2A term of SE at Waterloo. Prior to this, I completed the IB program at Colonel By SS."/>
        <DimTile name='Competitive Programming' icon='winner' color='#5575CC' message='I enjoy solving algorithm problems and like to compete in contests. You can view some of the problems that I have solved on my DMOJ profile.' to='https://dmoj.ca/user/plumsauce'/>
        <DimTile name='Blog' icon='medium' color='#03a87c' message="I write about anything that I personally believe to be worth sharing on my Medium blog. Click here to check it out, hopefully you'll find an article that you enjoy!" to="https://medium.com/@derekxu"/>
        <DimTile name='Music Covers' icon='youtube' color='#cc181e' message='I love to sing and play guitar. Whenever I find the time, I like to record covers of my favourite songs on my Youtube channel!' to="https://www.youtube.com/derekxumusic"/>
        <DimTile name='Music Reviews' icon='music' color='#888ab9' message='Not only do I love performing, I also love to listen to music and analyze it. You can get a good idea of what my music taste is like by checking out my RateYourMusic profile.' to='https://rateyourmusic.com/~derekxu'/>
        <DimTile name='Yoyoing' icon='instagram' color='#8855a9' message="You've most likely never seen modern yoyo play before. It's extremely fun, challenging and allows me to express my creativity. Click here to see my yoyo videos." to='https://www.instagram.com/yoderekyo/'/>
      </TileContainer>
    </div>
  );
}